---
title: "Kategori ve Liste Sayfalarında Sayfalama SEO’su"
description: "Sayfalama (pagination) Google için nasıl kurulur? Benzersiz URL, sıralı bağlantılar, ilk sayfayı standart yapmama, filtre adresleri ve sonsuz kaydırma kuralları."
date: 2026-11-13
service: teknik-seo
imageAlt: "Numaralı sayfa bağlantıları ve ürün listesi gösteren bir kategori sayfası"
---

Kategori ve liste sayfalarında sayfalamayı Google için doğru kurmanın dört kuralı vardır: her sayfaya benzersiz bir adres verin, sayfalara birbirine sıralı `<a href>` bağlantılarıyla bağlayın, ilk sayfayı bütün sayfaların standart adresi yapmayın ve filtre ya da sıralama adreslerini dizinden uzak tutun. Bunlar Google’ın kendi belgesindeki kurallardır.

Ürün, yazı ya da yorum listesi tek sayfaya sığmadığında sayfalara ayırırsınız. Sorun, bu düzenin Google’ın sayfalarınızı bulmasını engellemesi ya da aynı listenin onlarca kopyasını dizine sokmasıdır. Bu yazı, sayfalamayı hangi yöntemle yapacağınızı, adres ve bağlantıların nasıl kurulacağını ve nelerden kaçınacağınızı anlatıyor. Sitenizde bu sorun varsa [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Sayfalama neden gerekir?

Google’ın anlatımına göre sonuçları alt kümeler hâlinde göstermek, kullanıcı deneyimini ve performansı iyileştirir: ilk sayfa yüklemesi hızlanır, ağ trafiği azalır (özellikle mobilde önemli), sunucu yükü düşer ve çok uzun listelerin yol açabileceği hatalar azalır ([sayfalara ayırma ve Google Arama](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)).

Aynı yaklaşım yalnızca e-ticaret kategorilerinde değil, şu listelerde de kullanılır:

- bir kategorideki tüm ürünler,
- sitede zaman içinde yayınlanan blog yazıları,
- ürün sayfasındaki kullanıcı yorumları,
- bir yazıdaki yorumlar.

Bu bir güvenlik ve hız önlemidir ama doğru kurulmazsa Google listenin devamını göremeyebilir.

## Üç kullanıcı deneyimi kalıbı

Google belgesi üç kalıbı karşılaştırır:

| Kalıp | Artısı | Eksisi |
| --- | --- | --- |
| Sayfalara ayırma | Sonuç boyutu ve konum bilgisi verir | Gezinme kontrolleri daha karmaşık, birden fazla sayfaya bölünür |
| Daha fazla yükle | Tek sayfa, toplam sonuç gösterilebilir | Çok fazla sonuç tek sayfada işlenemez |
| Sonsuz kaydırma | Tek sayfa, kullanımı kolay | Kaydırma yorgunluğu, çok sonuç işlenemez |

Sayfalama, “sonraki”, “önceki” ve sayfa numaralarıyla gezilen klasik düzendir; “daha fazla yükle” ve sonsuz kaydırma ise genellikle JavaScript ile yapılır. Hangisini seçeceğiniz ürün sayısına ve kullanıcı davranışına bağlıdır; ama hangisini seçerseniz seçin Google’ın içeriğinize erişebildiğinden emin olmalısınız.

## Google bunları nasıl görür?

Burada kritik bilgi şudur: Google, dizine eklenecek sayfaları bulmak için çoğunlukla `<a>` öğelerinin `href` özelliğindeki URL’leri tarar. Google tarayıcıları düğmeleri “tıklamaz” ve genellikle mevcut sayfa içeriğini güncellemek için kullanıcı işlemi gerektiren JavaScript işlevlerini tetiklemez.

Sonuç: “Daha fazla yükle” düğmesi ya da sonsuz kaydırma yalnızca JavaScript’le yeni ürün getiriyorsa ve bu ürünlere giden gerçek bağlantılar yoksa, Google ilk sayfadan sonrasını görmeyebilir. Ürünlerin başka yoldan da bulunabilmesi için site haritası ya da Google Merchant Center feed’i kullanmak önerilir. Bağlantıların taranabilir yazılması için [Google sayfanızı nasıl bulur?](/blog/google-sayfanizi-nasil-bulur-tarama-ve-dizine-ekleme/) yazısına da bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kural 1: Sayfalara sırayla bağlantı verin

Her sayfadan bir sonrakine `<a href>` bağlantısı koyun. Google bunun Googlebot’un sıranın devamındaki sayfaları bulmasına yardımcı olabileceğini söyler. Ayrıca koleksiyondaki her sayfadan ilk sayfaya dönen bir bağlantı vermek, koleksiyonun başlangıcını vurgular ve ilk sayfanın daha iyi bir açılış sayfası olabileceğine dair fikir verir.

Uygulama:

- Sayfa numaraları ve “sonraki/önceki” bağlantıları gerçek bağlantı olsun.
- Bağlantı metni anlaşılır olsun (“2”, “3”, “Sonraki”).
- Her sayfadan ilk sayfaya bir bağlantı verin.

Belgede şu ilginç not da var: sayfalı sıralamadaki sayfalar için benzersiz başlık önerisi uygulanmak zorunda değildir; sıralamadaki tüm sayfalarda aynı başlık ve açıklamayı kullanabilirsiniz.

## Kural 2: URL’leri doğru kullanın

Google’ın üç açık önerisi var:

1. **Her sayfaya benzersiz bir URL verin.** Örneğin `?page=2` gibi bir sorgu parametresi kullanabilirsiniz; Google bu adresleri ayrı sayfalar olarak işler.
2. **İlk sayfayı bütün sayfalar için standart adres yapmayın.** Her sayfa kendi standart URL’sinde olsun. Yani 2. sayfaya `rel="canonical"` ile 1. sayfayı göstermeyin.
3. **Sayfa numaraları için `#` sonrası parça tanımlayıcıları kullanmayın.** Google parça tanımlayıcıları yok sayar; yalnızca `#` sonrası farklı olan bir adresi görürse sayfayı zaten almış sanıp bağlantıyı izlemeyebilir.

En sık yapılan hata ikinci maddedir: bazı siteler tüm sayfaları birinci sayfaya canonical yapar. Google bunu önermiyor; çünkü bu durumda 2. ve 3. sayfalardaki ürünler standart adres olarak görülmez ve bulunmakta zorlanabilir. Standart adresler için [canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/) yazısına bakın.

## rel=next ve rel=prev hâlâ gerekli mi?

Hayır, Google için değil. Belgede şöyle denir: Google önceden sonraki ve önceki sayfa ilişkilerini tanımlamak için `<link rel="next">` ve `<link rel="prev">` etiketlerini kullanıyordu, artık kullanmıyor; ancak bu bağlantılar hâlâ diğer arama motorları tarafından kullanılıyor olabilir. Etiketler sitenizde varsa zararı yoktur, ama eklemek için emek harcamayın; asıl önemli olan sıralı `<a href>` bağlantılarıdır.

## Kural 3: Filtre ve sıralama adreslerini dizinden uzak tutun

Uzun listelerde fiyat, renk ya da sıralama filtresi kullanırsınız (`?order=price` gibi). Bu adresler aynı listenin varyasyonlarıdır ve dizine eklenirse yinelenen içerik oluşur. Google’ın önerisi: istenmeyen URL’lerin dizine eklenmesini noindex robots meta etiketiyle önlemek ya da robots.txt ile belirli URL kalıplarının taranmasını engellemek.

Dikkat: noindex etiketinin işe yaraması için sayfanın robots.txt ile engellenmemesi gerekir; ikisini aynı adreste birlikte kullanmayın. Seçimi şöyle yapın: filtreli adresler hiç taranmasın istiyorsanız robots.txt, taranabilsin ama dizine girmesin istiyorsanız noindex. Ayrıntı için [noindex nedir?](/blog/noindex-nedir-ne-zaman-kullanilir/) ve [robots.txt nedir?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazılarına bakın.

## Sonsuz kaydırma ve “daha fazla yükle” arama dostu olur mu?

Olabilir ama ekstra iş ister. En güvenli çözüm, kaydırma ya da düğmeyle yüklenen içeriğin arkasında gerçek sayfalama bağlantılarının (`?page=2` gibi) bulunmasıdır. Böylece kullanıcı kaydırır, Google ise bağlantıları izler. Yalnızca JavaScript tetikleyicisine bağlı bir listede, ilk yüklenen ürünlerin ötesi Google için görünmez kalabilir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili mağazasının çevrimiçi sitesinde “Havlu” kategorisinde 140 ürün var ve liste “daha fazla yükle” düğmesiyle açılıyor.

- **Sorun:** Düğme yalnızca JavaScript çalıştırıyor; gerçek bağlantı yok. Search Console’da ilk 24 ürünün dışındaki ürünler dizine eklenmiyor.
- **Düzeltme:** Her sayfa için `?page=2`, `?page=3` adresleri ve sıralı bağlantılar ekleniyor; her sayfa kendi standart adresine sahip; ilk sayfaya dönüş bağlantısı veriliyor.
- **Filtreler:** Fiyata göre sıralama adresleri noindex alıyor.
- **İzleme:** Birkaç hafta sonra sayfa dizine ekleme raporunda yeni sayfalar kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sayfalamayı nasıl test edersiniz?

1. Sayfa kaynağında sonraki sayfa bağlantısının `<a href>` olduğunu doğrulayın.
2. URL Denetleme aracıyla 2. ve 3. sayfaya bakın; Google’ın bu adresi görüp görmediğini kontrol edin.
3. Her sayfanın standart adresinin kendisi olduğunu doğrulayın.
4. Sayfa dizine ekleme raporunda filtre adreslerinin istemediğiniz hâlde dizine girip girmediğine bakın.
5. Tarayıcıda JavaScript’i kapatıp listede sonraki sayfa bağlantısı kalıp kalmadığını görün.

## Sık yapılan altı hata

1. **Tüm sayfaları birinci sayfaya canonical yapmak.**
2. **Sayfa numarası için `#` kullanmak.**
3. **Yalnızca düğmeyle çalışan “daha fazla yükle”ye güvenmek.**
4. **Filtre adreslerini dizinden uzak tutmamak.**
5. **noindex ve robots.txt engelini aynı adreste birlikte kullanmak.**
6. **rel=next/prev’in Google için gerekli olduğunu sanmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Sayfalama küçük bir ayrıntı gibi görünür ama yüzlerce ürünün görünürlüğünü belirler. [Teknik SEO hizmetimizde](/teknik-seo/):

- kategori ve liste sayfalarınızın sayfalama yapısını denetleriz,
- bağlantı, URL ve standart adres kurallarını düzeltiriz,
- filtre ve sıralama adreslerini dizinden uzak tutacak ayarı belirleriz,
- sonuçları Search Console’da izleyip yazılı raporlarız.

Sitenizin kategorilerine birlikte bakmak isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Sayfalama SEO’ya zarar verir mi?

Doğru kurulduğunda hayır. Zarar, bağlantıların taranamaması, yanlış standart adres ya da filtre adreslerinin dizine girmesinden gelir.

### 2. sayfayı noindex yapmalı mıyım?

Google’ın belgesinde böyle bir öneri yok. Önerilen, her sayfanın kendi URL’sine ve standart adresine sahip olmasıdır. Noindex yalnızca istenmeyen filtre ve sıralama adresleri içindir.

### Tüm ürünleri tek sayfada göstermek daha mı iyi?

Ürün sayısı çoksa hayır; sayfa yavaşlar ve işlenemez. Google da çok fazla sonucun tek sayfada işlenemeyeceğini belirtir.

### rel=next ve rel=prev eklemeli miyim?

Google artık kullanmıyor; ama diğer arama motorları kullanıyor olabilir. Eklemek zorunlu değil.

### Sonsuz kaydırma kullanırsam ne yapmalıyım?

Arkasında gerçek sayfalama bağlantıları bulundurun ve ürünleri site haritasıyla da bildirin.

## Kaynaklar

- [Google Arama Merkezi: Sayfalara ayırma, artımlı sayfa yükleme ve bunların Google Arama’ya etkisi](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)
- [Google Arama Merkezi: Standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Google Arama Merkezi: Robots.txt dosyasına giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
