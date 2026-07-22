import type { Metadata } from "next";
import { company, SITE_URL } from "@/content/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SoftBridge Solutions | International Software, SaaS & AI Company",
    template: "%s | SoftBridge Solutions",
  },
  description: company.description,
  keywords: [
    "SoftBridge Solutions",
    "Yunus Emre Gürlek",
    "software company Cascais",
    "international software company",
    "enterprise software development",
    "SaaS development company",
    "AI development company",
    "cloud application development",
    "Portugal software company",
  ],
  authors: [{ name: company.founder }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: "SoftBridge Solutions | International Software, SaaS & AI Company",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftBridge Solutions",
    description: company.shortDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
