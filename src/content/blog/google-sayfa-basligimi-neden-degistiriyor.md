---
title: "Google Sayfa Başlığımı Neden Değiştiriyor?"
description: "Google sayfa başlığınızı neden değiştiriyor? Başlık bağlantısının kaynakları, eksik, eski ve tekrarlı başlık sorunları ve çözüm adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Sayfanın title öğesi ile arama sonucunda görünen başlık bağlantısının karşılaştırması"
---

Google, arama sonucundaki başlığı (başlık bağlantısı) tamamen otomatik oluşturur ve yalnızca `<title>` öğesine bakmaz; sayfadaki ana görsel başlığı, H1 gibi başlık öğelerini, `og:title` etiketini, sayfadaki belirgin metinleri ve sayfaya verilen bağlantıların metnini de kullanır. Yazdığınız başlık eksik, eski, tekrarlı, anahtar kelimeyle doldurulmuş ya da sayfanın içeriğiyle uyumsuzsa Google başka bir metin seçebilir. Çözüm, her sayfaya açıklayıcı, kısa ve benzersiz bir `<title>` yazmak ve bunu sayfadaki ana başlıkla uyumlu tutmaktır.

Başlık, kullanıcının tıklama kararında en çok baktığı yerdir; değişmesi tıklama oranınızı etkileyebilir. Başlık ve sayfa yapısı denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Başlık bağlantısı nedir?

Google’ın tanımıyla başlık bağlantısı, Google Arama’da ve Google Haberler gibi diğer mülklerde web sayfasına bağlantı veren arama sonucunun başlığıdır. Google bunu otomatik belirlemek için birçok kaynak kullanır; siz en iyi uygulamaları izleyerek tercihinizi belirtebilirsiniz ([başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)).

Yani `<title>` bir emir değil, güçlü bir öneridir. Google sitelerin başlık bağlantılarını elle tek tek değiştirmediğini de yazar; düzeltme isteyebileceğiniz bir form yoktur.

## Google başlığı hangi kaynaklardan üretir?

Belgeye göre Google başlık bağlantısını belirlerken şu kaynakları kullanır:

- `<title>` öğesinin içeriği,
- sayfada gösterilen ana görsel başlık,
- `<h1>` gibi başlık öğeleri,
- `og:title` meta etiketindeki içerik,
- stil uygulamasıyla büyük ve belirgin hâle gelen diğer içerikler,
- sayfadaki diğer metinler,
- sayfadaki bağlantı metni,
- sayfayı işaret eden bağlantılardaki metinler,
- `WebSite` yapılandırılmış verisi.

Bu listeden iki pratik sonuç çıkar. Birincisi: `<title>`, H1 ve `og:title` birbirini tutmuyorsa Google’a üç ayrı aday sunmuş olursunuz. İkincisi: sayfanızı robots.txt ile taramaya kapattıysanız Google içeriği göremez ve başlığı başka sitelerdeki bağlantı metni gibi sayfa dışı kaynaklardan üretir.

## Google hangi durumlarda başlığı değiştirir?

Google, en sık karşılaştığı sorunları belgesinde örnekleriyle sayar:

1. **Yarısı boş başlık:** `<title> | Site Adı </title>` gibi, asıl bölümü eksik başlıklar. Google eksik kısmı sayfadaki başlıktan tamamlar.
2. **Eski başlık:** Her yıl güncellenen bir sayfada `<title>` “2020 kabul ölçütleri” diye kalmış, sayfadaki görünür başlık ise “2021” yazıyorsa Google görünür başlıktaki tarihi kullanır.
3. **Hatalı başlık:** `<title>` sayfanın gerçekte neyle ilgili olduğunu yansıtmıyorsa (ör. dinamik içerikte genel bir ürün listesi başlığı) Google sayfa içeriğine daha uygun bir metin seçebilir.
4. **Tekrarlı ve ortak metinli başlıklar:** Sitenin her sayfasında aynı ya da yalnızca tek kelimesi değişen uzun başlıklar.
5. **Anahtar kelime doldurma:** Aynı kelimenin varyasyonlarını sıralayan başlıklar hem Google’da hem kullanıcıda spam hissi uyandırır.
6. **Dil ve yazı sistemi uyumsuzluğu:** Sayfa bir dilde, `<title>` başka dilde ya da başka alfabedeyse Google sayfanın birincil diliyle eşleşen bir başlık göstermeye çalışır.

