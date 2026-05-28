export interface ProductFeature {
  name: string;
  value: string;
}

export interface ProductSummary {
  uid: string;
  title: string;
  sku: string;
  price: string | null;
  description: string;
  features: ProductFeature[];
  category: string;
  subcategory: string;
  imageUrl: string;
  url: string;
  searchText: string;
}

export interface ChatHistoryMessage {
  role: "user" | "assistant";
  content: string;
}
