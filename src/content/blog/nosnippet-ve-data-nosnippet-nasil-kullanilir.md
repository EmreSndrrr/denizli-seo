---
title: "Nosnippet ve Data-Nosnippet Nasıl Kullanılır?"
description: "nosnippet, max-snippet ve data-nosnippet nasıl kullanılır? Arama önizlemesini sayfa ya da metin düzeyinde sınırlama, yapay zekâ özetlerine etkisi."
date: 2026-11-15
service: teknik-seo
imageAlt: "Arama sonucu snippet’ini sınırlayan nosnippet ve data-nosnippet kod örnekleri"
---

`nosnippet`, bir sayfa için arama sonucunda metin snippet’i ve video önizlemesi gösterilmesini tümüyle kapatan robots kuralıdır; `data-nosnippet` ise sayfanın yalnızca belirli bir bölümünün snippet’te kullanılmasını engelleyen HTML özelliğidir. Arada bir de `max-snippet` vardır: snippet’in en fazla kaç karakter olacağını belirler. Çoğu işletme sitesinin bunlara ihtiyacı yoktur; snippet’i kapatmak tıklama oranını düşürebilir. Doğru kullanım alanı dardır: fiyat, yasal uyarı ya da üyelere özel metin gibi önizlemede görünmesini istemediğiniz parçalar.

Bu yazı üç ayarın farkını, söz dizimini ve ne zaman kullanılmaması gerektiğini anlatır. Teknik uygulama için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Snippet nedir, nasıl oluşur?

