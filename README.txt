SOFTBRIDGE SOLUTIONS - VERCEL 404 FIX

Bu paket doğrudan Vercel'e yüklenebilir.

Düzeltilenler:
- Eksik app/layout.tsx geri eklendi.
- Eksik app/page.tsx geri eklendi.
- /en, /tr, /pt, /fr, /it, /us, /uk ve /ie route'ları geri eklendi.
- Middleware yalnızca kök URL'yi geçerli bir dil route'una yönlendiriyor.
- Var olmayan sayfalara giden eski redirectler güvenli /en adresine yönlendirildi.

Vercel ayarı:
- Framework Preset: Next.js
- Root Directory: boş bırak
- Build Command: npm run build
- Output Directory: boş bırak
- Node.js: 22.x
