---
title: "JavaScript Siteleri ve SEO: Google Sayfayı Görüyor mu?"
description: "JavaScript ile yapılmış site Google’da görünür mü? Tarama, oluşturma ve dizine ekleme aşamaları, bağlantı ve durum kodu kuralları, test yöntemleri."
date: 2026-11-10
service: teknik-seo
imageAlt: "Kod satırları ve bir sayfanın tarayıcıda oluşturulması"
---

**Kısa cevap:** Google JavaScript’i işleyebilir: Google’ın rehberine göre JavaScript web uygulamaları tarama, oluşturma ve dizine ekleme olmak üzere üç aşamada işlenir ve oluşturma sırasında Chromium’un güncel bir sürümü JavaScript’i çalıştırır. Yine de içerik, başlıklar, bağlantılar ve durum kodları doğru kurulmazsa sayfa eksik görülebilir. Bu yüzden sayfanızı Google’ın gördüğü hâliyle test edin; önemli içeriği ve bağlantıları gerçek HTML’de tutmak en güvenlisidir.

“Sitem JavaScript ile yapıldı; Google görüyor mu?” sorusu, modern site yaptıran işletmelerin sık sorduğu bir sorudur. Cevap “evet görebilir, ama dikkat edilecek şeyler var” biçimindedir. Bu yazıda Google’ın JavaScript’i nasıl işlediğini, neleri kontrol etmeniz gerektiğini ve küçük bir işletme sitesinde pratik riskleri anlatıyoruz. Genel dizin durumu için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza bakabilirsiniz.

## Google JavaScript’i nasıl işler?

Google’ın JavaScript SEO rehberine göre süreç üç aşamadır: tarama, oluşturma (render) ve dizine ekleme ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)).

1. **Tarama.** Googlebot bir URL’yi getirdiğinde önce robots.txt dosyasına bakar; URL izin verilmiyor olarak işaretliyse istek göndermez.
2. **Oluşturma.** Google kaynaklara erişebiliyorsa gözetimsiz bir Chromium sayfayı oluşturur ve JavaScript’i çalıştırır. Googlebot, oluşturulan HTML’yi bağlantılar için tekrar ayrıştırır.
3. **Dizine ekleme.** Google, oluşturulan HTML’yi sayfanın dizine eklenmesi için de kullanır.

Rehber, 200 HTTP durum koduna sahip tüm sayfaların JavaScript içerip içermediğine bakılmaksızın oluşturma sırasına gönderildiğini; durum kodu 200 değilse (örneğin 404 hata sayfaları) oluşturmanın yapılmayabileceğini belirtir. Ayrıca bir sayfanın taranmayı mı yoksa oluşturulmayı mı beklediğinin hemen anlaşılamadığını söyler. Yani JavaScript içeriğin görünmesi, düz HTML’den biraz daha geç olabilir.

## Hangi riskler var?

| Risk | Neden sorun? |
| --- | --- |
| robots.txt ile JavaScript ve CSS dosyalarını engellemek | Google sayfayı oluşturamaz ve içerik eksik görünebilir |
| Önemli içeriğin yalnızca kullanıcı etkileşimiyle yüklenmesi | Google tıklama gerektiren içeriği göremeyebilir |
| Bağlantıların gerçek `<a href>` olmaması | Google bağlantıyı izleyemeyebilir |
| `#` ile çalışan adresler | Sayfalar ayrı URL olarak görülmeyebilir |
| Durum kodlarının yanlış olması (soft 404) | Bulunamayan sayfalar 200 dönebilir |
| Başlık ve meta açıklamanın sonradan değişmesi | Google farklı bir sürüm görebilir |
| Yavaş oluşturma | Kullanıcı ve tarayıcı için sayfa geç görünür |

## Bağlantılar nasıl olmalı?

