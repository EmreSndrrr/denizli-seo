---
title: "GTIN, MPN ve Marka Bilgileri Ürün Feed’ine Nasıl Eklenir?"
description: "GTIN, MPN ve marka bilgileri ürün feed’ine nasıl eklenir? Hangi ürün için hangisi gerekli, GTIN biçimi ve kontrol basamağı, barkodsuz ürünler ve hatalar."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ürün ambalajındaki barkod ile feed’deki GTIN, MPN ve marka alanları"
---

GTIN, MPN ve marka, bir ürünün “hangi ürün” olduğunu platforma kesin biçimde söyleyen üç tanımlayıcıdır. Kural kısadır: üreticinin GTIN (barkod numarası) atadığı her ürün için GTIN’i gönderin; GTIN’i olmayan ürünler için üretici parça numarasını (MPN) gönderin; açıkça bir markası ya da üreticisi olan her ürün için markayı yazın. GTIN’i yalnızca doğru olduğundan eminseniz paylaşın; tahmini ya da uydurma numara göndermek, hiç göndermemekten kötüdür.

Tanımlayıcılar doğru olduğunda Google ürününüzü aynı ürünü arayan sorgularla daha iyi eşleştirir. Ürün verisi denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Üç tanımlayıcı ne anlama gelir?

- **GTIN (Global Trade Item Number):** Ürün ambalajındaki barkodun altında yazan numara. Türkiye ve Avrupa’da çoğunlukla 13 haneli EAN biçimindedir. Üretici tarafından, yetkili kuruluş (GS1) üzerinden alınır.
- **MPN (Manufacturer Part Number):** Üreticinin o ürüne ya da parçaya verdiği kendi numarası. Harf ve rakamlardan oluşur; katalogda, etikette ya da ürünün üzerinde yazar.
- **Marka:** Ürünün tüketicilerce tanınan marka adı. Satıcının (mağazanın) adı değil, üreticinin ya da markanın adıdır.

Google’ın ücretsiz listelemeler tablosuna göre ([ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)):

| Özellik | Ne zaman zorunlu? |
|---|---|
| Marka `[brand]` | Açıkça ilişkilendirilmiş bir markası ya da üreticisi olan her ürün |
| GTIN `[gtin]` | Üretici tarafından GTIN atanmış tüm ürünler |
| MPN `[mpn]` | GTIN atanmamış tüm ürünler |

Belge iki alan için de aynı gerekçeyi verir: ürün bilgilerinizi en alakalı sorgularla eşleştirmek.

## GTIN ne zaman ve nasıl gönderilir?

