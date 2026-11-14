---
title: "Web Sitem Google’da Neden Görünmüyor? İndeksleme Rehberi"
description: "Web siteniz Google’da çıkmıyorsa neden? Site dizinde mi, taranabiliyor mu, engel var mı? Adım adım kontrol; yeni site, noindex, robots.txt ve kalite nedenleri."
date: 2026-11-14
service: teknik-seo
imageAlt: "Bir sitenin keşif, tarama, dizine ekleme ve sıralama aşamalarındaki kontrol noktaları"
---

Web siteniz Google’da görünmüyorsa önce iki ayrı soruyu ayırın: site hiç dizinde mi değil, yoksa dizinde olup aradığınız sorguda sıralanmıyor mu? İlkinde sorun keşif, tarama ya da dizine ekleme aşamasındadır; ikincisinde sıralama ve içerik sorunu vardır. Hangisi olduğunu Search Console’daki URL Denetleme aracıyla ve “site:” aramasıyla birkaç dakikada öğrenebilirsiniz.

Telaşa kapılıp hemen “Google beni cezalandırdı” sonucuna varmayın; çoğu zaman neden basit bir engeldir: yeni site, yanlış bir etiket ya da hiçbir yerden bağlantı almayan bir sayfa. Bu yazı, sebebi sistematik bulmanız için adım adım bir kontrol sırası sunuyor. Sorunu bizim teşhis etmemizi isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Önce üç aşamayı hatırlayın

Google’ın arama rehberine göre Arama üç aşamada çalışır: tarama, dizine ekleme ve sonuçları sunma; tüm sayfalar her aşamadan geçmez ([Google Arama’nın işleyişi](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)). “Görünmüyorum” şikâyeti bu üç aşamanın birinde tıkanmanın sonucudur:

1. **Keşfedilmedi:** Google sayfanızı hiç bulmadı.
2. **Taranmadı ya da taranamadı:** Bulundu ama içeriği alınamadı.
3. **Dizine eklenmedi:** Tarandı ama dizine alınmadı.
4. **Dizinde ama görünmüyor:** Dizinde; ancak aradığınız sorguda yeterince uygun görülmedi.

Aşağıdaki adımlar bu dört durumu ayırmanıza yardım eder.

## Adım 1: Siteyi ya da sayfayı “site:” ile aratın

Google’da `site:siteniz.com` yazın. Sonuçlarda sitenizin sayfalarını görüyorsanız site dizinde demektir; hiçbir sonuç çıkmıyorsa dizine eklenmemiştir ya da çok yenidir. Belirli bir sayfa için tam adresi yazın. Bu yöntem hızlı bir ilk işarettir, ama kesin ve eksiksiz bir ölçüm değildir; asıl doğrulamayı Search Console’da yapın.

Ayrıca marka adınızı tırnak içinde aratın. Marka adıyla bile bulunmuyorsanız sorun büyük olasılıkla dizine ekleme aşamasındadır; markanızla bulunuyor ama genel aramalarda çıkmıyorsanız sorun sıralamadadır.

## Adım 2: Search Console’da URL Denetleme

Search Console doğrulaması yaptırmadıysanız önce mülkü ekleyip doğrulayın. Sonra URL Denetleme aracına sayfanın tam adresini yazın. Araç, tek bir URL’nin Google dizinindeki durumunu gösterir ve sayfanın dizine eklenip eklenemediğini kontrol etmenizi sağlar ([URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)). Olası sonuçlar:

- **“URL Google’da”:** Sayfa dizinde; sorun sıralamadır.
- **“URL Google’da değil”:** Nedenini aracın sunduğu ayrıntılardan okuyun (taranmadı, engellendi, noindex, yönlendirme gibi).
- **“Bulundu/Tarandı, şu anda dizine eklenmedi”:** Durum açıklamaları için [“Keşfedildi, dizine eklenmedi”](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/) ve [“Taranan, dizine eklenmeyen”](/blog/taranan-dizine-eklenmeyen-sayfalar-nedenleri/) yazılarına bakın.

