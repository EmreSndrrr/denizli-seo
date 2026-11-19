---
title: "Önemli İçerikler Iframe İçinde Kullanılabilir mi?"
description: "SEO için önemli içerikler iframe içinde kullanılabilir mi? Iframe’in sınırları, video ve harita gömme, içeriği sayfaya doğrudan koyma ve test yöntemi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir sayfanın içine gömülmüş harita, video ve form çerçeveleri"
---

SEO açısından önemli içeriği (başlık, hizmet açıklaması, fiyat bilgisi, yazı metni) iframe içine koymak güvenli bir tercih değildir. Iframe, başka bir adresteki sayfayı mevcut sayfanın içinde gösterir; içerik teknik olarak o başka adrese aittir ve arama motorunun bunu sizin sayfanızın parçası olarak değerlendireceğine güvenemezsiniz. Harita, video ve form gibi destekleyici öğeler iframe ile gömülebilir; ama sayfanın asıl bilgisi doğrudan sayfanın HTML’inde olmalıdır.

Bu yazıda iframe’in ne olduğunu, hangi öğelerin iframe ile gömülmesinin uygun olduğunu, hangi içeriğin dışarıda bırakılması gerektiğini ve iframe içeriğinin Google tarafından nasıl görüldüğünü test etme yöntemini anlatıyoruz. Teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Iframe nedir?

Iframe (`<iframe>`), bir web sayfasının içine başka bir web sayfasını çerçeve içinde yerleştiren HTML öğesidir. Gömülen sayfa kendi adresine, kendi içeriğine ve çoğu zaman kendi alan adına sahiptir. En yaygın örnekler şunlardır:

- Google Haritalar’ın iletişim sayfasına gömülmesi,
- YouTube ya da Vimeo videolarının sayfaya yerleştirilmesi,
- üçüncü taraf bir randevu ya da rezervasyon formunun gösterilmesi,
- takvim, anket ya da sosyal medya akışı gibi dış araçlar.

Iframe’in avantajı, harici bir hizmeti kendi kodunuzu yazmadan sayfaya eklemenizdir. Dezavantajı ise içeriğin gerçekte başka bir yerde yaşamasıdır.

## Iframe içeriği SEO açısından neden risklidir?

Üç temel sorun vardır:

1. **İçerik başka bir adrese aittir.** Iframe içindeki metin, sizin sayfanızın kendi HTML’inde değildir. Arama motorunun bu içeriği sizin sayfanızla ilişkilendirip ilişkilendirmeyeceği garanti değildir.
2. **Gömülen sayfa kendi başına dizine girebilir.** Iframe içeriği, kaynağı olan adreste dizine eklenebilir; ama sizin sayfanızın sıralamasına katkı sağlamayabilir.
3. **Taranabilirlik ve erişim sorunları.** Gömülen sayfa robots.txt ile engelliyse, giriş gerektiriyorsa ya da gömmeye izin vermiyorsa içerik hiç görünmez.

Bu belirsizlik yüzünden, sıralanmasını istediğiniz her içeriği doğrudan sayfanın HTML’ine yazmak en güvenli yoldur. Iframe ile gelen içerik bu güvenceyi vermez; bu yüzden Google’ın sayfanızı nasıl gördüğünü test etmek şarttır.

> **Hizmet almak için iletişime geçin.** Sayfalarınızdaki gömülü içeriklerin SEO etkisini birlikte değerlendirelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi öğeler iframe ile gömülebilir?

Iframe, sayfanın asıl bilgisi olmayan destekleyici öğeler için uygundur:

| Öğe | Iframe uygun mu? | Not |
| --- | --- | --- |
| Harita | Evet | Adres ve yol tarifi bilgisini sayfa metnine de yazın |
| Video | Evet | Videoyu sayfanın konusuyla ilgili metinle destekleyin |
| Randevu/rezervasyon formu | Evet (gerekirse) | Önemli bilgileri sayfada ayrıca yazın |
| Takvim, anket | Evet | Sayfa bilgisini bunlara bırakmayın |
| Hizmet açıklaması, fiyat, SSS | Hayır | Doğrudan sayfaya yazın |
| Makale metni, ürün açıklaması | Hayır | Sayfanın kendi HTML’inde olmalı |

