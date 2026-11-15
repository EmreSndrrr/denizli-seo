---
title: "Hosting Taşırken SEO İçin Neler Kontrol Edilmeli?"
description: "Hosting taşırken SEO kaybetmemek için neler kontrol edilir? Kopyalama ve test, DNS TTL, Googlebot erişimi, Search Console doğrulaması ve kapatma sırası."
date: 2026-11-15
service: teknik-seo
imageAlt: "Eski sunucudan yeni sunucuya DNS geçişi ve kontrol adımları"
---

Hosting (barındırma) değiştirirken adresleriniz aynı kalıyorsa, doğru yapılan bir taşıma SEO’yu etkilemez. Sıra şudur: sitenin tam kopyasını yeni sunucuya kurun ve test edin, DNS kayıtlarının TTL değerini taşımadan en az bir hafta önce düşürün, DNS’i yeni sunucuya çevirin, iki sunucudaki trafiği izleyin ve ancak herkes (Googlebot dahil) yeni sunucudan içerik almaya başladıktan sonra eskisini kapatın. Kayıpların çoğu taşımanın kendisinden değil, unutulan ayrıntılardan gelir: eksik yönlendirme kuralları, süresi dolan SSL, engelleyen güvenlik duvarı.

Bu yazı yalnızca sunucu değişikliğini kapsar; alan adı ya da adres yapısı da değişiyorsa iş büyür. Taşıma planı için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Bu taşıma hangisi?

Google iki tür taşımayı ayırır. Barındırma değişikliği, kullanıcıların gördüğü URL’yi etkilemeyen taşımadır: barındırma sağlayıcısını değiştirmek ya da bir CDN’e geçmek gibi ([barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)). Adresler değişiyorsa (yeni alan adı, http’den https’e geçiş, yeni URL yapısı) bu bir “URL değişikliğiyle site taşıma”dır ve yönlendirme haritası gerektirir ([site taşıma ve 301](/blog/site-tasima-301-yonlendirme/)).

Altın kural: iki işi aynı anda yapmayın. Sunucuyu taşırken tasarımı, adres yapısını ya da içerik yönetim sistemini de değiştirirseniz, bir sorun çıktığında nedenini ayıramazsınız.

## Adım 1: Yeni altyapıyı hazırlayın ve test edin

Google’ın ilk adımı: sitenin bir kopyasını yeni barındırma sağlayıcısına yükleyin ve doğru çalıştığını iyice test edin.

Kopyalanacaklar:

1. Tüm dosyalar (görseller, yüklemeler, PDF’ler dahil).
2. Veritabanı.
3. **Sunucu yapılandırması:** `.htaccess` ya da Nginx kuralları. Yönlendirmeleriniz, https ve `www` birleştirmeniz, önbellek ve güvenlik başlıklarınız buradadır; en sık unutulan parça budur.
4. robots.txt ve site haritası.
5. SSL sertifikası (ya da yeni sunucuda yenisinin kurulumu).
6. E-posta hesapları ve DNS’teki e-posta kayıtları (aynı firmada duruyorsa).
7. Zamanlanmış görevler, yedekleme ayarları.

Test için Google iki yol önerir: erişimi belirli IP adresleriyle sınırlamak ya da yeni altyapıya geçici bir ana makine adı (ör. `beta.ornek.com`) vermek. Geçici adres kullanıyorsanız, test sitesinin yanlışlıkla dizine girmesini önlemek için sayfalara ya da HTTP başlıklarına `noindex` ekleyin; yayına geçerken bunu kaldırmayı unutmayın ([test sitesinin indekslenmesi](/blog/test-sitesinin-googleda-indekslenmesi-nasil-onlenir/)).

Test edilecekler: ana sayfa ve her şablondan birer sayfa, formlar, ödeme, arama, yönetici girişi, yönlendirmeler, 404 sayfası, sayfa hızı.

## Adım 2: Googlebot yeni sunucuya erişebiliyor mu?

Yeni sunucudaki güvenlik duvarı, bot koruması ya da ülke kısıtlaması Googlebot’u engelleyebilir. Google, geçici ana makine adı oluşturduysanız bu mülkü Search Console’da doğrulamanızı ve URL Denetleme aracıyla Googlebot’un yeni altyapıya erişebildiğini kontrol etmenizi önerir.

