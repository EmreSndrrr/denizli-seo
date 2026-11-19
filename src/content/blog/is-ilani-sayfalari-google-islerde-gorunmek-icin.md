---
title: "İş İlanı Sayfaları Google İşler İçin Nasıl Hazırlanır?"
description: "İş ilanı sayfaları Google’da iş deneyiminde görünmek için nasıl hazırlanır? JobPosting yapılandırılmış verisi, zorunlu alanlar, kaldırma ve hata kontrolü rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir iş ilanı sayfasının yapılandırılmış veri alanlarıyla işaretlenmesi"
---

İş ilanı sayfalarınızın Google’da iş arama deneyiminde görünme şansı kazanması için sayfaya JobPosting yapılandırılmış verisi eklemeniz, ilanın sayfada görünür ve eksiksiz olması, süresi dolan ilanları zamanında kaldırmanız ya da işaretlemeyi çıkarmanız gerekir. Google’ın JobPosting rehberine göre zorunlu alanlar yayın tarihi (`datePosted`), ilan açıklaması (`description`, başlıkla aynı olmayan HTML), işi yayınlayan kuruluş (`hiringOrganization`) ve iş yeri (`jobLocation`) bilgisidir; maaş (`baseSalary`), çalışma türü (`employmentType`) gibi alanlar ise önerilen alanlardır. İşaretleme görünürlüğü garanti etmez; Google yalnızca uygun içerik ve kalite koşullarında ilanları gösterebilir.

Bu yazıda JobPosting verisinin nasıl hazırlanacağını, zorunlu ve önerilen alanları, ilan yayından kalktığında yapılacakları, sık hataları ve ölçümü anlatıyoruz. Genel yapılandırılmış veri için [yapılandırılmış veri nedir?](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/), teknik destek için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz. Bu yazı kariyer sitesi, işe alım ajansı ya da kendi ilanlarını yayınlayan işletmeler içindir.

## Kimler için ve ne işe yarar?

JobPosting yapılandırılmış verisi, ilan sayfasının içeriğini (pozisyon, işveren, konum, tarih, maaş gibi) Google’a makine tarafından okunur biçimde bildirir. Google’ın rehberine göre bu veri, ilanların Google Arama’da iş deneyiminde gösterilmesine yardımcı olabilir. Bu bir sıralama garantisi değil, uygunluk koşuludur: ilan sayfası kurallara uymalı, içerik kullanıcıya doğru ve güncel bilgi sunmalıdır.

JobPosting yalnızca gerçek iş ilanı sayfaları içindir; iş arama rehberi, genel kariyer sayfası ya da “bize katılın” tanıtım metni için kullanılmaz. Rehber, iş ilanının sayfada gerçekten bulunmasını ve işaretlemenin sayfadaki bilgiyle uyuşmasını bekler.

> **Hizmet almak için iletişime geçin.** İlan sayfalarınızın işaretlemesini birlikte kuralım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Zorunlu alanlar

Google’ın JobPosting rehberinde zorunlu olarak belirtilen alanlar şunlardır:

| Alan | Ne anlatır? | Dikkat edilecek nokta |
| --- | --- | --- |
| `datePosted` | İlanın yayınlandığı tarih | ISO 8601 biçiminde |
| `description` | İlanın tam açıklaması (HTML) | Başlıkla aynı olmamalı; görev, nitelik, sorumluluklar; `p`, `ul`, `li`, `br` gibi temel etiketler |
| `hiringOrganization` | İşi yayınlayan kuruluş | Kuruluş adı; ilan anonimse “confidential” gibi gizlilik ifadesi için rehberi kontrol edin |
| `jobLocation` | İşin yapılacağı yer | Adres ve ülke (`addressCountry`) bilgisi |
| `title` | İlanın başlığı | Yalnızca pozisyon adı; maaş, şehir, kampanya ifadesi eklemeyin |

