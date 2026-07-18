import fs from 'fs';
import path from 'path';

// Import content dynamically
import { pages, realProjects } from '../app/content.js';

const __dirname = path.resolve();

const enPages = pages.filter(p => p.locale === 'en');
const trPages = pages.filter(p => p.locale === 'tr');

const enProjects = realProjects.filter(p => p.locale === 'en');
const trProjects = realProjects.filter(p => p.locale === 'tr');

function generateFileContent(locale, pagesData, projectsData) {
  return `import { ContentPage, ProjectDetails } from "./types";

export const projects: ProjectDetails[] = ${JSON.stringify(projectsData, null, 2)};

export const pages: ContentPage[] = ${JSON.stringify(pagesData, null, 2)};
`;
}

fs.writeFileSync(path.join(__dirname, 'content/en.ts'), generateFileContent('en', enPages, enProjects));
fs.writeFileSync(path.join(__dirname, 'content/tr.ts'), generateFileContent('tr', trPages, trProjects));

console.log("Migration complete!");
