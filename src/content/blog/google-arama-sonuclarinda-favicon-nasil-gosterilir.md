---
title: "Google Arama Sonuçlarında Favicon Nasıl Gösterilir?"
description: "Google arama sonuçlarında favicon nasıl gösterilir? link rel=icon etiketi, kare ve 48 piksel önerisi, desteklenen biçimler ve görünmeme nedenleri."
date: 2026-11-15
service: teknik-seo
imageAlt: "Arama sonucunda site adının yanında görünen favicon ve link etiketi"
---

Favicon’unuzun Google arama sonuçlarında görünmesi için ana sayfanızın `<head>` bölümüne `<link rel="icon" href="...">` etiketi eklemeniz, simgenin kare olması ve hem ana sayfanın hem simge dosyasının Google tarafından taranabilmesi gerekir. Google en az 8×8 piksel şartı koyar, ancak 48×48 pikselden büyük bir simge önerir. Bütün kurallara uysanız bile görünmesi garanti değildir ve değişikliğin yansıması günler ya da haftalar sürebilir.

Favicon, arama sonucunda kullanıcının sizi tanıdığı ilk görsel işarettir. Teknik kontrol için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Favicon arama sonucunda nerede görünür?

Google’a göre sitenizde site simgesi (favicon) varsa bu simge, siteniz için yapılan Google Arama sonuçlarına dahil edilebilir. Belge organik sonuçlara yöneliktir; reklamlardaki logolar ayrı bir konudur ([site simgesi tanımlama](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=tr)).

Simge, sonucun en üstünde site adının yanında durur. Kullanıcı sonuç listesini hızla tararken metinden önce simgeleri görür; tanıdık bir simge, daha önce sitenize gelmiş birinin sizi yeniden seçmesini kolaylaştırır. Simge yoksa ya da Google uygun bulmazsa varsayılan genel bir simge gösterilir.

## Adım adım uygulama

Google’ın tarif ettiği yol iki adımdır:

1. Yönergelere uyan bir site simgesi oluşturun.
2. Ana sayfanızın başlığına şu söz dizimiyle bir `<link>` etiketi ekleyin:

```html
<link rel="icon" href="/favicon.ico">
```

Google, `rel` özelliği için şu değerleri destekler:

- `icon`: HTML standardında tanımlanan, sitenizi temsil eden simge. Eski biçim olan `shortcut icon` da desteklenir.
- `apple-touch-icon`: iOS uyumlu simge.
- `apple-touch-icon-precomposed`: iOS’in önceki sürümleri için alternatif.

`href` değeri göreli (`/favicon.ico`) ya da mutlak (`https://example.com/favicon.ico`) olabilir. Simgenin sitenizde barındırılması da gerekmez; Google’a göre bir içerik yayınlama ağında (CDN) durabilir.

## Yönergeler: simge nasıl olmalı?

Google’ın kuralları şunlardır:

- **Kare olmalı.** En boy oranı 1:1.
- **Boyut:** En az 8×8 piksel; ancak farklı platformlarda iyi görünmesi için 48×48 pikselden büyük bir simge önerilir.
- **Biçim:** Desteklenen dosya biçimleri BMP, GIF, ICO, PNG, JPEG, PPM ve TIFF’tir.
- **Markayı temsil etmeli.** Sonuçlara göz atan kullanıcıların sitenizi hızla tanıyabilmesi için simge görsel olarak markanızı temsil etmelidir.
- **Adres sabit olmalı.** Simgenin URL’sini sık sık değiştirmeyin.
- **Uygunsuz içerik olmamalı.** Google, pornografi ya da nefret sembolleri gibi uygunsuz gördüğü simgeleri göstermez; bunların yerine varsayılan bir simge koyar.

Liste, SVG biçimini saymıyor. Tarayıcı sekmesi için SVG simge kullanıyorsanız, Google için listede yer alan bir biçimde (ör. PNG ya da ICO) ayrı bir simge de tanımlamak güvenli yoldur.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Site başına tek simge

Google Arama site başına yalnızca bir site simgesini destekler ve “site”yi ana makine adıyla tanımlar:

- `https://example.com` desteklenir (alan adı düzeyinde ana sayfa).
- `https://news.example.com` desteklenir (alt alan adı düzeyinde ana sayfa); ana alan adından farklı bir simgesi olabilir.
- `https://example.com/news` desteklenmez (alt dizin). Alt dizindeki bölüm için ayrı simge tanımlayamazsınız.

Çok dilli siteleri alt klasörle (`/en/`, `/de/`) kuranlar için sonuç şudur: tüm dil sürümleri aynı simgeyi kullanır ([alt klasör mü, alt alan adı mı?](/blog/cok-dilli-seo-alt-klasor-mu-alt-alan-adi-mi/)).

## Taranabilirlik: en sık atlanan koşul

Google üç şeyin mümkün olmasını ister:

1. Googlebot ana sayfayı tarayabilmeli.
2. Ana sayfadan simgenin belirtildiği sayfaya giden yönlendirmeleri izleyebilmeli.
3. Googlebot Görüntü, simge dosyasını tarayabilmeli.

Bu adreslerin taranması robots.txt ya da başka bir yöntemle engellenmemelidir. Uygulamada sorun çoğunlukla burada çıkar:

- robots.txt içinde `/wp-content/`, `/assets/` ya da `/images/` klasörünün tümü kapatılmıştır ve simge o klasördedir ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).
- Güvenlik duvarı ya da CDN, görsel botunu engelliyordur ([Googlebot 403 alıyorsa](/blog/googlebot-403-hatasi-aliyorsa-neler-kontrol-edilmeli/)).
- Simge dosyası 404 dönüyordur; etiket duruyor ama dosya taşınmıştır.
- Ana sayfa başka bir adrese yönleniyor, `<link>` etiketi ise yönlendirilen eski sayfadadır.

