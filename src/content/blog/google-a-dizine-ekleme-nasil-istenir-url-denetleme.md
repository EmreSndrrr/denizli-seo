---
title: Google’a Dizine Ekleme Nasıl İstenir? URL Denetleme
description: "Yeni ya da güncellenen sayfa için dizine ekleme nasıl istenir? URL Denetleme adımları, kota, site haritası, bekleme süresi ve istek işe yaramazsa kontrol."
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir adres çubuğu, URL Denetleme kutusu ve dizine ekleme isteği düğmesi"
---

Tek bir sayfa için Search Console’daki URL Denetleme aracına adresi yazıp dizine ekleme (tarama) isteği gönderebilirsiniz; bunun için mülkün sahibi ya da tam kullanıcısı olmanız gerekir. Çok sayıda sayfa için site haritası gönderin. Google, tarama isteğinin dizine eklenmeyi garanti etmediğini, tarama işleminin birkaç gün ile birkaç hafta sürebildiğini ve aynı URL için tekrar istek göndermenin işi hızlandırmadığını söyler.

Yeni bir sayfa yayımladığınızda ya da önemli bir sayfayı güncellediğinizde “Google ne zaman görecek?” diye merak edersiniz. Google sayfayı kendiliğinden bulur; ama süreyi kısaltmak için istek gönderebilirsiniz. Bu yazıda isteğin nasıl yapılacağını, sınırlarını ve sayfa dizine girmiyorsa neye bakacağınızı anlatıyoruz. Genel dizin kontrolü için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza da bakabilirsiniz.

## Dizine ekleme isteği ne işe yarar?

Google’ın rehberine göre yeniden tarama isteğinde bulunmak, Google’a bir URL’nin yeni ya da güncel olduğunu bildirir ([Google’dan web sitenizi tekrar taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)). Ama rehber açık: tarama isteği, URL’nin hemen veya ileride dizine ekleneceğini garanti etmez. Google, yüksek kaliteli ve yararlı içeriğin hızlı dahil edilmesine öncelik verdiğini belirtir.

## İki yöntem: tek sayfa ve çok sayfa

| Yöntem | Ne zaman? | Not |
| --- | --- | --- |
| URL Denetleme aracı | Tek tek birkaç URL | Mülk sahibi ya da tam kullanıcı gerekir; kota var |
| Site haritası gönderme | Çok sayıda URL | Yeni site ya da taşıma sonrası önemli bir yöntem |

Google, URL Denetleme’nin yalnızca birkaç URL için uygun olduğunu, çok sayıda URL varsa site haritası göndermeyi önerdiğini belirtir. Site haritası, Google’ın sitenizdeki URL’leri keşfetmesi için önemli bir yöntemdir; ayrıntı için [site haritası nasıl oluşturulur ve gönderilir](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/) yazımıza bakın.

## URL Denetleme ile adım adım

1. **Search Console’a girin** ve doğru mülkü seçin.
2. **Üstteki denetleme kutusuna** sayfanın tam adresini (https ile) yazın.
3. **Sonucu okuyun.** Sayfa Google dizininde mi? Neden değil? Standart sayfa olarak hangi adresi seçmiş? Google’ın yardım sayfasına göre bu araç, bir URL’nin Google dizinindeki durumunu gösterir ([URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)).
4. **Gerekirse canlı URL’yi test edin.** Canlı test, sayfanın şu anki hâlini Google’ın görüş açısından gösterir.
5. **Dizine ekleme isteyin.** Sayfa dizine uygunsa “Dizine eklenmesini iste” seçeneğini kullanın.
6. **İsteği bir kez gönderin.** Aynı adres için tekrar tekrar istek göndermeyin.

## Kota ve tekrar isteği

Google, tek tek gönderilen URL’ler için bir kota olduğunu ve aynı URL için birden fazla yeniden tarama isteğinde bulunmanın URL’nin daha hızlı taranmasını sağlamayacağını belirtir. Bu yüzden kotayı önemli sayfalara saklayın: yeni hizmet sayfası, güncellenen iletişim sayfası, yeni ürün gibi.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## İstek göndermeden önce kontrol listesi

İstek, sorunlu bir sayfayı düzeltmez. Göndermeden önce şunları doğrulayın:

1. Sayfa tarayıcıda açılıyor ve 200 durum koduyla çalışıyor mu? (Bulunamayan sayfa 404 döner.)
2. `noindex` etiketi ya da robots.txt engeli var mı? Bkz. “noindex nedir?” yazımız.
3. Canonical doğru adresi mi gösteriyor?
4. İçerik özgün ve yararlı mı? Kopya ya da yüzeysel mi?
5. Sayfaya menüden ve diğer sayfalardan bağlantı veriliyor mu?
6. Site haritasında var mı?
7. Sayfa telefonda sorunsuz açılıyor mu?

Bu yedi maddeden biri eksikse önce onu düzeltin, sonra isteyin.

## İstekten sonra ne kadar beklenir?

Google, taramanın birkaç gün ile birkaç hafta sürebileceğini söyler. Sabırlı olmanız ve sürecin hangi aşamada olduğunu Sayfa dizine ekleme raporu ya da URL Denetleme ile izlemeniz önerilir. Aynı rehber, tarama isteğinin dizine eklemeyi garanti etmediğini yineler. Pratikte bir ile iki hafta sonra bakın; hâlâ dizinde değilse sayfa kalitesini ve bağlantılarını gözden geçirin. Durum raporlarındaki ifadeleri [Tarandı, dizine eklenmedi](/blog/taranan-dizine-eklenmeyen-sayfalar-nedenleri/) ve [Bulundu, dizine eklenmedi](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/) yazılarımızda açıkladık.

