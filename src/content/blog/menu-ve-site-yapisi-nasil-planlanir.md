---
title: "Menü ve Site Yapısı Nasıl Planlanır?"
description: "Menü ve site yapısı nasıl planlanır? Ana menü öğeleri, hizmet hiyerarşisi, breadcrumb, URL düzeni ve müşterinin üç tıkta ulaşması için pratik planlama adımları."
date: 2026-11-12
service: web-tasarim
imageAlt: "Ana menü ve alt sayfa hiyerarşisini gösteren site yapısı şeması"
---

İyi bir menü, müşterinin aradığına birkaç tıklamada ulaşmasını sağlar. Ana menüde beş altı öğe (hizmetler, hakkımızda, blog, iletişim gibi), hizmetler altında ana hizmet sayfaları, her sayfadan iletişime ulaşım ve sade bir URL düzeni yeterlidir. Google, önemsediğiniz her sayfaya sitenizdeki en az bir başka sayfadan bağlantı verilmesini ve URL’lerde anlaşılır, tutarlı bir düzen kullanılmasını önerir.

Site yapısı, ziyaretçi için yol haritası, arama motoru için sayfalar arası ilişki anlatımıdır. Küçük sitede bu, 20 dakikalık bir kâğıt çalışmasıyla çözülebilir. İç bağlantılar için [iç bağlantı stratejisi](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/), sayfa listesi için [kurumsal web sitesi kaç sayfa olmalı?](/blog/kurumsal-web-sitesi-kac-sayfa-olmali/) yazılarına bakabilirsiniz.

## Menü nasıl olmalı?

| İlke | Uygulama |
| --- | --- |
| Az öğe | Ana menüde beş altı öğe |
| Anlaşılır isim | “Hizmetlerimiz”, “İletişim”; yaratıcı ama belirsiz isimlerden kaçının |
| Önem sırası | Müşterinin en çok aradığı önce |
| Tutarlılık | Tüm sayfalarda aynı menü |
| Mobilde kolay kullanım | Büyük dokunma alanı, açılır menü |
| Eylem çağrısı | Telefon ya da iletişim her zaman erişilebilir |

Google’ın bağlantı rehberi, bağlantıların gerçek `<a href>` öğeleri olmasını ve bağlantı metninin açıklayıcı olmasını önerir ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Menü öğeleri de bu kurala tabidir.

## Örnek yapı (hayalî bir klima servisi için)

```
Ana sayfa
 ├─ Hizmetler
 │   ├─ Klima bakımı
 │   ├─ Klima montajı
 │   └─ Klima tamiri
 ├─ Hakkımızda
 ├─ Blog
 └─ İletişim
```

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım planlama

1. **Hizmetleri listeleyin.** Her ana hizmet bir sayfa.
2. **Gruplayın.** Benzer olanları aynı başlık altında toplayın.
3. **Hiyerarşiyi çizin.** Ana sayfa → hizmetler → hizmet sayfaları.
4. **Menüyü kısaltın.** Beş altı ana öğe.
5. **URL düzenini belirleyin.** Mantıklı ve kısa. Google, kelimeleri ayırmak için kısa çizgi önerir ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).
6. **İç bağlantıları ekleyin.** Hizmet sayfaları ve ilgili yazılar birbirine bağlansın.
7. **Breadcrumb düşünün.** Çok sayfalı sitelerde “Ana sayfa › Hizmetler › Klima bakımı”.
8. **Mobilde test edin.** Tek elle kullanım.

## URL düzeni

- **/hizmetler/klima-bakimi/:** /index.php?id=37
- **/blog/klima-bakimi-yilda-kac-kez/:** /blog/Klima_Bakimi%20Yazisi
- **Kısa ve tutarlı:** Uzun, rastgele, her sayfada farklı düzen

Adresleri sonradan değiştirmek yönlendirme gerektirir; baştan doğru planlayın, bkz. [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık yapılan hatalar

- **Menüde çok fazla öğe:** En önemli beş altı öğe
- **Müşterinin kullanmadığı kelimeler:** Müşterinin dili
- **Hizmet sayfalarının menüden ulaşılamaz olması:** Ana menüye ekleyin
- **İletişimin gizli kalması:** Her sayfadan görünür
- **Rastgele URL’ler:** Tutarlı düzen
- **JavaScript ile çizilen, taranamayan menü:** Gerçek bağlantılar

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klinik, sitesinde on iki öğeli bir menüyle başlıyor. Planlamayla menü beş öğeye iniyor: Tedaviler (alt menüde dört ana tedavi), Ekibimiz, Blog, Hakkımızda, İletişim. URL’ler kısa ve tutarlı hâle getiriliyor; her tedavi sayfasından ilgili blog yazılarına ve iletişime bağlantı veriliyor.

## Menü etiketleri nasıl seçilir?

Menüde kullandığınız kelimeler, müşterinin aklındaki kelimelerle örtüşmelidir. “Çözümlerimiz”, “Yaklaşımımız” gibi kurumsal ama belirsiz etiketler yerine “Klima bakımı”, “Fiyat teklifi”, “İletişim” gibi net adlar kullanın. İyi bir sınama yöntemi, birine sitenizin menüsünü gösterip “şunu bulmak için nereye tıklarsın?” diye sormaktır. Tereddüt ediyorsa etiket zayıftır. Google’ın bağlantı rehberi, bağlantı metninin açıklayıcı ve kısa olmasını önerir; menü etiketleri de birer bağlantı metnidir ([bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)).

## Mobil menü neden ayrı düşünülmelidir?

Çoğu ziyaretçi sitenize telefondan gelir; menü de orada çoğunlukla bir “hamburger” simgesinin arkasına saklanır. Bu yüzden en önemli eylemi (ara, WhatsApp, iletişim) menüden bağımsız ve görünür bir düğme olarak tutun. Menü açıldığında öğeler parmakla rahat basılacak büyüklükte olmalı, alt menüler tek dokunuşla açılıp kapanmalı. Google mobil sürümü esas aldığı için mobil menüde eksik kalan bağlantılar, Google’ın gördüğü yapıda da eksik kalır ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Masaüstü menüsündeki her önemli bağlantı mobilde de bulunmalıdır.

## Alt bilgi (footer) bağlantıları nasıl düzenlenir?

Alt bilgi, menüde yer vermediğiniz ama müşterinin aradığı sayfalar için güvenli bir yerdir: hakkımızda, iletişim, gizlilik, çalışma saatleri, hizmet bölgeleri. Ancak her sayfaya yüzlerce bağlantı yığmayın; Google’ın spam politikası, çeşitli sitelerin alt bilgilerinde ya da şablonlarında yaygın biçimde dağıtılan bağlantıları bağlantı spam’i örnekleri arasında sayar ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)). Kendi sitenizin alt bilgisi bu kapsamda değildir; ama sayı makul tutulmalı ve bağlantılar müşteriye yarar sağlamalıdır.

