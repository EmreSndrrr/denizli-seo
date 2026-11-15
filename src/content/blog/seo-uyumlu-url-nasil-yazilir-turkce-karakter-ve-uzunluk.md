---
title: "SEO Uyumlu URL Nasıl Yazılır? Türkçe Karakter ve Uzunluk"
description: "SEO uyumlu URL nasıl yazılır? Kısa çizgi, açıklayıcı kelimeler, Türkçe karakter, yüzde kodlaması, büyük-küçük harf ve parametre kuralları."
date: 2026-11-14
service: teknik-seo
imageAlt: "Okunur bir URL ile kimlik numaralı karmaşık bir URL’nin karşılaştırması"
---

SEO uyumlu URL kısa, okunur ve açıklayıcı olmalıdır: kelimeleri kısa çizgiyle ayırın, uzun kimlik numaraları yerine konuyu anlatan sözcükler kullanın, büyük-küçük harf tutarlılığını koruyun ve gereksiz parametrelerden kaçının. Türkçe karakterlerde Google, kitlenizin dilinde kelime kullanmanızı önerir; ASCII olmayan karakterler bağlantılarda yüzde kodlaması gerektirir, bu yüzden pratikte çoğu site harfleri ASCII karşılığıyla (ş → s, ı → i) yazar.

URL, sayfanın adresidir ve hem ziyaretçi hem Google için ilk ipuçlarından biridir. İyi bir URL tutarlı biçimde kurulduğunda taramayı kolaylaştırır, kötü URL yapısı ise kopya adresler ve karışıklık yaratır. Bu yazı, Google’ın URL yapısı rehberindeki önerileri Türkçe bir işletme sitesi için uyarlıyor. Sitenizin adres yapısını düzenlemek isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## URL’nin kısımları

Bir adres üç ana kısımdan oluşur:

- **Alan adı:** `https://siteniz.com`
- **Yol (path):** `/hizmetler/yerel-seo/`
- **Parametreler:** `?sayfa=2&sirala=fiyat`

SEO açısından en çok önem taşıyan kısım yoldur: sayfanın konusunu ve site içindeki yerini anlatır. Alan adı seçimi için [alan adı seçimi: SEO için nelere bakılır?](/blog/alan-adi-secimi-seo-icin-nelere-bakilir/) yazısına bakabilirsiniz.

## Kural 1: Açıklayıcı kelimeler kullanın

Google’ın önerisi, URL’lerde uzun kimlik numaraları yerine okunaklı kelimeler kullanmaktır. Örnekler:

- İyi: `siteniz.com/hizmetler/yerel-seo/`
- Kötü: `siteniz.com/index.php?topic=42&area=3a5ebc944f41daa6f849f730f1`

Okunur URL, ziyaretçiye sayfanın ne hakkında olduğunu söyler; adres çubuğunda, arama sonucunda ve paylaşımlarda güven verir. Her yeni sayfa için adresi, sayfanın ana konusunu anlatan bir iki sözcükle yazın.

## Kural 2: Kelimeleri kısa çizgiyle ayırın

Google, URL’lerdeki kelimeleri ayırmak için alt çizgi (`_`) yerine kısa çizgi (`-`) kullanmanızı önerir; çünkü tireler kelime sınırını net gösterir. Geçmişe dayalı nedenlerle alt çizgi önerilmez. Kelimeleri birleştirmek de önerilmeyen bir uygulamadır:

- İyi: `/hali-yikama/`
- Kötü: `/hali_yikama/` ve `/haliyikama/`

## Kural 3: Türkçe karakterleri nasıl yazmalı?

Burada iki doğru bilgi birlikte düşünülmelidir:

1. Google, kitlenizin dilindeki kelimelerin URL’de kullanılmasını önerir (mümkünse harf çevirisi yaparak).
2. Standart gereği ASCII olmayan karakterler (ş, ğ, ı, ö, ü, ç gibi) bağlantılarda yüzde kodlaması kullanılarak yazılmalıdır; örneğin `gemüse` adresi `gem%C3%BCse` biçiminde kodlanır.

