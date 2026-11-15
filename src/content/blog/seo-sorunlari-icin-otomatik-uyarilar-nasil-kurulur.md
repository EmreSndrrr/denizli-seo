---
title: "SEO Sorunları İçin Otomatik Uyarılar Nasıl Kurulur?"
description: "SEO sorunları için otomatik uyarılar nasıl kurulur? Search Console e-postaları, çalışma süresi izleme, noindex ve robots.txt kontrolü, trafik eşikleri."
date: 2026-11-15
service: teknik-seo
imageAlt: "Site erişimi, dizin durumu ve trafik için kurulmuş otomatik uyarı panosu"
---

SEO sorunlarını erken yakalamak için dört katmanlı bir uyarı düzeni yeterlidir: Search Console’un kendi e-posta bildirimleri (doğru kişilere ulaşacak biçimde), sitenin açık olup olmadığını denetleyen bir çalışma süresi izleyicisi, kritik sayfalarda `noindex`, robots.txt ve durum kodu gibi “sessiz” değişiklikleri yakalayan basit bir kontrol ve analitikte trafik ya da talep düşüşü için eşik uyarıları. Amaç her şeyi izlemek değil, haftalarca fark edilmeden kalabilecek birkaç pahalı hatayı aynı gün öğrenmektir.

Çoğu SEO felaketi büyük bir olay değil, kimsenin bakmadığı küçük bir değişikliktir. İzleme kurulumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Neden otomatik uyarı?

Arama görünürlüğünü en çok bozan hatalar gürültüsüzdür:

- Site yenilenirken test ortamındaki `noindex` canlıya taşınır.
- Bir eklenti güncellemesi robots.txt dosyasını değiştirir.
- SSL sertifikasının süresi dolar.
- Güvenlik duvarı kuralı Googlebot’u engellemeye başlar.
- Barındırma gece saatlerinde düzenli olarak yanıt vermez.
- Bir şablon değişikliği tüm sayfalardan başlığı ya da canonical etiketini siler.
- Alan adının süresi dolar.

Bunların ortak noktası: site sizin tarayıcınızda normal görünür, sorun yalnızca Google’ın gördüğü tarafta ya da sizin bakmadığınız saatte olur. Trafik raporuna ayda bir bakan bir işletme, sorunu üç–dört hafta sonra, kayıp gerçekleştikten sonra görür.

## Katman 1: Search Console bildirimleri

Search Console, önemli sorunlarda mülk sahiplerine ve kullanıcılara e-posta gönderir: dizine ekleme sorunlarındaki artışlar, manuel işlem ve güvenlik sorunu bildirimleri, yeni sahip eklenmesi gibi. Bu, ücretsiz ve en değerli uyarı kaynağıdır; ama yalnızca okunursa işe yarar.

Yapılacaklar:

1. **Kim alıyor, kontrol edin.** Mülk yalnızca ayrılmış bir çalışanın ya da eski ajansın hesabına bağlıysa e-postalar kimseye ulaşmıyordur.
2. **En az iki kişi alsın.** İşletme sahibi ve siteyle ilgilenen kişi.
3. **E-posta tercihlerini açık tutun.** Search Console kullanıcı ayarlarında bildirim tercihleri bulunur; kapatılmış olabilir.
4. **Filtreleyin ama gizlemeyin.** Gelen kutusunda Search Console e-postaları için bir etiket oluşturun; arşive otomatik atmayın.
5. **Alan mülkü kullanın.** Tüm alt alan adları ve protokoller tek mülkte izlenir ([Search Console kurulumu](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)).

“Yeni sahip eklendi” e-postası özellikle önemlidir: tanımadığınız bir sahip, sitenizin ele geçirildiğinin işareti olabilir ([Japonca spam sayfalar](/blog/googleda-sitem-icin-japonca-spam-sayfalar-cikiyor/)).

Search Console bildirimleri anlık değildir; sorun oluştuktan günler sonra gelebilir. Bu yüzden diğer katmanlar gerekir.

## Katman 2: Çalışma süresi (uptime) izleme

Site kapalıysa hiçbir şey çalışmaz. Çalışma süresi izleme hizmetleri sitenizi birkaç dakikada bir açmayı dener ve açılmazsa e-posta ya da SMS gönderir. Ücretsiz planı olan pek çok hizmet vardır; hangisini seçtiğiniz, neyi izlediğinizden daha az önemlidir.

İzlenecekler:

- **Ana sayfa** ve **en çok talep getiren bir iç sayfa** (ör. iletişim ya da ana hizmet sayfası).
- **Durum kodu:** 200 bekleyin; 5xx ya da beklenmeyen yönlendirme uyarı versin.
- **Anahtar kelime kontrolü:** Sayfada belirli bir metnin (ör. işletme adınız) bulunduğunu denetleyin. Sunucu 200 döndürüp boş ya da hata sayfası gösteriyorsa bunu yalnızca böyle yakalarsınız.
- **SSL sertifikası bitiş tarihi:** Bitişe 14–30 gün kala uyarı.
- **Alan adı bitiş tarihi:** Destekleniyorsa ekleyin; desteklenmiyorsa takviminize yazın.
- **Yanıt süresi:** Olağanın birkaç katına çıkarsa uyarı.

Kesintilerin arama görünürlüğüne etkisi için [503 hatası SEO’yu nasıl etkiler?](/blog/503-hatasi-seoyu-nasil-etkiler-bakim-ve-kesintiler/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Katman 3: Sessiz değişiklik kontrolü

Bu katman, sitenin açık olduğu ama Google’a yanlış sinyal verdiği durumları yakalar. Birkaç kritik adres için her gün şu beş şeyi denetleyin:

| Kontrol | Beklenen | Neden |
|---|---|---|
| Durum kodu | 200 | Yönlendirme ya da hata başlamış mı? |
| `noindex` | Sayfada ve başlıkta yok | Dizinden düşme riski |
| robots.txt | `Disallow: /` yok; içerik değişmemiş | Tarama engeli |
| Canonical | Sayfanın kendi adresi | Yanlış adrese işaret |
| `<title>` | Boş değil, beklenen metin | Şablon bozulması |

Kurmanın üç yolu, kolaydan zora:

1. **Değişiklik izleme hizmeti.** Bir sayfanın ya da dosyanın içeriği değişince haber veren hizmetler vardır; robots.txt adresinizi ve ana sayfanızı ekleyin. Kod bilgisi gerekmez.
2. **Anahtar kelime “bulunmamalı” kontrolü.** Bazı çalışma süresi izleyicileri sayfada belirli bir metnin **bulunmaması** koşulunu destekler; `noindex` ifadesi için kullanın.
3. **Zamanlanmış küçük bir betik.** Geliştiriciniz, bu beş kontrolü yapıp sorun varsa e-posta atan kısa bir betiği günde bir çalışacak biçimde kurabilir. `X-Robots-Tag` gibi yalnızca HTTP başlığında görünen kurallar ancak böyle denetlenir ([X-Robots-Tag nasıl kullanılır?](/blog/x-robots-tag-nasil-kullanilir/)).

Hangi sayfalar? Ana sayfa, her şablondan bir örnek (hizmet, blog yazısı, kategori, ürün) ve en çok trafik alan üç–beş sayfa. On adres çoğu işletme için yeterlidir.

## Katman 4: Trafik ve talep uyarıları

GA4’te, sizin tanımladığınız bir koşul gerçekleştiğinde e-posta ile haber veren özel analizler (insights) oluşturabilirsiniz; menü adları zamanla değişebildiği için güncel arayüzde kontrol edin. İşe yarar birkaç koşul:

- Organik arama oturumları, önceki haftanın aynı gününe göre belirgin biçimde düştüğünde.
- Günlük toplam oturum sıfıra ya da sıfıra yakın bir değere indiğinde (etiket bozulmuş olabilir).
- Talep olayı (form gönderimi, telefon tıklaması) birkaç gün hiç gerçekleşmediğinde.
- 404 sayfası görüntülemeleri ani arttığında.

Eşiği sitenizin dalgalanmasına göre ayarlayın. Günde 40 ziyaret alan bir sitede günlük %30 oynama olağandır; günlük uyarı sürekli çalar. Küçük sitede haftalık karşılaştırma daha sağlıklıdır.

Unutmayın: analitik uyarısı, ölçüm bozulduğunda da çalar. Uyarı geldiğinde ilk soru “trafik mi düştü, ölçüm mü?” olmalıdır; Search Console tıklamasıyla karşılaştırın ([tıklamalar oturumlarla neden eşleşmez?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/)).

Formlarınız için ayrı bir önlem: ayda bir kendi formunuzu doldurup e-postanın geldiğini doğrulayın. Bozuk bir form uyarı vermez; yalnızca talepler kesilir.

## Uyarı yorgunluğundan kaçının

Çok uyarı, hiç uyarı olmamasıyla aynı sonucu verir: kimse bakmaz. Kurallar:

1. **Az ve önemli.** Yalnızca eyleme dönüşecek durumlar için uyarı kurun.
2. **Aciliyet ayrımı.** Site kapalı → SMS ya da anlık bildirim. Trafik düşüşü → e-posta. Küçük dalgalanma → haftalık özet.
3. **Sahibi olsun.** Her uyarı türü için kim bakacak, belli olsun.
4. **Yanlış alarmı düzeltin.** Bir uyarı üç kez boşa çaldıysa eşiğini değiştirin ya da kaldırın.
5. **Ne yapılacağını yazın.** “robots.txt değişti uyarısı gelirse: dosyayı aç, `Disallow: /` var mı bak, varsa geliştiriciyi ara.” Bir sayfalık not yeter.

## Uyarı geldiğinde ilk beş dakika

1. Sorunu kendi cihazınızda ve mobil veriyle doğrulayın.
2. Son değişikliklere bakın: bugün ya da dün ne yayınlandı ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/))?
3. Etkinin kapsamını belirleyin: tek sayfa mı, tüm site mi?
4. Geri alınabilecek değişikliği geri alın.
5. Olayı günlüğe yazın: ne oldu, ne zaman fark edildi, ne yapıldı.

