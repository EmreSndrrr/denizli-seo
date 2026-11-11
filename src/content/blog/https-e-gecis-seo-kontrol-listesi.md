---
title: "HTTPS’e Geçiş: SEO İçin Kontrol Listesi"
description: "HTTPS’e geçerken SEO kaybı nasıl önlenir? 301 yönlendirme, site haritası, canonical, Search Console ve karışık içerik için geçiş sonrası kontrol listesi."
date: 2026-11-10
service: teknik-seo
imageAlt: "Kilit simgeli bir adres çubuğu ve http’den https’e giden ok"
---

**Kısa cevap:** HTTP’den HTTPS’e geçiş, Google’ın site taşıma tanımına giren bir değişikliktir; bu yüzden eski adresleri yenilerine 301 ile yönlendirmek, site haritasında ve iç bağlantılarda HTTPS adreslerini kullanmak, canonical’ları güncellemek ve Search Console’da yeni sürümü izlemek gerekir. Google’ın önerisi: HTTP’den HTTPS’e yönlendirin, sertifikayı doğru kullanın ve site haritasında HTTPS sürümlerini tercih edin. Doğru yapıldığında geçiş sıralamanızı kaybettirmez; kontrolsüz yapılırsa kopya adres ve kırık bağlantı sorunları çıkar.

Adres çubuğunda kilit simgesi görmek ziyaretçiye güven verir; ama HTTPS geçişi yalnızca bir sertifika kurmak değildir. Site “http://” ile “https://” iki ayrı adreste açılabilir ve Google bunları ayrı URL’ler olarak görür. Bu yazıda geçişin SEO kısmını, sırayla bir kontrol listesi olarak anlatıyoruz. Tek adrese toplama konusu için [www ve www’suz adres](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/) yazımıza da bakabilirsiniz.

## HTTPS geçişi neden bir “site taşıma” sayılır?

