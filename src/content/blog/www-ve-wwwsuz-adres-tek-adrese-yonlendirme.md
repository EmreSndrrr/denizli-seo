---
title: "www ve www’suz Adres: Tek Adrese Yönlendirme"
description: "www ve www’suz adres arasında hangisi seçilmeli? Tek adrese 301 yönlendirme, canonical, site haritası ve kopya sayfa sorununu önleyen kontrol listesi."
date: 2026-11-10
service: teknik-seo
imageAlt: "İki adres varyantının tek bir ana adrese yönlendirilmesi"
---

**Kısa cevap:** `www.alanadiniz.com` ve `alanadiniz.com` aynı siteye gidiyorsa Google bunları ayrı adresler olarak görebilir. Birini asıl adres olarak seçin (hangisi olduğu fark etmez, önemli olan tutarlılıktır) ve diğerini 301 ile ona yönlendirin; canonical, site haritası, iç bağlantılar ve profildeki adres de aynı sürümü kullansın. Google, yönlendirmeyi ve rel=canonical’ı standart URL için güçlü sinyaller sayar. Aynı alan adındaki www ve www’suz geçişi için Adres değişikliği aracına gerek yoktur.

“www” ya da “www’suz” seçimi bir sıralama kararı değildir; bir tutarlılık kararıdır. Sorun, sitenin iki adreste birden açık kalmasıdır: aynı içerik iki adreste yayımlanır, bağlantılar ikiye bölünür ve Google hangisini dizine ekleyeceğine kendi karar verir. Bu yazıda tek adres seçmeyi ve diğerini doğru yönlendirmeyi anlatıyoruz. Aynı mantık `http` ve `https` için de geçerlidir; bkz. [HTTPS’e geçiş](/blog/https-e-gecis-seo-kontrol-listesi/).

## Sorun nedir?

Bir siteye dört farklı adresten girilebilir:

- `http://alanadiniz.com`
- `http://www.alanadiniz.com`
- `https://alanadiniz.com`
- `https://www.alanadiniz.com`

Hepsi aynı içeriği gösteriyorsa Google bunları ayrı URL’ler olarak değerlendirir. Google’ın standart URL rehberine göre kopya ya da çok benzer sayfalar için bir standart URL bildirmek istiyorsanız tercihinizi yönlendirme, rel=canonical ve site haritası gibi yöntemlerle iletebilirsiniz ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)). Yönlendirmeyi güçlü bir sinyal olarak sayar.

## Hangisini seçmelisiniz: www mi, www’suz mu?

Teknik olarak ikisi de çalışır. Seçim kuralı basittir:

| Durum | Öneri |
| --- | --- |
| Marka ve kartvizitlerde zaten bir sürüm yaygınsa | O sürüme sadık kalın |
| Dış bağlantıların çoğu bir sürümü gösteriyorsa | O sürümü seçin |
| Yeni site ise | Hangisini isterseniz; baştan tutarlı olun |
| Barındırma ya da DNS’te bir sürüm zorluk çıkarıyorsa | Kolay yönetileni seçin |

Seçtikten sonra değiştirmeyin. Değiştirirseniz bu, URL değişikliği olur ve yeni bir taşıma planı gerektirir.

## Tek adrese toplama adımları

