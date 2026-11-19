---
title: "URL’deki Kare İşaretinden Sonraki Bölüm Ayrı Sayfa mı?"
description: "URL’deki kare işaretinden (#) sonraki bölüm Google’da ayrı sayfa sayılır mı? URL parçaları, sayfa içi bağlantılar, History API ve tek sayfalık uygulamalar."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir adresin kare işaretinden sonraki parçasının sayfa içi konuma işaret etmesi"
---

URL’deki kare işaretinden (#) sonraki bölüme URL parçası (fragment) denir ve Google genellikle bunu ayrı bir sayfa olarak görmez. Yani alanadi.com/hizmetler/#fiyat ile alanadi.com/hizmetler/ aynı sayfa olarak değerlendirilir. Kare işareti, aynı sayfanın bir bölümüne (başlığa) gitmek için tasarlanmıştır; sayfa içeriğini değiştirmek için kullanılırsa Google bu içeriği ayrı adres olarak bulamaz.

Bu yazıda URL parçasının ne olduğunu, Google’ın bunu nasıl ele aldığını, sayfa içi bağlantılar için doğru kullanımı ve tek sayfalık uygulamalarda parça yerine neyi kullanmanız gerektiğini anlatıyoruz. URL yazımının genel kuralları için [SEO uyumlu URL nasıl yazılır?](/blog/seo-uyumlu-url-nasil-yazilir-turkce-karakter-ve-uzunluk/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## URL parçası (fragment) nedir?

Bir adresin yapısı şöyledir: protokol, alan adı, yol, sorgu parametreleri ve en sonda kare işaretiyle başlayan parça. Örneğin:

`https://alanadi.com/hizmetler/hali-yikama/?renk=beyaz#fiyatlar`

Buradaki `#fiyatlar` bir URL parçasıdır. Tarayıcı bu parçayı sunucuya göndermez; sayfa yüklendikten sonra sayfadaki `id="fiyatlar"` olan öğeye kaydırır. Parça, tarayıcıya “sayfanın şu bölümünü göster” demenin standart yoludur.

Bu yüzden parçayı değiştirmek yeni bir sayfa yüklemez ve sunucuya yeni bir istek göndermez. İçindekiler tablosundaki bağlantılar bu mekanizmayla çalışır ([içindekiler tablosu nasıl hazırlanır?](/blog/icindekiler-tablosu-nasil-hazirlanir/)).

## Google URL parçalarını nasıl ele alır?

Google’ın JavaScript SEO rehberi şunu söyler: Google Arama genellikle URL parçalarını desteklemediğinden, sayfa içeriğini değiştirmek için parçalar kullanılmamalıdır. Rehber, `https://example.com/#/potatoes` gibi parça tabanlı adreslerin kötü bir kullanım örneği olduğunu ve Googlebot’un URL’leri güvenilir biçimde çözemeyeceğini anlatır. Önerilen yaklaşım, parçalar yerine History API’yi kullanmaktır ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)).

Bu cümlelerden iki sonuç çıkar:

1. **Parça içeren iki adres çoğunlukla aynı sayfadır.** `#fiyat` ve `#iletisim` eklenmiş iki adres arama motorunda iki ayrı sonuç olarak görünmez.
2. **Parçayla içerik değiştiren siteler görünürlük kaybeder.** Menüdeki her bağlantı `#/urunler`, `#/hizmetler` gibi parçalarla farklı içerik yüklüyorsa Google bu içeriği ayrı sayfalar olarak dizine eklemeyebilir.

> **Hizmet almak için iletişime geçin.** Sitenizin adres yapısının Google tarafından doğru anlaşıldığını birlikte kontrol edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi durumda kare işareti sorun değildir?

Kare işareti yanlış değildir; yanlış olan, içerik ayırmak için kullanılmasıdır. Şu kullanımlar normaldir:

- **Sayfa içi bölüm bağlantıları.** İçindekiler tablosu, “fiyatlar bölümüne git” gibi aynı sayfadaki başlıklara bağlantılar.
- **Sosyal medya ya da bağlantı paylaşımında bölüm işaretleme.** Paylaşılan adres sayfanın belirli bir bölümünü açar.
- **Etiketleme ve izleme (dikkatle).** Bazı araçlar parça kullanır; ama bunu SEO için kullanmayın.

