---
title: 301 ve 302 Yönlendirme Farkı Nedir?
description: "301 ve 302 yönlendirme farkı nedir? Kalıcı ve geçici yönlendirme, Google’ın yorumu, ne zaman hangisi seçilir ve kontrol adımları."
date: 2026-11-10
service: teknik-seo
imageAlt: "Eski adresten yeni adrese giden iki ok: kalıcı ve geçici"
---

301 kalıcı, 302 geçici yönlendirmedir. Bir sayfa kalıcı olarak yeni adrese taşındıysa 301; geçici bir süre başka yere yönlendirilecekse 302 kullanın. Google’a göre kalıcı yönlendirme, hedefin standart URL olması gerektiği yönünde zayıf bir sinyal olarak kullanılır; geçici yönlendirme ise bu sinyali taşımaz. En güvenilir yöntem sunucu tarafı yönlendirmedir; JavaScript yönlendirmesi yalnızca başka seçenek yoksa kullanılmalıdır.

Yönlendirme, bir adrese gelen ziyaretçiyi ve arama motorunu otomatik olarak başka bir adrese göndermektir. Site yenilerken, alan adı değiştirirken ya da bir sayfayı silip yerine başkasını koyarken kullanılır. Yanlış türü seçmek, yeni adresin dizine girmemesine ya da eski adresin sonuçlarda kalmasına yol açabilir. Bu yazıda iki türün farkını ve hangisini ne zaman kullanacağınızı anlatıyoruz. Bulunamayan sayfalar için [404 hatası](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/) yazımıza bakabilirsiniz.

## Yönlendirme nedir, neden kullanılır?

Google’ın yönlendirme rehberi, yönlendirmenin bir URL’ye gelen ziyaretçiyi ve Googlebot’u başka bir URL’ye gönderdiğini anlatır ([yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)). Kullanım nedenleri:

- Sayfayı yeni adrese taşıdınız.
- Alan adını ya da adres yapısını değiştirdiniz.
- `http`’den `https`’e geçtiniz.
- İki sayfayı birleştirdiniz.
- `www` ve `www`’suz sürümleri tek adreste topladınız.

## 301 ve 302 arasındaki fark

| | 301 (kalıcı) | 302 (geçici) |
| --- | --- | --- |
| Anlamı | “Bu sayfa kalıcı olarak taşındı” | “Bu sayfa geçici olarak başka yerde” |
| Google’ın yorumu | Hedefin standart URL olması gerektiği yönünde zayıf bir sinyal | Hedefi standart URL yapmak için sinyal olarak kullanılmaz |
| Ne zaman? | Taşıma, alan adı değişikliği, http→https | Kısa süreli bakım, geçici kampanya, A/B testi |
| Eski adres | Zamanla dizinden çıkar | Dizinde kalabilir |

Google, kalıcı yönlendirmede Googlebot’un yönlendirmeyi izlediğini ve dizine ekleme hattının bunu hedefin standart olması gerektiği yönünde zayıf bir sinyal olarak kullandığını belirtir. Yönlendirmenin geri döndürülmeyeceğinden emin olduğunuzda kalıcı yönlendirme kullanılmalıdır. Geçici yönlendirmede ise Googlebot yönlendirmeyi izler ama hedefin standart olması gerektiği yönünde bir sinyal olarak kullanmaz; diğer standartlaştırma sinyalleri varsa hedef sayfa yine de dizine eklenebilir.

HTTP durum kodu olarak kalıcı yönlendirmeler 301 ve 308; geçici yönlendirmeler 302, 303 ve 307’dir.

## Hangi yönlendirme yöntemi tercih edilmeli?

Google, yöntemleri Google’ın doğru yorumlama olasılığına göre sıralar:

- **Sunucu tarafı yönlendirme (301, 302 vb.):** En güvenilir; sunucu yapılandırması gerekir
- **`meta refresh` yönlendirmesi:** Sunucu tarafı yapılamıyorsa; 0 saniye kalıcı gibi, daha uzun süre geçici gibi yorumlanır
- **JavaScript yönlendirmesi:** Yalnızca sunucu tarafı ya da meta refresh yapılamıyorsa kullanın

Sunucu tarafı yönlendirmeler, sunucu yapılandırma dosyalarına (ör. Apache’de .htaccess) erişim ya da yönlendirme başlıklarını sunucu tarafı betikle gönderme gerektirir. Siteniz bir içerik yönetim sistemi kullanıyorsa yönlendirme eklentisi ya da panel ayarı sunucu tarafı yönlendirmeyi sizin yerinize yapabilir.

## PageRank kaybı olur mu?

Google’ın site taşıma rehberine göre 301 ve diğer kalıcı yönlendirmeler PageRank’te kayba neden olmaz ([site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)). Yani “301 sıralama kaybettirir” kaygısıyla yönlendirmeden kaçınmayın; yönlendirme yapmamak, eski adresin görünürlüğünü kaybetmenin daha büyük bir yoludur.

## Ne zaman 301, ne zaman 302 kullanılır?

Karar kuralı: **Yönlendirme geri dönmeyecekse 301; geri dönecekse 302.**

- **Siteyi yeni alan adına taşıdık:** 301
- **`http` → `https`:** 301
- **`www` → `www`’suz (ya da tersi):** 301
- **İki ürün sayfasını birleştirdik:** 301
- **Silinen sayfa için en yakın benzeri var:** 301
- **Sayfa iki hafta bakımda, sonra geri gelecek:** 302
- **Mevsimlik kampanya sayfasına geçici yönlendirme:** 302
- **Test için bir ziyaretçi grubunu başka sayfaya gönderme:** 302

Kalıcı bir taşımada yanlışlıkla 302 kullanmak, yeni adresin standart olarak görülmemesine ve eski adresin dizinde kalmasına yol açabilir.

## Yönlendirme zincirleri ve döngüleri

- **Zincir:** A → B → C şeklinde birden fazla yönlendirme. Gereksizdir; A’yı doğrudan C’ye yönlendirin.
- **Döngü:** A → B → A. Sayfa hiç açılmaz; bunu bulup düzeltin.
- **Eski yönlendirmelerin üstüne yenisini eklemek:** Site birkaç kez yenilendiyse zincirler birikir.

Kontrol: Eski adresi tarayıcıya yazın ve son adrese doğrudan gidip gitmediğine bakın.

## Yönlendirmeyi nasıl kontrol edersiniz?

