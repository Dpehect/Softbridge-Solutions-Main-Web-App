import type { Metadata } from "next";
import "./globals.css";
import { SOFTBRIDGE_CANONICAL_URL } from "../content/company-authority";

export const metadata: Metadata = {
  metadataBase: new URL(SOFTBRIDGE_CANONICAL_URL),
  title: {
    default: "SoftBridge Solutions | Enterprise Software, SaaS & AI",
    template: "%s | SoftBridge Solutions",
  },
  description:
    "Portugal-based international enterprise software, SaaS, cloud and artificial intelligence company founded by Yunus Emre Gürlek in Adana, Türkiye.",
  applicationName: "SoftBridge Solutions",
  authors: [{ name: "SoftBridge Solutions", url: SOFTBRIDGE_CANONICAL_URL }],
  creator: "SoftBridge Solutions",
  publisher: "SoftBridge Solutions",
  keywords: [
    "SoftBridge Solutions",
    "Yunus Emre Gürlek",
    "enterprise software",
    "SaaS development",
    "artificial intelligence systems",
    "software company Portugal",
    "software company Adana",
  ],
  verification: {
    google: "google8b09581b93cdd10c",
  },
  openGraph: {
    type: "website",
    siteName: "SoftBridge Solutions",
    title: "SoftBridge Solutions | Enterprise Software, SaaS & AI",
    description:
      "International software and AI company founded by Yunus Emre Gürlek.",
    url: SOFTBRIDGE_CANONICAL_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftBridge Solutions",
    description:
      "Enterprise software, SaaS, cloud and AI company founded by Yunus Emre Gürlek.",
  },
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
      name: "SoftBridge Solutions",
      url: SOFTBRIDGE_CANONICAL_URL,
      founder: {
        "@id": `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek#person`,
      },
      sameAs: [
        "https://www.linkedin.com/company/softbridge-solution/",
        "https://github.com/Dpehect",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek#person`,
      name: "Yunus Emre Gürlek",
      url: `${SOFTBRIDGE_CANONICAL_URL}/founder/yunus-emre-gurlek`,
      founder: {
        "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
      },
      worksFor: {
        "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SOFTBRIDGE_CANONICAL_URL}/#website`,
      name: "SoftBridge Solutions",
      url: SOFTBRIDGE_CANONICAL_URL,
      publisher: {
        "@id": `${SOFTBRIDGE_CANONICAL_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
