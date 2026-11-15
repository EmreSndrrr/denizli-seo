---
title: Trafik Düşüşü Nasıl Teşhis Edilir? Adım Adım
description: "Organik trafik düştüyse neden? Performans raporuyla düşüş kalıbı, teknik, güvenlik, spam, algoritma ve mevsim nedenleri, karar ağacı ve kontrol listesi."
date: 2026-11-10
service: teknik-seo
imageAlt: "Düşen bir trafik grafiği ve altında teşhis adımları"
---

Trafik düştüğünde önce düşüşün kalıbına bakın: ne zaman başladı, ani mi kademeli mi, hangi sayfa ve sorgular etkilendi, gösterim mi tıklama mı düştü? Google’ın rehberi başlıca nedenleri şöyle sıralar: teknik sorunlar, güvenlik sorunları, spam sorunları ve manuel işlem, algoritma güncellemeleri, sezona bağlı değişiklikler ve raporlama hataları. Önce raporlama ve mevsim gibi zararsız nedenleri eleyin, sonra teknik ve diğer nedenlere geçin; panikle siteyi değiştirmeyin.

“Trafiğim düştü” cümlesi, bir işletme sahibinin en endişeli anıdır; ama tek bir neden yoktur. Google, arama trafiği düşüşlerini ayıklamak için kendi rehberini yayımlar ve Search Console Performans raporunun ana grafiğiyle başlamayı önerir. Bu yazıda o rehberi adım adım, küçük bir işletme için uyarlıyoruz. Search Console’u tanımak için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza bakın.

## Panik yapmadan önce: bu gerçekten bir düşüş mü?

Google’ın rehberi, düşüş analizinde veri anormalliklerine (veri işleme sürecindeki değişiklik ya da günlük kaydı hatası) bakmanızı önerir; Search Console Veri Anormallikleri sayfası bunu gösterir ([arama trafiğindeki düşüşler](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)). Bu yüzden önce şunları sorun:

1. Düşüş gerçek mi, yoksa raporlama hatası mı?
2. Hangi aracın verisine bakıyorum (Search Console, analiz aracı)? Ölçümler aynı mı?
3. Karşılaştırdığım dönemler adil mi (aynı uzunlukta, aynı mevsim)?

## 1. Düşüşün kalıbını belirleyin

Google’a göre trafiğe ne olduğunu anlamanın en iyi yolu, Search Console Performans raporundaki ana grafiğe bakmaktır. Kalıp ipucu verir:

| Kalıp | Olası neden grubu |
| --- | --- |
| Bir günden diğerine ani ve büyük düşüş | Teknik sorun, güvenlik ya da spam sorunu, büyük güncelleme |
| Kademeli düşüş | Rakipler, içerik eskimesi, mevsim, ilgi değişimi |
| Yinelenen düşüşler (haftalık, yıllık) | Mevsimsellik |
| Yalnızca belirli sayfalar | O sayfalara özgü teknik ya da içerik sorunu |
| Gösterim sabit, tıklama düşük | Sonuç görünümü, başlık, sıra düşüşü |
| Hem gösterim hem tıklama düşük | Dizin, sıralama ya da talep sorunu |

Google’ın rehberi, hem gösterim hem tıklama sayıları düştüyse en yaygın nedenlerin listesinin incelenmesini önerir.

## 2. Teknik sorunları eleyin

Google’ın tanımına göre teknik sorunlar, Google’ın sayfalarınızı taramasını, dizine eklemesini ya da kullanıcılara sunmasını engelleyebilecek hatalardır: sunucu kullanılabilirliği, robots.txt dosyasının alınması, sayfa bulunamadı gibi. Sorunlar site genelinde (örneğin site kapalı) ya da sayfa genelinde olabilir. Kontrol listesi:

1. **Site açılıyor mu?** Telefondan ve masaüstünden deneyin.
2. **Sunucu hatası var mı?** Barındırma kayıtları, Search Console’da sunucu hataları.
3. **robots.txt değişti mi?** Yanlışlıkla `Disallow: /` konmuş olabilir. Bkz. “robots.txt nedir?” yazımız.
4. **noindex yanlışlıkla eklenmiş mi?** Bkz. “noindex nedir?” yazımız.
5. **Önemli sayfalar 404 ya da yönlendirme hatası mı veriyor?** Bkz. “404 hatası” yazımız.
6. **Sayfa dizine ekleme raporunda ani değişiklik var mı?** Bkz. [Search Console’da en sık görülen uyarılar](/blog/search-consolede-en-sik-gorulen-10-uyari/).
7. **Yakın zamanda site yenilendi, taşındı ya da adres mi değişti?** Bkz. “Alan adı değiştirirken SEO kaybı” yazımız.

