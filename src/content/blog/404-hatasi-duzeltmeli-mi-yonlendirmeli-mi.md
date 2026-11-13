---
title: "404 Hatası: Düzeltmeli mi, Yönlendirmeli mi?"
description: "404 hatası SEO’ya zarar verir mi? Ne zaman 404 bırakılır, ne zaman 301 ile yönlendirilir? Google’ın 4xx davranışı, soft 404 ve kırık bağlantıları bulma."
date: 2026-11-10
service: teknik-seo
imageAlt: "Kırık bağlantı simgesi ve iki yoldan oluşan karar şeması"
---

404, “sayfa bulunamadı” anlamına gelir ve kendi başına sitenize zarar vermez. Google, 4xx kodu dönen URL’leri dizine eklemez; daha önce dizindeyse zamanla kaldırır. Sayfa gerçekten silindiyse ve yerine uygun bir sayfa yoksa 404 bırakın. Sayfa taşındıysa ya da yerine benzer bir sayfa varsa 301 ile o sayfaya yönlendirin. Önemli olan, bulunamayan sayfanın gerçekten 404 kodu döndürmesidir; “bulunamadı” yazan ama 200 dönen sayfa soft 404 sayılır.

“404’leri düzeltmek zorunda mıyım?” sorusunun cevabı çoğu zaman “hayır, ama doğru karar vermelisiniz” olur. Her 404 hata değildir; silinmiş bir sayfa için 404 doğru davranıştır. Sorun, işe yarayan bir sayfanın yanlışlıkla 404 vermesi ya da eski adreslere hâlâ bağlantı veren sayfaların bulunmasıdır. Bu yazıda karar kuralını, kırık bağlantıları bulma ve düzeltme adımlarını anlatıyoruz. Yönlendirme türleri için [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazımıza bakabilirsiniz.

## 404 hatası nedir?

Tarayıcı bir adres istediğinde sunucu “yok” cevabı verirse bu 404 (not found) durum koduyla bildirilir. Bir de 410 (gone) vardır: “sayfa kalıcı olarak kaldırıldı” demektir. Google’ın HTTP durum kodu rehberine göre 429 dışındaki tüm 4xx hataları aynı şekilde işlenir: tarayıcılar sonraki sisteme içeriğin mevcut olmadığını bildirir ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Yani 404 ile 410 arasında Arama açısından fark yoktur.

## 404 Google’da nasıl işlenir?

Google’ın rehberi şunu söyler: 4xx durum kodu döndüren URL’lerdeki içerik kullanılmaz. Daha önce kullanılan ama artık 4xx dönen bir URL’yi sistemler zaman içinde kullanmayı bırakır. Google Arama’da 4xx dönen URL’ler dizine eklenmez; zaten dizinde olanlar dizinden kaldırılır.

Bu şu anlama gelir: Silinen bir sayfanın 404 vermesi normaldir ve beklenen sonuçtur. Siteniz “çok 404 var” diye ceza almaz; ama önemli bir sayfanız 404 veriyorsa o sayfadan gelen görünürlüğü kaybedersiniz.

## Karar kuralı: 404 mü, 301 mi?

| Durum | Önerilen çözüm |
| --- | --- |
| Sayfa taşındı, yeni adresi var | 301 ile yeni adrese yönlendirin |
| Sayfa silindi, çok benzer bir sayfa var | 301 ile o sayfaya yönlendirin |
| Sayfa silindi, yerine uygun sayfa yok | 404 (ya da 410) bırakın |
| Adres yazım hatasıyla yazılmış (kimsenin bağlanmadığı) | 404 bırakın |
| Sayfa geçici olarak kapalı | Geçici çözüm gerekiyorsa uygun kod; kalıcı değilse 404 vermeyin |
| Ürün stokta yok ama dönecek | Sayfayı tutun, “stokta yok” yazın |
| Ürün kalıcı olarak kaldırıldı | Benzer ürüne ya da kategoriye 301; yoksa 404 |

Kritik kural: **alakasız bir sayfaya toplu yönlendirmeyin.** Silinen yüzlerce sayfayı ana sayfaya yönlendirmek hem kullanıcıyı yanıltır hem de Google’ın bunları “yumuşak 404” gibi görmesine yol açabilir. Yönlendirme, gerçekten karşılık gelen bir sayfa olduğunda anlamlıdır.

## Soft 404 nedir?

Google, bir sayfa 200 (başarılı) dönerken içeriği “sayfa bulunamadı”, boş sayfa ya da hata mesajı gibi görünüyorsa Search Console’da soft 404 uyarısı gösterdiğini belirtir. Google’ın önerisi: gerçekten bulunamayan sayfalar için 404 yanıt kodu döndürmek. Ayrıntılar için [soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/) yazımıza bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Özel 404 sayfası nasıl olmalı?

Kullanıcı bulunamayan bir sayfaya düştüğünde bırakılmamalı. İyi bir 404 sayfası:

1. **404 durum kodunu döndürür.** Yalnızca görsel olarak “bulunamadı” yazmaz.
2. **Net bir mesaj verir.** “Aradığınız sayfa bulunamadı.”
3. **Yol gösterir.** Ana sayfa, hizmetler, iletişim bağlantıları ve arama kutusu.
4. **Siteyle tutarlı görünür.** Aynı menü ve tasarım.
5. **İletişim yolu sunar.** Telefon ya da WhatsApp.

Bu sayfa kullanıcıyı kurtarır; ama Google’a 404 olarak yanıt vermelidir.

## Kırık bağlantılar nasıl bulunur?

1. **Search Console, Sayfa dizine ekleme raporu.** “Bulunamadı (404)” durumundaki URL’leri listeleyin. Google’ın rapor sayfasına göre, kaldırdıktan sonra yerine bir şey koymadığınız sayfa için 404 gibi geçerli nedenlerle dizine eklenmeyen URL’ler sorun oluşturmaz.
2. **Önemli sayfaları kontrol edin.** Hizmet sayfanız, iletişim sayfanız ya da ürün sayfanız 404 veriyor mu?
3. **İç bağlantıları gözden geçirin.** Menüde ve sayfalardaki bağlantılar çalışıyor mu? Kırık iç bağlantıyı düzeltmek tamamen sizin elinizdedir.
4. **Dışarıdan gelen bağlantılara bakın.** Search Console’daki Bağlantılar raporunda “En çok bağlantı verilen sayfalar” listesindeki adreslerden biri 404 veriyorsa o bağlantılar boşa gidiyor; bu adresleri yönlendirmeyi düşünün. Rapor için [backlink sorgulama](/blog/backlink-sorgulama/) yazımıza bakın.
5. **Siteyi tarayan bir araç kullanın.** Küçük sitelerde birkaç dakikada kırık bağlantıları listeler.

## 404’leri düzeltme sırası

1. **Önce önemli sayfalar:** Müşteri getiren bir sayfa 404 veriyorsa düzeltin.
2. **Sonra dışarıdan bağlantı alanlar:** Bağlantı alan 404 adreslerini uygun sayfaya yönlendirin.
3. **Sonra iç bağlantılar:** Sitenizin kendi bağlantılarını düzeltin.
4. **En son kalanlar:** Kimsenin bağlanmadığı, gerçekten silinmiş sayfalar için 404 bırakın.

Her 404’ü yönlendirmeye çalışmak zaman kaybıdır.

## Site yenilerken 404 riski

Siteyi yenilediğinizde adresler değişirse eski adresler 404 verir ve eski sitenin görünürlüğü kaybolur. Çözüm yayın öncesi yazılı bir adres eşleme tablosu hazırlamaktır: eski adres, yeni adres. Google’ın site taşıma rehberi de eski URL’lerden yenilerine bir URL eşlemesi hazırlanmasını ve sunucunun eski URL’lerden yenilerine yönlendirecek şekilde yapılandırılmasını önerir ([site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Ayrıntı için [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/) yazımıza bakın.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisi sitesini yenilemiş. Eski site `/hizmetler/klima-bakim` biçimindeydi; yeni siteyi yaptıran kişi adres yapısını değiştirmiş ve eski adresler 404 veriyor. Search Console’da 404 sayısı artmış; Bağlantılar raporunda eski bakım sayfasının birkaç yerel sitede anıldığı görülüyor.

Karar: eski bakım sayfası yeni bakım sayfasına 301 ile yönlendiriliyor; yıllar önce silinmiş ve kimsenin bağlanmadığı eski kampanya sayfaları 404 bırakılıyor; özel 404 sayfası hazırlanıyor. Sonuç, Performans ve Sayfa dizine ekleme raporlarında izleniyor. Bu örnek sonuç vaadi değildir; karar sırasını gösterir.

## 404 hakkında yaygın yanlış anlamalar

- **“Çok 404 varsa Google ceza verir.”:** Google, 4xx dönen URL’leri dizine eklemez ve zamanla kullanmayı bırakır; silinmiş sayfa için 404 normaldir
- **“Her 404’ü yönlendirmeliyim.”:** Yalnızca karşılığı olan ve değeri olan sayfaları yönlendirin
- **“404 sayfamı güzel yaptım, sorun yok.”:** Sayfa 404 durum kodunu döndürmüyorsa soft 404 olabilir
- **“Silinen sayfayı ana sayfaya yönlendirmek en kolayı.”:** Alakasız yönlendirme kullanıcıyı yanıltır
- **“404 ile 410 farklı çalışır.”:** Google’a göre 429 dışındaki 4xx hataları aynı işlenir

## Aylık 404 kontrol rutini

Küçük bir işletme sitesi için ayda on dakikalık bir rutin yeter:

1. Search Console’da Sayfa dizine ekleme raporunu açın; yeni “bulunamadı (404)” adreslerine bakın.
2. Önemli bir sayfa (hizmet, iletişim, ürün) listedeyse hemen düzeltin.
3. Bağlantılar raporunda dışarıdan bağlantı alan bir adres 404 veriyorsa yönlendirin.
4. Menü ve ana sayfa bağlantılarını elle tıklayarak deneyin.
5. Site yeni ya da yenilenmişse haftalık kontrol yapın.

## Denizli SEO bu konuda nasıl yardımcı olur?

404’leri ayıklamak, hangisinin gerçekten sorun olduğunu görmeyi gerektirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da 404 veren sayfaları listeler, önemli olanları ve dışarıdan bağlantı alanları ayırırız,
- taşınan sayfalar için 301 yönlendirmesi kurar, kırık bağlantıları düzeltiriz,
- özel 404 sayfasının doğru durum kodunu döndürdüğünü kontrol ederiz,
- site yenilemede adres eşleme tablosu hazırlayıp yayın sonrası izleriz.

Sitenizde kaç 404 olduğunu ve hangilerinin önemli olduğunu öğrenmek isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Silinen ürün sayfası için ne yapmalıyım?

Ürün kalıcı olarak kaldırıldıysa ve benzer bir ürün ya da kategori varsa o sayfaya 301 verin. Hiçbir karşılığı yoksa 404 bırakın. Geçici olarak stokta yoksa sayfayı tutun.

### Özel 404 sayfası yaptırmalı mıyım?

Evet; kullanıcıya yol gösterir. Yeter ki sayfa 404 durum kodu döndürsün.

## Sık sorulan sorular

### 404 sayısı fazla diye Google ceza verir mi?

Google’ın rehberi, 4xx dönen URL’lerin dizine eklenmediğini ve zamanla kullanılmadığını söyler. Silinmiş sayfaların 404 vermesi normaldir. Ama önemli bir sayfa yanlışlıkla 404 veriyorsa görünürlük kaybedersiniz.

### 404 ile 410 arasında fark var mı?

Google, 429 dışındaki tüm 4xx hatalarını aynı şekilde işlediğini belirtir. Arama açısından fark yoktur.

### Silinen sayfayı ana sayfaya yönlendirsem olur mu?

Yalnızca ana sayfa gerçekten karşılık gelen en yakın sayfaysa. Genel bir yönlendirme kullanıcıyı yanıltır; uygun sayfa yoksa 404 bırakın.

### 404 sayfamda neden “200” görünüyor?

Sunucu, bulunamayan sayfaya da 200 dönüyor olabilir; bu soft 404’tür. Sayfanın 404 durum kodu döndürmesi için yazılımcıdan destek alın.

## Kaynaklar

- [Google Search Central: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Search Central: site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
