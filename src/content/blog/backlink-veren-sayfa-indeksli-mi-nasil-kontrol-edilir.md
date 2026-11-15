---
title: "Backlink Veren Sayfa İndeksli mi? Nasıl Kontrol Edilir?"
description: "Size backlink veren sayfa Google’da indeksli mi, nasıl kontrol edilir? site: araması, Search Console bağlantı raporu, noindex ve engel kontrolleri."
date: 2026-11-15
service: backlink-hizmeti
imageAlt: "Bağlantı veren sayfanın dizin durumunu kontrol etme adımları"
---

Size bağlantı veren bir sayfa Google’ın dizininde değilse, o bağlantının arama görünürlüğünüze katkı sağlamasını beklememelisiniz: Google bağlantıyı, bulunduğu sayfayı tarayıp işlediğinde görür. Kontrolün en hızlı yolu sayfanın tam adresini `site:` operatörüyle Google’da aramaktır; daha güvenilir doğrulama için sayfada `noindex` etiketi, robots.txt engeli ve canonical yönü olup olmadığına bakarsınız ve bağlantının Search Console’daki Bağlantılar raporunuzda görünüp görünmediğini izlersiniz. İndeksli olmaması her zaman sorun değildir; yeni sayfalar zamanla dizine girer.

Bu kontrol özellikle bir ajansın ya da satıcının “şu kadar bağlantı kazandırdık” raporunu değerlendirirken işe yarar. Bağlantı denetimi için [backlink hizmetimize](/backlink-hizmeti/) bakabilirsiniz.

## Neden önemli?

Google web’i bağlantıları izleyerek keşfeder; bir bağlantıyı değerlendirebilmesi için önce o bağlantının bulunduğu sayfayı taramış olması gerekir. Bağlantı veren sayfa:

- hiç taranmamışsa,
- taranmış ama dizine alınmamışsa,
- `noindex` ile dizinden çıkarılmışsa,
- robots.txt ile taramaya kapatılmışsa,

Google’ın o bağlantıyı normal bir öneri olarak hesaba katması için bir dayanak yoktur.

İkinci bir anlamı daha vardır: bir sitenin sayfalarının büyük bölümü dizinde değilse, bu o sitenin Google gözündeki niteliği hakkında dolaylı bir bilgidir. Düşük kaliteli, otomatik üretilmiş ya da bağlantı satmak için kurulmuş sitelerde dizine girmeyen sayfa oranı yüksektir.

## Yöntem 1: site: araması

En hızlı kontrol:

1. Google’da arama kutusuna `site:` yazıp hemen ardından sayfanın tam adresini ekleyin: `site:ornekhaber.com/2026/denizli-tekstil-fuari`.
2. Sonuçta o sayfa çıkıyorsa dizindedir.
3. Çıkmıyorsa bir de sayfanın başlığını tırnak içinde arayın; sayfa başka bir adres sürümüyle (ör. `www`’lu, eğik çizgili, parametreli) dizinde olabilir.

Sınırları:

- `site:` araması eksiksiz bir dizin sorgusu değildir; dizindeki her sayfayı göstermeyebilir, gösterdiği sayı tahminidir. “Çıkmadı” sonucu kesin kanıt değil, güçlü işarettir.
- Sayfa çok yeniyse henüz taranmamış olabilir; birkaç hafta sonra yeniden bakın.

Tek tek bakılacak birkaç bağlantı için bu yöntem yeterlidir.

## Yöntem 2: Sayfanın kendisini inceleyin

Dizinde olmayan bir sayfanın nedenini çoğu zaman sayfanın kendisinde bulursunuz.

**a) `noindex` var mı?** Sayfa kaynağında `<meta name="robots" content="noindex">` arayın. Ayrıca yanıt başlıklarında `X-Robots-Tag: noindex` olabilir; tarayıcının Ağ sekmesinden ya da `curl -I` ile bakın ([X-Robots-Tag](/blog/x-robots-tag-nasil-kullanilir/)).

**b) robots.txt engeli var mı?** Sitenin `/robots.txt` dosyasında sayfanın bulunduğu klasör `Disallow` ile kapatılmış mı? Bazı siteler “sponsorlu içerik”, “ilan”, “basın bülteni” klasörlerini taramaya kapatır.

**c) Canonical nereye bakıyor?** Sayfanın canonical etiketi başka bir adresi gösteriyorsa, dizine giren o adrestir. Bülten dağıtım servisleri ve içerik ortaklıklarında sık görülür.

**d) Durum kodu ne?** Sayfa 200 mü dönüyor, yoksa yönleniyor ya da 404 mü veriyor? Yayından kaldırılmış bir yazıdaki bağlantı artık yoktur ([kaybolan backlinkler](/blog/kaybolan-backlinkler-nasil-geri-kazanilir/)).

