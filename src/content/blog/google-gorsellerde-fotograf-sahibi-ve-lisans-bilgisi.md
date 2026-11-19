---
title: "Google Görseller’de Fotoğraf Sahibi ve Lisans Bilgisi"
description: "Google Görseller’de fotoğrafın sahibi ve lisansı nasıl belirtilir? IPTC fotoğraf meta verisi, yapılandırılmış veri, Lisanslanabilir rozeti ve uygulama adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir fotoğrafın içine gömülü sahip, telif ve lisans bilgisi ile Google Görseller’de görünen kartı"
---

Google Görseller’de bir fotoğrafın sahibini ve lisansını belirtmek için iki yol vardır: sayfaya yapılandırılmış veri (schema.org) eklemek ya da bilgiyi doğrudan görselin içine IPTC fotoğraf meta verisi olarak gömmek. Google’ın “Resim meta verisi” rehberine göre, resim meta verisi belirttiğinizde Google Görseller’de resmi oluşturan kişinin kim olduğu, resmin nasıl kullanılabileceği gibi bilgiler gösterilebilir; lisans bilgisi sağlamak ise resmi “Lisanslanabilir” rozetine uygun hâle getirebilir. Fotoğraflarını başkalarına lisanslayan fotoğrafçılar ve kendi özgün görsellerini koruyup tanıtmak isteyen işletmeler için bu, doğru yoldur.

Bu yazıda iki yöntemin ne olduğunu, hangi alanların kullanıldığını, nasıl uygulanacağını, hangi görsellerin bu işlem için uygun olduğunu ve kontrol adımlarını anlatıyoruz. Genel görsel SEO için [görsel SEO: alt metin, boyut ve WebP rehberi](/blog/gorsel-seo/), görsel hazırlama için [görsellerdeki EXIF bilgileri SEO için önemli mi?](/blog/gorsellerdeki-exif-bilgileri-seo-icin-onemli-mi/) yazısına, teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Resim meta verisi ne işe yarar?

Google’ın rehberi, resim meta verisinin Google Görseller’de görselle birlikte gösterilebilecek bilgiler olduğunu anlatır: resmi oluşturan kişi, resmin nasıl kullanılabileceği, telif bilgisi ve lisans. Lisanslama bilgilerini sağlamak, görseli “Lisanslanabilir” rozetine uygun hâle getirebilir; bu rozette lisansın bağlantısı ve görselin nasıl kullanılabileceğine dair ayrıntılar yer alır. Rehber, özelliğin hem mobil hem masaüstünde, Google Arama’nın kullanılabildiği tüm bölge ve dillerde kullanılabildiğini belirtir ([resim meta verisi](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata?hl=tr)).

Bu bilgi iki taraf için değerlidir: görsel sahibi için doğru atıf ve lisans yolunu açar; görseli kullanmak isteyen kişi için kime ve nasıl başvuracağını gösterir. Sıralama için doğrudan bir etken olarak sunulmaz; amaç, görselin bağlamını ve haklarını netleştirmektir.

## İki yöntem: yapılandırılmış veri ve IPTC

Rehber, resim meta verilerini Google’a bildirmek için sitenizdeki her resme yapılandırılmış veri ya da IPTC fotoğraf meta verisi eklemenizi söyler. İkisi arasındaki fark şudur:

| Özellik | Yapılandırılmış veri | IPTC fotoğraf meta verisi |
| --- | --- | --- |
| Nerede? | Sayfanın kodunda (JSON-LD vb.) | Görsel dosyasının içine gömülü |
| Taşınırlık | Her sayfa için ayrı eklenir | Görselle birlikte taşınır; resim başına bir kez |
| Kimin kontrolünde? | Web sitesi sahibi | Fotoğrafçı ya da düzenleyen kişi |
| Aynı görsel birden çok sayfada | Her sayfada ayrı eklenmeli | Tek seferde gömülür |
| Kullanım | Siteye özel kontrol | Telif bilgisini dosyada korumak |

Rehberin ifadesiyle IPTC fotoğraf meta verisi resmin içine yerleştirilir; böylece resim ve meta veri bir arada tutularak bozulmadan sayfadan sayfaya taşınabilir; resim başına yalnızca bir kez yerleştirmek yeterlidir. Yapılandırılmış veri ise aynı resim birden fazla sayfada yer alıyorsa resmin göründüğü her sayfada eklenmelidir.

