---
title: "Meta Refresh ile HTTP Yönlendirmesi Arasındaki Fark Nedir?"
description: "Meta refresh ile HTTP yönlendirmesi arasındaki fark nedir? Google’ın kalıcı ve geçici yönlendirme sinyalleri, 0 saniye kuralı ve sunucu tarafı yönlendirmeye geçiş."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sunucu tarafı yönlendirme ile sayfa içine yazılmış meta refresh yönlendirmesinin karşılaştırması"
---

HTTP yönlendirmesi sunucunun, sayfa içeriği gönderilmeden önce ziyaretçiyi ve botu başka adrese yollamasıdır; meta refresh ise sayfa yüklendikten sonra HTML içindeki bir etiketle tarayıcıyı başka bir adrese göndermesidir. Google ikisini de anlar, ama sunucu tarafı yönlendirmeyi (301, 308 gibi) en güvenilir yol olarak önerir. Meta refresh yalnızca sunucu tarafı yönlendirme yapamadığınızda, genellikle paylaşımlı ya da kısıtlı barındırma ortamlarında, son çare olarak kullanılmalıdır.

Bu yazıda iki yöntemin nasıl çalıştığını, Google’ın bunları nasıl yorumladığını, hangi durumda meta refresh’in kaçınılmaz olduğunu ve sunucu tarafına nasıl geçileceğini anlatıyoruz. Yönlendirme kodlarının genel mantığı için [301 ve 302 yönlendirme farkı nedir?](/blog/301-ve-302-yonlendirme-farki-nedir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## HTTP yönlendirmesi nasıl çalışır?

Sunucu tarafı yönlendirmede ziyaretçi ya da bot bir adres istediğinde sunucu içerik göndermek yerine bir durum kodu (örneğin 301) ve yeni adresi içeren bir başlık gönderir. Tarayıcı ya da bot doğrudan yeni adrese gider. Sayfanın içeriği hiç yüklenmez; işlem çok hızlıdır ve arama motoru, yönlendirmenin kalıcı mı geçici mi olduğunu durum kodundan anlar.

Google’ın yönlendirmeler rehberi, sunucu tarafı yönlendirmeleri hem Google Arama’yı hem kullanıcıları doğru sayfaya yönlendirmenin en iyi yolu olarak tanımlar ([Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).

## Meta refresh nasıl çalışır?

Meta refresh, sayfanın `<head>` bölümüne eklenen bir HTML etiketidir:

```html
<meta http-equiv="refresh" content="0; url=https://alanadi.com/yeni-sayfa/">
```

`content` değerindeki ilk sayı, yönlendirmeden önce beklenecek saniyedir. Sayfa önce sunucudan tam olarak yüklenir, ardından tarayıcı belirtilen süre sonunda yeni adrese gider. Yani ziyaretçi kısa bir an da olsa eski sayfayı yükler; süre uzunsa ekranda bir “yönlendiriliyorsunuz” mesajı görür.

> **Hizmet almak için iletişime geçin.** Yönlendirmelerinizi sunucu tarafında doğru kurmak için birlikte çalışalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Google meta refresh’i nasıl yorumlar?

Google’ın yönlendirme rehberi, yönlendirme türlerini şöyle ayırır:

- **Kalıcı yönlendirme sinyalleri:** HTTP 301 ve 308, ve 0 saniyelik meta refresh (ya da 0 saniyelik HTTP yenileme).
- **Geçici yönlendirme sinyalleri:** HTTP 302, 303 ve 307, ve 0 saniyeden uzun meta refresh.
- **JavaScript ile yönlendirme:** Yalnızca sunucu tarafı ya da meta refresh yönlendirmeleri kullanılamıyorsa son çare olarak önerilir ([Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).

Yani Google 0 saniyelik meta refresh’i kalıcı yönlendirme, 0 saniyeden uzun olanı geçici yönlendirme olarak yorumlar. Bu nedenle, kalıcı taşıma için meta refresh kullanıyorsanız süre mutlaka 0 olmalıdır; üç saniye beklemeli bir yönlendirme geçici sayılır ve yeni adresin standart seçilmesini zayıflatabilir.

## İkisi arasındaki farklar

| Özellik | HTTP yönlendirmesi | Meta refresh |
| --- | --- | --- |
| Nerede çalışır? | Sunucuda, içerik gönderilmeden önce | Sayfa yüklendikten sonra tarayıcıda |
| Hız | Çok hızlı | Sayfa yüklenmeden yönlenmez; daha yavaş |
| Kalıcı/geçici | Durum koduyla net (301/308, 302/307) | 0 sn kalıcı, daha uzunsa geçici sinyal |
| Google önerisi | En iyi yöntem | Sunucu tarafı mümkün değilse |
| Kullanıcı deneyimi | Kesintisiz | Kısa titreme ya da bekleme olabilir |
| Erişilebilirlik | Sorunsuz | Zamanlı yönlendirmeler ekran okuyucu ve klavye kullanıcılarını zorlayabilir |

Özet olarak HTTP yönlendirmesi daha hızlı, daha net ve daha güvenilirdir. Meta refresh, hosting ya da platform kısıtı yüzünden başka seçeneğin olmadığı durumlarda başvurulan bir yoldur.

## Meta refresh ne zaman kaçınılmaz olur?

Şu durumlarda sunucu tarafı yönlendirme yapamayabilirsiniz:

- Yalnızca statik HTML dosyası yükleyebildiğiniz basit barındırma ortamlarında.
- Site oluşturucu (hazır site) platformlarında sunucu ayarlarına erişiminiz yoksa ve platform yönlendirme özelliği sunmuyorsa.
- GitHub Pages benzeri statik yayın hizmetlerinde sunucu yapılandırması kısıtlıysa.

Bu durumlarda 0 saniyelik meta refresh kullanın, hedef adresi tam (mutlak) yazın ve eski sayfaya ek olarak yeni adrese bir standart bağlantı (rel="canonical") koymayı düşünün. Ancak önce platformunuzun kendi yönlendirme özelliğini araştırın; çoğu modern platform bunu sunar ([hazır site mi özel yazılım mı?](/blog/hazir-site-mi-ozel-yazilim-mi-seo-icin-altyapi/)).

## Sunucu tarafına nasıl geçilir?

Çoğu zaman geçiş basittir:

1. **Sunucu türünüzü belirleyin.** Apache ise `.htaccess` dosyası, Nginx ise sunucu bloğu, hazır platformlarda ise yönetim panelindeki yönlendirme bölümü kullanılır.
2. **Eski-yeni adres eşlemesini yazın.** Her eski adres için tek bir yeni adres.
3. **301 (kalıcı) ya da 302 (geçici) kuralı ekleyin.** Taşıma kalıcıysa 301.
4. **Meta refresh’i kaldırın.** İki yönlendirmeyi aynı anda bırakmak zincir oluşturur.
5. **Test edin.** Durum kodu denetleyiciyle adresin gerçekten 301 döndürdüğünü doğrulayın.
6. **İç bağlantıları ve site haritasını güncelleyin.**

Kural yazarken zincirlerden kaçının: eski adres doğrudan son adrese gitsin ([yönlendirme zincirleri ve döngüleri nasıl düzeltilir?](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).

## JavaScript yönlendirmesi nedir ve neden son çaredir?

JavaScript ile yönlendirme (`window.location`) sayfa yüklendikten sonra çalışan kodla yönlendirmedir. Google bunu işleyebilir; ama sayfanın önce oluşturulması gerektiği için daha yavaştır ve her bot bunu aynı güvenilirlikle işlemeyebilir. Google rehberi, yalnızca sunucu tarafı ya da meta refresh kullanılamıyorsa JavaScript yönlendirmelerinin son çare olarak kullanılabileceğini söyler. JavaScript sitelerinin genel durumu için [JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir halı yıkama işletmesinin siteyi bir hazır site platformunda kurulu. Eski “hizmetlerimiz.html” sayfası yeni “halı-yıkama” sayfasına taşınmış; ama platform sunucu yönlendirmesi sunmuyor ve işletme eski sayfada 5 saniyelik bir meta refresh kullanıyor.

Düzeltme: işletme önce platformun yönetim panelinde yönlendirme özelliğini arıyor ve “URL yönlendirmeleri” bölümünü buluyor; eski adresi 301 ile yeni adrese tanımlıyor. Eski sayfadaki meta refresh kaldırılıyor. Platformda böyle bir özellik olmasaydı, süreyi 0 saniyeye indirip mutlak hedef adres kullanmak son çare olacaktı. Bu örnek sonuç vaadi değildir; seçim sırasını gösterir.

## Sık yapılan hatalar

1. **Kalıcı taşımada süreli meta refresh kullanmak.** 0 saniyeden uzun olan geçici yönlendirme sayılır.
2. **Meta refresh ile sunucu yönlendirmesini birlikte bırakmak.** Zincir ve karışıklık oluşur.
3. **Sunucu yönlendirmesi mümkünken meta refresh seçmek.** Daha yavaş ve daha belirsizdir.
4. **Göreli hedef adres yazmak.** Mutlak adres kullanın.
5. **Sayfayı yönlendirme sonrası site haritasında bırakmak.** Haritada yeni adres olsun.
6. **Meta refresh’i sayfa yenileme için kullanmak.** Otomatik yenileme kullanıcıyı rahatsız eder ve erişilebilirliği bozar.

## Mevcut sitede meta refresh nasıl bulunur?

Sitenizde meta refresh kullanılıp kullanılmadığını bulmak için iki yol vardır. Birincisi, şüpheli sayfaların kaynak kodunda `http-equiv="refresh"` ifadesini aramaktır. İkincisi, siteyi tarayan bir SEO tarama aracıyla “meta refresh” ya da “yönlendirme” raporuna bakmaktır; çoğu araç bunları ayrı listeler. Eski sitelerden kalan geçiş sayfaları, kampanya yönlendirmeleri ve “taşındık” sayfaları en sık görüldüğü yerlerdir.

Bulduğunuz her meta refresh için karar verin: sunucu yönlendirmesine çevrilebilir mi, gerçekten gerekli mi, yoksa kaldırılabilir mi? Çevrilenleri eski-yeni adres tablosuna ekleyin. Kaldırılanlar için sayfanın yeni bir amacı yoksa 404 ya da uygun yönlendirme verin. Bu temizlik, yönlendirme yapınızı sadeleştirir ve ileride site taşırken sürprizleri azaltır.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki yönlendirme türlerini (HTTP, meta, JavaScript) tek tek tespit eder, sunucu tarafına geçiş planı hazırlarız,
- platformunuzun yönlendirme olanaklarını araştırır, mümkün değilse en uygun son çareyi belirleriz,
- zincirleri ve yanlış sinyalleri düzeltir, geliştiriciye net kural listesi veririz,
- sonuç vaat etmeden, geçiş sonrası durum kodlarını test eder ve Search Console’da izleriz.

Yönlendirmeleriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Yönlendirmelerinizi sunucu tarafında doğru kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Google meta refresh’i takip eder mi?

Evet. 0 saniyelik meta refresh kalıcı, daha uzun süreli olanlar geçici yönlendirme sinyali olarak değerlendirilir. Yine de sunucu tarafı yönlendirme daha güvenilirdir.

### Meta refresh sıralamayı düşürür mü?

Doğru kullanıldığında doğrudan düşürmesi beklenmez; ama sunucu tarafı yönlendirmeden daha az net ve daha yavaştır. Kalıcı taşıma için 0 saniye kullanın.

### Hangisini seçmeliyim?

Sunucu tarafı yönlendirmeyi mümkünse tercih edin. Yalnızca imkân yoksa 0 saniyelik meta refresh kullanın.

### Hazır site platformunda yönlendirme nasıl yapılır?

Çoğu platform yönetim panelinde bir “yönlendirme” ya da “URL yönlendirme” bölümü sunar. Platformun yardım sayfasına bakın.

### Meta refresh’i ne zaman kaldırmalıyım?

Sunucu tarafı yönlendirmeyi kurduktan hemen sonra. İkisini birlikte bırakmak gereksiz karmaşa yaratır.

## Kaynaklar

- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
