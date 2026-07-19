import type { MetadataRoute } from "next";
import { SOFTBRIDGE_CANONICAL_URL } from "../content/company-authority";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = ["en", "tr", "pt", "fr", "it", "us", "uk", "ie"].map(
    (route) => ({
      url: `${SOFTBRIDGE_CANONICAL_URL}/${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "en" ? 1 : 0.8,
    })
  );

  const authorityRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SOFTBRIDGE_CANONICAL_URL}/company`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SOFTBRIDGE_CANONICAL_URL}/press`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [...localizedRoutes, ...authorityRoutes];
}
