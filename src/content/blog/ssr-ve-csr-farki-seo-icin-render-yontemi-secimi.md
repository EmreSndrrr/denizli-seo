---
title: "SSR ve CSR Farkı: SEO İçin Render Yöntemi Seçimi"
description: "SSR ve CSR farkı nedir? Sunucu tarafı ve istemci tarafı oluşturmanın SEO etkisi, Google’ın JavaScript sayfaları işlemesi ve işletme siteniz için yöntem seçimi."
date: 2026-11-14
service: teknik-seo
imageAlt: "Sunucu tarafı ve istemci tarafı oluşturmada tarayıcıya ulaşan HTML farkı"
---

SSR (sunucu tarafı oluşturma) sayfanın HTML’ini sunucuda hazırlayıp tamamıyla tarayıcıya gönderir; CSR (istemci tarafı oluşturma) ise boş bir iskelet gönderir ve içeriği tarayıcıda JavaScript ile üretir. SEO açısından Google’ın önerisi nettir: JavaScript kaynaklı sorunlar için sunucu tarafı oluşturma, statik oluşturma ya da hydration tercih edilmelidir. Kural olarak içerik ne kadar erken ve eksiksiz HTML’de gelirse arama motoru için o kadar güvenli olur.

Küçük işletme sitelerinin çoğu zaten sunucu tarafında üretilen sayfalar (WordPress gibi) kullanır ve bu konuyu düşünmek zorunda kalmaz. Ancak modern bir JavaScript çerçevesiyle yapılmış ya da “tek sayfalı uygulama” (SPA) olarak kurulmuş bir sitede render yöntemi, aramada görünürlüğü belirleyebilir. Bu yazı iki yöntemi, Google’ın bunları nasıl ele aldığını ve sitenize hangisinin uygun olduğunu anlatıyor. Teknik inceleme için [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## “Render” ne demek?

Render (oluşturma), kodun ziyaretçinin gördüğü sayfaya dönüşmesidir. İçeriğin nerede ve ne zaman HTML’e dönüştüğüne göre üç temel yaklaşım vardır:

- **Sunucu tarafı oluşturma (SSR):** İstek geldiğinde sunucu sayfanın HTML’ini hazırlar; tarayıcı hazır içeriği alır.
- **Statik oluşturma:** Sayfalar yayından önce HTML dosyası olarak üretilir; sunucu hazır dosyayı iletir.
- **İstemci tarafı oluşturma (CSR):** Sunucu içeriksiz bir iskelet ve JavaScript gönderir; içerik tarayıcıda oluşur.

Hydration, SSR ya da statik HTML ile gelen sayfayı tarayıcıda JavaScript ile etkileşimli hâle getirmektir; böylece hem hazır içerik hem etkileşim sağlanır.

## Google JavaScript içeriğini nasıl işler?

Google’ın JavaScript SEO temel bilgileri belgesine göre süreç üç aşamadır: tarama, oluşturma ve dizine ekleme. Googlebot önce robots.txt’yi kontrol eder; kaynaklara izin verilirse gözetimsiz Chromium (evergreen) sayfayı oluşturur ve oluşturulan HTML dizine eklemede kullanılır. Ayrıca 200 kodlu sayfalar oluşturma sırasına girer, 200 olmayanlar oluşturulmayabilir ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)).

Yani Google CSR içeriğini görebilir. Ama Google’ın dinamik oluşturma belgesi iki uyarı yapar: JavaScript’le ilgili bazı sınırlamalar vardır ve bazı sayfalar oluşturulan HTML’de içeriğin görünmemesi sorunuyla karşılaşabilir; ayrıca diğer arama motorları JavaScript’i yok sayabilir ve JavaScript ile oluşturulan içeriği görmeyebilir ([dinamik oluşturma](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering?hl=tr)). Bu nedenle “Google görüyor” demek, “her koşulda sorunsuz görüyor” anlamına gelmez.

## SSR ve CSR karşılaştırması

| Konu | SSR / statik | CSR |
| --- | --- | --- |
| İlk HTML | İçerik hazır gelir | İskelet gelir, içerik sonra oluşur |
| Arama motoru | İçeriği doğrudan HTML’de görür | Oluşturma aşamasına bağımlı |
| Diğer arama motorları | Genellikle sorunsuz | JavaScript’i çalıştırmayanlar içeriği göremeyebilir |
| İlk yükleme hızı | Genellikle içerik daha erken görünür | JavaScript yüklenip çalışana kadar boş görünebilir |
| Sunucu yükü | Sayfa başına işlem gerekir (SSR) | Sunucu hafif, tarayıcı yük taşır |
| Geliştirme | Çerçeve ayarı gerekir | Basit başlangıç, SEO için ek iş gerekebilir |

