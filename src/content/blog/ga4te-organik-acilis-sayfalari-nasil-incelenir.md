---
title: "GA4’te Organik Açılış Sayfaları Nasıl İncelenir?"
description: "GA4’te organik trafiğin geldiği açılış sayfaları nasıl incelenir? Açılış sayfası raporu, organik filtre, etkileşim ve dönüşüm yorumu, Search Console ile birleştirme."
date: 2026-11-19
service: teknik-seo
imageAlt: "GA4 açılış sayfası raporunda organik arama kanalına göre filtrelenmiş sayfa listesi"
---

GA4’te organik trafiğin geldiği açılış sayfalarını incelemek için açılış sayfası (landing page) raporunu açıp oturumları “organik arama” kanalına göre filtrelemeniz yeterlidir. Böylece ziyaretçilerin Google’dan sitenizde ilk hangi sayfaya indiğini, o sayfaların ne kadar etkileşim ve dönüşüm ürettiğini görürsünüz. Raporun asıl değeri, yalnızca “hangi sayfa çok trafik alıyor” sorusunu değil, “hangi sayfa organik ziyaretçiyi eyleme taşıyor” sorusunu cevaplamasıdır. İyi bir açılış sayfası analizi, Search Console’daki görünürlük verisiyle birleştirildiğinde SEO önceliklerinizi netleştirir.

