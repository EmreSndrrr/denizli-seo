---
title: "Siteyi Güncelledim, Google’da Hâlâ Eskisi Görünüyor"
description: "Sitedeki bilgiyi değiştirdiniz ama Google’da hâlâ eskisi mi görünüyor? Yeniden tarama süresi, URL Denetleme, site haritası ve profil bilgisi farkı."
date: 2026-11-15
service: teknik-seo
imageAlt: "Güncellenen sayfa ile arama sonucunda görünen eski başlık ve açıklamanın karşılaştırması"
---

Sitenizde bir bilgiyi değiştirdiğinizde Google’daki sonuç hemen değişmez; çünkü Google sayfayı yeniden tarayıp işleyene kadar dizindeki eski kopyayı gösterir. Bu süre Google’a göre birkaç gün ile birkaç hafta arasında değişebilir. Hızlandırmak için Search Console’da URL Denetleme aracıyla yeniden tarama isteyebilir, çok sayfa değiştiyse site haritası gönderebilirsiniz. Eski bilgi hassassa (yanlış fiyat, kaldırılmış kişisel veri) snippet temizleme isteği de kullanılabilir.

Önce eski bilginin gerçekten nereden geldiğini bulmak gerekir: web sonucu mu, harita profili mi, yoksa başka bir site mi? Çözüm her biri için farklıdır. Teknik kontrol için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Google neden eskisini gösterir?

Google arama sonuçlarını canlı olarak sitenizden çekmez. Sayfaları tarar, bir kopyasını işler ve dizinde saklar; sonuçlardaki başlık ve açıklama bu kopyadan üretilir. Siz sayfayı değiştirdiğinizde dizindeki kopya eski kalır; ta ki Google sayfayı yeniden ziyaret edene kadar.

Yeniden ziyaret sıklığı sayfadan sayfaya değişir. Sık güncellenen ve çok bağlantı alan sayfalar daha sık, yılda bir değişen bir hakkımızda sayfası daha seyrek taranır. Google’ın başlık bağlantısı belgesi de aynı şeyi söyler: yapılan güncellemelerin fark edilmesi için sayfanın yeniden taranıp işlenmesi gerekir ve bu birkaç gün ila birkaç hafta sürebilir.

## Önce teşhis: eski bilgi nerede görünüyor?

| Eski bilgi nerede? | Kaynağı | Çözüm |
|---|---|---|
| Mavi başlık ve altındaki açıklama | Sitenizdeki sayfanın dizindeki kopyası | Yeniden tarama isteği |
| Sağdaki ya da üstteki işletme kartı, harita | Google İşletme Profili | Profili düzenleme |
| Başka bir sitenin sonucu | O sitenin sayfası | Site sahibine başvuru |
| Site adı, favicon | Ana sayfanın dizindeki kopyası | Ana sayfayı yeniden taratma |
| Yapay zekâ özeti | Birden çok kaynağın derlemesi | Kaynak sayfaları düzeltme |

İşletmelerin en sık karıştırdığı ikisi ilk iki satırdır: telefon numarası ya da çalışma saati çoğu zaman siteden değil, profilden gelir.

## Web sonucu için: yeniden tarama isteyin

Google’ın belgesi iki yöntem sayar ([Google’dan URL’lerinizi yeniden taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)):

**1. URL Denetleme aracı (birkaç adres için).** Search Console’da adresi denetleyin ve “dizine ekleme isteğinde bulun” seçeneğini kullanın. Bunun için mülkün sahibi ya da tam kullanıcısı olmanız gerekir. Google iki uyarı yapar: tek tek gönderilen adresler için bir kota vardır ve aynı adres için birden fazla istek göndermek taramayı hızlandırmaz ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)).

