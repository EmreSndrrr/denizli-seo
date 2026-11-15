---
title: "E-Ticaret Ürün Feed’i Nasıl Hazırlanır?"
description: "E-ticaret ürün feed’i nasıl hazırlanır? Temel alanlar, başlık ve fiyat biçimi, stok değerleri, varyantlar, güncelleme sıklığı ve yayın öncesi veri kontrolleri."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ürün kimliği, başlık, fiyat ve stok sütunlarından oluşan ürün veri dosyası"
---

Ürün feed’i, mağazanızdaki ürünlerin kimlik, başlık, açıklama, bağlantı, görsel, fiyat ve stok gibi bilgilerini satır satır taşıyan veri dosyasıdır; Google Merchant Center gibi platformlar ürünlerinizi bu dosyadan tanır. İyi bir feed’in üç özelliği vardır: her ürünün değişmeyen bir kimliği olur, verideki her bilgi sitedeki ürün sayfasıyla birebir aynıdır ve dosya fiyat ile stok değiştikçe kendiliğinden güncellenir. Sorunların çoğu biçim hatasından değil, feed ile site arasındaki tutarsızlıktan çıkar.

Bu yazı Google’ın ürün verileri spesifikasyonundaki temel alanları ve hazırlık sırasını anlatır. Ürün verisi denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Feed nedir, nasıl gönderilir?

Feed (veri kaynağı), ürün bilgisinin makinece okunabilir listesidir. Merchant Center veriyi birkaç biçimde kabul eder: sekmeyle ayrılmış metin dosyası, XML dosyası ya da API. Kaynak olarak şunlar kullanılabilir:

1. **E-ticaret altyapısının hazır entegrasyonu.** Çoğu altyapı ve eklenti feed’i kendiliğinden üretir ve günceller. Küçük ve orta mağaza için en sağlıklı yol budur.
2. **Zamanlanmış dosya.** Siteniz belirli bir adreste feed dosyası yayınlar; Merchant Center bu adresi belirlediğiniz sıklıkta çeker.
3. **Elektronik tablo.** Az sayıda ürün için elle yönetilebilir; fiyat ve stok sık değişiyorsa uygun değildir.
4. **API.** Çok ürünlü ve hızlı değişen kataloglarda anlık güncelleme sağlar.

Hangi yolu seçerseniz seçin kural aynıdır: feed’in kaynağı sitenizin veritabanı olmalı; ayrı bir yerde elle tutulan ikinci bir fiyat listesi er geç siteden sapar.

## Temel alanlar

Google’ın ürün verileri spesifikasyonu alanları (özellikleri) tek tek tanımlar ([ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)). Ücretsiz listelemeler için zorunlu olanların özeti:

| Alan | Açıklama | Dikkat |
|---|---|---|
| `id` | Ürünün benzersiz kimliği | Değişmemeli; stok kodunuzu kullanın |
| `title` | Ürün başlığı | Düz metin, en fazla 150 karakter |
| `description` | Ürün açıklaması | Sayfadaki açıklamayla uyumlu |
| `link` | Ürün sayfasının adresi | Dizine eklenebilir, doğru varyant |
| `image_link` | Ana görsel adresi | Yeterince büyük, tanıtım yazısı yok |
| `price` | Fiyat ve para birimi | `10.00 TRY` biçimi |
| `availability` | Stok durumu | Sabit değerlerden biri |
| `brand` | Marka | Markası olan ürünlerde |
| `gtin` / `mpn` | Ürün tanımlayıcısı | GTIN varsa GTIN, yoksa MPN |
| `condition` | Durum | İkinci el ve yenilenmiş ürünlerde |

Zorunlu alanların tam listesi için [ücretsiz listelemeler için ürün hazırlığı](/blog/merchant-center-ucretsiz-listelemeler-icin-urun-hazirligi/) yazısına bakın.

## Kimlik: en az önemsenen, en kritik alan

`id`, platformun ürünü tanıdığı anahtardır. Ürünün geçmişi (onay durumu, performansı) bu kimliğe bağlıdır. Kurallar:

- Her ürün ve her varyant için benzersiz olsun.
- Zamanla **değişmesin**. Altyapı ya da eklenti değiştirirken kimliklerin yeniden üretilmesi, tüm ürünlerin “yeni ürün” gibi sıfırdan değerlendirilmesine yol açar.
- Anlamlı olması gerekmez; mağazanızdaki stok kodu (SKU) iyi bir seçimdir.
- Aynı kimliği iki farklı ürüne vermeyin.

Site taşıma ya da altyapı değişikliği planlıyorsanız kimlik eşleşmesini iş listesine baştan yazın.

## Başlık ve açıklama

Spesifikasyona göre başlık düz metindir ve en fazla 150 karakterdir. Ancak sonuçlarda başlığın yalnızca başı görünür; önemli bilgiyi başa koyun.

