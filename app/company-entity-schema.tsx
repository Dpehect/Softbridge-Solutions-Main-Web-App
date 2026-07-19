import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyProfile,
  publicProducts,
  unrelatedSoftbridgeEntities,
  verifiedCompanyLocations,
} from "../content/company-profile";
import {
  aggregateSalesFact,
  companyEvidence,
} from "../content/company-evidence";

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
  const pageUrl =
    currentUrl ?? (market ? `${siteUrl}/${market}` : siteUrl);
  const selectedMarket = market
    ? companyMarkets.find((item) => item.route === market)
    : undefined;

  const organizationSchema = {
    "@type": ["Organization", "SoftwareCompany", "ProfessionalService"],
    "@id": organizationId,
    name: companyProfile.name,
    legalName: companyProfile.legalName,
    alternateName: companyProfile.alternateNames,
    url: siteUrl,
    email: companyProfile.email,
    foundingDate: String(companyProfile.foundedYear),
    slogan: companyProfile.slogan,
    description: companyProfile.description,
    disambiguatingDescription:
      companyProfile.disambiguatingDescription,
    founder: { "@id": founderId },
    foundingLocation: {
      "@type": "Place",
      name: `${companyProfile.foundedIn.city}, ${companyProfile.foundedIn.country}`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Bordalo Pinheiro 25",
      addressLocality: companyProfile.headquarters.city,
      addressCountry: companyProfile.headquarters.countryCode,
    },
    location: verifiedCompanyLocations.map((location) => ({
      "@type": "Place",
      "@id": `${siteUrl}/#location-${location.id}`,
      name: `${location.city}, ${location.country}`,
      description: location.description,
      address: {
        "@type": "PostalAddress",
        ...(location.address?.streetAddress
          ? { streetAddress: location.address.streetAddress }
          : {}),
        addressLocality:
          location.address?.addressLocality ?? location.city,
        addressCountry: location.countryCode,
      },
    })),
    areaServed: companyMarkets
      .filter((item) => item.countryCode !== "INT")
      .map((item) => ({
        "@type": "Country",
        name: item.country,
        identifier: item.countryCode,
      })),
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
    numberOfEmployees: undefined,
    award: companyEvidence
      .filter((item) => item.type === "sales-recognition")
      .map((item) => item.title),
    subjectOf: [
      {
        "@type": "WebPage",
        url: `${siteUrl}/en/evidence`,
        name: "SoftBridge Solutions Evidence and Company Facts",
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
      {
        "@type": "Dataset",
        url: `${siteUrl}/.well-known/company-evidence.json`,
        name: "SoftBridge Solutions Public Evidence Records",
      },
    ],
  };

  const founderSchema = {
    "@type": "Person",
    "@id": founderId,
    name: companyProfile.founder.name,
    jobTitle: companyProfile.founder.jobTitle,
    url: `${siteUrl}${companyProfile.founder.profilePath}`,
    worksFor: { "@id": organizationId },
    sameAs: [
      companyProfile.founder.github,
      companyProfile.founder.linkedin,
    ],
    knowsAbout: companyProfile.capabilities,
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: companyProfile.name,
    alternateName: companyProfile.alternateNames,
    description: companyProfile.shortDescription,
    publisher: { "@id": organizationId },
    inLanguage: [...new Set(companyMarkets.map((item) => item.locale))],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productsSchema = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#products`,
    name: "SoftBridge Solutions Public Software Products",
    numberOfItems: publicProducts.length,
    itemListElement: publicProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": `${siteUrl}/#product-${product.slug}`,
        name: product.name,
        description: product.description,
        applicationCategory: product.category,
        operatingSystem: "Web",
        url: product.liveUrl,
        codeRepository: product.repositoryUrl,
        author: { "@id": organizationId },
      },
    })),
  };

  const evidenceSchema = {
    "@type": "Dataset",
    "@id": `${siteUrl}/#company-evidence`,
    name: "SoftBridge Solutions Company Evidence",
    description:
      "Public records and official company publications supporting the company identity, international market activity and commercial history of SoftBridge Solutions.",
    url: `${siteUrl}/en/evidence`,
    dateModified: COMPANY_LAST_UPDATED,
    creator: { "@id": organizationId },
    variableMeasured: [
      {
        "@type": "PropertyValue",
        name: "International software sales",
        value: aggregateSalesFact.displayValue,
        description: aggregateSalesFact.metric,
      },
      {
        "@type": "PropertyValue",
        name: "Experience",
        value: companyProfile.experienceYears,
      },
    ],
    distribution: companyEvidence
      .filter((record) => record.sourceUrl)
      .map((record) => ({
        "@type": "DataDownload",
        name: record.title,
        contentUrl: record.sourceUrl,
        encodingFormat: "text/html",
      })),
  };

  const webpageSchema = {
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
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    mainEntity: { "@id": organizationId },
    keywords: selectedMarket?.discoveryTopics,
    significantLink: [
      `${siteUrl}/llms.txt`,
      `${siteUrl}/.well-known/company-profile.json`,
      `${siteUrl}/.well-known/company-evidence.json`,
      `${siteUrl}/en/evidence`,
    ],
    mentions: unrelatedSoftbridgeEntities.map((entity, index) => ({
      "@type": "Organization",
      "@id": `${pageUrl}/#unrelated-softbridge-${index + 1}`,
      name: entity.name,
      description: entity.clarification,
    })),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      founderSchema,
      websiteSchema,
      productsSchema,
      evidenceSchema,
      webpageSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