Google’ın GTIN sayfası şunları söyler ([GTIN özelliği](https://support.google.com/merchants/answer/6324461?hl=tr)):

- Üretici tarafından GTIN atanmış tüm ürünler için önerilir; ideal olarak MPN ile birlikte sağlanır.
- **GTIN’i yalnızca doğru olduğundan eminseniz paylaşın.** Emin değilseniz paylaşmayın; tahmini ya da gerçek olmayan bir değer göndermeyin.
- GTIN’i eksik ya da yanlış olan ürünlerin görünürlüğü sınırlı olabilir; GTIN eksik olduğunda ürün eşleşmesi doğru olmayabilir.

### Kabul edilen numara türleri

- **EAN (Avrupa’da / GTIN-13):** 13 haneli.
- **UPC (Kuzey Amerika’da / GTIN-12):** 12 haneli. 8 haneli UPC-E kodları 12 haneye dönüştürülmelidir.
- **JAN (Japonya’da):** 8 ya da 13 haneli.
- **ISBN (kitaplar):** 13 haneli. ISBN-10 değerleri ISBN-13’e dönüştürülmelidir; ikisi de varsa yalnızca 13 haneli kullanılır.
- **ITF-14 (çoklu ambalajlar / GTIN-14):** 14 haneli.

### Biçim

- Alan adı `gtin`; tür sayı. Boşluk ve tire kabul edilir ama yok sayılır.
- Hane sayısı 8, 12, 13 ya da 14 olmalıdır.
- Metin feed’inde yalnızca numarayı yazın: `3234567890126`. XML’de `<g:gtin>3234567890126</g:gtin>`.

### Minimum koşullar

1. **Kontrol basamağı doğru olmalı.** GTIN’in son hanesi, diğer hanelerden hesaplanan kontrol basamağıdır. Google, GS1’in kontrol basamağı hesaplayıcısıyla doğrulamanızı ister. Bir haneyi yanlış yazdığınızda numara geçersiz olur.
2. **Kısıtlanmış aralıklardan numara göndermeyin.** Google’a göre kısıtlanmış aralıklar 02, 04 ya da 2 ön ekiyle başlar. Bu aralıklar mağaza içi kullanım içindir; marketlerin tartılı ürünlere ya da kendi etiketlerine bastığı barkodlar çoğunlukla buradadır ve küresel ürün kimliği sayılmaz.
3. **Alakalı diğer tanımlayıcıları da gönderin.** Marka ve MPN’i de göndermeniz gerekebilir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## MPN ne zaman gönderilir?

Ürün verileri spesifikasyonuna göre MPN, yalnızca ürünün üretici tarafından atanan bir GTIN’i yoksa zorunludur; diğer ürünler için isteğe bağlıdır. Söz dizimi en fazla 70 alfanümerik karakterdir ve yalnızca **üretici tarafından atanan** MPN’ler gönderilmelidir ([ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)).

Uygulamada:

- Üreticinin kataloğunda, kutusunda ya da ürün etiketinde “model no”, “parça no”, “ürün kodu” olarak geçen değer MPN’dir.
- Kendi mağazanızın stok kodu (SKU) MPN değildir. Stok kodunu `id` alanında kullanın ([ürün feed’i nasıl hazırlanır?](/blog/e-ticaret-urun-feedi-nasil-hazirlanir/)).
- Hem GTIN hem MPN biliyorsanız ikisini de gönderin.
- Renk ya da beden varyantlarının her birinin MPN’i farklıysa varyant satırına kendi MPN’ini yazın.

## Marka nasıl yazılır?

Spesifikasyona göre marka, film, kitap ve müzik kaydı markaları dışında tüm yeni ürünler için zorunludur; en fazla 70 karakterdir ve ürünün tüketiciler tarafından genellikle tanınan marka adı girilmelidir.

- **Başkasının ürününü satıyorsanız:** Üreticinin markasını yazın, mağazanızın adını değil.
- **Kendi ürettiğiniz ürünü satıyorsanız:** Kendi markanızı yazın. Denizli’de kendi atölyesinde havlu üreten bir firma için marka, firmanın ürün markasıdır.
- **Tutarlı yazın:** “Örnek Tekstil”, “ÖRNEK”, “Ornek Tekstil A.Ş.” üç ayrı marka gibi görünür. Tek bir yazım seçin ve tüm ürünlerde onu kullanın.
- **Markasız ürün:** Gerçekten markası olmayan (özel yapım, el işi, markasız dökme) üründe marka uydurmayın.

Ürün sayfasında ve yapılandırılmış veride de aynı marka yazımı kullanılmalıdır ([marka sayfaları](/blog/e-ticaret-sitelerinde-marka-sayfalari-nasil-hazirlanir/)).

## Barkodu olmayan ürünler

Her ürünün GTIN’i yoktur ve olmak zorunda değildir:

- **Kendi ürettiğiniz ürünler:** GS1’den barkod almadıysanız GTIN’iniz yoktur. Marka ve (varsa) kendi model numaranızı MPN olarak gönderin. Ürünleri zincir mağazalara ya da pazaryerlerine de satacaksanız resmî barkod almak ayrıca işinize yarar.
- **Özel yapım ve el işi ürünler:** Kişiye özel mobilya, el yapımı takı, sipariş üzerine üretilen ürünler.
- **Antika ve ikinci el benzersiz ürünler.**
- **Yedek parça ve aksesuarlar:** Bazılarında yalnızca MPN bulunur.

Bu ürünlerde kural: **GTIN alanını boş bırakın.** Sıfır yazmayın, başka bir ürünün barkodunu kopyalamayın, internetten “barkod üretici” ile numara türetmeyin. Merchant Center’da tanımlayıcısı olmayan ürünleri bildirmenin yolu, altyapınızın ve hesabınızın güncel arayüzünde değişebilir; hesabınızdaki ürün tanılama uyarılarını izleyin.

## Paket ve çoklu ambalaj

- **Çoklu ambalaj (multipack):** Aynı ürünün birden fazlasını tek ürün olarak satıyorsanız (ör. “6’lı havlu seti”, hepsi aynı) bunu çoklu ambalaj alanıyla belirtin. Üreticinin o çoklu ambalaj için ayrı bir GTIN’i varsa onu, yoksa tekil ürünün GTIN’ini çoklu ambalaj bilgisiyle birlikte gönderin.
- **Paket (bundle):** Farklı ürünleri kendi oluşturduğunuz bir set olarak satıyorsanız (ör. bornoz + terlik + havlu) paket alanını işaretleyin ve ana ürünün tanımlayıcılarını kullanın ([ürün paketleri için ayrı sayfa](/blog/urun-paketleri-icin-ayri-sayfa-acilmali-mi/)).

Koli satışında fiyat da toplam olarak gönderilmelidir ([fiyat uyuşmazlığı](/blog/merchant-centerda-fiyat-uyusmazligi-nasil-arastirilir/)).

## GTIN’i nereden bulursunuz?

1. **Ürün ambalajı:** Barkodun altındaki rakamlar.
2. **Üretici ya da distribütör:** Ürün listesi (Excel) çoğunlukla barkod sütunu içerir; toplu almak için en hızlı yol budur.
3. **Fatura ve irsaliye:** Bazı tedarikçiler barkodu belgeye yazar.
4. **Kendi kayıtlarınız:** Mağazada barkod okuyucu kullanıyorsanız stok programınızda zaten vardır.

Başka bir satıcının sitesinden kopyalamak risklidir; yanlış varyantın barkodunu alabilirsiniz. Renk ve beden değiştikçe GTIN de değişir.

## Sitedeki yapılandırılmış veriye de ekleyin

Google, GTIN alanının schema.org karşılıklarını belirtir: `Product.gtin8`, `gtin12`, `gtin13`, `gtin14` ve `isbn`. Ürün sayfanızdaki `Product` işaretlemesine marka, GTIN ve MPN’i eklemek, sayfa ile feed’in aynı ürünü anlattığını doğrular. Değerler feed’dekiyle birebir aynı olmalıdır ([yapılandırılmış veri rehberi](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/)).

Ürün sayfasında barkodu ve model numarasını görünür biçimde yazmak da yararlıdır: bazı alıcılar doğrudan model numarasıyla ya da barkodla arar.

## Sık görülen hata uyarıları

Google’ın GTIN sayfası dört ayrı sorun türüne bağlantı verir: hatalı GTIN, geçersiz değer, kısıtlanmış GTIN ve desteklenmeyen GTIN. Karşılıkları:

| Uyarı | Olası neden | Çözüm |
|---|---|---|
| Geçersiz değer | Hane sayısı yanlış, kontrol basamağı tutmuyor, alanda harf var | Numarayı ambalajdan yeniden okuyun |
| Hatalı GTIN | Numara geçerli ama başka bir ürüne ait | Doğru varyantın barkodunu bulun |
| Kısıtlanmış GTIN | 02, 04 ya da 2 ile başlayan mağaza içi numara | Alanı boş bırakın; MPN ve marka gönderin |
| Desteklenmeyen GTIN | Desteklenmeyen biçim | Biçimi dönüştürün ya da alanı boş bırakın |

Elektronik tablodan aktarımda sık yaşanan iki teknik sorun: baştaki sıfırın düşmesi (hücreyi metin olarak biçimlendirin) ve uzun sayının bilimsel gösterime dönmesi (`8,69E+12`).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir hırdavat mağazası 2.000 ürünü Merchant Center’a yüklüyor; yarısında “sınırlı görünürlük” uyarısı çıkıyor.

- **Teşhis:** GTIN alanı boş; marka alanına her üründe mağazanın adı yazılmış; MPN yerine mağazanın stok kodu gönderilmiş.
- **Düzeltme:** Distribütörlerden barkodlu ürün listeleri alınıp stok koduyla eşleştiriliyor; marka alanı üretici markalarıyla düzeltiliyor; GTIN’i olmayan vida, cıvata gibi dökme ürünlerde alan boş bırakılıp üretici parça numarası giriliyor.
- **Kontrol:** Elektronik tabloda barkod sütunu metin olarak biçimlendiriliyor; kontrol basamakları toplu doğrulanıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Uydurma ya da başka ürüne ait GTIN göndermek.**
2. **Marka alanına mağaza adını yazmak.**
3. **Stok kodunu MPN olarak göndermek.**
4. **Mağaza içi (2 ile başlayan) barkodu GTIN sanmak.**
5. **Varyantların hepsine aynı GTIN’i yazmak.**
6. **Tabloda baştaki sıfırı ve biçimi bozmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- ürün tanımlayıcılarınızı feed ve site düzeyinde denetleriz,
- tedarikçi listelerinden GTIN eşleştirmesi için düzen kurarız,
- `Product` işaretlemesine marka, GTIN ve MPN ekleriz,
- tanılama uyarılarını sıraya koyup gideririz.

Ürün verisi denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### GTIN nedir, nerede bulunur?

Ürün ambalajındaki barkodun altında yazan numaradır; Türkiye’de çoğunlukla 13 hanelidir. Üretici ya da distribütör listelerinde de bulunur.

### Ürünümün barkodu yoksa ne yapmalıyım?

GTIN alanını boş bırakın; markayı ve varsa üretici parça numarasını (MPN) gönderin. Uydurma numara yazmayın.

### MPN ile stok kodu aynı şey mi?

Hayır. MPN üreticinin verdiği numaradır; stok kodu sizin mağazanıza aittir ve `id` alanında kullanılır.

### Marka alanına mağaza adımı yazabilir miyim?

Yalnızca ürün gerçekten sizin markanızsa. Başkasının ürününde üretici markasını yazın.

### Yanlış GTIN göndermek ne olur?

Ürün yanlış eşleşebilir, görünürlüğü sınırlanabilir ya da uyarı alır. Emin değilseniz göndermeyin.

## Kaynaklar

- [Google Merchant Center Yardım: GTIN özelliği](https://support.google.com/merchants/answer/6324461?hl=tr)
- [Google Merchant Center Yardım: Ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)
- [Google Merchant Center Yardım: Ürünler için ücretsiz listelemeler](https://support.google.com/merchants/answer/9199328?hl=tr)
