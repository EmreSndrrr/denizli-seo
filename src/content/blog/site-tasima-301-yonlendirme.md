---
title: "Yeni Siteye Geçerken Sıralamayı Korumak: 301 Listesi"
description: "Siteyi yenilerken ya da alan adı değiştirirken sıralamayı korumak için 301 yönlendirme, URL eşleme tablosu, Adres değişikliği aracı ve yayın sonrası kontrol listesi."
date: 2026-10-29
updated: 2026-11-06
service: web-tasarim
imageAlt: "Eski bir sayfadan yeni bir sayfaya giden ok ve 301 yazısı"
---

**Kısa cevap:** Yeni siteye geçerken sıralamayı korumak için, adresi değişen her eski sayfayı yeni sitedeki en yakın karşılığına sunucu tarafında 301 ile yönlendirin. Önce eski adreslerin listesini çıkarıp bir eşleme tablosu hazırlayın, yayın günü yönlendirmeleri test edin, yeni site haritasını gönderin. Yönlendirmeleri en az bir yıl yerinde tutun. Alan adı değişiyorsa Search Console’daki Adres değişikliği aracını da kullanın.

Bu yazıda 301’in ne olduğunu, hangi yönlendirmenin ne zaman kullanılacağını, eşleme tablosunun nasıl hazırlanacağını ve geçişten önce, yayın günü ve sonrasında neleri kontrol etmeniz gerektiğini adım adım anlatıyoruz. Google’ın kendi rehberlerine dayanan bir kontrol listesiyle bitiriyoruz.

## 301 yönlendirme nedir?

301, “bu sayfa kalıcı olarak buraya taşındı” anlamına gelen bir sunucu yanıtıdır. Ziyaretçi eski adrese tıklayınca yeni adrese gider; Google da yeni adresi sayfanın asıl adresi olarak görmeye başlar.