**2. Site haritası (çok sayıda adres için).** Çok sayfa değiştiyse site haritası gönderin; değişen sayfaların `lastmod` tarihleri gerçek değişikliği yansıtsın ([site haritası nasıl oluşturulur?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).

Belgenin üç genel notu:

- Tarama birkaç gün ile birkaç hafta arasında zaman alabilir; sabırlı olun.
- Tarama isteğinde bulunmak, adresin hemen ya da ileride dizine ekleneceğini garanti etmez.
- Sistemler, yüksek kaliteli ve yararlı içeriğin hızla dahil edilmesine öncelik verir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Değişiklik gerçekten yayında mı?

Yeniden tarama istemeden önce Google’ın yeni sürümü görebildiğinden emin olun. Sık rastlanan engeller:

1. **Önbellek.** Sunucu, eklenti ya da CDN önbelleği eski sayfayı sunuyor olabilir. Siz yönetici olarak yeni sürümü görürken ziyaretçi ve Googlebot eskisini görür. Gizli pencerede ya da başka bir cihazda kontrol edin; önbelleği temizleyin.
2. **Yanlış adres.** Değiştirdiğiniz sayfa ile Google’daki sayfa aynı adres mi? `www`’lu/`www`’suz ya da eski bir kopya sayfa dizinde olabilir.
3. **JavaScript ile gelen içerik.** Yeni bilgi sayfaya betikle ekleniyorsa Google’ın oluşturulmuş sayfada onu gördüğünü URL Denetleme’deki canlı testle doğrulayın.
4. **Engel.** Sayfa robots.txt ile kapalıysa Google değişikliği göremez.
5. **Başlık ve açıklama güncellenmedi.** Gövdeyi değiştirip `<title>` ve meta açıklamayı eski bıraktıysanız sonuç eski görünmeye devam eder.

URL Denetleme aracı iki ayrı şey gösterir: dizindeki sürüm (son tarama tarihiyle) ve canlı test. Son tarama tarihi değişiklikten önceyse Google henüz gelmemiştir; canlı test yeni içeriği gösteriyorsa beklemek yeterlidir.

## Başlık değişti ama açıklama eski (ya da tersi)

Google başlığı ve snippet’i ayrı ayrı ve otomatik üretir. Sayfa yeniden tarandıktan sonra bile:

- Açıklama, meta açıklamanızdan değil sayfadaki başka bir paragraftan alınabilir; o paragraf hâlâ eski bilgiyi içeriyor olabilir.
- Başlık, `<title>` yerine sayfadaki H1’den ya da bağlantı metinlerinden üretilebilir ([Google başlığımı neden değiştiriyor?](/blog/google-sayfa-basligimi-neden-degistiriyor/)).

Eski bilgiyi sayfanın her yerinde arayın: altbilgi, yan sütun, yapılandırılmış veri, görsel alt metinleri ve `og:` etiketleri dahil.

## Hassas bilgi için: snippet temizleme

Eski bilgi zarar veriyorsa (yanlışlıkla yayınlanan kişisel veri, hatalı fiyat) beklemek istemezsiniz. Search Console’daki Kaldırma aracında “aramadaki snippet’i temizle” seçeneği, sayfa yeniden dizine eklenene kadar sonuçtaki açıklamayı kaldırır; sayfa sonuçlarda kalır. Google bu seçeneği, bir sayfadan hassas bilgiyi kaldırdığınızda ve sonuçtaki snippet’i güncellemek istediğinizde kullanmanızı önerir ([URL kaldırma aracı](/blog/search-console-url-kaldirma-araci-ne-zaman-kullanilir/)).

Sıradan güncellemeler için bu araca gerek yoktur.

## İşletme kartındaki bilgi eskiyse

Telefon, adres, çalışma saati ve işletme adı arama sonucunun yanında ya da haritada görünüyorsa kaynak Google İşletme Profili’dir. Sitenizi güncellemek bunu değiştirmez:

- Profili yöneten hesapla girip bilgiyi düzenleyin.
- Google, doğrulanmış profildeki düzenlemelerin incelendiğini; incelemenin genellikle 10 dakika, bazı durumlarda 30 güne kadar sürebildiğini belirtir.
- Sitedeki, profildeki ve dizinlerdeki bilgi aynı olsun ([NAP tutarlılığı](/blog/ad-adres-telefon-tutarliligi/)).

Profil dışındaki harita hataları için [Haritalar’da hatalı bilgi bildirme](/blog/google-haritalarda-hatali-bilgi-nasil-bildirilir/) yazısına bakın.

## Eski bilgi başka bir sitedeyse

Eski telefonunuz bir rehber sitesinde, eski adresiniz bir haber yazısında duruyorsa o sayfayı siz değiştiremezsiniz. Yol:

1. Site sahibine yazın, güncelleme isteyin.
2. Sayfa güncellendi ama Google hâlâ eskisini gösteriyorsa Google’ın, sahibi olmadığınız sayfalar için sunduğu eski içeriği yenileme talebini kullanabilirsiniz.
3. Kendi kontrolünüzdeki kayıtları (sosyal profiller, dizinler) tek tek güncelleyin.

## Ne kadar beklemeli, ne zaman endişelenmeli?

- **Birkaç gün:** Olağan. Yeniden tarama isteğini bir kez gönderin, bekleyin.
- **İki–üç hafta:** URL Denetleme’de son tarama tarihine bakın. Tarih değişiklikten sonraysa ve sonuç hâlâ eskiyse, eski bilgi sayfanın başka bir yerinde duruyordur.
- **Bir ayı aşkın:** Sayfa taranmıyor olabilir: iç bağlantı, site haritası ve engelleri kontrol edin ([sitem neden görünmüyor?](/blog/web-sitem-googleda-neden-gorunmuyor-indeksleme-rehberi/)).

Her gün yeniden istek göndermek süreci hızlandırmaz; Google bunu açıkça yazar.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir diş kliniği taşınıyor; site güncelleniyor ama Google’da eski adres ve eski telefon görünmeye devam ediyor.

- **Teşhis:** Web sonucundaki açıklama, altbilgideki eski adresten geliyor; altbilgi şablonu güncellenmemiş. Haritadaki kart ise profilden geliyor ve profil hiç değiştirilmemiş.
- **Düzeltme:** Altbilgi ve yapılandırılmış veri güncelleniyor, önbellek temizleniyor, ana sayfa ve iletişim sayfası yeniden taramaya gönderiliyor. Profilde adres ve telefon düzenleniyor.
- **İzleme:** URL Denetleme’de son tarama tarihi takip ediliyor; iki hafta sonra sonuçlar kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Değişikliğin anında yansımasını beklemek.**
2. **Önbelleği temizlemeden yeniden tarama istemek.**
3. **Profil bilgisini siteden değiştirmeye çalışmak.**
4. **Eski bilgiyi altbilgi ve şemada unutmak.**
5. **Her gün yeniden dizine ekleme isteği göndermek.**
6. **Sıradan güncelleme için kaldırma aracını kullanmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- eski bilginin kaynağını (sayfa, şablon, şema, profil, dış site) buluruz,
- önbellek, engel ve adres sorunlarını gideririz,
- yeniden tarama ve site haritası sürecini yürütürüz,
- sonuçların güncellendiğini doğrularız.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Değişiklik Google’da ne zaman görünür?

Sayfa yeniden taranıp işlendiğinde; Google’a göre bu birkaç gün ile birkaç hafta sürebilir.

### Yeniden taramayı nasıl isterim?

Birkaç adres için URL Denetleme aracıyla, çok sayıda adres için site haritası göndererek.

### Birden çok kez istek göndermek hızlandırır mı?

Hayır. Google, aynı adres için birden fazla isteğin taramayı hızlandırmadığını belirtir.

### Telefon numaram neden hâlâ eski?

Büyük olasılıkla numara Google İşletme Profili’nden geliyor; profili ayrıca güncellemeniz gerekir.

### Eski açıklamayı hemen kaldırabilir miyim?

Hassas bilgi içeriyorsa Search Console’daki snippet temizleme isteğini kullanabilirsiniz.

## Kaynaklar

- [Google Arama Merkezi: Google’dan URL’lerinizi yeniden taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)
- [Search Console Yardımı: Kaldırma işlemleri aracı](https://support.google.com/webmasters/answer/9689846?hl=tr)
- [İşletme Profili Yardım: Düzenlemelerinize ne olduğunu anlama](https://support.google.com/business/answer/3038311?hl=tr)
