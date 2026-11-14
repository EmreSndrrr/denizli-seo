---
title: "Google Search Console Nasıl Kurulur? Doğrulama Yöntemleri"
description: "Search Console nasıl kurulur? Alan ve URL öneki mülkü farkı, HTML dosyası, etiket ve DNS doğrulaması, yaygın hatalar ve kurulum sonrası ilk kontroller."
date: 2026-11-14
service: teknik-seo
imageAlt: "Search Console mülk ekleme ve sahiplik doğrulama adımları"
---

Search Console’u kurmak için bir mülk (alan adı ya da URL öneki) ekler, sahibi olduğunuzu kanıtlarsınız. Google doğrulama için HTML dosyası yükleme, HTML etiketi, Google Analytics, Google Etiket Yöneticisi ve DNS kaydı yöntemlerini sunar; DNS yalnızca Alan mülkü için gereklidir. Veri, mülk eklenir eklenmez toplanmaya başlar; doğrulama beklenmez.

Birçok işletme sitesini yayınlar ama Search Console’u hiç kurmaz; oysa tarama, dizin ve arama performansı sorunlarını görmenin en doğrudan yolu budur. Teknik kontrol için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Doğrulama neden gerekir?

Doğrulama, siteyle ilgili hassas bilgilere erişim isteyen kişinin gerçekten site sahibi (ya da yetkilisi) olduğunu Google’a kanıtlamaktır ([sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)). Doğrulanmadan başkasının sitesinin verilerine erişilemez.

Bu yüzden:

- Doğrulama jetonu (dosya, etiket, kayıt) **sitede kalmalıdır**. Google bunu belirli aralıklarla kontrol eder; doğrulama kaybolursa bildirim gelir ve izinler zamanla sona erer.
- Ajans ya da geliştirici ayrıldığında jetonu kaldırmak sahipliği kaybettirebilir; hesapları sizin adınıza kurun.

## Alan mülkü mü, URL öneki mi?

Search Console’da iki mülk türü vardır:

- **Alan (domain) mülkü:** Alan adının tüm alt alanlarını, protokollerini (http/https) ve yollarını kapsar. Doğrulama için DNS kaydı gerekir.
- **URL öneki mülkü:** Yalnızca girdiğiniz önek altındaki adresleri kapsar; http/https ve `www`/`www’suz` ayrı mülklerdir. Birden fazla yöntemle doğrulanabilir.

Öneri: DNS’e erişiminiz varsa **Alan mülkü** ekleyin; tüm varyantları tek yerde görürsünüz. DNS’e erişemiyorsanız URL öneki mülküyle başlayın. Doğrulanmış alt mülkler, üst mülkle aynı yöntemle otomatik doğrulanır.

## Doğrulama yöntemleri

Google şu yöntemleri belgeler (yöntem listesi, sitenin kurulumuna göre değişir):

1. **HTML dosyası yükleme:** Google’ın verdiği dosyayı sitenizin kök dizinine yüklersiniz.
2. **HTML etiketi:** Ana sayfanın `<head>` bölümüne bir meta etiketi eklersiniz.
3. **Google Analytics:** Aynı hesapta ilgili mülkte düzenleme yetkiniz varsa Analytics kodu ile.
4. **Google Etiket Yöneticisi:** Kapsayıcıda yayınlama yetkiniz varsa.
5. **DNS kaydı:** Alan adı sağlayıcınızda TXT kaydı eklersiniz; Alan mülkü için gereklidir.

Birden çok yöntemi birlikte eklemek iyidir: biri bozulursa diğeri sahipliği korur.

## Adım adım kurulum

1. Search Console’a Google hesabınızla girin. Kurumsal bir hesap ya da işletmeye ait bir adres kullanın (kişisel çalışan hesabı değil).
2. “Mülk ekle”yi seçin; Alan ya da URL öneki mülkü türünü belirleyin.
3. Sitenin tam adresini yazın (URL öneki ise `https://` ve doğru `www` durumu ile).
4. Doğrulama yöntemini seçin ve adımları uygulayın.
5. “Doğrula”ya basın; başarısız olursa değişikliğin yayılmasını bekleyip yeniden deneyin (özellikle DNS).
6. Doğrulama sonrası ek kullanıcı ekleyin (ajans, geliştirici) ve sahiplik yetkisini yedeklemek için ikinci bir sahip tanımlayın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## WordPress’te kurulum

