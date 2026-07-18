import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader, SiteFooter, Arrow } from "../site-shell";
import { JsonLd } from "../structured-data";

import { pageMap, realProjects, siteUrl } from "../../content";

import {
  getMarketByRoute,
  marketConfigs,
  routeTranslations,
} from "../../content/markets";

type Props = {
  params: Promise<{
    market: string;
  }>;
};

type MarketSeo = {
  title: string;
  description: string;
  locale: string;
  keywords: string[];
};

const marketSeo: Record<string, MarketSeo> = {
  tr: {
    title: "SoftBridge Solutions | Adana Yapay Zekâ ve Yazılım Şirketi",
    description:
      "Adana kökenli SoftBridge Solutions; yapay zekâ ajanları, özel yazılım, web uygulamaları, mobil uygulamalar ve SaaS platformları geliştiren teknoloji şirketidir.",
    locale: "tr_TR",
    keywords: [
      "Adana yazılım şirketi",
      "Adana yazılım firmaları",
      "Adana yapay zeka şirketi",
      "Adana teknoloji şirketi",
      "Türkiye yapay zeka girişimi",
      "özel yazılım geliştirme",
      "SaaS geliştirme",
      "web geliştirme Adana",
      "mobil uygulama geliştirme",
      "SoftBridge Solutions",
    ],
  },

  en: {
    title: "SoftBridge Solutions | Global AI and Software Company",
    description:
      "AI-first technology company developing AI agents, custom software, SaaS platforms, web applications and mobile products for international organizations.",
    locale: "en_US",
    keywords: [
      "AI software company",
      "AI agent development company",
      "custom software development",
      "SaaS development company",
      "enterprise AI engineering",
      "web application development",
      "mobile application development",
      "SoftBridge Solutions",
    ],
  },

  pt: {
    title:
      "SoftBridge Solutions | Empresa de IA e Software em Portugal",
    description:
      "Empresa tecnológica com presença de correspondência em Cascais, especializada em agentes de IA, software personalizado, aplicações web, mobile e plataformas SaaS.",
    locale: "pt_PT",
    keywords: [
      "empresa de software Cascais",
      "empresa de software Portugal",
      "empresa de inteligência artificial Portugal",
      "desenvolvimento de software Portugal",
      "agentes de IA Portugal",
      "desenvolvimento SaaS",
      "software personalizado Portugal",
      "SoftBridge Solutions",
    ],
  },

  us: {
    title:
      "SoftBridge Solutions | AI and Software Development Company USA",
    description:
      "AI-first software company serving US organizations with AI agents, custom software, SaaS platforms, web applications and workflow automation.",
    locale: "en_US",
    keywords: [
      "AI development company USA",
      "custom software development USA",
      "AI agent development company",
      "SaaS development company USA",
      "enterprise AI development",
      "workflow automation company",
      "SoftBridge Solutions",
    ],
  },

  uk: {
    title:
      "SoftBridge Solutions | AI and Software Development Company UK",
    description:
      "AI and software engineering company serving UK businesses with custom software, AI agents, SaaS platforms and web application development.",
    locale: "en_GB",
    keywords: [
      "AI development company UK",
      "custom software company UK",
      "software development company UK",
      "AI agents UK",
      "SaaS development UK",
      "web application development UK",
      "SoftBridge Solutions",
    ],
  },

  ie: {
    title:
      "SoftBridge Solutions | AI and Software Development Ireland",
    description:
      "Software and AI engineering company serving organizations in Ireland with AI agents, SaaS products, workflow automation and custom applications.",
    locale: "en_IE",
    keywords: [
      "AI company Ireland",
      "software development Ireland",
      "custom software company Dublin",
      "AI agent development Ireland",
      "SaaS development Ireland",
      "workflow automation Ireland",
      "SoftBridge Solutions",
    ],
  },

  fr: {
    title:
      "SoftBridge Solutions | Entreprise d’IA et de logiciels en France",
    description:
      "Entreprise technologique spécialisée dans les agents IA, les logiciels sur mesure, les applications web, mobiles et les plateformes SaaS.",
    locale: "fr_FR",
    keywords: [
      "entreprise intelligence artificielle France",
      "développement logiciel France",
      "agence IA Marseille",
      "agents IA France",
      "logiciel sur mesure France",
      "développement SaaS France",
      "SoftBridge Solutions",
    ],
  },

  it: {
    title: "SoftBridge Solutions | Azienda di IA e Software in Italia",
    description:
      "Azienda tecnologica specializzata in agenti AI, software personalizzato, applicazioni web, mobile e piattaforme SaaS.",
    locale: "it_IT",
    keywords: [
      "azienda intelligenza artificiale Italia",
      "sviluppo software Milano",
      "azienda software Italia",
      "agenti AI Italia",
      "sviluppo SaaS Italia",
      "software personalizzato Italia",
      "SoftBridge Solutions",
    ],
  },
};

