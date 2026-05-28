import Link from "next/link";

export interface ChatProductResult {
  uid: string;
  title: string;
  sku: string;
  price: string | null;
  imageUrl: string;
  url: string;
  category: string;
  subcategory: string;
}

interface ProductResultCardProps {
  product: ChatProductResult;
}

export function ProductResultCard({ product }: ProductResultCardProps) {
  const categoryLabel = [product.category, product.subcategory].filter(Boolean).join(" · ");

  return (
    <Link href={product.url} className="product-chat-card">
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.title}
          className="product-chat-card__img"
          width={64}
          height={64}
        />
      ) : (
        <div className="product-chat-card__img product-chat-card__img--placeholder">
          <i className="ri-lightbulb-flash-line" aria-hidden="true"></i>
        </div>
      )}
      <div className="product-chat-card__body">
        {categoryLabel ? (
          <p className="product-chat-card__meta" style={{ marginBottom: 4 }}>
            {categoryLabel}
          </p>
        ) : null}
        <p className="product-chat-card__title">{product.title}</p>
        {product.sku ? <p className="product-chat-card__meta">SKU: {product.sku}</p> : null}
        <p className="product-chat-card__price">
          {product.price ? `₹${product.price}` : "Inquire for Price"}
        </p>
        <span className="product-chat-card__link">
          View Product <i className="ri-arrow-right-line" aria-hidden="true"></i>
        </span>
      </div>
    </Link>
  );
}
