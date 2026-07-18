import { siteUrl, realProjects } from "../content";
import { ContentPage } from "../content/types";
import { marketConfigs } from "../content/markets";

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
  const inLanguage = page?.locale || "en";

  const orgId = `\${siteUrl}/#organization`;
  const personId = `\${siteUrl}/#yunus-emre-gurlek`;
  const websiteId = `\${siteUrl}/#website`;

  const isTr = page?.locale === "tr";

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
      "url": `\${siteUrl}/logo.png`,
      "caption": "SoftBridge Solutions Logo"
    },
    "slogan": isTr ? "Sınır tanımayan teknoloji" : "Technology without borders",
    "description": isTr 
      ? "Adana merkezli kurulmuş, Cascais merkez ofisli, yapay zekâ sistemleri ve özel yazılım geliştiren küresel teknoloji firması."
      : "AI-first global technology company founded in Adana, Türkiye, engineering artificial intelligence, web applications, SaaS platforms and enterprise software.",
    "founder": { "@id": personId },
    "foundingLocation": { "@type": "Place", "name": "Adana, Türkiye" },
    "foundingDate": "2017-04-12",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 8
    },
    "areaServed": [
      "Türkiye",
      "Portugal",
      "United States",
      "United Kingdom",
      "Ireland",
      "France",
      "Italy"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "E-office and Portuguese market contact point",
        "areaServed": "Portugal",
        "availableLanguage": ["en", "pt"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "E-office and US market contact point",
        "areaServed": "United States",
        "availableLanguage": ["en"]
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
      "Custom Software Development", "Web Development", "Mobile App Development", 
      "SaaS Development", "Cloud Applications"
    ]
  };

  // 2. Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    "name": "Yunus Emre Gürlek",
    "url": `\${siteUrl}/en/yunus-emre-gurlek`,
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
      "target": `\${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const graph: Record<string, unknown>[] = [];

  // Homepages
  if (!page || page.slug === "" || page.slug === "tr" || page.slug === "en" || page.slug === "pt" || page.slug === "fr" || page.slug === "it") {
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

    if (slug === "yunus-emre-gurlek") {
      graph.push({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `\${currentUrl}/#profile`,
        "url": currentUrl,
        "mainEntity": personSchema
      });
      graph.push(personSchema);
    } 
    else if (slug === "about" || slug === "company-facts" || slug.includes("hakkimizda")) {
      graph.push(organizationSchema);
    }
    else if (slug === "projects" || slug.includes("projeler") || slug.includes("projetos")) {
      realProjects.filter(p => p.locale === inLanguage).forEach((p) => {
        graph.push({
          "@context": "https://schema.org",
          "@type": ["SoftwareApplication", "WebApplication"],
          "@id": `\${siteUrl}/\${slug}/#project-\${p.slug}`,
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
