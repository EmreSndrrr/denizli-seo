---
title: "Web Sitesi Yenileme: SEO Kaybetmeden Nasıl Yapılır?"
description: "Web sitesi yenilerken SEO kaybı nasıl önlenir? Eski-yeni adres eşlemesi, 301 yönlendirme, içerik koruma, test ortamı ve yayın sonrası izleme adımları."
date: 2026-11-12
service: web-tasarim
imageAlt: "Eski sitenin sayfalarından yeni sitenin sayfalarına giden yönlendirme okları"
---

Siteyi yenilerken en büyük risk, adreslerin (URL) değişip eski adreslerin yönlendirilmemesidir. SEO kaybını azaltmak için: eski sitenin tüm önemli sayfalarını listeleyin, her birine yeni adres eşleyin, kalıcı değişiklikler için 301 yönlendirmesi kurun, iyi çalışan içeriği koruyun, test ortamını arama motorlarına kapalı tutun ve yayından sonra Search Console’da izleyin. Google, URL değişikliği yapan site taşımalarında URL eşlemesi hazırlanmasını önerir; yine de sıralamanın aynı kalacağını garanti etmek mümkün değildir.

Yeni tasarım güzel olabilir; ama eski adresler 404 verirse bağlantıları ve ziyaretçileri kaybedersiniz. Alan adı değişikliği için [alan adı değiştirirken SEO kaybı](/blog/alan-adi-degistirirken-seo-kaybi-nasil-onlenir/), genel taşıma için [site taşıma ve 301](/blog/site-tasima-301-yonlendirme/) yazılarına bakabilirsiniz.

## Google ne diyor?

Google’ın site taşıma rehberi, HTTP’den HTTPS’e geçiş ve alan adı ya da URL değişikliklerini site taşıma örnekleri olarak ele alır ve URL eşlemesi hazırlamayı önerir ([site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Yönlendirme rehberi, kalıcı (301/308) yönlendirmeleri hedefin standart sayfa olması yönünde bir sinyal olarak tarif eder ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).

## Adım adım yenileme planı

1. **Eski siteyi envantere çıkarın.** Tüm sayfaların listesi (site haritası, tarama aracı, Search Console).
2. **Önemli sayfaları belirleyin.** En çok ziyaret alan, bağlantı alan, iş getiren sayfalar.
3. **Adres eşlemesi hazırlayın.** Eski adres → yeni adres tablosu.
4. **İçeriği koruyun.** İyi sıralanan sayfaların metnini gereksiz yere silmeyin.
5. **Test ortamını kapalı tutun.** Yayına çıkmadan taranmasın.
6. **Başlık, açıklama, H1 ve iç bağlantıları taşıyın.**
7. **Yayın günü yönlendirmeleri kurun.** 301.
8. **Site haritasını güncelleyip gönderin.**
9. **İzleyin.** Search Console’da 404’ler, tarama hataları, performans.
10. **Düzeltin.** Unutulan adresler için yönlendirme ekleyin.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Eşleme tablosu örneği

| Eski adres | Yeni adres | İşlem |
| --- | --- | --- |
| /hizmetlerimiz/klima-bakim | /hizmetler/klima-bakimi/ | 301 |
| /hakkimizda.html | /hakkimizda/ | 301 |
| /eski-kampanya | (karşılığı yok) | 404/410 ya da yakın sayfaya |
| /iletisim.php | /iletisim/ | 301 |

Karşılığı olmayan sayfalar için bkz. [404 hatası: düzeltmeli mi, yönlendirmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/)

## Yayın sonrası izleme

Search Console’da yayından sonraki günlerde dizin kapsamı ve tarama hatalarını izleyin; ani düşüşlerde nedenleri sırayla kontrol edin ([arama trafiğindeki düşüşlerde hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)). Trafik dalgalanması için [trafik düşüşü nasıl teşhis edilir?](/blog/trafik-dususu-nasil-teshis-edilir/) yazısına bakın.

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık yapılan hatalar

- **Adres eşlemesi yapmamak:** Önce liste çıkarın
- **Hepsini ana sayfaya yönlendirmek:** Konuya uygun yeni sayfaya
- **Test ortamının dizine eklenmesi:** Arama motorlarına kapatın
- **Metinleri tamamen yeniden yazmak:** İyi çalışanı koruyun
- **Başlık ve açıklamaları kaybetmek:** Taşıyın ya da iyileştirin
- **İzlememek:** İlk haftalarda sık kontrol

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir otelin eski sitesinde 60 sayfa var. Yenilemeden önce tüm adresler listeleniyor, 18 önemli sayfa için yeni adres eşleniyor, birleştirilen sayfalar uygun yeni sayfaya 301’leniyor; karşılığı kalmayan 12 eski kampanya sayfası 404 bırakılıyor. Yayından sonra Search Console’da iki hafta boyunca hatalar izleniyor.

## Denizli SEO bu konuda nasıl yardımcı olur?

[SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- eski sitenizi envantere çıkarır, adres eşlemesi ve 301 planını hazırlarız,
- yeni sitede başlık, açıklama, iç bağlantı ve içerik taşımasını denetleriz,
- yayından sonra Search Console ile izler, unutulan adresleri düzeltiriz,
- yapılan işi yazılı raporlarız; sıralamanın aynı kalacağını garanti etmeyiz.

Yenileme planınızı birlikte yapmak isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### Yenilemede sıralama düşer mi?

Her zaman düşmez; ama adres ve içerik değişiklikleri riskli olabilir. Kesin söz veremeyiz.

### Yönlendirmeleri ne kadar süre tutmalıyım?

Eski adresler bağlantı alıyorsa uzun süre; kesin süre için genel bir kural yok.

### Test sitesini nasıl kapatırım?

Erişimi parola ya da erişim kısıtıyla korumak en güvenlisidir.

## Kaynaklar

- [Google Search Central: URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Search Central: Google Arama trafiğindeki düşüşlerle ilgili hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)
