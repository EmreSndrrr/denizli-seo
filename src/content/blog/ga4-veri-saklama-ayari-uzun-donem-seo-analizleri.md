---
title: "GA4 Veri Saklama Ayarı Uzun Dönem SEO Analizini Etkiler mi?"
description: "GA4 veri saklama ayarı uzun dönem SEO analizlerini etkiler mi? 2 ay ve 14 ay seçenekleri, hangi raporların etkilendiği, ayarı değiştirme ve veri arşivleme."
date: 2026-11-19
service: teknik-seo
imageAlt: "GA4 veri saklama süresi ayarı ile standart raporlar ve keşiflerin farklı etkilenmesi"
---

GA4 veri saklama ayarı, kullanıcı düzeyindeki ve etkinlik düzeyindeki verilerin ne kadar süre saklanacağını belirler; bu ayar uzun dönem SEO analizini sınırlı bir şekilde etkiler. Google’ın açıklamasına göre veri saklama ayarı yalnızca keşifleri (Explorations) ve dönüşüm hunisi raporlarını etkiler; Google Analytics mülkünüzdeki standart toplu raporları (birincil ve ikincil boyutlar dahil) etkilemez. Yani temel raporlarla yıllar öncesine bakabilirsiniz; ama keşiflerde ayrıntılı analiz yapacaksanız saklama süresini ayarlamazsanız bir süre öncesine ait veriye erişemeyebilirsiniz. Ücretsiz mülklerde seçenekler 2 ay ya da 14 aydır; bu yüzden ayarı en uzun seçeneğe getirmek ve önemli verileri ayrıca dışa aktarmak iyi bir alışkanlıktır.

