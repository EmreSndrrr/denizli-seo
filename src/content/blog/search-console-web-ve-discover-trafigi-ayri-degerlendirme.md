---
title: "Search Console’da Web ve Discover Trafiği Nasıl Ayrılır?"
description: "Search Console’da web araması ve Discover (Keşfet) trafiği nasıl ayrı değerlendirilir? Rapor farkları, konum verisi, dalgalanma nedenleri ve yorumlama rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Web arama trafiği ile Keşfet trafiğinin ayrı iki grafikte karşılaştırılması"
---

Search Console’da web araması trafiği ile Discover (Keşfet) trafiği ayrı performans raporlarında izlenir ve ikisi birbirinden farklı davranır. Web araması kullanıcının bir sorguyla aradığı içeriğe gelir; Keşfet ise kullanıcı bir şey aramadan, ilgi alanlarına göre sunulan bir akıştır. Bu yüzden Keşfet trafiği tahmin edilemez ve dalgalıdır, konum verisi taşımaz ve genellikle web aramasına ek bir kanal olarak düşünülmelidir. İkisini aynı grafikte toplayıp tek bir “organik trafik” gibi yorumlamak, hem Keşfet’teki ani sıçramaları hem web araması düşüşlerini yanlış okumanıza yol açar.

Bu yazıda iki trafik türünün farkını, raporların nasıl ayrılacağını, Keşfet verisinin nasıl yorumlanacağını ve dalgalanma nedenlerini anlatıyoruz. Keşfet’te görünmek için hazırlık için [Google Discover’da görünmek için site nasıl hazırlanır?](/blog/google-discoverda-gorunmek-icin-site-nasil-hazirlanir/), genel rapor okuma için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Web araması ile Keşfet arasındaki fark

| Özellik | Web araması | Discover (Keşfet) |
| --- | --- | --- |
| Kullanıcı davranışı | Bir sorgu yazar | Sorgu yazmaz; akışa göz atar |
| Tetikleyici | Arama niyeti | Kullanıcının ilgi alanları |
| Konum verisi | Var (ortalama konum) | Yok |
| Sorgu verisi | Var | Yok |
| Trafik kararlılığı | Görece daha öngörülebilir | Dalgalı ve tahmin edilmesi zor |
| İçerik ömrü | Uzun | Çoğunlukla güncel/ilgi çeken içerik; eski faydalı içerik de gösterilebilir |
| Başlıca ölçüler | Tıklama, gösterim, TO, konum | Tıklama, gösterim, TO |

