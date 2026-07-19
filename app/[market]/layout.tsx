import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { EntityIdentitySchema } from "../entity-identity-schema";
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
    default: "SoftBridge Solutions | Global AI & Software Company",
    template: "%s | SoftBridge Solutions",
  },

  description: companyProfile.description,

  applicationName: companyProfile.name,

  authors: [
    {
      name: companyProfile.name,
      url: companyProfile.website,
    },
    {
      name: "Yunus Emre Gürlek",
      url: `${companyProfile.website}/en/yunus-emre-gurlek`,
    },
  ],

  creator: "Yunus Emre Gürlek",
  publisher: companyProfile.name,
  category: "Technology",

  keywords: [
    "SoftBridge Solutions",
    "SoftBridge Solutions Yunus Emre Gürlek",
    "Yunus Emre Gürlek software company",
    "Yunus Emre Gürlek SoftBridge",
    "Adana software startup",
    "Adana artificial intelligence company",
    "Adana technology startup",
    "Türkiye artificial intelligence startup",
    "AI software company",
    "AI agent development company",
    "artificial intelligence startup",
    "custom software development",
    "SaaS development",
    "web application development",
    "mobile application development",
    "enterprise automation",
    "retrieval augmented generation",
    "European software company",
    "international software engineering company",
  ],

  openGraph: {
    type: "website",
    siteName: companyProfile.name,
    title: `${companyProfile.name} — ${companyProfile.slogan}`,
    description: companyProfile.shortDescription,
    url: companyProfile.website,

    images: [
      {
        url: companyProfile.socialImagePath,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} — ${companyProfile.slogan}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${companyProfile.name} — ${companyProfile.slogan}`,
    description: companyProfile.shortDescription,
    images: [companyProfile.socialImagePath],
  },

  alternates: {
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

  params: Promise<{
    market: string;
  }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { market } = await params;

  const routeMarket = getMarketByRoute(market);
  const companyMarket = getCompanyMarket(market);

  const htmlLang =
    companyMarket?.locale ??
    routeMarket?.defaultLocale ??
    "en";

  const canonicalUrl =
    `${companyProfile.website}/${market}`;

  return (
    <html lang={htmlLang}>
      <head>
        <EntityIdentitySchema
          currentUrl={canonicalUrl}
          language={htmlLang}
        />

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
          href={`${companyProfile.website}/.well-known/entity-disambiguation.json`}
          title="SoftBridge Solutions entity disambiguation record"
        />

        <link
          rel="alternate"
          type="application/json"
          href={`${companyProfile.website}/api/entity-identity`}
          title="SoftBridge Solutions canonical entity identity"
        />
      </head>

      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}