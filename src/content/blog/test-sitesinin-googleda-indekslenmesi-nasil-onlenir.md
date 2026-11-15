---
title: "Test Sitesinin Google’da İndekslenmesi Nasıl Önlenir?"
description: "Test (staging) sitesinin Google’da indekslenmesi nasıl önlenir? Şifre koruması, noindex ve robots.txt farkı, yayına geçişte unutulan ayarlar ve kontrol listesi."
date: 2026-11-15
service: teknik-seo
imageAlt: "Şifreyle korunan test sitesi ve yayın öncesi kontrol listesi"
---

Test sitesinin Google’a girmesini önlemenin en güvenli yolu, siteyi şifreyle (HTTP kimlik doğrulaması) korumaktır: arama motoru da meraklı ziyaretçi de içeriği göremez. İkinci seçenek tüm sayfalara `noindex` eklemektir. Yalnızca robots.txt ile `Disallow: /` yazmak yeterli değildir; engellenen bir adres, başka bir yerden bağlantı alıyorsa içeriği okunmadan da sonuçlarda görünebilir. Asıl risk ise tersidir: test ortamındaki `noindex` ya da robots.txt engelinin canlı siteye taşınması.

Bu yazı her iki yönü de anlatır: test sitesini gizlemek ve yayına geçerken gizlemeyi doğru kaldırmak. Yayın öncesi denetim için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Test sitesi neden dizine girer?

Test (staging) ortamı çoğunlukla `test.ornek.com`, `yeni.ornek.com`, `ornek.com/v2/` ya da ajansın alan adında `musteri.ajans.com` gibi bir adreste durur. Google bu adresi şu yollarla bulur:

- Birisi bağlantıyı bir e-postaya, sosyal medyaya ya da açık bir belgeye yapıştırır.
- Canlı sitedeki bir bağlantı, görsel ya da betik test adresine işaret eder.
- Test sitesinin site haritası ya da canlı siteyle aynı Search Console/Analytics kodu yayınlanır.
- Alan adının alt alan adları dışarıdan listelenir.

Sonuç: canlı sitenizin kopyası, yarım içerik ve “Lorem ipsum” metinleriyle Google’da görünür. Müşteri yanlış siteye gelir, yanlış fiyat görür; iki site aynı içerik için birbiriyle yarışır ([kopya içerik nedir?](/blog/kopya-icerik-nedir-nasil-onlenir/)).

## Üç yöntem ve aralarındaki fark

| Yöntem | Google içeriği görür mü? | Dizine girer mi? | Ziyaretçi görür mü? |
|---|---|---|---|
| Şifre koruması | Hayır | Hayır | Hayır |
| `noindex` | Evet (tarar) | Hayır | Evet |
| robots.txt `Disallow` | Hayır | Girebilir (yalnızca adres) | Evet |

### 1. Şifre koruması (önerilen)

Sunucu düzeyinde kullanıcı adı ve şifre isteyen bir koruma, test ortamı için en temiz çözümdür:

- Googlebot sayfaya erişemez; içerik taranmaz ve dizine alınmaz.
- Rakip, müşteri ya da meraklı biri adresi bulsa da içeriği göremez.
- Yayına geçerken taşınacak bir etiket ya da kural yoktur; koruma test sunucusunda kalır.

cPanel’de “dizin gizliliği” ayarıyla, Apache’de `.htaccess` ile kurulabilir. Alternatif olarak test sitesine yalnızca ofis IP adreslerinden erişim verilebilir.

### 2. noindex

Şifre mümkün değilse (ör. müşteriye kolayca göstermek gerekiyorsa) tüm sayfalara `noindex` ekleyin: meta etiketiyle ya da sunucudan `X-Robots-Tag: noindex` başlığıyla ([X-Robots-Tag nasıl kullanılır?](/blog/x-robots-tag-nasil-kullanilir/)). Başlık yöntemi, PDF ve görselleri de kapsadığı ve test sunucusunun yapılandırmasında kaldığı için daha güvenlidir.

