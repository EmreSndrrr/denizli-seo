---
title: "Robots.txt ile Engellemek ve Noindex Arasındaki Fark Nedir?"
description: "Robots.txt ile engellemek ve noindex kullanmak arasındaki fark nedir? Tarama ile dizine ekleme ayrımı, birlikte kullanma hatası ve doğru yöntem seçimi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Kapalı bir kapı ve içeriye alınmış ama listeden çıkarılmış bir sayfa karşılaştırması"
---

Robots.txt ile engellemek, arama motoru botlarının bir sayfayı ya da klasörü taramasını (açıp okumasını) engelleme isteğidir. Noindex ise sayfa taransa bile arama sonuçlarında gösterilmemesini isteyen bir kuraldır. Yani robots.txt tarama kapısını, noindex ise dizin listesini yönetir. Bir sayfayı arama sonuçlarından çıkarmak istiyorsanız doğru araç noindex’tir; robots.txt tek başına bunu garanti etmez ve ikisini aynı sayfada birlikte kullanmak noindex’i etkisiz bırakabilir.

Bu yazıda iki yöntemin ne yaptığını, hangi durumda hangisinin seçileceğini, en sık yapılan hatayı ve kontrol adımlarını anlatıyoruz. Ayrıntılı rehberler için [robots.txt nedir, nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/) ve [noindex nedir, ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazılarına, teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Tarama ile dizine ekleme neden farklıdır?

Google bir sayfayı iki aşamada işler: önce sayfayı tarar (açar ve okur), sonra tarama sonuçlarına göre dizine ekleyip eklemeyeceğine karar verir. Robots.txt birinci aşamaya, noindex ikinci aşamaya hitap eder. Google’ın robots.txt rehberi, web sayfalarını Google Arama sonuçlarından gizlemek için robots.txt dosyasının kullanılmaması gerektiğini söyler: başka sayfalar açıklayıcı metinle kullanıcıları sayfanıza yönlendirirse Google, sayfanızı ziyaret etmeden de URL’yi dizine ekleyebilir ([Robots.txt dosyasına giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)). Sayfayı sonuçlardan uzak tutmak için noindex ya da parola koruması gibi başka yöntemler gerekir.

Pratik sonuç: robots.txt ile engellenmiş bir sayfa taranamaz; ama başka sayfalar o sayfaya bağlantı veriyorsa adres, içerik görülmeden de arama sonuçlarında görünmeye devam edebilir. Noindex ise sayfa taranıp kuralı görüldüğünde sayfayı sonuçlardan çıkarır.

## Robots.txt ne zaman kullanılır?

Robots.txt şu işler için uygundur:

- Taramaya gerek olmayan, değer taşımayan alanlar: yönetim paneli, sepet, ödeme adımları, iç arama sonuçları gibi.
- Sunucuyu gereksiz yoran, çok sayıda parametreli adres üreten bölümler.
- Büyük sitelerde tarama kaynağını önemli sayfalara yönlendirmek.

Dosya sitenin kök dizininde (alanadi.com/robots.txt) bulunur ve düz metin biçimindedir. Küçük işletme sitelerinin çoğunda robots.txt’de engellenecek çok şey yoktur; gereksiz engeller önemli sayfaların taranmasını da bozabilir.

## Noindex ne zaman kullanılır?

Noindex, sayfanın taranabilir kalmasını ama arama sonuçlarında görünmemesini istediğiniz durumlar içindir:

- Teşekkür sayfaları ve form onay ekranları.
- İçerik zayıf ya da yinelenen, kullanıcı için gerekli ama aramada gösterilmesi gereksiz sayfalar.
- Site içi arama sonuç sayfaları ([site içi arama sonuçları Google’da indekslenmeli mi?](/blog/site-ici-arama-sonuclari-googleda-indekslenmeli-mi/)).
- Test ya da geçici sayfalar ([test sitesinin Google’da indekslenmesi nasıl önlenir?](/blog/test-sitesinin-googleda-indekslenmesi-nasil-onlenir/)).

Noindex bir meta etiketiyle (`<meta name="robots" content="noindex">`) ya da HTTP başlığıyla (X-Robots-Tag) uygulanır. Başlıkla uygulama, PDF gibi HTML olmayan dosyalar için de çalışır ([X-Robots-Tag nasıl kullanılır?](/blog/x-robots-tag-nasil-kullanilir/)).

> **Hizmet almak için iletişime geçin.** Hangi sayfaların taranacağını, hangilerinin dizine girmeyeceğini sitenize bakarak birlikte belirleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## En sık yapılan hata: ikisini birlikte kullanmak

Bir sayfayı sonuçlardan çıkarmak için hem robots.txt ile engelleyip hem noindex eklemek yaygın bir hatadır. Google’ın noindex rehberi bunu açıkça anlatır: noindex kuralının etkili olması için sayfanın hem robots.txt tarafından engellenmemesi hem de tarayıcı tarafından erişilebilir olması gerekir; sayfa robots.txt ile engellenirse tarayıcı noindex kuralını hiçbir zaman görmez ve sayfa, başka sayfalar bağlantı verirse arama sonuçlarında görüntülenmeye devam edebilir ([noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)).

Yani sayfanın dizinden çıkmasını istiyorsanız önce robots.txt’de engellemeyin; noindex’i koyun, Google’ın sayfayı taramasına izin verin ve sayfa dizinden çıktıktan sonra (gerekirse) taramayı sınırlamayı düşünün. Önce engelleyip sonra noindex yazmak, kuralı yok sayılır hâle getirir.

## Hangi durumda hangi yöntem seçilir?

| Amaç | Doğru yöntem | Not |
| --- | --- | --- |
| Sayfa aramada görünmesin | Noindex | Robots.txt ile engellemeyin |
| Taranması gereksiz alan (sepet, panel) | Robots.txt | Dizine girmesi riskliyse noindex ya da parola |
| Gizli ve özel içerik | Parola koruması | İkisi de tek başına güvenlik sağlamaz |
| PDF’in aramada çıkmaması | X-Robots-Tag noindex | Robots.txt ile engellemeyin |
| Test sitesi | Parola ya da noindex | Robots.txt tek başına yetmez |

Güvenlik gerektiren içerik için ikisine de güvenmeyin: robots.txt herkese açık bir dosyadır ve engellediğiniz yolları listeler; noindex ise içeriği erişilebilir bırakır. Gerçekten özel olan içerik kullanıcı girişi ya da parolayla korunmalıdır.

## Kontrol nasıl yapılır?

Şunları tek tek kontrol edin:

- Sayfa robots.txt tarafından engelleniyor mu? Robots.txt’yi tarayıcıda açıp ilgili yolu arayın.
- Sayfada noindex var mı? Kaynak kodda ya da URL Denetleme aracının “dizine eklenebilirlik” bölümünde bakın.
- Hem engelli hem noindex ise noindex’i etkili kılmak için robots.txt engelini kaldırın.
- Sayfa hâlâ arama sonuçlarında görünüyorsa Search Console’da kaldırma aracıyla geçici gizleme düşünülebilir ([Search Console URL kaldırma aracı ne zaman kullanılır?](/blog/search-console-url-kaldirma-araci-ne-zaman-kullanilir/)).
- Değişiklikten sonra Google’ın sayfayı yeniden taramasını bekleyin; etki anında görünmez.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili e-ticaret sitesinde “/arama/” ile başlayan site içi arama sonuç sayfaları robots.txt’de engellenmiş ve ayrıca noindex eklenmiş. Yine de Search Console’da bu adresler “robots.txt tarafından engellendi, ancak dizine eklendi” gibi bir uyarıyla görünüyor.

Düzeltme: robots.txt’deki engel kaldırılıyor, noindex korunuyor; Google sayfaları tarayıp noindex’i görünce adresler dizinden çıkıyor. Birkaç hafta sonra, gerek görülürse ve sayfalar dizinden çıkmışsa tarama yükünü azaltmak için robots.txt’de tekrar engel düşünülüyor. Bu örnek sonuç vaadi değildir; kural sırasını gösterir.

## Sık yapılan hatalar

1. **Robots.txt’yi gizleme aracı sanmak.** Google rehberi, sayfaları arama sonuçlarından gizlemek için robots.txt kullanılmamasını söyler.
2. **Hem engelleyip hem noindex eklemek.** Noindex görülmez.
3. **Tüm siteyi yanlışlıkla engellemek.** `Disallow: /` satırı tüm siteyi taramaya kapatır; yayına geçerken test sitesinden kalmış olabilir.
4. **Önemli sayfalarda noindex bırakmak.** Yayına alırken kaldırmayı unutmak sık görülür.
5. **CSS ve JavaScript dosyalarını engellemek.** Google’ın sayfayı doğru görmesini engelleyebilir.
6. **Değişikliği denetlememek.** Robots.txt ve noindex değişikliklerinden sonra Search Console’da dizin durumunu izleyin.

## Yayına almadan önce son kontrol

Siteyi yayına alırken ya da büyük bir değişiklik yaptıktan sonra şu kontrolü yapın. Önce robots.txt’yi tarayıcıda açın ve `Disallow: /` gibi tüm siteyi kapatan bir satır olmadığını doğrulayın; test ortamından canlıya geçişlerde bu satırın kalması çok yaygın bir kazadır. Ardından ana sayfa ve birkaç önemli hizmet sayfasında kaynak kodu açıp “noindex” araması yapın; temalar ve eklentiler geliştirme sırasında noindex ekleyebilir ve yayında unutulabilir. Son olarak Search Console’da URL Denetleme aracıyla bu sayfaların “dizine eklenebilir” göründüğünü teyit edin.

Bu üç kontrol beş dakika sürer ve haftalarca süren görünmezlik sorunlarını önler. Yeni sayfa türleri eklediğinizde (örneğin yeni bir ürün şablonu) aynı kontrolü bir kez daha yapın; çünkü şablon düzeyindeki bir noindex, o şablonu kullanan bütün sayfaları etkiler.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- robots.txt dosyanızı ve noindex kullanımını denetler, çakışan ya da yanlış kuralları listeleriz,
- hangi sayfanın taranacağını, hangisinin dizine girmeyeceğini yazılı bir tabloyla belirleriz,
- geliştiricinize uygulanacak değişiklikleri net talimata çeviririz,
- sonuç vaat etmeden, dizin durumunu Search Console ile izleriz.

Robots.txt ya da noindex kararında takıldıysanız [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizdeki tarama ve dizin kurallarını birlikte gözden geçirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Robots.txt bir sayfayı Google’dan siler mi?

Hayır. Taramayı engeller ama sayfa başka sayfalardan bağlantı alıyorsa arama sonuçlarında görünmeye devam edebilir. Silmek için noindex kullanın.

### Noindex eklersem sayfa hemen kaybolur mu?

Hayır. Google’ın sayfayı yeniden tarayıp kuralı görmesi gerekir; bu birkaç gün ya da hafta sürebilir.

### Hangisi daha güvenli?

İkisi de güvenlik aracı değildir. Gizli içerik için parola ya da giriş koruması kullanın.

### Robots.txt’yi tamamen silsem ne olur?

Bot, taramaya kısıtlama konmadığını varsayar. Engellenmesi gereken bölüm yoksa robots.txt’ye ihtiyaç duymayabilirsiniz; ama dosya yoksa taranmaması gereken alanlar için başka bir koruma (parola, noindex) gerekir.

### Dizinden çıkmış sayfaya tekrar nasıl izin verilir?

Noindex’i kaldırın, sayfanın robots.txt’de engellenmediğinden emin olun ve URL Denetleme aracıyla yeniden dizine ekleme isteyin.

## Kaynaklar

- [Google Arama Merkezi: Robots.txt dosyasına giriş ve kullanım rehberi](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
