---
title: "SEO İçin Log Analizi: Googlebot Hareketlerini İnceleme"
description: "SEO için sunucu log analizi nasıl yapılır? Googlebot isteklerini doğrulayıp süzün; durum kodlarını, taranan URL’leri ve boşa giden taramayı bulun."
date: 2026-11-14
service: teknik-seo
imageAlt: "Sunucu günlüğü satırlarından Googlebot isteklerinin süzülüp özetlenmesi"
---

SEO için log analizi, sunucunuzun kayıt tuttuğu erişim günlüklerinde Googlebot’un hangi adresleri, ne sıklıkta ve hangi yanıt koduyla taradığını incelemektir. Adımlar şöyledir: günlükleri alın, Googlebot isteklerini ayıklayın ve gerçekten Google’dan geldiğini doğrulayın, ardından taranan URL’leri, durum kodlarını ve boşa giden taramayı özetleyin. Sonuç, Search Console’un göstermediği ayrıntıyı verir: Google sitenizde gerçekte ne yapıyor?

Çoğu küçük işletme sitesinde log analizi gerekmez; Search Console ve site haritası çoğu soruyu cevaplar. Google’ın kendi rehberi de büyük ve hızlı değişen siteler için ayrıntılı tarama optimizasyonu önerir. Yine de dizine eklenmeyen sayfalar, beklenmedik hatalar ya da tarama sorunları şüphesi varsa log analizi, tahminin yerine kanıt koyar. Bu yazı süreci adım adım anlatıyor. Teknik inceleme için [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Log dosyası nedir?

Web sunucusu her isteği bir satır olarak kaydeder. Tipik bir satır şunları içerir:

- **Tarih ve saat:** İsteğin zamanı.
- **IP adresi:** İsteği yapanın adresi.
- **İstenen adres (URL):** Hangi sayfa ya da dosya.
- **Yöntem ve protokol:** GET, HTTP sürümü gibi.
- **Durum kodu:** 200, 301, 404, 500…
- **Boyut ve yanıt süresi (bazı biçimlerde).**
- **Yönlendiren sayfa ve kullanıcı aracısı:** İstek yapan yazılımın adı (örneğin Googlebot).

Bu kayıtlar ziyaretçi ve botların tümünü kapsar; analiz için Googlebot satırlarını ayıklarsınız.

## Log analizi ne zaman gerekir?

Şu durumlarda faydalıdır:

- Önemli sayfalar “Keşfedildi – şu anda dizine eklenmedi” durumunda bekliyorsa.
- Büyük ya da sık güncellenen sitede yeni sayfalar geç taranıyorsa.
- Sunucu hataları (5xx) ya da yavaşlık şüphesi varsa.
- Site taşıma ya da yeniden yapılandırma sonrası Google’ın yeni adresleri nasıl tarıdığını görmek istiyorsanız.
- Parametreli, filtreli ya da gereksiz adreslerde tarama israfı şüphesi varsa.

Google’ın tarama bütçesi rehberine göre rehber esas olarak 1 milyondan fazla sayfalı haftalık değişen ya da 10.000’den fazla sayfalı günlük değişen siteler ile çok sayıda URL’si “Keşfedildi – dizine eklenmedi” olan siteler içindir; sayılar kaba tahmindir ve eşik değildir ([tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)). Küçük sitelerde sorun genellikle bütçe değil kalite, bağlantı ya da teknik engeldir.

## Adım 1: Log dosyalarını alın

Günlükleri hosting sağlayıcınızdan alırsınız:

- Hosting panelinde “ham erişim günlükleri” (raw access logs) ya da benzeri bir bölüm bulunur.
- Paylaşımlı hostinglerde günlükler çoğunlukla sınırlı süre saklanır; ihtiyaç duyuyorsanız düzenli indirmeyi ayarlayın.
- CDN ya da güvenlik katmanı (WAF) kullanıyorsanız kayıtlar orada da tutulabilir; gerçek Googlebot istekleri bu katmandan geçebilir.
- Kullanılan sunucuya göre günlük biçimi değişir; ortak biçim satır başına bir istektir.

En az 2–4 haftalık veriyle başlayın; çok kısa dönemler yanıltıcıdır. Günlükler IP adresi gibi kişisel veri sayılabilecek bilgiler içerir; dosyaları yalnızca yetkili kişilerle paylaşın, gereğinden uzun saklamayın ve kişisel verilerle ilgili yükümlülükler için bir hukuk danışmanına başvurun.

## Adım 2: Googlebot satırlarını ayıklayın

Kullanıcı aracısında “Googlebot” geçen satırları süzün. Ama bu yeterli değildir; çünkü kötü niyetli botlar kendilerini Googlebot olarak tanıtabilir. Google’ın doğrulama rehberi şunu önerir ([Google tarayıcılarını doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)):

1. Günlükteki IP adresi için ters DNS araması yapın ve alan adının `googlebot.com`, `google.com` ya da `googleusercontent.com` olduğunu doğrulayın.
2. Bulunan alan adı için yönlendirilmiş DNS araması yapıp orijinal IP ile eşleştiğini kontrol edin.
3. Büyük ölçekli analiz için IP adreslerini Google’ın yayınladığı IP listesiyle (ör. `common-crawlers.json`) otomatik eşleştirin.

Yaygın kullanılan tarayıcılar (Googlebot gibi) otomatik taramalarda robots.txt kurallarına uyar; özel durum tarayıcıları ve kullanıcı tetiklemeli alıcılar ise uymayabilir ya da yoksayar. Yalnızca doğrulanmış Googlebot isteklerini analize alın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 3: Neye bakmalısınız?

Süzülmüş Googlebot isteklerini bir çalışma sayfasında özetleyin:

**1. Durum kodu dağılımı.** İsteklerin kaçı 200, 301/302, 404, 5xx? Çok sayıda 404 ve 5xx tarama israfı ve altyapı sorunu işaretidir. Google, 5xx ve 429’un taramayı yavaşlattığını belirtir ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)).

