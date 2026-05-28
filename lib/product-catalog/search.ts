import type { ProductSummary } from "./types";

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function scoreProduct(product: ProductSummary, tokens: string[], rawQuery: string): number {
  const q = rawQuery.toLowerCase().trim();
  let score = 0;

  if (q && product.sku.toLowerCase() === q) score += 100;
  if (q && product.title.toLowerCase() === q) score += 90;
  if (q && product.title.toLowerCase().includes(q)) score += 50;
  if (q && product.sku.toLowerCase().includes(q)) score += 45;

  for (const token of tokens) {
    if (product.title.toLowerCase().includes(token)) score += 12;
    if (product.sku.toLowerCase().includes(token)) score += 10;
    if (product.category.toLowerCase().includes(token)) score += 6;
    if (product.subcategory.toLowerCase().includes(token)) score += 6;
    if (product.searchText.includes(token)) score += 3;
  }

  return score;
}

export function searchProducts(
  catalog: ProductSummary[],
  query: string,
  limit = 5
): ProductSummary[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) return [];

  return catalog
    .map((product) => ({ product, score: scoreProduct(product, tokens, trimmed) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ product }) => product);
}

export function catalogPayloadForAi(products: ProductSummary[]) {
  return products.map((p) => ({
    uid: p.uid,
    title: p.title,
    sku: p.sku,
    price: p.price ? `₹${p.price}` : "Inquire for price",
    category: p.category,
    subcategory: p.subcategory,
    description: p.description,
    features: p.features,
    url: p.url,
  }));
}
