import type { Metadata } from "next";
import Link from "next/link";
import { company, formatOfficeAddress } from "@/content/company";

export const metadata: Metadata = {
  title: "Global Presence",
  description: "SoftBridge Solutions was founded in Adana, is headquartered in Cascais, and maintains verified e-office locations in Kington, Beverly Hills, Marseille, Dublin and Milan.",
  alternates: { canonical: "/global-presence" },
};

export default function GlobalPresencePage() {
  return <main><div className="shell pageShell"><Link className="backLink" href="/">← Home</Link>
    <header className="pageHero"><p className="eyebrow">GLOBAL PRESENCE</p><h1>International by design.</h1><p className="lead">SoftBridge Solutions was founded in Adana, Türkiye, operates from its headquarters in Cascais, Portugal, and maintains verified international e-office locations across Europe, the United Kingdom, Ireland and the United States.</p></header>
    <section className="section"><h2>Company origin</h2><article className="location"><p className="eyebrow">FOUNDED IN</p><h3>{company.foundedIn.city}, {company.foundedIn.country}</h3><p className="muted">SoftBridge Solutions was founded in Adana and retains this origin as part of its official company identity.</p></article></section><section className="section"><h2>Headquarters / Main office</h2><article className="location primaryLocation"><p className="eyebrow">CASCAIS · PORTUGAL</p><h3>{company.name}</h3><p>{formatOfficeAddress(company.mainOffice)}</p><p className="muted">Primary company office and international operating base.</p></article></section>
    <section className="section"><h2>International e-offices</h2><p className="bodyCopy">These are verified SoftBridge Solutions e-office and business locations. They are presented separately from the headquarters in Cascais.</p><div className="grid">{company.eOffices.map((office) => <article id={office.city.toLowerCase().replaceAll(" ", "-")} className="location" key={office.city}><p className="eyebrow">E-OFFICE</p><h3>{company.name}</h3><p>{formatOfficeAddress(office)}</p></article>)}</div></section>
    <footer><Link href="/company">Company</Link><Link href="/contact">Contact</Link></footer>
  </div></main>;
}
