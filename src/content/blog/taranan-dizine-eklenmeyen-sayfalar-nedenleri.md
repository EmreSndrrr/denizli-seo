---
title: "“Taranan, Dizine Eklenmeyen” Sayfalar: Nedenleri"
description: "Search Console’da “Tarandı: şu anda dizine eklenmiş değil” ne demek? Olası nedenler, kalite ve kopya kontrolü, düzeltme adımları ve bekleme süresi."
date: 2026-11-10
service: teknik-seo
imageAlt: "Taranmış ama dizine eklenmemiş sayfa kartları ve soru işareti"
---

Search Console’daki “Tarandı: şu anda dizine eklenmiş değil” durumu, sayfanın Google tarafından taranmış ama dizine eklenmemiş olduğunu gösterir. Yani Google sayfayı taramış ama şimdilik dizine koymamıştır. Olası nedenler (genel değerlendirme): içeriğin zayıf ya da başka sayfalara benzer olması, sayfanın siteden zayıf bağlanması, sitenin yeni olması. Çözüm, sayfayı özgün ve yararlı hale getirmek, iç bağlantılarla güçlendirmek ve sabırla izlemektir.

Search Console’daki Sayfa dizine ekleme raporunda bu durumu görünce çoğu işletme sahibi panik yapar. Oysa Google’ın kendi rehberi, sitedeki her sayfanın dizine eklenmesinin gerekmediğini belirtir. Bu yazıda durumun ne anlama geldiğini, hangi sayfalar için sorun olduğunu ve nasıl bir yol izleyeceğinizi anlatıyoruz. Dizin raporunu okumak için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza da bakabilirsiniz.

## Bu durum ne anlama geliyor?

Google’ın Sayfa dizine ekleme raporu sayfasında bu durum şöyle tanımlanır: sayfa, Google tarafından taranmış ancak dizine eklenmemiştir ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)). Yani Google sayfanıza gelmiş, içeriği görmüş; ama şimdilik arama dizinine eklememeyi seçmiştir. Dizine ekleme garanti değildir: Google’ın arama rehberi de taranan her sayfanın dizine girmediğini söyler.

Bu durum “Bulundu: şu anda dizine eklenmiş değil” durumundan farklıdır: orada sayfa henüz taranmamıştır. İki durumu [keşfedildi, dizine eklenmedi](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/) yazımızda karşılaştırıyoruz.

## Her sayfa dizine girmek zorunda mı?

Hayır. Google’ın rapor rehberi, bazı URL’lerin dizine eklenmemesinin geçerli nedenleri olduğunu belirtir: robots.txt kuralı, noindex etiketi, kopya URL ya da kaldırdıktan sonra yerine bir şey koymadığınız sayfa için 404 gibi. Rehber, kopya URL’lerin dizine eklenmemesi gerektiğini de söyler ve önemli sayfalarınızın tümünün dizine eklenmiş olması gerektiğini vurgular. Yani önce şu soruyu sorun: **bu sayfa dizine girmeli mi?**

| Sayfa | Dizine girmeli mi? | Karar |
| --- | --- | --- |
| Hizmet sayfası, ürün sayfası, iletişim | Evet | Sorunu çözün |
| Önemli blog yazısı | Evet | Sorunu çözün |
| Teşekkür, giriş, sepet sayfası | Hayır | Sorun değil |
| Kopya ya da parametreli adres | Hayır | Canonical ve yönlendirme |
| Eski, silinmiş sayfa | Hayır | 404 normaldir |

Dizine girmesi gereken sayfa listede “Tarandı: şu anda dizine eklenmiş değil” durumundaysa devam edin.

## Olası nedenler

Google bu durumun nedenini sayfa bazında söylemez; bu yüzden aşağıdaki liste genel değerlendirmedir:

1. **İçerik zayıf ya da çok kısa.** Müşterinin sorusunu karşılamayan, yüzeysel sayfa.
2. **İçerik başka sayfalara çok benziyor.** Yalnızca ilçe adı değişen şablon sayfalar, kopya ürün açıklamaları.
3. **Sayfa siteden zayıf bağlanmış.** Menüde ya da başka sayfalarda hiç bağlantı almayan (yetim) sayfa.
4. **Site yeni ya da güveni düşük.** Google, yeni bir sitenin bütün sayfalarını hemen dizine eklemeyebilir.
5. **Çok sayıda benzer sayfa.** Filtre, etiket ve arşiv sayfaları çoğalmış.
6. **Teknik sorunlar.** Sayfa yavaş açılıyor, geç yüklenen içerik görünmüyor, mobil sürüm eksik.
7. **Zaman.** Google’ın rapor sayfası, yeni bir sayfa ya da sitenin taranıp dizine eklenmesinin bir haftayı bulabileceğini söyler.

