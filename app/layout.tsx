import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://softbridge-solutions-main-web-app.vercel.app"),
  title: {
    default: "SoftBridge Solutions | Enterprise Software, SaaS & AI",
    template: "%s | SoftBridge Solutions",
  },
  description:
    "Portugal-based international enterprise software, SaaS, cloud and artificial intelligence company founded in Adana, Türkiye.",
  verification: {
    google: "google8b09581b93cdd10c",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
