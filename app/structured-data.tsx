import { siteUrl } from "./content";

export function JsonLd({ page, crumbs }: { page?: { title:string; description:string; faq?:{q:string;a:string}[] }; crumbs?: {name:string;url:string}[] }) {
  const graph: Record<string, unknown>[] = [
    { "@type": ["Organization", "ProfessionalService"], "@id": `${siteUrl}/#organization`, name: "Softbridge Solutions", url: siteUrl, description: "AI engineering company specializing in enterprise AI, AI agents, generative AI, language-model applications and workflow automation.", address: { "@type": "PostalAddress", addressLocality: "Lisbon", addressCountry: "PT" }, areaServed: ["Portugal", "Europe"], knowsAbout: ["Artificial Intelligence", "Enterprise AI", "AI Agents", "Generative AI", "Large Language Models", "Workflow Automation", "Machine Learning", "Computer Vision", "Natural Language Processing"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Softbridge Solutions", publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en" },
  ];
  if(page) graph.push({ "@type": "WebPage", name: page.title, description: page.description, isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` }, speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".article-intro"] } });
  if(page?.faq?.length) graph.push({ "@type": "FAQPage", mainEntity: page.faq.map(x=>({ "@type":"Question", name:x.q, acceptedAnswer:{ "@type":"Answer", text:x.a } })) });
  if(crumbs) graph.push({ "@type":"BreadcrumbList", itemListElement:crumbs.map((x,i)=>({"@type":"ListItem",position:i+1,name:x.name,item:x.url})) });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}} />;
}
