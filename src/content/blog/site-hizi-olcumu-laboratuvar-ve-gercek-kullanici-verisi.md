---
title: "Site Hızı Ölçümü: Laboratuvar ve Gerçek Kullanıcı Verisi"
description: "Site hızı nasıl ölçülür? Laboratuvar testi ile gerçek kullanıcı verisi arasındaki fark, PageSpeed Insights ve Search Console raporlarının doğru okunması."
date: 2026-11-13
service: teknik-seo
imageAlt: "Laboratuvar ve gerçek kullanıcı verisini yan yana gösteren hız ölçüm paneli"
---

Site hızını iki farklı yoldan ölçersiniz: laboratuvar verisi, sayfayı kontrollü bir ortamda tek seferde test eder; gerçek kullanıcı verisi ise sitenizi ziyaret eden insanların cihazlarından toplanan ölçümlerdir. İkisi birbirinden farklı sonuç verebilir ve karar verirken gerçek kullanıcı verisi daha belirleyicidir.

Çoğu işletme sahibi PageSpeed Insights’a adres yazıp çıkan puana bakar, puan düşükse paniğe kapılır, yüksekse rahatlar. Oysa o puan çoğu zaman tek bir testin sonucudur. Bu yazı iki ölçüm türünün farkını, hangisine ne zaman güveneceğinizi ve sonuçları nasıl yorumlayacağınızı anlatıyor. Siteniz yavaşsa [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Laboratuvar verisi nedir?

Laboratuvar verisi, sayfanın önceden belirlenmiş bir cihaz ve bağlantı hızıyla test edilmesiyle elde edilir. PageSpeed Insights’ta ve tarayıcı geliştirici araçlarında gördüğünüz “simüle edilmiş” sonuçlar bu gruptadır.

Güçlü yanları:

- **Tekrarlanabilir.** Aynı koşulda her seferinde karşılaştırma yaparsınız.
- **Ayrıntılı.** Hangi dosyanın geç yüklendiğini, hangi öğenin sayfayı yavaşlattığını gösterir.
- **Yayın öncesi kullanılabilir.** Henüz ziyaretçi almayan bir sayfayı da test edebilirsiniz.

Zayıf yanı: gerçek ziyaretçinin cihazını, bağlantısını ve davranışını yansıtmaz. Laboratuvarda hızlı çıkan bir sayfa, eski bir telefonda ve zayıf bağlantıda yavaş olabilir.

## Gerçek kullanıcı verisi nedir?

Gerçek kullanıcı verisi (alan verisi), sitenizi ziyaret eden insanların tarayıcılarından toplanan hız ölçümleridir. Farklı cihazlar, farklı bağlantılar ve farklı konumlar bu veriye yansır.

Güçlü yanları:

- **Gerçeği gösterir.** Sizin test ettiğiniz değil, müşterinizin yaşadığı hızı yansıtır.
- **Google’ın baktığı veriye yakındır.** Search Console’daki Core Web Vitals raporu sayfa performansını gösterir.

Zayıf yanı: yeterli ziyaret yoksa veri oluşmaz; küçük ya da yeni sitelerde rapor boş kalabilir. Ayrıca veri geriye dönüktür; bugün yaptığınız düzeltmenin etkisi hemen görünmez.

## Hangi ölçümlere bakmalısınız?

Core Web Vitals üç metrikten oluşur. Google ve web.dev’e göre iyi eşikler şöyledir ([Core Web Vitals ve Google arama sonuçları](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr), [web.dev](https://web.dev/articles/lcp?hl=tr)):

| Metrik | Ne ölçer? | İyi eşik |
| --- | --- | --- |
| LCP | En büyük içeriğin görünme süresi | 2,5 saniye ve altı |
| INP | Etkileşime yanıt süresi | 200 milisaniye ve altı |
| CLS | Sayfa kayması | 0,1 ve altı |

web.dev, bu değerlerin sayfa yüklemelerinin yüzde 75’lik diliminde değerlendirildiğini söyler; yani ziyaretçilerin çoğunluğunun bu eşiği tutturması beklenir. Metriklerin ayrıntısı için [Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/) yazımıza bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## PageSpeed Insights sonucu nasıl okunur?

PageSpeed Insights bir sayfa için iki ayrı bölüm gösterebilir: gerçek kullanıcı verisi (varsa) ve laboratuvar analizi. Okuma sırası şöyle olmalı:

1. **Önce gerçek kullanıcı bölümüne bakın.** Veri varsa üç metriğin yeşil, sarı ya da kırmızı olduğunu görürsünüz.
2. **Sonra laboratuvar bölümüne geçin.** Burada sorunun nedenini ararsınız: hangi görsel, betik ya da sunucu yanıtı sayfayı yavaşlatıyor?
3. **Puana takılmayın.** Tek bir sayı yerine hangi metriğin eşiği geçtiğine bakın.

LCP sorunluysa öğenin ne olduğunu da PageSpeed Insights ya da geliştirici araçları gösterir; web.dev bunu öneren yöntemlerden biri olarak belirtir. Büyük görsellerden kaynaklanan LCP sorunları için [LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/) yazısına bakın.

## Search Console’daki Core Web Vitals raporu ne işe yarar?

Search Console’daki rapor, sitenizdeki sayfaları metrik durumlarına göre gruplar ve sorunlu adres gruplarını gösterir. Tek tek sayfalara değil, benzer sayfa gruplarına odaklanır. Bu şu işe yarar: aynı şablonu kullanan yüzlerce ürün sayfasında tek bir düzeltme hepsini iyileştirebilir.

Rapor yeterli veri olmadığında boş görünebilir. Bu hata değil, sayfanın yeterli ziyaret almadığı anlamına gelir. Bu durumda laboratuvar araçları ve kendi testleriniz daha çok işinize yarar.

## İki veri neden farklı sonuç verir?

Aynı sayfada laboratuvar yeşil, gerçek kullanıcı kırmızı çıkabilir. Başlıca nedenler:

- **Cihaz farkı.** Ziyaretçilerinizin bir bölümü eski telefon kullanıyor olabilir.
- **Bağlantı farkı.** Laboratuvar bağlantısı sabittir; gerçekte kullanıcılar mobil veride ya da zayıf Wi-Fi’dadır.
- **Önbellek ve konum.** Gerçek kullanıcı farklı şehirlerden, farklı sunuculardan erişir.
- **Etkileşim.** INP gibi metrikler gerçek tıklamalara bağlıdır; laboratuvarda tam yansıtılamaz.
- **Zaman.** Gerçek veri geçmiş haftaları kapsar; yeni düzeltme henüz yansımamıştır.

Çelişki varsa gerçek kullanıcı verisini temel alın; laboratuvarı ise nedeni bulmak için kullanın.

## Kendi telefonunuzla elle test edin

Araçlar önemlidir ama kendi gözünüzle görmek de değerlidir. Telefonunuzda Wi-Fi’yi kapatıp mobil veriyle sitenizi açın ve şunlara bakın:

- Sayfanın ilk içeriği kaç saniyede görünüyor?
- Sayfa yüklenirken düğmeler ve metinler yer değiştiriyor mu?
- Menüye ya da forma dokunduğunuzda hemen tepki alıyor musunuz?

Bu üç soru sırasıyla LCP, CLS ve INP’nin gündelik karşılığıdır. Mümkünse eski bir telefonda da deneyin; çünkü ziyaretçilerinizin hepsi sizin cihazınız kadar hızlı bir telefon kullanmaz.

## Hız sorununda ilk bakılacak üç yer

Ölçüm bir sorun gösterdiğinde sırayla şunlara bakın:

1. **Görseller.** Büyük ve sıkıştırılmamış görseller çoğu sitede ilk şüphelidir; ayrıntı için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazımıza bakın.
2. **Sunucu yanıt süresi.** web.dev, yüksek TTFB’nin 2,5 saniyelik LCP hedefini zorlaştırdığını belirtir. Hosting ve önbellek ayarı bu aşamayı etkiler.
3. **Üçüncü taraf betikler.** Sohbet eklentileri, takip kodları ve reklam betikleri hem LCP’yi hem INP’yi etkileyebilir; gerçekten kullanmadıklarınızı kaldırın.

Sıra önemlidir: önce en büyük kazancı veren işi yapın, sonra yeniden ölçün. Birini düzeltmek süreyi başka bir bölüme kaydırabilir; bu yüzden her değişiklikten sonra ölçümü tekrarlamak gerekir.

## Hız ölçümünü düzenli hâle getirmek

Hız tek seferlik bir iş değildir; yeni görsel, eklenti ya da reklam kodu eklendikçe değişir. Basit bir rutin kurun:

1. Ayda bir önemli beş sayfayı (ana sayfa, hizmet sayfaları, iletişim) PageSpeed Insights’ta ölçün.
2. Search Console’da Core Web Vitals raporuna bakın.
3. Sonuçları tarihle birlikte bir tabloya yazın.
4. Büyük bir değişiklikten önce ve sonra aynı sayfaları yeniden ölçün.

Kayıtlar, “ne zaman yavaşladı?” sorusunu cevaplamanızı sağlar.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir halı yıkama firmasının sahibi, PageSpeed Insights’ta mobil puanı düşük görüp endişeleniyor.

- **Gerçek kullanıcı verisi:** Yeterli ziyaret olduğu için görünüyor; LCP ve INP iyi, CLS sınırda.
- **Laboratuvar:** Büyük bir kahraman görseli ve bir sohbet eklentisi uyarı veriyor.
- **Karar:** Puanın düşüklüğüne değil gerçek kullanıcı metriklerine odaklanılıyor; CLS’ye neden olan alan düzeltiliyor ve görsel küçültülüyor.

Bu örnek bir sonuç vaadi değildir.

## Hız ölçümünde sık yapılan altı hata

1. **Tek bir puana bakıp karar vermek.**
2. **Yalnızca masaüstünü test etmek.** Google mobil sürümü esas alır.
3. **Laboratuvarı gerçek kullanıcıyla karıştırmak.**
4. **Sonucu bir kez ölçüp bırakmak.**
5. **Her uyarıyı aynı önemde görmek.**
6. **Gerçek veri yokken “rapor bozuk” sanmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Hız ölçümünü doğru yorumlamak, doğru işe odaklanmayı sağlar. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizi laboratuvar ve gerçek kullanıcı verisiyle birlikte ölçeriz,
- LCP, INP ve CLS sorunlarının kaynağını sayfa tipine göre tespit ederiz,
- düzeltmeleri öncelik sırasıyla uygular, öncesi-sonrası ölçümlerle raporlarız,
- hız kayıtlarını düzenli takip ederiz.

Sitenizin hızına birlikte bakmak isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### PageSpeed Insights puanı sıralamayı doğrudan belirler mi?

Hayır. Tek bir puan sıralama faktörü değildir. Google, Core Web Vitals’ı sayfa deneyiminin bir parçası olarak ele alır; sıralama birçok sinyale bağlıdır.

### Laboratuvar ve gerçek veri çelişirse hangisine güvenmeliyim?

Gerçek kullanıcı verisine. Laboratuvarı, sorunun nedenini bulmak için kullanın.

### Search Console’da hız verisi neden yok?

Sayfanın yeterli gerçek kullanıcı verisi almamış olması muhtemeldir. Küçük ya da yeni sitelerde bu normaldir.

### Hız düzeltmesinin etkisi ne zaman görünür?

Gerçek kullanıcı verisi geçmiş döneme dayandığı için bir süre sonra yansır. Laboratuvarda fark hemen görünebilir.

### Mobil mi masaüstü mü önemli?

Google dizine ekleme ve sıralama için mobil sürümü esas alır; bu yüzden önce mobil sonucu inceleyin.

## Kaynaklar

- [Google Arama Merkezi: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
- [web.dev: LCP, INP, CLS](https://web.dev/articles/lcp?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [Google Arama Merkezi: Mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