**e) Bağlantı HTML’de mi?** Sayfa kaynağında sitenize giden `<a href="…">` var mı? Bağlantı yalnızca betikle üretiliyor, bir yönlendirme servisi üzerinden geçiyor ya da tıklama olayına bağlıysa Google onu normal bağlantı olarak izlemeyebilir.

**f) `rel` değeri ne?** Bağlantıda `nofollow`, `sponsored` ya da `ugc` var mı? Google bu özelliklerle işaretlenen bağlantıların genellikle izlenmediğini belirtir ([giden bağlantıları niteleme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)). Reklam ve sponsorluk bağlantılarının bu biçimde işaretlenmesi doğrudur; sorun değil, beklenen durumdur ([dofollow ve nofollow farkı](/blog/dofollow-nofollow-farki-nedir-google-ne-diyor/)).

> **Hizmet almak için iletişime geçin.** Satın alınmış bağlantı olmadan, gerçek içerik ve ilişkilerle ilerleyen bir plan yapalım. [Backlink hizmetimizi](/backlink-hizmeti/) inceleyin ya da [bize yazın](/iletisim/).

## Yöntem 3: Search Console Bağlantılar raporu

Kendi sitenizin Search Console hesabındaki Bağlantılar raporu, Google’ın sitenize verildiğini gördüğü bağlantıları listeler: en çok bağlantı veren siteler ve en çok bağlantı alan sayfalarınız ([backlink raporu nasıl okunur?](/blog/backlink-raporu-search-consolda-nasil-okunur/)).

- Bağlantı veren site bu raporda görünüyorsa, Google o sitedeki en az bir bağlantıyı görmüştür.
- Görünmüyorsa iki olasılık vardır: Google henüz görmedi ya da rapor örneklem gösterdiği için listelenmedi. Rapor, tüm bağlantıların eksiksiz dökümü değildir.
- Yeni bir bağlantının rapora düşmesi haftalar alabilir.

Bu rapor, “Google bu bağlantıyı biliyor mu?” sorusuna en yakın resmî cevaptır; üçüncü taraf araçların bağlantı listeleri kendi botlarının gördüğünü gösterir, Google’ın gördüğünü değil.

## Yöntem 4: Toplu kontrol

Ajans raporunda yüz bağlantı varsa tek tek aramak yorucudur. Pratik yol:

1. Bağlantı veren sayfaların adreslerini bir tabloya alın.
2. Her biri için dört sütun açın: durum kodu, `noindex` (var/yok), sitenize giden bağlantı HTML’de (var/yok), `site:` sonucu.
3. İlk üç sütunu bir site tarama aracıyla ya da basit bir betikle toplu doldurabilirsiniz; adres listesini verip sonuç tablosunu alırsınız.
4. `site:` kontrolünü, ilk üç sütunda sorun çıkmayan ve önemli gördüğünüz sayfalar için elle yapın.
5. Sonuçları oranla özetleyin: “100 bağlantının 34’ü dizinde olmayan sayfalarda, 12’si 404.”

Bu oran, bağlantı çalışmasının niteliği hakkında tek bir puandan çok daha fazlasını söyler ([DA ve DR puanları](/blog/da-ve-dr-puanlari-ne-anlama-gelir/)).

## Sonucu nasıl yorumlamalı?

| Durum | Olası anlamı | Ne yapılır? |
|---|---|---|
| Sayfa dizinde, bağlantı HTML’de | Olağan | İzlemeye devam |
| Sayfa yeni, henüz dizinde değil | Zaman gerekli | Birkaç hafta sonra yeniden bakın |
| Sayfa `noindex` | Site bu bölümü bilerek dizin dışı tutuyor | Bağlantıdan arama katkısı beklemeyin |
| Klasör robots.txt ile kapalı | Sponsorlu/ilan bölümü olabilir | Aynı |
| Canonical başka adrese bakıyor | İçerik başka yerde asıl | Asıl sayfada bağlantı var mı bakın |
| Sayfa haftalardır dizinde değil, engel yok | Google sayfayı dizine almaya değer bulmamış olabilir | Kaynağın niteliğini sorgulayın |
| Sitenin çoğu sayfası dizinde değil | Düşük kaliteli ya da cezalı site işareti | Bu kaynaktan uzak durun |
| Sayfa 404 | Bağlantı kayboldu | Gerçek bir ilişkiyse yayıncıya yazın |

İki uyarı:

- **Dizinde olmak kalite kanıtı değildir.** Dizindeki bir bağlantı çiftliği sayfası hâlâ bağlantı çiftliğidir. Dizin kontrolü bir alt eşiktir; asıl değerlendirme sitenin gerçekliği ve konu uyumudur ([backlink kalitesi](/blog/backlink-kalitesi-nasil-degerlendirilir/)).
- **Dizinde olmayan bağlantı da değersiz olmayabilir.** Gerçek bir sitedeki, okurun tıkladığı bir bağlantı size ziyaretçi ve müşteri getirir; bu, arama katkısından bağımsız bir değerdir.

