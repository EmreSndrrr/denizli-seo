---
title: "Breadcrumb Nedir ve Nasıl Eklenir?"
description: "Breadcrumb (ekmek kırıntısı) nedir? Kullanıcıyı site hiyerarşisinde yönlendirir; BreadcrumbList yapılandırılmış verisi nasıl eklenir ve test edilir."
date: 2026-11-14
service: teknik-seo
imageAlt: "Ana sayfa, kategori ve yazı adımlarından oluşan breadcrumb gezinme yolu"
---

Breadcrumb (ekmek kırıntısı ya da içerik haritası), sayfanın site hiyerarşisindeki konumunu gösteren gezinme yoludur: “Ana sayfa › Blog › Yerel SEO › Bu yazı”. Kullanıcıya nerede olduğunu gösterir ve üst seviyelere tek tıkla dönmesini sağlar. Eklemek için sayfada görünür bir bağlantı zinciri kurar, istenirse `BreadcrumbList` yapılandırılmış verisiyle Google’a da bildirirsiniz; ardından Zengin Sonuçlar Testi ve URL Denetleme ile doğrularsınız.

Breadcrumb küçük bir öğe gibi görünür ama hem ziyaretçi deneyimi hem iç bağlantı açısından yararlıdır. Birkaç seviyeli sitelerde (blog kategorileri, e-ticaret kategorileri, hizmet grupları) ziyaretçinin kaybolmasını önler. Bu yazı, breadcrumb’ın ne işe yaradığını, hangi türlerinin olduğunu ve Google’ın yapılandırılmış veri belgesine dayanarak nasıl ekleneceğini anlatıyor. Site yapınızı birlikte kurmak isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Breadcrumb nedir?

Google’ın tanımına göre bir sayfadaki içerik haritası yolu, sayfanın site hiyerarşisindeki konumunu belirtir ve kullanıcıların bir siteyi etkili biçimde anlamasına ve keşfetmesine yardımcı olabilir; kullanıcı son öğeden başlayarak her seferinde bir seviye yukarı çıkıp hiyerarşinin en üstüne kadar gidebilir ([BreadcrumbList yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=tr)). Örnek yol:

`Ana sayfa › Blog › Yerel SEO › Google İşletme Profili Nasıl Açılır?`

Son öğe genellikle bulunduğunuz sayfadır ve bağlantı olmayabilir; öncekiler üst seviyelere giden bağlantılardır.

## Breadcrumb türleri

Üç yaklaşım vardır:

- **Hiyerarşi tabanlı:** Sitenin yapısını yansıtır (Ana sayfa › Hizmetler › Yerel SEO). En yaygın ve en kararlı olandır.
- **Özellik/nitelik tabanlı:** E-ticarette seçilen filtreleri gösterir (Ayakkabı › Siyah › 42 numara).
- **Geçmiş tabanlı:** Kullanıcının gezinme sırasını gösterir. Her ziyaretçide farklı olduğu için SEO açısından önerilmez.

SEO için hiyerarşi tabanlı breadcrumb kullanın; sitenin mantıklı yapısını yansıtır ve herkese aynı görünür.

## Breadcrumb ne işe yarar?

- **Kullanıcı deneyimi:** Ziyaretçi nerede olduğunu anlar, üst kategoriye kolayca döner.
- **İç bağlantı:** Her sayfadan üst kategorilere ve ana sayfaya açıklayıcı bağlantı sağlar; sitenin yapısını güçlendirir. İç bağlantı stratejisi için [küçük siteler için iç bağlantı rehberi](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/) yazısına bakın.
- **Arama sonucu görünümü:** Yapılandırılmış veri doğru eklenirse Google sayfanın yolunu arama sonucunda gösterebilir; bunun gösterileceği garanti değildir.
- **Site yapısını netleştirme:** Breadcrumb planlamak, mantıklı bir hiyerarşi kurmaya zorlar. Yapı planı için [menü ve site yapısı nasıl planlanır?](/blog/menu-ve-site-yapisi-nasil-planlanir/) yazısına bakın.

