---
title: "Karşılaştırma Tabloları SEO İçeriklerinde Nasıl Hazırlanır?"
description: "SEO içeriklerinde karşılaştırma tablosu nasıl hazırlanır? HTML tablo yapısı, sütun seçimi, mobil görünüm, erişilebilirlik ve dolu hücre kuralları."
date: 2026-11-19
service: icerik-seo
imageAlt: "Üç sütunlu, dolu hücreli bir karşılaştırma tablosu ve altında karar kuralı"
---

SEO içeriğinde karşılaştırma tablosu, okuyucunun iki ya da daha fazla seçeneği aynı ölçütlerle yan yana görmesini sağlayan bir araçtır. İyi hazırlanmış bir tablo kararı kolaylaştırır; kötü hazırlanmış tablo ise yer kaplar, mobilde taşar ve boş hücrelerle güven kaybettirir. Kural basittir: gerçek bir karşılaştırma yoksa tablo yazmayın; varsa 2–4 sütun, dolu hücreler, açık başlıklar ve tablonun altında bir karar kuralı kullanın.

Bu yazıda tabloya ne zaman ihtiyaç olduğunu, nasıl kurulacağını, mobilde ve erişilebilirlikte nelere dikkat edileceğini anlatıyoruz. Genel yazı kurma adımları için [blog yazısı nasıl yazılır?](/blog/blog-yazisi-nasil-yazilir-seo-uyumlu-8-adim/), içerik tarafındaki desteğimiz için [içerik SEO hizmeti](/icerik-seo/) sayfamıza bakabilirsiniz.

## Tablo ne zaman gerekir?

Tablo şu durumlarda doğru araçtır:

- **İki ya da daha fazla seçeneği aynı ölçütlerle karşılaştırırken.** “301 ile 302”, “paket mi aylık mı” gibi.
- **Sayılabilen ya da kısa ifade edilebilen bilgi varsa.** Süre, kapsam, fiyat etkeni, kimin için uygun olduğu.
- **Okuyucu hızlı tarama yapacaksa.** Karar aşamasındaki kullanıcı çoğu zaman uzun paragraf okumak yerine tabloya bakar.

Tablo şu durumlarda gereksizdir: anlatım zaten bir paragraf kadar kısaysa, karşılaştırılacak ölçüt yoksa ya da hücrelere sığmayacak uzunlukta açıklama gerekiyorsa. Bu durumlarda düz yazı ya da liste daha iyidir.

## Hangi sütunlar seçilmeli?

Sütunları okuyucunun karar sorusuna göre belirleyin. “Karşılaştırdığım şeyler arasında neye bakarak seçeceğim?” sorusunun cevapları sütun olur:

| Karar sorusu | Sütun başlığı örneği |
| --- | --- |
| Ne işe yarar? | Kullanım amacı |
| Kime uygun? | Uygun olduğu durum |
| Ne kadar sürer/maliyeti nedir? | Süre ya da maliyet etkeni |
| Riski nedir? | Dikkat edilecek nokta |

Sütun sayısı iki dört arasında olsun. Beşten fazla sütun, özellikle telefonda okunmaz. Satırlar karşılaştırılan seçenekleri, sütunlar ölçütleri göstersin; ya da tersini yapın, ama tutarlı olun.

