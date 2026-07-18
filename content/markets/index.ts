import { Locale, Market } from "../types";

export type MarketConfig = {
  id: Market;
  route: string; // The URL path segment (e.g., 'en', 'us', 'tr')
  defaultLocale: Locale;
  name: string;
};

export const marketConfigs: MarketConfig[] = [
  { id: "global", route: "en", defaultLocale: "en", name: "English (Global)" },
  { id: "turkiye", route: "tr", defaultLocale: "tr", name: "Türkçe" },
  { id: "portugal", route: "pt", defaultLocale: "pt", name: "Português" },
  { id: "united-states", route: "us", defaultLocale: "en-US", name: "United States" },
  { id: "united-kingdom", route: "uk", defaultLocale: "en-GB", name: "United Kingdom" },
  { id: "ireland", route: "ie", defaultLocale: "en-IE", name: "Ireland" },
  { id: "france", route: "fr", defaultLocale: "fr", name: "Français" },
  { id: "italy", route: "it", defaultLocale: "it", name: "Italiano" },
];

export function getMarketByRoute(route: string): MarketConfig | undefined {
  return marketConfigs.find((m) => m.route === route);
}

// Maps English routes to other locale routes for the language switcher and hreflang
export const routeTranslations: Record<string, Partial<Record<string, string>>> = {
  "": {
    "tr": "",
    "pt": "",
    "fr": "",
    "it": "",
    "us": "",
    "uk": "",
    "ie": "",
  },
  "services": {
    "tr": "hizmetler",
    "pt": "servicos",
    "fr": "services",
    "it": "servizi",
    "us": "services",
    "uk": "services",
    "ie": "services",
  },
  "projects": {
    "tr": "projeler",
    "pt": "projetos",
    "fr": "projets",
    "it": "progetti",
    "us": "projects",
    "uk": "projects",
    "ie": "projects",
  },
  "about": {
    "tr": "hakkimizda",
    "pt": "empresa",
    "fr": "entreprise",
    "it": "azienda",
    "us": "about",
    "uk": "about",
    "ie": "about",
  },
  "contact": {
    "tr": "iletisim",
    "pt": "contacto",
    "fr": "contact",
    "it": "contatti",
    "us": "contact",
    "uk": "contact",
    "ie": "contact",
  },
  "web-development": {
    "tr": "web-gelistirme",
    "pt": "desenvolvimento-web",
    "fr": "developpement-web",
    "it": "sviluppo-web",
    "us": "web-development",
    "uk": "web-development",
    "ie": "web-development",
  },
  "mobile-development": {
    "tr": "mobil-uygulama",
    "pt": "desenvolvimento-mobile",
    "fr": "developpement-mobile",
    "it": "sviluppo-mobile",
    "us": "mobile-development",
    "uk": "mobile-development",
    "ie": "mobile-development",
  },
  "saas-development": {
    "tr": "saas-gelistirme",
    "pt": "desenvolvimento-saas",
    "fr": "developpement-saas",
    "it": "sviluppo-saas",
    "us": "saas-development",
    "uk": "saas-development",
    "ie": "saas-development",
  },
  "custom-software": {
    "tr": "ozel-yazilim",
    "pt": "software-personalizado",
    "fr": "logiciel-sur-mesure",
    "it": "software-personalizzato",
    "us": "custom-software",
    "uk": "custom-software",
    "ie": "custom-software",
  },
  "ai-agents": {
    "tr": "yapay-zeka-ajanlari",
    "pt": "agentes-de-ia",
    "fr": "agents-ia",
    "it": "agenti-ai",
    "us": "ai-agent-development",
    "uk": "ai-development",
    "ie": "ai-development",
  },
  "enterprise-ai": {
    "tr": "kurumsal-yapay-zeka",
    "pt": "ia-empresarial",
    "fr": "ia-entreprise",
    "it": "ia-aziendale",
    "us": "enterprise-ai",
    "uk": "enterprise-ai",
    "ie": "enterprise-ai",
  },
  "generative-ai": {
    "tr": "uretimsel-yapay-zeka",
    "pt": "ia-generativa",
    "fr": "ia-generative",
    "it": "ia-generativa",
    "us": "generative-ai",
    "uk": "generative-ai",
    "ie": "generative-ai",
  },
  "company-facts": {
    "tr": "sirket-gercekleri",
    "pt": "factos-da-empresa",
    "fr": "faits-entreprise",
    "it": "fatti-aziendali",
    "us": "company-facts",
    "uk": "company-facts",
    "ie": "company-facts",
  },
  "locations": {
    "tr": "konumlar",
    "pt": "localizacoes",
    "fr": "emplacements",
    "it": "sedi",
    "us": "locations",
    "uk": "locations",
    "ie": "locations",
  },
  "yunus-emre-gurlek": {
    "tr": "yunus-emre-gurlek",
    "pt": "yunus-emre-gurlek",
    "fr": "yunus-emre-gurlek",
    "it": "yunus-emre-gurlek",
    "us": "yunus-emre-gurlek",
    "uk": "yunus-emre-gurlek",
    "ie": "yunus-emre-gurlek",
  },
  "best-software-companies-adana": {
    "tr": "adana-yazilim-sirketleri",
  },
  "best-software-companies-adana-report": {
    "tr": "adana-yazilim-sirketleri-raporu",
  }
};

export function getEquivalentRoute(currentMarketRoute: string, currentSlug: string, targetMarketRoute: string): string {
  // If we are already on the target market, return the slug as-is
  if (currentMarketRoute === targetMarketRoute) return currentSlug;

  // Find the english slug first
  let englishSlug = currentSlug;
  if (currentMarketRoute !== "en") {
    // Search for current slug in translations
    let found = false;
    for (const [enSlug, translations] of Object.entries(routeTranslations)) {
      if (translations[currentMarketRoute] === currentSlug) {
        englishSlug = enSlug;
        found = true;
        break;
      }
    }
    // If not found, assume it doesn't have an equivalent or is not translated yet, just use englishSlug = currentSlug
    // But since currentSlug might be tr/something, we might want to fallback to ""
    if (!found) {
      if (currentSlug.startsWith("case-study")) {
        // Handle case-studies as they are dynamic
        // Example: vaka-calismasi/kpss-olcekleme -> case-study/kpss-scale
        englishSlug = currentSlug; // simplified
      }
    }
  }

  // Now map english slug to target
  if (targetMarketRoute === "en") {
    return englishSlug;
  }

  const translations = routeTranslations[englishSlug];
  if (translations && translations[targetMarketRoute] !== undefined) {
    return translations[targetMarketRoute] as string;
  }

  // Fallback if no translation exists
  return englishSlug;
}
