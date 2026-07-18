import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader } from "../site-shell";
import { pages, siteUrl } from "../content";
import { JsonLd } from "../structured-data";

export const metadata: Metadata = {
  title: "Search Softbridge Solutions",
  description: "Search Softbridge Solutions pages about artificial intelligence, Adana, Türkiye, enterprise AI, agents, LLMs and digital transformation.",
  alternates: { canonical: "/search" },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Search Softbridge Solutions",
    description: "Search the Softbridge Solutions AI knowledge hub.",
    url: "/search",
    type: "website",
  },
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  
  // Only indexable pages should be searchable
  const searchablePages = pages.filter((page) => page.indexable !== false);

  const results = query
    ? searchablePages
        .filter((page) =>
          [page.title, page.description, page.summary, page.eyebrow]
            .join(" ")
            .toLowerCase()
            .includes(query)
        )
        .slice(0, 24)
    : searchablePages.slice(0, 12);

  return (
    <>
      <JsonLd
        page={{
          slug: "search",
          locale: "en",
          type: "tool",
          status: "published",
          indexable: false,
          title: "Search Softbridge Solutions",
          description: metadata.description as string,
          summary: "Site-wide search utility.",
          sections: [],
        }}
        url={`${siteUrl}/search`}
      />
      <SiteHeader />
      <main className="article-page">
        <header className="article-hero grid-bg">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Search</span>
          </nav>
          <p className="eyebrow">Knowledge search · Adana, Türkiye</p>
          <h1>Search</h1>
          <p className="article-intro">Find AI, automation, industry and local ecosystem pages across the Softbridge Solutions knowledge hub.</p>
        </header>
        <section className="search-section">
          <form action="/search" className="search-form">
            <label htmlFor="q">Search the site</label>
            <div>
              <input id="q" name="q" defaultValue={q} placeholder="Try RAG, Adana, manufacturing AI..." />
              <button type="submit">Search <Arrow /></button>
            </div>
          </form>
          <div className="search-results">
            <p className="eyebrow">{query ? `${results.length} results` : "Suggested pages"}</p>
            {results.map((page) => (
              <Link href={`/${page.slug}`} key={page.slug}>
                <span>{page.eyebrow}</span>
                <h2>{page.title}</h2>
                <p>{page.description}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
