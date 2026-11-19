---
title: "Google’ın Takip Edebileceği Bağlantılar: Href ve Onclick"
description: "Google’ın takip edebileceği bağlantılar nasıl oluşturulur? href ve onclick farkı, taranabilir bağlantı kuralları, JavaScript menüleri ve test yöntemi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Gerçek href bağlantısı ile yalnızca tıklama olayıyla çalışan düğme arasındaki fark"
---

Google’ın takip edebileceği bir bağlantı, `href` özniteliğinde gerçek bir adres bulunan bir `<a>` öğesidir. Yalnızca `onclick` olayıyla çalışan düğmeler, `href` içermeyen etiketler ya da JavaScript’le adres üreten yapılar Google için güvenilir bağlantı sayılmaz. Bu yüzden bir menü, kategori listesi ya da sonraki sayfa düğmesi insan gözüyle bağlantı gibi görünse bile, altında gerçek bir `<a href="...">` yoksa Google o sayfaları keşfedemeyebilir.

Bu yazıda taranabilir bağlantının kuralını, doğru ve yanlış örnekleri, JavaScript menülerindeki tuzakları ve kendi sitenizde bağlantıları nasıl test edeceğinizi anlatıyoruz. Bağlantı bilgisinin genel çerçevesi için [iç bağlantı stratejisi: küçük siteler için rehber](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Google bağlantıları nasıl keşfeder?

Google, bir sayfadaki bağlantıları izleyerek başka sayfaları keşfeder. Google’ın bağlantı rehberi, Google’ın bağlantıyı yalnızca `href` özelliğine sahip bir `<a>` HTML öğesi olduğunda keşfedebildiğini belirtir; ayrıca `<a>` öğenizdeki URL’nin Google tarayıcılarının istek gönderebileceği gerçek bir web adresi olarak çözümlenmesi gerektiğini söyler ([Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)).

Rehber doğru ve yanlış örnekleri de verir. Taranabilir örnekler arasında `<a href="/products/category/shoes">` ve `href` ile birlikte bir `onclick` bulunan `<a href="/products/category/shoes" onclick="javascript:goTo('shoes')">` yer alır. Taranabilir olmayan örnekler arasında `<a routerLink="products/category">`, `<span href="https://example.com">` ve `<a onclick="goto('https://example.com')">` bulunur. Yani `onclick` kullanmak tek başına sorun değildir; sorun, gerçek bir `href` olmamasıdır.

## Doğru ve yanlış örnekler

| Örnek | Google için taranabilir mi? |
| --- | --- |
| `<a href="/hizmetler/">Hizmetler</a>` | Evet |
| `<a href="/hizmetler/" onclick="izle()">Hizmetler</a>` | Evet (href var) |
| `<a onclick="git('/hizmetler/')">Hizmetler</a>` | Hayır (href yok) |
| `<span href="/hizmetler/">Hizmetler</span>` | Hayır (a öğesi değil) |
| `<button onclick="git('/hizmetler/')">Hizmetler</button>` | Hayır (düğme bağlantı değil) |
| `<a href="#">Hizmetler</a>` ve JavaScript ile yönlendirme | Hayır (adres gerçek değil) |
| `<a href="javascript:git()">Hizmetler</a>` | Hayır (gerçek adres değil) |

Tabloya bakarken şu kuralı hatırlayın: bağlantının gittiği yer HTML’de yazılı olmalı. JavaScript ile “tıklanınca belirlenen” bir adres, Google’ın göremeyeceği bir adrestir.

> **Hizmet almak için iletişime geçin.** Menü ve bağlantı yapınızın Google tarafından takip edilebildiğini birlikte test edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Bağlantı metni de önemli mi?

Evet. Google’ın rehberi, bağlantı metninin (anchor text) açıklayıcı, kısa ve hedef sayfayla alakalı olmasını önerir. “Buraya tıklayın” ya da “devamı” gibi genel ifadeler yerine hedefin ne olduğunu anlatan bir ifade kullanın. Örneğin “Merkezefendi’de halı yıkama fiyatları” bağlantısı, “buraya tıklayın”dan çok daha bilgilendiricidir. Görsel bağlantılarda ise görselin alt metni bağlantı metni gibi çalışır. Bağlantı metninin aşırı optimize edilmesi ise spam sayılabilir; dengeli kullanım için [bağlantı metni (anchor) dağılımı nasıl olmalı?](/blog/baglanti-metni-anchor-dagilimi-nasil-olmali/) yazısına bakın.

## JavaScript menülerindeki yaygın tuzaklar

Modern sitelerde bağlantı sorunları çoğunlukla JavaScript menülerinden gelir:

- **Çerçeveye özgü yönlendirme öznitelikleri.** `routerLink` gibi öznitelikler tek başına `href` üretmeyebilir. Kullandığınız çerçevenin belgelerinde, bağlantının gerçek `<a href>` olarak oluşturulduğundan emin olun.
- **Düğme olarak kodlanmış menüler.** Tasarımcı bağlantıyı `<button>` ile yapmış olabilir; görünüm aynı ama bağlantı değildir.
- **Açılır menüler.** Menü alt öğeleri yalnızca fareyle üzerine gelince oluşturuluyorsa Google görmeyebilir. Alt bağlantılar sayfa yüklenirken HTML’de bulunmalı.
- **“Daha fazla göster” düğmeleri.** Google düğmelere tıklamaz; gizli içeriğin bağlantıları ilk HTML’de bulunmalı ya da gerçek adrese gitmeli.
- **Sayfalama ve filtre kontrolleri.** Yalnızca tıklama olaylarıyla çalışıyorsa sayfalar keşfedilmez ([sonsuz kaydırmalı sayfalar SEO için nasıl hazırlanır?](/blog/sonsuz-kaydirma-kullanilan-sayfalar-seo/)).

JavaScript ağırlıklı sitelerde oluşturma yöntemi de önemlidir; ayrıntı için [SSR ve CSR farkı: SEO için render yöntemi seçimi](/blog/ssr-ve-csr-farki-seo-icin-render-yontemi-secimi/) yazısına bakabilirsiniz.

## Kendi sitenizde nasıl test edersiniz?

Şunları tek tek kontrol edin:

1. **Sayfa kaynağını açın.** Tarayıcıda “sayfa kaynağını görüntüle” ile ham HTML’e bakın; menü bağlantılarının `<a href>` olarak göründüğünü doğrulayın.
2. **JavaScript’i kapatıp deneyin.** Menü ve ana bağlantılar hâlâ görünüyor mu?
3. **URL Denetleme’de canlı testi çalıştırın.** Google’ın gördüğü oluşturulmuş HTML’de bağlantılar var mı?
4. **Bir SEO tarama aracı kullanın.** Araç menü bağlantılarını izleyip tüm sayfalara ulaşabiliyor mu? Ulaşamıyorsa bu bağlantılar taranamaz demektir.
5. **Dizin durumuna bakın.** Menüden erişilen sayfalar Search Console’da dizine giriyor mu?
6. **Yetim sayfaları arayın.** Bağlantısız kalan sayfalar çıkıyorsa nedeni araştırın ([yetim sayfalar nasıl bulunur?](/blog/yetim-sayfalar-nasil-bulunur/)).

## Bağlantı yapısı için tasarım ve geliştirme notları

Tasarımcı ve geliştiriciye iletirken şu üç cümle işi netleştirir: “Navigasyon ve içerik bağlantıları gerçek `<a href>` ile yazılsın.” “Tıklanabilir kartlar, kartın içindeki başlığa gerçek bir bağlantı koysun.” “Açılır menü bağlantıları sayfa ilk yüklendiğinde HTML’de bulunsun.” Kartın tamamını tıklanabilir yapmak için başlığa verilen bağlantının alanı kartı kaplayacak şekilde genişletilebilir; böylece hem görünüm hem bağlantı bozulmaz. Bu kurallar, tasarım sürecinin başında yazılırsa sonradan düzeltme maliyeti azalır ([SEO önerileri yazılım ekibine nasıl aktarılır?](/blog/seo-onerileri-yazilim-ekibine-nasil-aktarilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir ev tekstili mağazasının yeni sitesinde kategori menüsü, tasarım gereği düğmelerle yapılmış; tıklayınca JavaScript ilgili sayfaya gidiyor. Tarama aracı siteye girdiğinde yalnızca ana sayfayı görebiliyor; Search Console’da kategorilerin dizine girmediği fark ediliyor.

Çözüm: geliştirici menü düğmelerini gerçek `<a href>` bağlantılarına çeviriyor; açılır alt kategoriler sayfa yüklenirken HTML’e yazılıyor. Kategori kartları başlık bağlantısıyla tamamen tıklanabilir yapılıyor. Bir tarama aracıyla siteye yeniden girilip tüm kategorilere ulaşıldığı doğrulanıyor ve birkaç hafta Search Console’da dizin durumu izleniyor. Bu örnek sonuç vaadi değildir; test ve düzeltme sırasını gösterir.

## Sık yapılan hatalar

1. **Bağlantıyı düğmeyle yapmak.** Görünümü aynı olsa da Google bağlantı olarak görmez.
2. **`href="#"` kullanıp JavaScript yönlendirmesi yapmak.** Gerçek adres yok.
3. **Alt menüyü yalnızca üzerine gelince oluşturmak.** Google bağlantıları göremez.
4. **Çerçeve özniteliğine güvenmek.** Çıktıdaki HTML’i kontrol edin.
5. **“Buraya tıklayın” gibi genel bağlantı metinleri kullanmak.** Açıklayıcı metin yazın.
6. **Test etmemek.** Kaynak kod ve URL Denetleme ile doğrulayın.

## Hızlı karar tablosu: bağlantı mı, düğme mi?

Bir öğenin bağlantı mı düğme mi olacağına şu soruyla karar verin: bu öğe beni başka bir adrese mi götürüyor, yoksa sayfada bir işlem mi yapıyor? Başka bir adrese götürüyorsa bağlantıdır ve `<a href>` olmalıdır: menü öğeleri, kategori kartları, “devamını oku”, sonraki sayfa. Sayfada işlem yapıyorsa düğmedir ve `<button>` olmalıdır: formu gönder, menüyü aç, sepete ekle. Bu ayrım yalnızca SEO için değil erişilebilirlik için de doğrudur; klavye ve ekran okuyucu kullanıcıları bağlantı ile düğmeyi farklı bekler. Tasarım sistemlerinde bu iki bileşenin ayrı tanımlanması, hata oranını belirgin biçimde düşürür.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- menü, kategori ve sayfalama bağlantılarınızı kaynak kod, tarama aracı ve URL Denetleme ile test ederiz,
- taranamayan bağlantıları listeler, geliştiriciniz için net düzeltme talimatı yazarız,
- bağlantı metinlerini ve iç bağlantı yapısını gözden geçiririz,
- sonuç vaat etmeden, dizin durumunu Search Console ile izleriz.

Bağlantı yapınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Menünüzün Google tarafından takip edildiğini birlikte doğrulayalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### onclick kullanmak bağlantıyı bozar mı?

Hayır. `href` özniteliği gerçek bir adres taşıdığı sürece `onclick` eklemek sorun değildir. Sorun, `href` olmadan yalnızca `onclick` kullanmaktır.

### Düğme (button) ile bağlantı yapmak neden sorun?

Düğme bir bağlantı öğesi değildir; Google düğmeye tıklamaz. Sayfaya götürüyorsa `<a href>` kullanın.

### Bağlantı metni ne kadar önemli?

Google açıklayıcı, kısa ve alakalı bağlantı metni önerir. Genel ifadeler yerine hedef sayfayı anlatan metin kullanın.

### JavaScript sitelerinde bağlantılar nasıl kontrol edilir?

Oluşturulmuş HTML’e bakın: URL Denetleme canlı testi ve tarama araçları Google’ın gördüğü bağlantıları gösterir.

### Görsel bağlantılar sorun yaratır mı?

Hayır; ama bağlantı metni yerine görselin alt metni kullanılır. Alt metni hedefi anlatacak şekilde yazın.

## Kaynaklar

- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Google Arama Merkezi: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
