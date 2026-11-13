---
title: "Çok Dilli Web Sitesi Kurmak: Teknik Seçenekler"
description: "Çok dilli web sitesi nasıl kurulur? Dil başına ayrı URL, hreflang, dil seçici, otomatik yönlendirmeden kaçınma ve çeviri kalitesi için Google’ın önerileri."
date: 2026-11-13
service: web-tasarim
imageAlt: "Farklı dil sürümlerini birbirine bağlayan hreflang şeması ve dil seçici"
---

Çok dilli web sitesi kurarken Google’ın temel önerisi şudur: her dil sürümü için ayrı bir URL kullanın, bu sürümleri hreflang ile birbirine bağlayın, kullanıcıyı dile göre otomatik yönlendirmeyin ve görünür bir dil seçici sunun. Çerez ya da tarayıcı ayarıyla içeriği aynı adreste değiştirmek, Google’ın tüm sürümleri bulmasını engelleyebilir.

İhracat yapan bir firma, yabancı turist alan bir otel ya da iki dilli hizmet veren bir klinik için ikinci bir dil eklemek mantıklıdır. Ancak teknik seçimler baştan doğru yapılmazsa sonradan düzeltmek zordur. Bu yazı, çok dilli sitenin adres yapısını, hreflang’i ve içerik kurallarını Google’ın belgelerine dayanarak anlatıyor. Site kurulumu ya da yenileme için [web tasarım hizmetimizi](/web-tasarim/) inceleyebilirsiniz.

## Çok dilli ve çok bölgeli: fark ne?

Google, iki kavramı ayırır ([çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)):

- **Çok dilli site:** Birden fazla dilde içerik sunar. Örneğin Türkçe ve İngilizce sürümü olan bir işletme.
- **Çok bölgeli site:** Farklı ülkelerdeki kullanıcıları açıkça hedefler. Örneğin hem Almanya’ya hem Birleşik Krallık’a gönderim yapan bir üretici.

Bazı siteler her ikisidir. Çoğu Denizli işletmesi için karşılaşılan durum, Türkçe ana sitenin yanına İngilizce (ve belki Almanca ya da Arapça) sürüm eklemektir; yani çok dilli yapı. Bölgesel hedefleme gerekiyorsa aynı kurallar ek önlemlerle uygulanır.

## Dil sürümleri için URL yapısı

Google, dil ayarını çerezler ya da tarayıcı ayarları yerine her dil sürümü için farklı URL’lerin kullanılmasını önerir. Seçenekleriniz:

| Yapı | Örnek | Not |
| --- | --- | --- |
| Alt klasör | `siteniz.com/en/` | Tek alan adı altında yönetimi kolay |
| Alt alan adı | `en.siteniz.com` | Ayrı yönetim gerekebilir |
| Ayrı alan adı | `siteniz.co.uk` | Daha çok bölge hedeflemede kullanılır |

Küçük işletmeler için alt klasör yapısı genellikle en pratik seçenektir: tek alan adı, tek barındırma ve tek bakım. Google URL’de yerelleştirilmiş kelime ya da uluslararası alan adı kullanmanın bir sakıncası olmadığını söyler; yalnızca URL’de UTF-8 kodlaması kullanmanızı önerir.

## hreflang: sürümleri birbirine bağlayın

hreflang, bir sayfanın diğer dil sürümlerini Google’a bildiren etikettir. Google’ın belgesine göre alternatif sayfaları bildirmenin üç yolu vardır: HTML, HTTP başlıkları ve site haritası; üçü Google açısından aynıdır ve birden fazlasını kullanmak ek fayda sağlamaz ([sayfanızın yerelleştirilmiş sürümleri](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)). HTML yönteminde sayfanın `<head>` bölümüne şu biçimde bağlantılar eklersiniz:

- `<link rel="alternate" hreflang="tr" href="https://siteniz.com/" />`
- `<link rel="alternate" hreflang="en" href="https://siteniz.com/en/" />`
- `<link rel="alternate" hreflang="x-default" href="https://siteniz.com/" />`

Kurallar:

1. **Her dil sürümü kendisi dahil tüm sürümleri listelemelidir.**
2. **URL’ler tam nitelikli olmalıdır** (https dahil), göreli adres olmamalıdır.
3. **Bağlantı iki yönlü olmalıdır.** İki sayfa birbirini işaret etmiyorsa etiketler yok sayılır.
4. **`x-default`** eşleşmeyen diller için yedek sayfadır (özellikle dil seçicili ana sayfalar için).

Dikkat: Google, sayfanın dilini hreflang ya da HTML `lang` özelliğiyle değil, algoritmalarla ve görünür içerikten belirler. Yani hreflang dili söylemez; yalnızca sürümlerin birbirinin karşılığı olduğunu bildirir. Uluslararası yapı hakkında daha fazlası için [uluslararası SEO ve hreflang](/blog/uluslararasi-seo-ve-hreflang-ihracatcilar-icin/) yazımıza bakın.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Otomatik yönlendirmeden kaçının

Çok dilli sitelerde sık yapılan hata, kullanıcıyı tarayıcı dili ya da konumuna göre otomatik olarak başka bir dil sürümüne yönlendirmektir. Google’ın önerisi bunun tersidir: kullanıcıları dil sürümleri arasında otomatik yönlendirmekten kaçının; çünkü bu, kullanıcıların ve arama motorlarının sitenin tüm sürümlerini görmesini engelleyebilir. Googlebot genellikle ABD merkezli göründüğü ve istek başlığında `Accept-Language` göndermediği için dinamik içerik ya da yönlendirme, tüm varyasyonlarınızı bulmasını zorlaştırabilir.

Bunun yerine kullanıcıya seçim sunun: sayfanın diğer dil sürümlerine bağlantılar ekleyin; ana sayfada bir dil seçici bulundurun. IP konumuna göre içerik uyarlamak da önerilmez; Google, IP analizinin zor ve güvenilmez olduğunu söyler.

## Dil seçici nasıl olmalı?

İyi bir dil seçici:

- Her sayfada görünür olur (üst menü ya da altbilgi).
- Dilin adını o dilde yazar (“Türkçe”, “English”, “Deutsch”); bayrak simgesi yalnızca dil değil ülke çağrıştırdığı için tek başına kullanılmaz.
- Kullanıcıyı aynı sayfanın diğer dildeki karşılığına götürür; ana sayfaya atmaz.
- Gerçek bir bağlantı (`<a href>`) olarak yazılır; yalnızca betikle çalışan bir menü Google için görünmez kalabilir.

## Çeviri kalitesi ve içerik: sayfalarda tek dil

Google sayfanın dilini görünür içerikten belirler. Bu yüzden her sayfada içerik ve gezinmede tek bir dil kullanın; orijinal metni ve çeviriyi yan yana sunmaktan kaçının. Yalnızca menü ve altbilgiyi çevirip ana içeriği tek dilde bırakmak da sorun yaratır: Google’ın belgesine göre yerelleştirilmiş sürümler yalnızca sayfanın ana içeriği çevrilmeden kalırsa kopya sayılır.

Çeviri için pratik kurallar:

- Ana içeriği (başlık, metin, düğme, form) gerçekten çevirin.
- Makine çevirisini kullanıyorsanız ana dili bilen biri tarafından kontrol ettirin; hatalı çeviri güveni zedeler.
- Hedef ülkenin kültürüne uygun ifadeler kullanın (para birimi, adres biçimi, tarih).
- Tüm sayfaları çevirmek zorunda değilsiniz; en önemli sayfalarla (ana sayfa, hizmetler, iletişim) başlayın ve çevrilmeyen sayfaları hreflang kümesine koymayın.

## Çok dilli sitede iletişim ve yerel bilgi

Yabancı müşteri için iletişim bilgisi önemlidir: dil sürümüne uygun telefon biçimi (ülke kodlu), uluslararası ödeme ve gönderim koşulları, çalışma saatlerinin saat dilimi, form alanlarının uluslararası biçime uygunluğu. Formdan gelen yabancı dilde mesajlara kimin yanıt vereceğini önceden belirleyin; yanıtlanamayan çok dilli form, dil eklemenin değerini düşürür.

