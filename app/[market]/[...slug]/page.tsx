import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, SiteFooter, SiteHeader } from "../../site-shell";
import { pageMap, pages, realProjects, siteUrl } from "../../../content";
import { JsonLd } from "../../structured-data";
import { getMarketByRoute, marketConfigs, routeTranslations } from "../../../content/markets";

type Props = { params: Promise<{ market: string; slug: string[] }> };

export function generateStaticParams() {
  const params: { market: string; slug: string[] }[] = [];
  marketConfigs.forEach((m) => {
    pages.filter(p => p.locale === m.defaultLocale).forEach(p => {
      if (p.slug !== "en" && p.slug !== "tr" && p.slug !== "pt" && p.slug !== "fr" && p.slug !== "it" && p.slug !== "") {
        params.push({ market: m.route, slug: p.slug.split("/") });
      }
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market, slug } = await params;
  const marketConfig = getMarketByRoute(market);
  if (!marketConfig) return {};

  const key = `\${marketConfig.defaultLocale}/\${slug.join("/")}`;
  const p = pageMap.get(key);
  if (!p) return {};

  // Generate languages object for alternates
  const languages: Record<string, string> = {};
  marketConfigs.forEach(m => {
    // Find the equivalent slug for this market
    // We can do a reverse lookup or just use a helper
    // Actually, for SEO it's easier to just link to the market root if translation isn't 1:1, but here we can try
    // For simplicity, we just link to the known translations if they exist
    const translatedSlug = slug.join("/");
    // Very basic fallback
    languages[m.defaultLocale.replace('-', '_')] = `\${siteUrl}/\${m.route}/\${translatedSlug}`;
  });
  languages["x-default"] = `\${siteUrl}/en/\${slug.join("/")}`;

  return {
    title: p.title,
    description: p.description,
    alternates: {
      canonical: `\${siteUrl}/\${market}/\${slug.join("/")}`,
      languages
    },
    openGraph: {
      title: `\${p.title} | SoftBridge Solutions`,
      description: p.description,
      url: `\${siteUrl}/\${market}/\${slug.join("/")}`,
      type: "website",
      locale: p.locale.replace('-', '_')
    }
  };
}

const offices = [
  { country: "Portugal", city: "Cascais", type: "Main registered office", address: "Rua Bordalo Pinheiro 25, Cascais, Portugal" },
  { country: "United States", city: "Beverly Hills", type: "Virtual correspondence address", address: "468 N Camden Drive, 2nd Floor, Beverly Hills, CA 90210, United States" },
  { country: "United Kingdom", city: "Kington", type: "Virtual correspondence address", address: "61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom" },
  { country: "Ireland", city: "Dublin", type: "Virtual correspondence address", address: "Unit 2, 1-2 Hanover Quay, Grand Canal Dock, Dublin 2, D02 C679, Ireland" },
  { country: "Italy", city: "Milan", type: "Virtual correspondence address", address: "Piazza Gae Aulenti 1, Torre B, 20124, Milan, Italy" },
  { country: "France", city: "Marseille", type: "Virtual correspondence address", address: "24 Av. du Prado, 13006 Marseille, France" },
] as const;

export default async function TopicPage({ params }: Props) {
  const { market, slug } = await params;
  const marketConfig = getMarketByRoute(market);
  if (!marketConfig) notFound();

  const joinedSlug = slug.join("/");
  const key = `\${marketConfig.defaultLocale}/\${joinedSlug}`;
  const p = pageMap.get(key);
  
  if (!p) notFound();

  const isTr = p.locale === "tr";
  const isLocations = joinedSlug === "locations" || joinedSlug === "konumlar" || joinedSlug === "localizacoes" || joinedSlug === "emplacements" || joinedSlug === "sedi";
  
  const isServicesHub = joinedSlug === "services" || joinedSlug === "hizmetler" || joinedSlug === "servicos" || joinedSlug === "servizi";
  const isProjectsPage = joinedSlug === "projects" || joinedSlug === "projeler" || joinedSlug === "projetos" || joinedSlug === "projets" || joinedSlug === "progetti";
  
  const hubItems = isServicesHub ? pages.filter((x) => x.locale === p.locale && x.type === "service") : [];

  const crumbs = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `\${siteUrl}/\${market}` },
    { name: p.title, url: `\${siteUrl}/\${market}/\${joinedSlug}` }
  ];

  return (
    <>
      <JsonLd page={p} crumbs={crumbs} url={`\${siteUrl}/\${market}/\${joinedSlug}`} />
      <SiteHeader />
      <main className="article-page">
        <header className="article-hero grid-bg">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/\${market}`}>{isTr ? "Ana Sayfa" : "Home"}</Link>
            <span>/</span>
            <span>{p.title}</span>
          </nav>
          <p className="eyebrow">{p.eyebrow || (isTr ? "Bilgi Bankası" : "Reference page")} · Adana, Türkiye</p>
          <h1>{p.title}</h1>
          <p className="article-intro">{p.summary}</p>
          <div className="article-meta">
            <span>SoftBridge Solutions</span>
            {p.updatedAt && <span>Updated: {p.updatedAt}</span>}
          </div>
        </header>

        <div className="article-layout">
          <aside className="toc">
            <p>{isTr ? "Bu Sayfada" : "On this page"}</p>
            {p.sections.map((s, i) => (
              <a href={`#section-\${i}`} key={s.title}>{s.title}</a>
            ))}
            {isLocations && <a href="#office-maps">Maps</a>}
            {isProjectsPage && <a href="#projects-grid">Products</a>}
            {p.faq && p.faq.length > 0 && <a href="#questions">FAQ</a>}
          </aside>

          <article className="article-body">
            {p.sections.map((s, i) => (
              <section id={`section-\${i}`} key={s.title}>
                <span className="section-number">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p style={{ whiteSpace: "pre-line" }}>{s.body}</p>
                {s.bullets && (
                  <ul>
                    {s.bullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {isServicesHub && (
              <section className="hub-grid" aria-label={p.title}>
                {hubItems.map((x, i) => (
                  <Link href={`/\${market}/\${x.slug}`} key={x.slug}>
                    <span>0{i + 1}</span>
                    <h2>{x.title}</h2>
                    <p>{x.description}</p>
                    <Arrow />
                  </Link>
                ))}
              </section>
            )}

            {isProjectsPage && (
              <section id="projects-grid" className="projects-grid-section">
                <span className="section-number">Products</span>
                <h2>Verifiable Software & AI Systems</h2>
                <div className="projects-container">
                  {realProjects
                    .filter((x) => x.locale === (isTr ? "tr" : "en"))
                    .map((project) => (
                      <article className="project-card-detail" key={project.slug} style={{ borderBottom: "1px solid var(--border)", padding: "2rem 0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
                          <h3 style={{ margin: 0, fontSize: "1.75rem" }}>{project.name}</h3>
                          <span className="tag" style={{ background: "var(--panel-dark)", padding: "0.25rem 0.75rem", borderRadius: "2px", fontSize: "0.85rem" }}>{project.category}</span>
                        </div>
                        <p style={{ fontSize: "0.95rem", color: "var(--foreground-muted)", margin: "0.5rem 0" }}>
                          Released: {project.launchDate}
                        </p>

                        <div className="project-specs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
                          <div>
                            <strong>Problem Addressed</strong>
                            <p>{project.problem}</p>
                          </div>
                          <div>
                            <strong>Intended Users</strong>
                            <p>{project.users}</p>
                          </div>
                          <div>
                            <strong>Functionality</strong>
                            <p>{project.functionality}</p>
                          </div>
                          <div>
                            <strong>Architecture</strong>
                            <p>{project.architecture}</p>
                          </div>
                        </div>

                        <div style={{ margin: "1rem 0" }}>
                          <strong>Technology Stack</strong>
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                            {project.techStack.map((tech) => (
                              <span key={tech} className="tech-badge" style={{ border: "1px solid var(--border)", padding: "0.2rem 0.6rem", fontSize: "0.85rem" }}>{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
                          <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className="button dark" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                            Live Deployment <Arrow />
                          </a>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            )}

            {isLocations && (
              <section id="office-maps" className="office-maps">
                <span className="section-number">Maps</span>
                <h2>Correspondence Addresses</h2>
                <div className="map-grid">
                  {offices.map((office) => (
                    <article className="map-card" key={office.address}>
                      <iframe
                        title={`\${office.city} \${office.type} map`}
                        src={`https://www.google.com/maps?q=\${encodeURIComponent(office.address)}&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div>
                        <p className="eyebrow">{office.type} · {office.country}</p>
                        <h3>{office.city}</h3>
                        <address>{office.address}</address>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {p.faq && p.faq.length > 0 && (
              <section id="questions" className="faq-section">
                <span className="section-number">FAQ</span>
                <h2>Questions, Answered</h2>
                {p.faq.map((x) => (
                  <details key={x.question}>
                    <summary>
                      {x.question}
                      <span>+</span>
                    </summary>
                    <p>{x.answer}</p>
                  </details>
                ))}
              </section>
            )}
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
