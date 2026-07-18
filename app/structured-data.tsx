import { siteUrl } from "./content";

export function JsonLd({ page, crumbs, url }: { page?: { title:string; description:string; faq?:{q:string;a:string}[] }; crumbs?: {name:string;url:string}[]; url?: string }) {
  const graph: Record<string, unknown>[] = [
    { "@type": ["Organization", "ProfessionalService", "LocalBusiness"], "@id": `${siteUrl}/#organization`, name: "Softbridge Solutions", url: siteUrl, description: "Artificial intelligence company based in Adana, Türkiye, specializing in enterprise AI, AI agents, generative AI, language-model applications and workflow automation.", address: { "@type": "PostalAddress", addressLocality: "Adana", addressRegion: "Adana", addressCountry: "TR" }, areaServed: ["Adana", "Türkiye"], knowsAbout: ["Artificial Intelligence", "Enterprise AI", "AI Agents", "Generative AI", "Large Language Models", "Workflow Automation", "Machine Learning", "Computer Vision", "Natural Language Processing", "Custom Software Development", "Digital Transformation"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Softbridge Solutions", publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en", potentialAction: { "@type": "SearchAction", target: `${siteUrl}/search?q={search_term_string}`, "query-input": "required name=search_term_string" } },
  ];
  if(page) {
    const pageUrl = url ?? siteUrl;
    graph.push({ "@type": "WebPage", "@id": pageUrl, url: pageUrl, name: page.title, description: page.description, isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` }, speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".article-intro"] } });
    graph.push({ "@type": "Article", headline: page.title, description: page.description, author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` }, dateModified: "2026-07-18", mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl } });
  }
  if(page?.faq?.length) graph.push({ "@type": "FAQPage", mainEntity: page.faq.map(x=>({ "@type":"Question", name:x.q, acceptedAnswer:{ "@type":"Answer", text:x.a } })) });
  if(crumbs) graph.push({ "@type":"BreadcrumbList", itemListElement:crumbs.map((x,i)=>({"@type":"ListItem",position:i+1,name:x.name,item:x.url})) });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}} />;
}
