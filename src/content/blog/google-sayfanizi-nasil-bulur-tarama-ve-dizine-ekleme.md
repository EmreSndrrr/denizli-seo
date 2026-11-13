---
title: "Google Sayfanızı Nasıl Bulur? Tarama ve Dizine Ekleme"
description: "Google bir sayfayı nasıl keşfeder, tarar, dizine ekler ve sonuçlarda gösterir? Bağlantılar, site haritası, robots.txt ve noindex ile sürecin her adımı."
date: 2026-11-13
service: teknik-seo
imageAlt: "Bir sayfadan arama sonucuna uzanan tarama ve dizine ekleme akışı"
---

Google, sayfanızı üç aşamada işler: önce keşfedip tarar, sonra içeriği anlayıp dizine ekler, en sonda bir kullanıcı arama yaptığında uygun sonuçlar arasında gösterir. Google’ın kendi anlatımına göre tüm sayfalar her aşamadan geçmez; yani bir sayfanın yayında olması, aramada çıkacağı anlamına gelmez.

Bu yüzden “sitem neden görünmüyor?” sorusunun cevabı genellikle bu üç aşamadan birinde saklıdır. Sayfanız ya hiç bulunmamıştır, ya bulunmuş ama dizine alınmamıştır, ya da dizinde olup arama sonuçlarında geri planda kalmıştır. Bu yazı süreci adım adım ve Denizli’den örneklerle anlatıyor. Siteniz aramada hiç çıkmıyorsa [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Google Arama hangi üç aşamada çalışır?

Google’ın “Arama nasıl çalışır?” rehberi süreci şöyle özetler ([Google Arama’nın işleyişi](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)):

1. **Tarama:** Google, web’de yeni ve güncellenmiş sayfaları bulur ve içeriklerini indirir.
2. **Dizine ekleme:** Google sayfanın ne hakkında olduğunu anlamaya çalışır ve bilgiyi dizinine kaydeder.
3. **Arama sonuçlarını sunma:** Bir kullanıcı arama yaptığında Google dizinden en uygun sonuçları seçer.

Rehberdeki önemli iki not şudur: tüm sayfalar her aşamadan geçmez ve sıralama otomatik yapılır; Google, sayfaları daha üst sırada göstermek için ödeme kabul etmez. Bir sayfanın taranması, dizine eklenmesini garanti etmez; dizine eklenmesi de belirli bir sırada çıkacağını göstermez.

## Google sayfanızı nasıl keşfeder?

Google çoğu sayfayı başka sayfalardaki bağlantıları izleyerek bulur. Yeni bir sayfa için en sağlam yol, sitenizin içinden ona verilmiş bir bağlantıdır. İki yol daha vardır:

- **Site haritası:** Sayfa adreslerini listeleyen bir dosyadır; Google’ın yardım sayfalarına göre sayfalar doğru bağlandıysa Google genellikle sitenin büyük çoğunluğunu keşfeder, harita ise büyük, yeni ya da az dış bağlantılı sitelerde daha yararlıdır ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)).
- **Diğer sitelerden gelen bağlantılar:** Başka bir sitenin size verdiği bağlantı da keşfi kolaylaştırır.

