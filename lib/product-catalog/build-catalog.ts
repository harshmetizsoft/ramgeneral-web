import { unstable_cache } from "next/cache";
import { createClient } from "~/prismicio";
import { normalizeProduct } from "./normalize";
import type { ProductSummary } from "./types";

async function fetchProductCatalog(): Promise<ProductSummary[]> {
  const client = createClient();
  const products = await client
    .getAllByType("product", {
      fetchLinks: ["subcategory.title", "subcategory.category", "category.title"],
    })
    .catch(() => []);

  return products.filter((p) => p.uid).map((p) => normalizeProduct(p));
}

export const getProductCatalog = unstable_cache(
  fetchProductCatalog,
  ["product-catalog"],
  { revalidate: 3600 }
);

export async function getProductByUid(uid: string): Promise<ProductSummary | null> {
  const catalog = await getProductCatalog();
  return catalog.find((p) => p.uid === uid) ?? null;
}
