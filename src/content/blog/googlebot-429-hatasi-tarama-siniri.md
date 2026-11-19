---
title: "Googlebot 429 Hatası Alıyorsa Ne Yapılmalı?"
description: "Googlebot 429 (too many requests) hatası alıyorsa ne yapılmalı? Tarama hız sınırları, güvenlik duvarı ve CDN kuralları, Googlebot’u doğrulama ve çözüm adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sunucuya gelen çok sayıda istek ve Googlebot’a dönen 429 yanıtı"
---

429 (Too Many Requests) hatası, sunucunun kısa sürede çok fazla istek aldığını ve yeni isteği şimdilik reddettiğini bildirir. Googlebot bu yanıtı sunucunun aşırı yüklendiği yönünde bir sinyal olarak okur ve taramayı yavaşlatır. Hatayı Googlebot alıyorsa genellikle bir güvenlik duvarı, CDN ya da sunucu hız sınırı kuralı Google’ın isteklerini fazla bulmuş demektir; çözüm, sınır kuralını gözden geçirmek ve gerçek Googlebot trafiğini yanlışlıkla kısıtlamamaktır.

Bu yazıda Google’ın 429’a nasıl tepki verdiğini, nedenlerini, hatanın gerçekten Googlebot’tan mı geldiğini doğrulama yolunu ve düzeltme adımlarını anlatıyoruz. Genel hata yönetimi için [500 sunucu hatası SEO’yu nasıl etkiler?](/blog/500-sunucu-hatasi-seoyu-nasil-etkiler/) ve [Googlebot 403 hatası alıyorsa neler kontrol edilmeli?](/blog/googlebot-403-hatasi-aliyorsa-neler-kontrol-edilmeli/) yazılarına, teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Google 429’u nasıl yorumlar?

Google’ın HTTP durum kodları rehberi şunu söyler: 429 dışındaki tüm 4xx hataları aynı şekilde işlenir ve içeriğin mevcut olmadığı anlamına gelir; 429 ise farklıdır. Google’ın tarayıcıları 429 durum kodunu sunucunun aşırı yüklendiği yönünde bir sinyal olarak işler ve bu durum sunucu hatası olarak kabul edilir. 5xx ve 429 sunucu hataları Google’ın tarayıcılarını geçici olarak taramayı yavaşlatmaya sevk eder; dizinde olan URL’ler tutulur ama taranamazlarsa sonunda dizinden çıkarılabilir ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)).

Yani 429, 404 gibi “sayfa yok” anlamına gelmez; “şu an çok istek aldım, yavaşla” demektir. Bu yüzden Googlebot’a sürekli 429 dönmek, taramanın yavaşlamasına ve yeni ya da güncel sayfaların geç keşfedilmesine yol açar.

## 429 hatası neden oluşur?

Başlıca nedenler:

- **Güvenlik duvarı (WAF) hız sınırı.** Bir IP adresinden belirli sürede gelen istek sayısını sınırlayan kural, Googlebot’un hızlı taramasını saldırı sanabilir.
- **CDN ya da bulut koruma kuralları.** Bot yönetimi ve hız sınırlama özellikleri bazen arama motoru botlarını da kapsar ([CDN kullanımı SEO için nasıl değerlendirilir?](/blog/cdn-kullanimi-seo-icin-nasil-degerlendirilir/)).
- **Sunucu ya da uygulama sınırı.** Barındırma sağlayıcısı ya da uygulama, eşzamanlı istek sayısını kısıtlıyor olabilir.
- **Güvenlik eklentileri.** Yanlış yapılandırılmış güvenlik eklentileri bot trafiğini sınırlayabilir.
- **Gerçek aşırı yük.** Site gerçekten çok istek alıyor ve kaynakları yetmiyor olabilir.

İlk ayrım şudur: hata yapılandırma kaynaklı mı (kural çok sıkı), yoksa sunucu gerçekten yetersiz mi? İkincisinde sunucu kaynaklarını artırmak gerekir.

> **Hizmet almak için iletişime geçin.** Tarama sınırlarınızı ve güvenlik kurallarınızı birlikte denetleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hata gerçekten Googlebot’tan mı geliyor?

