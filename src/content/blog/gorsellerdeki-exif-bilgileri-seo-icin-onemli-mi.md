---
title: "Görsellerdeki EXIF Bilgileri SEO İçin Önemli mi?"
description: "Görsellerdeki EXIF bilgileri SEO için önemli mi? EXIF ile IPTC farkı, Google’ın belgelediği meta veriler, gizlilik riski ve görsel hazırlama kontrol listesi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir fotoğrafın içindeki kamera, konum ve telif bilgilerinin meta veri katmanları"
---

Görsellerdeki EXIF bilgileri (kamera modeli, çekim tarihi, konum gibi), SEO’da sıralamayı yükselten bir etken olarak Google tarafından belgelenmemiştir. Google’ın resmî rehberleri görsel SEO için alt metin, dosya adı, sayfa bağlamı, `<img>` kullanımı ve sitemap gibi sinyalleri anlatır; EXIF’ten bahsetmez. Telif ve lisans bilgisi için ise Google IPTC fotoğraf meta verisini ve yapılandırılmış veriyi belgeler. Bu yüzden EXIF’e güvenip SEO yapmak yerine doğru alt metin, dosya adı ve görsel kalitesine odaklanın; EXIF’i gizlilik açısından da kontrol edin.

Bu yazıda EXIF’in ne olduğunu, IPTC’den farkını, Google’ın belgelediği görsel meta verilerini, konum bilgisinin gizlilik riskini ve görsel hazırlarken izleyeceğiniz yolu anlatıyoruz. Genel görsel SEO için [görsel SEO: alt metin, boyut ve WebP rehberi](/blog/gorsel-seo/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## EXIF nedir?

EXIF (Exchangeable Image File Format), özellikle dijital fotoğrafların içine kameranın otomatik yazdığı bilgi katmanıdır. İçinde genellikle şunlar bulunur:

- Kamera ya da telefon modeli,
- çekim tarihi ve saati,
- pozlama, diyafram ve ISO gibi çekim ayarları,
- GPS konumu (konum servisi açıksa),
- görsel yönü ve çözünürlüğü.

EXIF görselin içine gömülüdür; görseli bir sayfada gösterirken ziyaretçi bu bilgiyi doğrudan görmez ama dosyayı indirip meta verisini okuyabilir.

## Google EXIF’i sıralama için kullanır mı?

Google’ın görsel SEO rehberleri bu konuda EXIF’e değinmez. Rehber, Google’ın görsel hakkında sayfanın içeriğinden bilgi çıkardığını anlatır; açıklayıcı dosya adı, başlık ve alt metin kullanılmasını önerir ve bir görsel için en önemli meta veri özelliğinin alternatif metin olduğunu söyler ([Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)). Yani EXIF alanları “sıralama sinyali” olarak sunulmamıştır; “EXIF’e anahtar kelime yazarsanız görsel yükselir” iddiası Google belgelerinde desteklenmez.

Bu belgelenmemiş bir şeyin etkisiz olduğu anlamına gelmez; ama dayanak olmadan emek harcamak, doğrulanmış etkenlerden vakit çalar. Öncelik: alt metin, dosya adı, görsel boyutu ve biçimi, sayfa bağlamı ve `<img>` kullanımıdır.

> **Hizmet almak için iletişime geçin.** Görsellerinizi SEO ve gizlilik açısından birlikte hazırlayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Google’ın belgelediği görsel meta verisi: IPTC ve yapılandırılmış veri

Google’ın “Resim meta verisi” rehberi, telif ve lisans bilgisini Google’a bildirmenin iki yolunu anlatır: sayfadaki yapılandırılmış veri ya da görselin içine gömülen IPTC fotoğraf meta verisi. Rehber, bu bilgilerin Google Görseller’de görselle birlikte gösterilebileceğini; örneğin lisans bilgisi sağlamanın görseli “Lisanslanabilir” rozetine uygun hâle getirebileceğini söyler. Lisans sayfası için Schema.org license özelliği ya da IPTC Web Statement of Rights alanı, lisans edinme sayfası için acquireLicensePage ya da IPTC Licensor URL alanı kullanılabilir ([resim meta verisi](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata?hl=tr)).

Rehber ayrıca IPTC fotoğraf meta verisinin görselin içine yerleştirildiğini, böylece görsel ve meta verinin bir arada taşınabildiğini ve resim başına yalnızca bir kez yerleştirmenin yeterli olduğunu anlatır. Yani telif ve sahiplik bilgisi için doğru araç EXIF değil, IPTC ya da yapılandırılmış veridir. Bu konunun ayrıntısı için [Google Görseller’de fotoğraf sahibi ve lisans bilgisi](/blog/google-gorsellerde-fotograf-sahibi-ve-lisans-bilgisi/) yazısına bakabilirsiniz.

## EXIF ile IPTC arasındaki fark

| Özellik | EXIF | IPTC |
| --- | --- | --- |
| Kim yazar? | Çoğunlukla kamera ya da telefon otomatik | Fotoğrafçı ya da düzenleyen kişi |
| İçerik | Kamera, çekim ayarı, tarih, konum | Başlık, açıklama, telif, sahip, lisans |
| Google belgelemesi | SEO için belgelenmemiş | Lisans ve sahip bilgisi için belgelenmiş |
| Gizlilik riski | Konum ve cihaz bilgisi açığa çıkabilir | Kişisel ad ve iletişim bilgisi içerebilir |
| Ne için kullanılır? | Teknik kayıt | Telif, atıf, lisans |

Kısaca: EXIF teknik bir kayıttır; IPTC ise yayın ve telif bilgisidir. Google’ın lisans özellikleri IPTC’ye dayanır.

## Konum bilgisi gizlilik riski taşır mı?

Evet. Telefonla çekilen fotoğraflarda konum servisi açıksa GPS koordinatları EXIF’e yazılır. Bu görseli olduğu gibi yayınlarsanız, indiren herkes çekim konumunu okuyabilir. İşletmeniz için bu, atölyenizin ya da deponuzun adresini istemeden vermek olabilir; çalışanlarınızın ya da müşterilerinizin evinde çekilmiş bir fotoğrafsa ciddi gizlilik sorunu doğar. Bu nedenle yayınlamadan önce EXIF’teki konum bilgisini temizlemek iyi bir alışkanlıktır.

Birçok görsel işleme programı, içerik yönetim sistemi eklentisi ve çevrimiçi araç meta veriyi temizleme seçeneği sunar. Kullandığınız aracın hangi alanları sildiğini kontrol edin; amacınız konum ve cihaz bilgisini kaldırmak, ama telif bilgisini (IPTC) korumaksa seçeneği ona göre ayarlayın. Dosya boyutunu da meta veri temizliği küçültebilir; ama asıl kazanç görselin boyutunu ve biçimini doğru seçmektir ([sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/)).

## Görsel hazırlarken izlenecek yol

Şunları tek tek kontrol edin:

1. **Dosya adını açıklayıcı yazın.** `halı-yıkama-merkezefendi.jpg` yerine Türkçe karaktersiz `hali-yikama-merkezefendi.jpg` gibi.
2. **Alt metni yazın.** Görseli kısa ve doğal anlatın; anahtar kelimeyle doldurmayın.
3. **Boyutu ve biçimi optimize edin.** Gereksiz büyük dosyaları küçültün, uygun biçim (JPEG, WebP, AVIF) seçin.
4. **Görseli `<img>` ile ekleyin.** CSS arka planı Google tarafından dizine eklenmez ([CSS arka plan görselleri ile HTML görselleri](/blog/css-arka-plan-gorselleri-ile-html-gorselleri-seo/)).
5. **EXIF’teki konum ve cihaz bilgisini temizleyin.** Gizlilik için.
6. **Telif bilgisi gerekiyorsa IPTC ya da yapılandırılmış veri ekleyin.** Özellikle kendi fotoğraflarınızı lisanslıyorsanız.
7. **Özgün fotoğraf kullanın.** İşletmenizi, ekibinizi ve ürünlerinizi gösteren gerçek fotoğraflar güven verir ([kurumsal web sitesinde fotoğraf: çekim ve kullanım](/blog/kurumsal-web-sitesinde-fotograf-cekim-ve-kullanim/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mermer atölyesi, çalışanlarının telefonla çektiği iş fotoğraflarını doğrudan siteye yüklüyor. Bir uzman görselleri incelediğinde EXIF’te atölyenin tam GPS koordinatlarının ve çekim yapan telefon modelinin yazılı olduğu görülüyor.

Atölye, yükleme öncesi meta veriyi temizleyen bir adım ekliyor; dosya adlarını açıklayıcı hâle getiriyor, her görsele alt metin yazıyor ve fotoğrafları WebP’ye dönüştürüp boyutlarını küçültüyor. Kendi çektiği özgün fotoğraflar için telif bilgisini IPTC ile ekliyor. Anahtar kelimeyi EXIF’e yazma yoluna ise gitmiyor. Bu örnek sonuç vaadi değildir; görsel hazırlama sırasını gösterir.

## Sık yapılan hatalar

1. **EXIF’e anahtar kelime yazmayı sıralama taktiği sanmak.** Google bunu belgelemiyor.
2. **Konum bilgisini temizlememek.** Gizlilik ve güvenlik riski doğar.
3. **Telif bilgisi için EXIF’e güvenmek.** Google’ın belgelediği yol IPTC ve yapılandırılmış veridir.
4. **Alt metin ve dosya adını ihmal etmek.** Asıl önemli sinyaller bunlardır.
5. **Meta veri temizlerken telif bilgisini de silmek.** Hangi alanları sildiğinizi bilin.
6. **Stok görselleri özgün sanmak.** Gerçek işletme fotoğrafı daha değerlidir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki görselleri dosya adı, alt metin, boyut, biçim ve ekleme yöntemi açısından denetleriz,
- görsellerdeki konum ve cihaz bilgilerini tespit edip temizlik adımlarını öneririz,
- gerekliyse telif ve lisans bilgisi için IPTC ve yapılandırılmış veri planı yaparız,
- sonuç vaat etmeden, görsel görünürlüğünü Search Console ile izleriz.

Görselleriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Görsellerinizi hem SEO hem gizlilik açısından hazırlayalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### EXIF bilgisi sıralamayı etkiler mi?

Google’ın görsel SEO belgelerinde EXIF bir sıralama sinyali olarak geçmez. Alt metin, dosya adı ve sayfa bağlamı gibi belgelenmiş sinyallere odaklanın.

### EXIF’i silmeli miyim?

Konum ve cihaz bilgisi gizlilik riski taşıdığından çoğu zaman temizlemek iyidir. Telif için gerekli bilgiyi IPTC ile ayrıca verin.

### IPTC meta verisi ne işe yarar?

Google’ın belgelediğine göre telif, sahip ve lisans bilgisi Google Görseller’de gösterilebilir; lisans bilgisi görseli “Lisanslanabilir” rozetine uygun hâle getirebilir.

### Fotoğrafların konumunu nasıl kontrol ederim?

Dosyanın özelliklerinde ya da bir meta veri görüntüleme aracında GPS alanlarına bakın. Telefonlar konumu kameraya kaydedebilir.

### Görsel SEO’da en önemli şey nedir?

Doğru ve özgün görsel, açıklayıcı alt metin ve dosya adı, uygun boyut ve biçim ile `<img>` kullanımı.

## Kaynaklar

- [Google Arama Merkezi: Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [Google Arama Merkezi: Resim meta verisi (yapılandırılmış veri ve IPTC)](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata?hl=tr)