İyi bir başlık kalıbı: **marka + ürün türü + ayırt edici özellikler** (model, renk, beden, malzeme, miktar).

- Zayıf: “Süper Fırsat! Bornoz”
- İyi: “Örnek Marka %100 Pamuk Kadın Bornoz, Beyaz, M Beden”

Kaçınılacaklar: büyük harfle yazılmış kelimeler, “indirim”, “ücretsiz kargo” gibi tanıtım ifadeleri, başlığı anahtar kelime listesine çevirmek. Açıklamada ürünün ne olduğunu, ölçülerini, malzemesini ve kime uygun olduğunu yazın; üretici metnini olduğu gibi kopyalamayın ([ürün açıklaması nasıl yazılır?](/blog/urun-aciklamasi-nasil-yazilir-kopya-metinden-kacinma/)).

Başlık ve açıklama, ürün sayfasındaki başlık ve açıklamayla aynı ürünü anlatmalıdır; feed’e özel, sayfada karşılığı olmayan iddialar yazmayın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Fiyat biçimi

Spesifikasyonun fiyat kuralları açıktır:

- Para birimi ISO 4217 biçiminde olmalıdır; Türk lirası için `TRY`.
- Ondalık işareti virgül değil **nokta** olmalıdır: `10.00 TRY`.

Türkçe yazımda fiyat `1.250,00 TL` biçimindedir; feed’de bu `1250.00 TRY` olur. Binlik ayırıcı kullanmayın. Bu dönüşüm, elle hazırlanan dosyalarda en sık yapılan hatadır.

Ayrıca:

- Feed’deki fiyat, ürün sayfasında alıcının gördüğü fiyatla aynı olmalı (vergi dahil/hariç tutarlılığı dahil).
- İndirim varsa normal fiyatı `price`, indirimli fiyatı `sale_price` alanında gönderin; sayfada da ikisi görünmeli.
- Kampanya bittiğinde indirimli fiyatı feed’den kaldırın ([fiyat uyuşmazlığı](/blog/merchant-centerda-fiyat-uyusmazligi-nasil-arastirilir/)).

## Stok durumu

`availability` alanı serbest metin değildir; desteklenen değerler şunlardır:

- `in_stock` (stokta),
- `out_of_stock` (stokta yok),
- `preorder` (ön sipariş),
- `backorder` (ileri tarihli sipariş).

Google, stok durumunu doğru göndermenizi ve açılış sayfanızdaki, ödeme sayfalarınızdaki ve yapılandırılmış verinizdeki durumla eşleştirmenizi ister. Tükenen ürünü feed’den silmek yerine `out_of_stock` olarak göndermek, ürünün kimliğini ve geçmişini korur ([stokta olmayan ürün sayfaları](/blog/stokta-olmayan-urun-sayfalari-nasil-yonetilmeli/)).

## Bağlantı ve görsel

**`link`:**

- Ürünün kendi sayfasına gitsin; kategoriye, ana sayfaya ya da arama sonucuna değil.
- Varyantlı üründe, o varyantın seçili geldiği adres olsun.
- https olsun, yönlendirme zinciri içermesin.
- Sayfa taranabilir ve dizine eklenebilir olsun.
- İzleme parametresi ekleyecekseniz sayfadaki canonical’ın temiz adresi gösterdiğinden emin olun ([UTM parametreli adresler](/blog/utm-parametreli-urller-seo-icin-nasil-yonetilir/)).

**`image_link`:**

- Ürünün kendisini, net ve tam gösteren ana görsel.
- Üzerinde yazı, logo, damga, çerçeve ya da kampanya etiketi olmasın; Google bu tür görsellerin ürün reddine yol açabileceğini belirtir.
- Yer tutucu (“görsel yakında”) göndermeyin.
- Görsel adresi taranabilir olsun; robots.txt ile kapalı bir klasörde durmasın ([görseller neden çıkmıyor?](/blog/gorsellerim-google-gorsellerde-neden-cikmiyor/)).
- Ek görseller için ek görsel alanını kullanın.

## Varyantlar

Renk, beden, desen ya da malzemeye göre değişen ürünlerde her varyant ayrı bir satırdır:

1. Her varyantın kendi `id` değeri olur.
2. Hepsi aynı öğe grubu kodunu (`item_group_id`) taşır.
3. Farklılaştıran alan (renk, beden) her satırda doldurulur.
4. Her varyantın kendi görseli ve mümkünse kendi bağlantısı bulunur.
5. Fiyat ve stok varyant bazında doğru olur.

“Kırmızı M” tükenmiş, “Mavi L” stoktaysa feed bunu ayrı ayrı söylemelidir. Tüm varyantları tek satırda “çeşitli renkler” diye göndermek, giyim gibi kategorilerde ürünün onaylanmamasına yol açar.

## Güncelleme sıklığı