Google’a göre kalıcı yönlendirmeler, arama sonuçlarında yönlendirmenin hedefini, yani yeni adresi gösterir. Geçici yönlendirmelerde ise sonuçlarda genellikle eski sayfa kalır ([Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).

Google, site taşıma rehberinde 301 ve diğer kalıcı yönlendirmelerin PageRank’te bir kayba neden olmadığını da belirtir ([URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Yani doğru kurulan bir yönlendirme, eski sayfanın biriktirdiği değeri yeni sayfaya taşır. Sorun, yönlendirmenin hiç kurulmaması ya da yanlış kurulmasıdır.

## 301 mi, 302 mi? Hangi yönlendirme kullanılmalı?

Sayfa kalıcı olarak taşındıysa 301 (ya da 308) kullanın. Google, mümkün olduğunda sunucu tarafı kalıcı yönlendirme kullanılmasını önerir ve yöntemleri, Google’ın doğru yorumlama olasılığına göre sıralar:

| Yönlendirme | Google nasıl yorumlar? | Ne zaman kullanılır? |
| --- | --- | --- |
| 301, 308 | Kalıcı | Sayfa kalıcı olarak taşındıysa; ilk tercih |
| 302, 303, 307 | Geçici | Sayfa kısa süreliğine başka yere gidiyorsa |
| Anında meta refresh (0 saniye) | Kalıcı | Sunucu tarafı yönlendirme mümkün değilse |
| Gecikmeli meta refresh | Geçici | Site taşımada önerilmez |
| JavaScript yönlendirmesi | Kalıcı sayılabilir | Yalnızca diğer yollar mümkün değilse |

Google, JavaScript yönlendirmelerini yalnızca sunucu tarafı ya da meta refresh yönlendirmesi yapamıyorsanız kullanmanızı söyler; çünkü sayfanın işlenmesi başarısız olursa Google yönlendirmeyi hiç göremeyebilir.

Geçici yönlendirme için Google’ın verdiği örnek, bir hizmetin geçici olarak kullanılamadığı durumdur. Site yenilemede adresler kalıcı olarak değişiyorsa 302 kullanmak yanlış sinyal verir.

## Ne zaman yönlendirme gerekir?

Bir sayfanın adresi değişiyorsa yönlendirme gerekir. Google, URL değişikliği sayılan site taşımalarına şu örnekleri verir:

- HTTP’den HTTPS’ye geçiş.
- Alan adı değişikliği, örneğin `ornek-otel.com` adresinden `ornekotel.com.tr` adresine.
- Adres yollarının değişmesi, örneğin `/hizmet.php?id=3` yerine `/hizmetler/klima-montaji/`.

Sık rastlanan bir durum da site yazılımının değişmesidir. Eski sitede sayfa sonları `.html` ile biten bir yapıdan yeni bir sisteme geçildiğinde, sayfalar aynı kalsa bile adresler değişir.

### Adresler değişmiyorsa?

Aynı alan adı ve aynı adres yapısında yalnızca tasarımı yeniliyorsanız yönlendirme gerekmez. Yine de sayfaların başlık, açıklama ve içeriğini bozmadığınızdan emin olun. Tasarım yenilenirken metinlerin kısaltılması ya da hizmet sayfalarının birleştirilmesi de sıralamayı etkileyebilir.

### Her şeyi aynı anda değiştirmek doğru mu?

Mümkünse hayır. Google, değişiklikleri aynı anda değil arka arkaya yapmanızı önerir: örneğin önce yeni alan adına geçip, ardından sitenin düzenini değiştirmek. Adres değişikliği aracının yardım sayfası da taşımayı yeni tasarım ve yeni URL yapısıyla birleştirmenin büyük olasılıkla trafik kaybına yol açacağını, çünkü Google’ın her sayfayı yeniden öğrenmesi gerekeceğini belirtir ([Adres değişikliği aracı](https://support.google.com/webmasters/answer/9370220?hl=tr)).

## Geçişten önce URL eşleme tablosu nasıl hazırlanır?

Eşleme tablosu, eski sitedeki her adresin yeni sitede nereye gideceğini gösteren listedir. Yönlendirmeler bu tabloya göre kurulur, iç bağlantılar bu tabloya göre güncellenir.

### 1. Eski adreslerin listesini çıkarın

Google, önemli adreslerle başlamayı ve şu kaynaklara bakmayı önerir:

1. Search Console’a gönderilmiş site haritaları.
2. Sunucu günlükleri ya da analiz aracınızda en çok trafik alan sayfalar.
3. Search Console’daki bağlantılar raporu: başka sitelerden bağlantı alan sayfalar.
4. Site yönetim panelinin verdiği sayfa listesi.

Bunlara ek olarak Search Console’un Performans raporunda tıklama alan sayfaları ayrıca not edin. Bunlar korunması en önemli sayfalardır. Search Console’u henüz kurmadıysanız [Search Console ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızla başlayın.

Görselleri ve PDF gibi indirilebilir dosyaları unutmayın. Google, bunların da aramadan ya da bağlantılardan trafik alıyor olabileceğini ve diğer içerikler gibi taşınması gerektiğini söyler.

### 2. Her eski adres için yeni karşılığı yazın

Aşağıdaki tablo bir örnektir; adresler gerçek bir siteye ait değildir.

| Eski adres (örnek) | Yeni adres (örnek) | Not |
| --- | --- | --- |
| `/hizmetler.php?id=3` | `/hizmetler/klima-montaji/` | Birebir karşılık |
| `/hakkimizda.html` | `/hakkimizda/` | Yalnızca yazım değişti |
| `/klima-bakim.html` ve `/klima-temizlik.html` | `/hizmetler/klima-bakimi/` | İki sayfa birleştirildi |
| `/kampanya-2024.html` | 404 ya da 410 | İçerik kaldırıldı, karşılığı yok |

Karar kuralı şöyle:

- **Birebir karşılığı varsa** oraya yönlendirin.
- **Birkaç sayfa tek sayfada birleştiyse** hepsini o yeni sayfaya yönlendirin. Google bu durumu açıkça uygun görür.
- **Konusu en yakın sayfa varsa** oraya yönlendirin.
- **Hiçbir karşılığı yoksa** sayfanın 404 ya da 410 döndürmesine izin verin.

Birçok eski adresi alakasız tek bir hedefe, örneğin ana sayfaya yönlendirmeyin. Google’a göre bu, kullanıcının kafasını karıştırabilir ve soft 404 hatası sayılabilir.

### 3. Yeni sitedeki ayrıntıları güncelleyin

- Her yeni sayfanın kendisini gösteren bir `rel="canonical"` etiketi olsun.
- İç bağlantılarda eski adresleri yeni adreslerle değiştirin; bir yönlendirmeye değil, doğrudan yeni sayfaya bağlantı verin.
- Yalnızca yeni adresleri içeren bir site haritası hazırlayın.
- Eski adreslerinize bağlantı veren sitelerin listesini kaydedin; yayından sonra bu sitelerden bağlantıyı güncellemelerini isteyebilirsiniz.
- Yeni sitede iyi sıralanan sayfaların başlığını ve içeriğini zayıflatmayın.

## Yönlendirmeler nasıl kurulur?

Yönlendirmeyi sunucuda, site yönetim panelinde ya da barındırma firmanızın sunduğu ayarlarda kurabilirsiniz. Hangisinin mümkün olduğunu barındırma firmanıza ya da siteyi yapan ekibe sorun.

Apache sunucularda en basit kalıcı yönlendirme, Google’ın örneğine benzer şekilde `.htaccess` dosyasına yazılır:

```apache
# Örnek: eski sayfadan yeni sayfaya kalıcı yönlendirme
Redirect permanent "/hakkimizda.html" "https://www.ornek.com/hakkimizda/"
```

Kurarken şu iki kurala dikkat edin:

- **Zincir kurmayın.** Google, Googlebot’un bir zincirde en fazla 10 yönlendirmeyi izleyebildiğini, ama yönlendirmenin doğrudan son hedefe yapılmasını önerdiğini belirtir. Eski site daha önce de taşındıysa, en eski adresleri de doğrudan yeni sayfaya bağlayın.
- **Tek seferde taşıyın.** Google, küçük ve orta büyüklükteki sitelerde tüm adreslerin aynı anda taşınmasını önerir. Bölüm bölüm taşıma daha büyük siteler için bir seçenektir.

## Yayın günü neler kontrol edilmeli?

Yayın günü yönlendirmeleri açın ve hemen test edin. Sırasıyla:

1. **Yönlendirmeleri yayınla aynı anda açın.** Yeni site yayına girdiği anda eski adresler boşa düşmemeli.
2. **Önemli eski adresleri tek tek deneyin.** Tarayıcıda açın ya da Search Console’daki URL Denetleme aracını kullanın. Çok sayıda adres için bir tarama aracı kullanabilirsiniz.
3. **Yanıt kodunu kontrol edin.** Eski adres 301 vermeli, yeni adres 200 vermeli. Arada ikinci bir yönlendirme olmamalı.
4. **robots.txt’yi kontrol edin.** Test sitesinde konan “bütün siteyi engelle” kuralının canlıda kalmadığından emin olun. Google, geliştirme sırasında taramayı engelleyen site sahiplerini bu konuda özellikle uyarır.
5. **noindex etiketlerini kaldırın.** Geliştirme sırasında sayfalara konan noindex, canlıya geçince sayfaları dizin dışında bırakır.
6. **Search Console doğrulamasının çalıştığını kontrol edin.** Doğrulama dosyası ya da etiketi yeni sitede de olmalı.
7. **Yeni site haritasını Search Console’a gönderin.**

Mümkünse geçişi işinizin sakin olduğu bir döneme koyun. Google, trafiğin düşük olduğu zamanları seçmeyi önerir. Denizli’de sezonu olan bir işletmeyseniz, örneğin bir konaklama ya da düğün işletmesi, yoğun dönemin ortasında site değiştirmeyin.

## Alan adı değişiyorsa Adres değişikliği aracı nasıl kullanılır?

Alan adınız ya da alt alan adınız değişiyorsa, yönlendirmeleri kurduktan sonra Search Console’daki Adres değişikliği aracını kullanın. Google’ın yardım sayfasına göre ([Adres değişikliği aracı](https://support.google.com/webmasters/answer/9370220?hl=tr)):

- Araç, alan adından alan adına geçişler içindir: `ornek.com` adresinden `ornek.com.tr` adresine gibi.
- HTTP’den HTTPS’ye geçişte, aynı alan adında www ile www’siz arasında geçişte ve aynı site içinde yol değişikliğinde **kullanılmaz**. Bu durumlarda yönlendirme ve site haritası yeterlidir.
- Hem eski hem yeni mülkün Search Console’da sahibi olmanız ve ikisini aynı Google hesabıyla yönetmeniz gerekir.
- Araç, eski alan adının alt alan adlarını kendiliğinden taşımaz. `www` ve `www`’siz sürümler dahil, eski alanın tüm sürümleri için ayrı ayrı istek göndermeniz gerekir.
- Araç, istek göndermeden önce sitenizdeki birkaç sayfada 301’leri kontrol eder.

### Adım adım

1. Eski ana sayfadan yeni ana sayfaya ve eski sayfalardan yeni karşılıklarına 301 kurun.
2. Eski ve yeni alan adının tüm sürümlerini Search Console’da doğrulayın.
3. Eski alan adının mülkünde Adres değişikliği aracını açın ve talimatları izleyin.
4. Kritik bir ön kontrol başarısız olursa sorunu düzeltip tekrar deneyin.

Google, taşıma bildiriminin 180 gün boyunca Search Console’da gösterildiğini ve bu süre içinde istek iptal edilebildiğini belirtir. Google ayrıca, bırakılan alan adının başkası tarafından alınıp kötüye kullanılmasını önlemek için eski alan adının ücretini en az bir yıl ödemeye devam etmenizi önerir.

## Yönlendirmeler ne kadar süre kalmalı?

Mümkün olduğu kadar uzun; Google’a göre bu süre genellikle **en az bir yıldır**. Google, bu sürenin diğer sitelerden eski adreslere verilen bağlantılar dahil tüm sinyallerin yeni adreslere aktarılmasını sağladığını belirtir ve kullanıcılar açısından yönlendirmeleri süresiz tutmayı da düşünebileceğinizi ekler ([URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)).

Bizim önerimiz basit: yönlendirme kurallarını silmeyin. Yeni bir site yazılımına geçerseniz, eski yönlendirmeleri de yeni sisteme taşıyın.

## Yayından sonraki haftalarda neye bakmalı?

Geçişten sonra Search Console’da eski ve yeni adreslerin durumunu birlikte izleyin.

- **Sayfalar raporu:** Yeni adreslerin dizine girdiğini, eskilerin çıktığını gösterir. “Bulunamadı (404)” hatalarında ani bir artış, eksik ya da yanlış yönlendirme demektir; eksik yönlendirmeyi ekleyin.
- **Site haritaları raporu:** Yeni site haritasından dizine eklenen adres sayısı zamanla artmalı. Google, eski site haritası için yönlendirme uyarıları görülebileceğini ve bunun normal olduğunu söyler.
- **Performans raporu:** Yeni adresler zamanla gösterim ve tıklama almaya başlar.

Google, geçiş sırasında sıralamada geçici dalgalanma olabileceğini ve orta büyüklükteki sitelerde yeni adreslerin eski adreslerin yerini almasının birkaç hafta ya da daha uzun sürebileceğini belirtir. Google ayrıca, alan adı değiştirdiyseniz yeni adresler dizine girmiş olsa bile eski adreslerin sonuçlarda zaman zaman görünmeye devam edebileceğini ve bunun normal olduğunu söyler.

İlk haftalarda küçük bir düşüş görürseniz telaşla yeni değişiklik yapmayın. Önce yönlendirmelerin, robots.txt’nin ve noindex etiketlerinin doğru olduğunu kontrol edin. Sıranın neden zaman aldığını [SEO ne kadar sürede sonuç verir](/blog/seo-ne-kadar-surede-sonuc-verir/) yazımızda anlattık.

## Sık yapılan hatalar

- Yönlendirmeleri hiç kurmamak ya da yalnızca ana sayfayı yönlendirmek.
- Bütün eski adresleri ana sayfaya göndermek.
- Kalıcı taşımada 302 kullanmak.
- Yönlendirmeyi var olmayan bir yeni adrese göndermek.
- Yönlendirme zinciri bırakmak.
- Test sitesinin robots.txt engelini ya da noindex etiketini canlıda unutmak.
- Site haritasını eski adreslerle bırakmak.
- Görselleri ve PDF dosyalarını eşlemeye almamak.
- Birkaç ay sonra yönlendirmeleri “artık gerek yok” diye silmek.
- Sunucu kapasitesini düşünmemek. Google, taşımadan sonra yeni siteyi bir süre normalden yoğun taradığını belirtir.

Bu kontrollerin çoğu [teknik SEO](/teknik-seo/) çalışmasının parçasıdır.

## Sık sorulan sorular

### 301 yönlendirme sıralamayı düşürür mü?

Google, 301 ve diğer kalıcı yönlendirmelerin PageRank’te kayba yol açmadığını belirtir. Geçiş sırasında geçici dalgalanma ise normaldir.

### Yönlendirmeleri ne zaman kaldırabilirim?

Google en az bir yıl önerir ve kullanıcılar için süresiz tutmayı da düşünebileceğinizi söyler. Kaldırmak için güçlü bir neden yoksa yerinde bırakın.

### HTTP’den HTTPS’ye geçerken Adres değişikliği aracını kullanmalı mıyım?

Hayır. Google, bu geçiş için aracın kullanılmamasını söyler. Yönlendirmeleri kurup site haritasını güncellemeniz yeterlidir.

### Silinen sayfaları ana sayfaya yönlendirebilir miyim?

Toplu olarak yapmayın. Konusu yakın bir sayfa yoksa sayfanın 404 ya da 410 döndürmesi daha doğrudur.

### Yeni sitemde bütün eski sayfalar olmak zorunda mı?

Hayır. Ama ziyaret ya da bağlantı alan eski sayfaların içeriğini yeni sitede bir yerde karşılamak, sıranın korunmasına yardım eder.

## Kaynaklar

- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Search Central: URL değişikliği yaparak site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Search Console Yardımı: Adres değişikliği aracı](https://support.google.com/webmasters/answer/9370220?hl=tr)

Yeni siteyi baştan aramaya göre kurmak için [SEO uyumlu web tasarım](/web-tasarim/) sayfamıza bakın.
