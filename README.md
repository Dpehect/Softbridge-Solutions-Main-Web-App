# SoftBridge Solutions — SEO / GEO / LLM Ready

This package contains a complete Next.js 16 company website with:

- Official company and founder entity pages
- Main office and international e-office pages
- Organization, Person, WebSite and FAQ structured data
- robots.txt and sitemap.xml
- llms.txt and llms-full.txt
- Machine-readable `/api/company-facts`
- Entity disambiguation language for similar-name companies
- No Tailwind/PostCSS dependency
- Next.js 16 `proxy.ts` convention

## Important deployment step
Delete any old `middleware.ts` file from the GitHub repository before uploading this package. Keep `proxy.ts` only.

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final production domain when you connect a custom domain. Otherwise, the current Vercel URL fallback is used.


## Official location model
- Founded in: Adana, Türkiye
- Headquarters: Av. Eng. Adelino Amaro da Costa, No: 1, 2750-450 Cascais, Portugal
- Verified e-offices: Kington, Beverly Hills, Marseille, Dublin, Milan (full addresses are stored in content/company.ts).