Fiyat ve stok ne sıklıkla değişiyorsa feed de o sıklıkla güncellenmeli. Google, fiyat uyuşmazlığının yaygın nedeni olarak sitedeki güncelleme ile Merchant Center verisindeki güncelleme arasındaki zaman farkını gösterir ve çözüm olarak dosya için bir zamanlama oluşturmayı ya da API kullanmayı önerir.

Pratik düzen:

- Fiyatı haftada bir değişen mağaza: günlük zamanlanmış feed yeterli.
- Fiyatı ya da stoğu gün içinde değişen mağaza: günde birkaç güncelleme ya da API.
- Kampanya başlangıç ve bitiş saatlerinde feed’in o saatte yenilendiğinden emin olun.

## Yayın öncesi kontrol listesi

1. Her satırda zorunlu alanlar dolu mu?
2. `id` değerleri benzersiz ve kalıcı mı?
3. Fiyat biçimi `1250.00 TRY` gibi mi; sayfadaki fiyatla aynı mı?
4. Stok değerleri desteklenen dört değerden biri mi; sayfayla aynı mı?
5. Bağlantılar 200 dönüyor ve doğru ürünü açıyor mu?
6. Görseller açılıyor, üzerinde yazı yok, yeterince büyük mü?
7. Türkçe karakterler (ç, ğ, ı, ö, ş, ü) dosyada doğru görünüyor mu? Dosyayı UTF-8 olarak kaydedin.
8. Başlıklarda tanıtım ifadesi ve tümü büyük harf yazım var mı?
9. Varyantlar ayrı satırlarda ve aynı grup koduyla mı?
10. Rastgele on ürünü feed’den seçip sitedeki sayfasıyla yan yana karşılaştırdınız mı?

Yükledikten sonra Merchant Center’ın ürün tanılama ekranındaki hata ve uyarıları tek tek giderin.

## Feed ile yapılandırılmış veri birlikte çalışır

Feed platforma “ürünüm bu” der; ürün sayfasındaki yapılandırılmış veri ise aynı bilgiyi sayfanın içinde doğrular. İkisi çelişirse ürün onaylanmayabilir. Ürün sayfalarına `Product` ve teklif işaretlemesi ekleyin; fiyat, para birimi ve stok değerleri feed’dekiyle aynı olsun ([yapılandırılmış veri rehberi](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir nevresim mağazası feed’i elektronik tabloda elle tutuyor. Ürünlerin üçte biri “fiyat uyuşmazlığı” ile onaylanmıyor; bir kısmında fiyat hiç okunmuyor.

- **Teşhis:** Fiyatlar `1.250,00 TL` biçiminde yazılmış; sitedeki kampanya fiyatları tabloya işlenmemiş; altyapı güncellemesinde ürün kimlikleri değişmiş.
- **Düzeltme:** Elle tablo bırakılıyor, altyapının entegrasyonu açılıyor; kimlik olarak stok kodu sabitleniyor; fiyat biçimi ve `sale_price` düzeltiliyor.
- **Kontrol:** Rastgele yirmi ürün feed ve sayfa karşılaştırmasından geçiriliyor; tanılama ekranı haftalık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Fiyatı virgüllü ve “TL” ile yazmak.**
2. **Ürün kimliklerini değiştirmek.**
3. **Feed’i elle tutup siteyle eşitlememek.**
4. **Stok durumunu serbest metinle yazmak.**
5. **Varyantları tek satırda göndermek.**
6. **Başlığa kampanya ifadeleri eklemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- feed’inizi alan alan denetler, hata ve tutarsızlıkları listeleriz,
- altyapınıza uygun otomatik güncelleme düzenini kurarız,
- ürün sayfalarındaki yapılandırılmış veriyi feed ile eşitleriz,
- onay ve performans durumunu izleriz.

Feed denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Ürün feed’i hangi biçimde olmalı?

Sekmeyle ayrılmış metin ya da XML dosyası olabilir; veri API ile de gönderilebilir. Çoğu altyapı feed’i kendiliğinden üretir.

### Fiyatı nasıl yazmalıyım?

Nokta ondalık ayırıcı ve ISO 4217 para birimi koduyla: `1250.00 TRY`.

### Tükenen ürünü feed’den silmeli miyim?

Geçici olarak tükenen ürünü `out_of_stock` olarak göndermek, kimliğini ve geçmişini korur.

### Feed’i ne sıklıkla güncellemeliyim?

Fiyat ve stok değişme sıklığınıza göre; çoğu mağaza için en az günde bir.

### Başlık kaç karakter olabilir?

En fazla 150 karakter; önemli bilgiyi başa yazın.

## Kaynaklar

- [Google Merchant Center Yardım: Ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)
- [Google Merchant Center Yardım: Ürün fiyatı eşleşmiyor – nasıl çözülür?](https://support.google.com/merchants/answer/12159029?hl=tr)
