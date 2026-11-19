---
title: "307 ve 308 Yönlendirmeleri Ne Zaman Kullanılır?"
description: "307 ve 308 yönlendirmeleri ne zaman kullanılır? 301 ve 302’den farkları, istek yöntemini koruma, Google’ın kalıcı ve geçici yönlendirme yaklaşımı."
date: 2026-11-19
service: teknik-seo
imageAlt: "Dört yönlendirme kodu 301, 302, 307 ve 308’in kalıcı ve geçici gruplara ayrılması"
---

307 geçici, 308 kalıcı yönlendirmedir; ikisi de 302 ve 301’in yeni ve daha kesin sürümleri gibi düşünülebilir. Temel fark, 307 ve 308’in yönlendirme sırasında isteğin yöntemini (örneğin POST) korumasıdır; 301 ve 302’de bazı istemciler POST isteğini GET’e çevirebilir. Google açısından 301 ile 308 aynı kalıcı yönlendirme sinyalini, 302 ile 307 aynı geçici yönlendirme sinyalini verir. Sıradan bir web sitesinde sayfa taşıyorsanız 301 yeterlidir; 308’i çoğunlukla özel teknik gereksinim ya da sunucu varsayılanı olarak görürsünüz.

Bu yazıda dört kodun anlamını, aralarındaki farkı, Google’ın bunları nasıl ele aldığını ve hangi durumda hangisini seçeceğinizi anlatıyoruz. 301 ile 302 farkı için [301 ve 302 yönlendirme farkı nedir?](/blog/301-ve-302-yonlendirme-farki-nedir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Dört kodun kısa özeti

| Kod | Anlamı | Türü | İstek yöntemi |
| --- | --- | --- | --- |
| 301 | Kalıcı olarak taşındı | Kalıcı | Bazı istemcilerde POST GET’e dönebilir |
| 302 | Geçici olarak bulundu | Geçici | Bazı istemcilerde POST GET’e dönebilir |
| 307 | Geçici yönlendirme | Geçici | Yöntem ve gövde korunur |
| 308 | Kalıcı yönlendirme | Kalıcı | Yöntem ve gövde korunur |

Google’ın yönlendirmeler rehberi bu ayrımı şöyle özetler: 301 ve 308 durum kodları, bir sayfanın kalıcı olarak yeni bir konuma taşındığı anlamına gelir; geçici yönlendirmeler için 302, 303 ya da 307 kullanılır ([Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)). Yani Google 308’i 301 gibi, 307’yi 302 gibi değerlendirir.

## Neden 307 ve 308 var?

Eski sürümlerde 301 ve 302 yönlendirmeleri sırasında tarayıcılar çoğu zaman POST isteğini GET’e çevirirdi. Bu, form gönderimi gibi veri taşıyan isteklerde sorun çıkarabilirdi: veri yönlendirme sırasında kaybolabilirdi. 307 ve 308 bu belirsizliği ortadan kaldırmak için eklendi: isteği olduğu gibi yeni adrese taşır.

Bir web sitesinde sayfa gezinirken ziyaretçilerin çoğu GET isteği yaptığından, bu fark günlük SEO işlerinde nadiren hissedilir. Fark, form, uygulama arayüzü (API) ve ödeme akışları gibi veri gönderen isteklerde önem kazanır.

> **Hizmet almak için iletişime geçin.** Yönlendirmelerinizi doğru kodlarla ve zincirsiz kurmak için birlikte çalışalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi durumda hangisini kullanmalısınız?

Basit karar kuralları:

- **Sayfa kalıcı taşındı, yeni adresi standart olacak:** 301 (ya da 308). Çoğu web sitesi için 301 yeterli ve yaygındır.
- **Sayfa geçici olarak başka yere yönlendiriliyor, eski adres geri dönecek:** 302 (ya da 307).
- **İsteğin POST gibi yöntemi korunmalı ve yönlendirme kalıcı:** 308.
- **İsteğin yöntemi korunmalı ve yönlendirme geçici:** 307.
- **HTTP’den HTTPS’e geçiş:** Genellikle 301; sunucunuz 308 kullanıyorsa Google açısından aynı kalıcı sinyaldir ([HTTPS’e geçiş: SEO için kontrol listesi](/blog/https-e-gecis-seo-kontrol-listesi/)).

Google’ın rehberi, kalıcı yönlendirmelerde hedef URL’nin standart (kanonik) olarak değerlendirilmesinin güçlü bir sinyal olduğunu; geçici yönlendirmelerde ise kaynak URL’nin standart kalmasının daha olası olduğunu anlatır. Bu yüzden geçici bir yönlendirmeyi kalıcı bir taşımada kullanmak, yeni adresin sıralamaya geç ve eksik yansımasına yol açabilir.

## 307 ve 308’i nerede görürsünüz?

Bu kodlarla iki yerde karşılaşırsınız:

1. **Sunucu ayarlarında.** Bazı modern sunucu yazılımları, CDN ve barındırma platformları varsayılan olarak 308 kullanır (örneğin eğik çizgi ekleme ya da HTTPS yönlendirmesi). Bu bir sorun değildir; Google 308’i kalıcı yönlendirme olarak işler.
2. **Tarayıcı araçlarında “307 Internal Redirect”.** Bazı tarayıcılar, HSTS (HTTPS’i zorunlu kılan) kuralı olan sitelerde HTTP isteklerini ağa çıkmadan kendileri HTTPS’e çevirir ve geliştirici araçlarında bunu “307 Internal Redirect” olarak gösterir. Bu, sunucunuzun döndürdüğü bir 307 değil, tarayıcının yerel işlemidir. Bu yüzden araçlarda 307 görüp panik yapmayın; sunucu tarafını ayrıca kontrol edin.

Bu ikinci durum, yönlendirme denetlerken sık görülen bir karışıklıktır. Gerçek sunucu yanıtını görmek için komut satırı araçlarıyla ya da çevrimiçi durum kodu denetleyicileriyle test edin.

## SEO açısından dikkat edilecek noktalar

Şunları tek tek kontrol edin:

- Kalıcı taşımalarda 301 ya da 308 kullanıldı mı? 302 ya da 307 kalıcı taşımada yanlıştır.
- Yönlendirme tek adımda mı? Zincir (A→B→C) kullanıcıyı ve botu yavaşlatır ([yönlendirme zincirleri ve döngüleri nasıl düzeltilir?](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).
- Yönlendirme ilgili sayfaya mı gidiyor, ana sayfaya mı? İlgisiz yönlendirme soft 404 gibi değerlendirilebilir ([soft 404 nedir? nasıl düzeltilir?](/blog/soft-404-nedir-nasil-duzeltilir/)).
- İç bağlantılar yeni adrese güncellendi mi? Yönlendirmeye güvenmek yerine doğrudan yeni adrese bağlanın.
- Site haritasında yeni adresler var mı?
- HTTP, HTTPS, www ve www’suz sürümler tek adrese mi gidiyor? ([www ve www’suz adres: tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/))

Site taşıma gibi büyük işlerde yönlendirme haritasının tamamı önemlidir ([site taşıma: 301 yönlendirme](/blog/site-tasima-301-yonlendirme/)).

## 307 ve 308’i ne zaman özel olarak seçmelisiniz?

Çoğu işletme sitesi için özel seçim gerekmez. Şu durumlarda 307 ya da 308 mantıklı olabilir:

- Form gönderimi ya da uygulama istekleri gibi POST verisi taşıyan adresleri taşıyorsunuz.
- Sunucunuz ya da barındırma platformunuz yönlendirmeleri varsayılan olarak 308 ile yapıyor.
- Geliştirici ekibiniz API adreslerinin yöntemini korumak istiyor.

Bunlar dışında sayfa taşırken 301, geçici yönlendirmede 302 kullanmak hem yaygın hem yeterlidir. Önemli olan, kodun amaca (kalıcı/geçici) uygun olması ve zincir oluşturmamasıdır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir muhasebe bürosunun sitesi yeni bir barındırma platformuna taşınıyor. Platform HTTP adreslerini otomatik olarak 308 ile HTTPS’e yönlendiriyor; büro bunu görünce kaygılanıyor, çünkü daha önce hep 301 kullanmıştı.

Büro Google’ın yönlendirme rehberini okuyor: 301 ve 308 kalıcı yönlendirme olarak aynı sinyali veriyor. Eski sayfa adresleri için ise bilinçli olarak 301 kuralları yazılıyor, çünkü büro kendi kontrol ettiği kurallarda tek bir kod kullanmayı tercih ediyor. Test sırasında tarayıcı araçlarında görülen “307 Internal Redirect” satırı HSTS’den geliyor ve sunucu tarafında değişiklik gerektirmiyor. Bu örnek sonuç vaadi değildir; kodların nasıl okunacağını gösterir.

## Sık yapılan hatalar

1. **Kalıcı taşımada 302 ya da 307 kullanmak.** Yeni adres sıralamaya geç yansır.
2. **308’i sorun sanmak.** Google 308’i kalıcı yönlendirme olarak ele alır.
3. **Tarayıcıdaki 307’yi sunucu hatası saymak.** HSTS kaynaklı yerel yönlendirme olabilir.
4. **Yönlendirme zinciri kurmak.** Tek adımda doğrudan hedefe gidin.
5. **JavaScript ya da meta yönlendirmeyi öncelik yapmak.** Sunucu tarafı yönlendirme en güvenilir yoldur ([meta refresh ile HTTP yönlendirmesi arasındaki fark](/blog/meta-refresh-ile-http-yonlendirmesi-farki/)).
6. **Eski kodu denetlememek.** Eski eklenti ve kural dosyaları yanlış kodla yönlendirme yapıyor olabilir.

## Yönlendirmeleri nasıl test edersiniz?

Bir yönlendirmenin gerçekte hangi kodu döndürdüğünü görmek için tarayıcıyı değil, sunucu yanıtını gösteren bir araç kullanın. Komut satırında yanıt başlıklarını gösteren bir istekle ya da çevrimiçi bir durum kodu denetleyicisiyle adresi sorgulayın; yanıtın ilk satırında durum kodunu, `Location` başlığında ise hedef adresi göreceksiniz. Zincir varsa her adımı ayrı ayrı görürsünüz.

Test listenizi şu adreslerle kurun: HTTP ve HTTPS ana sayfa, www ve www’suz sürümler, eğik çizgisiz ve çizgili hizmet sayfası adresleri ve taşınmış birkaç eski adres. Her biri tek adımda, doğru kodla ve doğru hedefe gitmeli. Sonuçları tabloya yazın; yeni bir değişiklikten sonra aynı listeyi yeniden çalıştırmak, gerilemeleri hemen yakalar.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki yönlendirmeleri tek tek test eder, kalıcı ve geçici kodların doğru kullanıldığını kontrol ederiz,
- zincirleri ve ilgisiz yönlendirmeleri bulup düzeltme listesi çıkarırız,
- taşıma ve yenileme projelerinde eski-yeni adres haritasını hazırlarız,
- sonuç vaat etmeden, geçiş sonrası Search Console’da izleriz.

Yönlendirmeleriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Yönlendirmelerinizi birlikte denetleyelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### 308 yönlendirmesi sıralamaya zarar verir mi?

Hayır. Google 308’i 301 gibi kalıcı yönlendirme olarak işler.

### 301 yerine 308 kullanmalı mıyım?

Genel sitelerde gerekmez. 301 yaygın ve yeterlidir; 308 yöntemi korumanın gerektiği özel durumlarda anlamlıdır.

### 307 ile 302 arasında Google açısından fark var mı?

İkisi de geçici yönlendirme olarak değerlendirilir. Fark, isteğin yönteminin korunmasındadır.

### Tarayıcıda 307 görüyorum, sunucum mu yanlış?

Büyük olasılıkla HSTS kaynaklı “307 Internal Redirect”tir; sunucunun gerçek yanıtını komut satırı ya da durum kodu denetleyiciyle test edin.

### Geçici yönlendirme ne kadar süre kullanılabilir?

Geçici yönlendirmeyi gerçekten geçici durumlarda kullanın. Kalıcı olduğunu bildiğiniz bir taşımada kalıcı kod seçin.

## Kaynaklar

- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Arama Merkezi: Site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
