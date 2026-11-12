---
title: "Web Sitesi Güvenliği: SSL, Yedek ve Güncelleme"
description: "Web sitesi güvenliği için SSL (HTTPS), düzenli yedek, güncelleme, güçlü parola ve erişim kontrolü: küçük işletmeler için pratik liste ve SEO ile ilişkisi."
date: 2026-11-12
service: web-tasarim
imageAlt: "Kilitli site: HTTPS, yedek ve güncelleme simgeleri"
---

**Kısa cevap:** Güvenli bir site için dört temel iş vardır: HTTPS (SSL sertifikası), düzenli ve test edilmiş yedek, yazılım ve eklenti güncellemeleri ile güçlü parola ve sınırlı erişim. Güvenlik sorunları hem müşteriyi hem aramadaki görünürlüğü etkileyebilir; Google’ın trafik düşüşü rehberi, güvenlik sorunlarını düşüşün olası nedenleri arasında sayar. Güvenlik tam bir garanti sunmaz; amaç riski azaltmak ve sorun olduğunda hızlı toparlanmaktır.

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

| Hata | Çözüm |
| --- | --- |
| Yedeğin olmaması | Otomatik yedek |
| Yedeğin aynı sunucuda durması | Site dışında bir kopya |
| Güncellemeleri aylarca ertelemek | Düzenli güncelleme |
| Kullanılmayan eklentiler | Kaldırın |
| Herkese yönetici yetkisi | En az yetki |
| Aynı parola her yerde | Parola yöneticisi |
| HTTP ve HTTPS’i iki ayrı site gibi bırakmak | Tek adrese yönlendirin |

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir otelin sitesi, eski bir eklenti yüzünden ele geçiriliyor ve sayfalara istenmeyen bağlantılar ekleniyor. Otelin düzenli yedeği olduğu için site hızla geri yükleniyor; eklenti kaldırılıyor, parolalar değiştiriliyor, Search Console’daki bildirimler kontrol ediliyor. Yedeği olmayan bir sitede aynı olay çok daha zahmetli olurdu.

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

## Kaynaklar

- [Google Search Central: URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: Google Arama trafiğindeki düşüşlerle ilgili hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)