**2. En çok taranan adresler.** Googlebot en çok hangi URL’lerde vakit harcıyor? Önemli hizmet sayfaları mı, yoksa parametreli filtreler, arama sonuçları ve eski adresler mi?

**3. Hiç taranmayan önemli sayfalar.** Site haritanızdaki adresler günlüklerde görünmüyorsa Google onları taramıyordur; nedeni iç bağlantı eksikliği, kalite ya da teknik engel olabilir.

**4. Yönlendirmeler.** Googlebot’un 301/302 isteklerinin payı yüksekse yönlendirme zincirleri ve eski adresler taramayı tüketiyor olabilir ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).

**5. Tarama sıklığı.** Hangi bölümler günlük, hangileri aylık taranıyor? Sık değişen sayfalarınız (fiyat, stok, haber) yeterince sık taranıyor mu?

**6. Yanıt süresi.** Günlük biçiminiz yanıt süresini içeriyorsa yavaş yanıtlayan adresleri bulun; tarama kapasitesi sınırı yanıt sürelerine (TTFB dahil) bağlıdır.

**7. Kaynak dosyaları.** CSS, JavaScript ve görsellerin taranabildiğini ve hata vermediğini kontrol edin.

## Adım 4: Bulguları yorumlayın

Sık görülen bulgular ve anlamları:

| Bulgu | Olası anlam | Aksiyon |
| --- | --- | --- |
| Çok sayıda parametreli URL taranıyor | Filtre/sıralama adresleri tarama israfı | robots.txt ile engelleme, canonical, parametre düzeni |
| Çok sayıda 404 | Kırık iç bağlantılar, eski adresler | İç bağlantıyı düzelt, yönlendir ya da 404 bırak |
| 5xx kümeleri | Sunucu sorunu | Hosting, eklenti, yük kontrolü |
| Önemli sayfa hiç taranmıyor | İç bağlantı eksik ya da değer algısı düşük | İç bağlantı, site haritası, içerik kalitesi |
| Çok sayıda 301 | Yönlendirme zincirleri | Zincirleri kısalt, bağlantıları güncelle |
| Eski sayfalar sık taranıyor | Güncelliğin/popülerliğin yanlış işareti | Eski sayfaları temizle, yönlendir |

Google’ın en iyi uygulama listesi bunlarla örtüşür: URL envanterini yönet, kopyaları birleştir, önemsiz URL’leri robots.txt ile engelle, soft 404’leri gider, uzun yönlendirme zincirlerinden kaçın, site haritasını güncel tut.

