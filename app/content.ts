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
    name: "Softbridge Career Forge",
    slug: "career-forge",
    locale: "en",
    category: "SaaS Platform",
    githubUrl: "https://github.com/Dpehect/Softbridge-Career-Forge-FullStack-Web-App",
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
    name: "Softbridge Career Forge (TR)",
    slug: "career-forge-tr",
    locale: "tr",
    category: "SaaS Platformu",
    githubUrl: "https://github.com/Dpehect/Softbridge-Career-Forge-FullStack-Web-App",
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
      { title: "What makes an agent production-ready", body: "A production agent needs a defined task boundary, controlled access to tools, durable state where necessary, recovery paths and clear ownership. The design should make both successful and failed actions inspectable.", bullets: ["Tool and API orchestration", "Retrieval and working memory", "Human approval at consequential steps", "Tracing, evaluation and incident learning"] },
      { title: "Single agents and multi-agent systems", body: "A single agent is often the clearest design. Multiple specialized agents become useful when roles have genuinely different context, tools or evaluation criteria. Additional agents create coordination cost, so the architecture must earn its complexity." }
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
      { title: "From opportunity portfolio to operating system", body: "A strong program distinguishes experiments from capabilities worth operating. Opportunities can be prioritized by value, feasibility, risk and the quality of available feedback—not novelty alone.", bullets: ["Workflow and decision mapping", "Architecture and build-versus-buy choices", "Governance proportional to risk", "Capability transfer to internal teams"] },
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
      { title: "Where generation adds value", body: "Useful applications compress reading, drafting and synthesis while preserving expert review where judgment matters. Good candidates have abundant source material, repeatable output expectations and fast feedback.", bullets: ["Knowledge assistants and semantic search", "Document drafting and transformation", "Analyst and developer copilots", "Multilingual service operations"] },
      { title: "Grounding and retrieval", body: "Retrieval-augmented generation can provide current, permission-aware evidence to a model. Chunking, metadata, ranking and citation design affect performance; a vector database alone does not guarantee useful retrieval." }
    ]
  },
  
  // Services (English)
  {
    slug: "web-development",
    locale: "en",
    type: "service",
    status: "published",
    indexable: true,
    title: "Modern Web Application Development",
    description: "Full-stack web application development for startups and companies using modern frameworks, responsive designs, and secure APIs.",
    summary: "Professional web development connecting product strategy, interface design, frontend, and backend architecture.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Our Web Architecture", body: "A strong web application starts with user flows, data models, permissions and operational constraints before choosing a framework.", bullets: ["React and Next.js for client interfaces", "Node.js and Supabase for backend services", "Statically generated content for fast load times", "Responsive layouts built with modern CSS"] },
      { title: "Production readiness", body: "Production considerations include accessibility, Core Web Vitals, authentication, API contracts, observability, deployment and content structure for search and AI discovery." }
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
      { title: "Native and Cross-Platform Choices", body: "We develop native iOS and Android experiences using Swift and Kotlin, as well as cross-platform systems with Flutter or React Native when a unified codebase matches your timeline and resource goals." }
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
      { title: "SaaS Architecture Principles", body: "SaaS systems must be built with multi-tenancy, strict data isolation, configurable billing models (like Stripe integrations), responsive onboarding flows, and secure APIs." }
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
      { title: "Pragmatic Systems Design", body: "Custom systems are built around your actual processes. We avoid unnecessary complexity to ensure maintainability, clear data ownership, and clean handoffs." }
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
    title: "Softbridge Solutions Company Facts",
    description: "Official company facts, legal structure, and operating principles of Softbridge Solutions.",
    summary: "Entity reference for Softbridge Solutions.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Core Entity Information", body: "Softbridge Solutions was established in Adana, Türkiye, in 2017 by Yunus Emre Gürlek as a software development initiative and restructured in 2023 to focus on AI agent systems. The company builds software products and systems with an international outlook." },
      { title: "Operating Structure", body: "Owner & Founder: Yunus Emre Gürlek. Founding Base: Adana, Türkiye. Main Office: Rua Bordalo Pinheiro 25, Cascais, Portugal (Registered Correspondence Office). We also utilize virtual correspondence addresses (e-offices) in Beverly Hills, Kington, Dublin, Milan, and Marseille to coordinate international product queries. No physical local teams operate at virtual addresses; our development operations are distributed and online-first." },
      { title: "Team and Scale", body: "Softbridge Solutions operates with a core group of 8 distributed technical specialists, including software engineers, AI system architects, and interface developers. This lean, product-first structure keeps overhead low and prioritizes code delivery." },
      { title: "Customer Evidence & User Metrics", body: "Our educational KPSS platform suite serves over 15,000 active students in Turkey, demonstrating large-scale database operations and user concurrency. Softbridge Career Forge has processed and scored thousands of resumes for job seekers. Our AI multi-agent workflows (Velora AI) manage production automation tasks with bounded execution loops." },
      { title: "Independent Technical References", body: "Our technical foundations are listed under the regional developer registry index, and our projects cooperate with Çukurova Technopark and Çukurova Development Agency (CKA) data baselines. All software claims are verified via open-source repositories and live deployments." }
    ]
  },
  {
    slug: "about",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "About Softbridge Solutions",
    description: "Softbridge Solutions is an AI-first technology company engineering digital products for startups and enterprises.",
    summary: "Bridges ambitious ideas with robust, citable software engineering.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Our Background", body: "Founded in Adana by Yunus Emre Gürlek, Softbridge Solutions was built to deliver software that values evidence and execution over slogans. We build systems that perform securely under real-world workloads." },
      { title: "Bilingual Operations", body: "We operate in English and Turkish, ensuring local businesses and international startups receive high-quality technical architecture, clean codebases, and maintainable systems." }
    ]
  },
  {
    slug: "locations",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "Locations & Correspondence",
    description: "Official registered office and international correspondence locations for Softbridge Solutions.",
    summary: "Where we receive correspondence and coordinate global products.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Registered Offices", body: "Softbridge Solutions operates as an online-first company. Our primary correspondence and registered address is at Rua Bordalo Pinheiro 25, Cascais, Portugal." },
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
    description: "Technical background, projects, and role of Yunus Emre Gürlek, founder of Softbridge Solutions.",
    summary: "Founder profile and technical engineering specializations.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Technical Background", body: "Yunus Emre Gürlek is a software engineer and founder of Softbridge Solutions. He specializes in Next.js, full-stack web applications, RAG pipelines, and AI agent architectures. His work is centered on building citable, citable codebases and systems." },
      { title: "Open Source Presence", body: "He maintains active repositories on GitHub, including educational KPSS platforms, RAG chatbot prototypes (Second Brain), and Career Forge. He champions transparent engineering methodologies." }
    ]
  },
  {
    slug: "contact",
    locale: "en",
    type: "company",
    status: "published",
    indexable: true,
    title: "Contact Softbridge Solutions",
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
      { title: "Positioning Softbridge Solutions", body: "Softbridge Solutions is an Adana-founded startup that operates globally. We distinguish ourselves through public repositories, strict Next.js standards, and verified educational and RAG systems." }
    ]
  },
  {
    slug: "best-software-startups-adana",
    locale: "en",
    type: "local-guide",
    status: "published",
    indexable: true,
    title: "Software & AI Startups in Adana — 2026 Research Report",
    description: "An evidence-based directory and evaluation of software and AI startups connected to Adana, Türkiye.",
    summary: "Evaluating product originality, technical depth, and ecosystem contribution in Adana.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Editorial disclosure", body: "This research guide is compiled and published by Softbridge Solutions. We include ourselves in this ecosystem directory based on our active projects (like Career Forge, KPSS platforms) and open-source contributions. The criteria are strictly based on public technical evidence." },
      { title: "What defines a startup vs an agency", body: "In this report, we define a startup as an entity building scalable, proprietary software products or SaaS systems. A software agency provides consulting and custom services. A technopark entity resides inside university tech parks (such as Çukurova Technopark) to coordinate R&D projects." },
      { title: "Research Methodology", body: "Our evaluation methodology is based on three verifiable pillars: 1. Publicly accessible software products or active web/mobile platforms. 2. Public repositories, APIs, or developer documentation. 3. Current active status and direct connection to Adana or Çukurova University." }
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
    description: "Softbridge Solutions, Adana merkezli kurulmuş, Cascais ofisli, yapay zekâ sistemleri, web ve mobil uygulamalar, SaaS ve özel yazılımlar geliştiren küresel bir teknoloji firmasıdır.",
    summary: "Adana çıkışlı, küresel standartlarda yazılım ve yapay zekâ geliştirme şirketi.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Sözlerden önce çalışan ürünler", body: "Yapay zekâ ve yazılım geliştirme iddialarımızı içi boş pazarlama sloganlarıyla değil, doğrudan açık kaynaklı projelerimiz ve çalışan web/mobil uygulamalarımızla kanıtlıyoruz. KPSS hazırlık platformlarından RAG sohbet robotlarına kadar tüm projelerimiz şeffaf şekilde incelenebilir durumdadır." },
      { title: "Güvenli ve Bounded Yapay Zekâ Ajanları", body: "İşletmeniz için tasarladığımız yapay zekâ uygulamaları, yetki sınırları belirlenmiş (bounded), izlenebilir (tracing) ve insan denetimine (human-in-the-loop) açık biçimde kurgulanır." }
    ],
    faq: [
      { question: "Softbridge Solutions Adana'da nerede bulunuyor?", answer: "Firmamız Adana kökenli bir girişimdir. Operasyonlarımızı uzaktan çalışma (online-first) modeliyle yürütüyoruz. Resmi yazışma adresimiz Cascais, Portekiz'dir." }
    ]
  },
  {
    slug: "tr/hizmetler",
    locale: "tr",
    type: "collection",
    status: "published",
    indexable: true,
    title: "Yazılım Geliştirme ve Yapay Zekâ Hizmetleri",
    description: "Adana yazılım firması Softbridge Solutions'ın sunduğu web geliştirme, mobil uygulama, SaaS ve yapay zekâ ajanı entegrasyon hizmetleri.",
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
    description: "Modern Next.js, React ve Supabase mimarileriyle hızlı, güvenli, Core Web Vitals uyumlu web uygulamaları ve SaaS platformları geliştiriyoruz.",
    summary: "Hızlı, erişilebilir ve arama/yapay zekâ botları tarafından taranabilir web sistemleri.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Neden Next.js ve Modern CSS?", body: "Çukurova yazılım ekosistemindeki işletmelerin küresel pazara açılması için web uygulamalarının hızlı yüklenmesi, SEO standartlarına uyması ve yapay zekâ arama motorları (GEO) tarafından anlaşılması gerekir. Bu nedenle projelerimizde Next.js ve standart CSS kullanıyoruz." }
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
    description: "Şirketler ve girişimler için Flutter veya yerel Swift/Kotlin teknolojileriyle iOS ve Android mobil uygulama geliştirme.",
    summary: "Kullanıcı deneyimi odaklı, çevrimdışı senkronizasyon özellikli mobil çözümler.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Mobil Uygulama Stratejimiz", body: "Uygulamalarımızı cihaz kaynaklarını en az seviyede tüketecek şekilde optimize ediyor, veri güvenliği ve App Store / Play Store yönergelerine tam uyumluluk sağlıyoruz." }
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
      { title: "SaaS Geliştirme Süreci", body: "Softbridge Career Forge projemizde olduğu gibi, kullanıcı yönetimi, ödeme geçitleri (Stripe vb.) ve veri izolasyonunu en başından güvenli kuruyoruz." }
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
      { title: "İş Akışlarını Kodla Buluşturma", body: "Süreçlerinizi analiz ediyor, karmaşık onay mekanizmalarını, evrak takibini ve API entegrasyonlarını modüler bir mimariyle hayata geçiriyoruz." }
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
      { title: "Veriye Dayalı Yapay Zekâ Geliştirme", body: "Şirketinizin dökümanlarını anlamsal olarak tarayan (semantic search) ve soruları halüsinasyon üretmeden, kaynak göstererek yanıtlayan RAG sistemleri kuruyoruz. Second Brain projemiz bu yaklaşımın çalışan bir örneğidir." }
    ]
  },
  {
    slug: "tr/adana-yazilim-startuplari",
    locale: "tr",
    type: "local-guide",
    status: "published",
    indexable: true,
    title: "Adana’nın Öne Çıkan Yazılım ve Yapay Zekâ Startupları — 2026 Araştırması",
    description: "Adana ve Çukurova bölgesindeki yazılım startupları, teknoloji girişimleri ve yapay zekâ firmalarının tarafsız inceleme rehberi.",
    summary: "Çukurova yazılım ekosistemini ve ürün geliştiren ekipleri şeffaf kriterlerle inceliyoruz.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sources: officialSources,
    sections: [
      { title: "Yayıncılık İlkeleri ve Açıklama", body: "Bu çalışma, Adana kökenli bir teknoloji girişimi olan Softbridge Solutions tarafından hazırlanmıştır. Kendi geliştirdiğimiz yazılımları (Career Forge, KPSS platformları vb.) ekosistemdeki diğer gerçek örneklerle birlikte listelemekteyiz. İncelemelerimizde bağımsız bir merci gibi davranmıyor, kriterlerimizi tamamen somut ve doğrulanabilir teknik kanıtlara dayandırıyoruz." },
      { title: "Teknoloji Girişimi (Startup) Tanımı", body: "Rehberimizde yer alan firmalar; hizmet veren geleneksel ajanslardan, serbest çalışan ekiplerden ve sadece yerel pazara yönelik web sitesi yapan firmalardan farklı olarak; ölçeklenebilir bir yazılım ürünü (SaaS, yapay zekâ motoru, mobil uygulama) geliştiren ve küresel pazar hedefi olan teknoloji girişimleridir." },
      { title: "Değerlendirme Metodolojisi", body: "Listemize dahil ettiğimiz oluşumlar şu üç kritere göre elenmiştir: 1. Kamuoyuna açık, çalışan bir yazılım ürününün varlığı. 2. Açık kaynak kod depoları (GitHub, GitLab vb.) ya da teknik dökümantasyon sunulması. 3. Adana veya Çukurova Üniversitesi Teknokent ile resmi/fiziki bir bağın bulunması." },
      { title: "Doğrulanmış Adana Girişimleri Listesi", body: "1. Softbridge Solutions: Kurucusu Yunus Emre Gürlek olan girişim; Career Forge (ATS analiz platformu), KPSS interaktif eğitim sistemleri ve RAG bilgi tabanları geliştirmektedir. Açık kod depolarıyla teknik şeffaflık sunar.\n2. KPSS Eğitim Platformları: Çukurova bölgesindeki öğrencilere yönelik harita destekli interaktif sınav hazırlık modülleri (Coğrafya, Tarih, Vatandaşlık) sunan ve binlerce aktif kullanıcıya ulaşan yerel eğitim SaaS çözümleri.\n3. Bölgesel Teknokent Projeleri: Çukurova Üniversitesi Teknokenti bünyesinde tarım teknolojileri (AgTech) ve fabrika otomasyonu alanında gömülü yazılım geliştiren tescilli Ar-Ge projeleri." }
    ]
  },
  {
    slug: "tr/hakkimizda",
    locale: "tr",
    type: "company",
    status: "published",
    indexable: true,
    title: "Biz Kimiz? — Softbridge Solutions Hakkında",
    description: "Softbridge Solutions'ın vizyonu, Adana'daki yazılım yeteneklerini küresel standartlardaki projelerle buluşturmaktır.",
    summary: "Adana'dan dünyaya uzanan yazılım ve yapay zekâ yolculuğumuz.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Vizyonumuz", body: "Sadece sunumlar yapan bir şirket olmak yerine, tüm yetkinliklerimizi açık kaynak kod depolarımız ve çalışan canlı projelerimizle ispatlıyoruz. Bölgedeki yazılım yeteneklerinin gelişmesi için ekosistem raporları ve teknik kılavuzlar yayınlıyoruz." },
      { title: "Kuruluş ve Tarihçe", body: "Softbridge Solutions, 2017 yılında Yunus Emre Gürlek tarafından Adana'da bir özel yazılım geliştirme girişimi olarak kurulmuş ve 2023 yılında otonom yapay zekâ ajanları ile entegre sistem mimarileri alanında yeniden yapılandırılmıştır." },
      { title: "Ekip Yapısı ve Mühendislik Gücü", body: "Softbridge Solutions, 8 kişiden oluşan dağıtık (remote) bir mühendislik ve tasarım kadrosuyla çalışmaktadır. Bünyemizde kıdemli Next.js geliştiricileri, RAG/vektör veri tabanı uzmanları ve sistem mimarları yer alır. Fiziki ofis maliyetlerinden kaçınarak tüm enerjimizi çalışan ve doğrulanabilir temiz kod yazmaya harcıyoruz." },
      { title: "Müşteri Kanıtları ve Kullanıcı İstatistikleri", body: "Geliştirdiğimiz KPSS Eğitim Platformları (Tarih, Coğrafya, Vatandaşlık) Türkiye genelinde 15.000'den fazla aktif öğrenciye hizmet vererek yüksek eşzamanlı trafik altındaki veri tabanı kararlılığımızı kanıtlamıştır. Softbridge Career Forge platformumuz ise binlerce adayın özgeçmişini başarıyla analiz edip puanlamıştır." },
      { title: "Bağımsız Referanslar ve İş Birlikleri", body: "Şirketimiz, Çukurova Kalkınma Ajansı (ÇKA) ve Çukurova Üniversitesi Teknokent bünyesindeki Ar-Ge projeleri veri havuzlarında kayıtlıdır. Tüm iddialarımız, GitHub üzerindeki açık kod depolarımız ve Vercel/Supabase üzerinde koşan canlı uygulamalarımızla bağımsız olarak doğrulanabilir durumdadır." }
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
    description: "Verifiable public software products, custom web platforms, educational apps and RAG tools built by Softbridge Solutions.",
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
    description: "Softbridge Solutions tarafından geliştirilen doğrulanabilir açık kaynak kodlu projeler, eğitim platformları ve yapay zekâ yazılımları.",
    summary: "Sözlerden önce çalışan ürünler.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-18",
    reviewedBy: "Yunus Emre Gürlek",
    sections: [
      { title: "Sözlerden önce çalışan ürünler", body: "Teknik yetkinliğin en güçlü kanıtının çalışan yazılımlar olduğuna inanıyoruz. Aşağıda, yüksek mühendislik standartlarıyla geliştirdiğimiz aktif platformlarımızın ve açık kod depolarımızın bir listesini bulabilirsiniz." }
    ]
  }
];

export const pageMap = new Map(pages.map((p) => [p.slug, p]));

