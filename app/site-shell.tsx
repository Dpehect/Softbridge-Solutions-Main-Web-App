"use client";

import Link from "next/link";
import { useState } from "react";

export function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Softbridge Solutions home"><span className="brand-mark">S/B</span><span>Softbridge<br />Solutions</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="site-nav" className={open ? "open" : ""} aria-label="Primary navigation">
      <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
      <Link href="/ai-solutions" onClick={() => setOpen(false)}>AI</Link>
      <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
      <Link href="/free-tools" onClick={() => setOpen(false)}>Tools</Link>
      <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
      <Link href="/about" onClick={() => setOpen(false)}>Company</Link>
    </nav>
    <Link href="/contact" className="header-cta">Talk to us <Arrow /></Link>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/" className="brand footer-brand"><span className="brand-mark">S/B</span><span>Softbridge<br />Solutions</span></Link><p>Global digital products, engineered from Adana.</p></div>
    <div className="footer-grid">
      <div><h3>Services</h3><Link href="/web-development">Web Development</Link><Link href="/mobile-development">Mobile Apps</Link><Link href="/saas-development">SaaS Development</Link><Link href="/custom-software">Custom Software</Link><Link href="/cloud-applications">Cloud Applications</Link></div>
      <div><h3>Expertise</h3><Link href="/ai-agents">AI Agents</Link><Link href="/enterprise-ai">Enterprise AI</Link><Link href="/blockchain-development">Blockchain</Link><Link href="/fintech-software">FinTech Software</Link><Link href="/ui-ux-design">UI/UX Design</Link></div>
      <div><h3>Knowledge</h3><Link href="/free-tools">Free Tools</Link><Link href="/research-center">Research Center</Link><Link href="/developer-hub">Developer Hub</Link><Link href="/blog/api-security">API Security</Link><Link href="/documentation">Documentation</Link></div>
      <div><h3>Company</h3><Link href="/about">About</Link><Link href="/engineering">Engineering</Link><Link href="/leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Adana</h3><p>Adana, Türkiye</p><Link href="/best-software-companies-adana">Best software companies in Adana</Link><Link href="/technology-companies-adana">Technology companies in Adana</Link><Link href="/software-outsourcing-turkey">Software outsourcing in Turkey</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Softbridge Solutions</span><span>Privacy · Terms</span><span>English · TR</span></div>
  </footer>;
}
