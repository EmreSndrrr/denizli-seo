---
title: "Stokta Olmayan Ürün Sayfaları Nasıl Yönetilmeli?"
description: "Stoğu biten ürün sayfası ne yapılmalı? Geçici tükenmede sayfayı koruyun, kalıcı kaldırmada 301 ya da 404 seçin; soft 404, ürün verisi ve iç bağlantı kontrolleri."
date: 2026-11-14
service: teknik-seo
imageAlt: "Stokta yok etiketli ürün sayfası ve geçici, kalıcı, alternatifli karar yolları"
---

Stokta olmayan ürün sayfasını yönetmenin kuralı, durumun geçici mi kalıcı mı olduğuna göre karar vermektir. Geçici tükenmede sayfayı açık tutun, “stokta yok” bilgisini ve alternatifleri gösterin, ürün verisini (stok durumu) güncelleyin. Kalıcı kaldırmada yakın bir karşılık varsa kalıcı yönlendirme (301), yoksa 404 ya da 410 kullanın. Hiçbir durumda “bulunamadı” içeriği taşıyan sayfaya 200 döndürmeyin; Google bunu soft 404 olarak işaretler.

Stoğu biten ürün e-ticaretin kaçınılmaz gerçeğidir; ama yanlış yönetildiğinde sıralamayı, ziyaretçiyi ve satışı kaybettirir. Bu yazı, dört farklı durum için ne yapılacağını ve Google’ın ilgili kurallarını anlatıyor. E-ticaret sitenizin teknik yapısını düzenlemek isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Önce durumu ayırın

Ürünler dört farklı nedenle stokta olmayabilir:

1. **Geçici tükenme:** Ürün yakında yeniden stoğa girecek.
2. **Sezonluk ürün:** Yılın belli döneminde satılan; sezon dışında stokta yok.
3. **Kalıcı kaldırma, karşılığı var:** Ürün üretimden kalktı ama yerine geçen yeni model ya da çok benzer bir ürün var.
4. **Kalıcı kaldırma, karşılığı yok:** Ürün bir daha satılmayacak ve benzeri de yok.

Her biri için çözüm farklıdır; tüm tükenen ürünleri aynı biçimde (toplu silme ya da ana sayfaya yönlendirme) ele almak en sık yapılan hatadır.

## Durum 1: Geçici tükenme

Ürün yeniden gelecekse sayfa değerini korur: bağlantı alabilir, aramada çıkabilir, müşteri geri dönebilir. Yapılacaklar:

- **Sayfayı açık tutun** ve 200 durum koduyla yayında bırakın.
- **“Stokta yok” bilgisini net gösterin**; satın al düğmesini devre dışı bırakıp yerine “stoğa girince haber ver” seçeneği sunun.
- **Alternatif ürünler gösterin:** Benzer ürünler, aynı kategoriden öneriler.
- **Tahmini stok tarihini** yalnızca gerçekten biliyorsanız yazın.
- **Ürün verisini güncelleyin:** Google’ın ürün snippet’i belgesi Product işaretlemesinin fiyat, stok ve para birimi gibi bilgileri içerdiğini belirtir; stok durumunu doğru işaretleyin ([ürün snippet’i](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=tr)).

Dikkat: Google, JavaScript ile oluşturulan ürün işaretlemesinin işlenmesinin gecikebileceğini ve bunun stok ile fiyat gibi hızlı değişen bilgiler için sorun yaratabileceğini söyler. Stok durumunu sunucu tarafında, sayfa kaynağında doğru göstermek daha güvenilirdir.

## Durum 2: Sezonluk ürünler

Sezonluk ürünlerin sayfaları yıl boyu açık kalabilir; bu, bağlantı ve görünürlük değerini korur. Sezon dışında:

- Sayfada “Bu ürün sezon dışında satılmamaktadır, X ayında yeniden” gibi dürüst bir not gösterin.
- Benzer, o dönemde satılan ürünleri öne çıkarın.
- Sezon yaklaşınca sayfayı güncelleyin, stok ve fiyatı yenileyin.

