---
title: "İçindekiler Tablosu Nasıl Hazırlanır? Uzun Sayfa Rehberi"
description: "İçindekiler tablosu nasıl hazırlanır? Uzun sayfalarda sayfa içi bağlantı, başlık kimlikleri, mobil kullanım ve SEO açısından dikkat edilecekler."
date: 2026-11-19
service: icerik-seo
imageAlt: "Uzun bir makalenin üstündeki içindekiler listesi ve başlıklara inen bağlantılar"
---

İçindekiler tablosu, uzun bir sayfanın başlıklarını tek bir listede toplayan ve her başlığa tıklanabilir bağlantı veren bir gezinme aracıdır. Okuyucu aradığı bölüme hızla gider; sayfanın yapısı bir bakışta anlaşılır. Doğru hazırlanması için başlıkların net olması, her başlığa benzersiz bir kimlik (id) verilmesi, listenin gerçek bağlantılarla kurulması ve mobilde okunabilir kalması yeterlidir.

Bu yazıda içindekiler tablosunun ne zaman gerektiğini, adım adım nasıl kurulacağını, SEO ile ilişkisini ve sık yapılan hataları anlatıyoruz. Başlık yapısının temeli için [H1, H2, H3: başlık yapısı nasıl kurulur?](/blog/h1-h2-h3-baslik-yapisi-nasil-kurulur/), içerik tarafındaki desteğimiz için [içerik SEO hizmeti](/icerik-seo/) sayfamıza bakabilirsiniz.

## İçindekiler tablosu ne zaman gerekir?

Her sayfaya gerekmez. Şu durumlarda işe yarar:

- **Sayfa uzunsa.** Birkaç ekran uzunluğundaki rehber, karşılaştırma ya da kılavuz yazıları.
- **Okuyucular belirli bölümü arıyorsa.** Sık sorulan sorular, fiyat etkenleri, adım adım rehber gibi.
- **Sayfada çok sayıda H2 varsa.** Altı yedi bölümlü yazılarda başlıklar bir bakışta görünür.

Kısa hizmet sayfalarında ya da üç dört paragraflık yazılarda içindekiler tablosu gereksizdir; yer kaplar ve içeriği ertelemiş gibi görünür. Okuyucu sayfaya girdiğinde ilk gördüğü şey soruya cevap olmalıdır; tablo, cevabın önüne geçmemelidir.

## Tablo hangi bileşenlerden oluşur?

İçindekiler tablosunun iki parçası vardır:

1. **Liste.** Sayfanın başında yer alan, her başlık için bir bağlantı içeren liste.
2. **Hedefler.** Sayfadaki her başlığın benzersiz bir kimliği (id); liste bağlantıları bu kimliğe gider.

Basit bir örnek:

```html
<nav aria-label="İçindekiler">
  <ol>
    <li><a href="#neden">Neden gerekir?</a></li>
    <li><a href="#nasil">Nasıl hazırlanır?</a></li>
  </ol>
</nav>

<h2 id="neden">Neden gerekir?</h2>
<h2 id="nasil">Nasıl hazırlanır?</h2>
```

Bağlantı hedefi `#neden`, başlığın `id="neden"` değeriyle eşleşir. Tıklayınca tarayıcı o başlığa kayar. Birçok içerik yönetim sistemi ve eklenti bu işi otomatik yapar; yine de çıktıyı kontrol edin.

