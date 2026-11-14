---
title: "Sayfa Yüklenirken İçerik Neden Kayar? CLS Düzeltme"
description: "Sayfa yüklenirken içerik neden kayar? Boyutsuz görseller, reklam alanları, dinamik içerik ve web yazı tipleri; CLS değerini adım adım düzeltme rehberi."
date: 2026-11-14
service: teknik-seo
imageAlt: "Sayfada kayan içerik ve sabit ayrılmış alanlarla CLS düzeltmesi"
---

Sayfa yüklenirken içeriğin kayması, tarayıcının görsel, reklam, yazı tipi ya da sonradan eklenen bir bölüm için yer ayırmamasından kaynaklanır; bu durum CLS (Cumulative Layout Shift) ile ölçülür. Düzeltmenin özü, görsellere ve yerleşimlere önceden alan ayırmak, sonradan eklenen içeriği mevcut içeriğin üstüne itmemek ve yazı tipi yüklenirken oluşan kaymayı sınırlamaktır. İyi CLS değeri 0,1 ya da daha azdır.

Kayan sayfa, kullanıcının yanlış düğmeye dokunmasına yol açar ve güveni sarsar. Teknik iyileştirme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## CLS neyi ölçer?

web.dev’e göre CLS, görünür içeriğin görüntü alanındaki kararsızlığını ölçer. Birimsizdir; iyi değer ≤ 0,1, yetersiz değer > 0,25’tir ve sayfa ziyaretlerinin en az %75’inde bu eşiği tutturmak hedeflenir ([CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)). Üç metriğin birlikte anlamı için [Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/) yazısına bakın.

Kayma, her zaman görsel bir sıçrama gibi görünmez; bazen yalnızca metnin birkaç piksel aşağı inmesi olur. Ama okuma sırasında ya da düğmeye dokunurken olduğunda, kullanıcı için rahatsız edicidir.

## Başlıca nedenler

web.dev’in listesindeki yaygın nedenler:

1. **Boyutsuz görseller:** `width` ve `height` verilmemiş resimler yüklenince alanı genişletir.
2. **Boyutsuz reklamlar, yerleştirmeler ve iframe’ler:** Harita, video, reklam yüklenince yer açar.
3. **Dinamik eklenen içerik:** Üstte beliren bildirim bandı, çerez penceresi, sonradan gelen blok.
4. **Web yazı tipleri:** Yedek yazı tipinden asıl yazı tipine geçerken metnin boyutu değişir.

Hangisinin sizin sitenizde olduğunu bulmak için geliştirici araçlarında kayan öğeleri işaretleyen performans kaydını kullanabilirsiniz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Görsellere alan ayırın

En yaygın ve en kolay çözüm: her görselin genişlik ve yüksekliğini tanımlayın. web.dev, `width`/`height` özelliklerini ya da CSS `aspect-ratio` kullanmayı önerir; böylece tarayıcı görsel inmeden alan ayırır.

- HTML’de `<img>` etiketine `width` ve `height` ekleyin.
- Duyarlı görsellerde oranı koruyan CSS kullanın.
- Arka plan görsellerinde kapsayıcıya sabit oran verin.
- WordPress’te tema ve görsel eklentisinin boyut özelliklerini eklediğini kontrol edin.

Görsel biçimi ve boyutu için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakın.

## Reklam, iframe ve gömülü içerik

Harita, video ve üçüncü taraf pencereleri yüklendiğinde alan açıyorsa:

- Kapsayıcıya sabit yükseklik ya da oran verin.
- Alt kısımdaki içeriği ittirmesin diye yer tutucu kullanın.
- Reklam alanlarında olası en büyük boyutu rezerve edin; boş kalma pahasına kaymayı önleyin.
- Sayfanın üst kısmına sonradan reklam eklemeyin.

Harita ve video kullanıyorsanız kullanıcı dokunana kadar ağır içeriği yüklemeyen bir yer tutucu kullanabilirsiniz.

## Dinamik eklenen içerik

Sayfa yüklendikten sonra beliren bantlar kaymanın büyük nedenidir:

- **Çerez bildirimi:** Sayfanın üstüne eklenip içeriği aşağı itmesin; kenara sabit yerleştirin.
- **Duyuru bandı:** Alanı baştan ayırın.
- **Sonradan yüklenen yorumlar, ilgili yazılar:** Kullanıcı eylemiyle (düğme) ya da görünüm alanının dışında yükleyin.
- **Sonsuz kaydırma:** Altta yeni içerik eklemek mevcut içeriği kaydırmaz; asıl sorun, üstte ya da ortada ekleme yapmaktır.

Kural: kullanıcının zaten baktığı içeriğin yerini değiştirmeyin.

## Web yazı tipleri

Yazı tipi iner inmez metnin ölçüleri değişirse kayma olur. web.dev’in önerileri:

- Yazı tipi yüklenirken görünen yedek yazı tipini (`font-family: X, sans-serif`) asıl yazı tipine yakın seçin.
- `size-adjust` gibi özelliklerle yedek yazı tipinin boyutunu eşleştirin.
- `font-display: optional` yazı tipi gecikirse yeniden düzenleme oluşturmaz; yazı tipi bazen hiç gösterilmez, bu bilinçli bir takastır.

