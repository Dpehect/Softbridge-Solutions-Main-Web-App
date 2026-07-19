import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyProfile,
  publicProducts,
  unrelatedSoftbridgeEntities,
  verifiedCompanyLocations,
} from "../content/company-profile";

type CompanyEntitySchemaProps = {
  market?: string;
  currentUrl?: string;
  language?: string;
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function CompanyEntitySchema({
  market,
  currentUrl,
  language = "en",
}: CompanyEntitySchemaProps) {
  const siteUrl = companyProfile.website;

  const organizationId = `${siteUrl}/#organization`;
  const founderId = `${siteUrl}/#founder`;
  const websiteId = `${siteUrl}/#website`;
  const productsId = `${siteUrl}/#products`;

  const pageUrl =
    currentUrl ??
    (market ? `${siteUrl}/${market}` : siteUrl);

  const selectedMarket = market
    ? companyMarkets.find(
        (item) => item.route === market,
      )
    : undefined;

  const locationSchemas =
    verifiedCompanyLocations.map((location) => ({
      "@type": "Place",
      "@id": `${siteUrl}/#location-${location.id}`,

      name:
        location.type === "founding-location"
          ? `SoftBridge Solutions founding location — ${location.city}`
          : `SoftBridge Solutions correspondence location — ${location.city}`,

      description: location.description,

      address: {
        "@type": "PostalAddress",

        ...(location.address?.streetAddress
          ? {
              streetAddress:
                location.address.streetAddress,
            }
          : {}),

        addressLocality:
          location.address?.addressLocality ??
          location.city,

        addressCountry: location.countryCode,
      },
    }));

  const organizationSchema = {
    "@type": [
      "Organization",
      "SoftwareCompany",
      "ProfessionalService",
    ],

    "@id": organizationId,

    name: companyProfile.name,
    legalName: companyProfile.legalName,

    alternateName:
      companyProfile.alternateNames,

    url: siteUrl,
    email: companyProfile.email,

    slogan: companyProfile.slogan,

    description: companyProfile.description,

    disambiguatingDescription:
      companyProfile.disambiguatingDescription,

    founder: {
      "@id": founderId,
    },

    foundingLocation: {
      "@id": `${siteUrl}/#location-adana`,
    },

    location: verifiedCompanyLocations.map(
      (location) => ({
        "@id": `${siteUrl}/#location-${location.id}`,
      }),
    ),

    areaServed: companyMarkets.map(
      (companyMarket) => ({
        "@type": "Country",
        name: companyMarket.country,
        identifier: companyMarket.countryCode,
      }),
    ),

    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}${companyProfile.logoPath}`,
      contentUrl:
        `${siteUrl}${companyProfile.logoPath}`,
      caption: `${companyProfile.name} logo`,
    },

    image: {
      "@type": "ImageObject",
      url:
        `${siteUrl}${companyProfile.socialImagePath}`,
      width: 1200,
      height: 630,
    },

    sameAs: [
      companyProfile.companyLinkedin,
      companyProfile.github,
      companyProfile.repository,
      companyProfile.founder.linkedin,
      companyProfile.founder.github,
    ],

    knowsAbout: [
      ...companyProfile.capabilities,
      ...companyProfile.industries,
    ],

    contactPoint: companyMarkets.map(
      (companyMarket) => ({
        "@type": "ContactPoint",

        contactType:
          `${companyMarket.country} market enquiries`,

        email: companyProfile.email,

        areaServed: {
          "@type": "Country",
          name: companyMarket.country,
          identifier: companyMarket.countryCode,
        },

        availableLanguage: [
          companyMarket.locale,
        ],
      }),
    ),

    subjectOf: [
      {
        "@type": "WebPage",
        url: `${siteUrl}/en/company-facts`,
        name:
          "SoftBridge Solutions Company Facts",
      },

      {
        "@type": "DigitalDocument",
        url: `${siteUrl}/llms.txt`,
        name:
          "SoftBridge Solutions LLM Information",
      },

      {
        "@type": "DataCatalog",
        url:
          `${siteUrl}/.well-known/company-profile.json`,

        name:
          "SoftBridge Solutions Machine-Readable Company Profile",
      },

      {
        "@type": "DataCatalog",
        url:
          `${siteUrl}/.well-known/entity-disambiguation.json`,

        name:
          "SoftBridge Solutions Entity Disambiguation Record",
      },

      {
        "@type": "WebAPI",
        url: `${siteUrl}/api/entity-identity`,
        name:
          "SoftBridge Solutions Entity Identity API",
      },
    ],
  };

  const founderSchema = {
    "@type": "Person",
    "@id": founderId,

    name: companyProfile.founder.name,

    jobTitle:
      companyProfile.founder.jobTitle,

    url:
      `${siteUrl}${companyProfile.founder.profilePath}`,

    worksFor: {
      "@id": organizationId,
    },

    sameAs: [
      companyProfile.founder.github,
      companyProfile.founder.linkedin,
    ],

    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Next.js",
      "React",
      "TypeScript",
      "SaaS Development",
      "Web Application Development",
      "Mobile Application Development",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,

    url: siteUrl,
    name: companyProfile.name,

    alternateName:
      companyProfile.alternateNames,

    description:
      companyProfile.shortDescription,

    publisher: {
      "@id": organizationId,
    },

    inLanguage: companyMarkets.map(
      (companyMarket) => companyMarket.locale,
    ),

    potentialAction: {
      "@type": "SearchAction",

      target: {
        "@type": "EntryPoint",
        urlTemplate:
          `${siteUrl}/search?q={search_term_string}`,
      },

      "query-input":
        "required name=search_term_string",
    },
  };

  const productsSchema = {
    "@type": "ItemList",
    "@id": productsId,

    name:
      "SoftBridge Solutions Public Software Products",

    description:
      "Publicly accessible products and technical projects developed under the SoftBridge Solutions identity.",

    numberOfItems: publicProducts.length,

    itemListElement: publicProducts.map(
      (product, index) => ({
        "@type": "ListItem",
        position: index + 1,

        item: {
          "@type": [
            "SoftwareApplication",
            "WebApplication",
          ],

          "@id":
            `${siteUrl}/#product-${product.slug}`,

          name: product.name,
          description: product.description,

          applicationCategory:
            product.category,

          operatingSystem: "Web",

          url: product.liveUrl,

          codeRepository:
            product.repositoryUrl,

          author: {
            "@id": organizationId,
          },

          creator: {
            "@id": organizationId,
          },
        },
      }),
    ),
  };

  const marketPresenceSchema = {
    "@type": "ItemList",

    "@id":
      `${siteUrl}/#international-market-presence`,

    name:
      "SoftBridge Solutions International Market Presence",

    description:
      companyProfile.operatingModel,

    numberOfItems: companyMarkets.length,

    itemListElement: companyMarkets.map(
      (companyMarket, index) => ({
        "@type": "ListItem",
        position: index + 1,

        item: {
          "@type": "Service",

          "@id":
            `${siteUrl}/#market-${companyMarket.route}`,

          name:
            `SoftBridge Solutions — ${companyMarket.country}`,

          description:
            companyMarket.positioning,

          serviceType:
            companyMarket.role,

          provider: {
            "@id": organizationId,
          },

          areaServed: {
            "@type": "Country",
            name: companyMarket.country,
            identifier:
              companyMarket.countryCode,
          },

          url:
            `${siteUrl}/${companyMarket.route}`,
        },
      }),
    ),
  };

  const webpageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: selectedMarket
      ? `${companyProfile.name} — ${selectedMarket.country}`
      : companyProfile.name,

    description:
      selectedMarket?.positioning ??
      companyProfile.description,

    inLanguage:
      selectedMarket?.locale ?? language,

    dateModified: COMPANY_LAST_UPDATED,

    isPartOf: {
      "@id": websiteId,
    },

    about: {
      "@id": organizationId,
    },

    mainEntity: {
      "@id": organizationId,
    },

    keywords:
      selectedMarket?.discoveryTopics,

    significantLink: [
      `${siteUrl}/llms.txt`,

      `${siteUrl}/.well-known/company-profile.json`,

      `${siteUrl}/.well-known/entity-disambiguation.json`,

      `${siteUrl}/api/entity-identity`,
    ],

    mentions:
      unrelatedSoftbridgeEntities.map(
        (entity, index) => ({
          "@type": "Organization",

          "@id":
            `${pageUrl}/#unrelated-softbridge-${index + 1}`,

          name: entity.name,

          description:
            entity.clarification,
        }),
      ),
  };

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      organizationSchema,
      founderSchema,
      websiteSchema,
      productsSchema,
      marketPresenceSchema,
      ...locationSchemas,
      webpageSchema,
    ],
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