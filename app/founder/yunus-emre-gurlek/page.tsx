import type { Metadata } from "next";
import Link from "next/link";
import { company, SITE_URL } from "@/content/company";

export const metadata: Metadata = {
  title: "Yunus Emre Gürlek — Founder",
  description: "Official founder profile of Yunus Emre Gürlek, founder of SoftBridge Solutions.",
  alternates: { canonical: "/founder/yunus-emre-gurlek" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/founder/yunus-emre-gurlek#person`,
  name: company.founder,
  url: `${SITE_URL}/founder/yunus-emre-gurlek`,
  jobTitle: "Founder and Software Developer",
  founder: { "@id": `${SITE_URL}/#organization` },
  worksFor: { "@id": `${SITE_URL}/#organization` },
  sameAs: [company.github, company.linkedin],
  knowsAbout: company.services,
};

export default function FounderPage() {
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><div className="shell pageShell">
    <Link className="backLink" href="/">← Home</Link>
    <header className="pageHero"><p className="eyebrow">FOUNDER PROFILE</p><h1>Yunus Emre Gürlek</h1><p className="lead">Founder of SoftBridge Solutions and software developer focused on web, mobile, SaaS, cloud and artificial intelligence systems.</p></header>
    <section className="section split"><div><h2>Role</h2></div><div><p className="bodyCopy">Yunus Emre Gürlek founded SoftBridge Solutions and leads its product direction, software engineering approach and international technology positioning.</p><p className="bodyCopy">The company was founded in Adana, Türkiye and operates internationally from its headquarters in Cascais, Portugal, supported by e-office locations across Europe, the United Kingdom, Ireland and the United States.</p></div></section>
    <section className="section"><h2>Technical focus</h2><div className="grid">{company.services.map((item) => <article className="card" key={item}><h3>{item}</h3></article>)}</div></section>
    <footer><Link href="/company">Company profile</Link><a href={company.github}>GitHub</a><a href={company.linkedin}>LinkedIn</a></footer>
  </div></main>;
}
