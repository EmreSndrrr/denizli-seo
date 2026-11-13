---
title: "“Keşfedildi, Dizine Eklenmedi” Ne Anlama Gelir?"
description: "“Bulundu (Keşfedildi): şu anda dizine eklenmiş değil” ne demek? Taranmayı bekleyen sayfalar, sunucu yükü, iç bağlantı ve düzeltme adımları."
date: 2026-11-10
service: teknik-seo
imageAlt: "Taranmayı bekleyen sayfa kartları ve bir saat simgesi"
---

Google’ın Sayfa dizine ekleme raporundaki “Bulundu: şu anda dizine eklenmiş değil” durumu (İngilizce arayüzde “Discovered – currently not indexed”), sayfanın Google tarafından bulunduğunu ama henüz taranmadığını gösterir. Google’ın açıklamasına göre bu, tipik olarak Google’ın URL’yi taramak istemesine rağmen sitenin aşırı yüklenmesi beklendiği için taramayı başka zamana ertelemesidir; bu yüzden rapordaki son tarama tarihi boştur.

Bu durum, “Tarandı: şu anda dizine eklenmiş değil” ile karıştırılır; ama anlamları farklıdır: birinde sayfa taranmış ve dizine alınmamış, diğerinde sayfa hiç taranmamıştır. Bu yazıda “bulundu ama taranmadı” durumunun ne anlama geldiğini, olası nedenlerini ve neler yapabileceğinizi anlatıyoruz. Diğer durum için [Taranan, dizine eklenmeyen sayfalar](/blog/taranan-dizine-eklenmeyen-sayfalar-nedenleri/) yazımıza bakın.

## Bu durum ne anlama geliyor?

Google’ın Sayfa dizine ekleme raporu sayfasındaki açıklama şöyledir: sayfa, Google tarafından bulunmuş ama henüz taranmamıştır. Tipik olarak Google URL’yi taramak istemiş, ancak bu işlemin sitenin aşırı yüklenmesine neden olacağı beklendiğinden taramayı başka zamana almıştır. Bu nedenle rapordaki son tarama tarihi boştur ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).

Google’ın arama rehberi, işlemin üç aşamada işlediğini (tarama, dizine ekleme, sunma) ve her sayfanın her aşamadan geçmediğini söyler. “Bulundu” durumundaki sayfa, birinci aşamaya henüz girmemiştir.

## Tarandı ve Bulundu durumlarının farkı

| | Bulundu (Keşfedildi) | Tarandı |
| --- | --- | --- |
| Google sayfayı gördü mü? | Adresini biliyor | Sayfayı indirip inceledi |
| Taranma durumu | Henüz taranmadı | Tarandı |
| Son tarama tarihi | Boş | Dolu |
| Olası konu | Tarama önceliği, sunucu yükü, keşif | İçerik kalitesi, kopya, zayıf bağlantı |
| Ne yapmalı? | Taranabilirliği ve önemi artırın | İçeriği iyileştirin |

## Olası nedenler

Google nedenin tamamını sayfa bazında söylemez; aşağıdaki liste genel değerlendirmedir (yalnızca ilk madde Google’ın tarifine dayanır):

1. **Sunucu yükü kaygısı.** Google’ın tarifine göre tarama, sitenin aşırı yüklenmesi beklendiği için ertelenmiş olabilir. Sunucunuz yavaşsa ya da sık hata veriyorsa bu sizin için geçerli olabilir.
2. **Çok sayıda yeni sayfa.** Bir anda yüzlerce sayfa eklendiyse Google hepsini aynı anda taramayabilir.
3. **Sayfa zayıf bağlanmış.** İç bağlantı almayan sayfaları Google önemsiz görebilir.
4. **Site yeni.** Yeni sitelerin taranması zaman alabilir; Google, yeni bir sayfanın ya da sitenin taranıp dizine eklenmesinin bir haftayı bulabileceğini belirtir.
5. **Değersiz ya da kopya adres kalabalığı.** Parametreli, filtreli, etiketli yüzlerce adres taranma kapasitesini harcıyor olabilir.

## Adım adım ne yapmalısınız?

1. **Sayfanın önemini tartın.** Dizine girmesi gerekiyor mu? Önemsiz ya da kopya ise sorun olmayabilir.
2. **Sunucuyu kontrol edin.** Sitenin yanıt süresi ve kullanılabilirliği nasıl? Search Console’daki Tarama İstatistikleri raporunda ana makine durumuna bakın; Google, sunucu hatası durumlarında bu raporun site kullanılabilirliği sorunlarını gösterebileceğini söyler.
3. **İç bağlantı verin.** Sayfaya menüden, ana sayfadan ve ilgili sayfalardan bağlantı ekleyin. Ayrıntı: [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/).
4. **Site haritasına ekleyin.** Önemli sayfalar site haritasında olsun; Google, site haritasının URL’leri keşfetmek için önemli bir yöntem olduğunu belirtir.
5. **Gereksiz adresleri azaltın.** Taranma kapasitesini harcayan kopya, parametreli ve değersiz sayfaları temizleyin ya da yönetin (canonical, noindex, yönlendirme).
6. **Sayfa hızını iyileştirin.** Yavaş sayfa ve sunucu taramayı yavaşlatabilir; bkz. [Core Web Vitals](/blog/core-web-vitals-nedir-lcp-inp-cls/).
7. **Dizine ekleme isteyin.** Önemli sayfalar için URL Denetleme’den tarama isteği gönderin; Google, isteğin dizine eklenmeyi garanti etmediğini ve tek tek URL’ler için bir kota olduğunu söyler.
8. **Sabırlı olun ve izleyin.** Birkaç hafta sonra raporu yeniden kontrol edin.

