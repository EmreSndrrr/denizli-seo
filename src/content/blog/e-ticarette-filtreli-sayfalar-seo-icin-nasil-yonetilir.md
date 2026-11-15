---
title: "E-Ticarette Filtreli Sayfalar SEO İçin Nasıl Yönetilir?"
description: "E-ticarette filtre ve sıralama URL’leri SEO’yu nasıl etkiler? Google’ın önerisi: gereksiz kombinasyonları taramaya kapatın, değerli filtreleri dizinde tutun."
date: 2026-11-14
service: teknik-seo
imageAlt: "Kategori sayfasında renk, beden ve fiyat filtreleriyle oluşan çok sayıda URL kombinasyonu"
---

E-ticarette filtreli (faceted) sayfaları yönetmenin özü şudur: her filtre kombinasyonu yeni bir URL üretir ve bu URL’ler sınırsızca çoğalabilir. Google’ın önerisi, dizine eklenmesine ihtiyaç duymadığınız filtre URL’lerinin taranmasını engellemek (çoğunlukla robots.txt ile) ve gerçekten arama değeri taşıyan birkaç filtre sayfasını (ör. “siyah deri ayakkabı”) temiz ve tutarlı URL’lerle dizinde tutmaktır.

Filtreler kullanıcı için çok yararlıdır; ama kontrol edilmezse Google’ın tarama bütçesini tüketir, kopya sayfa yığını yaratır ve önemli ürünlerin keşfini yavaşlatır. Bu yazı, filtre ve sıralama sayfalarına karar verme sürecini Google’ın belgelerine dayanarak anlatıyor. E-ticaret sitenizin teknik yapısını birlikte düzenlemek isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Filtreli gezinme neden sorun yaratır?

Google’ın filtreli gezinme belgesine göre bu özellik popüler ve faydalıdır; ancak URL parametrelerine dayalı en yaygın uygulaması sonsuz URL alanları oluşturabilir ve iki zararı vardır ([filtreli gezinme URL’lerinin taranmasını yönetme](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation?hl=tr)):

- **Aşırı tarama:** Filtre URL’leri yeni gibi görünür; tarayıcı faydalı olup olmadığını taramadan belirleyemez ve çok sayıda gereksiz URL’ye erişir.
- **Daha yavaş keşif:** Tarama bütçesi faydasız URL’lerde harcanınca yeni ve faydalı URL’ler için kalan zaman azalır.

Belge, bu URL’lerin taranmasının sitelere büyük miktarda bilgi işlem maliyeti çıkardığını da hatırlatır. Örneğin `?renk=siyah&beden=42&fiyat=1000-2000&sirala=fiyat` gibi bir adreste her parametrenin değişimi farklı bir URL üretir ve kombinasyon sayısı hızla yüzbinleri bulabilir.

## Önce karar: hangi filtre sayfaları dizinde olmalı?

Her filtre sayfası dizine girmeye değer değildir. Karar için üç soru:

1. **İnsanlar bu kombinasyonu arıyor mu?** “Siyah deri ayakkabı” gibi aranan bir ifadeyse değerlidir; “fiyata göre artan” sıralaması değildir.
2. **Sayfa kendi başına yararlı mı?** Yeterli sayıda ürün ve anlamlı bir başlık/açıklama taşıyor mu?
3. **Mevcut kategori sayfası aynı işi görüyor mu?** Görüyorsa filtre sayfası kopya olur.

Genel kural: dizine girecek filtre sayfaları az sayıda ve bilinçli seçilmiş olmalı; geri kalanı taranmamalı ya da dizinden uzak tutulmalıdır. Aranan ifadeleri bulmak için [anahtar kelime analizi nasıl yapılır?](/blog/anahtar-kelime-analizi/) yazısına bakabilirsiniz.

## Seçenek 1: Dizine ihtiyaç yoksa taramayı engelleyin

Google’ın birinci önerisi, filtre URL’lerinin dizine eklenmesine ihtiyacınız yoksa taranmasını engellemektir. Belgedeki yöntem robots.txt kullanmaktır: filtre parametrelerini içeren URL’leri `Disallow` ile kapatıp, filtresiz tam listeleme sayfasını ve ürün sayfalarını taramaya açık bırakırsınız. Belgedeki örnek yapı şöyledir:

- `user-agent: Googlebot`
- `disallow: /*?*products=`
- `disallow: /*?*color=`
- `disallow: /*?*size=`
- `allow: /*?products=all$`

