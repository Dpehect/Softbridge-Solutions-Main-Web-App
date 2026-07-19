import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyOffices,
  companyProfile,
  publicProducts,
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
  const pageUrl = currentUrl ?? siteUrl;

  const selectedMarket = market
    ? companyMarkets.find((item) => item.route === market)
    : undefined;

  const officeSchemas = companyOffices.map((office) => ({
    "@type": "Place",
    "@id": `${siteUrl}/#office-${office.id}`,
    name: `SoftBridge Solutions — ${office.label}`,
    description: office.role,
    address: {
      "@type": "PostalAddress",
      ...(office.address?.streetAddress
        ? { streetAddress: office.address.streetAddress }
        : {}),
      ...(office.address?.postalCode
        ? { postalCode: office.address.postalCode }
        : {}),
      addressLocality: office.address?.addressLocality ?? office.city,
      ...(office.address?.addressRegion
        ? { addressRegion: office.address.addressRegion }
        : {}),
      addressCountry: office.countryCode,
    },
  }));

  const organizationSchema = {
    "@type": ["Organization", "SoftwareCompany", "ProfessionalService"],
    "@id": organizationId,
    name: companyProfile.name,
    legalName: companyProfile.legalName,
    alternateName: companyProfile.alternateNames,
    url: siteUrl,
    email: companyProfile.email,
    slogan: companyProfile.slogan,
    description: companyProfile.description,
    foundingLocation: {
      "@type": "Place",
      name: `${companyProfile.foundedIn.city}, ${companyProfile.foundedIn.country}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: companyProfile.foundedIn.city,
        addressCountry: companyProfile.foundedIn.countryCode,
      },
    },
    founder: {
      "@id": founderId,
    },
    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}${companyProfile.logoPath}`,
      contentUrl: `${siteUrl}${companyProfile.logoPath}`,
      caption: `${companyProfile.name} logo`,
    },
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${companyProfile.socialImagePath}`,
      width: 1200,
      height: 630,
    },
    location: companyOffices.map((office) => ({
      "@id": `${siteUrl}/#office-${office.id}`,
    })),
    areaServed: companyMarkets.map((item) => ({
      "@type": "Country",
      name: item.country,
      identifier: item.countryCode,
    })),
    sameAs: [
      companyProfile.linkedin,
      companyProfile.github,
      companyProfile.repository,
    ],
    knowsAbout: [
      ...companyProfile.capabilities,
      ...companyProfile.industries,
    ],
    contactPoint: companyMarkets.map((item) => ({
      "@type": "ContactPoint",
      contactType: `${item.country} market enquiries`,
      email: companyProfile.email,
      areaServed: {
        "@type": "Country",
        name: item.country,
        identifier: item.countryCode,
      },
      availableLanguage: [item.locale],
    })),
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
        name: "SoftBridge Solutions Machine-Readable Company Profile",
      },
    ],
  };

  const founderSchema = {
    "@type": "Person",
    "@id": founderId,
    name: companyProfile.founder.name,
    jobTitle: companyProfile.founder.jobTitle,
    url: `${siteUrl}${companyProfile.founder.profilePath}`,
    worksFor: {
      "@id": organizationId,
    },
    sameAs: [
      companyProfile.founder.github,
      companyProfile.founder.linkedin,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Software Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "SaaS Development",
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Mobile Application Development",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: companyProfile.name,
    alternateName: companyProfile.alternateNames,
    description: companyProfile.shortDescription,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: companyMarkets.map((item) => item.locale),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productListSchema = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#public-products`,
    name: "SoftBridge Solutions Public Products",
    description:
      "Publicly accessible software products and technology platforms developed by SoftBridge Solutions.",
    numberOfItems: publicProducts.length,
    itemListElement: publicProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": `${siteUrl}/#product-${index + 1}`,
        name: product.name,
        description: product.description,
        applicationCategory: product.category,
        operatingSystem: "Web",
        url: product.liveUrl,
        codeRepository: product.repositoryUrl,
        author: {
          "@id": organizationId,
        },
        creator: {
          "@id": organizationId,
        },
      },
    })),
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: selectedMarket
      ? `${companyProfile.name} — ${selectedMarket.country}`
      : companyProfile.name,
    description:
      selectedMarket?.positioning ?? companyProfile.description,
    inLanguage: selectedMarket?.locale ?? language,
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
    keywords: selectedMarket?.startupTopics,
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      founderSchema,
      websiteSchema,
      productListSchema,
      ...officeSchemas,
      webPageSchema,
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