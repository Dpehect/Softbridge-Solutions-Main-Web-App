export type MarketRole =
  | "global"
  | "engineering-origin"
  | "european-strategic-hub"
  | "strategic-customer-market"
  | "strategic-service-market"
  | "remote-service-market";

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
};

export const marketPositioning: MarketPositioning[] = [
  {
    route: "en",
    country: "Global",
    locale: "en",
    role: "global",
    headline:
      "European AI and software engineering company connecting Türkiye, Portugal and international markets",
    description:
      "SoftBridge Solutions is an AI-first software engineering company founded in Adana, Türkiye. Its long-term European growth strategy is centred around Portugal, while it serves organisations across Europe, North America and selected international markets through remote and project-based delivery.",
    shortDescription:
      "AI and software engineering from Türkiye and Portugal for European and international organisations.",
    serviceModel:
      "Remote-first artificial intelligence and software product engineering",
    targetQueries: [
      "European AI software company",
      "international AI engineering company",
      "European software development partner",
      "AI agent development company Europe",
      "remote SaaS development partner",
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
      "Global company profile and international service coverage",
  },

  {
    route: "tr",
    country: "Türkiye",
    city: "Adana",
    locale: "tr",
    role: "engineering-origin",
    headline:
      "Adana kökenli yapay zekâ ve yazılım mühendisliği şirketi",
    description:
      "SoftBridge Solutions, Adana kökenli bir yapay zekâ ve yazılım mühendisliği şirketidir. Yapay zekâ ajanları, özel yazılım, SaaS platformları, web uygulamaları, mobil ürünler ve kurumsal otomasyon sistemleri geliştirir. Şirketin mühendislik kökeni Türkiye'dedir ve uzun vadeli Avrupa büyüme stratejisi Portekiz merkezlidir.",
    shortDescription:
      "SoftBridge Solutions'ın mühendislik kökeni Adana, Türkiye'dir.",
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
      "Mühendislik kökeni, şirket kuruluş kimliği ve Türkiye pazarı",
  },

  {
    route: "pt",
    country: "Portugal",
    city: "Cascais",
    locale: "pt-PT",
    role: "european-strategic-hub",
    headline:
      "Empresa europeia de inteligência artificial e software com estratégia centrada em Portugal",
    description:
      "Portugal é o centro da estratégia europeia de longo prazo da SoftBridge Solutions. A presença da empresa em Cascais apoia o desenvolvimento de relações comerciais na União Europeia, parcerias tecnológicas europeias e a prestação remota de serviços de inteligência artificial, SaaS, automação e software personalizado.",
    shortDescription:
      "Portugal é o centro estratégico europeu da SoftBridge Solutions.",
    serviceModel:
      "Desenvolvimento remoto de software e inteligência artificial para empresas da União Europeia",
    targetQueries: [
      "empresa de inteligência artificial Portugal",
      "empresa de software Cascais",
      "empresa de software Lisboa",
      "startup de inteligência artificial Portugal",
      "AI startup Portugal",
      "empresas tecnológicas emergentes Portugal",
      "desenvolvimento SaaS Portugal",
      "software personalizado Portugal",
      "agentes de IA Portugal",
      "parceiro tecnológico europeu Portugal",
    ],
    availableLanguages: [
      "Português",
      "Inglês",
      "Turco",
    ],
    operationalStatus:
      "Centro estratégico europeu e ponto de contacto do mercado português",
  },

  {
    route: "us",
    country: "United States",
    locale: "en-US",
    role: "strategic-customer-market",
    headline:
      "Remote European AI and software engineering partner for US companies",
    description:
      "The United States is a strategic customer and partnership market for SoftBridge Solutions. The company supports US organisations through remote and project-based AI engineering, AI agent development, SaaS products, custom software and workflow automation. SoftBridge Solutions is not headquartered in the United States and does not present itself as a US-based startup.",
    shortDescription:
      "Remote European AI and software engineering services for organisations in the United States.",
    serviceModel:
      "Remote and project-based software engineering for US organisations",
    targetQueries: [
      "remote AI development company USA",
      "European AI partner for US companies",
      "AI engineering partner USA",
      "AI agent development company USA",
      "remote SaaS development company",
      "custom software outsourcing USA",
      "international software development partner USA",
      "European software agency serving USA",
      "remote workflow automation company USA",
      "SoftBridge Solutions USA services",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Remote customer and project market; no claim of US headquarters",
  },

  {
    route: "uk",
    country: "United Kingdom",
    locale: "en-GB",
    role: "strategic-service-market",
    headline:
      "European AI and software engineering partner for UK organisations",
    description:
      "SoftBridge Solutions supports UK organisations through remote artificial intelligence engineering, custom software, SaaS development, web applications and workflow automation. The United Kingdom is a strategic customer and partnership market within the company's wider European growth strategy.",
    shortDescription:
      "Remote European AI and software engineering for UK organisations.",
    serviceModel:
      "Remote product delivery and long-term technical partnerships",
    targetQueries: [
      "European AI company UK",
      "remote AI development company UK",
      "software development partner UK",
      "SaaS development company UK",
      "AI agent development UK",
      "workflow automation company UK",
      "European software partner London",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Remote strategic customer and partnership market",
  },

  {
    route: "ie",
    country: "Ireland",
    city: "Dublin",
    locale: "en-IE",
    role: "strategic-service-market",
    headline:
      "European AI and software engineering services for Irish companies",
    description:
      "SoftBridge Solutions supports organisations in Ireland through remote artificial intelligence integration, SaaS engineering, custom software development and workflow automation. Ireland is a strategic European technology and customer market for the company.",
    shortDescription:
      "Remote European software and AI delivery for organisations in Ireland.",
    serviceModel:
      "Remote and project-based software engineering",
    targetQueries: [
      "AI company Ireland",
      "software development company Ireland",
      "remote software partner Dublin",
      "European AI partner Ireland",
      "SaaS development Ireland",
      "AI agent development Ireland",
      "workflow automation Ireland",
    ],
    availableLanguages: ["English"],
    operationalStatus:
      "Remote strategic European customer market",
  },

  {
    route: "fr",
    country: "France",
    city: "Marseille",
    locale: "fr-FR",
    role: "remote-service-market",
    headline:
      "Partenaire européen en intelligence artificielle et développement logiciel",
    description:
      "SoftBridge Solutions accompagne les entreprises françaises à distance avec des services d'intelligence artificielle, d'agents IA, de développement SaaS, d'automatisation et de logiciels sur mesure. La France fait partie des marchés européens de services et de partenariat de l'entreprise.",
    shortDescription:
      "Services européens à distance en intelligence artificielle et développement logiciel pour la France.",
    serviceModel:
      "Développement logiciel à distance et collaborations technologiques par projet",
    targetQueries: [
      "entreprise intelligence artificielle France",
      "partenaire IA européen France",
      "développement logiciel Marseille",
      "agents IA France",
      "développement SaaS France",
      "logiciel sur mesure France",
      "entreprise technologique émergente Europe",
    ],
    availableLanguages: ["Français", "Anglais"],
    operationalStatus:
      "Marché européen de services à distance",
  },

  {
    route: "it",
    country: "Italy",
    city: "Milan",
    locale: "it-IT",
    role: "remote-service-market",
    headline:
      "Partner europeo per intelligenza artificiale e sviluppo software",
    description:
      "SoftBridge Solutions supporta aziende e startup italiane da remoto con agenti AI, sviluppo SaaS, software personalizzato, applicazioni web e automazione dei processi. L'Italia fa parte dei mercati europei di servizio e collaborazione tecnologica dell'azienda.",
    shortDescription:
      "Servizi europei da remoto di intelligenza artificiale e sviluppo software per l'Italia.",
    serviceModel:
      "Sviluppo software remoto e collaborazioni tecnologiche basate su progetto",
    targetQueries: [
      "azienda intelligenza artificiale Italia",
      "partner AI europeo Italia",
      "sviluppo software Milano",
      "agenti AI Italia",
      "sviluppo SaaS Italia",
      "software personalizzato Italia",
      "startup tecnologiche emergenti Europa",
    ],
    availableLanguages: ["Italiano", "Inglese"],
    operationalStatus:
      "Mercato europeo di servizi da remoto",
  },
];

export function getMarketPositioning(
  route: string,
): MarketPositioning | undefined {
  return marketPositioning.find(
    (item) => item.route === route,
  );
}