Alan listesi ve değer biçimleri zamanla değişebilir; uygulamadan önce rehberin güncel hâlini açmak gerekir ([JobPosting rehberi](https://developers.google.com/search/docs/appearance/structured-data/job-posting?hl=tr)).

## Önerilen alanlar

Rehber, işaretlemeyi zenginleştiren ve ilanın daha doğru anlaşılmasını sağlayan önerilen alanlar da belirtir:

- **`baseSalary`:** Maaş ya da aralığı, para birimi ve süre birimiyle.
- **`employmentType`:** Tam zamanlı, yarı zamanlı, sözleşmeli gibi rehberdeki değerlerden biri.
- **`validThrough`:** İlanın son geçerlilik tarihi.
- **`directApply`:** Adayın başvuruyu doğrudan sizin sayfanızdan yapıp yapamayacağı.
- **`identifier` ve diğerleri:** İlanı ayırt eden bilgiler.

Önerilen alanları yalnızca sayfada gerçekten bulunan ve doğru olan bilgiler için kullanın. Maaş bilgisi sayfada yoksa işaretlemeye eklemeyin; sayfayla uyuşmayan işaretleme sorun yaratır.

## İşaretleme nasıl eklenir?

1. **Her ilanın kendi adresi olsun.** Her ilan tek bir sayfada, kendi URL’sinde yayınlansın; ilan listeleme sayfasına yığılmış ilanlar işaretlemeye uygun değildir.
2. **JSON-LD kullanın.** Sayfanın `<head>` ya da `<body>` içine `application/ld+json` betiği ekleyin; Google’ın önerdiği biçim JSON-LD’dir.
3. **Alanları sayfadaki bilgiyle eşleştirin.** Başlık, tarih, konum, maaş sayfada görünüyorsa aynı biçimde işaretlenmeli.
4. **İlan açıklamasını eksiksiz verin.** Rehber, açıklamanın başlığın tekrarı olmamasını ve ilanın tamamını içermesini bekler.
5. **Test edin.** Google’ın zengin sonuç testi ve Search Console’daki iş ilanı raporuyla hata ve uyarıları kontrol edin ([yapılandırılmış veri testi](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/)).
6. **Site haritasına ekleyin.** İlan adresleri XML site haritasında güncel tutulsun.

## İlan kapanınca ne yapılmalı?

Bu, yanlış yönetilmesi en kolay adımdır. Rehbere göre süresi dolmuş ya da doldurulmuş ilanı şu yollardan biriyle kaldırmanız gerekir:

- `validThrough` alanında **geçmiş bir tarih** belirtmek,
- sayfayı **404 ya da 410** durum koduyla kaldırmak,
- sayfadan **JobPosting işaretlemesini çıkarmak**.

Gecikmeli kaldırma, Google’ın içerik kurallarına aykırılık sayılabilir ve manuel işleme yol açabilir. Hızlı kaldırma gerektiğinde ilgili bildirim API’si de kullanılabilir (rehberdeki Indexing API açıklamasına bakın). Büyük bir sitede bu süreci elle yönetmek zordur; ilan sistemi kapanış tarihinde otomatik olarak işaretlemeyi güncellemeli ya da sayfayı kaldırmalıdır.

Aynı ilan birden çok adreste yayınlanıyorsa (ör. ajans ve işveren siteleri), rehber kopya ilanlarda canonical kullanmayı öneriyor; her kopyada canonical belirtilmesi gerekir ([canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).

## Sık görülen hatalar

1. **Başlığa maaş, şehir ya da kampanya yazmak.** `title` yalnızca pozisyon adı olmalı.
2. **Açıklamayı başlıkla aynı bırakmak ya da çok kısa yazmak.** Eksik içerik.
3. **Sayfada olmayan bilgiyi işaretlemek.** Maaş ya da konum sayfada görünmüyorsa işaretlenmemeli.
4. **Süresi dolan ilanı kaldırmamak.** İşaretleme ya da sayfa güncel kalmalı.
5. **Listeleme sayfasına birden çok ilan işaretlemek.** Her ilan kendi sayfasında olmalı.
6. **Kuruluş adını yanlış ya da eksik vermek.** `hiringOrganization` doğru olmalı.
7. **Uzaktan çalışma ve konumu karıştırmak.** Uzaktan çalışma için rehberdeki ilgili alanları kontrol edin.

## Örnek bir işaretleme taslağı

Aşağıdaki taslak, alanların nasıl bir arada kullanılacağını gösterir; değerler hayalîdir ve kendi ilanınızdaki bilgilerle değiştirilmelidir. Yayına almadan önce Google’ın güncel rehberindeki biçimlerle karşılaştırın:

```json
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Kalite Kontrol Uzmanı",
  "description": "<p>Üretim hattında kalite kontrol süreçlerini yürütür.</p><ul><li>Numune alma ve raporlama</li><li>Hatalı ürün kayıtlarının tutulması</li></ul>",
  "datePosted": "2026-11-19",
  "validThrough": "2026-12-19T23:59",
  "employmentType": "FULL_TIME",
  "hiringOrganization": { "@type": "Organization", "name": "Örnek Tekstil" },
  "jobLocation": {
    "@type": "Place",
    "address": { "@type": "PostalAddress", "addressLocality": "Denizli", "addressCountry": "TR" }
  }
}
```

Bu taslakta maaş yok; çünkü ilan sayfasında maaş bilgisi yazmıyor. Sayfada görünmeyen bir bilgiyi işaretlemeye eklemek, işaretleme ile sayfa içeriğinin uyuşmaması anlamına gelir.

## Kariyer sayfası ve ilan sayfası arasındaki fark

Kariyer sayfası, işletmenin çalışma kültürünü ve açık pozisyonları tanıtan bir listeleme ya da tanıtım sayfasıdır. İlan sayfası ise tek bir pozisyonun tüm ayrıntısını (görevler, nitelikler, çalışma koşulları, başvuru yolu) veren sayfadır. JobPosting işaretlemesi ilan sayfasına eklenir; kariyer sayfası listeleme olarak ilan sayfalarına bağlantı verir. Bu ayrım, hem kullanıcının tek ilanı doğrudan açabilmesini hem de Google’ın ilanı tek bir adresle ilişkilendirmesini kolaylaştırır. İlan sayfasında başvuru yolunun (form ya da e-posta) açıkça görünmesi de kullanıcı deneyimi açısından önemlidir.

## Ölçüm

- **Search Console iş ilanı raporu (varsa):** Geçerli, uyarılı ve hatalı öğeler görünür.
- **Zengin sonuç testi:** Tek tek sayfa denemesi.
- **Performans raporu:** İş deneyimi görünümü varsa gösterim ve tıklamaları ayrı izleyin.
- **Kaldırma kontrolü:** Kapanan ilanların sayfası ve işaretlemesi düzenli gözden geçirilsin.

Sonuçlar için bir tarih ya da görünme garantisi yoktur; Google uygunluğu ve içerik kalitesini kendi değerlendirir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir tekstil üreticisi kendi sitesinde “Kariyer” sayfasında on ilanı tek bir listede yayınlıyor ve hiç işaretleme yok. İlanlar bittikten sonra da aylarca sitede kalıyor.

Danışman planı kuruyor: her ilan kendi adresine taşınıyor (`/kariyer/kalite-kontrol-uzmani/`), her sayfaya JSON-LD ekleniyor: başlık yalnızca pozisyon adı; açıklama görev, nitelik ve çalışma koşullarını ayrıntılı veriyor; kuruluş ve konum bilgisi dolu; sayfada maaş yazmadığı için maaş alanı işaretlenmiyor. İlan kapanış tarihi sistemde tutuluyor; tarih geçince sayfa kaldırılıyor ve site haritasından çıkarılıyor. Search Console’da hata durumu izleniyor. Bu örnek sonuç vaadi değildir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- ilan sayfalarınızı JobPosting yapılandırılmış verisine uygun kurar, alanları sayfadaki bilgiyle eşleştiririz,
- ilan kapanış ve kaldırma sürecini (işaretleme, durum kodu, site haritası) planlarız,
- Search Console ve zengin sonuç testiyle hata ve uyarıları denetleriz,
- sonuç ya da görünme vaat etmeden düzenli izleriz.

İlan sayfalarınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** İş ilanı sayfalarınızı Google için birlikte hazırlayalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### JobPosting eklersem Google’da görünür müyüm?

Garanti değildir; işaretleme uygunluk koşuludur. İlanın doğru, eksiksiz ve güncel olması gerekir.

### Maaş bilgisi zorunlu mu?

Rehbere göre önerilen alandır; sayfada yoksa işaretlemeye eklemeyin.

### Süresi dolan ilanı nasıl kaldırmalıyım?

Geçmiş bir `validThrough` tarihi vermek, sayfayı 404 ya da 410 ile kaldırmak ya da işaretlemeyi çıkarmak; gecikme manuel işleme neden olabilir.

### Kariyer sayfasına tüm ilanları tek sayfada yazabilir miyim?

İşaretleme için her ilanın kendi sayfası olması gerekir; listeleme sayfasında bağlantılar verilebilir.

### Başlığa şehri yazmalı mıyım?

Hayır; `title` yalnızca pozisyon adı olmalı. Konum için `jobLocation` kullanılır.

## Kaynaklar

- [Google Arama Merkezi: İş ilanı (JobPosting) yapılandırılmış verisi](https://developers.google.com/search/docs/appearance/structured-data/job-posting?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
- [Google Arama Merkezi: Kopya URL’leri birleştirme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
