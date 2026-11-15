---
title: robots.txt Nedir? Nasıl Hazırlanır?
description: "robots.txt nedir, nasıl hazırlanır? Kurallar, örnek dosya, site haritası satırı, noindex ile farkı ve sık yapılan hatalar. Küçük işletme siteleri için."
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir metin dosyası ve tarayıcı botu için izin verilen ve engellenen yollar"
---

robots.txt, sitenizin kök dizininde duran ve arama motoru botlarına hangi bölümleri tarayıp hangilerini taramamaları gerektiğini söyleyen düz metin dosyasıdır. Google’a göre robots.txt, bir sayfayı Google’dan gizlemek için değil, tarama trafiğini yönetmek içindir; sayfayı arama sonuçlarından uzak tutmak için noindex kullanın ya da sayfayı şifreyle koruyun. Küçük bir işletme sitesi için çoğu zaman basit bir dosya yeterlidir.

robots.txt, teknik SEO’nun en kısa ama en çok yanlış kullanılan dosyasıdır. Tek bir yanlış satır, sitenin tamamının taranmasını engelleyebilir. Bu yazıda dosyanın ne olduğunu, nasıl hazırlanacağını, sık yapılan hataları ve kontrolünü anlatıyoruz. Sitenizin genel kontrolü için [ücretsiz SEO analizi](/blog/ucretsiz-seo-analizi-nasil-yapilir/) yazımızdaki on kontrol de işe yarar.

## robots.txt nedir, ne işe yarar?

robots.txt, “Robot Hariç Tutma Standardı”na uygun düz metin bir dosyadır. Bir ya da daha fazla kuraldan oluşur; her kural, belirli bir tarayıcının (kullanıcı aracısının) siteniz içinde belirli yollara erişip erişemeyeceğini belirtir ([Google: robots.txt dosyası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=tr)).

Dosyanın işlevi **taramayı yönetmektir**: sunucunuzu gereksiz istekle yormamak, önemli olmayan bölümleri taranmaktan uzak tutmak gibi. Google’ın rehberi, robots.txt’nin bir web sayfasını Google’ın dışında tutma mekanizması olmadığını açıkça söyler. Bunun için noindex ile dizine eklemeyi engellemek ya da sayfayı şifre korumalı yapmak gerekir ([robots.txt’ye giriş](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)).

## Dosya nerede durmalı, nasıl biçimlenmeli?

Google’ın biçim ve konum kuralları şöyledir:

- Dosyanın adı **robots.txt** olmalı.
- Sitenizde **yalnızca bir** robots.txt dosyası bulunabilir.
- Dosya, geçerli olacağı sitenin ana makinesinin **kök dizininde** olmalı. Örneğin `https://www.example.com/robots.txt`, o adresin altındaki tüm URL’leri kapsar.
- Düz metin ve **UTF-8** kodlamalı olmalı.

Wix ya da Blogger gibi bir içerik yönetim sistemi kullanıyorsanız dosyayı doğrudan düzenlemeniz gerekmeyebilir ya da mümkün olmayabilir; bu sistemlerde arama ayarları sayfasındaki seçenekleri kullanırsınız.

## Basit bir robots.txt örneği

Google’ın örneği şöyle bir yapıyı gösterir:

```
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

Bu örnekte Googlebot, `/nogooglebot/` ile başlayan URL’leri taramaz; diğer tüm botlar sitenin tamamını tarayabilir. Dosya, site haritasının adresini de bildirir. Varsayılan davranış, bir botun sitenin tamamını tarayabilmesidir; yani “her şeye izin ver” demek için ayrıca satır yazmak gerekmez.

## Satırlar ne anlama gelir?

| Satır | Anlamı |
| --- | --- |
| `User-agent:` | Kuralın hangi bot için geçerli olduğu; `*` tüm botlar |
| `Disallow:` | Taranmasını istemediğiniz yol |
| `Allow:` | Taranmasına izin verdiğiniz yol (genel engelin istisnası) |
| `Sitemap:` | Site haritasının tam adresi |

Birden fazla `Sitemap:` satırı yazabilirsiniz; Google, robots.txt’ye eklenebilecek site haritası sayısında sınır olmadığını belirtir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Küçük bir işletme sitesi için ne yazılmalı?

Çoğu işletme sitesi için en güvenli dosya, her şeye izin veren ve site haritasını bildiren basit bir dosyadır:

```
User-agent: *
Allow: /