Google’ın video rehberi, Google’ın `<video>`, `<embed>`, `<iframe>` ya da `<object>` öğesiyle referans verilen videoları bulabildiğini söyler; üçüncü taraf oynatıcıları (YouTube, Vimeo gibi) kullanırken izlenecek uygulamaları da anlatır ([video SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/video?hl=tr)). Yani video gömmek için iframe kullanmak Google tarafından bilinen ve desteklenen bir yoldur. Videonun nasıl barındırılacağı kararı için [videoyu YouTube’dan gömmek mi, kendi sitenizde barındırmak mı?](/blog/video-youtubedan-gommek-mi-kendi-sitede-barindirmak-mi/) yazısına bakabilirsiniz.

## Harita iframe’i için doğru kullanım

İletişim sayfasında harita iframe’i çok yaygındır ve sorun değildir; ama harita adres bilgisinin yerini tutmaz. Adres, telefon, çalışma saatleri ve yol tarifi bilgisini sayfanın metnine yazın. Haritanın içindeki bilgi arama motoru için sayfanın bir parçası sayılmayabilir; ziyaretçi de haritayı yüklemeden adresi görmek ister. Ad, adres ve telefon bilgilerinin her yerde tutarlı olması yerel SEO için önemlidir ([ad, adres, telefon tutarlılığı: NAP kontrol listesi](/blog/ad-adres-telefon-tutarliligi/)); iletişim sayfasının tamamı için [iletişim sayfası SEO’su: adres, telefon ve harita](/blog/iletisim-sayfasi-seo-su-adres-telefon-ve-harita/) yazısına bakın.

## Iframe içeriği Google’a nasıl görünüyor, nasıl test edilir?

Şunları tek tek yapın:

1. **URL Denetleme canlı testini çalıştırın.** Test edilen sayfanın oluşturulmuş HTML’ine bakın; iframe öğesi orada mı, içeriği sayfa HTML’inde mi?
2. **Iframe’in kaynak adresini ayrıca açın.** Adres robots.txt ile engelli mi, giriş istiyor mu, “gömmeye izin yok” uyarısı veriyor mu?
3. **Önemli metni arayın.** Iframe içindeki bir cümleyi tırnak içinde Google’da arayın; bulunan sayfa sizin sayfanız mı, iframe’in kaynağı mı?
4. **Sayfa kaynağını inceleyin.** Önemli bilgi sayfanın kendi HTML’inde yazılı mı?
5. **Tarayıcıda iframe’i kapatarak düşünün.** Iframe olmasa sayfa neyi kaybederdi? Kaybettiğiniz şey önemli içerikse taşımanız gerekir.

Üçüncü adım özellikle öğreticidir: iframe içeriği sizin sayfanızla değil başka bir adresle eşleşiyorsa, o içerik sizin sayfanızın bir parçası gibi çalışmıyor demektir.

## Iframe yerine ne kullanılabilir?

Önemli içerik için alternatifler:

- **Doğrudan HTML yazmak.** Metni sayfanın kendi gövdesine yazın.
- **Dış kaynaktan veriyi sunucu tarafında çekmek.** Gerekirse veriyi sunucuda alıp sayfaya HTML olarak yerleştirin.
- **Bileşen ya da eklenti kullanmak.** Randevu ya da yorum gibi araçlar için, içeriği sayfaya HTML olarak ekleyen yöntemleri tercih edin.
- **Bağlantı vermek.** Gömmek yerine ilgili sayfaya bağlantı vermek, içeriğin kaynağını açık bırakır.

