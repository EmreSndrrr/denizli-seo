# Denizli SEO

[denizliseo.com](https://denizliseo.com) — Venti Dijital Ajans’ın SEO markası. Astro ile yapılmış statik site.

## Çalıştırma

Node 22.23 veya üstü gerekir (`.nvmrc`: 24).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne statik site
npm run preview  # derlenmiş siteyi yerelde açar
npm run check    # tip kontrolü
```

Claude Code bulut oturumunda makinedeki Node daha eski olabilir. O zaman komutları `npx -y -p node@24 npm run build` biçiminde çalıştırın.

## Yayına alma

Vercel, Netlify ya da Cloudflare Pages: derleme komutu `npm run build`, çıktı klasörü `dist`, Node sürümü 24.

Alan adı `https://denizliseo.com` (www’suz) olarak ayarlandı. `www.denizliseo.com` adresini buna 301 ile yönlendirin. Değiştirmek için `astro.config.mjs` içindeki `site` ve `src/data/site.ts` içindeki `url` alanını güncelleyin.

## İçerik nerede?

| Ne | Dosya |
| --- | --- |
| İşletme bilgileri (telefon, adres, WhatsApp) | `src/data/site.ts` |
| Dört hizmet sayfasının metinleri | `src/data/services.ts` |
| Ana sayfa sık sorulanlar | `src/data/faq.ts` |
| Venti projeleri | `src/data/projects.ts` |
| Blog yazıları | `src/content/blog/*.md` |
| Görseller ve lisans bilgileri | `src/assets/img/`, `src/data/images.ts` |
| Tasarım (renk, yazı, düzen, animasyon) | `src/styles/global.css` |

Yeni blog yazısı için `src/content/blog/` içine başlık, açıklama, tarih ve görsel anahtarı olan bir `.md` dosyası eklemek yeterli. Site haritası otomatik güncellenir.

## SEO altyapısı

- Her sayfada başlık, açıklama, canonical, Open Graph ve Twitter etiketleri
- schema.org: ProfessionalService (Venti Dijital Ajans’a bağlı), WebSite, Service, FAQPage, BreadcrumbList, Blog, BlogPosting, AboutPage, ContactPage
- `sitemap-index.xml` ve `robots.txt` derlemede üretilir
- Görseller AVIF/WebP olarak, ekran boyuna göre üretilir; fontlar sitenin kendisinden yüklenir

## Görseller

Fotoğraflar, gravürler ve video Wikimedia Commons’tan, lisanslarına uygun olarak kullanıldı. Liste `/gorsel-kaynaklari/` sayfasında. Proje görüntüleri Venti projelerinin yayındaki sitelerinden alınmış ekran görüntüleridir.
