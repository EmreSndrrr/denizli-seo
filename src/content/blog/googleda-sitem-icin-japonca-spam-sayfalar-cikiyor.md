---
title: "Google’da Sitem İçin Japonca Spam Sayfalar Çıkıyor"
description: "Google’da siteniz için Japonca ya da spam sayfalar mı çıkıyor? Saldırının belirtileri, Search Console kontrolü, temizlik adımları ve korunma yolları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Arama sonuçlarında siteye ait Japonca spam sayfalar ve temizlik adımları"
---

Sitenizin adını Google’da arattığınızda Japonca başlıklı, tanımadığınız sayfalar çıkıyorsa siteniz büyük olasılıkla saldırıya uğramıştır. Google bu türü “Japonca anahtar kelime saldırısı” olarak adlandırır: saldırgan sitenize otomatik üretilmiş Japonca metinli sayfalar ekler, bunlar sahte marka ürünleri satan mağazalara bağlantı verir. Yapılacaklar sırasıyla: Search Console’da tanımadığınız sahipleri kaldırmak, `.htaccess` ve site haritasını kontrol etmek, zararlı dosyaları temizlemek, açığı kapatmak ve spam adreslerin 404 dönmesini sağlamak.

Bu bir SEO sorunu olmadan önce bir güvenlik sorunudur; yalnızca sonuçları gizlemek çözüm değildir. Temizlik sonrası dizin toparlanması için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Bu saldırı nedir?

