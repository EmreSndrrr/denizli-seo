---
title: "Web Sitesi Güvenliği: SSL, Yedek ve Güncelleme"
description: "Web sitesi güvenliği için SSL (HTTPS), düzenli yedek, güncelleme, güçlü parola ve erişim kontrolü: küçük işletmeler için pratik liste ve SEO ile ilişkisi."
date: 2026-11-12
service: web-tasarim
imageAlt: "Kilitli site: HTTPS, yedek ve güncelleme simgeleri"
---

Güvenli bir site için dört temel iş vardır: HTTPS (SSL sertifikası), düzenli ve test edilmiş yedek, yazılım ve eklenti güncellemeleri ile güçlü parola ve sınırlı erişim. Güvenlik sorunları hem müşteriyi hem aramadaki görünürlüğü etkileyebilir; Google’ın trafik düşüşü rehberi, güvenlik sorunlarını düşüşün olası nedenleri arasında sayar. Güvenlik tam bir garanti sunmaz; amaç riski azaltmak ve sorun olduğunda hızlı toparlanmaktır.

Küçük işletmelerin siteleri de saldırı ya da ele geçirilme riskine sahiptir; çoğu zaman eski eklenti ya da zayıf parola yüzünden. Bu yazı, işletme sahibinin yapabileceği temel kontrolleri anlatır. HTTPS’e geçiş için [HTTPS’e geçiş SEO kontrol listesi](/blog/https-e-gecis-seo-kontrol-listesi/), WordPress için [WordPress SEO](/blog/wordpress-seo/) yazılarına bakabilirsiniz.

## Temel dört iş

| İş | Ne yapılır? |
| --- | --- |
| HTTPS | SSL sertifikası kurulur; tüm sayfalar HTTPS üzerinden açılır, HTTP sürümü tek adrese yönlendirilir |
| Yedek | Düzenli (dosya + veritabanı), site dışında saklanan, geri yüklemesi denenmiş yedek |
| Güncelleme | Yazılım, tema ve eklentiler güncel tutulur; kullanılmayanlar kaldırılır |
| Erişim | Güçlü ve benzersiz parola, mümkünse iki aşamalı doğrulama; gereksiz kullanıcılar kaldırılır |

## SEO ile ilişkisi

