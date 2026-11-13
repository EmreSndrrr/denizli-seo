---
title: "HTTP Durum Kodları: 200, 301, 404, 500 Ne Anlama Gelir?"
description: "HTTP durum kodları SEO’yu nasıl etkiler? 200, 301, 302, 404, 410, 429 ve 500 kodlarının anlamı ile Google’ın her birine verdiği tepki."
date: 2026-11-13
service: teknik-seo
imageAlt: "200, 301, 404 ve 500 durum kodlarını gösteren sunucu yanıtı kartları"
---

HTTP durum kodu, sunucunun bir sayfa istendiğinde verdiği üç haneli yanıttır. 200 “tamam, işte sayfa”, 301 “kalıcı olarak taşındı”, 404 “bulunamadı”, 500 ise “sunucuda hata var” demektir. Google da bu kodlara bakarak sayfanın dizine alınıp alınmayacağına, taramanın yavaşlatılıp yavaşlatılmayacağına karar verir.

Kodları ezberlemek gerekmez; ama hangisinin hangi durumda doğru olduğunu bilmek, sitenizde sessizce görünürlük kaybetmenizi önler. Bu yazı, SEO açısından önemli kodları, Google’ın onlara nasıl tepki verdiğini ve nasıl kontrol edeceğinizi anlatıyor. Sitenizde sorun şüpheniz varsa [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Durum kodları kaç gruba ayrılır?

Kodların ilk hanesi yanıtın türünü gösterir:

- **2xx:** Başarılı. İstek karşılandı, sayfa gönderildi.
- **3xx:** Yönlendirme. Sayfa başka bir adrese taşındı.
- **4xx:** İstemci hatası. İstenen sayfa yok ya da erişilemiyor.
- **5xx:** Sunucu hatası. Sunucu isteği karşılayamadı.

Bir sayfayı tarayıcıda görmeniz, doğru kodu döndürdüğü anlamına gelmez. Örneğin “sayfa bulunamadı” yazan bir ekran, arka planda 200 koduyla dönüyor olabilir; bu durum soft 404 sorunudur ve aşağıda ele alınıyor.

## 200: Sayfa sorunsuz geldi

200, normal ve istenen sonuçtur. Google 200 kodlu sayfaları işleme alır; JavaScript SEO rehberine göre 200 kodlu sayfalar oluşturma (render) sırasına girer, 200 olmayanlar ise oluşturulmayabilir ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)).

200 her zaman iyi değildir. Silinmiş bir sayfa için 200 dönmek, sitenizi yanlış bilgiyle doldurur. Doğru kodu seçmek, sayfanın gerçek durumunu dürüstçe bildirmektir.

## 301 ve 302: Yönlendirme türünü doğru seçin

Yönlendirme, eski adrese gelen ziyaretçiyi ve Google’ı yeni adrese gönderir. Türü önemlidir. Google’ın yönlendirme belgesine göre ([Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)):

- **Kalıcı yönlendirme (301/308):** Hedef adresin standart olması yönünde sinyal verir.
- **Geçici yönlendirme (302/303/307):** Standart seçimi için sinyal sayılmaz; hedef yine de dizine eklenebilir.
- **Sunucu tarafı yönlendirme** en güvenilir olandır; meta refresh ve JavaScript yönlendirmesi yalnızca başka seçenek yoksa kullanılmalıdır.

