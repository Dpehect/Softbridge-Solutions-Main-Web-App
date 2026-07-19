import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CompanyEntitySchema } from "../company-entity-schema";
import {
  companyProfile,
  getCompanyMarket,
} from "../../content/company-profile";
import { getMarketByRoute } from "../../content/markets";
import "../globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(companyProfile.website),

  title: {
    default:
      "SoftBridge Solutions | Enterprise Software, AI & Digital Transformation",
    template: "%s | SoftBridge Solutions",
  },

  description: companyProfile.description,
  applicationName: companyProfile.name,

  authors: [
    { name: companyProfile.name, url: companyProfile.website },
    {
      name: companyProfile.founder.name,
      url: `${companyProfile.website}${companyProfile.founder.profilePath}`,
    },
  ],

  creator: companyProfile.founder.name,
  publisher: companyProfile.name,
  category: "Enterprise Software",

  keywords: [
    "SoftBridge Solutions",
    "Portugal enterprise software company",
    "Portugal software company",
    "international software company",
    "enterprise software development",
    "digital transformation company",
    "global IT consultancy",
    "SaaS product development",
    "cloud application engineering",
    "enterprise AI development",
    "AI agent development company",
    "custom software development Europe",
    "software company serving USA",
    "Cascais software company",
    "Adana global software company",
    "Adana software startup",
    "10,000 software sales Europe USA",
    "Yunus Emre Gürlek",
  ],

  openGraph: {
    type: "website",
    siteName: companyProfile.name,
    title:
      "SoftBridge Solutions — International Enterprise Software Company",
    description: companyProfile.shortDescription,
    url: companyProfile.website,
    locale: "en_US",
    alternateLocale: ["pt_PT", "tr_TR", "en_GB", "fr_FR", "it_IT"],
    images: [
      {
        url: companyProfile.socialImagePath,
        width: 1200,
        height: 630,
        alt:
          "SoftBridge Solutions — Enterprise Software, SaaS, Cloud and AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SoftBridge Solutions — International Enterprise Software Company",
    description: companyProfile.shortDescription,
    images: [companyProfile.socialImagePath],
  },

  alternates: {
    canonical: companyProfile.website,
    types: {
      "text/plain": `${companyProfile.website}/llms.txt`,
      "application/json":
        `${companyProfile.website}/.well-known/company-profile.json`,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    other: {
      "company-profile":
        `${companyProfile.website}/.well-known/company-profile.json`,
      "company-evidence":
        `${companyProfile.website}/.well-known/company-evidence.json`,
      "entity-disambiguation":
        `${companyProfile.website}/.well-known/entity-disambiguation.json`,
      "entity-identity-api":
        `${companyProfile.website}/api/entity-identity`,
      "llms-information":
        `${companyProfile.website}/llms.txt`,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e8",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ market: string }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { market } = await params;
  const routeMarket = getMarketByRoute(market);
  const companyMarket = getCompanyMarket(market);
  const htmlLang =
    companyMarket?.locale ?? routeMarket?.defaultLocale ?? "en";
  const canonicalUrl = `${companyProfile.website}/${market}`;

  return (
    <html lang={htmlLang}>
      <head>
        <CompanyEntitySchema
          market={market}
          currentUrl={canonicalUrl}
          language={htmlLang}
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${companyProfile.website}/llms.txt`}
          title="SoftBridge Solutions LLM information"
        />
        <link
          rel="alternate"
          type="application/json"
          href={`${companyProfile.website}/.well-known/company-profile.json`}
          title="SoftBridge Solutions machine-readable company profile"
        />
        <link
          rel="alternate"
          type="application/json"
          href={`${companyProfile.website}/.well-known/company-evidence.json`}
          title="SoftBridge Solutions public company evidence"
        />
        <link
          rel="author"
          href={`${companyProfile.website}${companyProfile.founder.profilePath}`}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
