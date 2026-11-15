---
title: "Mobil Öncelikli Tasarım Nedir? İşletmeler İçin Rehber"
description: "Mobil öncelikli tasarım nedir? Telefonu esas alan tasarım ilkeleri, Google’ın mobil öncelikli dizine ekleme açıklaması, dokunma alanları, hız ve test adımları."
date: 2026-11-12
service: web-tasarim
imageAlt: "Önce telefon ekranı tasarlanıp sonra büyük ekrana genişleyen sayfa düzeni"
---

Mobil öncelikli tasarım, siteyi önce telefon ekranı için kurup sonra tablet ve bilgisayara genişletme yaklaşımıdır. Bu, Google’ın “mobil öncelikli dizine ekleme” uygulamasından farklı bir kavramdır ama birbirini destekler: Google, dizine ekleme ve sıralama için sitenin akıllı telefon aracısıyla taranan mobil sürümünü kullanır. Telefonda eksik ya da bozuk bir site arama tarafında da zayıf kalabilir. Hedef: aynı içerik, okunur yazı, kolay düğmeler, hızlı yükleme.

Yerel işletmeler için müşteri çoğu zaman telefondadır: “yakınımda klima servisi”, “bu akşam açık eczane”, “Pamukkale’de otel”. Müşteri sitenize yolda, kuyrukta ya da evde kanepede gelir; sayfanın saniyeler içinde anlaşılması gerekir. Bu yazıda kavramı, Google’ın ne dediğini ve bir işletme sitesinde nelere dikkat edileceğini anlatıyoruz. Test için [mobil uyumluluk nasıl test edilir?](/blog/mobil-uyumluluk-nasil-test-edilir/), genel temel için [SEO uyumlu web sitesi](/blog/seo-uyumlu-web-sitesi/) yazılarına bakabilirsiniz.

## İki farklı kavram: mobil öncelikli tasarım ve mobil öncelikli dizine ekleme

Bu iki terim sık karıştırılır:

| Kavram | Kim, ne yapar? | Anlamı |
| --- | --- | --- |
| Mobil öncelikli tasarım | Tasarımcı / geliştirici | Siteyi önce telefon için kurma yöntemi |
| Mobil öncelikli dizine ekleme | Google | Dizine ekleme ve sıralamada sitenin mobil sürümünü esas alma |
| Duyarlı (responsive) tasarım | Geliştirici | Aynı sayfanın ekran boyutuna göre uyum sağlaması |

Google’ın rehberine göre Google, dizine ekleme ve sıralama için site içeriğinin akıllı telefon aracısıyla taranan mobil sürümünü kullanır; mobil sitede masaüstüyle aynı içeriğin bulunması gerekir ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Bu yüzden “masaüstünde var, telefonda gizli” içerik, Google’ın gördüğü içerikten eksik olabilir.

## Mobil öncelikli tasarımın ilkeleri

1. **İçerik önceliği.** Telefon küçük bir ekrandır; en önemli bilgi (ne yapıyorsunuz, nerede, nasıl ulaşılır) ilk ekranda olmalı.
2. **Tek sütun.** Bölümler alt alta akar; yan yana iki sütun telefonda sıkışır.
3. **Okunur yazı.** Yazı yakınlaştırma gerektirmeden okunmalı; satırlar çok uzun olmamalı.
4. **Dokunma dostu düğmeler.** Parmakla rahat basılacak büyüklükte, birbirine yeterince uzak.
5. **Kısa form ve tıklanabilir telefon.** Telefonda yazmak zordur; alanları azaltın, `tel:` bağlantısı kullanın.
6. **Hafif sayfa.** Mobil bağlantı yavaş olabilir; büyük görseller ve ağır betikler sorun yaratır.
7. **Menü sadeliği.** Açılır menü tek elle kullanılabilmeli.
8. **Aynı içerik.** Masaüstünde olan metin, görsel ve yapılandırılmış veri mobilde de olmalı.

## Masaüstü ve mobil içerik eşitliği

Google’ın rehberi mobil sitede masaüstüyle aynı içeriğin bulunmasını ister. Başlık, açıklama ve yapılandırılmış veride de tutarlılık, bizim genel tavsiyemizdir. Sık yapılan sapmalar şunlardır:

- **Mobilde metnin kısaltılması:** neden zarar?: Google mobil sürümü esas alır, kısaltılan bilgi görülmez; çözüm: Aynı metni gösterin; gerekirse açılır bölüm kullanın
- **Mobilde görsellerin ya da alt metnin eksik olması:** neden zarar?: Görsel arama ve anlam kaybı; çözüm: Aynı görselleri ve alt metinleri koruyun
- **Mobilde farklı başlık ve açıklama:** neden zarar?: Tutarsız sinyal; çözüm: Aynı başlık ve açıklama
- **Mobilde menüde bağlantıların olmaması:** neden zarar?: Sayfalar bulunamaz; çözüm: Aynı iç bağlantıları sağlayın
- **Mobil sürümün ayrı adreste (m. alt alan adı) tutulması:** neden zarar?: Bakım ve eşleme zorluğu; çözüm: Tek adreste duyarlı tasarım

