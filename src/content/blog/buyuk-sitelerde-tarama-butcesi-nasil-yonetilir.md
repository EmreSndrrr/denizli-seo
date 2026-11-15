---
title: "Büyük Sitelerde Tarama Bütçesi Nasıl Yönetilir?"
description: "Tarama bütçesi nedir, kimler için önemlidir? Google’ın kapasite ve talep tanımı, URL envanteri, robots.txt, 404/410, soft 404, site haritası ve hız önerileri."
date: 2026-11-14
service: teknik-seo
imageAlt: "Tarama kapasitesi ve tarama talebinden oluşan tarama bütçesi şeması"
---

Tarama bütçesi, Google’ın bir siteyi tarayabileceği ve taramak istediği URL kümesidir; tarama kapasitesi sınırı ve tarama talebinden oluşur. Google’ın rehberi esas olarak çok büyük ve hızlı değişen siteler (1 milyondan fazla ya da günlük değişen 10.000’den fazla sayfa) içindir; küçük sitelerde site haritasını güncel tutmak ve sayfa dizine ekleme raporuna bakmak yeterlidir.

“Tarama bütçesi” SEO dünyasında çok kullanılan ama çoğu zaman yanlış uygulanan bir kavramdır: küçük bir işletme sitesi için kaygı olmamalıdır; büyük e-ticaret, ilan ya da haber sitelerinde ise belirleyici olabilir. Bu yazı, Google’ın tarama bütçesi rehberine dayanarak kavramı, kimlerin ilgilenmesi gerektiğini ve yönetim yollarını anlatıyor. Büyük sitenizin teknik yönetimi için [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Kimler için önemli?

Google’ın rehberi, öneriler genel iyi uygulamalar olsa da ileri düzey bir kaynak olduğunu belirtir ve şu siteler için tasarlandığını söyler ([tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)):

- İçeriği sık sık (haftada bir) değişen büyük siteler (1 milyondan fazla benzersiz sayfa),
- içeriği çok hızlı değişen (her gün) orta ölçekli ya da büyük siteler (10.000’den fazla benzersiz sayfa),
- URL’lerinin büyük bir kısmı Search Console’da “Keşfedildi – şu anda dizine eklenmiş değil” olarak sınıflandırılmış siteler.

Rehber bu sayıların kabaca tahmin olduğunu, birebir eşik olmadığını da vurgular. Sitenizde hızla değişen çok sayıda sayfa yoksa ya da sayfalarınız yayınlandıkları gün taranıyorsa rehberi okumanız gerekmez; site haritanızı güncel tutmanız ve sayfa dizine ekleme raporunu kontrol etmeniz yeterlidir. Küçük sitelerde dizine girmeme sorunu çoğunlukla bütçe değil, kalite, bağlantı ya da teknik engel kaynaklıdır (Google sayfanızı nasıl bulur?).

## Tarama bütçesi nasıl belirlenir?

Rehbere göre iki ana unsur vardır:

**Tarama kapasitesi sınırı.** Google sunucunuzu aşırı yoğunluğa sokmadan taramak ister. Her site ölçülü bir varsayılan sınırla başlar; site sağlıklı yanıt verirse ve yanıt süreleri (gecikme ve Time to First Byte dahil) sabit kalır ya da iyileşirse sınır artar. Site yavaşlarsa ya da 5xx kodları ve sıklık sınırlama sinyalleri (HTTP 429) dönerse sınır düşer ve Google daha az tarar.

**Tarama talebi.** Googlebot’un talebi sitenin boyutuna, güncelleme sıklığına, sayfa kalitesine ve diğer sitelere kıyasla alaka düzeyine göre değişir. Etkileyebileceğiniz başlıca faktörler:

- **Algılanan envanter:** Siz yol göstermezseniz Google bildiği URL’lerin tümünü ya da çoğunu taramaya çalışır. Çoğu birbirinin kopyasıysa ya da taranmasını istemiyorsanız Google boşuna vakit harcar. Rehbere göre bu, olumlu yönde en fazla kontrol edebileceğiniz faktördür.
- **Popülerlik:** Daha popüler URL’ler daha sık taranır.
- **Eskilik:** Google değişiklikleri tespit etmek için dokümanları yeniden tarar; site taşıma gibi site genelindeki etkinlikler talebi artırabilir.

Ayrıca her ana makine adı ayrı site sayılır ve ayrı tarama bütçesine sahiptir; tarama kapasitesi sınırı ise tüm tarayıcılar arasında paylaştırılır. Google’da taranan her sayfanın dizine eklenmeyebileceği de unutulmamalı.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## En iyi uygulama 1: URL envanterini yönetin

Google’a hangi sayfaların taranıp hangilerinin taranmayacağını bildirin. Taranmaması gereken URL’lere çok vakit harcanırsa sitenin geri kalanı keşfedilmeyebilir. Adımlar:

1. **Yinelenen içerikleri birleştirin.** Benzersiz URL’ler yerine benzersiz içerikleri taramaya odaklanın. Kopya adreslerin standart adresini belirtin ([canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
2. **robots.txt ile önemsiz URL’leri engelleyin.** Kullanıcılar için önemli olsa da Google yüzeylerinde görünmesini istemediğiniz sayfaları (örneğin bağlı sayfalardaki bilgileri kopyalayan sonsuz kaydırma sayfaları ya da aynı listenin farklı sıralanmış sürümleri) robots.txt ile engelleyin. Engellenen URL’ler Google’ın taramasını önler ve diğer sistemlerce işlenme olasılığını önemli ölçüde azaltır.
3. **noindex kullanmayın.** Rehber, `noindex`’in tarama bütçesini korumak için kullanılmamasını söyler: Google yine tarama isteği gönderir, etiketi görünce bırakır; bu tarama süresinin boşa gitmesi demektir.
4. **robots.txt’yi geçici bütçe aktarımı için kullanmayın.** Siteniz tarama kapasitesi sınırına ulaşmadığı sürece boşalan bütçe diğer sayfalara aktarılmaz.
5. **Kalıcı kaldırılan sayfalara 404 ya da 410 döndürün.** Google bildiği bir URL’yi unutmaz ama 404 kodu yeniden taramaması yönünde güçlü bir sinyaldir. Engellenen URL’ler ise uzun süre tarama sırasında kalır.

Filtreli e-ticaret adresleri bu envanter sorununun tipik kaynağıdır; ayrıntı için [e-ticarette filtreli sayfalar SEO için nasıl yönetilir?](/blog/e-ticarette-filtreli-sayfalar-seo-icin-nasil-yonetilir/) yazısına bakın.

## En iyi uygulama 2: Soft 404’leri giderin

Soft 404 döndüren sayfalar taranmaya devam eder ve bütçeyi boşa harcar. Sayfa dizine ekleme raporunda soft 404 durumlarına bakın ve gerçekten olmayan sayfalar için 404/410 döndürün (soft 404 nedir?).

## En iyi uygulama 3: Site haritasını güncel tutun

Google site haritanızı düzenli okur; taramasını istediğiniz tüm içeriği haritaya ekleyin. İçerik güncelleniyorsa `<lastmod>` etiketi eklemeniz önerilir. Haritada noindex’li, yönlendirilen ya da silinmiş adresler bulunmasın. Ayrıntı için [site haritası nasıl oluşturulur?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/) yazısına bakın.

## En iyi uygulama 4: Uzun yönlendirme zincirlerinden kaçının

Zincirler taramayı olumsuz etkiler; eski adresleri tek adımda son adrese bağlayın. Yöntem için [yönlendirme zincirleri ve döngüleri nasıl düzeltilir?](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/) yazısına bakın.

## En iyi uygulama 5: Hızı artırın

Google sayfalarınızı daha hızlı yükleyip oluşturabilirse sitenizden daha fazla içerik okuyabilir. Rehberin önerileri:

- Sunucu yanıt sürelerini ve kaynakları optimize edin.
- HTTP önbelleklemesini kullanın: son taramadan bu yana değişmeyen sayfa için 304 (Not Modified) kodunu destekleyin; bu, önbellekteki sürümün yeniden kullanılmasını sağlar ve sunucu bant genişliğini korur.

Sunucu yanıt süresi için [sunucu yanıt süresi (TTFB) nasıl iyileştirilir?](/blog/sunucu-yanit-suresi-ttfb-nasil-iyilestirilir/) yazısına bakın.

## En iyi uygulama 6: Tarama sorunlarını ayıklayın

Tarama sırasında sitenizin kullanılabilirlik sorunları olup olmadığını kontrol edin. Sunucu hataları, aşırı yük ve engellenen kaynaklar tarama verimini düşürür. Günlük analizi bu konuda yardımcı olur; ayrıntı için [SEO için log analizi](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/) yazısına bakın. Search Console’da URL Denetleme aracında “ana makine yükü aşıldı” gibi uyarılar varsa sunucu kapasitesini gözden geçirin.

## Daha fazla tarama bütçesi nasıl alınır?

Rehberdeki iki yol:

1. **Daha fazla sunucu kaynağı ekleyin:** Siteniz kendi tarafınızdaki sunucu kapasitesi nedeniyle taranamıyorsa (örneğin “ana makine yükü aşıldı” hatası) ve işletmeniz için uygunsa.
2. **İçeriğin kalitesini ilgili Google ürünü için optimize edin:** Google Arama için popülerlik, genel kullanıcı değeri, içeriğin benzersizliği ve sunum kapasitesi gibi unsurlar hesaba katılır.

Yani bütçe, “ayarı açılan” bir anahtar değil, sitenin sağlığı ve değerinin sonucudur.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli merkezli bir emlak ilan sitesinde 200.000 URL var; ilanlar günlük değişiyor ve birçok yeni ilan geç dizine giriyor.

- **Bulgu:** Search Console’da çok sayıda URL “Keşfedildi – dizine eklenmedi”; filtre ve sıralama parametreli adresler büyük yer tutuyor; süresi dolan ilanlar soft 404 dönüyor.
- **Aksiyon:** Gereksiz parametreler robots.txt ile kapatılıyor; süresi dolan ilanlar 404/410’a ya da ilgili kategoriye çevriliyor; site haritası yalnızca aktif ilanları `lastmod` ile içeriyor.
- **Hız:** Sunucu önbelleği ve 304 desteği açılıyor.
- **İzleme:** Birkaç hafta tarama ve dizine ekleme raporları karşılaştırılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Küçük bir site için tarama bütçesi kaygısı taşımak.**
2. **noindex ile tarama bütçesini yönetmeye çalışmak.**
3. **Gereksiz parametreli adresleri açık bırakmak.**
4. **Soft 404 üreten sayfaları temizlememek.**
5. **Site haritasına gereksiz ya da yönlendirilen adresleri koymak.**
6. **Sunucu hızı ve hatalarını izlememek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Büyük sitelerde tarama verimliliği görünürlüğü belirler. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin URL envanterini ve tarama israfını analiz ederiz,
- robots.txt, canonical, yönlendirme, soft 404 ve site haritası düzenlemelerini planlar ve uygularız,
- sunucu yanıt süresi ve hata oranlarını iyileştirir, log analizi yaparız,
- sonuçları Search Console’da izler ve yazılı raporlarız.

Büyük sitenizin tarama durumunu incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Tarama bütçesi nedir?

Google’ın bir siteyi tarayabileceği ve taramak istediği URL grubudur; tarama kapasitesi sınırı ve tarama talebinden oluşur.

### Küçük sitenin tarama bütçesi sorunu olur mu?

Genellikle olmaz. Google’a göre sayfalarınız yayınlandıkları gün taranıyorsa rehberi okumanız gerekmez.

### noindex tarama bütçesini korur mu?

Hayır. Google yine tarama isteği gönderir; etiketi görünce sayfayı taramayı bırakır ama tarama süresi harcanmış olur. Önemsiz sayfalar için robots.txt önerilir.

### Sunucu hızı tarama bütçesini etkiler mi?

Evet. Yanıt süreleri (TTFB dahil) iyileşirse tarama kapasitesi sınırı artar; 5xx ve 429 ile düşer.

### Tarama bütçemi nasıl artırırım?

Sunucu kaynağı ekleyerek ve içeriğin kalitesini (benzersizlik, kullanıcı değeri) iyileştirerek.

## Kaynaklar

- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Site haritası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)
