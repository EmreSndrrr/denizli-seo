---
title: Core Web Vitals Nedir? LCP, INP ve CLS Açıklaması
description: "Core Web Vitals nedir? LCP, INP ve CLS ne ölçer, iyi eşikleri nelerdir? Search Console raporu ve küçük siteler için düzeltme sırası."
date: 2026-11-10
service: teknik-seo
imageAlt: "Üç gösterge: yükleme, duyarlılık ve görsel kararlılık"
---

Core Web Vitals, Google’ın sayfa deneyimini ölçmek için kullandığı üç göstergedir: LCP (yükleme hızı), INP (etkileşime yanıt) ve CLS (görsel kararlılık). Google’ın iyi eşikleri: LCP sayfa yüklenmeye başladıktan sonra 2,5 saniye içinde, INP 200 milisaniyeden kısa, CLS 0,1’den az olmalı. Search Console’daki Core Web Vitals raporu, sayfalarınızın bu üç ölçümdeki durumunu gösterir.

Siteniz telefonda “yavaş” hissettiriyorsa bunun sayısal karşılığı Core Web Vitals’tır. Ölçüler ilk bakışta teknik görünür, ama her biri ziyaretçinin hissettiği bir şeyi anlatır: sayfa ne zaman göründü, tıkladığımda ne kadar çabuk yanıt verdi, sayfa kaydı mı? Bu yazıda üç ölçümü sade bir dille, eşikleriyle ve küçük işletme siteleri için düzeltme sırasıyla anlatıyoruz. Hızı pratikte ölçmek için [Sitem telefonda yavaş: nereden başlamalıyım?](/blog/telefonda-hizli-acilan-site/) yazımıza da bakabilirsiniz.

## Core Web Vitals nedir?

Google’ın tanımına göre Core Web Vitals, gerçek kullanıcıların sayfa deneyimini ölçen metriklerdir ([Core Web Vitals ve Google arama sonuçları](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)). Üç ölçüm vardır:

| Ölçüm | Ne ölçer? | İyi eşik |
| --- | --- | --- |
| LCP (Largest Contentful Paint) | Yükleme performansı: en büyük içeriğin görünme süresi | 2,5 saniye veya daha kısa |
| INP (Interaction to Next Paint) | Duyarlılık: tıklama ya da dokunmaya yanıt süresi | 200 milisaniye veya daha kısa |
| CLS (Cumulative Layout Shift) | Görsel kararlılık: sayfanın beklenmedik kayması | 0,1 veya daha az |

web.dev, INP için 200 ile 500 milisaniye arasını “iyileştirilmesi gereken”, 500 milisaniyenin üzerini “düşük”; CLS için 0,25’ten büyük değerleri “yetersiz” olarak tanımlar. Değerlendirme, gerçek kullanıcı verilerinin yüzde 75’lik diliminde yapılır.

## LCP: sayfa ne zaman göründü?

LCP, sayfanın en büyük görünür öğesinin (çoğu zaman bir görsel ya da büyük bir başlık bloğu) yüklenme süresidir. Google, iyi bir kullanıcı deneyimi için LCP’nin sayfa yüklenmeye başladıktan sonraki ilk 2,5 saniye içinde gerçekleşmesini hedeflemenizi söyler. Küçük işletme sitelerinde LCP’yi çoğu zaman ana sayfadaki büyük bir görsel ya da kahraman (hero) bölümü belirler. Düzeltme için ayrı bir yazı hazırladık: [LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/)

## INP: tıkladığımda ne kadar çabuk yanıt verdi?

INP, ziyaretçinin sayfada yaptığı etkileşimlerin (tıklama, dokunma, tuşa basma) yanıt süresini ölçer. İyi bir değer 200 milisaniye veya altıdır. Yavaş INP, çoğunlukla fazla ya da ağır JavaScript’ten kaynaklanır: menü açılırken, form gönderilirken ya da filtre seçilirken sayfa “donuyormuş” gibi hissedilir. Basit statik sitelerde INP genellikle sorun olmaz; ağır temalar, çok eklentili sitelerde görülür.

