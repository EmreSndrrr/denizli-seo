---
title: Canonical Etiketi Nedir? Kopya Sayfa Sorunu
description: "Canonical etiketi nedir, kopya sayfa sorununu nasıl çözer? Yönlendirme ve site haritasının sinyal gücü, http/https ve www karmaşası, sık hatalar."
date: 2026-11-10
service: teknik-seo
imageAlt: "Birbirine benzeyen üç sayfa ve birini işaret eden canonical oku"
---

**Kısa cevap:** Canonical (standart URL) etiketi, aynı ya da çok benzer içeriğin birden çok adreste bulunduğu durumda Google’a hangi adresin asıl sayfa olduğunu söyler. Sayfanın `<head>` bölümüne `<link rel="canonical" href="asıl-adres">` eklenir. Google’a göre yönlendirmeler ve rel=canonical güçlü, site haritası zayıf bir sinyaldir. Kopya sayfayı gizlemek için noindex ya da robots.txt kullanmak önerilmez.

Aynı içerik birden fazla adreste bulunabilir: `http` ve `https`, `www` ve `www`’suz, sonunda eğik çizgi olan ve olmayan adresler, takip parametreli adresler, filtreli mağaza sayfaları. Google bunlardan birini “standart” seçer; siz söylemezseniz yanlış olanı seçebilir. Bu yazı canonical’in ne işe yaradığını, nasıl ekleneceğini ve hangi hatalardan kaçınacağınızı anlatıyor. Dizin durumunu görmek için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza bakabilirsiniz.

## Kopya sayfa sorunu nedir?

Google’ın tanımına göre kopya ya da çok benzer sayfalar için bir standart URL belirtebilirsiniz ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)). Kopya sayfa, aynı içeriğin farklı adreslerden erişilebilir olmasıdır. Asıl sorun, Google’ın hangi adresi dizine ekleyeceğini kendisinin seçmesi ve seçimin sizin istediğiniz adres olmayabilmesidir (genel değerlendirme).

Sık görülen kopya kaynakları:

| Kaynak | Örnek |
| --- | --- |
| http ve https | `http://alanadi.com/` ve `https://alanadi.com/` |
| www ve www’suz | `www.alanadi.com` ve `alanadi.com` |
| Eğik çizgi | `/hizmet` ve `/hizmet/` |
| Parametreler | `/urun?renk=mavi`, `/urun?utm_source=…` |
| Filtre ve sıralama | `/kategori?sirala=fiyat` |
| Yazdırma ya da mobil sürüm | `/sayfa?print=1` |
| Benzer sayfalar | Yalnızca ilçe adı değişen sayfalar |

## Canonical etiketi nasıl çalışır?

Sayfanızın `<head>` bölümüne asıl adresi gösteren bir bağlantı eklersiniz:

```
<link rel="canonical" href="https://alanadiniz.com/hizmet/" />
```

Bu etiket Google’a “bu sayfanın içeriğinin standart adresi budur” der. Google, bunu “güçlü bir sinyal” olarak değerlendirir; ama bağlayıcı bir komut değildir. Google’ın sunduğu seçenekler, standartlaştırmayı ne kadar etkilediklerine göre şöyle sıralanır:

| Yöntem | Sinyal gücü |
| --- | --- |
| Yönlendirme (301) | Güçlü: hedefin standart URL olması gerektiği yönünde |
| `rel="canonical"` bağlantısı | Güçlü |
| Site haritasına ekleme | Zayıf |

Yöntemler birlikte kullanılabilir ve birleştirildiğinde daha etkili olabilir. HTML olmayan dosyalarda (PDF gibi) `rel="canonical"` HTTP üstbilgisi kullanılabilir.

## Hangi yöntemi ne zaman seçmelisiniz?

- **Eski adres artık gerekmiyorsa:** Yönlendirme (301) kullanın; kullanıcı da yeni adrese gider. Örneğin `http` → `https`, `www` → `www`’suz.
- **Her iki adres de erişilebilir kalacaksa:** rel=canonical ile asıl adresi belirtin. Örneğin takip parametreli adresler, mağazadaki varyantlar.
- **Büyük sitelerde:** Standart sayfaları site haritasında listeleyin; Google, site haritasındaki tüm sayfaları standart olarak önerir.

