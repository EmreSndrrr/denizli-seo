---
title: Kopya İçerik Nedir? Nasıl Önlenir?
description: "Kopya içerik nedir? Site içi ve dışı kopya nasıl önlenir? Canonical, yönlendirme, ürün açıklamaları, ilçe sayfaları ve Google’ın kazıma politikası."
date: 2026-11-10
service: icerik-seo
imageAlt: "Birbirine benzeyen iki sayfa ve aralarındaki eşitlik işareti"
---

Kopya içerik, aynı ya da çok benzer içeriğin birden fazla adreste bulunmasıdır. İki türü vardır: sitenizin kendi içinde (aynı sayfanın http/https, www, parametreli adresleri; birbirine benzeyen şablon sayfalar) ve başka sitelerle (üreticiden gelen ürün metni, başkasından kopyalanan yazı). Site içi kopyayı canonical, yönlendirme ve sayfa birleştirmeyle yönetin; site dışı kopyayı kendi metninizi yazarak önleyin. Google, başkasının içeriğini küçük değişikliklerle yeniden yayınlamayı kazıma olarak spam sayar.

“Kopya içerik cezası” korkusu SEO’da sık dile getirilir; gerçek ise daha ayrıntılıdır: sorun çoğunlukla Google’ın hangi adresi göstereceğini seçmek zorunda kalması ve sayfanızın ayırt edici bir şey sunmamasıdır. Bu yazıda kopya içeriğin türlerini, Google’ın ilgili rehberlerini ve nasıl önleyeceğinizi anlatıyoruz. Teknik taraf için [canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/) yazımıza bakabilirsiniz.

## Kopya içerik nedir?

Google’ın standart URL rehberi, kopya ya da çok benzer sayfalar için bir standart URL bildirmeniz gerektiğinde tercihinizi birkaç yöntemle iletebileceğinizi anlatır ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)). Kopya içerik iki ana gruba ayrılır:

| Tür | Örnek | Kaynak |
| --- | --- | --- |
| Site içi kopya | Aynı sayfa hem `http` hem `https`, hem `www` hem `www`’suz açılıyor; filtre ve parametre adresleri | Teknik yapı |
| Benzer sayfalar | Yalnızca ilçe adı değişen on hizmet sayfası | İçerik planı |
| Site dışı kopya | Üreticinin ürün açıklamasının yüzlerce mağazada kullanılması | Hazır metin |
| Kopyalanmış yazı | Başkasının yazısının değiştirilerek yayımlanması | Kopyalama |

## Google kopya içerik hakkında ne diyor?

İki ayrı açıdan:

**1. Teknik kopya.** Aynı içeriğin farklı adreslerde bulunması. Google, standart URL’yi yönlendirme, `rel="canonical"` ve site haritası gibi yöntemlerle belirtmenizi önerir; yönlendirme ve rel=canonical güçlü, site haritası zayıf sinyaldir.

**2. Başkasının içeriğini kopyalamak.** Google’ın SEO Başlangıç Kılavuzu, başkalarına ait içeriği kısmen ya da tamamen kopyalamamanızı ve yalnızca sözcükleri değiştirerek içerik oluşturmamanızı söyler ([SEO Başlangıç Kılavuzu](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr)). Spam politikaları ise kazımayı, yani başka sitelerden içerik alıp arama sıralamalarını etkileme amacıyla barındırmayı spam sayar; örnekleri arasında hiçbir orijinal içerik ya da değer eklemeden ya da orijinal kaynağı belirtmeden diğer sitelerin içeriğini yeniden yayınlama ve içeriği kopyalayıp küçük değişikliklerle (örneğin eş anlamlılarla) yeniden yayınlama vardır ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)).

## Site içi kopya: nasıl önlenir?

- **http/https, www/www’suz:** 301 ile tek adrese yönlendirme; bkz. [www ve www’suz adres](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/)
- **Parametreli adresler:** Canonical ile asıl adresi gösterin
- **Mağaza varyantları ve filtreler:** Standart ürün adresine canonical; gereksiz filtre adreslerini azaltın
- **Aynı yazı iki kategoride:** Tek adres, tek canonical
- **Yazdırma sürümleri:** Asıl sayfaya canonical
- **Eski ve yeni adres:** 301 yönlendirme

Google, standartlaştırma için robots.txt’yi ve URL kaldırma aracını kullanmamanızı ve aynı sayfa için farklı tekniklerle farklı standart URL’ler belirtmemenizi önerir.

