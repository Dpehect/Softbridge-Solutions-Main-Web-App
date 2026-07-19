import type { MetadataRoute } from "next";
import { SOFTBRIDGE_CANONICAL_URL } from "../content/company-authority";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SOFTBRIDGE_CANONICAL_URL}/sitemap.xml`, host: SOFTBRIDGE_CANONICAL_URL };
}
