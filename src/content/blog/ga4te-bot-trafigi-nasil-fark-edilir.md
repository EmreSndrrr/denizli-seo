---
title: "GA4’te Bot Trafiği Nasıl Fark Edilir?"
description: "GA4’te bot trafiği nasıl fark edilir? Otomatik bot filtresinin sınırı, şüpheli ziyaret belirtileri, inceleme adımları ve rapordan ayırma yöntemleri."
date: 2026-11-15
service: teknik-seo
imageAlt: "Analitik raporunda ani trafik sıçraması ve şüpheli ziyaret belirtileri"
---

GA4, bilinen botlardan ve örümceklerden gelen trafiği otomatik olarak hariç tutar; bu özellik kapatılamaz ve ne kadar trafiğin ayıklandığı da görülemez. Ama “bilinen” listede olmayan botlar raporlarınıza girer. Bunları şu belirtilerden tanırsınız: tek günde ani sıçrama, sıfıra yakın etkileşim süresi, tek bir şehir ya da cihaz modelinde yoğunlaşma, anlamsız sayfa adresleri ve hiçbir talebe dönüşmeyen yüksek oturum sayısı. Fark ettiğinizde amaç botu “silmek” değil, kararlarınızı etkilememesi için raporda ayırmaktır.

Bot trafiği gerçek ziyaretçi sayısını şişirir ve dönüşüm oranını düşük gösterir. Ölçüm temizliği için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## GA4 botları kendiliğinden ayıklar mı?

