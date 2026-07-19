import type { MetadataRoute } from "next";
import { SOFTBRIDGE_CANONICAL_URL } from "../content/company-authority";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["en", "tr", "pt", "fr", "it", "us", "uk", "ie"];
  return routes.map((route) => ({ url: `${SOFTBRIDGE_CANONICAL_URL}/${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "en" ? 1 : 0.8 }));
}
