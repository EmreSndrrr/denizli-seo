---
title: "WordPress Sitem Yavaş Açılıyor: Nereleri Kontrol Etmeli?"
description: "WordPress sitesi yavaşsa önce ölçün, sonra nedenini bulun: sunucu yanıt süresi, tema, eklentiler, görseller, önbellek ve üçüncü taraf betikler."
date: 2026-11-14
service: web-tasarim
imageAlt: "WordPress sitesinde sunucu, tema, eklenti ve görsel kaynaklı yavaşlık noktaları"
---

WordPress sitesi yavaş açılıyorsa sırayla beş yeri kontrol edin: sunucu yanıt süresi (hosting), tema ve sayfa oluşturucu ağırlığı, eklentiler, görseller ve önbellek (cache) ayarı. Önce neyin yavaşladığını ölçün; tahminle eklenti silmek ya da hızlandırma eklentisi kurmak çoğu zaman işe yaramaz ve siteyi bozabilir. En büyük kazanç genellikle görsellerde ve sunucu yanıt süresinde çıkar.

Yavaşlık yalnızca sinir bozucu değil, maliyetlidir: ziyaretçi sayfayı terk eder, Google’ın Core Web Vitals ölçümleri kötüleşir. Bu yazı, WordPress sitenizdeki yavaşlığın kaynağını bulmanız için adım adım bir kontrol sırası sunuyor. Düzeltmeyi bizim yapmamızı isterseniz [web tasarım hizmetimizi](/web-tasarim/) inceleyebilirsiniz.

## Önce ölçün: sorun nerede?

Hızı iki şekilde ölçersiniz: laboratuvar verisi (kontrollü tek test) ve gerçek kullanıcı verisi. İkisinin farkı için [site hızı ölçümü: laboratuvar ve gerçek kullanıcı verisi](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/) yazısına bakın. Başlangıç için:

1. Ana sayfa ve bir iç sayfayı PageSpeed Insights’ta mobil için ölçün.
2. Hangi metriğin kötü olduğuna bakın: LCP, INP ya da CLS. Google ve web.dev’e göre iyi eşikler LCP için 2,5 saniye, INP için 200 milisaniye ve CLS için 0,1’dir ([Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)).
3. LCP öğesini belirleyin; web.dev, bunun PageSpeed Insights ya da geliştirici araçlarıyla bulunabileceğini belirtir.
4. Sonuçları tarihle birlikte kaydedin; her değişiklikten sonra yeniden ölçün.

web.dev, LCP’yi dört alt bölüme ayırır: ilk bayt süresi (TTFB), kaynak yükleme gecikmesi, kaynak yükleme süresi ve öğe oluşturma gecikmesi; yüksek TTFB’nin 2,5 saniyelik hedefi zorlaştırdığını ve bir bölümü iyileştirmenin süreyi başka bölüme kaydırabileceğini de söyler ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Yani önce hangi aşamanın uzun olduğunu bulun.

## Kontrol 1: Sunucu yanıt süresi (hosting)

Sayfa daha başlamadan sunucunun yanıt vermesi bekleniyorsa yavaşlığın kaynağı hosting olabilir. Belirtiler: ilk bayt süresi uzun, yoğun saatlerde yavaşlama, yönetim paneli de yavaş. Neler yapılır:

- Hosting planınızın kaynaklarını (işlemci, bellek) ve sitenizin ziyaretçi sayısını karşılaştırın.
- Sunucu tarafı önbelleklemenin açık olduğundan emin olun.
- PHP sürümünüzün güncel ve desteklenen bir sürüm olduğunu kontrol edin.
- Sorun sürüyorsa hosting sağlayıcınızla görüşün ya da daha uygun bir plana geçin; ayrıntı için [hosting seçimi: nelere bakılır?](/blog/hosting-secimi-nelere-bakilir/) yazısına bakın.

Hosting değişikliği yapacaksanız URL’ler değişmediği sürece Google’ın barındırma değiştirme rehberini izleyin ([barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)).

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Kontrol 2: Görseller

