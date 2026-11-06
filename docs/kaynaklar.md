# Doğrulanmış kaynaklar

Blog yazılarında Google’a atfedilen iddialar için doğrulanmış sayfalar. Her satır: sayfa, doğrulanan cümle (Türkçe sürümden, `?hl=tr`), doğrulama tarihi. Google sayfaları değişir; yeni yazıda kritik iddiayı yeniden kontrol et.

Not: Bulut oturumunda `developers.google.com`, `support.google.com` ve `web.dev` ağ politikasında izinli olmalı.

## developers.google.com/search

| Sayfa | Doğrulanan içerik | Tarih |
| --- | --- | --- |
| [SEO Başlangıç Kılavuzu](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr) | “Kısaca SEO olarak adlandırılan arama motoru optimizasyonu, arama motorlarının içeriğinizi anlamasına ve kullanıcıların da sitenizi bulup bir arama motoru aracılığıyla ziyaret edip etmeyeceklerine karar vermelerine yardımcı olur.” | 2026-11-06 |
| [SEO’ya mı İhtiyacınız Var? SEO Uzmanı İşe Alma İpuçları](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr) | “Kimse Google’da birinci sıra garantisi veremez. Sıralama garantisi veren, Google ile ‘özel ilişkisi’ olduğunu ileri süren veya Google’a ‘öncelikli gönderim’ hizmetinin tanıtımını yapan SEO’lara karşı dikkatli olun.” Uzmana sorulacak sorular: önceki çalışmalardan örnekler, Google Arama Yönergeleri’ne uyum, ne kadar zamanda nasıl sonuç beklendiği, başarının nasıl ölçüldüğü, sektör ve şehir deneyimi. “SEO’nuzun profesyonel referanslarını kontrol edin.” Üçüncü taraf araçlar: Google bu araçları değerlendirmez veya desteklemez. | 2026-11-06 |
| [Google Arama’nın İşleyiş Şekliyle İlgili Ayrıntılı Kılavuz](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=tr) | “Google Arama üç aşamada çalışır (tüm sayfalar her aşamadan geçmez): Tarama, dizine ekleme, arama sonuçlarını sunma.” “Sıralama otomatik yapılır ve Google, sayfaları daha üst sırada göstermek için ödeme kabul etmez.” | 2026-11-06 |
| [Google Arama’daki Başlık Bağlantılarını Etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr) | Her sayfanın `<title>` öğesi olmalı; açıklayıcı ve kısa olmalı; “Ana Sayfa” gibi belirsiz başlıklardan ve tüm sayfalarda tekrar eden başlıktan kaçınılmalı; gereksiz uzun olmamalı. | 2026-11-06 |
| [Meta Tanımlar Nasıl Yazılır?](https://developers.google.com/search/docs/appearance/snippet?hl=tr) | “Google, uygun snippet’i otomatik olarak belirlemek için öncelikli olarak sayfadaki içeriği kullanır.” Meta tanım sayfayı daha iyi anlatıyorsa kullanılabilir. Her sayfa için benzersiz açıklama önerilir. | 2026-11-06 |
| [Mobil Öncelikli Dizine Ekleme En İyi Uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr) | “Google, dizine ekleme ve sıralama için site içeriğinin akıllı telefon aracısı ile taranan mobil sürümünü kullanır.” Mobil sitede masaüstüyle aynı içerik bulunmalı. | 2026-11-06 |
| [Google Web Arama İçin Spam Politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr) | “Bağlantı spam’i, temel olarak arama sıralamalarını etkilemek için bir siteye veya siteden bağlantı verilmesidir.” Reklam ve sponsorluk bağlantıları, `rel="nofollow"` veya `rel="sponsored"` ile nitelendiği sürece politikaya aykırı değildir. | 2026-11-06 |
| Spam politikaları: bölümler ve örnekler (aynı sayfa) | Başlıklar: gizleme, anahtar kelime doldurma, gizli metin ve bağlantı, bağlantı spam’i, ölçeklendirilmiş içeriği kötüye kullanma, yanıltıcı işlevler, makine tarafından oluşturulan trafik. Anahtar kelime doldurma örneği: “sıralama almaya çalıştığı şehirlerin ve bölgelerin listelendiği metin blokları”. Bağlantı spam’i örnekleri: para/ürün karşılığı bağlantı, aşırı bağlantı takası, otomatik programlarla bağlantı oluşturma, düşük kaliteli dizinler veya yer işareti siteleri, forum yorumlarında optimize bağlantılar, alt bilgi/şablon bağlantıları. “Politikaları ihlal eden siteler, sonuçlarda daha alt sıralarda yer alabilir veya hiç görünmeyebilir.” Sayfada “black hat/white hat” ifadesi geçmez. | 2026-11-06 |
| [Giden Bağlantıları SEO için Uygun Hale Getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr) | `rel="sponsored"`: reklam veya ücretli yerleşim olan bağlantılar. `rel="ugc"`: yorum ve forum yayınları gibi kullanıcı içeriği bağlantıları. `rel="nofollow"`: siteyi bağlantılı sayfayla ilişkilendirmek istemediğinizde. “Bu rel özellikleriyle işaretlenen bağlantılar genellikle izlenmez.” Sayfada “dofollow” terimi geçmez. | 2026-11-06 |
| [Google için SEO Bağlantı En İyi Uygulamaları](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr) | Google bağlantıyı yalnızca `href` özelliği olan `<a>` öğesi olduğunda tarayabilir. “İyi bağlantı metni açıklayıcı, kısa ve öz, bulunduğu ve bağlantı verdiği sayfayla alakalı olmalıdır.” İç bağlantı metnine dikkat etmek, kullanıcıların ve Google’ın siteyi anlamasına yardımcı olabilir. | 2026-11-06 |



| Sayfa | Doğrulanan içerik | Tarih |
| --- | --- | --- |
| [URL Denetleme Aracı – Search Console Yardımı](https://support.google.com/webmasters/answer/9012289?hl=tr) | Tek bir URL’nin Google dizinindeki durumunu görme; sayfanın dizine eklenip eklenemediğini kontrol etme. | 2026-11-06 |
| [Sayfa dizine ekleme raporu – Search Console Yardımı](https://support.google.com/webmasters/answer/7440203?hl=tr) | “Dizine eklendi: Bu URL’ler başarıyla dizine eklenmiştir.” Raporda dizine eklenmeyen URL’ler ve nedenleri de listelenir. | 2026-11-06 |
| [Bağlantılar raporu – Search Console Yardımı](https://support.google.com/webmasters/answer/9049606?hl=tr) | Harici bağlantılar: “En çok bağlantı verilen sayfalar”, “En çok bağlantı veren siteler”, “En çok bağlantı veren metin”; dahili bağlantılar bölümü. Siteler kök alan adına göre gruplanır. Rapor Google’ın zaman içinde bulduğu bağlantıları içerir, bunlar sonradan kaldırılmış olabilir. Tablolar 1.000 satırla sınırlıdır. | 2026-11-06 |
| [Sitenize bağlantıları reddetme – Search Console Yardımı](https://support.google.com/webmasters/answer/2648487?hl=tr) | Çoğu zaman Google hangi bağlantılara güveneceğini ek yardım olmadan değerlendirebilir; çoğu sitede araç gerekmez. Yalnızca önemli miktarda spam/düşük kaliteli bağlantı varsa VE manuel işleme neden olduysa ya da olma ihtimali varsa reddedilir. Google, üçüncü taraf sitelerindeki işlemlerin siteyi olumsuz etkilememesi için çok yoğun çaba harcar. | 2026-11-06 |
| [Yerel sıralamanızı yükseltmeyle ilgili ipuçları – Google İşletme Profili Yardım](https://support.google.com/business/answer/7091?hl=tr) | Belirginlik, işletmenin ne kadar iyi bilindiğini ifade eder; “işletmenizin bağlantısının paylaşıldığı web sitesi sayısı ve aldığınız yorum sayısı gibi bilgilere bağlıdır.” | 2026-11-06 |

## web.dev

| Sayfa | Doğrulanan içerik | Tarih |
| --- | --- | --- |
| [Web Vitals](https://web.dev/articles/vitals?hl=tr) | LCP için iyi eşik: sayfa yüklenmeye başladıktan sonra 2,5 saniye içinde. INP için iyi eşik: 200 milisaniye veya daha az. | 2026-11-06 |
