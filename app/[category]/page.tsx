import BreadcumbEleven from "~/sections/shop_page/Shop/BreadcumbEleven";
import DynamicProductGrid from "~/sections/shop_page/Shop/Product/DynamicProductGrid";
import Scroll from "~/sections/shared/Scroll";
import { createClient } from "~/prismicio";
import { notFound } from "next/navigation";

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category: categoryUid } = await params;
  const client = createClient();

  // Fetch the category document
  const category = await client.getByUID("category", categoryUid).catch(() => null);

  if (!category) {
    notFound();
  }

  // Fetch all products that belong to this category (filtered by category relationship via subcategories)
  // Note: Since products point to subcategories, we fetch all products
  // and then filter in memory or via a more complex query.
  // For now, let's fetch products where the linked subcategory's category is this category.
  const products = await client.getAllByType("product", {
    fetchLinks: ["subcategory.category"],
  }).catch(() => []);

  const filteredProducts = products.filter((p: any) => 
    p.data.category_and_sub_category?.data?.category?.id === category.id
  );

  const categoryName = category.data.title || "Category";

  return (
    <div>
      <BreadcumbEleven />
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">{categoryName}</li>
          </ol>
        </nav>
      </div>
      <DynamicProductGrid 
        products={filteredProducts} 
        categoryName={categoryName}
        subcategoryName="All Category Products"
      />
      <Scroll />
    </div>
  );
}
