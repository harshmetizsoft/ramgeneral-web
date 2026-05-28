import { NextResponse } from "next/server";
import { z } from "zod";
import {
  catalogPayloadForAi,
  getProductCatalog,
  searchProducts,
  type ProductSummary,
} from "~/lib/product-catalog";
import { generateProductChatReply } from "~/lib/product-chat/gemini";
import { checkRateLimit } from "~/lib/product-chat/rate-limit";

const requestSchema = z.object({
  message: z.string().min(1).max(500),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(2000),
      })
    )
    .max(10)
    .optional()
    .default([]),
});

function fallbackReply(products: ProductSummary[], query: string): string {
  if (products.length === 0) {
    return `I couldn't find products matching "${query}". Try a product name, SKU, or category—or browse our shop.`;
  }
  const lines = products.map(
    (p) =>
      `• **${p.title}**${p.sku ? ` (SKU: ${p.sku})` : ""} — ${p.price ? `₹${p.price}` : "Price on request"}`
  );
  return `Here ${products.length === 1 ? "is" : "are"} ${products.length} match${products.length === 1 ? "" : "es"} for "${query}":\n\n${lines.join("\n")}`;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSec ?? 60) } }
      );
    }

    const body = await request.json();
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { message, history } = parsed.data;
    const catalog = await getProductCatalog();
    let products = searchProducts(catalog, message, 5);

    if (products.length === 0 && message.split(/\s+/).length > 1) {
      const words = message.split(/\s+/).filter((w) => w.length > 2);
      for (const word of words) {
        products = searchProducts(catalog, word, 5);
        if (products.length > 0) break;
      }
    }

    const productsPayload = catalogPayloadForAi(products);
    let reply: string;

    if (!process.env.GEMINI_API_KEY) {
      reply = fallbackReply(products, message);
    } else {
      try {
        reply = await generateProductChatReply({
          userMessage: message,
          productsJson: JSON.stringify(productsPayload, null, 2),
          history,
        });
      } catch (geminiError) {
        console.error("Gemini error:", geminiError);
        reply = fallbackReply(products, message);
      }
    }

    return NextResponse.json({
      reply,
      products: products.map((p) => ({
        uid: p.uid,
        title: p.title,
        sku: p.sku,
        price: p.price,
        imageUrl: p.imageUrl,
        url: p.url,
        category: p.category,
        subcategory: p.subcategory,
      })),
    });
  } catch (error) {
    console.error("product-chat error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
