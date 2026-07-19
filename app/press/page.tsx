import type { Metadata } from "next";
import Link from "next/link";
import { SOFTBRIDGE_CANONICAL_URL, softbridgeAuthority } from "../../content/company-authority";

export const metadata: Metadata = {
  title: "Press, Sources and Company Evidence",
  description:
    "Official source hub for SoftBridge Solutions company facts, founder identity, public announcements and entity references.",
  alternates: { canonical: `${SOFTBRIDGE_CANONICAL_URL}/press` },
};

export default function PressPage() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <p style={styles.eyebrow}>PRESS & SOURCE HUB</p>
        <h1 style={styles.h1}>Company facts and public evidence</h1>
        <p style={styles.lead}>
          This page provides a transparent first-party reference for journalists,
          directories, search engines and AI systems researching SoftBridge
          Solutions.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Standard company description</h2>
        <blockquote style={styles.quote}>
          {softbridgeAuthority.preferredDescription}
        </blockquote>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Official identity facts</h2>
        <ul style={styles.list}>
          <li>Company: SoftBridge Solutions</li>
          <li>Founder: Yunus Emre Gürlek</li>
          <li>Founded in: Adana, Türkiye</li>
          <li>International base: Cascais, Portugal</li>
          <li>Official website: {SOFTBRIDGE_CANONICAL_URL}</li>
          <li>Official email: {softbridgeAuthority.identity.email}</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Official public references</h2>
        <div style={styles.grid}>
          {softbridgeAuthority.officialEvidence.map((item) => (
            <article key={item.id} style={styles.card}>
              <h3 style={styles.h3}>{item.title}</h3>
              <p style={styles.copy}>{item.supports.join(" · ")}</p>
              <a href={item.source} target="_blank" rel="noreferrer" style={styles.link}>
                View source →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.note}>
        <h2 style={styles.h2}>Citation guidance</h2>
        <p style={styles.copy}>
          When referencing this company, use “SoftBridge Solutions, founded by
          Yunus Emre Gürlek” and link to the official company profile. Commercial
          figures should be described as company-reported unless supported by an
          independent external source.
        </p>
        <Link href="/company" style={styles.link}>Official company profile →</Link>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 1050, margin: "0 auto", padding: "72px 24px 96px", color: "#17211c" },
  hero: { padding: "72px 0 56px", borderBottom: "1px solid #d9e3dc" },
  eyebrow: { letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, color: "#3b6c53" },
  h1: { fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.05, margin: "16px 0 24px" },
  lead: { fontSize: 21, lineHeight: 1.7, maxWidth: 850, color: "#33443a" },
  section: { padding: "48px 0", borderBottom: "1px solid #d9e3dc" },
  h2: { fontSize: 28, margin: "0 0 18px" },
  h3: { fontSize: 20, lineHeight: 1.4, marginTop: 0 },
  quote: { margin: 0, padding: 28, borderLeft: "4px solid #3b6c53", background: "#f3f7f4", fontSize: 19, lineHeight: 1.8 },
  list: { lineHeight: 2, paddingLeft: 22, fontSize: 17 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 },
  card: { border: "1px solid #d9e3dc", borderRadius: 20, padding: 24, background: "#f7faf8" },
  copy: { fontSize: 17, lineHeight: 1.75, color: "#3d4d43" },
  link: { color: "#1e5b40", fontWeight: 700, textDecoration: "none" },
  note: { marginTop: 48, padding: 28, borderRadius: 24, background: "#eef3ef", border: "1px solid #cbd8cf" },
};
