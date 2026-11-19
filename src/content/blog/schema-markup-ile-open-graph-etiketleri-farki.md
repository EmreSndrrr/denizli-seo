---
title: "Schema Markup ile Open Graph Etiketleri Arasındaki Fark"
description: "Schema markup ile Open Graph etiketleri arasındaki fark nedir? Arama motoru ve sosyal paylaşım için meta veri türleri, og:title’ın rolü ve ikisini birlikte kullanma."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir sayfanın arama sonucundaki görünümü ile sosyal medya paylaşım kartı görünümü yan yana"
---

Schema markup (yapılandırılmış veri), bir sayfadaki bilgiyi arama motorlarının anlayabileceği türlere (işletme, ürün, makale, yorum gibi) ve alanlara ayırarak tanımlar; Open Graph etiketleri ise sayfanın sosyal medyada ve mesajlaşma uygulamalarında paylaşıldığında nasıl görüneceğini (başlık, açıklama, görsel) belirler. İkisi farklı işler görür ve birbirinin yerine geçmez: schema arama motoru için anlam kazandırır, Open Graph paylaşım önizlemesi için kart hazırlar. Çoğu site için ikisini de doğru kurmak, ama birbirinden bağımsız düşünmek doğrudur.

Bu yazıda iki yöntemin ne yaptığını, farklarını, birbirlerine nasıl dokunabildiklerini (örneğin og:title’ın başlık bağlantısı kaynağı olması), her biri için hangi alanların kullanılacağını ve kontrol adımlarını anlatıyoruz. Open Graph’ın kurulumu için [Open Graph etiketleri nasıl eklenir?](/blog/open-graph-etiketleri-nasil-eklenir/), schema için [yapılandırılmış veri nedir? işletmeler için rehber](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Schema markup ne yapar?

Schema markup, schema.org sözlüğüne dayanan ve sayfanın ne hakkında olduğunu türler ve özelliklerle anlatan işaretlemedir. Örneğin bir sayfanın “yerel işletme” olduğunu, adresinin ve telefonunun ne olduğunu, bir ürünün fiyatını ve stok durumunu ya da bir makalenin yazarını ve yayın tarihini makine tarafından okunur biçimde yazar. Google’ın yapılandırılmış veri rehberi, bu verilerin Google’ın sayfanın içeriğini anlamasına yardımcı olduğunu ve Arama’da zengin sonuçlar için kullanılabileceğini anlatır ([yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)).

Schema’nın hedef kitlesi arama motorlarıdır: bilgiyi sınıflandırır, ilişkilendirir ve uygun olduğunda özel görünümler (zengin sonuçlar) için kullanılabilir hâle getirir.

## Open Graph etiketleri ne yapar?

Open Graph, bir sayfanın sosyal ağlarda ve mesajlaşma uygulamalarında paylaşıldığında hangi başlık, açıklama ve görselle gösterileceğini belirleyen meta etiketlerdir. Sayfanın `<head>` bölümüne `og:title`, `og:description`, `og:image`, `og:url` gibi etiketler yazılır. Bir bağlantıyı WhatsApp’ta, sosyal medyada ya da başka bir uygulamada paylaştığınızda çıkan kart, bu etiketlerden oluşur.

Open Graph’ın hedef kitlesi, paylaşım platformları ve onları kullanan insanlardır: bağlantının çekici ve doğru görünmesini sağlar. Arama sıralaması için doğrudan bir sinyal olarak sunulmaz; ama paylaşım kartı iyi hazırlanırsa tıklama ve paylaşım davranışı iyileşebilir.

> **Hizmet almak için iletişime geçin.** Hem arama hem paylaşım için meta verilerinizi birlikte düzenleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Karşılaştırma tablosu

| Özellik | Schema markup | Open Graph |
| --- | --- | --- |
| Amacı | Sayfanın anlamını ve türünü tanımlamak | Paylaşım önizlemesini (kartı) belirlemek |
| Hedef | Arama motorları | Sosyal ağlar, mesajlaşma uygulamaları |
| Biçim | JSON-LD, microdata, RDFa | `<meta property="og:...">` etiketleri |
| Tipik alanlar | Tür, ad, adres, fiyat, puan, tarih | Başlık, açıklama, görsel, adres |
| Zengin sonuç sağlar mı? | Desteklenen türlerde olabilir | Hayır; paylaşım kartı için |
| Zorunlu mu? | Hayır | Hayır; ama paylaşım için önerilir |
| Test | Zengin Sonuçlar Testi, şema doğrulayıcı | Platformların paylaşım hata ayıklayıcıları |

Özet: schema, “bu sayfa nedir” sorusunu arama motoruna; Open Graph, “bu sayfa paylaşılınca nasıl görünsün” sorusunu paylaşım platformlarına cevaplar.

## İkisi birbirine dokunuyor mu?

Evet, bir noktada: Google’ın başlık bağlantıları rehberi, arama sonuçlarında gösterilen başlık bağlantısının oluşturulmasında kullanılabilecek kaynaklar arasında `og:title` meta etiketini de sayar ([Google Arama’daki başlık bağlantılarını etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr)). Yani Open Graph başlığı yalnızca sosyal paylaşım için değil, bazı durumlarda arama sonucundaki başlığa da katkıda bulunabilir. Bu yüzden `og:title`’ı sayfanın `<title>` etiketinden çok farklı, yanıltıcı ya da aşırı kısa yazmak istenmeyen sonuçlar doğurabilir. Başlık yazımı için [başlık etiketi ve meta açıklama nasıl yazılır?](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/) yazısına bakabilirsiniz.

Bunun dışında iki sistem bağımsızdır: schema’daki ürün fiyatı Open Graph’ı etkilemez, og:image schema’ya otomatik geçmez. Her ikisinin de içeriği sayfayla tutarlı olmalıdır; bir sayfada schema başka bir ad, Open Graph başka bir ad taşıyorsa karışıklık doğar.

## Hangi alanlar nerede yazılmalı?

Aynı bilgiyi iki yerde de doğru yazmak gerekir; ama alanlar farklıdır:

- **Başlık:** Sayfanın `<title>`’ı, `og:title` ve Article/Product için schema `name` ya da `headline` birbiriyle uyumlu olsun.
- **Açıklama:** Meta açıklama, `og:description` ve schema `description` aynı konuyu anlatsın; birebir aynı olmak zorunda değil.
- **Görsel:** `og:image` paylaşım kartı içindir (genellikle yatay, yeterince büyük); schema `image` ürün ya da makale görselini tanımlar. İkisi aynı görsel olabilir.
- **Adres:** Standart adres (canonical), `og:url` ve schema `url` aynı adresi göstersin.
- **İşletme bilgisi:** Adres, telefon ve saatler yalnızca schema’da (ve sayfada) bulunur; Open Graph bunları taşımaz.

Bu eşleşmeyi bir tabloya yazıp şablonlarınızı kontrol etmek, tutarsızlıkları önler.

## Hangisi önce kurulmalı?

Önceliği sitenizin amacı belirler. Yerel bir işletmeyseniz önce işletme bilgilerini içeren LocalBusiness schema’sı ([Organization ve LocalBusiness schema arasındaki fark](/blog/organization-ve-localbusiness-schema-farki/)), ardından Open Graph kurulumu mantıklıdır; çünkü sosyal paylaşım yapıyorsanız kartın düzgün görünmesi de önemlidir. E-ticarette ürün schema’sı ve (varsa) Merchant Center verisi öncelik kazanır ([Merchant Center ürün feed’i ile Product schema farkı](/blog/merchant-center-urun-feedi-ile-product-schema-farki/)). Blog için Article/BlogPosting schema’sı ve Open Graph birlikte kurulur. Hepsinde ortak kural: içerik doğru ve tutarlı olsun.

## Nasıl kontrol edilir?

1. **Schema için:** Google’ın Zengin Sonuçlar Testi ve şema doğrulama araçlarıyla JSON-LD’yi doğrulayın; Search Console’daki yapılandırılmış veri raporlarına bakın.
2. **Open Graph için:** Sayfa kaynağında `og:` etiketlerini arayın; paylaşım platformlarının önizleme/hata ayıklama araçlarıyla bağlantıyı test edin; gerçek bir paylaşımla kartı görün.
3. **Tutarlılık için:** Başlık, açıklama, görsel ve adresin üç yerde (sayfa, schema, Open Graph) uyumlu olduğunu karşılaştırın.
4. **Önbellek:** Paylaşım platformları kartı önbelleğe alır; değişiklikten sonra önizlemeyi yenilemek gerekebilir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir ev tekstili mağazasının sitesinde Open Graph etiketleri var ama schema yok; WhatsApp paylaşımları güzel görünüyor, Google’da ise mağaza bilgileri (adres, saat) sitenin kendisinden okunamıyor.

Mağaza ana sayfa ve iletişim sayfasına LocalBusiness JSON-LD’si ekletiyor; adres, telefon ve saatler Google İşletme Profili’yle aynı. Open Graph’ta `og:title` ve `<title>` uyumlu hâle getiriliyor; `og:image` için yatay ve net bir görsel hazırlanıyor. İki yapı Zengin Sonuçlar Testi ve paylaşım önizlemesiyle doğrulanıyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **İkisini birbirinin yerine koymak.** Biri arama motoru, diğeri paylaşım içindir.
2. **Tutarsız başlık ve açıklama yazmak.** `og:title` ile `<title>` uyumlu olmalı.
3. **Yalnızca Open Graph kurup schema’yı atlamak (ya da tersi).** İhtiyaca göre ikisini de değerlendirin.
4. **Paylaşım görselini küçük ya da yanlış oranda bırakmak.** Kart bozuk görünür.
5. **Sayfada olmayan bilgiyi schema’ya yazmak.** Genel yönergelere aykırı.
6. **Önizleme önbelleğini unutmak.** Değişiklik görünmeyebilir.

## Şablon düzeyinde tek bir kural seti

Çok sayıda sayfası olan sitelerde başlık, açıklama, görsel ve adresin üç yerde tutarlı olması için şablon düzeyinde bir kural seti yazın: “Sayfa başlığı `<title>` alanından gelir; `og:title` aynı değeri kullanır; Article ya da Product `name` alanı da aynı kaynaktan beslenir.” “Açıklama meta açıklama alanından gelir; `og:description` ve schema `description` aynı değeri kullanır.” “Görsel, sayfanın ana görselidir; hem `og:image` hem schema `image` aynı dosyayı gösterir.” Bu kural seti, geliştiriciye verilen tek bir yönerge olur ve sonradan eklenen yeni sayfalarda tutarsızlık oluşmasını önler. Yayından sonra rastgele beş sayfayı seçip üç alanı karşılaştırmak hızlı bir denetimdir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki schema ve Open Graph kullanımını denetler, tutarsızlıkları listeleriz,
- şablon düzeyinde başlık, açıklama, görsel ve adres eşleşmesini kurarız,
- paylaşım önizlemelerini ve yapılandırılmış veriyi test ederiz,
- sonuç vaat etmeden, görünürlüğü ve yapılandırılmış veri durumunu izleriz.

Meta veri kurulumunuz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Meta verilerinizi arama ve paylaşım için birlikte düzenleyelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Open Graph sıralamayı etkiler mi?

Doğrudan sıralama sinyali olarak sunulmaz. Ama `og:title` Google’ın başlık bağlantısı kaynaklarından biri olabilir; bu yüzden başlıkla uyumlu olmalı.

### Schema olmadan Open Graph yeterli mi?

Paylaşım kartı için evet. Arama motorunun sayfanızı daha iyi anlaması için ise ayrıca schema değerlendirilebilir.

### İkisini aynı anda kullanmalı mıyım?

Çoğu site için evet; çünkü farklı amaçlara hizmet ederler. Bilgilerin tutarlı olması şart.

### Open Graph görseli nasıl olmalı?

Yeterince büyük, net ve yatay bir görsel genellikle iyi çalışır. Kesin boyut için paylaşım platformlarının güncel yardım sayfalarına bakın.

### Değişikliğim paylaşım kartında görünmüyor, neden?

Platformlar kartı önbelleğe alır. Önizleme aracıyla bağlantıyı yenilemeniz gerekebilir.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’daki başlık bağlantılarını etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
