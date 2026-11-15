---
title: "Search Console URL Kaldırma Aracı Ne Zaman Kullanılır?"
description: "Search Console URL kaldırma aracı ne zaman kullanılır? Yaklaşık altı aylık geçici engelleme, snippet temizleme, kalıcı kaldırma ve yanlış kullanımlar."
date: 2026-11-15
service: teknik-seo
imageAlt: "Search Console kaldırma aracında geçici kaldırma ve snippet temizleme seçenekleri"
---

Search Console’daki Kaldırma aracı, sahibi olduğunuz sitedeki bir adresi Google Arama sonuçlarından hızla ama **geçici** olarak çıkarmak içindir: başarılı bir istek yaklaşık altı ay geçerlidir. Aracı, yanlışlıkla yayınlanmış gizli bir sayfa ya da hassas bilgi gibi acil durumlarda kullanın. Kalıcı kaldırma için tek başına yetmez; sayfayı silmeniz, şifreyle korumanız ya da `noindex` eklemeniz gerekir. 404 veren eski sayfaları temizlemek, kopya sürümleri ayıklamak ya da taşınan içerik için bu araç kullanılmaz.

Yanlış kullanıldığında araç, görmek istediğiniz sayfayı da sonuçlardan çıkarabilir. Dizin yönetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Kaldırma aracı ne yapar?

