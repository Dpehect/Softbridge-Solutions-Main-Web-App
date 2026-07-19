import {
  canonicalCompanyIdentity,
  internationalOperatingModel,
  unrelatedSoftbridgeEntities,
} from "../content/entity-identity";

type EntityIdentitySchemaProps = {
  currentUrl?: string;
  language?: string;
};

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function EntityIdentitySchema({
  currentUrl,
  language = "en",
}: EntityIdentitySchemaProps) {
  const siteUrl = canonicalCompanyIdentity.url;
  const organizationId = `${siteUrl}/#organization`;
  const founderId = `${siteUrl}/#founder`;
  const identityPageUrl =
    currentUrl ?? `${siteUrl}/en/company-identity`;

  const graph = {
    "@context": "https://schema.org",

    "@graph": [
      {
        ...canonicalCompanyIdentity,

        "@id": organizationId,

        founder: {
          "@id": founderId,
        },

        mainEntityOfPage: {
          "@id": `${identityPageUrl}/#webpage`,
        },

        subjectOf: [
          {
            "@type": "WebPage",
            url: `${siteUrl}/en/company-facts`,
            name: "SoftBridge Solutions Company Facts",
          },
          {
            "@type": "DigitalDocument",
            url: `${siteUrl}/llms.txt`,
            name: "SoftBridge Solutions LLM Information",
          },
          {
            "@type": "DataCatalog",
            url: `${siteUrl}/.well-known/company-profile.json`,
            name: "SoftBridge Solutions Machine-Readable Profile",
          },
          {
            "@type": "DataCatalog",
            url: `${siteUrl}/.well-known/entity-disambiguation.json`,
            name: "SoftBridge Solutions Entity Disambiguation Record",
          },
        ],
      },

      {
        "@type": "Person",
        "@id": founderId,

        name: "Yunus Emre Gürlek",
        jobTitle: "Founder and Software Engineer",

        url: `${siteUrl}/en/yunus-emre-gurlek`,

        worksFor: {
          "@id": organizationId,
        },

        sameAs: [
          "https://github.com/Dpehect",
          "https://www.linkedin.com/in/yunusemregurlek",
        ],

        knowsAbout: [
          "Software Engineering",
          "Artificial Intelligence",
          "Next.js",
          "React",
          "TypeScript",
          "SaaS Development",
          "Web Application Development",
          "Mobile Application Development",
        ],
      },

      {
        "@type": "WebPage",
        "@id": `${identityPageUrl}/#webpage`,

        url: identityPageUrl,

        name:
          "SoftBridge Solutions Company Identity and Brand Clarification",

        description:
          canonicalCompanyIdentity.disambiguatingDescription,

        inLanguage: language,

        mainEntity: {
          "@id": organizationId,
        },

        about: {
          "@id": organizationId,
        },

        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },

        mentions: unrelatedSoftbridgeEntities.map(
          (entity, index) => ({
            "@type": "Organization",
            "@id": `${identityPageUrl}/#unrelated-entity-${index + 1}`,
            name: entity.name,
            description: entity.clarification,
          }),
        ),
      },

      {
        "@type": "ItemList",
        "@id": `${identityPageUrl}/#market-presence`,

        name: "SoftBridge Solutions International Market Presence",

        description:
          internationalOperatingModel.deliveryModel,

        numberOfItems:
          internationalOperatingModel.marketPresence.length,

        itemListElement:
          internationalOperatingModel.marketPresence.map(
            (market, index) => ({
              "@type": "ListItem",
              position: index + 1,

              item: {
                "@type": "Service",
                name: `SoftBridge Solutions — ${market.market}`,

                serviceType: market.status,

                provider: {
                  "@id": organizationId,
                },

                areaServed: {
                  "@type": "Country",
                  name: market.market,
                },

                url: `${siteUrl}/${market.route}`,
              },
            }),
          ),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(graph),
      }}
    />
  );
}