## CLS: sayfa kaydı mı?

CLS, sayfa yüklenirken öğelerin beklenmedik biçimde yer değiştirmesini ölçer. Tipik örnek: yazıyı okurken üstte geç yüklenen bir reklam ya da görsel metni aşağı iter ve yanlış yere tıklarsınız. İyi bir CLS 0,1 veya daha azdır. Yaygın nedenler: boyutu tanımlanmamış görseller, geç yüklenen yazı tipleri, sonradan eklenen banner ve çerez bildirimleri.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Core Web Vitals’ı nasıl ölçersiniz?

1. **Search Console, Core Web Vitals raporu.** Google, bu raporda sayfalarınızın performansının gösterildiğini söyler. Raporun ayrıntıları Search Console’da değişebilir; trafiği düşük sitelerde yeterli veri olmayabilir.
2. **PageSpeed Insights.** Tek bir adres için hem gerçek kullanıcı verisini (varsa) hem laboratuvar ölçümünü verir.
3. **Chrome Geliştirici Araçları ve diğer araçlar.** Teknik inceleme içindir.

Laboratuvar ölçümü, tek bir cihazda ve ağda yapılan simülasyondur; gerçek kullanıcı verisi ise farklı cihaz ve bağlantıları yansıtır. İkisi birbirinden farklı çıkabilir; sorunu bulmak için laboratuvar, başarıyı değerlendirmek için gerçek kullanıcı verisi daha doğrudur.

## Sıralamaya etkisi nedir?

Google’ın sayfa deneyimi sayfası, temel sıralama sistemlerinin iyi bir sayfa deneyimi sunan içerikleri ödüllendirmeyi amaçladığını söyler. Aynı sayfa, Core Web Vitals’ın sıralama sistemleri tarafından kullanıldığını, ama sıralama için kullanılan tek bir “sayfa deneyimi sinyali” bulunmadığını belirtir. Site sahiplerine de sayfa deneyiminin yalnızca bir ya da iki unsuruna odaklanmamalarını, genel olarak iyi bir deneyim sunup sunmadıklarına bakmalarını önerir ([sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)). Pratik sonuç: Core Web Vitals’ı düzeltmek önemlidir; ama sıralamayı yalnızca bu üç ölçüme bağlamayın, içerik ve diğer sayfa deneyimi unsurları da önemlidir.

## Küçük bir işletme sitesi için düzeltme sırası

- **1:** i̇ş: Büyük görselleri küçült, doğru biçime çevir; etkilediği ölçüm: LCP
- **2:** i̇ş: LCP görselini geç yüklemeyin; etkilediği ölçüm: LCP
- **3:** i̇ş: Sunucu yanıt süresine bak; ağır eklenti ve tema; etkilediği ölçüm: LCP, INP
- **4:** i̇ş: Görsellerin boyutunu tanımla; etkilediği ölçüm: CLS
- **5:** i̇ş: Gereksiz JavaScript ve eklentileri kaldır; etkilediği ölçüm: INP
- **6:** i̇ş: Geç yüklenen banner ve bildirimleri düzenle; etkilediği ölçüm: CLS

İlk iki iş çoğu küçük sitede en büyük farkı yaratır. Görsel düzeltmeleri için [görsel SEO](/blog/gorsel-seo/) yazımıza bakın.

## Mobilde özellikle önemli

Google, dizine ekleme ve sıralama için sitenin mobil sürümünü kullanır; bu yüzden ölçümleri masaüstünden değil, telefonla ve mobil veriyle değerlendirin. Telefonda ağ daha yavaş, işlemci daha zayıf olabilir; masaüstünde “iyi” görünen bir site telefonda sorun yaşayabilir.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyonun sitesi. Search Console’da mobil LCP “iyileştirilmeli” görünüyor. İnceleme: ana sayfadaki kahraman görseli telefonla çekilmiş ve sıkıştırılmamış; ayrıca `loading="lazy"` ile geç yükleniyor. Düzeltme sırası: görsel boyutlandırılıp WebP’ye çevriliyor, geç yükleme bu görselden kaldırılıyor, sunucu yanıt süresi ölçülüyor, görsellere genişlik ve yükseklik değeri veriliyor. Ardından değişikliğin etkisi, rapor güncellendikçe birkaç hafta boyunca izleniyor. Bu örnek sonuç vaadi değildir; düzeltme sırasını gösterir.

