import type { ProductSummary } from "./types";

function plainDescription(description: unknown): string {
  if (!description) return "";
  if (typeof description === "string") return description;
  if (Array.isArray(description)) {
    return description
      .map((block) => {
        if (typeof block === "object" && block !== null && "text" in block) {
          return String((block as { text?: string }).text ?? "");
        }
        return "";
      })
      .join(" ")
      .trim();
  }
  return "";
}

export function normalizeProduct(product: {
  uid: string | null;
  data: {
    title?: string | null;
    sku?: string | null;
    price?: string | number | null;
    description?: unknown;
    image?: { url?: string | null } | null;
    features?: { name?: string | null; value?: string | null }[] | null;
    category_and_sub_category?: {
      data?: {
        title?: string;
        category?: { data?: { title?: string } };
      };
    } | null;
  };
}): ProductSummary {
  const uid = product.uid ?? "";
  const subcategoryData = product.data.category_and_sub_category?.data as
    | { title?: string; category?: { data?: { title?: string } } }
    | undefined;

  const title = product.data.title ?? "Untitled product";
  const sku = product.data.sku ?? "";
  const price =
    product.data.price != null && product.data.price !== ""
      ? String(product.data.price)
      : null;
  const description = plainDescription(product.data.description);
  const category = subcategoryData?.category?.data?.title ?? "";
  const subcategory = subcategoryData?.title ?? "";
  const features =
    product.data.features?.map((f) => ({
      name: f.name ?? "",
      value: f.value ?? "",
    })) ?? [];

  const featureText = features.map((f) => `${f.name} ${f.value}`).join(" ");

  const searchText = [title, sku, category, subcategory, description, featureText]
    .join(" ")
    .toLowerCase();

  return {
    uid,
    title,
    sku,
    price,
    description: description.slice(0, 600),
    features,
    category,
    subcategory,
    imageUrl: product.data.image?.url ?? "",
    url: `/product/${uid}`,
    searchText,
  };
}
