---
title: "PDF Dosyaları İçin SEO Nasıl Yapılır?"
description: "PDF dosyaları Google’da çıkar mı? Seçilebilir metin, açıklayıcı dosya adı ve bağlantı metni kullanın; aramadan çıkarmak için X-Robots-Tag noindex kullanın."
date: 2026-11-14
service: icerik-seo
imageAlt: "Açıklayıcı dosya adı ve bağlantı metniyle bir web sayfasından PDF’e giden bağlantı"
---

Google PDF dosyalarını dizine ekleyebilir; Google’ın desteklenen dosya türleri listesinde PDF (.pdf) kodlanmış dosya türleri arasında yer alır. PDF’in aramada çıkması için içeriği seçilebilir metin olmalı, dosya adı açıklayıcı olmalı, siteden açıklayıcı bir bağlantı metniyle bağlanmalı ve taranabilir olmalıdır. Aramada çıkmasını istemiyorsanız HTML etiketi yerine `X-Robots-Tag: noindex` yanıt başlığını kullanırsınız.

Katalog, fiyat listesi, teknik föy, form ve broşür gibi PDF’ler işletmeler için değerli içeriklerdir; ama çoğu sitede PDF’ler “yüklenip unutulur”. Bu yazı, PDF’lerin Google’da nasıl ele alındığını ve nasıl düzenleneceğini anlatıyor. İçerik düzenini birlikte yapmak isterseniz [içerik SEO hizmetimizi](/icerik-seo/) inceleyebilirsiniz.

## Google PDF’leri indeksler mi?

Evet. Google’ın dizine eklenebilir dosya türleri belgesine göre Google çoğu metin tabanlı dosyayı ve belirli kodlanmış doküman biçimlerini dizine ekleyebilir; kodlanmış türler arasında PDF, Word, Excel, PowerPoint, RTF ve EPUB bulunur. Dosya türü, Google dosyayı taradığında döndürülen `Content-Type` HTTP başlığıyla belirlenir ([dizine eklenebilir dosya türleri](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=tr)). Ayrıca Google Arama’da `filetype:pdf` operatörüyle yalnızca PDF sonuçlarını aratabilirsiniz; bu, sitenizdeki PDF’lerin dizinde olup olmadığını kontrol etmenin pratik yoludur (`site:siteniz.com filetype:pdf`).

## PDF mi, HTML sayfası mı?

Çoğu içerik için HTML sayfa daha iyi bir seçimdir:

- **HTML sayfa:** Mobilde okunur, hızlı açılır, iç bağlantı alır, başlıkları ve yapısıyla anlaşılır, istatistik izlemesi kolaydır.
- **PDF:** Yazdırma, indirme, resmî belge ve yapısı önemli dokümanlar için uygundur; ama mobilde okunması zor olabilir ve sayfa içi gezinme sınırlıdır.

Kural: aranması ve okunması gereken bilgi (fiyat, hizmet, kılavuz) HTML sayfada da bulunsun; PDF ise isteyenin indirebileceği tamamlayıcı belge olsun. Aynı içeriği hem PDF hem HTML olarak yayınlıyorsanız hangisinin standart olacağına karar verin (aşağıda).

## PDF’i aramada görünür kılmak için kontrol listesi

### 1. Metin gerçek metin olsun

PDF içindeki yazı seçilebilir ve kopyalanabilir metin olmalıdır. Taranmış (resim hâlinde) PDF’lerde metin yoktur; arama motoru içeriği okuyamaz. Tarayıcı çıktısı bir belgeyse metin tanıma (OCR) uygulanmış bir sürüm üretin ya da içeriği HTML sayfaya aktarın.

### 2. Dosya adını açıklayıcı yazın

`doc1.pdf` ya da `scan_0034.pdf` yerine `hali-yikama-fiyat-listesi.pdf`. Dosya adı kısa, küçük harfli, kısa çizgiyle ayrılmış ve konuyu anlatan olmalıdır; Google’ın URL önerileri PDF adresi için de geçerlidir ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).