Tablo genel eğilimi gösterir; gerçek sonuç uygulamanın kalitesine bağlıdır.

## Neden SSR/statik tercih edilir?

Üç ana sebep vardır:

1. **Güvenilirlik:** İçerik HTML’de hazır geldiği için oluşturma aşamasındaki hataların riski azalır.
2. **Hız algısı:** Kullanıcı içeriği daha erken görür; bu, LCP gibi ölçümleri destekleyebilir. LCP’nin dört alt bölümü ve yüksek TTFB etkisi için [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr) sayfasına bakın.
3. **Diğer arama motorları ve botlar:** Yalnızca HTML okuyan sistemler de içeriği alır.

Google’ın dinamik oluşturma için tavsiyesi de bu yöndedir: dinamik oluşturma (bot algılayıp JavaScript’siz sürüm sunma) geçici bir çözümdür, uzun vadeli değildir ve ek karmaşıklık yarattığı için önerilmez; bunun yerine sunucu tarafı oluşturma, statik oluşturma ya da hydration kullanılmalıdır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## CSR kullanıyorsanız nelere dikkat etmelisiniz?

CSR tamamen yasak değildir; ama kontrolleri sıkı tutmalısınız:

- **Kritik içerik HTML’e erken gelsin:** Başlık, ana metin, ana bağlantılar ve meta etiketler oluşturulan HTML’de bulunmalı.
- **Gerçek bağlantılar kullanın:** Google yalnızca `href` özelliği olan `<a>` öğelerini tarar; yalnızca JavaScript tıklama olayıyla çalışan “bağlantılar” keşfedilemez ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)).
- **URL parçası (#) kullanmayın:** Google URL parçalarını genellikle desteklemez; sayfa içeriğini değiştirmek için JavaScript kullanıyorsanız History API ile gerçek URL’ler üretin ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).
- **Doğru durum kodları:** Bulunamayan sayfada 404 döndürün; SPA’larda tüm adreslerin 200 dönmesi soft 404 sorunu yaratır.
- **Kaynakları engellemeyin:** robots.txt, oluşturma için gereken JavaScript ve CSS dosyalarını kapatmamalı.
- **Test edin:** URL Denetleme aracında oluşturulan HTML’e bakın ve içeriğin orada olduğunu doğrulayın.

JavaScript sitelerinin genel durumu için [JavaScript siteleri ve SEO: Google sayfayı görüyor mu?](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/) yazımıza bakın.

## Hangi yöntemi seçmelisiniz?

İşletme tipine göre pratik rehber:

- **Kurumsal ve hizmet siteleri, bloglar:** İçerik ağırlıklıdır ve çoğunlukla statik ya da sunucu tarafı oluşturma uygundur. WordPress gibi sistemler zaten bunu sağlar.
- **E-ticaret:** Ürün ve kategori sayfaları aramada çıkmalıdır; SSR/statik tercih edin. Stok ve fiyat gibi sık değişen bilgileri sunucu tarafında doğru göstermek daha güvenlidir.
- **Uygulama benzeri araçlar (panel, hesaplayıcı, giriş gerektiren ekranlar):** CSR uygundur; bu sayfaların aramada çıkması gerekmez.
- **Karma yapı:** Aranması gereken sayfalar SSR/statik, etkileşimli bölümler CSR ile birlikte (hydration) kurulabilir.

Karar sorusu: “Bu sayfanın aramada çıkması gerekiyor mu?” Evetse içeriğin HTML’de hazır gelmesini hedefleyin.

## Mevcut sitenizin ne kullandığını nasıl anlarsınız?

Basit bir test:

1. Sayfayı tarayıcıda açın, sağ tıklayıp “Sayfa kaynağını görüntüle”yi seçin (Ctrl+U).
2. Ana metninizi kaynakta arayın. Metin kaynakta varsa içerik sunucudan hazır gelmektedir.
3. Kaynakta yalnızca boş bir `<div id="root">` ve betik dosyaları varsa içerik JavaScript ile oluşuyordur (CSR).
4. URL Denetleme aracında “Taranan sayfayı görüntüle” ile Google’ın gördüğü oluşturulmuş HTML’i karşılaştırın.

Kaynakta yok, URL Denetleme’de var ise Google içeriği oluşturabiliyor demektir; ama yine de riskleri değerlendirin.

## Geçiş yaparken nelere dikkat edilir?

CSR’den SSR’a ya da statik yapıya geçmek bir site yenilemesi sayılır:

- URL’ler değişiyorsa 301 yönlendirmeleri hazırlayın ([site taşıma 301 listesi](/blog/site-tasima-301-yonlendirme/)).
- Başlık, açıklama, canonical ve yapılandırılmış veriyi yeni yapıda koruyun.
- Hız ve Core Web Vitals ölçümlerini önce ve sonra karşılaştırın.
- Yayından sonra Search Console’da dizine ekleme ve tarama raporlarını izleyin.

Önemli sayfaları önce deneme ortamında test edip kademeli geçiş yapmak riski azaltır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de yeni açılan bir otelin sitesi modern bir JavaScript çerçevesiyle yapılmış (CSR); oda sayfaları Google’da düzensiz çıkıyor.

- **Tespit:** Sayfa kaynağında yalnızca boş iskelet var; URL Denetleme’de içerik bazı sayfalarda eksik görünüyor.
- **Karar:** Oda ve hizmet sayfaları için sunucu tarafı oluşturma ya da statik üretime geçiliyor; rezervasyon paneli CSR olarak kalıyor.
- **Kontrol:** Bağlantıların gerçek `<a href>` olduğu, durum kodlarının doğru döndüğü ve robots.txt’nin kaynakları engellemediği doğrulanıyor.
- **İzleme:** Birkaç hafta Search Console’da dizine ekleme raporu izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **“Google JavaScript’i görüyor” diye tüm riskleri yok saymak.**
2. **Bağlantıları tıklama olayıyla çalışan düğmelerle kurmak.**
3. **SPA’da her adresten 200 döndürmek.**
4. **JavaScript ve CSS dosyalarını robots.txt ile engellemek.**
5. **Dinamik oluşturmayı kalıcı çözüm saymak.**
6. **Geçişte yönlendirme ve ölçüm planı yapmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Render yöntemi, görünürlüğün sessiz ama belirleyici bir ayarıdır. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin sayfalarını kaynak HTML ve oluşturulmuş HTML açısından karşılaştırır, içerik kayıplarını buluruz,
- hangi sayfaların SSR/statik, hangilerinin CSR kalabileceğini belirleriz,
- bağlantı, durum kodu, robots.txt ve yapılandırılmış veri sorunlarını düzeltiriz,
- geçişleri yönlendirme ve ölçüm planıyla yönetir, sonuçları yazılı raporlarız.

Sitenizin JavaScript yapısını incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### SSR SEO için zorunlu mu?

Zorunlu değil; Google JavaScript içeriğini işleyebilir. Ama aranması gereken sayfalarda içeriğin HTML’de hazır gelmesi daha güvenilirdir.

### CSR siteleri Google’da hiç çıkmaz mı?

Çıkabilir; ancak oluşturma aşamasına bağımlıdır ve bazı sayfalarda içerik eksik görülebilir. Diğer arama motorları JavaScript’i yok sayabilir.

### Dinamik oluşturma (dynamic rendering) kullanmalı mıyım?

Google bunu geçici bir çözüm olarak tanımlar ve önermez; SSR, statik oluşturma ya da hydration tercih edilmelidir.

### WordPress sitem hangi yöntemi kullanır?

Genellikle sunucu tarafı oluşturma; sayfalar sunucuda HTML olarak üretilir. Yine de tema ve eklentilerin JavaScript’le içerik yüklediği bölümleri kontrol edin.

### Sayfamın Google’da nasıl göründüğünü nasıl test ederim?

Search Console’daki URL Denetleme aracında oluşturulmuş HTML’e bakın ve içeriğin orada olduğunu doğrulayın.

## Kaynaklar

- [Google Arama Merkezi: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
- [Google Arama Merkezi: Geçici çözüm olarak dinamik oluşturma](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering?hl=tr)
- [Google Arama Merkezi: Google Arama için URL yapısıyla ilgili en iyi uygulamalar](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
