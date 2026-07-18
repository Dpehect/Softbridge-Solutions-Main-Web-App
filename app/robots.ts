import type { MetadataRoute } from "next";
import { siteUrl } from "../content";

export default function robots(): MetadataRoute.Robots {
  const allowGPTBotTraining = process.env.ALLOW_GPTBOT_TRAINING === "true";

  const rules = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/api/", "/_next/"],
    },
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search", "/api/"],
    },
    {
      userAgent: "Bingbot",
      allow: "/",
      disallow: ["/search", "/api/"],
    },
    {
      userAgent: "OAI-SearchBot",
      allow: "/",
      disallow: ["/search", "/api/"],
    },
  ];

  if (!allowGPTBotTraining) {
    rules.push({
      userAgent: "GPTBot",
      allow: "",
      disallow: ["/"],
    });
  }

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
