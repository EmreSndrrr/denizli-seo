# CLAUDE.md

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
- Tasarım (v7): ana sayfa, sahibinin verdiği referansın (Trebuto, koyu ajans sitesi) düzenine ve renklerine göre kuruldu; büyüteç animasyonu (hero, lens bölümü, sonuç sayfası bölümü) ve footer sahibinin ilk taslağındaki hâliyle kaldı. Siyah zemin (#0b0e13), koyu gri kartlar (#17171c), vurgu: pembe (#d82068, koyu zeminde yazı #ff5b97), turuncu (#f05a1e / #ff8a4c), mor (#8a1fe0 / #b57bff); krem kağıt (#f3f2ec) yalnızca sonuç sayfası bölümünde. Sarı ve italik serif vurgu KALDIRILDI: tek yazı tipi ailesi Archivo; vurgu kelimesi aynı yazı tipinde, italik değil, pembe. Bölüm başlıkları büyük harf (Türkçe), ortalı, altında kısa pembe çizgi; başlıklar en fazla iki satır (telefonda daha küçük adım). Marka adı **Denizli SEO**. Butonlar büyük hap: ana buton pembe/beyaz yazı, çubukta pembe çerçeveli, turuncu (koyu yazı), beyaz (sohbet bandı). Ana eylem her yerde “Ücretsiz SEO analizi iste” ve WhatsApp'ı yazılı mesajla açar (`WA_ANALYSIS`, `CTA_LABEL` in `src/data/site.ts`). Bölüm sırası: hero, lens, sonuç sayfası, hizmet haritası, farkımız kartları, süreç, sekmeli proje karuseli, sohbet bandı, biz kimiz, Google puanı, markalar, Denizli ilçeleri + 3D harita, SSS, form, footer. Güven öğesi yalnızca gerçek proje ekran görüntüleri ve Google puanı (5,0, 28 yorum, Ekim 2026); referanstaki müşteri yorumu, ortak logo ve “+400 müşteri” KOPYALANMADI. Eyebrow yok, monospace yok, 13px altı metin yok. Örnek içerik “Örnek gösterim” diye etiketli. Kod: `src/layouts/Home.astro`, `src/styles/home.css` (jeton, çubuk, hero, lens, sonuç, footer) ve `src/styles/home-sections.css` (diğer bölümler), `src/components/home/*`, `src/scripts/home/*` (`stage.ts` 3D sahne, `choreo.ts` kamera kareleri, `serp.ts`, `projects.ts`, `denizli.ts`), veri `src/data/home.ts`. `src/scripts/home/reel.ts` artık kullanılmıyor (silinebilir). Hareket azaltılmışsa sabit düzen, WebGL yoksa sayfa değişmeden çalışır. Tasarım sistemi `DESIGN.md`, ürün bağlamı `PRODUCT.md`, ana sayfa yönü `.impeccable/surfaces/`.
- Sitenin fikri: Denizli’nin gerçek 3D haritası (19 ilçe, OSM sınırları + yükseklik). Her ilçede bir sütun = örnek arama sırası; hizmetler açıldıkça sütunlar yükselir. Ana sayfada `src/components/home/DenizliMap.astro` bölümü; kod: `src/scripts/map3d.ts` (three.js), `src/scripts/rank.ts` (örnek model), `src/scripts/home/denizli.ts`. İç sayfalarda `MapStage.astro` kullanılır. Harita afişi (`public/map/denizli-3d.webp`, WebGL yoksa görünür) 972×1080 üretilir.
- Renk ve yazı tokenları `src/styles/home.css`; bölümler `home-sections.css`; iç sayfalar `inner.css`. İç sayfalar (4 hizmet sayfası `[service].astro`, hakkımızda, blog, makale, iletişim, 404) `src/layouts/Page.astro` ile ana sayfanın sistemini kullanır (3D sahne yok): `Banner`, `Cycle` (adım adım kartlar), yay şeklinde hizmet listesi, `SerpMock`/`VitalsCard`/`ReportChart` örnek parçaları, `PlaceMap` (iletişimde ofis, 3D). Tek font: Archivo (`public/fonts/archivo-*.woff2`). Eski açık sistem (Stack Sans, global.css, Base.astro) kaldırıldı. Türkçe karakterler test edildi.
- İçerik `src/data/` ve `src/content/blog/` altında. Uydurma kanıt yok: müşteri yorumu, istatistik, sıralama garantisi ya da ödül yazma. Rakam yalnızca kaynağı varsa.
- Görsel eklerken lisansı doğrula ve kaynağını sayfada belirt. Harita verisinin atfı (© OpenStreetMap katkıda bulunanlar) haritada ve sayfa sonunda kalmalı.
