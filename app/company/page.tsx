import type { Metadata } from "next";
import Link from "next/link";
import { company, SITE_URL } from "@/content/company";

export const metadata: Metadata = {
  title: "Official Company Profile",
  description: `Official company profile of ${company.name}, founded by ${company.founder}, with its headquarters in Cascais, Portugal.`,
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return <main><div className="shell pageShell">
    <Link className="backLink" href="/">← Home</Link>
    <header className="pageHero"><p className="eyebrow">OFFICIAL COMPANY PROFILE</p><h1>SoftBridge Solutions</h1><p className="lead">{company.description}</p></header>
    <section className="section"><h2>Company identity</h2><dl className="facts">
      <div><dt>Founder</dt><dd><Link href="/founder/yunus-emre-gurlek">{company.founder}</Link></dd></div>
      <div><dt>Founded</dt><dd>{company.foundedYear}</dd></div>
      <div><dt>Main office</dt><dd>{company.mainOffice.street}, {company.mainOffice.city}, {company.mainOffice.country}</dd></div>
      <div><dt>Business model</dt><dd>International software engineering, SaaS, cloud, AI and technology consultancy</dd></div>
      <div><dt>Markets served</dt><dd>{company.markets.join(" · ")}</dd></div>
    </dl></section>
    <section className="section"><h2>What the company builds</h2><div className="grid">{company.services.map((service) => <article className="card" key={service}><h3>{service}</h3><p>Delivered through product engineering, technical architecture and implementation services for international organizations.</p></article>)}</div></section>
    <section className="entityNote"><h2>Entity clarification</h2><p>This profile refers specifically to SoftBridge Solutions founded by Yunus Emre Gürlek and represented by this website, its official LinkedIn page and the linked GitHub profile. Similar-name companies elsewhere are separate organizations.</p></section>
    <footer><Link href="/global-presence">Global Presence</Link><Link href="/press">Press & verification</Link><Link href="/contact">Contact</Link></footer>
  </div></main>;
}