Yazı tiplerinin hızı nasıl etkilediği için [web fontları site hızını nasıl etkiler?](/blog/web-fontlari-site-hizini-nasil-etkiler/) yazısına bakın.

## Mobilde özellikle kontrol edin

Mobil ekranda yer az olduğu için kayma daha belirgindir. Kontrol:

- Yapışkan başlık yüklendiğinde içeriği ittiriyor mu?
- Cihaz yatay/dikey çevrilince düzen sıçrıyor mu?
- Sayfanın üstündeki görsel kaymaya neden oluyor mu?
- Telefonda gerçek cihazla test yaptınız mı?

## Animasyon ve geçişler

Kayma ile animasyon aynı şey değildir. Kullanıcının eylemiyle başlayan ve öğeyi yerinde dönüştüren animasyonlar (örneğin menü açılması) sorun yaratmaz; ama öğenin boyut ya da konumunu sayfanın akışını bozacak şekilde değiştiren efektler sorun yaratabilir. Pratik ilke: animasyonda öğenin diğer içeriği itmesine izin vermeyin; mümkünse konumu değil, saydamlık ve dönüşüm gibi akışı etkilemeyen özellikleri değiştirin. Hareket hassasiyeti olan kullanıcılar için azaltılmış hareket tercihine de uyun ([erişilebilirlik ve SEO](/blog/web-sitesi-erisilebilirligi-temel-kurallar/)).

## Kayma ve dönüşüm ilişkisi

CLS yalnızca bir teknik rakam değildir; satışa da dokunur. Yanlış düğmeye dokunan ziyaretçi sepete yanlış ürün ekler, formu yanlış doldurur ya da sayfayı terk eder. Bu yüzden önceliği en çok dönüşüm getiren sayfalara (ana sayfa, hizmet sayfaları, iletişim ve sepet) verin. Düzeltmeden önce ve sonra bu sayfalardaki terk oranını ve dönüşümü karşılaştırın; böylece teknik işin iş sonucuna etkisini raporda gösterebilirsiniz.

## Tema ve eklenti değişiminden sonra yeniden test

Kayma sorunları çoğunlukla bir güncellemeden sonra geri gelir: yeni tema sürümü, yeni bir sohbet eklentisi, değişen reklam kodu. Bu yüzden:

1. Her önemli güncellemeden sonra ana şablonları (ana sayfa, hizmet, blog, iletişim) telefonda gözle kontrol edin.
2. Core Web Vitals raporunu ay sonu rutininize ekleyin.
3. Yeni eklenti eklemeden önce yedekli bir test ortamında deneyin.
4. Değişikliklerin tarihini not edin; sorun çıkarsa nedenini bulmak kolaylaşır.

## Ölçüm ve doğrulama

1. Search Console Core Web Vitals raporunda sorunlu sayfa gruplarını bulun.
2. PageSpeed Insights’ta o sayfanın CLS değerine ve kayan öğelere bakın.
3. Geliştirici araçlarında kayma kaydı alın.
4. Değişiklikten sonra laboratuvarda yeniden ölçün; alan verisinin güncellenmesi için zaman tanıyın ([site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir otelin sitesinde ana sayfada slayt görselleri yüklenince metin aşağı kayıyor; Rezervasyon düğmesine dokunmaya çalışan kullanıcılar yanlış yere tıklıyor.

- **Teşhis:** Slayt görsellerinde boyut yok; çerez bandı sayfanın üstüne sonradan ekleniyor.
- **Çözüm:** Görsellere genişlik, yükseklik ve oran veriliyor; çerez bandı alt kenara sabitleniyor; yedek yazı tipi asıl yazı tipine yaklaştırılıyor.
- **Doğrulama:** Laboratuvarda CLS yeniden ölçülüyor, haftalar içinde alan verisi izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Görsellere boyut vermemek.**
2. **Reklam ve gömülü içerik için yer ayırmamak.**
3. **Üstte sonradan beliren bantlar eklemek.**
4. **Yedek yazı tipini asıl yazı tipinden çok farklı seçmek.**
5. **Mobilde test etmemek.**
6. **Düzeltmeden sonra ölçüm yapmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- kayan öğeleri tespit eder ve nedenlerini ayırırız,
- görsel, reklam, bildirim ve yazı tipi düzeltme listesi çıkarırız,
- geliştiriciniz için uygulanabilir teknik not yazarız,
- iyileşmeyi gerçek kullanıcı verisiyle izleriz.

Hız ve düzen denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### İyi CLS değeri nedir?

0,1 ya da daha az; 0,25’in üzeri yetersiz kabul edilir.

### En kolay düzeltme nedir?

Görsellere genişlik ve yükseklik vermek ya da CSS ile oran tanımlamak.

### Çerez bandı kaymaya neden olur mu?

Sayfanın üstüne sonradan eklenip içeriği aşağı itiyorsa evet; alanı baştan ayırın ya da kenara sabitleyin.

### Yazı tipi kaymayı nasıl etkiler?

Yedek yazı tipinden asıl yazı tipine geçişte metin boyutu değişirse kayma oluşur; yakın yedek ve boyut ayarı bunu azaltır.

### CLS birimli mi?

Hayır; birimsiz bir değerdir.

## Kaynaklar

- [web.dev: CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)
- [web.dev: Yazı tipleriyle ilgili en iyi uygulamalar](https://web.dev/articles/font-best-practices?hl=tr)
