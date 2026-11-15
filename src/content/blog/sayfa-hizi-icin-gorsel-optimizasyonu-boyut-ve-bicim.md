---
title: "Sayfa Hızı İçin Görsel Optimizasyonu: Boyut ve Biçim"
description: "Görseller sayfayı neden yavaşlatır? Doğru boyut, WebP/AVIF seçimi, srcset ve lazy loading kullanımı ile ilk ekran görselini hızlandırmanın yolları."
date: 2026-11-13
service: teknik-seo
imageAlt: "Büyük ve küçük görsel dosyalarını karşılaştıran bir hız göstergesi"
---

Görsel optimizasyonu üç işe iner: görseli göründüğü boyuta küçültmek, WebP ya da AVIF gibi verimli bir biçim seçmek ve ilk ekrandaki görseli geciktirmeden, aşağıdakileri ise gerektiğinde yüklemek. Çoğu sitede sayfayı yavaşlatan şey kod değil, kameradan çıktığı gibi yüklenmiş fotoğraflardır.

Görseller genellikle sayfa boyutuna en çok katkıda bulunan öğelerdir; Google’ın resim rehberi de bunu vurgular. Yani hız çalışmasında en kısa yol çoğu zaman görsellerden geçer. Bu yazı ölçmeden uygulamaya, boyuttan biçime kadar adımları anlatıyor. Siteniz telefonda yavaşsa [teknik SEO hizmetimizi](/teknik-seo/) de inceleyebilirsiniz.

## Görseller sayfayı neden yavaşlatır?

Tarayıcı, sayfayı çizmeden önce görseli indirmek zorundadır. Dosya ne kadar büyükse indirme o kadar uzar. Telefonda ve mobil veride bu fark daha belirgindir. İki sorun öne çıkar:

- **Gereğinden büyük dosya.** 4.000 piksel genişliğinde bir fotoğraf, ekranda 400 piksellik alanda gösteriliyorsa fazlasını boşuna indirirsiniz.
- **Verimsiz biçim.** Aynı görüntü daha verimli bir biçimle çok daha küçük dosyaya sığabilir.

Bu iki sorun, sayfanın en büyük içerik öğesinin görünme süresini (LCP) doğrudan etkiler. Google, LCP için iyi eşiği ilk 2,5 saniye olarak belirtir. Ayrıntıları [Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/) yazısında bulabilirsiniz.

## Önce ölçün: sorun hangi görselde?

Her görseli sıkıştırmaya başlamadan önce neyin yavaşlattığını bulun:

1. **PageSpeed Insights’a sayfa adresini girin.** Rapor, LCP öğesini ve görsel önerilerini gösterir.
2. **Tarayıcı geliştirici araçlarının “Network” sekmesini açın.** Sayfayı yenileyip dosyaları boyuta göre sıralayın; en büyük görseller listenin başında olur.
3. **LCP öğesini belirleyin.** web.dev’e göre LCP öğesi PageSpeed Insights ya da DevTools ile bulunur. Ana sayfada genellikle kahraman görselidir.

Ölçmeden sıkıştırmak, tüm klasörü gereksiz yere işlemek demektir. Önce en büyük üç dosyayı düzeltin; kazancın çoğu oradan gelir.

## Doğru boyut nasıl belirlenir?

Kural basittir: görseli ekranda gösterileceği en büyük boyutun biraz üstünde yükleyin. Yaygın bir pratik kural olarak, ekranda 800 piksel genişlikte görünen bir görsel için 1.600 piksel (yüksek çözünürlüklü ekranlar için iki katı) yeterlidir; daha fazlası kullanılmaz.

Uygulama için üç soru sorun:

- Bu görsel sayfada en fazla kaç piksel genişlikte görünüyor?
- Mobilde de aynı boyutta mı görünüyor, yoksa daha mı küçük?
- Yüksek çözünürlüklü ekranlar için iki katı gerçekten gerekli mi?

Bir kahraman görseli ile bir ürün küçük resmi aynı boyutta olmamalıdır. Hepsini tek bir ölçüye getirmek hem kaliteyi hem hızı kötüleştirir.

## Hangi biçim ne zaman seçilmeli?

