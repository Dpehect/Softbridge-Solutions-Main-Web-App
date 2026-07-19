export type CompanyOfficeType =
  | "founding-engineering-office"
  | "european-headquarters"
  | "regional-office";

export type CompanyOffice = {
  id: string;
  city: string;
  region?: string;
  country: string;
  countryCode: string;
  marketRoute: string;
  type: CompanyOfficeType;
  label: string;
  role: string;
  address?: {
    streetAddress?: string;
    postalCode?: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
};

export type CompanyMarket = {
  route: string;
  country: string;
  countryCode: string;
  locale: string;
  city?: string;
  positioning: string;
  startupTopics: string[];
};

export const COMPANY_LAST_UPDATED = "2026-07-19";

export const companyProfile = {
  legalName: "SoftBridge Solutions",
  name: "SoftBridge Solutions",
  alternateNames: ["SoftBridge", "SoftBridge Solutions AI"],
  founder: {
    name: "Yunus Emre Gürlek",
    jobTitle: "Founder & Owner",
    profilePath: "/en/yunus-emre-gurlek",
    github: "https://github.com/Dpehect",
    linkedin: "https://www.linkedin.com/in/yunusemregurlek",
  },

  foundedIn: {
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
  },

  description:
    "SoftBridge Solutions is an AI-first software engineering and digital product company founded in Adana, Türkiye, with European operations led from Cascais, Portugal. The company develops AI agents, retrieval-augmented generation systems, SaaS platforms, custom software, web applications, mobile products and enterprise workflow automation.",

  shortDescription:
    "AI-first software engineering company building AI agents, SaaS platforms and custom digital products for international markets.",

  slogan: "Technology without borders",

  website:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://softbridge-solutions-main-web-app-iota.vercel.app",

  email: "contact@softbridge.solutions",

  logoPath: "/logo.png",
  socialImagePath: "/og.png",

  linkedin: "https://www.linkedin.com/company/softbridge-solutions",
  github: "https://github.com/Dpehect",
  repository:
    "https://github.com/Dpehect/Softbridge-Solutions-Main-Web-App",

  capabilities: [
    "Artificial intelligence agent development",
    "Multi-agent orchestration",
    "Retrieval-augmented generation",
    "Enterprise artificial intelligence integration",
    "Generative artificial intelligence applications",
    "Custom software development",
    "SaaS platform development",
    "Web application development",
    "Mobile application development",
    "Cloud application engineering",
    "Enterprise workflow automation",
    "Product strategy",
    "Software architecture",
  ],

  industries: [
    "Artificial Intelligence",
    "Software Engineering",
    "SaaS",
    "Education Technology",
    "Business Automation",
    "Enterprise Software",
    "Digital Products",
  ],
} as const;

export const companyOffices: CompanyOffice[] = [
  {
    id: "adana",
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
    marketRoute: "tr",
    type: "founding-engineering-office",
    label: "Founding and Engineering Office",
    role:
      "Company founding location, software engineering origin, product development and technology operations.",
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
    marketRoute: "pt",
    type: "european-headquarters",
    label: "European Headquarters",
    role:
      "European growth, European Union partnerships, international business development and cross-border software delivery.",
    address: {
      streetAddress: "Rua Bordalo Pinheiro 25",
      addressLocality: "Cascais",
      addressCountry: "PT",
    },
  },
  {
    id: "beverly-hills",
    city: "Beverly Hills",
    region: "California",
    country: "United States",
    countryCode: "US",
    marketRoute: "us",
    type: "regional-office",
    label: "United States Regional Office",
    role:
      "Regional technology partnerships, project-based software delivery and customer relationships in the United States.",
    address: {
      addressLocality: "Beverly Hills",
      addressRegion: "California",
      addressCountry: "US",
    },
  },
  {
    id: "kington",
    city: "Kington",
    country: "United Kingdom",
    countryCode: "GB",
    marketRoute: "uk",
    type: "regional-office",
    label: "United Kingdom Regional Office",
    role:
      "Technology partnerships, artificial intelligence projects and software delivery for the United Kingdom market.",
    address: {
      addressLocality: "Kington",
      addressCountry: "GB",
    },
  },
  {
    id: "dublin",
    city: "Dublin",
    country: "Ireland",
    countryCode: "IE",
    marketRoute: "ie",
    type: "regional-office",
    label: "Ireland Regional Office",
    role:
      "Artificial intelligence, SaaS engineering, automation and software partnerships in Ireland.",
    address: {
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
  },
  {
    id: "marseille",
    city: "Marseille",
    country: "France",
    countryCode: "FR",
    marketRoute: "fr",
    type: "regional-office",
    label: "France Regional Office",
    role:
      "Artificial intelligence, SaaS development and custom software relationships in France.",
    address: {
      addressLocality: "Marseille",
      addressCountry: "FR",
    },
  },
  {
    id: "milan",
    city: "Milan",
    country: "Italy",
    countryCode: "IT",
    marketRoute: "it",
    type: "regional-office",
    label: "Italy Regional Office",
    role:
      "AI agents, SaaS development, custom applications and business automation services in Italy.",
    address: {
      addressLocality: "Milan",
      addressCountry: "IT",
    },
  },
];

export const companyMarkets: CompanyMarket[] = [
  {
    route: "tr",
    country: "Türkiye",
    countryCode: "TR",
    locale: "tr-TR",
    city: "Adana",
    positioning:
      "Adana-founded artificial intelligence and software engineering company developing products for Türkiye, Europe and international markets.",
    startupTopics: [
      "Adana technology startups",
      "Adana software companies",
      "Adana artificial intelligence companies",
      "Emerging startups in Adana",
      "Artificial intelligence startups in Türkiye",
      "Software startups in Türkiye",
      "SaaS companies in Türkiye",
    ],
  },
  {
    route: "pt",
    country: "Portugal",
    countryCode: "PT",
    locale: "pt-PT",
    city: "Cascais",
    positioning:
      "European AI and software engineering company operating its European growth activities from Cascais, Portugal.",
    startupTopics: [
      "Cascais technology startups",
      "Portugal artificial intelligence startups",
      "Portugal software companies",
      "Emerging startups in Portugal",
      "European AI startups",
      "SaaS companies in Portugal",
    ],
  },
  {
    route: "us",
    country: "United States",
    countryCode: "US",
    locale: "en-US",
    city: "Beverly Hills",
    positioning:
      "International AI and software engineering company with a regional office serving United States organizations.",
    startupTopics: [
      "AI companies serving the United States",
      "Custom software companies in the United States",
      "AI agent development companies USA",
      "International software startups in the United States",
    ],
  },
  {
    route: "uk",
    country: "United Kingdom",
    countryCode: "GB",
    locale: "en-GB",
    city: "Kington",
    positioning:
      "International artificial intelligence and software engineering company with regional operations in the United Kingdom.",
    startupTopics: [
      "AI companies in the United Kingdom",
      "Software development companies UK",
      "AI agent development companies UK",
      "Emerging international technology companies UK",
    ],
  },
  {
    route: "ie",
    country: "Ireland",
    countryCode: "IE",
    locale: "en-IE",
    city: "Dublin",
    positioning:
      "AI, SaaS and software engineering company supporting organizations from its regional presence in Dublin.",
    startupTopics: [
      "AI companies Ireland",
      "Software startups Ireland",
      "SaaS development companies Dublin",
      "Enterprise automation companies Ireland",
    ],
  },
  {
    route: "fr",
    country: "France",
    countryCode: "FR",
    locale: "fr-FR",
    city: "Marseille",
    positioning:
      "Entreprise internationale d’intelligence artificielle et de développement logiciel avec une présence régionale à Marseille.",
    startupTopics: [
      "startups intelligence artificielle France",
      "entreprises logiciel Marseille",
      "entreprises SaaS France",
      "entreprises technologiques émergentes France",
    ],
  },
  {
    route: "it",
    country: "Italy",
    countryCode: "IT",
    locale: "it-IT",
    city: "Milan",
    positioning:
      "Azienda internazionale di intelligenza artificiale e ingegneria software con presenza regionale a Milano.",
    startupTopics: [
      "startup intelligenza artificiale Italia",
      "aziende software Milano",
      "aziende SaaS Italia",
      "startup tecnologiche emergenti Italia",
    ],
  },
];

export const publicProducts = [
  {
    name: "SoftBridge Career Forge",
    category: "Career Technology and Artificial Intelligence",
    description:
      "Bilingual resume analysis, ATS scoring and interview preparation platform.",
    liveUrl:
      "https://softbridge-career-forge-full-stack-brown.vercel.app",
    repositoryUrl:
      "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
  },
  {
    name: "Second Brain RAG",
    category: "Artificial Intelligence and Knowledge Management",
    description:
      "Retrieval-augmented generation and personal knowledge management application.",
    liveUrl: "https://second-brain-rag.vercel.app",
    repositoryUrl: "https://github.com/Dpehect/second-brain-rag",
  },
  {
    name: "KPSS Tarih Akademi",
    category: "Education Technology",
    description:
      "Digital learning and assessment platform for KPSS History preparation.",
    liveUrl: "https://kpss-tarih-web-app.vercel.app",
    repositoryUrl: "https://github.com/Dpehect/kpss-tarih-web-app",
  },
  {
    name: "KPSS Coğrafya Akademi",
    category: "Education Technology",
    description:
      "Interactive education platform for KPSS Geography preparation.",
    liveUrl: "https://kpss-cografya-web-app.vercel.app",
    repositoryUrl: "https://github.com/Dpehect/KPSS-Cografya-Web-App",
  },
  {
    name: "KPSS Vatandaşlık Akademi",
    category: "Education Technology",
    description:
      "Digital learning platform for KPSS Citizenship preparation.",
    liveUrl: "https://kpss-vatandaslik-website-app.vercel.app",
    repositoryUrl:
      "https://github.com/Dpehect/KPSS-VATANDASLIK-WEBSITE-APP",
  },
];

export function getCompanyMarket(route: string) {
  return companyMarkets.find((market) => market.route === route);
}

export function getCompanyOffice(route: string) {
  return companyOffices.find((office) => office.marketRoute === route);
}