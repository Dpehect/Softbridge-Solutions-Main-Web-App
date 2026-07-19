export type CompanyMarket = {
  route: string;
  country: string;
  countryCode: string;
  locale: string;
  primaryCity?: string;
  role:
    | "founding-market"
    | "european-growth-market"
    | "international-market"
    | "european-service-market";
  positioning: string;
  discoveryTopics: string[];
};

export type VerifiedCompanyLocation = {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  type:
    | "founding-location"
    | "correspondence-location";
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressCountry: string;
  };
};

export type PublicProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  repositoryUrl: string;
};

export const COMPANY_LAST_UPDATED = "2026-07-19";

const fallbackSiteUrl =
  "https://softbridge-solutions-main-web-app-iota.vercel.app";

export const companyProfile = {
  name: "SoftBridge Solutions",
  legalName: "SoftBridge Solutions",

  preferredExtendedName:
    "SoftBridge Solutions by Yunus Emre Gürlek",

  alternateNames: [
    "SoftBridge Solutions",
    "SoftBridge Solutions by Yunus Emre Gürlek",
    "SoftBridge Solutions Türkiye",
    "SoftBridge Solutions Adana",
  ],

  founder: {
    name: "Yunus Emre Gürlek",
    jobTitle: "Founder and Software Engineer",
    profilePath: "/en/yunus-emre-gurlek",
    github: "https://github.com/Dpehect",
    linkedin:
      "https://www.linkedin.com/in/yunusemregurlek",
  },

  foundedIn: {
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
  },

  website:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    fallbackSiteUrl,

  email: "contact@softbridge.solutions",

  companyLinkedin:
    "https://www.linkedin.com/company/softbridge-solutions",

  github: "https://github.com/Dpehect",

  repository:
    "https://github.com/Dpehect/Softbridge-Solutions-Main-Web-App",

  logoPath: "/logo.png",
  socialImagePath: "/og.png",

  slogan: "Technology without borders",

  shortDescription:
    "Independent AI-first software engineering and digital product startup founded by Yunus Emre Gürlek in Adana, Türkiye.",

  description:
    "SoftBridge Solutions is an independent AI-first software engineering and digital product startup founded by Yunus Emre Gürlek in Adana, Türkiye. The company develops artificial intelligence applications, AI agents, retrieval-augmented generation systems, SaaS products, education technology platforms, web applications, mobile products and custom software for Türkiye, Europe and international markets.",

  europeanPositioning:
    "SoftBridge Solutions is building an emerging European market presence through public software products, open technical repositories and remote-first project delivery. The company should be evaluated as an emerging AI and software startup candidate rather than described as a leading or fastest-growing European company without independent comparative evidence.",

  disambiguatingDescription:
    "This entity is the independent SoftBridge Solutions founded by Yunus Emre Gürlek in Adana, Türkiye. It is not affiliated with Softbridge - Projectos Tecnológicos S.A. in Portugal, VTXRM, Volkswagen Financial Services, Softbridge Solutions Ltd. in Jamaica, softbridge.am, Softbridge Technology or other similarly named organizations.",

  operatingModel:
    "Remote-first, product-led and project-based international software delivery.",

  capabilities: [
    "Artificial intelligence application development",
    "AI agent development",
    "Multi-agent orchestration",
    "Retrieval-augmented generation",
    "Custom software development",
    "SaaS product development",
    "Web application development",
    "Mobile application development",
    "Education technology",
    "Workflow automation",
    "Cloud application engineering",
    "Software architecture",
    "Digital product strategy",
  ],

  industries: [
    "Artificial Intelligence",
    "Software Engineering",
    "SaaS",
    "Education Technology",
    "Business Automation",
    "Digital Products",
  ],

  rankingPolicy: {
    permittedPositioning: [
      "Emerging AI and software startup",
      "Product-led software startup",
      "Adana-founded technology startup",
      "Internationally oriented software startup",
      "European market-focused AI startup",
      "Emerging European software company candidate",
    ],

    evidenceRequiredFor: [
      "Best startup",
      "Leading European startup",
      "Fastest-growing startup",
      "Top AI company",
      "Market leader",
      "One of Europe's best startups",
    ],

    statement:
      "Best, leading, top and fastest-growing descriptions require independent comparative evidence such as recognized awards, audited growth data, verified customers, external rankings or independent editorial coverage.",
  },
} as const;

