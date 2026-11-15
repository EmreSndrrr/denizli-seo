---
title: "SEO Önerileri Yazılım Ekibine Nasıl Aktarılır?"
description: "SEO önerileri yazılım ekibine nasıl aktarılır? Uygulanabilir iş maddesi şablonu, kabul ölçütleri, örnekler, önceliklendirme ve geri bildirim döngüsü."
date: 2026-11-15
service: teknik-seo
imageAlt: "SEO bulgusunun kabul ölçütleriyle yazılmış geliştirici iş maddesine dönüşmesi"
---

SEO önerisini yazılım ekibine aktarmanın en etkili yolu, bulguyu “sorun listesi” olarak değil, uygulanabilir bir iş maddesi olarak vermektir: sorun, etkilenen sayfalar ve örnekler, neden önemli olduğu (kanıtla), istenen sonuç, kabul ölçütleri, öncelik ve risk. Her madde tek bir değişikliği anlatmalı, “doğru” hâlinin örneğini göstermeli ve geliştiricinin “bitti” demeden önce kontrol edeceği somut bir test içermelidir. Böylece ne yapılacağı, nasıl doğrulanacağı ve neden önemli olduğu tartışmaya yer bırakmadan belli olur.

Çoğu SEO önerisi, “başlıkları düzeltin” gibi muğlak cümlelerle gelir ve uygulanmaz. Geliştirici ekiple iş akışı için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Neden öneriler uygulanmaz?

Sık nedenler:

1. **Belirsizlik.** “Site hızını artırın” ne demek? Hangi sayfa, hangi metrik, hangi hedef?
2. **Gerekçe yok.** Geliştirici işin neden önemli olduğunu bilmez, önceliği düşer.
3. **Çok madde.** 120 maddelik bir PDF’den kimse iş çıkarmaz.
4. **Çözüm yerine yalnızca sorun.** Geliştirici ne yapacağını kendisi çıkarmak zorunda kalır.
5. **Kabul ölçütü yok.** “Yaptım” ile “doğru yaptım” arasındaki farkı kimse bilmez.
6. **Zamanlama.** Geliştiricinin sprint planında yeri yoktur.
7. **Güven eksikliği.** Daha önce yanlış öneri geldiyse bu öneri de ciddiye alınmaz.

## İyi bir iş maddesi nasıl yazılır?

Bir şablon:

**Başlık:** Tek cümle, eylem içeren. “Ürün sayfalarındaki canonical etiketini kendi adresine işaret edecek biçimde düzelt.”

**Sorun:** Ne yanlış? Somut anlatım. “Ürün sayfalarının canonical etiketi, parametreli adresi gösteriyor.”

**Etkilenen sayfalar:** Tam liste ya da şablon adı + üç örnek adres.

**Neden önemli:** Bir cümlelik gerekçe + kanıt. “Google, kopya sayfalar için standart adres seçerken canonical’ı güçlü sinyal sayar; yanlış etiket ürünlerin parametreli adresle dizinde kalmasına yol açıyor. Search Console’da 340 sayfa ‘Google farklı bir standart sayfa seçti’ durumunda.”

**İstenen sonuç:** Doğru hâli, örnekle. `<link rel="canonical" href="https://ornek.com/urun/kirmizi-havlu/">`.

**Kabul ölçütleri:** Bitişi tanımlayan kontrol listesi:
- Her ürün sayfasında tek canonical bulunur.
- Canonical adresi mutlak ve parametresizdir.
- `?renk=kirmizi` ile açılan sayfada da canonical parametresizdir.
- Canonical adresi 200 döner ve yönlenmez.

**Öncelik, efor ve risk:** Etki yüksek, efor düşük, risk düşük.

**Test yöntemi:** Sayfa kaynağında aratma, Search Console URL Denetleme ya da tarama aracıyla toplu kontrol.

**Kaynak:** İlgili belge bağlantısı ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Örnekler: muğlak ve uygulanabilir

| Muğlak | Uygulanabilir |
|---|---|
| “Başlıklar zayıf” | “Hizmet sayfası şablonunda `<title>`, ‘{Hizmet adı} Denizli | {Marka}’ biçiminde üretilsin; 60 karakteri aşmasın; her sayfada benzersiz olsun.” |
| “Site yavaş” | “Ana sayfada LCP öğesi olan hero görseli 2,5 MB; 1600 px genişliğe ve WebP biçimine sıkıştırılsın, `fetchpriority` yüksek verilsin, `loading=lazy` kaldırılsın.” |
| “Yönlendirme sorunu” | “Aşağıdaki 48 eski adres, ekteki tabloda belirtilen yeni adreslere tek adımda 301 ile yönlendirilsin.” |
| “Mobil uyumsuz” | “Telefon düğmesi 390 px genişlikte sayfa dışına taşıyor; `.header-cta` kuralı düzeltilsin.” |

Hız örneğinde görüldüğü gibi, uzman “ne” ve “neden”i; geliştirici “nasıl”ı çözer. Ama uygulanabilir örnek vermek, geliştiricinin zamanını kazandırır ([lazy loading hataları](/blog/lazy-loading-nasil-kullanilir-sik-yapilan-hatalar/)).

## Kabul ölçütlerini ölçülebilir yapın

İyi bir kabul ölçütü, bir başkasının bakıp “evet/hayır” diyebileceği bir ifadedir:

- **Durum kodu:** “Eski adres 301 döner ve hedef 200 döner.”
- **Etiket:** “Her sayfada tek `<h1>` bulunur.”
- **Başlık:** “Başlık 60 karakterin altındadır ve boş değildir.”
- **Hız:** “Mobil LCP gerçek kullanıcı verisinde 2,5 saniyenin altındadır” (zaman alır; geçici ölçüt laboratuvar testi olabilir) ([Core Web Vitals](/blog/core-web-vitals-nedir-lcp-inp-cls/)).
- **Dizin:** “Sayfa Search Console URL Denetleme’de ‘dizine eklenebilir’ görünür.”

“Daha iyi”, “yeterince hızlı” gibi ifadeler kabul ölçütü değildir.

## Öncelik ve zamanlama

- **Toplu aktarmayın.** Önce öncelikli üç–beş madde, sonra sonrakiler. Geliştiricinin sprint planına sığacak miktarda.
- **Etki, efor ve riski belirtin** ([öncelik tablosu](/blog/seo-isleri-etki-ve-efora-gore-nasil-onceliklendirilir/)).
- **Bağımlılıkları yazın.** “Bu madde şu iş bitmeden yapılamaz.”
- **Acil olanı net işaretleyin.** Dizinden düşme, tarama engeli, yanlış `noindex` acildir; bunu gerekçesiyle söyleyin.
- **Takvime uyun.** Geliştiricinin sprint düzenini ve yayın günlerini öğrenin; büyük bir kampanya haftasında riskli değişiklik istemeyin.

## Kanal ve biçim

- Geliştiricinin kullandığı iş takip aracını kullanın (kart, bilet). PDF rapor e-postayla gelirse kaybolur.
- Her madde tek bilet olsun; bilet içinde ek olarak örnek adres, ekran görüntüsü ve doğru kod örneği.
- Kısa bir toplantıda sözlü anlatım ve yazılı bilet birlikte daha etkilidir.
- Soru sormaya açık olun: “Bu uygulanabilir mi? Zorluk nerede?”

## Geri bildirim döngüsü

1. **Uygulama sonrası doğrulayın.** Kabul ölçütlerini sizin kontrol etmeniz gerekir; geliştiriciye “bitti” demek yetmez.
2. **Sonuçları paylaşın.** Düzeltmenin Search Console’da ya da sıralamada nasıl yansıdığını geliştiriciye iletin; emeğin sonucu görünür olsun.
3. **Hataları suçlamadan konuşun.** Değişiklik beklenmedik bir şey bozduysa, sorunu birlikte çözün.
4. **Değişiklikleri kaydedin.** Her uygulanan madde ve tarihi günlükte olsun ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)).
5. **Öğrenilenleri şablona dönüştürün.** Aynı hata tekrarlanıyorsa kalıcı bir kural ekleyin (örn. başlık şablonuna uzunluk sınırı).

## Hızlı kazanım listesi: geliştirici dostu başlangıç

İlk aktarımda güven kazanmak için küçük, net ve etkisi görünür maddelerle başlayın:

1. Yanlışlıkla konmuş `noindex` etiketinin kaldırılması.
2. Tek bir sayfa şablonunda eksik `<title>` ve H1 sorunlarının düzeltilmesi.
3. Eski adres listesi için yönlendirme kuralı.
4. robots.txt’te yanlışlıkla engellenmiş klasörün açılması.
5. Ana sayfa hero görselinin sıkıştırılması.

Bu işler, ekibin SEO taleplerinin pratik değer taşıdığını görmesini sağlar.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir e-ticaret sitesinin SEO ajansı, geliştiriciye 90 sayfalık bir denetim raporu gönderiyor; üç ay sonra hiçbir madde uygulanmamış.

- **Sorun:** Rapor madde madde sorun listesi; örnek, kabul ölçütü ve öncelik yok.
- **Düzeltme:** Ajans, raporu etki–efor–riske göre sıralayıp ilk beş maddeyi bilet biçiminde yazıyor: biletlerde örnek adres, doğru kod ve kabul ölçütü bulunuyor.
- **Sonuç:** Geliştirici iki haftada beş maddeyi uyguluyor; ajans kabul ölçütlerini kontrol edip sonucu paylaşıyor; sonraki beş madde için sprint planında yer ayrılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **90 sayfalık rapor göndermek.**
2. **Gerekçe ve kanıt vermemek.**
3. **Kabul ölçütü yazmamak.**
4. **Çözüm örneği göstermemek.**
5. **Uygulamadan sonra doğrulamamak.**
6. **Geliştiricinin zaman planını ve yayın takvimini yok saymak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- bulguları öncelikli, kanıtlı ve kabul ölçütlü iş maddelerine çeviririz,
- geliştiricinizin iş takip aracına uygun biletler yazarız,
- uygulama sonrası doğrulamayı biz yaparız,
- sonuçları hem yönetime hem geliştirici ekibe raporlarız.

İş maddesi şablonu için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### İyi bir SEO iş maddesi neleri içerir?

Başlık, sorun, etkilenen sayfalar, gerekçe, istenen sonuç ve örnek, kabul ölçütleri, öncelik ve test yöntemi.

### Kabul ölçütü neden gerekli?

İşin ne zaman bittiğini ve doğru yapıldığını herkesin aynı biçimde anlaması için.

### Tüm denetim bulgularını bir anda göndermeli miyim?

Hayır. Öncelikli üç–beş maddeyle başlayın; geliştiricinin sprint planına sığacak miktarda.

### Geliştirici öneriyi uygulayamıyorsa?

Zorluğu ve alternatifi birlikte konuşun; veriyle gerekçeyi gösterin, gerekirse karar işletme sahibine taşınır.

### Uygulandıktan sonra ne yapmalıyım?

Kabul ölçütlerini doğrulayın, günlüğe yazın ve sonucu izleyip geliştiriciyle paylaşın.

## Kaynaklar

- [Google Arama Merkezi: rel="canonical" ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
