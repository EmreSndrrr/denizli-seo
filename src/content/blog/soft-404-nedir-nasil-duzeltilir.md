---
title: Soft 404 Nedir? Nasıl Düzeltilir?
description: "Soft 404 nedir, neden olur, nasıl düzeltilir? Google’ın tanımı, 404 durum kodu, boş ve ince sayfalar, tek sayfalık uygulamalar ve kontrol adımları."
date: 2026-11-10
service: teknik-seo
imageAlt: "“Sayfa bulunamadı” yazan ama yeşil onaylı bir sayfa"
---

Soft 404, bir sayfanın “bulunamadı” içeriği gösterirken sunucudan 404 değil 200 (başarılı) durum kodu döndürmesidir. Google’ın Sayfa dizine ekleme raporu bunu şöyle açıklar: sayfa isteği 404 yanıt kodu değil, kullanıcı dostu bir “bulunamadı” mesajı döndürmüştür. Google’ın önerisi: gerçekten bulunamayan sayfalar için 404 yanıt kodu döndürmek ya da sayfanın bir hata olmadığını anlaması için sayfaya daha fazla bilgi eklemek.

Soft 404, sinsi bir sorundur: sayfa ziyaretçiye “bulunamadı” der, ama sunucu Google’a “her şey yolunda” der. Google bunu fark eder ve sayfayı dizine eklemeyebilir. Bu yazıda soft 404’ün ne olduğunu, nasıl oluştuğunu ve nasıl düzeltileceğini anlatıyoruz. Normal 404’ler için [404 hatası: düzeltmeli mi, yönlendirmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/) yazımıza bakabilirsiniz.

## Soft 404 nedir?

Google’ın HTTP durum kodu rehberi, bir sayfa 200 dönerken içeriği “sayfa bulunamadı” gibi bir hataya işaret ediyorsa ya da sayfa boş görünüyorsa Search Console’un soft 404 hatası gösterdiğini söyler ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Sayfa dizine ekleme raporu sayfası da şunu açıklar: bu, sayfa isteğinin 404 HTTP yanıt kodu değil, kullanıcı dostu bir “bulunamadı” mesajı döndürmesi demektir; çözüm, gerçekten bulunamayan sayfalar için 404 dönmek ya da sayfaya daha fazla bilgi eklemektir ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).

## Gerçek 404 ile soft 404’ün farkı

| | Gerçek 404 | Soft 404 |
| --- | --- | --- |
| Durum kodu | 404 | 200 |
| Sayfada ne yazıyor? | “Bulunamadı” | “Bulunamadı” ya da boş/çok az içerik |
| Google nasıl görür? | Sayfa yok; dizine eklemez | Hata gibi görünen ama başarılı dönen sayfa |
| Sonuç | Sorun yok | Search Console’da uyarı; dizine eklenmeyebilir |

Google, 4xx dönen URL’lerin dizine eklenmediğini ve dizindekilerin kaldırıldığını belirtir. Soft 404’te ise sunucu 200 dönerken sayfa hata gibi göründüğü için Google bunu tahmin etmeye çalışır.

## Soft 404 neden oluşur?

1. **Özel 404 sayfası yanlış kodlanmış.** Sayfa güzel görünür ama 200 döner.
2. **Boş kategori ya da arama sonucu.** “Bu kategoride ürün yok” yazan sayfa 200 dönüyor.
3. **Silinen sayfa ana sayfaya ya da genel bir sayfaya yönlendirilmiş.** Google bunu “bulunamadı gibi” görebilir.
4. **İnce ya da boş içerik.** Çok az metin içeren, işlevsiz sayfalar.
5. **Tek sayfalık uygulamalar (SPA).** İstemci tarafı yönlendirmede anlamlı durum kodu dönmek zor olabilir.
6. **Stokta olmayan ürün sayfaları.** İçerik kalmamış, sayfa boşalmış.

## Soft 404 nasıl bulunur?

1. **Search Console, Sayfa dizine ekleme raporu.** “Soft 404” durumundaki sayfaları listeleyin.
2. **URL Denetleme ve canlı test.** Google’ın yardım sayfası, Google’ın sayfayı nasıl gördüğünü öğrenmek için canlı URL denetleme testi çalıştırmayı ve test edilen sayfayı göstermeyi önerir.
3. **Sayfayı elle açın.** Sayfa gerçekten boş ya da “bulunamadı” mı?
4. **Durum kodunu kontrol edin.** Tarayıcı geliştirici araçlarında ya da bir durum kodu denetleyicide sayfanın 200 mü 404 mü döndüğüne bakın.

## Nasıl düzeltilir?

Karar kuralı: **Sayfa gerçekten yoksa 404 dönsün; sayfa varsa içeriği yeterli olsun.**

- **Gerçekten silinmiş sayfa:** 404 (ya da 410) durum kodu döndürün
- **Sayfa taşındı, karşılığı var:** 301 ile yeni sayfaya yönlendirin
- **Özel 404 sayfası 200 dönüyor:** Yazılımcıya 404 durum kodu döndürtün
- **Boş kategori:** Kategoriyi 404 yapın ya da gerçek içerik ekleyin (ürünü olmadığında alternatif öneri, açıklama)
- **İnce içerik sayfası:** Özgün ve yararlı içerikle derinleştirin; yoksa kaldırın ya da birleştirin
- **Stokta olmayan ürün:** “Stokta yok” bilgisi ve benzer ürün önerisiyle sayfayı anlamlı tutun; kalıcı kaldırıldıysa 404 ya da yönlendirme
- **SPA:** Aşağıdaki stratejilerden birini uygulayın