> **Hizmet almak için iletişime geçin.** Uzun içeriklerinizi okunur ve gezilebilir hâle birlikte getirelim. [İçerik SEO hizmetimizi](/icerik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım nasıl hazırlanır?

1. **Başlık hiyerarşisini düzeltin.** İçindekiler, başlık yapısını gösterir; H2 ve H3’ler tutarlı olmalıdır. Hiyerarşi bozuksa tablo da karışık görünür.
2. **Başlıkları açık yazın.** “Giriş”, “Devam” gibi belirsiz başlıklar yerine içeriği anlatan başlıklar kullanın.
3. **Her başlığa benzersiz bir id verin.** Türkçe karakter ve boşluk içermeyen, kısa ve anlamlı kimlikler tercih edin; aynı kimlik iki kez kullanılmamalı.
4. **Listeyi gerçek bağlantılarla kurun.** `<a href="#id">` biçimi yeterlidir.
5. **Listeyi sayfanın üstüne, ama cevabın altına koyun.** İlk paragraf soruyu cevaplasın; tablo ondan sonra gelsin.
6. **Uzun listeleri sınırlayın.** Genellikle yalnızca H2 başlıklarını gösterin; H3’leri de eklerseniz liste şişer.
7. **Test edin.** Her bağlantıya tıklayıp doğru başlığa gittiğinden emin olun.

## SEO açısından ne işe yarar?

İçindekiler tablosu doğrudan sıralama sağlamaz. Dolaylı faydaları vardır:

- **Okuyucu deneyimi.** Hızlı gezinme, sayfada kalma ve doğru bölüme ulaşma olasılığını artırır.
- **Sayfa yapısının netleşmesi.** Tablo oluşturmak için başlıkları gözden geçirmek, içeriğin mantığını da iyileştirir.
- **İç bağlantı.** Sayfa içi bağlantılar sayfanın bölümlerini birbirine bağlar.

Google’ın bağlantılar rehberi, bağlantıların taranabilmesi için `href` özelliği olan `<a>` öğeleriyle kurulmasını önerir ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). İçindekiler listesini de gerçek `<a href>` bağlantılarıyla kurun; yalnızca JavaScript’le çalışan, `href` içermeyen düğmeler bu amaca uygun değildir. Bağlantı yapısının ayrıntısı için [Google’ın takip edebileceği bağlantılar: href ve onclick](/blog/googlein-takip-edebilecegi-baglantilar-href-onclick/) yazısına bakabilirsiniz.

## Arama sonuçlarında sayfa içi bağlantı görünür mü?

Bazı aramalarda Google, bir sonuçta sayfanın belirli bölümlerine giden ek bağlantılar gösterebilir. Bu bağlantılar sayfa içi bölümlerden türetilir; ama görünüp görünmeyeceği Google’ın kararıdır ve içindekiler tablosu kurmak bunu garanti etmez. Bu yüzden tabloyu “arama sonucunda alt bağlantı kazanmak” için değil, okuyucu için hazırlayın.

## Mobilde nasıl kullanılır?

Telefonda uzun bir içindekiler listesi ekranın büyük bölümünü kaplayabilir. Şunlara dikkat edin:

- Listeyi **kapatılıp açılabilir** yapmayı düşünün; varsayılan olarak kapalı olsun ya da yalnızca H2’leri göstersin.
- Bağlantıların **dokunma alanı** yeterli olsun; yan yana sıkışmış küçük bağlantılar tıklanmaz.
- Sayfa başlığının **sabit bir üst çubuk** altında kalmaması için bağlantı kaydırma ofsetini ayarlayın; aksi hâlde başlık çubuğun arkasında kalabilir.
- Klavye ve ekran okuyucu kullanıcıları için listeyi `nav` öğesi içine alıp `aria-label` verin ([web sitesi erişilebilirliği: temel kurallar](/blog/web-sitesi-erisilebilirligi-temel-kurallar/)).

