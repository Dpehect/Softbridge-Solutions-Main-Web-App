import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, Arrow } from "../site-shell";
import { JsonLd } from "../structured-data";
import { pageMap, realProjects, siteUrl } from "../../content";
import { getMarketByRoute, marketConfigs, routeTranslations } from "../../content/markets";

type Props = { params: Promise<{ market: string }> };

export function generateStaticParams() {
  return marketConfigs.map((m) => ({ market: m.route }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market } = await params;
  const marketConfig = getMarketByRoute(market);
  if (!marketConfig) return {};

  const p = pageMap.get(`\${marketConfig.defaultLocale}/en`) || pageMap.get(`\${marketConfig.defaultLocale}/tr`) || pageMap.get(`\${marketConfig.defaultLocale}/`);
  
  if (!p) {
    return { title: "SoftBridge Solutions" };
  }

  // Generate languages object for alternates
  const languages: Record<string, string> = {};
  marketConfigs.forEach(m => {
    languages[m.defaultLocale.replace('-', '_')] = `\${siteUrl}/\${m.route}`;
  });
  languages["x-default"] = `\${siteUrl}/en`;

  return {
    title: p.title,
    description: p.description,
    alternates: {
      canonical: `\${siteUrl}/\${market}`,
      languages
    },
  };
}

const stages = [
  ["01", "Frame", "Define the decision, workflow and measurable operating constraint before selecting technology."],
  ["02", "Prototype", "Test the smallest useful system with representative data, users and failure cases."],
  ["03", "Engineer", "Build evaluation, observability, security and human control into the production path."],
  ["04", "Operate", "Measure quality and cost continuously; improve the system as models and work change."],
];

export default async function MarketHome({ params }: Props) {
  const { market } = await params;
  const marketConfig = getMarketByRoute(market);
  if (!marketConfig) notFound();

  const locale = marketConfig.defaultLocale;
  const isTr = locale === "tr";
  
  // Actually, we don't need a specific 'en' page, we can query by locale.
  // The 'pageMap' keys are `\${locale}/\${slug}`
  // We need to fetch the services for the homepage.
  // We need all pages from content where locale matches.
  // We import 'pages' from content to filter them.
  const { pages } = await import("../../content");

  const services = pages.filter((x) => x.locale === locale && x.type === "service" && ["web-development", "mobile-development", "saas-development", "custom-software", "cloud-applications", "desenvolvimento-web", "developpement-web", "sviluppo-web", "software-personalizado", "logiciel-sur-mesure"].some(s => x.slug.includes(s)));
  
  const solutions = pages.filter((x) => x.locale === locale && ["ai-agents", "enterprise-ai", "generative-ai", "agentes-de-ia", "agents-ia", "agenti-ai", "ia-empresarial", "ia-entreprise", "ia-aziendale", "ia-generativa"].some(s => x.slug.includes(s)));
  
  const homeProjects = realProjects.filter((x) => x.locale === locale).slice(0, 3);
  
  // If we don't have projects for this locale, fallback to english ones
  const displayProjects = homeProjects.length > 0 ? homeProjects : realProjects.filter((x) => x.locale === "en").slice(0, 3);

  const p = pageMap.get(`\${locale}/en`) || pageMap.get(`\${locale}/tr`) || pageMap.get(`\${locale}/`) || pageMap.get(`\${locale}/pt`); // The slug of homepage is tricky, let's just get the first one for schema, or manually create schema

  const trSlug = (key: string) => `/\${market}/\${routeTranslations[key]?.[market] || key}`;

  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <section className="hero grid-bg">
          <div className="eyebrow reveal">Adana, Türkiye · {isTr ? "Küresel pazarlar için" : "Built for global markets"}</div>
          <h1 className="display reveal delay-1">{isTr ? "Sınırlar olmadan" : "Technology without"}<br />{isTr ? "teknoloji." : "borders."}</h1>
          <div className="hero-lower reveal delay-2">
            <p className="lede">
              {isTr 
                ? "SoftBridge Solutions, işletmeler için otonom yapay zekâ ajanları ve özel dijital ürünler geliştiren bir teknoloji şirketidir. Adana kökenli yapımızla, uluslararası kullanıcılar, karmaşık operasyonlar ve uzun vadeli büyüme hedefleri için yazılım tasarlıyoruz."
                : "SoftBridge Solutions is an AI-first technology company engineering digital products for ambitious organizations. From our base in Adana, we design software for international users, complex operations and long-term growth."}
            </p>
            <div className="hero-actions">
              <Link className="button dark" href={trSlug("contact")}>
                {isTr ? "Projenizi görüşün" : "Discuss a product"} <Arrow />
              </Link>
              <Link className="text-link" href={trSlug("services")}>
                {isTr ? "Hizmetleri keşfedin" : "Explore services"} <Arrow />
              </Link>
            </div>
          </div>
          <div className="signal-path" aria-hidden="true">
            <i /><span>{isTr ? "strateji" : "strategy"}</span>
            <i /><span>{isTr ? "sistemler" : "systems"}</span>
            <i /><span>{isTr ? "operasyonlar" : "operations"}</span>
            <b />
          </div>
        </section>

        <section className="statement section dark-panel">
          <p className="section-kicker">{isTr ? "Bizim Bakış Açımız" : "Our perspective"}</p>
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

        <section className="section solutions" id="portfolio">
          <div className="section-head">
            <div><p className="section-kicker">{isTr ? "Ürün Portföyü" : "Product Portfolio"}</p><h2>{isTr ? "Sözlerden önce" : "Public products,"}<br />{isTr ? "çalışan ürünler." : "not promises."}</h2></div>
            <p>{isTr ? "Yapay zekâ ve yazılım alanındaki somut yetkinliklerimiz." : "Our tangible and working applications, from local agents to SaaS platforms."}</p>
          </div>
          <div className="solution-list">
            {displayProjects.map((project, i) => (
              <div className="solution-row" key={project.slug} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span className="row-index">0{i + 1}</span>
                  <h3 style={{ flex: 1, margin: "0 1.5rem" }}>{project.name}</h3>
                  <span className="tag" style={{ fontSize: "0.85rem", opacity: 0.7 }}>{project.category}</span>
                </div>
                <p style={{ margin: "1rem 0 1rem 3rem", fontSize: "0.95rem", color: "var(--foreground-muted)" }}>{project.problem}</p>
                <div style={{ margin: "0 0 0 3rem" }}>
                  <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginRight: "1.5rem" }}>
                    {isTr ? "Canlı Adres" : "Live deployment"} <Arrow />
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                      GitHub <Arrow />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div style={{ marginTop: "2rem", paddingLeft: "3rem" }}>
              <Link className="button dark" href={trSlug("projects")}>{isTr ? "Tüm ürünler" : "View all products"} <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="section solutions" id="capabilities">
          <div className="section-head">
            <div><p className="section-kicker">{isTr ? "Hizmetlerimiz" : "Services"}</p><h2>{isTr ? "Fikirden çalışan ürünlere." : "From idea to operating product."}</h2></div>
          </div>
          <div className="solution-list">
            {services.map((item, i) => (
              <Link href={`/\${market}/\${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section solutions" id="ai">
          <div className="section-head">
            <div><p className="section-kicker">{isTr ? "Yapay Zekâ" : "AI systems"}</p><h2>{isTr ? "Yazılımla bütünleşik modeller." : "Models inside real software."}</h2></div>
          </div>
          <div className="solution-list">
            {solutions.map((item, i) => (
              <Link href={`/\${market}/\${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section statement global-statement">
          <p className="section-kicker">{isTr ? "Küresel Ufuk" : "Global outlook"}</p>
          <h2>{isTr ? "Adana Kökenli. Dünya İçin Geliştirildi." : "Rooted in Adana. Engineered for the world."}</h2>
          <div className="statement-copy">
            <p>
              {isTr 
                ? "Adana kökenli yapımızı Portekiz (Cascais) merkez ofisimiz ve Avrupa genelindeki yazışma adreslerimizle birleştiriyoruz."
                : "Founded in Adana, we combine regional engineering and startup experience with a main office in Cascais, Portugal and virtual correspondence addresses across major European hubs."}
            </p>
            <Link className="text-link" href={trSlug("about")}>{isTr ? "Şirketi Keşfedin" : "Discover SoftBridge"} <Arrow /></Link>
          </div>
        </section>

        <section className="section office-strip">
          <p className="section-kicker">{isTr ? "Kayıtlı Ofis & İletişim" : "Locations & Correspondence"}</p>
          <div><strong>{isTr ? "Resmi Adres" : "Registered office"}</strong><span>Rua Bordalo Pinheiro 25 · Cascais, Portugal</span></div>
          <div><strong>{isTr ? "Yazışma Adresleri" : "Mailing addresses"}</strong><span>Beverly Hills · Kington · Dublin · Milan · Marseille</span></div>
          <Link className="text-link" href={trSlug("locations")}>{isTr ? "Tüm konumları görün" : "View locations"} <Arrow /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
