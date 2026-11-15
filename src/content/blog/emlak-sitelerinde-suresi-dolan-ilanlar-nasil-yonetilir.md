---
title: "Emlak Sitelerinde Süresi Dolan İlanlar Nasıl Yönetilir?"
description: "Emlak sitelerinde süresi dolan ilanlar nasıl yönetilir? 404, 410, 301 ve benzer ilan önerisi seçenekleri, soft 404 riski ve ilan yaşam döngüsü rehberi."
date: 2026-11-14
service: teknik-seo
imageAlt: "Süresi dolan ilan sayfasında benzer ilan önerisi ve durum kodu seçenekleri"
---

Emlak sitelerinde satılan ya da süresi dolan bir ilan sayfası için doğru karar, sayfanın durumuna ve değerine bağlıdır: geri dönmeyecek ve karşılığı olmayan ilan için 404 ya da 410 vermek, yakın bir karşılığı olan ilan için ilgili sayfaya 301 yönlendirmek, geçici olarak kapalıysa kullanıcıya açıklayıcı bir sayfa göstermek mümkündür. Yapılmaması gereken, boş ya da “ilan bulunamadı” yazan bir sayfayı 200 koduyla döndürmektir; bu soft 404 sorununa yol açar.

İlan sitelerinde binlerce sayfa gelip gider; yönetimi düzenli yapılmazsa tarama ve kullanıcı deneyimi bozulur. Teknik düzenleme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Sorun nedir?

Bir ilan kapandığında üç şey olur: sayfa arama sonuçlarında kalabilir, dışarıdan bağlantılar ona gelmeye devam edebilir ve kullanıcılar bu sayfaya ulaşıp hayal kırıklığına uğrar. Yönetilmezse:

- Kullanıcı ölü ilana tıklar, siteyi terk eder.
- Arama motoru boş ya da değersiz sayfaları taramaya devam eder.
- Tarama kaynağı değerli yeni ilanlar yerine eski ilanlara harcanır.
- Sayfalarda “ilan kapandı” yazarken sunucu 200 döndürürse soft 404 oluşur ([soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/)).

## Seçenekler

### 1. Kalıcı olarak kaldırılan ilan: 404 ya da 410

Karşılığı olmayan, geri gelmeyecek ilanlar için doğru durum kodu 404 (bulunamadı) ya da 410 (kalıcı olarak kaldırıldı) olur. Google’ın tarama bütçesi rehberi, kalıcı olarak kaldırılan sayfalar için 404/410 kullanmayı önerir ve soft 404’leri gidermenizi söyler ([tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)). Durum kodlarının anlamı için [HTTP durum kodları](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/) yazısına bakın.

Kullanıcı için 404 sayfasını özenle tasarlayın: benzer ilanlar, arama kutusu ve ilçe bağlantıları gösterin ([404 sayfası nasıl tasarlanır?](/blog/404-sayfasi-nasil-tasarlanir/)).

### 2. Yakın bir karşılığı varsa: 301 yönlendirme

İlan başka bir ilanla yer değiştirdiyse (örneğin aynı daire yeniden yayınlandı) ya da aynı mahallede çok benzer bir ilan varsa, 301 ile ilgili sayfaya yönlendirmek uygundur. Yalnızca gerçekten ilgili sayfaya yönlendirin; tüm kapanan ilanları ana sayfaya ya da genel listeye yönlendirmek kullanıcıyı yanıltır ve soft 404 olarak değerlendirilebilir ([404 düzeltilmeli mi, yönlendirilmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/)).

### 3. Geçici olarak kapalı: açıklayıcı sayfa

Satıldı ya da kiralandı durumuna geçen ilan sayfasını bir süre açık tutup “bu ilan sona erdi” demek, kullanıcıya fayda sağlayabilir: benzer ilanlar ve mahalle bilgisi sunarsınız. Ancak sayfanın durumu net olmalı:

- Sayfa başında “Bu ilan satıldı/kiralandı” uyarısı bulunsun.
- Benzer ilanlar listesi ve ilçe/mahalle sayfasına bağlantılar eklenebilir.
- Belirli bir süre sonra (örneğin 30–90 gün) sayfayı 404/410’a ya da ilgili yönlendirmeye çevirin.
- Bu sayfayı noindex etmeyi ya da dizinde bırakmayı bilinçli kararla seçin.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Soft 404’ten kaçının

Soft 404, sayfa kullanıcıya “yok” derken sunucunun 200 (başarılı) döndürmesidir. Emlak sitelerinde sık görülür: “Aradığınız ilan bulunamadı” yazan ama 200 dönen sayfalar. Google’ın tarama rehberi, soft 404’lerin giderilmesini önerir. Kontrol:

1. Search Console’da Sayfa dizine ekleme raporunda “Soft 404” sınıfındaki adreslere bakın.
2. Kapanmış bir ilanın adresini açıp sunucu yanıt kodunu kontrol edin.
3. Gerçekten boş olan sayfaların 404/410 döndürdüğünden emin olun.
4. Şablonda hata durumunda doğru kodu gönderin.

## Site haritasını güncel tutun

İlan siteleri hızlı değişir. Google’ın rehberi, site haritasını güncel tutmayı ve değişen sayfalar için `lastmod` kullanmayı önerir. Emlak sitesi için:

- Yeni ilanlar haritaya hemen eklensin.
- Kapanan ilanlar haritadan çıkarılsın; haritada 404 dönen adres olmasın.
- Harita otomatik oluşuyorsa kapanan ilanları dışlayan bir kural kurun.
- Büyük sitelerde haritayı bölümlere ayırın (ilçe, tür) ([site haritası rehberi](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).

## Dışarıdan bağlantı alan ilanlar

Bazı ilanlar (özel projeler, lüks konutlar, haber konusu olmuş sayfalar) dışarıdan bağlantı alabilir. Bunlar için:

- Bağlantı alan ilan sayfasının raporunu Search Console’da kontrol edin (backlink raporu).
- İlan kapandıysa mümkünse ilgili proje ya da mahalle sayfasına 301 verin.
- Proje sayfasını kalıcı yapın; ilanlar gelip gitse de proje sayfası kalsın.

## Ürün/ilan işaretlemesi ve fiyat

İlan işaretlemesi kullanıyorsanız kapanan ilanda eski fiyatı ve “mevcut” durumunu kaldırın. Sayfada görünen bilgiyle işaretleme uyumlu olmalıdır. Yanlış durum bilgisi güveni zedeler.

## Kategori ve liste sayfaları

Mahalle, ilçe ve ilan türü liste sayfaları kalıcı olmalı; ilanlar değişse de bu sayfalar aynı adreste kalsın. Bu sayfalar hem kullanıcının hem arama motorunun ana giriş noktasıdır ([emlakçılar için ilçe ve mahalle SEO’su](/blog/emlakcilar-icin-seo-ilce-ve-mahalle-aramalari/)). Liste sayfalarında sayfalama kullanıyorsanız adreslerin taranabilir olmasına dikkat edin (sayfalama SEO’su).

## İlan yaşam döngüsü politikası

Her ilan için önceden yazılı bir yaşam döngüsü belirleyin; böylece geliştirici ve içerik ekibi aynı kuralı uygular:

| Durum | Sayfa ne yapar? | Durum kodu |
|---|---|---|
| Yayında | Normal ilan | 200 |
| Satıldı/kiralandı (ilk 30 gün) | “İlan sona erdi” uyarısı + benzer ilanlar | 200 |
| Kapandı, karşılığı yok | Benzer ilan öneren hata sayfası | 410 ya da 404 |
| Kapandı, yakın karşılığı var | İlgili sayfaya yönlendirme | 301 |
| Geçici olarak gizlendi | Sayfa kapalı | 404 ya da 503 (kısa süreli) |

Bu tablo bir öneridir; süreleri işletmenizin ilan hacmine ve davranışına göre uyarlayın. Önemli olan, tablonun yazılı olması ve şablona yansıtılmasıdır.

## Kiralık ve satılık ilanlarda fark

Kiralık ilanlar hızlı döner ve aynı daire yeniden yayınlanabilir; bu durumda adresi korumak (ilanı yeniden yayınlandığında aynı adreste açmak) bağlantı ve geçmiş açısından avantaj sağlar. Satılık ilanlar ise genellikle bir kez kapanır. Aynı mülkün tekrar yayınlandığı durumlarda eski adrese yeni içeriği koyup durumu güncellemek, yeni adres açıp eskisini yönlendirmekten daha sade olabilir. Karar verirken kullanıcının eski bağlantıdan geldiğinde ne görmesi gerektiğini düşünün.

## İzleme

- Search Console’da 404, soft 404 ve “Keşfedildi – dizine eklenmedi” sayılarını izleyin (keşfedildi, dizine eklenmedi).
- Sunucu kayıtlarında Googlebot’un hangi adresleri taradığına bakın.
- Eski ilan adreslerinin tarama oranını yeni ilanlarla karşılaştırın.
- Ayda bir örnek ilanlarla durum kodlarını elle test edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir emlak sitesinde satılan ilanlar “Bu ilan bulunamadı” metniyle 200 dönüyor; Search Console’da yüzlerce soft 404 uyarısı var.

- **Teşhis:** Şablon, kapalı ilanlar için de 200 gönderiyor; site haritasında kapalı ilanlar duruyor.
- **Çözüm:** Satılan ilanlar 30 gün “satıldı” sayfası olarak açık kalıyor; sonra 410 dönüyor. Benzer bir ilan varsa 301 uygulanıyor.
- **Düzen:** Site haritasından kapalı ilanlar otomatik çıkarılıyor; 404 sayfası benzer ilan ve ilçe bağlantıları gösteriyor.
- **İzleme:** Soft 404 ve dizin raporları haftalık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Kapanan ilanlara 200 dönmek (soft 404).**
2. **Tüm kapanan ilanları ana sayfaya yönlendirmek.**
3. **Site haritasında kapanan ilanları bırakmak.**
4. **İlan sayfasını sonsuza dek “satıldı” notuyla açık tutmak.**
5. **Liste ve mahalle sayfalarını sürekli adres değiştirmek.**
6. **Durum kodlarını test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- ilan yaşam döngüsü için durum kodu ve yönlendirme politikası yazarız,
- soft 404, site haritası ve tarama sorunlarını tespit edip gideririz,
- mahalle ve liste sayfalarını kalıcı ve güçlü hâle getiririz,
- geliştiricinizle uygulanabilir teknik not paylaşırız.

İlan sitesi denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Satılan ilanı silmeli miyim?

Karşılığı yoksa 404/410; benzer bir ilan varsa 301; kısa süre açıklayıcı sayfa tutacaksanız net bir “satıldı” durumu gösterin.

### 404 mü 410 mu?

İkisi de kaldırıldığını bildirir; kalıcı kaldırma için 410 daha net bir sinyaldir, 404 de yaygın ve yeterlidir.

### Tüm kapanan ilanları ana sayfaya yönlendirebilir miyim?

Önermem; ilgisiz yönlendirme kullanıcıyı yanıltır ve soft 404 olarak değerlendirilebilir.

### Soft 404’ü nasıl bulurum?

Search Console’un Sayfa dizine ekleme raporunda ve sayfanın sunucu yanıt kodunu kontrol ederek.

### Site haritasında kapanan ilan kalmalı mı?

Hayır; haritada yalnızca canlı ve dizine eklenmesini istediğiniz ilanlar bulunmalı.

## Kaynaklar

- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: Google Arama trafiğindeki düşüşler ile ilgili hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)