> **Hizmet almak için iletişime geçin.** İçeriklerinizdeki karşılaştırmaları okunur ve güvenilir hâle birlikte getirelim. [İçerik SEO hizmetimizi](/icerik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hücreler nasıl doldurulur?

Tablo güvenilirliği hücre doluluğundan gelir:

- **Her hücrede bilgi olsun.** Boş hücre ya da “–” karşılaştırmanın eksik olduğunu gösterir.
- **“Evet / Hayır” sütunlarından kaçının.** Tek kelimelik cevaplar bilgi taşımaz; “Evet, ancak yalnızca X durumunda” gibi kısa gerekçe verin.
- **Hücreleri kısa tutun.** Bir hücreye üç dört kelime, en fazla bir cümle yeter. Uzun açıklama gerekiyorsa tablonun altına paragraf yazın.
- **Aynı sütunda aynı biçimi kullanın.** Bir hücrede süre, diğerinde yüzde yazmayın.
- **Uydurma rakam yazmayın.** Kaynağı olmayan istatistik ya da puan tabloya girmez; tablo olması rakamı daha inandırıcı kılmaz.

## HTML’de nasıl kurulmalı?

Tabloyu görsel olarak değil, gerçek HTML tablosu olarak kurun. Bu, hem erişilebilirlik hem de arama motorlarının içeriği anlaması için önemlidir:

- Gerçek `<table>`, `<th>` ve `<td>` kullanın; tablo görselini metin yerine kullanmayın. Görselin içindeki metin hem taranamaz hem de ekran okuyuculara anlamsızdır.
- Sütun başlıklarını `<th>` ile işaretleyin ve mümkünse `scope` özelliğini kullanın.
- Tabloya kısa bir başlık (caption) ekleyin; tablonun neyi karşılaştırdığını söylesin.
- Hücreleri birleştirmekten (colspan, rowspan) kaçının; karmaşık tablolar ekran okuyucuları ve mobili zorlar.
- Markdown ile yazıyorsanız içerik yönetim sisteminizin tabloyu gerçek HTML tablosuna çevirdiğini kontrol edin.

Tabloyu görsel hâline getirirseniz hücrelerdeki bilgi metin olarak okunamaz; alt metinle bunu kısmen telafi edebilirsiniz ama bir tablonun tamamını alt metne sığdırmak pratik değildir.

## Mobilde tablo nasıl görünür?

Telefon ekranında geniş bir tablo yatay taşar. Şu önlemler yardımcı olur:

1. **Sütun sayısını sınırlayın.** İki üç sütun telefonda sığar.
2. **Yatay kaydırma alanı sağlayın.** Tablonun kapsayıcısı yatay kaydırılabilsin; sayfanın tamamı değil, yalnızca tablo kayar.
3. **Metin boyutunu küçültmeyin.** Okunabilirlik, sığması için küçültülmüş yazıdan önemlidir.
4. **Gerçek bir telefonda test edin.** Tarayıcıda küçültme yetmez.

Mobil kullanılabilirlik, Google’ın mobil öncelikli dizine ekleme yaklaşımında önemlidir; sayfanın mobil sürümü dizine eklemede esas alınır ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Mobilde bozulan tablo, içeriğin değerini düşürür.

## Tablonun altına neden karar kuralı yazılır?

Tablo tek başına cevabı vermez; okuyucu “ben hangisini seçmeliyim?” sorusuna cevap bekler. Tablonun hemen altına bir iki cümlelik bir kural yazın: “Hızlı ve geçici bir çözüm gerekiyorsa A; kalıcı taşıma yapıyorsanız B.” Bu hem okuyucuya hem de sonuç sayfasında öne çıkan snippet gibi özetlere uygun bir cevap verir. Karar kuralı olmayan tablo, bilgiyi sıralar ama sonuç vermez.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya imalatçısı “Masif ve MDF yemek masası: hangisi?” yazısına karşılaştırma tablosu ekliyor. İlk taslakta altı sütun var, bazı hücreler boş ve tablo bir görsel olarak eklenmiş.

Düzeltme: tablo gerçek HTML’e çevriliyor; sütunlar üçe indiriliyor (malzeme, uygun olduğu kullanım, dikkat edilecek nokta); her hücre kısa bir cümleyle doluyor; tablonun altına “Çocuklu ve yoğun kullanımlı evlerde şu etkenlere bakın” biçiminde bir karar kuralı yazılıyor. Telefonda test ediliyor ve tablo yatay kaydırılabilir bir alana alınıyor. Bu örnek sonuç vaadi değildir; tablo hazırlama sırasını gösterir.

## Sık yapılan hatalar

1. **Tabloyu görsel olarak eklemek.** Metin taranamaz, erişilemez.
2. **Çok sütun açmak.** Beşten fazla sütun telefonda taşar.
3. **Boş ya da “Evet/Hayır” hücreler bırakmak.** Karşılaştırma eksik kalır.
4. **Tabloyu süs olarak eklemek.** Karşılaştırma yoksa tablo yer kaplar.
5. **Kaynaksız rakam yazmak.** Güveni artırmaz, azaltır.
6. **Karar kuralı yazmamak.** Okuyucu tablodan sonuç çıkaramaz.
7. **Her yazıya tablo koymak.** Yazı başına bir tablo çoğu zaman yeterlidir.

## Hazır tablo şablonları

Sık karşılaşılan üç karşılaştırma için şablon önerileri:

**1. İki seçenek, karar odaklı.**

| Ölçüt | Seçenek A | Seçenek B |
| --- | --- | --- |
| Ne işe yarar? | Kısa cümle | Kısa cümle |
| Kime uygun? | Durum tarifi | Durum tarifi |
| Dikkat edilecek nokta | Risk ya da sınır | Risk ya da sınır |

Altına: “Şu durumda A, şu durumda B.”

**2. Yöntem karşılaştırması.** Satırlar yöntemler, sütunlar “nasıl çalışır”, “ne zaman uygun” ve “sınırı”. Her hücre bir cümle.

**3. Önce–sonra tablosu.** İki sütun: mevcut durum ve önerilen durum; satırlar değişen ayarlar. Hizmet sayfalarında süreç anlatımı için kullanışlıdır.

Her şablonda ilk sütun ölçütü, diğerleri seçenekleri göstersin. Başlık hücreleri kalın olsun ve tabloya kısa bir başlık verin. Sayıları ancak kaynaklarını yazabiliyorsanız kullanın; yoksa niteliksel ifade yazın (“daha kısa”, “daha çok emek ister”). Tablo bittikten sonra kendinize sorun: bu tabloyu kaldırırsam okuyucu bir şey kaybeder mi? Kaybetmiyorsa tabloya ihtiyaç yoktur.

## Denizli SEO bu konuda nasıl yardımcı olur?

[İçerik SEO hizmetimizde](/icerik-seo/):

- içeriklerinizdeki karşılaştırmaları gerçek HTML tablosu, dolu hücreler ve karar kuralıyla yazarız,
- mevcut tablolarınızı mobil ve erişilebilirlik açısından kontrol ederiz,
- kaynaksız rakamları ayıklar, yalnızca doğrulanabilir bilgi yazarız,
- sonuç vaat etmeden, yayınlanan içeriklerin görünürlüğünü Search Console ile izleriz.

İçeriklerinizi birlikte gözden geçirmek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Karşılaştırma içeriklerinizi okunur hâle getirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [içerik SEO sayfamızda](/icerik-seo/) yazılı.

## Sık sorulan sorular

### Tablo SEO’ya yardımcı olur mu?

Tablo kendiliğinden sıralama sağlamaz. Ama karşılaştırmayı okunur kılar, ziyaretçinin karar vermesini kolaylaştırır ve içeriğin değerini artırabilir.

### Her yazıya tablo koymalı mıyım?

Hayır. Gerçek bir karşılaştırma varsa koyun; yoksa liste ya da paragraf yeterlidir.

### Tabloyu resim olarak eklesem olur mu?

Önermiyoruz. Görselin içindeki metin taranamaz ve ekran okuyucuya erişilemez. Gerçek HTML tablosu kullanın.

### Tabloda kaç sütun olmalı?

İki dört arası. Beşten fazlası özellikle telefonda yatay taşar.

### Boş hücre bırakabilir miyim?

Bırakmamak daha iyidir. Bilgi yoksa karşılaştırma ölçütünü tablodan çıkarın ya da bilginin olmadığını kısa bir notla yazın.

## Kaynaklar

- [Google Arama Merkezi: Mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