Google, bağlantıyı yalnızca `href` özelliğine sahip bir `<a>` HTML öğesi olduğunda tarayabilir; diğer biçimlerdeki bağlantıların çoğunu ayrıştıramaz ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). JavaScript rehberi de `#` parçalarıyla çalışan ve `hashchange` ile sayfa yükleyen yapıyı “kötü kullanım” örneği olarak gösterir; gerçek URL’ler ve History API kullanmak önerilir. Menünüz JavaScript ile çizilse bile bağlantıların gerçek `<a href="/hizmetler/">` olduğundan emin olun.

## Başlık, meta açıklama ve canonical

Başlık, meta açıklama ve canonical gibi öğeleri JavaScript ile eklemek mümkündür; ama Google, canonical için JavaScript kullanılmasını önermediğini söyler (yine de mümkündür; Google oluşturma sırasında bunu alır). Küçük işletme sitelerinde en güvenli yol, bu öğeleri sunucu tarafında doğrudan HTML’de vermektir. Canonical hakkında [canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/) yazımıza bakın.

## Tek sayfalık uygulamalarda durum kodu

İstemci taraflı oluşturulan tek sayfalık uygulamalarda bulunamayan adres için anlamlı bir HTTP durum kodu dönmek zor olabilir. Google, bu durumda soft 404’ten kaçınmak için sunucunun bulunamayan adres için 404 durum koduyla bir hata sayfası göstermesi gibi stratejileri önerir. Ayrıntı için [soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/) yazımıza bakın.

## Google sayfamı nasıl görüyor? Test yöntemleri