### 3. Belge özelliklerini ve ilk sayfayı düzenleyin

PDF’in başlık (title) belge özelliğini doldurun ve ilk sayfayı net bir başlıkla başlatın. Belge başlığı boş ya da “Taslak 2” gibi anlamsızsa dosyanın kimliği belirsiz kalır. Başlık ve alt başlıkları PDF içinde gerçek başlık biçimiyle kullanın.

### 4. HTML sayfasından açıklayıcı bağlantı verin

Google bağlantıları yalnızca `href` özelliği olan `<a>` öğeleriyle tarar ve iyi bağlantı metninin açıklayıcı olmasını önerir ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). “Tıklayın” yerine “2026 halı yıkama fiyat listesi (PDF, 1,2 MB)” gibi yazın; biçimi ve boyutu belirtmek kullanıcıya da yardım eder. PDF’i ilgili hizmet sayfasından ve site haritasından bağlayın; hiçbir yerden bağlanmayan PDF keşfedilmekte zorlanır.

### 5. Dosya boyutunu makul tutun

Büyük PDF’ler yavaş açılır ve mobil veride sorun çıkarır. Görselleri sıkıştırın, gereksiz sayfaları çıkarın, mümkünse web için optimize edilmiş (hızlı görüntüleme) kaydedin. Görsel optimizasyon ilkeleri için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakın.

### 6. Güncel tutun

Eski fiyat listesi ya da süresi geçmiş katalog aramada çıkmaya devam ederse müşteriyi yanıltır. Güncel dosyayı aynı adreste güncelleyin ya da eskiyi yeni adrese yönlendirin; eskimiş ve gereksiz PDF’leri kaldırın.

> **Hizmet almak için iletişime geçin.** Müşterilerinizin sorduğu sorulardan bir içerik planı çıkaralım ve sayfalarınızı birlikte yazalım. [İçerik SEO hizmetimizi](/icerik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## PDF’i aramadan çıkarmak istiyorsanız

Bazı PDF’lerin (iç belge, taslak, eski sürüm) aramada çıkmasını istemezsiniz. PDF’e HTML meta etiketi ekleyemeyeceğiniz için Google’ın önerisi `X-Robots-Tag` HTTP başlığıdır: HTML olmayan kaynakların (PDF, video, resim) dizine eklenmesini engellemek için bu başlık kullanılır; robots meta etiketindeki tüm kurallar `X-Robots-Tag` olarak da verilebilir ([robots meta etiketi ve X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)). Örnek: `X-Robots-Tag: noindex`.

Önemli noktalar:

- Başlık sunucu yapılandırmasında (ör. belirli dosya uzantısı için) ayarlanır; bunu genellikle site yöneticisi ya da hosting desteği yapar.
- `noindex`’in çalışması için dosya robots.txt ile engellenmemeli ve erişilebilir olmalı; engellenmiş PDF’te başlık okunamaz.
- Parola ya da erişim kontrolü gerçek gizliliktir; yalnızca `noindex` bir PDF’i gizli yapmaz.

Ayrıntı için [noindex ve nofollow meta etiketleri arasındaki fark](/blog/noindex-ve-nofollow-meta-etiketleri-arasindaki-fark/) yazısına bakın.

## PDF ve HTML aynı içeriği taşıyorsa

Aynı bilgi hem PDF hem HTML olarak yayındaysa kopya içerik riski doğar. Standart sürümü seçin: genellikle HTML sayfa. Google’ın standart URL belirtme belgesine göre HTML olmayan dosyalar için canonical, HTTP üstbilgisiyle de belirtilebilir ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)). PDF’in aramada ayrı çıkmasını istemiyorsanız PDF’ten HTML sayfaya canonical üstbilgisi verebilir ya da PDF’i `noindex` yapabilirsiniz. Bu karar teknik olduğundan bir uzmandan destek almak isteyebilirsiniz.

## PDF’lerin performansını izleyin

