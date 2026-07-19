import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  companyProfile,
  getCompanyMarket,
} from "../../../content/company-profile";
import {
  aggregateSalesFact,
  companyEvidence,
} from "../../../content/company-evidence";

type PageProps = {
  params: Promise<{ market: string }>;
};

const copy = {
  en: {
    title: "Evidence and Company Facts",
    intro:
      "Official company facts, public records and source links supporting the international identity and commercial history of SoftBridge Solutions.",
    sales: "International software sales",
    experience: "Years of experience",
    headquarters: "International headquarters",
    founding: "Founded in",
    disclosure: "Disclosure",
    records: "Evidence records",
    source: "Open official source",
  },
  tr: {
    title: "Kanıtlar ve Şirket Gerçekleri",
    intro:
      "SoftBridge Solutions'ın uluslararası kimliğini ve ticari geçmişini destekleyen resmi şirket bilgileri, kamuya açık kayıtlar ve kaynak bağlantıları.",
    sales: "Uluslararası yazılım satışı",
    experience: "Yıllık deneyim",
    headquarters: "Uluslararası merkez",
    founding: "Kuruluş yeri",
    disclosure: "Açıklama",
    records: "Kanıt kayıtları",
    source: "Resmî kaynağı aç",
  },
  pt: {
    title: "Evidências e Factos da Empresa",
    intro:
      "Factos oficiais, registos públicos e fontes que sustentam a identidade internacional e o histórico comercial da SoftBridge Solutions.",
    sales: "Vendas internacionais de software",
    experience: "Anos de experiência",
    headquarters: "Sede internacional",
    founding: "Fundada em",
    disclosure: "Divulgação",
    records: "Registos de evidência",
    source: "Abrir fonte oficial",
  },
} as const;

function getLanguage(market: string) {
  if (market === "tr") return "tr";
  if (market === "pt") return "pt";
  return "en";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { market } = await params;
  const marketConfig = getCompanyMarket(market);
  if (!marketConfig) return {};

  const language = getLanguage(market);
  const text = copy[language];
  const canonical = `${companyProfile.website}/${market}/evidence`;

  return {
    title: `${text.title} | SoftBridge Solutions`,
    description: text.intro,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${text.title} | SoftBridge Solutions`,
      description: text.intro,
      images: [companyProfile.socialImagePath],
    },
  };
}

export default async function EvidencePage({ params }: PageProps) {
  const { market } = await params;
  if (!getCompanyMarket(market)) notFound();

  const language = getLanguage(market);
  const text = copy[language];

  return (
    <main
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "72px 24px 96px",
      }}
    >
      <header style={{ maxWidth: 820, marginBottom: 48 }}>
        <p style={{ fontWeight: 700, letterSpacing: "0.08em" }}>
          SOFTBRIDGE SOLUTIONS
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1 }}>
          {text.title}
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
          {text.intro}
        </p>
      </header>

      <section
        aria-label="Company metrics"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: 56,
        }}
      >
        {[
          [aggregateSalesFact.displayValue, text.sales],
          [companyProfile.experienceYears, text.experience],
          [
            `${companyProfile.headquarters.city}, ${companyProfile.headquarters.country}`,
            text.headquarters,
          ],
          [
            `${companyProfile.foundedIn.city}, ${companyProfile.foundedIn.country}`,
            text.founding,
          ],
        ].map(([value, label]) => (
          <article
            key={label}
            style={{
              padding: 24,
              border: "1px solid currentColor",
              borderRadius: 20,
            }}
          >
            <strong style={{ display: "block", fontSize: "1.8rem" }}>
              {value}
            </strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2>{text.records}</h2>
        <div style={{ display: "grid", gap: 20 }}>
          {companyEvidence.map((record) => (
            <article
              key={record.id}
              style={{
                padding: 28,
                border: "1px solid currentColor",
                borderRadius: 20,
              }}
            >
              <p style={{ fontWeight: 700 }}>{record.type}</p>
              <h3>{record.title}</h3>
              <p>{record.claimSupported}</p>
              <p>{record.description}</p>
              {record.sourceUrl ? (
                <a
                  href={record.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.source}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>{text.disclosure}</h2>
        <p>{companyProfile.evidencePolicy.salesStatement}</p>
        <p>{companyProfile.evidencePolicy.privacyStatement}</p>
        <p>{companyProfile.evidencePolicy.verificationStatement}</p>
      </section>
    </main>
  );
}
