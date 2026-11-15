---
title: "Open Graph Etiketleri Nasıl Eklenir?"
description: "Open Graph etiketleri nasıl eklenir? og:title, og:description, og:image, görsel ölçüleri, WordPress ve statik site kurulumu, önizleme testi ve Google ile ilişkisi."
date: 2026-11-15
service: web-tasarim
imageAlt: "Sosyal medyada paylaşılan bağlantının başlık, açıklama ve görselle önizlemesi"
---

Open Graph (OG) etiketleri, bir sayfa sosyal medyada ya da mesajlaşma uygulamalarında paylaşıldığında görünen önizlemeyi (başlık, açıklama, görsel) belirleyen `<meta>` etiketleridir. Dört temel etiket yeterlidir: `og:title`, `og:description`, `og:image` ve `og:url`; ayrıca `og:type` ve `og:site_name` eklenebilir. OG doğrudan bir sıralama etkeni değildir; ama Google başlık bağlantısı, site adı ve Keşfet görseli için bu etiketlere de bakabilir.

Bağlantı paylaşıldığında önizleme boş ya da yanlışsa tıklanma düşer. Kurulum için [web tasarım hizmetimize](/web-tasarim/) bakabilirsiniz.

## Open Graph nedir?

Open Graph, bir web sayfasının paylaşıldığında nasıl temsil edileceğini tanımlayan bir meta etiket protokolüdür; ilk kez bir sosyal ağ tarafından yaygınlaştırılmış, bugün birçok platform ve uygulama bunu (ya da benzer biçimlerini) okur. Etiketler `property` özelliğiyle yazılır:

```html
<meta property="og:title" content="Halı Yıkama Fiyatları | Örnek Halı">
<meta property="og:description" content="Denizli’de evden alım ve teslimle halı yıkama: fiyatı etkileyen etkenler ve paketler.">
<meta property="og:image" content="https://ornekhali.com/gorseller/hali-yikama-og.jpg">
<meta property="og:url" content="https://ornekhali.com/hali-yikama-fiyatlari/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Örnek Halı">
```

Hangi platformun hangi etiketi nasıl kullandığı zamanla değişebilir; bu yüzden önizlemeyi her zaman ilgili platformun doğrulama aracıyla test edin.

## Temel etiketler

| Etiket | Ne işe yarar | İpucu |
|---|---|---|
| `og:title` | Önizleme başlığı | Sayfa başlığıyla uyumlu, kısa; marka adı sonda |
| `og:description` | Önizleme açıklaması | Bir–iki cümle; sayfayı dürüstçe özetleyin |
| `og:image` | Önizleme görseli | Mutlak adres, https, sayfayı temsil eden özgün görsel |
| `og:url` | Sayfanın kalıcı adresi | Canonical ile aynı, parametresiz |
| `og:type` | İçerik türü | Ana sayfa `website`, yazılar `article` |
| `og:site_name` | Sitenin adı | Her sayfada aynı, marka adınız |

Ek olarak bazı platformlar kendi etiketlerini de okur (örneğin Twitter/X için kart etiketleri). Tek bir platformun etiketlerini bilmenize gerek yok; OG etiketlerini doğru kurmak çoğu yerde yeterlidir, kalanı için platformun belgesine bakın.

## Google ile ilişkisi

Google, OG’yi bir sıralama etkeni olarak tanımlamaz; ama belgelerinde şu noktalarda geçer:

- **Başlık bağlantısı:** Google, arama sonucundaki başlığı belirlerken `<title>`’ın yanında sayfadaki başlık öğelerini ve `og:title` meta etiketini de kaynak olarak kullanabilir ([başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)). `og:title` ile `<title>` birbirine aykırıysa Google’a çelişen adaylar sunmuş olursunuz ([Google başlığımı neden değiştiriyor?](/blog/google-sayfa-basligimi-neden-degistiriyor/)).
- **Site adı:** Google’ın site adı sistemi `og:site_name`, `<title>`, başlık öğeleri ve ana sayfadaki diğer metinleri dikkate alır; ancak tercih belirtmek için en önemli olan `WebSite` yapılandırılmış verisidir ([site adı](/blog/googleda-site-adi-yanlis-gorunuyorsa-ne-yapilmali/)).
- **Keşfet görseli:** Google, sayfayı temsil eden büyük görseli belirtmek için `schema.org` işaretlemesi ya da `og:image` kullanılabileceğini ve bunun Keşfet’te küçük resim olarak seçilecek görseli etkileyebileceğini söyler; logo gibi genel görsellerden ve çok metin içeren görsellerden kaçınmanızı önerir ([Keşfet’te görünmek](/blog/google-discoverda-gorunmek-icin-site-nasil-hazirlanir/)).