## 3. Güvenlik sorunlarını eleyin

Google, siteniz kötü amaçlı yazılım ya da kimlik avı gibi bir güvenlik tehdidinden etkilenmişse kullanıcıları sitenize ulaşmadan önce uyarılar ya da ara sayfalarla uyarabileceğini ve bunun arama trafiğini azaltabileceğini belirtir. Search Console’daki Güvenlik Sorunları raporunu kontrol edin. Sitenizde tanımadığınız sayfalar, garip yönlendirmeler ya da arama sonuçlarında ilgisiz başlıklar görüyorsanız barındırma firmanızla hemen görüşün.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 4. Spam sorunları ve manuel işlem

Google, spam politikalarını ihlal eden uygulamaları hem otomatik sistemlerle hem gerektiğinde gerçek kişilerce yapılan incelemelerle tespit ettiğini, bu ihlaller sonucunda manuel işlem uygulanabileceğini ve ihlal eden sitelerin sonuçlarda daha alt sıralarda yer alabileceğini ya da hiç görünmeyebileceğini söyler. Search Console’daki Manuel İşlemler raporunu kontrol edin. Satın alınmış bağlantı gibi bir geçmişiniz varsa bkz. [backlink satın almak](/blog/backlink-satin-almak-riskleri/).

## 5. Algoritma güncellemeleri

Google’ın arama algoritmalarında sürekli güncelleme yaptığını, büyük çaplı temel güncellemelerin ayrıca duyurulduğunu belirtir. Düşüşün tarihi bir güncellemenin tarihiyle örtüşüyorsa bu olası bir nedendir. Ayrıntılı rehber için [Google güncellemesinden sonra trafik düştüyse ne yapılır?](/blog/google-guncellemesinden-sonra-trafik-dustuyse-ne-yapilir/) yazımıza bakın.

## 6. Mevsim ve ilgi değişimi

Google, bazen kullanıcı davranışındaki değişikliklerin, yeni bir trendin sonucu olarak ya da yıl içindeki sezonluk durumlara göre belirli sorgulara gösterilen talep miktarını değiştirdiğini; yani dış etkiler sonucunda trafiğin düşebileceğini söyler. Önerisi: Performans raporunda aynı anda tek bir sorguyu filtreleyip düşüşün yalnızca sitenize özel mi yoksa genel bir eğilim mi olduğunu araştırmak; Google Trendler bu konuda yardımcıdır. Denizli’de turizm, klima ve ısıtma gibi mevsimsel işlerde bu çoğu zaman asıl nedendir.

## 7. Sıralama kaybı mı, talep kaybı mı?

Google’ın rehberi, en iyi sayfalarınızın sıralamasına bakmanızı önerir: konumda küçük bir düşüş mü var (örneğin 2. sıradan 4. sıraya) yoksa büyük bir düşüş mü (örneğin 4. sıradan 29. sıraya)? Konumların statik olmadığını, Google’ın sonuçlarının doğası gereği dinamik olduğunu da hatırlatır. Küçük dalgalanmalar normaldir; büyük düşüşler araştırma gerektirir.

## Karar ağacı

1. **Düşüş gerçek mi?** Hayır → raporlama hatası; veri anormalliklerine bakın.
2. **Düşüş mevsimsel mi?** Evet → geçen yılın aynı dönemiyle kıyaslayın; müdahale gerekmeyebilir.
3. **Ani ve büyük mü?** Evet → teknik, güvenlik, spam ya da büyük güncelleme.
4. **Teknik sorun var mı?** Evet → düzeltin.
5. **Güvenlik ya da manuel işlem var mı?** Evet → ilgili rapordaki talimatı izleyin.
6. **Güncellemeyle örtüşüyor mu?** Evet → içerik ve kalite değerlendirmesi, aceleyle değişiklik yapmayın.
7. **Hiçbiri değilse?** Rakipler, içerik eskimesi ve talep değişimi gibi daha yavaş etkenlere bakın.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Teşhis tablosu şablonu

Şunları tek tek kontrol edin:

- Veri anormalliği var mı?
- Mevsimsel mi? (geçen yıl)
- Site açılıyor, sunucu hatası yok mu?
- robots.txt ve noindex doğru mu?
- Önemli sayfalar dizinde mi?
- Güvenlik sorunu raporu
- Manuel işlem raporu
- Güncelleme tarihleriyle örtüşme

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisinin organik trafiği kasımda belirgin düşmüş. Performans raporu: gösterim ve tıklama kademeli azalıyor; yalnızca “klima bakımı” sorgularında düşüş var. Sunucu ve robots.txt temiz, güvenlik ve manuel işlem raporları boş, bir temel güncelleme tarihiyle örtüşme yok.

Teşhis: Geçen yılın aynı dönemiyle karşılaştırıldığında kasımda “klima bakımı” talebi zaten azalıyor; düşüş mevsimsel. Karar: müdahale yerine kış dönemi için ısıtma hizmetlerine yönelik içerik planlanıyor. Bu örnek sonuç vaadi değildir; teşhis sırasını gösterir.

## Sorgu ve sayfa bazında inceleme

Google’ın rehberi, Performans raporunda aynı anda yalnızca bir sorguyu filtreleyerek düşüşün hangi sorgularda olduğunu bulmayı önerir. Küçük işletme için pratik yöntem:

1. Performans raporunda son 3 ayı ve geçen yılın aynı dönemini seçin.
2. En çok tıklama alan beş sorguyu tek tek filtreleyin.
3. Her sorgu için gösterim, tıklama ve ortalama konumu karşılaştırın.
4. En çok trafik kaybeden beş sayfayı “Sayfalar” sekmesinde bulun.
5. Aynı sorgu ve sayfayı rakip sonuçlarla (kopyalamadan) karşılaştırın.

Düşüşün yalnızca birkaç sorguda toplanması, sorunun o sayfalara özgü olduğunu gösterir; geniş çaplı düşüş teknik, güvenlik ya da güncelleme olasılığını artırır.

## Analiz aracı ve Search Console farkı

Search Console arama sonuçlarındaki gösterim ve tıklamayı; analiz araçları site ziyaretlerini ölçer. Bir düşüş yalnızca birinde görünüyorsa ölçüm ya da izleme kodu değişmiş olabilir. İkisini birlikte okuyun: Search Console “aramada ne oldu?”, analiz aracı “sitede ne oldu?” sorusuna cevap verir.

## Denizli SEO bu konuda nasıl yardımcı olur?

Trafik düşüşünde asıl zorluk nedeni doğru ayırmaktır. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da düşüşün kalıbını, etkilenen sayfa ve sorguları çıkarırız,
- teknik, dizin, güvenlik ve manuel işlem kontrollerini yapar, mevsimsellik ve güncelleme etkisini ayırırız,
- bulguları sıralı bir düzeltme listesi olarak yazılı sunarız,
- düzeltmeleri uygular, sonucu haftalar boyunca izleriz.

Trafiğiniz düştüyse [bize yazın](/iletisim/); sitenize bakıp nedenini yazılı olarak söyleyelim.

## Sık sorulan sorular

### Trafik düşüşü ceza mı demek?

Hayır. Çoğu düşüş mevsim, talep ya da teknik nedenlerle olur. Manuel işlem varsa Search Console’daki Manuel İşlemler raporunda görürsünüz.

### Ne kadar beklemeliyim?

Kesin süre veremeyiz; ama aceleyle büyük değişiklikler yapmak yerine önce teşhis edin. Güncelleme dönemlerinde Google, tamamlanmasını beklemeyi önerir.

### Trafik düştü, siteyi baştan yapmalı mıyım?

Hayır. Önce nedeni bulun; çoğu zaman tek bir teknik hata ya da mevsimsel bir durumdur.

### Analiz aracı ile Search Console neden farklı gösteriyor?

Farklı yöntemlerle ölçerler; Search Console arama sonuçlarındaki gösterim ve tıklamayı, analiz aracı site ziyaretlerini ölçer. İkisini birbirinin yerine kullanmayın.

## Kaynaklar

- [Google Search Central: Google Arama trafiğindeki düşüşlerle ilgili hata ayıklama](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=tr)
- [Google Search Central: Google Arama’daki temel güncellemeler](https://developers.google.com/search/docs/appearance/core-updates?hl=tr)
- [Search Console Yardımı: Performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)
