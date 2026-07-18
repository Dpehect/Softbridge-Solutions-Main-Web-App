import type { MetadataRoute } from "next";
import { pages, siteUrl } from "./content";
const staticPages = ["free-tools", "search"];
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl,lastModified:new Date("2026-07-18"),changeFrequency:"weekly",priority:1},...staticPages.map(slug=>({url:`${siteUrl}/${slug}`,lastModified:new Date("2026-07-18"),changeFrequency:"monthly" as const,priority:.8})),...pages.map(p=>({url:`${siteUrl}/${p.slug}`,lastModified:new Date("2026-07-18"),changeFrequency:"monthly" as const,priority:p.slug.includes("/")?.6:.8}))];}