Sonuç: OG’yi “sosyal medya meselesi” sanıp ihmal etmeyin; tutarlı kurulum arama görünümünü de destekler.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve sade bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Görsel kuralları

`og:image` önizlemenin en belirleyici parçasıdır. Pratik ilkeler:

- **Boyut:** Geniş formatlı, yatay görsel; yaygın öneri 1200×630 piksel (yaklaşık 1,91:1). Keşfet için Google en az 1.200 piksel genişlik ve 16:9 oranı önerir; iki ihtiyacı birlikte karşılamak için 1200×675 gibi 16:9 görsel de kullanılabilir. Platformlara göre kırpma değişebilir; önemli unsurları ortada tutun.
- **Dosya:** JPG ya da PNG; makul boyutta (birkaç yüz KB); çok büyük dosyalar önizlemeyi geciktirir.
- **Adres:** Mutlak (`https://…`), herkese açık ve robots.txt ile engellenmemiş.
- **İçerik:** Sayfayı temsil eden özgün görsel; logo tek başına iyi bir seçenek değildir. Büyük, okunaklı kısa başlık bulunabilir ama görsel yazıyla doldurulmasın.
- **Her sayfaya özgü olsun.** Ana sayfa için markalı bir görsel, yazılar ve hizmet sayfaları için kendi görselleri. Hepsinde aynı genel görsel, paylaşımları birbirine benzetir.
- **Alt metin:** `og:image:alt` ile görseli tarif edebilirsiniz.

Görsel biçimi ve boyutu ile hız ilişkisi için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakın.

## Nasıl eklenir?

### WordPress

Çoğu SEO eklentisi OG etiketlerini otomatik üretir. Yapacaklarınız:

1. Eklentide sosyal medya ayarında varsayılan paylaşım görselini ve site adını girin.
2. Her yazı ve sayfada paylaşım başlığı, açıklaması ve görselini gerekiyorsa ayrıca belirleyin.
3. Aynı etiketlerin hem eklenti hem tema tarafından iki kez basılmadığını kontrol edin ([WordPress SEO eklentisi seçimi](/blog/wordpress-seo-eklentisi-secerken-nelere-bakilmali/)).

### Statik ve özel siteler

Şablonda `<head>` bölümüne, sayfa verisinden beslenen etiketleri yerleştirin. Örnek mantık (Astro, Next.js, benzeri çatılarda genel yaklaşım): bir “Head” bileşeni başlık, açıklama, görsel ve adres bilgisini sayfa verisinden alıp etiketlere yazsın; adresi canonical ile aynı üretin. Bu sitenin kendi altyapısında da sayfa başına OG görseli üretilir; yaklaşımın ayrıntısı çatıya göre değişir.

### Hazır site kurucuları

Çoğunda “sosyal paylaşım” ya da “SEO ayarları” bölümü vardır; başlık, açıklama ve görsel alanını doldurun. Kurucunun kendi sınırlarını (her sayfa için ayrı görsel mümkün mü?) kontrol edin.

## Önizleme nasıl test edilir?

1. **Kaynakta kontrol:** Sayfa kaynağında `og:` etiketlerini aratın; her biri bir kez, doğru değerle bulunmalı.
2. **Platform doğrulama araçları:** Sosyal ağların sunduğu bağlantı önizleme/hata ayıklama araçlarına adresi yapıştırıp önizlemeyi görün. Bu araçlar çoğunlukla önbelleği yenileme seçeneği de sunar.
3. **Mesajlaşma testi:** Bağlantıyı bir mesajlaşma uygulamasında kendinize gönderip önizlemeyi görün.
4. **Gerçek paylaşım öncesi temizlik:** Platformlar önizlemeyi önbelleğe alır; etiketleri değiştirdikten sonra eski önizleme bir süre görünebilir. Önbelleği yenileyin.
5. **Mobilde de bakın.** Telefon uygulamalarında kırpma farklı olabilir.

## Sık görülen sorunlar