Google, resim rehberinde BMP, GIF, JPEG, PNG, WebP, SVG ve AVIF biçimlerini desteklediğini söyler ([resim SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)). Pratikte seçim şöyle yapılır:

| Biçim | En uygun kullanım | Dikkat |
| --- | --- | --- |
| JPEG | Fotoğraflar | Çok sıkıştırılırsa bulanıklaşır |
| PNG | Şeffaf zemin, keskin kenar | Fotoğrafta gereksiz büyük olur |
| WebP | Fotoğraf ve grafik için genel seçim | Çok eski tarayıcılarda sorun çıkarabilir |
| AVIF | Daha da küçük dosya isteyen fotoğraflar | Üretim süresi ve araç desteği değişebilir |
| SVG | Logo, ikon, çizim | Fotoğraf için uygun değil |

Pratik bir yol: fotoğraflar için WebP, logo ve ikonlar için SVG kullanmak. AVIF’i, aracınız destekliyorsa denemeye değerdir. Biçim değiştirmek ürün fotoğrafının görünümünü bozmuyorsa kalite kaybı olmadan kazanç sağlar.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Sıkıştırma ne kadar yapılmalı?

Sıkıştırma iki türlüdür. Kayıplı sıkıştırma (JPEG, WebP) bazı ayrıntıları atar; kayıpsız sıkıştırma görüntüyü aynen korur ama kazancı sınırlıdır. Fotoğraflarda hafif kayıplı sıkıştırma çoğunlukla gözle fark edilmez.

Uygulama için şu sırayı izleyin:

1. Görseli gösterileceği boyuta küçültün.
2. Kalite ayarını orta-yüksek bir değere getirin.
3. Önizlemede metin ve ince çizgilerin okunur kaldığını kontrol edin.
4. Gözle fark edilen bozulma yoksa dosyayı kaydedin.

Hedef için tek bir kilobayt sayısı yoktur; bir kahraman görseli ile küçük bir ikonun dosya boyutu aynı beklenmez. Önemli olan sayfanın toplamının makul kalması ve LCP süresinin eşiğin altında olmasıdır.

## srcset ve picture ile her ekrana uygun görsel

Telefona 1.600 piksellik görsel göndermek gereksizdir. Google’ın resim rehberi, duyarlı görsel için `srcset` ve `<picture>` kullanımını anlatır. Mantık şudur: aynı görselin birkaç boyutunu hazırlarsınız, tarayıcı ekranına uygun olanı seçer.

- **`srcset` ve `sizes`:** Farklı genişliklerdeki dosyaları listelersiniz; tarayıcı ekran genişliğine göre birini indirir.
- **`<picture>`:** Biçim ya da tasarım farkı gerektiğinde (ör. mobilde farklı kırpma) kaynakları sırayla verirsiniz.

Önemli ayrıntı: Google görselleri `<img>` öğesinin `src` özelliğinden bulur ve CSS ile arka plan olarak verilen görselleri dizine eklemez. Önemli bir görselin aramada çıkmasını istiyorsanız onu `<img>` ile ekleyin.

## Lazy loading: ne zaman kullanılır, ne zaman kullanılmaz?

Lazy loading, ekranın dışındaki görselleri kullanıcı yaklaşana kadar yüklememektir. Sayfanın alt kısmındaki görseller için hızı artırır. Ancak ilk ekrandaki görsele uygulanırsa ters teper: web.dev, LCP olan resmi asla geç yüklememeniz gerektiğini, `loading="lazy"` kullanmamanızı söyler ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)).

Kural şudur:

- **İlk ekrandaki ve LCP olan görsel:** Lazy loading kullanmayın; yüksek öncelik verin (`fetchpriority`) ve gerekirse önceden yükleyin.
- **Sayfanın alt kısmındaki görseller:** `loading="lazy"` kullanın.

LCP’yi düzeltmenin daha geniş yolları için [LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/) yazımıza bakın.

## Dosya adı, alt metin ve görsel SEO

