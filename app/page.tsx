import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, Arrow } from "./site-shell";
import { JsonLd } from "./structured-data";
import { pages, realProjects } from "./content";

export const metadata: Metadata = {
  title: "Global AI & Software Product Company in Adana, Türkiye",
  description: "Softbridge Solutions is an AI-first technology company founded in Adana, engineering AI agents, web applications, SaaS platforms, and custom software for global markets.",
  alternates: { canonical: "/" },
};

const stages = [
  ["01", "Frame", "Define the decision, workflow and measurable operating constraint before selecting technology."],
  ["02", "Prototype", "Test the smallest useful system with representative data, users and failure cases."],
  ["03", "Engineer", "Build evaluation, observability, security and human control into the production path."],
  ["04", "Operate", "Measure quality and cost continuously; improve the system as models and work change."],
];

export default function Home() {
  const enServices = pages.filter((x) => x.locale === "en" && x.type === "service" && ["web-development", "mobile-development", "saas-development", "custom-software", "cloud-applications"].includes(x.slug));
  const enSolutions = pages.filter((x) => x.locale === "en" && ["ai-agents", "enterprise-ai", "generative-ai"].includes(x.slug));
  const homeProjects = realProjects.filter((x) => x.locale === "en").slice(0, 3);

  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <section className="hero grid-bg">
          <div className="eyebrow reveal">Adana, Türkiye · Built for global markets</div>
          <h1 className="display reveal delay-1">Technology without<br />borders.</h1>
          <div className="hero-lower reveal delay-2">
            <p className="lede">Softbridge Solutions is an AI-first technology company engineering digital products for ambitious organizations. From our base in Adana, we design software for international users, complex operations and long-term growth.</p>
            <div className="hero-actions">
              <Link className="button dark" href="/contact">Discuss a product <Arrow /></Link>
              <Link className="text-link" href="/services">Explore services <Arrow /></Link>
            </div>
          </div>
          <div className="signal-path" aria-hidden="true"><i /><span>strategy</span><i /><span>systems</span><i /><span>operations</span><b /></div>
        </section>

        <section className="statement section dark-panel">
          <p className="section-kicker">Our perspective</p>
          <h2>Global products begin with clear thinking, rigorous engineering and an uncompromising standard of execution.</h2>
          <div className="statement-copy">
            <p>We unite product strategy, design, software architecture, AI and cloud engineering in one delivery practice. Every system is shaped for international scale, operational clarity and continuous improvement.</p>
          </div>
        </section>

        {/* Verifiable Products Section */}
        <section className="section solutions" id="portfolio">
          <div className="section-head">
            <div><p className="section-kicker">Product Portfolio</p><h2>Public products,<br />not promises.</h2></div>
            <p>Somut ve çalışan uygulamalarımız. KPSS eğitim platformlarından otonom AI asistanlarına kadar geliştirdiğimiz sistemleri açık depolarla sunuyoruz.</p>
          </div>
          <div className="solution-list">
            {homeProjects.map((project, i) => (
              <div className="solution-row" key={project.slug} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span className="row-index">0{i + 1}</span>
                  <h3 style={{ flex: 1, margin: "0 1.5rem" }}>{project.name}</h3>
                  <span className="tag" style={{ fontSize: "0.85rem", opacity: 0.7 }}>{project.category}</span>
                </div>
                <p style={{ margin: "1rem 0 1rem 3rem", fontSize: "0.95rem", color: "var(--foreground-muted)" }}>{project.problem}</p>
                <div style={{ margin: "0 0 0 3rem" }}>
                  <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginRight: "1.5rem" }}>
                    Live deployment <Arrow />
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                      GitHub repository <Arrow />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div style={{ marginTop: "2rem", paddingLeft: "3rem" }}>
              <Link className="button dark" href="/projects">View all products <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="section solutions" id="capabilities">
          <div className="section-head">
            <div><p className="section-kicker">Services</p><h2>From idea to<br />operating product.</h2></div>
            <p>End-to-end capabilities for companies building intelligent products, mission-critical platforms and new digital ventures.</p>
          </div>
          <div className="solution-list">
            {enServices.map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
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
            <div><p className="section-kicker">AI systems</p><h2>Models inside<br />real software.</h2></div>
            <p>AI work is treated as product and systems engineering: retrieval, agents, evaluation, interfaces, security and workflow adoption together.</p>
          </div>
          <div className="solution-list">
            {enSolutions.map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section process grid-bg">
          <div className="section-head">
            <div><p className="section-kicker">Method</p><h2>Evidence before<br />scale.</h2></div>
            <p>Every engagement is structured to expose uncertainty early and create an auditable path from intent to operation.</p>
          </div>
          <div className="stage-grid">
            {stages.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="section statement global-statement">
          <p className="section-kicker">Global outlook</p>
          <h2>Rooted in Adana.<br />Engineered for the world.</h2>
          <div className="statement-copy">
            <p>Founded in Adana, we combine regional engineering and startup experience with a main office in Cascais, Portugal and virtual correspondence addresses across major European hubs.</p>
            <Link className="text-link" href="/about">Discover Softbridge <Arrow /></Link>
          </div>
        </section>

        <section className="section office-strip">
          <p className="section-kicker">Locations & Correspondence</p>
          <div><strong>Registered office</strong><span>Rua Bordalo Pinheiro 25 · Cascais, Portugal</span></div>
          <div><strong>Mailing addresses</strong><span>Beverly Hills · Kington · Dublin · Milan · Marseille</span></div>
          <Link className="text-link" href="/locations">View locations <Arrow /></Link>
        </section>

        <section className="section proof dark-panel">
          <p className="section-kicker">Responsible delivery</p>
          <div className="proof-grid">
            <h2>Designed for the questions that appear after the prototype.</h2>
            <div className="proof-points">
              <article><h3>How do we know it works?</h3><p>Task-specific evaluations, traceable test sets and operational measures defined before launch.</p></article>
              <article><h3>What happens when it fails?</h3><p>Bounded autonomy, clear escalation paths and human control at consequential decisions.</p></article>
              <article><h3>Can we understand the cost?</h3><p>Model, infrastructure and review costs observed against useful completed work—not token volume alone.</p></article>
            </div>
          </div>
        </section>

        <section className="cta grid-bg">
          <p className="section-kicker">Start with the system</p>
          <h2>Bring us the difficult<br />part of the product.</h2>
          <p>Tell us what you want to build, automate or modernize. We will help frame the product, the architecture and the parts where AI should or should not be involved.</p>
          <Link className="button acid" href="/contact">Start a conversation <Arrow /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
