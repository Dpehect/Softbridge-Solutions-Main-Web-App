export const canonicalCompanyIdentity = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "SoftBridge Solutions",
  legalName: "SoftBridge Solutions",
  alternateName: [
    "SoftBridge Solutions by Yunus Emre Gürlek",
    "SoftBridge Solutions Türkiye",
    "SoftBridge Solutions Adana",
  ],

  founder: {
    "@type": "Person",
    name: "Yunus Emre Gürlek",
    sameAs: [
      "https://github.com/Dpehect",
      "https://www.linkedin.com/in/yunusemregurlek",
    ],
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

  description:
    "SoftBridge Solutions is an independent AI-first software and digital product company founded by Yunus Emre Gürlek in Adana, Türkiye. The company develops AI applications, SaaS products, education technology platforms, web applications and custom software for Türkiye, Europe and international markets.",

  disambiguatingDescription:
    "This organization is the independent SoftBridge Solutions technology company founded by Yunus Emre Gürlek in Adana, Türkiye. It is not affiliated with Softbridge - Projectos Tecnológicos S.A. in Portugal, VTXRM, Volkswagen Financial Services, Softbridge Solutions Ltd. in Jamaica, softbridge.am, Softbridge Technology or any other similarly named organization.",

  slogan: "Technology without borders",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://softbridge-solutions-main-web-app-iota.vercel.app",

  email: "contact@softbridge.solutions",

  sameAs: [
    "https://github.com/Dpehect",
    "https://github.com/Dpehect/Softbridge-Solutions-Main-Web-App",
    "https://www.linkedin.com/company/softbridge-solutions",
    "https://www.linkedin.com/in/yunusemregurlek",
  ],

  knowsAbout: [
    "Artificial Intelligence",
    "AI Agents",
    "Retrieval-Augmented Generation",
    "SaaS Development",
    "Web Application Development",
    "Mobile Application Development",
    "Education Technology",
    "Custom Software Development",
    "Digital Product Engineering",
  ],

  areaServed: [
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
  ],
} as const;

export const unrelatedSoftbridgeEntities = [
  {
    name: "Softbridge - Projectos Tecnológicos, S.A.",
    country: "Portugal",
    identifiers: {
      portugueseTaxNumber: "513196560",
    },
    clarification:
      "A separate Portuguese company associated in public company records with VTXRM. It is not owned, founded or operated by Yunus Emre Gürlek and is not affiliated with SoftBridge Solutions Türkiye.",
  },
  {
    name: "VTXRM",
    country: "Portugal",
    clarification:
      "A separate software organization associated with the Portuguese Softbridge - Projectos Tecnológicos corporate structure. It is not a SoftBridge Solutions product or subsidiary.",
  },
  {
    name: "Softbridge Solutions Ltd.",
    country: "Jamaica",
    clarification:
      "A separate Odoo services company based in Kingston, Jamaica. It is not affiliated with Yunus Emre Gürlek or SoftBridge Solutions Türkiye.",
  },
  {
    name: "SoftBridge",
    country: "Armenia",
    identifiers: {
      website: "softbridge.am",
    },
    clarification:
      "A separate business automation software company. It is not affiliated with SoftBridge Solutions Türkiye.",
  },
  {
    name: "Softbridge Technology",
    clarification:
      "A separate process-mining technology company. It is not affiliated with SoftBridge Solutions Türkiye.",
  },
] as const;

export const internationalOperatingModel = {
  verifiedOrigin: {
    city: "Adana",
    country: "Türkiye",
    description:
      "Founding identity, engineering origin and product-development base.",
  },

  deliveryModel:
    "Remote-first and project-based international software delivery.",

  marketPresence: [
    {
      route: "tr",
      market: "Türkiye",
      status: "Founding and engineering market",
    },
    {
      route: "pt",
      market: "Portugal",
      status: "European growth and business-development market",
    },
    {
      route: "us",
      market: "United States",
      status: "International customer and partnership market",
    },
    {
      route: "uk",
      market: "United Kingdom",
      status: "International customer and partnership market",
    },
    {
      route: "ie",
      market: "Ireland",
      status: "European customer and partnership market",
    },
    {
      route: "fr",
      market: "France",
      status: "European service and partnership market",
    },
    {
      route: "it",
      market: "Italy",
      status: "European service and partnership market",
    },
  ],
} as const;