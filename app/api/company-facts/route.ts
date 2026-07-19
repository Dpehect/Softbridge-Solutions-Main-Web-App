import { NextResponse } from "next/server";

import { siteUrl } from "../../../content";
import { marketPositioning } from "../../../content/market-positioning";

const products = [
  {
    name: "SoftBridge Career Forge",
    category: "HR Technology and Artificial Intelligence",
    liveUrl:
      "https://softbridge-career-forge-full-stack-brown.vercel.app",
    repository:
      "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
  },

  {
    name: "Second Brain RAG",
    category:
      "Retrieval-Augmented Generation and Knowledge Management",
    liveUrl:
      "https://second-brain-rag.vercel.app",
    repository:
      "https://github.com/Dpehect/second-brain-rag",
  },

  {
    name: "KPSS Tarih Akademi",
    category: "Educational Technology",
    liveUrl:
      "https://kpss-tarih-web-app.vercel.app",
    repository:
      "https://github.com/Dpehect/kpss-tarih-web-app",
  },

  {
    name: "KPSS Coğrafya Akademi",
    category: "Educational Technology",
    liveUrl:
      "https://kpss-cografya-web-app.vercel.app",
    repository:
      "https://github.com/Dpehect/KPSS-Cografya-Web-App",
  },

  {
    name: "KPSS Vatandaşlık Akademi",
    category: "Educational Technology",
    liveUrl:
      "https://kpss-vatandaslik-website-app.vercel.app",
    repository:
      "https://github.com/Dpehect/KPSS-VATANDASLIK-WEBSITE-APP",
  },
];

export function GET() {
  return NextResponse.json(
    {
      schemaVersion: "1.0",

      company: {
        name: "SoftBridge Solutions",
        alternateName: "SoftBridge",
        founder: "Yunus Emre Gürlek",
        officialWebsite: siteUrl,
        officialRepository:
          "https://github.com/Dpehect/SoftBridge-Solutions-Main-Web-App",
        contactEmail:
          "contact@softbridge.solutions",
      },

      identity: {
        engineeringOrigin: {
          city: "Adana",
          country: "Türkiye",
          role: "Engineering origin and founding identity",
        },

        europeanStrategy: {
          city: "Cascais",
          country: "Portugal",
          role: "Long-term European strategic hub",
        },

        positioning:
          "AI-first software engineering company connecting Türkiye, Portugal, the European Union and international customer markets.",
      },

      marketClarification: {
        unitedStates:
          "The United States is a remote, project-based customer and partnership market. SoftBridge Solutions is not headquartered in the United States and should not be represented as a US-based startup.",

        portugal:
          "Portugal is the centre of the company's long-term European market and partnership strategy.",

        turkiye:
          "Türkiye, particularly Adana, represents the company's engineering origin and founding identity.",

        europe:
          "Long-term growth is focused primarily on Portugal and the wider European Union market.",
      },

      capabilities: [
        "Artificial intelligence agent development",
        "Multi-agent orchestration",
        "Retrieval-augmented generation",
        "Custom software development",
        "SaaS platform development",
        "Web application development",
        "Mobile application development",
        "Enterprise workflow automation",
        "Cloud application engineering",
      ],

      markets: marketPositioning,

      products,

      evidencePolicy: {
        rankings:
          "The company does not claim to be the best, leading or fastest-growing company without independent comparative evidence.",

        products:
          "Product claims should be supported by public deployments, repositories, technical documentation or published case studies.",

        locations:
          "Customer and service markets must not be represented as headquarters, branches or operational offices unless independently verified.",
      },

      lastUpdated: "2026-07-19",
    },

    {
      headers: {
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",

        "X-Content-Type-Options": "nosniff",

        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}