Sunucu günlüklerinde “Googlebot” yazan her istek gerçek Googlebot olmayabilir; başka botlar kendilerini Googlebot olarak tanıtabilir. Google’ın tarayıcıları doğrulama rehberi, bir isteğin gerçekten Googlebot’tan gelip gelmediğini doğrulamak için yöntemler sunar ([Googlebot ve diğer Google tarayıcılarını doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)). Doğrulamadan önce Googlebot sandığınız trafiğe ağır kısıtlama koymak ya da tamamen izin vermek riskli olabilir.

Adımlar:

1. Sunucu günlüğünde 429 yanıtı verilen isteklerin IP adreslerini ve kullanıcı aracısını (user-agent) çıkarın.
2. Bu IP’lerin Google’a ait olup olmadığını rehberdeki yöntemle doğrulayın.
3. Gerçek Googlebot ise güvenlik kuralınızı gözden geçirin; sahte bot ise kısıtlama doğrudur.

Günlük analiziyle ilgili genel bilgi için [SEO için log analizi](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/) yazısına bakabilirsiniz.

## Nasıl düzeltilir?

Gerçek Googlebot 429 alıyorsa şu adımları izleyin:

1. **Hangi katmanın 429 döndürdüğünü bulun.** Sunucu mu, güvenlik duvarı mı, CDN mi, uygulama mı? Her katmanın günlüğüne bakın.
2. **Hız sınırı kuralını inceleyin.** Doğrulanmış Googlebot IP aralıklarını sınırdan muaf tutmayı ya da eşiği yükseltmeyi düşünün; bu işlem için güvenlik ekibiyle çalışın.
3. **Bot yönetimi ayarlarını kontrol edin.** “Doğrulanmış arama motoru botları” gibi bir izin kategorisi varsa etkinleştirin.
4. **Sunucu kaynaklarını değerlendirin.** Hata gerçek yüklenmeden geliyorsa barındırma planını ya da önbellek yapısını iyileştirin.
5. **Taramayı hafifletin.** Gereksiz çok sayıda parametreli adres Googlebot’un yükünü artırır; bu adresleri azaltmak taramayı rahatlatır ([e-ticarette filtreli sayfalar SEO için nasıl yönetilir?](/blog/e-ticarette-filtreli-sayfalar-seo-icin-nasil-yonetilir/)).
6. **Düzeltmeyi doğrulayın.** Günlükte Googlebot’un artık 200 aldığını ve Search Console’da sunucu hatalarının azaldığını izleyin.

Tarama hızını bilinçli olarak sınırlamak istiyorsanız Google’ın tarama hızını azaltma rehberi, kısa bir süre için (örneğin birkaç saat ya da bir iki gün) 500, 503 ya da 429 durum kodları döndürülebileceğini söyler; ancak bunun uzun süre sürdürülmesinin sitenizin Google ürünlerinde görünme şeklini olumsuz etkileyebileceği konusunda uyarır ([Google tarama hızını azaltma](https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=tr)). Yani 429 geçici bir acil durum aracıdır, kalıcı bir hız sınırlama yöntemi değildir.

## 429 ile 503 arasında seçim

| Durum | Kod | Not |
| --- | --- | --- |
| Çok kısa süreli yüklenme, sınır aşımı | 429 | İstek hızının azaltılması istenir |
| Planlı bakım ya da geçici kapalılık | 503 | `Retry-After` ile birlikte |
| Beklenmedik uygulama hatası | 500 (düzeltilmeli) | Kaynak bulunmalı |
| Kalıcı olarak kaldırılmış sayfa | 404 ya da 410 | Sunucu hatası kodu kullanmayın |

Google, 503 ya da 429 döndürürken `Retry-After` başlığının eklenebileceğini ve bu başlıkta saniye cinsinden gecikme ya da mutlak bir tarih verilebileceğini anlatır. Bu başlık, botun ne zaman yeniden deneyeceğini bildirir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya üreticisinin sitesinde yeni bir güvenlik eklentisi kuruluyor. Birkaç gün sonra Search Console’da “sunucu hatası” sayısı artıyor ve yeni ürün sayfaları geç dizine giriyor. Sunucu günlüğünde Googlebot’a ait IP adreslerine 429 dönüldüğü görülüyor.