Hız kadar görsellerin aramada anlaşılması da önemlidir. Google görsel bilgisini altyazı, başlık ve sayfa içeriğinden çıkarır ve kısa ama açıklayıcı dosya adı önerir; `IMG00023.JPG` yerine açıklayıcı bir ad, `image1.jpg` gibi genel adlar yerine anlamlı adlar kullanın. Alt metin hem erişilebilirlik hem anlam için görseli kısaca anlatmalıdır. Konuyu [görsel SEO](/blog/gorsel-seo/) yazısında ayrıca işledik.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya mağazasının ana sayfasında dört büyük kahraman fotoğrafı var; mobilde sayfa yavaş açılıyor.

- **Ölçüm:** PageSpeed Insights, LCP öğesinin ilk fotoğraf olduğunu ve dosyanın çok büyük olduğunu gösteriyor.
- **Düzeltme:** Fotoğraflar gösterilecekleri boyuta küçültülüp WebP’ye çevriliyor; ilk görsele lazy loading verilmiyor ve öncelik veriliyor.
- **Aşağıdaki görseller:** `loading="lazy"` ile geç yükleniyor.

Bu bir sonuç vaadi değildir; ölçüm ve sıralama sitenizin durumuna bağlıdır.

## Bir görsel optimizasyon kontrol listesi

Yayına almadan önce şunlara bakın:

1. En büyük üç görsel gösterildiği boyuta indirildi mi?
2. Fotoğraflar WebP ya da JPEG, logolar SVG mi?
3. İlk ekrandaki görselde lazy loading yok mu?
4. Aşağıdaki görsellerde `loading="lazy"` var mı?
5. Dosya adları açıklayıcı mı, alt metinler dolu mu?
6. PageSpeed Insights sonucu değişmeden önce ve sonra kaydedildi mi?

## Sık yapılan hatalar

- **Kameradan çıkan dosyayı olduğu gibi yüklemek.**
- **Her görseli aynı kaliteyle sıkıştırmak.**
- **İlk ekrandaki görsele lazy loading vermek.**
- **Önemli görseli CSS arka planı olarak eklemek.**
- **Sıkıştırdıktan sonra sonucu ölçmemek.**
- **Görsel dosya adlarını `IMG_0042.jpg` olarak bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Görseller çoğu sitede hızın en büyük kalemidir. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin en ağır görsellerini ve LCP öğesini ölçerek tespit ederiz,
- boyut, biçim ve sıkıştırma ayarlarını sayfa tiplerine göre belirleriz,
- ilk ekran ve alt bölüm görsellerinde doğru yükleme stratejisini kurarız,
- değişikliği öncesi-sonrası ölçümlerle yazılı raporlarız.

Siteniz yavaş açılıyorsa [bize yazın](/iletisim/); sayfanıza bakıp sorunu birlikte netleştirelim.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Görseller için en iyi biçim hangisidir?

Fotoğraflar için WebP genel bir iyi seçimdir; AVIF daha küçük dosya sağlayabilir ama araç desteğine bağlıdır. Logo ve ikonlar için SVG kullanın. Tek bir “en iyi” biçim yoktur; görsel türüne göre seçilir.

### Görsel sıkıştırma kaliteyi bozar mı?

Kayıplı sıkıştırma ayrıntı atar; hafif ayarda gözle fark edilmez. Metin içeren görsellerde ve ince çizgilerde bozulmayı önizlemede kontrol edin.

### Lazy loading her görselde kullanılmalı mı?

Hayır. İlk ekrandaki ve LCP olan görselde kullanmayın; web.dev bunu önermez. Alt kısımdaki görsellerde ise yararlıdır.

### Hız için görseli CSS arka planı yapmak daha mı iyi?

Hayır. Google CSS görsellerini dizine eklemez; önemli görselleri `<img>` ile verin.

### Görsellerim optimize edildi ama sayfa hâlâ yavaş, neden?

Sorun görsel dışında olabilir: sunucu yanıt süresi, ağır betikler ya da yazı tipleri. LCP’yi alt bölümlerine ayırıp hangi aşamanın uzun olduğuna bakın.

## Kaynaklar

- [Google Arama Merkezi: Resim SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [web.dev: LCP, INP, CLS](https://web.dev/articles/lcp?hl=tr)
- [Google Arama Merkezi: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