Pratik sonuç: Türkçe karakterleri URL’de ASCII karşılıklarıyla yazmak (örneğin `yerel-seo-hizmeti`, `hali-yikama`) en sorunsuz yoldur; adres okunur kalır, kopyalanıp mesajlaştığında bozulmaz ve kodlama hatası riski ortadan kalkar. Türkçe harfli adres kullanacaksanız bağlantılarda doğru yüzde kodlamasının uygulandığından emin olun. Tek bir sitede hangi yöntemi seçerseniz seçin, hepsinde aynısını kullanın; yarı yarıya karışık bırakmayın.

## Kural 4: Büyük/küçük harfe dikkat edin

Google, URL’lerin büyük/küçük harfe duyarlı olduğunu belirtir: `/APPLE` ve `/apple` farklı içeriklere sahip farklı URL’ler olarak değerlendirilir. Bu yüzden:

- Tüm URL’leri küçük harfle yazın.
- Büyük harfle yazılmış adresleri küçüğe yönlendirin.
- Sunucunuz büyük-küçük harfi aynı işliyorsa bile adresleri tek biçimde tutun ki kopya adres oluşmasın.

## Kural 5: Parametreleri azaltın ve doğru yazın

Google’ın önerileri:

- Parametre ayırıcı olarak `=` (anahtar/değer) ve `&` (ek parametre) kullanın; iki nokta üst üste ve köşeli parantez gibi karakterler önerilmez.
- Aynı anahtar için çok değer varsa virgül kullanılabilir (`renk=mor,pembe`).
- İçeriği değiştirmeyen gereksiz parametreleri (oturum, izleme kimlikleri) mümkün olduğunca URL’den çıkarın.
- İçeriği değiştirmek için `#` ile başlayan URL parçalarını kullanmayın; Google parçaları genellikle desteklemez. JavaScript kullanıyorsanız History API ile gerçek URL’ler üretin ([URL yapısı rehberi](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).

Parametreli filtre ve sıralama adresleri e-ticarette sorun yaratabilir; ayrıntı için [e-ticarette filtreli sayfalar SEO için nasıl yönetilir?](/blog/e-ticarette-filtreli-sayfalar-seo-icin-nasil-yonetilir/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## URL ne kadar uzun olmalı?

Google belirli bir uzunluk sınırı vermez; ama kısa ve anlaşılır adres her zaman daha iyidir. Pratik öneriler:

- Yolu en fazla birkaç kelimeyle sınırlayın; konuyu anlatan ana kelimeler yeterlidir.
- Başlığın tamamını URL’ye kopyalamayın; “nasıl”, “ve”, “için” gibi dolgu sözcükleri çıkarabilirsiniz.
- Klasör derinliğini makul tutun; her hiyerarşi seviyesi mantıklı bir ayrım olsun.
- Yıl, tarih ve sürüm numaraları gibi zamanla eskiyen unsurlardan kaçının.

Örnek: `siteniz.com/blog/seo-uyumlu-url-nasil-yazilir/` kısa ve anlaşılır; `siteniz.com/blog/2026/11/14/seo-uyumlu-url-nasil-yazilir-turkce-karakter-ve-uzunluk-rehberi-2026/` gereksiz uzundur.

## Hiyerarşi ve klasör yapısı

URL, site yapısını da yansıtabilir. Örneğin:

- `/hizmetler/` ana hizmet sayfası,
- `/hizmetler/yerel-seo/` bir hizmet,
- `/blog/` blog ve `/blog/seo-nedir/` yazı.

Bu yapı, ziyaretçinin ve Google’ın sayfanın nerede durduğunu anlamasını kolaylaştırır. Yapıyı bir kez kurup sık değiştirmeyin; her URL değişikliği yönlendirme gerektirir. Site yapısı için [menü ve site yapısı nasıl planlanır?](/blog/menu-ve-site-yapisi-nasil-planlanir/) yazısına bakın.

## Mevcut URL’leri değiştirmek: dikkat

URL’yi değiştirmek, bir sayfanın adresini değiştirmek demektir ve doğru yapılmazsa sıralama ve bağlantı değeri kaybolabilir. Kural: gerçekten gerekmedikçe çalışan URL’yi değiştirmeyin. Gerekiyorsa:

1. Eski adresten yeni adrese kalıcı yönlendirme (301) kurun.
2. İç bağlantıları, site haritasını ve canonical etiketlerini yeni adrese güncelleyin.
3. Yönlendirme zinciri oluşturmayın.
4. Search Console’da eski ve yeni adresin durumunu birkaç hafta izleyin.

Google, kalıcı yönlendirmenin hedefin standart olması yönünde sinyal verdiğini belirtir ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)). Ayrıntı için [301 ve 302 yönlendirme farkı](/blog/301-ve-302-yonlendirme-farki-nedir/) yazısına bakın.