## Belirtiden ölçüme: sorun nerede?

- **“Sayfa geç görünüyor”:** büyük olasılıkla ölçüm: LCP; i̇lk bakılacak yer: Ana görsel, sunucu süresi
- **“Tıkladım, hemen tepki vermedi”:** büyük olasılıkla ölçüm: INP; i̇lk bakılacak yer: Ağır JavaScript, eklentiler
- **“Yazıyı okurken sayfa kaydı, yanlış yere tıkladım”:** büyük olasılıkla ölçüm: CLS; i̇lk bakılacak yer: Boyutsuz görsel, geç yüklenen banner
- **“Telefonda çok kasıyor”:** büyük olasılıkla ölçüm: LCP ve INP; i̇lk bakılacak yer: Mobil ölçüm, görsel boyutu

## Aylık Core Web Vitals kontrolü

1. Search Console’da Core Web Vitals raporunu açın (veri varsa).
2. “İyileştirilmeli” ya da “yetersiz” grubunda sayfa var mı bakın.
3. Bir kaç önemli sayfayı PageSpeed Insights’ta telefonla ölçün.
4. Yeni görsel ya da eklenti eklediyseniz öncesi ve sonrası ölçün.
5. Sonuçları tarihle bir tabloya yazın.

## Denizli SEO bu konuda nasıl yardımcı olur?

Core Web Vitals rakamlarını görmek kolay, düzeltmek teknik iştir. [Teknik SEO hizmetimizde](/teknik-seo/):

- görselleri sıkıştırır, gereksiz kodu ayıklar; LCP, INP ve CLS değerlerini Google’ın “iyi” sınırına çekmek için çalışırız,
- siteyi telefonda test eder, mobil deneyimi iyileştiririz,
- Search Console’daki Core Web Vitals raporunu izler, değişikliklerin etkisini yazılı raporlarız,
- hangi düzeltmenin hangi ölçümü etkilediğini açık anlatırız.

Siteniz telefonda yavaş geliyorsa [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

## Sık sorulan sorular

### Core Web Vitals’ta kötü çıkarsam sitem Google’dan kaybolur mu?

Hayır. Core Web Vitals, sayfa deneyiminin bir parçasıdır; içerik ve diğer etkenler de önemlidir. Ama yavaş site ziyaretçi kaybettirir.

### Raporum neden boş?

Yeni ya da düşük trafikli sitelerde Search Console’daki rapor için yeterli veri olmayabilir. Bu durumda PageSpeed Insights’taki laboratuvar ölçümünü kullanın.

### FID neden yok?

INP, etkileşime yanıt ölçümü için kullanılan güncel göstergedir; bu yazıdaki eşikler web.dev’in INP sayfasına dayanır.

### Core Web Vitals’ı kim düzeltmeli?

Görsel sıkıştırma ve eklenti temizliğini çoğu zaman siz yapabilirsiniz; sunucu, JavaScript ve tema düzeltmeleri için web geliştirici desteği gerekir.

### Core Web Vitals değerlerini nereden görürüm?

Search Console’daki Core Web Vitals raporunda ve hız ölçüm araçlarında.

## Kaynaklar

- [Google Search Central: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
- [web.dev: Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=tr)
- [web.dev: Interaction to Next Paint (INP)](https://web.dev/articles/inp?hl=tr)
- [web.dev: Cumulative Layout Shift (CLS)](https://web.dev/articles/cls?hl=tr)
- [Google Search Central: Google sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)
