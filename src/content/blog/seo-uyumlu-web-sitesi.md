---
title: SEO Uyumlu Web Sitesi Nedir? Yaptırmadan Önce Kontrol
description: "SEO uyumlu web sitesi ne demek? Mobil uyum, hız, adres yapısı, başlıklar ve yönlendirme için tasarımcıya sorulacak sorular ve teslim kontrol listesi."
date: 2026-11-06
service: web-tasarim
imageAlt: "Bir web sitesi taslağı ve yanında işaretlenmiş kontrol listesi"
---

SEO uyumlu web sitesi, Google’ın bulup tarayabildiği, telefonda hızlı ve düzgün açılan, her sayfası kendi başlığı ve adresiyle ayrı bir soruya cevap veren sitedir. “SEO uyumlu” bir etiket değil, teslim anında kontrol edilebilecek bir listedir: mobil sürüm, hız, adres yapısı, başlıklar, site haritası ve eski adreslerin yönlendirilmesi. Sıra garantisi ise hiçbir tasarımın parçası olamaz.

Web siteniz yaptıracaksanız ya da yenileyecekseniz, “SEO uyumlu mu yapıyorsunuz?” sorusuna alacağınız “evet” cevabı tek başına bir şey söylemez. Bu yazı, o cevabı somut kalemlere çevirmenize yardımcı olur: tasarımcıya hangi soruları soracağınızı ve siteyi teslim alırken neye bakacağınızı anlatır.

## SEO uyumlu web sitesi ne anlama gelir?

Bu ifade, sitenin arama motorunun işini kolaylaştıracak şekilde kurulmuş olması demektir. Google’ın bir sayfayı bulup anlaması ve ziyaretçinin o sayfada aradığını bulması için şu koşulların sağlanması gerekir:

- Sayfalar **taranabilir ve dizine girebilir** olmalı.
- Site **telefonda** düzgün çalışmalı.
- Her sayfanın **kendi başlığı, adresi ve içeriği** olmalı.
- Eski site varsa **yönlendirmeler** doğru kurulmalı.

Güzel tasarım ile SEO uyumu aynı şey değildir. Çok şık, ama tüm içeriği tek bir görselden oluşan bir site SEO açısından zayıf olabilir.

## Mobil uyum neden birinci sırada?

Google, dizine ekleme ve sıralama için sitenin mobil sürümünü kullanır; buna mobil öncelikli dizine ekleme denir. Google ayrıca mobil sitenin masaüstüyle aynı içeriğe sahip olmasını söyler ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Bu yüzden tasarımı masaüstünden bakarak onaylamayın; telefonda açıp bakın.

Tasarımcıya sorun: “Telefon sürümünde masaüstündeki tüm içerik ve bağlantılar var mı?” Telefonda gizlenen bir bölüm, Google’ın gördüğü sitede de eksik olabilir.

## Hız ne kadar önemli?

web.dev, iyi bir kullanıcı deneyimi için en büyük içeriğin yüklenmesinin (LCP) 2,5 saniye içinde olmasını, etkileşime yanıt süresinin (INP) 200 milisaniye veya daha az olmasını önerir ([Web Vitals](https://web.dev/articles/vitals?hl=tr)). Yavaş site, ziyaretçiyi kaybettirir.

Tasarımcıya şunları sorun:

- Fotoğraflar boyutlandırılıp sıkıştırılıyor mu?
- Gereksiz eklenti ya da kütüphane kullanılıyor mu?
- Hız ölçümünü yayına almadan önce hangi araçla yapacaksınız?

Hızı nasıl ölçeceğinizi [telefonda yavaş site](/blog/telefonda-hizli-acilan-site/) yazımızda anlattık.

## Adres (URL) yapısı nasıl olmalı?

Google’ın URL rehberi, kelimeleri ayırmak için kısa çizgi (-) kullanmayı önerir; alt çizgi (_) ya da kelimeleri birleştirmek önerilmez ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)). Pratik karşılığı:

| İyi | Zayıf |
| --- | --- |
| `/hizmetler/kombi-bakimi/` | `/index.php?id=237` |
| `/pamukkale-pansiyon/` | `/pamukkale_pansiyon/` |
| `/iletisim/` | `/sayfa2/` |

Adresi okunabilir tutun, Türkçe karakterleri tutarlı yazın ve adresi sonradan değiştirmeyin. Değiştirirseniz eski adres yeni adrese yönlendirilmelidir (aşağıya bakın).

## Başlıklar ve açıklamalar nasıl hazırlanmalı?

Her sayfanın açıklayıcı ve kısa bir `<title>` başlığı olmalı; “Ana Sayfa” ya da tüm sayfalarda aynı başlık kullanılmamalı ([başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)). Meta açıklama için de her sayfa benzersiz bir metin almalı ([meta tanımlar](https://developers.google.com/search/docs/appearance/snippet?hl=tr)).

Tasarımcıya sorun: “Başlık ve açıklamaları sayfa sayfa girebilir miyim, yoksa şablondan otomatik mi geliyor?” Otomatik gelen başlıklar çoğu zaman tüm sayfalarda aynıdır.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Site haritası ve robots ayarları var mı?

Site haritası, sitenizdeki önemli adresleri Google’a bildiren bir dosyadır ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)). Bazı içerik yönetim sistemleri bunu otomatik üretir. Teslimde şu iki şeyi sorun:

