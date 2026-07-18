export const locales = [
  "en",
  "tr",
  "pt",
  "fr",
  "it",
  "en-US",
  "en-GB",
  "en-IE",
] as const;

export type Locale = typeof locales[number];

export const markets = [
  "global",
  "turkiye",
  "portugal",
  "united-states",
  "united-kingdom",
  "ireland",
  "france",
  "italy",
] as const;

export type Market = typeof markets[number];

export type ContentStatus = "published" | "draft" | "archived";

export type ContentType =
  | "service"
  | "article"
  | "local-guide"
  | "company"
  | "person"
  | "project"
  | "research"
  | "tool"
  | "collection";

export type ContentSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type ContentSource = {
  name: string;
  url: string;
  accessedAt: string;
  supports: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContentPage = {
  slug: string;
  locale: Locale;
  market?: Market;
  type: ContentType;
  status: ContentStatus;
  indexable: boolean;
  title: string;
  description: string;
  eyebrow?: string;
  summary: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  reviewedBy?: string;
  translationOf?: string;
  canonicalPath?: string;
  sources?: ContentSource[];
  sections: ContentSection[];
  faq?: FAQItem[];
};

export type ProjectDetails = {
  name: string;
  slug: string;
  locale: Locale;
  category: string;
  githubUrl?: string;
  homepageUrl: string;
  launchDate: string;
  problem: string;
  users: string;
  functionality: string;
  architecture: string;
  techStack: string[];
  challenges: string;
  limitations: string;
};

export type VerifiedClaim = {
  id: string;
  statement: string;
  status: "verified" | "pending" | "prohibited";
  source?: string;
  lastReviewedAt: string;
};
