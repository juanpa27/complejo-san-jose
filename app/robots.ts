import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_PRODUCTION_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://complejosanjose.com.py";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