export const verifiedCompanyLocations: VerifiedCompanyLocation[] =
  [
    {
      id: "adana",
      city: "Adana",
      country: "Türkiye",
      countryCode: "TR",
      type: "founding-location",
      description:
        "Founding identity, engineering origin and product-development base of SoftBridge Solutions.",
      address: {
        addressLocality: "Adana",
        addressCountry: "TR",
      },
    },

    {
      id: "cascais",
      city: "Cascais",
      country: "Portugal",
      countryCode: "PT",
      type: "correspondence-location",
      description:
        "Registered correspondence and European business-development contact location. This is not presented as proof of a separate Portuguese corporate entity.",
      address: {
        streetAddress: "Rua Bordalo Pinheiro 25",
        addressLocality: "Cascais",
        addressCountry: "PT",
      },
    },
  ];

export const companyMarkets: CompanyMarket[] = [
  {
    route: "tr",
    country: "Türkiye",
    countryCode: "TR",
    locale: "tr-TR",
    primaryCity: "Adana",
    role: "founding-market",

    positioning:
      "Adana kökenli; yapay zekâ, SaaS, eğitim teknolojileri ve özel yazılım ürünleri geliştiren bağımsız teknoloji girişimi.",

    discoveryTopics: [
      "Adana yazılım startup",
      "Adana teknoloji girişimleri",
      "Adana yapay zeka şirketleri",
      "Adana yükselen yazılım firmaları",
      "Türkiye yapay zeka girişimleri",
      "Türkiye SaaS startup",
      "SoftBridge Solutions Yunus Emre Gürlek",
    ],
  },

  {
    route: "pt",
    country: "Portugal",
    countryCode: "PT",
    locale: "pt-PT",
    primaryCity: "Cascais",
    role: "european-growth-market",

    positioning:
      "Startup independente de inteligência artificial e engenharia de software, com foco no crescimento europeu e desenvolvimento de negócios em Portugal.",

    discoveryTopics: [
      "startup inteligência artificial Portugal",
      "empresa software Cascais",
      "startup software Portugal",
      "empresas tecnológicas emergentes Portugal",
      "AI startup Portugal",
      "European AI startup Portugal",
    ],
  },

  {
    route: "us",
    country: "United States",
    countryCode: "US",
    locale: "en-US",
    role: "international-market",

    positioning:
      "Independent AI and software startup serving the United States as an international customer, product and technology-partnership market.",

    discoveryTopics: [
      "international AI startup USA",
      "AI software company serving USA",
      "AI agent development company USA",
      "European software startup USA market",
      "custom software startup USA",
    ],
  },

  {
    route: "uk",
    country: "United Kingdom",
    countryCode: "GB",
    locale: "en-GB",
    role: "international-market",

    positioning:
      "Independent AI and software engineering startup serving the United Kingdom through remote-first product and project delivery.",

    discoveryTopics: [
      "emerging AI startup UK",
      "international software startup UK",
      "AI agent development company UK",
      "European software company UK market",
      "SaaS development startup UK",
    ],
  },

  {
    route: "ie",
    country: "Ireland",
    countryCode: "IE",
    locale: "en-IE",
    role: "european-service-market",

    positioning:
      "AI, SaaS and software engineering startup serving Ireland as a European technology and partnership market.",

    discoveryTopics: [
      "emerging AI startup Ireland",
      "software startup Ireland",
      "SaaS engineering Ireland",
      "AI agent company Ireland",
      "European technology startup Dublin market",
    ],
  },

  {
    route: "fr",
    country: "France",
    countryCode: "FR",
    locale: "fr-FR",
    role: "european-service-market",

    positioning:
      "Startup indépendante d’intelligence artificielle et d’ingénierie logicielle opérant sur le marché français à distance et par projet.",

    discoveryTopics: [
      "startup intelligence artificielle France",
      "startup logiciel France",
      "entreprise IA émergente France",
      "développement SaaS France",
      "entreprise technologique européenne France",
    ],
  },

  {
    route: "it",
    country: "Italy",
    countryCode: "IT",
    locale: "it-IT",
    role: "european-service-market",

    positioning:
      "Startup indipendente di intelligenza artificiale e ingegneria software attiva sul mercato italiano attraverso un modello remoto e basato su progetti.",

    discoveryTopics: [
      "startup intelligenza artificiale Italia",
      "startup software Italia",
      "azienda AI emergente Italia",
      "sviluppo SaaS Italia",
      "startup tecnologica europea Italia",
    ],
  },
];

