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
- Tasarım (v5): kullanıcının referans siteleri (deltavdigital.com, webfx.com, spinxdigital.com, thryv.com) örnek alındı; açık zemin, profesyonel ajans görünümü. Beyaz ve açık gri bantlar, harita kartı / “neden biz” bandı / kapanış bandı / alt bilgi lacivert (#0b1d36), tek mavi eylem (#1d5fe0), turuncu yalnızca ziyaretçinin ilçesi. Stack Sans Headline 700 başlıklar, 10px köşeli butonlar (dolu + çerçeveli), 1px çerçeveli ve hafif gölgeli beyaz kartlar, çizgi ikonlar (`src/components/Icon.astro`). Ana eylem her yerde “Ücretsiz SEO analizi iste” (ilk analiz ücretsiz, kullanıcı onayladı) ve WhatsApp’ı yazılı mesajla açar (`WA_ANALYSIS`, `CTA_LABEL` in `src/data/site.ts`). Güven öğesi olarak yalnızca proje ekran görüntüleri ve Google puanı (5,0, 28 yorum, Ekim 2026). Ana sayfada sol sütunda başlık sonra adım paneli, sağda lacivert kartta 3D harita; kaydırdıkça panel değişir. Kartlar, çerçeveler ve gölgeler kullanıcının referansları gereği bilinçli (taste-skill ev kuralının istisnası). Hâlâ geçerli: eyebrow yok, gradient yok, monospace yok, 01/02 numaralandırma yok, başlıklar en fazla iki satır (ana başlık sütuna göre `cqi` ile boyutlanır). Tasarım sistemi `DESIGN.md`, ürün bağlamı `PRODUCT.md`, ana sayfa yönü `.impeccable/surfaces/`.
- Sitenin fikri: Denizli’nin gerçek 3D haritası (19 ilçe, OSM sınırları + yükseklik). Her ilçede bir sütun = örnek arama sırası; hizmetler açıldıkça sütunlar yükselir. Kod: `src/scripts/map3d.ts` (three.js), `src/scripts/rank.ts` (örnek model), `src/components/MapStage.astro`, `MapStory.astro`. Harita afişi (`public/map/denizli-3d.webp`, WebGL yoksa görünür) canlı kartın oranında (972×1080) üretilir.
- Renk ve yazı tokenları `src/styles/global.css` içinde. Fontlar: Stack Sans Headline (başlık, 300) ve Stack Sans Text (metin), `public/fonts/` altında, Türkçe karakterler test edildi.
- İçerik `src/data/` ve `src/content/blog/` altında. Uydurma kanıt yok: müşteri yorumu, istatistik, sıralama garantisi ya da ödül yazma. Rakam yalnızca kaynağı varsa.
- Görsel eklerken lisansı doğrula ve kaynağını sayfada belirt. Harita verisinin atfı (© OpenStreetMap katkıda bulunanlar) haritada ve sayfa sonunda kalmalı.

## Komutlar

Bulut oturumunda Node 22.22 geliyor, proje ≥ 22.23 istiyor; her komutu `npx -y -p node@24` ile çalıştır:

```bash
npx -y -p node@24 npm ci          # bağımlılıklar
npx -y -p node@24 npm run dev     # http://localhost:4321
npx -y -p node@24 npm run build   # dist/ (11 sayfa + sitemap)
npx -y -p node@24 npm run check   # astro check: tip kontrolü, 0 hata beklenir
```

Test paketi yok. Doğrulama = `build` + `check` temiz geçmeli; görsel değişikliklerde `.claude/skills/playwright-cli` ile sayfayı açıp ekran görüntüsü al.

## Mimari

- **Veri → sayfa:** Metinler bileşenlerde değil `src/data/*.ts` içinde. `src/pages/[service].astro`, `SERVICES` dizisinden `getStaticPaths` ile dört hizmet sayfasını üretir; yeni hizmet = `services.ts`'e kayıt + `[service].astro` içindeki slug'a bağlı haritalar (`icons`, `workFor`, `presets`). Blog `src/content.config.ts` şemasıyla doğrulanır (başlık ≤ 60, açıklama ≤ 170 karakter, `visual: serp | chart`).
- **SEO / JSON-LD:** `src/layouts/Base.astro` canonical, OG/Twitter etiketlerini ve işletmeyi (`ProfessionalService`, `@id: SITE.url/#isletme`) tek yerde tanımlar. Sayfalar kendi düğümlerini `jsonld` prop'u ile verir ve işletmeye `@id` ile bağlanır; yeni sayfada bu deseni izle. `trailingSlash: 'always'`: iç linkler `/` ile bitmeli.
- **İstemci JS:** Tek giriş `src/scripts/site.ts` (Base'den yüklenir). Bileşenler davranışı `data-*` öznitelikleriyle işaretler (ör. `MapStage.astro`: `data-stage`, `data-preset`, `data-map-canvas`); `site.ts` bunları bulup three.js haritasını (`map3d.ts`) ve GSAP/Lenis hareketini (`motion.ts`) gerektiğinde dinamik yükler. Her bileşen JS'siz de bitmiş görünmeli; `prefers-reduced-motion` açıkken hareket kapalı.
- **Sıra modeli:** `rank.ts` ilçe başına örnek sıra hesaplar (`MapState`: profile/speed/content/pages). Hizmet sayfalarındaki `presets` bu durumu ayarlar. Gerçek ölçüm değil; sayfada "örnek gösterim" yazısı kalmalı.
- **Tekrarlanan sabit:** WhatsApp numarası hem `src/data/site.ts` (`SITE.whatsapp`) hem `src/scripts/site.ts` (`PHONE`) içinde; değişirse ikisini de güncelle.

## Proje skill'leri ve agent'ları

- `.claude/skills/impeccable` (+ `.claude/agents/impeccable-*`): tasarım işleri; ayarları `.impeccable/`.
- `.claude/skills/design-taste-frontend` (taste-skill, `skills-lock.json`): ön yüz tasarım kuralları; yön `.taste-skill/direction.json`.
- `.claude/skills/playwright-cli`: tarayıcıda kontrol ve ekran görüntüsü.