Görseller genellikle sayfa boyutuna en çok katkıda bulunan öğelerdir; Google’ın resim rehberi de bunu belirtir. WordPress’te sık görülen hatalar: kameradan çıkan büyük dosyaların yüklenmesi, temanın görselleri gereğinden büyük boyutta göstermesi, ilk ekrandaki görsele lazy loading verilmesi. Çözüm:

- Görselleri yüklemeden önce göründükleri boyuta küçültün ve WebP ya da JPEG kullanın.
- İlk ekrandaki (LCP) görsele lazy loading vermeyin; web.dev bunu açıkça önermez.
- Ekran dışındaki görsellerde lazy loading kullanın.
- Gerekirse görsel optimizasyon eklentisi kullanın ve sonucu ölçün.

Ayrıntı için [sayfa hızı için görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/) yazımıza bakın.

## Kontrol 3: Tema ve sayfa oluşturucu

Çok özellikli (çok amaçlı) temalar ve ağır sayfa oluşturucular, her sayfaya gereksiz kod ve stil dosyası ekleyebilir. Kontrol edin:

- Temanızın yüklediği stil ve betik dosyalarının sayısı ve boyutu.
- Hiç kullanmadığınız tema özellikleri (kaydırıcılar, animasyonlar, simge kütüphaneleri).
- Sayfa oluşturucunun ürettiği iç içe kod yoğunluğu.

Çözüm: daha hafif bir tema, gereksiz modüllerin kapatılması ya da kritik sayfaların daha sade tasarlanması. Tema değişikliği büyük bir iştir; yapmadan önce yedek alın ve önemli sayfaları test edin. Karar için [hazır tema mı, özel tasarım mı?](/blog/hazir-tema-mi-ozel-tasarim-mi-seo-acisindan/) yazısı yol gösterir.

## Kontrol 4: Eklentiler

Eklenti sayısı tek başına sorun değildir; ama her eklenti kod ekleyebilir. Bulmak için:

1. Eklentileri listeleyin ve kullanmadıklarınızı silin (devre dışı bırakmak yetmez).
2. Aynı işi yapan eklentileri tekilleştirin (örneğin iki SEO eklentisi).
3. Şüpheli eklentiyi geçici olarak kapatıp hızı yeniden ölçün; fark büyükse kaynak odur.
4. Sayfa başına en çok kod yükleyen eklentileri (form, kaydırıcı, sohbet, yorum, takip) belirleyin ve yalnızca gereken sayfalarda yükleyin.

Her eklenti değişikliğinden önce yedek alın ve işlemi canlı sitede değil, mümkünse deneme ortamında yapın.

## Kontrol 5: Önbellek (cache)

Önbellek, sayfayı her ziyaretçi için yeniden üretmek yerine hazır hâlini sunar. WordPress’te sayfa önbelleği genellikle en etkili hız iyileştirmelerinden biridir. Kontrol edin:

- Sayfa önbelleği açık mı? (hosting sağlayıcı ya da eklenti aracılığıyla)
- Tarayıcı önbelleği için doğru başlıklar var mı?
- Önbellek, giriş yapmış kullanıcılar ve alışveriş sepeti gibi dinamik sayfaları doğru ele alıyor mu?
- Bir değişiklik yaptığınızda önbellek temizleniyor mu?

Birden fazla önbellek eklentisini aynı anda çalıştırmayın; çakışma olur.

## Kontrol 6: Üçüncü taraf betikler

Takip kodları, sohbet pencereleri, harita ve video gömmeleri, reklam ve yorum sistemleri harici kaynaklardan yüklenir ve sitenizin hızını etkileyebilir. Hangilerinin gerçekten gerekli olduğunu belirleyin; kullanılmayan takip kodlarını kaldırın; ağır gömmeleri (video, harita) tıklanınca yüklenecek biçimde ayarlayın.

## Kontrol 7: Veritabanı ve arka plan

