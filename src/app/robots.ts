import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/apps/rnc", "/catalina-rosa"],
    },
    sitemap: "https://decheverri123.github.io/sitemap.xml",
  };
}
