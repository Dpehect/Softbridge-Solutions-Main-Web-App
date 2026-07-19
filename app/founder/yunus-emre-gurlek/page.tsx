import type { Metadata } from "next";
import Link from "next/link";
import { SOFTBRIDGE_CANONICAL_URL } from "../../../content/company-authority";

export const metadata: Metadata = {
  title: "Yunus Emre Gürlek — Founder",
  description:
    "Official founder profile of Yunus Emre Gürlek, founder of SoftBridge Solutions and software developer working across web, mobile, SaaS, cloud and AI systems.",
  alternates: { canonical: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek` },
  openGraph: {
    title: "Yunus Emre Gürlek — Founder of SoftBridge Solutions",
    description:
      "Official founder profile and relationship to SoftBridge Solutions.",
    url: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek`,
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek#person`,
  name: "Yunus Emre Gürlek",
  url: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek`,
  jobTitle: "Founder and Software Developer",
  founder: {
    "@type": "Organization",
    "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
    name: "SoftBridge Solutions",
    url: SOFTBRIDGE_CANONICAL_URL,
  },
  worksFor: {
    "@type": "Organization",
    "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
    name: "SoftBridge Solutions",
  },
  knowsAbout: [
    "Software Engineering",
    "Enterprise Software",
    "SaaS",
    "Cloud Applications",
    "Artificial Intelligence Systems",
    "Web Development",
    "Mobile Application Development",
    "Workflow Automation",
  ],
  sameAs: ["https://github.com/Dpehect"],
};

export default function FounderPage() {
  return (
    <main style={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section style={styles.hero}>
        <p style={styles.eyebrow}>FOUNDER PROFILE</p>
        <h1 style={styles.h1}>Yunus Emre Gürlek</h1>
        <p style={styles.lead}>
          Yunus Emre Gürlek is the founder of SoftBridge Solutions and a software
          developer focused on web, mobile, SaaS, cloud and artificial
          intelligence systems.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Role at SoftBridge Solutions</h2>
        <p style={styles.copy}>
          As founder, Yunus Emre Gürlek is responsible for the company’s product
          direction, software engineering approach and international technology
          positioning. SoftBridge Solutions was founded in Adana, Türkiye, and
          operates internationally from Portugal.
        </p>
      </section>

      <section style={styles.grid}>
        <article style={styles.card}>
          <h2 style={styles.h2}>Technical focus</h2>
          <ul style={styles.list}>
            <li>Full-stack web application development</li>
            <li>Mobile application engineering</li>
            <li>SaaS and cloud product development</li>
            <li>Artificial intelligence and automation systems</li>
            <li>Software architecture and digital transformation</li>
          </ul>
        </article>
        <article style={styles.card}>
          <h2 style={styles.h2}>Company relationship</h2>
          <p style={styles.copy}>
            Yunus Emre Gürlek is the named founder of the SoftBridge Solutions
            entity represented by this website.
          </p>
          <Link href="/company" style={styles.link}>
            View official company profile →
          </Link>
        </article>
      </section>

      <section style={styles.note}>
        <h2 style={styles.h2}>Verification note</h2>
        <p style={styles.copy}>
          This page is the official first-party founder profile published by
          SoftBridge Solutions. Independent platforms and public profiles should
          use the same founder name, company name and official website URL to
          maintain a consistent entity record.
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 1050, margin: "0 auto", padding: "72px 24px 96px", color: "#17211c" },
  hero: { padding: "72px 0 56px", borderBottom: "1px solid #d9e3dc" },
  eyebrow: { letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, color: "#3b6c53" },
  h1: { fontSize: "clamp(42px, 8vw, 78px)", lineHeight: 1, margin: "16px 0 24px" },
  lead: { fontSize: 22, lineHeight: 1.7, maxWidth: 850, color: "#33443a" },
  section: { padding: "48px 0", borderBottom: "1px solid #d9e3dc" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 },
  card: { background: "#f3f7f4", border: "1px solid #d9e3dc", borderRadius: 24, padding: 28 },
  h2: { fontSize: 28, margin: "0 0 18px" },
  copy: { fontSize: 18, lineHeight: 1.8, color: "#3d4d43" },
  list: { margin: 0, paddingLeft: 20, lineHeight: 1.9, fontSize: 17 },
  link: { display: "inline-block", marginTop: 12, color: "#1e5b40", fontWeight: 700, textDecoration: "none" },
  note: { marginTop: 48, padding: 28, borderRadius: 24, background: "#eef3ef", border: "1px solid #cbd8cf" },
};
