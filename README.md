# Softbridge Solutions

Corporate website for Softbridge Solutions, an enterprise AI engineering company based in Lisbon, Portugal.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The local server starts at `http://localhost:3000` by default.

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the public origin when building for production. This value is used for canonical URLs, structured data and the sitemap.

## Structure

- `app/page.tsx` — homepage
- `app/content.ts` — page content and information architecture
- `app/[...slug]/page.tsx` — topic and industry pages
- `app/globals.css` — visual system and responsive styles
- `public/og.png` — social sharing image

© Softbridge Solutions. All rights reserved.
