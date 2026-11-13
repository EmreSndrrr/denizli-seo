---
title: "Görsel SEO: Alt Metin, Boyut ve WebP Rehberi"
description: "Görsel SEO nasıl yapılır? Alt metin, dosya adı, boyut, WebP ve AVIF biçimleri, duyarlı görseller ve CSS görsellerinin tuzağı; Denizli örneğiyle on kontrol."
date: 2026-11-06
service: teknik-seo
imageAlt: "Bir fotoğraf, dosya adı etiketi ve alt metin kutusu"
---

Görsel SEO, fotoğraflarınızın hem Google tarafından anlaşılmasını hem de siteyi yavaşlatmamasını sağlamaktır. Görseli sayfada gerçek bir `<img>` öğesiyle ve açıklayıcı alt metinle verin, dosyaya anlamlı bir ad verin, görseli alakalı metnin yakınına koyun, boyutunu küçültün ve WebP gibi modern bir biçim kullanın. CSS ile arka plan olarak verilen görselleri Google dizine eklemez.

Mağazalarda ürün fotoğrafı daha da kritiktir; ayrıntı için [e-ticaret SEO](/blog/e-ticaret-seo/) yazımıza bakın. Görseller bir sitenin en ağır parçalarıdır ve çoğu zaman en az özen gösterilen parçalarıdır. Fotoğrafı telefondan yükleyip bırakmak, hem sayfayı yavaşlatır hem de Google’a görselin ne olduğunu söylemez. Bu yazıda görsel SEO’nun on kontrolünü ve Denizli’den bir örneği veriyoruz. Hız yönünü [telefonda yavaş site](/blog/telefonda-hizli-acilan-site/) yazımızda da bulabilirsiniz.

## Görsel SEO neden önemli?

İki nedenle: **görünürlük** ve **hız**. Görünürlük, görsellerin Google Görseller’de ve sayfa içeriğinin anlaşılmasında rol oynamasıdır. Hız ise ağır görsellerin sayfayı yavaşlatmasıdır. Google’ın görsel rehberi, yüksek kaliteli fotoğrafların kullanıcılara bulanık görsellere göre daha çekici göründüğünü ve sonuç küçük resminde daha cazip olduğunu belirtir; aynı rehber, görsellerin genellikle toplam sayfa boyutuna en çok katkıda bulunan öğeler olduğunu ve sayfaları yavaşlatabileceğini de söyler ([resim SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)).

Yani hedef iki yönlüdür: net ve kaliteli görsel, ama hafif.

## 1. Görseli gerçek `<img>` öğesiyle verin