Önemli not: Google’ın belgesine göre bu özellik masaüstü cihazlarda kullanılabilir ve Google Arama’nın kullanılabildiği tüm bölge ve dillerdedir. Mobil görünüm farklı olabilir; yapılandırılmış veriyi yine de eklemek zarar vermez, çünkü sayfanın yapısını Google’a açıkça bildirir ve görünür yolla uyumlu tutulduğunda tutarlılık sağlar.

## Sayfada görünür breadcrumb nasıl kurulur?

Önce kullanıcıya görünen bağlantı yolunu kurun:

1. **Hiyerarşiyi belirleyin:** Ana sayfa, kategoriler ve alt sayfalar mantıklı bir ağaç oluşturmalı.
2. **Her seviyeye bağlantı verin:** Son öğe dışındaki tüm adımlar gerçek bağlantı (`<a href>`) olmalı. Google yalnızca `href` özelliği olan `<a>` öğelerini tarayabilir ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)).
3. **Ayırıcı kullanın:** Öğeler arasında “›” ya da “/” gibi görsel bir ayırıcı olsun.
4. **Başlığın üstüne ya da altına koyun:** Sayfanın üst kısmında, ana başlıktan önce ya da hemen sonra görünür olsun.
5. **Mobilde okunur kılın:** Uzun yollar küçük ekranda taşmamalı; gerekirse yalnızca bir üst seviyeyi gösterin.
6. **Adımları sade adlandırın:** “Hizmetler”, “Blog”, “Yerel SEO” gibi kısa ve anlaşılır adlar.

WordPress gibi sistemlerde birçok tema ya da SEO eklentisi breadcrumb özelliği sunar; ayarlardan açabilirsiniz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## BreadcrumbList yapılandırılmış verisi

Görünür yolu Google’a işaretleyerek bildirmek için `BreadcrumbList` yapılandırılmış verisi kullanılır. Google’ın genel yapılandırılmış veri adımları ([BreadcrumbList belgesi](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=tr)):

1. **Zorunlu özellikleri ekleyin.** Kullandığınız biçime göre (JSON-LD, mikro veri vb.) verinin sayfada nereye ekleneceğini belgeden öğrenin. İçerik yönetim sistemi kullanıyorsanız entegre bir eklenti daha kolay olabilir.
2. **Yönergeleri uygulayın.** Zengin Sonuçlar Testi ile kodu doğrulayın ve kritik hataları düzeltin; kritik olmayan uyarıları düzeltmek kaliteyi artırır ama zengin sonuç uygunluğu için gerekli değildir.
3. **Birkaç sayfada deneyin.** Yapılandırılmış veri içeren birkaç sayfayı yayınlayıp URL Denetleme aracıyla Google’ın sayfayı nasıl gördüğünü test edin. Google’ın sayfaya erişebildiğinden ve robots.txt, noindex ya da giriş şartıyla engellenmediğinden emin olun.
4. **Yeniden tarama isteyin.** Sayfa düzgün görünüyorsa Google’dan URL’lerinizi yeniden taramasını isteyin; yeniden tarama ve dizine ekleme için zaman tanıyın (birkaç gün sürebilir).
5. **Site haritası gönderin.** Gelecekteki değişiklikler için site haritasını güncel tutun.

Önemli kural: yapılandırılmış veri, sayfada görünen breadcrumb ile uyumlu olmalıdır. Görünmeyen ya da farklı bir yolu işaretlemek yanıltıcıdır. Yapılandırılmış veriye genel giriş için [yapılandırılmış veri nedir?](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/) yazısına bakın.

## Örnek yapı (kavramsal)

BreadcrumbList, sıralı bir öğe listesinden oluşur: her öğenin bir sırası (position), adı (name) ve (son öğe hariç) adresi (item) vardır. Örneğin üç öğeli bir yol: 1. Ana sayfa (adres: ana sayfa), 2. Blog (adres: blog sayfası), 3. Yazı adı (son öğe). Kodun tam biçimi için Google’ın belgesindeki güncel örneği ve doğrulayıcıyı kullanın; belgeler zamanla güncellenebilir.

## Hiyerarşiyi nasıl planlarsınız?

İyi bir breadcrumb, iyi bir site yapısına dayanır:

- **Derinlik:** Önemli sayfalar ana sayfadan en fazla birkaç tıklamada ulaşılabilir olsun; çok derin hiyerarşi kullanıcıyı da arama motorunu da zorlar.
- **Kategori adları:** Kullanıcının anlayacağı sade adlar; “Genel” ya da “Diğer” gibi anlamsız kategorilerden kaçının.
- **Tek yol:** Bir sayfa birden çok kategoriye girebilir; breadcrumb’da birincil (ana) yolu gösterin.
- **Tutarlılık:** Menü, URL yapısı ve breadcrumb birbiriyle uyumlu olsun.
- **Kırıntı ve URL:** Breadcrumb’ı URL yapısına birebir bağlamak zorunda değilsiniz; ama uyumlu olması kullanıcıyı şaşırtmaz.

URL yapısı için [SEO uyumlu URL nasıl yazılır?](/blog/seo-uyumlu-url-nasil-yazilir-turkce-karakter-ve-uzunluk/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya mağazasının çevrimiçi sitesinde kategori yapısı üç seviyeli (Oturma Odası › Koltuk Takımları › Köşe Koltuk) ama sayfalarda gezinme yolu yok.

- **Karar:** Hiyerarşi tabanlı breadcrumb ekleniyor: Ana sayfa › Oturma Odası › Koltuk Takımları › Ürün adı.
- **Bağlantılar:** Son öğe dışındaki adımlar gerçek bağlantı; mobilde yalnızca bir üst seviye gösteriliyor.
- **Yapılandırılmış veri:** Görünen yolu yansıtan BreadcrumbList eklenip Zengin Sonuçlar Testi ile doğrulanıyor.
- **Kontrol:** URL Denetleme ile birkaç ürün sayfası test ediliyor ve yeniden tarama isteniyor.

Bu örnek bir sonuç vaadi değildir.

Breadcrumb eklendikten sonra birkaç hafta boyunca Search Console’da yapılandırılmış veri raporlarında hata ya da uyarı çıkıp çıkmadığını kontrol edin ve yeni kategori eklediğinizde yolu güncelleyin.

## Sık yapılan altı hata

1. **Geçmiş tabanlı breadcrumb kullanmak.**
2. **Üst seviyeleri bağlantı yapmamak.**
3. **Yapılandırılmış veriyi görünen yolla uyumsuz yazmak.**
4. **Çok derin ve anlamsız hiyerarşi kurmak.**
5. **Mobilde taşan uzun yol göstermek.**
6. **Doğrulama aracıyla test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Breadcrumb, site yapısının görünen yüzüdür. [Teknik SEO hizmetimizde](/teknik-seo/):

- site hiyerarşinizi ve kategori yapınızı gözden geçirir, breadcrumb planını hazırlarız,
- görünür gezinme yolunu ve BreadcrumbList yapılandırılmış verisini kurar, test ederiz,
- iç bağlantı, URL ve menü uyumunu sağlarız,
- sonuçları Search Console’da izler ve yazılı raporlarız.

Sitenize breadcrumb eklemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Breadcrumb SEO’ya yardımcı olur mu?

İç bağlantı ve site yapısını güçlendirir; Google yapılandırılmış veriyle sayfa yolunu arama sonucunda gösterebilir ama bunun garantisi yoktur.

### Breadcrumb zorunlu mu?

Zorunlu değil; ama çok seviyeli sitelerde (kategori, hizmet grupları, blog) kullanıcıya fayda sağlar.

### Yapılandırılmış veri şart mı?

Şart değil; görünür breadcrumb tek başına işe yarar. Yapılandırılmış veri Google’a yolu açıkça bildirir.

### Hangi breadcrumb türünü seçmeliyim?

Hiyerarşi tabanlı. Geçmiş tabanlı olanlar her ziyaretçide farklı olduğu için önerilmez.

### Doğru eklendiğini nasıl anlarım?

Zengin Sonuçlar Testi ile doğrulayın ve URL Denetleme ile Google’ın sayfayı nasıl gördüğünü kontrol edin.

## Kaynaklar

- [Google Arama Merkezi: İçerik haritası (BreadcrumbList) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=tr)
- [Google Arama Merkezi: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