Bu durumlarda sayfa tek bir adrestir, parça yalnızca kaydırma hedefidir. Arama sonuçlarında aynı sayfa tek kayıt olarak görünür.

## Hangi durumda sorun çıkar?

Sorunlar şu durumlarda başlar:

| Durum | Sorun |
| --- | --- |
| Menü bağlantıları `#/sayfa` biçiminde ve içeriği değiştiriyor | Google her bölümü ayrı sayfa olarak göremez |
| Tek sayfalık uygulama yalnızca parçayla yönlendirme yapıyor | Alt sayfalar dizine girmez |
| Bağlantı `<a href>` yerine yalnızca tıklama olayıyla çalışıyor | Google bağlantıyı keşfedemez |
| Filtre ve sıralama parçayla yapılıyor | Filtreli içerik taranamaz |

Bu durumlarda en önemli düzeltme, bölümlere gerçek adresler vermektir.

## Tek sayfalık uygulamalarda ne yapılır?

React, Vue gibi tek sayfalık uygulamalarda (SPA) bölümleri parça ile yönetmek eski bir yöntemdir. Google’ın rehberi parçalar yerine History API kullanılmasını önerir; bu, adres çubuğundaki yolu sayfa yenilenmeden değiştirmeye yarayan bir tarayıcı özelliğidir. Böylece `/hizmetler/` ve `/iletisim/` gibi gerçek yollar elde edilir ve her yol ayrı bir sayfa olarak taranabilir. Rehber ayrıca, Google’ın bağlantıları yalnızca `href` özelliği olan `<a>` öğeleriyle keşfedebildiğini belirtir.

Pratik adımlar:

1. **Parça tabanlı yönlendirmeyi bırakın.** Yönlendirme kütüphanenizde “history modu”nu etkinleştirin.
2. **Her görünüme gerçek bir adres verin.** `/urunler/`, `/hizmetler/` gibi.
3. **Menüde `<a href>` kullanın.** Tıklama olayına bağlı düğmeler yeterli değildir ([Google’ın takip edebileceği bağlantılar: href ve onclick](/blog/googlein-takip-edebilecegi-baglantilar-href-onclick/)).
4. **Her adres için sunucudan doğru yanıt gelsin.** Doğrudan adrese girildiğinde sayfa açılmalı; yoksa 404 doğru durum koduyla dönmeli ([soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/)).
5. **Başlık, açıklama ve içerik sayfa başına benzersiz olsun.**
6. **Site haritasına gerçek adresleri ekleyin.**

JavaScript ağırlıklı sitelerde oluşturma yöntemi de önemlidir ([SSR ve CSR farkı](/blog/ssr-ve-csr-farki-seo-icin-render-yontemi-secimi/)).

## Eski “#!” (hashbang) adresleri ne olur?

Eskiden AJAX sitelerini taranabilir kılmak için “#!” içeren adresler kullanılırdı. Bu yöntem eskidir ve güncel Google rehberleri bunu önermez; yerine History API ile gerçek adresler kullanılır. Sitenizde hâlâ “#!” adresleri varsa bunları gerçek yollara taşıyın ve eski adresleri yönlendirin; yönlendirme sunucu tarafında yapılmalıdır, çünkü sunucu parçayı görmez. Bu tür taşımalarda geçici çözümlerden önce kalıcı yapıyı kurmak daha sağlıklıdır.

## Analiz ve izlemede parçalar