Google’ın site taşıma rehberi, HTTP olan URL’lerin HTTPS olarak değiştirilmesini, URL değişikliğiyle site taşıma örnekleri arasında sayar ([site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Adres değiştiği için eski adres ile yeni adres arasında Google’a bağlantı kurmanız gerekir. Rehberin genel yaklaşımı:

1. Yeni siteyi ve adres yapısını hazırlayın.
2. Geçerli URL’lerden yeni biçimlerine bir eşleme hazırlayın.
3. Sunucuyu eski URL’lerden yenilerine yönlendirecek şekilde yapılandırarak taşımayı başlatın.
4. Hem eski hem yeni URL’lerdeki trafiği izleyin.

Rehber ayrıca 301 ve diğer kalıcı yönlendirmelerin PageRank’te kayba neden olmadığını söyler.

## Geçiş öncesi hazırlık

1. **Sertifikayı kurun.** Sunucunuz için geçerli bir SSL sertifikası gerekir; barındırma firmanız çoğu zaman bunu sunar. Sertifikanın alan adınızı (www ve www’suz) kapsadığından emin olun.
2. **Site haritasını ve robots.txt’yi gözden geçirin.** Yeni adreslerle güncelleneceklerini planlayın.
3. **İç bağlantıları ve görselleri tarayın.** Sitedeki `http://` ile verilmiş bağlantılar ve kaynaklar sonra karışık içerik sorunu çıkarır.
4. **Search Console’da mevcut durumu kaydedin.** Dizindeki sayfa sayısı, performans ve Core Web Vitals durumu geçiş öncesi taban çizginizdir.
5. **Yedek alın.** Sunucu ve veritabanı yedeği.

## Geçişte yapılacaklar

### 1. HTTP’den HTTPS’e 301 yönlendirme

Tüm HTTP adreslerini karşılık gelen HTTPS adreslerine 301 ile yönlendirin. Google’ın standart URL rehberi de HTTP ile HTTPS varyasyonları için HTTP’den HTTPS’e yönlendirme yapmayı ve sertifikayı doğru kullanmayı önerir ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)). Yönlendirmeler sayfa sayfa karşılık gelmeli; hepsini ana sayfaya göndermeyin. Türler için [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazımıza bakın.

### 2. Canonical etiketlerini güncelleyin

Her sayfanın canonical etiketi HTTPS adresini göstermeli. Google, mutlak URL kullanmayı önerir. Canonical ayrıntıları: [canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)

### 3. Site haritasını güncelleyin

Haritadaki tüm adresler HTTPS olmalı. Google, site haritasında ve hreflang uygulamasında HTTPS sürümlerini tercih etmenizi söyler. Haritayı Search Console’dan yeniden gönderin; ayrıntılar [site haritası](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/) yazımızda.

### 4. İç bağlantıları ve kaynakları güncelleyin

Sitenizdeki bağlantıların, görsellerin, CSS ve JavaScript dosyalarının `https://` adresini kullandığından emin olun. HTTP kaynak çağıran bir HTTPS sayfa “karışık içerik” uyarısı verebilir; tarayıcı bazı kaynakları engelleyebilir.

### 5. Search Console’da yeni mülkü ekleyin ve doğrulayın

Google, Search Console’da her mülkün verisini ayrı doğrulamanızı önerir. HTTPS sürümünü ayrı bir mülk olarak ekleyin (alan adı mülkü kullanıyorsanız tüm sürümleri kapsar) ve site haritasını gönderin.

### 6. robots.txt ve diğer ayarları kontrol edin

robots.txt’nin HTTPS sürümünde de erişilebilir olduğundan ve engel içermediğinden emin olun.

## Geçiş sonrası kontrol listesi

| Kontrol | Nasıl? |
| --- | --- |
| Tüm HTTP adresleri HTTPS’e gidiyor mu? | Tarayıcıda deneyin; `http://` yazın |
| Yönlendirme zinciri var mı? | Tek adımda mı gidiyor? |
| Canonical HTTPS mi? | Sayfa kaynağında bakın |
| Site haritası HTTPS mi, gönderildi mi? | Search Console’da kontrol edin |
| Karışık içerik var mı? | Tarayıcı uyarısına bakın |
| Önemli sayfalar dizinde mi? | URL Denetleme |
| Trafikte beklenmedik düşüş var mı? | Performans raporu |
| Dış bağlantılar çalışıyor mu? | Bağlantı veren sitelerin HTTP bağlantıları yönleniyor mu? |

Google, Search Console’daki Sayfa dizine ekleme ve Site Haritaları raporlarının site taşımalarında yardımcı olduğunu belirtir; dizine eklenen URL sayısını izlemek için bu raporları kullanın. Sabırlı olun: taşımanın tamamlanması zaman alabilir.

## Sık yapılan HTTPS geçiş hataları

1. **HTTP ve HTTPS’in ikisinin birden açık kalması.** Kopya adres sorunu doğar.
2. **302 yönlendirme kullanmak.** Kalıcı geçiş için 301 gerekir.
3. **Site haritasında eski adresleri bırakmak.**
4. **Karışık içerik.**
5. **Sertifikanın süresinin dolması.** Süresi dolan sertifika ziyaretçiye uyarı gösterir; yenileme tarihini takvime yazın.
6. **www ve www’suz için ayrı sertifika sorunu.**
7. **Search Console’u yeniden kurmamak.**

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir otelin sitesi hâlâ HTTP’de; tarayıcı “güvenli değil” uyarısı veriyor. Barındırma firması sertifikayı kuruyor ama yönlendirme eklenmemiş; site hem `http://` hem `https://` üzerinden açılıyor ve Search Console’da aynı sayfanın iki sürümü görünüyor.

Düzeltme: tüm HTTP adresleri 301 ile HTTPS’e yönlendiriliyor; canonical’lar ve site haritası HTTPS’e çevriliyor; sitedeki HTTP bağlantılar ve görseller güncelleniyor; HTTPS mülkü Search Console’da doğrulanıp harita gönderiliyor; birkaç hafta boyunca dizin raporu izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Geçiş günü planı

Geçişi tek bir gün içinde, kontrol listesiyle yapmak istiyorsanız şu sırayı izleyin:

1. **Sabah:** Yedek alın, sertifikanın geçerli olduğunu doğrulayın.
2. **Öğle:** Yönlendirme kuralını ekleyin; tek bir sayfada deneyin.
3. **Öğleden sonra:** Canonical, site haritası ve iç bağlantıları HTTPS’e çevirin.
4. **Akşam:** Önemli sayfaları tarayıcıda tek tek açıp karışık içerik uyarısına bakın.
5. **Ertesi gün:** Search Console’da yeni mülkü doğrulayın, haritayı gönderin.
6. **İlk hafta:** Her gün Sayfa dizine ekleme ve Performans raporlarına bakın.

Siteniz büyükse, Google’ın önerdiği gibi taşımayı daha küçük adımlara bölmek ve önce bir bölümde denemek akıllıcadır.

## Dış bağlantılar ve sosyal medya

Başka sitelerin size verdiği HTTP bağlantıları, doğru yönlendirme varsa yeni adrese gider; bu yüzden bağlantı veren sitelerden güncellemelerini istemek zorunlu değil ama iyi bir uygulamadır. Profil ve sosyal medya hesaplarındaki web sitesi adresini `https://` ile güncelleyin. İşletme Profili’ndeki web sitesi alanını da yeni adrese çevirin.

## Denizli SEO bu konuda nasıl yardımcı olur?

HTTPS geçişi küçük bir ayar gibi görünür ama yanlış yapılırsa görünürlük kaybettirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- adres eşleme tablosunu hazırlar, 301 yönlendirmelerini kurarız,
- canonical, site haritası ve iç bağlantıları HTTPS’e göre düzenleriz,
- karışık içerik ve zincir yönlendirmeleri tarar, temizleriz,
- geçişi Search Console’da izler, sonuçları yazılı raporlarız.

Sitenizi HTTPS’e taşımadan önce plan yaptırmak isterseniz [bize yazın](/iletisim/).

### Sertifika süresi dolarsa ne olur?

Tarayıcı ziyaretçiye uyarı gösterir ve çoğu ziyaretçi siteye girmez. Yenileme tarihini takvime yazın; çoğu barındırma firması otomatik yenileme sunar.

### Karışık içerik nedir?

HTTPS sayfanın içinde HTTP ile yüklenen görsel, betik ya da stil dosyasıdır. Tarayıcı bunları engelleyebilir ya da uyarı verebilir; kaynak adreslerini `https://` yapın.

## Sık sorulan sorular

### HTTPS sıralamamı yükseltir mi?

Bu yazıda sıralamaya etki iddia etmiyoruz. HTTPS, ziyaretçi güveni ve güvenlik için önemlidir; geçişin amacı da sıralama kaybetmeden yapılmasıdır.

### HTTPS geçişi trafiğimi düşürür mü?

Doğru yapılırsa geçici dalgalanma dışında kalıcı kayıp beklenmez; ama kesin söz veremeyiz. Eksik yönlendirme ve karışık içerik kayıp nedenleridir.

### HTTPS için ayrı Search Console mülkü gerekli mi?

Google, her mülkün verisini ayrı doğrulamanızı önerir. Alan adı mülkü kullanıyorsanız tüm sürümler tek mülkte toplanır.

### Sertifikayı kendim kurabilir miyim?

Çoğu barındırma firması panelden kolay kurulum sunar. Emin değilseniz firmanızdan destek isteyin.

## Kaynaklar

- [Google Search Central: site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: rel=”canonical” ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
