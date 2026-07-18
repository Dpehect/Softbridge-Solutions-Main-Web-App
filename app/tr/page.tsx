import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, Arrow } from "../site-shell";
import { JsonLd } from "../structured-data";
import { pages, realProjects } from "../content";

export const metadata: Metadata = {
  title: "Yazılım Geliştirme ve Yapay Zekâ Şirketi — Adana",
  description: "Softbridge Solutions, Adana merkezli kurulmuş, otonom yapay zekâ ajanları, web yazılım, SaaS platformları ve özel kurumsal yazılımlar geliştiren küresel bir teknoloji firmasıdır.",
  alternates: { canonical: "/tr" },
};

const stages = [
  ["01", "Planla", "Teknoloji seçimi yapmadan önce iş akışını, kararları ve ölçülebilir işletim sınırlarını tanımlayın."],
  ["02", "Prototip", "En küçük yararlı sistemi gerçekçi veriler, kullanıcılar ve hata senaryoları ile test edin."],
  ["03", "Mühendislik", "Üretim yoluna değerlendirme, izlenebilirlik, güvenlik ve insan denetimini entegre edin."],
  ["04", "İşletim", "Maliyet ve kaliteyi sürekli ölçün; modeller ve iş akışları değiştikçe sistemi güncelleyin."],
];