## Yayın sonrası: yeni sayfa eklerken ne yapılır?

Çok dilli bir sitede her yeni sayfa ya da silinen sayfa, hreflang kümesini etkiler. Yeni bir hizmet sayfası eklediğinizde karşılığını hazırlayıp iki yönlü bağlantıyı kurun; bir sayfayı sildiğinizde diğer dildeki karşılığından ona verilen hreflang bağlantısını kaldırın. Site haritasında her dilin sayfalarını güncel tutun ve Search Console’da dizine ekleme raporunda dil sürümlerinin ayrı ayrı dizine girip girmediğine bakın. Bakımı unutursanız eşleşmeyen etiketler yok sayılır ve emeğiniz boşa gider. Bu yüzden her yeni sayfayı çeviri ve bağlantı kontrol listesine ekleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de turistlere hizmet veren küçük bir otel, Türkçe sitesine İngilizce sürüm eklemek istiyor.

- **Yapı:** `siteniz.com/` Türkçe, `siteniz.com/en/` İngilizce olarak kuruluyor.
- **hreflang:** Her iki sürüm kendisi dahil birbirini işaret ediyor; `x-default` ana sayfaya veriliyor.
- **Dil seçici:** Üst menüde “Türkçe | English” bağlantıları; her sayfa kendi karşılığına gidiyor; otomatik yönlendirme yok.
- **İçerik:** İngilizce sayfalarda ana içerik gerçekten çevrilmiş ve kontrol edilmiş; kültürel ve pratik bilgiler (ulaşım, kahvaltı saati) yerel müşteriye göre uyarlanmış.

Bu örnek bir sonuç vaadi değildir; sıralama birçok etkene bağlıdır.

## Sık yapılan yedi hata

1. **Dili çerezle değiştirip tek URL kullanmak.**
2. **Kullanıcıyı tarayıcı diline göre otomatik yönlendirmek.**
3. **hreflang’de iki yönlü bağlantıyı unutmak.**
4. **Göreli URL ile hreflang yazmak.**
5. **Yalnızca menüyü çevirip içeriği çevirmemek.**
6. **Orijinal metin ile çeviriyi aynı sayfada yan yana sunmak.**
7. **Çeviriyi kontrol ettirmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Çok dilli yapı baştan doğru kurulduğunda sonradan sorun çıkmaz. [Web tasarım hizmetimizde](/web-tasarim/):

- dil sürümleri için adres yapısını ve hreflang planını hazırlarız,
- dil seçici ve sayfa karşılıklarını yönlendirmesiz kurarız,
- çeviri sürecini ve kontrolünü planlarız,
- yayın öncesi sürümlerin birbirine doğru bağlandığını test eder, sonuçları yazılı raporlarız.

Sitenize yeni bir dil eklemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık sorulan sorular

### Çok dilli site için en iyi adres yapısı nedir?

Google her dil için ayrı URL önerir; küçük işletmeler için alt klasör (`/en/`) çoğu zaman en pratik seçenektir.

### hreflang zorunlu mu?

Zorunlu değil; Google alternatif sürümleri kendisi de bulabilir. Ancak dile ya da bölgeye özel sayfaları açıkça belirtmek genellikle en iyi yoldur.

### HTML lang özelliği dil için yeterli mi?

Google sayfa dilini `lang` özelliğiyle değil görünür içerikten belirler; yine de erişilebilirlik için `lang` özelliğini doğru yazın.

### Otomatik dil yönlendirmesi neden önerilmez?

Kullanıcıların ve arama motorlarının sitenin tüm sürümlerini görmesini engelleyebilir.

### Her sayfayı çevirmek zorunda mıyım?

Hayır. En önemli sayfalarla başlayın ve yalnızca çevrilmiş sayfaları hreflang kümesine ekleyin.

## Kaynaklar

- [Google Arama Merkezi: Çok bölgeli ve çok dilli siteleri yönetme](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)
- [Google Arama Merkezi: Google’a sayfanızın yerelleştirilmiş sürümleri hakkında bilgi verin](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)
