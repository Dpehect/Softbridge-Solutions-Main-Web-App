import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader } from "../site-shell";
import { siteUrl } from "../content";
import { JsonLd } from "../structured-data";
import { ToolsClient } from "./tools-client";

export const metadata: Metadata = {
  title: "Free Developer Tools",
  description: "Free developer and product tools from Softbridge Solutions: JSON formatter, JWT decoder, Base64 tools, regex tester, password generator, cost calculators and more.",
  alternates: { canonical: "/free-tools" },
  openGraph: {
    title: "Free Developer Tools | Softbridge Solutions",
    description: "Useful browser-based tools for developers, founders and product teams.",
    url: "/free-tools",
    type: "website",
  },
};

export default function FreeToolsPage() {
  const title = "Free Developer Tools";
  const description = metadata.description as string;

  return <>
    <JsonLd page={{
      slug: "free-tools",
      locale: "en",
      type: "tool",
      status: "published",
      indexable: true,
      title,
      description,
      summary: "Useful browser-based tools for developers, founders and product teams.",
      sections: [],
      faq: [
        { question: "Are these tools free?", answer: "Yes. The tools on this page are intended as free educational and practical utilities for developers, founders and product teams." },
        { question: "Do the tools replace technical discovery?", answer: "No. Calculators and validators are useful for planning, but serious software, AI and security work still requires scoped technical discovery." },
      ]
    }} url={`${siteUrl}/free-tools`} crumbs={[{ name: "Home", url: siteUrl }, { name: title, url: `${siteUrl}/free-tools` }]} />
    <SiteHeader />
    <main className="article-page">
      <header className="article-hero grid-bg">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Free Tools</span></nav>
        <p className="eyebrow">Developer utilities · Adana, Türkiye</p>
        <h1>Free Developer Tools</h1>
        <p className="article-intro">Small, useful browser tools for developers, founders and product teams: format data, test patterns, generate identifiers, estimate software scope and inspect common technical inputs.</p>
        <div className="article-meta"><span>Softbridge Solutions</span><span>Reviewed 18 July 2026</span><span>Interactive tools</span></div>
      </header>
      <section className="tools-intro">
        <p className="section-kicker">Built to be useful</p>
        <h2>Fast tools, clear outputs, no invented magic.</h2>
        <p>These utilities are intentionally lightweight. They help with everyday technical work and early product planning while keeping sensitive production decisions in the hands of engineers.</p>
      </section>
      <ToolsClient />
      <section className="cta grid-bg">
        <p className="section-kicker">From utility to product</p>
        <h2>Need the internal version?</h2>
        <p>Many serious software products start as a small tool that solves one painful workflow. Softbridge Solutions can help turn useful utilities into secure, integrated systems.</p>
        <Link className="button acid" href="/contact">Discuss a system <Arrow /></Link>
      </section>
    </main>
    <SiteFooter />
  </>;
}