Bağlantının tarayıcının izleyebileceği biçimde olması gerekir. Google, bağlantıyı yalnızca `href` özelliği olan bir `<a>` öğesi olduğunda tarayabileceğini belirtir ([SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Yalnızca betikle çalışan bir düğmenin arkasındaki sayfa bu yüzden gözden kaçabilir.

## Taramayı ne engelleyebilir?

Sayfa bulunsa bile taranamayabilir. En sık engeller şunlardır:

- **robots.txt kuralları.** Yanlış bir `Disallow` satırı bütün bir klasörü Google’a kapatabilir. Dosya düz metin olmalı, `robots.txt` adını taşımalı ve sitenin kök dizininde bulunmalıdır ([robots.txt oluşturma](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=tr)).
- **Giriş şartı.** Şifre arkasındaki sayfalar taranamaz.
- **Yavaş ya da hatalı sunucu.** Sunucu sık sık hata dönerse tarama aksar.
- **Hiçbir yerden bağlantı verilmemiş sayfa.** İçeriden bağlanmayan “yetim” sayfalar zor bulunur.

Bir sayfayı Google’dan saklamak için robots.txt yeterli değildir. Google bunu açıkça belirtir: robots.txt bir sayfayı Google’ın dışında tutma mekanizması değildir; bunun için `noindex` ya da şifre koruması kullanılır ([robots.txt’ye giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Dizine ekleme aşamasında ne olur?

Tarama bittikten sonra Google içeriği değerlendirir: metni, başlıkları, görselleri, bağlantıları ve sayfanın hangi konuda olduğunu çıkarır. Bu aşamada sayfa üç yoldan birine girer:

- **Dizine eklenir.** Arama sonuçlarında çıkabilir hâle gelir.
- **Dizine eklenmez.** Kalitesiz, kopya ya da yönergelerle engellenmiş sayfalar bu gruptadır.
- **Beklemeye alınır.** Google sayfayı görmüş ama henüz dizine almamış olabilir.

Mobil siteniz masaüstüyle aynı içeriği taşımalıdır; çünkü Google, dizine ekleme ve sıralama için sitenin akıllı telefon aracısıyla taranan mobil sürümünü kullanır ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Mobilde eksik kalan metin ya da görsel dizine girmeyebilir.

Dizine eklenmemiş sayfaların nedenleri için [taranan ama dizine eklenmeyen sayfalar](/blog/taranan-dizine-eklenmeyen-sayfalar-nedenleri/) ve [keşfedildi ama dizine eklenmedi](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/) yazılarımıza bakın.

## noindex ne işe yarar?

`noindex`, bir sayfayı arama sonuçlarından tamamen çıkarmanın doğru yoludur. Sayfaya `<meta name="robots" content="noindex">` etiketi ya da `X-Robots-Tag` yanıt başlığı eklenir. Google’a göre bunun işlemesi için sayfa robots.txt ile engellenmemeli ve erişilebilir olmalıdır; aksi hâlde Google etiketi göremez ([noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)).

Teşekkür sayfaları, iç arama sonuçları ve yönetim ekranları gibi aramada çıkmaması gereken sayfalar için uygundur. Ne zaman kullanılacağını [noindex nedir?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazısında anlattık.

## Sayfanızın dizine eklenip eklenmediğini nasıl öğrenirsiniz?

Tahmin etmek yerine Google’ın size gösterdiği araçları kullanın:

- **URL Denetleme Aracı:** Tek bir adresin Google dizinindeki durumunu gösterir; sayfanın dizine eklenip eklenemediğini kontrol edebilirsiniz ([URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)).
- **Sayfa dizine ekleme raporu:** Dizine eklenen URL’leri ve eklenmeyenlerle nedenlerini listeler ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).

Yeni yayınladığınız sayfa için URL Denetleme’yi kullanmanın adımları [Google’a dizine ekleme nasıl istenir?](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/) yazısında anlatılıyor.

## Arama sonuçlarına geçiş: dizinde olmak yetmez

Sayfanız dizinde olsa bile her aramada görünmez. Google, kullanıcının aramasına en uygun, yararlı ve güvenilir görünen sayfaları seçer. Bu aşamada içeriğin amaca uygunluğu, bağlantı yapısı ve sayfa deneyimi etkilidir. Garantili bir sıra yoktur; sıralama otomatik yapılır ve ücretle satın alınamaz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de yeni açılan bir diş kliniğinin siteye eklediği “İmplant” sayfası aramada görünmüyor.

- **Keşif:** Sayfa ana menüde yok ve sitede başka hiçbir yerden bağlantı almıyor; site haritasında da listelenmemiş.
- **Tarama:** robots.txt dosyası sayfayı engellemiyor; sayfa taranabilir durumda.
- **Dizine ekleme:** URL Denetleme sayfanın henüz dizinde olmadığını gösteriyor.
- **Çözüm:** Sayfa menüye ve ilgili hizmet sayfalarına bağlanıyor, site haritasına ekleniyor; birkaç gün sonra durum yeniden kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir; süre ve sonuç siteye göre değişir.

## Yeni sayfa yayınladıktan sonra yapılacaklar

1. Sayfayı sitede ilgili iki ya da üç sayfadan bağlayın.
2. Site haritasında yer aldığını kontrol edin.
3. robots.txt’nin sayfayı engellemediğinden emin olun.
4. URL Denetleme ile durumuna bakın.
5. Birkaç gün sonra sayfa dizine ekleme raporunda yeniden kontrol edin.

Sayfa dizine alınmadan önce tekrar tekrar talep göndermek hızlandırmaz; asıl işe yarayan, sayfanın bulunabilir ve değerli olmasıdır.

## Sık yapılan altı hata

1. **robots.txt ile sayfayı gizlediğini sanmak.** Gizlemek için `noindex` gerekir.
2. **Hem robots.txt ile engelleyip hem `noindex` eklemek.** Google etiketi göremez.
3. **Yeni sayfayı içeriden hiçbir yere bağlamamak.**
4. **Mobil sürümde içeriği eksik bırakmak.**
5. **Site haritasına noindex’li ya da yönlendirmeli adresleri koymak.**
6. **Dizinde olmayı sıralamayla karıştırmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Sayfalarınız bulunamıyor ya da dizine alınmıyorsa nedenini sırayla teşhis etmek gerekir. [Teknik SEO hizmetimizde](/teknik-seo/):

- robots.txt, site haritası ve noindex ayarlarınızı denetleriz,
- Search Console’da dizine eklenmeyen URL’leri ve nedenlerini çıkarırız,
- iç bağlantı yapınızı yetim sayfalar için gözden geçiririz,
- düzeltmeleri öncelik sırasıyla uygular ve sonuçları yazılı raporlarız.

Sitenizin neden görünmediğini öğrenmek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Google yeni sayfamı ne kadar sürede bulur?

Kesin bir süre yoktur. Sayfa sitenizden bağlandıysa ve site haritasında yer alıyorsa Google’ın bulması kolaylaşır; süre sitenin yapısına ve yayın düzenine göre değişir.

### Taranan her sayfa dizine eklenir mi?

Hayır. Google’ın rehberine göre tüm sayfalar her aşamadan geçmez. Kopya, düşük değerli ya da engellenmiş sayfalar dizine alınmayabilir.

### Site haritası şart mı?

Şart değil. Sayfalar doğru bağlandıysa Google genellikle siteyi keşfeder; küçük sitelerde gerekmeyebilir. Büyük, yeni ya da az bağlantılı sitelerde daha yararlıdır.

### robots.txt ile noindex arasındaki fark nedir?

robots.txt taramayı yönlendirir; noindex ise sayfanın arama sonuçlarında çıkmasını engeller. Bir sayfayı sonuçlardan çıkarmak için noindex kullanılır ve sayfanın taranabilir kalması gerekir.

### Sayfam dizinde ama neden ilk sayfada değil?

Dizinde olmak sıralama garantisi değildir. Sıralama otomatiktir; içeriğin arama amacına uygunluğu, bağlantılar ve sayfa deneyimi gibi birçok sinyale bağlıdır.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’nın işleyiş şekliyle ilgili ayrıntılı kılavuz](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr)
- [Google Arama Merkezi: Site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
- [Google Arama Merkezi: SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Google Arama Merkezi: Robots.txt dosyasına giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
