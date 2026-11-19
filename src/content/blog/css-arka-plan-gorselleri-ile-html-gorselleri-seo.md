---
title: "CSS Arka Plan Görselleri ile HTML Görselleri: SEO Farkı"
description: "CSS arka plan görselleri ile HTML img görselleri SEO açısından nasıl farklıdır? Google’ın CSS görsellerini dizine eklememesi, alt metin ve doğru görsel seçimi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir sayfada CSS ile eklenen dekoratif arka plan görseli ile img etiketiyle eklenen ürün fotoğrafı"
---

CSS arka plan görselleri (background-image) ile HTML’deki `<img>` görselleri ekranda aynı görünebilir, ama arama motorları için aynı şey değildir. Google, `<img>` öğesinin `src` özelliğindeki görselleri bulup dizine ekleyebilir; CSS ile eklenen arka plan görsellerini ise dizine eklemez. Bu yüzden ürün fotoğrafı, hizmet görseli ya da arama sonuçlarında görünmesini istediğiniz her görsel `<img>` ile eklenmeli; yalnızca süs amaçlı dekoratif görseller CSS ile kullanılabilir.

Bu yazıda iki yöntemin farkını, Google’ın görsel rehberinin ne dediğini, hangi görselin hangi yöntemle eklenmesi gerektiğini ve mevcut sitenizde nasıl denetleyeceğinizi anlatıyoruz. Görsel SEO’nun tamamı için [görsel SEO: alt metin, boyut ve WebP rehberi](/blog/gorsel-seo/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Google CSS görsellerini nasıl ele alır?

Google’ın görsel SEO rehberi bu konuda açıktır: Google, görselleri `<img>` öğesinin `src` özelliğinde bulabilir (öğe `<picture>` gibi başka öğelerin alt öğesi olsa bile) ve Google, CSS görsellerini dizine eklemez. Rehberdeki örnek şöyledir: iyi örnek `<img src="puppy.jpg" alt="Yavru golden retriever">`, kötü örnek ise `<div style="background-image:url(puppy.jpg)">Yavru golden retriever</div>` ([Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)).

Bu cümlenin pratik sonucu şudur: CSS ile eklenen bir görsel, Google Görseller’de görünmez ve görsele özel sinyaller (alt metin, dosya adı, çevresindeki metin) bu görsel için işlemez. Yani “sayfada görünüyor” demek, “Google için de görsel” demek değildir.

## Hangi görsel hangi yöntemle eklenmeli?

Karar kuralı: görselin içeriği sayfanın anlamının bir parçasıysa `<img>`, yalnızca süsse CSS.

| Görsel türü | Yöntem | Neden? |
| --- | --- | --- |
| Ürün fotoğrafı, hizmet görseli | `<img>` + alt metin | Aranabilir içerik; Google Görseller’de görünebilir |
| Makale içindeki görsel, grafik | `<img>` + alt metin | İçeriğin parçası |
| Logo | `<img>` (ya da SVG) + alt metin | Marka kimliği; erişilebilirlik |
| Dekoratif desen, gradyan, arka plan dokusu | CSS | İçerik taşımaz |
| Büyük kapak (hero) görseli | `<img>` tercih edilir | LCP öğesi olabilir; yüklenmesi önemli |
| Buton ve ikon süsleri | CSS ya da SVG | Anlam taşımıyorsa |

Bir görselin dekoratif olup olmadığını anlamak için kendinize sorun: bu görsel kaldırılsa sayfanın verdiği bilgi değişir mi? Değişiyorsa `<img>` kullanın.

> **Hizmet almak için iletişime geçin.** Sitenizdeki görsellerin doğru yöntemle eklendiğini birlikte denetleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hız ve LCP açısından fark

Arka plan görselleri başka bir sorun da çıkarabilir: tarayıcı CSS dosyasını indirip işlemeden o görseli bulamaz. `<img>` etiketi ise HTML’de yer aldığı için tarayıcı onu çok daha erken keşfeder. Sayfanın en büyük görseli (LCP öğesi) CSS arka planıysa, görselin geç keşfedilmesi LCP süresini uzatabilir. web.dev’in LCP rehberi, LCP kaynağının erken keşfedilmesi ve yüklenmesinin önemini vurgular ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Bu yüzden ekranın üstündeki büyük kapak görselini `<img>` ile eklemek, hem Google görsel sinyalleri hem hız için çoğu zaman daha iyidir ([LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/)).

## Duyarlı görseller için `<picture>` ve `srcset`

CSS arka planıyla farklı ekran boyutları için farklı görsel yüklemek yaygın bir gerekçedir. Ama `<img>` tarafında da bunun çözümü vardır: `srcset` ve `<picture>`. Google’ın rehberi, duyarlı görseller için `<picture>` ve `srcset` kullanılmasını ve desteklenen biçimlerin (BMP, GIF, JPEG, PNG, WebP, SVG, AVIF) kullanılmasını önerir. Böylece hem farklı boyutlar sunulur hem görsel Google için bulunabilir kalır. Ayrıntılı boyut ve biçim önerileri için [sayfa hızı için görsel optimizasyonu: boyut ve biçim](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakın.

## Sitenizde CSS arka plan görselleri nasıl bulunur?

Şunları yapın:

1. **Kaynak kodu inceleyin.** Önemli görsellerin sayfa kaynağında `<img>` olarak yer alıp almadığına bakın. Görseli tarayıcıda sağ tıklayıp “görseli yeni sekmede aç” seçeneği yoksa CSS arka planı olabilir.
2. **Geliştirici araçlarını kullanın.** Öğeyi inceleyin; stilde `background-image` görürseniz CSS görselidir.
3. **Bir SEO tarama aracı kullanın.** Araç, sayfadaki `<img>` etiketlerini ve alt metinlerini listeler; listede olmayan önemli görseller CSS ile eklenmiştir.
4. **Google Görseller’de arayın.** `site:` aramasıyla önemli ürün görsellerinizin çıkıp çıkmadığına bakın ([görsellerim Google Görseller’de neden çıkmıyor?](/blog/gorsellerim-google-gorsellerde-neden-cikmiyor/)).
5. **Tema ve sayfa oluşturucu ayarlarına bakın.** Bazı sayfa oluşturucular ürün ya da hizmet görsellerini varsayılan olarak arka plan olarak ekler; “görsel öğesi” seçeneğine geçilebilir.

## Arka plan görselinde alt metin olur mu?

CSS arka planında `alt` özniteliği yoktur. Yine de görselin anlamlı olduğu bir durumda onu CSS ile kullanmak zorundaysanız, erişilebilirlik için çevresindeki öğeye `role="img"` ve `aria-label` verilebilir; ama bu, Google’ın görseli dizine eklemesini sağlamaz. Doğru çözüm, anlamlı görseli `<img>` ile eklemektir. Alt metin yazarken görseli kısa ve doğal anlatın; anahtar kelimelerle doldurmayın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya üreticisinin yeni sitesinde ürün kartlarındaki fotoğraflar, tasarım gereği CSS arka planı olarak eklenmiş. Google Görseller’de ürün fotoğraflarının hiçbiri görünmüyor; ürün sayfalarındaki büyük görsel de LCP’yi uzatıyor.

Çözüm: ürün fotoğrafları `<img>` ile yeniden ekleniyor, her birine ürünü anlatan kısa bir alt metin yazılıyor; kart tasarımındaki gradyan ve desenler CSS’de bırakılıyor. Ekranın üstündeki görsel hemen yükleniyor, ekranın altındakiler geç yükleniyor. Birkaç hafta sonra Search Console’da görsel aramasından gösterim olup olmadığı izleniyor. Bu örnek sonuç vaadi değildir; ayrım mantığını gösterir.

## Sık yapılan hatalar

1. **Ürün fotoğrafını CSS arka plan olarak eklemek.** Google dizine eklemez.
2. **Dekoratif görsele uzun alt metin yazmak.** Gereksizdir; süs görsel CSS’de kalabilir.
3. **Sayfa oluşturucuyu kontrol etmemek.** Varsayılan ayar arka plan olabilir.
4. **Görselleri hem CSS hem `<img>` ile tekrar eklemek.** Gereksiz yük.
5. **Alt metni anahtar kelimeyle doldurmak.** Görseli doğal anlatın.
6. **Test etmemek.** Görsellerin Google Görseller’de çıkıp çıkmadığını izleyin.

## Mevcut sitede dönüşüm planı

Sitenizde yüzlerce görsel varsa hepsini aynı anda taşımayın. Önce işe yarayanlardan başlayın: ürün ve hizmet görselleri, sonra rehber yazılarındaki görseller, en son kapak ve dekoratif alanlar. Her grup için bir liste çıkarın: sayfa adresi, mevcut yöntem (CSS ya da `<img>`), hedef yöntem ve alt metin önerisi. Geliştiriciye “ürün kartlarındaki görsel arka plan yerine `<img>` olsun, boyutu ve yüklenme önceliği korunsun” gibi net bir talimat verin. Taşımadan sonra bir ürün sayfasında görselin hâlâ doğru boyutta göründüğünü ve yatay kaydırma oluşmadığını mobilde test edin. Birkaç hafta sonra Search Console’un performans raporunda görsel aramasına bakarak değişimi izleyin.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki önemli görsellerin `<img>` mi CSS mi olduğunu kaynak kod ve tarama aracıyla ayırırız,
- ürün ve hizmet görsellerini doğru yönteme ve doğru alt metne taşıyacak düzeltme listesi veririz,
- LCP görselini ve duyarlı görsel yapısını gözden geçiririz,
- sonuç vaat etmeden, görsel görünürlüğünü Search Console ile izleriz.

Görsellerinizin aramada görünmesi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizdeki görsel yapısını birlikte denetleyelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### CSS arka plan görselleri Google Görseller’de çıkar mı?

Google’ın rehberine göre CSS görselleri dizine eklenmez. Aramada görünmesini istediğiniz görselleri `<img>` ile ekleyin.

### Dekoratif görseller için CSS kullanabilir miyim?

Evet. Anlam taşımayan süs görselleri için CSS uygundur.

### Hero görseli CSS arka planı olabilir mi?

Olabilir ama önermiyoruz; çünkü geç keşfedilebilir ve LCP’yi uzatabilir. Ana görseli `<img>` ile eklemek genellikle daha iyidir.

### Arka plan görseline alt metin ekleyebilir miyim?

CSS’te alt metin yoktur. Anlamlı görselleri `<img>` ile ekleyip alt metin yazın.

### Sayfa oluşturucumda `<img>` seçeneğini bulamıyorum.

Görseli “arka plan” yerine “resim öğesi” ya da “görsel bileşeni” olarak ekleyin; yoksa tema geliştiricisine danışın.

## Kaynaklar

- [Google Arama Merkezi: Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
