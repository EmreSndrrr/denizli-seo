---
title: "Astro Sitelerde SEO Ayarları Nasıl Yapılır?"
description: "Astro sitelerde SEO ayarları nasıl yapılır? Başlık, kanonik adres, site haritası, robots.txt, yapılandırılmış veri, görsel ve hız için kontrol listesi."
date: 2026-11-15
service: web-tasarim
imageAlt: "Statik site yapısında SEO ayarlarının kontrol listesi"
---

Astro gibi statik çıktı üreten bir sistemde SEO’nun temeli kolaydır: sayfalar derleme sırasında hazır HTML olarak üretilir, yani Google içeriği JavaScript çalıştırmadan da görür. Yine de her şey kendiliğinden gelmez. Her sayfa için başlık, açıklama, kanonik adres, site haritası, robots.txt, yapılandırılmış veri ve görsel boyutlarını sizin tanımlamanız gerekir. En güvenli yol, bu alanları tek bir ortak baş (head) bileşeninde toplamak ve her sayfanın o bileşene doğru veriyi göndermesini sağlamaktır.

Yeni bir site kuruyorsanız bu ayarların hepsi [web tasarım hizmetimizin](/web-tasarim/) standart parçasıdır; mevcut bir siteyi denetlemek için de aşağıdaki listeyi kullanabilirsiniz.

## Neden statik çıktı SEO için avantajlıdır?

Sunucu tarafında oluşturulmuş HTML, içeriğin tarayıcıya hazır gelmesi demektir. Google’ın JavaScript belgeleri, JavaScript ile oluşturulan içeriğin de işlenebildiğini ama işlemenin ek bir aşama olduğunu anlatır; önemli içeriği ilk HTML’de sunmak bu aşamaya bağımlılığı ortadan kaldırır ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr), [JavaScript siteleri](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)). Statik sayfalarda ayrıca sunucu yanıtı hızlıdır ve önbelleğe almak kolaydır.

## Ortak head bileşeni: ayarların merkezi

Her sayfa şu alanları dışarıdan almalıdır:

- **Başlık ve açıklama:** Her sayfaya özgü, kopyalanmamış ([başlık ve açıklama yazımı](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/)).
- **Kanonik adres:** Sayfanın tercih ettiğiniz tam adresi; sonu `/` ile bitiş ve `https` gibi tercihlerinizle tutarlı ([kanonik etiket](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
- **Robots kuralı:** Varsayılan dizine açık; gizlenecek sayfalar için `noindex` seçeneği.
- **Sosyal paylaşım etiketleri:** Sayfa başına başlık, açıklama ve görsel (Open Graph etiketleri).
- **Yapılandırılmış veri:** Sayfa türüne uygun JSON-LD.
- **Dil:** `html` öğesinde `lang` değeri (Google dili görünür içerikten belirler; yine de erişilebilirlik için doğru olsun).

Bileşen eksik veri aldığında sessizce boş bırakmak yerine derlemede hata vermesi, yinelenen ya da boş başlıkları baştan engeller.

## Adım adım kontrol listesi

1. **Site adresi:** Yapılandırmada üretim adresini (`https://…`) tanımlayın; kanonik ve site haritası bu değeri kullanır.
2. **Sondaki eğik çizgi:** Tek bir tercih seçin ve sunucu yönlendirmeleriyle uyumlu tutun ([sondaki eğik çizgi](/blog/url-sonundaki-egik-cizgi-seoyu-etkiler-mi/)).
3. **Site haritası:** Derleme sırasında otomatik üretin; yalnızca kanonik ve dizine açık adresleri içersin ([site haritası](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
4. **robots.txt:** Sitemap adresini içersin; yanlışlıkla her şeyi engellemesin ([robots.txt](/blog/robots-txt-nedir-nasil-hazirlanir/)).
5. **404 sayfası:** Gerçek bir 404 durum kodu dönmeli.
6. **Yönlendirmeler:** Statik sitede sunucu düzeyinde (301) tanımlanır.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve sade bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Görsel, yazı tipi ve hız

Statik sitenin hız avantajı, yanlış görsel ve yazı tipi seçimiyle kolayca kaybedilir ([Core Web Vitals](/blog/core-web-vitals-nedir-lcp-inp-cls/)):

- Görsellere `width` ve `height` verin; kayma (CLS) azalır.
- Ekranın üstündeki ana görseli geç yüklemeyin (`lazy` yalnızca aşağıdaki görseller için).
- Görselleri uygun boyutta ve modern biçimde sunun (görsel optimizasyonu).
- Yazı tiplerini siteden sunun, yalnızca kullanılan ağırlıkları yükleyin.
- Gereksiz üçüncü taraf betikleri sayfalara eklemeyin.

Etkileşimli parçalar (ada yaklaşımı) kullanıyorsanız yalnızca gerekli bileşenlerde JavaScript yükleyin; içerik ve bağlantılar yine ilk HTML’de bulunmalıdır.

## İç bağlantı ve içerik yapısı

- Gezinme bağlantıları gerçek `<a href>` öğeleri olmalı.
- Her sayfada tek `h1`, mantıklı alt başlık sırası (başlık yapısı).
- Blog gibi koleksiyonlarda her yazının özgün başlığı, açıklaması, görseli ve alt metni zorunlu alan olsun; içerik şemasında eksikse derleme başarısız olsun.
- Görsellerde anlamlı `alt` metni.

## Yapılandırılmış veri

Kuruluş, yerel işletme, makale ve SSS gibi türleri yalnızca sayfada görünen içerikle uyumlu olduğunda ekleyin; Google yapılandırılmış veri politikalarına uygunluk şart koşar ([Arama Merkezi yapılandırılmış veri rehberi](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)). Yayından önce Zengin Sonuçlar Testi ile doğrulayın.

## Yayından sonra kontrol

- Üretim adresinde `robots.txt` ve site haritasının açıldığını doğrulayın.
- Search Console’a site haritasını gönderin ve dizin durumunu izleyin (Search Console ilk kontrol).
- Önemli sayfalarda URL Denetimi ile Google’ın gördüğü HTML’i inceleyin.
- Sunucu önbellek ve yönlendirme ayarlarının (`www`, `https`, eğik çizgi) tek adımlı 301 verdiğini `curl -I` ile deneyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya markası, hazır bir şablonla statik site yayınlıyor. Birkaç hafta sonra Search Console’da birçok sayfanın aynı başlıkla göründüğü ve site haritasında test sayfalarının yer aldığı fark ediliyor.

- **Teşhis:** Şablon başlığı sayfa verisinden değil sabit değerden alıyor; haritada `noindex` sayfalar da var.
- **Çözüm:** Başlık ve açıklama sayfa verisine bağlanıyor, kanonik adres ortak bileşenden üretiliyor, `noindex` sayfalar haritadan çıkarılıyor.
- **Kontrol:** Yeniden derleme sonrası site haritası Search Console’a gönderiliyor ve birkaç hafta izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Derleme sırasında otomatik kontrol

Elle kontrol zamanla unutulur; derleme aşamasına küçük denetimler eklemek daha güvenlidir. Başlık uzunluğu, açıklama uzunluğu, zorunlu görsel ve alt metin alanları içerik şemasında zorunlu tutulabilir. Derleme sonrası üretilen HTML dosyalarında tek `h1` bulunup bulunmadığı, kanonik adresin üretim alan adıyla başlayıp başlamadığı ve bozuk iç bağlantılar basit bir betikle taranabilir. Bu kontroller her yayında çalışırsa, bir şablon değişikliğinin yüzlerce sayfayı sessizce bozması engellenir. Büyük değişikliklerden önce ve sonra site haritasındaki adres sayısını karşılaştırmak da hızlı bir güvenlik ağıdır.

## Sık yapılan altı hata

1. **Her sayfada aynı başlık ve açıklama.**
2. **Kanonik adresi yanlış alan adından üretmek (test adresi).**
3. **Test ve gizli sayfaları site haritasına almak.**
4. **Ana görseli geç yüklemek ve boyut vermemek.**
5. **Önemli içeriği yalnızca istemci tarafında oluşturmak.**
6. **Yönlendirmeleri ve eğik çizgi tercihini sunucuyla uyumsuz bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Web tasarım hizmetimizde](/web-tasarim/):

- başlık, kanonik, harita ve robots ayarlarını yapıya gömerek kurarız,
- içerik şemasında zorunlu alanlarla eksik veri riskini kapatırız,
- hız ve görsel kurallarını yayından önce denetleriz,
- yayın sonrası Search Console kontrolünü birlikte yaparız.

Mevcut sitenizin teknik denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin tasarımına, hızına ve arama görünürlüğüne birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [web tasarım sayfamızda](/web-tasarim/) yazılı.

## Sık sorulan sorular

### Statik site SEO için daha mı iyidir?

İçerik ilk HTML’de hazır geldiği için işlemesi kolaydır; yine de başlık, kanonik ve veri ayarlarını doğru yapmanız gerekir.

### Site haritası otomatik oluşturulabilir mi?

Evet; derleme sırasında üretilebilir. İçine yalnızca kanonik ve dizine açık adresleri aldığından emin olun.

### Yönlendirmeleri nerede tanımlamalıyım?

Statik sitede genellikle sunucu ya da barındırma düzeyinde 301 olarak tanımlanır.

### JavaScript kullanırsam SEO bozulur mu?

Önemli içerik ve bağlantılar ilk HTML’de varsa sorun çıkmaz; etkileşim için kullanılan JavaScript’i gerektiği kadarıyla sınırlayın.

### Yayından sonra neyi kontrol etmeliyim?

robots.txt, site haritası, kanonik adresler ve yönlendirme zinciri; ardından Search Console dizin raporu.

## Kaynaklar

- [Google Arama Merkezi: JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