Sayfa dizine ekleme raporu da dizine eklenen URL’leri ve eklenmeyenleri nedenleriyle listeler ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 3: Site çok mu yeni?

Google, yeni bir sayfanın ya da sitenin taranıp dizine eklenmesinin bir haftayı bulabileceğini belirtir. Siteyi birkaç gün önce yayınladıysanız sabır gerekebilir. Bu sürede şunları yapın:

- Site haritasını oluşturup Search Console’a gönderin ([site haritası nasıl oluşturulur?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
- Ana sayfayı URL Denetleme ile kontrol edin.
- Siteyi iç ve dış bağlantılarla bulunabilir kılın; hiçbir yerden bağlantı almayan site daha zor keşfedilir.

Site haritası genel olarak büyük, yeni ve az dış bağlantılı sitelerde daha yararlıdır; sayfalar doğru bağlandıysa Google genellikle sitenin büyük çoğunluğunu kendi keşfeder ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)).

## Adım 4: Engelleri kontrol edin

Dizine eklenmemenin en sık teknik sebepleri bunlardır.

**noindex etiketi.** `<meta name="robots" content="noindex">` ya da `X-Robots-Tag` başlığı sayfayı Arama sonuçlarından tamamen çıkarır. Site yapım sürecinde “arama motorlarından gizle” seçeneği açık bırakılmış olabilir; yayından sonra kapatılmalıdır ([noindex nedir?](/blog/noindex-nedir-ne-zaman-kullanilir/)).

**robots.txt engeli.** Google’ın belgesine göre robots.txt bir sayfayı Google’ın dışında tutma mekanizması değildir; ama yanlış bir `Disallow` taramayı engelleyebilir. Dosyanın kökte olduğunu ve önemli bölümleri kapatmadığını kontrol edin ([robots.txt nedir?](/blog/robots-txt-nedir-nasil-hazirlanir/)). Ayrıca noindex’in çalışması için sayfa robots.txt ile engellenmemeli.

**Giriş şartı.** Şifre arkasındaki sayfalar taranamaz.

**Yönlendirme ve kopya adresler.** Sayfa başka bir adrese yönlendiriliyorsa ya da standart adres olarak başka bir URL gösteriliyorsa Google asıl adresi dizine ekler.

**Sunucu hataları.** 5xx hataları ve uzun süren erişilemezlik taramayı yavaşlatır; ayrıntı için HTTP durum kodları yazısına bakın.

## Adım 5: Sayfa bulunabilir mi?

Google’ın belirttiğine göre bağlantıyı yalnızca `href` özelliği olan `<a>` öğesiyle tarayabilir ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Kontrol edin:

- Sayfaya sitenizin içinden bir bağlantı var mı (menü, ilgili sayfalar)?
- Bağlantılar gerçek bağlantı mı, yoksa yalnızca betikle çalışan düğmeler mi?
- Sayfa site haritasında mı?

Yetim (hiçbir yerden bağlanmayan) sayfalar keşfedilmekte zorlanır. Detaylı akış için [Google sayfanızı nasıl bulur?](/blog/google-sayfanizi-nasil-bulur-tarama-ve-dizine-ekleme/) yazısına bakın.

## Adım 6: Mobil ve içerik görünür mü?

Google, dizine ekleme ve sıralama için mobil sürümü kullanır. Mobilde içerik eksikse ya da JavaScript ile yüklenen içerik doğru oluşmuyorsa sayfa eksik dizine girebilir. Mobil sürümde ana içeriğin eksiksiz olduğunu ve sayfanın JavaScript’siz de temel metni taşıdığını kontrol edin (JavaScript siteleri ve SEO).

## Adım 7: Dizinde ama sıralanmıyorsa

