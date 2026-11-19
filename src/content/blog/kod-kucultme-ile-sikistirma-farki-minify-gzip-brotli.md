---
title: "Kod Küçültme ile Sıkıştırma Farkı: Minify, Gzip, Brotli"
description: "Kod küçültme (minify) ile sıkıştırma (gzip, Brotli) arasındaki fark nedir? İkisi birlikte nasıl kullanılır, nasıl kontrol edilir ve site hızına etkisi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Önce küçültülen sonra sıkıştırılan bir kod dosyasının boyut karşılaştırması"
---

Kod küçültme (minify), CSS, JavaScript ve HTML dosyalarındaki boşlukları, satır sonlarını ve yorumları kaldırarak dosyayı kod olarak daha kısa hâle getirmektir; sıkıştırma (gzip, Brotli) ise sunucunun dosyayı tarayıcıya göndermeden önce matematiksel bir yöntemle paketleyip küçültmesidir. İkisi farklı işlerdir ve birbirinin yerine geçmez: önce kod küçültülür, sonra sunucu küçültülmüş dosyayı sıkıştırarak gönderir. İkisi birlikte kullanıldığında sayfa dosyaları belirgin biçimde küçülür ve site daha hızlı açılır.

Bu yazıda minify, gzip ve Brotli’nin ne olduğunu, farklarını, nasıl etkinleştirileceğini ve doğru çalıştıklarını nasıl kontrol edeceğinizi anlatıyoruz. Hız konusunun genel çerçevesi için [Core Web Vitals nedir? LCP, INP ve CLS](/blog/core-web-vitals-nedir-lcp-inp-cls/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Kod küçültme (minify) nedir?

Geliştiriciler kodu okunabilir yazar: girintiler, boş satırlar, açıklama yorumları ve uzun değişken adları. Tarayıcı bunlara ihtiyaç duymaz. Küçültme (minification), bu gereksiz karakterleri temizler; bazen değişken adlarını da kısaltır. Örneğin birkaç satırlık bir CSS kuralı tek satıra iner. Sonuç, aynı işi yapan ama daha az bayt içeren bir dosyadır.

Küçültme, kodu değiştirir; yani çıktı insanlar için okunması zor, ama tarayıcı için aynıdır. Bu yüzden geliştirmede okunabilir sürüm, yayında küçültülmüş sürüm kullanılır. Çoğu modern derleme aracı (ve birçok WordPress hız eklentisi) bu işi otomatik yapar.

## Sıkıştırma (gzip ve Brotli) nedir?

Sıkıştırma, dosyanın içeriğindeki tekrarları bulup daha kısa gösterimlerle değiştiren algoritmik bir işlemdir. Sunucu dosyayı sıkıştırıp gönderir, tarayıcı alıp açar. web.dev’in metin tabanlı öğeleri optimize etme rehberi, gzip ve Brotli’nin metin tabanlı öğelerde (CSS, JavaScript, HTML) en iyi performansı gösteren, yaygın olarak kullanılan sıkıştırma algoritmaları olduğunu söyler. Rehber, tüm modern tarayıcıların gzip ve Brotli’yi desteklediğini ve tarayıcının istek başlığında (Accept-Encoding) hangi yöntemleri desteklediğini bildirdiğini anlatır ([metin tabanlı öğelerin kodlama ve aktarım boyutunu optimize edin](https://web.dev/articles/reduce-network-payloads-using-text-compression?hl=tr)).

Aynı rehber, web sunucusu yazılımlarının metin tabanlı kaynakları sıkıştırmak için genellikle modülleri varsayılan olarak etkinleştirdiğini; gzip’te sıkıştırma ayarının 1 ile 9 arasında değiştiğini (9’un en iyi sıkıştırma olduğunu) ve bazı CDN’lerin sıkıştırmayı sizin yerinize yönetebildiğini belirtir. Yani çoğu zaman sıkıştırma sunucu tarafında ya da CDN’de zaten açıktır; sizin yapmanız gereken, açık olup olmadığını doğrulamaktır.

> **Hizmet almak için iletişime geçin.** Sitenizdeki küçültme ve sıkıştırma ayarlarını birlikte kontrol edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## İkisi arasındaki fark nedir?

| Özellik | Kod küçültme (minify) | Sıkıştırma (gzip, Brotli) |
| --- | --- | --- |
| Ne yapar? | Gereksiz karakterleri kaldırır | Veriyi algoritmik olarak paketler |
| Nerede yapılır? | Derleme sırasında, dosya üzerinde | Sunucuda, gönderim sırasında |
| Dosya değişir mi? | Evet, kalıcı olarak | Hayır; yalnızca aktarım biçimi değişir |
| Hangi dosyalar için? | CSS, JavaScript, HTML | Tüm metin tabanlı dosyalar (CSS, JS, HTML, SVG, JSON) |
| Geri alınabilir mi? | Orijinal kodu saklamalısınız | Tarayıcı otomatik açar |
| Görsellere uygulanır mı? | Hayır | Genellikle hayır; JPEG, PNG, WebP zaten sıkıştırılmıştır |

Özet: küçültme dosyanın kendisini, sıkıştırma dosyanın yolculuğunu küçültür. Birini yapıp diğerini atlamak, kazanımın bir kısmını kaçırmaktır.

## Gzip mi Brotli mi?

Her ikisi de geniş desteğe sahiptir. Genel uygulamada Brotli, gzip’e göre çoğu zaman daha iyi sıkıştırma oranı sağlar; ama hangisinin sitenizde daha iyi çalıştığı sunucuya, ayar düzeyine ve içeriğe bağlıdır. Pratik yaklaşım: sunucunuz ve CDN’iniz Brotli destekliyorsa onu, desteklemiyorsa gzip’i kullanın; çoğu platform tarayıcı desteğine göre otomatik olarak uygun olanı seçer. Seviye ayarını en yükseğe çekmek her zaman iyi değildir; yüksek seviye sunucuyu daha çok yorabilir. Değişiklikten sonra ölçerek karar verin.

## Hangi dosyalar sıkıştırılmaz?

Sıkıştırma yalnızca metin tabanlı dosyalarda anlamlıdır. JPEG, PNG, WebP, AVIF gibi görseller ve video dosyaları kendi biçimleri içinde zaten sıkıştırıldığı için gzip ya da Brotli’den yarar görmez; hatta işlemci yükü ekleyebilir. Görsellerin boyutunu azaltmak için doğru biçim, ölçü ve kalite seçimi gerekir ([sayfa hızı için görsel optimizasyonu: boyut ve biçim](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/)).

## Sıkıştırma çalışıyor mu, nasıl kontrol edilir?

Şunları tek tek kontrol edin:

1. **Tarayıcı geliştirici araçlarını açın.** Ağ (Network) sekmesinde bir CSS ya da JavaScript dosyasına tıklayın; yanıt başlıklarında `content-encoding: gzip` ya da `br` (Brotli) ifadesi olmalı.
2. **PageSpeed Insights’a bakın.** “Metin sıkıştırmasını etkinleştirin” gibi bir uyarı varsa sıkıştırma eksiktir.
3. **Farklı dosya türlerini deneyin.** HTML sayfasının, CSS’in ve JavaScript’in ayrı ayrı sıkıştırıldığından emin olun.
4. **CDN kullanıyorsanız panelden kontrol edin.** CDN sıkıştırmayı kendisi yapıyor olabilir.
5. **Değişiklikten sonra önbelleği temizleyin.** Eski sıkıştırılmamış dosya önbellekte kalmış olabilir.

Küçültmeyi kontrol etmek için kaynak dosyayı açın; kod tek satırdaysa ve yorum içermiyorsa küçültülmüştür.

## WordPress ve hazır sitelerde nasıl yapılır?

WordPress’te küçültme ve sıkıştırma çoğunlukla hız ya da önbellek eklentileriyle ya da barındırma sağlayıcısının ayarlarıyla yapılır. Barındırma firması sunucu düzeyinde gzip ya da Brotli’yi açık tutuyorsa ayrıca bir şey yapmanız gerekmeyebilir. Eklentiyle CSS ve JavaScript küçültme seçeneği genellikle bir onay kutusudur; ama etkinleştirdikten sonra sitenin tüm işlevlerini test edin, çünkü küçültme bazen eski ya da hatalı bir betiği bozabilir. Hazır site platformlarında bu işlemlerin çoğu platform tarafından otomatik yapılır; ayar bulamıyorsanız platform destek sayfasına bakın ([WordPress sitem yavaş açılıyor: nereleri kontrol etmeli?](/blog/wordpress-sitem-yavas-aciliyor-nereleri-kontrol-etmeli/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir üreticinin kurumsal sitesi PageSpeed Insights’ta “metin sıkıştırmasını etkinleştirin” ve “CSS’i küçültün” uyarıları alıyor. İşletme barındırma panelinde gzip’in kapalı olduğunu görüyor, destek ekibinden açtırıyor. Ardından hız eklentisinde CSS ve JavaScript küçültmeyi etkinleştiriyor.

Etkinleştirmeden sonra siteyi tarayıp menü, form ve WhatsApp butonunu test ediyor; bir betiğin küçültmeden sonra bozulduğunu fark edip o dosyayı küçültme listesinden çıkarıyor. Ağ sekmesinde yanıt başlıklarında `content-encoding` görüyor ve PageSpeed raporunu yeniden alıyor. Bu örnek sonuç vaadi değildir; sırayı gösterir.

## Hız ölçümünde dikkat edilecekler

Küçültme ve sıkıştırma yalnızca aktarılan bayt sayısını azaltır; sayfa hızının tamamı değildir. Sunucu yanıt süresi, görsellerin boyutu, yazı tipleri ve üçüncü taraf betikler ayrı ayrı etkili olur. Bu yüzden küçültme ve sıkıştırmayı hız çalışmasının bir adımı olarak görün; tek başına büyük bir sıçrama beklemeyin. Sunucu yanıt süresi için [sunucu yanıt süresi (TTFB) nasıl iyileştirilir?](/blog/sunucu-yanit-suresi-ttfb-nasil-iyilestirilir/) yazısına, ölçüm yaklaşımı için [site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/) yazısına bakabilirsiniz. Core Web Vitals için iyi eşik değerleri web.dev’de açıklanır: LCP için 2,5 saniye, INP için 200 milisaniye ([Web Vitals](https://web.dev/articles/vitals?hl=tr)).

## Sık yapılan hatalar

1. **İkisini birbirinin yerine koymak.** Küçültme ve sıkıştırma farklı katmanlardır; ikisi birlikte kullanılır.
2. **Küçültmeden sonra test etmemek.** Bozulan betikler siteyi etkileyebilir.
3. **Görselleri gzip ile sıkıştırmaya çalışmak.** Görseller zaten sıkıştırılmıştır.
4. **Sıkıştırmanın açık olduğunu varsaymak.** Yanıt başlığıyla doğrulayın.
5. **Orijinal kodu saklamamak.** Küçültülmüş dosyayla çalışmak imkânsızdır; kaynak sürümü yedekleyin.
6. **Önbellek temizlememek.** Değişiklik görünmeyebilir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki küçültme ve sıkıştırma durumunu yanıt başlıkları ve hız raporlarıyla kontrol ederiz,
- eksik olanları barındırma ya da eklenti düzeyinde nasıl etkinleştireceğinizi yazılı anlatırız,
- değişiklik sonrası işlev testi ve hız ölçümü yaparız,
- sonuç vaat etmeden, Core Web Vitals’ı Search Console ile izleriz.

Siteniz yavaşsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin hız ayarlarını birlikte gözden geçirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Minify ve gzip aynı şey mi?

Hayır. Minify dosyadaki gereksiz karakterleri kalıcı olarak temizler; gzip ise dosyayı gönderirken paketler. İkisi birlikte kullanılır.

### Brotli gzip’ten daha mı iyi?

Çoğu durumda daha iyi sıkıştırma sağlar; ama sunucu ve içeriğe bağlıdır. Her ikisi de modern tarayıcılarda desteklenir.

### Sıkıştırma SEO’yu etkiler mi?

Doğrudan sıralama etkenidir diye sunulamaz; ama sayfa hızını iyileştirerek kullanıcı deneyimine ve Core Web Vitals’a dolaylı katkı sağlar.

### Sıkıştırmanın açık olduğunu nasıl anlarım?

Tarayıcı geliştirici araçlarının Ağ sekmesinde yanıt başlıklarında `content-encoding` satırına bakın; PageSpeed Insights de eksikliği raporlar.

### Görselleri de küçültmeli miyim?

Evet, ama farklı yöntemle: doğru biçim, boyut ve kalite seçimi. Gzip ya da Brotli görsellerde etkili değildir.

## Kaynaklar

- [web.dev: Metin tabanlı öğelerin kodlama ve aktarım boyutunu optimize edin](https://web.dev/articles/reduce-network-payloads-using-text-compression?hl=tr)
- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)