Bakılacaklar:

- Oluşturulan sayfa görüntüsü gerçek sayfanız mı, yoksa güvenlik kontrolü mü?
- Durum kodu 200 mü?
- CSS, betik ve görseller yükleniyor mu?

Engelleme durumları için [Googlebot 403 alıyorsa](/blog/googlebot-403-hatasi-aliyorsa-neler-kontrol-edilmeli/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 3: DNS TTL değerini önceden düşürün

DNS kayıtları, internet servis sağlayıcılarında TTL (geçerlilik süresi) kadar önbellekte tutulur. Google’ın önerisi: DNS önbelleklerinin daha hızlı yenilenmesi için taşımadan **en az bir hafta önce** TTL’yi ölçülü bir düşük değere (örneğin birkaç saat) indirmeyi düşünün. Böylece geçiş günü yeni ayarlar daha hızlı yayılır ve “bazı ziyaretçiler eski sunucuya, bazıları yenisine gidiyor” dönemi kısalır.

Taşıma tamamlanıp her şey oturduktan sonra TTL’yi eski değerine yükseltebilirsiniz.

## Adım 4: Search Console doğrulamasını koruyun

Google, doğrulamanın taşıma sonrasında da çalışmaya devam ettiğinden emin olmanızı ister. Doğrulamayı HTML dosyasıyla yaptıysanız dosyanın yeni sunucuya kopyalandığını, meta etiketiyle yaptıysanız etiketin şablonda durduğunu kontrol edin. DNS (TXT kaydı) ile doğrulama, sunucu değişikliğinden etkilenmediği için en dayanıklı yöntemdir; ama DNS yönetimini de başka bir firmaya taşıyorsanız kaydı yeni tarafta yeniden oluşturmanız gerekir ([Search Console doğrulama yöntemleri](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)).

## Adım 5: Geçişi başlatın

Geçiş, alan adının DNS ayarlarını yeni altyapıyı gösterecek biçimde değiştirmekle başlar. Zamanlama:

- Trafiğin en düşük olduğu günü ve saati seçin.
- Kampanya, sezon ve bayram dönemlerinden kaçının.
- Geçişten hemen önce son bir veri eşitlemesi yapın; e-ticaret ve form verisi olan sitelerde eski sunucuyu salt okunur moda almak ya da kısa bir bakım penceresi açmak gerekebilir.
- Bakım penceresi açacaksanız 503 kullanın ve kısa tutun ([503 hatası SEO’yu nasıl etkiler?](/blog/503-hatasi-seoyu-nasil-etkiler-bakim-ve-kesintiler/)).

DNS değişince yeni sunucuda SSL’in hemen çalıştığını doğrulayın; sertifikasız geçen saatler ziyaretçiye güvenlik uyarısı demektir.

## Adım 6: İki sunucuyu da izleyin

Google’ın adımı: hem eski hem yeni barındırıcıdan sunulan trafiği izleyin. DNS yayılırken ziyaretçilerin ve Googlebot’un bir kısmı hâlâ eski sunucuya gelir. Bu yüzden:

1. Eski sunucuyu hemen kapatmayın; içerik aynı kalsın.
2. Yeni sunucunun günlüklerinde hata (5xx, 404) artışı var mı bakın.
3. Search Console’da dizin kapsamı grafiklerini ve tarama istatistiklerini izleyin.
4. Formlar ve siparişler yeni sunucuya düşüyor mu, test edin.

### Tarama hızındaki dalgalanma normaldir

Google bir not düşer: barındırma altyapısını değiştirdiğinizde, yeni kopya kullanıma girdikten hemen sonra Googlebot’un tarama hızında geçici bir düşüş görülmesi normaldir. Ardından birkaç gün süren sabit bir artış, hatta öncekinden yüksek hızlar görülebilir; çünkü tarama hızı belirlenirken kullanılan sinyaller sunucuyla birlikte değişir. Googlebot ciddi sorun ya da yavaşlama yaşamadığı sürece siteyi gerektiği kadar taramaya çalışır.

Yani ilk günlerdeki tarama düşüşü tek başına alarm nedeni değildir. Alarm nedeni, kalıcı hata artışı ve yanıt süresinin uzamasıdır.

## Adım 7: Eski sunucuyu kapatın

Google’ın koşulu: Googlebot dahil tüm kullanıcıların içeriği yeni altyapıdan doğru aldığından ve eski altyapıyı artık kimsenin kullanmadığından emin olduktan sonra eski altyapıyı kapatın. Pratikte eski sunucunun erişim günlüklerinde isteklerin sıfıra yaklaşmasını bekleyin; bu genellikle birkaç gün sürer. Kapatmadan önce son bir tam yedek alın.

## Taşıma sonrası kontrol listesi

- http, `www` ve eğik çizgi yönlendirmeleri tek adımda çalışıyor ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).
- Eski yönlendirmeler (geçmiş adres değişiklikleri) yeni sunucuda da duruyor.
- SSL geçerli; karışık içerik uyarısı yok.
- robots.txt doğru; test ortamından `Disallow: /` gelmemiş.
- Sayfalarda ve başlıklarda `noindex` yok.
- Site haritası açılıyor.
- 404 sayfası gerçekten 404 dönüyor.
- Sayfa hızı öncekinden kötü değil.
- Search Console doğrulaması geçerli.
- Yedekleme ve güncelleme görevleri çalışıyor.