Filtrelenmiş öğeler çoğu zaman sunucu kaynaklarını fayda sağlamadan tükettiğinden, Google çoğu zaman bu öğelerin taranmasına izin vermenize gerek olmadığını söyler; bunun yerine yalnızca öğe sayfalarının taranmasına izin verilir. Önemli: robots.txt sayfayı dizinden silmez; taramayı engeller. Mevcut dizine girmiş URL’leri temizlemek ayrı bir süreçtir. Dosya kuralları için [robots.txt nedir, nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazısına bakın.

## Seçenek 2: URL parçası (#) ile filtreleme

Google belgesi, filtreleri belirtmek için URL parametreleri yerine URL parçalarının (`#`) kullanılabileceğini söyler; çünkü Google Arama genellikle tarama ve dizine ekleme işlemlerinde URL parçalarını desteklemez, yani tarama üzerinde olumlu ya da olumsuz bir etkisi olmaz. Filtreleme mekanizmanız bu yapıyı destekliyorsa tarama yükünü azaltmanın bir yoludur. Dikkat: bu yaklaşım filtre sayfalarını arama sonuçlarında göstermek istediğiniz durumlar için uygun değildir.

## Seçenek 3: canonical ve nofollow (daha zayıf yöntemler)

Belgeye göre `rel="canonical"` ve bağlantılarda `rel="nofollow"` kullanmak da tercihinizi belirtmenin yollarıdır; ancak bu yöntemler uzun vadede robots.txt gibi doğrudan yöntemlere kıyasla genellikle daha az etkilidir.

- **canonical:** Filtreli sayfanın standart sürümünü (örneğin filtresiz kategori sayfasını) göstermek, zamanla standart olmayan sürümlerin tarama hacmini düşürebilir. Belgedeki örnekte filtreli adres, filtresiz sürüme işaret eder ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)).
- **nofollow:** Filtrelenmiş sayfalara giden bağlantılarda `rel="nofollow"` faydalı olabilir; ama etkili olması için o URL’ye giden her bağlantıda bulunması gerekir.

Bu yüzden önce sorunun kaynağında (URL üretimi) çözüm arayın; canonical ve nofollow’u tamamlayıcı olarak kullanın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Seçenek 4: Değerli filtreleri dizinde tutun

Bazı filtre sayfaları gerçek arama değeri taşır ve dizinde olmalıdır. Bunlar için Google’ın en iyi uygulamalarını izleyin:

- **URL biçimi:** Parametre ayırıcı olarak endüstri standardı `&` karakterini kullanın; virgül, noktalı virgül ve köşeli parantez gibi karakterler tarayıcılar için ayırıcı olarak algılanması zor karakterlerdir.
- **Tutarlılık:** Filtreleri URL yoluna kodluyorsanız mantıksal sıranın her zaman aynı olmasını sağlayın (ör. her zaman renk sonra beden).
- **Açıklayıcı adresler:** Google, URL yollarında açıklayıcı kelimeler önerir; `/ayakkabi/siyah-deri` gibi okunur adresler `?id=3243`ten iyidir ([e-ticaret URL yapısı](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=tr)).
- **Benzersiz başlık ve açıklama:** Dizinde kalacak her filtre sayfasına kendi başlığını, kısa metnini ve ürün listesini verin.
- **Sonuç yoksa:** Hiç ürün döndürmeyen filtre kombinasyonları boş bir 200 sayfası yerine uygun bir yanıt vermeli (soft 404 sorunu için [soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/) yazısına bakın).

Belge ayrıca aynı parametreleri iki kez kullanmaktan kaçınmayı, büyük/küçük harf tutarlılığını ve sayfalamada her sayfaya benzersiz URL verilmesini önerir.

## Sıralama ve görünüm parametreleri

Fiyata göre sırala, sayfa başına ürün sayısı ve liste/ızgara görünümü gibi parametreler aynı ürün kümesinin farklı dizilimini gösterir; kendi başlarına arama değeri taşımazlar. Bunlar için genellikle taramayı engellemek ya da canonical ile ana listeye bağlamak doğru yaklaşımdır. Google’ın belirttiği gibi alternatif URL sayısını mümkün olduğunca azaltmak, gereksiz isteği ve tarama maliyetini düşürür. Sayfalama için ayrıca [kategori ve liste sayfalarında sayfalama SEO’su](/blog/kategori-ve-liste-sayfalarinda-sayfalama-seo-su/) yazısına bakın.

