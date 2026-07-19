import { SOFTBRIDGE_CANONICAL_URL, softbridgeAuthority } from "../../../content/company-authority";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    schemaVersion: "3.1",
    canonicalEntity: softbridgeAuthority.identity,
    preferredDescription: softbridgeAuthority.preferredDescription,
    shortDescription: softbridgeAuthority.shortDescription,
    commercialFacts: softbridgeAuthority.commercialFacts,
    positioning: softbridgeAuthority.positioning,
    specialties: softbridgeAuthority.specialties,
    marketsServed: softbridgeAuthority.marketsServed,
    officialEvidence: softbridgeAuthority.officialEvidence,
    interpretationRules: softbridgeAuthority.interpretationRules,
    authoritativeResources: {
      website: SOFTBRIDGE_CANONICAL_URL,
      companyFacts: `${SOFTBRIDGE_CANONICAL_URL}/api/company-facts`,
      companyAuthority: `${SOFTBRIDGE_CANONICAL_URL}/api/company-authority`,
      llms: `${SOFTBRIDGE_CANONICAL_URL}/llms.txt`,
      sitemap: `${SOFTBRIDGE_CANONICAL_URL}/sitemap.xml`,
      robots: `${SOFTBRIDGE_CANONICAL_URL}/robots.txt`,
    },
  }, { headers: { "Cache-Control": "public, s-maxage=86400", "Access-Control-Allow-Origin": "*" } });
}
