---
title: "Sponsorluk Bağlantıları: sponsored Nasıl İşaretlenir?"
description: "Sponsorluk ve reklam bağlantıları nasıl işaretlenir? rel=sponsored, ugc ve nofollow farkı; ne zaman hangisi kullanılır, nasıl eklenir, sık yapılan hatalar."
date: 2026-11-12
service: backlink-hizmeti
imageAlt: "Bağlantı etiketi: rel sponsored, ugc ve nofollow karşılaştırması"
---

**Kısa cevap:** Reklam ya da ücretli yerleşim olan bağlantılar `rel="sponsored"` ile, kullanıcı içeriğindeki (yorum, forum) bağlantılar `rel="ugc"` ile işaretlenir; bir sayfayla ilişkilendirilmek istemediğiniz bağlantılar için `rel="nofollow"` kullanılır. Google’ın spam politikasına göre reklam ve sponsorluk bağlantıları `nofollow` veya `sponsored` ile nitelendiği sürece politikaya aykırı değildir. Nitelenmemiş ücretli bağlantı ise bağlantı spam’i sayılabilir.

Sponsorlu yazı, reklam alanı ya da ürün karşılığı yazı yayımlayan bir site de, bu tür bir yayında yer alan işletme de bağlantıyı doğru nitelemelidir. Genel çerçeve için [backlink satın almanın riskleri](/blog/backlink-satin-almak-riskleri/) ve [misafir yazı](/blog/misafir-yazi-guest-post-riskli-mi/) yazılarına bakabilirsiniz.

## Üç özellik, üç anlam

Google’ın giden bağlantı rehberi şöyle ayırır ([giden bağlantıları uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)):

| Özellik | Ne zaman? |
| --- | --- |
| `rel="sponsored"` | Reklam ya da ücretli yerleşim olan bağlantılar |
| `rel="ugc"` | Yorum ve forum gönderileri gibi kullanıcı içeriği bağlantıları |
| `rel="nofollow"` | Siteyi bağlantılı sayfayla ilişkilendirmek istemediğinizde |

Rehbere göre bu özelliklerle işaretlenen bağlantılar genellikle izlenmez.

## Nasıl eklenir?

```html
<a href="https://ornek.com/" rel="sponsored">Marka adı</a>
```

Çoğu sitede (WordPress dahil) bağlantı ekleme penceresinde ya da kod görünümünde bu özelliği ekleyebilirsiniz. Ücretli yayın alırsanız bağlantının nasıl işaretleneceğini yazılı olarak kararlaştırın.

## Ne zaman hangisi?

| Durum | Önerilen |
| --- | --- |
| Reklam ya da sponsorlu yazı | `sponsored` |
| Ürün gönderip yazı yazdırma | `sponsored` (karşılık var) |
| Blog yorumundaki bağlantılar | `ugc` |
| Güvenmediğiniz kaynağa bağlantı | `nofollow` |
| Editoryal, kendi kararınızla verilen bağlantı | Nitelemeye gerek yok |

## İşaretlenmemiş ücretli bağlantı

Spam politikalarına göre sıralama için para karşılığı ya da ürün/hizmet karşılığı sağlanan bağlantılar bağlantı spam’i örnekleridir; bu bağlantılar nitelendiğinde ise politikaya aykırı sayılmaz ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)). Yani sorun reklam vermek değil, reklamı sıralama aracı gibi nitelemeden yayımlamaktır.

## Sık yapılan hatalar

| Hata | Çözüm |
| --- | --- |
| Ücretli bağlantıyı nitelememek | `sponsored` ekleyin |
| Nitelenmesi gereken bağlantıyı açık bırakmak | Doğru `rel` değerini ekleyin |
| Tüm dış bağlantıları nofollow yapmak | Yalnızca gereken bağlantılar |
| Yorum bağlantılarını açık bırakmak | `ugc` ya da moderasyon |
| Bağlantı karşılığı ürün alıp bildirmemek | Nitelendirin |
| Sözleşmede bağlantı niteleme hakkını kısıtlamak | Niteleme seçeneğini koruyun |

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir otel, yerel bir gezi rehberi sitesinde sponsorlu içerik yayımlatıyor ve sözleşmede bağlantının `sponsored` olarak işaretleneceğini yazıyor. Aynı otelin bloguna gelen yorumlardaki bağlantılar `ugc` ile işaretleniyor. Kendi sayfalarına verdiği iç bağlantılarda herhangi bir niteleme yok.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Backlink hizmetimizde](/backlink-hizmeti/):

- ücretli yerleşimleri baştan doğru nitelenecek şekilde planlarız,
- sitenizdeki giden bağlantıları ve yorum bağlantılarını denetleriz,
- satın alınmış bağlantı ve hacklink önermeyiz,
- yapılan işi yazılı raporlarız; sıralama garantisi vermeyiz.

Giden bağlantılarınızı denetlememizi isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### sponsored işaretli bağlantı değersiz mi?

Google bu bağlantıların genellikle izlenmediğini söyler; ama tanınırlık ve doğrudan ziyaretçi açısından değer taşıyabilir.

### Her ücretli yayın sponsored mi olmalı?

Reklam ya da ücretli yerleşim varsa evet.

### Kendi sitemde nasıl eklerim?

Bağlantı düzenleme ekranında ya da kod görünümünde `rel` özelliğini ekleyin.

## Kaynaklar

- [Google Search Central: giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Google Search Central: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)
