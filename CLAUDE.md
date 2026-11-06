# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

# Proje notları: denizliseo.com

- Astro 7 statik site. Node ≥ 22.23 gerekir; bulut oturumunda `npx -y -p node@24 npm run build` kullan.
- Tasarım (v7): ana sayfa, sahibinin verdiği referansın (Trebuto, koyu ajans sitesi) düzenine ve renklerine göre kuruldu; büyüteç animasyonu (hero, lens bölümü) ve footer sahibinin ilk taslağındaki hâliyle kaldı. Siyah zemin (#0b0e13), koyu gri kartlar (#17171c), vurgu: pembe (#d82068, koyu zeminde yazı #ff5b97), turuncu (#f05a1e / #ff8a4c), mor (#8a1fe0 / #b57bff); Sayfa baştan sona koyu: krem/beyaz zemin ve renk geçişi YOK (“Birinci sayfa tesadüf değil” bölümü Kasım 2026'da sahibinin isteğiyle kaldırıldı). Sarı ve italik serif vurgu KALDIRILDI: tek yazı tipi ailesi Archivo; vurgu kelimesi aynı yazı tipinde, italik değil, pembe. Bölüm başlıkları büyük harf (Türkçe), ortalı, altında kısa pembe çizgi; başlıklar en fazla iki satır (telefonda daha küçük adım). Marka adı **Denizli SEO**. Butonlar büyük hap: ana buton pembe/beyaz yazı, çubukta pembe çerçeveli, turuncu (koyu yazı), beyaz (sohbet bandı). Ana eylem her yerde “Ücretsiz SEO analizi iste” ve WhatsApp'ı yazılı mesajla açar (`WA_ANALYSIS`, `CTA_LABEL` in `src/data/site.ts`). Bölüm sırası: hero, lens, hizmet haritası (5 grup + “Bütün hizmetleri görün”), farkımız kartları, süreç, sekmeli proje karuseli, sohbet bandı, biz kimiz (boş büyüteç halkası), Google puanı, markalar, 3D harita (solda İşiniz/İlçeniz/anahtarlar, sağda harita kartı, başlıksız), SSS, form, footer. Güven öğesi yalnızca gerçek proje ekran görüntüleri ve Google puanı (5,0, 28 yorum, Ekim 2026); referanstaki müşteri yorumu, ortak logo ve “+400 müşteri” KOPYALANMADI. Eyebrow yok, monospace yok, 13px altı metin yok. Örnek içerik “Örnek gösterim” diye etiketli. Kod: `src/layouts/Home.astro`, `src/styles/home.css` (jeton, çubuk, hero, lens, footer) ve `src/styles/home-sections.css` (diğer bölümler), `src/components/home/*`, `src/scripts/home/*` (`stage.ts` 3D sahne, `choreo.ts` kamera kareleri + `lensAnchor` (büyüteç lens bölümünden sonra ekran uzayında gezer, “Biz kimiz” halkasına yerleşir), `search.ts` (hero arama kutusu), `projects.ts`, `denizli.ts`), veri `src/data/home.ts`. Hareket azaltılmışsa sabit düzen, WebGL yoksa sayfa değişmeden çalışır. Tasarım sistemi `DESIGN.md`, ürün bağlamı `PRODUCT.md`, ana sayfa yönü `.impeccable/surfaces/`.
- Harita bölümü (`src/components/home/DenizliMap.astro`, `src/scripts/home/denizli.ts`): Türkiye (81 il, `src/data/turkey-map.json`, `python3 scripts/build-turkey-map.py <geoBoundaries-TUR-ADM1_simplified.geojson>` ile; veri `media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/TUR/ADM1/` altından) kaydırdıkça Denizli iline yakınlaşır (SVG `viewBox` daralır), sonra gerçek 3D kabartmaya (`src/scripts/map3d.ts`, 19 ilçe, OSM sınırları + AWS yükseklik) geçer; ilçe adları görünür. Başlık, form, anahtar ve sıra sayısı YOK (sıra modeli ve `rank.ts` kaldırıldı). Hareket azaltılmışsa/JS yoksa düz harita ve kabartma afişi iki kart yan yana. Afiş `public/map/denizli-3d.webp` yeniden üretilecekse: yerel sunucuda `reducedMotion` ile açıp `.dmap-3d` öğesinin ekran görüntüsünü al (1158×924). İletişim sayfası `placeMode` ile tek ilçeyi işaretler.
- Renk ve yazı tokenları `src/styles/home.css`; bölümler `home-sections.css`; iç sayfalar `inner.css`. İç sayfalar (4 hizmet sayfası `[service].astro`, hakkımızda, blog, makale, iletişim, 404) `src/layouts/Page.astro` ile ana sayfanın sistemini kullanır (3D sahne yok): `Banner`, `Cycle` (adım adım kartlar), yay şeklinde hizmet listesi, `SerpMock`/`VitalsCard`/`ReportChart` örnek parçaları, `PlaceMap` (iletişimde ofis, 3D). Tek font: Archivo (`public/fonts/archivo-*.woff2`). Eski açık sistem (Stack Sans, global.css, Base.astro) kaldırıldı. Türkçe karakterler test edildi.
- İçerik `src/data/` ve `src/content/blog/` altında. Uydurma kanıt yok: müşteri yorumu, istatistik, sıralama garantisi ya da ödül yazma. Rakam yalnızca kaynağı varsa.
- Görsel eklerken lisansı doğrula ve kaynağını sayfada belirt. Harita verisinin atfı (© OpenStreetMap katkıda bulunanlar) haritada ve sayfa sonunda kalmalı.
- Büyüteç yolculuğu: `stage.ts` iki canvas çizer: `#stage` (arka plan: toz, bağlantı ağı, hero ve lens bölümündeki büyüteç) ve `#lens-front` (yalnızca büyüteç; içeriğin üstünde, `pointer-events: none`, yalnızca büyüteç kutusunda çizilir: scissor). Yol kesintisizdir (`lensAnchor(y)` in `choreo.ts`): lens bölümündeki dalış sırasında (%76) arka plan büyüteci gizlenir, ön büyüteç aynı boyutta devralır (ekrandan büyük halka), küçülüp kenara uçar, bölümler boyunca kenardan kenara gezer, “Biz kimiz” halkasına (`.about-lens`, canlı konum) yerleşir, bırakır ve sayfa sonuna kadar sürer; telefonda da görünür (daha küçük). Anchor `main.ts`'te yumuşatılır (devir anında yumuşatma atlanır). WebGL yoksa ya da hareket azaltılmışsa halkada statik marka büyüteci görünür. Piksel oranı: arka plan ≤1,3, ön katman ≤1,75.
- Hizmetler (Kasım 2026): 5 hizmet `src/data/services.ts` (yerel-seo, teknik-seo, icerik-seo, backlink-hizmeti, web-tasarim) + `/hizmetler/` özet sayfası; çubuktaki “Hizmetler” bağlantısı `/hizmetler/`. Backlink metni satın alınmış bağlantıyı, özel blog ağını ve hacklink'i açıkça reddeder.
- SEO/GEO katmanı: `Head.astro` (ProfessionalService + Venti Organization + Person + WebSite grafiği; sayfa başına OG görseli), `robots.txt.ts` (arama ve yapay zekâ botlarına açık), `llms.txt.ts`, `rss.xml.ts`, `astro.config.mjs` (sitemap: blog için gerçek lastmod). E-E-A-T: `/editoryal-ilkeler/`, hakkımızda kurucu bölümü (kaynak: ventiajans.com/hakkimizda), yazı altında yazar/kaynak kutusu, yazıların sonunda doğrulanmış Google kaynakları. Blog ve OG görselleri `scripts/make-images.cjs` ile tasarım sisteminden çizilir (`NODE_PATH=$(npm root -g) node scripts/make-images.cjs`); her yazının `public/blog/<id>.jpg` ve `public/og/blog-<id>.jpg` görseli ve `imageAlt` alanı olmalıdır. Yazı başlığı ≤60 karakter.

## Komutlar

Bulut oturumunda Node 22.22 geliyor, proje ≥ 22.23 istiyor; komutları `npx -y -p node@24` ile çalıştır:

```bash
npx -y -p node@24 npm ci          # bağımlılıklar
npx -y -p node@24 npm run dev     # http://localhost:4321
npx -y -p node@24 npm run build   # dist/ (24 sayfa + sitemap, rss, llms.txt)
npx -y -p node@24 npm run check   # astro check: 0 hata beklenir
```

Test paketi yok. Doğrulama = `build` + `check` temiz; görsel değişikliklerde Playwright ile telefonda (390px) ve masaüstünde ekran görüntüsü al.

## Yayın

Güzel Hosting (cPanel). `dist/` içeriği yüklenir; `public/.htaccess` https + www'suz tek 301, sonu `/` ile biten adresler, 404 sayfası, güvenlik ve önbellek başlıklarını ayarlar. Yayından sonra `curl -sI http://www.denizliseo.com/yerel-seo` tek 301 ile `https://denizliseo.com/yerel-seo/` adresine gitmeli.

## İşletme kimliği

Google İşletme Profili **Venti Dijital Ajans** adına (7/24 açık). Şemada yerel işletme (adres, telefon, harita, saatler) Venti düğümündedir; Denizli SEO, Venti'nin markası olan bir Organization'dır (`src/components/Head.astro`). Aynı adreste "Denizli SEO" adına ikinci bir profil açılmaz.

## Blog yazımı

Yeni SEO/GEO yazıları için talimat: `docs/seo-yazi-talimati.md`. Doğrulanmış kaynaklar `docs/kaynaklar.md` dosyasında tutulur (varsa önce ona bak).

## Proje eklentileri ve skill'ler

`.claude/settings.json` iki eklentiyi açar: `claude-seo` (`/seo` komutları ve SEO ajanları) ve `andrej-karpathy-skills`. `.claude/settings.local.json` impeccable tasarım denetimi hook'larını çalıştırır. Proje skill'leri `.claude/skills/` altında: impeccable, design-taste-frontend, playwright-cli ve caveman ailesi.
