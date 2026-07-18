import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "../../content";
import { getMarketByRoute } from "../../content/markets";
import "../globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SoftBridge Solutions | Global AI & Software Company", template: "%s | SoftBridge Solutions" },
  description: "Global technology company founded in Adana, with its main office in Cascais, engineering AI systems, web and mobile products, SaaS platforms and enterprise software.",
  applicationName: "SoftBridge Solutions",
  openGraph: { type: "website", siteName: "SoftBridge Solutions", title: "SoftBridge Solutions — Technology without borders", description: "Global software, AI systems, SaaS, web and mobile products from Adana to international markets.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "SoftBridge Solutions — Technology without borders" }] },
  twitter: { card: "summary_large_image", title: "SoftBridge Solutions — Technology without borders", description: "Global software, AI systems, SaaS, web and mobile products from Adana to international markets.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f0e8" };

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ market: string }>;
}>) {
  const resolvedParams = await params;
  const marketRoute = resolvedParams.market;
  const marketConfig = getMarketByRoute(marketRoute);
  
  // Resolve standard html lang attribute
  // If market not found, default to 'en'
  const htmlLang = marketConfig ? marketConfig.defaultLocale : "en";

  return (
    <html lang={htmlLang}>
      <body className={`\${geist.variable} \${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
