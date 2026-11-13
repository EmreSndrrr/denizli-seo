---
title: "Menü ve Site Yapısı Nasıl Planlanır?"
description: "Menü ve site yapısı nasıl planlanır? Ana menü öğeleri, hizmet hiyerarşisi, breadcrumb, URL düzeni ve müşterinin üç tıkta ulaşması için pratik planlama adımları."
date: 2026-11-12
service: web-tasarim
imageAlt: "Ana menü ve alt sayfa hiyerarşisini gösteren site yapısı şeması"
---

İyi bir menü, müşterinin aradığına birkaç tıklamada ulaşmasını sağlar. Ana menüde beş altı öğe (hizmetler, hakkımızda, blog, iletişim gibi), hizmetler altında ana hizmet sayfaları, her sayfadan iletişime ulaşım ve sade bir URL düzeni yeterlidir. Google, önemsediğiniz her sayfaya sitenizdeki en az bir başka sayfadan bağlantı verilmesini ve URL’lerde anlaşılır, tutarlı bir düzen kullanılmasını önerir.

Site yapısı, ziyaretçi için yol haritası, arama motoru için sayfalar arası ilişki anlatımıdır. Küçük sitede bu, 20 dakikalık bir kâğıt çalışmasıyla çözülebilir. İç bağlantılar için [iç bağlantı stratejisi](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/), sayfa listesi için [kurumsal web sitesi kaç sayfa olmalı?](/blog/kurumsal-web-sitesi-kac-sayfa-olmali/) yazılarına bakabilirsiniz.

## Menü nasıl olmalı?

| İlke | Uygulama |
| --- | --- |
| Az öğe | Ana menüde beş altı öğe |
| Anlaşılır isim | “Hizmetlerimiz”, “İletişim”; yaratıcı ama belirsiz isimlerden kaçının |
| Önem sırası | Müşterinin en çok aradığı önce |
| Tutarlılık | Tüm sayfalarda aynı menü |
| Mobilde kolay kullanım | Büyük dokunma alanı, açılır menü |
| Eylem çağrısı | Telefon ya da iletişim her zaman erişilebilir |

Google’ın bağlantı rehberi, bağlantıların gerçek `<a href>` öğeleri olmasını ve bağlantı metninin açıklayıcı olmasını önerir ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Menü öğeleri de bu kurala tabidir.

## Örnek yapı (hayalî bir klima servisi için)

```
Ana sayfa
 ├─ Hizmetler
 │   ├─ Klima bakımı
 │   ├─ Klima montajı
 │   └─ Klima tamiri
 ├─ Hakkımızda
 ├─ Blog
 └─ İletişim
```

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım planlama

1. **Hizmetleri listeleyin.** Her ana hizmet bir sayfa.
2. **Gruplayın.** Benzer olanları aynı başlık altında toplayın.
3. **Hiyerarşiyi çizin.** Ana sayfa → hizmetler → hizmet sayfaları.
4. **Menüyü kısaltın.** Beş altı ana öğe.
5. **URL düzenini belirleyin.** Mantıklı ve kısa. Google, kelimeleri ayırmak için kısa çizgi önerir ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).
6. **İç bağlantıları ekleyin.** Hizmet sayfaları ve ilgili yazılar birbirine bağlansın.
7. **Breadcrumb düşünün.** Çok sayfalı sitelerde “Ana sayfa › Hizmetler › Klima bakımı”.
8. **Mobilde test edin.** Tek elle kullanım.

## URL düzeni

- **/hizmetler/klima-bakimi/:** /index.php?id=37
- **/blog/klima-bakimi-yilda-kac-kez/:** /blog/Klima_Bakimi%20Yazisi
- **Kısa ve tutarlı:** Uzun, rastgele, her sayfada farklı düzen

Adresleri sonradan değiştirmek yönlendirme gerektirir; baştan doğru planlayın, bkz. [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık yapılan hatalar

- **Menüde çok fazla öğe:** En önemli beş altı öğe
- **Müşterinin kullanmadığı kelimeler:** Müşterinin dili
- **Hizmet sayfalarının menüden ulaşılamaz olması:** Ana menüye ekleyin
- **İletişimin gizli kalması:** Her sayfadan görünür
- **Rastgele URL’ler:** Tutarlı düzen
- **JavaScript ile çizilen, taranamayan menü:** Gerçek bağlantılar

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klinik, sitesinde on iki öğeli bir menüyle başlıyor. Planlamayla menü beş öğeye iniyor: Tedaviler (alt menüde dört ana tedavi), Ekibimiz, Blog, Hakkımızda, İletişim. URL’ler kısa ve tutarlı hâle getiriliyor; her tedavi sayfasından ilgili blog yazılarına ve iletişime bağlantı veriliyor.

## Denizli SEO bu konuda nasıl yardımcı olur?

[SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- hizmetlerinize göre menü, sayfa hiyerarşisi ve URL planı hazırlarız,
- menü ve iç bağlantıları gerçek, taranabilir bağlantılarla kurarız,
- yetim ve zor ulaşılan sayfaları tespit ederiz,
- yapılan işi yazılı raporlarız; sıralama garantisi vermeyiz.

Site yapınızı birlikte planlamak isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### Menüde kaç öğe olmalı?

Sabit kural yok; çoğu küçük işletme için beş altı ana öğe yeterlidir.

### Alt menü SEO’yu etkiler mi?

Alt menüdeki bağlantılar gerçek bağlantıysa sayfaların bulunmasına yardımcı olur.

### Breadcrumb şart mı?

Şart değil; çok sayfalı sitelerde yol göstermek için faydalıdır.

## Kaynaklar

- [Google Search Central: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Google Search Central: Google Arama’da URL yapısı ile ilgili en iyi uygulamalar](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
