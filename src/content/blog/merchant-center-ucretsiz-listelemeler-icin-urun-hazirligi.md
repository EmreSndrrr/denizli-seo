---
title: "Merchant Center Ücretsiz Listelemeleri İçin Ürün Hazırlığı"
description: "Merchant Center ücretsiz listelemeleri için ürünler nasıl hazırlanır? Zorunlu özellikler, ürün sayfası koşulları, iade ve kargo bilgisi, kontrol adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ürün verisi ve ürün sayfasının ücretsiz listelemeler için eşleştirilmesi"
---

Google Merchant Center’daki ücretsiz listelemeler, ürünlerinizin reklam ücreti ödemeden Google’ın çeşitli yüzeylerinde gösterilebilmesini sağlar. Hazırlık üç adımdır: ürün verinizi Merchant Center’a ekleyin, zorunlu özellikleri (kimlik, başlık, bağlantı, görsel, fiyat, açıklama, stok durumu ve yerine göre marka, GTIN ya da MPN) eksiksiz verin ve ürün bilgilerinizi sitenizdeki sayfayla birebir tutarlı tutun. Ücretsiz listelemenin açık olması ürünlerin gösterileceğini garanti etmez; Google, gönderdiğiniz veriyi müşterinin aramasıyla eşleştirir.

Bu yazı Google’ın yardım sayfalarına dayanır; arayüz ve ülke kullanılabilirliği değişebildiği için kendi hesabınızda doğrulayın. Ürün verisi ve site uyumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Ücretsiz listeleme nedir?

Google’a göre ücretsiz listelemeler organik trafik oluşturur ve kataloğunuzun erişimini artırır; ürünleriniz uygunsa Arama, Görseller, Lens, YouTube, Gemini, Alışveriş sekmesi ve İşletme Profili’ndeki ürün modülü gibi yerlerde gösterilebilir ([ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)).

Belgenin altını çizdiği bir ayrım var: ürünlere yönelik ücretsiz listelemeler, ana sayfanızın, kargo ve iade sayfalarınızın ya da kategori sayfalarınızın değil, **ürün sayfalarınızın** arama sonuçlarında gösterilmesine yardımcı olur. Yani bu çalışma ürün sayfası düzeyindedir.

İki not daha:

- Ücretsiz listelemeler çoğu durumda varsayılan olarak etkindir; durumunu Merchant Center’daki “Ücretsiz listelemeler” sayfasından görebilir ve yönetici erişiminiz varsa değiştirebilirsiniz.
- Bu sayfadaki durum, ürünlerin ücretsiz gösterilme **iznini** denetler; müşterilere gösterileceğini garanti etmez.

Hangi yüzeylerin ve özelliklerin ülkenizde kullanılabildiği zamanla değişir; hesabınızdaki sayfa en güncel kaynaktır.

## Uygunluk ve koşullar

Google şu koşulları sayar:

1. **Politikalara uyun.** Google platformlarında ücretsiz ürün göstermeyle ilgili politikalar geçerlidir.
2. **İade politikası.** İade bilgilerinin ürünlerinizin yanında gösterilebilmesi için sitenize iade politikası ekleyin; Google bunu Merchant Center’a da eklemenizi önerir, çünkü iade politikası satın alma kararını etkileyebilir.
3. **Kargo.** “Kargo” ayarlarını yapın ya da ürün verisine kargo özelliğiyle kargo maliyeti ekleyin. Bazı ülkelerde bu zorunludur.

Sitenizde iade, kargo, iletişim ve gizlilik sayfalarının açık ve bulunabilir olması yalnızca Merchant Center için değil, alıcının güveni için de gereklidir.

## Zorunlu özellikler

Google’ın tablosuna göre ürünleri ücretsiz göstermek için aşağıdaki özelliklerin çoğu gereklidir:

| Özellik | Ne zaman zorunlu? |
|---|---|
| No `[id]` | Tüm ürünler |
| Başlık `[title]` | Tüm ürünler |
| Link `[link]` | Tüm ürünler |
| Resim bağlantısı `[image_link]` | Tüm ürünler |
| Fiyat `[price]` | Tüm ürünler |
| Açıklama `[description]` | Tüm ürünler |
| Stok durumu `[availability]` | Tüm ürünler |
| Durum `[condition]` | İkinci el ya da yenilenmiş ürünler |
| Marka `[brand]` | Açıkça ilişkilendirilmiş markası ya da üreticisi olan ürünler |
| GTIN `[gtin]` | Üretici tarafından GTIN atanmış ürünler |
| MPN `[mpn]` | GTIN atanmamış ürünler |
| Çoklu ambalaj `[multipack]`, paket `[is_bundle]` | Ürün çoklu ambalaj ya da paketse |
| Renk, beden, yaş grubu, cinsiyet | Giyim ve aksesuar |

