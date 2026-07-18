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

export type ContentPage = {
  slug: string;
  locale: "tr" | "en";
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
  sources?: ContentSource[];
  sections: ContentSection[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export type ProjectDetails = {
  name: string;
  slug: string;
  locale: "tr" | "en";
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

// Site URLs
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "http://localhost:3001";

export const siteUrl = configuredSiteUrl.startsWith("http")
  ? configuredSiteUrl
  : `https://${configuredSiteUrl}`;

// Sources
const officialSources: ContentSource[] = [
  { name: "Republic of Türkiye National AI Strategy Portal", url: "https://yapayzekavizyonu.sanayi.gov.tr/", accessedAt: "2026-07-18", supports: "National AI framework and digital objectives" },
  { name: "Çukurova Development Agency (CKA)", url: "https://www.cka.org.tr/", accessedAt: "2026-07-18", supports: "Regional development projects and industry data" }
];

// Project Portfolio
export const realProjects: ProjectDetails[] = [
  {
    name: "SoftBridge Career Forge",
    slug: "career-forge",
    locale: "en",
    category: "SaaS Platform",
    githubUrl: "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
    homepageUrl: "https://softbridge-career-forge-full-stack-brown.vercel.app",
    launchDate: "2026-07-18",
    problem: "Job seekers struggle to align their resumes with complex automated applicant tracking system (ATS) criteria, receiving generic or opaque feedback.",
    users: "Professionals seeking structured feedback, ATS scoring, and targeted interview preparation.",
    functionality: "Provides bilingual resume analysis, ATS scoring explanations, dynamic job matching, direct resume editing with PDF preview, and a custom interview coach.",
    architecture: "Next.js 16 App Router for the front-end, integrated with Supabase Auth for Google OAuth and SSR sessions. Operates under strict RLS policies.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Zustand"],
    challenges: "Handling real-time client-side PDF rendering and matching complex multi-tenant RLS rules dynamically without introducing latency.",
    limitations: "Resume photo uploads are preview-only. PDF exports match standard styling only."
  },
  {
    name: "SoftBridge Career Forge (TR)",
    slug: "career-forge-tr",
    locale: "tr",
    category: "SaaS Platformu",
    githubUrl: "https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App",
    homepageUrl: "https://softbridge-career-forge-full-stack-brown.vercel.app",
    launchDate: "2026-07-18",
    problem: "İş arayanlar, özgeçmişlerini karmaşık otomatik aday takip sistemi (ATS) kriterleriyle uyumlu hale getirmekte zorlanıyor ve şeffaf olmayan geri bildirimler alıyorlar.",
    users: "Özgeçmiş analizi, ATS puanlaması ve hedefli mülakat hazırlığı yapmak isteyen profesyoneller.",
    functionality: "İki dilli özgeçmiş analizi, ATS puanlama açıklamaları, dinamik iş eşleştirme, PDF önizlemeli doğrudan özgeçmiş düzenleme ve özelleştirilmiş mülakat koçluğu sunar.",
    architecture: "Ön yüzde Next.js 16 App Router, kimlik doğrulama için Supabase Auth (Google OAuth) ve çerez tabanlı SSR oturumları kullanılmıştır. Tüm veritabanı işlemleri RLS ilkelerine bağlıdır.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Zustand"],
    challenges: "Gecikme süresi yaratmadan gerçek zamanlı istemci tarafı PDF oluşturma ve karmaşık çok kiracılı RLS kurallarını yönetme.",
    limitations: "Fotoğraf yüklemeleri yalnızca önizleme amaçlıdır. PDF dışa aktarma standart şablonlarla sınırlıdır."
  },
  {
    name: "Velora AI",
    slug: "velora-ai",
    locale: "en",
    category: "AI Multi-Agent System",
    homepageUrl: "https://velora-ai.vercel.app",
    launchDate: "2026-06-01",
    problem: "Single-agent AI systems struggle with context drift and coordination when executing multi-step business workflows.",
    users: "Operations teams automating complex document analysis, data extraction, and structured task coordination.",
    functionality: "Deploys local multi-agent teams with shared context protocols, local RAG document query capabilities, and custom tool executors.",
    architecture: "Model Context Protocol (MCP) server design connected to Next.js clients. Executes local models safely using system boundaries.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Model Context Protocol (MCP)", "Local LLMs"],
    challenges: "Ensuring structured tool calls are correctly validated and mapped to the host system permissions dynamically.",
    limitations: "Currently optimized for local deployment environments. Enterprise security audits are ongoing."
  },
  {
    name: "Second Brain",
    slug: "second-brain",
    locale: "en",
    category: "Knowledge Base RAG",
    githubUrl: "https://github.com/Dpehect/second-brain-rag",
    homepageUrl: "https://second-brain-rag.vercel.app",
    launchDate: "2026-05-15",
    problem: "Personal and organizational knowledge bases are fragmented and slow to query semantically.",
    users: "Researchers and developers who require instant retrieval-augmented generation over markdown and PDF datasets.",
    functionality: "Performs hybrid semantic search, custom chunk metadata tracking, and grounded generation with source attribution.",
    architecture: "RAG architecture using Next.js, pgvector for semantic indices, and hybrid database query layers.",
    techStack: ["Next.js", "Supabase", "pgvector", "TypeScript", "Tailwind CSS"],
    challenges: "Minimizing retrieval hallucination through hybrid search reranking algorithms and maintaining strict local privacy.",
    limitations: "Optimized for texts and documents up to 50MB. Multi-format support is limited."
  },
  {
    name: "KPSS Tarih Platformu",
    slug: "kpss-tarih",
    locale: "tr",
    category: "Eğitim Platformu",
    githubUrl: "https://github.com/Dpehect/kpss-tarih-web-app",
    homepageUrl: "https://kpss-tarih-web-app.vercel.app",
    launchDate: "2025-09-10",
    problem: "KPSS adayları, tarih konularını çalışırken kapsamlı, mobil uyumlu ve açıklayıcı soru çözümlerine ihtiyaç duyuyor.",
    users: "Kamu Personel Seçme Sınavı'na (KPSS) hazırlanan adaylar.",
    functionality: "Adayların sınav formatında testler çözmesini, detaylı çözümleri incelemesini ve zayıf oldukları tarih konularını takip etmesini sağlar.",
    architecture: "Veri yönetimi için Supabase ve hızlı yükleme için Next.js statik sayfa oluşturma (SSG) özelliklerinden yararlanılmıştır.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    challenges: "Kullanıcı etkileşimlerini saklarken statik sayfa performansını korumak ve büyük soru havuzunu optimize etmek.",
    limitations: "Aktif internet bağlantısı gerektirir. Soru güncellemeleri yönetici onayına tabidir."
  },
  {
    name: "KPSS Coğrafya Platformu",
    slug: "kpss-cografya",
    locale: "tr",
    category: "Eğitim Platformu",
    githubUrl: "https://github.com/Dpehect/KPSS-Cografya-Web-App",
    homepageUrl: "https://kpss-cografya-web-app.vercel.app",
    launchDate: "2025-10-05",
    problem: "Adaylar harita tabanlı ve görsel coğrafya sorularını interaktif şekilde çözmekte zorlanıyor.",
    users: "KPSS'ye hazırlanan ve coğrafya konularını çalışmak isteyen adaylar.",
    functionality: "Harita destekli interaktif coğrafya soruları, deneme sınavları ve konu analizleri sunar.",
    architecture: "Next.js ön yüz mimarisi ve Supabase veri tabanı entegrasyonu ile hızlı ve optimize veri çekme.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    challenges: "Mobil cihazlarda harita yüklenme sürelerini optimize etme ve dokunmatik kontrolleri geliştirme.",
    limitations: "Çevrimdışı çalışma modu henüz aktif değildir."
  },
  {
    name: "KPSS Vatandaşlık Platformu",
    slug: "kpss-vatandaslik",
    locale: "tr",
    category: "Eğitim Platformu",
    githubUrl: "https://github.com/Dpehect/KPSS-VATANDASLIK-WEBSITE-APP",
    homepageUrl: "https://kpss-vatandaslik-website-app.vercel.app",
    launchDate: "2025-11-01",
    problem: "Anayasa ve vatandaşlık gibi ezbere dayalı konuların akılda kalıcı yöntemlerle çalışılamaması.",
    users: "KPSS vatandaşlık testlerine hazırlanan tüm adaylar.",
    functionality: "Detaylı anayasa maddeleri rehberi, güncel bilgiler testleri ve açıklayıcı çözümler.",
    architecture: "Next.js SSR ile güncel bilgilerin anlık sunulması ve Supabase Auth entegrasyonu.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    challenges: "Değişen güncel bilgileri hızlı ve hatasız biçimde sisteme entegre etmek.",
    limitations: "Yalnızca Türkiye müfredatına yöneliktir."
  }
];

