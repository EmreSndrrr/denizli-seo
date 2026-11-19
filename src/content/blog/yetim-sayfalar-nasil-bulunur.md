---
title: "Yetim Sayfalar Nasıl Bulunur? Bağlantısız URL’ler"
description: "Yetim sayfalar (orphan pages) nasıl bulunur? Site içinden bağlantı almayan URL’leri tarama, site haritası ve Search Console ile karşılaştırma ve düzeltme adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Site haritasında bulunan ama hiçbir sayfadan bağlantı almayan yalnız bir sayfa"
---

Yetim sayfa (orphan page), sitenizde var olan ama sitenin hiçbir başka sayfasından bağlantı almayan sayfadır. Ziyaretçi menüden ya da içerikten bu sayfaya ulaşamaz; Google da sayfayı ancak site haritası, dış bağlantı ya da eski kayıtlar sayesinde bulabilir. Yetim sayfaları bulmanın yolu iki listeyi karşılaştırmaktır: sitenizin tarayıcıyla bulduğu sayfalar (bağlantılarla ulaşılanlar) ile sizde bilinen tüm sayfalar (site haritası, yönetim paneli, Search Console, analiz verisi).

Bu yazıda yetim sayfaların neden oluştuğunu, nasıl bulunacağını, her biri için ne karar vereceğinizi ve ileride yeni yetimlerin oluşmasını nasıl önleyeceğinizi anlatıyoruz. İç bağlantı mantığı için [iç bağlantı stratejisi: küçük siteler için rehber](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Yetim sayfa neden sorundur?

Üç sorun doğurur:

1. **Keşif zorlaşır.** Google, bağlantılar üzerinden gezinerek yeni sayfa bulur; hiçbir bağlantı yoksa sayfa gözden kaçabilir. Site haritası bu açığı bir ölçüde kapatır ama bağlantı kadar güçlü bir sinyal değildir.
2. **Önemi anlaşılmaz.** Site içinden hiç bağlantı almayan sayfa, sitenin “ana kısmında” sayılmıyor gibi görünür; iç bağlantı gücünü paylaşamaz.
3. **Ziyaretçi ulaşamaz.** Sayfa değerli olsa bile kimse bulamaz.

Google’ın bağlantılar rehberi, Google’ın bağlantıları sayfaları keşfetmek için kullandığını ve `href` özniteliği olan `<a>` bağlantılarını taradığını belirtir ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Sayfaya hiçbir bağlantı yoksa bu keşif yolu da kapalıdır. Site haritasına ilişkin Google rehberi ise, sayfalar doğru bağlandığında Google’ın siteyi genellikle kendi başına bulabildiğini, site haritasının bunu desteklediğini anlatır ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)).

## Yetim sayfalar nasıl oluşur?

Başlıca nedenler:

- **Sayfa yayınlandı ama menüye ve içeriğe eklenmedi.** Yeni hizmet sayfası ya da blog yazısı sonradan unutulur.
- **Menü ya da şablon değişti.** Yeniden tasarımda eski bağlantılar kaldırılır, sayfalar sahipsiz kalır.
- **Kampanya ve geçici sayfalar.** Süresi biten kampanya sayfasına bağlantılar silinir ama sayfa yayında kalır.
- **Taşıma ve yenileme artığı.** Eski sitenin kalıntıları yeni sitede bağlantısız bulunur.
- **Filtre ve etiket sayfaları.** Otomatik oluşan sayfalara bağlantı verilmez.
- **Yönetimde unutulan taslak ve test sayfaları.** Yayında ama kimsenin bilmediği sayfalar.

Bu nedenlerden bir kısmı yetim sayfayı bir sorun değil, temizlenmesi gereken bir artık yapar; bir kısmı ise değerli ama unutulmuş içeriktir.

> **Hizmet almak için iletişime geçin.** Sitenizdeki yetim sayfaları bulup her biri için karar verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Yetim sayfalar nasıl bulunur?

Yöntem iki liste çıkarıp karşılaştırmaktır:

**Liste 1: Bağlantılarla ulaşılan sayfalar.** Bir SEO tarama aracıyla ana sayfadan başlayarak siteyi tarayın. Araç yalnızca bağlantıları izlediği için, ulaştığı sayfalar “bağlantılı” sayfalardır.

**Liste 2: Var olan tüm sayfalar.** Şu kaynaklardan birleştirin:

- XML site haritası ([site haritası nasıl oluşturulur?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)),
- içerik yönetim sisteminizdeki yayınlanmış sayfa listesi,
- Search Console’da sayfa ya da performans raporundaki adresler,
- analiz araçlarında trafik alan sayfalar,
- sunucu günlüklerinde Googlebot’un ziyaret ettiği adresler ([SEO için log analizi](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/)).

**Karşılaştırma.** Liste 2’de olup Liste 1’de olmayan her adres yetim sayfa adayıdır. Çoğu SEO tarama aracı, site haritası ya da Search Console verisini içe aktararak bu karşılaştırmayı kendisi yapar. Küçük sitelerde elle de yapılabilir: site haritasındaki sayfaları tek tek açıp menü ve içerikten bağlantı alıp almadığına bakın.

## Her yetim sayfa için karar nasıl verilir?

| Sayfanın durumu | Karar |
| --- | --- |
| Değerli, güncel, aranan içerik | İç bağlantı ekleyin; menüye ya da ilgili sayfalara bağlayın |
| Değerli ama eski | Güncelleyin, sonra bağlayın |
| Başka bir sayfayla çakışan | Birleştirin ve 301 ile yönlendirin |
| Değersiz ya da süresi dolmuş | Kaldırın (404/410) ya da noindex verin |
| Bilerek bağlantısız (teşekkür sayfası, özel kampanya) | Bırakın; gerekirse noindex |
| Test ya da taslak | Kaldırın, dizine girmesini engelleyin |