1. Eski adresi tarayıcıda açın; yeni adrese gidiyor mu?
2. Search Console’da URL Denetleme ile hem eski hem yeni adresi inceleyin: Google’ın seçtiği standart sayfa hangisi? Adımlar [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızda.
3. Sayfa dizine ekleme raporunda “Yönlendirme” durumunu inceleyin: Google’ın rapor sayfası, yönlendirme URL’lerinin dizine eklenmediğini, yalnızca yönlendirme hedefinin eklendiğini söyler.
4. Site haritasında yalnızca hedef adreslerin olduğundan emin olun.
5. Zincir ya da döngü olmadığını kontrol edin.

## Yönlendirmeleri ne kadar süre tutmalısınız?

Bu yazıda Google’a atfedilen kesin bir süre yoktur. Genel tavsiye olarak, bağlantı alan ve hâlâ ziyaret edilen adresler için yönlendirmeyi uzun süre, mümkünse süresiz tutun. Dışarıdan bağlantı alan bir adrese yönlendirmeyi kaldırmak, o bağlantıların boşa gitmesine yol açar.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Sarayköy’de bir inşaat malzemesi bayisi yeni siteye geçmiş. Eski adres `/urunler/cimento` yeni sitede `/cimento/` olmuş. Yönlendirme eklentisi tüm eski adresleri 302 ile yönlendirmiş. Aylar sonra Google’da eski adresler görünmeye devam ediyor ve yeni sayfalar düşük görünürlükte.

Düzeltme: eski adres eşleme tablosuna göre tüm kalıcı taşımalar 301’e çevriliyor; yönlendirme zincirleri kısaltılıyor; Search Console’da standart sayfa seçimi ve Sayfa dizine ekleme raporu birkaç hafta izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Adres eşleme tablosu şablonu

Site yenilerken ya da taşırken yönlendirmeleri önceden tabloya yazın:

- **/eski-hizmet:** yeni adres: /yeni-hizmet/; tür: 301; not: Aynı içerik taşındı
- **/eski-blog/yazi-1:** yeni adres: /blog/yazi-1/; tür: 301; not: Adres yapısı değişti
- **/kampanya-2023:** yeni adres: —; tür: 404; not: Bitmiş kampanya, karşılığı yok
- **/bakimda:** yeni adres: /ana-sayfa/; tür: 302; not: Geçici bakım sayfası

Google’ın site taşıma rehberi de geçerli URL’lerden yeni biçimlerine bir URL eşlemesi hazırlamayı ve sunucuyu bu eşlemeye göre yönlendirecek şekilde yapılandırmayı önerir. Ayrıntı için [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/) yazımıza bakın.

## Sık yapılan yönlendirme hataları

1. **Kalıcı taşımada 302 kullanmak.**
2. **Yönlendirme zincirleri.** A→B→C yerine A→C.
3. **Yönlendirme döngüsü.**
4. **Alakasız sayfaya toplu yönlendirme.**
5. **Eski yönlendirmeleri erken kaldırmak.**
6. **Site haritasında yönlendirilen adresleri bırakmak.**
7. **http ve https ya da www karışıklığını çözmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Yönlendirmeyi yanlış türle kurmak sessizce görünürlük kaybettirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- site yenileme ve taşımalarda adres eşleme tablosu hazırlar, taşınan sayfalara 301 yönlendirmesi kurarız,
- mevcut yönlendirmelerin türünü, zincirlerini ve döngülerini denetleriz,
- http/https ve www karmaşasını tek adreste toplarız,
- yönlendirmeleri Search Console’da izler, sonuçları yazılı raporlarız.

Sitenizi yenilemeden önce yönlendirme planı yaptırmak isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

### Yönlendirme sayfa hızını etkiler mi?

Her yönlendirme küçük bir gecikme ekler; zincir olursa sürenin uzamasına yol açabilir. Bu yüzden zincirleri kısaltın.

### http’den https’e yönlendirme hangi tür olmalı?

Kalıcı bir değişiklik olduğu için 301 (ya da 308) kullanılır.

## Sık sorulan sorular

### 302 ile uzun süre kalırsam ne olur?

Google geçici yönlendirmeyi, hedefi standart yapmak için bir sinyal olarak kullanmaz. Kalıcı bir taşımada 302 kullanmak, eski adresin dizinde kalmasına yol açabilir; bu durumda 301’e geçin.

### 301 yönlendirmesi sıralamamı düşürür mü?

Google’a göre 301 ve diğer kalıcı yönlendirmeler PageRank’te kayba neden olmaz.

### JavaScript ile yönlendirme yapabilir miyim?

Google, yalnızca sunucu tarafı veya meta refresh yönlendirmesi yapamıyorsanız JavaScript yönlendirmesi kullanmanızı söyler.

### Yönlendirmeyi kendim yapabilir miyim?

İçerik yönetim sisteminizin yönlendirme eklentisi ya da paneli çoğu zaman yeterlidir. Sunucu dosyasını düzenlemek yanlış yapılırsa siteyi bozabilir; emin değilseniz teknik destek alın.

## Kaynaklar

- [Google Search Central: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Google Search Central: site taşıma işlemleri](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