Google’ın web.dev’deki kılavuzuna göre Japonca anahtar kelime saldırısı, sitenizde otomatik olarak oluşturulan Japonca metinli yeni sayfalar yaratır; bu sayfalar rastgele oluşturulmuş dizin adlarında durur ve sahte marka ürünleri satan mağazalara giden satış ortaklığı bağlantılarıyla para kazanmak için kullanılır ([Japonca anahtar kelime saldırısını düzeltin](https://web.dev/articles/fixing-the-japanese-keyword-hack?hl=tr)).

Kılavuz, popüler içerik yönetim sistemlerinin kullanıcıları için yazılmıştır; WordPress gibi sistemlerde güncellenmemiş eklenti ve temalar en sık giriş kapısıdır.

Japonca dışında başka dillerde ya da ilaç, bahis gibi konularda spam sayfalar görüyorsanız mantık aynıdır: siteniz başkası tarafından içerik yayınlamak için kullanılıyordur.

## Belirtiler

- `site:alanadiniz.com` aramasında Japonca başlık ve açıklamalı sonuçlar.
- Search Console’da tanımadığınız adreslerde gösterim ve tıklama; bilmediğiniz sorgular.
- Search Console’dan “yeni sahip eklendi” e-postası. Kılavuza göre saldırgan, kârını artırmak için genellikle kendisini Search Console’da mülk sahibi olarak ekler; tanımadığınız birinin sitenizi doğruladığına dair bildirim aldıysanız saldırıya uğramış olma ihtimaliniz yüksektir.
- Güvenlik Sorunları raporunda uyarı.
- Dizindeki sayfa sayısında ani artış.
- Sayfayı siz açtığınızda “bulunamadı” görmeniz, ama Google’ın içerik görmesi.

Son madde yanıltıcıdır: saldırganlar çoğu zaman **gizleme** kullanır; spam içeriği yalnızca arama motoruna gösterir, ziyaretçiye 404 ya da normal sayfa sunar. “Açtım, bir şey yok” demek yeterli değildir. Search Console’daki URL Denetleme aracıyla sayfayı Googlebot’un gördüğü biçimde test edin.

## İlk kontrol: Search Console

1. **Güvenlik Sorunları** raporuna bakın; Google saldırıya uğramış sayfa tespit ettiyse burada listeler ([Güvenlik sorunları raporu](https://support.google.com/webmasters/answer/9044101?hl=tr)).
2. **Kullanıcılar ve izinler** bölümünde sahipleri kontrol edin; tanımadıklarınızı not edin.
3. **Site haritaları** bölümünde sizin göndermediğiniz harita var mı bakın.
4. **Performans** raporunda son haftalarda öne çıkan yabancı sorgu ve adresleri listeleyin; temizlikte işinize yarar.

Search Console hiç kurulu değilse şimdi kurun; saldırıyı fark etmenin ve toparlanmayı izlemenin başka güvenilir yolu yoktur ([Search Console kurulumu](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Temizlik adımları

Başlamadan önce sitenin mevcut hâlinin yedeğini alın (kanıt ve geri dönüş için) ve mümkünse bir geliştiriciyle çalışın. Kılavuzun izlediği sıra:

### 1. Saldırganın Search Console erişimini kaldırın

Tanımadığınız sahibi silmek yetmez; doğrulama jetonunu da kaldırmanız gerekir. Jeton, sitenin kök dizininde bir HTML dosyası ya da bu dosyayı taklit eden, dinamik üretilmiş bir `.htaccess` kuralı olabilir. Kılavuzdaki örnek kural, `google….html` biçimindeki her isteği bir PHP dosyasına yönlendirir. Kontrol yöntemi: `alanadiniz.com/google1234.html` gibi uydurma bir doğrulama adresini açın; 404 dönmüyorsa sahte kural hâlâ çalışıyordur.

### 2. `.htaccess` dosyasını kontrol edin

Saldırganlar bu dosyayı, ziyaretçileri ve arama motorlarını spam sayfalara yönlendirmek ya da gizleme yapmak için kullanır. Dosyayı, sisteminizin varsayılan temiz sürümüyle değiştirin ve kendi kurallarınızı (https, `www`, yönlendirmeler) yeniden ekleyin. Alt dizinlerde başka `.htaccess` dosyaları da olabilir.

### 3. Site haritalarını inceleyin

Kılavuza göre saldırgan mevcut haritayı değiştirir ya da yeni haritalar ekler. Haritanızda şüpheli bağlantılar varsa kaldırın; eklediğinizi hatırlamadığınız bir harita yalnızca spam adresler içeriyorsa dosyayı silin ve Search Console’dan da kaldırın.

### 4. Zararlı dosyaları bulun

- Çekirdek, tema ve eklenti dosyalarını resmî kaynaktan indirdiğiniz temiz sürümlerle değiştirin.
- Son değiştirilme tarihi saldırı dönemine denk gelen dosyaları listeleyin.
- Yükleme klasöründe (`uploads`) çalıştırılabilir dosya (PHP) olup olmadığına bakın; olmamalı.
- Kılavuz, karıştırılmış (anlamsız karakter dizileriyle dolu) kod blokları ve `base64_decode`, `eval`, `gzinflate` gibi işlevler içeren şüpheli dosyaları incelemenizi önerir.
- Veritabanında tanımadığınız yönetici hesaplarını silin.

### 5. Açığı kapatın

Temizlik, giriş kapısı açık kaldıkça geçicidir:

1. Sistemi, tema ve eklentileri güncelleyin; kullanmadıklarınızı silin.
2. Tüm şifreleri değiştirin: yönetici, FTP, veritabanı, barındırma paneli.
3. İki adımlı doğrulamayı açın.
4. Lisanssız (kırık) tema ve eklenti kullanmayın; en yaygın bulaşma yoludur.
5. Düzenli, site dışında saklanan yedek alın ([web sitesi güvenliği](/blog/web-sitesi-guvenligi-ssl-yedek-ve-guncelleme/)).

Temiz olduğundan emin olduğunuz bir yedeğiniz varsa, ondan geri yüklemek ve ardından güncellemeleri yapmak çoğu zaman en hızlı yoldur.

## Spam sayfalar Google’dan nasıl çıkar?

Temizlikten sonra spam adresler 404 (ya da 410) dönmelidir. Google bu adresleri yeniden taradıkça sonuçlardan düşürür; bu, sayfa sayısına göre haftalar alabilir.

- Spam adresleri ana sayfaya **yönlendirmeyin**; yok olduklarını bildirin ([404 düzeltilmeli mi, yönlendirilmeli mi?](/blog/404-hatasi-duzeltmeli-mi-yonlendirmeli-mi/)).
- Spam adresler ortak bir klasör altındaysa, Search Console’daki Kaldırma aracıyla önek bazında geçici kaldırma isteyebilirsiniz. Google, saldırganın oluşturduğu adresler için bu kullanımı uygun görür; ama tüm siteyi ya da dizinde kalmasını istediğiniz adresleri engellemeyi önermez ([URL kaldırma aracı](/blog/search-console-url-kaldirma-araci-ne-zaman-kullanilir/)).
- robots.txt ile engellemeyin; Google 404’ü göremezse adresi dizinden düşüremez.
- Güvenlik Sorunları raporunda uyarı varsa, temizlikten sonra aynı rapordan inceleme isteyin.
- Manuel işlem bildirimi geldiyse ayrıca yeniden değerlendirme isteği gerekir ([manuel işlem bildirimi](/blog/search-consolda-manuel-islem-bildirimi-ne-yapilmali/)).

## Sıralamalar geri gelir mi?

Kendi sayfalarınız silinmediyse ve temizlik eksiksizse, site zamanla normale döner; ama süre verilemez. Toparlanmayı geciktiren şeyler: yarım temizlik (saldırının geri gelmesi), spam adreslerin 200 dönmeye devam etmesi ve saldırı sırasında kendi sayfalarınıza eklenmiş gizli bağlantılar. Kendi sayfalarınızın kaynak kodunda tanımadığınız bağlantı ve betik arayın.

Saldırı sırasında sitenize spam sitelerden bağlantı gelmiş olabilir; bunlar için ayrıca işlem gerekip gerekmediğini [spam backlink](/blog/spam-backlink-nasil-anlasilir-reddetme-gerekli-mi/) yazısında anlatıyoruz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir inşaat firması, marka aramasında kendi sitesinin altında Japonca başlıklı onlarca sonuç görüyor.

- **Teşhis:** Search Console’da tanınmayan bir sahip ve yabancı bir site haritası var; iki yıldır güncellenmeyen bir form eklentisi kullanılıyor.
- **Temizlik:** Sahip ve jeton kaldırılıyor, `.htaccess` yenileniyor, çekirdek ve eklenti dosyaları temiz sürümlerle değiştiriliyor, şifreler yenileniyor.
- **Dizin:** Spam klasörü 404 dönüyor; önek bazında geçici kaldırma isteniyor; dizin raporu haftalık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **“Sayfayı açtım, bir şey yok” diyerek geçmek.**
2. **Yalnızca spam sayfaları silip açığı kapatmamak.**
3. **Saldırganın Search Console sahipliğini ve jetonunu bırakmak.**
4. **Spam adresleri ana sayfaya yönlendirmek.**
5. **Spam adresleri robots.txt ile engellemek.**
6. **Şifreleri değiştirmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console ve sunucu kayıtlarından saldırının kapsamını çıkarırız,
- temizlik için geliştiricinizle çalışır, adım listesini yürütürüz,
- spam adreslerin dizinden çıkmasını ve inceleme isteklerini yönetiriz,
- sonrasında güncelleme ve yedekleme düzeni kurarız.

Acil durumda [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Sitemde neden Japonca sayfalar çıkıyor?

Büyük olasılıkla siteniz saldırıya uğradı ve saldırgan otomatik üretilmiş spam sayfalar ekledi.

### Sayfaları açınca göremiyorum, yine de saldırı olabilir mi?

Evet. Saldırganlar içeriği yalnızca arama motoruna gösterebilir; URL Denetleme ile test edin.

### Spam sayfalar Google’dan ne zaman kalkar?

Adresler 404 döndükten sonra yeniden tarandıkça; sayfa sayısına göre haftalar alabilir.

### Kaldırma aracını kullanabilir miyim?

Saldırganın oluşturduğu adresler için evet; tüm siteyi engellemeyin.

### Tekrar olmaması için ne yapmalıyım?

Güncelleme, güçlü şifre, iki adımlı doğrulama, lisanslı tema ve eklenti, düzenli yedek.

## Kaynaklar

- [web.dev: Japonca anahtar kelime saldırısını düzeltin](https://web.dev/articles/fixing-the-japanese-keyword-hack?hl=tr)
- [Search Console Yardımı: Güvenlik sorunları raporu](https://support.google.com/webmasters/answer/9044101?hl=tr)
