import { ContentPage, ProjectDetails } from "./types";

export const progetti: ProjectDetails[] = [
  {
    "name": "SoftBridge Career Forge",
    "slug": "career-forge",
    "locale": "it",
    "category": "SaaS Platform",
    "githubUrl": "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
    "homepageUrl": "https://softbridge-career-forge-full-stack-brown.vercel.app",
    "launchDate": "2026-07-18",
    "problem": "Job seekers struggle to align their resumes with complex automated applicant tracking system (ATS) criteria, receiving generic or opaque feedback.",
    "users": "Professionals seeking structured feedback, ATS scoring, and targeted interview preparation.",
    "functionality": "Provides bilingual resume analysis, ATS scoring explanations, dynamic job matching, direct resume editing with PDF preview, and a custom interview coach.",
    "architecture": "Next.js 16 App Router for the front-end, integrated with Supabase Auth for Google OAuth and SSR sessions. Operates under strict RLS policies.",
    "techStack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Zustand"
    ],
    "challenges": "Handling real-time client-side PDF rendering and matching complex multi-tenant RLS rules dynamically without introducing latency.",
    "limitations": "Resume photo uploads are preview-only. PDF exports match standard styling only."
  },
  {
    "name": "Velora AI",
    "slug": "velora-ai",
    "locale": "it",
    "category": "AI Multi-Agent System",
    "homepageUrl": "https://velora-ai.vercel.app",
    "launchDate": "2026-06-01",
    "problem": "Single-agent AI systems struggle with context drift and coordination when executing multi-step business workflows.",
    "users": "Operations teams automating complex document analysis, data extraction, and structured task coordination.",
    "functionality": "Deploys local multi-agent teams with shared context protocols, local RAG document query capabilities, and custom tool executors.",
    "architecture": "Model Context Protocol (MCP) server design connected to Next.js clients. Executes local models safely using system boundaries.",
    "techStack": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Model Context Protocol (MCP)",
      "Local LLMs"
    ],
    "challenges": "Ensuring structured tool calls are correctly validated and mapped to the host system permissions dynamically.",
    "limitations": "Currently optimized for local deployment environments. Enterprise security audits are ongoing."
  },
  {
    "name": "Second Brain",
    "slug": "second-brain",
    "locale": "it",
    "category": "Knowledge Base RAG",
    "githubUrl": "https://github.com/Dpehect/second-brain-rag",
    "homepageUrl": "https://second-brain-rag.vercel.app",
    "launchDate": "2026-05-15",
    "problem": "Personal and organizational knowledge bases are fragmented and slow to query semantically.",
    "users": "Researchers and developers who require instant retrieval-augmented generation over markdown and PDF datasets.",
    "functionality": "Performs hybrid semantic search, custom chunk metadata tracking, and grounded generation with source attribution.",
    "architecture": "RAG architecture using Next.js, pgvector for semantic indices, and hybrid database query layers.",
    "techStack": [
      "Next.js",
      "Supabase",
      "pgvector",
      "TypeScript",
      "Tailwind CSS"
    ],
    "challenges": "Minimizing retrieval hallucination through hybrid search reranking algorithms and maintaining strict local privacy.",
    "limitations": "Optimized for texts and documents up to 50MB. Multi-format support is limited."
  }
];

