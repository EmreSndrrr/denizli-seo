---
title: "Sekme ve Akordeon İçindeki Metinleri Google Görür mü?"
description: "Sekme ve akordeon içindeki metinleri Google görür mü? HTML’de bulunan içerik ile tıklayınca yüklenen içerik farkı, test yöntemi ve doğru kullanım kuralları."
date: 2026-11-15
service: web-tasarim
imageAlt: "Açılır akordeon bölümleri ve sayfa kaynağında bulunan içerik karşılaştırması"
---

Sekme ya da akordeon içindeki metin, sayfa yüklendiğinde HTML’de zaten bulunuyorsa ve yalnızca görsel olarak kapalı duruyorsa Google onu sayfanın içeriği olarak görebilir. Metin, kullanıcı sekmeye tıkladıktan sonra sunucudan yükleniyorsa Google onu göremez; çünkü Google sayfayla etkileşime girmez: kaydırmaz, tıklamaz, yazmaz. Yani soru “içerik gizli mi?” değil, “içerik sayfa açıldığında kaynakta var mı?” sorusudur. Bunu Search Console’daki URL Denetleme aracıyla birkaç dakikada test edebilirsiniz.

Mobilde uzun sayfaları düzenlemek için akordeon iyi bir araçtır; yanlış kurulduğunda ise içeriğinizin yarısını Google’dan saklar. Sayfa yapısı için [web tasarım hizmetimize](/web-tasarim/) bakabilirsiniz.

## İki farklı “gizli içerik”

Aynı görünen iki akordeon, teknik olarak tümüyle farklı çalışabilir.

**1. İçerik HTML’de, görünümü kapalı.** Sayfa açıldığında tüm bölümlerin metni kaynak kodda bulunur. CSS ya da küçük bir betik bölümleri kapalı gösterir; tıklayınca açılır. Tarayıcının “sayfa kaynağını görüntüle” ekranında metni aratırsanız bulursunuz.

**2. İçerik tıklayınca yükleniyor.** Sayfa açıldığında yalnızca başlıklar vardır. Kullanıcı bir sekmeye tıklayınca betik sunucuya istek atar ve metni o anda getirir. Kaynakta metin yoktur.

