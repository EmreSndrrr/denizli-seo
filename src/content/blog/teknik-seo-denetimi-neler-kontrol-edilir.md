---
title: "Teknik SEO Denetimi: Neler Kontrol Edilir?"
description: "Teknik SEO denetiminde hangi başlıklar incelenir? Tarama, dizine ekleme, mobil uyum, hız, yönlendirme ve yinelenen sayfa kontrolleriyle adım adım liste."
date: 2026-11-13
service: teknik-seo
imageAlt: "Tarama, dizine ekleme, hız ve mobil başlıklı bir teknik denetim kontrol listesi"
---

Teknik SEO denetimi, sitenizin Google tarafından bulunmasını, taranmasını, dizine eklenmesini ve hızlı, mobil uyumlu biçimde gösterilmesini engelleyen sorunları arama işidir. Beş ana başlığı kontrol edersiniz: tarama ve dizine ekleme, mobil uyum, hız, adres ve yönlendirme düzeni, yinelenen sayfalar. Sonuç, öncelik sırasıyla yazılmış bir düzeltme listesidir.

İyi bir denetim “yüz uyarı” değil, “önce şu üçünü düzeltin” der. Çünkü her uyarı aynı ağırlıkta değildir ve çoğu sitede yalnızca birkaç sorun gerçek kayıp yaratır. Bu yazı denetimin neleri kapsadığını, hangi araçlarla yapıldığını ve çıktının nasıl okunacağını anlatıyor. Denetimi bize yaptırmak isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyin.

## Teknik SEO denetimi neden yapılır?

İçerik ve bağlantı ne kadar güçlü olursa olsun, Google sayfayı bulamıyor, tarayamıyor ya da dizine ekleyemiyorsa sonuç alınamaz. Google’ın anlatımına göre arama üç aşamada çalışır ve tüm sayfalar her aşamadan geçmez ([Google Arama’nın işleyişi](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)). Denetim, sayfalarınızın hangi aşamada takıldığını bulur.

Denetimin gerekli olduğu tipik anlar:

- Site yeni kurulduğunda ya da yenilendiğinde,
- Aramada beklenmedik düşüş yaşandığında,
- Sayfalar dizine eklenmediğinde,
- Site yavaşladığında ya da mobilde sorun çıktığında,
- Uzun süredir hiç kontrol yapılmadığında.

## 1. Tarama ve dizine ekleme kontrolleri

İlk soru: Google sayfalarınıza ulaşabiliyor mu?

- **robots.txt:** Dosya sitenin kök dizininde mi, önemli bölümleri engelliyor mu? Google’a göre robots.txt bir sayfayı Google’ın dışında tutma mekanizması değildir; bunun için `noindex` ya da şifre koruması gerekir ([robots.txt’ye giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)).
- **Site haritası:** Güncel mi, yalnızca dizine eklenmesi istenen adresleri içeriyor mu? Tek harita 50 MB ya da 50.000 URL ile sınırlıdır ([site haritası oluşturma](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)).
- **noindex etiketleri:** Yanlışlıkla önemli sayfaya konmuş mu? Hem robots.txt ile engellenip hem noindex eklenmesi, etiketin görülmesini engeller.
- **Sayfa dizine ekleme raporu:** Dizine eklenmeyen adresler ve nedenleri nelerdir?

Bu aşamayı ayrıntılı anlatan yazılarımız: [robots.txt nedir?](/blog/robots-txt-nedir-nasil-hazirlanir/) ve [Google sayfanızı nasıl bulur?](/blog/google-sayfanizi-nasil-bulur-tarama-ve-dizine-ekleme/)

## 2. Mobil uyum kontrolleri

Google, dizine ekleme ve sıralama için sitenizin akıllı telefon aracısıyla taranan mobil sürümünü kullanır ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Bu yüzden mobil sürümde eksik içerik doğrudan kayıp demektir.

Denetimde şunlara bakılır:

- Mobil sürümde masaüstündeki ana içerik var mı?
- Görseller ve başlıklar mobilde de mevcut mu?
- Menü ve düğmeler dokunmatik kullanıma uygun mu?
- Telefonda sayfa yatay kaydırma gerektiriyor mu?

## 3. Hız ve sayfa deneyimi kontrolleri

Hız denetiminde Core Web Vitals’ın üç metriğine bakılır: LCP, INP ve CLS. Google ve web.dev’in belirttiği iyi eşikler LCP için 2,5 saniye, INP için 200 milisaniye ve CLS için 0,1’dir. Ölçüm hem gerçek kullanıcı hem laboratuvar verisiyle yapılmalıdır; farkı [site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/) yazısında anlattık.

Denetim çıktısında hız sorunu şu biçimde görünür: “Ana sayfada LCP öğesi 3,4 sn’de yükleniyor; büyük kahraman görseli ve sunucu yanıt süresi başlıca neden.” Yani yalnızca puan değil, neden ve çözüm yönü de yazılır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 4. Adres, yönlendirme ve durum kodu kontrolleri

Bu bölüm sitenin “trafik düzenini” inceler:

- **http ve https, www ve www’suz:** Hepsi tek bir standart adrese yönlendiriyor mu?
- **Yönlendirme türleri:** Kalıcı taşımalarda 301/308 kullanılmış mı? Google’a göre geçici yönlendirmeler standart seçimi için sinyal sayılmaz ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).
- **Zincir ve döngüler:** Bir adres birden fazla adımdan geçiyor mu?
- **404 ve soft 404:** Silinmiş sayfalar doğru kodu döndürüyor mu, değerli sayfalar kaybolmuş mu?
- **5xx hataları:** Sunucu hataları tarama sıklığını düşürüyor mu?

Kodların anlamı için [HTTP durum kodları](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/) yazısına bakın.

## 5. Yinelenen sayfa ve standart adres kontrolleri

Aynı içerik birden fazla adreste yayınlanıyorsa Google hangisini göstereceğini seçmek zorunda kalır. Google, standart adres belirtmede yönlendirme ve `rel="canonical"` etiketini güçlü, site haritasını zayıf sinyal olarak anlatır; çelişen tekniklerin kullanılmamasını önerir ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)).

Denetimde sıkça rastlananlar: parametreli adresler, eğik çizgili ve çizgisiz sürümler, yazdırma sürümleri ve etiket ya da arşiv sayfaları. Her biri için “hangisi standart?” sorusu cevaplanmalıdır.

## 6. İç bağlantı ve site yapısı kontrolleri

Google, bağlantıyı yalnızca `href` özelliği olan `<a>` öğesiyle tarayabilir ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Denetimde yetim sayfalar, kırık iç bağlantılar, anlamsız bağlantı metinleri ve satış sayfalarının iç bağlantı alıp almadığı bakılır. Menüde olmayan, hiçbir yerden bağlanmayan sayfalar keşfedilmekte zorlanır.

## Denetimde hangi araçlar kullanılır?

Ücretsiz araçlar çoğu küçük işletme için yeterlidir:

- **Search Console:** Dizine ekleme, Core Web Vitals, mobil kullanılabilirlik ve bağlantılar raporları.
- **PageSpeed Insights:** Sayfa bazında hız.
- **Tarayıcı geliştirici araçları:** Durum kodları, yüklenen dosyalar.
- **Site tarayıcı yazılımları:** Tüm siteyi gezip kırık bağlantı, yönlendirme ve başlık sorunlarını listeler.

Araç çıktısı raporu değildir; asıl iş, bulguları önem sırasına koymak ve hangisinin gerçekten düzeltilmesi gerektiğini yorumlamaktır.

## İyi bir denetim raporunda ne bulunur?

Rapor üç şeyi net söylemelidir:

1. **Bulgu:** Ne sorun var, hangi sayfalar etkileniyor?
2. **Etki:** Bu sorun neden önemli, ne kaybettiriyor?
3. **Çözüm:** Ne yapılmalı, hangi sırayla?

Öncelik “yüksek, orta, düşük” diye ayrılmalı ve her bulgu kanıtla (ekran görüntüsü, rapor satırı, adres listesi) desteklenmelidir. Sıralama garantisi veren, yalnızca puan sunan ya da hiçbir kanıt göstermeyen raporlardan kaçının.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya mağazasının sitesi yenilendikten sonra kategori sayfaları aramada görünmüyor.

- **Bulgu 1:** Yeni sitede kategori sayfalarına yanlışlıkla noindex etiketi konmuş.
- **Bulgu 2:** Eski adreslerin bir kısmı 302 ile yönlendiriliyor.
- **Bulgu 3:** Mobilde kategori açıklama metni gizleniyor.
- **Öncelik:** Önce noindex kaldırılıyor, sonra yönlendirmeler 301 yapılıyor, en son mobil içerik eşitleniyor.

Bu örnek bir sonuç vaadi değildir; denetim sorunları bulur, sıralama ise birçok etkene bağlıdır.

## Denetimi ne sıklıkla yapmalısınız?

Küçük bir kurumsal site için yılda bir kapsamlı denetim, aylık hafif kontroller yeterlidir. Büyük, sık güncellenen ya da e-ticaret siteleri için üç ayda bir denetim daha güvenlidir. Her yenileme, taşıma ya da büyük içerik değişikliğinden önce ve sonra mutlaka kontrol yapın.

## Sık yapılan altı hata

1. **Araç çıktısını rapor sanmak.**
2. **Her uyarıyı aynı önemde görmek.**
3. **Mobil sürümü atlayıp yalnızca masaüstüne bakmak.**
4. **Düzeltmeden sonra yeniden ölçmemek.**
5. **Tek seferlik denetimle yetinmek.**
6. **Denetim sonrası uygulamayı bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Teknik denetimi biz yapıp bulguları anlaşılır bir yol haritasına çeviririz. [Teknik SEO hizmetimizde](/teknik-seo/):

- tarama, dizine ekleme, mobil, hız, yönlendirme ve yinelenen sayfa başlıklarını birlikte inceleriz,
- bulguları önem sırasına koyup kanıtlarıyla yazılı raporlarız,
- düzeltmeleri sizin ekibinizle ya da bizim uygulamamızla gerçekleştiririz,
- sonuçları Search Console’da izleriz.

Sitenizin denetimini istiyorsanız [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Teknik SEO denetimi ne kadar sürer?

Süre sitenin büyüklüğüne bağlıdır; küçük bir kurumsal site için birkaç gün, büyük siteler için daha uzun. Önce kapsam konuşulur.

### Denetimi kendim yapabilir miyim?

Temel kontrolleri Search Console ve PageSpeed Insights ile yapabilirsiniz. Bulguları önceliklendirmek ve düzeltmeyi planlamak için deneyim gerekir.

### Denetim sıralamayı yükseltir mi?

Hayır, doğrudan garanti etmez. Denetim engelleri bulur; kaldırıldıklarında sayfalarınız Google tarafından daha rahat değerlendirilir.

### Denetim sonrası düzeltmeler kimin işi?

Bu anlaşmaya bağlıdır: raporu teslim edip siz uygulayabilirsiniz ya da uygulamayı da bize bırakabilirsiniz.

### Denetimden sonra neyi izlemeliyim?

Dizine ekleme, Core Web Vitals ve bağlantılar raporlarını ayda bir kontrol edin.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’nın işleyiş şekliyle ilgili ayrıntılı kılavuz](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)
- [Google Arama Merkezi: Robots.txt dosyasına giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
- [Google Arama Merkezi: Site haritası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)
- [Google Arama Merkezi: Mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Arama Merkezi: Standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Arama Merkezi: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
