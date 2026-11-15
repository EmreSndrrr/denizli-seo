---
title: "Googlebot 403 Hatası Alıyorsa Neler Kontrol Edilmeli?"
description: "Googlebot siteye erişirken 403 alıyorsa neler kontrol edilmeli? Güvenlik duvarı, bot koruması, IP engeli, dizin izinleri; Googlebot doğrulama ve çözüm adımları."
date: 2026-11-14
service: teknik-seo
imageAlt: "Güvenlik duvarının Googlebot isteğine 403 yanıtı vermesini gösteren şema"
---

Googlebot 403 (Forbidden) alıyorsa sunucu ya da önündeki bir güvenlik katmanı Google’ın isteğini bilerek reddediyordur. Google’ın belgesine göre 4xx kodlarında içerik kullanılmaz, sayfa dizine eklenmez ve dizindeyse kaldırılır; yani 403, aranmasını istediğiniz sayfalarda ciddi bir sorundur. Kontrol sırası: URL Denetleme ile doğrulayın, güvenlik duvarı, bot koruması, IP/ülke engelleri ve izinlere bakın, Googlebot’u doğrulayıp engeli kaldırın.

Birçok site sahibi bu hatayı kendi tarayıcısında sayfa açıldığı için fark etmez; çünkü engel yalnızca belirli kullanıcı aracılarına, IP aralıklarına ya da isteğin davranışına uygulanır. Sonuç, dizine girmeyen ya da dizinden düşen sayfalardır. Bu yazı 403 sorununu bulmak ve çözmek için bir kontrol sırası sunuyor. Sitenizin erişim sorunlarını incelettirmek isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## 403 hatası nedir?

403 Forbidden, sunucunun isteği anladığını ama yetkilendirmeyi reddettiğini bildirir. 404’ten farkı, sayfanın var olabileceği ama erişimin engellendiğidir. Kodların genel anlamı için [HTTP durum kodları](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/) yazısına bakın.

Google’ın HTTP durum kodları belgesi, 4xx kodlarında içeriğin kullanılmadığını, sayfanın dizine eklenmediğini ve dizindeyse kaldırıldığını; 429 dışındaki 4xx kodlarının aynı işlendiğini söyler ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Ayrıca Google’ın bakım rehberi, siteyi 403 döndürerek engellemenin URL’leri Arama’dan kaldıracağını açıkça belirtir ([web sitesini geçici olarak duraklatma](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=tr)). Yani yanlışlıkla verilen 403, bilinçli bir kaldırma gibi çalışır.

## Belirtiler

Sorunun Googlebot’a özgü olduğunu şu işaretlerden anlarsınız:

- Siz sayfayı tarayıcıda sorunsuz açıyorsunuz ama Search Console URL Denetleme “erişilemedi” ya da “taranamadı” diyor.
- Sayfa dizine ekleme raporunda “erişim engellendi (403)” benzeri bir neden görüyorsunuz.
- Sunucu günlüklerinde Googlebot isteklerine 403 dönüyor.
- Sitenizde aniden dizine eklenen sayfa sayısı düşüyor.
- Yeni güvenlik eklentisi, güvenlik duvarı kuralı ya da hosting değişikliği yaptıktan sonra sorun başlamış.

## Adım 1: Sorunu doğrulayın

Önce sorunun gerçek olduğunu görün:

1. Search Console’da URL Denetleme aracına etkilenen adresi yazın ve “canlı URL’yi test et” sonucuna bakın; sayfanın Google tarafından alınıp alınamadığını gösterir ([URL Denetleme](https://support.google.com/webmasters/answer/9012289?hl=tr)).
2. Sayfa dizine ekleme raporunda hata nedenlerini ve etkilenen adres sayısını inceleyin ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).
3. Sunucu günlüklerinde Googlebot isteklerinin durum kodlarına bakın; günlük analizi için [SEO için log analizi](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/) yazısına göz atın.
4. Sorunun tüm sitede mi, belirli klasör ya da sayfa türlerinde mi olduğunu belirleyin.

## Adım 2: Güvenlik duvarı ve bot koruması

En sık sebep güvenlik katmanıdır:

- **Web uygulama güvenlik duvarı (WAF):** Kurallar, Googlebot’un hızlı ve otomatik isteklerini saldırı sanıp engelleyebilir.
- **Bot koruması ve istek sınırlama:** “Şüpheli bot” kuralları taramayı kesebilir.
- **Güvenlik eklentileri (WordPress vb.):** Aşırı sıkı ayarlar tarayıcıları engeller.
- **CDN ya da barındırma sağlayıcının koruması:** Altyapı düzeyinde ülke, IP ya da davranış kuralları olabilir.
- **Yeni kural ya da güncelleme:** Sorun yakın zamanda başladıysa son değişikliğe bakın.

Çözüm: kuralları gözden geçirip doğrulanmış Googlebot’u engellemeyecek biçimde düzenlemek (aşağıda). Hosting ya da güvenlik sağlayıcınızın desteğiyle çalışın.

## Adım 3: IP, ülke ve kullanıcı aracısı engelleri

Şunları kontrol edin:

- **IP aralığı engelleri:** Spam nedeniyle engellediğiniz geniş aralıklar Google’ın IP’lerini kapsıyor olabilir.
- **Ülke engelleri:** Googlebot ağırlıklı olarak ABD kaynaklı görünür; ülke bazlı engeller taramayı kesebilir. Google’ın dil/bölge rehberi, Googlebot’un genellikle ABD merkezli göründüğünü belirtir ([çok bölgeli siteler](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=tr)).
- **Kullanıcı aracısı kuralları:** Sunucu yapılandırmasında “bot” kelimesini yasaklayan kurallar.
- **`.htaccess` ya da sunucu kuralları:** Hatalı `deny`/`Require` satırları.

## Adım 4: Dizin ve dosya izinleri

403, sunucu dosya izinlerinden de kaynaklanabilir:

- Klasör ya da dosya izinleri yanlışsa bazı istekler reddedilir.
- Dizin listelemesi kapalıyken klasör adresi istenirse 403 görülebilir (bu normal olabilir).
- Yanlış sahiplik ya da izinle yüklenmiş görsel ve betik dosyaları 403 verebilir.

Kaynak dosyalarının (CSS, JavaScript, görsel) 403 vermesi, Google’ın sayfayı doğru oluşturmasını da engelleyebilir. URL Denetleme’de sayfa kaynaklarını kontrol edin.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 5: Googlebot’u doğrulayın, sonra engeli kaldırın

Güvenlik kuralını gevşetmeden önce isteğin gerçekten Google’dan geldiğini doğrulayın. Google’ın doğrulama rehberi şu yöntemi anlatır ([Google tarayıcılarını doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)):

1. Günlükteki IP’ye ters DNS araması yapın ve alan adının `googlebot.com`, `google.com` ya da `googleusercontent.com` olduğunu doğrulayın.
2. Bu alan adı için yönlendirilmiş DNS araması yapıp orijinal IP ile eşleştiğini kontrol edin.
3. Büyük ölçekte, yayınlanan Google IP listesiyle otomatik eşleştirme kullanın.

Doğrulanmış Google isteklerini güvenlik kuralına “izin ver” (allowlist) olarak ekleyin; kullanıcı aracısına göre değil, doğrulanmış IP ya da alan adına göre izin vermek daha güvenlidir, çünkü kötü niyetli botlar kendilerini Googlebot olarak tanıtabilir. Güvenlik duvarını tamamen kapatmak yerine yalnızca Google’ın doğrulanmış tarayıcılarına istisna tanıyın.

## Adım 6: Düzeltmeden sonra yeniden test edin

Kuralları değiştirdikten sonra:

1. URL Denetleme’de canlı URL testini tekrarlayın.
2. Birkaç önemli adres (ana sayfa, hizmet sayfası, robots.txt, site haritası) için testi yapın.
3. Search Console’da önemli sayfalar için yeniden dizine ekleme isteyin.
4. Sunucu günlüklerinde Googlebot isteklerinin 200 dönmeye başladığını doğrulayın.
5. Sayfa dizine ekleme raporunu birkaç hafta izleyin.

Google’ın sayfaları yeniden taraması zaman alır; düzeltme anında etki göstermeyebilir.

## robots.txt ve site haritası da 403 veriyor mu?

Özellikle kritik dosyalar: `robots.txt` ve site haritası da 403 dönüyorsa Google siteyi hiç tarayamayabilir. Google’ın bakım rehberi, robots.txt’nin 503 ya da engelleyici kodlarla döndürülmemesi gerektiğini vurgular; 403 de benzer biçimde tüm taramayı olumsuz etkileyebilir. robots.txt’nin kökte, herkese açık ve 200 koduyla dönmesi gerekir. Ayrıntı için [robots.txt nedir, nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir üreticinin WordPress sitesi, yeni bir güvenlik eklentisi kurulduktan iki hafta sonra dizinden sayfa kaybediyor.

- **Doğrulama:** URL Denetleme canlı testi “erişilemedi” gösteriyor; günlükte Googlebot isteklerine 403 dönüyor.
- **Neden:** Eklentinin “agresif bot koruması” ayarı Google’ın hızlı isteklerini engelliyor.
- **Çözüm:** Google’ın doğrulanmış IP aralıkları için izin kuralı ekleniyor; bot koruması yumuşatılıyor.
- **Kontrol:** URL Denetleme’de sayfalar yeniden test ediliyor; dizine ekleme raporu birkaç hafta izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yalnızca kendi tarayıcısında sayfa açıldığı için sorun olmadığını sanmak.**
2. **Googlebot’u doğrulamadan tüm bot korumasını kapatmak.**
3. **Yalnızca kullanıcı aracısına göre izin vermek (taklit edilebilir).**
4. **Ülke ve IP engellerini gözden geçirmemek.**
5. **robots.txt ve site haritasını kontrol etmemek.**
6. **Düzeltmeden sonra yeniden test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Erişim engelleri sessizce görünürlük kaybettirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console ve sunucu günlüklerinden Googlebot erişim sorunlarını tespit ederiz,
- güvenlik duvarı, bot koruması, IP/ülke ve izin kurallarını hosting ya da güvenlik sağlayıcınızla birlikte gözden geçiririz,
- Google’ın doğrulanmış tarayıcıları için güvenli izin kuralları tanımlarız,
- düzeltmeden sonra yeniden test eder, dizine ekleme sonuçlarını raporlarız.

Sitenizde erişim sorunu şüpheniz varsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Googlebot 403 alırsa ne olur?

Google’a göre 4xx kodlarında içerik kullanılmaz ve sayfa dizine eklenmez; dizindeyse kaldırılır.

### Sitem bende açılıyor ama Google’da 403 görünüyor, neden?

Engel çoğunlukla IP, kullanıcı aracısı ya da davranışa özgü bir güvenlik kuralıdır; yalnızca Googlebot’a uygulanır.

### Googlebot’u nasıl doğrularım?

Ters DNS ve yönlendirilmiş DNS ile alan adının googlebot.com, google.com ya da googleusercontent.com olduğunu ve IP’nin eşleştiğini kontrol edin; ya da Google’ın IP listesini kullanın.

### Güvenlik duvarını kapatmalı mıyım?

Hayır. Yalnızca doğrulanmış Google istekleri için istisna tanımlayın.

### Düzeltme ne zaman etki eder?

Google sayfaları yeniden tarayana kadar zaman alır; URL Denetleme ile yeniden dizine ekleme isteyin ve durumu birkaç hafta izleyin.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Google tarayıcıları ve alıcılarından gelen istekleri doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)
- [Google Arama Merkezi: Web sitesini geçici olarak duraklatma veya devre dışı bırakma](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