## Adım 5: Aksiyon planı çıkarın

Bulguları işe çevirin:

1. **Hızlı kazanımlar:** Kırık iç bağlantıları düzeltin, gereksiz parametreleri engelleyin, 5xx kaynağını giderin.
2. **Orta vadeli işler:** Yönlendirme zincirlerini kısaltın, site haritasını güncelleyin, önemli sayfalara iç bağlantı ekleyin.
3. **Uzun vadeli işler:** Site mimarisi, eski içerik temizliği, sunucu iyileştirmesi.

Değişiklikten sonra birkaç hafta sonra yeniden log analizi yapın ve karşılaştırın. Tarama davranışının değişmesi zaman alır; tek bir ölçümle sonuç çıkarmayın.

## Search Console ile birlikte kullanın

Log analizi ve Search Console birbirini tamamlar. Search Console’daki sayfa dizine ekleme raporu hangi sayfaların dizinde olduğunu ve neden eklenmediğini söyler ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)); log analizi ise Googlebot’un bunlara gerçekten ne zaman ve nasıl eriştiğini gösterir. Örneğin bir sayfa “Keşfedildi – dizine eklenmedi” ise ve günlükte hiç taranmamışsa iç bağlantı ve değer sorunu akla gelir; “Tarandı – dizine eklenmedi” ise sorun kalite ya da yinelemedir. Durum açıklamaları için [“Keşfedildi, dizine eklenmedi” ne anlama gelir?](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili mağazasının çevrimiçi sitesinde yeni ürün sayfaları haftalarca dizine girmiyor.

- **Veri:** Son dört haftanın günlükleri alınıyor; doğrulanmış Googlebot isteklerinin çoğunun filtre parametreli adreslere gittiği görülüyor.
- **Bulgu:** Ürün sayfaları az taranıyor; 404 ve 301 payı yüksek.
- **Aksiyon:** Filtre parametreleri robots.txt ile kapatılıyor, kırık iç bağlantılar düzeltiliyor, yönlendirme zincirleri kısaltılıyor.
- **Kontrol:** Üç hafta sonra günlükler yeniden inceleniyor; Search Console’da dizine ekleme raporu karşılaştırılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yalnızca kullanıcı aracısına bakıp Googlebot’u doğrulamamak.**
2. **Çok kısa süreli veriden sonuç çıkarmak.**
3. **Küçük sitede gereksiz karmaşık log çalışmasına girmek.**
4. **Kişisel veri içeren günlükleri korumasız paylaşmak.**
5. **Bulguyu aksiyona çevirmemek.**
6. **Değişiklik sonrası yeniden ölçmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Log analizi, tahminleri kanıta çevirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- hosting günlüklerinizi alır, Googlebot isteklerini doğrulayarak ayıklarız,
- durum kodu, taranan adres, tarama sıklığı ve israf bulgularını özetleriz,
- bulguları öncelikli, yazılı bir aksiyon listesine çeviririz,
- değişiklik sonrası yeniden analiz yapar ve raporlarız.

Sitenizin tarama davranışını incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Log analizi küçük site için gerekli mi?

Genellikle değil. Search Console çoğu soruyu cevaplar; log analizi tarama sorunu şüphesinde ya da büyük sitelerde değer katar.

### Googlebot’u nasıl doğrularım?

Günlükteki IP için ters DNS yapıp alan adının googlebot.com, google.com ya da googleusercontent.com olduğunu, ardından yönlendirilmiş DNS ile IP eşleşmesini kontrol edin.

### Günlükleri nereden alırım?

Hosting panelindeki ham erişim günlüklerinden ya da CDN/güvenlik katmanı kayıtlarından.

### Ne kadar süreli veri gerekir?

En az 2–4 hafta; çok kısa dönemler yanıltıcıdır.

### Log analizi sıralamayı yükseltir mi?

Doğrudan değil; taramayı ve teknik sağlığı iyileştirerek sayfaların daha iyi keşfedilmesine yardım eder. Sıralama garantisi yoktur.

## Kaynaklar

- [Google Arama Merkezi: Google tarayıcıları ve alıcılarından gelen istekleri doğrulama](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=tr)
- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