export default function TurkishHome() {
  const trServices = pages.filter((x) => x.locale === "tr" && x.type === "service" && ["tr/web-gelistirme", "tr/mobil-uygulama", "tr/saas-gelistirme", "tr/ozel-yazilim"].includes(x.slug));
  const trSolutions = pages.filter((x) => x.locale === "tr" && ["tr/yapay-zeka-ajanlari"].includes(x.slug));
  const trHomeProjects = realProjects.filter((x) => x.locale === "tr").slice(0, 3);

  const homePageData = pages.find(p => p.slug === "tr");

  return (
    <>
      <JsonLd page={homePageData} />
      <SiteHeader />
      <main>
        <section className="hero grid-bg">
          <div className="eyebrow reveal">Adana, Türkiye · Küresel pazarlar için geliştirildi</div>
          <h1 className="display reveal delay-1">Sınırlar olmadan<br />teknoloji.</h1>
          <div className="hero-lower reveal delay-2">
            <p className="lede">Softbridge Solutions, işletmeler için otonom yapay zekâ ajanları ve özel dijital ürünler geliştiren bir teknoloji şirketidir. Adana kökenli yapımızla, uluslararası kullanıcılar, karmaşık operasyonlar ve uzun vadeli büyüme hedefleri için yazılım tasarlıyoruz.</p>
            <div className="hero-actions">
              <Link className="button dark" href="/tr/iletisim">Projenizi görüşün <Arrow /></Link>
              <Link className="text-link" href="/tr/hizmetler">Hizmetleri keşfedin <Arrow /></Link>
            </div>
          </div>
          <div className="signal-path" aria-hidden="true"><i /><span>strateji</span><i /><span>sistemler</span><i /><span>operasyonlar</span><b /></div>
        </section>

        <section className="statement section dark-panel">
          <p className="section-kicker">Bizim Bakış Açımız</p>
          <h2>Küresel yazılım ürünleri; net kararlar, disiplinli yazılım mühendisliği ve yüksek uygulama standartlarıyla başlar.</h2>
          <div className="statement-copy">
            <p>Ürün stratejisi, arayüz tasarımı, yazılım mimarisi, yapay zekâ entegrasyonu ve bulut mühendisliğini tek bir çatı altında birleştiriyoruz. Geliştirdiğimiz her sistemi uluslararası ölçeklenebilirlik, operasyonel şeffaflık ve sürekli gelişim ilkelerine uygun olarak tasarlıyoruz.</p>
          </div>
        </section>

        {/* Çalışan Ürünler Bölümü */}
        <section className="section solutions" id="portfolio">
          <div className="section-head">
            <div><p className="section-kicker">Ürün Portföyü</p><h2>Sözlerden önce<br />çalışan ürünler.</h2></div>
            <p>Yapay zekâ ve yazılım geliştirme alanındaki somut yetkinliklerimizi çalışan platformlarımız ve açık kod depolarımız ile gösteriyoruz.</p>
          </div>
          <div className="solution-list">
            {trHomeProjects.map((project, i) => (
              <div className="solution-row" key={project.slug} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span className="row-index">0{i + 1}</span>
                  <h3 style={{ flex: 1, margin: "0 1.5rem" }}>{project.name}</h3>
                  <span className="tag" style={{ fontSize: "0.85rem", opacity: 0.7 }}>{project.category}</span>
                </div>
                <p style={{ margin: "1rem 0 1rem 3rem", fontSize: "0.95rem", color: "var(--foreground-muted)" }}>{project.problem}</p>
                <div style={{ margin: "0 0 0 3rem" }}>
                  <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginRight: "1.5rem" }}>
                    Canlı Adres <Arrow />
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                      GitHub Kod Deposu <Arrow />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div style={{ marginTop: "2rem", paddingLeft: "3rem" }}>
              <Link className="button dark" href="/tr/projeler">Tüm ürünlerimizi görün <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="section solutions" id="capabilities">
          <div className="section-head">
            <div><p className="section-kicker">Hizmetlerimiz</p><h2>Fikirden çalışan<br />ürünlere.</h2></div>
            <p>Ölçeklenebilir SaaS platformları, yapay zekâ entegrasyonları ve web/mobil ürünler inşa etmek isteyen firmalar için uçtan uca yazılım geliştirme çözümleri.</p>
          </div>
          <div className="solution-list">
            {trServices.map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section solutions" id="ai">
          <div className="section-head">
            <div><p className="section-kicker">Yapay Zekâ</p><h2>Yazılımla bütünleşik<br />AI modelleri.</h2></div>
            <p>Çukurova yazılım ekosisteminde yapay zekâ çözümlerini sadece deneysel prototipler olarak değil; veri güvenliği, otonom yapay zekâ ajanları, RAG (veri tabanlı arama) ve insan denetimi ile çalışır sistemler halinde sunuyoruz.</p>
          </div>
          <div className="solution-list">
            {trSolutions.map((item, i) => (
              <Link href={`/${item.slug}`} className="solution-row" key={item.slug}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="section process grid-bg">
          <div className="section-head">
            <div><p className="section-kicker">Metot</p><h2>Ölçeklemeden önce<br />kanıt.</h2></div>
            <p>Geliştirme sürecinin her aşaması, riskleri erkenden ortaya çıkaracak ve tasarımdan işletime kadar doğrulanabilir bir yol sunacak şekilde yapılandırılmıştır.</p>
          </div>
          <div className="stage-grid">
            {stages.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className="section statement global-statement">
          <p className="section-kicker">Küresel Ufuk</p>
          <h2>Adana Kökenli.<br />Dünya İçin Geliştirildi.</h2>
          <div className="statement-copy">
            <p>Adana kökenli yapımızı Portekiz (Cascais) merkez ofisimiz ve Avrupa genelindeki yazışma adreslerimizle birleştirerek yerel mühendislik gücünü küresel standartlarla buluşturuyoruz.</p>
            <Link className="text-link" href="/tr/hakkimizda">Şirketi Keşfedin <Arrow /></Link>
          </div>
        </section>

        <section className="section office-strip">
          <p className="section-kicker">Kayıtlı Ofis & İletişim</p>
          <div><strong>Resmi Adres</strong><span>Rua Bordalo Pinheiro 25 · Cascais, Portekiz</span></div>
          <div><strong>Yazışma Adresleri</strong><span>Beverly Hills · Kington · Dublin · Milan · Marseille</span></div>
          <Link className="text-link" href="/locations">Tüm konumları görün <Arrow /></Link>
        </section>

        <section className="section proof dark-panel">
          <p className="section-kicker">Güvenilir Teslimat</p>
          <div className="proof-grid">
            <h2>Prototip sonrasında ortaya çıkan sorular için tasarlandı.</h2>
            <div className="proof-points">
              <article><h3>Çalıştığından nasıl emin oluyoruz?</h3><p>Yayından önce tanımlanmış göreve özel test setleri, doğrulanabilir çıktılar ve işletim kriterleri ile.</p></article>
              <article><h3>Hata durumunda ne oluyor?</h3><p>Sınırlandırılmış otonom yetkiler, net yetki devirleri ve kritik kararlarda insan kontrolü ile.</p></article>
              <article><h3>Maliyeti tahmin edebiliyor muyuz?</h3><p>Gereksiz token harcamalarını önleyerek tamamlanan faydalı görev başına ölçülebilen altyapı maliyetleri ile.</p></article>
            </div>
          </div>
        </section>

        <section className="cta grid-bg">
          <p className="section-kicker">Sistemden Başlayın</p>
          <h2>Ürünün en zor kısmını<br />bize getirin.</h2>
          <p>Geliştirmek veya modernize etmek istediğiniz yazılım fikrini bizimle paylaşın. Yapay zekânın nerede yer alıp almaması gerektiğini birlikte analiz edelim.</p>
          <Link className="button acid" href="/tr/iletisim">Görüşme Başlatın <Arrow /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
