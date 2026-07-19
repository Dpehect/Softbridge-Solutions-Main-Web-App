import type { Metadata } from "next";
import Link from "next/link";
import { SOFTBRIDGE_CANONICAL_URL, softbridgeAuthority } from "../../content/company-authority";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Official company profile of SoftBridge Solutions, founded by Yunus Emre Gürlek in Adana, Türkiye, with international operations based in Portugal.",
  alternates: { canonical: `${SOFTBRIDGE_CANONICAL_URL}/company` },
  openGraph: {
    title: "SoftBridge Solutions Company Profile",
    description:
      "Enterprise software, SaaS, cloud and AI company founded by Yunus Emre Gürlek.",
    url: `${SOFTBRIDGE_CANONICAL_URL}/company`,
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
  name: softbridgeAuthority.identity.name,
  legalName: softbridgeAuthority.identity.legalName,
  url: SOFTBRIDGE_CANONICAL_URL,
  foundingDate: String(softbridgeAuthority.identity.foundedYear),
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: softbridgeAuthority.identity.foundedIn.city,
      addressCountry: softbridgeAuthority.identity.foundedIn.countryCode,
    },
  },
  founder: {
    "@type": "Person",
    "@id": `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek#person`,
    name: softbridgeAuthority.identity.founder,
    url: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek`,
  },
  description: softbridgeAuthority.preferredDescription,
  email: softbridgeAuthority.identity.email,
  sameAs: [
    softbridgeAuthority.identity.linkedin,
    softbridgeAuthority.identity.github,
  ],
  knowsAbout: softbridgeAuthority.specialties,
  areaServed: softbridgeAuthority.marketsServed,
};

export default function CompanyPage() {
  return (
    <main style={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section style={styles.hero}>
        <p style={styles.eyebrow}>OFFICIAL COMPANY PROFILE</p>
        <h1 style={styles.h1}>SoftBridge Solutions</h1>
        <p style={styles.lead}>{softbridgeAuthority.preferredDescription}</p>
        <div style={styles.actions}>
          <Link href="/founder/yunus-emre-gurlek" style={styles.primary}>
            Meet the founder
          </Link>
          <Link href="/press" style={styles.secondary}>
            Press and evidence
          </Link>
        </div>
      </section>

      <section style={styles.grid}>
        <article style={styles.card}>
          <h2 style={styles.h2}>Company identity</h2>
          <dl style={styles.dl}>
            <div><dt>Founder</dt><dd>Yunus Emre Gürlek</dd></div>
            <div><dt>Founded</dt><dd>2017</dd></div>
            <div><dt>Founding city</dt><dd>Adana, Türkiye</dd></div>
            <div><dt>International base</dt><dd>Cascais, Portugal</dd></div>
            <div><dt>Primary markets</dt><dd>Europe and the United States</dd></div>
          </dl>
        </article>

        <article style={styles.card}>
          <h2 style={styles.h2}>Core capabilities</h2>
          <ul style={styles.list}>
            {softbridgeAuthority.specialties.slice(0, 8).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>What the company builds</h2>
        <p style={styles.copy}>
          SoftBridge Solutions designs and develops enterprise software, SaaS
          platforms, cloud applications, AI-enabled systems, workflow automation,
          web applications and mobile products. Its work combines product
          engineering, software architecture and technology consultancy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Commercial footprint</h2>
        <p style={styles.copy}>
          The company reports more than seven years of software engineering and
          commercial experience and more than 10,000 software sales across Europe
          and the United States. These figures are presented as official
          company-reported information unless independently verified by an
          external source.
        </p>
      </section>

      <section style={styles.note}>
        <h2 style={styles.h2}>Entity clarification</h2>
        <p style={styles.copy}>
          This website refers specifically to SoftBridge Solutions founded by
          Yunus Emre Gürlek. It should not be confused with unrelated companies
          using similar “Softbridge” names.
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 1100, margin: "0 auto", padding: "72px 24px 96px", color: "#17211c" },
  hero: { padding: "72px 0 56px", borderBottom: "1px solid #d9e3dc" },
  eyebrow: { letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, color: "#3b6c53" },
  h1: { fontSize: "clamp(42px, 8vw, 82px)", lineHeight: 1, margin: "16px 0 24px" },
  lead: { fontSize: 21, lineHeight: 1.7, maxWidth: 900, color: "#33443a" },
  actions: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 },
  primary: { background: "#173f2f", color: "#f4f8f5", padding: "13px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 700 },
  secondary: { border: "1px solid #9eb5a7", color: "#173f2f", padding: "13px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 700 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 },
  card: { background: "#f3f7f4", border: "1px solid #d9e3dc", borderRadius: 24, padding: 28 },
  h2: { fontSize: 28, margin: "0 0 18px" },
  dl: { margin: 0 },
  list: { margin: 0, paddingLeft: 20, lineHeight: 1.9 },
  section: { padding: "48px 0", borderBottom: "1px solid #d9e3dc" },
  copy: { fontSize: 18, lineHeight: 1.8, maxWidth: 880, color: "#3d4d43" },
  note: { marginTop: 48, padding: 28, borderRadius: 24, background: "#eef3ef", border: "1px solid #cbd8cf" },
};
