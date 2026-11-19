---
title: "Sonsuz Kaydırmalı Sayfalar SEO İçin Nasıl Hazırlanır?"
description: "Sonsuz kaydırma (infinite scroll) kullanılan sayfalar SEO için nasıl hazırlanır? Sayfalara ayrılmış URL’ler, taranabilir bağlantılar ve güvenli uygulama adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Aşağı kaydırdıkça yüklenen bir ürün listesi ve altında numaralı sayfa adresleri"
---

Sonsuz kaydırma, kullanıcı sayfayı aşağı kaydırdıkça yeni içeriğin otomatik yüklendiği bir listeleme biçimidir. Google’ın tarayıcıları sayfayı kaydırmaz ve düğmelere tıklamaz; bu yüzden yalnızca kaydırmayla yüklenen ürünler ya da yazılar Google tarafından bulunamayabilir. SEO için çözüm, sonsuz kaydırmayı bırakmak değil, içeriğin altına gerçek bağlantılarla ve benzersiz adreslerle sayfalara ayrılmış bir yapı kurmaktır.

Bu yazıda sonsuz kaydırmanın neden sorun çıkarabildiğini, Google’ın sayfalara ayırma konusundaki önerilerini, adım adım hazırlık yolunu ve test yöntemini anlatıyoruz. Genel sayfalama bilgisi için [kategori ve liste sayfalarında sayfalama SEO’su](/blog/kategori-ve-liste-sayfalarinda-sayfalama-seo-su/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Sonsuz kaydırma neden SEO sorunu yaratabilir?

Google’ın e-ticaret rehberi, sayfalara ayırma ve artımlı yükleme seçeneklerini karşılaştırır: “daha fazla yükle” düğmeleri ve sonsuz kaydırma genellikle JavaScript ile gerçekleştirilir. Rehber, Google’ın dizine eklenecek sayfaları bulmak için çoğunlukla `<a>` öğelerinin `href` özelliğindeki URL’leri taradığını; Google’ın tarayıcılarının düğmeleri “tıklamadığını” ve genellikle mevcut sayfa içeriğinin güncellenmesi için kullanıcı işlemlerini gerektiren JavaScript işlevlerini tetiklemediğini belirtir ([sayfalara ayırma, artımlı sayfa yükleme ve Google Arama](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)).

Bunun anlamı basittir: ilk yüklemede görünen 20 ürünün altındaki 200 ürün yalnızca kullanıcı kaydırınca yükleniyorsa, Google bu ürünleri ayrı bir bağlantı üzerinden bulamıyor olabilir. Ürün sayfalarına başka yerlerden bağlantı verilmiyorsa bu ürünlerin keşfi zorlaşır. Rehber, sonsuz kaydırmanın artı ve eksilerini de sayar: tek sayfa ve kullanım kolaylığı artı; belirsiz sonuç boyutu ve “kaydırma yorgunluğu” ise eksidir.

> **Hizmet almak için iletişime geçin.** Listeleme sayfalarınızın taranabilirliğini birlikte test edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Google sayfalara ayırma için ne öneriyor?

Aynı rehber, sayfalara ayrılmış içerik için şu temel uygulamaları sıralar:

- **Sayfalara sırayla bağlantı verin.** Bir sayfadan bir sonrakine ve bir öncekine `<a href>` bağlantıları olsun.
- **URL’leri doğru kullanın.** Her sayfaya benzersiz bir URL verin; örneğin `?page=2` gibi bir parametre kullanılabilir. Sayfalara ayrılmış sıralamadaki ilk sayfayı bütün sayfaların standart adresi yapmayın.
- **Filtre ve alternatif sıralama URL’lerini dizine eklemekten kaçının.**

Rehber ayrıca sayfalara ayrılmış sıralamadaki sayfalarda aynı başlık ve açıklamanın kullanılabileceğini söyler. Yani her sayfa için ayrı başlık yazmak zorunlu değildir; ama her sayfanın kendi adresi ve bağlantısı olmalıdır.

## Sonsuz kaydırmayı arama dostu yapmanın yolu

Kaydırma deneyimini koruyup taranabilirlik kazanmanın pratik yolu “sayfalı sonsuz kaydırma”dır:

1. **Arka planda sayfalara ayrılmış gerçek adresler oluşturun.** `/urunler/?page=1`, `/urunler/?page=2` gibi. Her adres, doğrudan açıldığında o sayfanın ürünlerini göstermeli.
2. **Sayfanın altına gerçek bağlantılar koyun.** Kullanıcı kaydırmayla yeni ürünler yükler, ama sayfanın HTML’inde `<a href="/urunler/?page=2">` bağlantısı da bulunur. Bağlantı görünür ya da altbilgide olabilir.
3. **Kaydırma sırasında adresi güncelleyin.** History API ile adres çubuğundaki adresi kullanıcının bulunduğu sayfaya göre güncelleyin; paylaşılan adres doğru bölümü açsın. Parça (#) kullanmayın ([URL’deki kare işaretinden sonraki bölüm](/blog/url-kare-isaretinden-sonraki-bolum-ayri-sayfa-sayilir-mi/)).
4. **İlk yüklemede içerik HTML’de olsun.** Ürünlerin ilk grubu JavaScript beklemeden sunucudan gelsin.
5. **Site haritasına ve iç bağlantılara güvenin.** Ürün sayfalarına kategori ve başka sayfalardan da bağlantı verin; site haritası keşfi destekler.

Bu yapı, hem kullanıcıya kaydırma rahatlığı hem de Google’a taranabilir sayfalar sunar.

## Alternatif: “Daha fazla yükle” düğmesi

Düğme, sonsuz kaydırmadan daha kontrollüdür ama aynı teknik sorunu taşır: Google düğmeye tıklamaz. Düğmeyi, bir sonraki sayfaya giden gerçek bir bağlantı üzerine kurmak sorunu çözer: düğme bir `<a href="?page=2">` bağlantısı olsun; JavaScript bu bağlantıyı yakalayıp içeriği sayfaya ekleyebilir, ama JavaScript çalışmasa bile bağlantı çalışır. Bu yaklaşıma “aşamalı geliştirme” denir ve hem erişilebilirlik hem arama motorları için güvenlidir.

Klasik numaralı sayfalama ise en basit ve en güvenilir seçenektir; özellikle çok sayıda ürünü olan sitelerde kullanıcıya konum duygusu verir. Sonsuz kaydırma yerine sayfalamaya geçmeyi düşünmek, SEO ve performans açısından da çoğu zaman daha kolaydır.

## Test nasıl yapılır?

Şunları tek tek kontrol edin:

- Sayfa kaynağında (kaydırmadan önce) sonraki sayfaya giden `<a href>` bağlantısı var mı?
- `?page=2` gibi adresler doğrudan açıldığında ilgili ürünleri gösteriyor mu?
- Search Console’daki URL Denetleme ile bir sayfalı adresi canlı test edin; Google’ın gördüğü HTML’de ürünler var mı?
- JavaScript kapalıyken sayfa temel içeriği ve bağlantıları gösteriyor mu?
- Derin sayfalardaki ürünlerin kendi sayfaları dizine girmiş mi? `site:` aramasıyla ve Search Console’da kontrol edin.
- Filtre ve sıralama adresleri dizine eklenmeyecek şekilde yönetiliyor mu? ([e-ticarette filtreli sayfalar SEO için nasıl yönetilir?](/blog/e-ticarette-filtreli-sayfalar-seo-icin-nasil-yonetilir/))

JavaScript ile oluşan içeriğin genel durumu için [JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/) yazısına bakabilirsiniz.

## Performans ve kullanıcı deneyimi notları

Sonsuz kaydırma, uzun sayfalarda bellek ve hız sorunu yaratabilir; yüzlerce ürün aynı sayfada birikince sayfa yavaşlar. Etkileşim gecikmesi ve düzen kayması gibi sayfa deneyimi ölçülerini izleyin ([Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/)). Alt bilgiye ulaşmak da zorlaşır; sürekli yüklenen içerik altbilgideki iletişim bilgilerine erişimi engelleyebilir. Altbilgiyi sabit tutmak ya da sayfalamaya geçmek bu sorunu çözer.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili e-ticaret sitesinde kategori sayfası sonsuz kaydırmayla ürün yüklüyor. İlk 24 ürünün altındaki ürünler yalnızca kaydırınca geliyor. Search Console’da derindeki ürünlerin çoğunun dizine girmediği görülüyor.

Çözüm: geliştirici sayfalı adresler oluşturuyor (`?page=2`, `?page=3`); sayfanın altında sonraki sayfaya giden gerçek bağlantılar yer alıyor; kaydırma sırasında adres History API ile güncelleniyor. İlk yüklemede ürünler sunucudan geliyor. Site haritasına ürün sayfaları ekleniyor. Birkaç hafta boyunca Search Console’da derin ürünlerin dizine girmesi izleniyor. Bu örnek sonuç vaadi değildir; uygulama sırasını gösterir.

## Sık yapılan hatalar

1. **İçeriği yalnızca kaydırma olayıyla yüklemek.** Google kaydırmaz.
2. **Bağlantı yerine düğme kullanmak.** Düğmeler tıklanmaz; `<a href>` gerekir.
3. **Tüm sayfaların standart adresini ilk sayfa yapmak.** Google rehberi bunu önermez.
4. **Filtre adreslerini dizine eklemek.** Gereksiz kopya sayfalar doğar.
5. **Adresi hiç güncellememek.** Kullanıcı bir noktayı paylaşamaz, geri tuşu bozulur.
6. **Test etmemek.** URL Denetleme ile Google’ın gördüğünü kontrol edin.

## Uygulama öncesi geliştiriciye iletilecek kısa brief

Geliştiriciyle konuşurken şu dört maddeyi yazılı verin: “Listeleme sayfaları sayfalı adresler (`?page=n`) üretsin ve her adres doğrudan açıldığında ilgili ürünleri sunucudan versin.” “Sayfanın altında sonraki sayfaya giden gerçek `<a href>` bağlantısı bulunsun; kaydırma yalnızca bu bağlantıyı JavaScript ile destekleyen bir iyileştirme olsun.” “Kaydırma sırasında adres History API ile güncellensin, parça (#) kullanılmasın.” “Filtre ve sıralama adresleri dizine eklenmesin.” Bu dört madde, işin kapsamını netleştirir ve test listesi olarak da kullanılabilir. Uygulama bittikten sonra aynı dört maddeyi tek tek doğrulayın.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- listeleme sayfalarınızın sayfalama ve taranabilirlik yapısını URL Denetleme ve kaynak kod üzerinden test ederiz,
- sayfalı adres, gerçek bağlantı ve History API planını geliştiriciniz için net talimata çeviririz,
- filtre ve sıralama adreslerinin dizin yönetimini planlarız,
- sonuç vaat etmeden, derin sayfaların dizin durumunu Search Console ile izleriz.

Listeleme yapınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sonsuz kaydırmalı sayfalarınızı Google’a açık hâle getirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Google sonsuz kaydırmayı destekler mi?

Google’ın tarayıcıları kaydırmaz ve düğmelere tıklamaz; bu yüzden içeriğin yalnızca kaydırmayla yüklenmesi sorun çıkarabilir. Gerçek bağlantılı sayfalı adresler gerekir.

### Sonsuz kaydırma yerine sayfalamaya geçmeli miyim?

Çoğu zaman daha basit ve güvenilirdir. Kullanıcı deneyimi gerekçesi güçlüyse sayfalı sonsuz kaydırmayı tercih edebilirsiniz.

### Sayfalı adreslerin hepsi dizine girmeli mi?

Ürünlerin keşfi için sayfaların taranabilir olması önemlidir. Filtre ve sıralama varyasyonlarını ise dizine eklemekten kaçının.

### Her sayfa için ayrı başlık yazmalı mıyım?

Google rehberi, sayfalara ayrılmış sıralamadaki sayfalarda aynı başlık ve açıklamanın kullanılabileceğini belirtir. Benzersiz başlık yazmak zorunlu değildir.

### Sorunun çözüldüğünü nasıl anlarım?

URL Denetleme ile sayfalı adresleri test edin ve Search Console’da derin sayfaların dizine girmesini izleyin.

## Kaynaklar

- [Google Arama Merkezi: Sayfalara ayırma, artımlı sayfa yükleme ve bunların Google Arama’ya etkisi](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)
- [Google Arama Merkezi: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