## Yeni sunucu seçerken SEO açısından bakılacaklar

Taşımanın nedeni çoğunlukla hız ya da kesintidir. Yeni sağlayıcıyı seçerken yanıt süresi, kesinti geçmişi, sunucunun konumu, önbellek desteği ve destek kalitesine bakın ([hosting seçimi](/blog/hosting-secimi-nelere-bakilir/)). IP adresinin değişmesi tek başına bir sıralama sorunu değildir; sorun, yeni sunucunun yavaş ya da erişilemez olmasıdır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir yedek parça satıcısı siteyi daha hızlı bir sunucuya taşıyor; bir hafta sonra eski ürün adreslerinden gelen trafik kayboluyor.

- **Teşhis:** Dosyalar ve veritabanı taşınmış; ama iki yıl önceki adres değişikliğinden kalan yönlendirmeler eski sunucunun yapılandırmasında duruyormuş. Yeni sunucuda bu adresler 404 dönüyor.
- **Düzeltme:** Yönlendirme kuralları yeni sunucuya ekleniyor; en çok bağlantı alan eski adresler tek tek test ediliyor.
- **Ders:** Sonraki taşımalar için sunucu yapılandırması yedeğe ve kontrol listesine ekleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Sunucuyu taşırken tasarımı ve adres yapısını da değiştirmek.**
2. **Sunucu yapılandırmasındaki yönlendirme kurallarını taşımamak.**
3. **TTL’yi önceden düşürmemek.**
4. **Eski sunucuyu DNS yayılmadan kapatmak.**
5. **Test ortamındaki `noindex` ve robots.txt engelini canlıya taşımak.**
6. **Yeni sunucunun güvenlik duvarında Googlebot’u test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- taşıma öncesi envanter ve kontrol listesi hazırlarız,
- yeni sunucuyu Googlebot erişimi, yönlendirme ve hız açısından test ederiz,
- geçiş günü ve sonrasında tarama ile dizin durumunu izleriz,
- sorun çıkarsa nedenini ayıklar ve düzeltiriz.

Taşıma planı için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Hosting değiştirmek sıralamamı düşürür mü?

Adresler aynı kalır ve taşıma doğru yapılırsa hayır. Kayıplar kesinti, hata ve unutulan ayarlardan gelir.

### IP adresinin değişmesi sorun olur mu?

Tek başına hayır. Önemli olan yeni sunucunun hızlı ve erişilebilir olmasıdır.

### TTL’yi ne zaman düşürmeliyim?

Google, taşımadan en az bir hafta önce ölçülü bir düşük değere indirmeyi önerir.

### Eski sunucuyu ne zaman kapatabilirim?

Googlebot dahil herkes yeni sunucudan içerik almaya başlayıp eski sunucudaki istekler bittikten sonra.

### Taşımadan sonra tarama hızı düştü, normal mi?

Google’a göre geçici bir düşüş, ardından artış normaldir; kalıcı hata artışı yoksa bekleyin.

## Kaynaklar

- [Google Arama Merkezi: Barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)
