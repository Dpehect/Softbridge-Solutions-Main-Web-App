import type { MetadataRoute } from "next";

import { pages, siteUrl } from "../content";

import {
  marketConfigs,
  routeTranslations,
} from "../content/markets";

const DEFAULT_LAST_MODIFIED = new Date("2026-07-19");

type ChangeFrequency =
  NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function getLocalizedSlug(
  originalSlug: string,
  marketRoute: string,
): string {
  if (marketRoute === "en") {
    return originalSlug;
  }

  return (
    routeTranslations[originalSlug]?.[marketRoute] ??
    originalSlug
  );
}

function getPageLocaleForMarket(
  defaultLocale: string,
): string {
  if (defaultLocale.startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}

function createHomepageAlternates(): Record<
  string,
  string
> {
  const languages: Record<string, string> = {};

  for (const market of marketConfigs) {
    languages[market.defaultLocale] =
      `${siteUrl}/${market.route}`;
  }

  languages["x-default"] = `${siteUrl}/en`;

  return languages;
}

function createPageAlternates(
  originalSlug: string,
): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const market of marketConfigs) {
    const localizedSlug = getLocalizedSlug(
      originalSlug,
      market.route,
    );

    languages[market.defaultLocale] =
      `${siteUrl}/${market.route}/${localizedSlug}`;
  }

  languages["x-default"] =
    `${siteUrl}/en/${originalSlug}`;

  return languages;
}

function getChangeFrequency(
  pageType: string,
): ChangeFrequency {
  if (
    pageType === "article" ||
    pageType === "research"
  ) {
    return "monthly";
  }

  if (pageType === "service") {
    return "monthly";
  }

  return "yearly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const indexablePages = pages.filter(
    (page) =>
      page.status === "published" &&
      page.indexable !== false,
  );

  const homepageAlternates =
    createHomepageAlternates();

  for (const market of marketConfigs) {
    sitemapEntries.push({
      url: `${siteUrl}/${market.route}`,
      lastModified: DEFAULT_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,

      alternates: {
        languages: homepageAlternates,
      },
    });
  }

  sitemapEntries.push({
    url: `${siteUrl}/free-tools`,
    lastModified: DEFAULT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  for (const market of marketConfigs) {
    const targetLocale = getPageLocaleForMarket(
      market.defaultLocale,
    );

    const marketPages = indexablePages.filter(
      (page) => page.locale === targetLocale,
    );

    for (const page of marketPages) {
      const isHomepage =
        page.slug === "" ||
        page.slug === "en" ||
        page.slug === "tr" ||
        page.slug === "pt" ||
        page.slug === "fr" ||
        page.slug === "it";

      if (isHomepage) {
        continue;
      }

      const localizedSlug = getLocalizedSlug(
        page.slug,
        market.route,
      );

      const pageUrl =
        `${siteUrl}/${market.route}/${localizedSlug}`;

      const isService = page.type === "service";

      sitemapEntries.push({
        url: pageUrl,

        lastModified: page.updatedAt
          ? new Date(page.updatedAt)
          : DEFAULT_LAST_MODIFIED,

        changeFrequency: getChangeFrequency(
          page.type,
        ),

        priority: isService
          ? 0.9
          : page.slug.includes("/")
            ? 0.6
            : 0.8,

        alternates: {
          languages: createPageAlternates(
            page.slug,
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
