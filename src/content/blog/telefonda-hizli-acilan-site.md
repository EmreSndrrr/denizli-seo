---
title: "Sitem Telefonda Yavaş: Nereden Başlamalıyım?"
description: "Siteniz telefonda geç açılıyorsa önce neyi ölçmeli, neyi düzeltmelisiniz? Core Web Vitals eşikleri, PageSpeed Insights okuma ve sade bir kontrol sırası."
date: 2026-10-26
updated: 2026-11-06
service: teknik-seo
imageAlt: "Site hızını gösteren renkli bir kadran ve altında üç ilerleme çubuğu"
---

**Kısa cevap:** Siteniz telefonda yavaşsa önce PageSpeed Insights ve Search Console ile ölçün, sonra en büyük kalemi düzeltin. Google üç değere bakar: ana içeriğin görünmesi (LCP) en fazla 2,5 saniye, dokunmaya yanıt (INP) en fazla 200 milisaniye, içerik kayması (CLS) en fazla 0,1 olmalı. İşletme sitelerinde ilk bakılacak yerler büyük görseller, gereksiz eklentiler, üçüncü taraf kodlar ve sunucudur.

Bu yazıda telefondaki yavaşlığın nasıl ölçüleceğini, ölçüm sonuçlarının nasıl okunacağını, hangi değerin hangi soruna işaret ettiğini ve kod tarafına inmeden yapılabilecek düzeltmeleri sırayla anlatıyoruz.

## Google telefonda neyi ölçüyor?

Google, sayfa deneyimini **Core Web Vitals** adı verilen üç değerle ölçer. Bu değerler gerçek kullanıcıların yaşadığı yükleme, etkileşim ve görsel kararlılığı anlatır. “İyi” sayılan sınırlar şöyledir ([web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)):

| Ölçü | Ne anlatır? | “İyi” sınırı |
|---|---|---|
| LCP | Sayfanın ana içeriği ne kadar sürede göründü? | 2,5 saniye veya altı |
| INP | Dokunmaya sayfa ne kadar hızlı yanıt verdi? | 200 milisaniye veya altı |
| CLS | Sayfa açılırken içerik yerinden kaydı mı? | 0,1 veya altı |

