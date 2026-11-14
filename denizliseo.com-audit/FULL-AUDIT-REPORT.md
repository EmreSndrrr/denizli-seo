# denizliseo.com SEO Denetimi (yerel derleme)

**Kapsam:** `dist/` çıktısı, 103 sayfa (91 blog yazısı), `http://127.0.0.1:8799` üzerinden. Site henüz yayında değil; canlı veri (CrUX, Search Console, GBP, geri bağlantı, sunucu başlıkları) bu raporda YOK.
**İşletme türü:** Yerel hizmet / ajans (Denizli), blog yayıncılığı ile.

## SEO Sağlık Puanı: 85 / 100 (yayın öncesi, yerel ölçüm)

| Kategori | Ağırlık | Puan |
|---|---|---|
| Teknik SEO | 22% | 88 |
| İçerik kalitesi | 23% | 76 |
| Sayfa içi SEO | 20% | 88 |
| Şema | 10% | 90 |
| Performans | 10% | 90 |
| Yapay zekâ arama hazırlığı | 10% | 85 |
| Görseller | 5% | 90 |

Puan yalnızca kodun kendisini ölçer. Yayından sonra alan adı otoritesi, indeks durumu ve gerçek Core Web Vitals puanı değiştirir.

## Temiz çıkanlar
- 103 sayfada `lang="tr"`, tek h1, og:image, twitter:card; eksik alt metin yok.
- Başlıklar 44–60, açıklamalar 121–167 karakter; yinelenen başlık/açıklama yok.
- Sitemap 102 URL (404 hariç), yalnızca 404 `noindex`, kanonikler `https://denizliseo.com`.
- Kırık iç bağlantı, çözülmeyen `@id`, yer tutucu, localhost, http bağlantı: yok.
- robots.txt (12 user-agent, Sitemap satırı), llms.txt, rss.xml mevcut; yapay zekâ botlarına açık.
- Lab ölçümü (Chromium, yerel): LCP ana sayfa 1,12 sn (masaüstü) / 0,56 sn (telefon), CLS 0, yatay taşma yok. three.js (~135 KB gzip) ilk boyamadan sonra yükleniyor.

## Bulgular

### Yüksek
**H1. Yayından önce yazıların okunması.** 91 yazının çoğunu sahibi okumadı; `/editoryal-ilkeler/` her metnin kontrol edildiğini söylüyor. Kontrol edilmemiş toplu içerik hem E-E-A-T hem "ölçekli düşük kalite içerik" riski taşır. Çözüm: yazıları okuyun, olgu iddialarını (rakam, tarih, Google kuralı) doğrulayın, emin olmadıklarınızı `draft` yapıp yayından çıkarın. Başarısızlık kontrolü: Search Console'da "Taranmış, dizine eklenmemiş" oranı yüksekse.

### Orta
**M1. ventiajans.com ile konu çakışması.** 7 yazı iki sitede aynı adreste (seo-nedir, backlink-nedir, wordpress-seo, e-ticaret-seo, kurumsal-seo, gorsel-seo, seo-fiyatlari). Metin karşılaştırması: 6 kelimelik ortak öbek 0–5, yani kopya içerik YOK. Ama aynı niyet için iki sayfa Google'da birbirini yiyebilir. Çözüm: Denizli açısını başlığa ve girişe belirgin yazın (örn. "Denizli'de SEO fiyatları"), karşılıklı iç bağlantı verin, jenerik konuyu tek sitede tutmayı düşünün.
**M2. /blog/ tek sayfada 91 kart.** 146 KB HTML, sayfalama ve konu merkezi yok. Çözüm: hizmete göre kategori sayfaları (yerel-seo, teknik-seo…) ve sayfalama.
**M3. Zayıf iç bağlantı.** Hiçbir sayfa yetim değil ama bazı yazılar yalnızca /blog/'dan 1 bağlantı alıyor (emlakcilar-icin-seo-ilce-ve-mahalle-aramalari, kategori-sayfasi-metni-nasil-yazilir, kurumsal-seo, kuyumcular-icin-yerel-seo-denizli-ornegi, musteri-yorumlari-siteye-nasil-eklenir). Çözüm: yazı sonunda "ilgili yazılar" ve hizmet sayfasından yazıya bağlantı.
**M4. Yeni alan adı, sıfır otorite.** Geri bağlantı yok. Çözüm: ventiajans.com'dan bağlantı, Google İşletme Profili'nde web sitesi alanı, yerel dizinler.
**M5. Sunucu başlıkları doğrulanamadı.** `.htaccess` kuralları cPanel'de yerel test edilemez. Yayından sonra `docs/yayin-kontrol-listesi.md` curl testlerini çalıştırın.

### Düşük
- **L1.** `areaServed` 19 ilçe girdisi her sayfada tekrar ediyor (~4,8 KB JSON-LD/yazı). Yazı sayfalarında kaldırılabilir; hizmet ve ana sayfada kalsın.
- **L2.** Birkaç açıklama 160 karakteri aşıyor (SERP'te kesilebilir).
- **L3.** `/iletisim/` 129 kelime: iletişim sayfası için yeterli, sorun değil.

### Bilgi
- FAQPage (7 sayfa): Google SSS zengin sonuçlarını Mayıs 2026'da kaldırdı. Kalsın, kaldırmaya gerek yok; yeni SERP faydası beklemeyin.
- Yerel işletme şeması Venti düğümünde; "Denizli SEO" adına ikinci GBP açılmamalı (aynı adres).

## Yerel SEO
NAP (Venti Dijital Ajans, 0544 596 56 22) tutarlı; ProfessionalService, GeoCoordinates, çalışma saatleri var. Yayın sonrası GBP'deki web sitesi alanını kontrol edin ve Venti'den bağlantı ekleyin.

## Yapılamayanlar (site yayında değil)
CrUX saha verisi, GSC indeks durumu, GA4, geri bağlantı profili, SERP sıralamaları, güvenlik başlıklarının canlı testi.