Bu yazıda açılış sayfası kavramını, raporun nasıl açılıp filtreleneceğini, hangi ölçülere bakılacağını, sonuçların nasıl yorumlanacağını ve Search Console ile nasıl birleştirileceğini anlatıyoruz. GA4 temel raporlar için [Google Analytics 4: işletmeler için temel raporlar](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/), Search Console bağlantısı için [Google Analytics ve Search Console nasıl bağlanır?](/blog/google-analytics-ve-search-console-nasil-baglanir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Açılış sayfası nedir?

Açılış sayfası, ziyaretçinin oturum sırasında sitenizde gördüğü ilk sayfadır. Organik açılış sayfası, Google gibi arama motorlarından gelen oturumların ilk indiği sayfadır. Bu, “en çok görüntülenen sayfa”dan farklıdır: bir sayfa çok görüntülenebilir ama çoğunlukla site içinden geçiş yoluyla; açılış sayfası ise ziyaretin nereden başladığını gösterir. SEO açısından açılış sayfaları, Google’ın sitenizin hangi sayfalarını arayanlara gösterdiğini ve o sayfaların ziyaretçiyi karşılamaya hazır olup olmadığını anlatır.

## Raporu nasıl açarsınız?

GA4’te açılış sayfası verisini şu yollardan görebilirsiniz (arayüz zamanla değişebilir):

1. **Standart raporlardan.** Raporlar bölümünde etkileşim başlığı altındaki “Açılış sayfası” raporu, oturumların hangi sayfada başladığını listeler.
2. **Trafik edinme raporundan.** “Oturum varsayılan kanal grubu” boyutuyla birlikte açılış sayfası eklenerek organik aramaya göre kırılım alınabilir.
3. **Keşiflerden.** Boş bir keşifte “Açılış sayfası” boyutunu satıra, “Oturum varsayılan kanal grubu”nu filtreye koyup oturum, etkileşimli oturum ve dönüşüm ölçülerini ekleyebilirsiniz.
4. **Search Console entegrasyonundan.** Search Console GA4’e bağlıysa Analytics’te Google organik arama sorguları ve açılış sayfalarına dair raporlar görünebilir; entegrasyon iki raporu birlikte sunar ([Search Console’u Google Analytics’e bağlama](https://support.google.com/analytics/answer/10737381?hl=tr)).

## Organik trafik nasıl filtrelenir?

Raporda yalnızca arama motorlarından gelen oturumları görmek için kanal grubuna göre filtreleyin. Analytics’in varsayılan kanal grupları arasında “Organik Arama” bulunur; kanal tanımları Analytics tarafından belirlenir, düzenlenemez ve zamanla değişebilir ([varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)). Filtre olarak “Oturum varsayılan kanal grubu = Organik Arama” (arayüzdeki Türkçe karşılığı) seçin.

İki dikkat noktası: birincisi, organik oturumların bir kısmı Direct’e düşebilir; bu yüzden sayıları Search Console’la karşılaştırın ([organik ziyaretler GA4’te neden direct görünebilir?](/blog/organik-ziyaretler-ga4te-neden-direct-gorunebilir/)). İkincisi, Google dışındaki arama motorları da organik kanalda toplanır; yalnızca Google’ı görmek isterseniz kaynak boyutunu da filtreleyin.

> **Hizmet almak için iletişime geçin.** GA4 ve Search Console verilerinizi açılış sayfası düzeyinde birleştirip SEO önceliklerinizi birlikte belirleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi ölçülere bakılmalı?

| Ölçü | Ne anlatır? | Dikkat |
| --- | --- | --- |
| Oturumlar | Sayfanın kaç organik ziyaret başlattığı | Trafik hacmi |
| Etkileşimli oturum oranı | Ziyaretçinin sayfayla ilgilenip ilgilenmediği | Düşükse sayfa beklentiyi karşılamıyor olabilir |
| Ortalama etkileşim süresi | Sayfada geçirilen süre | Sayfa türüne göre değerlendirin |
| Dönüşümler (önemli etkinlikler) | Form, arama, WhatsApp tıklaması gibi | Asıl iş sonucu |
| Dönüşüm oranı | Oturum başına dönüşüm | Sayfalar arasında karşılaştırma |
| Yeni kullanıcılar | Yeni ziyaretçi payı | Bilinirlik için |

Küçük bir işletme için en önemli sütun dönüşümdür: hangi organik açılış sayfası telefon, form ya da WhatsApp getiriyor? Dönüşümlerin doğru kurulması için [SEO’dan gelen form ve telefon talepleri nasıl ölçülür?](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/) yazısına bakın.

## Sonuçlar nasıl yorumlanır?

Tabloyu şu gruplara ayırarak okuyun:

- **Çok trafik, yüksek dönüşüm:** En değerli sayfalar; koruyun, güncel tutun, ilgili sayfalara bağlayın.
- **Çok trafik, düşük dönüşüm:** Fırsat; çağrıyı, içeriği ve güven öğelerini iyileştirin. Ziyaretçi geliyor ama eyleme geçmiyor.
- **Az trafik, yüksek dönüşüm:** Görünürlük fırsatı; sayfayı daha çok kişiye ulaştıracak içerik ve iç bağlantı çalışması yapın.
- **Az trafik, düşük dönüşüm:** Önceliği düşük; ya iyileştirin ya birleştirin ya kaldırın ([içerik denetimi: hangi sayfa güncellenmeli, hangisi silinmeli?](/blog/icerik-denetimi-hangi-sayfa-guncellenmeli-hangisi-silinmeli/)).
- **Beklenmedik sayfalar:** Organik ziyaretçi, aramadığınız bir sayfaya iniyorsa (eski bir yazı, bir etiket sayfası) neden orada olduğunu inceleyin.

Ayrıca açılış sayfasının arama niyetiyle uyumuna bakın: kullanıcı bir hizmet arıyorsa ve bir blog yazısına iniyorsa, sayfada hizmete yönelten net bir yol bulunmalı ([rehber yazıyı iletişime nasıl bağlarsınız?](/blog/rehber-yazidan-hizmete-yaziyi-iletisime-nasil-baglarsiniz/)).

## Search Console ile nasıl birleştirilir?

GA4 “ziyaretçi sayfaya indikten sonra ne yaptı” sorusunu, Search Console ise “sayfa arama sonuçlarında nasıl göründü” sorusunu cevaplar. İkisini sayfa düzeyinde birleştirmek güçlü bir analiz sağlar:

1. **Search Console’da** sayfa boyutuna göre tıklama, gösterim, TO ve ortalama konumu dışa aktarın.
2. **GA4’te** aynı sayfalar için organik oturum, etkileşim ve dönüşümü dışa aktarın.
3. **Tabloda birleştirin.** Her sayfa için tek satırda görünürlük, tıklama ve dönüşüm.
4. **Fırsatları bulun.** Gösterimi yüksek ama TO düşük (başlık iyileştirme); tıklaması yüksek ama dönüşümü düşük (sayfa iyileştirme); dönüşümü yüksek ama gösterimi düşük (görünürlük çalışması).

Search Console ve GA4 sayıları birebir eşleşmez; saat dilimi ve ölçüm yöntemi farkı vardır ([Search Console tıklamaları GA4 oturumlarıyla neden eşleşmez?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/)). Mutlak sayıları eşitlemeye çalışmak yerine sayfalar arası oranlara ve eğilimlere bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisi GA4’te organik açılış sayfalarına bakıyor. En çok organik trafik alan sayfa “Klima nasıl temizlenir?” blog yazısı; dönüşümü sıfıra yakın. “Klima servis fiyatları” sayfası az trafik alıyor ama dönüşüm oranı yüksek.

Servis kararlar alıyor: blog yazısına net bir “Servis randevusu için arayın” çağrısı ve ilgili hizmet sayfasına bağlantı ekleniyor; fiyat sayfası Search Console’da düşük gösterim alıyor, başlığı ve içeriği güçlendirilip iç bağlantılarla destekleniyor. Üç ay sonra iki sayfanın organik oturum ve dönüşümü yeniden karşılaştırılıyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Yalnızca trafiğe bakmak.** Dönüşüm ve etkileşim de önemli.
2. **Organik filtreyi unutmak.** Tüm kanallar karışırsa SEO sayfaları anlaşılmaz.
3. **Direct’e düşen organik ziyareti hesaba katmamak.** Sayılar eksik olabilir.
4. **Açılış sayfası ile en çok görüntülenen sayfayı karıştırmak.** Farklı sorulara cevap verirler.
5. **Search Console verisiyle birleştirmemek.** Görünürlük ve eylem birlikte okunmalı.
6. **Sayıları birebir eşitlemeye çalışmak.** Oranlara ve eğilimlere bakın.

## Aylık açılış sayfası inceleme akışı

Açılış sayfası analizini ayda bir yirmi dakikalık bir akışa bağlayın. Önce organik kanalı filtreleyin ve oturuma göre ilk yirmi açılış sayfasını dışa aktarın. İkinci adımda her sayfanın etkileşimli oturum oranı ve dönüşümüne bakıp yukarıdaki dört gruba (çok trafik–yüksek dönüşüm gibi) ayırın. Üçüncü adımda Search Console’dan aynı sayfaların gösterim, tıklama ve konumunu ekleyin. Dördüncü adımda her grup için bir iş yazın: koru, iyileştir, görünürlüğü artır ya da gözden geçir. Beşinci adımda geçen ayın işlerinin sonucuna bakın. Bu akışın çıktısı iki satırlık bir önceliklendirmedir; ilk üç sayfa için somut işler belirlenir ve sorumlusu yazılır. Kısa ve düzenli analiz, uzun ve nadir analizden daha çok iş çıkarır.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- GA4 ve Search Console verilerinizi organik açılış sayfası düzeyinde birleştirir, öncelik tablosu hazırlarız,
- dönüşüm olaylarının doğru kurulduğunu kontrol eder, eksikleri tamamlarız,
- fırsat sayfalarını (yüksek trafik–düşük dönüşüm, yüksek dönüşüm–düşük görünürlük) listeleyip iyileştirme planı yazarız,
- sonuç vaat etmeden, sayfa bazlı organik performansı düzenli izleriz.

Verileriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Organik sayfa performansınızı birlikte okuyalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Açılış sayfası ile sayfa görüntüleme arasındaki fark nedir?

Açılış sayfası, oturumun ilk sayfasıdır; sayfa görüntüleme ise sayfanın toplam kaç kez açıldığıdır. Açılış sayfası, ziyaretin nereden başladığını gösterir.

### Organik açılış sayfalarını nasıl filtrelerim?

Raporda oturum varsayılan kanal grubunu “Organik Arama” olarak filtreleyin.

### Dönüşüm sütunum boş, neden?

Dönüşüm olayları (önemli etkinlikler) tanımlı değil ya da çalışmıyor olabilir. Form, telefon ve WhatsApp tıklamalarının ölçüldüğünden emin olun.

### Hangi sayfaya öncelik vermeliyim?

Dönüşüm potansiyeli yüksek ama görünürlüğü ya da etkileşimi zayıf sayfalara; ayrıca çok trafik alıp dönüşmeyen sayfalara.

### Search Console olmadan da yapılabilir mi?

Açılış sayfası analizi yapılabilir; ama görünürlük ve sorgu bilgisi için Search Console verisi gerekir.

## Kaynaklar

- [Analytics Yardım: Varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)
- [Analytics Yardım: Search Console’u Google Analytics’e bağlama](https://support.google.com/analytics/answer/10737381?hl=tr)
- [Analytics Yardım: Google Analytics raporlarına genel bakış (GA4)](https://support.google.com/analytics/answer/9212670?hl=tr)