## Yapılmaması gerekenler

Bağlantı veren sayfa dizinde değil diye “dizine sokma” yöntemlerine başvurmayın:

- **“İndeksleme servisi” satın almak.** Bu servisler sayfalara toplu spam bağlantı ya da otomatik sinyal göndererek tarama tetiklemeye çalışır; sitenizi spam ağlarıyla ilişkilendirir.
- **Bağlantı veren sayfaya ikinci katman bağlantı kurmak**.
- **Başkasının sayfası için dizine ekleme isteği aramak.** Search Console’daki istek yalnızca sahibi olduğunuz mülkler içindir.

Sayfa gerçek bir sitedeyse ve dizinde olmaması teknik bir hatadan (yanlışlıkla `noindex`, engelli klasör) kaynaklanıyorsa yapılacak tek doğru şey, yayıncıya nazikçe haber vermektir. Karar onundur.

## Satın alınmış bağlantılar ve dizin

Bağlantı satan siteler çoğu zaman satış yazılarını ayrı bir klasörde toplar; Google bu sayfaları dizine almayabilir ya da site sahibi kendisi `noindex` koyar. Müşteriye sunulan raporda bağlantı “yayında” görünür, ama Google’da yoktur. Yani satın alınan bağlantı çoğu zaman iki kez kayıptır: politika riski taşır ve işe yaramaz ([backlink satın almanın riskleri](/blog/backlink-satin-almak-riskleri/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mermer firmasına ajans, üç ayda “45 tanıtım yazısı bağlantısı” raporluyor.

- **Kontrol:** 45 adres tabloya alınıyor. 19’u `site:` aramasında çıkmıyor; bunların 11’inde sayfa kaynağında `noindex` var, 5’inin klasörü robots.txt ile kapalı. 6 adres 404 veriyor. Kalan 20 sayfanın çoğu aynı üç sitede, yüzlerce ilgisiz firmaya bağlantı veren yazılarla yan yana.
- **Sonuç:** Raporlanan 45 bağlantının Google’ın görebildiği kısmı yarıdan az ve nitelikleri düşük.
- **Karar:** Tanıtım yazısı satın alımı durduruluyor; fuar katılımcı sayfaları, sektör derneği üyeliği ve proje referanslarıyla gerçek bağlantılara yöneliniyor. Raporlarda her bağlantı için dizin durumu sütunu isteniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Raporda “yayında” yazan bağlantıyı Google’ın gördüğünü varsaymak.**
2. **Yalnızca üçüncü taraf araçlardaki bağlantı listesine güvenmek.**
3. **`noindex` ve robots.txt kontrolünü atlamak.**
4. **Yeni sayfayı ertesi gün “indekslenmedi” diye değerlendirmek.**
5. **Dizinde olmayı kalite kanıtı saymak.**
6. **İndeksleme servisi satın almak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Backlink hizmetimizde](/backlink-hizmeti/):

- mevcut bağlantılarınızın dizin, engel ve durum kodu kontrolünü toplu yaparız,
- ajans ya da satıcı raporlarını bu ölçütlerle denetleriz,
- kendi kazandırdığımız her bağlantıyı adresi ve dizin durumuyla raporlarız,
- satın alınmış bağlantı ve indeksleme hilesi kullanmayız.

Bağlantı denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Satın alınmış bağlantı olmadan, gerçek içerik ve ilişkilerle ilerleyen bir plan yapalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [backlink hizmeti sayfamızda](/backlink-hizmeti/) yazılı.

## Sık sorulan sorular

### Bağlantı veren sayfanın indeksli olup olmadığını nasıl anlarım?

Sayfanın tam adresini `site:` operatörüyle Google’da arayın; ayrıca sayfada `noindex` ve robots.txt engeli olup olmadığına bakın.

### İndeksli olmayan sayfadaki bağlantı işe yarar mı?

Arama görünürlüğüne katkısını beklemeyin; ama gerçek bir sitedeyse size ziyaretçi getirebilir.

### Yeni yayınlanan yazı neden dizinde değil?

Taranması ve işlenmesi zaman alır; birkaç hafta sonra yeniden kontrol edin.

### Search Console’da bağlantım görünmüyor, neden?

Google henüz görmemiş olabilir ya da rapor örneklem gösterdiği için listelenmemiştir.

### Bağlantı veren sayfayı dizine sokmak için bir şey yapabilir miyim?

Başkasının sayfası için hayır. İndeksleme servislerinden uzak durun; teknik bir hata varsa yayıncıya haber verin.

## Kaynaklar

- [Google Arama Merkezi: Giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Google Arama Merkezi: noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
