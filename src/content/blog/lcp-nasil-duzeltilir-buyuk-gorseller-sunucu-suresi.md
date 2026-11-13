---
title: LCP Nasıl Düzeltilir? Büyük Görseller ve Sunucu Süresi
description: "LCP nasıl düzeltilir? LCP öğesini bulma, dört alt bölüm, büyük görsel ve sunucu süresi düzeltmeleri; küçük siteler için sıralı kontrol listesi."
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir zaman çizelgesi: sunucu, kaynak yükleme ve görüntüleme aşamaları"
---

LCP’yi düzeltmek için önce hangi öğenin LCP olduğunu bulun (çoğu zaman ana görsel), sonra süreyi dört parçaya bölüp en uzun parçaya odaklanın: sunucunun ilk yanıtı (TTFB), kaynağın yüklenmeye başlaması, yüklenme süresi ve ekranda oluşturulma. Küçük sitelerde en çok işe yarayanlar: görseli küçültmek ve modern biçime çevirmek, LCP görselini geç yüklememek, sunucu ve eklenti yükünü azaltmak. Hedef: 2,5 saniye veya daha kısa.

Sayfa yavaş görünüyorsa neden çoğu zaman tek bir yerdedir; ama o yeri bulmadan yapılan düzeltmeler çoğunlukla boşa gider. Bu yazı, LCP’nin hangi parçalardan oluştuğunu, her parçayı nasıl iyileştireceğinizi ve küçük bir işletme sitesi için adım adım bir düzeltme sırasını anlatıyor. LCP’nin ne olduğunu bilmiyorsanız önce [Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/) yazımıza bakın.

## LCP hedefi nedir?

