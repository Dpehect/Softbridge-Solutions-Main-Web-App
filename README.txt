SOFTBRIDGE SOLUTIONS — VERCEL BUILD FIX

Bu paket aşağıdaki sorunları düzeltir:
- Eksik App Router layout ve sayfa route'ları
- / -> /en yönlendirmesindeki 404
- Eski postcss.config.mjs dosyasının çağırdığı eksik @tailwindcss/postcss paketi
- Next.js 16 middleware deprecation uyarısı (proxy.ts kullanılır)

ÖNEMLİ:
GitHub deposuna yüklerken mevcut dosyaların üzerine yazın.
Eski middleware.ts dosyasını GitHub'dan silin; bu pakette onun yerine proxy.ts vardır.
postcss.config.mjs dosyasını mutlaka bu paketteki sürümle değiştirin.
Ardından Vercel'de Redeploy yaparken "Use existing Build Cache" seçeneğini kapatın.