Karar kuralı: bir sayfanın bir amacı ve ziyaretçisi varsa bağlayın; yoksa kaldırın. Bağlantısız bırakıp yayında tutmak ikisinin de yararına olmaz.

## Yetim sayfaya nasıl bağlantı verilir?

İyi bir bağlantı doğal olmalıdır. Şu yerleri düşünün:

- **İlgili hizmet ya da kategori sayfası.** Konuyla ilgili sayfadan metin içi bağlantı.
- **Blog yazılarından.** İlgili bir yazıda bağlam içinde bağlantı.
- **Menü ya da altbilgi.** Gerçekten önemliyse ve kullanıcı ihtiyacı varsa.
- **“İlgili sayfalar” bölümleri.** Aynı konudaki sayfalar birbirine bağlansın.
- **Site haritası.** Destekleyici olarak; ama tek yol olarak değil.

Bağlantı metni, hedef sayfanın konusunu anlatsın (“buraya tıklayın” yerine açıklayıcı ifade). Menüyü şişirmeden önemli sayfaları öne çıkarmak için [menü ve site yapısı nasıl planlanır?](/blog/menu-ve-site-yapisi-nasil-planlanir/) yazısına bakın.

## Yetim sayfa oluşmasını nasıl önlersiniz?

Şunları alışkanlık yapın:

1. **Her yeni sayfa yayınlandığında en az üç yerden bağlantı verin.** Ilgili sayfalar ve bir üst kategori.
2. **Yayın kontrol listesine “iç bağlantı eklendi mi?” maddesini koyun.**
3. **Menü ya da şablon değiştirirken sayfa listesini karşılaştırın.** Hangi sayfalar bağlantısız kaldı?
4. **Üç ayda bir yetim sayfa taraması yapın.** Küçük sitede yarım saat sürer.
5. **Silinen sayfaları ve yönlendirmeleri kayıt altında tutun.** Kalan artıklar kaybolmasın ([içerik denetimi: hangi sayfa güncellenmeli, hangisi silinmeli?](/blog/icerik-denetimi-hangi-sayfa-guncellenmeli-hangisi-silinmeli/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mermer firmasının sitesinde site haritasında 80 sayfa var; ama tarayıcı bağlantı izleyerek yalnızca 62 sayfaya ulaşabiliyor. On sekiz sayfa yetim görünüyor: altısı eski kampanya sayfaları, dördü kullanılmayan test sayfaları, sekizi ise “Traverten kaplama fiyat etkenleri” gibi değerli ama menüde yer almayan içerikler.

Karar: kampanya ve test sayfaları kaldırılıyor ya da noindex alıyor; sekiz değerli sayfa ilgili hizmet sayfalarından ve iki blog yazısından bağlanıyor; menüde yeni bir “Rehberler” bölümü açılıyor. Üç ay sonra Search Console’da bu sayfaların gösterim almaya başlayıp başlamadığı izleniyor. Bu örnek sonuç vaadi değildir; ayıklama mantığını gösterir.

## Sık yapılan hatalar

1. **Her yetim sayfayı hemen silmek.** Bazıları değerli ve yalnızca bağlantısızdır.
2. **Yetim sayfayı yalnızca site haritasına eklemek.** Bağlantı daha güçlü bir keşif ve önem sinyalidir.
3. **Menüyü gereksiz uzatmak.** Her sayfa menüde olmak zorunda değil; metin içi bağlantı da yeterli olabilir.
4. **Taramayı yalnızca bir kez yapmak.** Yetim sayfalar zamanla yeniden oluşur.
5. **Yetim sayfaları noindex yapıp unutmak.** Neden bağlantısız olduğunu sorgulayın.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- siteyi tarar, site haritası ve Search Console verisiyle karşılaştırarak yetim sayfa listesini çıkarırız,
- her sayfa için bağlama, güncelleme, birleştirme ya da kaldırma kararını yazılı veririz,
- iç bağlantı planını ve menü önerilerini hazırlarız,
- sonuç vaat etmeden, bağlanan sayfaların görünürlüğünü Search Console ile izleriz.

Sitenizdeki bağlantısız sayfalar için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Yetim sayfalarınızı birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Yetim sayfa ceza sebebi mi?

Hayır, bir ceza değildir. Ama keşfi ve iç bağlantı gücünü zayıflattığı için görünürlükte dezavantaj yaratabilir.

### Yetim sayfa Google’da yine de görünebilir mi?

Site haritası, dış bağlantı ya da eski kayıtlar sayesinde bulunabilir. Ancak bağlantı almayan sayfanın önemi düşük algılanabilir.

### Site haritası yetim sayfa sorununu çözer mi?

Keşfi destekler ama iç bağlantının yerini tutmaz. Önemli sayfalara gerçek bağlantılar verin.

### Yetim sayfaları ücretsiz nasıl bulabilirim?

Site haritasındaki adresleri tek tek açıp bağlantı alıp almadığını kontrol edebilir ya da ücretsiz tarama araçlarıyla iki listeyi karşılaştırabilirsiniz.

### Kaç sayfa yetim olabilir?

Sabit bir sayı yoktur. Önemli olan değerli sayfaların bağlantısız kalmamasıdır.

## Kaynaklar

- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Google Arama Merkezi: Site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
