---
title: "CDN Kullanımı SEO İçin Nasıl Değerlendirilir?"
description: "CDN kullanmak SEO’yu nasıl etkiler? Hız ve tarama hızına katkısı, soğuk önbellek, güvenlik duvarının Googlebot’u engellemesi, 503 önerisi ve kontrol adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Kaynak sunucu, CDN önbelleği ve Googlebot arasındaki istek akışı"
---

CDN (içerik yayınlama ağı), sitenizin dosyalarını kullanıcıya yakın sunuculardan sunarak hızı ve dayanıklılığı artırır; doğrudan bir sıralama etkeni değildir, ama hız, sunucu yükü ve tarama üzerinden SEO’ya dokunur. Google, CDN ile desteklenen sitelerde daha yüksek tarama hızına izin verdiğini belirtir. Risk ise CDN’in güvenlik katmanındadır: Googlebot’u engelleyen ya da “insan mısınız?” sayfası gösteren bir kural, sayfalarınızın dizinden düşmesine yol açabilir.

Küçük ve yerel bir işletme sitesi için CDN şart değildir; büyük, çok görselli ya da yoğun trafikli sitelerde anlamlı kazanç sağlar. Değerlendirme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## CDN nedir?

Google’ın tanımıyla CDN’ler, kaynak sunucunuz (sitenizin bulunduğu yer) ile son kullanıcı arasındaki bir aracıdır ve bazı dosyaları kullanıcıya onlar sunar. Geleneksel odakları önbelleğe almadır: bir kullanıcı bir adres istediğinde CDN içeriği bir süreliğine önbelleğinde saklar; sunucunuz aynı dosyayı tekrar tekrar göndermek zorunda kalmaz ([Crawling December: CDN’ler ve tarama](https://developers.google.com/search/blog/2024/12/crawling-december-cdns?hl=tr)).

Google üç yarar sayar:

- **Hız:** Kullanıcıya yakın bir konumdan içerik sunmak siteyi önemli ölçüde hızlandırabilir.
- **Koruma:** CDN’ler aşırı ya da kötü amaçlı trafiği tespit edip engellemede başarılıdır.
- **Güvenilirlik:** Bazı CDN’ler, kaynak sunucu kapalıyken bile (statik içerik için) siteyi sunabilir.

Aynı yazı, medya, JavaScript, CSS ya da HTML CDN önbelleğinden sunulduğunda sunucu yükünün azaldığını; bunun genellikle sayfaların daha hızlı yüklenmesi ve daha iyi dönüşüm oranı anlamına geldiğini de söyler.

## SEO’ya etkisi: üç yol

**1. Sayfa hızı.** Uzaktaki ziyaretçi için sunucu yanıt süresi ve dosya indirme süresi kısalır ([TTFB nasıl iyileştirilir?](/blog/sunucu-yanit-suresi-ttfb-nasil-iyilestirilir/)). Ziyaretçilerinizin tamamı Türkiye’deyse ve sunucunuz da Türkiye’deyse bu kazanç sınırlı olur; ihracat yapan, yurt dışından ziyaretçi alan siteler için belirgindir.

**2. Tarama hızı.** Google’a göre tarama altyapısı, CDN ile desteklenen sitelerde daha yüksek tarama hızına izin verecek biçimde tasarlanmıştır; bunun CDN olduğu, adresi sunan hizmetin IP adresinden tahmin edilir. Sunucu aşırı yük altında yavaşladığında Google taramayı kısar; CDN’li sitede bu eşik çok daha yüksektir.

**3. Erişilebilirlik.** Kampanya günü çöken bir site hem satışı hem taramayı kaybeder; CDN yükü dağıtır ([503 hatası SEO’yu nasıl etkiler?](/blog/503-hatasi-seoyu-nasil-etkiler-bakim-ve-kesintiler/)).

Bunların hiçbiri “CDN kullanan site üst sıraya çıkar” demek değildir. CDN, zayıf içeriği ya da kötü site yapısını telafi etmez.

## Soğuk önbellek: büyük sitelerde dikkat

Google bir ayrıntıya dikkat çeker: bir adrese ilk kez erişildiğinde CDN’in önbelleği “soğuktur”; içerik henüz önbellekte yoktur. Önbelleği “ısıtmak” için kaynak sunucunuzun o adresi en az bir kez sunması gerekir.

Yazıdaki örnek: 1.000.007 fotoğraflı bir stok sitesi yayına alınırsa, CDN olsa bile sunucunun bu adreslerin her birini en az bir kez sunması gerekir; tarama hızı birkaç gün yüksek seyreder. Çok sayıda sayfayı aynı anda yayınlamayı planlıyorsanız sunucu kapasitesini buna göre hesaplayın ([büyük sitelerde tarama bütçesi](/blog/buyuk-sitelerde-tarama-butcesi-nasil-yonetilir/)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## En büyük risk: aşırı korumacı CDN

CDN’lerin güvenlik katmanı (web uygulaması güvenlik duvarı, WAF) bazen arama motoru tarayıcılarını da istenmeyen bot sayar. Google bunun, tarayıcıların siteye erişmesini ve sonuç olarak sitenin arama sonuçlarında gösterilmesini engelleyebileceğini yazar. Engellemeleri ikiye ayırır.

### Hard engellemeler

CDN’in tarama isteğine bir hata yanıtı göndermesidir:

- **503 / 429 durum kodları:** Google’a göre geçici bir engellemeyi bildirmek için tercih edilen yol budur; sorunu düzeltmeniz için zaman kazandırır.
- **Ağ zaman aşımları:** “Hard” hata sayılır; etkilenen adreslerin dizinden kaldırılmasına yol açar ve tarama hızını da belirgin biçimde düşürebilir.
- **200 koduyla dönen hata mesajı:** Google bunu özellikle kötü bulur. Hata metni hata olarak algılanırsa adres Arama’dan kaldırılır; algılanmazsa aynı hata metnini taşıyan tüm sayfalar kopya sayılıp dizinden çıkarılabilir. Bu durumdan kurtulmak daha uzun sürebilir.

### Soft engellemeler

CDN “insan olduğunuzdan emin misiniz?” türünde bir ara sayfa gösterdiğinde tarayıcı sitenizi değil, yalnızca o ara sayfayı görür. Google’ın açık tavsiyesi: bot doğrulaması içeren ara sayfalarda tarayıcılar gibi otomatik istemcilere, içeriğin geçici olarak kullanılamadığını belirten **503** durum kodu gönderin. Böylece içeriğin dizinden otomatik kaldırılmasını önleyebilirsiniz.

## Googlebot’un engellenip engellenmediğini nasıl anlarsınız?

Google’ın önerdiği en kolay yol: Search Console’daki URL Denetleme aracını kullanmak ve oluşturulan sayfanın görüntüsünü incelemek. Sayfanız görünüyorsa sorun yoktur. Boş sayfa, hata ya da bot doğrulama istemi görünüyorsa CDN sağlayıcınızla iletişime geçin.

Ek kontroller:

1. Search Console’da tarama istatistiklerinde ve dizin raporunda 5xx, 403 ve zaman aşımı artışı var mı?
2. CDN panelinde engellenen isteklerde Googlebot kullanıcı aracısı ya da Google IP aralıkları görünüyor mu?
3. Tarayıcının gerçekten Google’dan geldiğini doğrulayarak izin listesine alın; yalnızca kullanıcı aracısı adına güvenmeyin, çünkü sahte botlar bu adı taklit eder ([Googlebot 403 alıyorsa](/blog/googlebot-403-hatasi-aliyorsa-neler-kontrol-edilmeli/)).
4. “Saldırı altındayım” türü sıkı modları yalnızca gerektiğinde ve kısa süre açın.

## Statik dosyalar için ayrı alan adı mı?

İki kurulum yaygındır: statik dosyaları `cdn.ornek.com` gibi ayrı bir ana makine adından sunmak ya da ana alan adının tamamını CDN arkasına almak. Google’a göre kaynakları ayrı bir ana makine adına bölmek sayfaların oluşturulmasını daha verimli kılabilir; ancak farklı bir ana makine adına bağlanmanın maliyeti sayfa performansını olumsuz etkileyebilir. Ana makineyi CDN ile desteklemek bu sorunu önler. Google’ın tarama altyapısı iki seçeneği de destekler; işletmenize uygun olanı seçin.

Ayrı alan adı kullanıyorsanız:

- Görseller için görsel site haritasına CDN adreslerini ekleyebilirsiniz; Google, CDN alan adının sahipliğini Search Console’da doğrulamanızı önerir ([görseller neden çıkmıyor?](/blog/gorsellerim-google-gorsellerde-neden-cikmiyor/)).
- CDN alan adındaki robots.txt, görsel ve betik dosyalarını engellemesin.
- Görsel adreslerini sık değiştirmeyin.

## CDN ve önbellek: içerik güncelliği

HTML’i de önbelleğe alıyorsanız, güncellediğiniz sayfanın eski sürümü hem ziyaretçiye hem Googlebot’a sunulmaya devam edebilir. Önlem:

- İçerik değişince ilgili adreslerin önbelleğini temizleyin.
- Sepet, hesap ve ödeme gibi kişiye özel sayfaları önbellek dışında tutun.
- `noindex` ya da yönlendirme gibi başlıkların CDN’den de doğru geçtiğini test edin ([X-Robots-Tag nasıl kullanılır?](/blog/x-robots-tag-nasil-kullanilir/)).

## Kimler için gerekli, kimler için değil?

| Site türü | CDN ihtiyacı |
|---|---|
| Beş–on sayfalık yerel işletme sitesi, Türkiye’de barındırılıyor | Çoğunlukla gerekmez; iyi barındırma ve önbellek yeter |
| Çok görselli katalog, e-ticaret | Yararlı |
| Yurt dışından ziyaretçi alan ihracatçı | Yararlı |
| Kampanya dönemlerinde trafik sıçraması yaşayan site | Yararlı |
| Binlerce sayfalı haber ya da ilan sitesi | Güçlü biçimde yararlı |

Önce ölçün: gerçek kullanıcı verisinde sorun yoksa CDN eklemek karmaşıklık getirir ([site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili ihracatçısı siteyi CDN arkasına alıyor; iki hafta sonra yurt dışı sayfalarının dizinden düştüğünü fark ediyor.

- **Teşhis:** URL Denetleme’de oluşturulan sayfa görüntüsü “güvenlik kontrolü” ara sayfası gösteriyor; CDN’in bot koruması Googlebot’u engelliyor ve 200 koduyla yanıt veriyor.
- **Düzeltme:** Doğrulanmış arama motoru tarayıcıları için istisna kuralı tanımlanıyor; doğrulama sayfası otomatik istemcilere 503 dönecek biçimde ayarlanıyor.
- **İzleme:** Etkilenen sayfalar yeniden taramaya gönderiliyor; dizin raporu haftalık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **CDN’i sıralama etkeni sanmak.**
2. **Bot korumasını açıp Googlebot’u test etmemek.**
3. **Doğrulama sayfasını 200 koduyla sunmak.**
4. **HTML önbelleğini temizlemeden içerik güncellemek.**
5. **CDN alan adındaki görselleri robots.txt ile kapatmak.**
6. **Ölçmeden, ihtiyaç yokken kurmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin CDN’e ihtiyacı olup olmadığını gerçek kullanıcı verisiyle değerlendiririz,
- CDN ve güvenlik duvarı kurallarını Googlebot erişimi açısından test ederiz,
- önbellek ve başlık ayarlarını denetleriz,
- geçiş sonrası tarama ve dizin durumunu izleriz.

Değerlendirme için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### CDN kullanmak sıralamamı yükseltir mi?

Doğrudan hayır. Hız, erişilebilirlik ve tarama üzerinden dolaylı katkı sağlar.

### CDN taramayı nasıl etkiler?

Google, CDN ile desteklenen sitelerde daha yüksek tarama hızına izin verdiğini belirtir; ancak her adres ilk seferde kaynak sunucudan sunulmak zorundadır.

### CDN Googlebot’u engelleyebilir mi?

Evet. Güvenlik duvarı kuralları ya da bot doğrulama sayfaları tarayıcıyı engelleyebilir; URL Denetleme’de oluşturulan görüntüyü kontrol edin.

### Bot doğrulama sayfası hangi kodu döndürmeli?

Google, otomatik istemcilere 503 gönderilmesini önemle tavsiye eder.

### Küçük bir işletme sitesine CDN gerekir mi?

Çoğu zaman gerekmez; iyi barındırma ve doğru önbellek yeterlidir.

## Kaynaklar

- [Google Arama Merkezi Blogu: Crawling December – CDN’ler ve tarama](https://developers.google.com/search/blog/2024/12/crawling-december-cdns?hl=tr)
