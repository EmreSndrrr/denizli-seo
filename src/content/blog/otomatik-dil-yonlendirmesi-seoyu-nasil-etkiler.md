---
title: "Otomatik Dil Yönlendirmesi SEO’yu Nasıl Etkiler?"
description: "Ülkeye ya da dile göre otomatik yönlendirme SEO’yu nasıl etkiler? Googlebot’un taraması, dizine girmeyen dil sürümleri, hreflang ve dil seçici kurulumu."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ziyaretçinin konumuna göre yönlendirme yerine dil seçici ve hreflang kullanan site yapısı"
---

Ziyaretçiyi IP adresine ya da tarayıcı diline bakarak başka bir dil sürümüne otomatik yönlendirmek, SEO açısından risklidir: Google bu yönlendirmelerden kaçınmayı önerir, çünkü kullanıcıların ve arama motorlarının sitenizin tüm sürümlerini görmesini engelleyebilir. Googlebot çoğunlukla ABD merkezli IP adreslerinden ve `Accept-Language` başlığı göndermeden tarar; her ziyaretçiyi “konumuna uygun” sürüme zorlayan bir site, Google’a yalnızca tek sürümünü gösterir. Doğru kurulum: her dil için ayrı adres, aralarında `hreflang` bağlantıları ve görünür bir dil seçici.

İhracat yapan ve turizmle çalışan işletmelerde bu hata sık görülür. Çok dilli yapı denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Otomatik yönlendirme nedir?

Üç yaygın biçimi vardır:

1. **IP’ye göre yönlendirme:** Almanya’dan gelen ziyaretçi `ornek.com` yazınca kendiliğinden `ornek.com/de/` adresine gönderilir.
2. **Tarayıcı diline göre yönlendirme:** Tarayıcının `Accept-Language` başlığı İngilizce ise `/en/` sürümü açılır.
3. **Aynı adreste farklı içerik (yerel ayara göre uyarlanan sayfa):** Adres değişmez; sunucu, ziyaretçinin ülkesine ya da diline göre aynı adreste farklı dilde içerik döndürür.

Üçü de iyi niyetle yapılır: ziyaretçi kendi dilini görsün. Sorun, bu kararın ziyaretçi adına ve geri dönüşsüz verilmesidir.

## Googlebot bu siteyi nasıl görür?

Google’ın belgesi durumu şöyle açıklar: sitenizde yerel ayara göre uyarlanan sayfalar varsa, yani site algılanan ülkeye ya da ziyaretçinin tercih ettiği dile göre farklı içerik döndürüyorsa, Google tüm içeriğinizi farklı yerel ayarlar için tarayıp dizine eklemeyebilir. Nedeni: Googlebot’un varsayılan IP adresleri ABD merkezli görünür ve tarayıcı HTTP isteklerini `Accept-Language` başlığı olmadan gönderir ([yerel ayara göre uyarlanan sayfalar](https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages?hl=tr)).

Belge, Googlebot’un ABD dışındaki IP adresleriyle de tarama yaptığını ekler; ama buna güvenmenizi değil, açık bir öneriyi izlemenizi ister: **ayrı yerel URL yapılandırmaları kullanın ve bunları `rel="alternate" hreflang` ek açıklamalarıyla belirtin.**

Pratik sonuç: Türkiye’de barındırılan, Türkçe ve İngilizce sürümü olan bir site, ABD’den gelen her isteği `/en/` sürümüne yönlendiriyorsa Googlebot Türkçe ana sayfayı hiç göremeyebilir. Türkçe sayfalar dizinden düşer ya da hiç girmez.

## Google’ın açık tavsiyesi