Google, görselleri HTML `<img>` öğesindeki `src` özelliğinde bulabilir. CSS ile arka plan olarak verilen görselleri ise dizine eklemez ([resim SEO](https://developers.google.com/search/docs/appearance/google-images?hl=tr)). Bu, tasarım yaparken sık düşülen bir tuzaktır: şık bir kahraman (hero) görseli CSS arka planıyla verilirse Google onu görseller arasında bulamaz.

Önemli bir ürün ya da hizmet fotoğrafınız varsa, onu `<img>` ile verin. Dekoratif süs görselleri için arka plan kullanmak sorun değildir.

## 2. Dosyaya açıklayıcı bir ad verin

Google, görselin konusuyla ilgili ufak ipuçlarını dosya adından da alabilir. Rehber, kısa ama açıklayıcı dosya adlarını önerir; `IMG00023.JPG` yerine konuyu anlatan bir ad tercih edilir, `image1.jpg` ya da `1.jpg` gibi genel adlardan kaçınılır.

| Zayıf | İyi |
| --- | --- |
| `IMG_2043.jpg` | `pamukkale-pansiyon-oda.jpg` |
| `foto1.png` | `ahsap-mutfak-dolabi-honaz.jpg` |
| `WhatsApp-Image-2026.jpeg` | `klima-montaji-merkezefendi.jpg` |

Dosya adında kelimeleri kısa çizgiyle ayırın ve Türkçe karakterlerin (ç, ğ, ı, ö, ş, ü) sorun yaratabileceği sistemlerde ASCII karşılıklarını tercih edin.

## 3. Alt metni yazın

Alt metin, görselin yerine geçen kısa bir açıklamadır. Görseli göremeyen bir kişiye ve arama motoruna görselin ne olduğunu anlatır. İyi bir alt metin şu özellikleri taşır:

- **Görseli tarif eder.** “Honaz’da ölçüye göre yapılmış ahşap mutfak dolabı” gibi.
- **Kısa ve doğal olur.** Cümle gibi okunur; anahtar kelime listesi gibi okunmaz.
- **Her görselde farklıdır.** Aynı alt metni tüm görsellere yazmayın.
- **Süs görselinde boş bırakılabilir.** Bilgi taşımayan çizgi ve süsler için alt metin gerekmez.

Anahtar kelimeleri alt metne doldurmak (“mutfak dolabı, ucuz mutfak dolabı, Denizli mutfak dolabı…”) Google’ın anahtar kelime doldurma örneklerine girer; yapmayın.

## 4. Görseli alakalı metnin yakınına koyun

Google, görselin konusuyla ilgili bilgiyi altyazılar ve görsel başlıkları dahil olmak üzere sayfanın içeriğinden çıkarır. Bu yüzden görseli, onu anlatan metnin yakınına yerleştirin. Pansiyon odasının fotoğrafı, oda anlatımının yanında olmalıdır; sayfanın en altındaki rastgele bir galeride değil. Mümkün olduğunda görseli konusuyla ilgili sayfaya koyun: Honaz’daki bir atölyenin fotoğrafı iletişim sayfasında değil, atölyeyi anlatan sayfada anlamlıdır.

## 5. Boyutu küçültün

Telefon kamerasından çıkan bir fotoğraf onlarca megabayt olabilir; bir sayfada görünen boyutu ise çok daha küçüktür. Yüklemeden önce görseli sitede gösterileceği en büyük boyuta indirin ve sıkıştırın. Bu, çoğu sitede hıza en çok katkı yapan düzeltmelerden biridir. Hızı ölçmek için PageSpeed Insights gibi araçlardan yararlanabilirsiniz; Google görsel rehberinde de site hızını bu araçla analiz etmeyi önerir.

web.dev’e göre en büyük içeriğin yüklenmesi (LCP) 2,5 saniye içinde olmalıdır ([Web Vitals](https://web.dev/articles/vitals?hl=tr)). Çoğu sayfada en büyük içerik bir görseldir; yani görsel optimizasyonu doğrudan bu ölçümü etkiler.

## 6. Doğru biçimi seçin: WebP ve AVIF

Google, şu görsel biçimlerini destekler: BMP, GIF, JPEG, PNG, WebP, SVG ve AVIF. Dosya türüyle eşleşen bir uzantı kullanmak da iyi bir fikirdir.

- **JPEG:** Fotoğraflar için yaygın, evrensel
- **WebP:** Fotoğraf ve grafikler için genellikle daha küçük dosya
- **AVIF:** Daha da küçük dosya; destek önce test edilmeli
- **PNG:** Şeffaflık gereken grafikler
- **SVG:** Logo ve basit çizimler

Küçük işletme siteleri için pratik öneri: fotoğraflar için WebP (gerekirse JPEG yedeğiyle) ve logo için SVG.

## 7. Duyarlı görsel kullanın

Telefon ve masaüstü aynı görselin farklı boyutlarına ihtiyaç duyar. HTML’deki `srcset` ve `<picture>` öğeleri, tarayıcının cihaza uygun boyutu seçmesini sağlar; Google’ın rehberi bu teknikleri duyarlı görsel yaklaşımının parçası olarak anlatır. Küçük ekrana büyük görsel göndermek, boşa veri ve yavaşlık demektir. Çoğu WordPress teması ve site oluşturucu bunu kendisi yapar (ayarlar için [WordPress SEO](/blog/wordpress-seo/) yazımıza bakın); siz yalnızca doğru çalıştığından emin olun.

## 8. Görsel site haritasını düşünün

Google’ın görselleri başka yollarla bulmasının zor olduğu sitelerde görsel site haritası kullanılabilir. Küçük işletme siteleri için çoğu zaman gerekmez. Önce görsellerin `<img>` ile verildiğinden ve sayfada gerçekten göründüğünden emin olun.

## 9. Gerçek fotoğraf kullanın

Stok fotoğraf, hizmetinizi ya da ürününüzü göstermez. Google’ın içerik rehberi birinci elden uzmanlığın gösterilmesini ister; bir yeri gerçekten ziyaret etmiş ya da ürünü gerçekten kullanmış olmak gibi ([faydalı ve güvenilir içerik](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)). Kendi atölyenizin, ekibinizin, işlerinizin fotoğrafı, stok fotoğrafın veremeyeceği güveni verir.

## 10. Görselin ne söylediğini kontrol edin

Her görsele şu soruyu sorun: bu fotoğraf sayfanın konusunu destekliyor mu? İlgisiz bir fotoğraf ne ziyaretçiye ne Google’a yardım eder; yalnızca sayfayı ağırlaştırır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de 12 odalı bir pansiyon, siteyi yeni yaptırmış. Oda fotoğrafları telefondan çekilmiş, adları `IMG_*.jpg` ve toplam sayfa çok yavaş.

- **Dosya adları anlamsız:** `pamukkale-pansiyon-deluxe-oda.jpg` gibi yeniden adlandır
- **Alt metin yok:** Her odaya kısa ve doğru tarif: “Balkonlu iki kişilik oda, sabah ışığı”
- **Büyük dosyalar:** Sitede gösterilen boyuta küçült, WebP’ye çevir
- **Kahraman görseli CSS arka planı:** Kritik görselleri `<img>` ile ver
- **Galeri sayfanın en altında:** Oda fotoğraflarını oda anlatımının yanına taşı

Pansiyonlar için daha geniş bir yol haritası [Pamukkale’de otel ve pansiyon için SEO](/blog/pamukkale-otel-pansiyon-seo/) yazımızda.

## Görsel SEO kontrol listesi

1. Önemli görseller `<img>` ile mi veriliyor?
2. Dosya adları açıklayıcı mı?
3. Her anlamlı görselin kısa ve doğru alt metni var mı?
4. Görseller ilgili metnin yakınında mı?
5. Boyutlar sitede gösterilen boyuta uygun mu?
6. Fotoğraflar WebP ya da JPEG mi? Gereksiz PNG var mı?
7. `srcset` ya da `<picture>` kullanılıyor mu (temanız bunu otomatik yapıyor olabilir)?
8. Fotoğraflar gerçek mi?
9. Bilgi taşımayan görsellerin alt metni boş mu?
10. Sayfa telefonda hızlı açılıyor mu?

## Sektöre göre alt metin örnekleri

Alt metnin sihirli bir formülü yok, ama iyi örnekler fikir verir. Hepsi hayalî işletmeler içindir:

- **Pansiyon:** zayıf alt metin: “oda”; i̇yi alt metin: “Balkonlu iki kişilik oda, Pamukkale manzaralı”
- **Mobilya atölyesi:** zayıf alt metin: “dolap, mutfak dolabı, ucuz”; i̇yi alt metin: “Honaz’da yapılmış ahşap mutfak dolabı”
- **Klima servisi:** zayıf alt metin: “servis”; i̇yi alt metin: “Teknisyen split klima bakımı yapıyor”
- **Kuyumcu:** zayıf alt metin: “yüzük yüzük yüzük”; i̇yi alt metin: “Altın alyans çifti, mat yüzey”
- **Dokuma atölyesi:** zayıf alt metin: “peştemal”; i̇yi alt metin: “Buldan dokuması mavi çizgili peştemal”

Ortak nokta: görseli görmeyen birine tarif eder gibi yazın; reklam cümlesi ya da kelime listesi yazmayın.

## Yüzlerce görseli olan siteyi nasıl düzeltirsiniz?

Hepsini aynı anda düzeltmeye çalışmayın. Öncelik sırası:

1. **En çok ziyaret edilen 10 sayfa.** Search Console’daki Performans raporundan belirleyin.
2. **Sayfadaki en büyük görsel.** Genellikle LCP’yi belirleyen görsel odur; önce onu küçültün.
3. **Hizmet ve ürün fotoğrafları.** Dosya adını ve alt metni düzeltin.
4. **Kalan galeri görselleri.** Toplu sıkıştırma araçlarıyla küçültün.

Google, sitenizde binlerce görsel varsa dosya adlandırmayı otomatikleştirmeyi değerlendirmenizi söyler. Yani toplu düzeltme tamamen meşrudur; yeter ki adlar görseli doğru tarif etsin.

## Logo, ikon ve süs görselleri

Logonuzu ve ikonlarınızı SVG olarak kullanmak, hem net görünür hem de küçük dosya demektir. Logoda alt metne işletme adını yazın. Yalnızca süs amaçlı çizgi, dalga ve arka plan desenleri için alt metin gerekmez; bunları CSS ile vermek uygundur.

## Sık sorulan sorular

### Alt metne anahtar kelime yazmalı mıyım?

Görseli doğru anlatıyorsa konuyla ilgili kelime doğal biçimde geçer. Ancak alt metni anahtar kelime listesine çevirmeyin; bu hem okuyana hem arama motoruna zarar verir.

### WebP her tarayıcıda çalışır mı?

Modern tarayıcıların büyük kısmı WebP’yi destekler. Eski cihazlar için JPEG yedeği sunabilirsiniz; çoğu site oluşturucu ve içerik yönetim sistemi bunu sizin yerinize yapar.

### Görsel adını sonradan değiştirebilir miyim?

Evet, ama eski adrese verilen bağlantılar kırılabilir. Değiştirirseniz sayfadaki bağlantıyı da güncelleyin.

### Görseller sıralamayı yükseltir mi?

Doğrudan sıra garantisi yok. Görsel SEO, görsel aramada görünürlüğü ve sayfa hızını iyileştirir; ikisi de dolaylı olarak işinize yarar.

### Görsellere telif ve kaynak notu yazmalı mıyım?

Başkasına ait fotoğraf kullanıyorsanız lisansını doğrulayın ve gerekiyorsa kaynağı belirtin. Kendi fotoğraflarınızı kullanmak hem hukuki risk taşımaz hem de siteyi benzersiz kılar.

### Galeri sayfaları SEO için işe yarar mı?

Her fotoğrafın yanında açıklayıcı metin varsa evet. Yalnızca yüzlerce görselin alt alta dizildiği ve hiç metin içermeyen bir sayfa, Google’a pek bir şey anlatmaz; en iyi fotoğrafları ilgili hizmet sayfalarına dağıtın.

## Kaynaklar

- [Google Search Central: resim SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)
- [Google Search Central: faydalı ve güvenilir içerik oluşturma](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)
- [Google Search Central: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)

Sitenizin görsellerini ve hızını birlikte gözden geçirmek isterseniz [teknik SEO sayfamıza](/teknik-seo/) bakabilir ya da [bize yazabilirsiniz](/iletisim/).