Bunların ortak noktası şudur: Google başlığınızı keyfî değil, bir tutarsızlık ya da bilgi eksikliği gördüğünde değiştirir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Yazdığınız başlığın görünmesi için ne yapmalı?

Google’ın en iyi uygulamalarını işletme sitesine uyarlarsak:

1. **Her sayfada `<title>` olsun.** Boş ya da şablondan gelen “Ana Sayfa”, “Sayfa 2”, “Profil” gibi başlıklar bırakmayın.
2. **Açıklayıcı ve kısa yazın.** Google başlık uzunluğu için bir sınır koymaz; ancak başlık bağlantısı genellikle cihazın genişliğine göre kısaltılır. Bu sitede başlıkları 60 karakterin altında tutuyoruz; bu Google’ın kuralı değil, kesilmeyi azaltan pratik bir sınırdır.
3. **Her sayfaya farklı başlık verin.** İki sayfa aynı başlığı taşıyorsa kullanıcı aradaki farkı anlayamaz.
4. **Markayı kısa ekleyin.** Site adını başlığın başına ya da sonuna, tire, iki nokta ya da dik çizgiyle ayırarak koyun; sloganın tamamını her sayfada tekrarlamayın.
5. **Ana başlığı belirgin yapın.** Sayfada görsel olarak aynı ağırlıkta birden çok başlık varsa Google hangisinin ana başlık olduğunu ayırt etmekte zorlanır. Ana başlığı sayfadaki ilk H1’e koyun ve en büyük yazı o olsun.
6. **`<title>`, H1 ve `og:title` uyumlu olsun.** Birebir aynı olmak zorunda değil, ama aynı konuyu anlatmalılar.
7. **Tarihleri güncelleyin.** Yıl içeren başlıklar için güncelleme takvimi tutun.

Başlık yazımının temelleri için [başlık etiketi ve meta açıklama nasıl yazılır?](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/) ve abartısız ama tıklanan başlıklar için [tıklanabilir ama dürüst başlıklar](/blog/tiklanabilir-ama-durust-basliklar-nasil-yazilir/) yazılarına bakın.

## Başlığın değiştiğini nasıl anlarsınız?

1. Search Console Performans raporunda sayfayı filtreleyin; tıklama oranında açıklanamayan bir düşüş var mı bakın.
2. Sayfanın hedef sorgularını gizli pencerede arayın ve sonuçtaki başlığı `<title>` ile karşılaştırın.
3. Birkaç farklı sorguyla deneyin; Google aynı sayfa için sorguya göre farklı başlık gösterebilir.
4. Sayfa kaynağında `<title>`, H1 ve `og:title` değerlerini yan yana yazın; tutarsızlığı çoğu zaman burada görürsünüz.
5. Şablonun (tema ya da SEO eklentisinin) başlığa otomatik eklediği kısımları kontrol edin.

WordPress’te başlık şablonu çoğu zaman eklenti ayarından gelir; “%%title%% %%sep%% %%sitename%%” gibi kalıpların boş değer üretmediğinden emin olun ([WordPress SEO eklentisi seçimi](/blog/wordpress-seo-eklentisi-secerken-nelere-bakilmali/)).

## Değişiklik ne kadar sürede yansır?

Google’a göre bu kaynaklarda yapılan güncellemelerin fark edilmesi için sayfanın yeniden taranıp işlenmesi gerekir ve bu birkaç gün ila birkaç hafta sürebilir. Hızlandırmak için sayfayı URL Denetleme aracıyla yeniden taramaya gönderebilirsiniz ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)). Çok sayıda sayfada başlık değiştirdiyseniz site haritasını güncel tutun.

