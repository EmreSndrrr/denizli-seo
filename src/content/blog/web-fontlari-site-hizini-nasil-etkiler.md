---
title: "Web Fontları Site Hızını Nasıl Etkiler?"
description: "Web fontları site hızını nasıl etkiler? WOFF2, önyükleme, font-display, alt küme ve yedek yazı tipi ile metin gecikmesini ve kaymayı azaltma rehberi."
date: 2026-11-14
service: teknik-seo
imageAlt: "Yazı tipi dosyalarının yüklenmesi ve metnin görünme süresi"
---

Web fontları, sayfa hızını iki yoldan etkiler: yazı tipi inene kadar metnin görünmesini geciktirebilir ve yazı tipi değiştiğinde düzenin kaymasına yol açabilir. Çözüm, yazı tipi sayısını azaltmak, modern WOFF2 biçimini kullanmak, yalnızca gerekli karakterleri ve kalınlıkları yüklemek, önemli yazı tipini erken yüklemek ve `font-display` ile yedek yazı tipini akıllıca seçmektir.

Yazı tipi seçimi tasarım kararı gibi görünür ama doğrudan hız ve kullanıcı deneyimi konusudur. Teknik uygulama için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Yazı tipleri hızı nasıl bozar?

web.dev’e göre web yazı tipleri performansı iki yoldan etkiler: **metin oluşturma gecikmesi** (FCP ve bazen LCP) ve **düzen kayması** (CLS) ([yazı tipleriyle ilgili en iyi uygulamalar](https://web.dev/articles/font-best-practices?hl=tr)). Yazı tipleri önemli kaynaklardır; mümkün olduğunca erken yüklenmeleri gerekir. Ayrıca üçüncü taraf sitelerden alınan yazı tipleri ayrı bir bağlantı kurulumu gerektirir ve bu ek süre getirir.

Kullanıcı açısından bu, ya metnin geç görünmesi ya da sayfanın bir anda kaymasıdır. İkisi de dönüşüm kaybettirir.

## Kendi sunucunuzdan mı, üçüncü taraftan mı?

Yazı tiplerini üçüncü taraf bir hizmetten almak ek bağlantı kurulumu (DNS, TLS) gerektirir. web.dev, kâğıt üzerinde kendi barındırdığınız yazı tipinin üçüncü taraf bağlantı kurulumunu ortadan kaldırdığı için daha iyi performans vermesi gerektiğini söyler; ancak uygulamada iki seçenek arasındaki fark, sitenizin kurulumuna bağlıdır. Kendi barındırmayı düşünüyorsanız sitenizin CDN ve HTTP/2 kullandığını doğrulayın; aksi hâlde avantaj görünmeyebilir.

Üçüncü taraftan yüklemeye devam edecekseniz:

- Üçüncü taraf kaynağa erken bağlanmak için `preconnect` kaynak ipucunu kullanmak web.dev tarafından önemle tavsiye edilir.
- Yazı tiplerinin zamanında istenip istenmediğini geliştirici araçlarının ağ panelinde kontrol edin.
- Yazı tipi lisans koşullarını (kendi sunucunuzdan sunmaya izin veriyor mu) okuyun.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## WOFF2 kullanın

web.dev’e göre WOFF2, en geniş tarayıcı desteğine ve en iyi sıkıştırmaya sahiptir; WOFF’a göre yaklaşık %30 daha iyi sıkıştırır. Yani:

- Yazı tiplerini WOFF2 biçiminde sunun.
- Eski biçimleri (TTF, EOT) çoğu durumda bırakabilirsiniz; hedef kitlenizin tarayıcılarını kontrol edin.
- Dosyaları sunucuda sıkıştırma ve uzun süreli önbellek başlıklarıyla sunun.

## Yazı tipi sayısını ve kalınlıkları azaltın

Her yazı tipi ailesi ve her kalınlık ayrı bir dosyadır. Bir sitede dört yazı tipi ailesi ve altı kalınlık kullanmak yüklenecek dosya sayısını katlar. Öneriler:

- Bir ya da iki yazı tipi ailesiyle sınırlı kalın.
- Gerçekten kullandığınız kalınlıkları yükleyin (normal, kalın gibi).
- Değişken (variable) yazı tipleri, birçok kalınlığı tek dosyada sunar; ancak dosya boyutuna bakın.
- İtalik ve nadir kalınlıkları gerekmiyorsa çıkarın.

Okunabilirlik açısından yaygın yazı tiplerinin güçlü olduğunu unutmayın: web.dev’in erişilebilirlik içeriği, yaygın yazı tiplerinin okuma hızı ve anlamada avantaj sağladığını belirtir ([renk ve yazı tipi seçimi](/blog/renk-ve-yazi-tipi-secimi-okunurluk-ve-marka/)).

## Alt küme oluşturma

web.dev, yazı tipi dosyasını yalnızca gereken karakterlerle sınırlamayı (alt küme oluşturma) önerir. Türkçe içerik için Latin ve Latin genişletilmiş karakterlerin (ç, ğ, ı, ö, ş, ü) bulunduğundan emin olun; fazla karakter kümesini (Kiril, Yunan) yüklemeyin. Türkçe karakter desteği olmayan bir yazı tipi, bu harflerde yedek yazı tipine düşer ve kötü görünür; bu yüzden yazı tipini Türkçe karakterlerle test edin.

## Yazı tipini erken yükleyin

Tarayıcı yazı tipi dosyasını ancak CSS’i ve yazı tipini kullanan öğeyi işledikten sonra keşfeder; web.dev’e göre `@font-face` tanımı tek başına indirmeyi tetiklemez, sayfada kullanılan bir stil ona referans verdiğinde iner. Bu yüzden:

- Sayfanın üstünde kullanılan ana yazı tipini `preload` ile önceden yükleyin.
- Önyüklemeyi yalnızca kritik yazı tipleri için yapın; hepsini öne çekmek diğer kaynakları geciktirir.
- Yazı tipi dosyası, CSS içinde değil, hemen keşfedilebilecek biçimde bağlanmalıdır.

## `font-display` ve yedek yazı tipi

Yazı tipi inene kadar metnin nasıl görüneceğini `font-display` belirler. Seçenekler bir takas içerir: yedek yazı tipini hemen gösterip sonra değiştirmek hızlı görünür ama kayma yaratabilir; yazı tipini beklemek kayma yaratmaz ama metni geciktirir. web.dev, `font-display: optional` değerinin yeniden düzenlemeyi önleyebileceğini belirtir ([CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)); bu durumda yazı tipi gecikirse yedek yazı tipi kullanılmaya devam eder.

Kaymayı azaltmak için:

- Asıl yazı tipine boyut olarak yakın bir yedek yazı tipi seçin.
- `size-adjust` gibi özelliklerle yedek yazı tipinin ölçülerini asıl yazı tipine yaklaştırın.
- Başlık gibi büyük metinlerde farkı ayrıca test edin.

Ayrıntılı kayma yönetimi için [CLS düzeltme](/blog/sayfa-yuklenirken-icerik-neden-kayar-cls-duzeltme/) yazısına bakın.

## İkon yazı tipleri

İkonlar için tam bir ikon yazı tipi yüklemek, birkaç ikon için gereksiz bir yüktür. Yalnızca kullanılan ikonları (SVG olarak ya da küçük bir alt kümeyle) sunmayı düşünün. Ayrıca ikon yazı tipi yüklenemezse boş kutu görünür; bu hem tasarım hem erişilebilirlik sorunudur.

## Yazı tipi ve erişilebilirlik

Hızlı ama okunmayan yazı tipi, hedefi kaçırır. Okunabilirlik için:

- Gövde metnini yeterince büyük (çoğu sitede en az 16 piksel) ve satır aralığını rahat tutun.
- İnce ve süslü yazı tiplerini gövde metninde kullanmayın; web.dev’in erişilebilirlik içeriği süslü ve el yazısı yazı biçimlerinden ve yalnızca büyük harf kullanımından kaçınmayı önerir.
- Kontrastı yeterli seçin ([renk ve yazı tipi seçimi](/blog/renk-ve-yazi-tipi-secimi-okunurluk-ve-marka/)).
- Marka yazı tipi ağırsa yalnızca başlıklarda kullanıp gövdede sistem yazı tipine yakın bir seçenek tercih edebilirsiniz.

## Sistem yazı tipleri bir seçenek mi?

Hiç yazı tipi indirmemek en hızlı çözümdür: cihazda zaten yüklü sistem yazı tipleri sıfır ek yük getirir. Marka kimliği gerektirmeyen küçük işletme siteleri ve blog gövde metni için bu makul bir tercihtir. Marka başlıklarında özel yazı tipi, gövdede sistem yazı tipi kullanmak çoğu zaman iyi bir orta yoldur. Kararı, görünüm kaygısı ile hız kaygısını birlikte tartarak verin.

## Ölçüm

1. PageSpeed Insights’ta yazı tipi ile ilgili uyarılara bakın.
2. Geliştirici araçlarının ağ panelinde yazı tipi dosyalarının sayısını, boyutunu ve ne zaman indiğini inceleyin.
3. Yavaş ağda sayfayı yükleyip metnin ne zaman göründüğünü gözleyin.
4. Değişiklikten sonra LCP ve CLS’yi yeniden ölçün ([site hızı ölçümü](/blog/site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir kafe zincirinin sitesi üç yazı tipi ailesi ve dokuz kalınlık yüklüyor; başlıklar geç görünüyor ve yazı tipi yüklenince sayfa kayıyor.

- **Teşhis:** Yazı tipi dosyalarının sayısı ve boyutu fazla; yedek yazı tipi asıl yazı tipinden çok farklı.
- **Çözüm:** Yazı tipi ailesi ikiye ve kalınlıklar üçe indiriliyor; dosyalar WOFF2 ve kendi sunucuda sunuluyor; ana yazı tipi önyükleniyor; yakın bir yedek seçiliyor.
- **Doğrulama:** Laboratuvarda LCP ve CLS yeniden ölçülüyor; gerçek kullanıcı verisi haftalar içinde izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Çok sayıda yazı tipi ailesi ve kalınlık yüklemek.**
2. **Türkçe karakter desteğini test etmemek.**
3. **Tüm yazı tiplerini önyüklemek.**
4. **Yedek yazı tipini asıl yazı tipinden çok farklı seçmek.**
5. **Lisans koşullarını kontrol etmemek.**
6. **Ölçüm yapmadan değişiklik yapmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin yazı tipi envanterini çıkarır ve gereksizleri belirleriz,
- biçim, alt küme, önyükleme ve yedek yazı tipi düzenini kurarız,
- Türkçe karakter ve okunabilirlik testi yaparız,
- iyileşmeyi gerçek kullanıcı verisiyle izleriz.

Hız denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Hangi yazı tipi biçimini kullanmalıyım?

WOFF2; en geniş destek ve en iyi sıkıştırmayı sunar.

### Kaç yazı tipi ailesi yeterli?

Çoğu işletme sitesi için bir ya da iki; gereksiz kalınlıkları çıkarın.

### Yazı tiplerini önyüklemeli miyim?

Yalnızca sayfanın üstünde kullanılan kritik yazı tipini; hepsini değil.

### Türkçe karakterler neden bozuk görünür?

Yazı tipi Türkçe karakterleri içermiyorsa o harfler yedek yazı tipine düşer; yazı tipini test edin.

### `font-display` hangisi?

Hız ve kayma arasında takas yapar; `optional` kaymayı önleyebilir ama yazı tipi gecikirse yedek kullanılır.

## Kaynaklar

- [web.dev: Yazı tipleriyle ilgili en iyi uygulamalar](https://web.dev/articles/font-best-practices?hl=tr)
- [web.dev: CLS’yi optimize edin](https://web.dev/articles/optimize-cls?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Tipografi](https://web.dev/learn/accessibility/typography?hl=tr)
