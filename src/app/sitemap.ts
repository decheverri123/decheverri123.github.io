import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://decheverri123.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/resume",
    "/contact",
    "/music",
    "/apps/meditatio",
    "/apps/sparking-teams",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