> **Hizmet almak için iletişime geçin.** Görsellerinizin sahiplik ve lisans bilgisini Google’a doğru bildirmek için birlikte çalışalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi alanlar kullanılır?

Rehberdeki başlıca bilgiler ve karşılıkları:

- **Lisans sayfası:** Resmin kullanımı için geçerli lisansı açıklayan sayfanın adresi. Schema.org `license` özelliği ya da IPTC “Web Statement of Rights” alanıyla belirtilir.
- **Lisans edinme sayfası:** Kullanıcının resmi nasıl lisanslayacağıyla ilgili bilgileri bulabileceği sayfa. Schema.org `acquireLicensePage` özelliği ya da IPTC “Licensor URL” alanıyla belirtilir.
- **Yaratıcı:** Resmi oluşturan kişi ya da kuruluş (`creator`).
- **Atıf metni:** Kredi satırı (`creditText`).
- **Telif bildirimi:** `copyrightNotice`.

Rehberin örneğinde bir `ImageObject` içinde `contentUrl`, `license`, `acquireLicensePage`, `creditText`, `creator` ve `copyrightNotice` alanları birlikte kullanılır. Kendi görselleriniz için bu alanları gerçek bilgilerle doldurun; yanlış sahiplik ya da lisans bildirmek hukuki sorun doğurabilir. Hukuki konularda uzmana danışın; bu yazı hukuki danışmanlık değildir.

## Yapılandırılmış veriyle nasıl uygulanır?

