---
title: "Noindex ve Nofollow Meta Etiketleri Arasındaki Fark"
description: "Noindex ve nofollow meta etiketleri arasındaki fark nedir? Biri sayfayı sonuçlardan çıkarır, diğeri bağlantıları izlemez. Kullanım ve örnekler."
date: 2026-11-14
service: teknik-seo
imageAlt: "Meta robots etiketinde noindex ve nofollow değerlerinin etkilerini gösteren şema"
---

`noindex` sayfanın arama sonuçlarında gösterilmesini engeller; `nofollow` ise (meta robots etiketinde) Google’a o sayfadaki bağlantıları izlememesini söyler. Biri “bu sayfayı gösterme”, diğeri “bu sayfadaki bağlantıları izleme” demektir. İkisi birbirinden bağımsızdır; birlikte yazmak istiyorsanız `noindex, nofollow` ya da eş değeri olan `none` kullanılır. Bağlantıya tek tek eklenen `rel="nofollow"` ise bambaşka bir araçtır.

Bu iki kelime SEO’da sık karışır; çünkü hem “noindex” ile “nofollow” benzer yazılır hem de nofollow’un üç ayrı kullanımı vardır (meta etiket, bağlantı özelliği, X-Robots-Tag). Yanlış etiket, ya istemediğiniz sayfayı dizinde bırakır ya da önemli bir sayfayı sonuçlardan çıkarır. Bu yazı farkı, doğru kullanım yerlerini ve sık yapılan hataları anlatıyor. Sitenizde dizine ekleme sorunu varsa [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Meta robots etiketi nedir?

Google’ın belgesine göre robots meta etiketi, tek bir sayfanın dizine nasıl ekleneceğini ve arama sonuçlarında nasıl sunulacağını sayfa düzeyinde denetlemenizi sağlar ([robots meta etiketi teknik özellikleri](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)). Sayfanın `<head>` bölümüne şu biçimde yazılır:

`<meta name="robots" content="noindex">`

- `name="robots"` kuralın tüm arama motoru tarayıcıları için geçerli olduğunu gösterir; yalnızca Google için `googlebot` yazılabilir.
- Hem `name` hem `content` değerleri büyük/küçük harfe duyarlı değildir.
- Birden çok kural virgülle ayrılır ya da ayrı etiketler olarak yazılır.
- Google, meta robots etiketinin `<head>` içinde olmasını zorunlu kılmaz; gövdedeki etikete de uyar.
- Çakışan kurallarda daha kısıtlayıcı olan uygulanır.

Etiketlerin etkili olabilmesi için tarayıcının sayfaya erişebilmesi gerekir; robots.txt ile engellenmiş bir sayfadaki etiket okunamaz.

## noindex ne yapar?

Google’ın tanımı kısadır: “Bu sayfayı veya kaynağı arama sonuçlarında gösterme.” Bu kuralı belirlemezseniz sayfa dizine eklenerek sonuçlarda gösterilebilir. Yani `noindex` bir sayfayı sonuçlardan çıkarmanın doğru yoludur ([noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)). Kullanım alanları:

- teşekkür ve onay sayfaları,
- iç arama sonuçları ve filtre kombinasyonları,
- yönetim ve giriş sayfaları,
- değer katmayan arşivler (etiket, tarih),
- yinelenen ya da test sayfaları.

`noindex` sayfanın taranmasını engellemez; Google sayfayı tarar, etiketi görür ve dizine eklemez. Ayrıntı için [noindex nedir, ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazısına bakın.

## nofollow ne yapar?

Meta robots’taki `nofollow` kuralı için Google’ın tanımı: “Bu sayfadaki bağlantıları izleme.” Bu kuralı belirlemezseniz Google, bağlantı verilen sayfaları keşfetmek için sayfadaki bağlantıları kullanabilir. Yani sayfa dizinde kalır ama içindeki bağlantılar izlenmez. Pratikte nadiren gerekir: bağlantıların tamamına güvenmediğiniz ya da sayfadaki bağlantılardan Google’ın hiçbirini izlemesini istemediğiniz özel durumlarda kullanılır (örneğin kullanıcı içeriğiyle dolu bir sayfa). Çoğu işletme sitesinde sayfa düzeyinde nofollow yerine ihtiyaç duyulan bağlantılara özel bir özellik eklemek yeterlidir.

## none: ikisi birden

Google’a göre `none` kuralı `noindex, nofollow` ile eş değerdir. Bu kısayol, hem sayfayı sonuçlardan çıkarmak hem de içindeki bağlantıları izletmemek istediğinizde kullanılır. Eş değer iki yazım:

- `<meta name="robots" content="noindex, nofollow">`
- `<meta name="robots" content="none">`

Dikkat: bu kural diğer arama motorları tarafından aynı şekilde ele alınmayabilir; Google’ın belgesi de bunu belirtir.

## Üç farklı “nofollow”

“Nofollow” kelimesi üç yerde karşınıza çıkar ve karıştırılmamalıdır:

| Kullanım | Nerede? | Etkisi |
| --- | --- | --- |
| Meta robots `nofollow` | Sayfanın `<head>` bölümünde | O sayfadaki bağlantıların izlenmemesi |
| `rel="nofollow"` | Tek bir bağlantıda (`<a>`) | O bağlantının sayfayla ilişkilendirilmek istenmediğini belirtir |
| `X-Robots-Tag: nofollow` | HTTP yanıt başlığında | Meta robots ile aynı etki; HTML olmayan dosyalarda da kullanılır |

Bağlantı düzeyindeki özellikler Google’ın giden bağlantıları niteleme belgesinde anlatılır: `sponsored` (ücretli yerleşim), `ugc` (kullanıcı içeriği) ve `nofollow` (ilişkilendirmek istemediğiniz durumlar) ([giden bağlantıları nitelendirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)). Bu üçünün farkı için [dofollow ve nofollow farkı nedir?](/blog/dofollow-nofollow-farki-nedir-google-ne-diyor/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## HTML olmayan dosyalar için X-Robots-Tag

PDF, video ve resim gibi HTML olmayan kaynaklara meta etiket ekleyemezsiniz. Google, bunun için `X-Robots-Tag` yanıt başlığını önerir; robots meta etiketinde kullanılabilecek tüm kurallar bu başlıkla da verilebilir. Örnek yanıt: `X-Robots-Tag: noindex`. Başlık, tarayıcı belirterek (`googlebot: nofollow`) ya da birden çok kuralı virgülle birleştirerek de yazılabilir. Sunucu ya da yönetim paneli ayarı gerektirdiği için bu işi genellikle site yöneticisi yapar.

## noindex ile robots.txt birlikte kullanılabilir mi?

Hayır, aynı sayfada birlikte kullanmayın. Google’a göre `noindex`’in çalışması için sayfa robots.txt ile engellenmemeli ve erişilebilir olmalıdır; engellenmiş sayfadaki etiket görülemez ve sayfa başka sitelerin bağlantılarıyla yine de dizine girebilir. Robots.txt taramayı yönlendirir, `noindex` dizinde görünmeyi. Robots.txt ayrıntısı için [robots.txt nedir, nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazısına bakın.

## Hangi durumda hangisi?

Karar için kısa bir akış:

1. **Sayfa arama sonuçlarında görünmesin:** `noindex`.
2. **Sayfa görünsün ama bağlantılarına güvenmiyorum:** Önce tek tek bağlantılara `nofollow`/`ugc`/`sponsored` ekleyin; sayfa düzeyinde `nofollow` son çaredir.
3. **Sayfa görünmesin ve bağlantıları da izlenmesin:** `noindex, nofollow` ya da `none`.
4. **PDF, resim ya da video görünmesin:** `X-Robots-Tag: noindex`.
5. **Bir sayfanın taranmasını hiç istemiyorum:** robots.txt (ama sayfayı dizinden silmez).

Her ikisini de rastgele kullanmak yerine amacı yazın: “bu sayfa neden dizinde olmamalı?” sorusuna net cevap yoksa etiket eklemeyin.

## Sık yapılan hatalar

- **Önemli sayfaya yanlışlıkla noindex:** Site yapım aşamasında açılmış “arama motorlarından gizle” ayarı yayında unutulur. Yayından sonra mutlaka kontrol edin.
- **noindex yerine robots.txt kullanmak:** Sayfa dizinden silinmez.
- **Tüm sayfada nofollow:** İç bağlantıları da izletmeyerek sitenin keşfini zorlaştırır.
- **Meta etiketi çakışması:** Eklenti, tema ve elle eklenen etiketler çelişebilir; kaynak kodda bakın, çakışmada kısıtlayıcı olan uygulanır.
- **Yönetici etiketi eklemek ama kontrol etmemek:** Etiketin sayfada gerçekten göründüğünü doğrulayın.

## Nasıl kontrol edersiniz?

1. Sayfa kaynağında (Ctrl+U) `robots` kelimesini arayın.
2. Tarayıcı geliştirici araçlarında Network sekmesinde yanıt başlıklarına bakın (`X-Robots-Tag`).
3. Search Console URL Denetleme aracıyla Google’ın sayfayı nasıl gördüğünü kontrol edin ([URL Denetleme](https://support.google.com/webmasters/answer/9012289?hl=tr)).
4. Sayfa dizine ekleme raporunda “noindex etiketi nedeniyle dışlandı” gibi nedenlere bakın.

Düzeltme sonrası URL Denetleme ile yeniden tarama isteyin ve birkaç gün sonra tekrar kontrol edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya mağazasının WordPress sitesi yeni yayına girdi ama ana sayfa aramada çıkmıyor; iç arama sonuçları ise dizinde görünüyor.

- **Tespit:** Ana sayfanın kaynağında `noindex` etiketi var; kurulum sırasında “arama motorlarından gizle” seçeneği açık kalmış.
- **Düzeltme:** Seçenek kapatılıyor, etiket kalkıyor; URL Denetleme ile yeniden tarama isteniyor.
- **İç arama:** Arama sonuç sayfalarına `noindex` ekleniyor; robots.txt ile engellenmiyor ki etiket görülebilsin.
- **Kontrol:** Birkaç hafta sayfa dizine ekleme raporu izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **noindex ile robots.txt’yi birlikte kullanmak.**
2. **nofollow’u sayfayı gizleme aracı sanmak.**
3. **Yayına alırken “arama motorlarından gizle” ayarını kapatmayı unutmak.**
4. **Sayfa düzeyinde nofollow ile iç bağlantıları kesmek.**
5. **Etiketi koyup Search Console’da doğrulamamak.**
6. **Etiket çakışmalarını kaynak kodda kontrol etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Dizine ekleme kontrolü küçük görünür ama görünürlüğü doğrudan etkiler. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki noindex, nofollow ve X-Robots-Tag kurallarını envanterler, çakışmaları buluruz,
- yanlışlıkla dışlanan önemli sayfaları ve gereksiz dizine açık sayfaları ayırırız,
- robots.txt, canonical ve noindex arasındaki ilişkiyi doğru kurarız,
- değişiklikleri Search Console’da izler ve yazılı raporlarız.

Sitenizin dizine ekleme ayarlarını incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### noindex ile nofollow arasındaki temel fark nedir?

noindex sayfayı arama sonuçlarından çıkarır; nofollow (meta robots’ta) sayfadaki bağlantıların izlenmemesini söyler. İkisi bağımsızdır.

### none değeri ne demek?

Google’a göre `noindex, nofollow` ile eş değerdir.

### nofollow sayfayı dizinden çıkarır mı?

Hayır. Sayfa dizinde kalabilir; yalnızca içindeki bağlantılar izlenmez.

### PDF’i dizinden nasıl çıkarırım?

HTML olmayan dosyalar için `X-Robots-Tag: noindex` yanıt başlığını kullanın.

### noindex ne kadar sürede etki eder?

Google’ın sayfayı yeniden taraması gerekir; süre siteye göre değişir. URL Denetleme ile yeniden tarama isteyebilirsiniz.

## Kaynaklar

- [Google Arama Merkezi: Robots meta etiketi, data-nosnippet ve X-Robots-Tag teknik özellikleri](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Google Arama Merkezi: Giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