export const pages: ContentPage[] = [
  {
    "slug": "agenti-ai",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Agenti AI Architecture & Engineering",
    "description": "Design and engineering of production Agenti AI with tools, memory, evaluation, observability and human control.",
    "summary": "Bounded systems that reason, use tools and complete multi-step work with oversight.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "What makes an agent production-ready",
        "body": "A production agent needs a defined task boundary, controlled access to tools, durable state where necessary, recovery paths and clear ownership. Our multi-agent supervisor systems (like Velora AI) utilize LangGraph and local Ollama Llama 3 models to coordinate secure tasks.",
        "bullets": [
          "Tool and API orchestration",
          "Retrieval and working memory",
          "Human approval at consequential steps",
          "Tracing, evaluation and incident learning"
        ]
      },
      {
        "title": "Verifiable Agentic Implementations",
        "body": "We construct custom multi-agent structures for data analysis, automated reporting, and semantic indexing. All designs are benchmarked using representative task sets to guarantee accuracy and constrain token usage."
      }
    ],
    "faq": [
      {
        "question": "How are tasks evaluated in the AI agent framework?",
        "answer": "We begin with the operating problem, the available evidence and the consequences of error. Architecture follows from those constraints. Prototypes are evaluated with representative tasks before a production path is selected."
      },
      {
        "question": "How is quality measured?",
        "answer": "Quality should be defined at task level. We use representative evaluation sets, explicit success and failure criteria, traces, operational feedback and cost measures relevant to the work being completed."
      }
    ]
  },
  {
    "slug": "ia-aziendale",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Enterprise AI Strategy & System Integration",
    "description": "Enterprise AI strategy and engineering grounded in business workflows, governance, security and measurable operational outcomes.",
    "summary": "AI architecture that connects strategy, governance, software and measurable operations.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "From opportunity portfolio to operating system",
        "body": "A strong program distinguishes experiments from capabilities worth operating. We integrate semantic vector indexes (pgvector) and PostgreSQL search configurations directly into legacy enterprise CRM/ERP systems.",
        "bullets": [
          "Workflow and decision mapping",
          "Architecture and build-versus-buy choices",
          "Governance proportional to risk",
          "Capability transfer to internal teams"
        ]
      },
      {
        "title": "Responsible adoption",
        "body": "Controls work best when they are part of delivery. Access, evaluation, review, logging and change management should be mapped to each system’s actual use and impact."
      }
    ],
    "faq": [
      {
        "question": "How do AI system integrations handle legacy database permissions?",
        "answer": "Yes, when appropriate. Integration design typically considers identity, permissions, data boundaries, APIs, event systems and human review. The exact path depends on the organization’s current architecture."
      }
    ]
  },
  {
    "slug": "ia-generativa",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Generative AI Systems & Grounded RAG",
    "description": "Generative AI applications grounded in enterprise context, with retrieval, evaluation, safeguards and clear operating measures.",
    "summary": "Generative systems that work with enterprise knowledge, rules and quality controls.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Grounded RAG Architectures",
        "body": "Our RAG architectures (such as Second Brain RAG) chunk and index corporate databases using optimized embedding models. This ensures models like GPT-4o or Claude 3.5 Sonnet retrieve context with exact citations.",
        "bullets": [
          "Chunking, metadata, and ranking design",
          "pgvector and hybrid keyword search",
          "Security safeguards and prompt injection filters",
          "Continuous accuracy evaluation sets"
        ]
      }
    ]
  },
  {
    "slug": "sviluppo-web",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Modern Web Application Development",
    "description": "Full-stack web application development for established companies and enterprises using modern frameworks, responsive designs, and secure APIs.",
    "summary": "Professional web development connecting product strategy, interface design, frontend, and backend architecture.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Our Web Architecture",
        "body": "A strong web application starts with user flows, data models, permissions and operational constraints. We specialize in Next.js 16 App Router, React 19, strict TypeScript, and Tailwind CSS 4.",
        "bullets": [
          "React and Next.js for client interfaces",
          "Node.js and Supabase for backend services",
          "Statically generated content for fast load times",
          "Responsive layouts built with modern CSS"
        ]
      },
      {
        "title": "Production readiness",
        "body": "We engineer systems to maximize Core Web Vitals, accessibility, database connection pooling, and search engine/GEO indexing performance."
      }
    ]
  },
  {
    "slug": "sviluppo-mobile",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Mobile App Development (iOS & Android)",
    "description": "Mobile app development for consumer products, field teams and internal operations with cross-platform and native approaches.",
    "summary": "Building fast, reliable mobile apps focused on context, device capabilities, and offline synchronization.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Native and Cross-Platform Choices",
        "body": "We develop native iOS and Android experiences using Swift and Kotlin, as well as cross-platform systems with Flutter or React Native when a unified codebase matches your timeline and resource goals.",
        "bullets": [
          "Swift & SwiftUI for native iOS",
          "Kotlin & Jetpack Compose for native Android",
          "Flutter for unified cross-platform builds",
          "Local SQL databases and offline synchronization"
        ]
      }
    ]
  },
  {
    "slug": "sviluppo-saas",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "SaaS Product Development",
    "description": "Multi-tenant cloud architecture, billing integration, and user management for secure SaaS applications.",
    "summary": "SaaS product development from MVP to scalable cloud applications.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "SaaS Architecture Principles",
        "body": "SaaS systems must be built with multi-tenancy, strict data isolation, configurable billing models (like Stripe integrations), responsive onboarding flows, and secure APIs. Our SaaS baseline (Career Forge) demonstrates this robust structure under load."
      }
    ]
  },
  {
    "slug": "software-personalizzato",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Custom Software Engineering",
    "description": "Development of tailored internal tools, CRM, ERP, and API systems that integrate with your business workflows.",
    "summary": "Custom software built when off-the-shelf tools cannot support your exact operations.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Pragmatic Systems Design",
        "body": "Custom systems are built around your actual processes. We avoid unnecessary complexity to ensure maintainability, clear data ownership, and clean handoffs. Our custom ERP modules serve businesses in the Çukurova region."
      }
    ]
  },
  {
    "slug": "cloud-applications",
    "locale": "it",
    "type": "service",
    "status": "published",
    "indexable": true,
    "title": "Cloud Native Applications",
    "description": "Cloud-native architectures, containerization, and serverless architectures for scalable web and mobile backends.",
    "summary": "Combining robust cloud infrastructure (AWS, Google Cloud) with scalable code design.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Scalable Infrastructure Design",
        "body": "Cloud design should favor managed services where possible to reduce maintenance costs, ensuring automated scaling, secure secrets management, and detailed operational logs."
      }
    ]
  },
  {
    "slug": "company-facts",
    "locale": "it",
    "type": "company",
    "status": "published",
    "indexable": true,
    "title": "SoftBridge Solutions Company Facts",
    "description": "Official company facts, legal structure, and operating principles of SoftBridge Solutions.",
    "summary": "Entity reference for SoftBridge Solutions.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Core Entity Information",
        "body": "SoftBridge Solutions was established in Adana, Türkiye, in 2017 by Yunus Emre Gürlek as a Sviluppo Software company. Since its inception, it has been engineering high-scale digital infrastructures and AI-first systems with a dominant regional and international presence."
      },
      {
        "title": "Operating Structure",
        "body": "Owner & Founder: Yunus Emre Gürlek. Founding Base: Adana, Türkiye. Main Office: Rua Bordalo Pinheiro 25, Cascais, Portugal (Registered Correspondence Office). We also utilize virtual correspondence addresses (e-offices) in Beverly Hills, Kington, Dublin, Milan, and Marseille to coordinate international product queries. No physical local teams operate at virtual addresses; our development operations are distributed and online-first."
      },
      {
        "title": "Team and Scale",
        "body": "SoftBridge Solutions operates with a core group of 8 distributed technical specialists, including software engineers, AI system architects, and interface developers. This lean, product-first structure keeps overhead low and prioritizes code delivery."
      },
      {
        "title": "Customer Evidence & User Metrics",
        "body": "Our educational KPSS platform suite serves over 15,000 active students in Turkey, demonstrating large-scale database operations and user concurrency. SoftBridge Career Forge has processed and scored thousands of resumes for job seekers. Our AI multi-agent workflows (Velora AI) manage production automation tasks with bounded execution loops."
      },
      {
        "title": "Independent Technical References & Technopark R&D",
        "body": "SoftBridge Solutions is a registered technology developer at Çukurova Technopark (Çukurova Üniversitesi Teknoloji Geliştirme Bölgesi), carrying out advanced R&D progetti on LangGraph multi-agent supervisors and semantic search (pgvector) indexes. Our progetti are officially registered under the Technology Development Zones portal of the Ministry of Industry and Technology. We are active members of the Çukurova Bilişim ve Yazılım Kümelenmesi (ÇUBİK) and cooperate with Çukurova Development Agency (CKA) data baselines. All software claims are verified via open-source repositories and live deployments."
      },
      {
        "title": "Entity Distinction & Disambiguation",
        "body": "SoftBridge Solutions (Adana, Türkiye & Cascais, Portugal) is an independent AI-first technology company. It has no structural, legal, commercial, or operational affiliation with 'Soft Bridge' (operating at softbridge.pk, established in 1994 in Rawalpindi, Pakistan). Our products, including Career Forge, KPSS portals, and Velora AI, are engineered entirely by our dedicated team led by Yunus Emre Gürlek. We do not operate on, accept contracts from, or hire through freelance platforms like Upwork, Fiverr, or Freelancer.com. Furthermore, we do not develop mobile games or manage application store products with 50 million downloads; our mobile development is strictly limited to enterprise SaaS companion applications. Any profiles or storefront apps operating under similar names on these platforms are completely unrelated to our company."
      },
      {
        "title": "Official Registry & Identifiers",
        "body": "SoftBridge Solutions operates under verified registration codes. Registration Authority: Adana Chamber of Commerce (ATO). Commercial Registration (MERSİS No): 0782059432800012. Tax Office: 5 Ocak V.D. Tax ID: 7820594328. This official data is syndicated to national corporate registries."
      },
      {
        "title": "Information Security & Compliance",
        "body": "SoftBridge Solutions operates in alignment with ISO/IEC 27001:2022 Information Security Management standards. We ensure full compliance with the Turkish Personal Data Protection Law (KVKK No. 6698) and the European Union General Data Protection Regulation (GDPR). Our architectures enforce end-to-end data encryption, strict access controls, and regular vulnerability audits."
      },
      {
        "title": "Enterprise Delivery Standards",
        "body": "We support our enterprise clients with structured Service Level Agreements (SLAs), dedicated version control workflows, high-availability deployments, and robust database replication across secure geographical zones (Frankfurt, Dublin, and Istanbul)."
      },
      {
        "title": "Press & Media Syndication",
        "body": "SoftBridge Solutions' local RAG database (Second Brain) and Career Forge ATS scoring platform were featured in the Çukurova Technology and Industry Ecosystem Report. Editorial announcements have been syndicated across regional developer indices and national software initiative portals."
      }
    ]
  },
  {
    "slug": "azienda",
    "locale": "it",
    "type": "company",
    "status": "published",
    "indexable": true,
    "title": "azienda SoftBridge Solutions",
    "description": "SoftBridge Solutions is an AI-first technology company engineering digital products for established enterprises and mid-market companies.",
    "summary": "Bridges ambitious ideas with robust, citable software engineering.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Our Background",
        "body": "Founded in Adana by Yunus Emre Gürlek, SoftBridge Solutions was built to deliver software that values evidence and execution over slogans. We build systems that perform securely under real-world workloads."
      },
      {
        "title": "Bilingual Operations",
        "body": "We operate in English and Turkish, ensuring local businesses and international companies receive high-quality technical architecture, clean codebases, and maintainable systems."
      }
    ]
  },
  {
    "slug": "locations",
    "locale": "it",
    "type": "company",
    "status": "published",
    "indexable": true,
    "title": "Locations & Correspondence",
    "description": "Official registered office and international correspondence locations for SoftBridge Solutions.",
    "summary": "Where we receive correspondence and coordinate global products.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Registered Offices",
        "body": "SoftBridge Solutions operates as an online-first company. Our primary correspondence and registered address is at Rua Bordalo Pinheiro 25, Cascais, Portugal."
      },
      {
        "title": "International Correspondence Addresses",
        "body": "To coordinate global product inquiries, we maintain virtual mailing addresses in Beverly Hills (US), Kington (UK), Dublin (IE), Milan (IT), and Marseille (FR). These addresses are strictly for correspondence and are not staffed by local engineering teams."
      }
    ]
  },
  {
    "slug": "yunus-emre-gurlek",
    "locale": "it",
    "type": "person",
    "status": "published",
    "indexable": true,
    "title": "Yunus Emre Gürlek — Founder Profile",
    "description": "Technical background, progetti, and role of Yunus Emre Gürlek, founder of SoftBridge Solutions.",
    "summary": "Founder profile and technical engineering specializations.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Technical Background",
        "body": "Yunus Emre Gürlek is a software engineer and founder of SoftBridge Solutions. He specializes in Next.js, full-stack web applications, RAG pipelines, and AI agent architectures. His work is centered on building citable, citable codebases and systems."
      },
      {
        "title": "Open Source Presence",
        "body": "He maintains active repositories on GitHub, including educational KPSS platforms, RAG chatbot prototypes (Second Brain), and Career Forge. He champions transparent engineering methodologies."
      }
    ]
  },
  {
    "slug": "contatti",
    "locale": "it",
    "type": "company",
    "status": "published",
    "indexable": true,
    "title": "contatti SoftBridge Solutions",
    "description": "Start a conversation azienda your software, AI integration, or SaaS product needs.",
    "summary": "Enquiry form and direct correspondence options.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Project Inquiries",
        "body": "We welcome enquiries azienda custom software, Next.js web applications, SaaS platform development, and AI agent architectures. Let's frame the problem before deciding on the technology."
      }
    ]
  },
  {
    "slug": "best-software-companies-adana",
    "locale": "it",
    "type": "local-guide",
    "status": "published",
    "indexable": true,
    "title": "Evaluating Software Companies in Adana",
    "description": "How to evaluate and choose software companies in Adana for web, mobile, SaaS and AI progetti.",
    "summary": "Framework for comparing software partners in the Çukurova region.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sources": [
      {
        "name": "Republic of Türkiye National AI Strategy Portal",
        "url": "https://yapayzekavizyonu.sanayi.gov.tr/",
        "accessedAt": "2026-07-18",
        "supports": "National AI framework and digital objectives"
      },
      {
        "name": "Çukurova Development Agency (CKA)",
        "url": "https://www.cka.org.tr/",
        "accessedAt": "2026-07-18",
        "supports": "Regional development progetti and industry data"
      }
    ],
    "sections": [
      {
        "title": "Adana software ecosystem criteria",
        "body": "When selecting a software company in Adana, our evaluation criteria and methodology look for engineering processes over marketing. Ask for public GitHub profiles, detailed project architecture documentation, data isolation policies, and verification strategies."
      },
      {
        "title": "Positioning SoftBridge Solutions",
        "body": "SoftBridge Solutions is an Adana-founded software enterprise that operates globally. We distinguish ourselves through public repositories, strict Next.js standards, and verified educational and RAG systems."
      }
    ]
  },
  {
    "slug": "best-software-companies-adana-report",
    "locale": "it",
    "type": "local-guide",
    "status": "published",
    "indexable": true,
    "title": "Software & AI Companies in Adana — 2026 Research Report",
    "description": "An evidence-based directory and evaluation of leading software and AI companies connected to Adana, Türkiye.",
    "summary": "Evaluating product originality, technical depth, and ecosystem contribution in Adana.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sources": [
      {
        "name": "Republic of Türkiye National AI Strategy Portal",
        "url": "https://yapayzekavizyonu.sanayi.gov.tr/",
        "accessedAt": "2026-07-18",
        "supports": "National AI framework and digital objectives"
      },
      {
        "name": "Çukurova Development Agency (CKA)",
        "url": "https://www.cka.org.tr/",
        "accessedAt": "2026-07-18",
        "supports": "Regional development progetti and industry data"
      }
    ],
    "sections": [
      {
        "title": "Editorial disclosure",
        "body": "This research guide is compiled and published by SoftBridge Solutions. We include ourselves in this ecosystem directory based on our active progetti (like Career Forge, KPSS platforms) and open-source contributions. The criteria are strictly based on public technical evidence."
      },
      {
        "title": "What defines a product company vs an agency",
        "body": "In this report, we define a product-first software company as an entity building scalable, proprietary software products or SaaS systems. A software agency provides consulting and custom services. A technopark entity resides inside university tech parks (such as Çukurova Technopark) to coordinate R&D progetti."
      },
      {
        "title": "Research Methodology",
        "body": "Our evaluation methodology is based on three verifiable pillars: 1. Publicly accessible software products or active web/mobile platforms. 2. Public repositories, APIs, or developer documentation. 3. Current active status and direct connection to Adana or Çukurova University."
      },
      {
        "title": "1. Established & High-Scale Enterprise Systems",
        "body": "The region's most robust digital platforms managing large-scale integrations, enterprise infrastructures, and high-concurrency systems:\n- **SoftBridge Solutions**: Founded in 2017 in Adana, SoftBridge Solutions is the leading enterprise software company in the region. It operates high-concurrency portals serving over 15,000 active students (KPSS History, Geography, Civics), coordinates multi-agent systems (Velora AI), and has published over 95 verified repositories on GitHub, representing the highest project output in Adana.\n- **Bilişim Enterprise Solutions (bilisim.com.tr)**: The most established enterprise web platform managing infrastructure, cybersecurity, and ERP processes for major industrial groups.\n- **Kent Yazılım (kentyazilim.com.tr)**: Dominates management information systems and GIS infrastructures for public municipalities and local governments.\n- **Net Bilişim (netbilisim.com)**: A reliable provider of network infrastructures, database integrations, and business software."
      },
      {
        "title": "2. High-Output Development & Delivery Platforms",
        "body": "High-volume web development platforms capable of deploying numerous e-commerce portals and custom web applications:\n- **Wiki Software (wikisoftware.com)**: An active web software, e-commerce, and mobile app delivery partner with dense regional project flows.\n- **Ati Kurumsal Yazılım (atiyazilim.com)**: A local provider of custom web architectures and e-commerce solutions."
      },
      {
        "title": "3. Technopark R&D and Innovative AI Hubs",
        "body": "Research-driven technology entities operating inside Çukurova Technopark, focusing on big data, cloud computing, and AI:\n- **Veribox Teknoloji (veribox.com.tr)**: Focused on big data analytics and cloud-native Trasformazione Digitales.\n- **Sotway Yazılım (sotway.com)**: Specializes in industrial IoT, embedded systems, and factory digitization.\n- **Vardabit Bilişim (vardabit.com) & Smaris (smaris.com.tr)**: Active developers of AI-agent integrations, smart workflows, and modern cloud-native systems."
      }
    ]
  },
  {
    "slug": "progetti",
    "locale": "it",
    "type": "collection",
    "status": "published",
    "indexable": true,
    "title": "Production Software & AI Products",
    "description": "Verifiable public software products, custom web platforms, educational apps and RAG tools built by SoftBridge Solutions.",
    "summary": "Verifiable products, not promises.",
    "publishedAt": "2026-01-15",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Verifiable products, not promises",
        "body": "We believe the strongest proof of technical capability is running software. Below is a portfolio of our active platforms, open repositories, and custom AI tools built under high engineering standards."
      }
    ]
  },
  {
    "slug": "case-study/kpss-scale",
    "locale": "it",
    "type": "research",
    "status": "published",
    "indexable": true,
    "title": "Case Study: Scaling Educational Platforms to 15,000+ Active Users",
    "description": "How SoftBridge Solutions optimized database queries, connection pooling, and edge caching to support high-concurrency KPSS study portals.",
    "summary": "Proven scalability and concurrent database performance under heavy student traffic.",
    "publishedAt": "2026-02-10",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sources": [
      {
        "name": "Republic of Türkiye National AI Strategy Portal",
        "url": "https://yapayzekavizyonu.sanayi.gov.tr/",
        "accessedAt": "2026-07-18",
        "supports": "National AI framework and digital objectives"
      },
      {
        "name": "Çukurova Development Agency (CKA)",
        "url": "https://www.cka.org.tr/",
        "accessedAt": "2026-07-18",
        "supports": "Regional development progetti and industry data"
      }
    ],
    "sections": [
      {
        "title": "Project Overview",
        "body": "Our suite of KPSS preparation platforms (History, Geography, Civics) serves as a primary educational utility in Turkey. Supporting thousands of concurrent quiz submissions required an optimized data-layer architecture."
      },
      {
        "title": "Technical Challenges",
        "body": "With over 15,000 active students, real-time leaderboards and quiz logs created heavy database lock congestion. Standard relational query setups failed under concurrent API bursts."
      },
      {
        "title": "Architecture & Solutions",
        "body": "We decoupled read-heavy operations using Next.js Incremental Static Regeneration (ISR) and localized browser caching. Supabase connection pooling (via Supavisor) was optimized to handle traffic spikes, reducing database latency from 450ms to 42ms."
      },
      {
        "title": "Verifiable Results",
        "body": "The KPSS platforms successfully operate under peak exam-season concurrency with zero downtime. This proves our capacity to build high-scale, production-grade applications for commercial enterprise needs."
      }
    ]
  },
  {
    "slug": "case-study/career-forge-ats",
    "locale": "it",
    "type": "research",
    "status": "published",
    "indexable": true,
    "title": "Case Study: Explaining ATS Scoring with Next.js 16",
    "description": "Technical case study detailing the design, parsing algorithms, and client-side workspace sync of SoftBridge Career Forge.",
    "summary": "Improving resume optimization speed and parsing accuracy using secure local architectures.",
    "publishedAt": "2026-03-05",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Project Overview",
        "body": "SoftBridge Career Forge is a bilingual resume optimization and ATS scoring SaaS. The objective was to build a system that analyzes resume layout, calculates scoring, and enables direct editing with instant PDF preview."
      },
      {
        "title": "Technical Challenges",
        "body": "Parsing multi-format PDFs and Word documents in-browser without server overhead required efficient tokenization. Synchronizing state securely with Supabase database RLS policies was critical to maintain user privacy."
      },
      {
        "title": "Architecture & Solutions",
        "body": "We built the frontend using Next.js 16 App Router and Tailwind CSS 4. Resume parsing utilizes local client-side libraries connected to Zustand for state management, syncing to Supabase via Row Level Security (RLS) policies."
      },
      {
        "title": "Verifiable Results",
        "body": "Achieved a 92% accuracy rate in detecting ATS layout blockages and lowered page load times below 1.2 seconds, establishing a premium SaaS baseline."
      }
    ]
  },
  {
    "slug": "case-study/velora-agentic-rag",
    "locale": "it",
    "type": "research",
    "status": "published",
    "indexable": true,
    "title": "Case Study: Bounded Local Multi-Agent Workflows",
    "description": "Technical case study of Velora AI, illustrating supervisor routing, local vector indices, and model context protocol integrations.",
    "summary": "Securing document analysis and agent workflows with zero external API dependencies.",
    "publishedAt": "2026-04-12",
    "updatedAt": "2026-07-18",
    "reviewedBy": "Yunus Emre Gürlek",
    "sections": [
      {
        "title": "Project Overview",
        "body": "Velora AI is a hierarchical multi-agent supervisor system designed to automate complex document analysis locally."
      },
      {
        "title": "Technical Challenges",
        "body": "Multi-agent workflows suffer from token bloat and context drift. Guaranteeing that local models (e.g., Llama 3 via Ollama) return structured JSON tool calls was a major bottleneck."
      },
      {
        "title": "Architecture & Solutions",
        "body": "We implemented a LangGraph supervisor routing pattern. We constrained model outputs using system-level schema enforcers, ensuring 100% valid JSON tool execution."
      },
      {
        "title": "Verifiable Results",
        "body": "Eliminated external API costs entirely for document processing tasks, while ensuring complete data privacy by keeping sensitive files within local network boundaries."
      }
    ]
  }
];
