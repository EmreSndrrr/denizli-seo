---
title: "Merchant Center Ürün Feed’i ile Product Schema Farkı"
description: "Merchant Center ürün feed’i ile Product schema arasındaki fark nedir? İkisi neyi sağlar, neden eşleşmeli, fiyat uyuşmazlığı ve doğru kurulum rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Merchant Center’a yüklenen ürün tablosu ve ürün sayfasındaki yapılandırılmış veri aynı bilgiyi taşırken"
---

Merchant Center ürün feed’i, ürünlerinizin bilgisini (başlık, fiyat, stok, görsel, marka gibi) doğrudan Google’a yüklediğiniz yapılandırılmış bir veri dosyasıdır; Product schema ise aynı bilgiyi ürün sayfanızın kodunda işaretlemenizdir. İkisi aynı ürünü anlatır ama farklı kanallardan: feed Google Merchant Center’a gider ve Alışveriş yüzeylerinde ürünlerin gösterilmesine yardım eder; Product schema Arama’da ürün snippet’lerine ve sayfanın anlaşılmasına yardımcı olur. Bu iki kaynağın birbiriyle uyumlu olması şarttır; çünkü Google feed’deki fiyatı ve stoğu ürün sayfasıyla karşılaştırır.

Bu yazıda iki kaynağın ne işe yaradığını, farklarını, neden eşleşmesi gerektiğini, fiyat uyuşmazlığının nedenlerini ve doğru kurulum yolunu anlatıyoruz. Feed hazırlığı için [e-ticaret ürün feed’i nasıl hazırlanır?](/blog/e-ticaret-urun-feedi-nasil-hazirlanir/), uyuşmazlık için [Merchant Center’da fiyat uyuşmazlığı nasıl araştırılır?](/blog/merchant-centerda-fiyat-uyusmazligi-nasil-arastirilir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Merchant Center feed’i nedir?

Merchant Center, ürünlerinizi Google’ın alışveriş yüzeylerinde göstermek için kullandığınız araçtır. Feed, ürünlerin bilgisini içeren bir dosya ya da veri akışıdır. Google’ın “ürünler için ücretsiz listelemeler” sayfasına göre ücretsiz listelemelerle ürünler Arama, Görseller, Lens, YouTube, Alışveriş sekmesi ve İşletme Profili ürün modülünde gösterilebilir; bu, ürün sayfalarının (ana sayfa ya da kategori değil) gösterilmesine yardım eder; durum yalnızca izni denetler ve gösterimi garanti etmez ([ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)). Zorunlu özellikler arasında `id`, `title`, `link`, `image_link`, `price`, `description` ve `availability` yer alır; markası olan ürünlerde `brand`, GTIN atanmış ürünlerde `gtin` gibi ek özellikler gerekir.

Feed, ürün verisini ürün sayfalarından bağımsız olarak, kendi biçimiyle Google’a gönderir. Biçim ve kurallar Merchant Center’ın ürün verisi spesifikasyonunda tanımlıdır; örneğin başlık düz metin ve en fazla 150 karakter, fiyat ISO 4217 para birimiyle ve ondalık işareti nokta olarak (örneğin 10.00 TRY) yazılır ([ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)).

## Product schema nedir?

Product schema, ürün sayfanızın HTML’ine eklenen ve ürünü tanımlayan yapılandırılmış veridir: ad, görsel, açıklama, marka, fiyat, para birimi, stok durumu, puan ve yorum gibi. Google’ın ürün snippet’i rehberine göre Product işaretlemesi fiyat, stok ve para birimi gibi bilgileri içerir; JavaScript ile oluşturulan Product işaretlemesinin işlenmesi gecikebilir ve bu, stok ve fiyat gibi hızlı değişen içerik için sorun yaratabilir ([ürün snippet’i yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=tr)).

Product schema ürün sayfasının içindedir; Google bunu sayfayı tararken okur. Bu yüzden sayfa sunucudan geldiği hâliyle (JavaScript beklemeden) doğru işaretlemeyi taşırsa en güvenilir sonuç alınır.

> **Hizmet almak için iletişime geçin.** Feed ve Product schema’nızın uyumunu birlikte kontrol edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## İkisi arasındaki fark

| Özellik | Merchant Center feed’i | Product schema |
| --- | --- | --- |
| Nerede? | Merchant Center’a yüklenen dosya ya da veri akışı | Ürün sayfasının kodunda |
| Google nasıl alır? | Yükleme/akış; Merchant Center işler | Sayfayı tararken okur |
| Ne sağlar? | Alışveriş yüzeylerinde (Arama, Görseller, Alışveriş sekmesi vb.) ürün gösterimine uygunluk | Arama’da ürün snippet’i ve sayfanın anlaşılması |
| Kimin kontrolünde? | Merchant Center hesabı | Web sitesi |
| Güncelleme | Feed yenileme zamanlaması | Sayfa yayınlandığında ve Google yeniden taradığında |
| Zorunlu mu? | Alışveriş listelemeleri için gerekli | Zorunlu değil; önerilir |
| Hata nerede görünür? | Merchant Center “İlgilenilmesi gerekiyor” sekmesi | Search Console yapılandırılmış veri raporları |

Özet: feed Google’a “ürünlerim bunlar” der, schema ise ürün sayfasına “bu sayfa şu ürünü anlatıyor” der. İkisi birbirini tamamlar; biri diğerinin yerine geçmez.

## Neden eşleşmeleri gerekir?

Google, feed’i sayfayla karşılaştırır. Merchant Center’ın fiyat uyuşmazlığı sayfası şunu anlatır: Googlebot açılış sayfalarını düzenli olarak tarar ve feed’deki fiyatı sayfadaki ya da yapılandırılmış veriyle sunulan fiyatla karşılaştırır; uyuşmazlık olduğunda ürün onaylanmayabilir ve bu durum hesabın askıya alınmasına bile neden olabilir. Googlebot sunucudan dönen HTML’e bakar; fiyat JavaScript ile sonradan geliyorsa hata oluşabilir. Görsel olarak sayfa ile feed eşleşse bile yapılandırılmış veri eşleşmiyorsa ürün onaylanmayabilir ([ürün fiyatı eşleşmiyor: nasıl çözülür?](https://support.google.com/merchants/answer/12159029?hl=tr)).

Aynı mantık stok için de geçerlidir: ürün verisi spesifikasyonuna göre `availability` değerleri (örneğin `in_stock`, `out_of_stock`) açılış sayfası ve yapılandırılmış veriyle eşleşmelidir. Yani üç kaynak (feed, sayfanın görünen içeriği, sayfanın yapılandırılmış verisi) aynı fiyatı, para birimini ve stok durumunu göstermelidir.

## Eşleşmenin bozulduğu yaygın durumlar

- **Güncelleme saat farkı.** Fiyatı sitede değiştirdiniz ama feed saatler sonra yenileniyor.
- **İndirim ve kampanya fiyatları.** `sale_price` tarihi ve saat dilimi sayfadaki fiyatla uyumsuz olabilir.
- **Para birimi farkı.** Sayfada TL, yapılandırılmış veride USD gibi.
- **Yapılandırılmış verideki eski fiyat.** Sayfa güncellenir, şablondaki JSON-LD eski kalır.
- **JavaScript ile sonradan gelen fiyat.** Googlebot sunucu HTML’inde fiyatı göremez.
- **Varyant fiyatları.** Seçilen varyantın fiyatı ile feed’deki ürün fiyatı farklı olabilir.
- **Minimum sipariş ya da toptan fiyat.** Gösterilen fiyatın feed’le uyumunu kontrol edin ([toptan satış sitesinde fiyatsız ürün sayfası hazırlamak](/blog/toptan-satis-sitesinde-fiyatsiz-urun-sayfasi-hazirlamak/)).

## Doğru kurulum için adımlar

1. **Tek kaynağı belirleyin.** Fiyat, stok ve ürün bilgisi tek bir veri tabanından beslensin; feed ve sayfa aynı kaynaktan üretilsin.
2. **Feed’i spesifikasyona göre hazırlayın.** Zorunlu alanlar, başlık uzunluğu, fiyat biçimi, `gtin`/`mpn`/`brand` doğruluğu ([GTIN, MPN ve marka bilgileri ürün feed’ine nasıl eklenir?](/blog/gtin-mpn-ve-marka-bilgileri-urun-feedine-nasil-eklenir/)).
3. **Product schema’yı sunucu tarafında üretin.** Mümkünse JavaScript beklemeden HTML’de yer alsın.
4. **Üç kaynağı karşılaştırın.** Feed, sayfa ve schema’daki fiyat, para birimi ve stok aynı mı?
5. **Zengin Sonuçlar Testi’yle sayfayı doğrulayın.** İnceleme öncesi önerilen bir adımdır.
6. **Merchant Center’da tanılamaları izleyin.** “İlgilenilmesi gerekiyor” sekmesindeki sorunları düzenli kontrol edin.
7. **Feed yenileme sıklığını ayarlayın.** Fiyat ve stok değişimine uygun sıklıkta.

## Hangisini önce kurmalısınız?

Çoğu e-ticaret sitesi için sıra şöyle olabilir: önce ürün sayfalarının içeriği ve temiz teknik yapısı, sonra Product schema, ardından Merchant Center ve feed. Çünkü feed’in başarısı ürün sayfalarının kalitesine ve doğruluğuna bağlıdır; Google ücretsiz listelemelerde en önemli etkenin yüksek kaliteli içerik olduğunu vurgular. Küçük bir katalogda feed’i elle ya da bir tabloyla yönetmek mümkündür; büyük kataloglarda otomatik akış gerekir ([e-ticaret SEO: kategori ve ürün sayfaları nasıl olmalı?](/blog/e-ticaret-seo/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili e-ticaret sitesi, Merchant Center’da birçok ürünün “fiyat uyuşmazlığı” nedeniyle onaylanmadığını görüyor. Sitede fiyatlar doğru; feed her gece yenileniyor.

İşletme üç kaynağı karşılaştırıyor: feed’de fiyat gece yenilenen eski değer; sayfada gündüz yapılan indirim güncel; Product schema’daki fiyat ise şablonda sabit bir eski değer. Çözüm: fiyat tek veri kaynağından besleniyor, Product schema sunucu tarafında güncel fiyatla üretiliyor, feed yenileme sıklığı artırılıyor. Zengin Sonuçlar Testi’yle sayfa doğrulanıyor ve Merchant Center’da onaylanmayan ürünlerin yeniden taranması bekleniyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Feed’i yükleyip sayfayı eşitlememek.** Fiyat ve stok uyuşmazlığı doğar.
2. **Schema fiyatını şablonda sabit bırakmak.** Eski fiyat görünür.
3. **Fiyatı yalnızca JavaScript ile eklemek.** Googlebot sunucu HTML’ine bakar.
4. **Feed güncelleme sıklığını düşük tutmak.** Fiyat değişimleri geç yansır.
5. **Tahmini GTIN yazmak.** Yalnızca doğru olduğundan eminseniz paylaşın.
6. **Tanılamaları izlememek.** “İlgilenilmesi gerekiyor” sekmesini düzenli kontrol edin.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- feed, ürün sayfası ve Product schema’daki fiyat, stok ve marka bilgilerini karşılaştırır, uyuşmazlıkları listeleriz,
- Product schema’nın sunucu tarafında ve güncel veriyle üretilmesi için geliştiriciye net talimat yazarız,
- Merchant Center tanılamalarını ve Search Console yapılandırılmış veri raporlarını birlikte izleriz,
- sonuç vaat etmeden, ürün görünürlüğünü ve onay durumunu takip ederiz.

E-ticaret verileriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Feed ve ürün sayfalarınızın birbiriyle uyumunu birlikte kontrol edelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Product schema varsa feed’e gerek yok mu?

Alışveriş yüzeylerinde (ücretsiz listelemeler gibi) gösterim için Merchant Center feed’i gerekir. Product schema yalnızca ürün sayfasını tanımlar; ikisini birlikte kullanın.

### Feed varsa Product schema gerekli mi?

Zorunlu değil; ama ürün sayfasını anlamlandırmaya ve Arama’da ürün snippet’ine yardımcı olur. Fiyat ve stok bilgileri feed ile uyumlu olmalı.

### Fiyatlar neden uyuşmuyor görünüyor?

Güncelleme saat farkı, eski schema fiyatı, JavaScript ile sonradan gelen fiyat ya da varyant farkı olabilir. Üç kaynağı karşılaştırın.

### Feed ne sıklıkla güncellenmeli?

Fiyat ve stok değişimine uygun sıklıkta; hızlı değişen katalogda günlük hatta daha sık güncelleme gerekir.

### Ücretsiz listeleme gösterimi garanti mi?

Hayır. Google durumun yalnızca izni denetlediğini ve gösterimi garanti etmediğini belirtir.

## Kaynaklar

- [Merchant Center Yardım: Ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)
- [Merchant Center Yardım: Ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)
- [Merchant Center Yardım: Ürün fiyatı eşleşmiyor: nasıl çözülür?](https://support.google.com/merchants/answer/12159029?hl=tr)
- [Google Arama Merkezi: Ürün snippet’i yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=tr)
