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
- Tasarım (v6): ana sayfa, sahibinin verdiği ön yüz taslağıdır ve olduğu gibi korunup geliştirildi. Koyu grafit (#0b0e13) zemin, tek sabit three.js sahnesi (krom büyüteç + bağlantı ağı), sonuç sayfası bölümünde krem kağıt (#f3f2ec), tek eylem rengi sarı (#eedc45), mavi yalnızca bağlantı/ağ/ziyaretçinin ilçesi. Marka adı **Denizli SEO**. Tipografi: yalnızca iki aile; Archivo (değişken ağırlık+genişlik; başlık 760 @108%, buton 700 @106%, metin 400) ve Instrument Serif italik (başlıkta tek vurgu kelimesi). Monospace yok, eyebrow yok, 13px altı metin yok, başlıklar en fazla iki satır. Büyük, kalın hap butonlar; ana eylem her yerde “Ücretsiz SEO analizi iste” ve WhatsApp'ı yazılı mesajla açar (`WA_ANALYSIS`, `CTA_LABEL` in `src/data/site.ts`). Güven öğesi yalnızca gerçek proje ekran görüntüleri ve Google puanı (5,0, 28 yorum, Ekim 2026). Taslaktaki uydurma vaka çalışmaları, sayısal rozetler, TO yüzdeleri ve “24 saat içinde dönüş” sözleri bilerek kaldırıldı; örnek içerik “Örnek gösterim” diye etiketli. Kod: `src/layouts/Home.astro`, `src/styles/home.css`, `src/components/home/*`, `src/scripts/home/*` (`stage.ts` 3D sahne, `choreo.ts` kamera kareleri, `serp.ts`, `reel.ts`, `denizli.ts`), veri `src/data/home.ts`. Sahne three.js'i yük sonrası içe aktarır; hareket azaltılmışsa sabit düzen, WebGL yoksa sayfa değişmeden çalışır. İç sayfalar (hizmetler, blog, hakkımızda, iletişim) hâlâ eski açık v5 sistemindedir (`src/styles/global.css`, `Base.astro`); ana sayfa sistemine taşınacak. Tasarım sistemi `DESIGN.md`, ürün bağlamı `PRODUCT.md`, ana sayfa yönü `.impeccable/surfaces/`.
- Sitenin fikri: Denizli’nin gerçek 3D haritası (19 ilçe, OSM sınırları + yükseklik). Her ilçede bir sütun = örnek arama sırası; hizmetler açıldıkça sütunlar yükselir. Ana sayfada `src/components/home/DenizliMap.astro` bölümü; kod: `src/scripts/map3d.ts` (three.js), `src/scripts/rank.ts` (örnek model), `src/scripts/home/denizli.ts`. İç sayfalarda `MapStage.astro` kullanılır. Harita afişi (`public/map/denizli-3d.webp`, WebGL yoksa görünür) 972×1080 üretilir.
- Renk ve yazı tokenları ana sayfada `src/styles/home.css`, iç sayfalarda `src/styles/global.css` içinde. Fontlar `public/fonts/` altında: ana sayfa Archivo + Instrument Serif italik; iç sayfalar Stack Sans Headline ve Stack Sans Text. Türkçe karakterler test edildi.
- İçerik `src/data/` ve `src/content/blog/` altında. Uydurma kanıt yok: müşteri yorumu, istatistik, sıralama garantisi ya da ödül yazma. Rakam yalnızca kaynağı varsa.
- Görsel eklerken lisansı doğrula ve kaynağını sayfada belirt. Harita verisinin atfı (© OpenStreetMap katkıda bulunanlar) haritada ve sayfa sonunda kalmalı.
