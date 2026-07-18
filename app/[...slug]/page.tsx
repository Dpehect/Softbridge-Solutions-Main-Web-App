import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, SiteFooter, SiteHeader } from "../site-shell";
import { pageMap, pages, primarySolutions, additionalSolutions, servicePages, resourcePages, knowledgePages, localPages, localGrowthPages, blogPages, ecosystemPages, industries, siteUrl } from "../content";
import { JsonLd } from "../structured-data";

type Props = { params: Promise<{ slug: string[] }> };
const offices = [
  { country: "Portugal", city: "Cascais", type: "Main office", address: "Rua Bordalo Pinheiro 25, Cascais, Portugal" },
  { country: "United States", city: "Beverly Hills", type: "E-office", address: "468 N Camden Drive, 2nd Floor, Beverly Hills, CA 90210, United States" },
  { country: "United Kingdom", city: "Kington", type: "E-office", address: "61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom" },
  { country: "Ireland", city: "Dublin", type: "E-office", address: "Unit 2, 1-2 Hanover Quay, Grand Canal Dock, Dublin 2, D02 C679, Ireland" },
  { country: "Italy", city: "Milan", type: "E-office", address: "Piazza Gae Aulenti 1, Torre B, 20124, Milan, Italy" },
  { country: "France", city: "Marseille", type: "E-office", address: "24 Av. du Prado, 13006 Marseille, France" },
] as const;
export function generateStaticParams(){ return pages.map(p=>({slug:p.slug.split("/")})); }
export async function generateMetadata({params}:Props):Promise<Metadata>{ const {slug}=await params; const p=pageMap.get(slug.join("/")); if(!p) return {}; return { title:p.title, description:p.description, alternates:{canonical:`/${p.slug}`}, openGraph:{title:`${p.title} | Softbridge Solutions`,description:p.description,url:`/${p.slug}`,type:"website"} }; }

export default async function TopicPage({params}:Props){
  const {slug}=await params; const key=slug.join("/"); const p=pageMap.get(key); if(!p) notFound();
  const isContact=key==="contact"; const isLocations=key==="locations"; const isHub=["ai-solutions","services","industries","resources"].includes(key);
  const hubItems = key==="ai-solutions" ? [...primarySolutions,...additionalSolutions,...knowledgePages.filter(x=>["rag","prompt-engineering","vector-databases","model-context-protocol","ai-infrastructure"].includes(x.slug))] : key==="services" ? servicePages : key==="resources" ? [...ecosystemPages,...resourcePages,...knowledgePages,...localPages,...localGrowthPages,...blogPages] : key==="industries" ? industries.map(x=>pageMap.get(`industries/${x.slug}`)!) : [];
  const parent = key.startsWith("industries/") ? {name:"Industries",url:`${siteUrl}/industries`} : null;
  const crumbs=[{name:"Home",url:siteUrl},...(parent?[parent]:[]),{name:p.title,url:`${siteUrl}/${p.slug}`}];
  return <>
    <JsonLd page={p} crumbs={crumbs} url={`${siteUrl}/${p.slug}`}/><SiteHeader />
    <main className="article-page">
      <header className="article-hero grid-bg">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span>{parent&&<><Link href="/industries">Industries</Link><span>/</span></>}<span>{p.title}</span></nav>
        <p className="eyebrow">{p.eyebrow} · Adana, Türkiye</p>
        <h1>{p.title}</h1>
        <p className="article-intro">{p.intro}</p>
        <div className="article-meta"><span>Softbridge Solutions</span><span>Reviewed 18 July 2026</span><span>Reference page</span></div>
      </header>
      <div className="article-layout">
        <aside className="toc"><p>On this page</p>{p.sections.map((s,i)=><a href={`#section-${i}`} key={s.title}>{s.title}</a>)}{isLocations&&<a href="#office-maps">Office maps</a>}<a href="#questions">Questions</a></aside>
        <article className="article-body">
          {isHub && <section className="hub-grid" aria-label={`${p.title} topics`}>{hubItems.map((x,i)=><Link href={`/${x.slug}`} key={x.slug}><span>0{i+1}</span><h2>{x.title}</h2><p>{x.description}</p><Arrow /></Link>)}</section>}
          {p.sections.map((s,i)=><section id={`section-${i}`} key={s.title}><span className="section-number">0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>}</section>)}
          {isLocations && <section id="office-maps" className="office-maps"><span className="section-number">Maps</span><h2>Our international locations.</h2><div className="map-grid">{offices.map((office)=><article className="map-card" key={office.address}><iframe title={`${office.city} ${office.type} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(office.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div><p className="eyebrow">{office.type} · {office.country}</p><h3>{office.city}</h3><address>{office.address}</address><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`} target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a></div></article>)}</div></section>}
          {p.sources?.length && <section className="source-section"><span className="section-number">Sources</span><h2>Referenced sources.</h2><p>These links are included to keep local and national ecosystem pages grounded in public, official context.</p><ul>{p.sources.map(x=><li key={x.url}><a href={x.url} target="_blank" rel="noreferrer">{x.label}</a></li>)}</ul></section>}
          {isContact && <section className="contact-box"><p className="eyebrow">Project enquiries</p><h2>Let&apos;s build what comes next.</h2><p>Tell us about the product, system or transformation you are planning. We will help clarify the opportunity, technical path and strongest place to begin.</p></section>}
          <section id="questions" className="faq-section"><span className="section-number">FAQ</span><h2>Questions, answered.</h2>{p.faq.map(x=><details key={x.q}><summary>{x.q}<span>+</span></summary><p>{x.a}</p></details>)}</section>
          <section className="related"><p className="eyebrow">Continue exploring</p><h2>Connect the system.</h2><div><Link href="/engineering">Engineering principles <Arrow /></Link><Link href="/ai-research">Applied research <Arrow /></Link><Link href="/contact">Discuss a project <Arrow /></Link></div></section>
        </article>
      </div>
    </main><SiteFooter />
  </>;
}