## Benzer sayfalar: şablon tuzağı

Yerel işletmelerde sık görülen kopya türü, yalnızca ilçe adı ya da hizmet adı değişen şablon sayfalardır. Bu sayfalar teknik olarak farklı adreslerdedir ama içerik olarak aynıdır. Google, sıralama almaya çalışılan şehirlerin ve bölgelerin listelendiği metin bloklarını anahtar kelime doldurma örneği sayar; kullanıcıya yardımcı olmak yerine sıralamayı etkilemek için çok sayıda sayfa üretmeyi de ölçeklendirilmiş içerik kötüye kullanımı olarak tanımlar. Çözüm:

1. Gerçekten hizmet verilen ve söyleyecek özgün bilgiyi olan ilçeler için ayrı sayfa yazın.
2. Diğerleri için tek bir bölge sayfası kullanın.
3. Her sayfaya o sayfaya özgü örnek, süreç ve sorular ekleyin.

Ayrıntı için [ilçe sayfası nasıl yazılır?](/blog/ilce-sayfasi-nasil-yazilir/) yazımıza bakın.

> **Hizmet almak için iletişime geçin.** Müşterilerinizin sorduğu sorulardan bir içerik planı çıkaralım ve sayfalarınızı birlikte yazalım. [İçerik SEO hizmetimizi](/icerik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Ürün açıklamaları: üretici metni

Üreticiden gelen açıklamayı aynen kullanmak, aynı metni yüzlerce mağazanın paylaşması demektir. Sayfanız öne çıkmaz. Çözüm, en azından en çok satan ürünler için kendi cümlelerinizle yazmak: ölçü, malzeme, bakım, teslimat, kullanım. Ayrıntı için [ürün açıklaması nasıl yazılır?](/blog/urun-aciklamasi-nasil-yazilir-kopya-metinden-kacinma/) yazımıza bakın.

## Başkasından kopyalama: neden ve nasıl kaçınılır?

Rakibin sayfasını kopyalayıp küçük değişiklikler yapmak hem etik değildir hem Google’ın politikalarına aykırıdır; üstelik sayfanız hiçbir ayırt edici değer sunmaz. Doğru yaklaşım:

1. Rakip sayfaya **ilham** için bakın, kopyalamak için değil.
2. Konuyu kendi bilginiz ve deneyiminizle yazın.
3. Gerçek örnek ve süreç ekleyin.
4. Kaynak kullandıysanız belirtin.
5. Başkasının görselini lisans olmadan kullanmayın.

## Birden fazla sitede aynı içerik

Aynı işletmenin birden fazla sitesi varsa (marka siteleri, şube siteleri) aynı metni hepsine yapıştırmayın. Her site kendi hedef kitlesi için özgün içerik taşımalı. Eski sitenizi yeni siteyle birleştirdiyseniz eski adresleri yönlendirin.

## Kopya içerik nasıl tespit edilir?

1. **Search Console, Sayfa dizine ekleme raporu.** Kopya ve “standart sayfa seçilmemiş” durumlarına bakın. Google, kopya ya da alternatif olarak işaretlenmenin genellikle iyi bir şey olduğunu, standart sayfayı bulduğunu gösterdiğini belirtir; sorun, dizine girmesi gereken sayfanın kopya sayılmasıdır.
2. **URL Denetleme.** Google’ın seçtiği standart sayfa ile sizin istediğiniz aynı mı?
3. **Kendi metninizden bir cümleyi tırnak içinde aratın.** Başka sitede aynı cümle çıkıyor mu?
4. **Site içi benzerlik.** Hizmet sayfalarınızı yan yana koyun: yalnızca isim mi değişiyor?

> **Sizin için de yapalım mı?** Sayfalarınızın ve yazılarınızın neden yeterince işe yaramadığına birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [içerik SEO sayfamızda](/icerik-seo/) yazılı.

## Kontrol listesi

1. Site tek adrese (https, tek www sürümü) yönleniyor mu?
2. Her sayfanın canonical’ı doğru adresi gösteriyor mu?
3. Parametreli ve filtreli adresler yönetiliyor mu?
4. İlçe ve hizmet sayfaları özgün mü?
5. Ürün açıklamaları kendi cümlelerimizle mi?
6. Yazılar başkasından kopya değil mi?
7. Eski adresler yönlendirilmiş mi?
8. Site haritasında yalnızca standart sayfalar mı var?

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir tekstil bayisinin sitesinde yüzlerce ürün sayfası var; açıklamalar üreticinin kataloğundan aynen alınmış. Ayrıca “Honaz havlu”, “Sarayköy havlu” gibi on ilçe sayfası aynı metinle yazılmış. Search Console’da çoğu sayfa “Tarandı, dizine eklenmedi”.

Düzeltme: en çok satan elli ürün için kendi açıklamalarımız yazılıyor; ilçe sayfaları gerçekten teslimat yapılan iki ilçe için özgünleştirilip kalanı tek bir bölge sayfasında birleştiriliyor; canonical ve yönlendirmeler düzenleniyor. Sonuç haftalarca izleniyor. Bu örnek sonuç vaadi değildir; kopya içerikle mücadele sırasını gösterir.

## Kopya içerik karar tablosu

- **Aynı sayfa birden çok adreste:** 301 ya da canonical
- **Birbirine çok benzeyen iki sayfa:** Birleştir, ya da her birini özgün yap
- **Üretici metni:** Kendi cümlelerinle yeniden yaz
- **Başkasından alınmış yazı:** Özgün yaz ya da kaldır
- **Eski ve yeni sitede aynı içerik:** Eski adresleri yönlendir
- **Aynı metin iki şubede:** Şubeye özgü bilgi ekle

## Kopya içerikle ilgili yaygın yanlış anlamalar

1. “Her kopya Google’da ceza getirir.” Teknik kopya çoğunlukla bir seçim sorunudur; asıl sorun değersiz çoğaltma ve kopyalamadır.
2. “Metni biraz değiştirsem yeter.” Google, kopyalayıp küçük değişikliklerle yeniden yayınlamayı kazıma örneği sayar.
3. “Aynı içeriği iki sayfaya koymak SEO’yu güçlendirir.” İki sayfa birbiriyle yarışır.

## Denizli SEO bu konuda nasıl yardımcı olur?

Kopya içerik hem teknik hem içerik bilgisi gerektirir. [İçerik SEO hizmetimizde](/icerik-seo/):

- site içi kopya adresleri ve benzer sayfaları tespit ederiz,
- canonical, yönlendirme ve sayfa birleştirmeyle asıl sayfayı netleştiririz,
- ürün ve hizmet sayfalarını kopya metin yerine özgün ve doğrulanabilir bilgiyle yazarız,
- yaptığımız işleri yazılı raporlarız.

Kopya ya da şablon sayfa üretmeyiz. Sitenize bakıp kopya içerik olup olmadığını yazılı söylememizi isterseniz [bize yazın](/iletisim/).

### Sitemde hangi sayfalar kopya sayılır?

Search Console’daki Sayfa dizine ekleme raporu kopya ya da standart sayfa seçilmemiş durumlarını gösterir; URL Denetleme ile Google’ın seçtiği standart sayfayı görebilirsiniz.

### Ürün kataloğundaki tüm açıklamaları yeniden yazmak zorunda mıyım?

Hayır; önce en çok satan ve en çok aranan ürünlerden başlayın. Kalanlar için başlık ve kısa özgün açıklama ekleyin.

## Sık sorulan sorular

### Kopya içerik ceza mı getirir?

Bu yazıda teknik kopyayı bir ceza değil, Google’ın hangi adresi seçeceği sorunu olarak ele alıyoruz. Başkasının içeriğini kopyalamak ise spam politikalarına aykırı olabilir.

### Kendi içeriğimi başka bir sitede de yayımlayabilir miyim?

Yayımlayabilirsiniz ama özgün sürümü kendi sitenizde tutun ve diğer sitede kaynak belirtin ya da farklı bir sürüm yazın. Her iki yerde aynı metin sinyalleri böler.

### Aynı metni iki hizmet sayfasında kullanabilir miyim?

Hayır; her sayfa kendi ana sorusuna özgün cevap vermeli. Benzer sayfaları birleştirmeyi düşünün.

### Kopya sayfaları silmeli miyim?

Karşılığı olan sayfayı yönlendirin, karşılığı olmayanı kaldırın ya da özgünleştirin. Hangisi olduğunu sayfanın trafiği ve değerine göre seçin.

## Kaynaklar

- [Google Search Central: rel=”canonical” ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
- [Google Search Central: SEO Başlangıç Kılavuzu](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr)
- [Google Search Central: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)