Bu yazıda veri saklama ayarının ne olduğunu, hangi raporları etkilediğini, nasıl değiştirileceğini ve uzun dönem SEO analizi için Search Console ve GA4 verilerini nasıl arşivleyeceğinizi anlatıyoruz. GA4 temel raporlar için [Google Analytics 4: işletmeler için temel raporlar](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/), rapor panosu için [Looker Studio ile SEO paneli nasıl hazırlanır?](/blog/looker-studio-ile-seo-paneli-nasil-hazirlanir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Veri saklama ayarı nedir?

Google Analytics’in “Veri saklama” sayfası, veri saklama denetimlerinin, Analytics tarafından depolanan kullanıcı düzeyindeki ve etkinlik düzeyindeki verilerin Analytics sunucularından otomatik olarak silinmesi için gereken süreyi ayarlamanıza olanak tanıdığını söyler. Google Analytics mülkleri için kullanıcı düzeyindeki verilerin saklanma süresini şu değerlere ayarlayabilirsiniz: 2 ay ya da 14 ay. Bu saklama süresi önemli etkinlik verileri için de geçerlidir; diğer tüm etkinlik verileri için 2 ay, 14 ay seçenekleri sunulur; 26, 38 ve 50 ay seçenekleri yalnızca Analytics 360 içindir. Büyük ve çok büyük mülklerde süre 2 ayla sınırlıdır. Saklama süresi sona eren veriler her ay otomatik olarak silinir ([veri saklama](https://support.google.com/analytics/answer/7667196?hl=tr)).

Ayrıca Google Ads reklam verileri, ayardan bağımsız olarak 36 aylık bir zaman aralığıyla sınırlıdır; Google sinyalleriyle ilgili verilerin saklanma süresi en fazla 26 aydır.

## Hangi raporlar etkilenir, hangileri etkilenmez?

Google’ın açıklaması çok nettir: veri saklama ayarı yalnızca keşifleri ve dönüşüm hunisi raporlarını etkiler; standart toplu raporları (birincil ve ikincil boyutlar dahil) etkilemez; raporlarda karşılaştırmalar oluştursanız bile bu böyledir.

| Rapor türü | Etkilenir mi? | Anlamı |
| --- | --- | --- |
| Standart raporlar (Trafik edinme, Etkileşim vb.) | Hayır | Daha eski dönemlere bakabilirsiniz |
| Keşifler (Explorations) | Evet | Ayrıntılı analizde saklama süresinden eski veri yok |
| Dönüşüm hunisi raporları | Evet | Eski dönemler eksik kalabilir |
| Özel segment ve ayrıntılı kullanıcı analizi | Evet | Kullanıcı düzeyinde veriye dayanır |

Pratik sonuç: “geçen yılın aynı ayıyla trafik karşılaştırması” standart raporlarla yapılabilir; ama “geçen yıl hangi kullanıcı yolu daha çok dönüşüm getirdi?” gibi ayrıntılı bir keşif analizi, saklama süresi geçtiğinde yapılamaz.

> **Hizmet almak için iletişime geçin.** Veri saklama ve arşivleme kurulumunuzu uzun dönem SEO analizine uygun hâle getirelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Ayarı nasıl değiştirirsiniz?

Adımlar (arayüz zamanla değişebilir):

1. **Yönetici ayarlarını açın.** Mülk düzeyinde veri toplama ve değiştirme bölümündeki “Veri saklama” seçeneğine gidin.
2. **Etkinlik verisi saklama süresini seçin.** Mümkünse 14 ay.
3. **Kaydedin.** Ayar kaydedilir.

Google’ın sayfası saklama süresini değiştirmenin etkisini de anlatır: saklama süresini uzatırsanız yeni süre önceden toplanmış veriler için de geçerli olur (henüz silinmemiş veriler için); saklama süresini kısaltırsanız etkilenen veriler bir sonraki aylık silme döngüsünde silinir. Bu yüzden kısaltmadan önce dikkatli düşünün; uzatma ise güvenli ve çoğu işletme için doğru yönelimdir.

## Uzun dönem SEO analizi için ne yapmalısınız?

GA4’ün saklama sınırı nedeniyle, uzun dönem analizi yalnızca GA4’e bağlı bırakmayın:

1. **Saklamayı 14 aya çıkarın.** Keşiflerde daha uzun geçmişe erişin.
2. **Search Console verisini düzenli dışa aktarın.** Search Console de verileri sınırlı süre tutar ve gizlilik gibi nedenlerle eksik olabilir; aylık dışa aktarma kendi arşivinizi oluşturur ([Search Console’da bazı arama sorguları neden görünmüyor?](/blog/search-console-bazi-arama-sorgulari-neden-gorunmuyor/)).
3. **GA4 aylık özetini arşivleyin.** Her ay organik oturum, açılış sayfası, dönüşüm gibi temel tabloları dışa aktarıp tarihle birlikte saklayın.
4. **Veriyi bir veri ambarına ya da tabloya akıtın.** GA4’ün BigQuery dışa aktarması gibi seçenekler, uzun dönem ham veri saklamak için kullanılabilir; ama kurulumu ve maliyeti teknik bilgi gerektirir.
5. **Looker Studio panosu kurun.** Standart raporların verisini bir panoda toplayıp aylık özetleri not edin ([Looker Studio ile SEO paneli nasıl hazırlanır?](/blog/looker-studio-ile-seo-paneli-nasil-hazirlanir/)).
6. **Önemli dönemleri not edin.** Büyük bir site değişikliği, kampanya ya da güncelleme tarihlerini bir günlükte tutun ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)).

Küçük bir işletme için en pratik yol: saklamayı 14 aya ayarlayın ve her ay Search Console ile GA4’ün temel tablolarını bir klasöre dışa aktarın. Bu, hem yıllık karşılaştırmayı hem uzun dönem eğilim görmeyi garanti eder.

## Gizlilik ve uyum notu

Veri saklama süresi aynı zamanda gizlilik ve uyum konusudur. Kişisel verilerin ne kadar süre saklandığına dair yasal yükümlülükleriniz olabilir; saklama süresini seçerken kişisel verilerin korunması mevzuatını ve kendi gizlilik politikanızı gözden geçirin. Hukuki konularda uzmana danışın; bu yazı hukuki danışmanlık değildir. Çerez izni ve veri toplama ayarları da analiz verisinin kapsamını etkiler ([çerez izinleri GA4 organik trafik verisini nasıl etkiler?](/blog/cerez-izinleri-ga4-organik-trafik-verisini-nasil-etkiler/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili e-ticaret sitesi, geçen yıl kasım ayında hangi organik sayfaların satış getirdiğini detaylı incelemek istiyor ama keşiflerde bu döneme ait veri yok. İşletme GA4 saklama ayarının 2 ay olduğunu fark ediyor.

Ayarı 14 aya çıkarıyor; ayrıca ilk kez Search Console’dan ve GA4 standart raporlarından aylık özet tabloları dışa aktarıp bir klasörde arşivlemeye başlıyor. Geçen yılın kasım ayı için standart raporlardaki trafik ve dönüşüm özetlerine hâlâ erişebiliyor; ayrıntılı keşif analizi ise ancak yeni dönemden itibaren mümkün. Bu örnek sonuç vaadi değildir; ayarın etkisini gösterir.

## Sık yapılan hatalar

1. **Ayarı hiç kontrol etmemek.** Keşiflerde geçmiş veri aramak boşa gider.
2. **Standart raporları da etkilendi sanmak.** Etkilenmezler.
3. **Saklama süresini kısaltmak.** Veri bir sonraki döngüde silinir.
4. **Yalnızca GA4’e güvenmek.** Search Console ve GA4 özetlerini arşivleyin.
5. **Dışa aktarma almamak.** Her ay kısa bir arşiv, yıllar sonra çok değerlidir.
6. **Gizlilik yükümlülüklerini düşünmemek.** Saklama süresini mevzuatla uyumlu seçin.

## Aylık arşiv için dosya düzeni

Arşivi düzenli tutmak için basit bir klasör düzeni kurun: yıl klasörü, içinde ay klasörleri; her ay klasöründe “search-console-sayfalar.csv”, “search-console-sorgular.csv”, “ga4-organik-acilis-sayfalari.csv” ve “ga4-donusumler.csv” gibi sabit adlı dosyalar. Dosyaların içine dışa aktarma tarihini ve kullanılan filtreleri not eden kısa bir metin dosyası ekleyin. Ayın ilk haftasında yirmi dakika ayırarak bu dosyaları dışa aktarmak, yıllık karşılaştırma ve uzun dönem eğilim analizi için yeterli ham veriyi biriktirir. Dosyaları ortak bir bulut klasöründe tutun ve yedeğini alın; kişisel veri içermediğinden emin olun.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- GA4 veri saklama ayarınızı ve veri akışı yapılandırmanızı kontrol eder, uzun dönem analize uygun hâle getiririz,
- Search Console ve GA4 için aylık dışa aktarma ve arşiv düzeni kurarız,
- yıllık karşılaştırma ve eğilim raporları için panolar hazırlarız,
- sonuç vaat etmeden, uzun dönem görünürlük ve talep eğilimini izleriz.

Ölçüm altyapınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** GA4 saklama ve arşivleme düzeninizi birlikte kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Veri saklama ayarı standart raporları siler mi?

Hayır. Google, ayarın yalnızca keşifleri ve dönüşüm hunisi raporlarını etkilediğini; standart toplu raporları etkilemediğini belirtir.

### Hangi süreyi seçmeliyim?

Ücretsiz mülklerde 14 ay genellikle daha yararlıdır; gizlilik yükümlülükleriniz varsa mevzuata uygun olanı seçin.

### Süreyi uzatırsam eski veriler geri gelir mi?

Hayır. Zaten silinmiş veriler geri gelmez; yeni süre henüz silinmemiş veriler için geçerli olur.

### Search Console verisini neden dışa aktarmalıyım?

Search Console de sınırlı süre tutar ve gizlilik nedeniyle bazı sorguları göstermez. Aylık dışa aktarma kendi arşivinizi oluşturur.

### BigQuery’e dışa aktarma şart mı?

Hayır. Küçük işletmeler için aylık tablo dışa aktarma yeterli olabilir. BigQuery ileri bir seçenektir ve teknik kurulum ister.

## Kaynaklar

- [Analytics Yardım: Veri saklama](https://support.google.com/analytics/answer/7667196?hl=tr)
- [Search Console Yardımı: Search Console verileri hakkında](https://support.google.com/webmasters/answer/96568?hl=tr)
