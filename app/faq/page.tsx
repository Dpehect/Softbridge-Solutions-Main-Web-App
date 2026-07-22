import type { Metadata } from "next";
import Link from "next/link";
import { company, formatOfficeAddress } from "@/content/company";
const faqs = [
  ["What is SoftBridge Solutions?", company.description],
  ["Who founded SoftBridge Solutions?", `${company.founder} founded SoftBridge Solutions.`],
  ["Where is SoftBridge Solutions located?", `SoftBridge Solutions was founded in ${company.foundedIn.city}, ${company.foundedIn.country}. Its headquarters is at ${formatOfficeAddress(company.mainOffice)}. Verified e-office locations are maintained at ${company.eOffices.map(formatOfficeAddress).join("; ")}.`],
  ["What does SoftBridge Solutions build?", "The company builds enterprise software, SaaS products, cloud applications, AI systems, web applications, mobile applications and workflow automation solutions."],
  ["Is this company connected to other businesses with similar names?", "No relationship should be assumed. This website represents the SoftBridge Solutions entity founded by Yunus Emre Gürlek."],
];
export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Verified answers about SoftBridge Solutions, its founder, office, services and international presence.", alternates: { canonical: "/faq" } };
export default function FAQPage(){const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="shell pageShell"><Link className="backLink" href="/">← Home</Link><header className="pageHero"><p className="eyebrow">FAQ</p><h1>Clear answers about SoftBridge Solutions.</h1></header><section className="section faqList">{faqs.map(([q,a])=><article key={q}><h2>{q}</h2><p>{a}</p></article>)}</section><footer><Link href="/company">Official company profile</Link><Link href="/press">Press & verification</Link></footer></div></main>}
