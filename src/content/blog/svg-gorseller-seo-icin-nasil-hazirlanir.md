---
title: "SVG Görseller SEO İçin Nasıl Hazırlanır?"
description: "SVG görseller SEO için nasıl hazırlanır? Logo ve ikon kullanımı, img etiketi ile satır içi SVG farkı, alt metin, boyut ve erişilebilirlik rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Vektörel bir logo ve ikon setinin farklı boyutlarda keskin görünmesi"
---

SVG, noktalarla değil çizgi ve şekil tanımlarıyla oluşturulan vektörel bir görsel biçimidir; logo, ikon ve basit çizimler için idealdir, çünkü her boyutta keskin görünür ve dosya boyutu genellikle küçüktür. SEO açısından önemli olan nokta şudur: Google, `<img>` etiketiyle eklenen SVG dosyalarını diğer görseller gibi destekler. Yani SVG’yi `<img src="logo.svg" alt="...">` biçiminde ve anlamlı bir alt metinle eklerseniz arama motoru açısından sorun yaşamazsınız.

Bu yazıda SVG’nin ne zaman doğru seçim olduğunu, hangi yöntemle ekleneceğini, alt metin ve erişilebilirlik kurallarını, logo için dikkat edilecekleri ve sık yapılan hataları anlatıyoruz. Görsel SEO’nun tamamı için [görsel SEO: alt metin, boyut ve WebP rehberi](/blog/gorsel-seo/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## SVG nedir ve ne zaman tercih edilir?

SVG (Scalable Vector Graphics), XML tabanlı bir vektör biçimidir. Fotoğraf gibi pikselli görsellerin aksine büyütüldüğünde bulanıklaşmaz. Şunlar için uygundur:

- **Logolar.** Her ekran yoğunluğunda keskin görünür.
- **İkonlar.** Küçük boyutlu, tek renkli ya da basit çizimler.
- **Basit illüstrasyonlar ve diyagramlar.** Çizgi ve şekille tanımlanabilen görseller.
- **Animasyonlu arayüz öğeleri.** CSS ve JavaScript ile oynatılabilir.

Fotoğraf için SVG uygun değildir; fotoğraflar JPEG, WebP ya da AVIF gibi pikselli biçimlerde daha verimlidir. Biçim seçimi için [sayfa hızı için görsel optimizasyonu: boyut ve biçim](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakabilirsiniz.

## Google SVG’yi destekler mi?

Evet. Google’ın görsel rehberi, Google Arama’nın `img` etiketinin `src` özelliğinde şu dosya biçimlerini desteklediğini sayar: BMP, GIF, JPEG, PNG, WebP, SVG ve AVIF. Rehber ayrıca dosya türüyle eşleşen bir dosya adı uzantınızın olmasını önerir ve görselleri veri URI’leri olarak satır içine almanın da mümkün olduğunu belirtir. Duyarlı görseller için `<picture>` etiketinde SVG, WebP ve yedek PNG’yi birlikte vermek de örnek olarak gösterilir ([Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)).

Bu cümlelerden iki sonuç çıkar: SVG’yi `<img>` ile eklemek Google açısından geçerlidir; ve SVG’nin yanında yedek bir pikselli görsel sunmak güvenli bir yaklaşımdır. Ama aynı rehber, CSS ile eklenen görsellerin dizine eklenmediğini söyler; SVG’yi CSS arka plan olarak kullanırsanız bu kural SVG için de geçerlidir ([CSS arka plan görselleri ile HTML görselleri](/blog/css-arka-plan-gorselleri-ile-html-gorselleri-seo/)).

> **Hizmet almak için iletişime geçin.** Logo, ikon ve görsel yapınızı birlikte SEO ve hız için gözden geçirelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## SVG sayfaya nasıl eklenir?

Üç yaygın yöntem vardır; her birinin SEO ve kullanım farkı bulunur:

| Yöntem | Nasıl? | Artısı | Dikkat |
| --- | --- | --- | --- |
| `<img src="logo.svg" alt="...">` | Dosya olarak | Google görsel olarak bulur; önbelleğe alınır; basit | İçindeki renk CSS ile değişmez |
| Satır içi SVG (`<svg>…</svg>`) | HTML içine kod | CSS ve animasyonla kontrol; ek istek yok | Google için ayrı görsel sayılmaz; erişilebilirlik özelliği eklenmeli |
| CSS arka planı | `background-image: url(logo.svg)` | Dekoratif kullanımda pratik | Google CSS görsellerini dizine eklemez |

Pratik karar: aranabilir ya da anlamlı bir görsel (logo, hizmet çizimi) için `<img>`; arayüz ikonları ve CSS ile renklendirilen süs öğeleri için satır içi SVG ya da CSS; anlam taşıyan görselde CSS’ten kaçının.

## Alt metin ve erişilebilirlik

SVG’yi `<img>` ile eklerken alt metin yazın. Alt metin, görseli göremeyen kullanıcıya ve ekran okuyuculara görseli anlatır; aynı zamanda arama motorlarına görselin konusunu söyler. Logo için alt metin genellikle marka adıdır: `alt="Denizli SEO"`. Dekoratif bir ikon için alt metni boş bırakmak (`alt=""`) doğru uygulamadır; ekran okuyucu bu görseli atlar.

Satır içi SVG’de alt metin yoktur; erişilebilirlik için `<title>` öğesi, `role="img"` ve `aria-label` ya da `aria-labelledby` kullanılır. Dekoratif satır içi SVG’yi `aria-hidden="true"` ile işaretleyin. Erişilebilirliğin genel ilkeleri için [web sitesi erişilebilirliği: temel kurallar](/blog/web-sitesi-erisilebilirligi-temel-kurallar/) yazısına bakabilirsiniz.

## Logo için özel notlar

Logoyu SVG yapmak çoğu zaman iyi bir seçimdir, ama şunlara dikkat edin:

- **Google’a logo bildirmek.** Organization yapılandırılmış verisinde logo adresi belirtilebilir; Google bunun arama sonuçlarında ve bilgi panelinde gösterilecek logoyu etkileyebileceğini belirtir ([Organization yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=tr)). Logo adresinin Google tarafından taranabilir ve dizine eklenebilir olduğundan emin olun.
- **Yedek biçim sunun.** Bazı sosyal medya ve e-posta uygulamaları SVG’yi göstermez; paylaşım görselleri (Open Graph) için JPEG ya da PNG kullanın ([Open Graph etiketleri nasıl eklenir?](/blog/open-graph-etiketleri-nasil-eklenir/)).
- **Favicon için ayrı biçimler.** Arama sonuçlarındaki site simgesi için Google’ın favicon kurallarına bakın ([Google arama sonuçlarında favicon nasıl gösterilir?](/blog/google-arama-sonuclarinda-favicon-nasil-gosterilir/)).
- **Marka dosyasını saklayın.** Orijinal vektör dosyayı yedekleyin; optimize edilmiş sürümü yayında kullanın.

## SVG dosyası nasıl hafifletilir?

SVG dosyaları tasarım programlarından gereksiz meta veri ve yorumla çıkabilir. Hafifletmek için:

1. **SVG optimize edici bir araç kullanın.** Gereksiz öğeleri, yorumları ve gizli katmanları temizler; dosya boyutu azalır.
2. **Çok karmaşık yolları sadeleştirin.** Binlerce nokta içeren çizimler pikselli biçimden bile ağır olabilir.
3. **Sıkıştırmayı etkinleştirin.** SVG metin tabanlıdır; gzip ya da Brotli ile sıkıştırılması iyi sonuç verir ([kod küçültme ile sıkıştırma farkı](/blog/kod-kucultme-ile-sikistirma-farki-minify-gzip-brotli/)).
4. **Boyut özniteliklerini verin.** `width` ve `height` değerleri, sayfa düzeninin kaymasını (CLS) önler ([sayfa yüklenirken içerik neden kayar? CLS düzeltme](/blog/sayfa-yuklenirken-icerik-neden-kayar-cls-duzeltme/)).

## Güvenlik notu

SVG içinde betik çalıştırılabilir; bu yüzden kullanıcıların yüklediği SVG dosyalarını sitede olduğu gibi yayınlamak güvenlik riski taşır. Kendi tasarım dosyalarınızı kullanın; kullanıcı yüklemelerinde SVG’yi temizleyen ya da engelleyen bir yapı kurun. İçerik yönetim sistemlerinde SVG yüklemesi varsayılan olarak kapalı olabilir; açarken güvenlik eklentisi ya da temizleme aracı kullanın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili markası logosunu PNG olarak kullanıyor; büyük ekranlarda bulanık görünüyor ve dosya ağır. Marka logoyu SVG’ye çeviriyor, optimize ediyor ve sayfaya `<img>` ile ekliyor; alt metin olarak marka adını yazıyor. Menüdeki küçük ikonlar ise satır içi SVG olarak kullanılıyor ve `aria-hidden="true"` ile işaretleniyor.

Paylaşım görselleri için ayrı bir JPEG hazırlanıyor; Organization yapılandırılmış verisindeki logo adresi güncelleniyor. Sayfa hızı ölçülüyor ve logonun birkaç kat küçüldüğü görülüyor. Bu örnek sonuç vaadi değildir; kullanım ayrımını gösterir.

## Sık yapılan hatalar

1. **SVG’yi fotoğraf için kullanmak.** Fotoğraf için pikselli biçimler uygundur.
2. **Alt metni boş bırakmak (anlamlı logoda).** Logoya marka adını yazın.
3. **Anlamlı SVG’yi CSS arka planı yapmak.** Google dizine eklemez.
4. **SVG’yi optimize etmemek.** Tasarım programı çıktısı gereksiz yük taşıyabilir.
5. **Paylaşım görseli olarak yalnızca SVG vermek.** Sosyal uygulamalar göstermeyebilir.
6. **Kullanıcı yüklediği SVG’yi denetlemeden yayınlamak.** Güvenlik riski var.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki logo, ikon ve illüstrasyon yapısını inceler, doğru ekleme yöntemini belirleriz,
- alt metin, erişilebilirlik ve boyut özniteliklerini düzeltme listesine çeviririz,
- logo yapılandırılmış verisini ve paylaşım görsellerini kontrol ederiz,
- sonuç vaat etmeden, sayfa hızını ve görsel görünürlüğünü izleriz.

Görsel yapınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Logo ve ikonlarınızı hızlı ve SEO uyumlu hâle getirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Google SVG görselleri dizine ekler mi?

Google, `img` etiketiyle eklenen görselleri desteklenen biçimlerde (SVG dahil) bulabilir. CSS ile eklenenleri ise dizine eklemez.

### Logo için SVG mi PNG mi?

Site içinde SVG genellikle daha keskin ve hafiftir. Sosyal paylaşım ve e-posta için PNG ya da JPEG yedeği de hazırlayın.

### SVG’ye alt metin nasıl eklenir?

`<img>` ile eklenmişse `alt` özniteliği; satır içi SVG ise `<title>` ve `aria-label` gibi erişilebilirlik öznitelikleri kullanılır.

### SVG sayfa hızını etkiler mi?

Küçük ve optimize edilmiş SVG hızı iyileştirir; ağır ve karmaşık SVG yavaşlatabilir. Optimize edip sıkıştırın.

### Kullanıcı SVG yükleyebilir mi?

Güvenlik nedeniyle dikkatli olun; yüklemeleri temizleyen bir yapı olmadan kullanıcı SVG’sini yayınlamayın.

## Kaynaklar

- [Google Arama Merkezi: Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [Google Arama Merkezi: Organization (Kuruluş) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=tr)
