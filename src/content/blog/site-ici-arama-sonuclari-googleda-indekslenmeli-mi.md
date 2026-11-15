---
title: "Site İçi Arama Sonuçları Google’da İndekslenmeli mi?"
description: "Site içi arama sonuç sayfaları Google’da indekslenmeli mi? Sonsuz URL riski, tarama bütçesi, robots.txt ve noindex tercihi; arama verisinden içerik fikri çıkarma."
date: 2026-11-14
service: teknik-seo
imageAlt: "Site içi arama kutusu ve sonuç sayfası adreslerinin tarama kontrolü"
---

Site içi arama sonuç sayfaları çoğu işletme sitesinde Google’da indekslenmemelidir: kullanıcının yazdığı her kelime yeni bir adres üretir, bu adresler değersiz ve neredeyse sınırsız sayıda sayfa yaratır ve taramayı gereksiz yere harcar. Daha sağlam yaklaşım, arama sonuç adreslerinin taranmasını robots.txt ile kontrol altına almak, değerli konular için ise ayrı, elle hazırlanmış kategori ya da rehber sayfaları oluşturmaktır.

Site içi arama kutusunun verisi ise altın değerindedir: ziyaretçilerin sitenizde aradığı ama bulamadığı şeyleri gösterir. Teknik düzenleme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Site içi arama sayfası nedir?

Ziyaretçi site içi arama kutusuna bir kelime yazdığında sistem, bu kelimeye göre dinamik bir sonuç sayfası üretir. Adres çoğunlukla `?s=kelime` ya da `/ara?q=kelime` biçimindedir. Sayfa, siteye ait ürünleri ya da yazıları listeler.

## Neden indekslenmemeli?

1. **Sonsuz adres alanı:** Her olası kelime yeni bir adrestir; arama motoru sayısız gereksiz sayfa tarayabilir.
2. **Düşük değer:** Sonuç sayfaları kullanıcıya ikinci bir liste sunar; sayfa kendi başına özgün içerik taşımaz.
3. **Kopya ve benzer içerik:** Aynı ürünler birçok farklı arama sayfasında tekrarlanır.
4. **Tarama bütçesi:** Google’ın tarama bütçesi rehberi, URL envanterini yönetmeyi ve önemsiz URL’leri robots.txt ile engellemeyi önerir ([tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)).
5. **Spam riski:** Kötü niyetli kişiler arama kutusuna spam kelimeler yazıp bağlantılar yayabilir; bu sayfalar dizine girerse sitenize zarar verir.

Büyük siteler için tarama bütçesi daha kritiktir; ancak küçük sitelerde de gereksiz adres sorunu başka sorunları gizler ([büyük sitelerde tarama bütçesi](/blog/buyuk-sitelerde-tarama-butcesi-nasil-yonetilir/)).

## Robots.txt mi, noindex mi?

İki yaklaşım vardır ve farklı sorunları çözer:

- **robots.txt ile engelleme:** Arama sonuç adreslerinin taranmasını engeller; tarama bütçesini korur. Ancak engellenen bir URL, başka sitelerden bağlantı alırsa içeriği taranmadan da dizinde görünebilir.
- **noindex etiketi:** Sayfa taranır ama dizine eklenmez. Google’ın tarama bütçesi rehberi, tarama bütçesini korumak için noindex kullanmayı önermez; çünkü Google yine de sayfayı isteyip etiketi görmek zorundadır ve bu tarama boşa gider.

Pratik öneri: arama sonuç adres kalıbını (örneğin `?s=` ya da `/ara`) robots.txt ile taramaya kapatın ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)). Zaten dizinde olan sonuç sayfaları varsa önce noindex ile dizinden çıkarmanız, bunlar çıktıktan sonra robots.txt ile taramayı kapatmanız gerekir; çünkü engellenmiş bir sayfada noindex etiketi görülemez.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kontrol: sitenizde arama sonuçları dizinde mi?

1. Search Console’da Sayfa dizine ekleme raporuna bakın; `?s=` ya da `/ara` içeren adresleri arayın.
2. Arama motorunda `site:` aramasıyla sitenizdeki arama adresi kalıbını sorgulayın.
3. WordPress’te varsayılan arama adresi `?s=` biçimidir; bunun dizinde olup olmadığına bakın ([WordPress SEO eklentisi ayarları](/blog/wordpress-seo-eklentisi-secerken-nelere-bakilmali/)).
4. Site haritasında arama adreslerinin olmadığından emin olun.
5. İç bağlantılarda arama sonuç adreslerine bağlantı verilmediğini kontrol edin.

## İstisna: değerli arama sayfaları

Bazı sitelerde belirli arama sonucu sayfaları (ör. “marka + ürün” ya da “mahalle + hizmet”) kullanıcı için gerçekten değerli olabilir. Bu durumda dinamik arama sonucuna güvenmek yerine, o konu için elle hazırlanmış **kategori ya da hizmet bölgesi sayfası** oluşturun. Böylece sayfa:

- Temiz, kalıcı bir adrese sahip olur ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).
- Özgün başlık ve metin taşır.
- İç bağlantılarla desteklenir.
- Kontrol edilebilir ve kaliteli olur.

