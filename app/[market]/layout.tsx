import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "../../content";
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
  metadataBase: new URL(siteUrl),

  title: {
    default: "SoftBridge Solutions | Global AI & Software Company",
    template: "%s | SoftBridge Solutions",
  },

  description:
    "SoftBridge Solutions is an AI-first technology company founded in Adana, Türkiye, developing AI agents, custom software, SaaS platforms, web applications and mobile products for international organizations.",

  applicationName: "SoftBridge Solutions",

  authors: [
    {
      name: "SoftBridge Solutions",
      url: siteUrl,
    },
  ],

  creator: "SoftBridge Solutions",
  publisher: "SoftBridge Solutions",

  category: "Technology",

  openGraph: {
    type: "website",
    siteName: "SoftBridge Solutions",
    title: "SoftBridge Solutions — Technology without borders",
    description:
      "AI systems, SaaS platforms, custom software, web and mobile products engineered for international markets.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SoftBridge Solutions — Technology without borders",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftBridge Solutions — Technology without borders",
    description:
      "AI systems, SaaS platforms, custom software, web and mobile products engineered for international markets.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
  const marketConfig = getMarketByRoute(market);

  const htmlLang = marketConfig?.defaultLocale ?? "en";

  return (
    <html lang={htmlLang}>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