Çok dilli siteler rehberi bunu doğrudan yazar: kullanıcıları sitenin bir dil sürümünden başka bir dil sürümüne otomatik olarak yönlendirmekten kaçının; örneğin kullanıcının dilini tahmin edip buna göre yönlendirmeyin. Bu yönlendirmeler kullanıcıların ve arama motorlarının sitenizin tüm sürümlerini görüntülemesini engelleyebilir. Bunun yerine sayfanın diğer dil sürümlerine köprüler eklemeyi değerlendirin; kullanıcı tıklayarak dil seçebilsin ([çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kullanıcı açısından da sorunludur

SEO bir yana, otomatik yönlendirme ziyaretçiyi de yanıltır:

- Almanya’da yaşayan Türk müşteri Türkçe sayfayı açamaz.
- Yurt dışında tatildeki müşteriniz kendi dilindeki siteye ulaşamaz.
- VPN ya da şirket ağı kullanan ziyaretçi yanlış ülke sürümüne düşer.
- Biri size belirli bir sayfanın bağlantısını gönderir; siz açınca başka bir sayfaya yönlenirsiniz.
- Arama sonucunda Türkçe sayfaya tıklayan kişi İngilizce sayfaya düşer; aradığını bulamaz ve geri döner.

Konum ile dil aynı şey değildir; IP adresi kişinin hangi dilde okumak istediğini söylemez.

## Doğru kurulum

### 1. Her dil için ayrı adres

Her dil sürümünün kendi kalıcı adresi olsun: `ornek.com/` (Türkçe), `ornek.com/en/`, `ornek.com/de/`. Alt klasör, alt alan adı ya da ülke alan adı seçenekleri için [alt klasör mü, alt alan adı mı?](/blog/cok-dilli-seo-alt-klasor-mu-alt-alan-adi-mi/) yazısına bakın. Aynı adreste çerezle ya da betikle dil değiştiren yapıdan kaçının; Google her adreste tek sürüm görür.

### 2. hreflang bağlantıları

Her sayfa, diğer dillerdeki karşılığını ve kendisini `hreflang` ile göstersin. Böylece Google hangi sürümü hangi dildeki kullanıcıya göstereceğini bilir; yönlendirmeyi siz değil, arama sonucu yapar ([hreflang ve uluslararası SEO](/blog/uluslararasi-seo-ve-hreflang-ihracatcilar-icin/)).

### 3. Görünür dil seçici

Üst menüde, her sayfada, dillerin kendi adıyla yazıldığı (“English”, “Deutsch”, “Türkçe”) bir seçici bulunsun. Seçici gerçek bağlantılardan oluşsun (`<a href="/en/…">`); yalnızca betikle çalışan açılır liste taranamaz. Bayrak simgesi dil yerine ülkeyi çağrıştırdığı için tek başına kullanmayın.

### 4. Yönlendirme yerine öneri bandı

Ziyaretçiye yardım etmek istiyorsanız zorlamayın, önerin: sayfanın üstünde “Bu sayfanın İngilizce sürümü var. English version →” gibi kapatılabilir bir bant gösterin. Ziyaretçi isterse tıklar; istemezse bulunduğu sayfada kalır. Googlebot da her iki sürümü görmeye devam eder.

### 5. Seçimi hatırlayın, ama adresi zorlamayın

Ziyaretçi dil seçtiyse bunu çerezle hatırlayıp ana sayfaya bir sonraki gelişinde öneride kullanabilirsiniz. Ancak belirli bir dil adresine (`/en/urunler/`) doğrudan gelen kişiyi çerez yüzünden başka dile yönlendirmeyin.

## Ana sayfa (kök adres) ne yapmalı?

En çok tartışılan nokta kök adrestir. Seçenekler:

- **Kök adres bir dilin ana sayfasıdır** (ör. Türkçe). En basit ve en sağlam yapı budur; diğer diller alt klasörde durur.
- **Kök adres bir dil seçim sayfasıdır.** Ülke ve dil seçtiren bir sayfa gösterilir; `hreflang="x-default"` ile işaretlenebilir.
- **Kök adres otomatik yönlendirir.** Kaçınılması gereken budur. Yine de uygulanacaksa yalnızca kök adreste, yalnızca ilk ziyarette yapılmalı; her dil sürümü doğrudan adresiyle erişilebilir kalmalı ve `x-default` tanımlanmalıdır.

Yerel bir işletme için ilk seçenek neredeyse her zaman doğru olandır.

## Ülkeye göre içerik kısıtlıyorsanız

Bazı işletmeler yasal ya da ticari nedenle içeriği ülkeye göre kısıtlar. Google’ın ilkesi: Googlebot belirli bir ülkeden geliyormuş gibi göründüğünde ona o ülkeden gelen herhangi bir kullanıcı gibi davranın. ABD’deki kullanıcıları engelliyorsanız ABD’den gelen Googlebot’u da engelleyin; yalnızca Googlebot’a özel izin vermek gizleme sayılır. Ayrıca robots.txt ve robots meta kuralları tüm yerel ayarlarda aynı olmalıdır.

Fiyat ve para birimini ülkeye göre göstermek ise ayrı bir konudur: içerik aynı kalıp yalnızca para birimi değişiyorsa, bunu ayrı adreslerle ya da kullanıcının seçimiyle yapın.

## Mevcut sitenizi test edin

1. Tarayıcınızın dil ayarını İngilizce yapıp Türkçe bir sayfanın adresini açın. Adres değişiyor mu?
2. VPN ile başka bir ülkeden aynı adresi açın.
3. `curl -I https://ornek.com/` ile kök adresin yanıtına bakın: 200 mü, 302 mi?
4. Search Console’da her dilin ana sayfasını URL Denetleme ile test edin; Google hangi içeriği görüyor?
5. `site:ornek.com/en/` ve `site:ornek.com/de/` aramalarıyla her dilin dizinde olup olmadığına bakın.
6. Dizin raporunda “yönlendirmeli sayfa” durumundaki adresleri inceleyin; içlerinde dizinde görmek istediğiniz sayfalar var mı?

Çok dilli kurulumun teknik seçenekleri için [çok dilli web sitesi kurmak](/blog/cok-dilli-web-sitesi-kurmak-teknik-secenekler/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir traverten ihracatçısının Türkçe, İngilizce ve Almanca sitesi var. Türkçe sayfalar Google’da neredeyse hiç görünmüyor.

- **Teşhis:** Site, Türkiye dışından gelen her isteği IP’ye göre `/en/` sürümüne yönlendiriyor. URL Denetleme’de Türkçe ana sayfa “yönlendirmeli sayfa” olarak görünüyor.
- **Düzeltme:** IP yönlendirmesi kaldırılıyor; kök adres Türkçe ana sayfa oluyor; her sayfaya `hreflang` ve üst menüye bağlantılı dil seçici ekleniyor; yurt dışı ziyaretçiye kapatılabilir bir öneri bandı gösteriliyor.
- **İzleme:** Türkçe sayfalar yeniden taramaya gönderiliyor; her dilin dizin durumu aylık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **IP adresini dil tercihi saymak.**
2. **Her adreste, her ziyarette yönlendirme yapmak.**
3. **Aynı adreste çerezle dil değiştirmek.**
4. **Dil seçiciyi yalnızca betikle çalıştırmak.**
5. **`hreflang` olmadan birden çok dil yayınlamak.**
6. **Googlebot’a ziyaretçiden farklı davranmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin farklı ülke ve dil ayarlarıyla nasıl davrandığını test ederiz,
- yönlendirmeleri kaldırıp adres, `hreflang` ve dil seçici yapısını kurarız,
- her dil sürümünün dizin durumunu izleriz,
- öneri bandı ve kök adres kararını birlikte veririz.

Çok dilli yapı denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Ziyaretçiyi diline göre otomatik yönlendirmeli miyim?

Google bundan kaçınmayı önerir; kullanıcıların ve arama motorlarının tüm sürümleri görmesini engelleyebilir.

### Googlebot hangi ülkeden ve dilde tarar?

Varsayılan IP adresleri ABD merkezli görünür ve istekleri `Accept-Language` başlığı olmadan gönderir; başka ülkelerden de tarayabilir.

### Yönlendirme yerine ne yapmalıyım?

Her dil için ayrı adres, `hreflang` bağlantıları ve görünür bir dil seçici; isterseniz kapatılabilir bir öneri bandı.

### Dil seçici bayrakla yapılabilir mi?

Tek başına önermeyiz; dil ile ülke aynı değildir. Dilin kendi adını yazın.

### Yalnızca ana sayfada yönlendirme yapsam olur mu?

Önerilmez; yapılacaksa diğer adresler doğrudan erişilebilir kalmalı ve `x-default` tanımlanmalıdır.

## Kaynaklar

- [Google Arama Merkezi: Google, yerel ayara göre uyarlanan sayfaları nasıl tarar?](https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages?hl=tr)
- [Google Arama Merkezi: Çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)