İşletme, IP adreslerini Google’ın doğrulama yöntemiyle teyit ediyor; eklentinin hız sınırı eşiğini yükseltiyor ve doğrulanmış arama motoru botlarını muaf tutan seçeneği açıyor. Ardından günlükte Googlebot’un yeniden 200 aldığını ve Search Console’daki hata sayısının düştüğünü birkaç hafta izliyor. Bu örnek sonuç vaadi değildir; teşhis sırasını gösterir.

## Sık yapılan hatalar

1. **Googlebot’u tamamen engellemek.** Güvenlik kuralı arama botlarını yanlışlıkla kısıtlar ve site görünürlüğünü bozar.
2. **Sahte botlara izin vermek.** “Googlebot” yazan her isteği kabul etmek güvenlik açığı yaratır; doğrulayın.
3. **429’u kalıcı yöntem yapmak.** Geçici bir araçtır; uzun süre kullanmak sitenizin Google’daki görünümünü bozabilir.
4. **Sunucu kaynaklarını görmezden gelmek.** Gerçek yük varsa kural değişikliği yetmez.
5. **Günlük bakmadan değişiklik yapmak.** Hangi katmanın 429 döndürdüğünü bilmeden ayar yapmak zaman kaybıdır.
6. **Düzeltmeyi izlememek.** Birkaç hafta Search Console ve günlükte takip edin.

## Kural değişikliğinden sonra nasıl doğrulanır?

Hız sınırı kuralını değiştirdikten sonra iki şeyi kontrol edin. Birincisi sunucu günlüğüdür: doğrulanmış Googlebot IP’lerinden gelen isteklerin 200 aldığını ve 429 sayısının düştüğünü görün. İkincisi Search Console’dur: tarama istatistiklerinde sunucu hatası oranının azaldığına ve taranan sayfa sayısının toparlandığına bakın. İlk günlerde dalgalanma normaldir; Google tarama hızını kademeli artırır.

Ayrıca kuralı gevşetirken sunucunuzun gerçek yük sınırını da düşünün. Googlebot’a izin verip diğer botlar için sınırı sıkı tutmak makul bir denge olabilir; ama bu denge, doğrulama yapılmadan kurulursa sahte botlara kapı açar. Her değişikliği tarihiyle birlikte not edin; sorun yeniden çıkarsa hangi kuralın ne zaman değiştiğini bilmek teşhisi hızlandırır.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’daki sunucu hatalarını ve sunucu günlüklerini inceler, 429 yanıtlarının hangi katmandan geldiğini bulmaya yardım ederiz,
- Googlebot doğrulama adımlarını uygular, güvenlik duvarı ve CDN kuralları için geliştiriciye net öneri yazarız,
- tarama yükünü azaltacak adres düzenlemelerini planlarız,
- sonuç vaat etmeden, düzeltme sonrası tarama durumunu izleriz.

Sitenizde 429 hatası varsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Tarama hatalarınızın kaynağını birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### 429 hatası sıralamamı etkiler mi?

Sürekli ve yaygınsa Google taramayı yavaşlatır; yeni ve güncel sayfalar geç dizine girer. Dizinde olan sayfalar bir süre korunur ama taranamazlarsa zamanla çıkarılabilir.

### Googlebot’un hızını sınırlayabilir miyim?

Google’ın rehberi, acil durumda kısa süreliğine 500, 503 ya da 429 döndürmeyi önerir ama uzun süre kullanılmamasını söyler. Kalıcı çözüm sunucu kaynaklarını ve tarama yükünü yönetmektir.

### Hangi IP’lerin Googlebot olduğunu nasıl anlarım?

Google’ın doğrulama rehberindeki yöntemi kullanın. Kullanıcı aracısına bakmak tek başına yeterli değildir.

### CDN kullanıyorsam ne yapmalıyım?

CDN’in hız sınırı ve bot yönetimi ayarlarını kontrol edin; doğrulanmış arama motoru botlarına izin veren bir kategori varsa etkinleştirin.

### 429 ile 503’ü aynı anda kullanabilir miyim?

Farklı durumlar için kullanılır: kısa süreli istek aşımı için 429, geçici kapalılık için 503. Hangi katmanın hangi kodu döndürdüğünü net bilin.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının, ağ ve DNS hatalarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Google tarama hızını azaltma](https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=tr)
- [Google Arama Merkezi: Googlebot ve diğer Google tarayıcılarını doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)