## Yapıyı kâğıt üzerinde nasıl test edersiniz?

Siteyi yapmadan önce basit bir test yapın. Beş altı müşteri sorusunu kâğıda yazın (“fiyat nedir?”, “nerede bulunuyorsunuz?”, “şu hizmeti veriyor musunuz?”). Sonra menü taslağınıza bakıp her sorunun cevabına kaç tıklamada ulaşılacağını sayın. Hedef, önemli sorular için en fazla üç tıklamadır. Üçten fazlaysa menüyü ya da sayfa hiyerarşisini sadeleştirin. Bu test, tasarım başlamadan hataları ucuza yakalar.

## Büyüyen sitede menü nasıl yönetilir?

Site büyüdükçe menüye yeni öğe eklemek cazip gelir. Bunun yerine şu üç kuralı uygulayın. Önce, yeni sayfayı menüye eklemeden mevcut bir üst başlığın altına yerleştirin. Sonra, ana menüde yedi öğeyi geçmemeye çalışın. Son olarak, yılda bir menüyü gözden geçirin: hangi bağlantılar hiç tıklanmıyor? Tıklanmayanları alt menüye taşıyın ya da kaldırın. Google, önemsediğiniz her sayfaya sitenizdeki en az bir başka sayfadan bağlantı verilmesini önerir; menüde yer almayan önemli sayfalara iç bağlantılarla ulaşılabilir olmalıdır.

## Örnek: bir klinik sitesinin yapısı

Örnek (hayalî bir işletme için): Pamukkale’de bir diş kliniği ilk sitesini on iki öğeli bir menüyle hazırlıyor. Planlama sonrasında menü beş öğeye iniyor: Tedaviler (alt menüde dört ana tedavi), Ekibimiz, Hakkımızda, Blog ve İletişim. Randevu ve telefon her sayfada ayrı bir düğme olarak duruyor. Her tedavi sayfasına ilgili blog yazılarından ve hakkımızda sayfasından bağlantı veriliyor. Telefonda yapılan testte, bir hasta “implant fiyatı” sorusunun cevabına iki tıklamada ulaşıyor.

## Menü planında hızlı kontrol

Menünüzü bir müşteri gözüyle yeniden okuyun: ana hizmetleriniz ilk bakışta görünüyor mu, iletişim her sayfada bir tık uzaklıkta mı, mobilde tek elle kullanılabiliyor mu, hiçbir önemli sayfa yalnızca menü dışı bağlantıyla mı ulaşılıyor? Bu dört soruya “evet” diyorsanız menünüz iş görüyor demektir.

## Denizli SEO bu konuda nasıl yardımcı olur?

[SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- hizmetlerinize göre menü, sayfa hiyerarşisi ve URL planı hazırlarız,
- menü ve iç bağlantıları gerçek, taranabilir bağlantılarla kurarız,
- yetim ve zor ulaşılan sayfaları tespit ederiz,
- yapılan işi yazılı raporlarız; sıralama garantisi vermeyiz.

Site yapınızı birlikte planlamak isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### Menüde kaç öğe olmalı?

Sabit kural yok; çoğu küçük işletme için beş altı ana öğe yeterlidir.

### Alt menü SEO’yu etkiler mi?

Alt menüdeki bağlantılar gerçek bağlantıysa sayfaların bulunmasına yardımcı olur.

### Breadcrumb şart mı?

Şart değil; çok sayfalı sitelerde yol göstermek için faydalıdır.

### Menüde “Ana sayfa” öğesi gerekli mi?

Logo ana sayfaya bağlanıyorsa zorunlu değil; ama birçok ziyaretçi için açık bir “Ana sayfa” bağlantısı rahatlık sağlar.

### Menüyü sık sık değiştirmek sorun olur mu?

Müşteri alışkanlığını bozmamak için sık değiştirmeyin; değişiklik gerekiyorsa sayfa adreslerini koruyun.

### Menüde açılır alt menü kullanmalı mıyım?

Hizmet sayısı çoksa evet; ama alt menüyü mobilde kolay açılır tutun ve bağlantıların gerçek bağlantı olduğundan emin olun.

## Kaynaklar

- [Google Search Central: Google için SEO bağlantı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)
- [Google Search Central: Google Arama’da URL yapısı ile ilgili en iyi uygulamalar](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
