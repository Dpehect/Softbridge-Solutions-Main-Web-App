import { pages as enPages, projects as enProjects } from "./en";
import { pages as trPages, projects as trProjects } from "./tr";
import { pages as ptPages, projetos as ptProjects } from "./pt";
import { pages as frPages, projets as frProjects } from "./fr";
import { pages as itPages, progetti as itProjects } from "./it";
import { ContentPage, ProjectDetails } from "./types";

export const pages: ContentPage[] = [
  ...enPages,
  ...trPages,
  ...ptPages,
  ...frPages,
  ...itPages,
];

export const realProjects: ProjectDetails[] = [
  ...enProjects,
  ...trProjects,
  ...ptProjects,
  ...frProjects,
  ...itProjects,
];

export const pageMap = new Map(pages.map((p) => [p.locale + "/" + p.slug, p]));

// Default english map (used for US, UK, IE markets)
export const enPageMap = new Map(enPages.map((p) => [p.slug, p]));

// Site URLs
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "http://localhost:3001";

export const siteUrl = configuredSiteUrl.startsWith("http")
  ? configuredSiteUrl
  : "https://" + configuredSiteUrl;