Bu yaklaşım, programatik düşük kaliteli sayfa üretiminden de uzak durmanızı sağlar; Google, kullanıcıya değer katmayan çok sayıda sayfa üretmeyi (ölçeklendirilmiş içerik) spam politikasında ele alır ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)).

## Arama kutusu verisi: ücretsiz içerik fikri

Site içi aramada yazılan kelimeler, ziyaretçinin ne aradığını gösterir. Bu veriyi şöyle kullanın:

1. **Verilerinizi toplayın:** Analitikte site içi arama izlemesini açın ve aranan terimleri listeleyin ([GA4 temel raporları](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/)).
2. **Sonuç bulunamayanları işaretleyin:** “Sonuç yok” çıkan aramalar, eksik içerik ya da ürün işaretidir.
3. **Yazım varyantlarını ekleyin:** Müşterilerin kullandığı farklı kelimeleri içerik ve ürün adlarına yansıtın.
4. **İçerik planına dönüştürün:** Sık aranan sorulara rehber ve SSS yazın ([içerik planı](/blog/icerik-plani-nasil-yapilir-aylik-takvim-ornegi/)).
5. **Arama deneyimini iyileştirin:** Arama kutusunda otomatik tamamlama, yazım düzeltme ve filtre sunun.

Bu veri, dışarıdan arama verisinden farklı ve çok değerlidir: zaten sitenizde olan, niyeti yüksek ziyaretçilerin sorularıdır.

## Arama kutusunu spam’e karşı korumak

- Arama sonuç sayfalarına `noindex` ve robots.txt kuralı uygulayın.
- Arama sorgusunu sayfada kullanıcı girdisi olarak gösteriyorsanız temizleyin; kötü amaçlı kod ya da bağlantı çıkmasına izin vermeyin.
- Spam kelimeler içeren sonuç adreslerini Search Console’da izleyin.
- Aşırı hızlı ve tekrarlı aramaları sınırlayan bir koruma kullanın.

## Arama deneyimini iyileştirmek

İyi bir site içi arama, hem dönüşümü hem SEO’yu dolaylı destekler:

- Arama kutusunu her sayfada görünür tutun.
- Sonuçları alaka düzeyine göre sıralayın ve ürün görseli, fiyat ve stok bilgisini gösterin.
- Yazım hatalarını tolere edin ve Türkçe karakter farklarını (ı/i, ş/s) eşleştirin.
- “Sonuç bulunamadı” sayfasında alternatif öneri, popüler kategoriler ve iletişim seçeneği sunun.
- Mobilde arama kutusunun kullanımı kolay olsun ([telefonda hızlı açılan site](/blog/telefonda-hizli-acilan-site/)).

İyi bir “sonuç yok” sayfası, kaybolabilecek ziyaretçiyi kazanmanın en ucuz yoludur ve aranan ama bulunamayan şeylerin kaydını size verir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir tarım ürünleri mağazasının Search Console’unda yüzlerce `?s=` adresi “Keşfedildi – dizine eklenmedi” ya da “Taranan – dizine eklenmeyen” görünüyor.

- **Teşhis:** Arama kutusu adresleri tarama bütçesini harcıyor; bazılarında spam kelimeler var.
- **Çözüm:** Önce dizinde olanlara noindex uygulanıyor; sonra `?s=` kalıbı robots.txt ile kapatılıyor.
- **Fırsat:** Arama verisinden “soğuk sıkım” ve “organik” gibi sık aranan kelimeler için rehber sayfalar hazırlanıyor.
- **İzleme:** Dizin ve tarama raporlarında arama adreslerinin azalması izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Arama sonuç sayfalarını dizine açık bırakmak.**
2. **Önce robots.txt ile engelleyip noindex’i görünmez yapmak.**
3. **Arama sonuçlarını site haritasına eklemek.**
4. **Spam’e karşı koruma kurmamak.**
5. **Arama kutusu verisini kullanmamak.**
6. **Değerli konuları dinamik arama sayfasına bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- arama adresi kalıplarını tespit eder ve doğru sırayla (noindex, sonra robots.txt) kapatırız,
- tarama ve dizin raporlarını izleriz,
- site içi arama verisinden içerik ve ürün fırsatlarını çıkarırız,
- değerli konular için kalıcı sayfa yapısı kurarız.

Tarama denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Site içi arama sayfaları indekslenmeli mi?

Çoğu sitede hayır; sınırsız ve değersiz adres üretir. Değerli konular için elle hazırlanmış sayfalar kullanın.

### Robots.txt mi noindex mi kullanmalıyım?

Dizinde olan sayfalar için önce noindex, sonra robots.txt ile taramayı kapatın; yeni sitede robots.txt ile başlayabilirsiniz.

### Arama kutusu verisini nereden görürüm?

Analitikte site içi arama izlemesini açarak; aranan kelimeleri ve sonuçsuz aramaları listeleyin.

### Arama sayfaları spam’e açık mı?

Evet; kullanıcı girdisi sayfaya yansıtılıyorsa kötü amaçlı kullanım olabilir. Temizleme ve koruma ekleyin.

### Aranan kelimeleri içerik fikri olarak kullanabilir miyim?

Evet; sıkça aranan ve sonuç bulunamayan kelimeler, eksik içeriğin en net göstergesidir.

## Kaynaklar

- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)
- [Google Arama Merkezi: URL yapısı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
