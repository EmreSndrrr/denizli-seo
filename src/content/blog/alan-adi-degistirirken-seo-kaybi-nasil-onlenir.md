---
title: Alan Adı Değiştirirken SEO Kaybı Nasıl Önlenir?
description: "Alan adı değiştirirken SEO kaybı nasıl önlenir? URL eşleme, 301 yönlendirme, Adres değişikliği aracı, zamanlama ve taşıma sonrası kontrol listesi."
date: 2026-11-10
service: teknik-seo
imageAlt: "Eski alan adından yeni alan adına giden yönlendirme okları"
---

**Kısa cevap:** Alan adı değiştirirken SEO kaybını önlemek için eski sitedeki her adresi yeni sitedeki karşılığına 301 ile yönlendirin, URL eşlemesini önceden hazırlayın, Search Console’da eski site için Adres değişikliği isteği gönderin, yeni sitenin site haritasını yükleyin ve trafiği hem eski hem yeni adreste izleyin. Google, 301 ve diğer kalıcı yönlendirmelerin PageRank’te kayba neden olmadığını söyler. Taşıma işleminin tamamlanması birkaç hafta, büyük sitelerde daha uzun sürebilir.

Marka değiştiren, yeni bir alan adı alan ya da “.com” yerine “.com.tr” adresine geçen işletmeler için alan adı değişikliği, en riskli teknik işlerden biridir: Google, yeni adresi sıfırdan tanımak zorundadır. Doğru planla bu sürecin kaybı en aza indirilebilir. Bu yazıda adım adım bir taşıma planı anlatıyoruz. Yönlendirme türleri için [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazımıza da bakabilirsiniz.

## Bu bir site taşıma mı?

Evet. Google’ın site taşıma rehberi, alan adı değişikliklerini (örneğin example.com’dan example.net’e) ya da birden çok alan adının birleştirilmesini, URL yollarındaki değişiklikleri ve HTTP’den HTTPS’e geçişi URL değişikliğiyle site taşıma örnekleri arasında sayar ([site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Rehberin amacı, taşımanın Google Arama sonuçlarınız üzerindeki olumsuz etkisini en aza indirmektir.

## Alan adı değişikliği için ne tür bir taşıma gerekir?

| Değişiklik | Adres değişikliği aracı gerekli mi? |
| --- | --- |
| Alan adı değişikliği (a.com → b.com) | Evet |
| Alt alan adı değişikliği (a.siteadi.com → b.siteadi.com) | Evet |
| HTTP → HTTPS | Hayır |
| www ↔ www’suz (aynı alan adı) | Hayır |
| Aynı alan adı içinde yol değişikliği | Hayır |

Google, Adres değişikliği aracına yalnızca alan adları ya da alt alan adları arasında geçiş yaparken ihtiyaç duyulduğunu, HTTPS geçişi, www/www’suz geçişi ve yol taşımasında bu araca gerek olmadığını belirtir.

## Taşıma planı: sekiz adım

### 1. Neden değiştirdiğinizi netleştirin

Alan adı değişikliği, marka değişikliği gibi güçlü bir sebep gerektirir. Yalnızca “daha kısa olsun” gibi bir nedenle değiştirmek, kaybı göze almak demektir.

### 2. Yeni siteyi hazırlayın ve test edin

Yeni alan adında siteyi kurun; içeriklerin, görsellerin ve dosyaların (PDF gibi) taşındığından emin olun. Google, görsel ve indirilebilir dosyaların da trafik alıyor olabileceğini, bu yüzden yeni konumlarının bildirilmesinin yararlı olduğunu söyler. Yeni sitenin HTTPS’i hazır olsun; bkz. [HTTPS’e geçiş](/blog/https-e-gecis-seo-kontrol-listesi/).

### 3. URL eşleme tablosu hazırlayın

Eski sitedeki her önemli adresi yeni sitedeki karşılığıyla eşleştirin:

| Eski adres | Yeni adres | Not |
| --- | --- | --- |
| eski.com/ | yeni.com/ | Ana sayfa |
| eski.com/hizmetler/klima-bakim | yeni.com/hizmetler/klima-bakim/ | Aynı içerik |
| eski.com/iletisim | yeni.com/iletisim/ | Aynı içerik |
| eski.com/eski-kampanya | — | Karşılığı yok: 404 |

Google’ın rehberi de geçerli URL’lerden karşılık gelen yeni biçimlerine bir URL eşlemesi hazırlamanızı önerir. Mümkünse adres yapısını (yolları) değiştirmeden taşıyın; böylece eşleme basitleşir. Ayrıntılı örnek için [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/) yazımıza bakın.

### 4. Zamanlamayı seçin

Google, taşıma zamanını mümkünse trafiğin daha düşük olduğu döneme denk getirmenizi, trafiğiniz sezonluksa trafik düşüşlerinin yaşandığı zamanları seçmenizi önerir. Denizli’de turizm işletmeleri için bu, yüksek sezon dışı bir dönem anlamına gelir. Tatil ve bayram öncesi taşımayın.

### 5. Büyük siteyse küçük adımlarla taşıyın

Google, siteniz büyükse ve teknik olarak mümkünse önce sitenin yalnızca bir parçasını taşımanızı, sonra kalanını parça parça ya da topluca taşımanızı önerir. Test bölümü olarak daha seyrek değişen bir bölüm seçin. Küçük işletme sitelerinde çoğu zaman tek seferde taşınır.

### 6. Yönlendirmeleri başlatın

Sunucuyu eski URL’lerden yenilerine 301 ile yönlendirecek şekilde yapılandırın. Her eski adres, yeni sitedeki karşılık gelen adrese gitmeli; toplu olarak ana sayfaya yönlendirmeyin.

### 7. Search Console’da Adres değişikliği isteği gönderin

Google, alan adı ya da alt alan adı değiştiriyorsanız eski site için Search Console’da bir Adres değişikliği isteği göndermenizi söyler. Ayrıca her mülkün verisini Search Console’da ayrı doğrulayın: eski ve yeni sitenin her ikisini de ekleyin.

### 8. Site haritasını gönderin ve izleyin

Yeni siteye ait site haritasını yükleyin. Sayfa dizine ekleme raporu ve Site Haritaları raporuyla dizine eklenen URL sayısını izleyin; hem eski hem yeni adreslerdeki trafiği takip edin. Site haritası konusunda [site haritası nasıl oluşturulur?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/) yazımıza bakın.

## Taşıma sırasında dikkat edilecekler

- **Eski alan adını bırakmayın.** Alan adının süresini yenileyin ve yönlendirmeleri uzun süre koruyun; yönlendirme çalışmazsa eski adresler boşa gider.
- **İç bağlantıları güncelleyin.** Yeni sitedeki bağlantılar yeni alan adını kullansın.
- **Canonical, site haritası ve robots.txt’yi yeni adrese göre ayarlayın.**
- **Dış bağlantıları güncelletin.** Mümkünse sizi anan önemli sitelerden bağlantıyı yeni adrese çevirmelerini isteyin.
- **Profil ve sosyal medya.** İşletme Profili’ndeki web sitesi adresini ve sosyal hesaplardaki bağlantıyı güncelleyin.
- **E-posta ve diğer servisler.** Alan adı değişikliği e-postayı da etkiler; önceden planlayın.

## Taşıma sonrası kontrol listesi

1. Eski adreslerden rastgele on tanesini açın; yeni adresteki karşılığına gidiyor mu?
2. Yönlendirme zinciri ya da döngü var mı?
3. Yeni sitede robots.txt ve noindex engeli yok mu?
4. Yeni sitenin site haritası gönderildi mi?
5. Search Console’da yeni sitede dizin durumu nasıl?
6. Performans raporunda eski ve yeni adres trafiğinin toplamı nasıl?
7. Dış bağlantı alan önemli adresler çalışıyor mu?
8. Profil ve sosyal hesaplardaki adres güncel mi?

Google, taşıma işleminden sonra bir düşüş yaşanırsa ve düzelmezse URL değişikliği yapılmış bir siteyi taşırken sık yapılan hatalar için site taşıma sorunlarını giderme bölümüne bakmayı önerir. Taşıma etkisinin birkaç hafta, büyük sitelerde daha uzun sürebileceğini de belirtir; bu yüzden sabırlı olun ve izleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya atölyesi, eski kısa alan adını marka adına uygun yeni bir alan adıyla değiştirmek istiyor. Plan: yılın düşük satış dönemi seçiliyor; adres yapısı korunuyor; eski her adres yeni karşılığına 301 ile yönlendiriliyor; yeni site Search Console’da doğrulanıyor, Adres değişikliği isteği gönderiliyor ve site haritası yükleniyor; profil ve sosyal hesaplar güncelleniyor. Sonraki haftalarda Performans ve Sayfa dizine ekleme raporları izleniyor.

Bu örnek sonuç vaadi değildir; taşıma sırasını gösterir.

## Taşıma sırasında izlenecek göstergeler

| Gösterge | Nerede? | Ne arıyoruz? |
| --- | --- | --- |
| Eski adres trafiği | Search Console (eski mülk) | Zamanla azalması beklenir |
| Yeni adres trafiği | Search Console (yeni mülk) | Zamanla artması beklenir |
| Dizine eklenen sayfa sayısı | Sayfa dizine ekleme raporu | Eski sayıya yaklaşması |
| Site haritası durumu | Site Haritaları raporu | Gönderilen/dizine eklenen oran |
| Yönlendirme hataları | Sayfa dizine ekleme raporu | Hata olmaması |
| Önemli sayfalar | URL Denetleme | Dizinde ve doğru standartta |

Toplam trafiği (eski + yeni) tek tabloda izleyin; yalnızca yeni adrese bakmak, geçiş dönemindeki düşüşü olduğundan büyük gösterebilir.

## Taşımayı geri almak zorunda kalırsanız

Plansız bir taşıma, yanlış bir yönlendirme ya da bozuk yeni site durumunda geri dönüş planınız olmalı: eski sitenin yedeği, yönlendirmeleri kaldırma ve eski adreste yayını sürdürme adımları. Bu yüzden taşımadan önce eski sitenin tam yedeğini alın ve geri dönüş adımlarını yazılı hazırlayın.

## Denizli SEO bu konuda nasıl yardımcı olur?

Alan adı taşıması, doğru planla yapıldığında risklidir; plansız yapıldığında yıllık emeği kaybettirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- yayın öncesi URL eşleme tablosunu hazırlar, taşınan sayfalara 301 yönlendirmesi kurarız,
- Search Console’da eski ve yeni mülkü doğrular, Adres değişikliği ve site haritası adımlarını yönetiriz,
- taşıma sonrası dizin, trafik ve yönlendirmeleri izleriz,
- yaptığımız işleri yazılı rapor olarak sunarız.

Alan adınızı değiştirmeden önce plan yaptırmak isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Alan adı değişikliğinde en büyük risk nedir?

Eksik ya da yanlış yönlendirmeler: eski adreslerin yeni karşılıklarına gitmemesi. Bu yüzden URL eşleme tablosu en kritik belgedir.

### Eski alan adını başkası alırsa ne olur?

Eski alan adınızın süresinin dolmasına izin vermeyin; yönlendirme çalışmaz ve eski bağlantılar boşa gider. Yenileme tarihini takvime yazın.

## Sık sorulan sorular

### Alan adı değişikliği sıralamamı düşürür mü?

Geçici dalgalanma olabilir; kesin söz veremeyiz. Doğru yapılan 301 yönlendirmeler PageRank’te kayba neden olmaz; ama Google’ın yeni siteyi işlemesi zaman alabilir.

### Taşıma ne kadar sürer?

Google, taşıma etkisinin birkaç hafta, daha büyük sitelerde daha uzun sürebileceğini belirtir.

### Eski alan adını bırakabilir miyim?

Eski alan adını ve yönlendirmeleri uzun süre koruyun. Süre için Google’ın yazdığı kesin bir sayı yok; dışarıdan bağlantı alan eski adreslerin yönlendirilmeye devam etmesi önemlidir.

### Aynı anda hem tasarım hem alan adı değiştirebilir miyim?

Google, taşıma işlemini mümkün olduğunca küçük adımlara bölmenizi önerir; sitenin düzenini yeni alan adına taşındıktan sonra değiştirmenizi tavsiye eder.

## Kaynaklar

- [Google Search Central: site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
