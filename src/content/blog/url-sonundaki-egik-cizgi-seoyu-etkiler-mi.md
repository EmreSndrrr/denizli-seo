---
title: "URL Sonundaki Eğik Çizgi SEO’yu Etkiler mi?"
description: "URL sonundaki eğik çizgi (trailing slash) SEO’yu etkiler mi? Google’ın iki sürümü nasıl ele aldığı, kopya içerik riski, tek sürüme yönlendirme ve test adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Sonunda eğik çizgi olan ve olmayan iki adresin tek sürüme yönlendirilmesi"
---

URL’nin sonunda eğik çizgi olup olmaması tek başına sıralamayı etkilemez; ama `ornek.com/hizmetler` ile `ornek.com/hizmetler/` Google için iki ayrı adrestir. İkisi de aynı içeriği 200 koduyla açıyorsa kopya sayfa oluşur. Google bunu çoğu zaman kendisi çözer; yine de en temiz yol bir sürümü seçmek, diğerini 301 ile ona yönlendirmek ve iç bağlantılarda, site haritasında ve canonical etiketinde hep aynı sürümü kullanmaktır. Hangisini seçtiğinizin önemi yoktur; tutarlı olmanız önemlidir.

Tek istisna kök adrestir: `ornek.com` ile `ornek.com/` aynıdır. Yönlendirme ve adres denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Google iki sürümü nasıl görür?