Kısmen. Google’ın yardım sayfasına göre Google Analytics mülklerinde botlardan ve örümceklerden gelen trafik otomatik olarak hariç tutulur; böylece verilerin bilinen botlara ait etkinlikleri mümkün olduğunca içermemesi sağlanır. Şu anda bu özelliği devre dışı bırakamaz ya da ne miktarda bilinen bot trafiğinin hariç tutulduğunu göremezsiniz ([bilinen bot trafiğini hariç tutma](https://support.google.com/analytics/answer/9888366?hl=tr)).

Bilinen bot ve örümcek trafiği, Google’ın araştırmaları ile Interactive Advertising Bureau (IAB) tarafından yönetilen Uluslararası Örümcek ve Bot Listesi birlikte kullanılarak saptanır.

Buradaki anahtar sözcük “bilinen”dir. Kendini tanıtan arama motoru tarayıcıları ve yaygın izleme araçları bu listeyle ayıklanır. Gerçek bir tarayıcıyı taklit eden, sayfadaki betikleri çalıştıran otomasyon yazılımları, içerik kazıyıcılar, fiyat izleme araçları, güvenlik tarayıcıları ve sahte trafik hizmetleri listede olmayabilir.

## Googlebot GA4’te görünür mü?

Hayır; arama motoru tarayıcıları bilinen botlardır ve ayıklanır. Yani “Google sitemi taradı, o yüzden trafik arttı” açıklaması GA4 için geçerli değildir. Googlebot’un hareketini görmek istiyorsanız kaynak analitik değil, Search Console’daki tarama verisi ve sunucu günlükleridir ([log analizi](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/)).

## Şüpheli trafiğin belirtileri

Tek bir belirti yeterli değildir; birkaçı birlikte görülüyorsa bot olasılığı yüksektir.

1. **Ani sıçrama.** Kampanya, haber ya da paylaşım olmadan bir günde trafiğin katlanması ve ertesi gün normale dönmesi.
2. **Etkileşimsiz oturumlar.** Ortalama etkileşim süresi birkaç saniyenin altında; etkileşimli oturum oranı çok düşük.
3. **Coğrafi yoğunlaşma.** Denizli’ye hizmet veren bir işletmeye, hiç iş yapmadığı bir ülkedeki tek bir şehirden yüzlerce oturum.
4. **Tek tip cihaz.** Aynı ekran çözünürlüğü, aynı tarayıcı sürümü, aynı işletim sistemi; çoğu zaman eski bir sürüm.
5. **Dil ayarı tutarsızlığı.** Tarayıcı dili boş ya da ziyaretçi kitlenizle ilgisiz.
6. **Saat düzeni.** Gece yarısı tam saat başlarında, dakikalar içinde düzenli aralıklı istekler.
7. **Anlamsız sayfalar.** Sitede olmayan adresler, yönetici giriş sayfaları, parametre denemeleri.
8. **“Doğrudan” ya da “atanmamış” kaynak.** Botlar çoğu zaman yönlendiren bilgisi taşımaz.
9. **Sıfır dönüşüm.** Yüzlerce oturum, tek bir form ya da telefon tıklaması yok.

Dikkat: bu belirtilerin bir kısmı gerçek ziyaretçide de görülür. Yurt dışındaki tek şehir yoğunlaşması, o şehirdeki bir şirketin ağından gelen gerçek ilgi de olabilir. Karar vermeden önce birkaç boyutu birlikte inceleyin.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım inceleme

1. **Tarihi daraltın.** Sıçramanın başladığı ve bittiği günü bulun.
2. **Kanala bakın.** Trafik edinme raporunda hangi kanal artmış? Organik arama mı, doğrudan mı, yönlendirme mi?
3. **Kaynağı açın.** Yönlendirme ise hangi alan adından? Tanımadığınız, anlamsız adlı siteler şüphelidir.
4. **Ülke ve şehir ekleyin.** Artış tek bir konumda mı toplanıyor?
5. **Cihaz ve tarayıcı ekleyin.** Tek bir kombinasyon mu öne çıkıyor?
6. **Açılış sayfasına bakın.** Hangi sayfalara inmişler? Tek sayfa mı, var olmayan sayfalar mı?
7. **Etkileşimi karşılaştırın.** Şüpheli dilimin etkileşim süresi ve dönüşümü, sitenin geri kalanından ne kadar farklı?
8. **Dış kaynakla doğrulayın.** Aynı günlerde Search Console tıklaması arttı mı? Artmadıysa “organik” görünen sıçrama gerçek arama trafiği değildir.

Son adım SEO açısından önemlidir: Search Console tıklamayı Google’ın kendi tarafında sayar; sitenize betik çalıştırarak gelen bir bot oraya yansımaz ([tıklamalar oturumlarla neden eşleşmez?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/)).

## Rapordan nasıl ayrılır?

GA4’te geçmiş veriyi silemezsiniz; ama raporlarken ayırabilirsiniz.

- **Karşılaştırma ve segment.** Şüpheli dilimi tanımlayan koşulu (ör. belirli ülke + belirli tarayıcı) hariç tutan bir karşılaştırma ya da keşif segmenti oluşturun; raporu bu görünümle okuyun.
- **Rapora not düşün.** “12–14 Mart arasında X kaynaklı şüpheli trafik; analiz dışı bırakıldı.” Altı ay sonra o sıçramanın ne olduğunu hatırlamazsınız ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)).
- **Panelde filtreleyin.** Raporlama paneliniz varsa aynı koşulu orada da uygulayın ([SEO paneli](/blog/looker-studio-ile-seo-paneli-nasil-hazirlanir/)).
- **IP biliniyorsa veri filtresi.** Kaynak sizin kullandığınız bir araçsa (çalışma süresi izleme, site tarama yazılımı) ve IP adresi belliyse, GA4’ün dahili trafik tanımı ve veri filtresiyle ileriye dönük hariç tutabilirsiniz ([şirket içi ziyaretleri ayırma](/blog/sirket-ici-ziyaretler-ga4-raporlarindan-nasil-ayrilir/)).

## Kaynağında engelleme

Bot yalnızca raporu değil sunucuyu da yoruyorsa analitikte ayırmak yetmez:

1. Sunucu günlüklerinden isteklerin IP aralığını ve kullanıcı aracısını çıkarın.
2. Barındırma ya da CDN güvenlik duvarında bu aralığı sınırlayın ya da doğrulama isteyin.
3. Form spam’i varsa formlara doğrulama ve gizli alan ekleyin.
4. Kuralı yazarken arama motoru tarayıcılarını engellemediğinizden emin olun; fazla sıkı bir kural Googlebot’u da dışarıda bırakabilir ([CDN ve güvenlik duvarı](/blog/cdn-kullanimi-seo-icin-nasil-degerlendirilir/)).

