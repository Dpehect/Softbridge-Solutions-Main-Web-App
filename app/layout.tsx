import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "./content";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Softbridge Solutions | Enterprise AI engineering", template: "%s | Softbridge Solutions" },
  description: "Adana-based AI engineering for enterprise agents, language-model applications and workflow automation.",
  applicationName: "Softbridge Solutions",
  keywords: ["enterprise AI", "AI agents", "generative AI", "LLM development", "workflow automation", "Adana", "Türkiye"],
  openGraph: { type: "website", locale: "en_US", siteName: "Softbridge Solutions", title: "Softbridge Solutions — Enterprise AI, engineered for real work", description: "AI engineering, agents and workflow systems from Adana, Türkiye.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Softbridge Solutions — Enterprise AI, engineered for real work" }] },
  twitter: { card: "summary_large_image", title: "Softbridge Solutions — Enterprise AI, engineered for real work", description: "AI engineering, agents and workflow systems from Adana, Türkiye.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f0e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