web.dev’e göre iyi bir LCP değeri 2,5 saniye veya daha kısadır ([LCP](https://web.dev/articles/lcp?hl=tr)). Google’ın Core Web Vitals sayfası da iyi bir deneyim için LCP’nin sayfa yüklenmeye başladıktan sonraki ilk 2,5 saniye içinde gerçekleşmesini hedeflemenizi önerir.

## Önce LCP öğesini bulun

web.dev, LCP öğesini PageSpeed Insights, Chrome Geliştirici Araçları ya da WebPageTest gibi araçlarla belirleyebileceğinizi söyler ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Çoğu sayfada LCP öğesi şunlardan biridir:

- ana sayfadaki büyük kahraman (hero) görseli,
- ürün ya da hizmetin ilk büyük fotoğrafı,
- sayfanın üstündeki büyük bir başlık bloğu (metin ise genellikle daha hızlıdır).

Hangi öğe olduğunu bilmeden görselleri toptan küçültmek yerine, önce o tek öğeyi hedefleyin.

## LCP’nin dört alt bölümü

web.dev, her sayfanın LCP süresinin dört alt bölüme ayrılabildiğini ve bu bölümlerin toplamının LCP’yi oluşturduğunu anlatır:

| Alt bölüm | Ne anlama gelir? | Tipik neden |
| --- | --- | --- |
| Sunucu yanıtı (TTFB) | Ziyaretçi bir sayfaya gitmeye başladığı andan HTML’in ilk baytlarının alındığı ana kadar | Yavaş sunucu, ağır eklenti, uzak sunucu |
| Kaynak yükleme gecikmesi | TTFB ile tarayıcının LCP kaynağını yüklemeye başladığı an arası | Görsel geç keşfediliyor, geç yükleniyor |
| Kaynak yükleme süresi | LCP kaynağının indirilme süresi | Büyük, sıkıştırılmamış görsel |
| Öğe oluşturma gecikmesi | Kaynak yüklendikten sonra ekranda tamamen görünene kadar | Ağır JavaScript, render’ı bekleyen kod |

Önemli bir uyarı: bu rehber, bir bölümü iyileştirmenin LCP’yi iyileştirmeyebileceğini, süreyi yalnızca başka bir bölüme kaydırabileceğini belirtir. Örneğin görseli küçültünce kaynak yükleme süresi kısalırsa ama öğe JavaScript yüklenene kadar gösterilmiyorsa LCP aslında iyileşmeyebilir. Bu yüzden önce en uzun bölümü bulup ona odaklanın ve sonra tüm bölümleri gözden geçirin.

## 1. Sunucu yanıt süresi (TTFB) yüksekse

web.dev’e göre yüksek TTFB, 2,5 saniyelik LCP’ye ulaşmayı zorlaştırabilir, hatta imkânsız hale getirebilir. Nedenler arasında birden fazla sunucu yönlendirmesi, ziyaretçinin sunucudan uzakta olması ve kötü ağ koşulları sayılır. Küçük işletme siteleri için pratik adımlar:

- **Barındırmayı gözden geçirin.** Çok ucuz ve paylaşımlı sunucular yavaş yanıt verebilir.
- **Önbellek kullanın.** İçerik yönetim sistemlerinde önbellek eklentisi ya da sunucu önbelleği, sayfayı her seferinde yeniden üretmeyi önler.
- **Gereksiz eklentileri kaldırın.** Her eklenti sayfanın üretim süresini uzatabilir.
- **Gereksiz yönlendirmeleri azaltın.** Zincirleme yönlendirme TTFB’yi artırır; bkz. [301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/).

## 2. Kaynak yükleme gecikmesi: görsel geç mi başlıyor?

LCP görselinin tarayıcı tarafından erken keşfedilmesi ve hemen yüklenmeye başlaması gerekir. web.dev’in iki önemli önerisi:

- **LCP görselini asla geç yüklemeyin.** `loading="lazy"` özelliği, görselin görünüm alanında olduğu onaylanana kadar yüklenmesini erteler ve LCP’yi geciktirir. Rehber bunu açıkça uyarı olarak belirtir: LCP resmini asla geç yüklemeyin.
- **LCP görselini öncelikli yükleyin.** Rehber, LCP resmini yüksek `fetchpriority` ile ön yüklemeyi (preload) örnekler. Çoğu sayfada LCP kaynağının, ilk kaynakla aynı anda yüklenmeye başlamasını sağlamak yeterlidir.

Bu iki ayar çoğunlukla tema ayarlarında ya da kodda yapılır; WordPress gibi sistemlerde temanız ve eklentileriniz buna izin verir mi, kontrol edin.

## 3. Kaynak yükleme süresi: görsel çok büyük mü?

Bir sitedeki en yaygın LCP sorunu büyük görseldir. Düzeltme sırası:

1. **Boyutu küçültün.** Sitede 1.200 piksel genişliğinde gösterilecek bir görseli 4.000 piksel olarak yüklemeyin.
2. **Sıkıştırın.** Fotoğrafı kalite kaybı belirgin olmayacak şekilde sıkıştırın.
3. **Modern biçim kullanın.** web.dev, görseli daha uygun biçime (AVIF ya da WebP) çevirmenin dosya boyutunu küçültebileceğini söyler. Görsel rehberimiz: [görsel SEO](/blog/gorsel-seo/).
4. **Duyarlı görsel kullanın.** Telefon için daha küçük sürüm gönderin.

## 4. Öğe oluşturma gecikmesi: görsel indi ama görünmüyor

Görsel hızlı yüklendiği hâlde ekranda geç görünüyorsa çoğunlukla JavaScript ya da düzen kodu beklenmektedir. web.dev, FCP ile LCP arasındaki büyük farkın, LCP kaynağının tarayıcının önceliklendirmesi için hemen kullanılamadığını ya da tarayıcının LCP içeriğini göstermeden önce başka işleri tamamladığını gösterebileceğini belirtir. Pratikte:

- Ana görseli JavaScript ile sonradan ekleyen kaydırıcı (slider) yerine HTML’de doğrudan verin.
- Gereksiz JavaScript’i kaldırın.
- Sayfanın üst kısmını engelleyen büyük CSS ve betik dosyalarını azaltın.

## Küçük bir sitede düzeltme sırası

- **1:** i̇ş: LCP öğesini bul (PageSpeed Insights); beklenen etki: Hedefi netleştirir
- **2:** i̇ş: Görseli yeniden boyutlandır ve sıkıştır; beklenen etki: Kaynak yükleme süresi
- **3:** i̇ş: WebP/AVIF’e çevir; beklenen etki: Kaynak yükleme süresi
- **4:** i̇ş: LCP görselindeki `loading="lazy"` kaldır; beklenen etki: Kaynak yükleme gecikmesi
- **5:** i̇ş: Önbellek ve eklenti temizliği; beklenen etki: TTFB
- **6:** i̇ş: Kaydırıcı ve ağır betikleri azalt; beklenen etki: Oluşturma gecikmesi
- **7:** i̇ş: Mobilde yeniden ölç; beklenen etki: Doğrulama

Her değişiklikten sonra ölçüm yapın; aynı anda beş şeyi değiştirirseniz hangisinin işe yaradığını bilemezsiniz.

## Düzelttikten sonra ne zaman sonuç görürsünüz?

Laboratuvar ölçümü hemen değişir; Search Console’daki Core Web Vitals raporu ise gerçek kullanıcı verisine dayandığı için güncellenmesi zaman alır. Raporun değişmesini haftalar boyunca izleyin ve düzeltmeyi bir kez yapıp bırakmayın; yeni görsel yüklediğinizde aynı hatayı tekrarlamak kolaydır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir kuyumcunun ana sayfası, tam ekran vitrin fotoğrafıyla açılıyor ve telefonda geç görünüyor. PageSpeed Insights’ta LCP öğesi bu fotoğraf. Fotoğraf telefondan çekilmiş ve oldukça büyük; üstelik temada geç yükleme açık.

Sıra: fotoğraf sitede gösterildiği boyuta indiriliyor ve WebP’ye çevriliyor, bu görselden geç yükleme kaldırılıyor, önbellek açılıyor, kullanılmayan iki eklenti siliniyor. Ardından telefonda yeniden ölçülüyor ve Core Web Vitals raporu haftalarca izleniyor. Bu örnek sonuç vaadi değildir; düzeltme sırasını gösterir.

## LCP için 10 maddelik kontrol listesi

1. LCP öğesi hangisi? (PageSpeed Insights)
2. LCP öğesi bir görsel mi, metin mi?
3. Görselin boyutu sitede gösterilenden çok mu büyük?
4. Görsel sıkıştırılmış mı, WebP ya da AVIF mi?
5. LCP görselinde `loading="lazy"` var mı? (olmamalı)
6. LCP görseli ön yükleniyor mu ya da erken keşfediliyor mu?
7. TTFB yüksek mi? Önbellek açık mı?
8. Gereksiz eklenti ve betik var mı?
9. Ana görsel JavaScript ile mi ekleniyor?
10. Telefonda yeniden ölçtüm mü?

## Hızlı kazanç tablosu

- **Görseli küçültüp sıkıştırma:** zorluk: Kolay; genellikle kimin işi?: Siz
- **Tembel yüklemeyi LCP görselinden kaldırma:** zorluk: Orta; genellikle kimin işi?: Siz ya da tema ayarı
- **Önbellek eklentisi:** zorluk: Orta; genellikle kimin işi?: Siz ya da yazılımcı
- **Kullanılmayan eklentileri silme:** zorluk: Kolay; genellikle kimin işi?: Siz
- **Ön yükleme ve öncelik ayarı:** zorluk: Teknik; genellikle kimin işi?: Yazılımcı
- **Sunucu değişikliği:** zorluk: Teknik; genellikle kimin işi?: Yazılımcı / barındırma

## Denizli SEO bu konuda nasıl yardımcı olur?

LCP düzeltmesi, doğru yeri bulmayı ve doğru sırayla çalışmayı gerektirir. [Teknik SEO hizmetimizde](/teknik-seo/):

- LCP öğesini belirler, dört alt bölümden hangisinin süreyi uzattığını çıkarırız,
- görselleri sıkıştırır, modern biçime çevirir; geç yükleme ve ön yükleme ayarlarını düzeltiriz,
- gereksiz kodu ve eklentileri ayıklar, sunucu yanıt süresini değerlendiririz,
- değişikliklerin etkisini Search Console’da izler, yazılı raporlarız.

Siteniz telefonda geç açılıyorsa [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

## Sık sorulan sorular

### LCP’yi tek başına görseli küçülterek düzeltebilir miyim?

Çoğu zaman büyük kısmını evet; ama TTFB yüksekse ya da görsel geç keşfediliyorsa tek başına yetmeyebilir. Dört alt bölümü birlikte değerlendirin.

### Tüm görsellere tembel yükleme koymalı mıyım?

Sayfanın alt kısmındaki görseller için tembel yükleme yararlıdır; ama LCP görselinde asla kullanmayın.

### Hosting değiştirmek LCP’yi düzeltir mi?

Sorun yüksek TTFB’den kaynaklanıyorsa yardımcı olabilir. Önce ölçün; sorun görselde ya da kodda ise hosting değişikliği çözmez.

### LCP’yi ölçmek için hangi araç?

PageSpeed Insights ile başlayın; Search Console’daki Core Web Vitals raporu gerçek kullanıcı verisini gösterir.

## Kaynaklar

- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
- [web.dev: Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=tr)
- [Google Search Central: Core Web Vitals ve Google arama sonuçlarını anlama](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=tr)