Görsel için Google ayrıca uyarır: ürün reddini önlemek için resmin yeterince büyük olduğundan ve tanıtım amaçlı içerik (yazı, damga, kampanya etiketi) barındırmadığından emin olun.

Renk ya da bedene göre değişen ürünlerde her varyant ayrı gönderilir ve öğe grubu kodu `[item_group_id]` ile birbirine bağlanır. Ürün tanımlayıcılarının ayrıntısı için [GTIN, MPN ve marka](/blog/gtin-mpn-ve-marka-bilgileri-urun-feedine-nasil-eklenir/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Ürün verisi nasıl eklenir?

Merchant Center veriyi birkaç yoldan alabilir: e-ticaret altyapınızın hazır bağlantısı, zamanlanmış bir veri dosyası (feed), elektronik tablo ya da API. Küçük mağazalarda en pratik yol, altyapının resmî entegrasyonudur; ürün eklediğinizde ya da fiyat değiştiğinde veri kendiliğinden güncellenir. Dosyayla çalışacaksanız [ürün feed’i nasıl hazırlanır?](/blog/e-ticaret-urun-feedi-nasil-hazirlanir/) yazısındaki düzeni izleyin.

Google, sitenizde yapılandırılmış veri kullanıyorsanız özelliklerin schema.org karşılıklarını da belgeler; sorun giderirken Search Console’daki hataları kontrol ederek işaretlemenin doğru eklendiğinden emin olmanızı önerir.

## Ürün sayfası koşulları

Veri kadar sayfa da önemlidir, çünkü Google veriyi sayfayla karşılaştırır.

1. **Bağlantı dizine eklenebilir olmalı.** `[link]` özelliğinde verdiğiniz adres taranabilir ve dizine eklenebilir olsun: `noindex` yok, robots.txt engeli yok, giriş zorunluluğu yok.
2. **Fiyat aynı olmalı.** Verideki fiyat ile sayfada görünen fiyat ve yapılandırılmış verideki fiyat eşleşmeli; para birimi dahil ([fiyat uyuşmazlığı](/blog/merchant-centerda-fiyat-uyusmazligi-nasil-arastirilir/)).
3. **Stok durumu aynı olmalı.** Veride “stokta”, sayfada “tükendi” yazmasın ([stokta olmayan ürün sayfaları](/blog/stokta-olmayan-urun-sayfalari-nasil-yonetilmeli/)).
4. **Bilgi HTML’de bulunmalı.** Fiyat ve stok, sayfa yüklendikten sonra betikle geliyorsa Googlebot sunucudan dönen HTML’de bunları göremeyebilir.
5. **Her ürünün kendi sayfası olmalı.** Bağlantı, o ürünün (ve varyantın) seçili olduğu sayfaya gitsin; kategoriye ya da ana sayfaya değil.
6. **Görsel gerçek ürünü göstermeli.** Yer tutucu, logo ya da üzerinde yazı olan görsel kullanmayın.

Ürün sayfasına yapılandırılmış veri eklemek, Google’ın sayfadaki fiyat ve stok bilgisini doğru okumasına yardım eder ([zengin sonuç neden görünmüyor?](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/)).

## Ürün bilgilerini iyileştirme

Google’ın üçüncü adımı kalitedir: hesabı güncel tutmak ve yüksek kaliteli bilgi sağlamak, ürünlerin ücretsiz gösterilip gösterilmeyeceğini etkileyebilir. Belgeye göre ücretsiz listelemelerdeki en önemli etken, kitlenizin değerli bulacağı yüksek kaliteli içeriktir; bilgilendirici ve alakalı içerik oluşturun, alakalı anahtar kelime ve kelime öbekleri kullanın ve SEO yönergelerini uygulayın.

Uygulamada:

- **Başlık:** Müşterinin aradığı biçimde yazın: marka + ürün türü + ayırt edici özellik (renk, boyut, model). “Yeni sezon fırsat ürünü” başlık değildir.
- **Açıklama:** Üretici metnini kopyalamak yerine ürünün ne olduğunu, kime uygun olduğunu ve ölçülerini anlatın ([ürün açıklaması nasıl yazılır?](/blog/urun-aciklamasi-nasil-yazilir-kopya-metinden-kacinma/)).
- **Görsel:** Beyaz ya da sade zeminli, net, ürünü tam gösteren ana görsel; ek görseller için ek alanları kullanın.
- **Tanımlayıcılar:** GTIN’i yalnızca doğruysa gönderin.
- **Kategori ve ürün türü:** Ürünün ne olduğunu sınıflandıran alanları doldurun.

## Sorunları nerede görürsünüz?

Google, eklediğiniz ürün ayrıntılarıyla ilgili sorunları Merchant Center’daki “Ürünler” sayfasında yer alan “İlgilenilmesi gerekiyor” sekmesinden görebileceğinizi belirtir. Düzenli bakılacaklar:

1. Onaylanmayan ürünler ve nedenleri.
2. Sınırlı görünürlük uyarıları (eksik tanımlayıcı, küçük görsel).
3. Fiyat ve stok uyuşmazlıkları.
4. Hesap düzeyindeki uyarılar (politika, iade, kargo).

Sonuçları iki yerden izleyin: Merchant Center’ın performans verisi (ücretsiz listelemelerden gelen tıklamalar) ve sitenizdeki analitik. Ürün sayfalarının normal arama performansı için Search Console’u kullanmaya devam edin.

## Kimler için öncelikli?

- Kendi sitesinde satış yapan, fiyatı açık, stoklu ürünü olan mağazalar.
- Üretici barkodu (GTIN) olan markalı ürün satanlar.
- Fiziksel mağazası olup ürünlerini yerel aramalarda göstermek isteyenler.

Fiyat göstermeyen toptancılar, teklif usulü çalışanlar ve hizmet işletmeleri için ücretsiz listelemeler uygun bir kanal değildir; onlar için ürün sayfası SEO’su ayrı ele alınır ([fiyatsız ürün sayfası](/blog/toptan-satis-sitesinde-fiyatsiz-urun-sayfasi-hazirlamak/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir bornoz üreticisi kendi çevrimiçi mağazasını açıyor ve ürünlerini Merchant Center’a bağlıyor. Ürünlerin yarısı onaylanmıyor.

- **Teşhis:** Ana görsellerin üzerinde “%30 indirim” damgası var; fiyat sayfaya betikle sonradan yükleniyor; renk varyantları tek ürün olarak gönderilmiş.
- **Düzeltme:** Damgasız ana görseller yükleniyor; fiyat ve stok HTML’de sunuluyor ve yapılandırılmış veriye ekleniyor; her renk ayrı varyant olarak, ortak öğe grubu koduyla gönderiliyor.
- **İzleme:** “İlgilenilmesi gerekiyor” sekmesi haftalık kontrol ediliyor; ücretsiz listeleme tıklamaları aylık rapora ekleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Ücretsiz listelemenin açık olmasını yeterli sanmak.**
2. **Görselin üzerine kampanya yazısı ve damga koymak.**
3. **Verideki fiyatı ve stoğu sayfayla eşitlememek.**
4. **Bağlantıyı kategori ya da ana sayfaya vermek.**
5. **Uydurma GTIN göndermek.**
6. **“İlgilenilmesi gerekiyor” sekmesine hiç bakmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- ürün sayfalarınızı Merchant Center koşullarına göre denetleriz,
- fiyat, stok ve görsel bilgisinin veri ile sayfa arasında tutarlı olmasını sağlarız,
- ürün yapılandırılmış verisini kurar ve test ederiz,
- onaylanmayan ürünlerin nedenlerini sıraya koyup düzeltiriz.

Ürün verisi denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Ücretsiz listelemeler gerçekten ücretsiz mi?

Evet; Google bunları ürünlerinizi ücretsiz göstermenin yöntemlerinden biri olarak tanımlar. Ücretli reklamlardan ayrıdır.

### Ücretsiz listeleme açıksa ürünlerim kesin gösterilir mi?

Hayır. Durum yalnızca gösterilme iznini denetler; gösterim garanti değildir.

### Hangi özellikler zorunlu?

Tüm ürünler için kimlik, başlık, bağlantı, görsel, fiyat, açıklama ve stok durumu; ürüne göre marka, GTIN ya da MPN ve giyimde renk, beden gibi alanlar.

### Ürünüm neden onaylanmadı?

Merchant Center’da Ürünler sayfasındaki “İlgilenilmesi gerekiyor” sekmesi nedeni gösterir; sık nedenler görsel, fiyat uyuşmazlığı ve eksik tanımlayıcıdır.

### Hizmet işletmeleri kullanabilir mi?

Ücretsiz listelemeler ürünler içindir; hizmet işletmeleri için Google İşletme Profili ve hizmet sayfaları doğru kanaldır.

## Kaynaklar

- [Google Merchant Center Yardım: Ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)
- [Google Merchant Center Yardım: Ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)
