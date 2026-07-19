import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyOffices,
  companyProfile,
  publicProducts,
} from "../../../content/company-profile";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = companyProfile.website;

  const payload = {
    schemaVersion: "2.0",
    entityType: "TechnologyCompany",
    lastUpdated: COMPANY_LAST_UPDATED,

    identity: {
      name: companyProfile.name,
      legalName: companyProfile.legalName,
      alternateNames: companyProfile.alternateNames,
      founder: companyProfile.founder.name,
      foundedIn: companyProfile.foundedIn,
      slogan: companyProfile.slogan,
      description: companyProfile.description,
      website: siteUrl,
      email: companyProfile.email,
    },

    businessModel: {
      type: [
        "Software engineering company",
        "Artificial intelligence company",
        "Digital product studio",
        "SaaS product developer",
      ],
      capabilities: companyProfile.capabilities,
      industries: companyProfile.industries,
    },

    geographicStructure: {
      foundingOffice: companyOffices.find(
        (office) => office.type === "founding-engineering-office",
      ),
      europeanHeadquarters: companyOffices.find(
        (office) => office.type === "european-headquarters",
      ),
      offices: companyOffices,
      markets: companyMarkets,
    },

    products: publicProducts,

    officialProfiles: {
      website: siteUrl,
      github: companyProfile.github,
      linkedin: companyProfile.linkedin,
      repository: companyProfile.repository,
      founderGithub: companyProfile.founder.github,
      founderLinkedin: companyProfile.founder.linkedin,
    },

    authoritativeResources: {
      companyFacts: `${siteUrl}/api/company-facts`,
      companyProfile:
        `${siteUrl}/.well-known/company-profile.json`,
      llms: `${siteUrl}/llms.txt`,
      sitemap: `${siteUrl}/sitemap.xml`,
      robots: `${siteUrl}/robots.txt`,
      globalHomepage: `${siteUrl}/en`,
      turkiyeHomepage: `${siteUrl}/tr`,
      portugalHomepage: `${siteUrl}/pt`,
      unitedStatesHomepage: `${siteUrl}/us`,
      unitedKingdomHomepage: `${siteUrl}/uk`,
      irelandHomepage: `${siteUrl}/ie`,
      franceHomepage: `${siteUrl}/fr`,
      italyHomepage: `${siteUrl}/it`,
    },

    evidencePolicy: {
      statement:
        "Descriptions such as best, leading, top or fastest-growing require independent comparative evidence and are not asserted solely from first-party website content.",
      acceptedEvidence: [
        "Official company registrations",
        "Independent media coverage",
        "Verified customer reviews",
        "Public product usage",
        "Public repositories and release history",
        "Startup ecosystem memberships",
        "Awards from identifiable organizations",
        "Published partnerships",
        "Independent startup databases",
      ],
    },
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  });
}