Açılır bölümlerin Google tarafından nasıl işlendiği için güncel dokümana bakın; en güvenli yol, kritik bilgiyi (adres, telefon, ana hizmet) açılır bölüme gömmeden görünür tutmaktır.

## Hız ve kullanıcı deneyimi

Mobilde hız, tasarımın parçasıdır. Google, Core Web Vitals’ı sayfa deneyiminin ölçülebilir parçası olarak tarif eder: LCP ilk 2,5 saniye, INP 200 milisaniyenin altı, CLS 0,1’in altı iyi kabul edilir ([Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)). Google ayrıca tek bir “sayfa deneyimi sinyali” olmadığını, sıralama sistemlerinin genel olarak iyi sayfa deneyimi sunan içeriği ödüllendirmeyi amaçladığını söyler ([sayfa deneyimi](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)). Yani hız, kesin bir sıralama kozu değil; ama müşterinin sayfada kalma kararını etkileyen temel bir unsurdur.

Mobilde hızı artıran başlıca işler:

- **Görselleri boyutlandırıp sıkıştırın.** Telefon ekranına 4000 piksellik görsel yüklemeyin.
- **İlk ekrandaki ana görseli geç yüklemeyin.** Sayfanın en büyük öğesi hızlı gelmeli; ayrıntı için LCP yazımız
- **Gereksiz betikleri ve eklentileri kaldırın.**
- **Düzen kaymasını önleyin.** Görsellerin ve reklamların yer ayırması gerekir.
- **Yazı tipini sınırlayın.** Çok sayıda yazı tipi dosyası yükü artırır.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Dokunma alanları ve okunabilirlik

Telefonda tasarım hatalarının çoğu “yanlış yere basma” ve “okunamama”dır:

- **Düğme boyutu:** Parmakla kolay basılacak yükseklik ve genişlik
- **Düğmeler arası boşluk:** Yanlış basmayı önleyecek mesafe
- **Yazı boyutu:** Yakınlaştırmadan okunabilir
- **Satır uzunluğu:** Çok uzun satırlardan kaçının
- **Kontrast:** Açık zeminde koyu, koyu zeminde açık yazı; güneş altında da okunabilir
- **Form alanları:** Büyük, tek sütun, uygun klavye türü
- **Açılır pencereler:** Sayfayı kapatan ya da kapatması zor pencerelerden kaçının

Bu ölçütlerin sayısal eşikleri için resmî bir “tek doğru” yoktur; en güvenli test, siteyi gerçek bir telefonda ve farklı boyutlarda kullanmaktır.

## Adım adım mobil öncelikli planlama

1. **Telefondaki müşteriyi tanımlayın.** Ne arıyor, ne kadar zamanı var, ne yapmak istiyor?
2. **İlk ekranı tasarlayın.** İşin adı, bölge, tek ana eylem (ara / WhatsApp).
3. **İçeriği sıralayın.** Telefonda alt alta akacak bölümleri öncelik sırasına dizin.
4. **Düğmeleri ve formu telefon için kurun.** Bkz. [iletişim formu ve WhatsApp butonu](/blog/iletisim-formu-ve-whatsapp-butonu-nasil-kurulur/).
5. **Görselleri hazırlayın.** Mobil boyuta uygun, sıkıştırılmış, alt metinli.
6. **Büyük ekrana genişletin.** Masaüstünde ek alan varsa yalnızca düzeni zenginleştirin; içeriği azaltmayın.
7. **Gerçek cihazlarda test edin.** En az bir Android ve bir iPhone, farklı boyutlarda.
8. **Hız ve kullanıcı deneyimini ölçün.** Search Console’daki Core Web Vitals raporuna ve bir hız ölçüm aracına bakın.
9. **Yayın sonrası izleyin.** Mobil ziyaretçi oranı ve dönüşüm.

## Mobil ve yerel SEO ilişkisi

Yerel aramaların büyük bir kısmı telefondan yapılır; müşteri harita sonuçlarından işletmeyi seçer ve siteye geçer. Bu geçişte:

- Google İşletme Profili’ndeki site bağlantısı mobilde hızlı açılmalı.
- Adres, telefon ve çalışma saatleri ilk ekranlarda görünmeli.
- “Yol tarifi” ve “Ara” eylemleri sitede de kolay bulunmalı.
- Hizmet bölgesi ve ilçe bilgisi mobilde de okunur olmalı.

Yerel görünürlük için [Google haritalarda üst sıralara çıkmak](/blog/google-haritalarda-ust-siralara-cikmak/) yazısına bakabilirsiniz.

## Test araçları ve yöntemler

