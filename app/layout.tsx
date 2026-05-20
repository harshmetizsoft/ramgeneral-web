


export const metadata = {
  title: "RAM General Supply | Expert LED Lighting Solutions",
  description: "Lighting the way to a brighter, more sustainable future for businesses everywhere. Expert LED installation, rebate management, and maintenance.",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.png" },
    ],
    shortcut: [
      { rel: "shortcut icon", url: "/favicon.png" },
    ],
  },
};
import "./globals.css";
import HeaderTwo from "~/sections/shared/Header/HeaderTwo";
import FooterTwo from "~/sections/shared/Footer/FooterTwo";
import { createClient } from "~/prismicio";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  let menuData: any[] = [];

  try {
    const categories = await client.getAllByType("category").catch(() => []);
    const subcategories = await client.getAllByType("subcategory").catch(() => []);
    const products = await client.getAllByType("product").catch(() => []);

    console.log(`Prismic: Found ${categories.length} categories, ${subcategories.length} subcategories, ${products.length} products`);

    menuData = categories.map((cat) => {
      const catSubs = subcategories.filter(
        (sub: any) =>
          sub.data && sub.data.category && sub.data.category.id === cat.id
      );
      return {
        ...cat,
        subcategories: catSubs.map((sub: any) => {
          return {
            ...sub,
            products: products.filter(
              (prod: any) =>
                prod.data &&
                prod.data.category_and_sub_category &&
                prod.data.category_and_sub_category.id === sub.id
            ),
          };
        }),
      };
    });
  } catch (error) {
    console.error("Error fetching Prismic data:", error);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HeaderTwo menuData={menuData} />
        {children}
        <FooterTwo />
      </body>
    </html>
  );
}


