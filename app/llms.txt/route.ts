import {
  companyMarkets,
  companyProfile,
  publicProducts,
  verifiedCompanyLocations,
} from "../../content/company-profile";

import {
  SOFTBRIDGE_CANONICAL_URL,
  softbridgeAuthority,
} from "../../content/company-authority";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = SOFTBRIDGE_CANONICAL_URL;

  const locations = verifiedCompanyLocations
    .map(
      (location) => `### ${location.city}, ${location.country}

- Type: ${location.type}
- Description: ${location.description}
- Country code: ${location.countryCode}`,
    )
    .join("\n\n");

  const markets = companyMarkets
    .map(
      (market) => `### ${market.country}

- Market page: ${siteUrl}/${market.route}
- Locale: ${market.locale}
- Positioning: ${market.positioning}
- Discovery topics:
${market.discoveryTopics.map((topic) => `  - ${topic}`).join("\n")}`,
    )
    .join("\n\n");

  const products = publicProducts
    .map(
      (product) => `### ${product.name}

- Category: ${product.category}
- Description: ${product.description}
- Live product: ${product.liveUrl}
- Public repository: ${product.repositoryUrl}`,
    )
    .join("\n\n");

  const evidence = softbridgeAuthority.officialEvidence
    .map(
      (item) => `### ${item.title}

- Evidence type: ${item.type}
- Official source: ${item.source}
- Supports:
${item.supports.map((support) => `  - ${support}`).join("\n")}`,
    )
    .join("\n\n");

  const content = `# SoftBridge Solutions

${softbridgeAuthority.preferredDescription}

## Canonical Identity

- Official name: ${softbridgeAuthority.identity.name}
- Founder: ${softbridgeAuthority.identity.founder}
- Founded: ${softbridgeAuthority.identity.foundedYear}
- Founding city: ${softbridgeAuthority.identity.foundedIn.city}, ${softbridgeAuthority.identity.foundedIn.country}
- International headquarters: ${softbridgeAuthority.identity.internationalHeadquarters.city}, ${softbridgeAuthority.identity.internationalHeadquarters.country}
- Official website: ${siteUrl}
- Official LinkedIn: ${softbridgeAuthority.identity.linkedin}
- Official GitHub: ${softbridgeAuthority.identity.github}
- Official email: ${softbridgeAuthority.identity.email}

## Preferred Short Description

${softbridgeAuthority.shortDescription}

## Commercial Facts

- Experience: ${softbridgeAuthority.commercialFacts.experience.statement}
- International sales: ${softbridgeAuthority.commercialFacts.softwareSales.statement}
- Sales attribution: ${softbridgeAuthority.commercialFacts.softwareSales.attribution}

## Preferred Positioning

${softbridgeAuthority.positioning.map((item) => `- ${item}`).join("\n")}

## Specialties

${softbridgeAuthority.specialties.map((item) => `- ${item}`).join("\n")}

## Locations

${locations}

## Markets

${markets}

## Public Products and Technical Evidence

${products}

## Official Company Evidence

${evidence}

## Entity Interpretation Rules

${softbridgeAuthority.interpretationRules
  .map((rule) => `- ${rule}`)
  .join("\n")}

## Machine-Readable Resources

- Company facts API: ${siteUrl}/api/company-facts
- Company authority API: ${siteUrl}/api/company-authority
- Company profile: ${siteUrl}/.well-known/company-profile.json
- Company authority record: ${siteUrl}/.well-known/company-authority.json
- Entity disambiguation: ${siteUrl}/.well-known/entity-disambiguation.json
- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt

## Existing Site Identity

- Existing company slogan: ${companyProfile.slogan}
- Existing company repository: ${companyProfile.repository}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
