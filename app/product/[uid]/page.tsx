import BreadcumbEleven from "~/sections/shop_page/Shop/BreadcumbEleven";
import Scroll from "~/sections/shared/Scroll";
import { createClient } from "~/prismicio";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductDetailsContent from "~/sections/shop_page/Product/ProductDetailsContent";

export default async function ProductDetailsPage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  const client = createClient();

  const product = await client.getByUID("product", uid, {
    fetchLinks: [
      "subcategory.title",
      "subcategory.category",
      "category.title"
    ],
  }).catch(() => null);

  if (!product) {
    notFound();
  }

  const subcategory = product.data.category_and_sub_category?.data;
  const category = subcategory?.category?.data;

  const categoryName = category?.title || "Category";
  const subcategoryName = subcategory?.title || "Subcategory";
  const productName = product.data.title || "Product";

  return (
    <div>
      <BreadcumbEleven />
      
      <section className="space-top space-extra-bottom">
        <div className="container">
          {/* Product Header / Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">{categoryName}</Link></li>
              <li className="breadcrumb-item"><Link href={`/subcategory/${product.data.category_and_sub_category.uid}`}>{subcategoryName}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{productName}</li>
            </ol>
          </nav>

          <ProductDetailsContent 
            product={product} 
            categoryName={categoryName} 
            subcategoryName={subcategoryName} 
          />
        </div>
      </section>
      
      <Scroll />
    </div>
  );
}