## Haftalık beş dakikalık elle kontrol

Otomasyon her şeyi yakalamaz. Haftada bir:

- Search Console’da Sayfa dizine ekleme raporuna bakın: dizindeki sayfa sayısında ani değişiklik var mı?
- Manuel İşlemler ve Güvenlik Sorunları raporları boş mu?
- İşletme adınızı Google’da aratın: sonuç beklediğiniz gibi mi?
- Telefonunuzdan ana sayfayı ve iletişim sayfasını açın.

Aylık bakım düzeni için [web sitesi bakım planı](/blog/web-sitesi-bakim-plani-aylik-kontrol-listesi/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir kombi servisinin sitesi kış sezonunun başında tema güncellemesi alıyor. Güncelleme, SEO eklentisinin ayarını sıfırlayıp tüm sayfalara `noindex` ekliyor. İşletme bunu beş hafta sonra, telefonlar azalınca fark ediyor.

- **Sonrası:** Etiket kaldırılıyor; sayfaların dizine dönmesi haftalar alıyor.
- **Kurulan düzen:** Ana sayfa ve iki hizmet sayfası için günlük `noindex`, durum kodu ve robots.txt kontrolü; çalışma süresi izleme; Search Console e-postalarının iki kişiye ulaşması; GA4’te haftalık organik trafik uyarısı.
- **Kural:** Her güncellemeden sonra üç sayfanın kaynağı elle kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Search Console e-postalarının ayrılmış birine gitmesi.**
2. **Yalnızca sitenin açık olup olmadığını izlemek; `noindex` ve robots.txt’i izlememek.**
3. **Eşikleri çok hassas kurup uyarıları anlamsızlaştırmak.**
4. **Uyarıya kimin bakacağını belirlememek.**
5. **Analitik uyarısını sorgulamadan trafik kaybı saymak.**
6. **Formların çalıştığını hiç test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console bildirimlerinin doğru kişilere ulaşmasını sağlarız,
- çalışma süresi ve sessiz değişiklik kontrollerini kurarız,
- sitenizin dalgalanmasına uygun trafik eşikleri belirleriz,
- uyarı geldiğinde ne yapılacağını bir sayfalık notla yazarız.

İzleme kurulumu için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### En önemli tek uyarı hangisi?

Search Console e-postalarının okunması ve kritik sayfalarda `noindex` ile robots.txt değişikliğinin izlenmesi.

### Ücretli araç gerekir mi?

Çoğu işletme için hayır. Search Console, GA4 ve ücretsiz planlı bir çalışma süresi izleyicisi temel düzeni kurar.

### Kaç sayfayı izlemeliyim?

Ana sayfa, her şablondan bir örnek ve en çok trafik alan birkaç sayfa; yaklaşık on adres yeterlidir.

### Trafik uyarısı için eşik ne olmalı?

Sitenizin olağan dalgalanmasının üzerinde. Küçük sitelerde günlük yerine haftalık karşılaştırma kullanın.

### Search Console bildirimleri anlık mı gelir?

Hayır; günler sonra gelebilir. Bu yüzden çalışma süresi ve değişiklik kontrolleriyle desteklenmelidir.

## Kaynaklar

- [Search Console Yardımı: Sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)
- [Google Arama Merkezi: noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