## Favicon neden görünmüyor? Kontrol listesi

1. **Etiket ana sayfada mı?** Google ana sayfanın başlığındaki etikete bakar; yalnızca iç sayfalarda tanımlı simge yeterli olmayabilir.
2. **Dosya açılıyor mu?** `href` adresini tarayıcıda doğrudan açın; 200 dönmeli.
3. **Kare mi?** Dikdörtgen logolar kural dışıdır; logonuzun kare bir işaret sürümünü hazırlayın.
4. **Çok mu küçük ya da okunaksız?** 16 pikselde seçilemeyen ince yazılı logo yerine tek harf ya da sade bir işaret kullanın.
5. **Engel var mı?** robots.txt ve güvenlik kurallarını kontrol edin.
6. **Birden çok çelişen etiket var mı?** Tema ile eklenti farklı simgeler tanımlıyor olabilir.
7. **Yeni mi değiştirdiniz?** Google’a zaman tanıyın.

Unutmayın: Google, tüm yönergeler karşılansa bile simgenin görünmesinin garanti edilmediğini açıkça yazar.

## Değişiklik ne zaman yansır?

Google’ın ana sayfadaki yeni bilgiyi yeniden tarayıp işlemesi gerekir. Belgeye göre tarama, sistemlerin içeriğin ne sıklıkta yenilenmesi gerektiğini nasıl belirlediğine bağlı olarak birkaç gün ila birkaç hafta sürebilir. URL Denetleme aracıyla ana sayfanın dizine eklenmesini isteyebilirsiniz ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)).

Simgeyi değiştirdiğinizde dosya adını değiştirmek yerine aynı adreste yeni dosyayı yayınlamak, “adres sabit olmalı” kuralıyla da uyumludur; ancak sunucu ve tarayıcı önbelleği nedeniyle eski simgeyi bir süre daha görebilirsiniz.

## İyi bir favicon tasarımı

Teknik kural kadar okunabilirlik de önemlidir:

- **Sade tutun.** Küçük boyutta ayrıntı kaybolur; tek renkli zemin üzerinde tek bir işaret yeterlidir.
- **Kontrast.** Açık ve koyu arka planda (Google’ın açık ve koyu temasında) görünür olmalı; saydam zeminli koyu bir simge koyu temada kaybolabilir.
- **Logo ile bağ.** Simge logonuzun bir parçası olsun; site adıyla birlikte markayı tamamlasın ([site adı yanlış görünüyorsa](/blog/googleda-site-adi-yanlis-gorunuyorsa-ne-yapilmali/)).
- **Birden çok boyut.** Tarayıcı sekmesi, yer imi ve telefon ana ekranı için farklı boyutlar tanımlayabilirsiniz; Google için 48 pikselden büyük kare bir sürüm bulunsun.

Renk ve marka tutarlılığı için [renk ve yazı tipi seçimi](/blog/renk-ve-yazi-tipi-secimi-okunurluk-ve-marka/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir sigorta acentesinin sitesi aramada genel dünya simgesiyle görünüyor.

- **Teşhis:** Simge tanımlı, ama dosya `/assets/` klasöründe ve robots.txt bu klasörü kapatıyor; ayrıca simge 120×40 piksellik yatay logo.
- **Düzeltme:** Logonun kare işareti 96×96 PNG olarak hazırlanıyor, kök dizine konuyor, ana sayfaya `rel="icon"` ile bağlanıyor; robots.txt kuralı daraltılıyor.
- **Kontrol:** Dosyanın 200 döndüğü doğrulanıyor, ana sayfa yeniden taramaya gönderiliyor; birkaç hafta sonra arama sonucunda kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Dikdörtgen logoyu favicon olarak kullanmak.**
2. **Simge klasörünü robots.txt ile kapatmak.**
3. **Etiketi ana sayfaya koymamak.**
4. **Simge adresini sık sık değiştirmek.**
5. **Alt dizin için ayrı simge beklemek.**
6. **Değişikliği ertesi gün görmeyi beklemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- favicon etiketini, dosya biçimini ve boyutunu kontrol ederiz,
- robots.txt ve güvenlik kurallarındaki engelleri kaldırırız,
- site adı ve favicon’u birlikte, marka tutarlılığıyla düzenleriz,
- değişiklik sonrası arama sonucundaki görünümü izleriz.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Favicon kaç piksel olmalı?

Google en az 8×8 piksel ister; farklı platformlarda iyi görünmesi için 48×48 pikselden büyük, kare bir simge önerir.

### Hangi dosya biçimleri desteklenir?

Google’ın saydığı biçimler BMP, GIF, ICO, PNG, JPEG, PPM ve TIFF’tir.

### Favicon’um neden Google’da görünmüyor?

Etiket ana sayfada olmayabilir, dosya ya da ana sayfa taranamıyor olabilir, simge kare olmayabilir ya da Google henüz yeniden taramamıştır. Görünmesi garanti de değildir.

### Blog bölümüm için ayrı favicon kullanabilir miyim?

Alt dizin için hayır; Google site başına tek simge destekler. Alt alan adının ayrı simgesi olabilir.

### Değişiklik ne kadar sürede görünür?

Google’a göre birkaç gün ila birkaç hafta sürebilir.

## Kaynaklar

- [Google Arama Merkezi: Arama sonuçlarında gösterilecek site simgesi tanımlama](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=tr)
