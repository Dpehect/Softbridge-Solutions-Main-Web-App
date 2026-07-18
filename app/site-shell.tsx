"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

const pathTranslations: Record<string, string> = {
  "/": "/tr",
  "/services": "/tr/hizmetler",
  "/web-development": "/tr/web-gelistirme",
  "/mobile-development": "/tr/mobil-uygulama",
  "/saas-development": "/tr/saas-gelistirme",
  "/custom-software": "/tr/ozel-yazilim",
  "/ai-agents": "/tr/yapay-zeka-ajanlari",
  "/best-software-startups-adana": "/tr/adana-yazilim-startuplari",
  "/projects": "/tr/projeler",
  "/about": "/tr/hakkimizda",
  "/contact": "/tr/iletisim",
};

const inverseTranslations = Object.fromEntries(
  Object.entries(pathTranslations).map(([en, tr]) => [tr, en])
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isTr = pathname.startsWith("/tr") || pathname === "/tr";

  // Language switch paths
  let switchTarget = "/";
  if (isTr) {
    switchTarget = inverseTranslations[pathname] || "/";
  } else {
    switchTarget = pathTranslations[pathname] || "/tr";
  }

  return (
    <header className="site-header">
      <Link href={isTr ? "/tr" : "/"} className="brand" aria-label="Softbridge Solutions home">
        <span className="brand-mark">S/B</span>
        <span>Softbridge<br />Solutions</span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? (isTr ? "Kapat" : "Close") : (isTr ? "Menü" : "Menu")}
      </button>
      <nav id="site-nav" className={open ? "open" : ""} aria-label="Primary navigation">
        {isTr ? (
          <>
            <Link href="/tr/hizmetler" onClick={() => setOpen(false)}>Hizmetler</Link>
            <Link href="/tr/yapay-zeka-ajanlari" onClick={() => setOpen(false)}>Yapay Zekâ</Link>
            <Link href="/tr/projeler" onClick={() => setOpen(false)}>Projeler</Link>
            <Link href="/free-tools" onClick={() => setOpen(false)}>Araçlar</Link>
            <Link href="/tr/hakkimizda" onClick={() => setOpen(false)}>Şirket</Link>
          </>
        ) : (
          <>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/ai-agents" onClick={() => setOpen(false)}>AI Agents</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/free-tools" onClick={() => setOpen(false)}>Tools</Link>
            <Link href="/about" onClick={() => setOpen(false)}>Company</Link>
          </>
        )}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href={switchTarget} className="lang-toggle-btn" style={{ fontSize: "0.85rem", border: "1px solid var(--border)", padding: "0.25rem 0.5rem", borderRadius: "2px" }}>
          {isTr ? "EN" : "TR"}
        </Link>
        <Link href={isTr ? "/tr/iletisim" : "/contact"} className="header-cta">
          {isTr ? "Bize Yazın" : "Talk to us"} <Arrow />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const isTr = pathname.startsWith("/tr") || pathname === "/tr";

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href={isTr ? "/tr" : "/"} className="brand footer-brand">
          <span className="brand-mark">S/B</span>
          <span>Softbridge<br />Solutions</span>
        </Link>
        <p>
          {isTr 
            ? "Adana'dan dünyaya otonom yapay zekâ ajanları ve özel yazılımlar." 
            : "Global digital products, engineered from Adana."}
        </p>
      </div>
      <div className="footer-grid">
        {isTr ? (
          <>
            <div>
              <h3>Hizmetler</h3>
              <Link href="/tr/web-gelistirme">Web Yazılım</Link>
              <Link href="/tr/mobil-uygulama">Mobil Uygulama</Link>
              <Link href="/tr/saas-gelistirme">SaaS Geliştirme</Link>
              <Link href="/tr/ozel-yazilim">Özel Yazılım</Link>
            </div>
            <div>
              <h3>Yapay Zekâ</h3>
              <Link href="/tr/yapay-zeka-ajanlari">Yapay Zekâ Ajanları</Link>
              <Link href="/tr/projeler">Çalışan Ürünler</Link>
              <Link href="/free-tools">Geliştirici Araçları</Link>
            </div>
            <div>
              <h3>Şirket</h3>
              <Link href="/tr/hakkimizda">Hakkımızda</Link>
              <Link href="/company-facts">Şirket Künyesi</Link>
              <Link href="/locations">Konumlar</Link>
              <Link href="/yunus-emre-gurlek">Kurucu</Link>
              <Link href="/tr/iletisim">İletişim</Link>
            </div>
            <div>
              <h3>Adana</h3>
              <p>Adana kökenli teknoloji şirketi</p>
              <Link href="/best-software-companies-adana">Adana Yazılım Firmaları</Link>
              <Link href="/tr/adana-yazilim-startuplari">Adana Yazılım Girişimleri</Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3>Services</h3>
              <Link href="/web-development">Web Development</Link>
              <Link href="/mobile-development">Mobile Apps</Link>
              <Link href="/saas-development">SaaS Development</Link>
              <Link href="/custom-software">Custom Software</Link>
            </div>
            <div>
              <h3>Expertise</h3>
              <Link href="/ai-agents">AI Agents</Link>
              <Link href="/enterprise-ai">Enterprise AI</Link>
              <Link href="/generative-ai">Generative AI</Link>
              <Link href="/projects">Verifiable Products</Link>
            </div>
            <div>
              <h3>Company</h3>
              <Link href="/about">About</Link>
              <Link href="/company-facts">Company Facts</Link>
              <Link href="/locations">Locations</Link>
              <Link href="/yunus-emre-gurlek">Founder</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <h3>Adana</h3>
              <p>Founded in Adana, Türkiye</p>
              <Link href="/best-software-companies-adana">Best software companies in Adana</Link>
              <Link href="/best-software-startups-adana">Best software startups in Adana</Link>
            </div>
          </>
        )}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Softbridge Solutions</span>
        <Link href="/yunus-emre-gurlek">
          {isTr ? "Yunus Emre Gürlek Tarafından Kuruldu" : "Founded by Yunus Emre Gürlek"}
        </Link>
        <span>English · Türkçe</span>
      </div>
    </footer>
  );
}