- **HTTPS:** Sitenin HTTP’den HTTPS’e taşınması, Google’ın site taşıma rehberinde bir taşıma örneği olarak ele alınır; yönlendirmelerin doğru kurulması gerekir ([site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)).
- **Güvenlik sorunu:** Ele geçirilmiş site, spam içerik barındırabilir ve arama sonuçlarında sorun yaşayabilir. Trafik düşüşlerinde güvenlik sorunları da kontrol edilecek nedenler arasındadır ([trafik düşüşü hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)). Teşhis için [trafik düşüşü nasıl teşhis edilir?](/blog/trafik-dususu-nasil-teshis-edilir/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım güvenlik listesi

1. **HTTPS’i doğrulayın.** Tüm sayfalar açılıyor mu, karışık içerik uyarısı var mı?
2. **Yedek planı kurun.** Otomatik ve düzenli; bir kopya site dışında.
3. **Geri yüklemeyi bir kez deneyin.** Yedeğin çalıştığını bilin.
4. **Güncellemeleri düzenli yapın.** Önce yedek, sonra güncelleme.
5. **Kullanılmayan eklenti ve temaları kaldırın.**
6. **Parolaları güçlendirin.** Her hizmet için ayrı; mümkünse iki aşamalı doğrulama.
7. **Kullanıcıları gözden geçirin.** Ayrılan kişilerin erişimini kapatın.
8. **Search Console’u izleyin.** Güvenlikle ilgili bildirimleri e-postadan kaçırmayın.
9. **Ne yapacağınızı yazın.** Site ele geçirilirse kimi arayacaksınız?

## Sık yapılan hatalar

- **Yedeğin olmaması:** Otomatik yedek
- **Yedeğin aynı sunucuda durması:** Site dışında bir kopya
- **Güncellemeleri aylarca ertelemek:** Düzenli güncelleme
- **Kullanılmayan eklentiler:** Kaldırın
- **Herkese yönetici yetkisi:** En az yetki
- **Aynı parola her yerde:** Parola yöneticisi
- **HTTP ve HTTPS’i iki ayrı site gibi bırakmak:** Tek adrese yönlendirin

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir otelin sitesi, eski bir eklenti yüzünden ele geçiriliyor ve sayfalara istenmeyen bağlantılar ekleniyor. Otelin düzenli yedeği olduğu için site hızla geri yükleniyor; eklenti kaldırılıyor, parolalar değiştiriliyor, Search Console’daki bildirimler kontrol ediliyor. Yedeği olmayan bir sitede aynı olay çok daha zahmetli olurdu.

## Parola ve erişim yönetimi nasıl yapılır?

Siteler çoğu zaman karmaşık saldırılarla değil, zayıf ya da yeniden kullanılan parolalarla ele geçirilir. Her yönetim hesabı için benzersiz ve uzun bir parola kullanın; parola yöneticisi bu işi kolaylaştırır. Mümkünse iki aşamalı doğrulamayı açın. Siteye erişimi olan kişilerin listesini tutun ve ayrılan çalışan, eski ajans ya da eski freelancer’ın erişimini hemen kapatın. Yönetici yetkisini yalnızca gerçekten ihtiyacı olanlara verin; içerik girişi yapan biri için tam yönetici yetkisi gerekmez.

## Yedekleme nasıl planlanır?

İyi bir yedek üç özellik taşır: düzenlidir, sunucudan bağımsız bir yerde saklanır ve geri yüklenebildiği denenmiştir. Siteniz sık güncelleniyorsa günlük, az değişiyorsa haftalık yedek yeterlidir. Hem dosyaları hem veritabanını yedekleyin. Yedeği yalnızca site sunucusunda tutmayın; sunucu bozulursa yedek de gider. Yılda bir kez, yedeği bir test ortamına geri yükleyerek denemeyi unutmayın; geri yüklenemeyen yedek, yedek sayılmaz.

## Güncellemeler nasıl yönetilir?

Yazılım, tema ve eklenti güncellemelerinin önemli bir kısmı güvenlik açıklarını kapatır. Güncellemeleri aylarca ertelemek, siteyi bilinen açıklara açık bırakır. Önce yedek alın, sonra güncelleyin; güncelleme sonrası siteyi gözden geçirin (form, ödeme, menü). Kullanmadığınız eklenti ve temaları silin; yalnızca pasif bırakmak yetmez. Terk edilmiş, uzun süredir güncellenmeyen eklentilerden uzak durun.

## HTTPS’te sık görülen sorunlar

SSL sertifikası kurmak yarım iştir. Sertifika dolduğunda tarayıcı uyarı verir ve ziyaretçi kaybolur; bitiş tarihini takip edin ya da otomatik yenileme kullanın. Sayfa HTTPS’le açılıp içinde HTTP görsel ya da betik varsa tarayıcı “karışık içerik” uyarısı verebilir; bunları da HTTPS adreslerine çevirin. HTTP sürümünün HTTPS’e kalıcı yönlendirildiğinden emin olun. Geçiş adımları için [HTTPS’e geçiş SEO kontrol listesi](/blog/https-e-gecis-seo-kontrol-listesi/) yazısına bakın.

## Site ele geçirilirse ne yapmalısınız?

Önce sakin kalın ve sırayla ilerleyin. Siteye erişimi kısıtlayın ya da bakım moduna alın. Parolaları değiştirin. Temiz bir yedeğe dönün. Açığın nasıl oluştuğunu bulup kapatın (eski eklenti, zayıf parola). Search Console’da güvenlikle ilgili bir bildirim varsa okuyun ve belirtilen adımları izleyin. Ele geçirilmiş siteler aramada olumsuz etkilenebilir; Google’ın trafik düşüşü rehberi de güvenlik sorunlarını kontrol edilecek nedenler arasında sayar ([trafik düşüşü hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)). Durumun ciddiyetine göre bir uzmandan destek alın.

## Basit bir yıllık güvenlik takvimi

- **Her ay:** güncellemeleri uygulayın, yedeğin alındığını doğrulayın.
- **Üç ayda bir:** kullanıcı listesini ve yetkileri gözden geçirin, kullanılmayan eklentileri silin.
- **Yılda bir:** yedeği geri yüklemeyi deneyin, SSL bitiş tarihini ve hosting sözleşmesini kontrol edin.
- **Her yeni kişi ya da ajansla:** erişim vermeden önce yazılı kural belirleyin; çalışma bitince erişimi kapatın.

## Güvenlik için sorumlulukları paylaşmak

Siteyi bir ajans ya da yazılımcı yönetiyorsa kimin neyi yaptığını yazılı belirleyin: yedeği kim alıyor, güncellemeleri kim yapıyor, sorun çıkarsa kimi arayacaksınız? Hosting firmasının kapsamı ile sizin sorumluluğunuzu ayırın. Bu netlik, bir sorun yaşandığında zaman kazandırır.

## Bu ay yapılacak üç güvenlik işi

Yönetici parolalarını yenileyin ve iki aşamalı doğrulamayı açın. Son yedeği bir kez geri yüklemeyi deneyin. Kullanmadığınız eklenti ve temaları silin. Bu üç iş bir öğleden sonra sürer ve çoğu temel riski ortadan kaldırır.

## Güvenlik için küçük bir olay planı

Sorun çıktığında paniğe kapılmamak için yazılı bir plan hazırlayın: siteye kim müdahale eder, hosting ve ajans iletişim bilgileri neler, son temiz yedek nerede, parolalar hangi sırayla değiştirilir, müşteriye ne söylenir? Planı basılı ve dijital olarak saklayın. Yılda bir kez planı gözden geçirip iletişim bilgilerini güncelleyin. Hazırlıklı olmak, bir saldırıyı saatler içinde, hazırlıksızlık ise günlerce sürebilecek bir krize çevirir.

### Güvenlik sigortası ya da hizmeti gerekli mi?

Zorunlu değil; ama düzenli yedek, güncelleme ve izleme hizmeti çoğu işletme için akıllıca bir yatırımdır.

## Güvenlik kaydı tutmak

Yaptığınız güncelleme, yedek ve parola değişikliklerini tarihle bir dosyaya yazın; bir sorun çıktığında neyin ne zaman değiştiği görünür.

## Denizli SEO bu konuda nasıl yardımcı olur?

[SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- HTTPS ve yönlendirmeleri doğru kurarız,
- yedek, güncelleme ve erişim için basit bir bakım planı hazırlarız,
- güvenlik kaynaklı trafik düşüşlerini teşhis ederiz,
- yapılan işi yazılı raporlarız; sıralama ya da tam güvenlik garantisi vermeyiz.

Sitenizin güvenlik durumuna bakmamızı isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### SSL sertifikası sıralamayı yükseltir mi?

Bu yazıda sıralama etkisi iddia etmiyoruz; HTTPS güvenlik ve güven için gereklidir.

### Yedeği ne sıklıkla almalıyım?

İçeriğin ne sıklıkla değiştiğine bağlı; sık değişen sitelerde günlük, az değişenlerde haftalık yedek düşünün.

### Siteme saldırı olursa ne yapmalıyım?

Yedeğe dönün, parolaları değiştirin, açığı kapatın ve Search Console’daki bildirimleri kontrol edin.

### Hosting firması güvenliği sağlar mı?

Altyapı güvenliğinin bir kısmını sağlar; sitenizdeki yazılımın, parolaların ve eklentilerin güvenliği sizin sorumluluğunuzdadır.

### Küçük bir sitem de hedef olur mu?

Evet; saldırılar çoğu zaman otomatik taramalarla yapılır ve site büyüklüğüne bakmaz.

### Güvenlik eklentisi yeterli mi?

Tek başına yeterli değildir; güncelleme, parola ve yedek disiplini eklentiden daha belirleyicidir.

## Kaynaklar

- [Google Search Central: URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: Google Arama trafiğindeki düşüşlerle ilgili hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)