Google’ın bu konudaki yazısı eski ama hâlâ yayında ve net: geçmişte sonunda eğik çizgi olan adresler dizinleri, olmayanlar dosyaları belirtmek için kullanılırdı; ancak böyle bir zorunluluk yoktur. Google her adresi, dosya ya da dizin olmasına ya da eğik çizgi içerip içermemesine bakmaksızın **ayrı ayrı ve eşit şekilde** ele alır ([eğik çizgi ile veya eğik çizgi olmadan](https://developers.google.com/search/blog/2010/04/to-slash-or-not-to-slash?hl=tr)).

Bundan iki sonuç çıkar:

1. Hiçbir sürüm diğerinden “daha SEO uyumlu” değildir.
2. İki sürüm teknik olarak farklı içerik bile taşıyabilir. Google buna izin verir; ama kullanıcı için kafa karıştırıcı olduğunu, bu yüzden iki sürümün genellikle aynı içeriği yayınladığını not eder.

## Sorun nerede başlar?

Sorun, iki sürümün de 200 koduyla ve aynı içerikle açılmasıdır. Bu durumda:

- Aynı sayfa iki adreste dizine girmeye adaydır ([kopya içerik nedir?](/blog/kopya-icerik-nedir-nasil-onlenir/)).
- Dış bağlantılar ve iç bağlantılar iki adres arasında bölünür.
- Raporlarda aynı sayfa iki satırda görünür; analiz zorlaşır.
- Büyük sitelerde tarama iki kat adrese harcanır.

Google bu konuda rahatlatıcı bir not düşer: iki sürüm de 200 dönüyorsa davranışı değiştirebilir ya da olduğu gibi bırakabilirsiniz; birçok sitede yinelenen içerik bulunur ve bu, dizine ekleme sürecinde genellikle ele alınır. İdeal değildir, ama meşrudur. Yani bu bir “ceza” konusu değil, düzen konusudur.

## Sitenizi iki dakikada test edin

Google’ın önerdiği basit kontrol: aynı sayfanın iki sürümünü açın ve birinin diğerine yönlenip yönlenmediğine bakın.

1. Tarayıcıya `ornek.com/hizmetler` yazın. Adres çubuğu `ornek.com/hizmetler/` olarak değişiyor mu?
2. Tersini deneyin.
3. Komut satırında `curl -I https://ornek.com/hizmetler` ile durum kodunu görün: 301 mi, 200 mü?

Sonuçlar:

- **Biri diğerine yönleniyor:** Her şey yolunda. Google, yalnızca bir sürüm döndürülebiliyorsa bunun yinelenen içeriği azalttığı için yararlı olduğunu söyler.
- **İkisi de 200 dönüyor:** Tek sürüme indirmeyi değerlendirin.
- **Biri 404 veriyor:** Kullanıcılar ve başka siteler yanlış sürüme bağlantı verirse sayfa bulunamaz; yönlendirme ekleyin.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Tek sürüme indirme adımları

Google’ın tarif ettiği yol:

1. **Tercih edilen sürümü seçin.** Sitenizin dizin yapısı varsa dizin adreslerinde eğik çizgi kullanmak daha geleneksel yöntemdir; ama istediğiniz seçeneği kullanabilirsiniz.
2. **Tutarlı olun.** İç bağlantılarınızda hep tercih edilen sürümü kullanın.
3. **Site haritasına tercih edilen sürümü ekleyin.** İki sürümü birden eklemeyin ([site haritası](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
4. **Diğer sürümden 301 ile yönlendirin.** Mümkün değilse `rel="canonical"` iyi bir seçenektir ([canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
5. **Test edin.** Tercih edilen sürüm 200, diğeri tercih edilene 301 döndürmeli.
6. **Search Console’da tarama hatalarını izleyin.**

Bu sitede biz sonu `/` ile biten sürümü seçtik: `denizliseo.com/yerel-seo` adresi tek bir 301 ile `denizliseo.com/yerel-seo/` adresine gider; iç bağlantılar, canonical ve site haritası hep bu sürümü kullanır.

## Yönlendirme zinciri kurmayın

Eğik çizgi kuralı çoğu zaman başka kurallarla üst üste biner: http’den https’e, `www`’dan `www`’suz adrese, eğik çizgisizden eğik çizgiliye. Kötü yazılmış kurallar üç ayrı sıçrama üretir:

`http://www.ornek.com/hizmetler` → `https://www.ornek.com/hizmetler` → `https://ornek.com/hizmetler` → `https://ornek.com/hizmetler/`

Hedef, hangi sürümden gelinirse gelinsin **tek bir 301** ile son adrese ulaşmaktır ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)). `www` ve protokol birleştirmesi için [tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/) yazısına bakın.

## Dosya uzantılı adresler ve kök adres

- **Kök adres:** Google’a göre `https://ornek.com` ile `https://ornek.com/` eşdeğerdir ve biri diğerine yönlendirilemez; burada yapacak bir şey yoktur.
- **Dosya adresleri:** `katalog.pdf`, `sayfa.html` gibi uzantılı adreslerin sonuna eğik çizgi eklemeyin; `katalog.pdf/` anlamsız bir adrestir. Yönlendirme kuralınız dosya uzantılı adresleri dışarıda bıraksın.
- **Parametreli adresler:** `?sayfa=2` gibi sorgu dizeleri kuraldan etkilenmemeli; eğik çizgi yol kısmına aittir.

## İçerik yönetim sistemlerinde durum

- **WordPress:** Kalıcı bağlantı ayarındaki yapı sonda eğik çizgi içeriyorsa WordPress diğer sürümü kendiliğinden yönlendirir. Ayarı sonradan değiştirmek tüm adresleri değiştirir; değiştirecekseniz yönlendirmeleri test edin.
- **Statik site üreticileri (Astro, Hugo vb.):** Çıktı biçimi (`/sayfa/index.html` ya da `/sayfa.html`) hangi sürümün doğal olduğunu belirler; sunucu kuralını buna uydurun.
- **Hazır site kurucular ve e-ticaret altyapıları:** Çoğunda biçim sabittir; yapmanız gereken, iç bağlantıları o biçimde vermektir.

Hangi sistemde olursanız olun, menüdeki, içerikteki ve altbilgideki bağlantıları tercih edilen biçimde yazmak size kalır. Yönlendirmeye güvenip iç bağlantıları yanlış sürümle vermek, her tıklamada gereksiz bir sıçrama demektir.

## Sürümü sonradan değiştirmek

Site yıllardır eğik çizgisiz çalışıyorsa ve sorun yoksa, yalnızca “daha doğru” olduğu düşüncesiyle tüm adresleri değiştirmeyin. Bu, sitedeki her adresin değişmesi demektir: Google hepsini yeniden işlemek zorunda kalır, geçici dalgalanma olur ve kazanç yoktur. Değişiklik yalnızca şu durumlarda mantıklıdır:

- İki sürüm de 200 dönüyor ve birini seçmeniz gerekiyor.
- Siteyi zaten yeniliyor ya da taşıyorsunuz ([site yenilerken SEO kaybı](/blog/web-sitesi-yenileme-seo-kaybetmeden-nasil-yapilir/)).
- Yeni altyapı diğer biçimi zorunlu kılıyor.

Seçerken, bugün dizinde ve dış bağlantılarda baskın olan sürümü tercih etmek en az sarsıntılı yoldur.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir nakliye firmasının Search Console raporunda aynı hizmet sayfaları iki satırda görünüyor: biri eğik çizgili, biri eğik çizgisiz.

- **Teşhis:** İki sürüm de 200 dönüyor; menü eğik çizgisiz, blog yazılarındaki bağlantılar eğik çizgili sürüme gidiyor; canonical etiketi yok.
- **Düzeltme:** Eğik çizgili sürüm seçiliyor; sunucuya tek 301 kuralı ekleniyor; menü ve içerik bağlantıları düzeltiliyor; canonical ve site haritası aynı sürüme çekiliyor.
- **İzleme:** `curl -I` ile yönlendirmeler test ediliyor; raporda satırların birleşmesi izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Bir sürümün daha “SEO uyumlu” olduğuna inanmak.**
2. **İki sürümü de 200 ile açık bırakıp iç bağlantıları karışık vermek.**
3. **Site haritasına iki sürümü birden eklemek.**
4. **Yönlendirme kuralını dosya uzantılı adreslere de uygulamak.**
5. **Protokol, `www` ve eğik çizgi kurallarını zincir hâlinde bırakmak.**
6. **Sorun yokken tüm adresleri değiştirmek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki adres sürümlerini ve durum kodlarını tararız,
- tek 301 ile çalışan yönlendirme kuralını yazarız,
- iç bağlantı, canonical ve site haritasını aynı sürüme çekeriz,
- değişiklik sonrası tarama ve dizin durumunu izleriz.

Adres denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Eğik çizgili mi, eğik çizgisiz mi daha iyi?

İkisi de eşittir. Google her adresi ayrı ve eşit şekilde ele alır; önemli olan tek sürümde tutarlı olmaktır.

### İki sürüm de açılıyorsa ceza alır mıyım?

Hayır. Google bunu yaygın ve meşru bir durum olarak görür; yine de tek sürüme indirmek daha temizdir.

### Ana sayfada eğik çizgi fark eder mi?

Hayır. Kök adresin iki yazımı eşdeğerdir.

### Yönlendirme yapamıyorsam ne yapmalıyım?

`rel="canonical"` ile tercih ettiğiniz sürümü gösterin.

### Mevcut siteyi diğer biçime çevirmeli miyim?

Sorun yoksa hayır. Tüm adresleri değiştirmek gereksiz bir risk yaratır.

## Kaynaklar

- [Google Arama Merkezi Blogu: Eğik çizgi ile veya eğik çizgi olmadan](https://developers.google.com/search/blog/2010/04/to-slash-or-not-to-slash?hl=tr)
- [Google Arama Merkezi: rel="canonical" ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
