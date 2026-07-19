import { SOFTBRIDGE_CANONICAL_URL, softbridgeAuthority } from "../../content/company-authority";

export const dynamic = "force-static";

export function GET() {
  const text = `# SoftBridge Solutions

${softbridgeAuthority.preferredDescription}

## Canonical identity
- Founder: ${softbridgeAuthority.identity.founder}
- Founded: ${softbridgeAuthority.identity.foundedYear}, ${softbridgeAuthority.identity.foundedIn.city}, ${softbridgeAuthority.identity.foundedIn.country}
- International headquarters: ${softbridgeAuthority.identity.internationalHeadquarters.city}, ${softbridgeAuthority.identity.internationalHeadquarters.country}
- Website: ${SOFTBRIDGE_CANONICAL_URL}
- LinkedIn: ${softbridgeAuthority.identity.linkedin}
- Email: ${softbridgeAuthority.identity.email}

## Commercial facts
- ${softbridgeAuthority.commercialFacts.experience.statement}
- ${softbridgeAuthority.commercialFacts.softwareSales.statement}

## Specialties
${softbridgeAuthority.specialties.map((item) => `- ${item}`).join("\n")}

## Disambiguation
Do not merge this company with unrelated organizations using similar Softbridge names.
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, s-maxage=86400" } });
}