Google’ın tanımıyla snippet, arama sonucunun açıklama ya da özet kısmıdır. Snippet’ler sayfa içeriğinden otomatik oluşturulur; kullanıcının aramasıyla en alakalı içeriği vurgulamak için tasarlandığından Google farklı aramalar için farklı snippet gösterebilir. Meta açıklama, sayfayı içeriğin diğer bölümlerinden daha iyi tanımlıyorsa kullanılabilir ([snippet’leri kontrol etme](https://developers.google.com/search/docs/appearance/snippet?hl=tr)).

Yani snippet’i “yazamazsınız”; yalnızca etkileyebilir ya da sınırlayabilirsiniz. Etkilemenin yolu iyi bir meta açıklama ve iyi düzenlenmiş içeriktir ([başlık ve meta açıklama](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/)). Sınırlamanın yolu ise aşağıdaki üç ayardır.

## Üç ayar: hangisi ne yapar?

| Ayar | Düzey | Etkisi |
|---|---|---|
| `nosnippet` | Sayfa | Metin snippet’i ve video önizlemesi gösterilmez |
| `max-snippet:[sayı]` | Sayfa | Snippet en fazla belirtilen karakter kadar olur |
| `data-nosnippet` | Metin bölümü | İşaretlenen bölüm snippet’te kullanılmaz |

Üçü de Google’ın robots meta etiketi belgesinde tanımlıdır ([robots meta etiketi, data-nosnippet ve X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)).

## nosnippet

Belgeye göre `nosnippet`: arama sonuçlarında bu sayfaya ait metin snippet’i ya da video önizlemesi gösterme anlamına gelir. Daha iyi bir kullanıcı deneyimi sağladığında statik bir küçük resim (varsa) görünmeye devam edebilir.

```html
<meta name="robots" content="nosnippet">
```

İki önemli ayrıntı:

- Kural tüm arama sonucu biçimlerinde geçerlidir: web arama, Google Görseller, Keşfet, Yapay Zekâ Özetleri ve AI Modu. Google, bu kuralın içeriğin Yapay Zekâ Özetleri ve AI Modu için **doğrudan giriş olarak kullanılmasını da engellediğini** yazar.
- `nosnippet`, `noindex` değildir. Sayfa dizinde kalır ve sonuçlarda başlığıyla görünür; yalnızca açıklama kısmı boş kalır ([noindex ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/)).

## max-snippet

`max-snippet:[sayı]`, metin snippet’i olarak en fazla kaç karakter kullanılacağını belirler. Belgedeki özel değerler:

- `0`: Hiç snippet gösterilmez; `nosnippet` ile eş değerdir.
- `-1`: Sınır yoktur; Google en etkili olacağını belirlediği uzunluğu seçer.

```html
<meta name="robots" content="max-snippet:120">
```

Bu ayar resim ve video önizlemelerini etkilemez. Google’a göre yine tüm sonuç biçimlerinde geçerlidir ve içeriğin ne kadarının Yapay Zekâ Özetleri ile AI Modu için doğrudan giriş olarak kullanılabileceğini de sınırlar. Kuralı hiç belirtmezseniz uzunluğa Google karar verir. Aynı sayfada hem `max-snippet:50` hem `nosnippet` varsa `nosnippet` uygulanır.

Bir istisna vardır: yayıncı içeriği yapılandırılmış veriyle ayrıca sağlıyorsa ya da Google ile lisans sözleşmesi varsa bu sınır o izinli kullanımları kesmez.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## data-nosnippet

`data-nosnippet`, sayfanın tamamını değil, yalnızca işaretlediğiniz metin bölümünü snippet’ten çıkarır. Belgedeki kurallar:

- Yalnızca `span`, `div` ve `section` öğelerinde geçerlidir. Başka bir öğede (`p`, özel etiket) çalışmaz.
- Boole özelliğidir; verdiğiniz değer yok sayılır. `data-nosnippet="false"` yazsanız bile bölüm snippet’ten çıkarılır.
- HTML geçerli olmalı ve etiketler doğru kapatılmalıdır. Kapatılmamış bir `div`, sonrasındaki tüm içeriği kapsar.

```html
<p>Kargo tüm Türkiye’ye ücretsizdir.
  <span data-nosnippet>Kampanya kodu: ABC123</span>
</p>

<div data-nosnippet>
  <p>Bu bölüm arama önizlemesinde gösterilmez.</p>
</div>
```

Google bir uyarı daha ekler: sayfalar dizine eklenmek için genellikle oluşturulur (render), ama oluşturma garanti değildir; `data-nosnippet` ayıklaması oluşturmadan önce ya da sonra yapılabilir. Belirsizliği önlemek için bu özelliği mevcut öğelere JavaScript ile sonradan eklemeyin; HTML kaynağında bulunsun ([JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).

## Kuralların çalışması için ön koşul

Google açıkça belirtir: bu ayarlar yalnızca tarayıcının sayfaya erişimine izin verilirse okunabilir ve uygulanabilir. Sayfayı robots.txt ile taramaya kapattıysanız Google `nosnippet` etiketini göremez. Snippet’i kapatmak isteyip sayfayı robots.txt ile engellemek, birbirini bozan iki karardır ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).

HTML olmayan dosyalarda (PDF gibi) aynı kuralı HTTP başlığıyla verirsiniz: `X-Robots-Tag: nosnippet` ([X-Robots-Tag nasıl kullanılır?](/blog/x-robots-tag-nasil-kullanilir/)).

## Ne zaman kullanılır?

Makul kullanım alanları:

1. **Hızlı değişen bilgi:** Kur, fiyat, stok gibi önizlemede eski kalabilecek satırlar için `data-nosnippet`.
2. **Yasal ve teknik uyarılar:** Çerez metni, sorumluluk reddi gibi, snippet’e girdiğinde sayfayı kötü tanıtan bloklar.
3. **Üyelere ya da abonelere özel içerik:** Önizlemede cevabın tamamının görünmesini istemediğiniz metinler.
4. **Kişisel veri içeren satırlar:** Yorumlardaki ad, telefon gibi alanlar.
5. **Yayıncı kararı:** İçeriğinizin önizlemelerde ve yapay zekâ özetlerinde ne kadar kullanılacağını sınırlamak istiyorsanız `max-snippet` ya da `nosnippet`.

## Ne zaman kullanılmaz?

- **Snippet’i beğenmediğiniz için.** Önce içeriği ve meta açıklamayı düzeltin; kapatmak sonucu daha çekici yapmaz.
- **Tüm siteye `nosnippet` koymak.** Açıklamasız sonuçlar daha az bilgi verir; tıklama oranı düşebilir ve sayfanız yapay zekâ özetlerinde doğrudan giriş olarak kullanılamaz.
- **Gizlilik için.** `nosnippet` metni gizlemez; sayfa yine dizindedir ve herkes açabilir. Gizli kalması gereken içerik için oturum açma ya da `noindex` gerekir.
- **Sıralama için.** Bu ayarlar bir sıralama kolu değildir; yalnızca sunumu sınırlar.

Tıklama oranını artırmak istiyorsanız yön tam tersidir: daha iyi başlık, daha iyi açıklama ([tıklama oranı nasıl artırılır?](/blog/arama-sonuclarinda-tiklama-orani-nasil-artirilir/)).

## Uyguladıktan sonra kontrol

1. Sayfa kaynağında etiketin `<head>` içinde ve tek olduğunu doğrulayın; eklenti ile tema çelişen iki robots etiketi basmasın.
2. URL Denetleme ile sayfayı test edin; Google’ın sayfaya erişebildiğini görün.
3. Yeniden tarama isteyin ve birkaç hafta sonra hedef sorgularda sonucu kontrol edin.
4. Search Console’da sayfanın tıklama oranını önceki dönemle karşılaştırın; düşüş büyükse kararı gözden geçirin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir döviz bürosunun sitesinde arama sonucu açıklamasında günler öncesinin kuru görünüyor; müşteriler telefonda eski kuru soruyor.

- **Teşhis:** Google, snippet’i sayfadaki kur tablosundan üretiyor; önizleme güncel kalmıyor.
- **Düzeltme:** Kur tablosu `<div data-nosnippet>` içine alınıyor; sayfanın üstüne hizmeti anlatan kalıcı bir paragraf ve iyi bir meta açıklama yazılıyor.
- **Kontrol:** Sayfa yeniden taramaya gönderiliyor; birkaç hafta sonra snippet’in kalıcı metinden geldiği doğrulanıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **`nosnippet` ile `noindex`’i karıştırmak.**
2. **`data-nosnippet`’i `p` gibi desteklenmeyen öğeye koymak.**
3. **`data-nosnippet="false"` yazıp etkisiz olacağını sanmak.**
4. **Özelliği JavaScript ile sonradan eklemek.**
5. **Sayfayı robots.txt ile kapatıp etiketin okunmasını beklemek.**
6. **Tüm sitede snippet’i kapatıp tıklama kaybını fark etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki robots etiketlerini ve çakışmaları denetleriz,
- hangi sayfada hangi ayarın gerektiğine birlikte karar veririz,
- `data-nosnippet` işaretlemesini HTML kaynağında doğru öğelere yerleştiririz,
- değişiklik sonrası tıklama oranını izleriz.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### nosnippet sayfayı Google’dan kaldırır mı?

Hayır. Sayfa dizinde kalır; yalnızca metin snippet’i ve video önizlemesi gösterilmez.

### data-nosnippet hangi öğelerde çalışır?

Yalnızca `span`, `div` ve `section` öğelerinde.

### max-snippet:0 ne demek?

Hiç snippet gösterilmez; `nosnippet` ile eş değerdir. `-1` ise sınır olmadığını belirtir.

### Bu ayarlar yapay zekâ özetlerini etkiler mi?

Google’a göre `nosnippet` içeriğin Yapay Zekâ Özetleri ve AI Modu için doğrudan giriş olarak kullanılmasını engeller; `max-snippet` kullanılabilecek miktarı sınırlar.

### Snippet’i kapatmak sıralamamı düşürür mü?

Bu ayarlar sunumu sınırlar; ancak açıklamasız sonuç daha az tıklanabilir. Kararı tıklama oranını izleyerek verin.

## Kaynaklar

- [Google Arama Merkezi: Robots meta etiketi, data-nosnippet ve X-Robots-Tag teknik özellikleri](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)
- [Google Arama Merkezi: Arama sonuçlarındaki snippet’lerinizi kontrol etme](https://developers.google.com/search/docs/appearance/snippet?hl=tr)
