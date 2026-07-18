import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "./content";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Softbridge Solutions | Global AI & Software Company", template: "%s | Softbridge Solutions" },
  description: "Global technology company founded in Adana, with its main office in Cascais, engineering AI systems, web and mobile products, SaaS platforms and enterprise software.",
  applicationName: "Softbridge Solutions",
  keywords: ["software company in Adana", "AI company in Adana", "software agency Turkey", "web development", "mobile app development", "SaaS development", "enterprise AI", "AI agents", "Adana", "Türkiye"],
  openGraph: { type: "website", locale: "en_US", siteName: "Softbridge Solutions", title: "Softbridge Solutions — Technology without borders", description: "Global software, AI systems, SaaS, web and mobile products from Adana to international markets.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Softbridge Solutions — Technology without borders" }] },
  twitter: { card: "summary_large_image", title: "Softbridge Solutions — Technology without borders", description: "Global software, AI systems, SaaS, web and mobile products from Adana to international markets.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f0e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
