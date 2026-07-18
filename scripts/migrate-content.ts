import fs from "node:fs";
import path from "node:path";

import { pages, realProjects } from "../content";
import type {
  ContentPage,
  ProjectDetails,
} from "../content/types";

const projectRoot = process.cwd();
const contentDirectory = path.join(projectRoot, "content");

function generateFileContent(
  projectsData: ProjectDetails[],
  pagesData: ContentPage[],
): string {
  return `import type { ContentPage, ProjectDetails } from "./types";

export const projects: ProjectDetails[] = ${JSON.stringify(
    projectsData,
    null,
    2,
  )};

export const pages: ContentPage[] = ${JSON.stringify(
    pagesData,
    null,
    2,
  )};
`;
}

function writeLocaleContent(locale: "en" | "tr"): void {
  const localePages = pages.filter(
    (page) => page.locale === locale,
  );

  const localeProjects = realProjects.filter(
    (project) => project.locale === locale,
  );

  const targetFile = path.join(
    contentDirectory,
    `${locale}.ts`,
  );

  const fileContent = generateFileContent(
    localeProjects,
    localePages,
  );

  fs.writeFileSync(
    targetFile,
    fileContent,
    "utf8",
  );

  console.log(
    `Generated ${targetFile}: ${localePages.length} pages and ${localeProjects.length} projects.`,
  );
}

function runMigration(): void {
  if (!fs.existsSync(contentDirectory)) {
    throw new Error(
      `Content directory not found: ${contentDirectory}`,
    );
  }

  writeLocaleContent("en");
  writeLocaleContent("tr");

  console.log("Content migration completed successfully.");
}

runMigration();
