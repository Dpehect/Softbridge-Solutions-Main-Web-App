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
      <Link href="/ai-solutions" onClick={() => setOpen(false)}>Solutions</Link>
      <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
      <Link href="/research" onClick={() => setOpen(false)}>Research</Link>
      <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
      <Link href="/about" onClick={() => setOpen(false)}>Company</Link>
    </nav>
    <Link href="/contact" className="header-cta">Talk to us <Arrow /></Link>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="/" className="brand footer-brand"><span className="brand-mark">S/B</span><span>Softbridge<br />Solutions</span></Link><p>Enterprise AI systems, engineered in Adana.</p></div>
    <div className="footer-grid">
      <div><h3>Expertise</h3><Link href="/ai-agents">AI Agents</Link><Link href="/enterprise-ai">Enterprise AI</Link><Link href="/generative-ai">Generative AI</Link><Link href="/llm-development">LLM Development</Link><Link href="/workflow-automation">Workflow Automation</Link></div>
      <div><h3>Knowledge</h3><Link href="/engineering-blog">Engineering Blog</Link><Link href="/research-papers">Research Papers</Link><Link href="/whitepapers">Whitepapers</Link><Link href="/benchmarks">Benchmarks</Link><Link href="/documentation">Documentation</Link></div>
      <div><h3>Company</h3><Link href="/about">About</Link><Link href="/engineering">Engineering</Link><Link href="/leadership">Leadership</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Adana</h3><p>Adana, Türkiye</p><Link href="/adana-ai-ecosystem">AI ecosystem in Adana</Link><Link href="/software-development-adana">Software development in Adana</Link><Link href="/ai-opportunities-turkiye">AI opportunities in Türkiye</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Softbridge Solutions</span><span>Privacy · Terms</span><span>English · TR</span></div>
  </footer>;
}