Sekme ya da akordeon içine saklanan bölümlerde başlıkların taranabilirliğine ayrıca bakın ([sekme ve akordeon içindeki metinleri Google görür mü?](/blog/sekme-ve-akordeon-icindeki-metinleri-google-gorur-mu/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir muhasebe bürosu “KOBİ’ler için e-defter rehberi” adlı uzun bir yazı hazırlıyor. Yazının sekiz H2 başlığı var; ilk bakışta okuyucu hangi bölümde ne olduğunu göremiyor.

Büro yazının başına, ilk paragrafın altına H2 başlıklarının listelendiği bir içindekiler tablosu ekliyor. Her başlığa kısa ve Türkçe karaktersiz bir id veriliyor. Telefonda sabit üst menü başlıkları örttüğü için kaydırma ofseti ayarlanıyor. Tablonun yanlış başlığa götüren iki bağlantısı test sırasında düzeltiliyor. Bu örnek bir sonuç vaadi değildir; hazırlık sırasını gösterir.

## Sık yapılan hatalar

1. **Her sayfaya içindekiler eklemek.** Kısa sayfalarda gereksizdir.
2. **Tabloyu cevabın önüne koymak.** Okuyucu önce soruya cevap bulmalı.
3. **Aynı id’yi iki başlıkta kullanmak.** Bağlantı yanlış yere gider.
4. **Başlık hiyerarşisini bozuk bırakmak.** Tablo karışık ve anlamsız görünür.
5. **Bağlantıları JavaScript düğmesi yapmak.** Gerçek `<a href>` kullanın.
6. **Mobilde test etmemek.** Sabit çubuk başlıkları örtebilir; liste ekranı kaplayabilir.
7. **Sonucu garanti sanmak.** Alt bağlantıların arama sonuçlarında çıkması Google’ın kararıdır.

## Kurulum için kontrol listesi ve sistem notları

Şunları tek tek kontrol edin:

- Sayfada tek bir H1 var ve H2’ler mantıklı bir sırayla ilerliyor mu?
- Her H2’nin benzersiz, Türkçe karaktersiz ve kısa bir id’si var mı?
- İçindekiler listesi yalnızca H2’leri mi gösteriyor, gereksiz uzunlukta mı?
- Her bağlantı doğru başlığa gidiyor mu?
- Telefonda sabit üst çubuk başlıkları örtüyor mu?
- Liste `nav` içinde ve `aria-label` ile etiketlenmiş mi?

Sistem notları: WordPress’te birçok SEO ve içerik eklentisi başlık kimliklerini ve içindekiler listesini otomatik üretebilir; çıktıyı mutlaka kontrol edin. Markdown kullanan statik sitelerde başlıklara otomatik kimlik veren eklentiler bulunur; kimliklerin Türkçe karakterleri nasıl dönüştürdüğüne bakın. Özel kodlanmış sitelerde yazılımcıdan, başlıklardan listeyi otomatik üreten küçük bir bileşen isteyin. Üretim ne olursa olsun, yayından sonra rastgele üç bağlantıya tıklamak, bozuk kimlik sorunlarını hemen ortaya çıkarır.

## Denizli SEO bu konuda nasıl yardımcı olur?

[İçerik SEO hizmetimizde](/icerik-seo/):

- uzun içeriklerinizin başlık hiyerarşisini düzenler, gerektiğinde içindekiler tablosu kurarız,
- bağlantıların gerçek `href` bağlantıları olduğunu ve doğru başlığa gittiğini test ederiz,
- mobilde okunabilirliği ve erişilebilirliği kontrol ederiz,
- sonuç vaat etmeden, sayfaların görünürlüğünü Search Console ile izleriz.

Uzun içeriklerinizi birlikte gözden geçirmek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Uzun içeriklerinizi gezilebilir hâle getirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [içerik SEO sayfamızda](/icerik-seo/) yazılı.

## Sık sorulan sorular

### İçindekiler tablosu sıralamayı yükseltir mi?

Doğrudan sıralama sağlamaz. Okuyucu deneyimini ve sayfa yapısını iyileştirerek dolaylı fayda sağlayabilir.

### Her yazıda içindekiler olmalı mı?

Hayır. Uzun ve çok bölümlü yazılarda anlamlıdır; kısa sayfalarda gereksizdir.

### Eklenti kullanmalı mıyım?

Birçok sistemde eklenti ya da tema özelliği bu işi otomatik yapar. Kullanıyorsanız çıktıyı kontrol edin: bağlantılar gerçek `href` içeriyor mu, kimlikler benzersiz mi?

### Arama sonuçlarında “bu sayfada” bağlantıları çıkar mı?

Google bazı sonuçlarda sayfa içi bölümlere bağlantı gösterebilir; ama bu garanti edilemez ve içindekiler tablosu kurmak bunun koşulu değildir.

### İçindekiler tablosunu hangi başlıklarla kurmalıyım?

Genellikle yalnızca H2 başlıklarıyla. H3’leri eklerseniz liste uzar; çok uzun sayfalarda iç içe bir yapı kullanabilirsiniz.

## Kaynaklar

- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