HTTPS ve HTTP için Google’ın önerisi basit: HTTP’den HTTPS’e yönlendirin ve sertifikayı doğru kullanın; site haritasında ve hreflang uygulamasında HTTPS sürümlerini tercih edin.

## Canonical etiketi kullanırken kurallar

Google’ın en iyi uygulamalarından öne çıkanlar:

1. **Mutlak URL kullanın.** `href` değeri tam adres olmalı (`https://...`); göreceli yol karışıklık yaratabilir.
2. **Tek yöntem çelişmesin.** Aynı sayfa için farklı tekniklerle farklı standart URL’ler belirtmeyin. Örneğin site haritasında bir URL, canonical etiketinde başka bir URL olmasın.
3. **robots.txt kullanmayın.** Google, robots.txt’de taranmasına izin verilmeyen URL’leri içerikleri olmadan dizine ekleyebilir; standartlaştırma için robots.txt’yi kullanmayın.
4. **noindex ile standart seçmeyin.** Google, tek bir sitede standart sayfa seçimini önlemek için noindex kullanmayı önermez; bu, sayfanın Arama’dan tamamen engellenmesine yol açar. Bunun yerine rel=canonical tercih edilir.
5. **URL kaldırma aracını standartlaştırma için kullanmayın.** Bu işlem, URL’nin tüm sürümlerini Arama’dan gizler.
6. **Standart sayfanın kendisi erişilebilir olmalı.** 404 ya da yönlendirilen bir adrese canonical göstermeyin.

## Her sayfa kendini mi göstermeli?

Pek çok site, her sayfada kendi adresini canonical olarak gösterir (kendine referans). Bu, parametre eklenmiş sürümlerin asıl adrese işaret etmesini sağlayarak karışıklığı önleyebilir. Önemli olan, etiketin doğru ve tutarlı olmasıdır; çoğu SEO eklentisi bunu otomatik yapar. Hizmet sayfası, ana sayfa ve yazılar için canonical’ın kendi tam adresiniz olduğunu kontrol edin.

## Mağazalarda varyantlar ve filtreler

E-ticarette aynı ürün renk ve beden seçenekleriyle farklı adreslerde olabilir. Google’ın e-ticaret rehberi, her varyantı için benzersiz URL bulunan ürünlerde `rel="canonical"` ile standart ürün adresinin tüm varyant sayfalarına eklenmesini önerir ([e-ticaret URL yapısı](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=tr)). Ayrıntılar [e-ticaret SEO](/blog/e-ticaret-seo/) yazımızda.

## Şablon sayfalarda canonical tuzağı

Yalnızca ilçe adı değişen benzer sayfaları canonical ile “tek sayfaya” bağlamak, her ilçeyi dizinden çıkarmak demektir. Bu sayfalar gerçekten farklı bir müşteri kitlesine hizmet ediyorsa özgün içerik yazın; değilse tek sayfada birleştirin. Karar kuralı için [ilçe sayfası nasıl yazılır?](/blog/ilce-sayfasi-nasil-yazilir/) yazımıza bakın.

## Canonical’i nasıl kontrol edersiniz?

1. **Sayfa kaynağına bakın.** Sağ tıklayıp kaynağı görüntüleyin ve `rel="canonical"` arayın.
2. **URL Denetleme’yi kullanın.** Search Console’da URL’yi denetleyin; Google’ın seçtiği standart sayfa bilgisine bakın.
3. **Sayfa dizine ekleme raporunu okuyun.** “Kopya” ya da “standart sayfa” durumlarındaki sayfalar kopya sorununa işaret edebilir.
4. **Adres varyantlarını deneyin.** `http`, `www`, eğik çizgi, parametre eklenmiş sürümlerini açın; hepsi tek adrese yönleniyor ya da canonical gösteriyor mu?
5. **Site haritasına bakın.** Yalnızca standart ve erişilebilir adresler olmalı.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Honaz’da bir kuyumcunun sitesi hem `http://` hem `https://` üzerinden, hem `www` hem `www`’suz açılıyor. Search Console’da aynı sayfanın birkaç sürümü görünüyor ve Google, hizmet sayfası için işletmenin istediği adresten farklı bir sürümü seçmiş.