Siteyi taşıyorsanız ya da adres değiştiriyorsanız kalıcı yönlendirme kullanın. Google, site taşımada 301 ve diğer kalıcı yönlendirmelerin PageRank’te kayba neden olmadığını belirtir ([site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Farkı ayrıntılı görmek için [301 ve 302 yönlendirme farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazımıza bakın.

> **Hizmet almak için iletişime geçin.** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## 404 ve 410: Sayfa yok

İki kod da sayfanın bulunmadığını söyler. Google’ın HTTP durum kodları belgesine göre 4xx kodlarında içerik kullanılmaz, sayfa dizine eklenmez ve dizindeyse kaldırılır; 429 dışındaki 4xx kodları aynı işlenir, yani 404 ile 410 arasında Google açısından fark yoktur ([HTTP durum kodlarının Google tarayıcılarını etkilemesi](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)).

Bu şu anlama gelir: Silinmiş bir sayfa için 404 vermek doğrudur. Her 404’ü hata saymayın; kaldırılan bir ürün sayfası için 404 normaldir. Sorun, değeri olan bir sayfanın yanlışlıkla 404’e düşmesi ya da dışarıdan bağlantı alan sayfanın kaybolmasıdır. Bu durumlarda ne yapılacağı [404 hatası düzeltilmeli mi yönlendirilmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/) yazısında anlatılıyor.

## Soft 404: 200 dönen ama boş sayfa

Google, “bulunamadı” içeriği taşıyan ama 200 kodu döndüren sayfaları Search Console’da soft 404 olarak işaretler. Sunucu “her şey yolunda” derken sayfa “burada içerik yok” der; bu çelişki Google’ı da karıştırır.

Çözüm, gerçekten olmayan sayfalarda 404 (ya da 410) kodu döndürmektir. İç aramada sonuç çıkmayan sayfalar ve boş kategoriler bunun sık örnekleridir. Ayrıntı: [soft 404 nedir, nasıl düzeltilir?](/blog/soft-404-nedir-nasil-duzeltilir/)

## 429 ve 5xx: Sunucu zorlandığında

5xx hataları (500, 502, 503 gibi) sunucunun isteği karşılayamadığını gösterir. 429 ise çok fazla istek geldiğini bildirir. Google’ın belgesine göre 5xx ve 429 kodları taramayı yavaşlatır; uzun süre taranamayan dizindeki URL’ler sonunda dizinden çıkarılabilir.

Bu yüzden şu durumlara dikkat edin:

- **Uzun süren bakım:** Bakımı mümkün olduğunca kısa tutun; Google’a göre taranamayan URL’ler sonunda dizinden çıkarılabilir.
- **Sık tekrar eden 500 hataları:** Hosting, eklenti ya da kod sorunu olabilir; hızlıca kaynağı bulun.
- **Yoğun trafikte çöken site:** Kampanya dönemlerinde sunucu kapasitesini kontrol edin.

## Kodları nasıl kontrol edersiniz?

Üç yol yeterlidir:

1. **Tarayıcı geliştirici araçları.** “Network” sekmesinde sayfa isteğinin kodunu görürsünüz.
2. **Search Console URL Denetleme.** Google’ın o adresi nasıl gördüğünü gösterir.
3. **Sayfa dizine ekleme raporu.** “Bulunamadı (404)”, “Soft 404” ve “Sunucu hatası (5xx)” gibi nedenleri listeler.

Önemli sayfaları (hizmet sayfaları, ana sayfa, iletişim) ayda bir elle açıp kodlarını kontrol etmek çoğu sorunu erken yakalar.

## Yönlendirme zinciri ve döngüsü neden sorun?

Zincir, bir adresin başka bir adrese, onun da üçüncü bir adrese yönlendirilmesidir. Her ek adım yüklemeyi biraz geciktirir ve hata riskini artırır. Döngü ise adreslerin birbirine yönlendirmesidir; tarayıcı ve Google sayfaya hiç ulaşamaz. Site yenilemelerinde eski kurallar yeni kurallarla üst üste binince bu sorunlar sıkça ortaya çıkar.

Çözüm basittir: her eski adres doğrudan son adrese gitsin. Taşıma sonrasında eski adres listesini son adrese eşleyen bir tablo tutun ve ara adımları kaldırın. http’den https’e ve www’den www’suza geçişin tek adımda olması gerektiğini [www ve www’suz adresleri tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/) yazısında anlattık.

## Bir kodu düzelttikten sonra ne beklemelisiniz?

Durum kodunu düzeltmek Google’ın sayfayı hemen yeniden değerlendireceği anlamına gelmez. Google adresi yeniden tarayana kadar rapor eski durumu gösterebilir. Bu bekleme sırasında şunları yapın:

- Düzeltmeyi URL Denetleme aracıyla tek tek önemli adreslerde doğrulayın.
- Sayfa dizine ekleme raporundaki ilgili uyarıda düzeltmenin doğrulanmasını isteyin.
- Birkaç hafta boyunca aynı raporu izleyin; yalnızca “yaptım” demek yeterli değil, sonucu görün.

Süre siteye ve sayfaya göre değişir; bu yüzden kesin gün vermiyoruz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ayakkabı mağazasının e-ticaret sitesi, tükenen ürünlerin sayfalarını siliyor.

- **Sorun:** Tükenen ürün sayfaları 200 dönüyor ama “ürün bulunamadı” yazıyor; Search Console soft 404 uyarısı veriyor.
- **Karar:** Geçici olarak tükenen ürünler için sayfa açık tutuluyor ve alternatifler gösteriliyor; kalıcı kaldırılanlar için 404 dönülüyor, benzer ürün varsa 301 ile yönlendiriliyor.
- **İzleme:** Birkaç hafta sonra raporda soft 404 sayısı kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Hangi durumda hangi kod kullanılmalı?

| Durum | Doğru kod |
| --- | --- |
| Sayfa normal çalışıyor | 200 |
| Sayfa kalıcı olarak yeni adrese taşındı | 301 |
| Sayfa kısa süreliğine başka adrese yönlendiriliyor | 302 |
| Sayfa silindi, karşılığı yok | 404 ya da 410 |
| Sitede planlı bakım var | 503 |

Bu tablo bir başlangıç noktasıdır; özel durumlarda sayfanın amacına göre karar verin.

## Sık yapılan altı hata

1. **Silinen sayfaya 200 dönmek.**
2. **Kalıcı taşımada 302 kullanmak.**
3. **Tüm 404’leri ana sayfaya yönlendirmek.**
4. **Yönlendirme zincirleri kurmak** (A’dan B’ye, B’den C’ye).
5. **Bakım sırasında 404 döndürmek.**
6. **Durum kodlarını hiç kontrol etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Doğru durum kodları, sitenizin Google’la doğru konuşmasını sağlar. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin durum kodlarını toplu tarar, hatalı kodları listeleriz,
- yönlendirme zincirlerini ve geçici yönlendirmeleri düzeltiriz,
- soft 404 ve 5xx sorunlarını Search Console’da izleriz,
- taşıma ve yenileme projelerinde adres eşleme planı hazırlarız.

Sitenizi taramamızı isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### 404 hataları sıralamamı düşürür mü?

Silinmiş sayfalar için 404 normaldir. Değeri olan sayfaların yanlışlıkla 404’e düşmesi sorundur. Sitenizde bu sayfalar varsa düzeltin.

### 404 ile 410 arasındaki fark nedir?

Google açısından fark yoktur; 429 dışındaki 4xx kodları aynı işlenir. 410 “kalıcı olarak kaldırıldı” demek için kullanılır.

### 301 yönlendirme PageRank kaybettirir mi?

Google, site taşımada 301 ve kalıcı yönlendirmelerin PageRank’te kayba neden olmadığını belirtir.

### Soft 404 nedir?

“Bulunamadı” içeriği taşıyan ama 200 kodu döndüren sayfadır. Gerçekten olmayan sayfada 404 dönmek çözümdür.

### 503 ne zaman kullanılır?

Kısa süreli planlı bakımda sunucunun geçici olarak hizmet veremediğini bildirmek için kullanılır. Bakımı kısa tutun.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Arama Merkezi: Site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Google Arama Merkezi: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
