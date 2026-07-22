import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/company";
export default function sitemap(): MetadataRoute.Sitemap { const routes=["","/company","/founder/yunus-emre-gurlek","/global-presence","/services","/contact","/press","/faq","/llms.txt","/llms-full.txt","/api/company-facts"]; return routes.map((route)=>({url:`${SITE_URL}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.8})); }