export function generateStaticParams() {
  return marketConfigs.map((market) => ({
    market: market.route,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { market } = await params;
  const marketConfig = getMarketByRoute(market);

  if (!marketConfig) {
    return {};
  }

  const seo = marketSeo[market] ?? marketSeo.en;
  const canonical = `${siteUrl}/${market}`;

  const languages: Record<string, string> = {};

  for (const configuredMarket of marketConfigs) {
    languages[configuredMarket.defaultLocale] =
      `${siteUrl}/${configuredMarket.route}`;
  }

  languages["x-default"] = `${siteUrl}/en`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    alternates: {
      canonical,
      languages,
    },

    openGraph: {
      type: "website",
      url: canonical,
      title: seo.title,
      description: seo.description,
      siteName: "SoftBridge Solutions",
      locale: seo.locale,
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: `${seo.title} — SoftBridge Solutions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/og.png`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

const stages = [
  [
    "01",
    "Frame",
    "Define the decision, workflow and measurable operating constraint before selecting technology.",
  ],
  [
    "02",
    "Prototype",
    "Test the smallest useful system with representative data, users and failure cases.",
  ],
  [
    "03",
    "Engineer",
    "Build evaluation, observability, security and human control into the production path.",
  ],
  [
    "04",
    "Operate",
    "Measure quality and cost continuously; improve the system as models and work change.",
  ],
];

export default async function MarketHome({ params }: Props) {
  const { market } = await params;
  const marketConfig = getMarketByRoute(market);

  if (!marketConfig) {
    notFound();
  }

  const locale = marketConfig.defaultLocale;
  const isTr = locale === "tr";

  const { pages } = await import("../../content");

  const serviceSlugs = [
    "web-development",
    "mobile-development",
    "saas-development",
    "custom-software",
    "cloud-applications",
    "desenvolvimento-web",
    "desenvolvimento-mobile",
    "desenvolvimento-saas",
    "software-personalizado",
    "developpement-web",
    "developpement-mobile",
    "developpement-saas",
    "logiciel-sur-mesure",
    "sviluppo-web",
    "sviluppo-mobile",
    "sviluppo-saas",
    "software-personalizzato",
  ];

  const aiSlugs = [
    "ai-agents",
    "enterprise-ai",
    "generative-ai",
    "agentes-de-ia",
    "ia-empresarial",
    "ia-generativa",
    "agents-ia",
    "ia-entreprise",
    "ia-generative",
    "agenti-ai",
    "ia-aziendale",
  ];

  const services = pages.filter(
    (page) =>
      page.locale === locale &&
      page.type === "service" &&
      serviceSlugs.some((slug) => page.slug.includes(slug)),
  );

  const solutions = pages.filter(
    (page) =>
      page.locale === locale &&
      aiSlugs.some((slug) => page.slug.includes(slug)),
  );

  const localizedProjects = realProjects
    .filter((project) => project.locale === locale)
    .slice(0, 3);

  const fallbackProjects = realProjects
    .filter((project) => project.locale === "en")
    .slice(0, 3);

  const displayProjects =
    localizedProjects.length > 0
      ? localizedProjects
      : fallbackProjects;

  const page =
    pageMap.get(`${locale}/en`) ??
    pageMap.get(`${locale}/tr`) ??
    pageMap.get(`${locale}/pt`) ??
    pageMap.get(`${locale}/`);

  const translatedRoute = (routeKey: string) => {
    const translatedSlug =
      routeTranslations[routeKey]?.[market] ?? routeKey;

    return `/${market}/${translatedSlug}`;
  };

  const marketDisplayName = (() => {
    switch (market) {
      case "tr":
        return "Adana, Türkiye";
      case "pt":
        return "Cascais, Portugal";
      case "us":
        return "United States";
      case "uk":
        return "United Kingdom";
      case "ie":
        return "Ireland";
      case "fr":
        return "France";
      case "it":
        return "Italy";
      default:
        return "Adana, Türkiye";
    }
  })();

  return (
    <>
      <JsonLd
        page={page}
        url={`${siteUrl}/${market}`}
        language={locale}
        market={market}
      />

      <SiteHeader />

      <main>
        <section className="hero grid-bg">
          <div className="eyebrow reveal">
            {marketDisplayName} ·{" "}
            {isTr
              ? "Küresel pazarlar için"
              : "Built for global markets"}
          </div>

          <h1 className="display reveal delay-1">
            {isTr ? "Sınırlar olmadan" : "Technology without"}
            <br />
            {isTr ? "teknoloji." : "borders."}
          </h1>

          <div className="hero-lower reveal delay-2">
            <p className="lede">
              {isTr
                ? "SoftBridge Solutions, işletmeler için otonom yapay zekâ ajanları ve özel dijital ürünler geliştiren Adana kökenli bir teknoloji şirketidir. Uluslararası kullanıcılar, karmaşık operasyonlar ve uzun vadeli büyüme hedefleri için yazılım tasarlıyoruz."
                : "SoftBridge Solutions is an AI-first technology company engineering digital products for ambitious organizations. Founded in Adana, Türkiye, we design software for international users, complex operations and long-term growth."}
            </p>

            <div className="hero-actions">
              <Link
                className="button dark"
                href={translatedRoute("contact")}
              >
                {isTr
                  ? "Projenizi görüşün"
                  : "Discuss a product"}{" "}
                <Arrow />
              </Link>

              <Link
                className="text-link"
                href={translatedRoute("services")}
              >
                {isTr
                  ? "Hizmetleri keşfedin"
                  : "Explore services"}{" "}
                <Arrow />
              </Link>
            </div>
          </div>

          <div className="signal-path" aria-hidden="true">
            <i />
            <span>{isTr ? "strateji" : "strategy"}</span>

            <i />
            <span>{isTr ? "sistemler" : "systems"}</span>

            <i />
            <span>{isTr ? "operasyonlar" : "operations"}</span>

            <b />
          </div>
        </section>

        <section className="statement section dark-panel">
          <p className="section-kicker">
            {isTr ? "Bizim Bakış Açımız" : "Our perspective"}
          </p>

          <h2>
            {isTr
              ? "Küresel yazılım ürünleri; net kararlar, disiplinli yazılım mühendisliği ve yüksek uygulama standartlarıyla başlar."
              : "Global products begin with clear thinking, rigorous engineering and an uncompromising standard of execution."}
          </h2>

          <div className="statement-copy">
            <p>
              {isTr
                ? "Ürün stratejisi, arayüz tasarımı, yazılım mimarisi, yapay zekâ entegrasyonu ve bulut mühendisliğini tek bir çatı altında birleştiriyoruz."
                : "We unite product strategy, design, software architecture, AI and cloud engineering in one delivery practice. Every system is shaped for international scale."}
            </p>
          </div>
        </section>

        <section
          className="section solutions"
          id="portfolio"
        >
          <div className="section-head">
            <div>
              <p className="section-kicker">
                {isTr ? "Ürün Portföyü" : "Product Portfolio"}
              </p>

              <h2>
                {isTr ? "Sözlerden önce" : "Public products,"}
                <br />
                {isTr ? "çalışan ürünler." : "not promises."}
              </h2>
            </div>

            <p>
              {isTr
                ? "Yapay zekâ ve yazılım alanındaki somut, çalışan ve doğrulanabilir ürünlerimiz."
                : "Our tangible and working applications, from local agents to SaaS platforms."}
            </p>
          </div>

          <div className="solution-list">
            {displayProjects.map((project, index) => (
              <article
                className="solution-row"
                key={project.slug}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "2rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="row-index">
                    0{index + 1}
                  </span>

                  <h3
                    style={{
                      flex: 1,
                      margin: "0 1.5rem",
                    }}
                  >
                    {project.name}
                  </h3>

                  <span
                    className="tag"
                    style={{
                      fontSize: "0.85rem",
                      opacity: 0.7,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <p
                  style={{
                    margin: "1rem 0 1rem 3rem",
                    fontSize: "0.95rem",
                    color: "var(--foreground-muted)",
                  }}
                >
                  {project.problem}
                </p>

                <div
                  style={{
                    margin: "0 0 0 3rem",
                  }}
                >
                  <a
                    href={project.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{
                      marginRight: "1.5rem",
                    }}
                  >
                    {isTr ? "Canlı adres" : "Live deployment"}{" "}
                    <Arrow />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      GitHub <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}

            <div
              style={{
                marginTop: "2rem",
                paddingLeft: "3rem",
              }}
            >
              <Link
                className="button dark"
                href={translatedRoute("projects")}
              >
                {isTr ? "Tüm ürünler" : "View all products"}{" "}
                <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section solutions"
          id="capabilities"
        >
          <div className="section-head">
            <div>
              <p className="section-kicker">
                {isTr ? "Hizmetlerimiz" : "Services"}
              </p>

              <h2>
                {isTr
                  ? "Fikirden çalışan ürünlere."
                  : "From idea to operating product."}
              </h2>
            </div>
          </div>

          <div className="solution-list">
            {services.map((item, index) => (
              <Link
                href={`/${market}/${item.slug}`}
                className="solution-row"
                key={`${item.locale}-${item.slug}`}
              >
                <span className="row-index">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section
          className="section solutions"
          id="ai"
        >
          <div className="section-head">
            <div>
              <p className="section-kicker">
                {isTr ? "Yapay Zekâ" : "AI systems"}
              </p>

              <h2>
                {isTr
                  ? "Yazılımla bütünleşik modeller."
                  : "Models inside real software."}
              </h2>
            </div>
          </div>

          <div className="solution-list">
            {solutions.map((item, index) => (
              <Link
                href={`/${market}/${item.slug}`}
                className="solution-row"
                key={`${item.locale}-${item.slug}`}
              >
                <span className="row-index">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section statement global-statement">
          <p className="section-kicker">
            {isTr ? "Küresel Ufuk" : "Global outlook"}
          </p>

          <h2>
            {isTr
              ? "Adana Kökenli. Dünya İçin Geliştirildi."
              : "Rooted in Adana. Engineered for the world."}
          </h2>

          <div className="statement-copy">
            <p>
              {isTr
                ? "Adana kökenli mühendislik yapımızı Cascais, Portekiz'deki kayıtlı yazışma adresimiz ve uluslararası hizmet bölgelerimizle birleştiriyoruz."
                : "Founded in Adana, Türkiye, we combine regional engineering experience with a registered correspondence presence in Cascais, Portugal and international service coverage."}
            </p>

            <Link
              className="text-link"
              href={translatedRoute("about")}
            >
              {isTr
                ? "Şirketi keşfedin"
                : "Discover SoftBridge"}{" "}
              <Arrow />
            </Link>
          </div>
        </section>

        <section className="section office-strip">
          <p className="section-kicker">
            {isTr
              ? "Kayıtlı Adres ve Hizmet Bölgeleri"
              : "Registered Address & Service Areas"}
          </p>

          <div>
            <strong>
              {isTr
                ? "Kayıtlı yazışma adresi"
                : "Registered correspondence address"}
            </strong>

            <span>
              Rua Bordalo Pinheiro 25 · Cascais, Portugal
            </span>
          </div>

          <div>
            <strong>
              {isTr
                ? "Uluslararası hizmet bölgeleri"
                : "International service areas"}
            </strong>

            <span>
              Türkiye · Portugal · United States · United
              Kingdom · Ireland · France · Italy
            </span>
          </div>

          <Link
            className="text-link"
            href={translatedRoute("locations")}
          >
            {isTr
              ? "Tüm konumları görün"
              : "View locations"}{" "}
            <Arrow />
          </Link>
        </section>

        <section
          className="section"
          aria-labelledby="delivery-process-title"
        >
          <div className="section-head">
            <div>
              <p className="section-kicker">
                {isTr ? "Çalışma Sistemi" : "Delivery system"}
              </p>

              <h2 id="delivery-process-title">
                {isTr
                  ? "Kontrollü ve ölçülebilir ürün geliştirme."
                  : "Controlled and measurable product delivery."}
              </h2>
            </div>
          </div>

          <div className="solution-list">
            {stages.map(([number, title, description]) => (
              <div
                className="solution-row"
                key={number}
              >
                <span className="row-index">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