Google’ın `noindex` belgesi bir koşul koyar: kuralın etkili olabilmesi için sayfanın robots.txt tarafından engellenmemesi ve tarayıcı tarafından erişilebilir olması gerekir ([noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)).

### 3. robots.txt (tek başına yetmez)

`Disallow: /` taramayı engeller, dizine eklemeyi değil. Google’ın aynı belgesi şunu söyler: sayfa robots.txt tarafından engellenirse tarayıcı `noindex` kuralını hiçbir zaman görmez ve sayfa, başka sayfalar ona bağlantı veriyorsa, sonuçlarda görüntülenmeye devam edebilir. Bu durumda sonuçta yalnızca adres ve “bu sayfa için bilgi yok” benzeri bir açıklama çıkar ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).

Bu yüzden robots.txt ile `noindex`’i **birlikte** kullanmak da hatadır: biri diğerinin okunmasını engeller.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## WordPress’te dikkat

WordPress’te Ayarlar > Okuma altında “arama motorlarının bu siteyi dizine eklemesini engelle” kutusu vardır. Test sitesinde işaretlemek pratik görünür; ama iki riski vardır:

1. Ayar veritabanında durur. Test sitesini canlıya veritabanıyla birlikte taşırsanız kutu işaretli gelir ve canlı siteniz dizinden çıkar.
2. İçeriği gizlemez; adresi bilen herkes siteyi görür.

Bu yüzden WordPress’te de sunucu düzeyinde şifre, kutuya güvenmekten iyidir ([WordPress SEO](/blog/wordpress-seo/)).

## Test sitesi zaten dizine girdiyse

1. **Önce korumayı kurun.** Şifre ekleyin ya da `noindex` gönderin.
2. **robots.txt engelini kaldırın** (varsa), yoksa Google `noindex`’i göremez. Şifre koyduysanız bu adım gerekmez; Google erişemediği sayfaları zamanla düşürür.
3. **Acilse kaldırma isteği gönderin.** Test adresi için Search Console mülkü ekleyip Kaldırma aracıyla önek bazında geçici kaldırma isteyebilirsiniz; istek yaklaşık altı ay geçerlidir, kalıcı önlem şifre ya da `noindex`’tir ([URL kaldırma aracı](/blog/search-console-url-kaldirma-araci-ne-zaman-kullanilir/)).
4. **Sızıntıyı bulun.** Canlı sitede test adresine giden bağlantı, görsel ya da betik var mı? Varsa düzeltin.
5. **`site:test.ornek.com` aramasıyla** birkaç hafta sonra kontrol edin.

## Asıl tehlike: yayına geçerken unutulanlar

Test sitesinin dizine girmesi can sıkar; canlı sitenin dizinden çıkması iş kaybettirir. Yayın günü şu kalıntılar en sık nedenlerdir:

- **`noindex` etiketi** şablonda ya da SEO eklentisi ayarında kalmıştır.
- **robots.txt** hâlâ `Disallow: /` içerir.
- **`X-Robots-Tag` başlığı** sunucu yapılandırmasıyla birlikte kopyalanmıştır; sayfa kaynağında görünmediği için fark edilmez.
- **Canonical etiketleri** test adresini gösterir.
- **İç bağlantılar, görseller ve site haritası** test alan adını içerir.
- **Şifre koruması** canlıda da açıktır; Googlebot 401 alır.
- **`hreflang` ve Open Graph adresleri** test alan adındadır.

Bu kalıntılar haftalarca fark edilmeyebilir; trafik yavaş yavaş düşer ([trafik düşüşü nasıl teşhis edilir?](/blog/trafik-dususu-nasil-teshis-edilir/)).

## Yayın günü kontrol listesi

Yayından hemen sonra, on dakikada yapılabilir:

1. Ana sayfa ve üç iç sayfanın kaynağında `noindex` arayın.
2. `ornek.com/robots.txt` adresini açın; `Disallow: /` olmamalı.
3. `curl -I https://ornek.com/` ile yanıt başlıklarında `X-Robots-Tag` olmadığını ve durum kodunun 200 olduğunu görün.
4. Sayfa kaynağında test alan adını aratın (canonical, bağlantı, görsel, `og:url`).
5. Site haritasını açın; adresler canlı alan adında mı?
6. Search Console’da ana sayfayı URL Denetleme ile canlı test edin: “dizine eklenebilir” yazmalı.
7. Eski adresler değiştiyse yönlendirmeleri test edin ([site yenilerken SEO kaybı](/blog/web-sitesi-yenileme-seo-kaybetmeden-nasil-yapilir/)).
8. Test sitesinin hâlâ korumalı olduğunu doğrulayın.

Bu listeyi yayın sürecinin yazılı bir parçası yapın; “hatırlarım” denilen madde unutulan maddedir.

## Test ortamı için iyi alışkanlıklar

- Test adresini herkese açık yerlerde paylaşmayın; müşteriye şifreyle birlikte gönderin.
- Test sitesinde canlı sitenin Analytics ve Search Console kodlarını çalıştırmayın; veriniz kirlenir.
- Test sitesini iş bitince kapatın ya da silin; unutulmuş eski test siteleri yıllarca dizinde kalabilir.
- Ajansla çalışıyorsanız test ortamının nasıl korunduğunu sorun.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya firmasının yeni sitesi `yeni.firma.com` adresinde hazırlanıyor. Marka aramasında hem eski site hem yarım hâldeki yeni site çıkıyor.

- **Teşhis:** Test sitesinde yalnızca robots.txt engeli var; ajans bağlantıyı sosyal medyada paylaşmış.
- **Düzeltme:** Test sitesine sunucu şifresi konuyor; Search Console’a test alan adı eklenip önek bazında geçici kaldırma isteniyor.
- **Yayın günü:** Kontrol listesi uygulanıyor; canonical etiketlerinin test adresini gösterdiği fark edilip düzeltiliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yalnızca robots.txt ile yetinmek.**
2. **robots.txt engeli ile `noindex`’i birlikte kullanmak.**
3. **WordPress’teki dizine eklemeyi engelle kutusunu canlıya taşımak.**
4. **Canonical ve iç bağlantılarda test adresini bırakmak.**
5. **Yayın sonrası başlıkları ve robots.txt’i kontrol etmemek.**
6. **Eski test sitelerini açık bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- test ortamınızın korumasını kurar ya da denetleriz,
- dizine girmiş test adreslerini temizleriz,
- yayın günü kontrol listesini sizinle birlikte uygularız,
- yayın sonrası dizin durumunu ve trafiği izleriz.

Yayın öncesi kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Test sitesi için en güvenli yöntem hangisi?

Sunucu düzeyinde şifre koruması; hem arama motorunu hem ziyaretçiyi dışarıda tutar.

### robots.txt ile engellemek yeterli mi?

Hayır. Engellenen adres, bağlantı alıyorsa içeriği olmadan da sonuçlarda görünebilir.

### noindex ile robots.txt’i birlikte kullanabilir miyim?

Kullanmayın. Tarama engellenirse Google `noindex` kuralını göremez.

### Test sitem Google’a girmiş, ne yapmalıyım?

Şifre ya da `noindex` ekleyin, robots.txt engelini kaldırın, acilse geçici kaldırma isteği gönderin.

### Yayından sonra ilk neyi kontrol etmeliyim?

`noindex` etiketi, robots.txt, `X-Robots-Tag` başlığı ve canonical adresleri.

## Kaynaklar

- [Google Arama Merkezi: noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Search Console Yardımı: Kaldırma işlemleri aracı](https://support.google.com/webmasters/answer/9689846?hl=tr)