Örnek bir JSON-LD (hayalî bilgilerle):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  "contentUrl": "https://alanadi.com/fotograflar/atolye.jpg",
  "license": "https://alanadi.com/lisans/",
  "acquireLicensePage": "https://alanadi.com/lisans-edinme/",
  "creditText": "Örnek Fotoğraf Atölyesi",
  "creator": { "@type": "Person", "name": "Örnek Fotoğrafçı" },
  "copyrightNotice": "Örnek Fotoğraf Atölyesi"
}
</script>
```

Adımlar: görsele bu bloğu sayfaya ekleyin; görselin adresi (`contentUrl`) sayfadaki görselle aynı olsun; lisans ve lisans edinme sayfalarının gerçekten var olduğundan emin olun; Zengin Sonuçlar Testi ya da şema doğrulayıcıyla test edin. Aynı görsel başka sayfalarda da kullanılıyorsa orada da ekleyin. Biçim seçimi için [JSON-LD ile microdata arasındaki fark](/blog/json-ld-ile-microdata-arasindaki-fark/) yazısına bakabilirsiniz.

## IPTC ile nasıl uygulanır?

IPTC alanları, çoğu fotoğraf düzenleme ve yönetim programında “dosya bilgisi” ya da “meta veri” bölümünden doldurulur: yaratıcı, kredi satırı, telif bildirimi, kullanım koşulları (Web Statement of Rights) ve lisanslayıcı bağlantısı. Bilgiyi bir kez gömdüğünüzde, görsel nereye taşınırsa bilgi onunla gider. Dikkat edilecekler:

- **Gömdükten sonra görseli yayına alın.** Meta veriyi görsel yüklenmeden önce gömün.
- **Optimizasyon meta veriyi silebilir.** Bazı görsel sıkıştırma ve içerik yönetim eklentileri meta veriyi temizler; yüklenen dosyada IPTC’nin korunduğunu kontrol edin.
- **EXIF ile karıştırmayın.** EXIF çekim bilgisi, IPTC telif ve atıf bilgisi içindir; konum gibi EXIF alanlarını gizlilik için temizlerken IPTC telif alanlarını koruyun ([görsellerdeki EXIF bilgileri SEO için önemli mi?](/blog/gorsellerdeki-exif-bilgileri-seo-icin-onemli-mi/)).
- **Çakışmayı önleyin.** Hem IPTC hem yapılandırılmış veri kullanıyorsanız bilgilerin tutarlı olmasına dikkat edin.

## Google’ın görsel hazırlığı için temel şartlar

Meta verinin işe yaraması için Google’ın görseli keşfedip dizine ekleyebilmesi gerekir. Rehber şu hazırlıkları hatırlatır: resim içeren sayfalara kullanıcıların hesap sahibi olmadan ya da giriş yapmadan erişebilmesi, Googlebot’un bu sayfalara robots.txt tarafından engellenmeden erişebilmesi, resimlerin dizine eklenebilir biçimlerde `<img>` öğesiyle eklenmesi. CSS ile eklenen görseller dizine eklenmediği için bu görsellere meta veri eklemek anlamsızdır ([CSS arka plan görselleri ile HTML görselleri](/blog/css-arka-plan-gorselleri-ile-html-gorselleri-seo/)). Görselin açıklayıcı alt metni ve dosya adı da temel görsel SEO sinyalleridir ([Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)).

## Kimler için bu işlem anlamlıdır?

- **Fotoğrafçılar ve stüdyolar.** Görsellerini lisanslıyorlarsa lisans edinme sayfası yönlendirmesi doğrudan değerlidir.
- **Özgün görsel üreten işletmeler.** Ürün, mekân ya da ekip fotoğraflarının sahibi olarak atıf ve telif bilgisini netleştirmek isteyenler.
- **İçerik üreticileri ve yayıncılar.** İllüstrasyon, infografik ve özgün görsel kullananlar.

Yalnızca stok görsel ya da başkasından alınmış görsel kullanıyorsanız, görselin sahibi siz değilsiniz; bu bilgiyi yanlış yazmayın. Kendi özgün fotoğraflarınız her zaman stok görselden değerlidir ([kurumsal web sitesinde fotoğraf: çekim ve kullanım](/blog/kurumsal-web-sitesinde-fotograf-cekim-ve-kullanim/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mermer atölyesi, uygulama fotoğraflarını kendisi çekiyor ve diğer firmaların katalog için kullanmak istediği görsellerin lisans taleplerini topluyor. Fotoğraflar sitede alt metinle yayınlanıyor ama sahiplik ya da lisans bilgisi yok.

Atölye, fotoğrafları düzenleme programında IPTC alanlarını (yaratıcı, kredi satırı, telif bildirimi ve lisans sayfası adresi) doldurup yeniden yüklüyor; görsel optimizasyon eklentisinin meta veriyi silmediğini kontrol ediyor. Lisans ve lisans edinme sayfalarını (nasıl talep edileceğini anlatan kısa sayfalar) hazırlıyor. Birkaç hafta sonra Google Görseller’de görsellerin nasıl göründüğünü izliyor. Rozet ya da görünüm garanti edilemez. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Başkasının görselinde kendini sahip göstermek.** Yanlış bilgi hukuki risk yaratır.
2. **Meta veriyi optimizasyonla silmek.** Yüklenen dosyada kontrol edin.
3. **Lisans sayfasını hazırlamamak.** Bağlantı boş kalır.
4. **Aynı görseli birden çok sayfada yapılandırılmış veri olmadan bırakmak.** Her sayfada eklemek gerekir.
5. **CSS görsellerine meta veri eklemeye çalışmak.** Dizine eklenmez.
6. **Tutarsız bilgi girmek.** IPTC ve yapılandırılmış veri aynı olsun.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- özgün görselleriniz için IPTC ya da yapılandırılmış veriyle sahip ve lisans bilgisi planını hazırlarız,
- görsel optimizasyon sürecinin meta veriyi silmediğini kontrol ederiz,
- lisans sayfası yapısı ve alt metin, dosya adı gibi temel görsel SEO sinyallerini düzenleriz,
- sonuç vaat etmeden, görsellerin Google Görseller’deki durumunu izleriz.

Görselleriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Özgün görsellerinizin sahiplik ve lisans bilgisini doğru bildirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### IPTC mi yapılandırılmış veri mi?

İkisi de Google tarafından belgelenen yoldur. Görseli çok sayfada ya da başka sitelerde kullanılacaksa IPTC; sitenizdeki sayfa düzeyinde kontrol için yapılandırılmış veri uygundur.

### “Lisanslanabilir” rozeti garanti mi?

Hayır. Lisans bilgisi sağlamak görseli rozete uygun hâle getirebilir; görünüm Google’ın kararıdır.

### Meta veri sıralamayı yükseltir mi?

Sıralama sinyali olarak sunulmaz; amaç sahibi ve kullanım koşullarını netleştirmektir.

### Stok görsellere de ekleyebilir miyim?

Sahibi siz değilseniz sahiplik bilgisi yazmayın. Lisans koşulları izin veriyorsa yalnızca doğru atıf bilgisini kullanın.

### Görsel eklentim meta veriyi siliyor, ne yapmalıyım?

Eklentinin meta veriyi koruma ayarlarına bakın ya da IPTC’yi yapılandırılmış veriyle sayfada ayrıca bildirin.

## Kaynaklar

- [Google Arama Merkezi: Google Görseller SEO: Resim meta verisi](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata?hl=tr)
- [Google Arama Merkezi: Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
