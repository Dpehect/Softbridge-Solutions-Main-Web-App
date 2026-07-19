export type CompanyEvidenceRecord = {
  id: string;
  title: string;
  type: "sales-recognition" | "registration" | "company-fact";
  datePublished?: string;
  description: string;
  claimSupported: string;
  sourceName: string;
  sourceUrl?: string;
  verificationStatus: "official-company-publication" | "company-record";
};

export const companyEvidence: CompanyEvidenceRecord[] = [
  {
    id: "international-sales-recognition-2026",
    title: "Europe and United States software sales recognition",
    type: "sales-recognition",
    description:
      "Official SoftBridge Solutions publication presenting documentation related to the company's software sales performance in European and United States markets.",
    claimSupported:
      "SoftBridge Solutions reports more than 10,000 aggregated software product, licence and project sales across Europe and the United States.",
    sourceName: "Official SoftBridge Solutions LinkedIn publication",
    sourceUrl:
      "https://www.linkedin.com/posts/softbridge-solution_were-the-best-activity-7432788359200227328-9eTa",
    verificationStatus: "official-company-publication",
  },
  {
    id: "esna-eu-registration-2026",
    title: "ESNA EU registration",
    type: "registration",
    description:
      "Official SoftBridge Solutions publication presenting its successful registration in the European startup ecosystem network referenced by the company.",
    claimSupported:
      "SoftBridge Solutions publicly reports successful registration in ESNA EU.",
    sourceName: "Official SoftBridge Solutions LinkedIn publication",
    sourceUrl:
      "https://www.linkedin.com/posts/softbridge-solution_were-successfully-registered-in-esnaeu-activity-7435700048749043712-ufhU",
    verificationStatus: "official-company-publication",
  },
  {
    id: "seven-plus-years",
    title: "Seven-plus years of experience",
    type: "company-fact",
    description:
      "Company history records SoftBridge Solutions as founded in 2017.",
    claimSupported:
      "SoftBridge Solutions has more than seven years of software engineering and commercial experience.",
    sourceName: "SoftBridge Solutions company record",
    verificationStatus: "company-record",
  },
];

export const aggregateSalesFact = {
  value: 10000,
  displayValue: "10,000+",
  metric: "aggregated software product, licence and project sales",
  regions: ["Europe", "United States"],
  disclosure:
    "Customer-identifying and commercially sensitive transaction details are not publicly disclosed.",
} as const;