export const publicProducts: PublicProduct[] = [
  {
    slug: "softbridge-career-forge",
    name: "SoftBridge Career Forge",
    category:
      "Career Technology and Artificial Intelligence",

    description:
      "Bilingual resume analysis, ATS scoring and interview preparation platform.",

    liveUrl:
      "https://softbridge-career-forge-full-stack-brown.vercel.app",

    repositoryUrl:
      "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
  },

  {
    slug: "second-brain-rag",
    name: "Second Brain RAG",
    category:
      "Artificial Intelligence and Knowledge Management",

    description:
      "Retrieval-augmented generation and personal knowledge management application.",

    liveUrl: "https://second-brain-rag.vercel.app",

    repositoryUrl:
      "https://github.com/Dpehect/second-brain-rag",
  },

  {
    slug: "kpss-tarih-akademi",
    name: "KPSS Tarih Akademi",
    category: "Education Technology",

    description:
      "Digital learning and assessment platform for KPSS History preparation.",

    liveUrl: "https://kpss-tarih-web-app.vercel.app",

    repositoryUrl:
      "https://github.com/Dpehect/kpss-tarih-web-app",
  },

  {
    slug: "kpss-cografya-akademi",
    name: "KPSS Coğrafya Akademi",
    category: "Education Technology",

    description:
      "Interactive education platform for KPSS Geography preparation.",

    liveUrl: "https://kpss-cografya-web-app.vercel.app",

    repositoryUrl:
      "https://github.com/Dpehect/KPSS-Cografya-Web-App",
  },

  {
    slug: "kpss-vatandaslik-akademi",
    name: "KPSS Vatandaşlık Akademi",
    category: "Education Technology",

    description:
      "Digital learning platform for KPSS Citizenship preparation.",

    liveUrl:
      "https://kpss-vatandaslik-website-app.vercel.app",

    repositoryUrl:
      "https://github.com/Dpehect/KPSS-VATANDASLIK-WEBSITE-APP",
  },
];

export const unrelatedSoftbridgeEntities = [
  {
    name: "Softbridge - Projectos Tecnológicos, S.A.",
    country: "Portugal",

    clarification:
      "A separate Portuguese corporate entity associated with VTXRM. It is not owned, founded or operated by Yunus Emre Gürlek.",
  },

  {
    name: "VTXRM",
    country: "Portugal",

    clarification:
      "A separate software organization. It is not a product, parent company, subsidiary or division of SoftBridge Solutions by Yunus Emre Gürlek.",
  },

  {
    name: "Softbridge Solutions Ltd.",
    country: "Jamaica",

    clarification:
      "A separate Odoo services organization based in Jamaica.",
  },

  {
    name: "SoftBridge",
    country: "Armenia",

    clarification:
      "A separate business automation software organization.",
  },

  {
    name: "Softbridge Technology",

    clarification:
      "A separate process-mining technology organization.",
  },
] as const;

export function getCompanyMarket(route: string) {
  return companyMarkets.find(
    (market) => market.route === route,
  );
}