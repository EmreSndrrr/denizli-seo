---
title: "Lazy Loading Nasıl Kullanılır? Sık Yapılan Hatalar"
description: "Lazy loading nasıl kullanılır? loading=lazy özelliği, LCP görselinde yapılan hata, boyut tanımı, SEO etkisi ve test; ekran dışı görselleri doğru erteleyin."
date: 2026-11-14
service: teknik-seo
imageAlt: "Ekran dışı görsellerin sonradan yüklendiği lazy loading şeması"
---

Lazy loading (geç yükleme), ekranın dışındaki görselleri kullanıcı onlara yaklaşana kadar yüklememektir; tarayıcılarda bunun için görsel etiketine `loading="lazy"` yazmak yeterlidir. En sık yapılan hata, sayfanın ilk ekranındaki ana görseli de ertelemektir; bu, LCP’yi kötüleştirir. Kural: ilk ekrandaki görselleri hemen yükleyin, aşağıdakileri erteleyin ve her görsele boyut tanımlayın.

Doğru kullanıldığında sayfa daha az veri indirir, daha hızlı açılır. Teknik uygulama için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Lazy loading nedir?

web.dev’e göre tarayıcı düzeyinde geç yükleme için görsel etiketine `loading` özelliği eklenir: `loading="lazy"` ekran dışındaki görselleri görünüm alanına yaklaşana kadar erteler, `loading="eager"` (varsayılan) hemen yükler. Bunun için ayrı bir JavaScript kitaplığına gerek yoktur ve tarayıcı düzeyinde geç yükleme JavaScript devre dışıyken de görsellerin yüklenmesini sağlar ([tarayıcı düzeyinde resim geç yükleme](https://web.dev/articles/browser-level-image-lazy-loading?hl=tr)).

Örnek biçim:

`<img src="urun.jpg" alt="Ürün görseli" loading="lazy" width="200" height="200">`

Bu örnekte `width` ve `height` de vardır; bu önemlidir (aşağıda).

## Ne zaman kullanılmalı?

Lazy loading şu görseller için uygundur:

- Sayfanın aşağı kısmındaki galeri ve ürün görselleri.
- Uzun blog yazılarının gövdesindeki resimler.
- Alt sayfalardaki kart ve liste görselleri.
- Ekranın dışında kalan gömülü içerikler (uygun yöntemle).

Kullanılmaması gerekenler:

- Sayfanın ilk ekranındaki (kullanıcının hemen gördüğü) görseller.
- Büyük hero görseli ya da LCP öğesi olan görsel.
- Ürün detay sayfasındaki ana ürün fotoğrafı.

## En büyük hata: LCP görselini ertelemek

web.dev’in LCP rehberi açıkça uyarır: LCP görselini asla geç yüklemeyin (`loading="lazy"` kullanmayın); onun yerine yüksek `fetchpriority` ile önyükleyin ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Çünkü lazy loading, tarayıcının görseli geç keşfetmesine neden olur ve ana görselin gecikmesi LCP’yi uzatır.

Birçok WordPress teması ya da eklentisi tüm görsellere otomatik `loading="lazy"` ekler. Bu yüzden:

1. Sayfanın ilk ekranındaki ana görseli kontrol edin.
2. Eğer `loading="lazy"` varsa kaldırın ya da `eager` yapın.
3. Gerekirse yüksek öncelik tanımlayın.
4. LCP öğesini PageSpeed Insights’ta doğrulayın ([LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Boyut tanımını unutmayın

Lazy loading ile birlikte her görsele `width` ve `height` (ya da CSS oranı) vermezseniz, görsel yüklendiğinde sayfa kayar ve CLS kötüleşir. web.dev, boyutsuz görselleri CLS’nin yaygın nedenleri arasında sayar ([CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)). Yani lazy loading ile boyut tanımı bir ikili olarak kullanılmalıdır ([CLS düzeltme](/blog/sayfa-yuklenirken-icerik-neden-kayar-cls-duzeltme/)).

## SEO’ya etkisi

Doğru uygulanan lazy loading arama görünürlüğüne zarar vermez; ancak dikkat edilecekler vardır:

- Görsellerin gerçek `<img>` ya da uygun öğelerle HTML’de bulunması gerekir; yalnızca kaydırma olayına bağlı betikle eklenen içerik arama motoru tarafından görülemeyebilir.
- Görsellerin `alt` metni olmalı ([görsel SEO](/blog/gorsel-seo/)).
- Tarayıcı düzeyinde `loading="lazy"` özelliği standart bir yöntemdir ve JavaScript’e bağımlı değildir.
- Önemli içeriği (metin) kullanıcı kaydırınca ya da tıklayınca yüklemeye bağlamayın.

JavaScript ile oluşturulan içeriğin Google tarafından nasıl görüldüğü için [JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/) yazısına bakın.

## iframe ve video

Harita, video ve diğer gömülü içerikler de ağır olabilir. Bunlar için:

- Kullanıcı etkileşimine kadar yüklemeyen bir yer tutucu (önizleme görseli) kullanın.
- Gömülü içeriğin alanını sabit tutun; yer tutucu kayma yaratmasın.
- Aynı sayfada çok sayıda gömülü video ya da harita bulundurmaktan kaçının.

## Slayt, kaydırıcı ve sekmeli içerik

Slaytlarda yalnızca ilk görselin ilk ekranda göründüğünü unutmayın. Doğru düzen:

- İlk slayt görselini hemen yükleyin; diğerlerini erteleyin.
- Slaytı otomatik ve hızlı döndürmek yerine statik bir ana görsel kullanmayı düşünün; slaytlar çoğu zaman hem hızı hem dönüşümü düşürür.
- Sekmeli ya da açılır içerikteki görselleri, ilgili sekme açılana kadar erteleyebilirsiniz.
- Arka plan görselleri CSS ile eklendiğinde `loading` özelliği çalışmaz; bu görselleri ayrı bir yöntemle yönetin ya da gerçek `<img>` kullanın.

## Duyarlı görseller ve boyut

Telefon ekranına masaüstü boyutunda görsel indirmek, lazy loading’in kazancını siler. Uygun boyutta görsel sunun, modern biçimleri (uygun olduğunda) kullanın ve görsel sıkıştırmayı unutmayın. Lazy loading yalnızca **ne zaman** yükleneceğini belirler; **ne kadar** yükleneceğini görsel boyutu belirler. İkisini birlikte düzeltin ([görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/)).

## Önyükleme ile birlikte düşünmek

Sayfadaki en önemli görsel LCP öğesiyse, tarayıcının onu mümkün olan en erken zamanda keşfetmesini sağlayın. web.dev, LCP görselini yüksek `fetchpriority` ile önyüklemeyi önerir. Bu, lazy loading’in tam tersi bir yaklaşımdır: kritik görselleri öne çekin, kritik olmayanları erteleyin. Bu ikili ayrım, sayfa hızı çalışmasının temelidir.

## Test ve doğrulama

Uygulamadan sonra:

1. Sayfayı geliştirici araçlarında açıp ağ panelinde hangi görsellerin ne zaman indiğini izleyin.
2. İlk ekrandaki görsellerin hemen indiğini doğrulayın.
3. Aşağı kaydırınca görsellerin zamanında yüklendiğini görün (boş alan kalmamalı).
4. Telefonda ve yavaş ağda deneyin.
5. PageSpeed Insights’ta LCP öğesini ve CLS’yi kontrol edin.

Görsel boyutu ve biçimi için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına da bakın.

## WordPress’te dikkat

Çoğu WordPress sürümü ve görsel eklentisi lazy loading’i otomatik uygular. Siz yalnızca şunları kontrol edin:

- Ana (ilk ekran) görseli ertelenmiyor mu?
- Temanın hero bölümü arka plan görseli olarak mı ekleniyor (bu durumda lazy loading farklı çalışır)?
- Eklentilerin ikinci bir lazy loading ekleyip çakışmadığına bakın.
- Güncelleme sonrası kontrol edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya mağazasının ana sayfasındaki ilk ekran görseli tema tarafından otomatik olarak `lazy` işaretlenmiş; mobilde LCP 4 saniyeyi aşıyor.

- **Teşhis:** LCP öğesinin geç keşfedildiği görülüyor.
- **Çözüm:** İlk ekran görselinden `lazy` kaldırılıyor, yüksek öncelik veriliyor; aşağıdaki ürün görselleri `lazy` kalıyor ve hepsine boyut tanımlanıyor.
- **Doğrulama:** Laboratuvarda LCP ve CLS yeniden ölçülüyor; gerçek kullanıcı verisi haftalar içinde izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **İlk ekrandaki ana görseli ertelemek.**
2. **Görsellere boyut vermemek.**
3. **Önemli metni kaydırmaya bağlı yüklemek.**
4. **Birden çok eklentiyle çakışan lazy loading uygulamak.**
5. **Test etmemek.**
6. **Gömülü içerikler için yer tutucu kullanmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- hangi görsellerin ertelenip hangilerinin hemen yükleneceğini belirler,
- LCP öğesini ve kayma nedenlerini bulur, düzeltme listesi yazarız,
- tema ve eklenti ayarlarını kontrol ederiz,
- iyileşmeyi gerçek kullanıcı verisiyle izleriz.

Hız denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Lazy loading SEO’ya zarar verir mi?

Doğru uygulanırsa zarar vermez; görseller gerçek HTML öğeleriyle bulunmalı ve ilk ekran görselleri ertelenmemelidir.

### Her görsele `loading="lazy"` eklemeli miyim?

Hayır; yalnızca ekran dışındaki görsellere. İlk ekrandaki ana görsel hemen yüklenmeli.

### Boyut tanımı neden gerekli?

Görsel yüklendiğinde sayfanın kaymaması için; aksi hâlde CLS kötüleşir.

### JavaScript kitaplığı gerekir mi?

Çoğu durumda hayır; tarayıcı düzeyinde `loading` özelliği yeterlidir.

### Nasıl test ederim?

Geliştirici araçlarının ağ panelinde görsellerin ne zaman indiğine bakın ve PageSpeed Insights’ta LCP öğesini kontrol edin.

## Kaynaklar

- [web.dev: Tarayıcı düzeyinde resim geç yükleme](https://web.dev/articles/browser-level-image-lazy-loading?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [web.dev: CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)
