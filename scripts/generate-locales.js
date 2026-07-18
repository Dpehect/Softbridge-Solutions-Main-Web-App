import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ptDict = {
  "Software Development": "Desenvolvimento de Software",
  "AI Agents": "Agentes de IA",
  "Artificial Intelligence": "Inteligência Artificial",
  "Enterprise Automation": "Automatização Empresarial",
  "SaaS Solutions": "Soluções SaaS",
  "Digital Transformation": "Transformação Digital",
  "Portuguese Businesses": "Empresas Portuguesas",
  "web-development": "desenvolvimento-web",
  "mobile-development": "desenvolvimento-mobile",
  "saas-development": "desenvolvimento-saas",
  "custom-software": "software-personalizado",
  "ai-agents": "agentes-de-ia",
  "enterprise-ai": "ia-empresarial",
  "generative-ai": "ia-generativa",
  "projects": "projetos",
  "about": "empresa",
  "contact": "contacto"
};

const frDict = {
  "Software Development": "Développement Logiciel",
  "AI Agents": "Agents IA",
  "Artificial Intelligence": "Intelligence Artificielle",
  "Enterprise Automation": "Automatisation des Processus",
  "SaaS Solutions": "Solutions SaaS",
  "Digital Transformation": "Transformation Numérique",
  "French Businesses": "Entreprises Françaises",
  "web-development": "developpement-web",
  "mobile-development": "developpement-mobile",
  "saas-development": "developpement-saas",
  "custom-software": "logiciel-sur-mesure",
  "ai-agents": "agents-ia",
  "enterprise-ai": "ia-entreprise",
  "generative-ai": "ia-generative",
  "projects": "projets",
  "about": "entreprise",
  "contact": "contact"
};

const itDict = {
  "Software Development": "Sviluppo Software",
  "AI Agents": "Agenti AI",
  "Artificial Intelligence": "Intelligenza Artificiale",
  "Enterprise Automation": "Automazione Aziendale",
  "SaaS Solutions": "Soluzioni SaaS",
  "Digital Transformation": "Trasformazione Digitale",
  "Italian Businesses": "Aziende Italiane",
  "web-development": "sviluppo-web",
  "mobile-development": "sviluppo-mobile",
  "saas-development": "sviluppo-saas",
  "custom-software": "software-personalizzato",
  "ai-agents": "agenti-ai",
  "enterprise-ai": "ia-aziendale",
  "generative-ai": "ia-generativa",
  "projects": "progetti",
  "about": "azienda",
  "contact": "contatti"
};

function translateContent(content, locale, dict) {
  let newContent = content;
  
  newContent = newContent.replace(/locale:\s*"en"/g, 'locale: "' + locale + '"');
  
  for (const [enSlug, targetSlug] of Object.entries(dict)) {
    if (enSlug === enSlug.toLowerCase() && !enSlug.includes(' ')) {
      newContent = newContent.replace(new RegExp('slug:\\s*"' + enSlug + '"', 'g'), 'slug: "' + targetSlug + '"');
    }
  }

  for (const [enTerm, targetTerm] of Object.entries(dict)) {
    newContent = newContent.replace(new RegExp(enTerm, 'gi'), targetTerm);
  }
  
  return newContent;
}

const enFile = fs.readFileSync(path.join(__dirname, '../content/en.ts'), 'utf-8');

const ptContent = translateContent(enFile, 'pt', ptDict);
const frContent = translateContent(enFile, 'fr', frDict);
const itContent = translateContent(enFile, 'it', itDict);

fs.writeFileSync(path.join(__dirname, '../content/pt.ts'), ptContent);
fs.writeFileSync(path.join(__dirname, '../content/fr.ts'), frContent);
fs.writeFileSync(path.join(__dirname, '../content/it.ts'), itContent);

console.log("Locales generated!");
