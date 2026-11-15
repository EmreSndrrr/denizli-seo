---
title: "Google Farklı Bir Standart Sayfa Seçtiyse Ne Yapılmalı?"
description: "“Google farklı bir standart sayfa seçti” uyarısı ne anlama gelir? Canonical sinyalleri, teknik hatalar, benzer içerik ve adım adım düzeltme yöntemi."
date: 2026-11-15
service: teknik-seo
imageAlt: "Kullanıcının belirttiği canonical ile Google’ın seçtiği standart sayfanın karşılaştırması"
---

Search Console’da “Kopya, Google kullanıcıdan farklı bir standart sayfa seçti” durumunu görüyorsanız, Google sizin `rel="canonical"` ile gösterdiğiniz adresi değil, aynı içeriği taşıdığını düşündüğü başka bir adresi dizine almış demektir. Canonical bir emir değil, güçlü bir sinyaldir; Google içerik kalitesi ya da teknik sinyaller gibi nedenlerle farklı bir sayfa seçebilir. Önce Google’ın hangi adresi seçtiğine bakın; seçim mantıklıysa bırakın, değilse çelişen sinyalleri aynı adrese çevirin ve sayfaları birbirinden farklılaştırın.

Bu durum her zaman hata değildir; ama yanlış sayfanın dizinde kalması trafiği böler. Teknik inceleme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Standart sayfa (canonical) nedir?

Aynı ya da çok benzer içerik birden fazla adreste bulunduğunda Google bunları bir kümede toplar ve içlerinden birini “standart” (kanonik) sayfa olarak seçer; arama sonuçlarında o adresi gösterir. Siz tercihinizi bildirebilirsiniz. Google’ın belgesi yöntemleri etkilerine göre sıralar ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)):

1. **Yönlendirmeler:** Yönlendirme hedefinin standart URL olması gerektiği yönünde güçlü bir sinyal.
2. **`rel="canonical"` link ek açıklamaları:** Belirtilen URL’nin standart olması gerektiği yönünde güçlü bir sinyal.
3. **Site haritasına ekleme:** Zayıf bir sinyal.

Google bu yöntemlerin birlikte kullanıldığında daha etkili olduğunu söyler. Hiç tercih belirtmezseniz hangi sürümün en iyisi olduğuna Google kendisi karar verir. Kavramın temeli için [canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/) yazısına bakın.

## Uyarı ne anlama gelir?

Durum şunu söyler: bu sayfada bir canonical tercihi var, ama Google başka bir adresi standart seçti ve bu sayfayı dizine almadı. Google’ın sorun giderme belgesi bunu açıkça kabul eder: standart sayfayı belirtseniz bile Google, içerik kalitesi ya da teknik sinyaller gibi çeşitli nedenlerle farklı bir standart sayfa seçebilir ([standartlaştırma sorunlarını düzeltme](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting?hl=tr)).

Uyarının kendisi içeriğinizin dizinde olmadığı anlamına gelmez; içerik, Google’ın seçtiği adres üzerinden dizindedir. Soru şudur: o adres, sizin göstermek istediğiniz adres mi?

## Adım 1: Google hangi adresi seçmiş?

Search Console’da URL Denetleme aracına sayfanın adresini yazın. Sonuçta iki satır görürsünüz: “kullanıcı tarafından beyan edilen standart sayfa” ve “Google tarafından seçilen standart sayfa”. Google’ın önerisi, seçilen adresin Google Arama’dan gelen kullanıcılarınız için sizin tercihinizden daha mantıklı olup olmadığını değerlendirmenizdir.

Önemli bir not: Google’a göre standart URL size ait olmayan bir Search Console mülkündeyse kopya sayfanızdaki trafiği göremezsiniz. Alan mülkü kullanmak bu körlüğü azaltır ([Search Console kurulumu](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)).

Sık görülen ve zararsız örnekler: sondaki eğik çizgili ve çizgisiz sürüm, `www`’lu ve `www`’suz sürüm, parametreli ve parametresiz sürüm. Google doğru olanı seçtiyse yalnızca sinyallerinizi ona uydurmanız yeter.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 2: Teknik sinyaller çelişiyor mu?