Google Analytics ve benzeri araçlar çoğu zaman sayfa yolunu parçadan bağımsız raporlar; yani `#fiyat` tıklamaları ayrı sayfa olarak görünmez. Sayfa içi bölüm kullanımını ölçmek için bölüm tıklamalarını ayrı bir olay olarak izlemeniz gerekebilir. Ayrıca UTM gibi izleme değerlerini parçaya koymak yerine sorgu parametresi olarak kullanmak genellikle daha güvenilirdir ([UTM parametreli URL’ler SEO için nasıl yönetilir?](/blog/utm-parametreli-urller-seo-icin-nasil-yonetilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir ev tekstili mağazasının yeni sitesi tek sayfalık bir uygulama olarak yapılmış; menüdeki bağlantılar `#/nevresim`, `#/havlu` ve `#/iletisim` biçiminde. Search Console’da yalnızca ana sayfanın dizinde olduğu, kategori içeriklerinin görünmediği fark ediliyor.

Çözüm: geliştirici yönlendirmeyi History API tabanlı hâle getiriyor; adresler `/nevresim/`, `/havlu/` ve `/iletisim/` oluyor. Menü bağlantıları `<a href>` kullanıyor, her sayfanın benzersiz başlığı ve açıklaması hazırlanıyor, site haritasına yeni adresler ekleniyor. Birkaç hafta boyunca Search Console’da kategorilerin dizine girmesi izleniyor. Bu örnek sonuç vaadi değildir; sırayı gösterir.

## Sık yapılan hatalar

1. **Parçayla içerik değiştirmek.** Google bu içeriği ayrı sayfa olarak bulmaz.
2. **Menüyü tıklama olayıyla çalıştırmak.** Gerçek `href` yoksa bağlantı keşfedilmez.
3. **Parçalı adresleri site haritasına eklemek.** Site haritasında gerçek, parçasız adresler olmalı.
4. **Sayfa içi bağlantıyı yanlış id’ye yazmak.** Bağlantı hedef bulamaz ve sayfa başına gider.
5. **Eski “#!” adreslerini bırakmak.** Gerçek adreslere taşıyın.
6. **Sayfa başına benzersiz başlık yazmamak.** Tek sayfalık uygulamada tüm görünümler aynı başlığı taşırsa karışıklık doğar.

## Sitenizde parçalı adres kullanımı nasıl denetlenir?

Parça kullanımını denetlemek için sitenizin menüsüne ve bağlantılarına bakın. Menüdeki bağlantıların üzerine gelip adres çubuğunda `#/` biçimli yollar olup olmadığını kontrol edin; tarayıcıda bir bağlantıya sağ tıklayıp “bağlantı adresini kopyala” ile adresi yapıştırarak da görebilirsiniz. Ardından Google’da `site:alanadi.com` araması yapıp kategori ve hizmet sayfalarınızın ayrı adreslerle görünüp görünmediğine bakın; yalnızca ana sayfa çıkıyorsa içerik parçayla yükleniyor olabilir.

Search Console’da URL Denetleme aracına bir alt görünüm adresini yazıp Google’ın hangi sayfayı gördüğüne bakmak da yararlıdır. Sorun varsa geliştiriciye şu cümleyle iletin: “Parça tabanlı yönlendirmeyi History API ile gerçek adreslere çevirelim; her görünüm kendi adresinde, `<a href>` ile bağlı ve benzersiz başlıklı olsun.” Bu cümle, işin kapsamını netleştirir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin adres yapısını ve bağlantılarını inceler, parça ile içerik yüklenen bölümleri tespit ederiz,
- gerçek adreslere geçiş için geliştiriciye net bir yönlendirme ve bağlantı planı yazarız,
- başlık, açıklama ve site haritası uyumunu kontrol ederiz,
- sonuç vaat etmeden, dizin durumunu Search Console ile izleriz.

Sitenizin adres yapısı için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Adres yapınızın Google tarafından doğru anlaşıldığını birlikte doğrulayalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Kare işaretinden sonrası Google’da ayrı sayfa olarak görünür mü?

Hayır, genellikle görünmez. Google URL parçalarını genellikle desteklemediğini belirtir; parçalı adresler aynı sayfa olarak değerlendirilir.

### Sayfa içi bağlantı için # kullanmak sorun mu?

Hayır. Sayfanın bir bölümüne gitmek için # kullanmak doğru ve yaygındır; yeter ki içerik değişmesin.

### Tek sayfalık sitede SEO nasıl yapılır?

Her bölüm için gerçek adres kullanmak ya da bölüm bağlantıları için parçayı sadece kaydırma amacıyla kullanıp tek sayfanın içeriğini güçlü yazmak gerekir. Ayrıntı için [tek sayfalık web sitelerinde SEO](/blog/tek-sayfalik-web-sitelerinde-seo/) yazısına bakın.

### History API nedir?

Tarayıcının sayfayı yenilemeden adres çubuğundaki yolu değiştirmeye izin veren özelliğidir. Tek sayfalık uygulamalarda gerçek adresler oluşturmak için kullanılır.

### Parçayı sitemap’e ekleyebilir miyim?

Hayır. Site haritasına parçasız, gerçek sayfa adreslerini ekleyin.

## Kaynaklar

- [Google Arama Merkezi: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
