---
title: "Search Console’da İlk Kontrol: Siteniz Dizinde mi?"
description: "Sitenizin Google dizininde olup olmadığını Search Console’da nasıl kontrol edersiniz? Sayfa dizine ekleme, URL denetimi, site haritası ve performans adım adım."
date: 2026-10-27
updated: 2026-11-06
service: teknik-seo
imageAlt: "Bir performans grafiği ve altında üç denetim satırı; ikisi onaylı, biri uyarılı"
---

Sitenizin Google dizininde olup olmadığını görmek için Search Console’a sitenizi ekleyip doğrulayın. Ardından Sayfa dizine ekleme raporunda önemli sayfalarınızın “dizine eklendi” tarafında olup olmadığına bakın. Tek bir sayfayı URL denetimi aracına yazın; “URL Google’da mevcut” yazıyorsa sayfa dizindedir. Eksik sayfalar için nedeni okuyun, düzeltin, site haritası gönderin ve gerekirse dizine ekleme isteyin.

**Google Search Console**, sitenizin Google’da nasıl göründüğünü gösteren ücretsiz bir araçtır. Bu yazıda kurulumdan sonra ilk gün bakmanız gereken beş yeri sırayla anlatıyoruz: sayfa dizine ekleme raporu, URL denetimi, site haritası, performans ve bağlantı raporu. Her adımda raporda ne göreceğinizi, ne anlama geldiğini ve ne yapmanız gerektiğini yazdık.

## Search Console’a site nasıl eklenir ve doğrulanır?

