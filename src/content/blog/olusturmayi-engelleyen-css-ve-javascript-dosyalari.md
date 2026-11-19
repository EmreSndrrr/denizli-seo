---
title: "Oluşturmayı Engelleyen CSS ve JavaScript Nasıl Bulunur?"
description: "Oluşturmayı engelleyen CSS ve JavaScript dosyaları nasıl bulunur ve azaltılır? PageSpeed Insights’ta tespit, async ve defer, kritik CSS ve sık yapılan hatalar."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sayfa yükleme zaman çizelgesinde ilk görüntüyü geciktiren CSS ve JavaScript dosyaları"
---

Oluşturmayı engelleyen kaynaklar (render-blocking resources), tarayıcının sayfayı ekrana çizmeden önce indirip işlemesi gereken CSS ve JavaScript dosyalarıdır. Bu dosyalar ne kadar büyük ve çok olursa ilk görüntü o kadar geç gelir; ziyaretçi boş bir ekrana daha uzun süre bakar. Bunları PageSpeed Insights ya da tarayıcı geliştirici araçlarında bulabilir; önemsiz olanları ertelemek, gerekli olanı küçültmek ve kritik kısmı sayfaya gömmek gibi yöntemlerle azaltabilirsiniz.

Bu yazıda engelleyici kaynakların ne olduğunu, nasıl tespit edileceğini, hangi yöntemlerle azaltılacağını ve hangi hatalardan kaçınmanız gerektiğini anlatıyoruz. Genel hız konusu için [Core Web Vitals nedir? LCP, INP ve CLS](/blog/core-web-vitals-nedir-lcp-inp-cls/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Oluşturmayı engelleyen kaynak ne demektir?

Tarayıcı bir sayfayı HTML’den okur; HTML içinde bir CSS dosyası ya da senkron bir JavaScript dosyası görürse, o dosya indirilip işlenene kadar ekrana çizmeyi bekletebilir. Bu bekleyiş, ilk içeriğin görünme süresini uzatır.

web.dev’in “Oluşturmayı engelleyen CSS” makalesi bunu şöyle anlatır: CSS varsayılan olarak oluşturmayı engelleyen bir kaynak olarak kabul edilir; bu nedenle tarayıcı, CSS nesne modeli (CSSOM) oluşturulana kadar işlenen hiçbir içeriği oluşturmaz. Makale ayrıca CSS’nizi yalın tuttuğunuzdan, mümkün olduğunca hızlı sunduğunuzdan ve oluşturmayı engellememek için medya türleri ile sorguları kullandığınızdan emin olmanızı önerir. Medya türleri ve sorguları, bazı CSS kaynaklarını oluşturmayı engelleyici olmayan kaynaklar olarak işaretlemeye olanak tanır; tarayıcı yine de tüm CSS kaynaklarını indirir ama engelleyici olmayanlar çizmeyi beklemez ([Oluşturmayı engelleyen CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css?hl=tr)).

## Neden önemlidir?

Oluşturmayı engelleyen kaynaklar özellikle iki hız ölçüsünü etkiler: ilk içeriğin görünmesi (FCP) ve en büyük içeriğin görünmesi (LCP). web.dev’in LCP optimizasyonu makalesi, TTFB ile FCP arasındaki büyük farkın tarayıcının çok sayıda oluşturmayı engelleyen öğe indirmesi gerektiğini gösterebileceğini söyler ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Google’ın sayfa deneyimi yaklaşımında Core Web Vitals önemli bir parçadır; ama iyi bir sayfa deneyimi tek başına yüksek sıralama garantisi vermez ([Google sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)). Yine de yavaş açılan sayfa ziyaretçiyi kaybettirir; bu yüzden engelleyici kaynakları azaltmak kullanıcı için değerlidir.

> **Hizmet almak için iletişime geçin.** Sitenizin hız raporundaki engelleyici kaynakları birlikte ayıklayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Engelleyici kaynaklar nasıl tespit edilir?

Üç pratik yol vardır:

1. **PageSpeed Insights.** Sayfa adresini girin; “Oluşturmayı engelleyen kaynakları ortadan kaldırın” gibi bir uyarı varsa listelenen dosyalar engelleyicidir. Rapor, her dosyanın tahmini etkisini de gösterir.
2. **Tarayıcı geliştirici araçları.** Ağ (Network) sekmesinde sayfa yüklenirken hangi CSS ve JavaScript dosyalarının ilk görüntüden önce yüklendiğine bakın. Performans sekmesi, oluşturmanın hangi dosyayı beklediğini gösterir.
3. **Lighthouse raporu.** Tarayıcıdaki Lighthouse, aynı uyarıyı ve önerileri verir.

Ölçümü hem mobilde hem masaüstünde yapın; mobilde etki genellikle daha belirgindir. Laboratuvar ölçümü ile gerçek kullanıcı verisi farklı olabilir ([site hızı ölçümü: laboratuvar ve gerçek kullanıcı verisi](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/)).

## CSS tarafında ne yapılır?

CSS dosyaları varsayılan olarak engelleyicidir; ama bunları azaltmanın yolları vardır:

- **Gereksiz CSS’i kaldırın.** Kullanılmayan tema ve eklenti stillerini temizleyin; sayfada kullanılmayan kural yükü artırır.
- **Küçültün ve sıkıştırın.** Dosya boyutunu azaltmak indirme süresini kısaltır ([kod küçültme ile sıkıştırma farkı](/blog/kod-kucultme-ile-sikistirma-farki-minify-gzip-brotli/)).
- **Medya sorgularını kullanın.** Yalnızca yazdırma ya da belirli ekran boyutları için gereken CSS’i ayrı dosyaya koyup `media` özniteliğiyle işaretleyin; bu dosyalar çizmeyi engellemez.
- **Kritik CSS’i sayfaya gömün.** Ekranın üst kısmı (ilk görünen alan) için gereken küçük CSS’i HTML içine yazın; geri kalanını sonradan yükleyin. Bu yöntem teknik bilgi ve dikkat ister; yanlış uygulanırsa sayfa önce stilsiz görünüp sonra değişebilir.
- **Tek büyük dosya yerine gereken dosyalar.** Bazen birleştirmek, bazen bölmek daha iyidir; ölçerek karar verin.

## JavaScript tarafında ne yapılır?

Senkron JavaScript, HTML ayrıştırmayı durdurur. Çözümler:

| Yöntem | Ne yapar? | Ne zaman uygun? |
| --- | --- | --- |
| `defer` | HTML ayrıştırması bitince, sırayla çalıştırır | Sayfa içeriğine bağlı betikler |
| `async` | İndirir ve hazır olunca hemen çalıştırır | Bağımsız betikler (analiz gibi) |
| Sayfa sonuna taşımak | Betik yükünü içerikten sonraya iter | Eski yöntem; `defer` çoğu zaman daha iyi |
| Kaldırmak | Gereksiz betiği siler | Kullanılmayan eklenti ve izleme kodları |

Önemli uyarı: betiklerin çalışma sırası önemlidir. Bir betik başka bir betiğe bağımlıysa `async` sırayı bozabilir. Değişiklikten sonra sitenin tüm işlevlerini (menü, form, sepet) test edin. WordPress’te hız eklentileri bu işi otomatik yapabilir ama yanlış ayar siteyi bozabilir; değişiklikten önce yedek alın ([WordPress sitem yavaş açılıyor: nereleri kontrol etmeli?](/blog/wordpress-sitem-yavas-aciliyor-nereleri-kontrol-etmeli/)).

## Üçüncü taraf betikleri ne olacak?

Analiz, sohbet, reklam ve harita gibi üçüncü taraf betikler çoğu zaman en ağır engelleyicilerdir. Şunları değerlendirin: gerçekten kullandığınız betikleri tutun, kullanılmayanları kaldırın; mümkünse `async` ya da `defer` ile yükleyin; sohbet gibi araçları sayfa yüklendikten sonra tetikleyin. Her yeni betik eklemeden önce “bunun ilk görüntüye bedeli ne?” diye sorun. Yazı tipleri de oluşturmayı etkileyebilir; ayrıntı için [web fontları site hızını nasıl etkiler?](/blog/web-fontlari-site-hizini-nasil-etkiler/) yazısına bakın.

## LCP görselini geç yüklemeyin

Hız çalışmasında sık yapılan bir hata, sayfanın en büyük görselini (LCP görseli) geç yüklemektir. web.dev’in LCP makalesi uyarır: LCP resmini asla geç yüklemeyin; bu her zaman gereksiz kaynak yükleme gecikmesine yol açar ve LCP üzerinde olumsuz etki yaratır ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Ekranın üstündeki görseller normal yüklensin, geç yükleme ekranın altındaki görseller için kullanılsın ([lazy loading nasıl kullanılır?](/blog/lazy-loading-nasil-kullanilir-sik-yapilan-hatalar/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir üretici firmanın WordPress sitesi mobilde yavaş açılıyor. PageSpeed Insights raporu, altı CSS ve dört JavaScript dosyasını oluşturmayı engelleyen kaynak olarak listeliyor. Bunların ikisi, siteden kaldırılmış eski bir sohbet eklentisine ait.

Düzeltme: kullanılmayan eklentinin dosyaları kaldırılıyor; analiz betiği `async` yapılıyor; menü betiği `defer` ile yükleniyor; yazdırma stilleri ayrı dosyaya alınıp `media` ile işaretleniyor. Değişiklikten sonra tüm işlevler (menü, form, WhatsApp butonu) test ediliyor ve PageSpeed raporu yeniden alınıyor. Birkaç hafta boyunca Search Console’da Core Web Vitals raporu izleniyor. Bu örnek sonuç vaadi değildir; sırayı gösterir.

## Sık yapılan hatalar

1. **Her betiği `async` yapmak.** Bağımlı betikler sırayı bozabilir.
2. **Kritik CSS’i yanlış uygulamak.** Sayfa stilsiz yanıp sönebilir.
3. **Değişiklikten sonra test etmemek.** Menü, form ve sepet kontrol edilmeli.
4. **Kullanılmayan eklentileri bırakmak.** Kaldırılan eklentilerin dosyaları yüklenmeye devam edebilir.
5. **LCP görselini geç yüklemek.** Ekranın üstündeki ana görsel hemen yüklenmeli.
6. **Yalnızca laboratuvar puanına bakmak.** Gerçek kullanıcı verisine de bakın.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin hız raporlarını ve engelleyici kaynaklarını mobil ve masaüstünde ölçeriz,
- hangi CSS ve JavaScript dosyalarının gerekli, hangilerinin ertelenebilir ya da kaldırılabilir olduğunu yazılı listeleriz,
- geliştiriciniz için değişiklik talimatı ve test listesi hazırlarız,
- sonuç vaat etmeden, Core Web Vitals değişimini Search Console ile izleriz.

Siteniz yavaşsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin hız engellerini birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Oluşturmayı engelleyen kaynakları tamamen kaldırabilir miyim?

Hayır; bazı CSS sayfanın çizilmesi için gereklidir. Amaç tümünü kaldırmak değil, gereksiz olanları azaltmak ve gerekli olanı küçültmektir.

### async ve defer arasındaki fark nedir?

`defer` betiği HTML ayrıştırması bitince sırayla çalıştırır; `async` indirdikten hemen sonra, sıradan bağımsız çalıştırır. Bağımlı betiklerde `defer` daha güvenlidir.

### Hız eklentisi bu işi çözer mi?

Birçoğunu otomatik yapabilir ama yanlış ayar siteyi bozabilir. Yedek alın ve işlevleri test edin.

### Mobil puan neden daha düşük?

Mobil cihazlar daha yavaş ağ ve işlemci kullandığından engelleyici kaynakların etkisi daha belirgindir.

### Kritik CSS gerekli mi?

Her sitede değil. Küçük sitelerde CSS’i yalınlaştırmak çoğu zaman yeterlidir; kritik CSS ileri bir optimizasyondur.

## Kaynaklar

- [web.dev: Oluşturmayı engelleyen CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [Google Arama Merkezi: Google sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)
