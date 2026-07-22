import { notFound } from "next/navigation";

const markets = ["en", "tr", "pt", "fr", "it", "us", "uk", "ie"] as const;
type Market = (typeof markets)[number];

const copy: Record<Market, { badge: string; title: string; lead: string }> = {
  en: { badge: "Portugal-based international technology company", title: "Enterprise software, SaaS and AI systems built without borders.", lead: "SoftBridge Solutions was founded in Adana, Türkiye and operates internationally from Cascais, Portugal. The company develops digital products and software systems for European and United States markets." },
  tr: { badge: "Adana'da kurulan uluslararası teknoloji şirketi", title: "Kurumsal yazılım, SaaS ve yapay zekâ sistemleri.", lead: "SoftBridge Solutions, Adana'da kurulmuş ve Cascais, Portekiz merkezli uluslararası çalışmalar yürüten bir teknoloji şirketidir. Avrupa ve Amerika Birleşik Devletleri pazarlarına dijital ürünler ve yazılım çözümleri geliştirir." },
  pt: { badge: "Empresa internacional de tecnologia sediada em Portugal", title: "Software empresarial, SaaS e sistemas de inteligência artificial.", lead: "A SoftBridge Solutions foi fundada em Adana, Türkiye, e desenvolve operações internacionais a partir de Cascais, Portugal, atendendo mercados europeus e dos Estados Unidos." },
  fr: { badge: "Entreprise technologique internationale basée au Portugal", title: "Logiciels d'entreprise, SaaS et systèmes d'intelligence artificielle.", lead: "SoftBridge Solutions a été fondée à Adana, Türkiye, et développe ses activités internationales depuis Cascais, Portugal." },
  it: { badge: "Azienda tecnologica internazionale con base in Portogallo", title: "Software enterprise, SaaS e sistemi di intelligenza artificiale.", lead: "SoftBridge Solutions è stata fondata ad Adana, Türkiye, e sviluppa attività internazionali da Cascais, Portogallo." },
  us: { badge: "International software company serving the United States", title: "Enterprise software and AI product engineering for global teams.", lead: "SoftBridge Solutions develops SaaS, cloud, artificial intelligence, web and mobile products for international markets, including the United States." },
  uk: { badge: "International software company serving the United Kingdom", title: "Enterprise software and AI product engineering.", lead: "SoftBridge Solutions provides remote-first SaaS, cloud, artificial intelligence and custom software engineering services." },
  ie: { badge: "International software company serving Ireland", title: "SaaS, cloud and artificial intelligence engineering.", lead: "SoftBridge Solutions develops digital products and software systems for European and international markets." }
};

export function generateStaticParams() {
  return markets.map((market) => ({ market }));
}

export default async function MarketPage({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  if (!markets.includes(market as Market)) notFound();
  const item = copy[market as Market];

  return (
    <main>
      <div className="shell">
        <nav className="nav">
          <div className="brand">SoftBridge Solutions</div>
          <div className="badge">Founded 2017</div>
        </nav>

        <section className="hero">
          <div className="badge">{item.badge}</div>
          <h1>{item.title}</h1>
          <p className="lead">{item.lead}</p>
          <div className="links">
            <a className="button" href="mailto:contact@softbridge.solutions">Contact</a>
            <a className="button secondary" href="https://www.linkedin.com/company/softbridge-solution/">LinkedIn</a>
          </div>
        </section>

        <section className="grid">
          <article className="card"><h2>Enterprise Software</h2><p>Custom business platforms, software architecture, workflow automation and digital transformation systems.</p></article>
          <article className="card"><h2>SaaS & Cloud</h2><p>Scalable cloud applications, product engineering and international SaaS development.</p></article>
          <article className="card"><h2>Artificial Intelligence</h2><p>AI applications, agents, retrieval-augmented generation and intelligent automation.</p></article>
        </section>

        <footer>© 2017–2026 SoftBridge Solutions · Adana, Türkiye · Cascais, Portugal</footer>
      </div>
    </main>
  );
}
