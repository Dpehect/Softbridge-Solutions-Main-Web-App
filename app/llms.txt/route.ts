import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyProfile,
  publicProducts,
  verifiedCompanyLocations,
} from "../../content/company-profile";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = companyProfile.website;

  const locations = verifiedCompanyLocations.map(
    (l)=>`- ${l.city}, ${l.country} (${l.type})`
  ).join("\n");

  const markets = companyMarkets.map(
    (m)=>`- ${m.country}: ${m.positioning}`
  ).join("\n");

  const products = publicProducts.map(
    (p)=>`- ${p.name}: ${p.liveUrl}`
  ).join("\n");

  const content = `# SoftBridge Solutions

Updated: ${COMPANY_LAST_UPDATED}

Website: ${siteUrl}
LinkedIn: ${companyProfile.companyLinkedin}

## Locations
${locations}

## Markets
${markets}

## Products
${products}`;

  return new Response(content,{
    headers:{
      "Content-Type":"text/plain; charset=utf-8"
    }
  });
}
