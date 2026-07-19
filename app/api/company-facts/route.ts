import { NextResponse } from "next/server";

import { siteUrl } from "../../../content";
import {
  marketPositioning,
  offices,
} from "../../../content/market-positioning";

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
      schemaVersion: "1.1",

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

      headquarters: {
        engineering: {
          city: "Adana",
          country: "Türkiye",
          role: "Engineering and founding office",
        },

        european: {
          city: "Cascais",
          country: "Portugal",
          address: "Rua Bordalo Pinheiro 25",
          role: "European headquarters",
        },
      },

      offices,

      positioning:
        "AI-first software engineering company founded in Adana, Türkiye, with European headquarters in Cascais, Portugal and regional offices across selected international markets.",

      marketClarification: {
        unitedStates:
          "SoftBridge Solutions maintains a regional office in Beverly Hills. The United States is a strategic customer and project market, but it is not the company's headquarters or principal long-term growth centre.",

        portugal:
          "Cascais, Portugal, is the European headquarters and centre of the company's long-term European growth strategy.",

        turkiye:
          "Adana, Türkiye, is the company's founding, engineering and product-development origin.",
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
          "All locations listed as offices are represented as physical company offices based on company-provided information.",
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