Google’a göre Kaldırma aracı; sahip olduğunuz sitelerde sayfaların Google Arama sonuçlarında görünmesini geçici olarak engellemenizi, mülk sahiplerinden ve sahibi olmayanlardan gelen kaldırma isteklerinin geçmişini görmenizi ve sitenizde yetişkinlere uygun içerik olarak bildirilen adresleri görmenizi sağlar ([kaldırma işlemleri aracı](https://support.google.com/webmasters/answer/9689846?hl=tr)).

Araçta iki tür istek vardır:

- **URL’yi geçici olarak kaldırma:** Adresi yaklaşık altı ay süreyle Google Arama sonuçlarından engeller ve sayfanın snippet’ini de siler. Süre dolunca sayfa sonuçlarda yeniden görünebilir.
- **Aramadaki snippet’i temizleme:** Sayfa sonuçlarda kalır; yalnızca açıklama kısmı, sayfa yeniden dizine eklenene kadar temizlenir. Bu sırada açıklamada “sayfa açıklaması yok” benzeri bir ifade görünür.

Kaldırılacak adres bir web sayfası ya da bir görsel olabilir.

## Ne zaman kullanılır?

Google iki durumu sayar:

1. **Bir adresi hemen çıkarmanız gerekiyor.** Örneğin test sitesi yanlışlıkla dizine girmiş, müşteri listesi içeren bir dosya yayınlanmış ya da henüz duyurulmamış bir fiyat sayfası açığa çıkmıştır.
2. **Hassas içeriği kaldırmak için sayfayı güncellediniz** ve Google’ın sonuçlarda bu değişikliği yansıtmasını istiyorsunuz. Bu durumda snippet temizleme seçeneği uygundur: sayfa kalır, eski açıklama gider.

İkisinin de ortak noktası aciliyettir. Acil değilse araç gereksizdir; Google sayfayı yeniden taradığında değişikliği kendisi görür.

## Çok önemli üç not

Google bu üç noktayı ayrıca vurgular:

- **Süre yaklaşık altı aydır.** Bu süre geçince bilgi arama sonuçlarında yeniden görüntülenebilir.
- **Engelleme taramayı durdurmaz.** Adres var oldukça ve `noindex` gibi başka bir yöntemle engellenmedikçe Google sayfayı taramaya devam eder; yalnızca sonuçlarda göstermez.
- **Erişilemeyen adres isteği sona erdirir.** Google aracı kullandığınız sırada adrese erişemiyorsa (404, 502/503) sayfanın artık olmadığını ve isteğin sona erdiğini varsayar; sonradan o adreste yayınlanan sayfa yeni bir sayfa gibi değerlendirilir ve sonuçlarda görünebilir.

Yani araç bir “perde”dir; arkasındaki sayfayı siz düzeltmezseniz perde altı ay sonra açılır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kalıcı kaldırma için ne yapmalı?

Google, aracın kalıcı kaldırma işleminin yalnızca bir adımı olduğunu ve tek başına işe yaramayacağını yazar. Altı aylık süre içinde şu kalıcı yollardan birini uygulayın:

1. **İçeriği kaldırın ya da güncelleyin.** Sayfayı silin; sunucu 404 ya da 410 döndürsün ([HTTP durum kodları](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/)).
2. **Erişimi kısıtlayın.** Sayfayı şifreyle koruyun; arama motoru da ziyaretçi de göremez.
3. **`noindex` ekleyin.** Sayfa yayında kalır ama dizine alınmaz ([noindex ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/)).

robots.txt burada çözüm değildir: taramayı engellenen bir sayfa, başka sitelerden bağlantı alıyorsa içeriği okunmadan da sonuçlarda görünebilir; üstelik Google sayfadaki `noindex` etiketini de göremez ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).

Gerçekten gizli kalması gereken bilgi için doğru sıra şudur: önce içeriği sunucudan kaldırın ya da şifreleyin, sonra aracı kullanın. Yalnızca arama sonucundan gizlemek, adresi bilen birinin sayfayı açmasını engellemez.

## Aracın kullanılmaması gereken durumlar

Google’ın listesi uzundur ve işletmelerin en sık yaptığı hataları içerir:

- **Sahibi olmadığınız bir siteyi engellemek için.** Bunun için ayrı araçlar vardır (eski içeriği yenileme talebi gibi).
- **İnternetten içerik silmek için.** Araç içeriği yalnızca Google Arama’dan kaldırır; sayfa yayındadır ve diğer arama motorlarında görünür.
- **404 veren eski sayfaları temizlemek için.** Sitenizi değiştirdiyseniz ve dizinde eski adresler kaldıysa Google bunları tararken görür; sayfalar zaman içinde doğal olarak sonuçlardan çıkar. Acil istek gerekmez ([404 düzeltilmeli mi, yönlendirilmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/)).
- **Search Console’daki tarama hatalarını silmek için.** Araç adresleri raporlardan değil, arama sonuçlarından gizler; rapordaki satırlar zamanla kendiliğinden kalkar.
- **Siteye “sıfırdan başlamak” için.** Manuel işlem endişeniz varsa ya da alan adını başkasından aldıysanız yeniden değerlendirme isteği doğru yoldur ([manuel işlem bildirimi](/blog/search-consolda-manuel-islem-bildirimi-ne-yapilmali/)).
- **Saldırı sonrası tüm siteyi kapatmak için.** Saldırganın oluşturduğu spam adresleri engellemek için kullanılabilir; ama tüm siteyi ya da sonradan dizinde görmek isteyeceğiniz adresleri engellemeniz önerilmez.
- **Doğru sürümü seçtirmek için.** Araç istediğiniz sürümü tutmaz; tersine bir adresin tüm sürümlerini (http/https, www’lu/www’suz) birlikte kaldırabilir. Kopya sürümler için standartlaştırma yöntemlerini kullanın ([canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
- **İçerik taşımak için.** Taşıma, yönlendirmeyle yapılır.

En tehlikeli hata yedinci maddedir: `http://` sürümünü kaldırmak isterken `https://` sürümünün de sonuçlardan çıkması.

## Adım adım kullanım

1. Adresin, sahibi olduğunuz bir Search Console mülkünde olduğundan emin olun.
2. Search Console’da **Kaldırma** aracını açın.
3. **Geçici Kaldırmalar** sekmesini seçin ve **Yeni İstek**’i tıklayın.
4. **URL’yi geçici olarak kaldır** ya da **Aramadaki snippet’i temizle** seçeneğini belirleyin.
5. Tek adres mi, bu önekle başlayan tüm adresler mi kaldırılacak, dikkatle seçin. Önek seçeneği bir klasörün tamamını kapatır.
6. İsteği gönderin ve durumunu aynı tablodan izleyin.

İstek “reddedildi” görünürse nedeni çoğunlukla aynı isteğin zaten yürürlükte olmasıdır. İsteği yanlış gönderdiyseniz aynı ekrandan iptal edebilirsiniz.

## İsteğin durumunu ve geçmişi izleme

Geçmiş tablosu hem sizin hem başkalarının gönderdiği istekleri gösterir. Durumlar arasında “istek işleniyor”, “geçici olarak kaldırıldı”, “kaldırma isteğinin süresi doldu” ve “temizlendi” bulunur. “Süresi doldu” durumunu gördüğünüzde kalıcı önlemi almış olmanız gerekir; aksi hâlde sayfa yeniden görünmeye uygundur.

Araçtaki üçüncü sekme, Güvenli Arama filtrelemesidir: kullanıcıların yetişkinlere yönelik içerik barındırdığını bildirdiği adresler burada listelenir. İşletme siteleri için nadiren doludur; ama bir bildirim görürseniz içeriği kontrol edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir muhasebe bürosunun geliştiricisi, test için oluşturduğu `/eski-musteri-listesi.html` sayfasını yayında unutuyor; sayfa Google’da çıkıyor.

- **İlk adım:** Dosya sunucudan siliniyor; adres 404 dönüyor.
- **Araç:** Sonuçlardaki önizleme hemen kaybolsun diye adres için geçici kaldırma isteği gönderiliyor.
- **Kalıcılık:** Dosya silindiği için altı ay sonra geri gelecek bir şey kalmıyor; benzer dosyalar için sunucuda dizin listeleme kapatılıyor.
- **Önlem:** Test dosyaları için şifreli ayrı bir ortam kuruluyor ([test sitesinin indekslenmesi](/blog/test-sitesinin-googleda-indekslenmesi-nasil-onlenir/)).

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Aracı kalıcı çözüm sanmak.**
2. **Önek seçeneğiyle farkında olmadan bir klasörün tamamını kaldırmak.**
3. **Bir sürümü kaldırırken tüm sürümleri sonuçlardan çıkarmak.**
4. **404 sayfalarını temizlemek için kullanmak.**
5. **İçeriği sunucuda bırakıp yalnızca aramadan gizlemek.**
6. **Altı ay sonra sayfanın geri geldiğine şaşırmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- hangi adresin hangi yöntemle (silme, `noindex`, şifre, yönlendirme) kaldırılacağına birlikte karar veririz,
- acil durumda kaldırma isteğini doğru kapsamla göndeririz,
- kalıcı önlemi uygular ve süre dolmadan doğrularız,
- yanlış kaldırılan adresleri geri alırız.

Dizin temizliği için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Kaldırma isteği ne kadar geçerli?

Google’a göre başarılı bir istek yaklaşık altı ay geçerlidir.

### Araç sayfayı internetten siler mi?

Hayır. Yalnızca Google Arama sonuçlarından gizler; sayfa yayında kalır.

### 404 veren eski sayfalar için kullanmalı mıyım?

Hayır. Bu sayfalar tarandıkça sonuçlardan kendiliğinden çıkar.

### Snippet temizleme ne işe yarar?

Sayfa sonuçlarda kalır; yalnızca eski açıklama, sayfa yeniden dizine eklenene kadar kaldırılır.

### Kalıcı kaldırma için ne gerekir?

İçeriği silmek (404/410), şifreyle korumak ya da `noindex` eklemek.

## Kaynaklar

- [Search Console Yardımı: Kaldırma işlemleri ve Güvenli Arama içerik bildirme aracı](https://support.google.com/webmasters/answer/9689846?hl=tr)
- [Google Arama Merkezi: noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
