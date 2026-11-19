---
title: "Silinen Sayfalarda 404 mü 410 mu Kullanılmalı?"
description: "Silinen sayfalarda 404 mü 410 mu kullanılmalı? Google’ın 4xx yaklaşımı, 410’un anlamı, 301 ile fark ve silinmiş sayfaları yönetme kontrol listesi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Silinen bir sayfanın 404 ve 410 durum kodlarıyla iki farklı biçimde yanıtlanması"
---

Kalıcı olarak silinen bir sayfa için 404 (bulunamadı) ya da 410 (kalıcı olarak gitti) kullanabilirsiniz; Google açısından aradaki fark küçüktür. Google, 429 dışındaki 4xx hata kodlarını aynı şekilde işler: içeriğin mevcut olmadığını bildirir ve sayfa daha önce dizine eklenmişse onu dizinden kaldırır. Pratikte çoğu site için 404 yeterlidir; 410, “bu sayfa bilerek ve kalıcı olarak kaldırıldı” demek istediğinizde anlamlı bir netlik sağlar.

Bu yazıda iki kodun anlamını, Google’ın yaklaşımını, 301 yönlendirmesiyle farkını ve silinen sayfaları yönetmek için pratik bir karar kuralını anlatıyoruz. Durum kodlarının genel tablosu için [HTTP durum kodları: 200, 301, 404, 500](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## 404 ve 410 ne anlama gelir?

**404 (Not Found)**, sunucunun istenen sayfayı bulamadığını söyler. Sayfa hiç var olmamış, yanlış yazılmış ya da kaldırılmış olabilir. Kalıcı mı geçici mi olduğu belirsizdir.

**410 (Gone)** ise sayfanın bir zamanlar var olduğunu ama kalıcı olarak kaldırıldığını ve yerine geçen bir adres olmadığını belirtir. Yani 404’e göre daha açık bir mesajdır.

İki kod da “sayfa yok” der; fark, niyetin açıklığındadır. Ziyaretçi için ikisi de aynı hata sayfasıyla sonuçlanır; fark yalnızca botların ve araçların okuduğu durum kodundadır.

## Google ikisine farklı mı davranır?

Google’ın HTTP durum kodları rehberi, 429 dışındaki tüm 4xx hatalarının aynı şekilde işlendiğini belirtir: Google tarayıcıları, sonraki işleme sistemine içeriğin mevcut olmadığını bildirir; URL daha önce dizine eklenmişse dizine ekleme hattı tarafından dizinden kaldırılır ([HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Aynı rehber 404 ve 410’u 4xx grubunda sayar.

Bunun anlamı: Google’ın dizinden kaldırma davranışı bakımından 404 ile 410’u ayırmanız gerekmez. Ancak başka botlar ve izleme araçları farklı yorumlayabilir; bazı araçlar 410’u “bilerek kaldırıldı” olarak işaretler. Bu yüzden 410 kullanmak zararsızdır, ama 404 kullanmak da Google açısından yeterlidir.

> **Hizmet almak için iletişime geçin.** Silinen ve taşınan sayfalarınızın durum kodlarını birlikte denetleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi durumda 404, hangisinde 410?

| Durum | Önerilen kod | Gerekçe |
| --- | --- | --- |
| Sayfa hiç var olmamış, yanlış adres | 404 | Doğal “bulunamadı” |
| Sayfa kaldırıldı, geri dönmeyecek, karşılığı yok | 404 ya da 410 | İkisi de uygun; 410 niyeti netleştirir |
| Sayfa geçici olarak kaldırıldı | 404 ya da duruma göre 503 | Kalıcı kod kullanmayın |
| Sayfanın yeni karşılığı var | 301 | Silmek yerine yönlendirin |
| Süresi dolmuş ilan ya da kampanya | 404 ya da 410; karşılığı varsa 301 | Ayrıntı için ilgili yazıya bakın |

Karar kuralı: sayfanın yerini alan bir sayfa varsa 301; yoksa 404 ya da 410. Yeni karşılığı olan sayfayı 404 ya da 410 yapmak, o sayfanın değerini ve bağlantılarını kaybettirir.

## 410 hızlı kaldırma sağlar mı?

Bazı kaynaklar 410’un sayfayı 404’ten daha hızlı dizinden çıkardığını söyler. Google’ın durum kodu rehberi 429 dışındaki 4xx’lerin aynı işlendiğini yazdığı için bu iddiaya güvenmemek, hızlı çıkarmak istiyorsanız başka araçları kullanmak daha doğrudur. Sonuçlarda hızlı kaldırma gerekiyorsa Search Console’daki kaldırma aracı geçici gizleme sağlar ([Search Console URL kaldırma aracı ne zaman kullanılır?](/blog/search-console-url-kaldirma-araci-ne-zaman-kullanilir/)). Kalıcı çözüm yine sayfanın doğru durum koduyla yanıt vermesidir.

## 404 sayfasını nasıl kurarsınız?

Silinen sayfa doğru kodu döndürse bile ziyaretçi bir hata sayfasıyla karşılaşır. İyi bir 404 sayfası:

- Net bir “sayfa bulunamadı” mesajı verir,
- ana sayfaya, hizmetlere ve iletişime bağlantı sunar,
- site içi arama ya da önemli sayfalara kısayol içerir,
- ama durum kodu mutlaka 404 olur; 200 dönerse “soft 404” sorunu doğar ([soft 404 nedir? nasıl düzeltilir?](/blog/soft-404-nedir-nasil-duzeltilir/)).

404 sayfası tasarımı için [404 sayfası nasıl tasarlanır?](/blog/404-sayfasi-nasil-tasarlanir/) yazısına bakabilirsiniz.

## Silinen sayfalarla ilgili adım adım yol

1. **Silinen sayfaların listesini çıkarın.** Eski site haritası, Search Console ve analiz verisi kaynak olur.
2. **Her sayfanın önemini ölçün.** Trafiği, dış bağlantısı ve iç bağlantısı var mı?
3. **Karşılığı olanları 301 ile yönlendirin.** Ana sayfaya toplu yönlendirmeyi önlemek için en yakın içerik sayfasını seçin.
4. **Karşılığı olmayanları 404 ya da 410 yapın.** Tek bir kodda tutarlı olun.
5. **İç bağlantıları temizleyin.** Silinen sayfaya giden bağlantılar kırık bağlantıdır ([kırık bağlantı yöntemi](/blog/kirik-baglanti-yontemiyle-backlink-kazanmak/) yazısındaki tespit adımları da işinize yarar).
6. **Site haritasını güncelleyin.** Silinen sayfalar haritada kalmasın.
7. **Search Console’da izleyin.** 404 raporunda beklenmedik önemli sayfa var mı bakın.

Sayfanın kaldırılması geçici bir kesintiyse (bakım gibi) 404 değil 503 doğrudur ([503 hatası SEO’yu nasıl etkiler?](/blog/503-hatasi-seoyu-nasil-etkiler-bakim-ve-kesintiler/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir düğün salonunun sitesinde eski kampanya sayfaları var; üç yıl önceki “2023 Kış Paketi” gibi sayfalar artık geçerli değil ve yerine geçen bir sayfa yok. Hizmet sayfaları ise yenilenmiş ve eski adreslerden bazıları yeni adreslere taşınmış.

Karar: taşınan hizmet sayfaları 301 ile yeni adreslerine yönlendiriliyor; yerine geçen sayfası olmayan kampanya sayfaları 410 olarak ayarlanıyor (niyeti netleştirmek için); hiç var olmamış adresler 404 kalıyor. İç bağlantılar temizleniyor ve site haritası güncelleniyor. Search Console’da iki ay boyunca 404 raporu izleniyor. Bu örnek sonuç vaadi değildir; karar sırasını gösterir.

## Sık yapılan hatalar

1. **Her silinen sayfayı ana sayfaya yönlendirmek.** Google bunu soft 404 gibi görebilir; kullanıcı da yanıltılır.
2. **Silinen sayfayı 200 ile yanıtlamak.** Özel hata sayfası 404 kodu döndürmeli.
3. **Karşılığı olan sayfayı 404 yapmak.** 301 kullanın.
4. **Silinen sayfalar için 410 ile hızlı sonuç beklemek.** Google 4xx’leri aynı işler.
5. **Silinen sayfayı site haritasında bırakmak.** Haritada yalnızca dizine girmesini istediğiniz adresler olsun.
6. **İç bağlantıları temizlememek.** Kırık bağlantılar hem ziyaretçiyi hem tarama kaynağını yorar.

## Toplu silmelerde dikkat edilecekler

Yüzlerce sayfayı aynı anda silecekseniz (eski ürünler, kampanyalar, etiket sayfaları), işi üç gruba ayırın: değeri olanlar, karşılığı olanlar ve gerçekten gereksiz olanlar. Değeri olanlar (trafik, dış bağlantı ya da sipariş getirenler) çoğu zaman silinmemeli, güncellenmelidir. Karşılığı olanlar en yakın sayfaya 301 ile gitmelidir. Yalnızca gerçekten gereksiz olanlar 404 ya da 410 almalıdır.

Silme işleminden önce Search Console’da son altı ayın tıklamalarına ve bağlantılar raporuna bakmak, yanlışlıkla değerli bir sayfayı silmeyi önler. Silmeyi tek seferde değil, parti parti yapmak da güvenlidir: ilk partiden sonra Search Console’da birkaç hafta bekleyip beklenmedik bir kayıp olup olmadığına bakın. Bu sabır, toplu silmelerde en çok işe yarayan önlemdir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- silinen ve taşınan sayfaları listeler, her biri için 301, 404 ya da 410 kararını yazılı veririz,
- özel 404 sayfasının doğru durum kodu döndürdüğünü test ederiz,
- iç bağlantıları ve site haritasını temizler, geliştiriciye net talimat veririz,
- sonuç vaat etmeden, Search Console’daki 404 ve yönlendirme raporlarını izleriz.

Silinen sayfalarınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizdeki silinen sayfaların durum kodlarını birlikte kontrol edelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### 404 sıralamama zarar verir mi?

Gerçekten silinmiş sayfalar için 404 normaldir ve sitenin geneline zarar vermez. Önemli ve bağlantı almış sayfaların yanlışlıkla 404 olması ise sorundur.

### 410 kullanmak zorunda mıyım?

Hayır. Google 429 dışındaki 4xx’leri aynı işler; 404 yeterlidir. 410 yalnızca kalıcı kaldırma niyetini netleştirir.

### Silinen sayfa ne kadar sürede dizinden çıkar?

Google’ın sayfayı yeniden tarama zamanına bağlıdır; birkaç gün ile birkaç hafta arasında değişebilir. Garanti verilemez.

### Silinen sayfayı ana sayfaya yönlendirebilir miyim?

Önermiyoruz. Yeni karşılığı olmayan sayfayı ilgisiz bir sayfaya yönlendirmek kullanıcıyı yanıltır ve soft 404 yorumuna yol açabilir. Gerçek karşılık yoksa 404 ya da 410 kullanın.

### Silinen sayfaya dış bağlantı varsa ne yapmalıyım?

Yakın içerikli bir sayfa varsa 301 ile yönlendirin; böylece bağlantının değeri korunur. Karşılığı yoksa 404 bırakabilirsiniz.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının, ağ ve DNS hatalarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
