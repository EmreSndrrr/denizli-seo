---
title: "Sunucu Yanıt Süresi (TTFB) Nasıl İyileştirilir?"
description: "TTFB nedir, iyi değer kaç saniyedir? Yönlendirme, DNS, bağlantı ve sunucu süresi; önbellek, barındırma ve CDN ile sunucu yanıt süresini iyileştirme rehberi."
date: 2026-11-14
service: teknik-seo
imageAlt: "İstekten ilk bayta kadar geçen süreyi gösteren TTFB zaman çizelgesi"
---

TTFB (Time to First Byte), tarayıcının sayfayı istemesi ile sunucudan ilk baytın gelmesi arasındaki süredir; web.dev’e göre iyi değer 0,8 saniye ya da daha azdır, 1,8 saniyeyi aşması kötü kabul edilir. İyileştirmek için önce süreyi parçalarına ayırırsınız (yönlendirme, DNS, bağlantı, sunucu işleme) ve en uzun parçayı önbellek, barındırma, veritabanı ve yönlendirme düzeni ile kısaltırsınız.

TTFB’nin yüksek olması sayfanın geri kalanını da geciktirir. Teknik iyileştirme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## TTFB neyi ölçer?

web.dev, TTFB’yi isteğin başlangıcı ile yanıtın ilk baytının gelmesi arasındaki süre olarak tanımlar. Bu süre şu aşamaların toplamıdır: yönlendirme, servis çalışanı başlangıcı, DNS çözümleme, bağlantı ve TLS kurulumu, ilk bayta kadar geçen istek süresi. TTFB bir Core Web Vitals metriği değildir; ancak sunucunun yanıt verebilirliğini gösterir ve sayfanın diğer metriklerini etkiler ([İlk Bayt Zamanı](https://web.dev/articles/ttfb?hl=tr)).

Yüksek TTFB, LCP’yi de olumsuz etkiler: web.dev’in LCP rehberi, LCP’nin alt bölümlerinden birinin TTFB olduğunu ve yüksek TTFB’nin 2,5 saniye hedefini zorlaştırdığını belirtir ([LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)). Ayrıca [LCP nasıl düzeltilir?](/blog/lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi/) yazısına bakabilirsiniz.

## İyi ve kötü değerler

web.dev’e göre:

- **İyi:** 0,8 saniye veya daha az.
- **İyileştirme gerekli:** 0,8–1,8 saniye arası.
- **Kötü:** 1,8 saniyeden fazla.

Hedef, kullanıcıların çoğu için bu eşikleri tutturmaktır. Tek bir ölçüm yerine gerçek kullanıcı verisinin dağılımına bakın ([site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/)).

## Süreyi parçalara ayırın

TTFB’yi iyileştirmeden önce hangi parçanın uzun olduğunu bulun:

1. **Yönlendirmeler:** http→https, www→www’suz, eski adres→yeni adres zincirleri her biri süre ekler.
2. **DNS:** Alan adı çözümlemesi; yavaş DNS sağlayıcısı süreyi uzatır.
3. **Bağlantı ve TLS:** Sunucuya uzaklık ve bağlantı kurulumu.
4. **Sunucu işleme:** Sayfanın üretilmesi; veritabanı sorguları, eklentiler, uygulama kodu.

Tarayıcı geliştirici araçlarının ağ paneli ve PageSpeed Insights bu aşamaları ayrı ayrı gösterebilir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Yönlendirme zincirlerini kısaltın

Her yönlendirme ayrı bir istek-yanıt turu ekler. Düzeltme:

- Eski adresler **doğrudan** son adrese tek yönlendirmeyle gitsin ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).
- http, www ve eğik çizgi durumlarını tek kuralla çözün.
- Yönlendirme zincirlerini tarama araçlarıyla bulup temizleyin.
- İç bağlantıları doğrudan son adrese verin; yönlendirmeye güvenmeyin.

Yönlendirmeler hem tarama hem kullanıcı için ek gecikme yaratır; bu yüzden özellikle mobilde etkisi görünür.

## Önbelleği doğru kullanın

Sunucunun her istekte sayfayı sıfırdan üretmesi TTFB’nin büyük nedenidir. Çoğu içerik sitesinde sayfaların büyük kısmı sık değişmez; bu sayfalar önceden üretilip hazır sunulabilir:

- **Sayfa önbelleği:** Üretilmiş HTML’i bir süre saklar; WordPress’te güvenilir bir önbellek eklentisi ya da barındırma düzeyinde önbellek kullanılabilir.
- **Nesne önbelleği:** Tekrarlanan veritabanı sorgularını saklar.
- **Tarayıcı önbelleği:** Tekrar ziyaretlerde statik dosyaların yeniden inmesini önler.

Giriş yapmış kullanıcı sayfaları, sepet ve ödeme gibi kişiselleştirilmiş sayfalar önbelleğe uygun olmayabilir; bunlar için dikkatli kural yazın. Önbellek sonrası sayfanın güncel kaldığını ve yeni içeriğin göründüğünü test edin ([WordPress yavaşsa nereler kontrol edilir?](/blog/wordpress-sitem-yavas-aciliyor-nereleri-kontrol-etmeli/)).

## Barındırma ve sunucu

Ortak (paylaşımlı) barındırmada aynı sunucudaki diğer sitelerin yükü sizi etkileyebilir. İncelenecekler:

- Sunucunun coğrafi konumu; kitleniz Türkiye ise yakın konumlu sunucu avantajlıdır.
- Sunucu kaynakları ve yoğun saatlerdeki performans.
- Güncel PHP ve veritabanı sürümleri.
- Sunucu düzeyinde önbellek desteği.
- Destek kalitesi ve kesinti geçmişi.

Barındırma seçimi için [hosting seçimi nelere bakılır?](/blog/hosting-secimi-nelere-bakilir/) yazısına bakın. Barındırmayı değiştirmek büyük bir iştir; geçişi yedek, test ve doğru yönlendirmeyle planlayın.

## Veritabanı ve eklentiler

WordPress ve benzeri sistemlerde yavaşlığın çoğu, sayfa üretilirken çalışan sorguların ve eklentilerin ağırlığından gelir:

- Kullanılmayan eklentileri kaldırın.
- Ağır eklentileri hafif alternatiflerle değiştirmeyi düşünün.
- Veritabanını gereksiz verilerden (eski revizyonlar, geçici kayıtlar) temizleyin.
- Yavaş sorguları geliştirici araçlarıyla bulun.
- Tema ve eklentileri güncel tutun.

## CDN kullanımı

İçerik dağıtım ağı (CDN), statik dosyaları kullanıcıya yakın sunuculardan sunar ve bazı kurulumlarda sayfa yanıtını da önbelleğe alabilir. Fayda, kitlenizin ve sayfa yapınızın özelliklerine bağlıdır. Kurmadan önce hangi içeriklerin önbelleğe alınacağını ve güncellemelerin nasıl yansıyacağını planlayın.

## Tek sayfa uygulamalarında dikkat

web.dev, tek sayfa uygulamalarda (SPA) içeriğin istemci tarafında oluşturulduğunda düşük TTFB’nin özellikle önemli olduğunu belirtir; çünkü tarayıcı içeriği ancak ilk yanıt gelince ve betik çalışınca üretebilir. Mümkünse içeriği sunucuda üretin ([JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).

## Hangi sorunu önce çözmeli?

Her iyileştirme aynı çabaya mal olmaz. Pratik sıra:

1. **Yönlendirme zincirleri:** Genellikle düşük riskli ve hızlı kazanç.
2. **Sayfa önbelleği:** Çoğu içerik sitesinde en büyük tek iyileşme.
3. **Eklenti ve veritabanı temizliği:** Orta çaba; yedek alarak yapılmalı.
4. **Barındırma ve CDN:** En yüksek çaba ve risk; önceki üç adım yetersiz kalırsa.

Bu sıra, önce ucuz ve geri alınabilir işleri yapmanızı sağlar. Her adımdan sonra ölçüm alın; böylece hangi iyileştirmenin ne kadar katkı yaptığını bilirsiniz ve gereksiz yatırım yapmazsınız.

## TTFB ve tarama ilişkisi

Sunucu yavaş yanıt verdiğinde yalnızca kullanıcı değil, arama motoru botu da etkilenir. Yanıt süresi uzun ya da sunucu hatası sık olan sitelerde Googlebot isteklerini azaltabilir. Küçük işletme sitelerinde bunun etkisi sınırlıdır; ancak binlerce sayfalı sitelerde tarama verimini doğrudan etkiler. Sunucu hatalarını (5xx) ve zaman aşımlarını Search Console’daki raporlardan ve sunucu kayıtlarından takip edin; kampanya dönemlerinde olası yoğunluğu önceden test edin (Black Friday SEO’su).

## Ölçüm ve doğrulama

1. PageSpeed Insights ve Search Console’da gerçek kullanıcı verisine bakın.
2. Geliştirici araçlarında ilk isteğin zaman çizelgesini inceleyin.
3. Farklı saatlerde ve farklı konumlardan ölçün; sunucu yükü zamanla değişir.
4. Değişikliklerden önce ve sonra aynı koşulda ölçüm alın.
5. Sunucu hataları (5xx) ve zaman aşımlarını izleyin; tarama bütçesi büyük sitelerde sunucu hızıyla yakından ilişkilidir ([büyük sitelerde tarama bütçesi](/blog/buyuk-sitelerde-tarama-butcesi-nasil-yonetilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir tekstil üreticisinin sitesinde TTFB 2,3 saniye çıkıyor; sayfa her istekte sıfırdan üretiliyor ve üç yönlendirme zinciri var.

- **Teşhis:** Ağ panelinde yönlendirmeler ve sunucu işleme süresi uzun görünüyor.
- **Çözüm:** Yönlendirmeler tek adıma indiriliyor; sayfa önbelleği ve nesne önbelleği açılıyor; kullanılmayan eklentiler kaldırılıyor.
- **Doğrulama:** Aynı koşullarda ölçüm yenileniyor; gerçek kullanıcı verisi haftalar içinde izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Ölçmeden barındırmayı değiştirmek.**
2. **Yönlendirme zincirlerini bırakmak.**
3. **Önbelleği kişiselleştirilmiş sayfalarda kuralsız açmak.**
4. **Kullanılmayan eklentileri tutmak.**
5. **Tek bir ölçüme güvenmek.**
6. **Değişiklikten sonra yeniden ölçmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- TTFB’yi aşamalarına ayırır ve en uzun parçayı buluruz,
- yönlendirme, önbellek ve eklenti düzeltme listesi hazırlarız,
- barındırma değişikliği gerekiyorsa riskleri ve geçiş planını yazarız,
- iyileşmeyi gerçek kullanıcı verisiyle izleriz.

Hız denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### İyi TTFB kaç saniyedir?

web.dev’e göre 0,8 saniye veya daha az iyidir; 1,8 saniyeden fazlası kötüdür.

### TTFB bir Core Web Vitals metriği mi?

Hayır; ancak sunucu yanıt verebilirliğini gösterir ve LCP’yi etkiler.

### En hızlı iyileştirme nedir?

Çoğu içerik sitesinde sayfa önbelleğini doğru kurmak ve yönlendirme zincirlerini kısaltmak.

### Barındırmayı değiştirmeli miyim?

Önce nedenini ölçün; sorun kod ya da eklentideyse barındırmayı değiştirmek tek başına çözmez.

### CDN şart mı?

Şart değil; kitlenize, içeriğinize ve mevcut kurulumunuza bağlıdır.

## Kaynaklar

- [web.dev: İlk Bayt Zamanı (TTFB)](https://web.dev/articles/ttfb?hl=tr)
- [web.dev: LCP’yi optimize edin](https://web.dev/articles/optimize-lcp?hl=tr)