Google’ın Search Console verilerini anlatan sayfası, Search Console’un kullanıcıların Google Arama, Haberler ve Keşfet’te sitenizin bağlantılarını ya da içeriklerini ne sıklıkla gördüğünü ve bunlarla ne sıklıkla etkileşime girdiğini gösteren veriler sunduğunu söyler; bu veriler çeşitli performans raporlarında yer alır ([Search Console verileri hakkında](https://support.google.com/webmasters/answer/96568?hl=tr)). Aynı kaynaklar konumun yalnızca Google Arama sonuçları için gösterildiğini belirtir ([Gösterimler, konum ve tıklamalar nedir?](https://support.google.com/webmasters/answer/7042828?hl=tr)); yani Keşfet için “ortalama konum” diye bir kavram yoktur.

## Keşfet trafiği neden farklı yorumlanır?

Google’ın Keşfet rehberi, Keşfet’in kullanıcılara ilgi alanlarına uygun içerik sunan bir özellik olduğunu, Keşfet trafiğinin tahmin edilemez olduğunu ve aramaya ek bir trafik kaynağı olarak düşünülmesi gerektiğini anlatır; dalgalanma nedenleri olarak kullanıcıların ilgi alanlarındaki değişimi, içerik türü düzenlemelerini ve Arama güncellemelerini sayar ([Keşfet ve web siteniz](https://developers.google.com/search/docs/appearance/google-discover?hl=tr)). Rehber ayrıca Dizinde ve Keşfet içerik politikalarına uyan içeriğin otomatik olarak uygun olduğunu, görüntülenmenin garanti edilmediğini söyler.

Bu yüzden Keşfet’ten gelen bir tıklama sıçraması başarının kanıtı, bir düşüş ise başarısızlığın kanıtı değildir; bu trafik tek bir viral içeriğe bağlı olabilir. Karar verirken web aramasını temel, Keşfet’i bonus olarak ele alın.

> **Hizmet almak için iletişime geçin.** Search Console raporlarınızı kanallara göre doğru okumayı birlikte kuralım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Search Console’da trafik nasıl ayrılır?

Adım adım:

1. **Web araması için Performans raporunu açın.** Arama sonuçları performans raporunda “arama türü” filtresi web (metin tabanlı ve çok formatlı), görsel, video ve haber aramaları arasında geçiş yapar ([Performans raporu](https://support.google.com/webmasters/answer/7576553?hl=tr)). Web trafiğini görmek için “Web” arama türünü seçin.
2. **Keşfet raporunu ayrı açın.** Sitenizde Keşfet verisi varsa Performans bölümünde Keşfet için ayrı bir rapor görünür. Raporun görünmesi, sitenizin Keşfet’te yeterli gösterim almasına bağlı olabilir; menüde göremiyorsanız henüz yeterli veri olmayabilir.
3. **İki raporu karıştırmayın.** Web raporunda sorgu ve konum vardır; Keşfet raporunda yoktur. Toplam tıklamayı hesaplarken ikisini ayrı tutun.
4. **Aynı tarih aralığıyla karşılaştırın.** İki raporu aynı dönemde yan yana okuyun.
5. **Sayfa boyutuyla çapraz bakın.** Hangi sayfalar web aramasından, hangileri Keşfet’ten tıklama alıyor?
6. **Dışa aktarın ve ayrı sütunlarda tutun.** Aylık raporunuzda “Web tıklama” ve “Keşfet tıklama” ayrı satırlar olsun.

Google Analytics’te Keşfet trafiği çoğu zaman ayrı bir kaynak olarak görünmeyebilir; Analytics’teki kaynak sınıflandırması ile Search Console’un ayrımı birebir eşleşmez ([Search Console tıklamaları GA4 oturumlarıyla neden eşleşmez?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/)).

## Keşfet verisinden ne öğrenilir?

Keşfet raporu şu soruları cevaplamaya yardımcı olur:

- **Hangi sayfalar Keşfet’te görünüyor?** Genellikle güncel, görsel ağırlıklı, ilgi çekici içerikler.
- **Tıklama oranı nasıl?** Yüksek gösterim ama düşük TO, başlık ve görselin çekiciliğini sorgulatır.
- **Trafik ne zaman geliyor?** Belirli bir içeriğin yayınından sonraki günlerde mi?
- **Keşfet trafiği sitenin geneline etkisi.** Toplam trafiğin ne kadarı bu kanaldan?

Google’ın Keşfet rehberi, tıklama tuzağı ve sansasyonel başlıklardan kaçınmayı, büyük ve temsili görseller kullanmayı (genel bir görsel ya da logo yerine) ve içeriğin Keşfet içerik politikalarına uygun olmasını önerir. Bu öneriler Keşfet performansını iyileştirmek için bir kontrol listesi sağlar; ama görünüm garanti edilemez.

## Dalgalanmalar nasıl okunur?

Keşfet trafiğindeki ani değişimlerde şu sırayı izleyin:

- **Bir içerik mi öne çıktı?** Tek bir yazı toplam artışı açıklayabilir.
- **Mevsim ve gündem etkisi var mı?** İlgi alanı değişimi trafiği oynatır.
- **Arama güncellemesi oldu mu?** Güncelleme dönemlerinde hem web hem Keşfet dalgalanabilir.
- **Politikaya uyum sorunu var mı?** Search Console’da manuel işlem ya da Keşfet ile ilgili uyarı kontrol edin ([Search Console’da manuel işlem bildirimi: ne yapmalı?](/blog/search-consolda-manuel-islem-bildirimi-ne-yapilmali/)).
- **Web araması etkilendi mi?** İkisi birlikte düştüyse site genelinde bir sorun olabilir; yalnızca Keşfet düştüyse içerik türü ya da ilgi etkisi olabilir ([trafik düşüşü nasıl teşhis edilir?](/blog/trafik-dususu-nasil-teshis-edilir/)).

Dalgalanmayı kendi başına bir sorun saymayın; Keşfet’in doğası dalgalıdır.

## Küçük işletme için ne anlama gelir?

Yerel hizmet işletmeleri için Keşfet çoğu zaman ana trafik kaynağı değildir; web araması ve yerel görünürlük önceliklidir. Haber, rehber ve görsel ağırlıklı içerik üreten siteler (turizm, yemek, yaşam tarzı) için Keşfet daha anlamlı olabilir. Keşfet’te görünmeniz bir hedef değil, güçlü ve özgün içeriğin yan ürünü olarak değerlendirilmelidir. Önce web araması performansınızı ve yerel görünürlüğünüzü sağlamlaştırın; Keşfet trafiği gelirse raporda ayrı izleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir turizm acentesinin blogunda “Pamukkale’de gün batımı fotoğrafları” yazısı bir hafta boyunca Keşfet’ten yüksek trafik alıyor; ardından trafik eski seviyeye dönüyor. Acente toplam organik trafiğin arttığını düşünüp bunu kalıcı sanıyor.

Danışman raporları ayırıyor: web aramasındaki trafik sabit; artış tamamen Keşfet’ten ve tek bir yazıdan. Acente Keşfet verisini ayrı satırda izlemeye başlıyor, o yazının görsel ve başlık özelliklerini öğrenip benzer içerikler planlıyor ama trafiği hedef olarak yazmıyor. Web aramasında hizmet sayfaları ve yerel profil üzerinde çalışmayı sürdürüyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Web ve Keşfet trafiğini tek sayı olarak okumak.** Farklı davranırlar.
2. **Keşfet düşüşünü site sorunu sanmak.** Doğası dalgalıdır.
3. **Keşfet için konum aramak.** Konum verisi yoktur.
4. **Keşfet’e güvenip web aramasını ihmal etmek.** Daha öngörülebilir olan web aramasıdır.
5. **Tıklama tuzağı başlıklarla trafik kovalamak.** Rehber bunu önermez.
6. **Raporları ayrı arşivlememek.** Aylık dışa aktarmada ayrı tutun.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da web, görsel ve Keşfet raporlarını ayrı okur, aylık raporunuzda ayrı sütunlarla sunarız,
- Keşfet’ten gelen sayfaların özelliklerini inceler, içerik ve görsel önerileri yazarız,
- dalgalanma dönemlerinde olası nedenleri sırayla değerlendiririz,
- sonuç vaat etmeden, web ve Keşfet görünürlüğünü izleriz.

Raporlarınız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Web ve Keşfet trafiğinizi ayrı ayrı okuyup doğru kararlar verelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Keşfet trafiği web trafiğine dahil mi?

Search Console’da ayrı raporlardır. İkisini birleştirip tek bir “organik trafik” gibi okumayın.

### Keşfet’te ortalama konum var mı?

Hayır; Google konumun yalnızca Arama sonuçları için gösterildiğini belirtir.

### Keşfet trafiğim neden bir anda düştü?

İlgi alanı değişimi, içerik türü, Arama güncellemeleri ya da tek bir içeriğin etkisinin bitmesi olabilir. Google Keşfet trafiğinin tahmin edilemez olduğunu söyler.

### Keşfet raporunu neden göremiyorum?

Siteniz yeterli Keşfet gösterimi almamış olabilir. Rapor veri oluştuğunda görünür.

### Keşfet’e girmek için özel bir kod gerekir mi?

Google, Dizinde ve Keşfet içerik politikalarına uyan içeriğin otomatik olarak uygun olduğunu, özel etiket ya da yapılandırılmış veri gerekmediğini belirtir.

## Kaynaklar

- [Search Console Yardımı: Search Console verileri hakkında](https://support.google.com/webmasters/answer/96568?hl=tr)
- [Search Console Yardımı: Gösterimler, konum ve tıklamalar nedir?](https://support.google.com/webmasters/answer/7042828?hl=tr)
- [Google Arama Merkezi: Keşfet ve web siteniz](https://developers.google.com/search/docs/appearance/google-discover?hl=tr)
