import {
  COMPANY_LAST_UPDATED,
  companyMarkets,
  companyProfile,
  publicProducts,
  verifiedCompanyLocations,
} from "../../../content/company-profile";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = companyProfile.website;

  const foundingLocation = verifiedCompanyLocations.find(
    (location) => location.type === "founding-location",
  );

  const europeanLocation = verifiedCompanyLocations.find(
    (location) => location.countryCode === "PT",
  );

  const payload = {
    schemaVersion: "2.1",
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
      operatingModel: companyProfile.operatingModel,
    },
    geographicStructure: {
      foundingLocation,
      europeanLocation,
      locations: verifiedCompanyLocations,
      markets: companyMarkets,
    },
    products: publicProducts,
    officialProfiles: {
      website: siteUrl,
      github: companyProfile.github,
      linkedin: companyProfile.companyLinkedin,
      repository: companyProfile.repository,
      founderGithub: companyProfile.founder.github,
      founderLinkedin: companyProfile.founder.linkedin,
    },
  };

  return Response.json(payload);
}