1. **Asıl sürümü belirleyin.** Örneğin `https://alanadiniz.com/`.
2. **Diğer üç sürümü 301 ile asıl sürüme yönlendirin.** `http://alanadiniz.com`, `http://www.alanadiniz.com` ve `https://www.alanadiniz.com` hepsi `https://alanadiniz.com`’a gitsin. Yönlendirme tek adımda olsun (zincir olmasın). Türler için [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazımıza bakın.
3. **Sertifikanın hem www hem www’suz sürümü kapsadığından emin olun.** Aksi halde yönlendirme öncesinde tarayıcı uyarı gösterebilir.
4. **Canonical’ı asıl sürüme ayarlayın.** Her sayfada mutlak URL kullanın.
5. **Site haritasında yalnızca asıl sürümü kullanın.**
6. **İç bağlantıları asıl sürüme çevirin.**
7. **Profil ve sosyal hesaplardaki adresi güncelleyin.**
8. **Search Console’da mülkü kontrol edin.** Alan adı mülkü kullanıyorsanız tüm sürümler tek mülkte toplanır.

## Google’ın rehberi ne diyor?

Google’ın standart URL rehberi bu en iyi uygulamaları sıralar:

- Standartlaştırma için robots.txt kullanmayın.
- Aynı sayfa için farklı tekniklerle farklı standart URL’ler belirtmeyin; site haritasında bir URL, canonical’da başka bir URL olmasın.
- Mutlak URL’ler kullanın.
- HTTP ve HTTPS varyasyonları için HTTP’den HTTPS’e yönlendirin ve sertifikayı doğru kullanın.

Google ayrıca site taşıma rehberinde HTTPS geçişi, aynı alan adında www ve www’suz adresler arasında geçiş ve aynı alan adındaki yolların taşınması için Adres değişikliği aracına ihtiyacınız olmadığını söyler ([site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)).

## Nasıl kontrol edersiniz?

| Kontrol | Nasıl? | Beklenen |
| --- | --- | --- |
| http ve www’suz | Tarayıcıya `http://alanadiniz.com` yazın | Asıl sürüme gitmeli |
| http ve www | `http://www.alanadiniz.com` | Asıl sürüme gitmeli |
| https ve www | `https://www.alanadiniz.com` | Asıl sürüme gitmeli |
| Zincir | Kaç adımda ulaşıyor? | Tek adım |
| Canonical | Sayfa kaynağında | Asıl sürüm |
| Site haritası | Dosyayı açın | Yalnızca asıl sürüm |
| Search Console | URL Denetleme | Google’ın seçtiği standart sayfa = asıl sürüm |

## Sık yapılan hatalar

1. **İkisini de açık bırakmak.** Kopya sayfa sorunu doğar.
2. **Yönlendirmeyi 302 yapmak.** Kalıcı bir tercih için 301 kullanın.
3. **Zincirleme yönlendirme.** `http://www` → `http://` → `https://` gibi uzayan yol.
4. **Canonical’ı farklı sürüme işaret ettirmek.** Yönlendirme ile çelişir.
5. **Site haritasında karışık sürüm.**
6. **Sertifikanın bir sürümü kapsamaması.**
7. **İç bağlantıların eski sürümü göstermesi.**

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Honaz’da bir kuyumcunun sitesi dört adresten de açılıyor. Search Console’da aynı sayfanın birkaç sürümü görünüyor ve Google, işletmenin istemediği sürümü standart seçmiş.

Düzeltme: asıl sürüm olarak `https://alanadi.com/` seçiliyor; diğer üç sürüm 301 ile ona yönlendiriliyor; sertifika iki sürümü de kapsıyor; canonical, site haritası ve iç bağlantılar güncelleniyor; Search Console’da standart sayfa seçimi haftalarca izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Hangi yönlendirme senaryosu hangi kuralı gerektirir?

| Gelen adres | Hedef (örnek: https, www’suz) | Yönlendirme |
| --- | --- | --- |
| http://alanadi.com | https://alanadi.com | 301 |
| http://www.alanadi.com | https://alanadi.com | 301 (tek adımda) |
| https://www.alanadi.com | https://alanadi.com | 301 |
| https://alanadi.com | https://alanadi.com | Yönlendirme yok |
| Alt sayfa (ör. http://www.alanadi.com/iletisim) | https://alanadi.com/iletisim | 301, yol korunur |

Önemli: yönlendirme yolu korumalı; ana sayfaya toplu gönderme değil, her sayfa kendi karşılığına gitmeli.

## E-posta, DNS ve barındırma notları

Alan adı ayarlarında hem `www` hem `www`’suz kayıtların sunucunuza yönlenmesi gerekir; yönlendirme ancak iki adres de sunucuya ulaşırsa çalışır. DNS ve barındırma ayarlarını yönetmiyorsanız barındırma firmanızdan “www ve www’suz adresi tek adreste toplamak” istediğinizi yazılı bildirin. E-posta adresleriniz (`ad@alanadi.com`) bu seçimden etkilenmez; ancak DNS değişikliği yaparken e-posta kayıtlarına dokunmamaya dikkat edin.

## Reklam, sosyal medya ve profil bağlantıları

Seçtiğiniz asıl adresi her yerde kullanın: İşletme Profili’ndeki web sitesi alanı, sosyal medya biyografileri, e-posta imzası, reklam bağlantıları ve kartvizit. Böylece dış bağlantılar ve ziyaretçiler tek adrese toplanır ve izleme verileri bölünmez.

## Denizli SEO bu konuda nasıl yardımcı olur?

Adres sürümlerini tek adreste toplamak küçük bir ayardır; ama yanlışı kopya sayfa ve bağlantı kaybı doğurur. [Teknik SEO hizmetimizde](/teknik-seo/):

- http/https ve www/www’suz sürümlerini tek adrese 301 ile toplarız,
- canonical, site haritası ve iç bağlantıları asıl sürüme göre düzenleriz,
- Search Console’da standart sayfa seçimini izler, kopya adresleri temizleriz,
- yaptığımız işleri yazılı rapor olarak sunarız.

Sitenizin kaç adresten açıldığını öğrenmek isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### www’yi kaldırırsam bağlantılarım kaybolur mu?

301 yönlendirmesi doğru kurulduysa eski adrese verilen bağlantılar yeni adrese gider. Google, kalıcı yönlendirmelerin PageRank’te kayba neden olmadığını söyler.

### Hangi sürüm daha kısa ve temiz görünür?

Bu bir tercihtir; www’suz sürüm daha kısadır, www ise bazı barındırma yapılarında ek esneklik sağlar. SEO açısından asıl önemli olan tutarlılıktır.

## Sık sorulan sorular

### www sıralamayı etkiler mi?

Bu yazıda sıralamaya etki iddia etmiyoruz. Asıl önemli olan sitenin tek adreste toplanmasıdır.

### Yönlendirmeyi nasıl yaparım?

Barındırma panelinizdeki yönlendirme ayarı, içerik yönetim sistemi eklentisi ya da sunucu dosyası ile yapılır. Emin değilseniz teknik destek alın.

### Adres değişikliği aracı gerekli mi?

Hayır. Google, aynı alan adındaki www ve www’suz adresler arasında geçiş için bu araca gerek olmadığını belirtir.

### Hangi sürümü seçtiğimi nasıl öğrenirim?

Tarayıcıda her dört sürümü deneyin ve hepsinin tek adrese gittiğini doğrulayın; Search Console’da URL Denetleme ile Google’ın seçtiği standart sayfaya bakın.

## Kaynaklar

- [Google Search Central: rel=”canonical” ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Search Central: site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
