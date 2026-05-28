import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatHistoryMessage } from "~/lib/product-catalog";

const SYSTEM_INSTRUCTION = `You are the LED Product Assistant for RAM General Supply, a commercial lighting company (installation, rebates, and energy-efficient upgrades).
Answer ONLY using the product data provided in each request. Never invent SKUs, prices, or product names.
If no products match, politely say so and suggest browsing the shop or requesting a free quote at /contact.
Keep replies concise (under 120 words unless listing multiple products), professional, and aligned with a B2B lighting supplier tone.
When mentioning products, use their exact title. Use "Inquire for Price" when price is not listed.
Be helpful and focus on commercial LED lighting solutions.`;

export async function generateProductChatReply(params: {
  userMessage: string;
  productsJson: string;
  history: ChatHistoryMessage[];
}): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const modelName = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: SYSTEM_INSTRUCTION,
  });

  const historyLines = params.history
    .slice(-6)
    .map((m) => `${m.role === "user" ? "Customer" : "Assistant"}: ${m.content}`)
    .join("\n");

  const prompt = `${historyLines ? `Recent conversation:\n${historyLines}\n\n` : ""}Customer question: ${params.userMessage}

Matching products from our catalog (JSON):
${params.productsJson}

Reply to the customer using only this catalog data.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text.trim() || "I could not generate a response. Please try again.";
}
