---
title: "Review ve AggregateRating Schema Arasındaki Fark"
description: "Review ve AggregateRating schema arasındaki fark nedir? Tek yorum ile toplu puan, Google’ın yorum snippet’i kuralları ve işletmenin kendi yorumlarını işaretleme sınırı."
date: 2026-11-19
service: teknik-seo
imageAlt: "Tek bir yorum kartı ile birçok yorumun ortalamasını gösteren yıldız puanı"
---

Review schema, tek bir yorumu (yorumcusu, puanı ve metniyle) tanımlar; AggregateRating ise çok sayıda yorum ya da puanın ortalamasını ve sayısını tanımlar. İlki “Ayşe 5 yıldız verdi ve şunu yazdı” der, ikincisi “120 değerlendirmenin ortalaması 4,6” der. Google’ın yorum snippet’i rehberine göre, yorumlanan kurum ya da kişi kendisiyle ilgili yorumları kontrol ediyorsa LocalBusiness veya diğer Organization yapılandırılmış verilerin olduğu sayfalarda yıldızlı yorum özelliği kullanılamaz. Yani kendi işletmenizin kendi yorumlarını bu işaretlemeyle yıldız olarak gösterteceğinizi düşünmeyin.

Bu yazıda iki türün farkını, Google’ın yorum snippet’i tanımını ve kurallarını, hangi sayfada hangisinin kullanılabileceğini ve yerel işletmelerin dikkat etmesi gereken sınırı anlatıyoruz. Yorum ve puanların siteye eklenmesi için [müşteri yorumları siteye nasıl eklenir?](/blog/musteri-yorumlari-siteye-nasil-eklenir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Review ve AggregateRating nedir?

Google’ın yorum snippet’i rehberi şöyle tanımlar: yorum snippet’i, genellikle çok sayıda yorumcunun birleşik değerlendirme puanlarının ortalaması olan, bir yorum web sitesindeki yorumdan veya değerlendirmeden yapılmış kısa bir alıntıdır. Google geçerli yorum ya da puan işaretlemesi bulduğunda, yorumlardan veya puanlardan gelen yıldızları ve diğer özet bilgileri içeren zengin bir snippet gösterebilir ([Yorum snippet’i yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=tr)). Bu işaretleme iki türle yapılır:

- **Review:** Tek bir yorumu tanımlar: kim yazdı (`author`), hangi puanı verdi (`reviewRating`), neyi yorumladı (`itemReviewed`) ve gerekiyorsa yorum metni.
- **AggregateRating:** Birçok yorum ya da puanın toplamını tanımlar: ortalama puan (`ratingValue`) ve kaç puan ya da yorumdan oluştuğu (`ratingCount` veya `reviewCount`).

Rehberdeki örneklerden birinde bir ürün sayfasında hem tek tek Review öğeleri hem toplu bir AggregateRating bulunur; yani ikisi aynı sayfada birlikte de kullanılabilir.

## İkisi arasındaki fark

| Özellik | Review | AggregateRating |
| --- | --- | --- |
| Neyi anlatır? | Tek yorum ya da puan | Birçok yorumun ortalaması |
| Örnek | “Ayşe, 5/5” | “4,6 ortalama, 120 değerlendirme” |
| Temel alanlar | Yazar, puan, yorumlanan öğe, metin | Ortalama puan, puan sayısı |
| Kullanım | Tek tek yorumları listelerken | Özet puanı gösterirken |
| Sayfada görünür olmalı mı? | Evet | Evet; özet ve puanlar kullanıcıya görünür |
| Birlikte kullanılabilir mi? | Evet | Evet |

Basit kural: sayfada ayrı ayrı yorumlar listeleniyorsa Review, bunların ortalaması gösteriliyorsa AggregateRating. İkisini birlikte kullanmak mümkündür ama işaretlenen her bilgi sayfada gerçekten bulunmalıdır.

> **Hizmet almak için iletişime geçin.** Sitenizdeki yorum ve puan işaretlemesini kurallara uygun biçimde birlikte planlayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi sayfada hangisi kullanılabilir?

Google’ın rehberine göre yorum snippet’i, belirli türlerdeki içerikler için desteklenir: Kitap, Kurs listesi, Etkinlik, Yerel işletme, Film, Ürün, Yemek tarifi, Yazılım uygulaması gibi türler ve bazı schema.org alt türleri. Küçük işletmeler için en yaygın iki kullanım şunlardır:

- **Ürün sayfaları.** Ürün için gerçek müşteri yorumları ve puanlar; Review ve AggregateRating ürün sayfasında kullanılır ([ürün yorumları e-ticaret SEO’sunda nasıl kullanılır?](/blog/urun-yorumlari-e-ticaret-seosunda-nasil-kullanilir/)).
- **Başkalarını yorumlayan siteler.** Restoran, otel ya da yerel işletmeleri değerlendiren bir rehber sitesi, diğer işletmelerle ilgili yorumları işaretleyebilir.

Rehberde Yerel işletme ve Organization türleri için ayrı bir parantez vardır: yalnızca diğer yerel işletmelerle ya da kuruluşlarla ilgili yorumları alan siteler için; kendileriyle ilgili yorumları işleyenler için kuralları incelemek gerekir.

## Kendi işletmenizin yorumlarını işaretleyebilir misiniz?

Burası yerel işletmeler için kritik noktadır. Rehberin yönergelerine göre yorumlanan kurum ya da kişi kendisiyle ilgili yorumları kontrol ediyorsa, LocalBusiness veya diğer Organization yapılandırılmış verilerinin bulunduğu sayfalarda yıldızlı yorum özelliği kullanılamaz. Başka bir deyişle, kendi sitenizde topladığınız müşteri yorumlarını, işletmenizin LocalBusiness ya da Organization sayfasında Review ya da AggregateRating ile işaretleseniz bile, yıldızlı yorum özelliğinin bu sayfa için kullanılmaması beklenir.

Bu sınırın nedeni olarak, işletmenin kendi hakkındaki yorumları seçebilmesi ve yönetebilmesi akla gelir; yönergenin ifadesi ise açıktır: kurum kendisiyle ilgili yorumları kontrol ediyorsa özellik kullanılamaz. Sonuç: yıldız görmek amacıyla yorumları işletme ana sayfasına işaretlemeye çalışmak anlamsızdır ve yönergeleri ihlal etme riski taşır. Müşteri yorumlarını siteye yine de ekleyebilirsiniz; ama bunu zengin sonuç elde etmek için değil, ziyaretçiye güven vermek için yapın ([müşteri yorumları siteye nasıl eklenir?](/blog/musteri-yorumlari-siteye-nasil-eklenir/)).

## Genel yönergeler neler söyler?

Google’ın yapılandırılmış veri genel yönergeleri tüm işaretlemeler için geçerlidir: yapılandırılmış verilerin başvurduğu içerik kullanıcıdan gizlenmemeli, işaretleme sayfanın gerçek içeriğini yansıtmalı, Arama içerik politikalarına (spam politikaları dahil) uyulmalıdır. Yönergelere uymayan sayfalarda manuel işlem uygulanabilir ([yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)). Yorum işaretlemesinde şu pratik kurallar çıkar:

- Yorumlar gerçek müşterilerden gelmeli; uydurma ya da satın alınmış yorum yazmayın.
- İşaretlenen puan ve sayılar sayfada görünür olmalı.
- Yorum sayısı ve ortalama gerçekten hesaplanan değerler olmalı.
- Başka bir sitenin yorumlarını kendi sayfanızda sanki sizinmiş gibi işaretlemeyin.
- Her yorumu aynı sayfada doğru öğeye bağlayın (ürün yorumu ürün sayfasında).

## Doğru uygulama için adımlar

1. **Sayfa türünü belirleyin.** Ürün sayfası mı, yorum sitesi mi, işletme ana sayfası mı?
2. **Yorumun kime ait olduğunu düşünün.** Kendi işletmenizle ilgiliyse yıldız özelliğini beklemeyin.
3. **Gerçek veriyi toplayın.** Yorumcu adı, puan, tarih ve metin; hesaplanmış ortalama ve sayı.
4. **JSON-LD’yi yazın.** Ürün için Review ve/veya AggregateRating’i Product içine yerleştirin ([JSON-LD ile microdata arasındaki fark](/blog/json-ld-ile-microdata-arasindaki-fark/)).
5. **Zengin Sonuçlar Testi’yle doğrulayın.**
6. **Sayfada yorumları görünür gösterin.** İşaretleme ile görünür içerik uyumlu olsun.
7. **Search Console’da izleyin.** Yorum snippet’i raporunda hata var mı?

Zengin sonuç çıkmıyorsa nedenleri için [schema var ama zengin sonuç neden görünmüyor?](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/) yazısına bakabilirsiniz.

## Google İşletme Profili puanı ile ilişkisi

Arama sonuçlarında işletmenizin yanında gördüğünüz yıldızlar çoğunlukla Google İşletme Profili’ndeki yorumlardan gelir; bunlar sitenizdeki işaretlemeden bağımsızdır. Profil yorumlarını artırmak ve yönetmek için [Google yorumları nasıl artırılır? kurallara uygun yollar](/blog/google-yorumlari-nasil-artirilir/) yazısına bakın; sitedeki schema ile profil puanını karıştırmayın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir fizyoterapi kliniği, sitesinin ana sayfasına “4,9 yıldız, 85 yorum” yazıp AggregateRating ile işaretlemek istiyor ve arama sonucunda yıldız çıkmasını bekliyor.

Danışman Google’ın yönergesini anlatıyor: kurum kendi yorumlarını kontrol ettiği için LocalBusiness sayfasında yıldızlı yorum özelliği kullanılamıyor. Klinik işaretlemeyi bu amaçla yapmaktan vazgeçiyor; ama müşteri yorumlarını ana sayfada güven öğesi olarak, kaynağını belirterek gösteriyor ve Google İşletme Profili yorumlarını gerçek yöntemlerle artırmaya odaklanıyor. Sağlık hizmetlerinde yorum kullanımı ve tanıtım için ilgili yasal sınırlara dikkat ediliyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Kendi işletme yorumlarını yıldız için işaretlemek.** Bu sayfalarda özellik kullanılamaz.
2. **Uydurma yorum ya da puan yazmak.** Hem politikaya hem etik kurallara aykırı.
3. **Sayfada görünmeyen puanı işaretlemek.** Genel yönergelere aykırı.
4. **Yanlış sayfaya işaretlemek.** Yorum, ilgili öğenin sayfasında olmalı.
5. **Ortalamayı elle yazmak.** Gerçek hesaplanan değer kullanın.
6. **Profil yıldızı ile schema’yı karıştırmak.** İkisi farklı sistemlerdir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki yorum ve puan işaretlemelerini Google’ın yönergelerine göre denetleriz,
- ürün ve yorum sayfaları için doğru Review ve AggregateRating yapısını hazırlarız,
- kendi işletme yorumları için gerçekçi bir güven ve profil stratejisi öneririz,
- sonuç vaat etmeden, Search Console’da yorum snippet’i durumunu izleriz.

Yorum işaretlemeniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Yorum ve puan işaretlemenizi birlikte doğru kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Review ile AggregateRating birlikte kullanılabilir mi?

Evet. Bir ürün sayfasında tek tek yorumlar Review, genel ortalama AggregateRating ile işaretlenebilir.

### İşletmem için yıldızlı sonuç alabilir miyim?

Kendi işletmenizle ilgili ve sizin kontrol ettiğiniz yorumlarda LocalBusiness ve Organization sayfalarında bu özellik kullanılamaz. Profil yorumlarına odaklanın.

### Ürün yorumları için işaretleme gerekli mi?

Zorunlu değil; ama ürün sayfasında gerçek yorumlar varsa doğru işaretleme Google’ın bilgiyi anlamasına yardımcı olur. Görünüm garanti edilemez.

### Puanı sayfada göstermem şart mı?

Evet. İşaretlenen bilgi kullanıcıya görünür olmalıdır.

### Yorumları başka siteden alıp işaretleyebilir miyim?

Hayır, başkasına ait yorumları kendinizinmiş gibi işaretlemeyin.

## Kaynaklar

- [Google Arama Merkezi: Yorum snippet’i (Review, AggregateRating) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
