---
title: "HTML Lang ile Hreflang Arasındaki Fark Nedir?"
description: "HTML lang ile hreflang arasındaki fark nedir? Sayfa dilini belirtme, Google’ın dil algılaması, hreflang kuralları ve çok dilli sitelerde doğru kullanım."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir sayfanın dil özniteliği ile farklı dil sürümlerini birbirine bağlayan hreflang bağlantıları"
---

HTML lang, bir sayfanın içeriğinin hangi dilde yazıldığını bildiren HTML özniteliğidir (örneğin `<html lang="tr">`). Hreflang ise aynı içeriğin farklı dil ya da bölge sürümlerini birbirine bağlayarak arama motoruna “bu sayfanın başka dillerde de karşılığı var” diyen bir ek açıklamadır. İkisi farklı işler görür: lang tek bir sayfanın dilini tanımlar, hreflang sayfalar arasındaki dil ilişkisini kurar. Önemli bir ayrıntı: Google sayfanın dilini belirlemek için bunların hiçbirini kullanmaz; sayfanın görünür içeriğine bakar.

Bu yazıda iki özniteliğin ne işe yaradığını, Google’ın bunları nasıl ele aldığını, hangi sitede hangisine ihtiyaç duyacağınızı ve doğru kurulum için kontrol listesini anlatıyoruz. Çok dilli sitelerin genel yapısı için [çok dilli web sitesi kurmak: teknik seçenekler](/blog/cok-dilli-web-sitesi-kurmak-teknik-secenekler/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## HTML lang nedir ve ne işe yarar?

`lang` özniteliği HTML belgesinin ya da belgenin bir bölümünün dilini belirtir. Türkçe bir sayfada şöyle yazılır:

```html
<html lang="tr">
```

Bu bilgi arama motorlarından çok kullanıcı tarafı için önemlidir: ekran okuyucular doğru telaffuz diline geçer, tarayıcılar yanlış dilde çeviri önerisi sunmaz, yazım denetimi ve yazı tipi seçimi doğru çalışır. Erişilebilirlik açısından lang özniteliği temel bir gerekliliktir ([web sitesi erişilebilirliği: temel kurallar](/blog/web-sitesi-erisilebilirligi-temel-kurallar/)). Sayfanın bir bölümü başka dildeyse o öğeye ayrıca `lang` verebilirsiniz.

## Hreflang nedir ve ne işe yarar?

Hreflang, aynı içeriğin farklı dil ya da bölge varyantlarını Google’a bildirmek için kullanılan ek açıklamadır. Örneğin sitenizin Türkçe ve İngilizce sürümleri varsa, Türkçe sayfada İngilizce karşılığına, İngilizce sayfada da Türkçe karşılığına işaret edersiniz:

```html
<link rel="alternate" hreflang="tr" href="https://alanadi.com/tr/hizmetler/" />
<link rel="alternate" hreflang="en" href="https://alanadi.com/en/services/" />
```

Google’ın yerelleştirilmiş sürümler rehberi, hreflang’in sayfalar arasındaki bu ilişkiyi tanımlamak için kullanıldığını anlatır. Kurallardan biri: her dil sürümü, diğer tüm dil sürümlerinin yanı sıra kendisini de listelemelidir. Dil kodu ISO 639-1 biçiminde, isteğe bağlı olarak bölge kodu ile birlikte yazılır (örneğin `tr`, `en-US`). Dilini ya da bölgesini ayırt edemediğiniz ziyaretçiler için yedek sayfa belirtmek isterseniz `x-default` kullanılabilir ([sayfalarınızın yerelleştirilmiş sürümleri](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)).

> **Hizmet almak için iletişime geçin.** Çok dilli sitenizin dil işaretlerini birlikte denetleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Google sayfa dilini nasıl belirler?

Google’ın çok bölgeli ve çok dilli siteler rehberi bu konuda nettir: Google, sayfanızın dilini belirlemek için sayfanızın görünür içeriğini kullanır; `lang` özelliği gibi kod seviyesinde dil bilgilerini ya da URL’yi kullanmaz ([çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)). Yerelleştirilmiş sürümler rehberi de Google’ın bir sayfanın dilini algılamak için hreflang ya da HTML lang özelliğini kullanmadığını, bunun yerine dili belirlemek için algoritmalar kullandığını belirtir.

Bu, iki önemli sonuç doğurur:

1. **Lang özniteliğini doğru yazmak sayfanın dilini Google’a öğretmez.** Sayfanın metni hangi dildeyse Google onu algılar. Metin Türkçe, lang “en” yazılmışsa Google yine Türkçe olarak görür.
2. **Hreflang dili değil ilişkiyi bildirir.** Dili metinden anlar; hreflang ise “bu sayfanın başka bir dildeki karşılığı şu” bilgisini verir ve doğru kullanıcıya doğru sürümün gösterilmesini destekler.

Yani lang kullanıcı deneyimi ve erişilebilirlik için, hreflang ise çok dilli sitelerde sürümleri bağlamak için gereklidir.

## Karşılaştırma tablosu

| Özellik | HTML lang | Hreflang |
| --- | --- | --- |
| Neyi bildirir? | Sayfanın içerik dili | Sayfanın diğer dil/bölge sürümleri |
| Nerede yazılır? | `<html>` ya da bir öğe | `<head>` içinde link, HTTP başlığı ya da site haritası |
| Google dil algılamasında kullanılır mı? | Hayır | Hayır; dil görünür içerikten belirlenir |
| Ne için gerekir? | Erişilebilirlik, tarayıcı davranışı | Çok dilli ya da çok bölgeli siteler |
| Tek dilli sitede gerekli mi? | Evet, önerilir | Hayır |
| Karşılıklılık kuralı var mı? | Hayır | Evet; sürümler birbirini ve kendini listelemeli |

Tek dilli bir Türkçe işletme sitesinde yalnızca doğru `lang="tr"` yeterlidir; hreflang’e gerek yoktur.

## Hangi durumlarda hreflang gerekir?

Hreflang şu sitelerde anlamlıdır:

- Aynı içeriği birden fazla dilde sunan siteler: Türkçe ve İngilizce kurumsal site gibi ([uluslararası SEO ve hreflang: ihracatçılar için](/blog/uluslararasi-seo-ve-hreflang-ihracatcilar-icin/)).
- Aynı dili farklı bölgelere uyarlayan siteler: Türkiye ve Kuzey Kıbrıs gibi bölgesel içerikler.
- Çeviri yapılmış ürün ve hizmet sayfaları.

Tek dilli sitelerde ya da yalnızca bir sayfa çevrilmişse tüm siteyi hreflang ile işaretlemek zorunlu değildir. Çeviri kalitesi ve yerelleştirme kararı da önemlidir ([SEO için çeviri mi, yerelleştirme mi?](/blog/seo-icin-ceviri-mi-yerellestirme-mi/)).

## Doğru kurulum için kontrol listesi

Şunları tek tek kontrol edin:

- Her sayfada doğru `lang` özniteliği var mı?
- Dil sürümleri farklı adreslerde mi (alt klasör, alt alan adı)? Google, çerez ya da tarayıcı ayarıyla dil değiştirmek yerine her dil sürümü için ayrı URL kullanılmasını önerir.
- Her sürüm, diğer tüm sürümleri ve kendisini hreflang ile listeliyor mu?
- Dil kodları ve bölge kodları geçerli biçimde mi (`tr`, `en`, `en-GB`)?
- Hreflang’de verilen adresler gerçek, 200 dönen ve yönlendirmesiz mi?
- Her sürümün canonical etiketi kendi adresini mi gösteriyor? Başka dildeki sürümü canonical göstermeyin.
- Kullanıcılar için görünür bir dil seçici var mı?
- Kullanıcıyı dil ya da konum tahminine göre otomatik başka sürüme yönlendirmiyor musunuz? Google bunu önermez ([otomatik dil yönlendirmesi SEO’yu nasıl etkiler?](/blog/otomatik-dil-yonlendirmesi-seoyu-nasil-etkiler/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili ihracatçısı Türkçe ve İngilizce iki sürümlü bir site yayınlıyor. Her iki sürümde de `<html lang="tr">` yazılı; İngilizce sayfaların lang’i yanlışlıkla Türkçe bırakılmış. Hreflang etiketleri ise yalnızca Türkçe sayfalarda var, İngilizce sayfalarda yok.

Düzeltme: İngilizce sayfaların `lang` değeri “en” yapılıyor (ekran okuyucu ve tarayıcı doğru dili tanısın diye); her iki sürümde de iki dili ve kendisini listeleyen hreflang etiketleri ekleniyor; `x-default` olarak dil seçim sayfası belirleniyor. Google dili sayfa metninden zaten algıladığı için lang düzeltmesi sıralama için değil kullanıcı deneyimi içindi; hreflang ise doğru sürümün doğru kitleye gösterilmesine yardımcı olmak içindi. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Lang’in Google’a dili öğrettiğini sanmak.** Google dili görünür içerikten belirler.
2. **Karşılıklı olmayan hreflang yazmak.** Sürümler birbirini ve kendisini listelemeli.
3. **Yönlendirmeli ya da 404 veren adresleri hreflang’e koymak.** Adresler çalışan ve 200 dönen sayfalar olmalı.
4. **Her sayfada aynı lang yazmak.** Çok dilli sitede her sürümün dili farklı olmalı.
5. **Yarı çevrilmiş sayfalar yayınlamak.** Aynı sayfada iki dil yan yana olunca Google dili belirlemekte zorlanabilir.
6. **Otomatik dil yönlendirmesi kurmak.** Tüm sürümleri görmeyi engelleyebilir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki `lang` ve hreflang kullanımını denetler, eksik ve karşılıksız etiketleri listeleriz,
- çok dilli yapınız için doğru adres ve işaretleme planını yazarız,
- canonical, yönlendirme ve dil seçici ayarlarını birlikte kontrol ederiz,
- sonuç vaat etmeden, Search Console’da uluslararası hedefleme ve dizin durumunu izleriz.

Çok dilli siteniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Dil işaretlerinizi birlikte doğru kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Google sayfa dilini lang özniteliğinden mi öğrenir?

Hayır. Google, sayfanın görünür içeriğine bakarak dili belirler; lang gibi kod seviyesindeki bilgileri bu amaçla kullanmaz.

### Tek dilli sitede hreflang gerekir mi?

Hayır. Yalnızca farklı dil ya da bölge sürümleriniz varsa gereklidir.

### Lang’i yanlış yazarsam sıralamam düşer mi?

Google dili görünür içerikten belirlediği için sıralamayı doğrudan etkilemesi beklenmez; ama erişilebilirliği ve tarayıcı davranışını bozar.

### Hreflang’i nereye yazmalıyım?

Sayfanın `<head>` bölümüne link etiketi olarak, HTTP başlığına ya da site haritasına yazabilirsiniz. Birini seçin ve tutarlı kullanın.

### x-default ne işe yarar?

Dilini ya da bölgesini ayırt edemediğiniz kullanıcılar için yedek sayfayı belirtir; örneğin dil seçim sayfası.

## Kaynaklar

- [Google Arama Merkezi: Sayfalarınızın yerelleştirilmiş sürümleri](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)
- [Google Arama Merkezi: Çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)
