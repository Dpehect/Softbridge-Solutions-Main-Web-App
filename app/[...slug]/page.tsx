import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, SiteFooter, SiteHeader } from "../site-shell";
import { pageMap, pages, realProjects, siteUrl } from "../content";
import { JsonLd } from "../structured-data";

type Props = { params: Promise<{ slug: string[] }> };

const offices = [
  { country: "Portugal", city: "Cascais", type: "Main registered office", address: "Rua Bordalo Pinheiro 25, Cascais, Portugal" },
  { country: "United States", city: "Beverly Hills", type: "Virtual correspondence address", address: "468 N Camden Drive, 2nd Floor, Beverly Hills, CA 90210, United States" },
  { country: "United Kingdom", city: "Kington", type: "Virtual correspondence address", address: "61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom" },
  { country: "Ireland", city: "Dublin", type: "Virtual correspondence address", address: "Unit 2, 1-2 Hanover Quay, Grand Canal Dock, Dublin 2, D02 C679, Ireland" },
  { country: "Italy", city: "Milan", type: "Virtual correspondence address", address: "Piazza Gae Aulenti 1, Torre B, 20124, Milan, Italy" },
  { country: "France", city: "Marseille", type: "Virtual correspondence address", address: "24 Av. du Prado, 13006 Marseille, France" },
] as const;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join("/");
  const p = pageMap.get(key);
  if (!p) return {};

  return {
    title: p.title,
    description: p.description,
    alternates: {
      canonical: `${siteUrl}/${p.slug === "tr" ? "tr" : p.slug}`,
      languages: {
        "en": `${siteUrl}/${p.slug.replace(/^tr\/?/, "")}`,
        "tr-TR": `${siteUrl}/tr/${p.slug.replace(/^tr\/?/, "")}`
      }
    },
    openGraph: {
      title: `${p.title} | Softbridge Solutions`,
      description: p.description,
      url: `${siteUrl}/${p.slug}`,
      type: "website",
      locale: p.locale === "tr" ? "tr_TR" : "en_US"
    }
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const key = slug.join("/");
  const p = pageMap.get(key);
  if (!p) notFound();

  const isTr = p.locale === "tr";
  const isLocations = key === "locations";
  
  // Custom Hub lists
  const isServicesHub = key === "services" || key === "tr/hizmetler";
  const isProjectsPage = key === "projects" || key === "tr/projeler";
  
  const hubItems = key === "services" 
    ? pages.filter((x) => x.locale === "en" && x.type === "service")
    : key === "tr/hizmetler"
    ? pages.filter((x) => x.locale === "tr" && x.type === "service")
    : [];

  const crumbs = [
    { name: isTr ? "Ana Sayfa" : "Home", url: isTr ? `${siteUrl}/tr` : siteUrl },
    { name: p.title, url: `${siteUrl}/${p.slug}` }
  ];

  return (
    <>
      <JsonLd page={p} crumbs={crumbs} url={`${siteUrl}/${p.slug}`} />
      <SiteHeader />
      <main className="article-page">
        <header className="article-hero grid-bg">
          <nav className="breadcrumbs" aria-label={isTr ? "Yol Haritası" : "Breadcrumb"}>
            <Link href={isTr ? "/tr" : "/"}>{isTr ? "Ana Sayfa" : "Home"}</Link>
            <span>/</span>
            <span>{p.title}</span>
          </nav>
          <p className="eyebrow">{p.eyebrow || (isTr ? "Bilgi Bankası" : "Reference page")} · Adana, Türkiye</p>
          <h1>{p.title}</h1>
          <p className="article-intro">{p.summary}</p>
          <div className="article-meta">
            <span>Softbridge Solutions</span>
            {p.updatedAt && <span>{isTr ? "Güncelleme:" : "Updated:"} {p.updatedAt}</span>}
            <span>{isTr ? "Resmi Sayfa" : "Reference page"}</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="toc">
            <p>{isTr ? "Bu Sayfada" : "On this page"}</p>
            {p.sections.map((s, i) => (
              <a href={`#section-${i}`} key={s.title}>{s.title}</a>
            ))}
            {isLocations && <a href="#office-maps">{isTr ? "Ofis Haritaları" : "Office maps"}</a>}
            {isProjectsPage && <a href="#projects-grid">{isTr ? "Ürün Kataloğu" : "Product catalog"}</a>}
            {p.faq && p.faq.length > 0 && <a href="#questions">{isTr ? "Sorular" : "Questions"}</a>}
          </aside>

          <article className="article-body">
            {p.sections.map((s, i) => (
              <section id={`section-${i}`} key={s.title}>
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
                  <Link href={`/${x.slug}`} key={x.slug}>
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
                <span className="section-number">Ürünler</span>
                <h2>{isTr ? "Doğrulanabilir Yazılım ve AI Sistemlerimiz" : "Verifiable Software & AI Systems"}</h2>
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
                          {isTr ? "Yayın Tarihi:" : "Released:"} {project.launchDate}
                        </p>

                        <div className="project-specs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
                          <div>
                            <strong>{isTr ? "Çözülen Problem" : "Problem Addressed"}</strong>
                            <p>{project.problem}</p>
                          </div>
                          <div>
                            <strong>{isTr ? "Hedef Kullanıcılar" : "Intended Users"}</strong>
                            <p>{project.users}</p>
                          </div>
                          <div>
                            <strong>{isTr ? "Özellikler & Fonksiyonellik" : "Functionality"}</strong>
                            <p>{project.functionality}</p>
                          </div>
                          <div>
                            <strong>{isTr ? "Sistem Mimarisi" : "Architecture"}</strong>
                            <p>{project.architecture}</p>
                          </div>
                        </div>

                        <div style={{ margin: "1rem 0" }}>
                          <strong>{isTr ? "Teknoloji Yığını" : "Technology Stack"}</strong>
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                            {project.techStack.map((tech) => (
                              <span key={tech} className="tech-badge" style={{ border: "1px solid var(--border)", padding: "0.2rem 0.6rem", fontSize: "0.85rem" }}>{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="project-specs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "1rem 0", fontSize: "0.9rem", color: "var(--foreground-muted)" }}>
                          <div>
                            <strong>{isTr ? "Mühendislik Zorlukları" : "Technical Challenges"}</strong>
                            <p>{project.challenges}</p>
                          </div>
                          <div>
                            <strong>{isTr ? "Bilinen Sınırlandırmalar" : "Known Limitations"}</strong>
                            <p>{project.limitations}</p>
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
                          <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className="button dark" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                            {isTr ? "Canlı Uygulama" : "Canlı Ürün"} <Arrow />
                          </a>
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: "0.9rem" }}>
                              {isTr ? "Kod Deposu (GitHub)" : "GitHub Repository"} <Arrow />
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            )}

            {isLocations && (
              <section id="office-maps" className="office-maps">
                <span className="section-number">Maps</span>
                <h2>{isTr ? "Kayıtlı Adresler" : "Correspondence Addresses"}</h2>
                <div className="map-grid">
                  {offices.map((office) => (
                    <article className="map-card" key={office.address}>
                      <iframe
                        title={`${office.city} ${office.type} map`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(office.address)}&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div>
                        <p className="eyebrow">{isTr ? (office.type === "Main registered office" ? "Kayıtlı Ofis" : "Yazışma Adresi") : office.type} · {office.country}</p>
                        <h3>{office.city}</h3>
                        <address>{office.address}</address>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {isTr ? "Haritada Aç" : "Open in Google Maps"} <Arrow />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {p.sources && p.sources.length > 0 && (
              <section className="source-section">
                <span className="section-number">{isTr ? "Kaynaklar" : "Sources"}</span>
                <h2>{isTr ? "Referans Kaynakları" : "Referenced Sources"}</h2>
                <p>
                  {isTr 
                    ? "Bu bağlantılar, yerel ve ulusal ekosistem sayfalarımızı doğrulanabilir resmi verilere dayandırmak amacıyla eklenmiştir." 
                    : "These links are included to keep local and national ecosystem pages grounded in public, official context."}
                </p>
                <ul>
                  {p.sources.map((x) => (
                    <li key={x.url}>
                      <a href={x.url} target="_blank" rel="noreferrer">
                        {x.name}
                      </a>{" "}
                      — <small>{x.supports} ({isTr ? "Erişim:" : "Accessed:"} {x.accessedAt})</small>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {p.faq && p.faq.length > 0 && (
              <section id="questions" className="faq-section">
                <span className="section-number">{isTr ? "SSS" : "FAQ"}</span>
                <h2>{isTr ? "Sıkça Sorulan Sorular" : "Questions, Answered"}</h2>
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

            <section className="related">
              <p className="eyebrow">{isTr ? "Keşfetmeye Devam Edin" : "Continue exploring"}</p>
              <h2>{isTr ? "Sistemleri Bağlayın." : "Connect the system."}</h2>
              <div>
                <Link href={isTr ? "/tr/hizmetler" : "/services"}>
                  {isTr ? "Tüm Hizmetler" : "All Services"} <Arrow />
                </Link>
                <Link href={isTr ? "/tr/projeler" : "/projects"}>
                  {isTr ? "Çalışan Ürünler" : "Verifiable Products"} <Arrow />
                </Link>
                <Link href={isTr ? "/tr/iletisim" : "/contact"}>
                  {isTr ? "İletişime Geçin" : "Discuss a Project"} <Arrow />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
