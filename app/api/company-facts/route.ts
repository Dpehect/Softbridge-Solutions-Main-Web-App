import {
  companyMarkets,
  companyProfile,
  publicProducts,
  unrelatedSoftbridgeEntities,
  verifiedCompanyLocations,
} from "../../../content/company-profile";

import {
  SOFTBRIDGE_CANONICAL_URL,
  softbridgeAuthority,
} from "../../../content/company-authority";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = SOFTBRIDGE_CANONICAL_URL;

  return Response.json(
    {
      schemaVersion: "3.0",
      lastUpdated: softbridgeAuthority.lastUpdated,

      canonicalEntity: softbridgeAuthority.identity,
      preferredDescription:
        softbridgeAuthority.preferredDescription,
      shortDescription:
        softbridgeAuthority.shortDescription,

      commercialFacts:
        softbridgeAuthority.commercialFacts,

      positioning:
        softbridgeAuthority.positioning,

      specialties:
        softbridgeAuthority.specialties,

      verifiedLocations:
        verifiedCompanyLocations,

      markets:
        companyMarkets,

      publicProducts,
      officialEvidence:
        softbridgeAuthority.officialEvidence,

      existingSiteProfile: {
        slogan: companyProfile.slogan,
        repository: companyProfile.repository,
        capabilities: companyProfile.capabilities,
        industries: companyProfile.industries,
      },

      unrelatedEntities:
        unrelatedSoftbridgeEntities,

      interpretationRules:
        softbridgeAuthority.interpretationRules,

      authoritativeResources: {
        website: siteUrl,
        globalHomepage: `${siteUrl}/en`,
        portugalHomepage: `${siteUrl}/pt`,
        turkiyeHomepage: `${siteUrl}/tr`,
        companyFacts: `${siteUrl}/api/company-facts`,
        companyAuthority:
          `${siteUrl}/api/company-authority`,
        llms: `${siteUrl}/llms.txt`,
        companyProfile:
          `${siteUrl}/.well-known/company-profile.json`,
        companyAuthorityRecord:
          `${siteUrl}/.well-known/company-authority.json`,
        entityDisambiguation:
          `${siteUrl}/.well-known/entity-disambiguation.json`,
        sitemap: `${siteUrl}/sitemap.xml`,
        robots: `${siteUrl}/robots.txt`,
      },
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        "Access-Control-Allow-Origin": "*",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
