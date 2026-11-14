---
title: "Google Analytics ve Search Console Nasıl Bağlanır?"
description: "GA4 ile Search Console nasıl bağlanır? Gerekli roller, adım adım bağlantı, iki rapor, veri sınırları ve yaygın hatalar; arama verisini analitikle birleştirin."
date: 2026-11-14
service: teknik-seo
imageAlt: "Analytics ve Search Console arasında bağlantı ve ortak raporlar"
---

GA4 ile Search Console’u bağlamak için Analytics’te Yönetici bölümünden Ürün bağlantıları > Search Console Bağlantıları’na gidip doğrulanmış mülkünüzü seçersiniz. Bunun için Analytics mülkünde Düzenleyici rolünüz ve Search Console’da doğrulanmış sahipliğiniz olmalıdır. Bağlantı Google Organik Arama Sorguları ve Google Organik Arama Trafiği raporlarını getirir.

Böylece hangi aramaların sayfanıza geldiğini (Search Console) ve gelenlerin sitede ne yaptığını (Analytics) tek yerde birlikte okuyabilirsiniz. Teknik kurulum için [teknik SEO hizmetimize](/teknik-seo/) bakın.

## Bağlantı ne işe yarar?

Google’ın yardım sayfasına göre entegrasyon, Search Console verilerini Analytics’e getirir ve iki rapor sağlar: **Google Organik Arama Sorguları** ve **Google Organik Arama Trafiği** (açılış sayfası; ülke ve cihaz boyutlarıyla) ([Search Console’u Google Analytics’e bağlama](https://support.google.com/analytics/answer/10737381?hl=tr)).

Pratik faydalar:

- Açılış sayfası bazında hem arama gösterimi/tıklaması hem oturum ve dönüşüm görmek.
- Hangi sayfanın çok gösterim aldığı ama sitede işe yaramadığını fark etmek.
- Sorgu ile hedef sayfa arasındaki uyumu denetlemek.

## Ön koşullar

Bağlantı için:

- Analytics mülkünde **Düzenleyici** rolü,
- Search Console’da ilgili mülkte **doğrulanmış sahiplik**.

Kurulum sırası: önce Search Console’u kurup doğrulayın ([Search Console nasıl kurulur?](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)), sonra GA4’ü bağlayın.

## Adım adım bağlantı

Google’ın tarif ettiği yol:

1. Analytics’te **Yönetici**’yi açın.
2. **Ürün bağlantıları** altında **Search Console Bağlantıları**’nı seçin.
3. **Bağlantı** düğmesine basın.
4. Hesaplarınızı seçin ve doğrulanmış Search Console mülkünüzü seçin.
5. Web veri akışını seçin ve bağlantıyı onaylayın.

Bağlantıyı Search Console tarafından da oluşturabilirsiniz. Google’a göre bağlantı oluşturma sırasında sahiplik de doğrulanabilir.

## Önemli sınırlar

Google’ın belgesine göre:

- Bir **web veri akışı yalnızca bir** Search Console mülküne bağlanır; bir mülk de yalnızca bir web akışına bağlanır.
- Search Console verileri **16 ay** saklanır ve toplandıktan **48 saat sonra** kullanılabilir.
- Search Console metrikleri yalnızca Search Console boyutlarıyla ve açılış sayfası, cihaz, ülke gibi uyumlu Analytics boyutlarıyla birlikte kullanılabilir.
- Bağlantı düzenlenemez; değiştirmek için silip yeniden oluşturulur.
- Raporlar varsayılan olarak yayından kaldırılmış bir koleksiyondadır; Kitaplık’tan yayınlamanız gerekir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Raporları yayınlama

Bağlantı yapıldığında iki rapor otomatik görünmez; Google’a göre:

1. Analytics’te rapor **Kitaplık**’ını açın.
2. Search Console koleksiyonunu bulun.
3. Koleksiyonu **yayınlayın**; böylece raporlar menüde görünür.


## Raporlar nasıl okunur?

**Google Organik Arama Trafiği:** Açılış sayfası bazında tıklama, gösterim, ortalama konum ve CTR (Search Console tarafı) ile oturum, etkileşim ve dönüşüm (Analytics tarafı) birlikte görünür.

**Google Organik Arama Sorguları:** Sorgu düzeyinde Search Console verisi.

Okuma örnekleri:

- Gösterimi yüksek, tıklaması düşük sayfa: başlık ve açıklama zayıf olabilir ([tıklanabilir başlıklar](/blog/tiklanabilir-ama-durust-basliklar-nasil-yazilir/)).
- Tıklaması yüksek, dönüşümü düşük sayfa: içerik ya da çağrı arama niyetiyle uyuşmuyor olabilir ([arama niyeti](/blog/arama-niyeti-nedir-dort-tur-ve-icerige-etkisi/)).

## Bağlantı olmadan da veri kullanılabilir

Bağlantı yapmasanız da iki araç ayrı ayrı çalışır; fark, verinin birlikte okunmasıdır. Bağlantı yoksa:

- Search Console’da sorgu ve sayfa bazında gösterim, tıklama, ortalama konum ve CTR’yi okursunuz.
- Analytics’te oturum, etkileşim ve dönüşümü okursunuz.
- İkisini sayfa adresi üzerinden elle eşleştirmeniz gerekir; bu hem zaman alır hem hataya açıktır.

Bu yüzden küçük bir işletme bile bağlantıyı bir kez kurup aylık raporda kullanmalıdır.

## Aylık raporda nasıl kullanılır?

Bağlantı kurulduktan sonra aylık raporda şu üç soruya cevap arayın:

1. **Hangi sayfalar aramadan oturum getiriyor?** Organik arama trafiği raporunda açılış sayfalarını sıralayın.
2. **Bu sayfalar işe yarıyor mu?** Etkileşim ve dönüşümü karşılaştırın; yüksek trafik ama sıfır dönüşüm olan sayfaları işaretleyin.
3. **Hangi sorgular beklenmedik sayfaya gidiyor?** Sorgu raporunda sorgu ile açılış sayfasını karşılaştırın; yanlış sayfaya düşen sorgular için iç bağlantı ve başlık düzenlemesi yapın.

Rapor biçimi için [aylık SEO raporu şablonuna](/blog/seo-raporu-nasil-okunur-aylik-rapor-sablonu/) bakın. Veri hazırlığı sırasında ölçümün nasıl çalıştığını da unutmayın: çerez onayı vermeyen ziyaretçiler Analytics’te görünmeyebilir, bu da Search Console tıklaması ile oturum sayısı arasında fark yaratır.

## Birden fazla alan adı ya da dil sürümü varsa

Birden çok alan adınız (örneğin eski ve yeni site) ya da dil sürümünüz varsa:

- Her web veri akışı için ayrı bağlantı gerekir; bir akış yalnızca bir Search Console mülküne bağlanır.
- Hangi akışın hangi mülke bağlı olduğunu bir tabloda tutun.
- Alan adı değiştiriyorsanız yeni mülkü doğrulayıp bağlantıyı yeniden kurun.
- Eski siteden yönlendirme yapıyorsanız eski alanın verisini arşivleyin; Search Console verisi 16 ay saklanır, bu yüzden önemli geçmişi dışa aktarın.

## Veri neden farklı çıkar?

İki araç aynı şeyi ölçmez: Search Console arama sonuçlarındaki gösterim ve tıklamayı sayar, Analytics sitede başlayan oturumu. Bu yüzden sayılar eşleşmez. Ayrıntı: [Search Console tıklamaları ile GA4 oturumları neden farklı?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/) Çerez onayı, reklam engelleyiciler ve filtreler de farkı büyütebilir.

## Bağlantıyı doğrulamak

Bağlantı sonrası:

- Search Console Bağlantıları tablosunda bağlantının listelendiğini kontrol edin.
- 48 saat bekleyin; raporlarda veri akışını izleyin.
- Doğru web akışı ve doğru mülkü bağladığınızdan emin olun (www’lu ve www’suz ayrı mülk olabilir).
- Bağlantıyı kuran kullanıcıya bağımlılığı azaltın; yetkiyi birden fazla yöneticiye dağıtın.

## GA4 kurulumunda dikkat

Bağlantı çalışması için GA4’ün sitede doğru kurulu olması gerekir. Temel kontroller:

- Etiket tüm sayfalarda yüklenmeli.
- Önemli eylemler (form, arama, tıklama) olay olarak tanımlanmalı ([GA4 temel raporları](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/)).
- Dönüşüm olayları işaretlenmeli.
- Kendi trafiğiniz ve geliştirici trafiği filtrelenmeli.

## Bağlantıyı silmek ya da yeniden kurmak

Bağlantıyı düzenleyemezsiniz; yanlış mülkü bağladıysanız silip yeniden oluşturursunuz. Google’a göre bağlantıyı silmek için Analytics mülkünde Düzenleyici rolü yeterlidir. Silmeden önce:

- Mevcut raporlardan dışa aktarma alın; geçmiş veriyi yedeklemek iyidir.
- Hangi mülkün bağlı olduğunu not edin.
- Yeniden oluşturduktan sonra raporların yayınlandığını ve verinin aktığını kontrol edin.

Yanlış bağlantıyla geçen haftalar, yanlış kararlara yol açabileceği için bu kontrol önemlidir.

## Gizlilik ve yetki notu

Bağlantı, iki hesabın verisini birleştirdiği için kimin hangi rapora erişeceğini önceden belirleyin. Analytics’te yalnızca gerekli kişilere Düzenleyici rolü verin; ajansa raporları okuma yetkisi yeterli olabilir. Ayrılan çalışanların erişimini kaldırın ve bağlantıyı kuran hesabın kişisel bir hesap olmamasına dikkat edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir diş kliniğinin sitesinde GA4 ve Search Console ayrı ayrı kullanılıyor; raporları birleştirmek zor.

- **Sorun:** Hangi sayfaların aramadan geldiği ama randevu formunu doldurmadığı görülmüyor.
- **Çözüm:** İşletme hesabıyla Düzenleyici rolü ve doğrulanmış sahiplikle Search Console bağlanıyor, raporlar Kitaplık’tan yayınlanıyor.
- **Analiz:** “Organik arama trafiği” raporunda gösterimi yüksek ama dönüşümü düşük sayfalar saptanıyor.
- **Sonrası:** Bu sayfaların başlık ve çağrısı güncelleniyor; sonuçlar iki ay sonra yeniden ölçülüyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Search Console’u doğrulamadan bağlamaya çalışmak.**
2. **Yanlış mülkü (www/www’suz) bağlamak.**
3. **Raporları Kitaplık’tan yayınlamamak.**
4. **İki aracın sayısının eşleşmesini beklemek.**
5. **Bağlantıyı tek bir kişinin hesabına bağlı bırakmak.**
6. **Dönüşümleri tanımlamadan rapora bakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Analytics ve Search Console kurulumunu sizin hesaplarınızda yapar,
- bağlantıyı ve raporları doğrular,
- dönüşüm olaylarını tanımlar,
- aylık raporda arama verisini iş sonucuna bağlarız.

Ölçüm kurulumu için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Bağlantı için hangi rol gerekir?

Analytics mülkünde Düzenleyici rolü ve Search Console’da doğrulanmış sahiplik.

### Bir GA4 mülkü birden çok Search Console mülküne bağlanabilir mi?

Google’a göre bir web veri akışı yalnızca bir Search Console mülküne bağlanır.

### Veriler ne kadar eski olabilir?

Search Console verileri 16 ay saklanır ve toplandıktan 48 saat sonra kullanılabilir.

### Raporları göremiyorum, neden?

Raporlar varsayılan olarak yayından kaldırılmış koleksiyondadır; Kitaplık’tan yayınlayın.

### Bağlantıyı düzenleyebilir miyim?

Hayır; silip yeniden oluşturmanız gerekir.

## Kaynaklar

- [Analytics Yardım: Search Console’u Google Analytics’e bağlama](https://support.google.com/analytics/answer/10737381?hl=tr)
- [Search Console Yardımı: Sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)