Siteyi [search.google.com/search-console](https://search.google.com/search-console) adresinden ekleyip sahibi olduğunuzu kanıtlarsınız. Search Console iki tür mülk sunar ([Search Console’a mülk ekleme](https://support.google.com/webmasters/answer/34592?hl=tr)):

| Mülk türü | Neyi kapsar? | Nasıl doğrulanır? |
| --- | --- | --- |
| Alan mülkü | Alan adının tamamı: http ve https, www ve diğer alt alan adları | Yalnızca alan adı sağlayıcısında DNS kaydıyla |
| URL öneki mülkü | Yalnızca yazdığınız adresle başlayan sayfalar | HTML dosyası, HTML etiketi, Google Analytics, Etiket Yöneticisi gibi birkaç yöntemle |

İşletme siteleri için genellikle alan mülkü daha pratiktir; bütün sürümleri tek yerde toplar. DNS kaydına erişiminiz yoksa URL öneki mülküyle başlayabilirsiniz.

### Doğrulama adımları

1. Search Console’da **Mülk ekle** seçeneğini açın ve mülk türünü seçin.
2. Alan mülkü seçtiyseniz Google’ın verdiği TXT kaydını alan adı yönetim panelinize ekleyin.
3. URL öneki seçtiyseniz sitenize uygun yöntemi seçin. WordPress kullanıyorsanız Google’ın resmi olarak desteklediği Site Kit eklentisi doğrulamayı sizin yerinize yapabilir ([sahipliği doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)).
4. **Doğrula** düğmesine basın.

Sitenizi başka biri kurduysa doğrulama için ona ya da alan adınızın yönetim paneline ihtiyacınız olabilir. Sahipliği bir ajansın ya da çalışanın kişisel hesabına değil, işletmenin kendi hesabına bağlayın. Başkalarına ayrı kullanıcı olarak erişim verin.

### Veriler ne zaman görünür?

Google’a göre veriler, mülk Search Console’a eklenir eklenmez toplanmaya başlar; ancak ilk verilerin görünmesi birkaç gün sürer. İlk gün raporlar boş görünüyorsa endişelenmeyin.

## Siteniz dizinde mi? Sayfa dizine ekleme raporu nasıl okunur?

Sayfa dizine ekleme raporu, Google’ın sitenizde bildiği adreslerin kaçının dizine eklendiğini, kaçının eklenmediğini ve nedenini gösterir ([Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)). Dizinde olmayan bir sayfa, içeriği ne kadar iyi olursa olsun aramada çıkmaz.

Raporun üstünde iki sayı ve bir grafik vardır: dizine eklenen sayfalar ve dizine eklenmeyen sayfalar. Altında **Sayfaların dizine eklenmeme nedenleri** tablosu yer alır. Bu tablodaki **Kaynak** sütunu, sorunun kaynağının web siteniz mi yoksa Google mı olduğunu söyler. Google, genel olarak yalnızca kaynağı “Web sitesi” olan sorunları düzeltebileceğinizi belirtir.

### Her sayfanın dizine girmesi gerekmez

Raporda gri, yani dizine eklenmemiş sayfalar görmek tek başına sorun değildir. Google bunu açıkça yazar: kopya sayfalar, yönlendiren adresler, bilerek “noindex” verilmiş sayfalar ve silinmiş sayfalar dizine girmez. Hedef yüzde yüz değildir. Asıl soru şudur: **önemli sayfalarınızın hepsi dizinde mi?** Ana sayfa, hizmet sayfaları ve iletişim sayfası dizinde değilse ilk iş budur.

### Durumlar ne anlama gelir?

Aşağıdaki adlar Google’ın Türkçe yardım sayfasındaki adlardır; arayüzde küçük yazım farkları olabilir.

- **Sayfa dizine eklendi:** ne anlama gelir?: Sayfa Google dizininde ve aramada görünmeye uygun.; ne yapmalı?: Bir şey yapmanız gerekmez.
- **URL “noindex” olarak işaretlenmiş:** ne anlama gelir?: Sayfada dizine eklemeyi engelleyen bir kural var.; ne yapmalı?: Bilerek konulmadıysa kaldırın, sonra dizine ekleme isteyin.
- **Tarandı: Şu anda dizine eklenmiş değil:** ne anlama gelir?: Google sayfayı taradı ama dizine almadı.; ne yapmalı?: Önemli bir sayfaysa içeriği güçlendirin, benzer sayfalarla çakışıp çakışmadığına bakın.
- **Bulundu: Şu anda dizine eklenmiş değil:** ne anlama gelir?: Google adresi biliyor ama henüz taramadı.; ne yapmalı?: Sayfaya iç bağlantı verin, site haritasında olduğundan emin olun.
- **Kullanıcı tarafından seçilen standart sayfa olmadan kopya:** ne anlama gelir?: Sayfa başka bir sayfanın kopyası sayıldı; Google diğerini seçti.; ne yapmalı?: Doğru sayfa seçildiyse sorun yok; değilse standart (canonical) adresi belirtin.
- **Yönlendirmeli sayfa:** ne anlama gelir?: Adres başka bir adrese yönlendiriyor.; ne yapmalı?: Normaldir; hedef sayfanın dizinde olduğunu kontrol edin.
- **Bulunamadı (404):** ne anlama gelir?: Sayfa silinmiş ya da adres hatalı.; ne yapmalı?: Sayfa taşındıysa yeni adrese 301 yönlendirmesi verin.
- **Soft 404:** ne anlama gelir?: Sayfa “bulunamadı” gibi görünüyor ama sunucu hata kodu döndürmüyor.; ne yapmalı?: Gerçekten yoksa 404 döndürün; varsa içeriği netleştirin.
- **Sunucu hatası (5xx):** ne anlama gelir?: Google sayfayı istediğinde sunucu hata verdi.; ne yapmalı?: Barındırma firmanızla görüşün; sorun sürüyorsa sunucuyu inceletin.
- **URL, robots.txt tarafından engellendi:** ne anlama gelir?: robots.txt dosyası Google’ın taramasını engelliyor.; ne yapmalı?: Engel bilinçli değilse kuralı kaldırın.

Google, “Tarandı: Şu anda dizine eklenmiş değil” mesajının birçok sitede görüldüğünü ve her zaman ilgilenilmesi gereken bir sorun olmadığını belirtir. Bizim gözlemimiz, işletme sitelerinde bu durumun çoğu zaman birbirine çok benzeyen ya da çok az içerik taşıyan sayfalarda ortaya çıktığı yönünde. Her ilçe için aynı metni ilçe adı değiştirilerek kopyalamak buna tipik bir örnektir. Hizmet sayfalarını nasıl ayrıştıracağınızı [hizmet sayfası yazımı rehberimizde](/blog/hizmet-sayfasi-nasil-yazilir/) anlattık.

### Sorun düzeltildikten sonra ne yapılır?

1. Sorunun bütün örneklerini sitede düzeltin.
2. Raporda ilgili satırı açın ve **Düzeltmeyi doğrula** düğmesine basın.
3. Bekleyin. Google’a göre doğrulama genellikle iki hafta kadar sürer, bazen daha uzun sürebilir. Sonuç e-postayla bildirilir.

Doğrulamayı başlatmasanız da Google, sayfaları normal taramasında yeniden kontrol eder ve sayıları günceller.

### Dizindeki sayfa sayısı neden azaldı?

Dizine eklenen sayfa sayısı düşerken hata sayısı artmıyorsa Google’a göre sık nedenler şunlardır: robots.txt ile yeni bir engel, sayfalara eklenmiş bir “noindex” ya da giriş gerektiren sayfalar. Site yeni bir tasarıma taşındıysa eski adreslerin yönlendirilip yönlendirilmediğine de bakın; ayrıntıları [site taşıma ve 301 yönlendirme yazımızda](/blog/site-tasima-301-yonlendirme/) bulabilirsiniz.

Bizim gözlemimize göre sık rastlanan bir neden de sitenin geliştirme aşamasında arama motorlarına kapatılıp yayına alınırken açılmasının unutulmasıdır. WordPress’te bu, Okuma ayarlarındaki arama motoru görünürlüğü kutusudur. Böyle bir durumda sayfalar raporda “noindex” nedeniyle dışarıda görünür.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Tek bir sayfa Google’da mı? URL denetimi nasıl kullanılır?

Tek bir sayfanın durumunu öğrenmenin yolu URL denetimi aracıdır ([URL Denetleme aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)). Sayfa dizine ekleme raporu sitenin genel resmini verir; belirli bir adresi aramak için tasarlanmamıştır.

1. Search Console’un üstündeki arama kutusuna sayfanın tam adresini yazın. Adres açık olan mülke ait olmalıdır.
2. Sonucun üstündeki genel durumu okuyun.
3. **Sayfayı dizine ekleme** bölümünü açıp ayrıntılara bakın: Google sayfayı nasıl bulmuş, en son ne zaman taramış, taramaya ve dizine eklemeye izin verilmiş mi, hangi adresi standart olarak seçmiş.

Genel durum üç şekilde görünebilir:

- **URL Google’da mevcut:** Sayfa dizinde ve aramada görünmeye uygun. Google, bunun her aramada görüneceğinizi garanti etmediğini özellikle belirtir.
- **URL Google’da mevcut, ancak sorunları var:** Sayfa dizinde ama yapılandırılmış veri gibi ek özelliklerde sorun var.
- **URL Google’da yok:** Sayfa aramada görünemez. Nedeni “Sayfayı dizine ekleme” bölümünde yazar.

### Dizindeki sürüm mü, canlı sayfa mı?

Araçta ilk gördüğünüz bilgi canlı test değildir; sayfanın Google’ın en son dizine eklediği sürümüne aittir. Sayfayı yeni düzelttiyseniz **Canlı URL’yi test et** ile Google’ın sayfayı şu anda nasıl gördüğünü kontrol edin. Canlı test, ekran görüntüsünü ve sunucu yanıtını da gösterir.

### Dizine ekleme isteği ne zaman gönderilir?

Yeni yayınladığınız ya da önemli ölçüde değiştirdiğiniz bir sayfa için **Dizine ekleme iste** seçeneğine basabilirsiniz. Google’ın belirttiği kurallar şunlar:

- İstek göndermek, sayfanın dizine gireceğini garanti etmez.
- Günlük istek sayısı sınırlıdır; aynı adres için tekrar tekrar istek göndermek taramayı hızlandırmaz ([Google’dan yeniden tarama isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)).
- İstek için mülkün sahibi ya da tam kullanıcısı olmanız gerekir.
- Çok sayıda sayfa için tek tek istek yerine site haritası gönderin.

Google, taramanın birkaç gün ile birkaç hafta arasında sürebileceğini de belirtir. Sayfa beklediğinizden geç görünüyorsa sürenin genel resmini [SEO ne kadar sürede sonuç verir yazımızda](/blog/seo-ne-kadar-surede-sonuc-verir/) anlattık.

## Site haritası nasıl gönderilir, şart mı?

Site haritası, sitenizdeki sayfaların listesini Google’a bildiren bir dosyadır; şart değildir ama çoğu durumda faydalıdır ([Google: site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)). Google’a göre yaklaşık 500 ya da daha az sayfası olan ve sayfaları birbirine iyi bağlanmış küçük bir sitenin site haritasına ihtiyacı olmayabilir. Yeni ve başka sitelerden az bağlantı alan sitelerde ise site haritası sayfaların keşfedilmesine yardım eder.

### Gönderme adımları

1. Site haritanızın adresini bulun. Birçok sistem bunu kendiliğinden üretir; örneğin `alanadiniz.com/sitemap.xml` gibi bir adreste olur. Wix ve Squarespace gibi hazır platformlar site haritasını sizin yerinize yönetebilir.
2. Adresi tarayıcıda açın ve sayfa listesinin göründüğünden emin olun.
3. Search Console’da **Site haritaları** raporunu açın.
4. Adresi **Yeni site haritası ekle** kutusuna yapıştırıp **Gönder**’e basın.

Gönderim için mülkte sahip izniniz olmalıdır ([Site haritaları raporu](https://support.google.com/webmasters/answer/7451001?hl=tr)).

### Durum sütunu ne söyler?

- **Başarılı:** Dosya okundu, adresler tarama sırasına alındı.
- **Hata içeriyor:** Dosya okundu ama bazı hatalar var. Satıra tıklayıp hataları görün.
- **Getirilemedi:** Google dosyaya ulaşamadı. robots.txt engeli ya da hatalı adres olabilir.

“Keşfedilen sayfalar” sayısı, dosyada bulunan adres sayısıdır; bu adreslerin dizine gireceği anlamına gelmez. Hangilerinin dizinde olduğunu görmek için Sayfa dizine ekleme raporunu bu site haritasına göre filtreleyin. Site haritasında yalnızca dizinde olmasını istediğiniz sayfalar bulunsun; yönlendiren, silinmiş ya da “noindex” verilmiş adresleri listeden çıkarın.

## Performans raporunda neye bakılır?

Performans raporu, sitenizin hangi aramalarda göründüğünü, kaç tıklama aldığını ve ortalama hangi sırada çıktığını gösterir ([Performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)). Varsayılan görünüm son üç ayı gösterir. Google’ın tanımlarıyla dört ölçü vardır:

- **Tıklama sayısı:** Aramadan sitenize kaç kez tıklandığı.
- **Gösterim sayısı:** Sitenizin arama sonuçlarında kaç kez gösterildiği.
- **Tıklama oranı (TO):** Tıklamanın gösterime bölümü.
- **Ortalama konum:** Sitenizin göründüğü aramalardaki ortalama sırası.

Tablonun üstündeki sekmeler veriyi gruplar: Sorgular, Sayfalar, Ülkeler, Cihazlar, Arama görünümü ve Tarihler.

### İlk gün bakılacak üç şey

1. **Sorgular sekmesi:** İşletme adınız dışındaki aramalara bakın. Müşteri sizi hangi sözle buluyor? Örneğin bir halı yıkama firması “Merkezefendi halı yıkama” gibi ilçe adı içeren aramalarda görünüyor mu?
2. **Sayfalar sekmesi:** Bir sayfaya tıklayıp Sorgular sekmesine dönün. Böylece o sayfanın hangi aramaları karşıladığını görürsünüz. Bir hizmet sayfası hiç gösterim almıyorsa ya dizinde değildir ya da o aramayı karşılamıyordur.
3. **Cihazlar sekmesi:** Telefondan gelen gösterim ve tıklamaları ayrı görün. Telefon tarafı zayıfsa [telefonda hızlı açılan site yazımıza](/blog/telefonda-hizli-acilan-site/) bakın.

Google, listede gördüğünüz bir sorguyu kendiniz aradığınızda sitenizi görmeyebileceğinizi de hatırlatır; sonuçlar arayan kişinin konumuna, cihazına ve geçmişine göre değişir. Denizli’de arama yapan iki kişi farklı sonuç görebilir. Bu yüzden sırayı tek bir elle yapılmış aramaya göre değil, bu rapora göre izleyin.

Son günlerin verisi kesinleşmemiş olabilir; grafikte noktalı çizgiyle gösterilir. Karşılaştırma yaparken aynı uzunluktaki dönemleri karşılaştırın.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Bağlantı raporu ne işe yarar?

Bağlantı raporu, sitenize hangi sitelerin bağlantı verdiğini ve hangi sayfalarınızın en çok bağlantı aldığını gösterir ([Bağlantı raporu](https://support.google.com/webmasters/answer/9049606?hl=tr)). Harici bağlantılar bölümünde üç tablo vardır:

- **En çok bağlantı verilen sayfalar:** Diğer sitelerin en çok hangi sayfanıza bağlantı verdiği.
- **En çok bağlantı veren siteler:** Size en çok bağlantı veren alan adları.
- **En çok bağlantı veren metin:** Bağlantılarda kullanılan sözler.

Google’a göre bu rapor bütün bağlantıları değil, bir örneğini gösterir ve bir bağlantının “nofollow” olup olmadığını belirtmez. Tanımadığınız ve spam görünen siteler görürseniz önce kaldırılmalarını isteyin. Yerel rehberlerde, oda ve dernek sitelerinde ya da iş ortaklarınızın sitesinde adınız geçiyor mu, buradan kontrol edebilirsiniz. Devamını [yerel backlink kaynakları yazımızda](/blog/denizli-yerel-backlink-kaynaklari/) anlattık.

## Search Console’a ne sıklıkla bakılmalı?

Google’a göre araca her gün girmek gerekmez; sitenizde yeni bir sorun bulunduğunda e-posta ile uyarı alırsınız ([Search Console’u kullanmaya başlama](https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=tr)). Google, yaklaşık ayda bir ya da sitede değişiklik yaptığınızda kontrol etmenizi önerir.

Aylık kontrol için kısa liste:

- Sayfa dizine ekleme raporunda dizine eklenen sayı beklenmedik biçimde düştü mü?
- Önemli sayfalar hâlâ dizinde mi? Ana sayfayı ve en önemli hizmet sayfasını URL denetimiyle kontrol edin.
- Site haritasının durumu “Başarılı” mı?
- Performans raporunda gösterim ve tıklama, önceki dönemle karşılaştırıldığında nasıl?
- Yeni yayınlanan sayfalar gösterim almaya başladı mı?
- E-postayla gelen bir uyarı var mı?

## Sık sorulan sorular

### Search Console ücretli mi?

Hayır. Search Console, Google’ın ücretsiz bir hizmetidir. Google’a göre aramada görünmek için Search Console’a kaydolmak da gerekmez; araç yalnızca durumu görmenizi ve sorunları düzeltmenizi kolaylaştırır.

### Sitem Search Console’da dizinde görünüyor ama aramada çıkmıyor. Neden?

Dizinde olmak, her aramada görüneceğiniz anlamına gelmez. Google, dizine eklenmiş bir sayfanın aramada görünmesinin garanti olmadığını ve sonuçların kullanıcıya göre değiştiğini belirtir. Sıra; içerik, rekabet ve sitenin bilinirliğine bağlıdır.

### “site:” aramasıyla dizin kontrolü yapılabilir mi?

Kabaca evet. Google’da `site:alanadiniz.com` araması, Google’ın sitenizde bildiği sayfaların bir örneğini gösterir. Kesin durum için URL denetimi aracını kullanın.

### Yeni bir sayfa ne kadar sürede dizine girer?

Sabit bir süre yoktur. Google, yeni bir sitenin taranıp dizine eklenmesinin bir haftayı bulabileceğini, taramanın birkaç gün ile birkaç hafta sürebileceğini belirtir. Sayfaya iç bağlantı vermek ve site haritasında listelemek keşfi kolaylaştırır.

### Search Console ile Google Analytics aynı şey mi?

Hayır. Search Console, sitenin Google aramasındaki durumunu gösterir: dizin, gösterim, tıklama. Analiz araçları ise siteye gelen ziyaretçilerin sitede ne yaptığını gösterir. İkisi birbirini tamamlar.

## Kaynaklar

- [Search Console Yardımı: Search Console hakkında](https://support.google.com/webmasters/answer/9128668?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Search Console Yardımı: URL Denetleme aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Search Console Yardımı: Site haritaları raporu](https://support.google.com/webmasters/answer/7451001?hl=tr)
- [Search Console Yardımı: Performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)
- [Search Console Yardımı: Bağlantı raporu](https://support.google.com/webmasters/answer/9049606?hl=tr)
- [Search Console Yardımı: Search Console’a mülk ekleme](https://support.google.com/webmasters/answer/34592?hl=tr)
- [Search Console Yardımı: sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)
- [Google Search Central: Search Console’u kullanmaya başlama](https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=tr)
- [Google Search Central: site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
- [Google Search Central: Google’dan sitenizi tekrar taramasını isteme](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=tr)

Bu raporları sizin adınıza ayda bir yorumlamamızı isterseniz [Teknik SEO ve site hızı](/teknik-seo/) sayfasına bakın. Ana sitemizde de [Search Console kullanımını](https://www.ventiajans.com/blog/google-search-console-kullanimi/) anlatan bir yazı var.