Search Console ve PageSpeed Insights her değeri üç gruba ayırır ([Core Web Vitals raporu](https://support.google.com/webmasters/answer/9205520?hl=tr)):

| Ölçü | İyi | İyileştirme gerektiriyor | Yetersiz |
|---|---|---|---|
| LCP | 2,5 sn veya altı | 4 sn veya altı | 4 sn üstü |
| INP | 200 ms veya altı | 500 ms veya altı | 500 ms üstü |
| CLS | 0,1 veya altı | 0,25 veya altı | 0,25 üstü |

Bu sınırlar tek bir ziyarete göre değil, **75. yüzdelik dilime** göre değerlendirilir. Yani ziyaretlerin en az yüzde 75’i sınırın içinde kalmalıdır. web.dev, bu ölçümün telefon ve masaüstü için ayrı yapılmasını önerir. Telefonda iyi, masaüstünde kötü ya da tersi olabilir.

### INP nedir, FID’den farkı ne?

INP (Interaction to Next Paint), ziyaretçinin dokunma, tıklama ve klavye etkileşimlerine sayfanın ne kadar sürede görsel yanıt verdiğini ölçer. Mart 2024’te kararlı bir Core Web Vitals değeri oldu ve FID’in (First Input Delay) yerini aldı ([web.dev: INP resmen bir Core Web Vitals](https://web.dev/blog/inp-cwv-launch?hl=tr)). FID yalnızca ilk etkileşimin gecikmesine bakıyordu; INP ise ziyaret boyunca gözlenen etkileşimlere bakar. Eski bir rehberde FID görürseniz güncel ölçünün INP olduğunu bilin.

## Telefondaki hız nasıl ölçülür?

İki ücretsiz araç yeterlidir: tek bir sayfa için PageSpeed Insights, sitenin geneli için Search Console’daki Core Web Vitals raporu.

### PageSpeed Insights ile ölçüm adımları

1. [pagespeed.web.dev](https://pagespeed.web.dev/) adresini açın.
2. Ölçmek istediğiniz sayfanın tam adresini yazın. Yalnızca ana sayfayı değil, en çok ziyaret alan hizmet sayfasını da ölçün.
3. Sonuç ekranında **Mobil** sekmesinin seçili olduğundan emin olun.
4. Üstteki gerçek kullanıcı verisine bakın: Core Web Vitals değerlendirmesi geçti mi, kaldı mı?
5. Aşağıdaki laboratuvar bölümünde puanı ve önerileri okuyun. Öneriler, düzeltilecek kalemlerin listesidir.

### Laboratuvar verisi ile gerçek kullanıcı verisi farkı

PageSpeed Insights iki tür veri gösterir ([PageSpeed Insights hakkında](https://developers.google.com/speed/docs/insights/v5/about?hl=tr)):

| | Gerçek kullanıcı verisi | Laboratuvar verisi |
|---|---|---|
| Nereden gelir? | Chrome kullanıcılarının son 28 günlük deneyimi (CrUX) | Lighthouse ile tek bir simülasyon |
| Ne işe yarar? | Ziyaretçinin gerçekte ne yaşadığını gösterir | Sorunun nedenini bulmaya yardım eder |
| Sınırı | Az ziyaret alan sayfada olmayabilir | Her çalıştırmada biraz değişir |

Laboratuvar ölçümü, orta seviye bir telefonu ve mobil ağı taklit eder. Google, puanın hiçbir şey değiştirmeseniz de çalıştırmadan çalıştırmaya değişebileceğini belirtir. Lighthouse puanında 90 ve üstü iyi, 50 ile 89 arası iyileştirme gerektiren, 50’nin altı zayıf sayılır. Ancak Google’a göre iyi bir laboratuvar puanı, gerçek kullanıcı deneyiminin de iyi olduğu anlamına gelmez.

Karar kuralı basit: gerçek kullanıcı verisi varsa ona göre karar verin; laboratuvar verisini nedeni bulmak için kullanın. Bir sayfanın kendi verisi yetersizse PageSpeed Insights sitenin geneline ait veriyi gösterir. Yeni ya da az ziyaret edilen sitelerde o da olmayabilir; o zaman laboratuvar verisini yön göstermek için kullanın, puanı hedefe dönüştürmeyin.

### Search Console’daki Core Web Vitals raporu nasıl okunur?

Core Web Vitals raporu, sitenizin bütününü gerçek kullanıcı verisiyle gösterir ve telefonla masaüstünü ayırır ([Core Web Vitals raporu](https://support.google.com/webmasters/answer/9205520?hl=tr)). Okurken bilmeniz gerekenler:

- Rapor sayfaları tek tek değil, **benzer sayfalardan oluşan gruplar** hâlinde gösterir. Örneğin bütün blog yazıları aynı grupta olabilir.
- Bir grubun durumu, **en kötü değerine** göre belirlenir. LCP iyi ama CLS yetersizse grup yetersiz görünür.
- Değerler son 28 günü kapsar.
- Raporda yalnızca dizine eklenmiş sayfalar görünür.
- “Veri yok” görüyorsanız ya mülk yenidir ya da yeterli gerçek kullanıcı verisi yoktur. Bu durumda tek tek sayfaları PageSpeed Insights ile ölçün.

Search Console’un diğer raporlarını [Search Console ilk kontrol yazımızda](/blog/search-console-ilk-kontrol/) anlattık.

## Hangi değer kötüyse nereye bakmalı?

Her değer farklı bir soruna işaret eder. Düzeltmeye başlamadan önce hangi değerin sınırı aştığını bulun; yanlış yere emek harcamayı önler.

| Sınırı aşan değer | Olası neden | İlk bakılacak yer |
|---|---|---|
| LCP | Büyük ana görsel, yavaş sunucu, geç yüklenen üst görsel | Ana görselin boyutu, sunucu yanıt süresi |
| CLS | Boyutu belirtilmemiş görseller, sonradan eklenen reklam ve kutular, yazı tipi değişimi | Görsellerin genişlik ve yükseklik bilgisi, sayfaya sonradan giren öğeler |
| INP | Ağır JavaScript, sohbet ve takip kodları, büyük eklentiler | Üçüncü taraf kodlar ve eklentiler |

### LCP yüksekse

LCP, ekranda görünen en büyük resim, metin bloğu ya da videonun ne zaman göründüğünü ölçer ([web.dev: LCP](https://web.dev/articles/lcp?hl=tr)). İşletme sitelerinde bu öğe çoğu zaman sayfanın üstündeki büyük fotoğraftır. web.dev’in önerileri ([LCP’yi optimize etme](https://web.dev/articles/optimize-lcp?hl=tr)):

- Üstteki ana görseli **geç yüklemeye (lazy loading) almayın**. `loading="lazy"` verilen bir ana görsel, tarayıcının onu geç indirmesine yol açar.
- Ana görsel sayfanın kodunda doğrudan yer alsın; JavaScript ile sonradan eklenen ya da yalnızca arka plan resmi olan görseli tarayıcı daha geç fark eder.
- Görselin dosya boyutunu küçültün; WebP ya da AVIF gibi biçimler bunu kolaylaştırır.
- Sunucunun ilk yanıt süresine (TTFB) bakın. web.dev’e göre yüksek bir TTFB, 2,5 saniyelik LCP’ye ulaşmayı zorlaştırabilir, hatta imkânsız hâle getirebilir.

### CLS yüksekse

CLS, sayfa açılırken içeriğin beklenmedik biçimde yer değiştirmesini ölçer. Okumaya başladığınız metnin aşağı kayması ya da dokunmak üzere olduğunuz düğmenin yerinden oynaması buna örnektir. web.dev’e göre en yaygın nedenler şunlardır ([CLS’yi optimize etme](https://web.dev/articles/optimize-cls?hl=tr)):

- Boyutu belirtilmemiş görseller. Görsel ve videolara her zaman genişlik ve yükseklik bilgisi verin.
- Boyutu belirtilmemiş reklamlar, haritalar, video yerleştirmeleri ve iframe’ler.
- Sayfaya sonradan eklenen içerikler: çerez bildirimi, kampanya şeridi, sohbet kutusu.
- Web yazı tipleri. Yedek yazı tipinden asıl yazı tipine geçiş metni kaydırabilir.

### INP yüksekse

INP sorunları çoğunlukla tarayıcının ana iş parçacığını meşgul eden JavaScript’ten gelir ([INP’yi optimize etme](https://web.dev/articles/optimize-inp?hl=tr)). web.dev, INP’yi ölçmenin en iyi yolunun gerçek kullanıcı verisi olduğunu belirtir. Bizim gözlemimiz, işletme sitelerinde INP’nin çoğu zaman sayfa kurucu eklentileri, sohbet pencereleri ve birden fazla takip kodu yüzünden bozulduğu yönünde. Önce bu kodların gerçekten gerekip gerekmediğine bakın.

## Kod bilmeden neler düzeltilebilir?

Aşağıdaki sıra, en çok sonuç veren ve en kolay uygulanan kalemlerden başlar. Her adımdan sonra ölçümü tekrarlayın.

1. **Görseller.** Ekranda 400 piksel genişliğinde görünen bir fotoğraf 4000 piksel olarak yükleniyorsa, ilk düzeltilecek şey budur. Görselleri görüntülendikleri boyuta indirin ve modern biçimler (WebP gibi) kullanın.
2. **Ana sayfadaki kayar görseller (slider).** Hem ağırdır hem içeriği yerinden oynatabilir. Tek, net bir görsel çoğu işletme için yeterlidir.
3. **Eklentiler.** WordPress ve benzeri sistemlerde kullanılmayan eklentiler de yükleme süresine eklenir. Gerekmeyeni kaldırın.
4. **Üçüncü taraf kodlar.** Sohbet pencereleri, takip kodları ve harici yazı tipleri sayfayı yavaşlatabilir. Gerçekten kullandığınız ve ölçtüğünüz olanlar kalsın.
5. **Video ve harita yerleştirmeleri.** Sayfanın üstüne konmuş otomatik oynayan bir video ya da gömülü harita ağırdır. Gerçekten gerekiyorsa sayfanın alt kısmına alın ve boyutunu sabitleyin.
6. **Barındırma (hosting).** Yukarıdakiler düzeldiği hâlde yavaşsa sunucunun yanıt süresine bakın. PageSpeed Insights’ın gerçek kullanıcı verisinde gösterdiği TTFB (ilk bayta kadar geçen süre) bunun ipucudur.

### Düzeltmeden önce ve sonra

- Değişiklikten önce PageSpeed Insights sonucunu kaydedin; aynı sayfayı aynı sekmede ölçün.
- Laboratuvar puanı her çalıştırmada değiştiği için tek ölçüme güvenmeyin; birkaç kez ölçüp genel eğilime bakın.
- Gerçek kullanıcı verisi son 28 günü kapsadığı için düzeltmenin etkisi bu veriye bir anda değil, haftalar içinde yansır.
- Siteyi yeniden yapıyorsanız hızı tasarım aşamasında düşünmek, sonradan onarmaktan kolaydır. [Web tasarım](/web-tasarim/) sayfamızda bu yaklaşımı anlatıyoruz.

## Site hızı Google sıralamasını etkiler mi?

Etkiler, ama tek başına belirleyici değildir. Google, iyi Core Web Vitals değerlerinin temel sıralama sistemlerinin ödüllendirmek istediği hedeflerle uyumlu olduğunu belirtir ([Core Web Vitals ve Google Arama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)). Aynı zamanda iki uyarı yapar ([Google sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)):

- Google, sayfa deneyimi zayıf olsa bile her zaman en alakalı içeriği göstermeye çalışır. Çok sayıda faydalı sonuç olan aramalarda iyi bir sayfa deneyimi başarıya yardım edebilir.
- Core Web Vitals raporunda iyi sonuç almak, üst sıralarda yer alacağınızın garantisi değildir.

Ayrıca Google, dizine ekleme ve sıralama için sitenin **telefon sürümünü** kullanır; buna mobil öncelikli dizine ekleme denir ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Telefonda eksik ya da bozuk görünen içerik, Google’ın gördüğü içeriktir.

Hız, ziyaretçinin sayfada kalıp size ulaşması için de önemlidir. Denizli’de yerel aramalardan gelen ziyaretçilerin çoğu telefondadır; telefonu, yol tarifini ya da WhatsApp düğmesini bekletmeden görebilmeleri gerekir. Yerel görünürlüğün diğer parçaları için [Denizli yerel SEO rehberimize](/blog/denizli-yerel-seo-rehberi/) bakabilirsiniz.

## Puan 100 olmalı mı?

Hayır. Puanı 100’e çıkarmak amaç değildir; asıl amaç, gerçek ziyaretçinin telefonda beklemeden işini görmesidir. Google da yalnızca SEO için mükemmel puan peşinde koşmanın zaman kaybı olabileceğini belirtir. Gerçek kullanıcı verisinde üç değerin “iyi” sınırları içinde kalması çoğu işletme için yeterlidir.

## Sık sorulan sorular

### PageSpeed Insights puanım neden her seferinde değişiyor?

Laboratuvar ölçümü tek bir simülasyondur; ağ ve sunucu koşullarındaki küçük farklar puanı değiştirir. Google bunun beklenen bir durum olduğunu belirtir. Karar verirken gerçek kullanıcı verisine bakın.

### Sitemde gerçek kullanıcı verisi neden yok?

Gerçek kullanıcı verisi için sayfanın herkese açık olması ve yeterli sayıda Chrome kullanıcısının sayfayı ziyaret etmiş olması gerekir. Yeni ya da az ziyaret alan sitelerde bu veri oluşmayabilir.

### Masaüstünde hızlı, telefonda yavaş. Neden?

Telefonlar daha zayıf işlemcili ve çoğu zaman daha yavaş bağlantılıdır. Aynı görsel ve kodlar telefonda daha uzun sürer. Bu yüzden ölçümü her zaman Mobil sekmesinde yapın.

### Hızlı bir site için yeni tema ya da yeni site şart mı?

Çoğu zaman değil. Önce görselleri, eklentileri ve üçüncü taraf kodları düzeltin. Bunlardan sonra hâlâ sınır aşılıyorsa temanın ya da altyapının değişmesi gündeme gelir.

### FID değerim kötü görünüyor, ne yapmalıyım?

FID artık Core Web Vitals değeri değildir; yerini INP aldı. Güncel araçlarda INP değerine bakın.

## Kaynaklar

- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)
- [web.dev: Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=tr)
- [web.dev: Interaction to Next Paint (INP)](https://web.dev/articles/inp?hl=tr)
- [web.dev: Cumulative Layout Shift (CLS)](https://web.dev/articles/cls?hl=tr)
- [web.dev: INP resmen bir Core Web Vitals değeri](https://web.dev/blog/inp-cwv-launch?hl=tr)
- [web.dev: LCP’yi optimize etme](https://web.dev/articles/optimize-lcp?hl=tr)
- [web.dev: CLS’yi optimize etme](https://web.dev/articles/optimize-cls?hl=tr)
- [web.dev: INP’yi optimize etme](https://web.dev/articles/optimize-inp?hl=tr)
- [PageSpeed Insights hakkında](https://developers.google.com/speed/docs/insights/v5/about?hl=tr)
- [Search Console Yardımı: Core Web Vitals raporu](https://support.google.com/webmasters/answer/9205520?hl=tr)
- [Google Search Central: Core Web Vitals ve Google Arama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
- [Google Search Central: sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)
- [Google Search Central: mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)

Ana sitemizde konuyu başka bir açıdan ele alan [Core Web Vitals yazısı](https://www.ventiajans.com/blog/core-web-vitals/) da var. Sitenizin teknik denetimi için [Teknik SEO ve site hızı](/teknik-seo/) sayfasına bakın.