## Tek adres kuralı

Aynı içerik birden fazla adreste açılmamalıdır: `http` ve `https`, `www` ve `www`’suz, eğik çizgili ve çizgisiz, büyük ve küçük harfli sürümler. Hepsi tek bir standart adrese yönlendirilmeli. Bu, kopya adres sorununu önler ve bağlantı değerini toplar. Ayrıntı için [www ve www’suz adres: tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir halı yıkama firmasının sitesinde adresler `siteniz.com/?p=348`, `siteniz.com/Hizmetlerimiz/Hali_Yikama.html` gibi dağınık.

- **Hedef yapı:** `/hizmetler/hali-yikama/`, `/hizmetler/koltuk-yikama/`, `/blog/hali-nasil-yikanir/`.
- **Kurallar:** Küçük harf, kısa çizgi, ASCII karakter, gereksiz parametre yok.
- **Geçiş:** Eski adresler 301 ile yenilerine yönlendiriliyor; iç bağlantılar ve site haritası güncelleniyor.
- **Kontrol:** Search Console’da birkaç hafta yönlendirme ve dizine ekleme durumu izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Kimlik numaralı ve anlamsız adresler kullanmak.**
2. **Alt çizgi ya da birleşik kelimeler yazmak.**
3. **Büyük ve küçük harfli sürümleri aynı anda açık bırakmak.**
4. **Türkçe karakterleri sitede tutarsız kullanmak.**
5. **Gereksiz parametreleri adreste bırakmak.**
6. **URL’yi yönlendirmeden değiştirmek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Temiz bir URL yapısı, sitenin geri kalanını kolaylaştırır. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin adres yapısını denetler, kopya ve gereksiz adresleri çıkarırız,
- Türkçe karakter, harf, tire ve parametre kurallarını tek standarda bağlarız,
- gerekli değişikliklerde yönlendirme, iç bağlantı ve site haritası güncellemelerini yaparız,
- sonuçları Search Console’da izler ve yazılı raporlarız.

Adres yapınızı düzenlemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### URL’de Türkçe karakter kullanmalı mıyım?

Google kitlenizin dilinde kelime kullanmanızı önerir; ama ASCII olmayan karakterler yüzde kodlaması ister. Pratikte ASCII karşılıklarıyla yazmak (ş → s) en sorunsuz yoldur.

### URL’de tire mi alt çizgi mi?

Tire (-). Google alt çizgi kullanılmasını önermez.

### URL ne kadar uzun olmalı?

Sabit sınır yoktur; kısa ve açıklayıcı olsun, gereksiz sözcükleri çıkarın.

### Büyük harf kullanırsam ne olur?

Google büyük/küçük harf farkını ayrı URL sayar; kopya adres riski için hepsini küçük yazın.

### URL değiştirmek sıralamayı düşürür mü?

Yönlendirme doğru kurulmazsa değer kaybı olabilir; kalıcı yönlendirme, iç bağlantı güncellemesi ve izleme ile risk azalır.

## Kaynaklar

- [Google Arama Merkezi: Google Arama için URL yapısıyla ilgili en iyi uygulamalar](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Arama Merkezi: E-ticaret web siteleri için URL yapısı tasarlama](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=tr)