## Uygulama planı: adım adım

1. **Envanter:** Sitenizdeki filtre ve sıralama parametrelerini listeleyin.
2. **Mevcut durum:** Search Console’da sayfa dizine ekleme raporuna bakın: filtre adresleri dizinde mi?
3. **Karar:** Hangi filtreler arama değeri taşıyor? Bunları “dizinde kalacak” listesine alın.
4. **Engelleme:** Geri kalan parametreleri robots.txt ile taramaya kapatın (önce test ortamında deneyin).
5. **Değerli sayfalar:** Seçilen filtre sayfalarına temiz URL, benzersiz başlık ve metin verin.
6. **Bağlantılar:** Kategori sayfalarından değerli filtre sayfalarına açıklayıcı bağlantı verin.
7. **İzleme:** Birkaç hafta Search Console’da tarama istatistiklerini ve dizine ekleme raporunu izleyin.

Yanlış bir robots.txt kuralı önemli sayfaları da kapatabilir; her değişikliği küçük adımlarla ve kontrolle yapın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ayakkabı mağazasının çevrimiçi sitesinde renk, beden, fiyat ve sıralama filtreleri on binlerce URL üretiyor.

- **Tespit:** Search Console’da filtreli adreslerin büyük bölümü “dizine eklenmedi” ya da “taranan, dizine eklenmeyen” görünüyor.
- **Karar:** Yalnızca “marka + ürün türü” ve “renk + ürün türü” kombinasyonları aranıyor; beden, fiyat ve sıralama filtreleri değer taşımıyor.
- **Uygulama:** Beden, fiyat ve sıralama parametreleri robots.txt ile kapatılıyor; seçilen iki filtre türü için temiz URL ve kısa metin hazırlanıyor.
- **İzleme:** Birkaç hafta sonra tarama yükü ve dizine eklenen sayfalar karşılaştırılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Tüm filtre kombinasyonlarını dizine açık bırakmak.**
2. **robots.txt’yi sayfayı dizinden silmek için kullanmak.**
3. **Hem robots.txt ile engelleyip hem noindex vermek (etiket görülmez).**
4. **Filtre sırasını URL’de tutarsız bırakmak.**
5. **Boş sonuçlu filtre sayfalarına 200 döndürmek.**
6. **Değişiklik sonrası tarama ve dizine ekleme raporunu izlememek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Filtre yönetimi, e-ticaret SEO’sunun teknik temelidir. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki filtre ve sıralama parametrelerini envanterler, dizindeki etkilerini analiz ederiz,
- hangi filtre sayfalarının dizinde kalacağına arama verisiyle karar veririz,
- robots.txt, canonical ve URL düzenlemelerini güvenli biçimde uygularız,
- tarama ve dizine ekleme sonuçlarını izler, yazılı raporlarız.

E-ticaret sitenizin filtre yapısını incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Filtreli sayfaları dizine eklemeli miyim?

Yalnızca gerçekten arama değeri taşıyan, yeterli ürünlü ve benzersiz başlıklı birkaç kombinasyonu; geri kalanını taramaya kapatın.

### Filtre sayfaları için canonical yeterli mi?

Google’a göre canonical uzun vadede robots.txt gibi doğrudan yöntemlere kıyasla daha az etkilidir; tamamlayıcı olarak kullanın.

### robots.txt filtre sayfalarını dizinden siler mi?

Hayır; taramayı engeller. Dizine girmiş URL’lerin temizlenmesi ayrı bir süreçtir.

### URL’de `#` ile filtreleme yapmak doğru mu?

Google genellikle URL parçalarını tarama ve dizine ekleme için desteklemez; filtre sayfalarının dizine girmesini istemiyorsanız tarama yükünü azaltmanın bir yoludur.

### Filtre sayfalarının tarama maliyeti gerçekten önemli mi?

Evet; Google, filtreli URL’lerin taranmasının büyük bilgi işlem maliyeti çıkardığını ve yeni URL’lerin keşfini yavaşlatabileceğini belirtir.

## Kaynaklar

- [Google Arama Merkezi: Filtreli (faceted) gezinme URL’lerinin taranmasını yönetme](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation?hl=tr)
- [Google Arama Merkezi: E-ticaret web siteleri için URL yapısı tasarlama](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=tr)
- [Google Arama Merkezi: Standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Arama Merkezi: Robots.txt dosyasına giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
