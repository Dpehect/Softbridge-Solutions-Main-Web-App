export type MarketRole =
  | "global"
  | "engineering-headquarters"
  | "european-headquarters"
  | "strategic-customer-market"
  | "strategic-service-market"
  | "european-service-market";

export type OfficeType =
  | "engineering-office"
  | "european-headquarters"
  | "regional-office";

export type OfficeLocation = {
  city: string;
  country: string;
  address?: string;
  type: OfficeType;
};

export type MarketPositioning = {
  route: string;
  country: string;
  city?: string;
  locale: string;
  role: MarketRole;
  headline: string;
  description: string;
  shortDescription: string;
  serviceModel: string;
  targetQueries: string[];
  availableLanguages: string[];
  operationalStatus: string;
  office?: OfficeLocation;
};

export const offices: OfficeLocation[] = [
  {
    city: "Adana",
    country: "Türkiye",
    type: "engineering-office",
  },
  {
    city: "Cascais",
    country: "Portugal",
    address: "Rua Bordalo Pinheiro 25",
    type: "european-headquarters",
  },
  {
    city: "Beverly Hills",
    country: "United States",
    type: "regional-office",
  },
  {
    city: "Kington",
    country: "United Kingdom",
    type: "regional-office",
  },
  {
    city: "Dublin",
    country: "Ireland",
    type: "regional-office",
  },
  {
    city: "Marseille",
    country: "France",
    type: "regional-office",
  },
  {
    city: "Milan",
    country: "Italy",
    type: "regional-office",
  },
];