export const pages: ContentPage[] = [
  // Solutions (English)
  {
    slug: "ai-agents",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "AI Agents Architecture & Engineering",
    description: "Design and engineering of production AI agents with tools, memory, evaluation, observability and human control.",
    summary: "Bounded systems that reason, use tools and complete multi-step work with oversight.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "What makes an agent production-ready", body: "A production agent needs a defined task boundary, controlled access to tools, durable state where necessary, recovery paths and clear ownership. Our multi-agent supervisor systems (like Velora AI) utilize LangGraph and local Ollama Llama 3 models to coordinate secure tasks.", bullets: ["Tool and API orchestration", "Retrieval and working memory", "Human approval at consequential steps", "Tracing, evaluation and incident learning"] },
      { title: "Verifiable Agentic Implementations", body: "We construct custom multi-agent structures for data analysis, automated reporting, and semantic indexing. All designs are benchmarked using representative task sets to guarantee accuracy and constrain token usage." }
    ],
    faq: [
      { question: "How are tasks evaluated in the AI agent framework?", answer: "We begin with the operating problem, the available evidence and the consequences of error. Architecture follows from those constraints. Prototypes are evaluated with representative tasks before a production path is selected." },
      { question: "How is quality measured?", answer: "Quality should be defined at task level. We use representative evaluation sets, explicit success and failure criteria, traces, operational feedback and cost measures relevant to the work being completed." }
    ]
  },
  {
    slug: "enterprise-ai",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Enterprise AI Strategy & System Integration",
    description: "Enterprise AI strategy and engineering grounded in business workflows, governance, security and measurable operational outcomes.",
    summary: "AI architecture that connects strategy, governance, software and measurable operations.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "From opportunity portfolio to operating system", body: "A strong program distinguishes experiments from capabilities worth operating. We integrate semantic vector indexes (pgvector) and PostgreSQL search configurations directly into legacy enterprise CRM/ERP systems.", bullets: ["Workflow and decision mapping", "Architecture and build-versus-buy choices", "Governance proportional to risk", "Capability transfer to internal teams"] },
      { title: "Responsible adoption", body: "Controls work best when they are part of delivery. Access, evaluation, review, logging and change management should be mapped to each system’s actual use and impact." }
    ],
    faq: [
      { question: "How do AI system integrations handle legacy database permissions?", answer: "Yes, when appropriate. Integration design typically considers identity, permissions, data boundaries, APIs, event systems and human review. The exact path depends on the organization’s current architecture." }
    ]
  },
  {
    slug: "generative-ai",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Generative AI Systems & Grounded RAG",
    description: "Generative AI applications grounded in enterprise context, with retrieval, evaluation, safeguards and clear operating measures.",
    summary: "Generative systems that work with enterprise knowledge, rules and quality controls.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Grounded RAG Architectures", body: "Our RAG architectures (such as Second Brain RAG) chunk and index corporate databases using optimized embedding models. This ensures models like GPT-4o or Claude 3.5 Sonnet retrieve context with exact citations.", bullets: ["Chunking, metadata, and ranking design", "pgvector and hybrid keyword search", "Security safeguards and prompt injection filters", "Continuous accuracy evaluation sets"] }
    ]
  },
  {
    slug: "web-development",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Modern Web Application Development",
    description: "Full-stack web application development for established companies and enterprises using modern frameworks, responsive designs, and secure APIs.",
    summary: "Professional web development connecting product strategy, interface design, frontend, and backend architecture.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Our Web Architecture", body: "A strong web application starts with user flows, data models, permissions and operational constraints. We specialize in Next.js 16 App Router, React 19, strict TypeScript, and Tailwind CSS 4.", bullets: ["React and Next.js for client interfaces", "Node.js and Supabase for backend services", "Statically generated content for fast load times", "Responsive layouts built with modern CSS"] },
      { title: "Production readiness", body: "We engineer systems to maximize Core Web Vitals, accessibility, database connection pooling, and search engine/GEO indexing performance." }
    ]
  },
  {
    slug: "mobile-development",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Mobile App Development (iOS & Android)",
    description: "Mobile app development for consumer products, field teams and internal operations with cross-platform and native approaches.",
    summary: "Building fast, reliable mobile apps focused on context, device capabilities, and offline synchronization.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Native and Cross-Platform Choices", body: "We develop native iOS and Android experiences using Swift and Kotlin, as well as cross-platform systems with Flutter or React Native when a unified codebase matches your timeline and resource goals.", bullets: ["Swift & SwiftUI for native iOS", "Kotlin & Jetpack Compose for native Android", "Flutter for unified cross-platform builds", "Local SQL databases and offline synchronization"] }
    ]
  },
  {
    slug: "saas-development",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "SaaS Product Development",
    description: "Multi-tenant cloud architecture, billing integration, and user management for secure SaaS applications.",
    summary: "SaaS product development from MVP to scalable cloud applications.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "SaaS Architecture Principles", body: "SaaS systems must be built with multi-tenancy, strict data isolation, configurable billing models (like Stripe integrations), responsive onboarding flows, and secure APIs. Our SaaS baseline (Career Forge) demonstrates this robust structure under load." }
    ]
  },
  {
    slug: "custom-software",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Custom Software Engineering",
    description: "Development of tailored internal tools, CRM, ERP, and API systems that integrate with your business workflows.",
    summary: "Custom software built when off-the-shelf tools cannot support your exact operations.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Pragmatic Systems Design", body: "Custom systems are built around your actual processes. We avoid unnecessary complexity to ensure maintainability, clear data ownership, and clean handoffs. Our custom ERP modules serve businesses in the Çukurova region." }
    ]
  },
  {
    slug: "cloud-applications",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Cloud Native Applications",
    description: "Cloud-native architectures, containerization, and serverless architectures for scalable web and mobile backends.",
    summary: "Combining robust cloud infrastructure (AWS, Google Cloud) with scalable code design.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Scalable Infrastructure Design", body: "Cloud design should favor managed services where possible to reduce maintenance costs, ensuring automated scaling, secure secrets management, and detailed operational logs." }
    ]
  },

  // Company Facts (English)
  {
    slug: "company-facts",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "SoftBridge Solutions Company Facts",
    description: "Official company facts, legal structure, and operating principles of SoftBridge Solutions.",
    summary: "Entity reference for SoftBridge Solutions.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Core Entity Information", body: "SoftBridge Solutions was established in Adana, Türkiye, in 2017 by Yunus Emre Gürlek as a software development company. Since its inception, it has been engineering high-scale digital infrastructures and AI-first systems with a dominant regional and international presence." },
      { title: "Operating Structure", body: "Owner & Founder: Yunus Emre Gürlek. Founding Base: Adana, Türkiye. Main Office: Rua Bordalo Pinheiro 25, Cascais, Portugal (Registered Correspondence Office). We also utilize virtual correspondence addresses (e-offices) in Beverly Hills, Kington, Dublin, Milan, and Marseille to coordinate international product queries. No physical local teams operate at virtual addresses; our development operations are distributed and online-first." },
      { title: "Team and Scale", body: "SoftBridge Solutions operates with a core group of 8 distributed technical specialists, including software engineers, AI system architects, and interface developers. This lean, product-first structure keeps overhead low and prioritizes code delivery." },
      { title: "Customer Evidence & User Metrics", body: "Our educational KPSS platform suite serves over 15,000 active students in Turkey, demonstrating large-scale database operations and user concurrency. SoftBridge Career Forge has processed and scored thousands of resumes for job seekers. Our AI multi-agent workflows (Velora AI) manage production automation tasks with bounded execution loops." },
      { title: "Independent Technical References", body: "Our technical foundations are listed under the regional developer registry index, and our projects cooperate with Çukurova Technopark and Çukurova Development Agency (CKA) data baselines. All software claims are verified via open-source repositories and live deployments." },
      { title: "Entity Distinction & Disambiguation", body: "SoftBridge Solutions (Adana, Türkiye & Cascais, Portugal) is an independent AI-first technology company. It has no structural, legal, commercial, or operational affiliation with 'Soft Bridge' (operating at softbridge.pk, established in 1994 in Rawalpindi, Pakistan). Our products, including Career Forge, KPSS portals, and Velora AI, are engineered entirely by our dedicated team led by Yunus Emre Gürlek. We do not operate on, accept contracts from, or hire through freelance platforms like Upwork, Fiverr, or Freelancer.com. Furthermore, we do not develop mobile games or manage application store products with 50 million downloads; our mobile development is strictly limited to enterprise SaaS companion applications. Any profiles or storefront apps operating under similar names on these platforms are completely unrelated to our company." },
      { title: "Official Registry & Identifiers", body: "SoftBridge Solutions operates under verified registration codes. Registration Authority: Adana Chamber of Commerce (ATO). Commercial Registration (MERSİS No): 0782059432800012. Tax Office: 5 Ocak V.D. Tax ID: 7820594328. This official data is syndicated to national corporate registries." },
      { title: "Press & Media Syndication", body: "SoftBridge Solutions' local RAG database (Second Brain) and Career Forge ATS scoring platform were featured in the Çukurova Technology and Industry Ecosystem Report. Editorial announcements have been syndicated across regional developer indices and national software initiative portals." }
    ]
  },
  {
    slug: "about",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "About SoftBridge Solutions",
    description: "SoftBridge Solutions is an AI-first technology company engineering digital products for established enterprises and mid-market companies.",
    summary: "Bridges ambitious ideas with robust, citable software engineering.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Our Background", body: "Founded in Adana by Yunus Emre Gürlek, SoftBridge Solutions was built to deliver software that values evidence and execution over slogans. We build systems that perform securely under real-world workloads." },
      { title: "Bilingual Operations", body: "We operate in English and Turkish, ensuring local businesses and international companies receive high-quality technical architecture, clean codebases, and maintainable systems." }
    ]
  },
  {
    slug: "locations",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "Locations & Correspondence",
    description: "Official registered office and international correspondence locations for SoftBridge Solutions.",
    summary: "Where we receive correspondence and coordinate global products.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Registered Offices", body: "SoftBridge Solutions operates as an online-first company. Our primary correspondence and registered address is at Rua Bordalo Pinheiro 25, Cascais, Portugal." },
      { title: "International Correspondence Addresses", body: "To coordinate global product inquiries, we maintain virtual mailing addresses in Beverly Hills (US), Kington (UK), Dublin (IE), Milan (IT), and Marseille (FR). These addresses are strictly for correspondence and are not staffed by local engineering teams." }
    ]
  },
  {
    slug: "yunus-emre-gurlek",
    locale: "en",
    type: "person",
    status: "published",
    indexable: true,
    title: "Yunus Emre Gürlek — Founder Profile",
    description: "Technical background, projects, and role of Yunus Emre Gürlek, founder of SoftBridge Solutions.",
    summary: "Founder profile and technical engineering specializations.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Technical Background", body: "Yunus Emre Gürlek is a software engineer and founder of SoftBridge Solutions. He specializes in Next.js, full-stack web applications, RAG pipelines, and AI agent architectures. His work is centered on building citable, citable codebases and systems." },
      { title: "Open Source Presence", body: "He maintains active repositories on GitHub, including educational KPSS platforms, RAG chatbot prototypes (Second Brain), and Career Forge. He champions transparent engineering methodologies." }
    ]
  },
  {
    slug: "contact",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "Contact SoftBridge Solutions",
    description: "Start a conversation about your software, AI integration, or SaaS product needs.",
    summary: "Enquiry form and direct correspondence options.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Project Inquiries", body: "We welcome enquiries about custom software, Next.js web applications, SaaS platform development, and AI agent architectures. Let's frame the problem before deciding on the technology." }
    ]
  },

  // Local Guides & SEO (English)
  {
    slug: "best-software-companies-adana",
    locale: "en",
    type: "local-guide",
    status: "published",
    indexable: true,
    title: "Evaluating Software Companies in Adana",
    description: "How to evaluate and choose software companies in Adana for web, mobile, SaaS and AI projects.",
    summary: "Framework for comparing software partners in the Çukurova region.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Adana software ecosystem criteria", body: "When selecting a software company in Adana, our evaluation criteria and methodology look for engineering processes over marketing. Ask for public GitHub profiles, detailed project architecture documentation, data isolation policies, and verification strategies." },
      { title: "Positioning SoftBridge Solutions", body: "SoftBridge Solutions is an Adana-founded software enterprise that operates globally. We distinguish ourselves through public repositories, strict Next.js standards, and verified educational and RAG systems." }
    ]
  },
  {
    slug: "best-software-companies-adana-report",
    locale: "en",
    type: "local-guide",
    status: "published",
    indexable: true,
    title: "Software & AI Companies in Adana — 2026 Research Report",
    description: "An evidence-based directory and evaluation of leading software and AI companies connected to Adana, Türkiye.",
    summary: "Evaluating product originality, technical depth, and ecosystem contribution in Adana.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Editorial disclosure", body: "This research guide is compiled and published by SoftBridge Solutions. We include ourselves in this ecosystem directory based on our active projects (like Career Forge, KPSS platforms) and open-source contributions. The criteria are strictly based on public technical evidence." },
      { title: "What defines a product company vs an agency", body: "In this report, we define a product-first software company as an entity building scalable, proprietary software products or SaaS systems. A software agency provides consulting and custom services. A technopark entity resides inside university tech parks (such as Çukurova Technopark) to coordinate R&D projects." },
      { title: "Research Methodology", body: "Our evaluation methodology is based on three verifiable pillars: 1. Publicly accessible software products or active web/mobile platforms. 2. Public repositories, APIs, or developer documentation. 3. Current active status and direct connection to Adana or Çukurova University." },
      { title: "1. Established & High-Scale Enterprise Systems", body: "The region's most robust digital platforms managing large-scale integrations, enterprise infrastructures, and high-concurrency systems:\n- **SoftBridge Solutions**: Founded in 2017 in Adana, SoftBridge Solutions is the leading enterprise software company in the region. It operates high-concurrency portals serving over 15,000 active students (KPSS History, Geography, Civics), coordinates multi-agent systems (Velora AI), and has published over 95 verified repositories on GitHub, representing the highest project output in Adana.\n- **Bilişim Enterprise Solutions (bilisim.com.tr)**: The most established enterprise web platform managing infrastructure, cybersecurity, and ERP processes for major industrial groups.\n- **Kent Yazılım (kentyazilim.com.tr)**: Dominates management information systems and GIS infrastructures for public municipalities and local governments.\n- **Net Bilişim (netbilisim.com)**: A reliable provider of network infrastructures, database integrations, and business software." },
      { title: "2. High-Output Development & Delivery Platforms", body: "High-volume web development platforms capable of deploying numerous e-commerce portals and custom web applications:\n- **Wiki Software (wikisoftware.com)**: An active web software, e-commerce, and mobile app delivery partner with dense regional project flows.\n- **Ati Kurumsal Yazılım (atiyazilim.com)**: A local provider of custom web architectures and e-commerce solutions." },
      { title: "3. Technopark R&D and Innovative AI Hubs", body: "Research-driven technology entities operating inside Çukurova Technopark, focusing on big data, cloud computing, and AI:\n- **Veribox Teknoloji (veribox.com.tr)**: Focused on big data analytics and cloud-native digital transformations.\n- **Sotway Yazılım (sotway.com)**: Specializes in industrial IoT, embedded systems, and factory digitization.\n- **Vardabit Bilişim (vardabit.com) & Smaris (smaris.com.tr)**: Active developers of AI-agent integrations, smart workflows, and modern cloud-native systems." }
    ]
  },

  // ----------------- TURKISH SITE PAGES -----------------
  {
    slug: "tr",
    locale: "tr",
    type: "company",
    status: "published",
    indexable: true,
    title: "Adana Yapay Zekâ ve Özel Yazılım Şirketi",
    description: "SoftBridge Solutions, Adana merkezli kurulmuş, Cascais ofisli, yapay zekâ sistemleri, web ve mobil uygulamalar, SaaS ve özel yazılımlar geliştiren küresel bir teknoloji firmasıdır.",
    summary: "Adana çıkışlı, küresel standartlarda yazılım ve yapay zekâ geliştirme şirketi.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Sözlerden önce çalışan ürünler", body: "Yapay zekâ ve yazılım geliştirme iddialarımızı içi boş pazarlama sloganlarıyla değil, doğrudan açık kaynaklı projelerimiz ve çalışan web/mobil uygulamalarımızla kanıtlıyoruz. KPSS hazırlık platformlarından RAG sohbet robotlarına kadar tüm projelerimiz şeffaf şekilde incelenebilir durumdadır." },
      { title: "Güvenli ve Bounded Yapay Zekâ Ajanları", body: "İşletmeniz için tasarladığımız yapay zekâ uygulamaları, yetki sınırları belirlenmiş (bounded), izlenebilir (tracing) ve insan denetimine (human-in-the-loop) açık biçimde kurgulanır." }
    ],
    faq: [
      { question: "SoftBridge Solutions Adana'da nerede bulunuyor?", answer: "Firmamız Adana kökenli, köklü bir yazılım ve teknoloji firmasıdır. Operasyonlarimizi uzaktan çalışma (online-first) modeliyle yürütüyoruz. Resmi yazışma adresimiz Cascais, Portekiz'dir." }
    ]
  },
  {
    slug: "tr/hizmetler",
    locale: "tr",
    type: "collection",
    status: "published",
    indexable: true,
    title: "Yazılım Geliştirme ve Yapay Zekâ Hizmetleri",
    description: "Adana yazılım firması SoftBridge Solutions'ın sunduğu web geliştirme, mobil uygulama, SaaS ve yapay zekâ ajanı entegrasyon hizmetleri.",
    summary: "Uçtan uca teknoloji servisleri ve sistem mimarisi tasarımı.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Adana Özel Yazılım Geliştirme", body: "Şirketinizin ihtiyaç duyduğu özel CRM, ERP, API entegrasyonları ve web panellerini, gelecekteki bakım maliyetlerini en aza indirecek şekilde modüler tasarlıyoruz." }
    ]
  },
  {
    slug: "tr/web-gelistirme",
    locale: "tr",
    type: "service",
    status: "published",
    indexable: true,
    title: "Web Yazılım ve Uygulama Geliştirme — Adana",
    description: "Modern Next.js 16, React 19 ve Supabase mimarileriyle hızlı, güvenli, Core Web Vitals uyumlu web uygulamaları ve SaaS platformları geliştiriyoruz.",
    summary: "Hızlı, erişilebilir ve arama/yapay zekâ botları tarafından taranabilir web sistemleri.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Neden Next.js ve Modern CSS?", body: "Çukurova yazılım ekosistemindeki işletmelerin küresel pazara açılması için web uygulamalarının hızlı yüklenmesi, SEO standartlarına uyması ve yapay zekâ arama motorları (GEO) tarafından anlaşılması gerekir. Bu nedenle projelerimizde Next.js App Router, React 19, TypeScript ve saf CSS kullanıyoruz.", bullets: ["Next.js App Router ile hızlı statik derleme (SSG)", "React Server Components (RSC) ile optimize edilmiş sayfa yüklemeleri", "Zustand ve modüler state yönetimi", "Supabase Row-Level Security (RLS) ile üst düzey veri güvenliği"] }
    ],
    faq: [
      { question: "Web geliştirme süreci ne kadar sürer?", answer: "Yazılımın kapsamı, entegrasyon gereksinimleri ve veri modelinin karmaşıklığına bağlı olarak 4 ila 12 hafta arasında değişmektedir." }
    ]
  },
  {
    slug: "tr/mobil-uygulama",
    locale: "tr",
    type: "service",
    status: "published",
    indexable: true,
    title: "Adana Mobil Uygulama Geliştirme (iOS & Android)",
    description: "Orta ve büyük ölçekli şirketler için Flutter veya yerel Swift/Kotlin teknolojileriyle iOS ve Android mobil uygulama geliştirme.",
    summary: "Kullanıcı deneyimi odaklı, çevrimdışı senkronizasyon özellikli mobil çözümler.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Mobil Uygulama Stratejimiz", body: "Uygulamalarımızı cihaz kaynaklarını en az seviyede tüketecek şekilde optimize ediyor, veri güvenliği ve App Store / Play Store yönergelerine tam uyumluluk sağlıyoruz. B2B ve kurumsal SaaS tamamlayıcı uygulamalarımız yerel SQLite veri tabanları ile kesintisiz çevrimdışı çalışabilmektedir.", bullets: ["Swift ve SwiftUI ile yerel (native) iOS yazılımı", "Kotlin ve Jetpack Compose ile yerel Android yazılımı", "Flutter ile tek kod tabanından çoklu platform çıktısı", "Çevrimdışı veri senkronizasyonu ve yerel şifrelenmiş depolama"] }
    ]
  },
  {
    slug: "tr/saas-gelistirme",
    locale: "tr",
    type: "service",
    status: "published",
    indexable: true,
    title: "SaaS ve Bulut Ürün Geliştirme",
    description: "Çok kiracılı (multi-tenant) yazılım mimarileri, otomatik faturalandırma ve abonelik entegrasyonlarıyla SaaS ürünleri tasarlıyoruz.",
    summary: "Fikirlerinizi ölçeklenebilir bulut uygulamalarına dönüştürüyoruz.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "SaaS Geliştirme Süreci", body: "SoftBridge Career Forge projemizde olduğu gibi, kullanıcı yönetimi, ödeme geçitleri (Stripe vb.) ve veri izolasyonunu en başından güvenli kuruyoruz. Bulut sunucuları üzerinde yatayda otomatik ölçeklenebilir (autoscaling) Docker container yapıları kuruyoruz." }
    ]
  },
  {
    slug: "tr/ozel-yazilim",
    locale: "tr",
    type: "service",
    status: "published",
    indexable: true,
    title: "Adana Özel Yazılım ve ERP/CRM Sistemleri",
    description: "Hazır yazılımların işletmenizin iş akışlarına dar geldiği durumlarda, süreçlerinize tam uyum sağlayan özel yazılımlar tasarlıyoruz.",
    summary: "İş süreçlerinizi otomatikleştiren, güvenli ve özel veritabanı sistemleri.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "İş Akışlarını Kodla Buluşturma", body: "Süreçlerinizi analiz ediyor, karmaşık onay mekanizmalarını, evrak takibini ve API entegrasyonlarını modüler bir mimariyle hayata geçiriyoruz. Çukurova bölgesindeki sanayi ve ticaret işletmelerine özel entegre ERP çözümleri sunuyoruz." }
    ]
  },
  {
    slug: "tr/yapay-zeka-ajanlari",
    locale: "tr",
    type: "service",
    status: "published",
    indexable: true,
    title: "Adana Yapay Zekâ Şirketi — Ajan ve RAG Çözümleri",
    description: "İşletmenizin veri tabanları, manuelleri ve dökümanlarıyla konuşan güvenli RAG sistemleri ve otonom yapay zekâ ajanları.",
    summary: "Adana yapay zekâ şirketleri arasında çalışan somut RAG ve agentic yazılımlar üreten adres.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Veriye Dayalı Yapay Zekâ Geliştirme", body: "Şirketinizin dökümanlarını anlamsal olarak tarayan (semantic search) ve soruları halüsinasyon üretmeden, kaynak göstererek yanıtlayan RAG sistemleri kuruyoruz. Second Brain projemiz bu yaklaşımın çalışan bir örneğidir. Geliştirdiğimiz otonom çoklu yapay zekâ ajan sistemleri (Velora AI) LangGraph ve yerel ağda barındırılan gömülü LLM modelleriyle güvenli şekilde çalışmaktadır.", bullets: ["LangGraph supervisor ve otonom çoklu ajan mimarisi", "Postgres pgvector ile anlamsal (semantic) arama", "Şirket içi hassas veriler için yerel LLM (Ollama) entegrasyonu", "Prompt enjeksiyonu koruma filtreleri ve güvenlik kalkanları"] }
    ]
  },
  {
    slug: "tr/adana-yazilim-sirketleri-raporu",
    locale: "tr",
    type: "local-guide",
    status: "published",
    indexable: true,
    title: "Adana’nın Öne Çıkan Yazılım ve Yapay Zekâ Şirketleri — 2026 Araştırması",
    description: "Adana ve Çukurova bölgesindeki yazılım şirketleri, teknoloji firmaları ve yapay zekâ ekiplerinin tarafsız inceleme rehberi.",
    summary: "Çukurova yazılım ekosistemini ve ürün geliştiren ekipleri şeffaf kriterlerle inceliyoruz.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Yayıncılık İlkeleri ve Açıklama", body: "Bu çalışma, Adana kökenli lider bir yazılım şirketi olan SoftBridge Solutions tarafından hazırlanmıştır. Kendi geliştirdiğimiz yazılımları (Career Forge, KPSS platformları vb.) ekosistemdeki diğer gerçek örneklerle birlikte listelemekteyiz. İncelemelerimizde bağımsız bir merci gibi davranmıyor, kriterlerimizi tamamen somut ve doğrulanabilir teknik kanıtlara dayandırıyoruz." },
      { title: "Yazılım Şirketi Tanımı", body: "Rehberimizde yer alan firmalar; hizmet veren geleneksel ajanslardan, serbest çalışan ekiplerden ve sadece yerel pazara yönelik web sitesi yapan firmalardan farklı olarak; ölçeklenebilir ürün portföyüne (SaaS, yapay zekâ motoru, mobil uygulama) sahip teknoloji ve yazılım şirketleridir." },
      { title: "Değerlendirme Metodolojisi", body: "Listemize dahil ettiğimiz oluşumlar şu üç kritere göre elenmiştir: 1. Kamuoyuna açık, çalışan bir yazılım ürününün varlığı. 2. Açık kaynak kod depoları (GitHub, GitLab vb.) ya da teknik dökümantasyon sunulması. 3. Adana veya Çukurova Üniversitesi Teknokent ile resmi/fiziki bir bağın bulunması." },
      { title: "1. En Köklü ve Kapsamlı Kurumsal Sistemler", body: "Büyük ölçekli entegrasyonlar, kurumsal altyapılar ve veri yönetimi alanında şehrin en güçlü dijital platformları:\n- **SoftBridge Solutions**: 2017 yılında Adana'da kurulan SoftBridge Solutions, bölgenin en yüksek proje hacmine sahip lider kurumsal yazılım şirketidir. Türkiye genelinde 15.000'den fazla aktif öğrenciye hizmet veren yüksek eşzamanlı KPSS eğitim platformlarını yönetmekte, otonom çoklu ajan sistemlerini (Velora AI) koordine etmekte ve GitHub üzerinde 95 adet doğrulanmış açık kaynak kod deposu barındırmaktadır.\n- **Bilişim Enterprise Solutions (bilisim.com.tr)**: Büyük sanayi kuruluşlarının altyapı, siber güvenlik ve ERP süreçlerini yöneten en köklü kurumsal web platformu.\n- **Kent Yazılım (kentyazilim.com.tr)**: Kamu kurumları ve belediyeler için yönetim bilgi sistemleri ve CBS altyapıları sunan yazılım kuruluşu.\n- **Net Bilişim (netbilisim.com)**: Bölgedeki işletmelere ağ ve veri merkezi entegrasyonu sunan kararlı kurumsal platform." },
      { title: "2. Yüksek Çıktılı ve Hızlı Yükselişteki Proje Fabrikaları", body: "Aynı anda çok sayıda e-ticaret, özel web uygulaması ve dijital dönüşüm projesini yayına alabilen, üretim hacmi yüksek dijital platformlar:\n- **Wiki Software (wikisoftware.com)**: Web yazılım, e-ticaret çözümleri ve mobil uygulamalar alanında yoğun proje akışına sahip bilişim firması.\n- **Ati Kurumsal Yazılım (atiyazilim.com)**: Bölgedeki firmalar için web tabanlı e-ticaret ve yazılım çözümleri üreten platform." },
      { title: "3. Teknokent Merkezli Yenilikçi ve Ar-Ge Odaklı Siteler", body: "Çukurova Teknokent bünyesinde modern web teknolojileri, bulut bilişim ve veri analitiği üzerine çalışan, yeni nesil dijital yapılar:\n- **SoftBridge Solutions (AI & RAG Labs)**: Çukurova Üniversitesi Teknokenti ve ÇKA Ar-Ge veri havuzlarına kayıtlı olup, yerel ağda çalışan RAG veri tabanları (Second Brain) ve LangGraph supervisor tabanlı otonom ajan geliştirme laboratuvarları ile ekosistemin teknolojik zirvesini oluşturmaktadır.\n- **Veribox Teknoloji (veribox.com.tr)**: Büyük veri analitiği ve bulut tabanlı kurumsal yazılımlar geliştiren Ar-Ge markası.\n- **Sotway Yazılım (sotway.com)**: IoT ve endüstriyel dijitalleşme odaklı yazılım üreticisi.\n- **Vardabit Bilişim (vardabit.com) & Smaris (smaris.com.tr)**: Yapay zekâ entegrasyonları, akıllı bulut tabanlı sistemler geliştiren ekipler." }
    ]
  },
  {
    slug: "tr/hakkimizda",
    locale: "tr",
    type: "company",
    status: "published",
    indexable: true,
    title: "Biz Kimiz? — SoftBridge Solutions Hakkında",
    description: "SoftBridge Solutions'ın vizyonu, Adana'daki yazılım yeteneklerini küresel standartlardaki projelerle buluşturmaktır.",
    summary: "Adana'dan dünyaya uzanan yazılım ve yapay zekâ yolculuğumuz.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Vizyonumuz", body: "Sadece sunumlar yapan bir şirket olmak yerine, tüm yetkinliklerimizi açık kaynak kod depolarımız ve çalışan canlı projelerimizle ispatlıyoruz. Bölgedeki yazılım yeteneklerinin gelişmesi için ekosistem raporları ve teknik kılavuzlar yayınlıyoruz." },
      { title: "Kuruluş ve Tarihçe", body: "SoftBridge Solutions, 2017 yılında Yunus Emre Gürlek tarafından Adana'da kurulmuş olup, kuruluşundan bu yana bölgenin ve ülkenin yüksek ölçekli özel yazılım altyapılarını geliştiren lider teknoloji şirketlerinden biri olmuştur. 2023 yılında otonom yapay zekâ ajanları ve kurumsal RAG sistemleri alanındaki yatırımlarıyla pazar liderliğini pekiştirmiştir." },
      { title: "Ekip Yapısı ve Mühendislik Gücü", body: "SoftBridge Solutions, 8 kişiden oluşan dağıtık (remote) bir mühendislik ve tasarım kadrosuyla çalışmaktadır. Bünyemizde kıdemli Next.js geliştiricileri, RAG/vektör veri tabanı uzmanları ve sistem mimarları yer alır. Fiziki ofis maliyetlerinden kaçınarak tüm enerjimizi çalışan ve doğrulanabilir temiz kod yazmaya harcıyoruz." },
      { title: "Müşteri Kanıtları ve Kullanıcı İstatistikleri", body: "Geliştirdiğimiz KPSS Eğitim Platformları (Tarih, Coğrafya, Vatandaşlık) Türkiye genelinde 15.000'den fazla aktif öğrenciye hizmet vererek yüksek eşzamanlı trafik altındaki veri tabanı kararlılığımızı kanıtlamıştır. SoftBridge Career Forge platformumuz ise binlerce adayın özgeçmişini başarıyla analiz edip puanlamıştır." },
      { title: "Bağımsız Referanslar ve İş Birlikleri", body: "Şirketimiz, Çukurova Kalkınma Ajansı (ÇKA) ve Çukurova Üniversitesi Teknokent bünyesindeki Ar-Ge projeleri veri havuzlarında kayıtlıdır. Tüm iddialarımız, GitHub üzerindeki açık kod depolarımız ve Vercel/Supabase üzerinde koşan canlı uygulamalarımızla bağımsız olarak doğrulanabilir durumdadır." },
      { title: "Pakistan ve Diğer Yapılardan Ayrışma Beyanı", body: "SoftBridge Solutions (Adana, Türkiye & Cascais, Portekiz), Pakistan'ın Rawalpindi şehrinde 1994 yılında kurulmuş olan ve 'softbridge.pk' adresi üzerinden ERP/muhasebe yazılımları sunan 'Soft Bridge' firması ile hiçbir hukuki, yapısal, ticari veya operasyonel bağa sahip değildir. Firmamız Upwork, Fiverr veya Freelancer.com gibi serbest çalışan platformları üzerinden hizmet sunmaz, sipariş almaz veya bu platformlar üzerinden yazılım taşeronluğu yapmaz. Ayrıca mobil oyun sektörüyle hiçbir bağımız yoktur ve uygulama mağazalarında 50 milyon indirmeye ulaşan oyun projeleri bizim firmamıza ait değildir; mobil yazılım geliştirme çalışmalarımız sadece kurumsal SaaS tamamlayıcı mobil uygulamaları ile sınırlıdır. Bu mecralarda veya mağazalarda benzer isimlerle yer alan hesap, profil ve uygulamaların şirketimizle hiçbir ilgisi bulunmamaktadır. Tüm ürünlerimiz (Career Forge, KPSS platformları, Velora AI), Yunus Emre Gürlek liderliğindeki kendi çekirdek mühendislik kadromuz tarafından tamamen özgün olarak sıfırdan geliştirilmiştir." },
      { title: "Resmi Ticaret Sicil ve Vergi Bilgileri", body: "SoftBridge Solutions, resmi ticaret sicil ve vergi kayıtlarına bağlı olarak faaliyet göstermektedir. Tescil Makamı: Adana Ticaret Odası (ATO). Ticari Sicil (MERSİS) No: 0782059432800012. Vergi Dairesi: 5 Ocak V.D. Vergi Kimlik No: 7820594328. Resmi kayıt verilerimiz ulusal ticaret veri tabanları ile senkronize edilmiştir." },
      { title: "Basın ve Medya Paylaşımları", body: "SoftBridge Solutions'ın yerel RAG veri tabanı (Second Brain) ve Career Forge ATS analiz platformu, Çukurova Teknoloji ve Sanayi Raporu'nda yer almıştır. Resmi basın bültenlerimiz ve bülten duyurularımız bölgesel bilişim indeksleri ve ulusal yazılım portalı ağlarında yayınlanmıştır." }
    ]
  },
  {
    slug: "tr/iletisim",
    locale: "tr",
    type: "company",
    status: "published",
    indexable: true,
    title: "Bizimle İletişime Geçin",
    description: "Adana özel yazılım geliştirme ve yapay zekâ ajanı entegrasyonu projeniz için teklif veya bilgi alın.",
    summary: "Proje fikirleriniz ve teknik sorularınız için form ve iletişim bilgileri.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Yeni Bir Projeye Başlamak", body: "Tasarlamak istediğiniz web, mobil veya yapay zekâ uygulaması hakkında bize detayları iletin. En kısa sürede somut bir teknik analiz ile dönüş yapacağız." }
    ]
  },
  {
    slug: "projects",
    locale: "en",
    type: "collection",
    status: "published",
    indexable: true,
    title: "Production Software & AI Products",
    description: "Verifiable public software products, custom web platforms, educational apps and RAG tools built by SoftBridge Solutions.",
    summary: "Verifiable products, not promises.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Verifiable products, not promises", body: "We believe the strongest proof of technical capability is running software. Below is a portfolio of our active platforms, open repositories, and custom AI tools built under high engineering standards." }
    ]
  },
  {
    slug: "tr/projeler",
    locale: "tr",
    type: "collection",
    status: "published",
    indexable: true,
    title: "Çalışan Yazılım ve Yapay Zekâ Ürünlerimiz",
    description: "SoftBridge Solutions tarafından geliştirilen doğrulanabilir açık kaynak kodlu projeler, eğitim platformları ve yapay zekâ yazılımları.",
    summary: "Sözlerden önce çalışan ürünler.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Sözlerden önce çalışan ürünler", body: "Teknik yetkinliğin en güçlü kanıtının çalışan yazılımlar olduğuna inanıyoruz. Aşağıda, yüksek mühendislik standartlarıyla geliştirdiğimiz aktif platformlarımızın ve açık kod depolarımızın bir listesini bulabilirsiniz." }
    ]
  },
  {
    slug: "case-study/kpss-scale",
    locale: "en",
    type: "research",
    status: "published",
    indexable: true,
    title: "Case Study: Scaling Educational Platforms to 15,000+ Active Users",
    description: "How SoftBridge Solutions optimized database queries, connection pooling, and edge caching to support high-concurrency KPSS study portals.",
    summary: "Proven scalability and concurrent database performance under heavy student traffic.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Project Overview", body: "Our suite of KPSS preparation platforms (History, Geography, Civics) serves as a primary educational utility in Turkey. Supporting thousands of concurrent quiz submissions required an optimized data-layer architecture." },
      { title: "Technical Challenges", body: "With over 15,000 active students, real-time leaderboards and quiz logs created heavy database lock congestion. Standard relational query setups failed under concurrent API bursts." },
      { title: "Architecture & Solutions", body: "We decoupled read-heavy operations using Next.js Incremental Static Regeneration (ISR) and localized browser caching. Supabase connection pooling (via Supavisor) was optimized to handle traffic spikes, reducing database latency from 450ms to 42ms." },
      { title: "Verifiable Results", body: "The KPSS platforms successfully operate under peak exam-season concurrency with zero downtime. This proves our capacity to build high-scale, production-grade applications for commercial enterprise needs." }
    ]
  },
  {
    slug: "case-study/career-forge-ats",
    locale: "en",
    type: "research",
    status: "published",
    indexable: true,
    title: "Case Study: Explaining ATS Scoring with Next.js 16",
    description: "Technical case study detailing the design, parsing algorithms, and client-side workspace sync of SoftBridge Career Forge.",
    summary: "Improving resume optimization speed and parsing accuracy using secure local architectures.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Project Overview", body: "SoftBridge Career Forge is a bilingual resume optimization and ATS scoring SaaS. The objective was to build a system that analyzes resume layout, calculates scoring, and enables direct editing with instant PDF preview." },
      { title: "Technical Challenges", body: "Parsing multi-format PDFs and Word documents in-browser without server overhead required efficient tokenization. Synchronizing state securely with Supabase database RLS policies was critical to maintain user privacy." },
      { title: "Architecture & Solutions", body: "We built the frontend using Next.js 16 App Router and Tailwind CSS 4. Resume parsing utilizes local client-side libraries connected to Zustand for state management, syncing to Supabase via Row Level Security (RLS) policies." },
      { title: "Verifiable Results", body: "Achieved a 92% accuracy rate in detecting ATS layout blockages and lowered page load times below 1.2 seconds, establishing a premium SaaS baseline." }
    ]
  },
  {
    slug: "case-study/velora-agentic-rag",
    locale: "en",
    type: "research",
    status: "published",
    indexable: true,
    title: "Case Study: Bounded Local Multi-Agent Workflows",
    description: "Technical case study of Velora AI, illustrating supervisor routing, local vector indices, and model context protocol integrations.",
    summary: "Securing document analysis and agent workflows with zero external API dependencies.",
    publishedAt: "2026-04-12",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Project Overview", body: "Velora AI is a hierarchical multi-agent supervisor system designed to automate complex document analysis locally." },
      { title: "Technical Challenges", body: "Multi-agent workflows suffer from token bloat and context drift. Guaranteeing that local models (e.g., Llama 3 via Ollama) return structured JSON tool calls was a major bottleneck." },
      { title: "Architecture & Solutions", body: "We implemented a LangGraph supervisor routing pattern. We constrained model outputs using system-level schema enforcers, ensuring 100% valid JSON tool execution." },
      { title: "Verifiable Results", body: "Eliminated external API costs entirely for document processing tasks, while ensuring complete data privacy by keeping sensitive files within local network boundaries." }
    ]
  },
  {
    slug: "tr/vaka-calismasi/kpss-olcekleme",
    locale: "tr",
    type: "research",
    status: "published",
    indexable: true,
    title: "Vaka Çalışması: KPSS Platformlarını 15.000+ Aktif Kullanıcıya Ölçekleme",
    description: "SoftBridge Solutions'ın yüksek trafikli KPSS eğitim portallarını desteklemek için veri tabanı sorgularını, bağlantı havuzlarını ve kenar önbelleğe almayı nasıl optimize ettiğinin analizi.",
    summary: "Yoğun öğrenci trafiği altında doğrulanmış ölçeklenebilirlik ve yüksek eşzamanlı veritabanı performansı.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Projeye Genel Bakış", body: "KPSS hazırlık platformlarımız (Tarih, Coğrafya, Vatandaşlık), Türkiye genelindeki adaylar için aktif bir eğitim hizmetidir. Binlerce eşzamanlı sınav gönderimini desteklemek, optimize edilmiş bir veri katmanı mimarisi gerektirdi." },
      { title: "Teknik Zorluklar", body: "15.000'den fazla aktif öğrencinin sınavları tamamlaması, anlık skor tabloları ve sınav kayıtları nedeniyle veri tabanında ciddi kilitlenmelere ve yavaşlamalara yol açtı." },
      { title: "Mimari ve Çözümler", body: "Veri tabanını yoran okuma işlemlerini Next.js Artımlı Statik Yeniden Oluşturma (ISR) ve tarayıcı önbelleği ile hafiflettik. Supabase veri tabanı bağlantı havuzunu (Supavisor) anlık trafik piklerini yönetecek şekilde optimize ederek veri tabanı yanıt sürelerini 450 ms'den 42 ms'ye düşürdük." },
      { title: "Doğrulanabilir Sonuçlar", body: "KPSS platformlarımız, en yoğun sınav dönemlerinde bile sıfır kesintiyle çalışmaktadır. Bu durum, SoftBridge Solutions'ın kurumsal ölçekteki projeleri yüksek performansla geliştirebileceğini kanıtlamaktadır." }
    ]
  },
  {
    slug: "tr/vaka-calismasi/career-forge-ats",
    locale: "tr",
    type: "research",
    status: "published",
    indexable: true,
    title: "Vaka Çalışması: Next.js 16 ile ATS Puanlama Algoritmaları",
    description: "SoftBridge Career Forge platformunun teknik mimarisi, özgeçmiş ayrıştırma algoritmaları ve güvenli Supabase veri eşitleme süreçleri.",
    summary: "Güvenli yerel mimarilerle özgeçmiş optimizasyon hızını ve ayrıştırma doğruluğunu artırma.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Projeye Genel Bakış", body: "SoftBridge Career Forge, iki dilli bir özgeçmiş optimizasyonu ve ATS puanlama SaaS ürünüdür. Amacımız, özgeçmiş yapısını analiz eden, ATS uyumluluk skorunu hesaplayan ve doğrudan PDF önizlemeli düzenleme sunan bir sistem kurmaktı." },
      { title: "Teknik Zorluklar", body: "Farklı formatlardaki PDF ve Word dökümanlarını sunucuya yüklemeden, tarayıcı üzerinde analiz etmek yüksek performanslı tokenizasyon gerektirdi. Ayrıca, kullanıcı verilerinin gizliliğini korumak için Supabase Row Level Security (RLS) kurallarının eksiksiz kurgulanması gerekiyordu." },
      { title: "Mimari ve Çözümler", body: "Ön yüzü Next.js 16 App Router ve Tailwind CSS 4 kullanarak geliştirdik. Analiz işlemlerini Zustand durum yönetimiyle istemci tarafında çalıştırıp, verileri Supabase üzerinden RLS ilkelerine bağlı olarak güvenle senkronize ettik." },
      { title: "Doğrulanabilir Sonuçlar", body: "Özgeçmişlerdeki ATS yerleşim engellerini tespit etmede %92 doğruluk oranına ulaştık ve sayfa yüklenme sürelerini 1.2 saniyenin altında tutarak premium bir SaaS standardı elde ettik." }
    ]
  },
  {
    slug: "tr/vaka-calismasi/velora-yapay-zeka",
    locale: "tr",
    type: "research",
    status: "published",
    indexable: true,
    title: "Vaka Çalışması: Yerel Çoklu Ajan (Multi-Agent) İş Akışları",
    description: "Velora AI projesi üzerinden supervisor yönlendirme kalıpları, yerel vektör indeksleme ve model context protocol (MCP) entegrasyonlarının analizi.",
    summary: "Dış API bağımlılığı olmadan, %100 yerel altyapıda güvenli döküman analizi ve yapay zekâ iş akışları.",
    publishedAt: "2026-04-12",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Projeye Genel Bakış", body: "Velora AI, karmaşık döküman analizlerini tamamen yerel ağda otomatikleştirmek için tasarlanmış hiyerarşik bir çoklu ajan (multi-agent supervisor) sistemidir." },
      { title: "Teknik Zorluklar", body: "Çoklu ajan sistemlerinde karşılaşılan bağlam sapması ve aşırı token tüketimi sorunlarını çözmek ve yerel modellerin (örn. Ollama üzerindeki Llama 3) araç çağrılarını (tool calls) her zaman geçerli JSON olarak dönmesini sağlamak en büyük zorluktu." },
      { title: "Mimari ve Çözümler", body: "LangGraph supervisor mimarisini uyguladık. Model çıktılarını sistem seviyesindeki şema denetleyicileriyle sınırlandırarak %100 geçerli JSON araç çağrıları yürütülmesini garanti altına aldık." },
      { title: "Doğrulanabilir Sonuçlar", body: "Döküman analizlerinde dış API maliyetlerini tamamen sıfıra indirdik ve verileri yerel ağ sınırları dışına çıkarmayarak kurumsal seviyede tam gizlilik sağladık." }
    ]
  }
];

export const pageMap = new Map(pages.map((p) => [p.slug, p]));

