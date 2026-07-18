import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, SiteFooter, SiteHeader } from "../site-shell";
import { pageMap, pages, primarySolutions, additionalSolutions, resourcePages, knowledgePages, localPages, industries, siteUrl } from "../content";
import { JsonLd } from "../structured-data";

type Props = { params: Promise<{ slug: string[] }> };
export function generateStaticParams(){ return pages.map(p=>({slug:p.slug.split("/")})); }
export async function generateMetadata({params}:Props):Promise<Metadata>{ const {slug}=await params; const p=pageMap.get(slug.join("/")); if(!p) return {}; return { title:p.title, description:p.description, alternates:{canonical:`/${p.slug}`}, openGraph:{title:`${p.title} | Softbridge Solutions`,description:p.description,url:`/${p.slug}`,type:"website"} }; }

export default async function TopicPage({params}:Props){
  const {slug}=await params; const key=slug.join("/"); const p=pageMap.get(key); if(!p) notFound();
  const isContact=key==="contact"; const isHub=["ai-solutions","industries","resources"].includes(key);
  const hubItems = key==="ai-solutions" ? [...primarySolutions,...additionalSolutions] : key==="resources" ? [...resourcePages,...knowledgePages,...localPages] : key==="industries" ? industries.map(x=>pageMap.get(`industries/${x.slug}`)!) : [];
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
        <aside className="toc"><p>On this page</p>{p.sections.map((s,i)=><a href={`#section-${i}`} key={s.title}>{s.title}</a>)}<a href="#questions">Questions</a></aside>
        <article className="article-body">
          {isHub && <section className="hub-grid" aria-label={`${p.title} topics`}>{hubItems.map((x,i)=><Link href={`/${x.slug}`} key={x.slug}><span>0{i+1}</span><h2>{x.title}</h2><p>{x.description}</p><Arrow /></Link>)}</section>}
          {p.sections.map((s,i)=><section id={`section-${i}`} key={s.title}><span className="section-number">0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>}</section>)}
          {p.sources?.length && <section className="source-section"><span className="section-number">Sources</span><h2>Referenced sources.</h2><p>These links are included to keep local and national ecosystem pages grounded in public, official context.</p><ul>{p.sources.map(x=><li key={x.url}><a href={x.url} target="_blank" rel="noreferrer">{x.label}</a></li>)}</ul></section>}
          {isContact && <section className="contact-box"><p className="eyebrow">Contact channel</p><h2>Direct details pending verification.</h2><p>The site intentionally does not invent an email address, telephone number or street address. Add verified contact details here before public promotion.</p></section>}
          <section id="questions" className="faq-section"><span className="section-number">FAQ</span><h2>Questions, answered.</h2>{p.faq.map(x=><details key={x.q}><summary>{x.q}<span>+</span></summary><p>{x.a}</p></details>)}</section>
          <section className="related"><p className="eyebrow">Continue exploring</p><h2>Connect the system.</h2><div><Link href="/engineering">Engineering principles <Arrow /></Link><Link href="/ai-research">Applied research <Arrow /></Link><Link href="/contact">Discuss a project <Arrow /></Link></div></section>
        </article>
      </div>
    </main><SiteFooter />
  </>;
}
