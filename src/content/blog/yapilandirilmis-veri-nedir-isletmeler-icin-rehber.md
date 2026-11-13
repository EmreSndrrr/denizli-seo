---
title: Yapılandırılmış Veri Nedir? İşletmeler İçin Rehber
description: "Yapılandırılmış veri (schema.org) nedir? JSON-LD, LocalBusiness alanları, Zengin Sonuçlar Testi, doğru kullanım kuralları ve Denizli örneği."
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir işletme kartı ve arkasındaki etiketlenmiş veri alanları"
---

Yapılandırılmış veri, sayfanızdaki bilgiyi (işletme adı, adres, telefon, saatler, ürün, makale gibi) Google’ın anlayacağı standart bir biçimde etiketlemektir. Google en kolay uygulanabilen biçim olarak çoğu durumda JSON-LD’yi önerir. Doğru ve eksiksiz uygulandığında Google bu bilgileri Arama’da zengin sonuç görüntülemek için kullanabilir; bu bir garanti değildir. İşaretlemeyi Zengin Sonuçlar Testi ile doğrulayın; sayfada görünmeyen ya da yanlış bilgiyi işaretlemeyin.

Yapılandırılmış veri, teknik SEO’nun “görünmeyen” kısımlarından biridir: ziyaretçi onu görmez, ama Google bilgiyi daha doğru anlar. Küçük bir işletme için en anlamlı kullanımı yerel işletme bilgisidir: ad, adres, telefon, çalışma saatleri. Bu yazıda yapılandırılmış verinin ne olduğunu, hangi alanların önemli olduğunu ve nasıl doğrulanacağını anlatıyoruz. Profil tarafı için [Google İşletme Profili nasıl doldurulur?](/blog/google-isletme-profili-nasil-doldurulur/) yazımıza da bakabilirsiniz.

## Yapılandırılmış veri nedir?

Google’ın tanımına göre yapılandırılmış veri, sayfanızdaki içeriği Google’a açıklayan standart bir işaretlemedir. Örneğin bir tarif sayfasında başlık, yazar ve diğer ayrıntılar işaretlenmişse Google Arama bunları tarifle ilgili zengin sonuç göstermek için kullanabilir ([yapılandırılmış veri işaretleme](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)). Sözlük schema.org’dur; işaretleme için üç biçim vardır ve Google, uygulaması en kolay olan biçimi (çoğu durumda JSON-LD) kullanmanızı önerir. İşaretlemenin geçerli ve doğru uygulanması koşuluyla üç biçim de Google için aynıdır.

## İşletmeler için neden anlamlı?

Yerel işletme için yapılandırılmış veri, sitenizdeki işletme bilgilerinin makine tarafından okunabilir bir kopyasını sunar. Google’ın LocalBusiness sayfasına göre kullanıcılar Google Arama ya da Haritalar’da işletmeleri aradıklarında, sorguyla eşleşen bir işletmeyle ilgili ayrıntıları içeren bir bilgi paneli belirgin biçimde görüntülenebilir ([yerel işletme yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=tr)). Yani işaretleme, Google’ın işletmenizi anlamasını destekler; ama haritadaki bilgiyi asıl kontrol eden İşletme Profili’dir.

Pratik beklenti: yapılandırılmış veri sıralamayı garanti etmez; Google bilgiyi “kullanabilir”. En önemli kazancı, bilgi tutarlılığı ve doğruluktur.

## Hangi biçim?

| Biçim | Not |
| --- | --- |
| JSON-LD | Google’ın önerdiği, çoğu durumda en kolay biçim; sayfanın `<head>` ya da `<body>` içindeki `<script>` etiketi |
| Microdata, RDFa | Geçerli; ama içerikle iç içe geçtiği için bakımı zordur |

Wix, WordPress ya da Shopify gibi sistemler kullanıyorsanız çoğu zaman eklenti ya da ayar bu işaretlemeyi sizin yerinize ekler; kod yazmanız gerekmez.

## LocalBusiness: hangi alanlar?

Google’ın örneklerinde yerel işletme için şu alanlar öne çıkar:

- **`name`:** anlamı: İşletmenin adı; durum: Gerekli
- **`address`:** anlamı: Posta adresi (sokak, ilçe, il, posta kodu, ülke); durum: Gerekli
- **`telephone`:** anlamı: Telefon numarası; durum: Önerilir
- **`openingHoursSpecification`:** anlamı: Çalışma saatleri; durum: Önerilir
- **`url`, `image`:** anlamı: Web adresi, fotoğraf; durum: Önerilir
- **`geo`:** anlamı: Koordinat; durum: Önerilir
- **`aggregateRating`:** anlamı: Ortalama puan; durum: Yalnızca diğer yerel işletmelere ait yorumları toplayan siteler için önerilir

Son satıra dikkat edin: Google, `aggregateRating` özelliğinin yalnızca diğer yerel işletmeler hakkında yorum alan siteler için önerildiğini belirtir. Kendi işletmenizin yorumlarını işaretlemeden önce Google’ın yorum snippet’i yönergelerini okuyun; uydurma ya da doğrulanamayan puan yazmayın.

## Basit bir JSON-LD örneği

Aşağıdaki örnek hayalî bir işletme içindir; kendi bilgilerinizle değiştirin:

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Örnek Klima Servisi",
  "url": "https://www.ornek-klima.example/",
  "telephone": "+90-000-000-0000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Örnek Sokak No: 1",
    "addressLocality": "Merkezefendi",
    "addressRegion": "Denizli",
    "postalCode": "00000",
    "addressCountry": "TR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