Google’ın belgeleri ikinci durumu açıkça ele alır. Mobil öncelikli dizine ekleme rehberi: asıl içeriği kullanıcı etkileşiminin ardından yükleyerek geç yükleme yöntemine başvurmayın; **Google, yüklenmek için kullanıcı etkileşimi (ör. kaydırma, tıklama veya yazma) gerektiren içerikleri yüklemez** ([mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Geç yükleme rehberi de aynı gerekçeyi verir: Google Arama sayfanızla etkileşime geçmediği için içerik yüklemede kaydırma ya da tıklama gibi kullanıcı işlemlerine dayanmamak önemlidir ([geç yüklenen içerik](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading?hl=tr)).

## Peki HTML’deki kapalı içerik?

Birinci durumda içerik, Google’ın oluşturduğu sayfada yer alır; çünkü yüklenmesi için bir etkileşim gerekmez. Bu yüzden iyi kurulmuş bir akordeon ya da sekme, içeriği Google’dan saklamaz.

Burada iki dürüst sınır koymak gerekir:

- Google’ın kapalı bölümdeki metne açık metinle birebir aynı ağırlığı verip vermediğine dair bu yazıda dayandığımız belgelerde bir ölçü yoktur; bu konuda kesin konuşan kaynaklara temkinli yaklaşın.
- Arama sonucundan gelen kullanıcı, aradığı cümleyi sayfada göremezse (kapalı bir sekmenin içindeyse) aradığını bulamadığını düşünebilir. Bu bir sıralama meselesi değil, deneyim meselesidir.

Pratik kural: sayfanın **asıl cevabını** ve en önemli bilgisini açık bırakın; ayrıntıyı, tekrarı ve ikincil bilgiyi katlayın.

## Mobil sürüm belirleyicidir

Google sayfaları ağırlıklı olarak mobil sürümleri üzerinden dizine ekler. Aynı rehber, içeriğin masaüstü ve mobilde aynı olmasını ister. Akordeonla ilgili en sık hata buradadır:

- Masaüstünde tüm metin açık; mobilde “yer kazanmak için” metnin yarısı hiç yüklenmiyor.
- Mobil şablonda sekmelerin içeriği tıklayınca getiriliyor.
- Mobilde “devamını oku” düğmesi metnin geri kalanını sunucudan çekiyor.

Mobilde içeriği **katlamak** sorun değildir; mobilde içeriği **çıkarmak** sorundur ([mobil ve masaüstü sıralamaları neden farklı?](/blog/mobil-ve-masaustu-siralamalari-neden-farkli-cikiyor/)).

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve sade bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Sitenizi test edin

### Hızlı test: sayfa kaynağı

1. Sayfayı tarayıcıda açın, hiçbir sekmeye tıklamayın.
2. Sayfa kaynağını görüntüleyin (oluşturulmuş DOM’u değil, ham kaynağı).
3. Kapalı bir bölümdeki ayırt edici bir cümleyi aratın.

Bulunuyorsa içerik HTML’dedir. Bulunmuyorsa iki olasılık vardır: içerik betikle sayfa yüklenirken ekleniyor (Google çoğunlukla görür) ya da tıklayınca yükleniyor (görmez). Ayırmak için ikinci testi yapın.

### Kesin test: URL Denetleme

1. Search Console’da sayfanın adresini URL Denetleme aracına girin.
2. “Canlı URL’yi test et”i çalıştırın.
3. “Test edilen sayfayı görüntüle” bölümünde HTML’i açın ve aynı cümleyi aratın.

Cümle oluşturulmuş HTML’de varsa Google onu görüyordur. Yoksa içerik etkileşime bağlıdır ve Google için yoktur ([JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).

### Sonuç testi

Kapalı bölümden uzunca ve özgün bir cümleyi tırnak içinde Google’da aratın. Sayfanız çıkıyorsa içerik dizindedir. (Yeni eklenen içerik için önce yeniden taranmasını bekleyin.)

## Doğru akordeon nasıl kurulur?

1. **İçeriği HTML’e koyun.** Tüm bölümlerin metni sayfa yüklenirken kaynakta bulunsun.
2. **Yerleşik HTML öğelerini tercih edin.** `<details>` ve `<summary>` öğeleri, betik gerektirmeden aç/kapa davranışı sağlar; içerik HTML’dedir, klavye ve ekran okuyucu desteği hazır gelir.
3. **Başlıkları gerçek başlık yapın.** Akordeon başlıkları soru ya da konu başlığıysa başlık öğeleriyle işaretleyin ([H1, H2, H3 başlık yapısı](/blog/h1-h2-h3-baslik-yapisi-nasil-kurulur/)).
4. **Bağlantıları gerçek bağlantı yapın.** Sekmeler arasında geçiş yalnızca betikle çalışan `div`’lerle değil, erişilebilir düğmelerle yapılsın; sekme içindeki bağlantılar `href` taşısın.
5. **Önemli bölümü açık başlatın.** İlk sekme ya da ilk akordeon maddesi açık gelsin.
6. **Yazdırma ve “sayfada bul”u düşünün.** Kullanıcı tarayıcıda Ctrl+F ile aradığında kapalı içerik bulunabiliyor mu? Modern tarayıcılar `<details>` içinde arama yapıp bölümü kendiliğinden açabilir.

Erişilebilirlik kuralları için [web sitesi erişilebilirliği](/blog/web-sitesi-erisilebilirligi-temel-kurallar/) yazısına bakın.

## Nerede kullanılmalı, nerede kullanılmamalı?

**Uygun:**

- Sık sorulan sorular ([SSS bölümü nasıl yazılır?](/blog/sik-sorulan-sorular-bolumu-nasil-yazilir/)).
- Ürün sayfasında teknik özellikler, kargo ve iade koşulları, bakım talimatı.
- Uzun hizmet sayfasında ikincil ayrıntılar.
- Mobilde uzun tablolar ve listeler.

**Uygun değil:**

- Sayfanın ana tanıtım metni ve asıl cevabı.
- Fiyat, telefon, adres gibi ziyaretçinin ilk aradığı bilgi.
- Her sekmesi ayrı bir arama niyetine karşılık gelen içerik. “Hakkımızda | Hizmetler | İletişim” gibi sekmeler tek sayfada durmamalı; her biri kendi adresi olan ayrı sayfa olmalıdır, çünkü Google sekmeye değil sayfaya bağlantı verir ([tek sayfalık site mi, çok sayfalı site mi?](/blog/tek-sayfalik-site-mi-cok-sayfali-site-mi/)).
- Anahtar kelime doldurmak için açılmış, kullanıcının hiç bakmayacağı “SEO metni” akordeonları. Kullanıcıya gösterilmek istenmeyen metni saklamak için katlama kullanmak, gizli metin uygulamalarına yaklaşır.

## “Devamını oku” düğmeleri

Kategori sayfalarında metni iki satıra kısaltıp “devamını oku” ile açmak yaygındır. Aynı kural geçerlidir: metnin tamamı HTML’de bulunmalı, düğme yalnızca görünümü değiştirmelidir. Düğme kullanıcıyı başka bir adrese götürüyor ya da metni sunucudan çekiyorsa, Google kısaltılmış metni görür.

## Yapılandırılmış veri notu

SSS ya da ürün işaretlemesi kullanıyorsanız, işaretlenen metin sayfada kullanıcıya görünür olmalıdır. Akordeonla katlanmış ama tıklayınca görülebilen, HTML’de bulunan içerik bu açıdan erişilebilir içeriktir; hiç gösterilmeyen ya da yalnızca işaretlemede bulunan metin ise yönergelere aykırıdır ([zengin sonuç neden görünmüyor?](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir jeneratör satıcısının ürün sayfalarında “Açıklama | Teknik Özellikler | Garanti” sekmeleri var. Teknik özellik sorgularında sayfalar hiç görünmüyor.

- **Teşhis:** URL Denetleme’de oluşturulan HTML’de yalnızca “Açıklama” sekmesinin metni var; diğer iki sekme tıklanınca sunucudan yükleniyor.
- **Düzeltme:** Üç sekmenin içeriği sayfa yüklenirken HTML’e basılıyor; sekmeler yalnızca görünümü değiştiriyor. Mobilde sekmeler akordeona dönüşüyor, ilk bölüm açık geliyor.
- **Kontrol:** Canlı testte teknik özellik tablosu HTML’de görülüyor; sayfalar yeniden taramaya gönderiliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Sekme içeriğini tıklayınca sunucudan yüklemek.**
2. **Mobil sürümde içeriği katlamak yerine çıkarmak.**
3. **Sayfanın asıl cevabını kapalı bölüme koymak.**
4. **Ayrı sayfa olması gereken konuları tek sayfada sekmelere bölmek.**
5. **Akordeonu kullanıcının okumayacağı “SEO metni”ni saklamak için kullanmak.**
6. **Kurulumu URL Denetleme ile test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Web tasarım hizmetimizde](/web-tasarim/):

- sekme ve akordeonlarınızın içeriğini Google’ın gördüğü HTML ile karşılaştırırız,
- etkileşime bağlı yüklenen içeriği sayfa kaynağına taşırız,
- hangi bilginin açık, hangisinin katlı duracağına birlikte karar veririz,
- mobil ve masaüstü içerik eşitliğini denetleriz.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin tasarımına, hızına ve arama görünürlüğüne birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [web tasarım sayfamızda](/web-tasarim/) yazılı.

## Sık sorulan sorular

### Google akordeon içindeki metni okur mu?

Metin sayfa yüklendiğinde HTML’de bulunuyorsa evet. Tıklayınca yükleniyorsa hayır; Google sayfayla etkileşime girmez.

### İçeriğin HTML’de olup olmadığını nasıl anlarım?

Sayfa kaynağında ya da Search Console’daki URL Denetleme aracının oluşturduğu HTML’de kapalı bölümdeki bir cümleyi aratın.

### Mobilde içeriği akordeona almak zararlı mı?

Hayır, içerik HTML’de kaldığı sürece. Zararlı olan, mobilde içeriği tümüyle çıkarmaktır.

### En önemli bilgiyi sekmeye koyabilir miyim?

Önermeyiz. Asıl cevabı ve temel bilgiyi açık bırakın; ayrıntıyı katlayın.

### SSS bölümünü akordeon yapabilir miyim?

Evet; yaygın ve uygun bir kullanımdır. Sorular ve cevaplar kaynakta bulunsun.

## Kaynaklar

- [Google Arama Merkezi: Mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
- [Google Arama Merkezi: Geç yüklenen içeriği düzeltme](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading?hl=tr)