1. Site haritası var mı, adresi nedir?
2. Yayın öncesi sitenin Google’a kapatıldığı bir ayar (noindex gibi) varsa, yayına alındığında kaldırıldı mı?

İkincisi sık yaşanan bir hatadır: site hazırlanırken Google’ın görmemesi için kapatılan ayar yayın sonrası açılması unutulur ve site aylarca dizine girmez. Teslimden sonra [Search Console’da ilk kontrolü](/blog/search-console-ilk-kontrol/) mutlaka yapın.

## Eski siteden yenisine geçerken ne yapılmalı?

Eski sitenin sıraları varsa, adresler değiştiğinde eski adreslerin yeni adreslere yönlendirilmesi gerekir. Yönlendirme yapılmadan yayına alınan yeni bir tasarım, eski sitenin biriktirdiği görünürlüğü kaybettirebilir. Adım adım liste için [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/) yazımıza bakın. Tasarımcıya yazılı sorun: “Eski adreslerin yeni adres eşleme tablosunu kim hazırlayacak?”

## İçerik ve görseller

Site yalnızca tasarım değildir; müşterinin sorusuna cevap veren metin gerekir. Sorun şu: bazı tasarımcılar sayfayı “doldurmak” için yer tutucu metin bırakır ya da tüm metni görsel olarak koyar. Bu durumda Google, sayfanın ne anlattığını anlayamaz.

Kontrol edin:

- Hizmet metinleri sayfada gerçek metin olarak mı duruyor?
- Görsellerin açıklayıcı alt metni var mı?
- Her hizmet için ayrı sayfa açılıyor mu?

## Web tasarımcıya sorulacak sorular

- **Telefon sürümü masaüstüyle aynı içeriği taşıyor mu?:** Evet, test edilir
- **Hız ölçümü yapılacak mı?:** Yayın öncesi ve sonrası, yazılı
- **Başlık ve açıklamaları ben girebilir miyim?:** Her sayfa için ayrı alan var
- **Site haritası ve yönlendirmeler hazırlanacak mı?:** Evet, eşleme tablosuyla
- **Yayında “noindex” kaldırıldı mı?:** Evet, birlikte kontrol edilir
- **Siteye erişim ve hesaplar kime ait?:** Bana

“SEO uyumlu yapıyoruz” cevabının yanında bu soruların cevabı yoksa teklif eksiktir.

## Teslimde son kontrol listesi

1. Telefonda tüm sayfalar açılıyor ve okunuyor.
2. Her sayfanın benzersiz başlığı ve açıklaması var.
3. Adresler okunabilir, kısa çizgili.
4. Site haritası var ve Search Console’a gönderildi.
5. Eski adresler yönlendirildi.
6. Yayın öncesi kapatılan ayarlar kaldırıldı.
7. Hız ölçümü yapıldı ve sonuç yazıya geçirildi.
8. Hesaplar ve erişimler size ait.

Bunlar, [ücretsiz SEO analizi](/blog/ucretsiz-seo-analizi-nasil-yapilir/) yazımızdaki kontrollerin teslim anına uyarlanmış hâlidir.

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Hazır sistem mi, özel kodlama mı?

Site yaptırırken tasarımcı genellikle üç yoldan birini önerir. SEO açısından her birinin kontrol edilecek noktası farklıdır:

- **Hazır içerik yönetim sistemi ve tema:** güçlü yanı: Hızlı kurulum, başlık ve açıklamayı panelden girme; seo için dikkat: Tema ağırlığı, gereksiz eklentiler, hız
- **Site oluşturucu (sürükle-bırak):** güçlü yanı: Kolay kullanım; seo için dikkat: Başlık, adres ve yönlendirme ayarlarının ne kadar esnek olduğu
- **Özel kodlanmış site:** güçlü yanı: Tam kontrol, hafif yapı; seo için dikkat: Başlık, site haritası ve yönlendirmeler baştan kodlanmalı; dokümantasyon istenmeli

Hangisini seçerseniz seçin, ayarları kendi panelinizden değiştirip değiştiremeyeceğinizi sorun. Sonradan başlık değiştirmek için her seferinde yazılımcı çağırmak istemezsiniz.

## Teklifte SEO maddesi nasıl yazılmalı?

“SEO uyumlu” ifadesi tek başına teklifte yer almamalı. Onun yerine ölçülebilir kalemler yazılsın:

1. Her sayfa için ayrı başlık ve meta açıklama alanı.
2. Telefonda test edilmiş mobil sürüm.
3. Yayın öncesi ve sonrası hız ölçümü.
4. Site haritası oluşturulması ve Search Console’a eklenmesi.
5. Eski adreslerden yeni adreslere yönlendirme planı.
6. Kısa çizgili, okunabilir adres yapısı.
7. Görseller için alt metin alanı ve boyutlandırma.
8. Yayın sonrası dizin kontrolü.

Bu kalemler teklifte yazılıysa, teslimde kontrol edilebilir. Yazılı değilse “uyumlu” kelimesi bir söz değil, bir tahmindir.

## Çok şubeli ve çok hizmetli siteler için ek notlar

Birden fazla şubeniz varsa, her şube için ayrı sayfa, ayrı adres ve telefon ve İşletme Profili ile eşleşen bilgi gerekir. Birden çok hizmet veriyorsanız menüde hepsi görünür olmalı ve her biri ayrı adrese sahip olmalı. Çok dilli bir siteyi planlıyorsanız dil sürümlerinin yapısını tasarımcıyla baştan netleştirin; sonradan eklemek, adres yapısını değiştirmeyi gerektirir.

## Yayından sonraki ilk 30 gün

1. **İlk gün:** Search Console’da siteyi doğrulayın, site haritasını gönderin, ana sayfa ve iki hizmet sayfası için URL Denetleme yapın.
2. **İlk hafta:** Sayfa dizine ekleme raporunda hata var mı bakın; telefon aramalarının ve formların çalıştığını test edin.
3. **İkinci hafta:** Eski adresleri tek tek açıp yönlendirmenin çalıştığını kontrol edin.
4. **Dördüncü hafta:** Performans raporunda ilk gösterimlere bakın ve eksik kalan sayfaları listeleyin.

Bu süreçte trafik geçici olarak dalgalanabilir. Panik yapmadan, kontrol listesine dönün.

## Ziyaretçiyi müşteriye çeviren öğeler

SEO uyumlu bir site yalnızca Google içindir demek eksiktir; siteye gelen kişinin sizi arayabilmesi de gerekir. Teslimde şunlara bakın:

- **İletişim yolu her sayfada görünür mü?** Telefon, WhatsApp ve form, sayfayı kaydırmadan bulunabilmeli.
- **Güven öğeleri gerçek mi?** Gerçek fotoğraflar, adres, çalışma saatleri ve işletme bilgileri. Stok fotoğraf ve uydurma yorum güveni zedeler.
- **Haritada nasıl görünüyorsunuz?** İletişim sayfasındaki adres ve telefon, Google İşletme Profili’ndekiyle aynı olmalı.
- **Sayfa hedefi net mi?** Her hizmet sayfası, ziyaretçiye bir sonraki adımı (ara, yaz, randevu al) söylemeli.

Bu öğeler SEO’nun parçası değil gibi görünür, ama aramadan gelen ziyaretçinin müşteri olup olmayacağını belirler.

## Sık sorulan sorular

### Hazır tema ile SEO uyumlu site olur mu?

Olabilir; ama temanın mobil görünümünü, hızını ve başlık ayarlarını denemek gerekir. Hazır tema SEO’yu otomatik çözmez.

### SEO uyumlu site yaptırınca sıralamam yükselir mi?

Garanti yok. Uyumlu site, Google’ın sizi bulmasını kolaylaştırır; sıralamada ise içerik, tanınırlık ve rekabet belirleyicidir.

### Siteyi yeniledim ve trafik düştü, neden olabilir?

En sık nedenler eksik yönlendirmeler, yayında kalan noindex ayarı ve kaybolan sayfalardır. Önce Search Console’daki Sayfa dizine ekleme raporuna bakın.

### SEO ve web tasarım aynı kişiden mi alınmalı?

Zorunlu değil, ama iki taraf arasındaki iletişim kolaylaşır. Ayrı kişilerle çalışıyorsanız SEO kontrol listesini tasarımcıya baştan verin.

### Siteyi kendim güncelleyebilecek miyim?

Bunu teslimden önce netleştirin. Yazı, başlık ve görsel değişikliklerini panelden yapabilmelisiniz. Her küçük değişiklik için tasarımcıya bağımlı kalmak, siteyi zamanla eskitir.

### Ne kadar sürede teslim alınır ve SEO ne zaman başlar?

Süre sitenin kapsamına bağlıdır. SEO işi yayından sonra bitmez; teslimden sonra dizin kontrolü ve içerik çalışması başlar.

## Kaynaklar

- [Google Search Central: mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)
- [Google Search Central: URL yapısı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
- [Google Search Central: başlık bağlantılarını etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
- [Google Search Central: meta tanımlar nasıl yazılır?](https://developers.google.com/search/docs/appearance/snippet?hl=tr)
- [Google Search Central: site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)

Yeni bir site planlıyorsanız ya da mevcut sitenizi yenileyecekseniz [web tasarım sayfamıza](/web-tasarim/) bakabilir ya da [bize yazabilirsiniz](/iletisim/).