Müşteri yorumları gibi içerikleri siteye eklerken de iframe yerine sayfaya yerleşik yöntemleri değerlendirin ([müşteri yorumları siteye nasıl eklenir?](/blog/musteri-yorumlari-siteye-nasil-eklenir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir diş kliniğinin sitesinde hizmet fiyat listesi, üçüncü taraf bir tablo aracıyla iframe içinde gösteriliyor. Google’da fiyat bilgisinin sitede aranmasına rağmen sayfa bulunmuyor; arama sonuçlarında yalnızca tablo aracının adresi çıkıyor.

Klinik fiyat bilgisini doğrudan sayfaya HTML tablosu olarak yazıyor; yalnızca randevu formu ve harita iframe olarak kalıyor. Adres ve telefon bilgisi harita altına metin olarak ekleniyor. URL Denetleme ile sayfanın oluşturulmuş HTML’inde fiyat tablosunun göründüğü doğrulanıyor. Sağlık hizmetlerinde fiyat ve tanıtım ifadeleri için ilgili yasal sınırlara dikkat edilmesi gerekir. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Önemli metni iframe’e koymak.** Sayfanızın içeriği sayılmayabilir.
2. **Harita adres bilgisinin yerini tutar sanmak.** Adresi metin olarak da yazın.
3. **Iframe kaynağının erişilebilirliğini kontrol etmemek.** Engelli ya da giriş isteyen adres boş görünür.
4. **Iframe sayısını artırmak.** Çok sayıda dış kaynak sayfayı yavaşlatır.
5. **Başlığı olmayan iframe kullanmak.** Erişilebilirlik için iframe’e `title` verin.
6. **Test etmemek.** URL Denetleme ve arama testiyle görünürlüğü doğrulayın.

## Üçüncü taraf araç seçerken sorulacak sorular

Randevu, takvim ya da form gibi bir araç seçerken iframe dışında seçenek sunup sunmadığını sorun. Araç, içeriği sayfaya HTML olarak ekleyen bir eklenti ya da kod parçası sunuyorsa genellikle daha iyidir. Şunları da sorun: araç sayfayı yavaşlatıyor mu, gömülen sayfa mobilde düzgün görünüyor mu, gerekirse kolayca kaldırılabiliyor mu, kişisel verileri nasıl işliyor? Araç iframe’e mecbur bırakıyorsa sayfadaki asıl bilgiyi (fiyat, süreç, SSS) iframe’in dışında yazılı tutun. Böylece araç değişse ya da çalışmasa bile sayfanız bilgi vermeye devam eder.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki iframe kullanımını tarayıp hangi içeriklerin sayfaya taşınması gerektiğini listeleriz,
- URL Denetleme ve arama testleriyle iframe içeriğinin görünürlüğünü doğrularız,
- harita, video ve form gömme için doğru yöntemi ve destekleyici metni yazarız,
- sonuç vaat etmeden, sayfaların görünürlüğünü Search Console ile izleriz.

Gömülü içerikleriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sayfanızdaki önemli bilgilerin Google tarafından görüldüğünü birlikte doğrulayalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Iframe içeriği Google’da sayfamla birlikte sıralanır mı?

Bunu garanti edemeyiz. Iframe içeriği başka bir adrese aittir; önemli metni doğrudan sayfanın HTML’ine yazmak daha güvenlidir.

### Harita iframe’i SEO’ya zarar verir mi?

Hayır, iletişim sayfalarında yaygın ve uygundur. Yeter ki adres, telefon ve saat bilgisi sayfa metninde de yazılı olsun.

### Video için iframe kullanabilir miyim?

Evet. Google iframe ile gömülen videoları bulabileceğini belirtir. Videoyu destekleyici metinle çevreleyin.

### Iframe’i nasıl test ederim?

URL Denetleme canlı testindeki oluşturulmuş HTML’e bakın ve önemli cümleyi tırnak içinde arayın.

### Iframe sayfa hızını etkiler mi?

Evet; her iframe ek kaynak yükler. Gereksizleri kaldırın, ekranın altındakileri geç yükleyin ([lazy loading nasıl kullanılır?](/blog/lazy-loading-nasil-kullanilir-sik-yapilan-hatalar/)).

## Kaynaklar

- [Google Arama Merkezi: Video SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/video?hl=tr)
