import {
  companyProfile,
} from "../content/company-profile";

import type {
  ContentPage,
} from "../content/types";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type JsonLdProps = {
  page?: ContentPage;

  crumbs?: BreadcrumbItem[];

  url?: string;

  language?: string;

  market?: string;
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(
    /</g,
    "\\u003c",
  );
}

function isCompanyIdentityPage(
  page: ContentPage,
) {
  const slug = page.slug.toLowerCase();

  return (
    slug === "about" ||
    slug === "company-facts" ||
    slug === "locations" ||
    slug === "yunus-emre-gurlek" ||
    slug.includes("hakkimizda") ||
    slug.includes("sirket-gercekleri") ||
    slug.includes("konumlar") ||
    slug.includes("empresa") ||
    slug.includes("factos-da-empresa") ||
    slug.includes("localizacoes") ||
    slug.includes("entreprise") ||
    slug.includes("faits-entreprise") ||
    slug.includes("emplacements") ||
    slug.includes("azienda") ||
    slug.includes("fatti-aziendali") ||
    slug.includes("sedi")
  );
}

export function JsonLd({
  page,
  crumbs,
  url,
  language,
}: JsonLdProps) {
  if (!page && !crumbs) {
    return null;
  }

  const siteUrl =
    companyProfile.website;

  const currentUrl =
    url ?? siteUrl;

  const inLanguage =
    language ?? page?.locale ?? "en";

  const organizationId =
    `${siteUrl}/#organization`;

  const founderId =
    `${siteUrl}/#founder`;

  const websiteId =
    `${siteUrl}/#website`;

  const graph:
    Record<string, unknown>[] = [];

  if (crumbs && crumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",

      "@id":
        `${currentUrl}/#breadcrumb`,

      itemListElement:
        crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,

          name: crumb.name,
          item: crumb.url,
        })),
    });
  }

  if (page) {
    const pageId =
      `${currentUrl}/#content-page`;

    graph.push({
      "@type": "WebPage",
      "@id": pageId,

      url: currentUrl,

      name: page.title,
      description: page.description,

      inLanguage,

      isPartOf: {
        "@id": websiteId,
      },

      about: {
        "@id": organizationId,
      },

      publisher: {
        "@id": organizationId,
      },

      ...(crumbs && crumbs.length > 0
        ? {
            breadcrumb: {
              "@id":
                `${currentUrl}/#breadcrumb`,
            },
          }
        : {}),
    });

    if (
      page.slug
        .toLowerCase()
        .includes("yunus-emre-gurlek")
    ) {
      graph.push({
        "@type": "ProfilePage",

        "@id":
          `${currentUrl}/#profile`,

        url: currentUrl,

        mainEntity: {
          "@id": founderId,
        },

        isPartOf: {
          "@id": websiteId,
        },
      });
    } else if (
      page.type === "service"
    ) {
      graph.push({
        "@type": "Service",

        "@id":
          `${currentUrl}/#service`,

        name: page.title,
        description:
          page.description,

        url: currentUrl,

        provider: {
          "@id": organizationId,
        },

        areaServed: {
          "@type": "AdministrativeArea",

          name:
            "Türkiye, Portugal, Europe and international markets",
        },

        serviceType:
          page.title,

        audience: {
          "@type":
            "BusinessAudience",

          audienceType:
            "Startups, SMEs and international organizations",
        },
      });
    } else if (
      page.type === "article" ||
      page.type === "research" ||
      page.type === "local-guide"
    ) {
      graph.push({
        "@type":
          page.type === "research"
            ? "TechArticle"
            : "Article",

        "@id":
          `${currentUrl}/#article`,

        headline: page.title,

        description:
          page.description,

        url: currentUrl,

        inLanguage,

        author: {
          "@type": "Person",
          "@id": founderId,
          name:
            companyProfile.founder.name,
        },

        publisher: {
          "@id": organizationId,
        },

        datePublished:
          page.publishedAt,

        dateModified:
          page.updatedAt ??
          page.publishedAt,

        mainEntityOfPage: {
          "@id": pageId,
        },
      });
    } else if (
      isCompanyIdentityPage(page)
    ) {
      graph.push({
        "@type":
          page.slug
            .toLowerCase()
            .includes("yunus-emre-gurlek")
            ? "ProfilePage"
            : "AboutPage",

        "@id":
          `${currentUrl}/#about-page`,

        url: currentUrl,

        name: page.title,

        description:
          page.description,

        about: {
          "@id": organizationId,
        },

        mainEntity: {
          "@id": organizationId,
        },
      });
    }

    if (
      page.faq &&
      page.faq.length > 0
    ) {
      graph.push({
        "@type": "FAQPage",

        "@id":
          `${currentUrl}/#faq`,

        mainEntity:
          page.faq.map((item) => ({
            "@type": "Question",

            name: item.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: item.answer,
            },
          })),
      });
    }
  }

  if (graph.length === 0) {
    return null;
  }

  const schema = {
    "@context":
      "https://schema.org",

    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd(schema),
      }}
    />
  );
}