Google, teknik yanlış yapılandırmaların beklenmeyen bir tercihe yol açıp açmadığını doğrulamanızı ister. Kontrol listesi:

1. **Canonical etiketi doğru mu?** Sayfa kaynağında tek bir `rel="canonical"` olmalı ve mutlak adres içermeli. Eklenti ile temanın iki ayrı etiket basması sık görülür.
2. **Canonical adres 200 dönüyor mu?** Yönlenen, 404 veren ya da `noindex` taşıyan bir adrese canonical vermek sinyali bozar.
3. **Yönlendirmeler aynı yönü gösteriyor mu?** Canonical A’yı gösterirken sunucu A’dan B’ye yönlendiriyorsa Google B’yi seçer ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).
4. **Site haritasında hangi adres var?** Haritaya yalnızca standart olmasını istediğiniz adresleri koyun ([site haritası](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
5. **İç bağlantılar hangi sürüme gidiyor?** Menü ve içerik bağlantıları parametreli ya da eski sürüme gidiyorsa Google o sürümü önemli sayar.
6. **http/https ve www:** Tek sürüme kalıcı yönlendirme var mı ([tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/))?

Google, bazı içerik yönetim sistemlerinin ya da eklentilerinin standartlaştırma yöntemlerini istenmeyen adreslere işaret edecek biçimde yanlış kullanabildiğini de belirtir; HTML’i tarayıcının geliştirici araçlarıyla kontrol etmenizi önerir.

## Adım 3: Sayfalar yeterince farklı mı?

Bazen sorun teknik değildir: iki sayfa size farklı görünür, Google’a aynı görünür. Belgeye göre standartlaştırma sorunlarını düzeltmek, teknik olarak kümelenen sayfaların yeterince farklı olmasını sağlamaya yöneliktir.

Tipik örnekler:

- Yalnızca ilçe adı değişen hizmet sayfaları (“Merkezefendi halı yıkama”, “Pamukkale halı yıkama”).
- Yalnızca rengi ya da bedeni farklı ürün sayfaları.
- Aynı metnin kısaltılmış sürümünü taşıyan etiket ve kategori sayfaları.
- Aynı içeriğin yazdırma ya da mobil sürümü.

İki seçenek vardır: sayfaları gerçekten farklılaştırmak (özgün metin, farklı görseller, farklı sorular) ya da tek sayfada birleştirip diğerini yönlendirmek. Google’ın iki notu burada önemlidir:

- **Yeniden değerlendirme zaman alır:** İçerik sorunları düzeltildikten sonra bile Google sayfaları iki haftaya kadar kopya kümede tutabilir.
- **İçerik farkı önemlidir:** Yeni içerik ile kümedeki diğer sayfalar arasındaki fark net ve belirginse sayfalar genellikle daha hızlı ayrılır.

## Adım 4: Özel durumlar

Belgedeki sık karşılaşılan sorunlar tablosundan:

- **Dil varyantları:** Büyük ölçüde aynı içeriği farklı ülkelere sunan sitelerde `hreflang` ek açıklamaları yoksa Google sürümleri kopya sayabilir ([hreflang ve uluslararası SEO](/blog/uluslararasi-seo-ve-hreflang-ihracatcilar-icin/)).
- **Hatalı yapılandırılmış sunucu:** Bir sunucu başka bir alan adına gelen isteğe sizin içeriğinizle yanıt verebilir ya da ilişkisiz iki site aynı soft 404 sayfasını döndürebilir. Bu durumda barındırma sağlayıcınızla görüşün.
- **Zararlı saldırı:** Saldırganlar sayfaya spam bir adrese işaret eden alanlar arası canonical ya da yönlendirme yerleştirebilir; Google o adresi seçebilir. Seçilen adres tanımadığınız bir siteyse güvenlik denetimi yapın.
- **Ortak kullanılan içerik:** İçeriğinizi başka sitelerde yayınlatıyorsanız Google onların sürümünü seçebilir; Google, bu durumda canonical’ın önerilmediğini, en etkili çözümün iş ortağının o içeriği dizine eklenmekten alıkoyması olduğunu belirtir.
- **Kopya web sitesi:** Nadir durumlarda içeriğinizi izinsiz barındıran harici bir sitenin adresi seçilebilir ([içeriğim kopyalanıyor](/blog/icerigim-baska-sitelerde-kopyalaniyor-ne-yapmaliyim/)).

## Adım 5: Yeniden değerlendirme isteyin

Sinyalleri düzelttikten sonra URL Denetleme aracındaki “Dizine ekleme isteğinde bulun” özelliğiyle Google’dan sayfaları yeniden değerlendirmesini isteyin. Google bu özelliğin kotaya tabi olduğunu, bu yüzden en önemli adresleriniz için kullanmanızı söyler. Kalanlar için site haritasını güncel tutmak yeterlidir.

Sonucu iki–dört hafta sonra yeniden kontrol edin; her gün bakıp tekrar tekrar istek göndermek süreci hızlandırmaz.

## Ne zaman hiçbir şey yapmamalı?

- Google’ın seçtiği adres zaten sizin tercih ettiğiniz ana sürümse ve uyarı parametreli ya da kopya adresler için çıkıyorsa durum beklenen biçimde çalışıyordur.
- Etkilenen adresler önemsizse (iç arama, filtre, izleme parametresi) uğraşmaya değmez; yalnızca iç bağlantılarınızın temiz adrese gittiğinden emin olun.

Sorun, **dizinde görmek istediğiniz** bir sayfanın bu duruma düşmesidir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir tesisatçının altı ilçe sayfasından dördü “Google farklı bir standart sayfa seçti” durumunda; Google hepsi için merkez sayfasını seçmiş.

- **Teşhis:** Sayfaların metni aynı, yalnızca ilçe adı değişiyor; canonical etiketleri doğru.
- **Karar:** Gerçekten hizmet verilen ve farklı bilgi yazılabilecek iki ilçe için özgün içerik (ulaşım süresi, yapılan iş örnekleri, sık gelen arızalar) yazılıyor; diğer ikisi merkez sayfaya yönlendiriliyor.
- **İzleme:** Güncellenen sayfalar için dizine ekleme isteniyor; üç hafta sonra URL Denetleme ile durum kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Canonical’ı kesin emir sanmak.**
2. **Yönlendirme, canonical ve site haritasında farklı adresler göstermek.**
3. **Yalnızca bir kelimesi değişen sayfalar üretmek.**
4. **Google’ın seçtiği adrese bakmadan düzeltme yapmak.**
5. **Tanınmayan bir alan adı seçildiğinde güvenliği kontrol etmemek.**
6. **Her gün yeniden dizine ekleme isteği göndermek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- etkilenen adresleri ve Google’ın seçtiği standart sayfaları listeleriz,
- yönlendirme, canonical, site haritası ve iç bağlantı sinyallerini aynı adrese çeviririz,
- birleştirilecek ve farklılaştırılacak sayfalara birlikte karar veririz,
- yeniden değerlendirmeyi ve dizin durumunu izleriz.

İnceleme için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Bu uyarı bir ceza mı?

Hayır. Google’ın kopya sayfaları tek adreste birleştirme biçimidir; içerik seçilen adres üzerinden dizindedir.

### Canonical etiketim doğru, Google neden uymuyor?

Canonical güçlü ama bağlayıcı olmayan bir sinyaldir. Yönlendirmeler, iç bağlantılar ya da içerik benzerliği başka bir adresi gösteriyor olabilir.

### Google’ın seçtiği adresi nasıl görürüm?

Search Console’da URL Denetleme aracında “Google tarafından seçilen standart sayfa” satırında.

### Düzeltme ne kadar sürer?

Google, içerik düzeltildikten sonra bile sayfaları iki haftaya kadar kopya kümede tutabileceğini belirtir.

### Her uyarıyı düzeltmeli miyim?

Hayır. Parametreli ya da gereksiz kopyalar için bu durum beklenen davranıştır; dizinde görmek istediğiniz sayfalara odaklanın.

## Kaynaklar

- [Google Arama Merkezi: Standartlaştırma sorunlarını düzeltme](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting?hl=tr)
- [Google Arama Merkezi: rel="canonical" ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
