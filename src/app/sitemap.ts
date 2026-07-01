import { MetadataRoute } from "next";
import { products } from "@/const/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jayukhiladi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const routes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Product pages
  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}