## Sunucu yükü ve tarama

Google’ın HTTP durum kodu rehberine göre 5xx ve 429 sunucu hataları Google’ın tarayıcılarını geçici olarak taramayı yavaşlatmaya sevk eder; hâlihazırda dizinde olan URL’ler tutulur ama taranamazlarsa sonunda dizinden çıkarılabilir ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Yani sunucunuz sık hata veriyorsa hem yeni sayfaların taranması gecikir hem de eski sayfalar risk altına girer. Barındırma firmanızla yanıt sürelerini ve hata kayıtlarını konuşun.

## Büyük siteler için ek not

Binlerce sayfası olan sitelerde “Bulundu” durumu yaygın olabilir; çünkü Google her sayfayı hemen taramaz. Bu siteler için önerimiz: önemli sayfaları site haritasında ve menüde öne çıkarın, değersiz sayfaları azaltın, sunucuyu iyileştirin. Küçük bir işletme sitesinde ise bu durum nadir görülür; görüyorsanız çoğunlukla site yeni, bağlantılar zayıf ya da sunucu yavaş demektir.

## Yeni sayfa yayımlarken pratik düzen

1. Sayfayı yayımlayın ve tarayıcıda açıldığından emin olun.
2. Menü ya da ilgili sayfalardan bağlantı verin.
3. Site haritasının yeni sayfayı içerdiğini kontrol edin.
4. URL Denetleme ile sayfayı denetleyin ve dizine ekleme isteyin.
5. Bir hafta sonra durumu kontrol edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyon, bir ay içinde otuz yeni sayfa yayımlamış (oda detayları, yakın gezi rotaları, sık sorulan sorular). Search Console’da çoğu “Bulundu: şu anda dizine eklenmiş değil”. Sunucu yanıt süreleri yüksek ve yeni sayfalar menüden bağlanmamış.

Karar: sunucu ve eklenti yükü azaltılıyor, yeni sayfalar ilgili sayfalardan bağlanıyor, site haritası güncelleniyor, en önemli beş sayfa için dizine ekleme isteniyor; diğerleri için birkaç hafta bekleniyor ve rapor izleniyor. Bu örnek sonuç vaadi değildir; karar sırasını gösterir.

## Sorunu ölçmek için kontrol listesi

1. Search Console’da “Bulundu: şu anda dizine eklenmiş değil” altındaki örnek sayfaları listeleyin.
2. Sayfaların kaçı gerçekten önemli? (Hizmet, ürün, iletişim.)
3. Önemli sayfalar menüden ve ilgili sayfalardan bağlanıyor mu?
4. Site haritasında var mı?
5. Sunucu yanıt süresi nasıl, hata kaydı var mı?
6. Yeni sitede miyiz, yoksa eski sitede mi? (Yeni sitede beklemek normal olabilir.)
7. Aynı durumda çok sayıda sayfa varsa, hepsini birden mi yayımladık?
8. Düzeltmeden sonra ne zaman yeniden bakacağız? (Tarihi yazın.)

## Karar tablosu

- **Önemli sayfa, site yeni:** İç bağlantı ver, haritaya ekle, bekle
- **Önemli sayfa, site eski, sunucu yavaş:** Sunucuyu ve hızı iyileştir
- **Önemsiz ya da kopya sayfalar çok:** Yapıyı sadeleştir (canonical, noindex, birleştir)
- **Tüm sayfalar bulundu ama taranmadı:** Sunucu ve site yapısını gözden geçir

## Denizli SEO bu konuda nasıl yardımcı olur?

“Bulundu ama taranmadı” durumu çoğu zaman bir yapı ve sunucu sorunudur. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da hangi sayfaların bulunup taranmadığını çıkarırız,
- sunucu yanıt süresini, iç bağlantıları ve site haritasını gözden geçiririz,
- taranma kapasitesini harcayan kopya ve değersiz adresleri tespit edip yönetiriz,
- düzeltmeleri yazılı rapor olarak sunar, dizin durumunu izleriz.

Sayfalarınız taranmıyorsa [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Sayfa menüde olmasa da dizine girer mi?

Girebilir; ama bağlantı almayan sayfalar Google’ın gözünde daha az önemli olabilir. İç bağlantı vermek hem ziyaretçiye hem Google’a yardımcı olur.

### Sunucumu nasıl iyileştirebilirim?

Önbellek, eklenti temizliği ve barındırma planı en yaygın adımlardır. Ayrıntı için [LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/) yazımızdaki sunucu yanıt süresi bölümüne bakın.

## Sık sorulan sorular

### Bu durum bir hata mı?

Google bunu bir ceza olarak değil, dizin durumu olarak sunar. Önemli bir sayfa bu durumdaysa görünürlük kaybı yaşarsınız.

### “Keşfedildi” mi, “Bulundu” mu?

İngilizce arayüzde “Discovered – currently not indexed” olarak geçer; Google’ın Türkçe yardım sayfasında “Bulundu: şu anda dizine eklenmiş değil” yazar. Anlam aynıdır.

### Dizine ekleme isteği sorunu çözer mi?

Google, isteğin dizine eklenmeyi garanti etmediğini söyler. Önce sunucu, bağlantı ve sayfa değerini iyileştirin.

### Ne kadar beklemeliyim?

Kesin süre veremeyiz. Yeni sayfalar için bir hafta ya da daha uzun beklemek normal olabilir; haftalarca değişmiyorsa nedenleri araştırın.

## Kaynaklar

- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Search Central: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Search Central: Google’dan web sitenizi tekrar taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)
