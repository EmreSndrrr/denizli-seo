---
title: "Service Schema Hizmet Sayfalarında Nasıl Kullanılır?"
description: "Service schema hizmet sayfalarında nasıl kullanılır? Alanlar, provider ve areaServed örneği, Google’ın zengin sonuç durumu ve doğru beklenti rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir hizmet sayfasındaki bilgilerin Service yapılandırılmış veri alanlarıyla eşleşmesi"
---

Service schema, bir hizmet sayfasındaki bilgileri (hizmetin adı, açıklaması, sağlayıcısı, hizmet verilen bölge gibi) arama motorlarının anlayabileceği biçimde tanımlayan schema.org türüdür. Önemli bir beklenti yönetimi: Google’ın yapılandırılmış veri özellik rehberlerinde Service için ayrı bir zengin sonuç özelliği bulunmaz; yani Service schema eklemek tek başına arama sonucunda özel bir görünüm sağlamaz. Yine de doğru yazılmış Service işaretlemesi, sayfanın neyi anlattığını ve kimin sunduğunu netleştirir; bunu Google’ın sayfayı anlamasına yardımcı bir ek bilgi olarak görmek doğrudur.

Bu yazıda Service schema’nın ne olduğunu, Google’ın durumuna dair doğru beklentiyi, hangi alanların kullanılacağını, örnek bir JSON-LD’yi ve sık yapılan hataları anlatıyoruz. Hizmet sayfalarının içeriği için [hizmet sayfası nasıl yazılır?](/blog/hizmet-sayfasi-nasil-yazilir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Service schema nedir?

Service, schema.org sözlüğünde bir kişinin ya da kuruluşun sunduğu hizmeti tanımlayan türdür. Bir hizmet sayfasında şu soruların cevaplarını makine tarafından okunur biçimde verir: Hizmetin adı nedir? Ne yapar? Kim sunar? Hangi bölgelerde sunulur? Hangi kitleye yöneliktir? Fiyat ya da teklif bilgisi var mı?

Service schema, LocalBusiness ya da Organization gibi türlerle birlikte çalışır: işletmeyi tanımlayan düğüm “sağlayıcı” olur, hizmet ise onun sunduğu şeydir. Böylece sayfada “Merkezefendi’de koltuk yıkama” hizmetinin hangi işletmeye ait olduğu ve hangi bölgeyi kapsadığı net yazılır ([Organization ve LocalBusiness schema arasındaki fark](/blog/organization-ve-localbusiness-schema-farki/)).

## Google Service schema için ne diyor?

Google’ın yapılandırılmış veri rehberlerinde, belirli arama özelliklerine (Makale, Etkinlik, Ürün, Yerel işletme, Yorum snippet’i, İş ilanı gibi) yönelik ayrı belgeler bulunur; Service için ayrı bir özellik rehberi yer almaz. Google’ın yapılandırılmış veri girişi, yapılandırılmış verilerin Google’ın sayfanın içeriğini anlamasına yardımcı olduğunu ve Google’ın Arama’da bu bilgileri zengin sonuçlar göstermek için kullanabileceğini anlatır ([yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)). Ama Service için belgelenmiş bir zengin sonuç yoktur.

Bu yüzden Service schema’dan görsel bir değişiklik ya da sıralama artışı beklemeyin. Faydası, bilgiyi tutarlı ve makine tarafından okunur hâle getirmek ve ileride yeni özelliklerin ya da başka sistemlerin (arama dışı araçlar, yapay zekâ özetleri) bu bilgiyi anlamasını kolaylaştırmaktır. Faydası kanıtlanmamış bir etki için büyük emek harcamak yerine, önce hizmet sayfasının içeriğini güçlendirin.

> **Hizmet almak için iletişime geçin.** Hizmet sayfalarınızı içerik ve yapılandırılmış veri açısından birlikte güçlendirelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi alanlar kullanılır?

Küçük bir işletme için yeterli ve güvenli alanlar:

| Alan | Anlamı | Örnek |
| --- | --- | --- |
| `@type` | Tür | Service |
| `name` | Hizmetin adı | Yerinde koltuk yıkama |
| `description` | Kısa ve doğru açıklama | Evinizde koltuk ve kanepe yıkama hizmeti |
| `serviceType` | Hizmet türü | Temizlik |
| `provider` | Sağlayıcı işletme | İşletmenin LocalBusiness düğümüne referans |
| `areaServed` | Hizmet verilen bölge | Merkezefendi, Pamukkale |
| `url` | Hizmet sayfasının adresi | Sayfa adresi |
| `offers` (isteğe bağlı) | Teklif ve fiyat bilgisi | Yalnızca gerçek ve sayfada görünürse |

Bilgi sayfada görünür olmalıdır: Google’ın genel yönergeleri, yapılandırılmış verilerin başvurduğu içeriğin kullanıcıdan gizlenmemesini ister ([yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)). Sayfada hizmet bölgesi yazmıyorsa `areaServed`’ı yalnızca işaretlemede yazmayın.

## Örnek JSON-LD

Aşağıdaki örnek hayalî bir işletme içindir; kendi bilgilerinizle değiştirin:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yerinde koltuk yıkama",
  "serviceType": "Temizlik",
  "description": "Evinizde koltuk ve kanepe yıkama hizmeti.",
  "url": "https://alanadi.com/hizmetler/yerinde-koltuk-yikama/",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Örnek Temizlik",
    "url": "https://alanadi.com/"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Merkezefendi" },
    { "@type": "AdministrativeArea", "name": "Pamukkale" }
  ]
}
</script>
```

`provider` kısmında, sitenizde zaten tanımlı bir LocalBusiness düğümü varsa onu referans göstermek (aynı `@id` ile) çift kayıt oluşturmaktan daha temizdir. Biçim seçimi için [JSON-LD ile microdata arasındaki fark](/blog/json-ld-ile-microdata-arasindaki-fark/) yazısına bakabilirsiniz.

## Hangi sayfalara eklenmeli?

Her hizmetin kendi sayfasına, o hizmeti anlatan Service işaretlemesi eklenir: örneğin “Koltuk yıkama” sayfasına koltuk yıkama, “Halı yıkama” sayfasına halı yıkama. Ana sayfaya hizmetlerin tamamını tek bir Service olarak yazmak yerine işletmenin kimliğini (LocalBusiness) yazın. Bir hizmet birden çok sayfada anlatılıyorsa işaretlemeyi asıl hizmet sayfasına bağlayın. Hizmet sayfasının SEO için nasıl kurulacağı [hizmet sayfası nasıl yazılır?](/blog/hizmet-sayfasi-nasil-yazilir/) yazısında anlatılır; schema bu içeriği desteklemelidir, yerine geçmemelidir.

## Fiyat ve teklif işaretlemesi

Hizmetin fiyatı kesinse ve sayfada açıkça yazıyorsa `offers` ile işaretleyebilirsiniz. Fiyat değişkense (çoğu hizmette olduğu gibi) uydurma bir fiyat yazmayın; “fiyat teklif ile belirlenir” gibi bir açıklama sayfada yeterlidir ([fiyatlandırma sayfası SEO için nasıl düzenlenir?](/blog/fiyatlandirma-sayfasi-seo-icin-nasil-duzenlenir/)). Görünmeyen ya da yanıltıcı fiyatı işaretlemek genel yönergelere aykırıdır.

## Test ve kontrol

1. **JSON-LD’yi doğrulayın.** Şema doğrulama araçlarıyla sözdizimi ve tür uyumunu kontrol edin; Google’ın Zengin Sonuçlar Testi yalnızca desteklenen özellikleri gösterir; Service için sonuç “desteklenen öğe yok” olabilir, bu sorun değildir.
2. **Sayfa içeriğiyle karşılaştırın.** Ad, açıklama ve bölge sayfada da yazılı mı?
3. **LocalBusiness ile tutarlılığı kontrol edin.** Sağlayıcı bilgileri aynı mı?
4. **Search Console’da hata raporuna bakın.** Yapılandırılmış veri hatası var mı?

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir temizlik firması her hizmet sayfasına Service schema ekletiyor ve arama sonuçlarında bir değişiklik bekliyor. Birkaç hafta sonra görünümde fark yok.

Danışman Google’da Service için ayrı bir zengin sonuç özelliği olmadığını açıklıyor. Firma beklentisini düzeltiyor: işaretleme sayfanın içerik ve sağlayıcı bilgisini netleştirmek için tutuluyor; asıl çalışma hizmet sayfalarının içeriğini (süreç, kapsam, hizmet bölgesi, SSS) güçlendirmeye ve yerel profile yönleniyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Zengin sonuç beklemek.** Service için belgelenmiş bir özellik yok.
2. **Sayfada olmayan bilgiyi işaretlemek.** Genel yönergelere aykırı.
3. **Uydurma fiyat yazmak.** Gerçek ve görünür olmalı.
4. **Her hizmeti ana sayfaya yazmak.** Her hizmetin kendi sayfası olsun.
5. **Çift kayıt oluşturmak.** İşletme için tek ve tutarlı düğüm kullanın.
6. **İçeriği ihmal edip yalnızca schema’ya yatırım yapmak.** İçerik asıl belirleyicidir.

## Schema’dan önce hizmet sayfası için kontrol listesi

Service işaretlemesine zaman ayırmadan önce hizmet sayfasının kendisi şu soruları cevaplıyor mu? Hizmetin ne olduğu ilk paragrafta net mi? Kime ve nerede sunulduğu yazılı mı? Süreç ve süre anlatılıyor mu? Fiyatın neye göre değiştiği açıklanıyor mu? Sık sorulan sorular var mı? İletişim yolu görünür mü? Bu soruların çoğu “hayır” ise önce içeriği tamamlayın; çünkü işaretleme yalnızca sayfada gerçekten yazılı olan bilgiyi tanımlayabilir. İçerik tamamlandıktan sonra Service işaretlemesi, aynı bilgiyi makine okunur hâle getiren ince bir katmandır ve bakım yükü düşüktür.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- hizmet sayfalarınız için gerçek içerikle uyumlu Service işaretlemesini hazırlar, LocalBusiness ile bağlarız,
- işaretlemeyi doğrular, çelişki ve hata kontrolü yaparız,
- beklentiyi doğru kurar, asıl SEO çalışmasını içerik ve yerel profil üzerinde sürdürürüz,
- sonuç vaat etmeden, görünürlüğü Search Console ile izleriz.

Hizmet sayfalarınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Hizmet sayfalarınızı içerik ve yapılandırılmış veriyle güçlendirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Service schema sıralamayı yükseltir mi?

Doğrudan sıralama sinyali olarak sunulmaz. Google’ın Service için belgelenmiş bir zengin sonuç özelliği yoktur.

### Service schema’ya gerek var mı?

Zorunlu değil. Bilgiyi tutarlı ve makine tarafından okunur yapmak için ek bir katmandır; önce sayfanın içeriğine odaklanın.

### Service ile LocalBusiness birlikte kullanılır mı?

Evet. LocalBusiness işletmeyi, Service ise sunduğu hizmeti tanımlar; `provider` ile bağlanırlar.

### Fiyatı işaretlemeli miyim?

Yalnızca kesin ve sayfada görünen bir fiyat varsa. Değişken fiyat için uydurma değer yazmayın.

### Zengin Sonuçlar Testi neden sonuç göstermiyor?

Test yalnızca Google’ın desteklediği özellikleri gösterir. Service için “uygun öğe yok” görmek normaldir; sözdizimi için şema doğrulama araçlarını kullanın.

## Kaynaklar

- [Google Arama Merkezi: Yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
- [Google Arama Merkezi: Yerel işletme (LocalBusiness) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=tr)