Sayfayı her sezon silip yeniden oluşturmak, kazanılmış bağlantıları ve geçmişi kaybettirir. Sezonluk içerik planı için [mevsimsel içerik takvimi](/blog/mevsimsel-icerik-takvimi-denizli-isletmeleri/) yazısına bakabilirsiniz.

## Durum 3: Kalıcı kaldırma ve karşılığı var

Ürün artık satılmıyor ama yerine geçen güncel model ya da çok yakın bir ürün varsa kalıcı yönlendirme doğru seçimdir. Google’ın yönlendirme belgesine göre kalıcı yönlendirmeler (301/308) hedefin standart olması yönünde sinyal verir; sunucu tarafı yönlendirme en güvenilir olandır ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)). Kurallar:

- Yönlendirmeyi gerçekten benzer bir ürüne ya da çok ilgili bir kategoriye yapın; ziyaretçi neden orada olduğunu anlamalı.
- Tüm kaldırılmış ürünleri ana sayfaya yönlendirmeyin; bu yönlendirme ziyaretçiyi şaşırtır ve karşılık sunmaz.
- Yönlendirme zincirinden kaçının; eski adres doğrudan son adrese gitsin.
- İç bağlantıları ve site haritasını yeni adrese göre güncelleyin.

301 ve 302 farkı için [301 ve 302 yönlendirme farkı nedir?](/blog/301-ve-302-yonlendirme-farki-nedir/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Durum 4: Kalıcı kaldırma ve karşılığı yok

Ürünün hiçbir karşılığı yoksa sayfayı kaldırmak normaldir. Google’ın HTTP durum kodları belgesine göre 4xx kodlarında içerik kullanılmaz, sayfa dizine eklenmez ve dizindeyse kaldırılır; 429 dışındaki 4xx kodları aynı işlenir, yani 404 ile 410 Google açısından farksızdır ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Bu durumda:

- Sayfa 404 ya da 410 dönsün.
- 404 sayfasında kategori bağlantıları, arama kutusu ve benzer ürün önerileri sunun ([404 sayfası nasıl tasarlanır?](/blog/404-sayfasi-nasil-tasarlanir/)).
- Ürüne dışarıdan değerli bağlantı geliyorsa en yakın kategoriye yönlendirmeyi değerlendirin.
- Site haritasından ve iç bağlantılardan kaldırın.

Hangi durumda ne yapılacağı ayrıntısı için [404 hatası: düzeltmeli mi, yönlendirmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/) yazısına bakın.

## Soft 404’ten kaçının

Belge, “bulunamadı” içeriği taşıyan ama 200 yanıt döndüren sayfaların Search Console’da soft 404 olarak işaretlendiğini söyler. E-ticarette sık görülen örnek: kaldırılan ürünün adresi “Üzgünüz, ürün bulunamadı” yazıp 200 dönüyor. Çözüm: gerçekten kaldırılmış ürün için 404/410, geçici tükenme için ise içeriği olan, “stokta yok” bilgili ve alternatifli normal bir 200 sayfa. Ayrıntı için [soft 404 nedir, nasıl düzeltilir?](/blog/soft-404-nedir-nasil-duzeltilir/) yazısına bakın.

## Kategori sayfalarında tükenen ürünler

Kategori listelerinde tükenen ürünlerin gösterilmesi bir tercihtir:

- **Sona almak:** Stoktaki ürünleri öne, tükenenleri sona koyun; müşteri aradığını daha hızlı bulur.
- **Gizlemek:** Kalıcı kaldırılan ürünleri listeden tamamen çıkarın.
- **Filtreyle:** “Yalnızca stoktakiler” filtresi sunun (filtre URL’lerinin yönetimi için [e-ticarette filtreli sayfalar SEO için nasıl yönetilir?](/blog/e-ticarette-filtreli-sayfalar-seo-icin-nasil-yonetilir/) yazısına bakın).

Kategorideki tüm ürünler tükendiyse kategori sayfasını silmeyin; alternatif kategorilere yönlendirme önerileri ve “yakında” notu ekleyin.

## Müşteri deneyimi ve satış kaybını azaltma

SEO kadar kullanıcı deneyimi de önemlidir:

- “Stoğa girince haber ver” formu ya da e-postası ekleyin ve gerçekten haber verin.
- Alternatif ürünleri fiyat ve özellik yakınlığına göre gösterin.
- Önemli ürünlerde stok planlaması yapın; sık tükenen ürünler için daha önceden uyarı kurun.
- Müşteri hizmetleri için telefon ve WhatsApp’ı görünür tutun.

Tükenen ürün sayfasından çıkışı azaltmak, sayfanın değerini ve satış fırsatını korur.

## Toplu işlem ve takip

Çok ürünlü mağazalarda stok durumu sürekli değişir. Şu rutini kurun:

1. Stok yönetim sisteminizin ürün durumlarını otomatik güncelleyip güncellemediğini kontrol edin.
2. Üç aydan uzun süredir stokta olmayan ürünleri listeleyin ve her biri için karar verin (geri gelecek mi, yönlendirme, kaldırma).
3. Search Console’da sayfa dizine ekleme raporunda “bulunamadı (404)” ve “soft 404” nedenlerini aylık kontrol edin.
4. Yönlendirme zincirlerini ve kırık iç bağlantıları tarayın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili mağazasının çevrimiçi sitesinde 300 tükenmiş ürün var; hepsi “ürün bulunamadı” yazıp 200 dönüyor.

- **Sınıflandırma:** Ürünler geçici (120), sezonluk (40), kalıcı-karşılıklı (90), kalıcı-karşılıksız (50) olarak ayrılıyor.
- **Geçici/sezonluk:** Sayfalar açık, “stokta yok” notu, alternatifler ve “haber ver” formuyla yenileniyor; ürün verisi stok durumuyla güncelleniyor.
- **Karşılıklı:** Yeni modele 301 yönlendirmesi kuruluyor.
- **Karşılıksız:** 404 dönüyor; 404 sayfasında kategori önerileri gösteriliyor.
- **Kontrol:** Search Console’da soft 404 sayısı birkaç hafta izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Tüm tükenmiş ürünleri tek bir kuralla silmek.**
2. **“Bulunamadı” içeriğini 200 koduyla döndürmek.**
3. **Hepsini ana sayfaya yönlendirmek.**
4. **Geçici tükenen ürünün sayfasını kaldırıp bağlantı değerini kaybetmek.**
5. **Ürün verisinde stok durumunu güncellememek.**
6. **Kaldırılan ürünü iç bağlantı ve site haritasında bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Stok yönetimi SEO’yu da etkiler. [Teknik SEO hizmetimizde](/teknik-seo/):

- tükenmiş ürün sayfalarınızı geçici, sezonluk ve kalıcı gruplarına ayırırız,
- her grup için doğru durum kodu, yönlendirme ve sayfa içeriğini belirleriz,
- ürün verisi, site haritası ve iç bağlantı düzenlemelerini yaparız,
- soft 404 ve dizine ekleme sonuçlarını izler, yazılı raporlarız.

E-ticaret sitenizdeki tükenen ürünleri düzenlemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Stokta olmayan ürün sayfası silinmeli mi?

Geçici ya da sezonluksa hayır; sayfayı açık tutun. Kalıcı kaldırıldıysa yakın karşılığa yönlendirin ya da 404/410 dönün.

### Tükenen ürün sıralamamı düşürür mü?

Sayfayı doğru yönetirseniz (açık tutma, alternatif, doğru kod) zarar riski azalır; hatalı yönetim (soft 404, toplu silme) görünürlük kaybına yol açabilir.

### 404 mü 410 mu kullanmalıyım?

Google açısından fark yoktur; her ikisi de içeriğin kullanılmadığını ve dizinden kaldırılacağını gösterir.

### Tüm kaldırılmış ürünleri ana sayfaya yönlendirebilir miyim?

Önermiyoruz. Karşılığı olan sayfaya yönlendirin; yoksa 404 bırakın.

### Stok durumu için yapılandırılmış veri gerekli mi?

Zorunlu değil; ama Google, Product işaretlemesinin stok durumu içerdiğini belirtir. Kullanıyorsanız doğru ve güncel tutun.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Arama Merkezi: Ürün snippet’i yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=tr)