WordPress’te en kolay yollar:

- SEO eklentisinin doğrulama alanına HTML etiketini yapıştırmak,
- Etiket Yöneticisi kuruluysa o yöntemle doğrulamak,
- HTML dosyasını sunucuya yüklemek.

Eklenti ya da tema değiştirirseniz etiketin kalıp kalmadığını kontrol edin; kaldıysa sahiplik kaybolabilir ([WordPress SEO eklentisi seçimi](/blog/wordpress-seo-eklentisi-secimi-ve-dogru-ayarlar/)).

## Doğrulama yöntemlerinin artı ve eksileri

Google’ın sayfasına göre yöntemlerin zorluğu sitenin kurulumuna göre değişir:

- **HTML dosyası:** Görece basit; ancak dosyayı yükleyip sitenizde belirli bir adreste yayınlayabilmeniz gerekir ve bu bazı barındırma platformlarında mümkün olmayabilir. Yöntem URL öneki mülkleri için kullanılabilir, Alan mülkleri için kullanılamaz. Dosya, doğrulayan kişiye özeldir; başkasını tanımlamak için kullanılamaz.
- **HTML etiketi:** Görece basit; ancak sayfa kaynağını düzenleyebilmeniz gerekir. Tema ya da eklenti değişince etiket kaybolabilir.
- **Analytics ve Etiket Yöneticisi:** Zaten kuruluysa en hızlısı; ancak ilgili hesapta yetkiniz olmalı ve kod sitede kalmalı.
- **DNS kaydı:** Tüm alt alanları ve protokolleri kapsayan Alan mülkü için gerekli yöntemdir; DNS’e erişim ve biraz bekleme ister.

Hangi yöntemi seçeceğinizi, sitenizi kimin yönettiği belirler: DNS’i alan adı sağlayıcısındaki kişi, sayfa kaynağını geliştirici yönetiyorsa iki yöntemi farklı kişilere dağıtmak sahipliği daha sağlam yapar.

## Sahiplik devri ve ajans değişimi

Doğrulama jetonu sitede durduğu sürece sahiplik geçerlidir. Bu şu sonuçları doğurur:

1. Bir ajansın eklediği HTML etiketini siliyorsanız, sahipliği kendi hesabınıza aldığınızdan emin olun.
2. Eski sahibin doğrulamasını iptal etmek için etiket ya da dosyayı kaldırabilirsiniz; ama önce kendi doğrulamanızı ekleyin.
3. Yeni bir sahip eklemek, Search Console’da sahip ekleme ya da kaldırma bölümünden yapılır.
4. Ajansla çalışmayı bitirirken erişim listesini gözden geçirin.

Böylece hesap sizde kalır; ajans değişse bile veriniz kaybolmaz.

## Sık sorulan kurulum soruları (kısa)

- **Kaç mülk ekleyeyim?** Çoğu işletme için bir Alan mülkü yeterlidir; ek olarak önemli bir URL öneki mülkü ekleyebilirsiniz.
- **Doğrulama ne kadar sürer?** Dosya ve etiket yöntemlerinde genellikle hemen; DNS’te kayıt yayılımı kadar bekleyin.
- **Çok kullanıcı eklemeli miyim?** Evet, ama yalnızca gerekli kişilere ve en düşük yetkiyle.

## Kurulumdan sonra ilk kontroller

Mülk eklenince veri hemen toplanmaya başlar ama raporların dolması zaman alır. İlk günlerde:

- **Site haritası:** `sitemap.xml` adresini Site Haritaları bölümünden gönderin ([site haritası nasıl hazırlanır?](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
- **Dizin raporu:** “Sayfa dizine ekleme” raporunda hata ve uyarıları gözden geçirin ([ilk kontrol listesi](/blog/search-console-ilk-kontrol/)).
- **URL Denetleme:** Önemli sayfaların durumuna bakın ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)).
- **Manuel işlemler ve güvenlik:** Bildirim var mı?
- **Bildirim e-postaları:** Doğru kişiye gidiyor mu?

## Sık görülen doğrulama sorunları

