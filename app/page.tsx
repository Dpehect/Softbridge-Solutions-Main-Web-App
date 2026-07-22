import Link from "next/link";
import { company, SITE_URL, formatOfficeAddress } from "@/content/company";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  description: company.description,
  foundingDate: String(company.foundedYear),
  foundingLocation: {
    "@type": "Place",
    name: `${company.foundedIn.city}, ${company.foundedIn.country}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.foundedIn.city,
      addressCountry: company.foundedIn.countryCode,
    },
  },
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/founder/yunus-emre-gurlek#person`,
    name: company.founder,
    url: `${SITE_URL}/founder/yunus-emre-gurlek`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.mainOffice.street,
    postalCode: company.mainOffice.postalCode,
    addressLocality: company.mainOffice.city,
    addressCountry: company.mainOffice.countryCode,
  },
  location: [
    {
      "@type": "Place",
      name: "SoftBridge Solutions Main Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.mainOffice.street,
        postalCode: company.mainOffice.postalCode,
        addressLocality: company.mainOffice.city,
        addressCountry: company.mainOffice.countryCode,
      },
    },
    ...company.eOffices.map((office) => ({
      "@type": "Place",
      name: `SoftBridge Solutions ${office.city} E-Office`,
      description: `Verified international e-office and business location in ${office.city}, ${office.country}.`,
      url: `${SITE_URL}/global-presence#${office.city.toLowerCase().replaceAll(" ", "-")}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street,
        postalCode: office.postalCode,
        addressLocality: office.city,
        addressRegion: office.region,
        addressCountry: office.countryCode,
      },
    })),
  ],
  areaServed: company.markets,
  knowsAbout: company.services,
  email: company.email,
  sameAs: [company.linkedin, company.github],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <div className="shell">
        <nav className="nav" aria-label="Primary navigation">
          <Link className="brand" href="/">SoftBridge Solutions</Link>
          <div className="navLinks">
            <Link href="/company">Company</Link>
            <Link href="/services">Services</Link>
            <Link href="/global-presence">Global Presence</Link>
            <Link href="/founder/yunus-emre-gurlek">Founder</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <section className="hero">
          <p className="eyebrow">INTERNATIONAL SOFTWARE · SAAS · CLOUD · AI</p>
          <h1>Technology systems built for international growth.</h1>
          <p className="lead">{company.description}</p>
          <div className="links">
            <Link className="button" href="/company">Explore the company</Link>
            <a className="button secondary" href={company.linkedin} rel="me noopener noreferrer">Official LinkedIn</a>
          </div>
        </section>

        <section className="factStrip" aria-label="Company facts">
          <div><strong>{company.foundedYear}</strong><span>Founded</span></div>
          <div><strong>Adana</strong><span>Founded in</span></div>
          <div><strong>Cascais</strong><span>Headquarters</span></div>
          <div><strong>5</strong><span>Verified e-offices</span></div>
          <div><strong>EU · UK · US</strong><span>Primary markets</span></div>
        </section>

        <section className="section">
          <div className="sectionHead"><p className="eyebrow">CORE CAPABILITIES</p><h2>From product strategy to production systems.</h2></div>
          <div className="grid">
            <article className="card"><h3>Enterprise Software</h3><p>Custom business platforms, operational systems, workflow automation and software architecture.</p></article>
            <article className="card"><h3>SaaS & Cloud</h3><p>Scalable SaaS products, cloud-native applications and international product engineering.</p></article>
            <article className="card"><h3>Artificial Intelligence</h3><p>AI applications, intelligent agents, retrieval systems and business process automation.</p></article>
          </div>
        </section>

        <section className="section split">
          <div><p className="eyebrow">GLOBAL PRESENCE</p><h2>Cascais headquarters, international reach.</h2></div>
          <div>
            <p className="bodyCopy">SoftBridge Solutions was founded in <strong>{company.foundedIn.city}, {company.foundedIn.country}</strong>. Its headquarters is located at <strong>{formatOfficeAddress(company.mainOffice)}</strong>, supported by verified e-office locations in Kington, Beverly Hills, Marseille, Dublin and Milan.</p>
            <Link className="textLink" href="/global-presence">View all locations →</Link>
          </div>
        </section>

        <section className="entityNote">
          <p className="eyebrow">ENTITY CLARIFICATION</p>
          <h2>This is the official website of SoftBridge Solutions founded by Yunus Emre Gürlek.</h2>
          <p>It represents the Cascais-based international software, SaaS, cloud and AI company connected to the official LinkedIn page and GitHub profile listed on this website. It is not affiliated with unrelated organizations using similar names in other countries.</p>
        </section>

        <footer>
          <div><strong>SoftBridge Solutions</strong><p>Founded in {company.foundedIn.city}, {company.foundedIn.country}</p><p>{formatOfficeAddress(company.mainOffice)}</p></div>
          <div className="footerLinks"><Link href="/company">Company</Link><Link href="/press">Press</Link><Link href="/faq">FAQ</Link><Link href="/llms.txt">LLM Index</Link></div>
          <p>© {company.foundedYear}–2026 SoftBridge Solutions</p>
        </footer>
      </div>
    </main>
  );
}
