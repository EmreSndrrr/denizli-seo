---
title: "503 Hatası SEO’yu Nasıl Etkiler? Bakım ve Kesintiler"
description: "503 hatası SEO’yu nasıl etkiler? Kısa bakımda 503 ve Retry-After kullanın, robots.txt’ye 503 vermeyin, uzun kapanmalarda siteyi açık tutun."
date: 2026-11-14
service: teknik-seo
imageAlt: "Bakım sayfası, 503 durum kodu ve Retry-After başlığı gösteren sunucu yanıtı"
---

503 (Service Unavailable), sunucunun geçici olarak hizmet veremediğini bildiren durum kodudur. Kısa bir bakım için doğru araçtır; ama Google’a göre 5xx hataları taramayı yavaşlatır ve uzun süren kesintilerde sayfalar dizinden çıkarılabilir. Bu yüzden bakımı mümkün olduğunca kısa tutun (en fazla birkaç gün), `Retry-After` başlığı ekleyin, robots.txt dosyasına asla 503 döndürmeyin ve uzun kapanmalarda siteyi açık tutup yalnızca işlevini sınırlayın.

Planlı bakım, hosting değişikliği ya da yoğun trafik yüzünden siteniz bir süre yanıt veremeyebilir. Bu sırada Google’a ne söylediğiniz, sitenizin aramadaki durumunu belirler. Bu yazı, 503’ün anlamını, Google’ın önerdiği bakım yöntemlerini ve sık yapılan hataları anlatıyor. Sitenizin kesintisiz kalmasını sağlamak için [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## 503 hatası nedir?

HTTP durum kodlarının 5xx grubu sunucu hatalarını gösterir. 503 “Service Unavailable”, yani “hizmet şu an yok, sonra deneyin” demektir. Diğer 5xx hatalarından (500, 502) farkı, durumun geçici olduğunu bildirmesidir. Kodların genel anlamı için [HTTP durum kodları](/blog/http-durum-kodlari-200-301-404-500-ne-anlama-gelir/) yazısına bakın.

Google’ın HTTP durum kodları belgesine göre 5xx ve 429 kodları taramayı yavaşlatır; taranamayan dizindeki URL’ler sonunda dizinden çıkarılabilir ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)). Yani 503 zararsız değildir; ne kadar uzun sürerse risk o kadar büyür.

## Tarama bütçesi ve 503

Google’ın tarama bütçesi rehberi, sitenin sunucu hatalarıyla (5xx) ya da sıklık sınırlama sinyalleriyle (429) yanıt vermesi hâlinde tarama kapasitesi sınırının düşeceğini ve Google’ın daha az tarama yapacağını belirtir ([tarama bütçesi](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)). Bu da kesinti bittikten sonra bile taramanın bir süre normale dönmemesine yol açabilir. Kısacası kesinti kısa ve nadir olmalıdır.

## Geçici bakım için Google ne öneriyor?

Google’ın “web sitesini geçici olarak duraklatma veya devre dışı bırakma” kılavuzuna göre sırayla şunlar önerilir ([kılavuz](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=tr)):

1. **En iyisi: siteyi çevrimiçi tutup işlevini sınırlamak.** Alışveriş sepetini devre dışı bırakın, tüm sayfalarda durumu açıklayan bir banner ya da pop-up gösterin, yapılandırılmış veriyi (stok gibi) güncelleyin. Böylece sitenin aramadaki varlığı mümkün olduğunca korunur.
2. **Siteyi tamamen kapatmak önerilmez.** Zorunluysa çok kısa bir süre (en fazla birkaç gün) için.
3. **1–2 günlük acil kapanış:** Tüm içerik yerine 503 durum koduyla bilgi amaçlı bir hata sayfası döndürün.
4. **Daha uzun kapanış:** 200 durum koduyla dizine eklenebilir bir yer tutucu ana sayfa sunun.

Belge, siteyi tamamen dizinden kaldırmanın kurtarılması uzun sürebilen önemli bir değişiklik olduğunu ve geri alınabilmesi için belirli bir süre bulunmadığını da hatırlatır. Bu yüzden bakım planını bir “anahtar kapama” gibi değil, mümkün olduğunca küçük bir etkiyle tasarlayın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 503 sayfasını doğru kurmak

Kısa bakım için 503 kullanıyorsanız Google’ın en iyi uygulamaları şunlardır:

- **`Retry-After` üstbilgisi:** En iyi sonuç için tarih ya da süre içeren `Retry-After` HTTP başlığı ekleyin.
- **Statik HTML kullanın:** Sunucu ya da istemci tarafı yüklemeyi en aza indirin.
- **Sayfa dışı kaynakları azaltın:** Satır içi CSS ve Base64 ile kodlanmış görsel tercih edilir.
- **Kullanıcıya yol gösterin:** Daha fazla bilgi için bağlantı, sitenin yeniden açılacağı tarih ve müşteri hizmetlerine ulaşma yolu yazın.
- **Doğru kodu doğrulayın:** `curl -I` gibi bir araçla yanıtın gerçekten 503 olduğunu kontrol edin.

Bu yanıtı döndüren sayfalarda Google’ın başlık, açıklama, meta veri ve yapılandırılmış verileri yenileyemeyeceğini de unutmayın.

## Yapılmaması gerekenler

Google’ın belgesi açıkça şunlardan kaçınmanızı söyler:

- **robots.txt’ye 503 döndürmek:** Tüm içeriğin taranmasını engeller. Robots.txt normal çalışmaya devam etmeli.
- **robots.txt ile tüm taramayı engellemek:** Hiçbir taramaya izin vermeyen geçerli bir robots.txt, sitenin içeriğini ve URL’lerini Arama’dan kaldırabilir.
- **Siteyi 403, 404, 410 ya da noindex ile kapatmak:** Bu, URL’leri Arama’dan kaldırır. Bakım için yanlış araçlardır.
- **Search Console geçici kaldırma aracını kullanmak:** Kullanıcıların siteyi bulmasını imkânsız kılar.

Bakım sırasında Google’ın tarama hızını azaltmak da mümkündür, ancak çoğu durumda önerilmez ve sonuçların güncelliğini etkileyebilir.

## Planlı bakım için kontrol listesi

Bakımdan önce:

1. Bakım penceresini en kısa ve en sakin saate (gece, hafta sonu) koyun.
2. Bakım sayfasını hazırlayın: statik HTML, açık mesaj, `Retry-After`.
3. robots.txt’nin ayrı olarak normal yanıt verdiğini doğrulayın.
4. Mümkünse bakımı kademeli yapın (önce kritik olmayan bölümler).
5. Yedek alın ve geri dönüş planını yazın.

Bakım sırasında yanıt kodunu kontrol edin; bakım sonrasında ana sayfa, hizmet sayfaları, iletişim formu ve robots.txt’yi test edin, Search Console’da tarama istatistiklerini ve sayfa dizine ekleme raporunu birkaç gün izleyin. Hosting değişikliği ise ayrı bir süreçtir; URL’ler değişmiyorsa Google’ın barındırma değiştirme rehberine bakın ([barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)).

## Plansız 503 hataları

Her 503 planlı olmaz. Sunucu aşırı yüklendiğinde, hosting sorun yaşadığında ya da bir eklenti sunucuyu kilitlediğinde siteniz beklenmedik 503 döndürebilir. Belirtiler: aralıklı erişilemezlik, yönetim paneline giriş sorunu, Search Console’da “sunucu hatası (5xx)” uyarıları. Yapılacaklar:

- Hosting sağlayıcısının durumuna ve sunucu günlüklerine bakın.
- Son eklenen eklenti, tema ya da kodu geri alın.
- Trafik artışı varsa sunucu kaynağını ve önbelleği kontrol edin.
- Sorun tekrar ediyorsa daha güçlü bir plana ya da daha iyi bir hostinge geçmeyi değerlendirin ([hosting seçimi: nelere bakılır?](/blog/hosting-secimi-nelere-bakilir/)).

Düzenli olarak yanıt süresini ve hata oranını izleyin; çoğu plansız 503 önceden belirti verir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili mağazasının çevrimiçi sitesi, yeni sürüm yayını için bir gece kapatılacak.

- **Plan:** Kapanma gece 02:00–04:00 arasına konuyor; süre kısa.
- **Yanıt:** Bakım sayfası 503 koduyla, `Retry-After` başlığıyla ve statik HTML olarak sunuluyor; robots.txt normal yanıt veriyor.
- **Kullanıcı mesajı:** “Sabah 06:00’da yeniden açılıyoruz; sipariş için telefon numarası…”
- **Kontrol:** Bakım sonrası ana sayfa, kategori ve ödeme adımı test ediliyor; Search Console’da sunucu hatası uyarısı kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Bakım sayfasını 200 koduyla yayınlamak.**
2. **robots.txt’ye de 503 döndürmek.**
3. **Bakımı günlerce uzatmak.**
4. **Siteyi 404 ya da noindex ile kapatmak.**
5. **`Retry-After` ve kullanıcı bilgisi vermemek.**
6. **Bakım sonrası kontrol yapmamak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Kesintiler planlandığında zarar vermez. [Teknik SEO hizmetimizde](/teknik-seo/):

- planlı bakım için doğru yanıt kodu, `Retry-After` ve bakım sayfası yapısını hazırlarız,
- plansız 5xx hatalarının kaynağını (sunucu, eklenti, trafik) tespit ederiz,
- bakım öncesi ve sonrası kontrolleri ve Search Console izlemesini yaparız,
- sonuçları yazılı raporlarız.

Bakım planınızı birlikte hazırlamak isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### 503 hatası sıralamamı düşürür mü?

Kısa süreli 503 genellikle sorun çıkarmaz; ama 5xx hataları taramayı yavaşlatır ve uzun süren kesintilerde sayfalar dizinden çıkarılabilir.

### Bakım sayfasında hangi kodu kullanmalıyım?

Kısa bakımda 503 ve `Retry-After`. Uzun süreli kapanma için Google siteyi açık tutup işlevi sınırlamayı önerir.

### Siteyi kaç gün kapatabilirim?

Google tamamen kapatmayı önermez; zorunluysa en fazla birkaç gün. Daha uzun süre için yer tutucu bir sayfa sunun.

### robots.txt için 503 sorun mu?

Evet. robots.txt’ye 503 döndürmek tüm içeriğin taranmasını engeller; bakım sırasında normal yanıt vermelidir.

### Bakım sırasında Search Console ne gösterir?

Sunucu hatası (5xx) uyarıları ve tarama istatistiklerinde düşüş görülebilir; bakım bittikten sonra izlemeye devam edin.

## Kaynaklar

- [Google Arama Merkezi: Web sitesini geçici olarak duraklatma veya devre dışı bırakma](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=tr)
- [Google Arama Merkezi: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: Barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)
