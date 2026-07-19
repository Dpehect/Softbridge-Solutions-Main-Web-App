"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { routeTranslations, getEquivalentRoute, marketConfigs } from "../content/markets";

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/en";
  
  // Parse market from URL (e.g., /en/services -> en)
  const segments = pathname.split('/').filter(Boolean);
  const marketRoute = segments[0] || "en";
  const slug = segments.slice(1).join('/');

  const market = marketConfigs.find(m => m.route === marketRoute) || marketConfigs[0];
  const isTr = market.defaultLocale === "tr";
  const isPt = market.defaultLocale === "pt";
  const isFr = market.defaultLocale === "fr";
  const isIt = market.defaultLocale === "it";
  const isEn = !isTr && !isPt && !isFr && !isIt; // Includes us, uk, ie, en

  // Handlers for switching language while preserving context
  const getSwitchPath = (targetMarketRoute: string) => {
    const newSlug = getEquivalentRoute(marketRoute, slug, targetMarketRoute);
    return "/" + targetMarketRoute + (newSlug ? "/" + newSlug : "");
  };

  const currentPrefix = `/${marketRoute}`;

  const trSlug = (key: string) => `/${marketRoute}/${routeTranslations[key]?.[marketRoute] || key}`;

  return (
    <header className="site-header">
      <Link href={currentPrefix} className="brand" aria-label="SoftBridge Solutions home">
        <span className="brand-mark">S/B</span>
        <span>SoftBridge<br />Solutions</span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? (isEn ? "Close" : "Kapat") : (isEn ? "Menu" : "Menü")}
      </button>
      <nav id="site-nav" className={open ? "open" : ""} aria-label="Primary navigation">
        <Link href={trSlug("services")} onClick={() => setOpen(false)}>{
          isTr ? "Hizmetler" : isPt ? "Serviços" : isFr ? "Services" : isIt ? "Servizi" : "Services"
        }</Link>
        <Link href={trSlug("ai-agents")} onClick={() => setOpen(false)}>{
          isTr ? "Yapay Zekâ" : isPt ? "Agentes de IA" : isFr ? "Agents IA" : isIt ? "Agenti AI" : "AI Agents"
        }</Link>
        <Link href={trSlug("projects")} onClick={() => setOpen(false)}>{
          isTr ? "Projeler" : isPt ? "Projetos" : isFr ? "Projets" : isIt ? "Progetti" : "Projects"
        }</Link>
        <Link href={trSlug("about")} onClick={() => setOpen(false)}>{
          isTr ? "Şirket" : isPt ? "Empresa" : isFr ? "Entreprise" : isIt ? "Azienda" : "Company"
        }</Link>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        
        {/* Simple Language Selector */}
        <select 
          className="lang-selector" 
          aria-label="Select language and market"
          value={marketRoute}
          onChange={(e) => {
            const target = e.target.value;
            document.cookie = `NEXT_LOCALE=\${target}; path=/; max-age=31536000`;
            window.location.href = getSwitchPath(target);
          }}
          style={{ fontSize: "0.85rem", padding: "0.25rem 0.5rem", borderRadius: "2px", background: "transparent", border: "1px solid var(--border)", color: "inherit" }}
        >
          {marketConfigs.map(m => (
            <option key={m.route} value={m.route}>{m.name}</option>
          ))}
        </select>

        <Link href={trSlug("contact")} className="header-cta">
          {isTr ? "Bize Yazın" : isPt ? "Fale connosco" : isFr ? "Parlons-en" : isIt ? "Parliamo" : "Talk to us"} <Arrow />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname() || "/en";
  const segments = pathname.split('/').filter(Boolean);
  const marketRoute = segments[0] || "en";
  const market = marketConfigs.find(m => m.route === marketRoute) || marketConfigs[0];
  const isTr = market.defaultLocale === "tr";
  const isPt = market.defaultLocale === "pt";
  const isFr = market.defaultLocale === "fr";
  const isIt = market.defaultLocale === "it";

  const trSlug = (key: string) => `/\${marketRoute}/\${routeTranslations[key]?.[marketRoute] || key}`;

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href={`/\${marketRoute}`} className="brand footer-brand">
          <span className="brand-mark">S/B</span>
          <span>SoftBridge<br />Solutions</span>
        </Link>
        <p>
          {isTr ? "Adana'dan dünyaya otonom yapay zekâ ajanları ve özel yazılımlar." 
           : isPt ? "Produtos digitais globais, desenvolvidos em Adana."
           : isFr ? "Produits numériques mondiaux, conçus à Adana."
           : isIt ? "Prodotti digitali globali, sviluppati ad Adana."
           : "Global digital products, engineered from Adana."}
        </p>
      </div>
      <div className="footer-grid">
        <div>
          <h3>{isTr ? "Hizmetler" : isPt ? "Serviços" : isFr ? "Services" : isIt ? "Servizi" : "Services"}</h3>
          <Link href={trSlug("web-development")}>{isTr ? "Web Yazılım" : "Web Development"}</Link>
          <Link href={trSlug("mobile-development")}>{isTr ? "Mobil Uygulama" : "Mobile Apps"}</Link>
          <Link href={trSlug("saas-development")}>{isTr ? "SaaS Geliştirme" : "SaaS Development"}</Link>
          <Link href={trSlug("custom-software")}>{isTr ? "Özel Yazılım" : "Custom Software"}</Link>
        </div>
        <div>
          <h3>{isTr ? "Uzmanlık" : "Expertise"}</h3>
          <Link href={trSlug("ai-agents")}>{isTr ? "Yapay Zekâ Ajanları" : "AI Agents"}</Link>
          <Link href={trSlug("enterprise-ai")}>{isTr ? "Kurumsal Yapay Zekâ" : "Enterprise AI"}</Link>
          <Link href={trSlug("generative-ai")}>{isTr ? "Üretimsel Yapay Zekâ" : "Generative AI"}</Link>
          <Link href={trSlug("projects")}>{isTr ? "Çalışan Ürünler" : "Verifiable Products"}</Link>
        </div>
        <div>
          <h3>{isTr ? "Şirket" : "Company"}</h3>
          <Link href={trSlug("about")}>{isTr ? "Hakkımızda" : "About"}</Link>
          <Link href={trSlug("company-facts")}>{isTr ? "Şirket Künyesi" : "Company Facts"}</Link>
          <Link href={trSlug("locations")}>{isTr ? "Konumlar" : "Locations"}</Link>
          <Link href={trSlug("yunus-emre-gurlek")}>{isTr ? "Kurucu" : "Founder"}</Link>
          <Link href={trSlug("contact")}>{isTr ? "İletişim" : "Contact"}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SoftBridge Solutions</span>
        <Link href={trSlug("yunus-emre-gurlek")}>
          {isTr ? "Yunus Emre Gürlek Tarafından Kuruldu" : "Founded by Yunus Emre Gürlek"}
        </Link>
        <span>
          {marketConfigs.map(m => m.name).join(' · ')}
        </span>
      </div>
    </footer>
  );
}