</script>
```

Adres, telefon ve saatler, profilde ve sitenizdeki görünür metinde yazanla birebir aynı olmalı. Tutarsızlık için [ad, adres, telefon tutarlılığı](/blog/ad-adres-telefon-tutarliligi/) yazımıza bakın.

## Doğru kullanım kuralları

1. **Sayfada görünmeyen bilgiyi işaretlemeyin.** İşaretleme, sayfadaki gerçek içeriği yansıtmalı.
2. **Doğru ve güncel bilgi verin.** Eski telefon, eski saat işaretlemede de eskir.
3. **Gerekli alanları doldurun.** Eksik gerekli alan, özelliğin kullanılmasını engelleyebilir.
4. **Uydurma değer yazmayın.** Gerçek olmayan puan, yorum ya da fiyat Google’ın yönergelerine aykırıdır.
5. **Doğrulayın.** Yayınlamadan önce Zengin Sonuçlar Testi’yle deneyin.
6. **Birkaç sayfada deneyin, sonra yayın.** Google’ın önerdiği akış: kodu doğrulayın, birkaç sayfada uygulayın, URL Denetleme ile kontrol edin, site haritası göndererek güncel tutun.

## Nasıl doğrulanır?

Google, Zengin Sonuçlar Testi’nin yapılandırılmış verinizi doğrulamak ve bazı durumlarda Google Arama’daki bir özelliği önizlemek için kullanabileceğiniz bir araç olduğunu söyler. Adımlar:

1. Sayfa adresini ya da kodu teste girin.
2. Hata ve uyarıları okuyun.
3. Eksik gerekli alanları tamamlayın.
4. Sayfayı yayımlayın ve Search Console’da URL Denetleme ile kontrol edin; bkz. [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/).
5. Uygulamadan önce ve sonra sayfaların performansını karşılaştırarak etkisini değerlendirin.

## Hangi sayfalara hangi işaretleme?

- **Ana sayfa / iletişim:** Yerel işletme (LocalBusiness)
- **Blog yazısı:** Makale
- **Ürün sayfası:** Ürün; e-ticarette fiyat ve stok ([e-ticaret SEO](/blog/e-ticaret-seo/))
- **Sık sorulan sorular:** Yalnızca Google’ın güncel yönergelerine uygunsa; yönergeleri kontrol edin

Her işaretleme türünün Google’da kendi yönergeleri vardır ve zaman içinde değişebilir. Kullanmadan önce güncel yönergeye bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyonun WordPress sitesi. Eklenti, ana sayfaya yerel işletme işaretlemesi eklemiş ama telefon ve çalışma saati alanları boş; adres de eski sokak adıyla yazılı.

Düzeltme: eklentide ad, adres, telefon ve saatler profildeki bilgilerle aynı yazılıyor; Zengin Sonuçlar Testi ile doğrulanıyor; iletişim sayfası ve ana sayfa için işaretleme kontrol ediliyor; sonuç Search Console’da izleniyor. Uydurma puan ya da yorum eklenmiyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## İşaretleme ile profil arasındaki fark

- **Nerede?:** yapılandırılmış veri: Sitenizin sayfasında; i̇şletme profili: Google Arama ve Haritalar’da
- **Kim kontrol eder?:** yapılandırılmış veri: Siz, kod ya da eklentiyle; i̇şletme profili: Siz, profil yönetiminden
- **Ne işe yarar?:** yapılandırılmış veri: Sayfayı Google’a açıklar; i̇şletme profili: Haritada ve aramada işletme kartı
- **Birbirini etkiler mi?:** yapılandırılmış veri: Tutarlı bilgi, Google’ın işletmeyi anlamasını destekler; i̇şletme profili: Haritadaki bilgiyi asıl belirleyen

İkisi birbirini tamamlar; biri diğerinin yerine geçmez.

## Sık yapılan yapılandırılmış veri hataları

1. **Eski ya da yanlış telefon, saat ve adres.**
2. **Sayfada olmayan bilgiyi işaretlemek.**
3. **Uydurma puan ve yorum eklemek.**
4. **Eksik gerekli alan.**
5. **Her sayfaya aynı işaretlemeyi koymak.**
6. **Doğrulamadan yayınlamak.**
7. **Eklentiyi kurup çıktıya hiç bakmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Yapılandırılmış veri, doğru kurulduğunda bilgi tutarlılığını güçlendirir; yanlış kurulduğunda gereksiz risk yaratır. [Teknik SEO hizmetimizde](/teknik-seo/):

- işletme, hizmet ve makale bilgilerini schema.org işaretlemesiyle Google’a okunur hale getiririz,
- işaretlemedeki ad, adres, telefon ve saatleri profil ve siteyle tutarlı yaparız,
- Zengin Sonuçlar Testi ve Search Console ile doğrulamayı yaparız,
- uydurma ya da doğrulanamayan veri yazmayız; işi yazılı raporlarız.

Sitenizde yapılandırılmış veri olup olmadığını öğrenmek isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### JSON-LD’yi nereye koymalıyım?

Sayfanın `<head>` ya da `<body>` bölümündeki bir `<script type="application/ld+json">` etiketine koyabilirsiniz. İçerik yönetim sistemlerinde eklenti ya da şablon ayarı bunu sizin için yapar.

### Hizmetlerimi de işaretlemeli miyim?

Google’ın yönergeleri işaretleme türüne göre değişir. Hizmet işaretlemesi için önce güncel yönergeye bakın; yalnızca sayfada gerçekten bulunan bilgiyi işaretleyin.

## Sık sorulan sorular

### Yapılandırılmış veri sıralamamı yükseltir mi?

Doğrudan sıra garantisi yoktur. Google, doğru işaretlemeyi bilgiyi anlamak ve zengin sonuç göstermek için kullanabilir.

### Kodla uğraşmadan ekleyebilir miyim?

İçerik yönetim sistemleri için eklentiler ve ayarlar var; çoğu zaman kod yazmadan ekleyebilirsiniz. Çıktıyı yine de doğrulayın.

### Her sayfaya mı eklemeliyim?

Hayır. Anlamlı olan sayfalara: ana sayfa ve iletişim için yerel işletme, ürün sayfaları için ürün, blog yazıları için makale.

### İşaretleme hatalıysa ne olur?

Google özelliği kullanmayabilir; yanıltıcı ya da uydurma veri ise yönergelere aykırıdır. Doğrulama aracıyla hataları görün ve düzeltin.

## Kaynaklar

- [Google Search Central: yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
- [Google Search Central: yerel işletme (LocalBusiness) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=tr)
- [Google Search Central: ürün snippet’i yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=tr)
