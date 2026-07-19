import type { MetadataRoute } from "next";

import { siteUrl } from "../content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/private/",
          "/preview/",
          "/_next/static/chunks/",
        ],
      },

      {
        userAgent: "Googlebot",
        allow: "/",
      },

      {
        userAgent: "Bingbot",
        allow: "/",
      },

      {
        userAgent: "GPTBot",
        allow: "/",
      },

      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },

      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },

      {
        userAgent: "ClaudeBot",
        allow: "/",
      },

      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },

      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      {
        userAgent: "Perplexity-User",
        allow: "/",
      },

      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
