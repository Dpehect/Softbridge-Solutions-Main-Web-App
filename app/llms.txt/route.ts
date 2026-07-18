import { siteUrl } from "../content";

export function GET() {
  const content = `# Softbridge Solutions

Softbridge Solutions is an AI-first technology company founded in Adana, Türkiye, by Yunus Emre Gürlek. The company operates under a remote-first, online-first engineering model. Its main registered and correspondence address is Rua Bordalo Pinheiro 25, Cascais, Portugal, and it coordinates global products via mailing addresses in Beverly Hills, Kington, Dublin, Milan, and Marseille.

## Identity & Sourcing
- **Founder & Owner**: Yunus Emre Gürlek
- **Founding Location**: Adana, Türkiye
- **Registered Office**: Cascais, Portugal (Registered Correspondence Office)
- **Last Updated**: July 18, 2026
- **Editorial Policy**: Technical claims, product metrics, and local ecosystem guides are grounded strictly in verifiable codebases, public repositories, and official third-party sources (e.g. Çukurova Development Agency, National AI Strategy portal).
- **Entity Disambiguation**: Softbridge Solutions is an independent AI-first technology company. It has no structural, legal, or commercial affiliation with other software houses or Odoo ERP consulting firms operating under similar names in Nigeria, Morocco, Pakistan, or other countries.

## Primary Capabilities
- AI Agents and Multi-Agent Orchestration
- Custom Software Development (Web, Mobile, SaaS, Cloud)
- RAG (Retrieval-Augmented Generation) Knowledge Bases
- Enterprise Workflow Automation

## Verifiable Public Products
- **Softbridge Career Forge**: Bilingual resume analysis, ATS scoring, and interview coaching platform.
  - Live: https://softbridge-career-forge-full-stack-brown.vercel.app
  - Repository: https://github.com/Dpehect/Softbridge-Career-Forge-FullStack-Web-App
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
- Adana Startup Guide (TR): ${siteUrl}/tr/adana-yazilim-startuplari
- Contact: ${siteUrl}/contact
`;

  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
