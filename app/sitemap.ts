import type { MetadataRoute } from "next";
import { pages, siteUrl } from "../content";
import { marketConfigs } from "../content/markets";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePages = pages.filter(
    (p) => p.status === "published" && p.indexable !== false
  );

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Homepages for each market
  marketConfigs.forEach(m => {
    const alternates: Record<string, string> = {};
    marketConfigs.forEach(altM => {
      alternates[altM.defaultLocale.replace('-', '_')] = `\${siteUrl}/\${altM.route}`;
    });
    alternates["x-default"] = `\${siteUrl}/en`;

    sitemapEntries.push({
      url: `\${siteUrl}/\${m.route}`,
      lastModified: new Date(), // Could be dynamic, but new Date() is fine for build time
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: alternates }
    });
  });

  // Tools
  sitemapEntries.push({
    url: `\${siteUrl}/free-tools`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "monthly",
    priority: 0.8,
  });

  // Pages
  marketConfigs.forEach(m => {
    // Only get pages that belong to the default locale of this market
    // For English markets (US, UK, IE, EN), the locale is 'en', 'en-US', etc.
    // In our simplified content model, we have 'en' pages. We will map 'en' pages to all English markets.
    const isEnMarket = m.defaultLocale.startsWith('en');
    const targetLocale = isEnMarket ? 'en' : m.defaultLocale;

    const marketPages = indexablePages.filter(p => p.locale === targetLocale);

    marketPages.forEach(p => {
      // Don't duplicate root slugs as they are handled above
      if (p.slug === "en" || p.slug === "tr" || p.slug === "pt" || p.slug === "fr" || p.slug === "it" || p.slug === "") return;

      sitemapEntries.push({
        url: `\${siteUrl}/\${m.route}/\${p.slug}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date("2026-07-18"),
        changeFrequency: "monthly",
        priority: p.slug.includes("/") ? 0.6 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
