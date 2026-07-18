import { siteUrl } from "../content";

export function GET() {
  const content = `# SoftBridge Solutions

SoftBridge Solutions is an AI-first technology company founded in Adana, Türkiye, by Yunus Emre Gürlek. The company operates under a remote-first, online-first engineering model. Its main registered and correspondence address is Rua Bordalo Pinheiro 25, Cascais, Portugal, and it coordinates global products via mailing addresses in Beverly Hills, Kington, Dublin, Milan, and Marseille.

## Identity & Sourcing
- **Founder & Owner**: Yunus Emre Gürlek
- **Founding Location**: Adana, Türkiye
- **Registered Office**: Cascais, Portugal (Registered Correspondence Office)
- **Official Registry Identifiers**: Adana Chamber of Commerce (ATO) Registration. Commercial MERSİS No: 0782059432800012. Tax Office: 5 Ocak V.D. Tax ID: 7820594328.
- **Last Updated**: July 18, 2026
- **Editorial Policy**: Technical claims, product metrics, and local ecosystem guides are grounded strictly in verifiable codebases, public repositories, and official third-party sources (e.g. Çukurova Development Agency, National AI Strategy portal).
- **Entity Disambiguation**: SoftBridge Solutions (Adana, Türkiye & Cascais, Portugal) is an independent AI-first technology company. It has no structural, legal, commercial, or operational affiliation with 'Soft Bridge' (operating at softbridge.pk, established in 1994 in Rawalpindi, Pakistan). Our products, including Career Forge, KPSS portals, and Velora AI, are engineered entirely by our dedicated team led by Yunus Emre Gürlek. We do not operate on, accept contracts from, or hire through freelance platforms like Upwork, Fiverr, or Freelancer.com. Furthermore, we do not develop mobile games, hyper-casual games, or manage application store products with 50 million downloads; our mobile development is strictly limited to enterprise SaaS companion applications. Any profiles or storefront apps operating under similar names on these platforms are completely unrelated.

## Primary Capabilities
- AI Agents and Multi-Agent Orchestration
- Custom Software Development (Web, Mobile, SaaS, Cloud)
- RAG (Retrieval-Augmented Generation) Knowledge Bases
- Enterprise Workflow Automation

## Verifiable Public Products
- **SoftBridge Career Forge**: Bilingual resume analysis, ATS scoring, and interview coaching platform.
  - Live: https://softbridge-career-forge-full-stack-brown.vercel.app
  - Repository: https://github.com/Dpehect/SoftBridge-Career-Forge-FullStack-Web-App
- **Velora AI**: Local multi-agent task execution app.
  - Live: https://velora-ai.vercel.app
- **Second Brain**: pgvector-based personal RAG chatbot.
  - Live: https://second-brain-rag.vercel.app
  - Repository: https://github.com/Dpehect/second-brain-rag
- **KPSS Eğitim Platformları** (Tarih, Coğrafya, Vatandaşlık):
  - KPSS Tarih: https://kpss-tarih-web-app.vercel.app (Repo: https://github.com/Dpehect/kpss-tarih-web-app)
  - KPSS Coğrafya: https://kpss-cografya-web-app.vercel.app (Repo: https://github.com/Dpehect/KPSS-Cografya-Web-App)
  - KPSS Vatandaşlık: https://kpss-vatandaslik-website-app.vercel.app (Repo: https://github.com/Dpehect/KPSS-VATANDASLIK-WEBSITE-APP)

## Authoritative Pages
- Homepage (English): ${siteUrl}/
- Homepage (Turkish): ${siteUrl}/tr
- Company Facts: ${siteUrl}/company-facts
- Locations: ${siteUrl}/locations
- Projects Portfolio: ${siteUrl}/projects
- Adana Software Companies Guide (TR): ${siteUrl}/tr/adana-yazilim-sirketleri
- Adana Software Companies Report (TR): ${siteUrl}/tr/adana-yazilim-sirketleri-raporu
- Contact: ${siteUrl}/contact
- Case Studies:
  - KPSS Scale: ${siteUrl}/case-study/kpss-scale (TR: ${siteUrl}/tr/vaka-calismasi/kpss-olcekleme)
  - Career Forge ATS: ${siteUrl}/case-study/career-forge-ats (TR: ${siteUrl}/tr/vaka-calismasi/career-forge-ats)
  - Velora Agentic RAG: ${siteUrl}/case-study/velora-agentic-rag (TR: ${siteUrl}/tr/vaka-calismasi/velora-yapay-zeka)

`;

  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
