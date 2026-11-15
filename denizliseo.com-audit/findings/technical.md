# Teknik

İlk tarama (14 Kasım 2026): sitemap, robots, kanonik, noindex yalnızca 404, kırık bağlantı yok. Lab: LCP 1,12/0,56 sn, CLS 0, taşma yok.

## İkinci tarama (15 Kasım 2026, 111 sayfa)

Her sayfada denetlenenler: `lang`, charset, viewport, başlık (≤60), açıklama, kanonik = adres, og:url = kanonik, og:image dosyası var, twitter:card, tek h1, başlık sırası atlaması, iç bağlantı ve dosya hedefleri, sonu `/` ile bitmeyen iç bağlantı, `http://` kaynak, `target=_blank` + `noopener`, görsellerde alt ve boyut, head'de engelleyici betik. Sitemap ile dizine açık sayfalar bire bir (110 = 110); 91 yazıda gerçek `lastmod`; rss 91 öğe.

Bulunan ve düzeltilenler:

- **Örnek adresler gerçek bağlantıya dönüşmüştü.** Üç yazıda tabloya ve metne yazılan örnek adresler (`alanadi.com`, `ornek.com`, tırnak içinde `http://`) otomatik bağlantı olmuş; biri bozuk (`http://”`), diğerleri ilgisiz gerçek alan adlarına çıkıyordu. Satır içi kod yapıldı; metin değişmedi.
- **`.htaccess` iki adımlı yönlendirme.** `http://www.denizliseo.com/yerel-seo` önce https + www'suz adrese, sonra `/` ekli adrese gidiyordu (iki 301). Kuralların sırası değişti: önce `/` kuralı son adresi kendisi yazar, tek 301. Yerelde Apache yok; yayından sonra kontrol listesindeki curl testi doğrular.
- **Karakter kümesi.** `AddDefaultCharset UTF-8` eklendi: robots.txt, llms.txt ve beslemeler Türkçe harf taşıyor.

Açık kalan (yalnızca canlıda ölçülür): güvenlik başlıkları, sıkıştırma, gerçek Core Web Vitals. İçerik güvenlik politikası (CSP) yok; statik sitede isteğe bağlı.
