import type { MetadataRoute } from "next";
import { pages, siteUrl } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePages = pages.filter(
    (p) => p.status === "published" && p.indexable !== false
  );

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tr`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/free-tools`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  indexablePages.forEach((p) => {
    if (p.slug === "tr" || p.slug === "") return;

    sitemapEntries.push({
      url: `${siteUrl}/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: p.slug.includes("/") ? 0.6 : 0.8,
    });
  });

  return sitemapEntries;
}