- **Etiket yanlış yere yapıştırıldı:** `<head>` dışına konan etiket çalışmaz.
- **Önbellek:** Önbellekli sayfa eski sürümü gösterebilir; önbelleği temizleyin.
- **Yönlendirmeler:** `http`’den `https`’e yönlendirme varken yanlış önek mülkü eklendi.
- **DNS yayılması:** TXT kaydı hemen görünmeyebilir; bekleyip yeniden deneyin.
- **Dosya kök dizinde değil:** Doğrulama dosyası ana dizinde olmalı.
- **Güvenlik duvarı:** Googlebot’u engelleyen kurallar doğrulamayı bozabilir.

Hata devam ederse başka bir yöntemle deneyin.

## Kullanıcı ve yetki yönetimi

Mülkte iki tür yetki vardır: sahip ve kullanıcı. Önemli olan, sahipliğin tek bir kişinin hesabına bağlı kalmamasıdır:

- Şirket adına bir Google hesabıyla kurun.
- En az iki sahip tanımlayın.
- Ajans ve geliştiricilere gerekli en düşük yetkiyi verin.
- Ayrılan çalışanların erişimini kaldırın.
- Ajans değiştirirken hesap erişimlerini teslim aldığınızdan emin olun ([ajans değiştirirken teslim alınacaklar](/blog/seo-ajansi-degistirirken-hangi-hesaplar-teslim-alinmali/)).

## Analytics ile birlikte kullanım

Search Console, sitenize arama sonuçlarında ne kadar görünüp tıklandığını gösterir; Analytics ise ziyaretçiler sitede ne yaptı onu. İkisi birbirini tamamlar ve bağlanabilir ([GA4 ve Search Console bağlantısı](/blog/google-analytics-ve-search-console-nasil-baglanir/)).

## Kurulumu belgeleyin

Kurulum bittiğinde bir sayfalık not tutun: hangi mülk türü ve adres eklendi, hangi yöntemlerle doğrulandı, DNS kaydını kim yönetiyor, sahipler kimler ve site haritası adresi nedir. Bu not, ajans ya da geliştirici değişince veya doğrulama kaybolunca saatlerce arama yapmanızı önler. Notu, hesap şifreleri hariç, işletme içinde paylaşılan bir yerde saklayın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir klima servisinin sitesi bir ajans tarafından yapılmış, Search Console ajansın kişisel hesabıyla doğrulanmış.

- **Sorun:** Ajansla yollar ayrılınca işletme veriye erişemiyor.
- **Çözüm:** İşletme kendi hesabıyla Alan mülkü ekliyor, DNS’e TXT kaydı koyuyor; ek olarak HTML etiketi yöntemini de ekliyor.
- **Düzen:** İkinci bir sahip tanımlanıyor; ajansa yalnızca gerekli yetki veriliyor.
- **İzleme:** Site haritası gönderiliyor, aylık rapor için tarih belirleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Search Console’u hiç kurmamak.**
2. **Yanlış öneki (http/www) mülk olarak eklemek.**
3. **Doğrulama jetonunu sitede bırakmamak.**
4. **Sahipliği tek kişinin hesabına bağlı bırakmak.**
5. **Site haritasını göndermemek.**
6. **Bildirim e-postalarını okumamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console mülkünü sizin hesabınızla kurar, doğrulamayı yedekli yöntemle yaparız,
- site haritası ve dizin durumunu kontrol ederiz,
- hataları sıraya koyar ve düzeltme planı yazarız,
- aylık raporda sizin diliniz ve işletme hedefiniz üzerinden anlatırız.

Kurulum için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Search Console ücretli mi?

Hayır, ücretsiz bir Google aracıdır.

### Doğrulama için hangi yöntem en iyisi?

DNS’e erişiminiz varsa Alan mülkü ve DNS kaydı; yedek olarak HTML etiketi ya da dosyası eklemek iyidir.

### Doğrulama yapmadan veri görebilir miyim?

Google, veri toplamanın mülk eklenir eklenmez başladığını söyler; ancak doğrulanmamış mülkte yönetim ve bazı bilgilere erişemezsiniz.

### Doğrulama etiketini silersem ne olur?

Google belirli aralıklarla kontrol eder; doğrulama kaybolursa bildirim gelir ve izinler zamanla sona erer.

### Ajansın hesabıyla kurulması sorun mu?

Sahiplik işletmede kalmalı; ajans için ayrı kullanıcı yetkisi verin.

## Kaynaklar

- [Search Console Yardımı: Sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)