Zamanla veritabanında eski yazı sürümleri, spam yorumlar ve kullanılmayan veriler birikir. Düzenli temizlik ve optimizasyon, yönetim paneli ve dinamik sayfaların hızına yardım eder. Bu iş genellikle yedek alındıktan sonra bir eklenti ya da hosting aracıyla yapılır; yalnızca ne yaptığınızı bilen biri uygulamalıdır.

## Mobil hız ayrı düşünülmeli

Google dizine ekleme ve sıralama için sitenin mobil sürümünü kullanır. Masaüstünde hızlı görünen site mobilde yavaş olabilir. Mobil ölçümü esas alın; hız sorunlarını [sitem telefonda yavaş: nereden başlamalıyım?](/blog/telefonda-hizli-acilan-site/) yazısındaki sırayla inceleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya mağazasının WordPress sitesi mobilde yavaş açılıyor.

- **Ölçüm:** PageSpeed Insights’ta LCP öğesinin büyük bir kahraman görseli olduğu ve ilk bayt süresinin uzun olduğu görülüyor.
- **Görsel:** Görsel göründüğü boyuta küçültülüp WebP’ye çevriliyor; lazy loading ilk görselden kaldırılıyor.
- **Eklenti:** Kullanılmayan dört eklenti siliniyor; iki ayrı önbellek eklentisi tek çözüme indiriliyor.
- **Hosting:** Sunucu önbelleği açılıyor ve PHP sürümü güncelleniyor.
- **Kontrol:** Her adımdan sonra PageSpeed Insights ölçümü tabloya işleniyor.

Bu örnek bir sonuç vaadi değildir; sonuç siteye bağlıdır.

## Sık yapılan altı hata

1. **Ölçmeden eklenti silmek ya da kurmak.**
2. **Aynı anda birden fazla önbellek veya hız eklentisi çalıştırmak.**
3. **Yalnızca masaüstü hızına bakmak.**
4. **İlk ekran görseline lazy loading vermek.**
5. **Yedek almadan tema ve eklenti değişikliği yapmak.**
6. **Hız düzeltmesinden sonra yeniden ölçmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Yavaşlığın kaynağını bulmak, doğru işi seçmenin en kısa yoludur. [Web tasarım hizmetimizde](/web-tasarim/):

- sitenizi laboratuvar ve gerçek kullanıcı verisiyle ölçer, yavaşlığın kaynağını belirleriz,
- görsel, eklenti, tema, önbellek ve hosting düzeltmelerini öncelik sırasıyla uygularız,
- yedek ve deneme ortamıyla riski azaltırız,
- öncesi-sonrası ölçümleri yazılı raporlarız.

WordPress sitenizin hızını artırmak isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık sorulan sorular

### WordPress sitem neden yavaş?

Çoğunlukla büyük görseller, sunucu yanıt süresi, ağır tema ve eklentiler ya da önbelleğin eksikliği. Ölçerek hangisinin sorumlu olduğunu bulun.

### Hız eklentisi kurmak yeterli mi?

Tek başına değil. Hız eklentileri önbellek ve optimizasyon sağlar ama görsel, hosting ve tema sorunlarını çözmez.

### Eklenti sayısı önemli mi?

Sayıdan çok her eklentinin yüklediği kod önemlidir; kullanılmayanları silin, yinelenenleri tekilleştirin.

### Hosting değiştirmek siteyi hızlandırır mı?

Sunucu yanıt süresi sorunluysa evet; ama önce ölçüp kaynağın hosting olduğundan emin olun.

### Hız düzeltmesinin etkisi ne zaman görünür?

Laboratuvar ölçümünde hemen görülebilir; gerçek kullanıcı verisi geçmişe dayandığı için daha geç yansır.

## Kaynaklar

- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [Google Arama Merkezi: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
- [Google Arama Merkezi: Resim SEO en iyi uygulamaları](https://developers.google.com/search/docs/appearance/google-images?hl=tr)
- [Google Arama Merkezi: Barındırma hizmetinizi değiştirme](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=tr)
