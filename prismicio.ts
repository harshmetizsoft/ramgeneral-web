import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = "ramgeneral";

/**
 * The project's Prismic Route Configuraton.
 * Learn more at https://prismic.io/docs/route-resolver-nextjs
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "category",
    path: "/:uid",
  },
  {
    type: "subcategory",
    path: "/:category/:uid",
    resolvers: {
      category: "category",
    },
  },
  {
    type: "product",
    path: "/product/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { revalidate: 3600 } }
        : { next: { revalidate: 0 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
