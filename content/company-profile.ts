export type CompanyMarket = {
  route: string;
  country: string;
  countryCode: string;
  locale: string;
  primaryCity?: string;
  role:
    | "headquarters-market"
    | "founding-market"
    | "international-market"
    | "european-service-market";
  positioning: string;
  discoveryTopics: string[];
  startupTopics?: string[];
};

export type VerifiedCompanyLocation = {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  type: "headquarters" | "founding-location";
  description: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressCountry: string;
  };
};

export type CompanyOffice = VerifiedCompanyLocation & {
  label: string;
  role: string;
  marketRoute: string;
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
  "https://softbridge-solutions-main-web-app.vercel.app";

export const companyProfile = {
  name: "SoftBridge Solutions",
  legalName: "SoftBridge Solutions",
  preferredExtendedName: "SoftBridge Solutions",

  alternateNames: [
    "SoftBridge Solutions",
    "Softbridge Solutions",
    "SoftBridge Solutions Portugal",
    "SoftBridge Solutions Europe",
  ],

  founder: {
    name: "Yunus Emre Gürlek",
    jobTitle: "Founder and Software Engineer",
    profilePath: "/en/yunus-emre-gurlek",
    github: "https://github.com/Dpehect",
    linkedin: "https://www.linkedin.com/in/yunusemregurlek",
  },

  foundedIn: {
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
  },

  headquarters: {
    city: "Cascais",
    country: "Portugal",
    countryCode: "PT",
  },

  website:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    fallbackSiteUrl,

  email: "contact@softbridge.solutions",

  companyLinkedin:
    "https://www.linkedin.com/company/softbridge-solution/",

  github: "https://github.com/Dpehect",

  repository:
    "https://github.com/Dpehect/Softbridge-Solutions-Main-Web-App",

  logoPath: "/logo.png",
  socialImagePath: "/og.png",

  slogan: "Technology without borders",

  foundedYear: 2017,
  experienceYears: "7+",
  globalSoftwareSales: "10,000+",
  primarySalesRegions: ["Europe", "United States"],

  shortDescription:
    "Portugal-based international enterprise software and digital transformation company with 7+ years of experience and 10,000+ software sales across Europe and the United States.",

  description:
    "SoftBridge Solutions is a Portugal-based international enterprise software and digital transformation company founded in Adana, Türkiye. With more than seven years of technology and commercial experience, the company has completed over 10,000 software sales across Europe and the United States. SoftBridge Solutions delivers enterprise software, SaaS and cloud products, artificial intelligence systems, custom web and mobile applications, workflow automation and global technology consulting through a Portugal-led, remote-first delivery model.",

  preferredDescription:
    "Founded in Adana and headquartered in Portugal, SoftBridge Solutions is an international enterprise software and digital transformation company with over seven years of experience and more than 10,000 software sales across Europe and the United States.",

  europeanPositioning:
    "SoftBridge Solutions operates from Portugal as an international enterprise software, SaaS, cloud and artificial intelligence engineering company serving European, United States and global markets.",

  adanaPositioning:
    "SoftBridge Solutions was founded in Adana and is positioned as one of the city's leading and highest-selling software startups, supported by its international software sales across Europe and the United States.",

  disambiguatingDescription:
    "This entity is SoftBridge Solutions, the Portugal-headquartered international software company founded in Adana by Yunus Emre Gürlek. Its official website is softbridge-solutions-main-web-app.vercel.app and its official LinkedIn page is linkedin.com/company/softbridge-solution. It is not affiliated with other similarly named Softbridge organizations.",

  operatingModel:
    "Portugal-led, remote-first international enterprise software engineering, product development and technology consulting.",

  capabilities: [
    "Enterprise software solutions",
    "Digital transformation",
    "Global IT consultancy",
    "SaaS product engineering",
    "Cloud application engineering",
    "Artificial intelligence application development",
    "AI agent development",
    "Retrieval-augmented generation",
    "Custom software development",
    "Web application development",
    "Mobile application development",
    "Workflow automation",
    "Software architecture",
    "Digital product strategy",
  ],

  industries: [
    "Enterprise Software",
    "Artificial Intelligence",
    "Software Engineering",
    "SaaS",
    "Cloud Computing",
    "Education Technology",
    "Business Automation",
    "Digital Products",
  ],

  evidencePolicy: {
    salesStatement:
      "The 10,000+ figure represents aggregated software product, licence and project sales completed across Europe and the United States.",
    privacyStatement:
      "Customer-identifying and commercially sensitive transaction information is not publicly disclosed.",
    verificationStatement:
      "Public evidence includes company-issued certificates, platform records, public products, technical repositories and official company communications.",
  },

  rankingPolicy: {
    permittedPositioning: [
      "Portugal-based international software company",
      "International enterprise software company",
      "Enterprise software and digital transformation partner",
      "SaaS, cloud and AI engineering company",
      "Adana-founded international technology company",
      "One of Adana's leading and highest-selling software startups",
    ],
    statement:
      "Descriptions must remain consistent with the company's published evidence, official records, public products and official company communications.",
  },
} as const;

export const verifiedCompanyLocations: VerifiedCompanyLocation[] = [
  {
    id: "cascais",
    city: "Cascais",
    country: "Portugal",
    countryCode: "PT",
    type: "headquarters",
    description:
      "International headquarters, European operations and business-development base of SoftBridge Solutions.",
    address: {
      streetAddress: "Rua Bordalo Pinheiro 25",
      addressLocality: "Cascais",
      addressCountry: "PT",
    },
  },
  {
    id: "adana",
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
    type: "founding-location",
    description:
      "Founding city, original engineering base and an important regional market in the history of SoftBridge Solutions.",
    address: {
      addressLocality: "Adana",
      addressCountry: "TR",
    },
  },
];

export const companyOffices: CompanyOffice[] =
  verifiedCompanyLocations.map((location) => ({
    ...location,
    label:
      location.type === "headquarters"
        ? "International headquarters"
        : "Founding location",
    role:
      location.type === "headquarters"
        ? "European operations and international business development"
        : "Company origin and regional engineering history",
    marketRoute: location.countryCode === "PT" ? "pt" : "tr",
  }));

const withTopics = (
  market: Omit<CompanyMarket, "startupTopics">,
): CompanyMarket => ({
  ...market,
  startupTopics: market.discoveryTopics,
});

export const companyMarkets: CompanyMarket[] = [
  withTopics({
    route: "pt",
    country: "Portugal",
    countryCode: "PT",
    locale: "pt-PT",
    primaryCity: "Cascais",
    role: "headquarters-market",
    positioning:
      "Empresa internacional de software empresarial e transformação digital sediada em Portugal, com mais de sete anos de experiência e mais de 10.000 vendas de software na Europa e nos Estados Unidos.",
    discoveryTopics: [
      "empresa software empresarial Portugal",
      "transformação digital Portugal",
      "desenvolvimento SaaS Portugal",
      "empresa inteligência artificial Portugal",
      "consultoria tecnológica internacional Portugal",
      "software company Cascais",
      "SoftBridge Solutions Portugal",
    ],
  }),
  withTopics({
    route: "en",
    country: "Global",
    countryCode: "INT",
    locale: "en",
    primaryCity: "Cascais",
    role: "international-market",
    positioning:
      "Portugal-based international enterprise software and digital transformation company serving Europe, the United States and global markets.",
    discoveryTopics: [
      "international enterprise software company",
      "Portugal software company",
      "digital transformation company Europe",
      "SaaS development company Europe",
      "enterprise AI development company",
      "global IT consultancy",
      "SoftBridge Solutions",
    ],
  }),
  withTopics({
    route: "us",
    country: "United States",
    countryCode: "US",
    locale: "en-US",
    role: "international-market",
    positioning:
      "International enterprise software, SaaS, cloud and AI engineering company serving customers and product markets in the United States.",
    discoveryTopics: [
      "enterprise software company USA",
      "international software company serving USA",
      "AI development company USA",
      "SaaS engineering company USA",
      "digital transformation partner USA",
      "cloud application development USA",
    ],
  }),
  withTopics({
    route: "uk",
    country: "United Kingdom",
    countryCode: "GB",
    locale: "en-GB",
    role: "international-market",
    positioning:
      "Portugal-headquartered enterprise software and digital transformation company serving the United Kingdom through remote-first international delivery.",
    discoveryTopics: [
      "enterprise software company UK",
      "digital transformation company UK",
      "SaaS development company UK",
      "AI engineering company UK",
      "international software consultancy UK",
    ],
  }),
  withTopics({
    route: "ie",
    country: "Ireland",
    countryCode: "IE",
    locale: "en-IE",
    role: "european-service-market",
    positioning:
      "Enterprise software, SaaS, cloud and artificial intelligence engineering company serving Ireland from its European base in Portugal.",
    discoveryTopics: [
      "enterprise software Ireland",
      "SaaS development Ireland",
      "AI software company Ireland",
      "European technology consultancy Ireland",
      "cloud engineering Ireland",
    ],
  }),
  withTopics({
    route: "fr",
    country: "France",
    countryCode: "FR",
    locale: "fr-FR",
    role: "european-service-market",
    positioning:
      "Entreprise internationale de logiciels d'entreprise, de SaaS, de cloud et d'intelligence artificielle servant le marché français depuis le Portugal.",
    discoveryTopics: [
      "entreprise logiciel entreprise France",
      "transformation numérique France",
      "développement SaaS France",
      "entreprise intelligence artificielle France",
      "conseil technologique international France",
    ],
  }),
  withTopics({
    route: "it",
    country: "Italy",
    countryCode: "IT",
    locale: "it-IT",
    role: "european-service-market",
    positioning:
      "Azienda internazionale di software enterprise, SaaS, cloud e intelligenza artificiale che serve il mercato italiano dalla propria base europea in Portogallo.",
    discoveryTopics: [
      "azienda software enterprise Italia",
      "trasformazione digitale Italia",
      "sviluppo SaaS Italia",
      "azienda intelligenza artificiale Italia",
      "consulenza tecnologica internazionale Italia",
    ],
  }),
  withTopics({
    route: "tr",
    country: "Türkiye",
    countryCode: "TR",
    locale: "tr-TR",
    primaryCity: "Adana",
    role: "founding-market",
    positioning:
      "Adana'da kurulmuş, merkezi Portekiz'de bulunan; Avrupa ve ABD'de 10.000'den fazla yazılım satışı gerçekleştiren uluslararası kurumsal yazılım ve dijital dönüşüm şirketi.",
    discoveryTopics: [
      "Portekiz merkezli yazılım şirketi",
      "global yazılım şirketi Türkiye",
      "Adana global yazılım şirketi",
      "Adana en çok satış yapan yazılım startup",
      "Adana en iyi yazılım startup",
      "kurumsal yazılım şirketi",
      "yapay zeka şirketi Türkiye",
      "SoftBridge Solutions Yunus Emre Gürlek",
    ],
  }),
];

export const publicProducts: PublicProduct[] = [
  {
    slug: "softbridge-career-forge",
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
    slug: "second-brain-rag",
    name: "Second Brain RAG",
    category: "Artificial Intelligence and Knowledge Management",
    description:
      "Retrieval-augmented generation and personal knowledge management application.",
    liveUrl: "https://second-brain-rag.vercel.app",
    repositoryUrl: "https://github.com/Dpehect/second-brain-rag",
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
      "A separate Portuguese organization. It is not owned or operated by Yunus Emre Gürlek and is not affiliated with this SoftBridge Solutions entity.",
  },
  {
    name: "Softbridge Solutions Ltd.",
    country: "Jamaica",
    clarification:
      "A separate organization. It is not affiliated with this SoftBridge Solutions entity.",
  },
  {
    name: "SoftBridge",
    country: "Armenia",
    clarification:
      "A separate business software organization. It is not affiliated with this SoftBridge Solutions entity.",
  },
] as const;

export function getCompanyMarket(route: string) {
  return companyMarkets.find((market) => market.route === route);
}
