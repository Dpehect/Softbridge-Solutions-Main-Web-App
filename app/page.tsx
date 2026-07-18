import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, Arrow } from "./site-shell";
import { JsonLd } from "./structured-data";
import { primarySolutions, servicePages, resourcePages, industries, knowledgePages, localPages, localGrowthPages } from "./content";

export const metadata: Metadata = {
  title: "AI-first digital product studio in Adana, Türkiye",
  description: "Softbridge Solutions is an AI-first digital product studio and software agency in Adana, Türkiye, building AI systems, web apps, mobile apps, SaaS and cloud software.",
  alternates: { canonical: "/" },
};

const stages = [
  ["01", "Frame", "Define the decision, workflow and measurable operating constraint before selecting technology."],
  ["02", "Prototype", "Test the smallest useful system with representative data, users and failure cases."],
  ["03", "Engineer", "Build evaluation, observability, security and human control into the production path."],
  ["04", "Operate", "Measure quality and cost continuously; improve the system as models and work change."],
];

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <section className="hero grid-bg">
          <div className="eyebrow reveal">AI-first product studio · Adana, Türkiye</div>
          <h1 className="display reveal delay-1">Software that moves<br />companies forward.</h1>
          <div className="hero-lower reveal delay-2">
            <p className="lede">Softbridge Solutions designs and engineers AI systems, web applications, mobile apps, SaaS products, cloud platforms and internal business software for teams that need technology to become real operations.</p>
            <div className="hero-actions">
              <Link className="button dark" href="/contact">Discuss a product <Arrow /></Link>
              <Link className="text-link" href="/services">Explore services <Arrow /></Link>
            </div>
          </div>
          <div className="signal-path" aria-hidden="true"><i /><span>strategy</span><i /><span>systems</span><i /><span>operations</span><b /></div>
        </section>

        <section className="statement section dark-panel">
          <p className="section-kicker">Our position</p>
          <h2>A serious technology company does not sell screens. It builds systems people can operate, trust and improve.</h2>
          <div className="statement-copy">
            <p>We connect strategy, product design, software architecture, AI, cloud infrastructure and human judgment. The result is designed to be useful in production: secure, observable, readable and maintainable.</p>
            <Link className="text-link light" href="/engineering">How we engineer AI <Arrow /></Link>
          </div>
        </section>

        <section className="section solutions" id="capabilities">
          <div className="section-head">
            <div><p className="section-kicker">Services</p><h2>From idea to<br />operating product.</h2></div>
            <p>Focused capabilities for startups and companies building AI-first products, internal systems, SaaS platforms and modern software.</p>
          </div>
          <div className="solution-list">
            {servicePages.slice(0, 6).map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.short}</p>
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
            {primarySolutions.map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.short}</p>
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

        <section className="section sectors">
          <div className="section-head compact">
            <div><p className="section-kicker">Industries</p><h2>Built around the work.</h2></div>
            <Link className="text-link" href="/industries">View industries <Arrow /></Link>
          </div>
          <div className="sector-grid">
            {industries.slice(0, 6).map((x, i) => <Link href={`/industries/${x.slug}`} key={x.slug}><span>0{i + 1}</span><h3>{x.title}</h3><p>{x.focus}</p><Arrow /></Link>)}
          </div>
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

        <section className="section resources-preview">
          <div className="section-head compact">
            <div><p className="section-kicker">Field notes</p><h2>Useful thinking,<br />openly shared.</h2></div>
            <Link className="text-link" href="/resources">All resources <Arrow /></Link>
          </div>
          <div className="resource-grid">
            {resourcePages.slice(0, 3).map((x, i) => <Link href={`/${x.slug}`} key={x.slug} className="resource-card"><div className={`card-visual v${i + 1}`}><span>{x.code}</span></div><p>{x.type} · Reference hub</p><h3>{x.title}</h3><span className="card-link">Explore the collection <Arrow /></span></Link>)}
          </div>
        </section>

        <section className="section sectors local-authority">
          <div className="section-head compact">
            <div><p className="section-kicker">Knowledge hub</p><h2>Built for people<br />and AI systems.</h2></div>
            <Link className="text-link" href="/resources">Explore the hub <Arrow /></Link>
          </div>
          <div className="sector-grid">
            {[...knowledgePages.slice(0, 2), ...localPages.slice(0, 2), ...localGrowthPages.slice(0, 2)].map((x, i) => <Link href={`/${x.slug}`} key={x.slug}><span>0{i + 1}</span><h3>{x.title}</h3><p>{x.description}</p><Arrow /></Link>)}
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