## Sayfa güncellemelerinde istek

Önemli bir sayfanın metnini, fiyatını ya da iletişim bilgisini güncellediyseniz yeniden tarama isteyebilirsiniz. Küçük düzeltmeler için istek göndermenize gerek yoktur; Google sayfayı zamanla yeniden tarar. Sık güncellenen sitelerde güncel bir site haritası ve `lastmod` değeri (doğruysa) yararlıdır.

## Sık yapılan hatalar

1. **Her sayfa için istek göndermek.** Kotayı önemli sayfalara saklayın.
2. **Aynı sayfa için tekrar istek.** İşi hızlandırmaz.
3. **Sorunlu sayfa için istek göndermek.** Önce sorunu düzeltin.
4. **HTTP ve HTTPS ya da www karışıklığı.** Doğru adresi denetleyin.
5. **Yeni siteyi yalnızca isteklerle tanıtmaya çalışmak.** Site haritası ve iç bağlantı daha kalıcıdır.
6. **İsteği gönderip bir daha bakmamak.**

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir halı yıkama firması “Evden halı alım” için yeni bir hizmet sayfası yayımlamış. Bir hafta sonra Google’da sayfa çıkmıyor.

Kontrol: sayfa 200 dönüyor, noindex yok, canonical doğru; ama menüden hiçbir bağlantı almıyor ve site haritasında yok. Düzeltme: ana hizmet sayfasından ve menüden bağlantı veriliyor, harita güncelleniyor; ardından URL Denetleme ile bir kez istek gönderiliyor. Sonuç, iki hafta içinde raporda izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Yeni site için ilk hafta planı

Yeni bir site yayımladıysanız tek tek istek göndermek yerine şu sırayı izleyin:

- **1:** Search Console’a siteyi ekleyin ve doğrulayın
- **1:** Site haritasını gönderin; robots.txt’ye satırı ekleyin
- **1:** Ana sayfa ve en önemli iki hizmet sayfası için URL Denetleme ile istek
- **2–3:** Sayfa dizine ekleme raporuna bakın; hata varsa düzeltin
- **7:** Dizindeki sayfa sayısını beklentinizle karşılaştırın
- **14:** Dizinde olmayan önemli sayfaları ayrı ayrı inceleyin

Google, siteniz yeni kullanıma sunulduysa ya da yakın zamanda taşındıysa site haritasının özellikle önemli olduğunu belirtir.

## İstek yerine neler daha kalıcıdır?

Tek tek istek kısa vadelidir. Kalıcı çözümler: iyi iç bağlantı yapısı, güncel site haritası, hızlı ve hatasız sunucu, düzenli yayımlanan özgün içerik ve başka sitelerden gelen gerçek bağlantılar. İstek yalnızca süreci biraz yakınlaştırmak içindir.

## Dizine ekleme isteğini sürece bağlamak

Yeni bir sayfayı yayımladığınızda şu sırayı izleyin: sayfayı yayımlayın, site haritasında yer aldığından emin olun, URL Denetleme ile durumuna bakın, gerekiyorsa dizine ekleme isteyin ve bir hafta sonra durumu yeniden kontrol edin. Sayfa dizine girmezse nedenini dizin raporundan okuyun: engel mi var, içerik mi zayıf, sayfa yeterince bağlanmış mı? İsteği tekrar tekrar göndermek yerine nedeni düzeltin.

### Birden fazla sayfa için toplu istek gerekir mi?

Genelde gerekmez; site haritası ve iç bağlantılar çoğu sayfanın bulunmasını sağlar.

## İstek kotası ve sabır

Aynı adres için peş peşe istek göndermek hızlandırmaz; isteği bir kez gönderin, bir hafta bekleyin ve nedeni dizin raporundan okuyun.

## Denizli SEO bu konuda nasıl yardımcı olur?

İstek göndermek kolaydır; sayfanın neden dizine girmediğini bulmak uzmanlık ister. [Teknik SEO hizmetimizde](/teknik-seo/):

- yeni ve güncellenen sayfaların dizin durumunu Search Console’da izleriz,
- dizine girmeyen sayfaların nedenini (engel, kopya, zayıf bağlantı, içerik) çıkarırız,
- site haritası ve iç bağlantıları sayfaların keşfini kolaylaştıracak şekilde düzenleriz,
- yaptığımız işleri yazılı rapor olarak sunarız.

Sayfalarınız dizine girmiyorsa [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Yüzlerce sayfa için istek göndermeli miyim?

Hayır. Çok sayıda URL için site haritası gönderin; tek tek istek kotası sınırlıdır.

### Dizine ekleme isteği sıralamayı yükseltir mi?

Hayır. İstek yalnızca taramayı hızlandırmaya çalışır; sıralamayı içerik, teknik düzen ve tanınırlık belirler.

## Sık sorulan sorular

### Dizine ekleme isteği ücretli mi?

Hayır; Search Console’un ücretsiz bir özelliğidir.

### İstek göndermeden Google sayfamı bulur mu?

Genellikle bulur; özellikle sayfa iyi bağlanmışsa. İstek, süreyi kısaltmaya çalışmaktır ama garanti etmez.

### Mülk sahibi değilsem istek gönderebilir miyim?

Google, URL Denetleme aracında dizine ekleme isteğinde bulunabilmek için Search Console mülkünün sahibi ya da tam kullanıcısı olmanız gerektiğini söyler. Ajansla çalışıyorsanız yönetici olarak eklediğinizden emin olun.

### Başkasının sitesindeki sayfa için istek gönderebilir miyim?

Hayır; yalnızca sahibi olduğunuz mülkteki URL’ler için.

## Kaynaklar

- [Google Search Central: Google’dan web sitenizi tekrar taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
