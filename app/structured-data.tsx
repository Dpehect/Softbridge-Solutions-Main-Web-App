import { siteUrl, realProjects } from "../content";
import type { ContentPage } from "../content/types";

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

const serviceAreas = [
  {
    "@type": "Country",
    name: "Türkiye",
  },
  {
    "@type": "Country",
    name: "Portugal",
  },
  {
    "@type": "Country",
    name: "United States",
  },
  {
    "@type": "Country",
    name: "United Kingdom",
  },
  {
    "@type": "Country",
    name: "Ireland",
  },
  {
    "@type": "Country",
    name: "France",
  },
  {
    "@type": "Country",
    name: "Italy",
  },
];

export function JsonLd({
  page,
  crumbs,
  url,
  language,
  market,
}: JsonLdProps) {
  const currentUrl = url ?? siteUrl;
  const inLanguage = language ?? page?.locale ?? "en";

  const organizationId = `${siteUrl}/#organization`;
  const founderId = `${siteUrl}/#yunus-emre-gurlek`;
  const websiteId = `${siteUrl}/#website`;

  const isTurkish = inLanguage === "tr";

  const organizationSchema = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,

    name: "SoftBridge Solutions",

    alternateName: [
      "SoftBridge Solutions",
      "SoftBridge",
    ],

    url: siteUrl,

    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      caption: "SoftBridge Solutions Logo",
    },

    image: `${siteUrl}/og.png`,

    slogan: isTurkish
      ? "Sınır tanımayan teknoloji"
      : "Technology without borders",

    description: isTurkish
      ? "Adana kökenli SoftBridge Solutions; yapay zekâ ajanları, özel yazılım, web uygulamaları, mobil uygulamalar ve SaaS platformları geliştiren teknoloji şirketidir."
      : "AI-first technology company founded in Adana, Türkiye, developing AI agents, custom software, web applications, mobile products and SaaS platforms.",

    founder: {
      "@id": founderId,
    },

    foundingLocation: {
      "@type": "Place",
      name: "Adana, Türkiye",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Adana",
        addressCountry: "TR",
      },
    },

    location: [
      {
        "@type": "Place",
        name: "Adana, Türkiye",
        description:
          "Founding location and engineering origin of SoftBridge Solutions.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Adana",
          addressCountry: "TR",
        },
      },

      {
        "@type": "Place",
        name: "Cascais, Portugal",
        description:
          "Registered correspondence and Portuguese market contact location.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Bordalo Pinheiro 25",
          addressLocality: "Cascais",
          addressCountry: "PT",
        },
      },
    ],

    areaServed: serviceAreas,

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "General enquiries",
        email: "contact@softbridge.solutions",
        availableLanguage: [
          "English",
          "Turkish",
          "Portuguese",
        ],
        areaServed: serviceAreas,
      },

      {
        "@type": "ContactPoint",
        contactType: "Türkiye market contact",
        email: "contact@softbridge.solutions",
        availableLanguage: [
          "Turkish",
          "English",
        ],
        areaServed: {
          "@type": "Country",
          name: "Türkiye",
        },
      },

      {
        "@type": "ContactPoint",
        contactType: "Portugal market contact",
        email: "contact@softbridge.solutions",
        availableLanguage: [
          "Portuguese",
          "English",
        ],
        areaServed: {
          "@type": "Country",
          name: "Portugal",
        },
      },
    ],

    email: "contact@softbridge.solutions",

    sameAs: [
      "https://github.com/Dpehect",
      "https://www.linkedin.com/company/softbridge-solutions",
      "https://github.com/Dpehect/SoftBridge-Solutions-Main-Web-App",
    ],

    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Multi-Agent Systems",
      "Enterprise AI",
      "Generative AI",
      "Retrieval-Augmented Generation",
      "Custom Software Development",
      "Web Application Development",
      "Mobile Application Development",
      "SaaS Development",
      "Cloud Applications",
      "Workflow Automation",
    ],
  };

  const founderSchema = {
    "@type": "Person",
    "@id": founderId,

    name: "Yunus Emre Gürlek",

    url: `${siteUrl}/en/yunus-emre-gurlek`,

    jobTitle: "Founder & Owner",

    description:
      "Founder and owner of SoftBridge Solutions and software engineer specializing in full-stack software architectures, Next.js applications and artificial intelligence systems.",

    worksFor: {
      "@id": organizationId,
    },

    sameAs: [
      "https://github.com/Dpehect",
      "https://www.linkedin.com/in/yunusemregurlek",
    ],

    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "Artificial Intelligence",
      "AI Agents",
      "SaaS Development",
      "Mobile Application Development",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,

    url: siteUrl,
    name: "SoftBridge Solutions",

    description:
      "Official website of SoftBridge Solutions, an AI and software engineering company founded in Adana, Türkiye.",

    publisher: {
      "@id": organizationId,
    },

    inLanguage,

    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const graph: Record<string, unknown>[] = [
    organizationSchema,
    founderSchema,
    websiteSchema,
  ];

  if (market) {
    const marketNames: Record<string, string> = {
      en: "Global",
      tr: "Türkiye",
      pt: "Portugal",
      us: "United States",
      uk: "United Kingdom",
      ie: "Ireland",
      fr: "France",
      it: "Italy",
    };

    graph.push({
      "@type": "WebPage",
      "@id": `${currentUrl}/#market-page`,
      url: currentUrl,
      name:
        page?.title ??
        `SoftBridge Solutions — ${marketNames[market] ?? "Global"}`,
      description:
        page?.description ??
        organizationSchema.description,
      inLanguage,
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": organizationId,
      },
      mainEntity: {
        "@id": organizationId,
      },
    });
  }

  if (page) {
    const pageId = `${currentUrl}/#webpage`;

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
    });

    const slug = page.slug;

    if (slug === "yunus-emre-gurlek") {
      graph.push({
        "@type": "ProfilePage",
        "@id": `${currentUrl}/#profile`,
        url: currentUrl,

        mainEntity: {
          "@id": founderId,
        },

        isPartOf: {
          "@id": websiteId,
        },
      });
    } else if (
      slug === "about" ||
      slug === "company-facts" ||
      slug.includes("hakkimizda") ||
      slug.includes("empresa") ||
      slug.includes("entreprise") ||
      slug.includes("azienda")
    ) {
      graph.push({
        ...organizationSchema,
        mainEntityOfPage: {
          "@id": pageId,
        },
      });
    } else if (
      slug === "projects" ||
      slug.includes("projeler") ||
      slug.includes("projetos") ||
      slug.includes("projets") ||
      slug.includes("progetti")
    ) {
      const projects =
        realProjects.filter(
          (project) => project.locale === inLanguage,
        ).length > 0
          ? realProjects.filter(
              (project) => project.locale === inLanguage,
            )
          : realProjects.filter(
              (project) => project.locale === "en",
            );

      graph.push({
        "@type": "ItemList",
        "@id": `${currentUrl}/#project-list`,
        name: "SoftBridge Solutions Projects",
        numberOfItems: projects.length,

        itemListElement: projects.map(
          (project, index) => ({
            "@type": "ListItem",
            position: index + 1,

            item: {
              "@type": [
                "SoftwareApplication",
                "WebApplication",
              ],

              "@id": `${currentUrl}/#project-${project.slug}`,

              name: project.name,
              url: project.homepageUrl,

              description: project.problem,

              applicationCategory:
                project.category.includes("AI")
                  ? "ArtificialIntelligenceApplication"
                  : "DeveloperApplication",

              operatingSystem: "Web",

              browserRequirements:
                "Requires an HTML5-compatible browser",

              releaseDate: project.launchDate,

              author: {
                "@id": organizationId,
              },

              creator: {
                "@id": organizationId,
              },
            },
          }),
        ),
      });
    } else if (page.type === "service") {
      graph.push({
        "@type": "Service",
        "@id": `${currentUrl}/#service`,

        name: page.title,
        description: page.description,

        url: currentUrl,

        provider: {
          "@id": organizationId,
        },

        areaServed: serviceAreas,

        serviceType: page.title,

        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Startups, SMEs and international organizations",
        },
      });
    } else if (
      page.type === "article" ||
      page.type === "research"
    ) {
      graph.push({
        "@type":
          page.type === "research"
            ? "TechArticle"
            : "Article",

        "@id": `${currentUrl}/#article`,

        headline: page.title,
        description: page.description,

        inLanguage,

        author: {
          "@id": organizationId,
        },

        publisher: {
          "@id": organizationId,
        },

        datePublished:
          page.publishedAt ?? "2026-07-18",

        dateModified:
          page.updatedAt ??
          page.publishedAt ??
          "2026-07-18",

        mainEntityOfPage: {
          "@id": pageId,
        },

        isPartOf: {
          "@id": websiteId,
        },
      });
    }

    if (page.faq && page.faq.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${currentUrl}/#faq`,

        mainEntity: page.faq.map((faqItem) => ({
          "@type": "Question",
          name: faqItem.question,

          acceptedAnswer: {
            "@type": "Answer",
            text: faqItem.answer,
          },
        })),
      });
    }
  }

  if (crumbs && crumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}/#breadcrumb`,

      itemListElement: crumbs.map(
        (crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        }),
      ),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
