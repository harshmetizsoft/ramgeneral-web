import BreadcumbEleven from "~/sections/shop_page/Shop/BreadcumbEleven";
import DynamicProductGrid from "~/sections/shop_page/Shop/Product/DynamicProductGrid";
import Scroll from "~/sections/shared/Scroll";
import { createClient } from "~/prismicio";
import { notFound } from "next/navigation";

import * as prismic from "@prismicio/client";

export default async function SubcategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string, subcategory: string }> 
}) {
  const { subcategory: subcategoryUid } = await params;
  const client = createClient();

  // Fetch the subcategory document to get its title and parent category
  const subcategory = await client.getByUID("subcategory", subcategoryUid, {
    fetchLinks: ["category.title", "category.uid"],
  }).catch(() => null);

  if (!subcategory) {
    notFound();
  }

  // Fetch all products that belong to this subcategory
  const products = await client.getAllByType("product", {
    filters: [
      prismic.filter.at("my.product.category_and_sub_category", subcategory.id),
    ],
  }).catch((err) => {
    console.error("Prismic Fetch Error:", err);
    return [];
  });

  const categoryName = subcategory.data.category?.data?.title || "Category";
  const subcategoryName = subcategory.data.title || "Subcategory";

  return (
    <div>
      <BreadcumbEleven />
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={`/${subcategory.data.category.uid}`}>{categoryName}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{subcategoryName}</li>
          </ol>
        </nav>
      </div>
      <DynamicProductGrid 
        products={products} 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
      />
      <Scroll />
    </div>
  );
}