export const marketPositioning: MarketPositioning[] = [
  {
    route: "en",
    country: "Global",
    locale: "en",
    role: "global",
    headline:
      "European AI and software engineering company connecting Türkiye, Portugal and international markets",
    description:
      "SoftBridge Solutions is an AI-first software engineering company founded in Adana, Türkiye. Its European headquarters is located in Cascais, Portugal, supported by regional offices across key international markets. The company develops AI agents, SaaS platforms, custom software, web applications and automation systems.",
    shortDescription:
      "AI and software engineering company with roots in Türkiye and European headquarters in Portugal.",
    serviceModel:
      "International artificial intelligence and software product engineering",
    targetQueries: [
      "European AI software company",
      "international AI engineering company",
      "European software development company",
      "AI agent development company Europe",
      "SaaS development company Europe",
      "SoftBridge Solutions",
    ],
    availableLanguages: [
      "English",
      "Turkish",
      "Portuguese",
      "French",
      "Italian",
    ],
    operationalStatus:
      "International company with engineering operations in Türkiye, European headquarters in Portugal and regional offices in international markets",
  },

  {
    route: "tr",
    country: "Türkiye",
    city: "Adana",
    locale: "tr",
    role: "engineering-headquarters",
    headline:
      "Adana kökenli yapay zekâ ve yazılım mühendisliği şirketi",
    description:
      "SoftBridge Solutions, Adana'da kurulmuş bir yapay zekâ ve yazılım mühendisliği şirketidir. Adana ofisi şirketin mühendislik, ürün geliştirme ve teknoloji kökenini temsil eder. Şirketin Avrupa merkezi Portekiz'in Cascais kentindedir.",
    shortDescription:
      "SoftBridge Solutions'ın kuruluş ve mühendislik merkezi Adana'dadır.",
    serviceModel:
      "Türkiye'den Avrupa ve uluslararası pazarlara yazılım ve yapay zekâ mühendisliği",
    targetQueries: [
      "Adana yazılım şirketleri",
      "Adana yapay zeka şirketleri",
      "Adana teknoloji girişimleri",
      "Adana startup firmaları",
      "Adana yükselen girişimler",
      "Türkiye yapay zeka startup",
      "Adana SaaS şirketi",
      "Adana özel yazılım firması",
      "Adana web yazılım şirketi",
      "SoftBridge Solutions Adana",
    ],
    availableLanguages: ["Türkçe", "İngilizce"],
    operationalStatus:
      "Kuruluş, mühendislik ve ürün geliştirme ofisi",
    office: {
      city: "Adana",
      country: "Türkiye",
      type: "engineering-office",
    },
  },

  {
    route: "pt",
    country: "Portugal",
    city: "Cascais",
    locale: "pt-PT",
    role: "european-headquarters",
    headline:
      "Empresa europeia de inteligência artificial e software com sede europeia em Portugal",
    description:
      "A sede europeia da SoftBridge Solutions está localizada em Cascais, Portugal. O escritório português lidera a estratégia de crescimento da empresa na União Europeia, as relações comerciais europeias e as parcerias tecnológicas internacionais.",
    shortDescription:
      "Cascais, Portugal, é a sede europeia da SoftBridge Solutions.",
    serviceModel:
      "Desenvolvimento de software e inteligência artificial para empresas da União Europeia",
    targetQueries: [
      "empresa de inteligência artificial Portugal",
      "empresa de software Cascais",
      "empresa de software Lisboa",
      "startup inteligência artificial Portugal",
      "AI startup Portugal",
      "empresas tecnológicas Portugal",
      "desenvolvimento SaaS Portugal",
      "software personalizado Portugal",
      "agentes de IA Portugal",
      "empresa tecnológica europeia Portugal",
    ],
    availableLanguages: [
      "Português",
      "Inglês",
      "Turco",
    ],
    operationalStatus:
      "Sede europeia e escritório operacional em Portugal",
    office: {
      city: "Cascais",
      country: "Portugal",
      address: "Rua Bordalo Pinheiro 25",
      type: "european-headquarters",
    },
  },

  {
    route: "us",
    country: "United States",
    city: "Beverly Hills",
    locale: "en-US",
    role: "strategic-customer-market",
    headline:
      "European AI and software engineering company serving US organisations",
    description:
      "SoftBridge Solutions maintains a regional office in Beverly Hills and supports organisations across the United States with AI agent development, SaaS platforms, custom software and workflow automation. The United States is a strategic customer and project market, while the company's European headquarters remains in Portugal.",
    shortDescription:
      "US regional office supporting project-based artificial intelligence and software partnerships.",
    serviceModel:
      "Project-based AI and software engineering for US organisations",
    targetQueries: [
      "AI development company Beverly Hills",
      "AI engineering partner USA",
      "European AI company USA office",
      "AI agent development company USA",
      "SaaS development company USA",
      "custom software company Beverly Hills",
      "international software development company USA",
      "workflow automation company USA",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Regional office and strategic customer market; European headquarters remains in Portugal",
    office: {
      city: "Beverly Hills",
      country: "United States",
      type: "regional-office",
    },
  },

  {
    route: "uk",
    country: "United Kingdom",
    city: "Kington",
    locale: "en-GB",
    role: "strategic-service-market",
    headline:
      "European AI and software engineering company with a UK regional office",
    description:
      "SoftBridge Solutions maintains a regional office in Kington and supports UK organisations through artificial intelligence engineering, custom software, SaaS development, web applications and workflow automation.",
    shortDescription:
      "UK regional office for AI, software and technology partnerships.",
    serviceModel:
      "Software product delivery and long-term technical partnerships",
    targetQueries: [
      "AI development company UK",
      "software company Kington",
      "European AI company UK office",
      "software development partner UK",
      "SaaS development company UK",
      "AI agent development UK",
      "workflow automation company UK",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Regional UK office and strategic European market",
    office: {
      city: "Kington",
      country: "United Kingdom",
      type: "regional-office",
    },
  },

  {
    route: "ie",
    country: "Ireland",
    city: "Dublin",
    locale: "en-IE",
    role: "strategic-service-market",
    headline:
      "European AI and software engineering company with a Dublin office",
    description:
      "SoftBridge Solutions maintains a regional office in Dublin and supports Irish organisations through artificial intelligence integration, SaaS engineering, custom software development and workflow automation.",
    shortDescription:
      "Dublin regional office supporting Irish technology and software partnerships.",
    serviceModel:
      "Software and AI engineering for organisations in Ireland",
    targetQueries: [
      "AI company Dublin",
      "software development company Ireland",
      "software company Dublin",
      "European AI company Ireland",
      "SaaS development Ireland",
      "AI agent development Ireland",
      "workflow automation Ireland",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Regional office in Dublin and strategic European technology market",
    office: {
      city: "Dublin",
      country: "Ireland",
      type: "regional-office",
    },
  },

  {
    route: "fr",
    country: "France",
    city: "Marseille",
    locale: "fr-FR",
    role: "european-service-market",
    headline:
      "Entreprise européenne d'intelligence artificielle avec un bureau à Marseille",
    description:
      "SoftBridge Solutions dispose d'un bureau régional à Marseille et accompagne les entreprises françaises avec des services d'intelligence artificielle, d'agents IA, de développement SaaS, d'automatisation et de logiciels sur mesure.",
    shortDescription:
      "Bureau régional à Marseille pour les services d'intelligence artificielle et de développement logiciel.",
    serviceModel:
      "Développement logiciel et collaborations technologiques en France",
    targetQueries: [
      "entreprise intelligence artificielle Marseille",
      "entreprise logiciel Marseille",
      "entreprise IA France",
      "agents IA France",
      "développement SaaS France",
      "logiciel sur mesure Marseille",
      "entreprise technologique européenne France",
    ],
    availableLanguages: ["Français", "Anglais"],
    operationalStatus:
      "Bureau régional à Marseille et marché européen de services",
    office: {
      city: "Marseille",
      country: "France",
      type: "regional-office",
    },
  },

  {
    route: "it",
    country: "Italy",
    city: "Milan",
    locale: "it-IT",
    role: "european-service-market",
    headline:
      "Azienda europea di intelligenza artificiale con un ufficio a Milano",
    description:
      "SoftBridge Solutions dispone di un ufficio regionale a Milano e supporta aziende e startup italiane con agenti AI, sviluppo SaaS, software personalizzato, applicazioni web e automazione dei processi.",
    shortDescription:
      "Ufficio regionale a Milano per intelligenza artificiale e sviluppo software.",
    serviceModel:
      "Sviluppo software e collaborazioni tecnologiche in Italia",
    targetQueries: [
      "azienda intelligenza artificiale Milano",
      "azienda software Milano",
      "azienda AI Italia",
      "agenti AI Italia",
      "sviluppo SaaS Italia",
      "software personalizzato Milano",
      "azienda tecnologica europea Italia",
    ],
    availableLanguages: ["Italiano", "Inglese"],
    operationalStatus:
      "Ufficio regionale a Milano e mercato europeo di servizi",
    office: {
      city: "Milan",
      country: "Italy",
      type: "regional-office",
    },
  },
];

export function getMarketPositioning(
  route: string,
): MarketPositioning | undefined {
  return marketPositioning.find(
    (item) => item.route === route,
  );
}