## Tek sayfalık uygulamalarda soft 404

Google’ın JavaScript rehberi, istemci taraflı oluşturulan tek sayfalık uygulamalarda yönlendirmenin çoğu zaman istemci tarafında yapıldığını, bu durumda anlamlı HTTP durum kodlarının kullanılmasının mümkün ya da pratik olmayabileceğini belirtir. Soft 404’ten kaçınmak için rehberin önerdiği stratejilerden biri, bulunamayan adres için sunucunun 404 durum koduyla bir hata sayfasına yönlendirilmesini sağlamaktır ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)). Küçük işletme siteleri çoğunlukla SPA kullanmaz; kullanıyorsanız yazılımcınızla bu konuyu konuşun. Daha geniş bilgi için [JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/) yazımıza bakın.

## Düzelttikten sonra

1. Sayfayı yeniden denetleyin ve doğru durum kodunu doğrulayın.
2. Search Console’da raporun güncellenmesini izleyin; güncelleme zaman alabilir.
3. 404 yaptığınız sayfalar site haritasından çıkarılsın.
4. Dizine girmesi gereken sayfaları iyileştirdiyseniz yeniden tarama isteyin; bkz. [dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyonun sitesinde “Aradığınız sayfa bulunamadı” yazan şık bir sayfa var; ama sunucu bu sayfa için 200 dönüyor. Search Console’da yüzlerce “soft 404” görünüyor. Ayrıca eski rezervasyon adresleri bu sayfaya düşüyor.

Düzeltme: özel 404 sayfasının 404 durum kodu döndürmesi sağlanıyor; eski adreslerden karşılığı olanlar (oda sayfaları) 301 ile yeni adreslere yönlendiriliyor; karşılığı olmayan eski adresler gerçek 404 kalıyor; Search Console’daki rapor birkaç hafta izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Boş kategori ve stokta olmayan ürün: pratik çözümler

E-ticarette soft 404’ün en sık kaynağı budur. Karar tablosu:

- **Kategori geçici olarak boş, dönecek:** Sayfayı tutun; açıklama, alternatif kategori ve arama kutusu ekleyin
- **Kategori kalıcı olarak kapandı:** Uygun kategoriye 301; karşılığı yoksa 404
- **Ürün geçici stok dışı:** Sayfa kalsın; “stokta yok”, haber ver seçeneği, benzer ürünler
- **Ürün kalıcı kaldırıldı:** Benzer ürüne 301 ya da 404

Sayfa gerçekten işlevsiz ve içeriksizse Google’ın “soft 404” kararı yerinde olabilir.

## Soft 404 kontrolünü rutin hale getirin

Ayda bir Sayfa dizine ekleme raporuna bakın; yeni soft 404 var mı? Siteyi yeniledikten, kategori sildikten ya da ürün kataloğunu güncelledikten sonra haftalık kontrol yapın. Her uyarı için “bu sayfa gerçekten yok mu, yoksa yetersiz mi?” sorusunu sorun.

## Denizli SEO bu konuda nasıl yardımcı olur?

Soft 404’ü bulmak ve kökünü çözmek teknik inceleme ister. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da soft 404 ve 404 veren sayfaları listeler, önemli olanları ayırırız,
- özel 404 sayfasının doğru durum kodunu döndürmesini sağlarız,
- taşınan sayfalara 301 yönlendirmesi kurar, boş ve ince sayfaları yönetiriz,
- değişiklikleri yazılı rapor olarak sunarız.

Sitenizde soft 404 uyarısı varsa [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Soft 404 sayısı çoksa ne yapmalıyım?

Önce önemli sayfalara bakın. Çoğu ince ya da boş sayfaysa topluca 404 vermek ya da birleştirmek mantıklı olabilir.

### 410 kullanmalı mıyım?

Google’a göre 429 dışındaki 4xx hataları aynı işlenir; 404 yeterlidir.

## Sık sorulan sorular

### Soft 404 ceza mı?

Google bunu bir ceza olarak değil, dizin durumu olarak sunar. Ama dizine girmesi gereken sayfa soft 404 görünüyorsa görünürlük kaybedersiniz.

### Özel 404 sayfam neden soft 404 gösteriyor?

Büyük olasılıkla sayfa 200 durum kodu döndürüyordur. Yazılımcınızdan 404 kodunu döndürmesini isteyin.

### Silinen sayfaları ana sayfaya yönlendirmeli miyim?

Alakasız yönlendirme kullanıcıyı yanıltır ve soft 404 gibi görülebilir. Karşılığı olan sayfaya yönlendirin; yoksa 404 bırakın.

### Soft 404 uyarısı yanlış olabilir mi?

Olabilir; sayfanız gerçekten yararlı içeriğe sahipse, Google’ın önerisi sayfaya daha fazla bilgi eklemektir.

## Kaynaklar

- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Search Central: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Search Central: JavaScript SEO ile ilgili temel bilgileri anlama](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
