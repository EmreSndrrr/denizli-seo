---
title: "Search Console Ortalama Konum Nasıl Hesaplanır, Yorumlanır?"
description: "Search Console ortalama konum nasıl hesaplanır ve yorumlanır? Sorgu bazlı en üst konum, ortalama alma mantığı, örnek hesap ve yanıltıcı durumlar."
date: 2026-11-19
service: teknik-seo
imageAlt: "Bir sorgu için sayfanın farklı gösterimlerdeki konumlarının ortalamasının hesaplanması"
---

Search Console’daki ortalama konum, sitenizin arama sonuçlarında ortalama olarak kaçıncı sırada göründüğünü gösteren bir değerdir; ama sıradan bir “ortalama sıralama” değildir. Google’ın tanımına göre her sorgu için sitenizin göründüğü en üst konum alınır, sonra bu değerlerin ortalaması hesaplanır. Yani sayı, sorgu ve gösterim dağılımına göre değişir; bu yüzden tek bir sayıya bakıp “siteyi 8. sıraya düşürdüm” demek yanıltıcıdır. Doğru kullanım, sayıyı sorgu, sayfa ve tarih kırılımında, tıklama ve gösterimle birlikte okumaktır.

Bu yazıda ortalama konumun nasıl hesaplandığını, örnek bir hesabı, neden yanıltıcı olabildiğini ve nasıl yorumlanacağını anlatıyoruz. Genel sıralama takibi için [Google sıralaması nasıl takip edilir? konum ve cihaza göre](/blog/google-siralamasi-nasil-takip-edilir-konum-ve-cihaza-gore/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Konum ne anlama gelir?

Google’ın “Gösterimler, konum ve tıklamalar nedir?” sayfası konumu şöyle tanımlar: bağlantınızın Google’daki konumunun göreli bir sıralamasıdır; rakamlarla ifade edilir (1 en üst konumu, 2 bir sonraki konumu ifade eder) ve yalnızca Google Arama sonuçları için gösterilir. Konum, Google Arama’da genellikle sayfanın birincil tarafında yukarıdan aşağıya, daha sonra ikincil tarafında yukarıdan aşağıya hesaplanır. Bir bilgi paneli (birleşik öğe) gibi bir blok 6. konumdaysa, paneldeki tüm bağlantılar 6. konumdadır ([Gösterimler, konum ve tıklamalar nedir?](https://support.google.com/webmasters/answer/7042828?hl=tr)).

Yani “konum” bir sıra numarasıdır; ama sonuç sayfasındaki öğelerin türüne göre (bilgi paneli, görsel bloğu, harita) bazı bağlantılar aynı konumu paylaşabilir. Bu da konum değerini her zaman “kaçıncı mavi bağlantı” biçiminde okumamak gerektiğini gösterir.

## Ortalama konum nasıl hesaplanır?

Aynı sayfa, Performans raporunda gösterilen ortalama konum için şu mantığı açıklar: Search Console bunu, tüm gösterimlerin konum değerinin ortalaması olarak gösterir; bunun nedeni, bağlantının her görüldüğünde farklı bir konumda olabilmesidir. Raporda gösterilen konum değeri, mülkünüzün göründüğü tüm sorgularda alınan ortalamaya göre, arama sonuçlarında mülkünüze ya da sayfanıza yönlendiren bağlantıların bulunduğu en üst konumdur. Google şu örneği verir: 1. sorgu mülkünüzü 2, 4 ve 6. konumlarda döndürürse bu sorgunun konumu 2 (en üst konum) olarak kabul edilir. 2. sorgu mülkünüzü 3, 5 ve 9. konumlarda döndürürse bu sorgunun konumu 3 olur. Bu iki sorgunun ortalama konumu (2 + 3) ÷ 2 = 2,5 olarak hesaplanır.

Önemli nokta: aynı sorguda sitenizin birden fazla sonucu görünüyorsa en üsttekinin konumu sayılır; diğerleri hesaba girmez. Google’ın tanımı konumu “tüm gösterimlerin konum değerinin ortalaması” olarak verdiği için, çok gösterim alan sorgular sonucu daha çok etkiler.

> **Hizmet almak için iletişime geçin.** Search Console raporlarınızı doğru yorumlayıp hangi işe öncelik vereceğinizi birlikte belirleyelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Basit bir hesap örneği

Google’ın örneğini bir adım ileri taşıyalım. Hayalî bir işletme için üç sorgu düşünün; anlatımı basitleştirmek için her sorgunun gösterimini eşit sayıyoruz:

| Sorgu | Sitenin göründüğü konumlar | Sayılan (en üst) konum |
| --- | --- | --- |
| A | 2, 4 ve 6 | 2 |
| B | 3, 5 ve 9 | 3 |
| C (yeni giren uzun kuyruklu sorgu) | 40 | 40 |

İlk iki sorguyla ortalama (2 + 3) ÷ 2 = 2,5’tir; Google’ın örneğiyle aynıdır. Üçüncü sorgu, sitenizin 40. sırada göründüğü yeni bir uzun kuyruklu sorgu olarak eklenince ortalama (2 + 3 + 40) ÷ 3 = 15’e çıkar. Oysa hiçbir sayfanız geriye gitmedi; yalnızca daha fazla sorguda görünmeye başladınız. Gerçek raporlarda gösterim sayıları eşit olmadığı için çok gösterim alan sorgular etkiyi dengeler; ama mantık aynıdır: yeni ve düşük sıralı sorgular ortalamayı kötüleştirir, görünürlüğünüz artsa bile.

## Ortalama konum neden yanıltıcı olabilir?

- **Yeni sorgu girişi ortalamayı düşürür.** Sayfanız yeni bir uzun kuyruk sorguda 50. sırada görünmeye başlarsa, ortalama konum kötüleşmiş gibi görünür; oysa görünürlüğünüz arttı.
- **Sorgu karışımı değişir.** Marka aramaları ortalamayı yukarı çeker; markasız aramalar aşağı. Karışım değişince sayı oynar ([markalı ve markasız organik trafik nasıl ayrılır?](/blog/markali-ve-markasiz-organik-trafik-nasil-ayrilir/)).
- **Kişiselleştirme ve konum.** Sonuçlar kullanıcının zamanına, yerine, cihazına ve geçmişine göre değişir; Google’ın Performans raporu sayfası, bir sorgu listede görünse bile aynı sorguyu çalıştırdığınızda sitenizi göremeyebileceğinizi belirtir.
- **Sonuç türleri.** Haritalı, görselli ya da bilgi panelli sonuçlarda konum numarası farklı anlam taşır.
- **Ön veri.** En yeni veriler birkaç saat içinde değişebilir ([Search Console’un son gün verileri neden eksik görünür?](/blog/search-console-son-gun-verileri-neden-eksik/)).
- **Gösterim sayısı az olan sorgular.** Birkaç gösterimlik bir sorgunun konumu rastgele oynayabilir.

## Ortalama konum nasıl doğru yorumlanır?

Şu kuralları uygulayın:

1. **Sayıyı tek başına yorumlamayın.** Tıklama, gösterim ve tıklama oranıyla birlikte okuyun.
2. **Sorgu ve sayfa bazında bakın.** Site geneli ortalama yerine önemli sorgu ve sayfa grubunun konumuna bakın.
3. **Marka ve markasız aramaları ayırın.** Farklı davranırlar.
4. **Konum aralıklarına bakın.** 1–3, 4–10, 11–20 ve sonrası gibi gruplarda kaç sorgunuz var? 11–20 aralığındaki sorgular (ikinci sayfa) çoğu zaman iyileştirme adayıdır.
5. **Karşılaştırmayı aynı koşullarda yapın.** Aynı tarih uzunluğu, aynı filtreler, aynı cihaz.
6. **Gösterimi küçük sorguları yok sayın.** Anlamlı gösterim sayısı olanlara odaklanın.
7. **Sıralama takibini tamamlayıcı kullanın.** Belirli kelimeler için kontrollü bir sıralama takibi yapabilirsiniz ama bu da konum ve cihaza göre değişir.

## Ortalama konumdan hangi kararlar çıkar?

Konum verisi şu kararlara yardımcı olur:

- **4–10 arası sorgular:** İlk sayfada ama alt sıralarda; başlık, açıklama ve içerik iyileştirmesiyle tıklama oranı artırılabilir ([arama sonuçlarında tıklama oranı nasıl artırılır?](/blog/arama-sonuclarinda-tiklama-orani-nasil-artirilir/)).
- **11–20 arası sorgular:** İkinci sayfada; içerik ve iç bağlantıyla güçlendirilebilir.
- **Düşen önemli sorgular:** Trafik düşüşü teşhisine başlama noktası ([trafik düşüşü nasıl teşhis edilir?](/blog/trafik-dususu-nasil-teshis-edilir/)).
- **Yeni sorgu girişleri:** Genel ortalama düşse bile görünürlük arttığına işaret edebilir.

Bu kararlar sıralama garantisi vermez; yalnızca hangi alanlara emek vereceğinizi gösterir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir pansiyonun Search Console raporunda ortalama konum bir ayda 6,2’den 9,1’e çıkıyor. Sahibi sitenin kötüleştiğini düşünüyor.

Danışman sorguları inceliyor: bu dönemde pansiyon yüzlerce yeni uzun kuyruklu sorguda (örneğin “Pamukkale’de gece kalmak”) 30–50. sıralarda görünmeye başlamış; gösterim sayısı ve toplam tıklama artmış. Marka aramalarının konumu ise değişmemiş. Pansiyon ortalama konumu tek başına karar ölçüsü yapmıyor; marka ve markasız konumları ayrı izliyor ve ikinci sayfadaki iyileştirme adaylarına odaklanıyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Ortalama konumu “sıralamam” sanmak.** Sorgu bazlı en üst konumların ortalamasıdır.
2. **Tek bir sayıyla alarma geçmek.** Sorgu karışımı değişimi yanıltabilir.
3. **Marka ve markasız aramaları karıştırmak.** Ayrı okuyun.
4. **Az gösterimli sorgulara anlam yüklemek.** Rastgele oynarlar.
5. **Farklı filtrelerle karşılaştırma yapmak.** Aynı koşullarda bakın.
6. **Konumu hedefe çevirmek.** “Ortalama 3 olsun” gibi hedefler yanlış davranışları teşvik eder.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console konum verilerinizi marka ve markasız, sorgu ve sayfa kırılımında okur, yanıltıcı değişimleri ayırırız,
- ikinci sayfadaki ve alt sıradaki iyileştirme adaylarını öncelik sırasıyla listeleriz,
- aylık rapor şablonunda ortalama konumu doğru bağlamla sunarız,
- sonuç vaat etmeden, görünürlük eğilimini izleriz.

Raporlarınızı birlikte okumak için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Konum verilerinizi doğru okuyup iyileştirme fırsatlarını birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Ortalama konum 1 olursa ne anlama gelir?

Göründüğünüz sorgularda ortalama olarak en üst konumda olduğunuz anlamına gelir. Genellikle az sayıda, marka ağırlıklı sorguda görülür.

### Ortalama konumum düştü, ne yapmalıyım?

Önce sorgu karışımının değişip değişmediğine, yeni sorguların eklenip eklenmediğine ve marka aramalarına bakın. Tıklama ve gösterim de düştüyse nedenini araştırın.

### Konum neden yarım değerli (örneğin 4,3)?

Birden çok sorgunun ve gösterimin ortalamasıdır; tek bir sonuç sırası değildir.

### Search Console konumu ile sıralama takip aracı neden farklı?

Search Console gerçek kullanıcı gösterimlerinin en üst konumlarının ortalamasını, takip araçları belirli bir konum ve cihazdaki tek bir aramayı ölçer. İkisi farklı şeydir.

### Konum hedefi koymalı mıyım?

Önermiyoruz. Tıklama, gösterim ve iş sonuçlarını izleyin; konumu yardımcı bir sinyal olarak kullanın.

## Kaynaklar

- [Search Console Yardımı: Gösterimler, konum ve tıklamalar nedir?](https://support.google.com/webmasters/answer/7042828?hl=tr)
- [Search Console Yardımı: Performans raporu (Arama sonuçları)](https://support.google.com/webmasters/answer/7576553?hl=tr)
