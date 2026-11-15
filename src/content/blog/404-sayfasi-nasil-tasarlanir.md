---
title: "404 Sayfası Nasıl Tasarlanır? Kullanıcıyı Kaybetmeyin"
description: "İyi bir 404 sayfasında ne olmalı? Doğru durum kodu, açık mesaj, arama kutusu ve önemli sayfalara bağlantılarla ziyaretçiyi kaybetmeden yönlendirin."
date: 2026-11-13
service: teknik-seo
imageAlt: "Arama kutusu ve önerilen bağlantılar içeren bir 404 sayfası taslağı"
---

İyi bir 404 sayfası üç işi yapar: ziyaretçiye aradığı sayfanın bulunamadığını açıkça söyler, ona gidebileceği yerleri gösterir ve sunucudan gerçekten 404 durum kodu döndürür. Güzel bir tasarım, kod yanlışsa işe yaramaz; Google sayfayı “bulunamadı” değil “normal sayfa” sanar.

404 sayfası SEO’yu doğrudan yükseltmez ama kullanıcı deneyimini ve sitenizin sağlığını etkiler. Hatalı bir bağlantıya tıklayan ziyaretçi boş bir ekran görürse siteyi terk eder; yol gösteren bir sayfa ise onu müşteri olarak tutabilir. Bu yazı, 404 sayfasının neleri içermesi gerektiğini ve hangi hatalardan kaçınılacağını anlatıyor. Sitenizin teknik durumu için [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## 404 sayfası nedir, ne zaman görünür?

404 sayfası, ziyaretçi sitenizde olmayan bir adrese gittiğinde gösterilen sayfadır. Üç yaygın neden vardır:

- **Yanlış yazılmış adres.** Ziyaretçi adresi elle yazarken hata yapmıştır.
- **Silinmiş ya da taşınmış sayfa.** Eski bir bağlantı artık yoktur.
- **Hatalı bağlantı.** Sizin sitenizde ya da başka bir sitede yanlış verilmiş bir bağlantı vardır.

Google’ın HTTP durum kodları belgesine göre 4xx kodlarında içerik kullanılmaz ve sayfa dizine eklenmez; dizindeyse kaldırılır ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Yani silinen bir sayfa için 404 vermek doğrudur. Sorun, değerli bir sayfanın yanlışlıkla 404’e düşmesidir.

## Önce doğru kodu döndürün

404 sayfasında en kritik nokta görünüm değil durum kodudur. Aynı belgede, “bulunamadı” içeriği taşıyan ama 200 kodu döndüren sayfaların Search Console’da soft 404 olarak işaretlendiği belirtilir. Birçok site, hatalı adreslerde şık bir hata sayfası gösterir ama sunucu 200 döndürür. Sonuç: Google bu sayfaları gerçek sayfa sanır, raporda soft 404 uyarısı görürsünüz.

Kontrolü şöyle yapın:

1. Sitenizde olmayan bir adres yazın (ör. `siteniz.com/boyle-bir-sayfa-yok`).
2. Tarayıcı geliştirici araçlarını açın, “Network” sekmesinde sayfa isteğine bakın.
3. Durum kodunun 404 olduğunu doğrulayın.

Kod 200 ise barındırma ya da site ayarında düzeltme gerekir. Ayrıntı için [soft 404 nedir, nasıl düzeltilir?](/blog/soft-404-nedir-nasil-duzeltilir/) yazısına bakın.

## İyi bir 404 sayfasında neler olmalı?

Ziyaretçi bu sayfaya şaşkın gelir; ne olduğunu ve ne yapacağını bir bakışta anlamalıdır.

- **Açık bir mesaj.** “Aradığınız sayfa bulunamadı” gibi sade bir cümle. Suçlayıcı ya da teknik dil kullanmayın.
- **Site kimliği.** Menü ve logo olduğu gibi kalsın; ziyaretçi hâlâ sitenizde olduğunu bilsin.
- **Arama kutusu.** Ne aradığını yazıp bulabilsin.
- **Önemli sayfalara bağlantılar.** Ana sayfa, hizmetler, blog, iletişim.
- **İletişim yolu.** “Aradığınızı bulamadıysanız bize yazın” gibi bir yönlendirme.

Mesajı kısa tutun. Uzun açıklama ya da şaka yerine yol göstermek önceliklidir. Ziyaretçinin sizinle iletişime geçmesi için net bir düğme koymak, kayıp ziyareti fırsata çevirir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 404 sayfasında kaçınılması gerekenler

Bazı çözümler iyi niyetle yapılır ama zarar verir:

- **Hepsini ana sayfaya yönlendirmek.** Ziyaretçi neden ana sayfada olduğunu anlamaz; Google da bu yönlendirmeleri soft 404 sayabilir.
- **200 kodu döndürmek.** Yukarıda anlatıldığı gibi sorun çıkarır.
- **Boş ya da sunucunun varsayılan sayfasını bırakmak.** Marka kimliğiniz kaybolur.
- **Aşırı büyük görsel kullanmak.** Hata sayfası bile hızlı açılmalıdır.
- **Noindex ile işi bitmiş saymak.** 404 sayfası zaten dizine alınmaz; durum kodunu doğru vermek yeterlidir.

Ayrıca her 404’ü yönlendirmeye çalışmayın. Hangi adresin yönlendirilip hangisinin 404 kalacağı [404 hatası düzeltilmeli mi yönlendirilmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/) yazısında anlatılıyor.

## Mobilde 404 sayfası nasıl olmalı?

Ziyaretçilerin önemli bir bölümü telefondan gelir. Mobilde şunlara dikkat edin:

- Arama kutusu ve düğmeler parmakla rahat basılabilecek büyüklükte olsun.
- Metin kaydırmadan okunsun; mesajı ilk ekranda görün.
- Bağlantı sayısını sınırlı tutun; beş-altı yeterlidir.
- Sayfa çok az veri çeksin; büyük görsel ve ağır betik kullanmayın.

Hızlı açılan siteler için [telefonda hızlı açılan site](/blog/telefonda-hizli-acilan-site/) yazımız kullanışlıdır.

## 404 sayfasının dili ve tonu nasıl olmalı?

Ton, markanızın geri kalanıyla uyumlu olmalı. Ciddi bir hukuk bürosu esprili bir mesaj kullanmaz; bir kafe hafif bir cümleyle gülümsetebilir. Her iki durumda da üç kural geçerlidir: ziyaretçiyi suçlamayın, ne olduğunu açıkça söyleyin, yapılacak ilk işi gösterin.

Örnek bir metin: “Aradığınız sayfa bulunamadı. Adres değişmiş ya da sayfa kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilir veya bize yazabilirsiniz.” Bu üç cümle durumu, olası nedeni ve çözümü verir. Bu kadarı çoğu site için yeterlidir.

## E-ticaret ve büyük sitelerde nelere dikkat edilmeli?

Ürün sayısı çok olan sitelerde 404 sayfası sık görünür çünkü ürünler tükenir ya da kaldırılır. Burada her duruma aynı yanıt verilmez:

- **Geçici olarak tükenen ürün:** Sayfayı açık tutup “stokta yok” bilgisi ve benzer ürünleri göstermek ziyaretçiyi tutar.
- **Kalıcı kaldırılan ürün, yakın bir karşılığı var:** İlgili ürüne ya da kategoriye 301 yönlendirmesi uygundur.
- **Kalıcı kaldırılan ürün, karşılığı yok:** 404 döndürün ve 404 sayfasında kategorilere bağlantı verin.

Bu ayrımı yapmadan toplu işlem yapmak hem ziyaretçiyi hem arama motorunu şaşırtır. Listeyi elle gözden geçirmek zaman alır ama doğru sonuç verir.

## 404 sayfasının performansı ve erişilebilirliği

Hata sayfası da bir sayfadır; hızlı açılmalı ve herkes tarafından kullanılabilmelidir. Metnin zeminle yeterli karşıtlık oluşturduğundan, düğmelerin klavyeyle erişilebildiğinden ve arama kutusunun etiketli olduğundan emin olun. Dekoratif animasyonları az tutun; ziyaretçi zaten bir sorunla karşılaşmıştır ve hızlıca çıkış yolu aramaktadır.

Sayfayı tasarlayanla içeriği yazan farklı kişilerse, 404 sayfasını da kontrol listesine ekleyin. Site yenilemelerinde en çok unutulan sayfalardan biridir; yeni tema kurulunca eski hata sayfası kaybolur, sunucunun varsayılan ekranı geri gelir. Yayın sonrası ilk kontrolde olmayan bir adres yazıp sonucu görmek bir dakikanızı alır.

## 404’leri nasıl bulursunuz?

404 sayfasını tasarlamak yalnızca ilk adımdır; sitenizdeki 404’leri de izlemelisiniz.

1. **Sayfa dizine ekleme raporu.** Search Console’da “Bulunamadı (404)” nedenini ve etkilenen adresleri listeler.
2. **Site içi tarama.** Kendi sitenizde kırık bağlantıları bulan bir araçla taratın.
3. **Dış bağlantılar.** Bağlantılar raporunda başka sitelerden 404 sayfanıza gelen bağlantılara bakın; değerli olanları doğru sayfaya yönlendirin.

Düzeltmeler: kendi sitenizdeki kırık bağlantıyı doğru adrese çevirin, dışarıdan bağlantı alan silinmiş sayfayı en yakın karşılığına 301 ile yönlendirin, gerçekten gereksiz adresleri 404 bırakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir diş kliniği sitesini yenilerken eski tedavi sayfalarının adreslerini değiştiriyor.

- **Sorun:** Eski adreslere gelen ziyaretçiler beyaz bir hata ekranı görüyor; sunucu da 200 döndürüyor.
- **Düzeltme:** Gerçek karşılığı olan adresler 301 ile yeni sayfalara yönlendiriliyor; karşılığı olmayanlar 404 döndürüyor.
- **404 sayfası:** Menü ve logo korunuyor; kısa bir mesaj, arama kutusu, “Tedavilerimiz”, “Randevu” ve “İletişim” bağlantıları ekleniyor.

Bu örnek bir sonuç vaadi değildir.

## 404 sayfası kontrol listesi

Yayına almadan önce şunlara bakın:

1. Olmayan bir adres 404 koduyla mı dönüyor?
2. Mesaj kısa ve anlaşılır mı?
3. Menü, logo ve arama var mı?
4. En önemli beş sayfaya bağlantı verilmiş mi?
5. Sayfa mobilde rahat kullanılıyor mu?
6. Sayfa hızlı açılıyor mu?

## Denizli SEO bu konuda nasıl yardımcı olur?

404 sayfası küçük görünür ama sitenin sağlığını gösterir. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki 404 ve soft 404 sorunlarını Search Console’da tespit ederiz,
- hangi adresin yönlendirileceğine, hangisinin 404 kalacağına karar veririz,
- 404 sayfasını doğru durum koduyla ve yol gösterecek biçimde hazırlarız,
- sonuçları yazılı raporlar ve izleriz.

Sitenizdeki hata sayfalarını gözden geçirmek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### 404 sayfası SEO’ya zarar verir mi?

Hayır. Silinmiş sayfalar için 404 normaldir ve Google 4xx sayfaları dizine eklemez. Zarar, değerli sayfaların yanlışlıkla 404’e düşmesinden gelir.

### 404 sayfasını noindex yapmalı mıyım?

Gerek yoktur. 404 durum kodu sayfanın dizine eklenmemesini zaten sağlar. Önemli olan kodun doğru dönmesidir.

### Tüm 404’leri ana sayfaya yönlendirmek iyi midir?

Hayır. Ziyaretçiyi şaşırtır ve Google bunları soft 404 sayabilir. Karşılığı olan sayfaya 301, olmayanlara 404 kullanın.

### 404 sayfasına arama kutusu koymak şart mı?

Şart değil ama çok yararlıdır. Ziyaretçi aradığını kendi bulabilir.

### 404 sayfasını nasıl test ederim?

Olmayan bir adres yazıp tarayıcının “Network” sekmesinden durum kodunun 404 olduğunu doğrulayın.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
