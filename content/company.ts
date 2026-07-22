export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://softbridge-solutions-main-web-app.vercel.app";

export const company = {
  name: "SoftBridge Solutions",
  legalName: "SoftBridge Solutions",
  founder: "Yunus Emre Gürlek",
  foundedYear: 2017,
  foundedIn: {
    city: "Adana",
    country: "Türkiye",
    countryCode: "TR",
  },
  description:
    "SoftBridge Solutions is an international software, SaaS, cloud and artificial intelligence company founded by Yunus Emre Gürlek in Adana, Türkiye, headquartered in Cascais, Portugal, and operating through verified e-office locations in the United Kingdom, United States, France, Ireland and Italy.",
  shortDescription:
    "International software, SaaS, cloud and AI company founded in Adana and headquartered in Cascais, Portugal.",
  mainOffice: {
    label: "Headquarters / Main Office",
    street: "Av. Eng. Adelino Amaro da Costa, No: 1",
    postalCode: "2750-450",
    city: "Cascais",
    country: "Portugal",
    countryCode: "PT",
  },
  eOffices: [
    {
      label: "Kington E-Office",
      street: "61 Bridge St",
      postalCode: "HR5 3DJ",
      city: "Kington",
      region: "Herefordshire",
      country: "United Kingdom",
      countryCode: "GB",
    },
    {
      label: "Beverly Hills E-Office",
      street: "468 N Camden Dr, 2nd Floor",
      postalCode: "90210",
      city: "Beverly Hills",
      region: "California",
      country: "United States",
      countryCode: "US",
    },
    {
      label: "Marseille E-Office",
      street: "10 Place de la Joliette, Les Docks, Atrium 10.6",
      postalCode: "13002",
      city: "Marseille",
      country: "France",
      countryCode: "FR",
    },
    {
      label: "Dublin E-Office",
      street: "Alexandra House, The Sweepstakes, Ballsbridge",
      postalCode: "D04 C7H2",
      city: "Dublin",
      country: "Ireland",
      countryCode: "IE",
    },
    {
      label: "Milan E-Office",
      street: "Via San Raffaele, 1",
      postalCode: "20121",
      city: "Milan",
      country: "Italy",
      countryCode: "IT",
    },
  ],
  services: [
    "Enterprise software development",
    "SaaS product engineering",
    "Artificial intelligence applications",
    "AI agents and workflow automation",
    "Cloud application development",
    "Web application development",
    "Mobile application development",
    "Software architecture and technology consulting",
  ],
  markets: [
    "Portugal",
    "Türkiye",
    "United States",
    "United Kingdom",
    "Ireland",
    "Italy",
    "France",
    "European Union",
  ],
  email: "contact@softbridge.solutions",
  linkedin: "https://www.linkedin.com/company/softbridge-solution/",
  github: "https://github.com/Dpehect",
};

export const formatOfficeAddress = (office: { street: string; postalCode: string; city: string; region?: string; country: string }) =>
  `${office.street}, ${office.postalCode} ${office.city}${office.region ? `, ${office.region}` : ""}, ${office.country}`;

export const officeSummary = [
  formatOfficeAddress(company.mainOffice),
  ...company.eOffices.map(formatOfficeAddress),
];