- **Gerçek telefonda deneme:** En güvenilir kullanıcı deneyimi testi
- **Tarayıcı geliştirici araçlarında cihaz modu:** Farklı ekran boyutlarını hızlıca görme
- **Search Console URL Denetleme:** Google’ın sayfayı nasıl gördüğü (taranan sürüm)
- **Core Web Vitals raporu:** Gerçek kullanıcı verisine dayalı hız ölçümü
- **Hız ölçüm aracı:** LCP, INP, CLS ve iyileştirme önerileri

Eski “mobil uyumluluk testi” araçları ve raporları zamanla değişebilir; bu yüzden güncel araçları Google’ın dokümanlarından kontrol edin.

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık yapılan hatalar

- **Önce masaüstü tasarlayıp mobili sıkıştırmak:** Önce telefondan başlayın
- **Mobilde içeriği kısaltmak:** Aynı içerik, daha iyi düzen
- **Çok küçük düğme ve yazı:** Dokunma dostu ölçüler
- **Her şeyi açılır menüye gömmek:** Kritik bilgi görünür olsun
- **Yavaş, ağır görseller:** Sıkıştırma ve doğru boyut
- **Sayfayı kaplayan açılır pencereler:** Sade, kapatması kolay uyarılar
- **Yalnızca masaüstünde test etmek:** Gerçek telefonda deneyin
- **Mobil sürümde farklı başlık ve açıklama:** Tutarlı meta veriler

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir termal otelin sitesi masaüstünde şık görünüyor; ancak telefonda menü sıkışıyor, rezervasyon düğmesi sayfanın altında kalıyor ve ana görsel çok büyük olduğu için sayfa geç açılıyor. Düzenleme: ilk ekrana otelin adı, bölge ve “Oda sor” düğmesi konuyor; ana görsel mobil boyuta indirilip sıkıştırılıyor; telefon numarası tıklanabilir hâle getiriliyor; masaüstündeki oda bilgileri mobilde de eksiksiz gösteriliyor; menü beş öğeye indiriliyor. Sonuçlar Search Console’da ve gerçek ziyaretçi davranışında izleniyor. Bu örnek bir sonuç vaadi değildir; tasarım düzenini gösterir.

## Yayın öncesi kontrol listesi

Şunları tek tek kontrol edin:

- Mobil sürümde masaüstüyle aynı içerik var mı?
- İlk ekranda iş, bölge ve ana eylem görünüyor mu?
- Düğmeler parmakla kolay basılıyor mu?
- Yazı yakınlaştırmadan okunuyor mu?
- Telefon numarası tıklanabilir mi?
- Sayfa mobilde hızlı açılıyor mu?
- Görsellerde alt metin var mı?
- Açılır pencere sayfayı kapatıyor mu?
- En az iki gerçek telefonda test edildi mi?
- Başlık, açıklama ve yapılandırılmış veri mobilde de aynı mı?

## Denizli SEO bu konuda nasıl yardımcı olur?

Mobil deneyim, sitenin hem müşteri hem arama tarafındaki temelidir. [SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- siteyi telefondaki müşteriyi esas alarak planlar ve tasarlarız,
- mobil ve masaüstü sürümler arasında içerik tutarlılığını denetleriz,
- görselleri, betikleri ve düzeni hız ve kullanıcı deneyimi açısından iyileştiririz,
- gerçek cihazlarda ve Search Console ile test eder, bulguları yazılı raporlarız,
- belirli bir sıralama ya da hız puanı garantisi vermeyiz.

Mevcut sitenizin telefonda nasıl göründüğüne birlikte bakmak isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### Mobil öncelikli tasarım ile duyarlı tasarım aynı şey mi?

Değil. Duyarlı tasarım, sayfanın ekran boyutuna uyum sağlamasıdır; mobil öncelikli tasarım ise tasarım sürecine telefondan başlamaktır. Çoğu modern site ikisini birlikte kullanır.

### Mobil uyumlu olmayan site Google’da çıkar mı?

Google mobil sürümü esas aldığı için telefonda eksik ya da kullanılamaz bir site risk taşır. Kesin sonucu önceden söyleyemeyiz; en güvenlisi mobil sürümü masaüstü kadar eksiksiz yapmaktır.

### Ayrı bir mobil site (m.) yaptırmalı mıyım?

Genellikle gerekmez; tek adreste duyarlı tasarım daha yönetilebilir. Ayrı mobil sitelerde içerik ve meta veri eşitliği ek bakım gerektirir.

### Mobilde açılır bölüm (akordeon) içeriği gizler mi?

Bu konuda kesin bir iddia yazmıyoruz; kritik bilgiyi (adres, telefon, ana hizmet) görünür tutun.

### Mobil hız puanım düşük, ne yapmalıyım?

Önce en büyük sorunları bulun: ağır görseller, gereksiz betikler, yavaş sunucu. Ayrıntı için LCP yazımıza bakın.

## Kaynaklar

- [Google Search Central: mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
- [Google Search Central: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
- [Google Search Central: Google sayfa deneyimini anlama](https://developers.google.com/search/docs/appearance/page-experience?hl=tr)