Düzeltme: tüm trafik tek bir adres biçimine (`https://alanadi.com/`) 301 ile yönlendiriliyor; her sayfa canonical’ı kendi tam adresini gösteriyor; site haritasında yalnızca bu adresler yer alıyor; Search Console’da standart sayfa seçimi birkaç hafta boyunca izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Canonical ve sayfa sinyalleri: pratik bir karar tablosu

| Durum | Önerilen çözüm |
| --- | --- |
| `http` sürümü hâlâ açık | 301 ile `https`’e yönlendirme |
| `www` ve `www`’suz ikisi de açık | 301 ile birine yönlendirme |
| Takip parametresi eklenmiş adres | Parametresiz adrese canonical |
| Mağaza varyantları | Standart ürün adresine canonical |
| Yazdırma sürümü | Asıl sayfaya canonical |
| Aynı içeriğin iki farklı adreste yayını | Birini seçip yönlendirme; ya da canonical |
| Gerçekten farklı sayfalar | Canonical gerekmez; her biri kendi adresini göstersin |

## Canonical hatası nasıl fark edilir?

Şu belirtilerden biri varsa canonical’ı kontrol edin:

- Search Console’da hizmet sayfanız “kopya” olarak listeleniyor ve Google sizin seçtiğiniz adresten farklı birini seçmiş.
- Sayfanız kopya ya da standart olarak başka bir adrese işaret ediyor ama o adres var olmayan bir sayfa.
- Tüm sayfaların canonical’ı ana sayfayı gösteriyor (şablon hatası).
- Farklı dil sürümleri birbirini canonical gösteriyor.

Tüm sayfalarda canonical’ın ana sayfayı göstermesi, bu sayfaların dizine girmemesine yol açabilir; bu, sık rastlanan ve kolay kaçan bir şablon hatasıdır.

## Denizli SEO bu konuda nasıl yardımcı olur?

Kopya sayfa sorunu sessiz işler: Google yanlış adresi seçer, siz fark etmezsiniz. [Teknik SEO hizmetimizde](/teknik-seo/):

- aynı içeriğin birden çok adreste görünmesini tespit eder ve engelleriz,
- asıl sayfayı canonical etiketi, 301 yönlendirmesi ve site haritasıyla tutarlı biçimde bildiririz,
- http/https ve www karmaşasını tek adrese toplarız,
- tüm değişiklikleri yazılı raporlarız.

Sitenizde kopya sayfa sorunu olup olmadığını öğrenmek isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Canonical etiketini sayfanın sonuna koyabilir miyim?

Canonical etiketi sayfanın `<head>` bölümünde bulunmalıdır. Gövdeye konan etiket işe yaramayabilir.

### Her sayfaya canonical koymak zorunda mıyım?

Zorunlu değil; ama kendine referans veren canonical, kopya adres karmaşasını önlemeye yardımcı olabilir ve çoğu SEO eklentisi bunu kendiliğinden ekler.

## Sık sorulan sorular

### Canonical etiketi bir komut mu?

Hayır. Google bunu güçlü bir sinyal olarak değerlendirir ama son kararı kendisi verebilir.

### Canonical ile 301 arasında hangisi daha iyi?

Eski adres artık gerekmiyorsa 301. İki adres de açık kalacaksa canonical. İkisi birlikte de kullanılabilir.

### Kopya sayfa ceza mı getirir?

Bu yazıda kopya sayfayı bir ceza değil, hangi adresin seçileceği sorunu olarak ele alıyoruz. Kasıtlı manipülasyon ise ayrı bir konudur ve Google’ın spam politikalarını ilgilendirir.

### Canonical’ı kendim ekleyebilir miyim?

İçerik yönetim sisteminizin ya da SEO eklentinizin ayarlarından çoğu zaman ekleyebilirsiniz. Elle kodlanmış sitelerde `<head>` bölümünü düzenlemek gerekir.

## Kaynaklar

- [Google Search Central: rel=”canonical” ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Search Central: e-ticaret URL yapısıyla ilgili en iyi uygulamalar](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