## Başlık değişse de sorun olmayabilir

Her değişiklik kötü değildir. Google’ın seçtiği başlık bazen kullanıcının sorgusuna daha uygundur ve tıklamayı artırır. Karar ölçütü tıklama oranıdır:

- Tıklama oranı düşmediyse ve gösterilen başlık doğruysa acele etmeyin.
- Gösterilen başlık yanlış bilgi içeriyorsa (eski tarih, yanlış ürün) kaynağı düzeltin.
- Markanız başlıkta hiç görünmüyorsa site adı ayarını da kontrol edin ([site adı yanlış görünüyorsa](/blog/googleda-site-adi-yanlis-gorunuyorsa-ne-yapilmali/)).

Tıklama oranını bütün olarak iyileştirmek için [arama sonuçlarında tıklama oranı](/blog/arama-sonuclarinda-tiklama-orani-nasil-artirilir/) yazısına bakabilirsiniz.

## Fiyat ve hızlı değişen bilgiler

Google, başlığa uçuş fiyatı gibi çok hızlı değişen bilgileri eklemekten kaçınmayı önerir; çünkü başlıkta gösterilen fiyat ile sayfadaki gerçek fiyat aynı olmayabilir. Aynı mantık kampanya yüzdesi ve stok bilgisi için de geçerlidir: başlığa “%50 indirim” yazıp kampanya bitince unutursanız, eski başlık sorunu doğar.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir halı yıkama firmasının hizmet sayfası aramada “Ana Sayfa – Firma Adı” başlığıyla çıkıyor.

- **Teşhis:** Tema tüm sayfalara aynı `<title>` değerini basıyor; sayfadaki H1 ise “Halı Yıkama Fiyatları”. Google bazı sorgularda H1’i, bazılarında tekrarlı başlığı gösteriyor.
- **Düzeltme:** Her sayfaya ayrı `<title>` yazılıyor: “Halı Yıkama Fiyatları | Firma Adı”. H1 ve `og:title` aynı konuya çekiliyor.
- **İzleme:** Sayfalar yeniden taramaya gönderiliyor; üç hafta sonra tıklama oranı önceki dönemle karşılaştırılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Tüm sayfalarda aynı başlığı kullanmak.**
2. **Başlığı anahtar kelime listesine çevirmek.**
3. **`<title>` ile H1’i farklı konularda yazmak.**
4. **Yıl ve kampanya bilgisini güncellememek.**
5. **Şablonun ürettiği yarısı boş başlıkları fark etmemek.**
6. **Değişikliği tıklama oranına bakmadan “sorun” saymak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitedeki tüm başlıkları tarar; boş, tekrarlı ve uyumsuz olanları listeleriz,
- sayfa bazında `<title>`, H1 ve `og:title` uyumunu kurarız,
- şablon ve eklenti ayarlarını düzeltiriz,
- değişiklik sonrası tıklama oranını raporlarız.

Başlık denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Google başlığımı neden değiştiriyor?

Başlık bağlantısı otomatik oluşturulur. `<title>` eksik, eski, tekrarlı ya da içerikle uyumsuzsa Google sayfadaki başka bir metni seçebilir.

### Google’dan başlığımı düzeltmesini isteyebilir miyim?

Hayır. Google başlık bağlantılarını elle tek tek değiştirmediğini belirtir; kaynağı sitenizde düzeltmeniz gerekir.

### Başlık kaç karakter olmalı?

Google bir uzunluk sınırı koymaz; başlık genellikle cihaz genişliğine göre kısaltılır. Kısa ve açıklayıcı yazmak kesilmeyi azaltır.

### Değişiklik ne zaman görünür?

Sayfanın yeniden taranıp işlenmesi gerekir; Google’a göre birkaç gün ila birkaç hafta sürebilir.

### H1 ile title aynı mı olmalı?

Birebir aynı olmak zorunda değil; ama aynı konuyu anlatmalı ve birbirini yalanlamamalıdır.

## Kaynaklar

- [Google Arama Merkezi: Başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