1. **URL Denetleme canlı testi.** Search Console’da sayfayı denetleyin, canlı testi çalıştırın ve test edilen sayfayı gösterin; Google’ın gördüğü HTML ve ekran görüntüsünü karşılaştırın ([URL Denetleme](https://support.google.com/webmasters/answer/9012289?hl=tr)).
2. **Sayfa kaynağı ile gerçek sayfayı karşılaştırın.** Tarayıcıda “kaynağı görüntüle” ile gördüğünüz ham HTML ile geliştirici araçlarında (öğeleri incele) gördüğünüz oluşturulmuş HTML’yi karşılaştırın. Önemli metin yalnızca ikincisinde mi?
3. **JavaScript’i devre dışı bırakıp deneyin.** Menü ve ana içerik hâlâ görünüyor mu? Görünüyorsa sağlam bir temeliniz var.
4. **Sayfa dizine ekleme raporuna bakın.** Sayfalar dizinde mi, neden değil?

## Küçük işletme sitesi için kontrol listesi

1. Hizmet, fiyatı etkileyen etkenler, iletişim gibi önemli içerik gerçek HTML’de mi?
2. Menü ve iç bağlantılar `<a href>` ile mi?
3. Her sayfanın kendi gerçek adresi var mı (`#` kullanılmıyor)?
4. robots.txt JavaScript ve CSS dosyalarını engelliyor mu?
5. Başlık ve meta açıklama her sayfada doğru ve benzersiz mi?
6. Bulunamayan adres 404 durum kodu veriyor mu?
7. Sayfa telefonda hızlı açılıyor mu? Bkz. [Core Web Vitals](/blog/core-web-vitals-nedir-lcp-inp-cls/).
8. URL Denetleme canlı testi ile Google’ın gördüğü hâli kontrol ettiniz mi?

## Küçük bir sitede JavaScript gerekli mi?

Çoğu küçük işletme sitesi için ağır JavaScript çerçeveleri gerekmez. Statik ya da sunucuda oluşturulan sayfalar hem daha hızlıdır hem de SEO açısından daha öngörülebilirdir. Site yaptırırken “Hizmet ve iletişim sayfaları HTML olarak sunucudan mı geliyor?” diye sorun; tasarımcıya soracağınız diğer sorular için “SEO uyumlu web sitesi” yazımıza bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisinin yeni sitesi, modern bir JavaScript çerçevesiyle yapılmış. Sayfa kaynağında içerik neredeyse boş; metin tarayıcıda JavaScript çalışınca beliriyor. Menü bağlantıları `#` ile çalışıyor. Search Console’da çoğu sayfa dizinde değil.

Düzeltme: ana içerik ve menü gerçek HTML olarak sunucudan geliyor; bağlantılar `<a href>` ve gerçek adreslerle yeniden kuruluyor; bulunamayan adres 404 döndürüyor; robots.txt’de engel olmadığı doğrulanıyor; ardından önemli sayfalar URL Denetleme canlı testiyle kontrol ediliyor ve birkaç hafta boyunca dizin raporu izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Tasarımcıya sorulacak sorular

Site JavaScript ile yapılacaksa yazılı olarak şunları sorun:

1. Hizmet ve iletişim sayfalarının içeriği sunucudan HTML olarak mı geliyor?
2. Menü bağlantıları gerçek `<a href>` mı?
3. Her sayfanın gerçek bir adresi var mı?
4. Başlık ve meta açıklamalar sunucu tarafında mı ekleniyor?
5. Bulunamayan adres 404 durum kodu veriyor mu?
6. robots.txt’de JavaScript ve CSS dosyaları serbest mi?
7. Telefonda ilk açılış süresi nedir? Yayın öncesi ölçülecek mi?
8. Google’ın gördüğü hâl URL Denetleme canlı testiyle kontrol edilecek mi?

## Sunucuda oluşturma ve statik oluşturma

Birçok modern site çerçevesi sayfaları sunucuda (ya da yayın öncesinde) HTML olarak üretebilir; bu durumda tarayıcıya hazır HTML gider ve JavaScript yalnızca etkileşimi sağlar. Küçük işletme siteleri için bu yaklaşım hem hızlı hem SEO açısından güvenlidir. Siteniz tamamen istemci tarafında çiziliyorsa sunucuda oluşturmaya geçmeyi tasarımcınızla konuşun.

## Denizli SEO bu konuda nasıl yardımcı olur?

JavaScript sitelerinde SEO, yazılım ve arama bilgisini birlikte gerektirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- Google’ın sayfalarınızı gerçekte nasıl gördüğünü canlı testle kontrol ederiz,
- menü, bağlantı, durum kodu ve robots.txt sorunlarını tespit eder, yazılımcıyla birlikte çözeriz,
- önemli içeriğin ve başlıkların sunucu tarafında doğru gelmesini sağlarız,
- bulguları yazılı rapor olarak sunarız.

Sitenizin Google’da eksik göründüğünden şüpheleniyorsanız [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### JavaScript’i devre dışı bırakınca site boş görünüyorsa?

Önemli içerik büyük olasılıkla yalnızca JavaScript ile oluşuyor. Bu içeriğin HTML’de bulunması daha güvenlidir.

### Google tüm JavaScript’i çalıştırır mı?

Google, JavaScript’i Chromium’un güncel sürümüyle çalıştırdığını söyler; yine de engellenmiş kaynaklar ve hatalar içeriğin eksik görünmesine yol açabilir.

## Sık sorulan sorular

### Google JavaScript’i çalıştırabiliyorsa neden sorun yaşıyorum?

Çünkü işlem üç aşamalı ve bazı adımlar geç olabilir; bağlantı, durum kodu ya da engellenmiş kaynak gibi hatalar içeriğin eksik görülmesine yol açabilir.

### React, Vue gibi çerçeveler SEO’ya uygun mu?

Doğru kurulduğunda (bağlantılar, adresler, durum kodları, içeriğin erişilebilirliği) çalışabilir. Küçük siteler için çoğu zaman gerekli değildir.

### JavaScript ile eklenen içerik dizine girer mi?

Google oluşturulan HTML’yi dizine ekleme için kullanır; ama içerik güvenilir biçimde oluşuyor ve erişilebilir olmalıdır. Önemli içeriği HTML’de tutmak daha güvenlidir.

### Sitem JavaScript ile mi yapılmış, nasıl anlarım?

Sayfa kaynağını görüntüleyin; içeriğin çoğu orada yoksa ve yalnızca betik dosyaları görünüyorsa site büyük olasılıkla istemci tarafında çiziliyordur. Tasarımcınıza sorun.

## Kaynaklar

- [Google Search Central: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
- [Google Search Central: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