## Kendi araçlarınız da bot olabilir

Şüpheli trafiğin kaynağı bazen sizsiniz:

- Çalışma süresi (uptime) izleme araçları.
- SEO tarama yazılımları ve sayfa hızı testleri.
- Ajansın ya da geliştiricinin otomatik testleri.
- Ekran görüntüsü ve arşivleme hizmetleri.

Bunların bir kısmı betik çalıştırır ve GA4’e oturum olarak düşer. Kullandığınız araçların listesini ve çalışma saatlerini bilin; raporda “her gece 03.00’teki 20 oturum”un ne olduğunu böyle açıklarsınız.

## SEO kararlarına etkisi

Bot trafiği ayıklanmazsa:

- Dönüşüm oranı olduğundan düşük görünür; iyi çalışan bir sayfayı “işe yaramıyor” diye değiştirirsiniz.
- Etkileşim süresi düşer; içerik kalitesi hakkında yanlış sonuca varırsınız.
- “Trafik arttı” raporu yanlış güven verir.
- A/B ve önce–sonra testlerinin sonucu bozulur ([SEO A/B testi](/blog/seo-ab-testi-nasil-yapilir/)).

Bu yüzden başarı ölçütü olarak ham oturum sayısını değil, Search Console tıklamasını ve gerçek talebi kullanın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir cam balkon firmasının GA4 raporunda bir hafta boyunca günlük oturum 80’den 900’e çıkıyor; talep sayısı değişmiyor.

- **İnceleme:** Artışın tamamı “doğrudan” kanalda; tek bir yabancı şehirden, aynı tarayıcı sürümüyle, ortalama etkileşim süresi bir saniyenin altında. Search Console’da tıklama artışı yok.
- **Karar:** Trafik bot olarak işaretleniyor; raporda segmentle hariç tutuluyor ve tarih not ediliyor.
- **Önlem:** Sunucu günlüklerinden IP aralığı çıkarılıp güvenlik duvarında sınırlanıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **GA4’ün tüm botları ayıkladığını varsaymak.**
2. **Ani sıçramayı sorgulamadan “başarı” diye raporlamak.**
3. **Tek belirtiyle gerçek ziyaretçiyi bot saymak.**
4. **Şüpheli dönemi not etmeden bırakmak.**
5. **Güvenlik kuralıyla arama motoru tarayıcılarını da engellemek.**
6. **Kendi izleme araçlarının ürettiği oturumları unutmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- trafik sıçramalarını kanal, konum, cihaz ve etkileşim boyutlarıyla inceleriz,
- şüpheli dilimi raporlarda ayırır ve belgeleriz,
- sunucu tarafında engelleme için geliştiricinizle çalışırız,
- raporlamayı bot trafiğinden etkilenmeyen ölçütlere dayandırırız.

Veri denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### GA4 bot trafiğini otomatik filtreler mi?

Bilinen botları ve örümcekleri evet; bu özellik kapatılamaz. Listede olmayan botlar raporlara girebilir.

### Ne kadar bot trafiğinin ayıklandığını görebilir miyim?

Hayır. Google, hariç tutulan miktarın görülemediğini belirtir.

### Bot trafiğini GA4’ten silebilir miyim?

Geçmiş veriyi silemezsiniz; segment ve karşılaştırmalarla raporda ayırabilirsiniz.

### Bot trafiği sıralamamı etkiler mi?

Analitik raporunuzdaki oturumlar bir sıralama girdisi değildir; zarar, yanlış veriye dayanarak yanlış karar vermenizdir.

### Trafik sıçramasının gerçek olduğunu nasıl anlarım?

Search Console tıklaması ve gelen talep sayısıyla karşılaştırın; ikisi de artmadıysa şüphelenin.

## Kaynaklar

- [Analytics Yardım: Bilinen bot trafiğini hariç tutma](https://support.google.com/analytics/answer/9888366?hl=tr)
- [Analytics Yardım: Dahili trafiği filtreleme](https://support.google.com/analytics/answer/10104470?hl=tr)