Sayfa dizindeyse sorun artık dizine ekleme değil, sıralamadır. Sıralama sistemleri birçok faktörü ve sinyali dikkate alır ([sıralama sistemleri rehberi](https://developers.google.com/search/docs/appearance/ranking-systems-guide?hl=tr)). Şunlara bakın:

- Sayfa aramanın niyetine uygun mu? (arama niyeti nasıl belirlenir?)
- İçerik rakiplerinden daha faydalı ve eksiksiz mi?
- Sayfa çok mu ince, kopya ya da benzer sayfalarla çakışıyor mu?
- Hedef kelime çok rekabetli mi? Daha dar ifadelerle başlamak isteyebilirsiniz.
- Sitenizin hakkında güven işaretleri (hakkımızda, iletişim, yazar bilgisi, yorumlar) yeterli mi?

Search Console’da Performans raporunda gösterim görüyorsanız site dizindedir; gösterim yoksa dizine ekleme ya da çok düşük sıra söz konusudur ([performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)).

## Manuel işlem var mı?

Search Console’da güvenlik ya da manuel işlem bildirimi olup olmadığını kontrol edin. Ceza gibi görünen durumların çoğu aslında teknik engeller ya da yeni site bekleme süresidir; ama bir bildirim varsa Google’ın verdiği yönergeleri izleyin. Satın alınmış bağlantı gibi geçmişte yapılmış uygulamalar varsa backlink satın almak: Google’ın spam politikası ne diyor? yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de yeni açılan bir pansiyonun sahibi, sitesini iki hafta önce yayınlamış ama Google’da hiç çıkmıyor.

- **Kontrol 1:** `site:` aramasında sonuç yok; marka adı da bulunmuyor.
- **Kontrol 2:** URL Denetleme ana sayfa için “noindex etiketi algılandı” diyor.
- **Neden:** Site kurulurken “arama motorlarından gizle” seçeneği açık bırakılmış.
- **Çözüm:** Seçenek kapatılıyor; site haritası gönderiliyor; ana sayfa için dizine ekleme isteniyor ve birkaç gün sonra tekrar kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir; süre ve sonuç siteye göre değişir.

## Sık yapılan altı hata

1. **Sitenin yeni olduğunu unutup bir günde sonuç beklemek.**
2. **“Arama motorlarından gizle” seçeneğini açık bırakmak.**
3. **robots.txt ile noindex’i aynı sayfada birlikte kullanmak.**
4. **Sayfayı hiçbir yerden bağlamamak.**
5. **Sorunun dizine ekleme mi sıralama mı olduğunu ayırmamak.**
6. **Düzeltmeden sonra durumu yeniden kontrol etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Sitenizin neden görünmediğini kesin teşhis etmek zaman kazandırır. [Teknik SEO hizmetimizde](/teknik-seo/):

- siteyi keşif, tarama, dizine ekleme ve sıralama aşamalarında sırayla denetleriz,
- noindex, robots.txt, yönlendirme, site haritası ve iç bağlantı sorunlarını düzeltiriz,
- dizine ekleme ve sıralama sorununu ayırır, içerik ve niyet eksiklerini raporlarız,
- sonuçları Search Console’da izler ve yazılı raporlarız.

Sitenizin neden görünmediğini öğrenmek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Yeni siteyi Google ne zaman gösterir?

Google, yeni sayfanın ya da sitenin taranıp dizine eklenmesinin bir haftayı bulabileceğini belirtir; süre siteye göre değişir.

### Sitem dizinde mi nasıl anlarım?

`site:` aramasıyla ve Search Console URL Denetleme aracıyla kontrol edin; kesin sonuç için Search Console’a güvenin.

### Marka adıyla bile çıkmıyorsam ne yapmalıyım?

Dizine eklenmemiş olması olasıdır; noindex, robots.txt engeli ve site haritasını kontrol edin ve ana sayfayı URL Denetleme ile inceleyin.

### Google beni cezalandırmış olabilir mi?

Search Console’da manuel işlem bildirimi yoksa çoğu zaman sebep teknik engel ya da yeni site bekleme süresidir.

### Düzelttikten sonra ne kadar beklemeliyim?

Google’ın sayfayı yeniden taraması zaman alır; URL Denetleme ile dizine ekleme isteyip birkaç gün sonra durumu yeniden kontrol edin.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’nın işleyiş şekliyle ilgili ayrıntılı kılavuz](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Arama Merkezi: Site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
