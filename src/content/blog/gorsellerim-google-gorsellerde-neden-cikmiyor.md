---
title: "Görsellerim Google Görseller’de Neden Çıkmıyor?"
description: "Görselleriniz Google Görseller’de neden çıkmıyor? CSS arka planı, engellenen dosya, eksik alt metin, zayıf sayfa ve biçim sorunları için kontrol listesi."
date: 2026-11-15
service: teknik-seo
imageAlt: "Google Görseller’de görünmeyen görseller için kontrol edilecek teknik noktalar"
---

Görselleriniz Google Görseller’de çıkmıyorsa en sık nedenler şunlardır: görsel HTML `<img>` öğesiyle değil CSS arka planı olarak eklenmiştir, görsel dosyası ya da bulunduğu sayfa taranamıyordur, sayfanın kendisi dizinde değildir, görselin çevresinde onu anlatan metin ve alt metin yoktur ya da görsel yalnızca kullanıcı etkileşimiyle yüklenmektedir. Google, CSS görsellerini dizine eklemediğini açıkça belirtir; kontrolün ilk adımı budur.

Ürün, proje ve mekân fotoğrafı olan işletmeler için görsel arama gerçek bir trafik kaynağıdır. Teknik denetim için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Google görselleri nasıl bulur ve dizine ekler?

Google’ın görsel rehberine göre içeriğin arama sonuçlarında görünmesi için geçerli teknik şartlar görseller için de geçerlidir; üstüne ek şartlar vardır, çünkü görselin bulunması ve sunulma biçimi dizine eklenip eklenmeyeceğini ve hangi kelimelerle eşleşeceğini etkiler ([Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)).

Pratikte zincir şöyledir: Google sayfayı tarar, sayfadaki `<img>` öğesinden görsel adresini bulur, görsel dosyasını ayrıca tarar, sayfadaki metinden görselin konusunu çıkarır ve görseli bulunduğu sayfayla birlikte dizine ekler. Zincirin herhangi bir halkası kopuksa görsel çıkmaz.

## 1. Görsel gerçekten `<img>` ile mi eklenmiş?

Google görselleri `<img>` öğesinin `src` özelliğinde bulabilir; bu öğe `<picture>` gibi başka bir öğenin içinde olsa da. Buna karşılık Google CSS görsellerini dizine eklemez. Belgedeki örnek:

```html
<!-- İyi -->
<img src="yavru-kopek.jpg" alt="Yavru golden retriever">

<!-- Kötü: dizine eklenmez -->
<div style="background-image:url(yavru-kopek.jpg)">Yavru golden retriever</div>
```

Sayfa oluşturucu eklentiler ve hazır temalar, hero bölümlerini, galeri kutularını ve ürün kartlarını çoğu zaman arka plan görseli olarak basar. Tarayıcıda görsele sağ tıklayıp “öğeyi incele” dediğinizde `<img>` yerine `background-image` görüyorsanız neden budur. Önemli görselleri gerçek `<img>` öğesine çevirin.

Duyarlı görsel kullanıyorsanız (`srcset`, `<picture>`), Google’ın önerisi her zaman `src` ile bir yedek adres vermektir.

## 2. Görsel dosyası ve sayfa taranabiliyor mu?

- **robots.txt:** `/wp-content/uploads/`, `/images/` ya da `/assets/` klasörünü kapatan bir kural görsellerin taranmasını engeller ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).
- **Güvenlik duvarı ve hotlink koruması:** Görsel botunu ya da yönlendireni olmayan istekleri engelleyen kurallar, dosyayı Google’a kapatabilir ([Googlebot 403 alıyorsa](/blog/googlebot-403-hatasi-aliyorsa-neler-kontrol-edilmeli/)).
- **Giriş zorunluluğu:** Üye girişi ardındaki görseller taranamaz.
- **CDN alan adı:** Görseller başka bir alan adından sunuluyorsa o alan adının da taranabilir olması gerekir. Google, CDN kullanıyorsanız CDN alan adının sahipliğini Search Console’da doğrulamanızı önerir; böylece tarama hataları size bildirilebilir.

URL Denetleme aracında sayfayı test edip “taranan sayfayı görüntüle” bölümünde yüklenemeyen kaynaklara bakmak hızlı bir kontroldür.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 3. Sayfanın kendisi dizinde mi?

Görsel, bulunduğu sayfayla birlikte anlam kazanır. Sayfa `noindex` ise, kanonik olarak başka bir sayfaya işaret ediyorsa ya da “Taranan – dizine eklenmeyen” durumdaysa görselin çıkması beklenmez. Önce sayfanın dizin durumunu çözün ([sitem neden görünmüyor?](/blog/web-sitem-googleda-neden-gorunmuyor-indeksleme-rehberi/)).

## 4. Görsel etkileşim olmadan yükleniyor mu?

Görsel yalnızca kullanıcı kaydırınca, bir sekmeye tıklayınca ya da bir düğmeye basınca yükleniyorsa Google onu göremeyebilir. Tarayıcı düzeyinde `loading="lazy"` güvenli bir yöntemdir; ama kaydırma olayına bağlı özel betikler görseli tarayıcıdan saklayabilir ([lazy loading nasıl kullanılır?](/blog/lazy-loading-nasil-kullanilir-sik-yapilan-hatalar/)). Slayt ve galeri eklentilerinde ilk görsel dışındakilerin HTML kaynağında bulunup bulunmadığına bakın.

## 5. Görseli anlatan metin var mı?

Google, görselin konusuyla ilgili bilgiyi altyazılar ve görsel başlıkları dahil sayfanın içeriğinden çıkarır. Rehberin önerileri:

1. **Alt metin yazın.** Görselin ne gösterdiğini bir cümleyle anlatın; anahtar kelime yığmayın.
2. **Görseli ilgili metnin yanına koyun.** Görsel, konusuyla alakalı bir sayfada ve alakalı paragrafın yakınında olsun.
3. **Açıklayıcı dosya adı kullanın.** Google’a göre dosya adı görselin konusuyla ilgili “çok ufak ipuçları” verebilir; `IMG_4821.jpg` yerine `denizli-mutfak-dolabi-mese.jpg` gibi kısa ve açıklayıcı adlar tercih edin.
4. **Sayfa başlığı ve açıklaması düzgün olsun.** Görsel sonucunda sayfanın başlığı ve snippet’i de gösterilir.

Alt metin yazımının ayrıntısı için [görsel SEO](/blog/gorsel-seo/) yazısına bakın.

## 6. Biçim ve adres sorunları

- **Desteklenen biçimler:** Google Arama, `src` içinde referans verilen görseller için BMP, GIF, JPEG, PNG, WebP, SVG ve AVIF biçimlerini destekler. Dosya uzantısının dosya türüyle eşleşmesi de iyi bir fikirdir.
- **Sabit adres:** Google, görseli birden çok kez istemeden önbelleğe alıp yeniden kullanabilmesi için görsele her zaman aynı URL ile başvurmanızı önerir. Her yüklemede değişen sürüm parametreleri ya da oturuma bağlı görsel adresleri bu yüzden sorun çıkarır.
- **Görsel site haritası:** Başka türlü keşfedilemeyecek görseller için görsel site haritası gönderebilirsiniz; bu haritaya başka alan adlarındaki (CDN) görsel adresleri de eklenebilir.
- **Kalite:** Rehber, net ve yüksek kaliteli fotoğrafların kullanıcıya bulanık görsellerden daha çekici göründüğünü belirtir; aşırı sıkıştırılmış ya da çok küçük görseller dezavantajlıdır.

Biçim ve boyut seçimi için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazısına bakın.

## 7. Görsel başka sitelerde de var mı?

Üreticinin sağladığı ya da stok sitesinden alınan bir fotoğraf yüzlerce sitede bulunur. Aynı görsel pek çok sitede bulunduğunda sizin sayfanızın o görselle öne çıkması zorlaşır. Kendi çektiğiniz özgün fotoğraflar hem bu sorunu çözer hem güven verir ([kurumsal sitede fotoğraf çekimi](/blog/kurumsal-web-sitesinde-fotograf-cekim-ve-kullanim/)).

## Kontrol sırası

Sorunu bulmak için şu sırayla ilerleyin:

1. Tarayıcıda görseli inceleyin: `<img>` mi, arka plan mı?
2. Görsel adresini ayrı sekmede açın: 200 dönüyor mu?
3. robots.txt’te görsel klasörü ve CDN alan adı için engel var mı?
4. Sayfa dizinde mi? URL Denetleme ile bakın.
5. Sayfa kaynağında (JavaScript çalışmadan) `<img>` görünüyor mu?
6. Alt metin, çevre metin ve dosya adı görseli anlatıyor mu?
7. Düzeltmeden sonra sayfayı yeniden taramaya gönderin ve birkaç hafta bekleyin.

Search Console Performans raporunda arama türünü “Görsel” seçerek görsel aramadan gelen gösterim ve tıklamayı izleyebilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mutfak dolabı atölyesinin 200 proje fotoğrafı var; görsel aramada neredeyse hiç görünmüyor.

- **Teşhis:** Galeri eklentisi fotoğrafları arka plan görseli olarak basıyor; dosya adları `DSC_0142.jpg` biçiminde, alt metin yok.
- **Düzeltme:** Galeri `<img>` kullanan bir yapıya geçiriliyor; her proje için kısa açıklama, alt metin ve açıklayıcı dosya adı ekleniyor; görseller proje sayfalarına dağıtılıyor.
- **İzleme:** Sayfalar yeniden taramaya gönderiliyor; Performans raporunda “Görsel” arama türü aylık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Önemli görselleri CSS arka planı olarak eklemek.**
2. **Görsel klasörünü robots.txt ile kapatmak.**
3. **Alt metni boş bırakmak ya da anahtar kelimeyle doldurmak.**
4. **Görselleri etkileşime bağlı betiklerle yüklemek.**
5. **Her yüklemede değişen görsel adresleri kullanmak.**
6. **Yalnızca stok ya da üretici fotoğrafı kullanmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- görsellerin nasıl eklendiğini ve taranabildiğini denetleriz,
- galeri ve ürün şablonlarını `<img>` tabanlı hâle getiririz,
- alt metin, dosya adı ve sayfa metni için düzen kurarız,
- görsel aramadan gelen trafiği raporlarız.

Görsel denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Arka plan görselleri Google Görseller’de çıkar mı?

Hayır. Google, CSS görsellerini dizine eklemediğini belirtir; `<img>` öğesi kullanın.

### Alt metin zorunlu mu?

Dizine eklenmek için tek şart değildir, ama Google görselin konusunu sayfa içeriğinden ve alt metinden anlar; erişilebilirlik için de gereklidir.

### Hangi görsel biçimleri desteklenir?

BMP, GIF, JPEG, PNG, WebP, SVG ve AVIF.

### Görsel site haritası gerekli mi?

Zorunlu değil; başka türlü keşfedilemeyecek görseller ve CDN’de duran dosyalar için yararlıdır.

### Düzeltmeden sonra ne kadar beklemeliyim?

Sayfanın ve görselin yeniden taranması gerekir; bu günler ya da haftalar alabilir.

## Kaynaklar

- [Google Arama Merkezi: Google Görseller SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