Nedeni görmek için URL Denetleme aracını kullanın ([URL Denetleme](https://support.google.com/webmasters/answer/9012289?hl=tr)).

## Adım adım ne yapmalısınız?

1. **Sayfayı seçin.** Raporda dizine girmesini istediğiniz örnek sayfaları listeleyin.
2. **URL Denetleme ile bakın.** Google’ın sayfayı nasıl gördüğünü, taranabilir olup olmadığını ve standart sayfa olarak hangi adresi seçtiğini kontrol edin.
3. **Kopya olup olmadığına bakın.** Sayfa başka bir sayfanın kopyası ya da çok benzeri mi? Canonical doğru mu? Bkz. [canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/).
4. **İçeriği değerlendirin.** Sayfa müşterinin sorusuna gerçekten cevap veriyor mu? Google’ın içerik rehberi, birinci elden uzmanlığın ve kapsamlı bilginin açıkça gösterilmesini ister ([faydalı ve güvenilir içerik](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)). Zayıf sayfayı derinleştirin ya da benzer sayfalarla birleştirin.
5. **İç bağlantı ekleyin.** Sayfaya menüden, ana sayfadan ve ilgili sayfalardan açıklayıcı bağlantı verin.
6. **Teknik kontrol yapın.** Mobilde sorunsuz açılıyor mu, hızlı mı, içerik gerçek metin olarak sayfada mı?
7. **Site haritasında olduğundan emin olun.** Yalnızca standart ve değerli sayfalar olsun.
8. **Dizine ekleme isteyin.** Düzeltmeden sonra Search Console’dan yeniden tarama isteği gönderin; istek garanti vermez.
9. **Bekleyin ve izleyin.** Birkaç hafta sonra rapora yeniden bakın.

## Zayıf sayfayı nasıl iyileştirirsiniz?

Bir sayfanın yararlı olup olmadığına şu sorularla bakın:

- **Müşteri bu sayfada aradığını bulabilir mi?:** Net, doğrudan cevap
- **Başka sayfadan farkı ne?:** Özgün bilgi, gerçek örnek
- **Sayfayı kim hazırladı?:** Alanında bilgili, doğrulanabilir
- **Sayfada gerçek ayrıntı var mı?:** Süreç, süre, fiyatı etkileyen etkenler
- **Bu sayfa güncel mi?:** Güncel bilgi

Sayfa gerçekten ayırt edici bir şey sunmuyorsa daha güçlü bir sayfayla birleştirmek en doğrusu olabilir.

## Çok sayıda sayfa bu durumdaysa

Siteniz yüzlerce sayfa içeriyor ve çoğu “tarandı, dizine eklenmedi” görünüyorsa bunu bir kalite ve yapı sinyali olarak okuyun: çok sayıda benzer ya da düşük değerli sayfa üretilmiş olabilir. Bu durumda tek tek sayfaları düzeltmek yerine, sitenin genel yapısını gözden geçirin: hangi sayfalar gerçekten gerekli? Şablon sayfaları [ilçe sayfası nasıl yazılır?](/blog/ilce-sayfasi-nasil-yazilir/) yazımızdaki ölçütle değerlendirin.

## Dizine ekleme isteği işe yarar mı?

Google’ın yeniden tarama rehberi, tarama isteğinde bulunmanın URL’nin dizine ekleneceğini garanti etmediğini, aynı URL için birden fazla istek göndermenin daha hızlı taranmasını sağlamadığını ve tek tek URL’ler için kota bulunduğunu söyler ([yeniden tarama isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)). Yani sayfa sorunluysa istek tek başına çözmez; önce sayfayı iyileştirin, sonra istek gönderin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir tesisat firmasının sitesinde “Honaz tesisat”, “Sarayköy tesisat”, “Pamukkale tesisat” gibi on iki ilçe sayfası var; hepsi aynı metinle yalnızca ilçe adı değişik. Search Console’da çoğu “Tarandı: şu anda dizine eklenmiş değil” durumunda.

Karar: işletme yalnızca üç ilçede gerçek iş yapıyor. Bu üç ilçe için o ilçeye özgü gerçek bilgilerle özgün sayfalar yazılıyor; diğer dokuz sayfa tek bir “Hizmet verdiğimiz bölgeler” sayfasında birleştiriliyor ve eski adresler yönlendiriliyor. Sonuç birkaç hafta boyunca raporda izleniyor. Bu örnek sonuç vaadi değildir; karar sırasını gösterir.

## Hangi sayfaya hangi çözüm?

- **Hizmet sayfası:** olası sorun: Yüzeysel içerik, zayıf bağlantı; çözüm: Derinleştir, menüden ve ilgili sayfalardan bağla
- **Şablon ilçe sayfası:** olası sorun: Kopyaya yakın; çözüm: Özgün hale getir ya da birleştir
- **Eski blog yazısı:** olası sorun: Güncel değil, zayıf; çözüm: Güncelle, birleştir ya da kaldır
- **Etiket ve arşiv:** olası sorun: Değersiz kalabalık; çözüm: noindex ya da azalt
- **Ürün sayfası:** olası sorun: Üretici metni kopya; çözüm: Kendi metninle zenginleştir
- **Yeni sayfa:** olası sorun: Henüz erken; çözüm: Birkaç hafta bekle, bağlantı ver

## Bekleme sırasında yapılacaklar

Sayfayı iyileştirdikten sonra Google’ın yeniden taramasını beklerken şunları yapın: sayfaya birkaç gerçek iç bağlantı verin; sitenin geri kalanını da güçlendirin (diğer sayfaları iyileştirmek siteyi bütün olarak etkileyebilir); sayfanın başka sitelerce anılmasını sağlayacak gerçek yollar arayın. Hızlı sonuç vaat eden yöntemlerden (satın alınmış bağlantı gibi) kaçının.

## Denizli SEO bu konuda nasıl yardımcı olur?

Hangi sayfanın neden dizine girmediğini görmek, hem teknik hem içerik bilgisi gerektirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da hangi sayfaların dizinde olduğunu, hangilerinin neden dışarıda kaldığını çıkarırız,
- dizine girmesi gereken sayfaları ayırır, teknik ve içerik eksiklerini listeleriz,
- kopya sayfaları canonical, yönlendirme ya da birleştirme ile yönetiriz,
- düzeltmeleri tek tek yazılı raporlarız.

Sayfalarınız dizine girmiyorsa [bize yazın](/iletisim/); sitenize bakıp nedenini yazılı olarak söyleyelim.

### Sayfanın içeriğini yenilersem tekrar taranır mı?

Google sayfayı zamanla yeniden tarar. Önemli bir güncelleme yaptıysanız URL Denetleme’den yeniden tarama isteği gönderebilirsiniz.

### Noindex mi koymalıyım?

Dizine girmesini istemediğiniz sayfalar için evet; ama müşteriye getirisi olan sayfaya noindex koymayın. Bkz. “noindex nedir?” yazımız.

## Sık sorulan sorular

### “Tarandı, dizine eklenmedi” bir ceza mı?

Hayır. Google’ın rapor sayfası bunu bir durum olarak sunar; ceza olarak tanımlamaz. Ama dizine girmesi gereken bir sayfa bu durumdaysa görünürlüğünü kaybeder.

### Kaç günde dizine girer?

Kesin süre veremeyiz. Google, yeni bir sayfanın taranıp dizine eklenmesinin bir haftayı bulabileceğini belirtir; sorunlu sayfalar daha uzun sürebilir.

### Sayfayı silip yeniden yayınlasam olur mu?

Hayır. Önce sayfanın neden dizine girmediğini bulun. Silip yeniden yayınlamak nedeni çözmez, adresi değiştirirseniz yönlendirme gerekir.

### Raporda yüzlerce sayfa var, hepsiyle uğraşmalı mıyım?

Önce önemli sayfalarınıza bakın. Önemsiz ya da kopya sayfalar için sorun olmayabilir.

## Kaynaklar

- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Google Search Central: Google’dan web sitenizi tekrar taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)
- [Google Search Central: kullanıcı odaklı, faydalı ve güvenilir içerikler oluşturma](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)
