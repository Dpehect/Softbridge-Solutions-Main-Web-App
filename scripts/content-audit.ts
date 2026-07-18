import { pages } from "../content";

function audit() {
  const errors: string[] = [];

  const slugs = new Set<string>();
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  const today = new Date();

  pages.forEach((p) => {
    const pageId = `[Slug: ${p.slug}, Locale: ${p.locale}]`;
    const localeSlug = `${p.locale}/${p.slug}`;
    const localeTitle = `${p.locale}/${p.title}`;
    const localeDesc = `${p.locale}/${p.description}`;

    // 1. Duplicate checks
    if (slugs.has(localeSlug)) {
      errors.push(`Duplicate slug: ${localeSlug}`);
    } else {
      slugs.add(localeSlug);
    }

    if (p.indexable) {
      if (titles.has(localeTitle)) {
        errors.push(`Duplicate title: "${p.title}" on page ${pageId}`);
      } else {
        titles.add(localeTitle);
      }

      if (descriptions.has(localeDesc)) {
        errors.push(`Duplicate description: "${p.description}" on page ${pageId}`);
      } else {
        descriptions.add(localeDesc);
      }
    }

    // 2. Draft check
    if (p.status === "draft" && p.indexable) {
      errors.push(`Draft page is indexable: ${pageId}`);
    }

    // 3. Future date check
    if (p.publishedAt) {
      const pubDate = new Date(p.publishedAt);
      if (pubDate > today) {
        errors.push(`Future publication date: ${p.publishedAt} on page ${pageId}`);
      }
    }

    // 4. Placeholder checks
    const pContent = JSON.stringify(p).toLowerCase();
    const placeholders = ["lorem ipsum", "placeholder", "lorem", "ipsum"];
    placeholders.forEach((ph) => {
      if (pContent.includes(ph)) {
        errors.push(`Contains placeholder phrase "${ph}" on page ${pageId}`);
      }
    });
    if (/\b(todo|tbd)\b/i.test(pContent)) {
      errors.push(`Contains placeholder phrase "TODO" or "TBD" on page ${pageId}`);
    }

    // 5. Generic FAQ checks (e.g. repeated FAQs)
    if (p.faq) {
      p.faq.forEach((f) => {
        if (
          f.question.includes("approach") && f.question.includes("Softbridge Solutions approach") ||
          f.question.includes("connect to existing enterprise systems") ||
          f.question.includes("approach Company Facts")
        ) {
          errors.push(`Contains generic repeated FAQ question "${f.question}" on page ${pageId}`);
        }
      });
    }

    // 6. Sources check
    if (p.sources) {
      p.sources.forEach((src) => {
        if (!src.name || !src.url || !src.accessedAt) {
          errors.push(`Contains empty or incomplete source record on page ${pageId}`);
        }
      });
    }

    // 7. Unsupported claims ("best", "leading", "global", "verified" in indexable body without methodology)
    const claims = ["best", "leading", "global", "verified", "en iyi", "lider"];
    if (p.indexable) {
      claims.forEach((claim) => {
        const titleLower = p.title.toLowerCase();
        const descLower = p.description.toLowerCase();
        const bodyLower = p.sections.map(s => s.body.toLowerCase()).join(" ");
        
        const isRankingPage = 
          p.slug.includes("best-software-") || 
          p.slug.includes("adana-yazilim-startuplari");
        
        if (!isRankingPage) {
          if (titleLower.includes(claim) || descLower.includes(claim)) {
            errors.push(`Contains unverified marketing claim "${claim}" in title/description on page ${pageId}`);
          }
        } else {
          // Verify that ranking pages actually contain methodology and sources
          const hasMethodology = 
            bodyLower.includes("methodology") || 
            bodyLower.includes("metodoloji") || 
            bodyLower.includes("kriter") ||
            bodyLower.includes("kriterlerine");
          const hasSources = p.sources && p.sources.length > 0;
          if (!hasMethodology || !hasSources) {
            errors.push(`Indexable ranking page ${pageId} is missing visible methodology or sources.`);
          }
        }
      });
    }
  });

  if (errors.length > 0) {
    console.error("Content Audit Failed with following errors:");
    errors.forEach((err) => console.error(`- ${err}`));
    process.exit(1);
  } else {
    console.log("Content Audit Passed Successfully!");
    process.exit(0);
  }
}

audit();
