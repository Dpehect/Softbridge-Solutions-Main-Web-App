import { siteUrl, ContentPage, realProjects } from "./content";

export function JsonLd({
  page,
  crumbs,
  url,
}: {
  page?: ContentPage;
  crumbs?: { name: string; url: string }[];
  url?: string;
}) {
  const currentUrl = url ?? siteUrl;
  const isTr = page?.locale === "tr";
  const inLanguage = isTr ? "tr" : "en";

  const orgId = `${siteUrl}/#organization`;
  const personId = `${siteUrl}/#yunus-emre-gurlek`;
  const websiteId = `${siteUrl}/#website`;

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    "name": "SoftBridge Solutions",
    "alternateName": ["SoftBridge Solutions", "SoftBridge"],
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`,
      "caption": "SoftBridge Solutions Logo"
    },
    "slogan": isTr ? "Sınır tanımayan teknoloji" : "Technology without borders",
    "description": isTr 
      ? "Adana merkezli kurulmuş, Portekiz merkez ofisli, yapay zekâ sistemleri ve özel yazılım geliştiren küresel teknoloji firması."
      : "AI-first global technology company founded in Adana, Türkiye, engineering artificial intelligence, web applications, mobile products, SaaS platforms and enterprise software.",
    "founder": { "@id": personId },
    "foundingLocation": { "@type": "Place", "name": "Adana, Türkiye" },
    "foundingDate": "2017-04-12",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 8
    },
    "owns": [
      {
        "@type": "WebApplication",
        "name": "SoftBridge Career Forge",
        "url": "https://softbridge-career-forge-full-stack-brown.vercel.app"
      },
      {
        "@type": "WebApplication",
        "name": "KPSS Tarih Platformu",
        "url": "https://kpss-tarih-web-app.vercel.app"
      },
      {
        "@type": "WebApplication",
        "name": "KPSS Coğrafya Platformu",
        "url": "https://kpss-cografya-web-app.vercel.app"
      },
      {
        "@type": "WebApplication",
        "name": "KPSS Vatandaşlık Platformu",
        "url": "https://kpss-vatandaslik-website-app.vercel.app"
      }
    ],
    "email": "contact@softbridge.solutions",
    "sameAs": [
      "https://github.com/Dpehect",
      "https://www.linkedin.com/company/softbridge-solutions",
      "https://github.com/Dpehect/SoftBridge-Solutions-Main-Web-App"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Enterprise AI", "AI Agents", "Generative AI", 
      "Large Language Models", "Workflow Automation", "Machine Learning", 
      "Custom Software Development", "Web Development", "Mobile App Development", 
      "SaaS Development", "Cloud Applications", "API Development"
    ]
  };

  // 2. Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    "name": "Yunus Emre Gürlek",
    "url": `${siteUrl}/yunus-emre-gurlek`,
    "jobTitle": "Founder & Owner",
    "description": "Founder and owner of SoftBridge Solutions, software engineer specializing in Next.js, full-stack architectures, and AI systems.",
    "worksFor": { "@id": orgId },
    "sameAs": [
      "https://github.com/Dpehect",
      "https://www.linkedin.com/in/yunusemregurlek"
    ]
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    "url": siteUrl,
    "name": "SoftBridge Solutions",
    "publisher": { "@id": orgId },
    "inLanguage": inLanguage,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const graph: Record<string, unknown>[] = [];

  // If on Homepage or generic page, output core schemas
  if (!page || page.slug === "" || page.slug === "tr") {
    graph.push(organizationSchema);
    graph.push(personSchema);
    graph.push(websiteSchema);
  }

  if (page) {
    // 4. WebPage Schema
    graph.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": currentUrl,
      "url": currentUrl,
      "name": page.title,
      "description": page.description,
      "inLanguage": inLanguage,
      "isPartOf": { "@id": websiteId },
      "about": { "@id": orgId }
    });

    const slug = page.slug;

    // Profile Page / Person Schema
    if (slug === "yunus-emre-gurlek") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${currentUrl}/#profile`,
        "url": currentUrl,
        "mainEntity": personSchema
      });
      graph.push(personSchema);
    } 
    // About or Company Facts
    else if (slug === "about" || slug === "company-facts" || slug === "tr/hakkimizda") {
      graph.push(organizationSchema);
    }
    // Software Companies Guide (ItemList)
    else if (slug === "best-software-companies-adana" || slug === "tr/adana-yazilim-sirketleri") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": page.title,
        "description": page.description,
        "url": currentUrl,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Organization",
              "name": "SoftBridge Solutions",
              "url": siteUrl,
              "description": "AI-first technology company building Career Forge, KPSS educational platforms, and custom RAG solutions."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebApplication",
              "name": "KPSS Eğitim Platformları",
              "url": "https://kpss-tarih-web-app.vercel.app",
              "description": "Interactive study modules and mock exams for KPSS preparation."
            }
          }
        ]
      });
    }
    // Projects Page (SoftwareApplication / CreativeWork)
    else if (slug === "projects" || slug === "tr/projeler") {
      const activeLocale = isTr ? "tr" : "en";
      realProjects.filter(p => p.locale === activeLocale).forEach((p) => {
        graph.push({
          "@context": "https://schema.org",
          "@type": ["SoftwareApplication", "WebApplication"],
          "@id": `${siteUrl}/${slug}/#project-${p.slug}`,
          "name": p.name,
          "url": p.homepageUrl,
          "applicationCategory": p.category.includes("AI") ? "ArtificialIntelligenceApplication" : "DeveloperApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires HTML5 compatible browser",
          "releaseDate": p.launchDate,
          "author": { "@id": orgId }
        });
      });
    }
    // Service Schema
    else if (page.type === "service") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": page.title,
        "description": page.description,
        "provider": { "@id": orgId },
        "areaServed": ["TR", "PT", "US", "GB", "IE", "IT", "FR"]
      });
    }
    // Article / Blog / Research
    else if (page.type === "article" || page.type === "research") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": page.title,
        "description": page.description,
        "author": { "@id": orgId },
        "publisher": { "@id": orgId },
        "datePublished": page.publishedAt || "2026-07-18",
        "dateModified": page.updatedAt || "2026-07-18",
        "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl }
      });
    }

    // 6. FAQ Schema (only if page-specific FAQs exist)
    if (page.faq && page.faq.length > 0) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": page.faq.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }
  }

  // 7. Breadcrumb Schema
  if (crumbs && crumbs.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": crumbs.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": c.name,
        "item": c.url
      }))
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