- **Görsel çıkmıyor:** Adres mutlak mı, https mi, robots.txt ya da giriş zorunluluğu engelliyor mu, dosya çok mu büyük?
- **Eski görsel görünüyor:** Platform önbelleği; doğrulama aracıyla yenileyin ya da görselin adını değiştirin.
- **Başlık kesiliyor:** Çok uzun; kısaltın.
- **Yanlış sayfa önizleniyor:** `og:url` yanlış adresi gösteriyor ya da şablon her sayfada aynı değeri basıyor.
- **Çift etiket:** Hem eklenti hem tema etiket basıyor; platform birini seçip yanlışı alabilir.
- **Türkçe karakter bozuk:** Sayfa kodlaması UTF-8 olmalı.
- **Önizlemede “Ana Sayfa” görünüyor:** Başlık şablonu bozuk; tema ayarlarına bakın.

## Tutarlılık ve dürüstlük

Önizleme sayfanın gerçek içeriğini yansıtmalıdır. Abartılı başlık ya da yanıltıcı görsel kısa vadede tıklama getirir, uzun vadede güveni ve geri dönüşü kaybettirir; Google da tıklama tuzağından kaçınmayı önerir ([tıklanabilir ama dürüst başlıklar](/blog/tiklanabilir-ama-durust-basliklar-nasil-yazilir/)).

OG metinlerinin sayfa başlığı ve meta açıklamasıyla tutarlı olması yönetimi de kolaylaştırır: aynı mesajı üç yerde farklı yazmak, bakım yükü ve tutarsızlık yaratır ([başlık ve meta açıklama](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir kafenin blog yazıları sosyal medyada paylaşıldığında önizlemede yalnızca “Ana Sayfa” başlığı ve gri bir kutu görünüyor.

- **Teşhis:** Tema her sayfaya aynı varsayılan başlık ve boş bir görsel basıyor; SEO eklentisinin sosyal ayarı kapalı.
- **Düzeltme:** Eklentide sosyal etiketler açılıyor; varsayılan paylaşım görseli (1200×675, kafenin fotoğrafı) yükleniyor; her yazı için başlık, açıklama ve görsel giriliyor; çift etiket kaldırılıyor.
- **Test:** Bağlantılar platform doğrulama araçlarında önbellek yenilenerek test ediliyor; önizlemeler doğru görünüyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **OG etiketlerini hiç eklememek.**
2. **Her sayfada aynı başlık ve görseli kullanmak.**
3. **Göreli ya da http görsel adresi vermek.**
4. **Çok büyük ya da yazıyla dolu görsel kullanmak.**
5. **Etiketi değiştirip platform önbelleğini yenilememek.**
6. **`og:url`’yi canonical’dan farklı yazmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Web tasarım hizmetimizde](/web-tasarim/):

- sitenizin OG etiketlerini ve çift etiket sorunlarını denetleriz,
- sayfa türlerine göre paylaşım görseli ve başlık şablonu tasarlarız,
- önizlemeleri platform araçlarıyla test ederiz,
- OG, başlık ve açıklamanın tutarlılığını sağlarız.

Paylaşım önizlemesi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin tasarımına, hızına ve arama görünürlüğüne birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [web tasarım sayfamızda](/web-tasarim/) yazılı.

## Sık sorulan sorular

### Open Graph etiketleri sıralamayı etkiler mi?

Doğrudan sıralama etkeni değildir; ama Google başlık bağlantısı, site adı ve Keşfet görseli için bunlara bakabilir.

### Hangi etiketler zorunlu?

Pratikte `og:title`, `og:description`, `og:image` ve `og:url`; ayrıca `og:type` ve `og:site_name` önerilir.

### Görsel boyutu ne olmalı?

Yatay, geniş bir görsel; yaygın öneri 1200×630. Keşfet için en az 1.200 piksel genişlik ve 16:9 oranı önerilir.

### Önizleme eski görünüyorsa?

Platformlar önizlemeyi önbelleğe alır; doğrulama aracıyla yenileyin.

### WordPress’te elle kod eklemem gerekir mi?

Genellikle hayır; SEO eklentisinin sosyal paylaşım ayarları etiketleri üretir. Çift etiket olmadığını kontrol edin.

## Kaynaklar

- [Google Arama Merkezi: Başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
- [Google Arama Merkezi: Google Arama’ya site adı sağlama](https://developers.google.com/search/docs/appearance/site-names?hl=tr)
- [Google Arama Merkezi: Keşfet ve web siteniz](https://developers.google.com/search/docs/appearance/google-discover?hl=tr)