PDF’ler Search Console’da diğer sayfalar gibi görünür: performans raporunda PDF adresleri için gösterim ve tıklama görebilirsiniz ([performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)). Şunlara bakın:

- Hangi PDF’ler aramadan trafik alıyor?
- Gösterimi olan ama tıklanmayan PDF’lerin başlığı ve içeriği niyete uyuyor mu?
- Önemli bir PDF dizinde yoksa neden? (sayfa dizine ekleme raporu)

Bir PDF çok trafik alıyorsa onun HTML karşılığını da oluşturmayı düşünün; ziyaretçiyi hizmet sayfanıza yönlendirmek PDF’ten daha kolaydır. PDF içinde iletişim bilgisi ve ilgili hizmet sayfasına bağlantı bulundurun.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyon, fiyat listesini yalnızca resim olarak kaydedilmiş bir PDF’le sunuyor; aramada çıkmıyor.

- **Sorun:** PDF’te seçilebilir metin yok; dosya adı `IMG_2034.pdf`; sitenin hiçbir sayfasından bağlanmıyor.
- **Düzeltme:** Metin tanıma uygulanmış, hafifletilmiş yeni PDF üretiliyor; dosya adı `pamukkale-pansiyon-fiyat-listesi.pdf` yapılıyor.
- **Bağlantı:** Oda sayfasından “Güncel fiyat listesi (PDF, 400 KB)” bağlantısı veriliyor; aynı bilgi sayfada HTML olarak da yayınlanıyor.
- **Kontrol:** `site:` ve `filetype:pdf` aramasıyla dizin durumu izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Metni resim olarak kaydedilmiş PDF yüklemek.**
2. **Dosyayı anlamsız adla bırakmak.**
3. **PDF’i hiçbir sayfadan bağlamamak.**
4. **Çok büyük, optimize edilmemiş dosya sunmak.**
5. **Eski fiyat listelerini yayında tutmak.**
6. **Aramadan çıkarmak için yalnızca robots.txt kullanmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

PDF’ler doğru yönetildiğinde ek görünürlük sağlar. [İçerik SEO hizmetimizde](/icerik-seo/):

- sitenizdeki PDF’leri envanterler, dizin durumlarını ve performanslarını inceleriz,
- hangi içeriğin HTML sayfaya taşınacağına, hangi PDF’in kalacağına karar veririz,
- dosya adı, başlık, bağlantı metni ve boyut düzenlemelerini yaparız,
- noindex ve standart adres ayarlarını teknik ekiple koordine eder, sonuçları raporlarız.

PDF’lerinizi düzenlemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sayfalarınızın ve yazılarınızın neden yeterince işe yaramadığına birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [içerik SEO sayfamızda](/icerik-seo/) yazılı.

## Sık sorulan sorular

### Google PDF’leri indeksler mi?

Evet. Google’ın dizine eklenebilir dosya türleri arasında PDF bulunur; dosya türü Content-Type başlığıyla belirlenir.

### PDF’imin aramada çıktığını nasıl kontrol ederim?

`site:siteniz.com filetype:pdf` aramasıyla ve Search Console’da performans ve sayfa dizine ekleme raporlarıyla.

### PDF’i aramadan nasıl çıkarırım?

`X-Robots-Tag: noindex` HTTP başlığıyla; dosyanın robots.txt ile engellenmemesi gerekir.

### Taranmış belge PDF’i işe yarar mı?

Metin seçilebilir değilse arama motoru içeriği okuyamaz; metin tanıma uygulanmış sürüm ya da HTML sayfa kullanın.

### PDF mi HTML mi daha iyi?

Aranması ve okunması gereken bilgi için HTML sayfa; indirilecek tamamlayıcı belge için PDF.

## Kaynaklar

- [Google Arama Merkezi: Google tarafından dizine eklenebilir dosya türleri](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=tr)
- [Google Arama Merkezi: Robots meta etiketi, data-nosnippet ve X-Robots-Tag teknik özellikleri](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)
- [Google Arama Merkezi: Standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