Sitemap: https://alanadiniz.com/sitemap.xml
```

Taranmasını istemediğiniz bölümler varsa (yönetim paneli, iç arama sonuçları, sepet gibi) bunları `Disallow:` ile ekleyebilirsiniz; ama ne yaptığınızdan emin olmadan satır eklemeyin. Hangi sayfaların arama sonuçlarında görünmemesi gerektiği ayrı bir karardır ve robots.txt değil noindex gerektirebilir.

## robots.txt ile noindex arasındaki fark

- **Ne yapar?:** robots.txt `disallow`: Botun sayfayı taramasını engeller; noindex: Sayfanın arama dizinine girmesini engeller
- **Sayfayı sonuçlardan gizler mi?:** robots.txt `disallow`: Hayır, tek başına gizlemez; noindex: Evet, tarandığında
- **Birlikte kullanılabilir mi?:** robots.txt `disallow`: Dikkat: engellenen sayfada noindex görülmez; noindex: Sayfa taramaya açık olmalı

Google, noindex kuralının etkili olması için sayfanın hem robots.txt tarafından engellenmemesi hem de tarayıcı tarafından erişilebilir olması gerektiğini söyler. Sayfa robots.txt ile engellenirse bot noindex’i hiç görmez ve sayfa, başka sayfalar ona bağlantı verirse yine sonuçlarda görünebilir ([noindex ile engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)). Bu konuyu [noindex nedir?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazımızda ayrıca anlattık.

## En sık yapılan hatalar

1. **Tüm siteyi engellemek.** `Disallow: /` satırı, tüm siteyi taramaya kapatır. Geliştirme sırasında konup yayında unutulması sık görülür.
2. **robots.txt ile sayfa gizlemeye çalışmak.** Engellenen sayfa yine sonuçlarda çıkabilir.
3. **CSS ve görselleri engellemek.** Sayfanın doğru görüntülenmesi için gerekli kaynakları engellemek sorun çıkarabilir (genel tavsiye).
4. **Yanlış yere koymak.** Dosya kök dizinde olmalı; alt klasörde çalışmaz.
5. **Birden fazla dosya.** Sitede yalnızca bir robots.txt olmalı.
6. **Site haritası adresinin yanlış olması.**
7. **Dosyayı hiç kontrol etmemek.** Site yenilemede eski robots.txt kalabilir.

## Dosyayı nasıl kontrol edersiniz?

1. Tarayıcıda `alanadiniz.com/robots.txt` adresini açın; dosya görünüyor mu?
2. İçinde `Disallow: /` gibi tüm siteyi engelleyen bir satır var mı?
3. Site haritası adresi doğru mu?
4. Önemli sayfalarınızı Search Console’daki URL Denetleme ile kontrol edin: “robots.txt tarafından engellendi” gibi bir uyarı var mı? Adımlar [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızda.
5. Dosyayı değiştirdiyseniz Google’ın güncellenmiş dosyayı nasıl alacağı için Google’ın [robots.txt güncelleme](https://developers.google.com/search/docs/crawling-indexing/robots/submit-updated-robots-txt?hl=tr) rehberine bakın.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Hangi bölümler engellenebilir?

Yönetim paneli, sepet ve ödeme adımları, iç arama sonuç sayfaları, kullanıcı hesap sayfaları gibi arama sonuçlarında işe yaramayan bölümler genellikle taramadan uzak tutulur. Ama bu liste herkes için aynı değildir; her sitenin yapısı farklıdır. Küçük bir tanıtım sitesinde çoğu zaman engellenecek bir şey yoktur. Emin değilseniz dosyayı basit tutun.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya atölyesinin yeni sitesi yayına alınmış ama aylardır Google’da çıkmıyor. İnceleme: `alanadiniz.com/robots.txt` açıldığında şu satırlar görülüyor: `User-agent: *` ve `Disallow: /`. Site geliştirilirken konulan bu engel yayına geçerken kaldırılmamış.

Çözüm: Dosya basit biçime getiriliyor (her şeye izin ve site haritası satırı), Search Console’da ana sayfa için URL Denetleme yapılıyor ve site haritası yeniden gönderiliyor. Bu örnek sonuç vaadi değildir; sorunun nasıl bulunacağını gösterir.

## Yayına geçişte robots.txt kontrolü

Site yenilerken ya da yeni site yayına alırken robots.txt şu sırayla kontrol edilmeli:

1. **Geliştirme ortamının dosyası yayına taşınmadı mı?** Test siteleri çoğunlukla her şeyi engeller.
2. **Eski alan adının dosyası kaldı mı?** Taşınma sonrası yanlış kural kalabilir.
3. **Site haritası satırı yeni adresi gösteriyor mu?**
4. **Yeni bölümler yanlışlıkla engellenmiş mi?** Örneğin yeni hizmet klasörü bir `Disallow` satırının kapsamına girebilir.
5. **Önemli sayfa URL Denetleme’den geçiyor mu?** Engellenmiş sayfa için uyarı görünür.

Bu kontrol beş dakika sürer; atlandığında ayların kaybına yol açabilir.

## Dosyayı kim düzenlemeli?

robots.txt’yi yalnızca ne yaptığını bilen biri düzenlemeli. Küçük bir değişiklik bile tüm sitenin görünürlüğünü etkileyebilir. İyi bir uygulama: değişiklikten önce mevcut dosyanın kopyasını saklayın, değişikliği tek tek yapın, her adımdan sonra önemli sayfaları kontrol edin. Ajansla ya da web tasarımcıyla çalışıyorsanız dosyayı değiştirmeden önce size haber vermelerini ve ne değiştirdiklerini yazmalarını isteyin.

## Denizli SEO bu konuda nasıl yardımcı olur?

robots.txt küçük bir dosyadır ama yanlış satırı pahalıya mal olur. [Teknik SEO hizmetimizde](/teknik-seo/):

- site haritası ve robots.txt dosyalarını sitenizin yapısına göre düzenleriz,
- Search Console’da hangi sayfaların dizinde olduğunu, hangilerinin neden dışarıda kaldığını çıkarırız,
- yayına geçişte kalan eski engelleri tespit eder ve temizleriz,
- yaptığımız düzeltmeleri yazılı rapor olarak sunarız.

Sitenizin neden Google’da çıkmadığını bilmiyorsanız [bize yazın](/iletisim/); sitenize bakıp ücretsiz ve yazılı bir analiz hazırlayalım.

### robots.txt’yi yanlış yazarsam site silinir mi?

Silinmez; ama botlar sayfaları taramayı bırakabilir. Yanlış satırı düzeltince tarama devam eder. Yine de düzeltmenin Google’a yansıması zaman alabilir.

### Alt klasör için ayrı robots.txt yazabilir miyim?

Hayır. Google’a göre sitenizde yalnızca bir robots.txt dosyası olabilir ve bu dosya sitenin kök dizininde bulunmalıdır.

## Sık sorulan sorular

### robots.txt dosyam yoksa sorun olur mu?

Hayır. Dosya yoksa botlar siteyi serbestçe tarayabilir. Dosya yalnızca taramayı yönetmek istiyorsanız ya da site haritası adresini bildirmek istiyorsanız gerekir.

### robots.txt ile sayfamı Google’dan silebilir miyim?

Hayır. Google, bunun için noindex kullanmanızı ya da sayfayı şifre korumalı yapmanızı söyler. robots.txt yalnızca taramayı etkiler.

### robots.txt’yi nasıl düzenlerim?

Sunucunuzdaki dosyayı düzenlersiniz ya da içerik yönetim sisteminiz bir ayar sunuyorsa oradan yönetirsiniz. Değişiklikten sonra dosyanın doğru adreste ve doğru içerikle yayımlandığını tarayıcıdan kontrol edin.

### Yapay zekâ botlarını robots.txt ile engelleyebilir miyim?

Bu botlar kendi kullanıcı aracılarıyla robots.txt’yi okur; kuralları onlar için de yazabilirsiniz. Ayrıntı için [yapay zekâ aramalarında görünmek](/blog/yapay-zeka-aramalarinda-gorunmek/) yazımıza bakın.

## Kaynaklar

- [Google Search Central: robots.txt dosyasına giriş ve kullanım rehberi](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
- [Google Search Central: robots.txt dosyası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=tr)
- [Google Search Central: robots.txt dosyanızı güncelleme](https://developers.google.com/search/docs/crawling-indexing/robots/submit-updated-robots-txt?hl=tr)
- [Google Search Central: “noindex” ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
