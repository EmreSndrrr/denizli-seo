---
title: "AMP Sayfaları Hâlâ Gerekli mi?"
description: "AMP sayfaları hâlâ gerekli mi? Google’ın AMP’yi diğer sayfalarla aynı standartta değerlendirmesi, bakım maliyeti ve AMP’den güvenli çıkış adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "AMP sürümü ile hızlı ve duyarlı tek sürüm mobil sayfanın karşılaştırması"
---

Çoğu işletme sitesi için AMP gerekli değildir. Google, AMP sayfalarını diğer web sayfaları gibi dizine eklediğini ve sayfa hangi teknolojiyle yapılmış olursa olsun tüm sayfalara aynı standardı uyguladığını belirtir. Yani AMP kullanmak tek başına bir sıralama avantajı sağlamaz; hızlı, mobil uyumlu ve kullanışlı tek bir sayfa aynı işi görür. Bugün AMP’niz varsa ve sorunsuz çalışıyorsa kaldırmak zorunda değilsiniz; yeni bir site kuruyorsanız AMP’ye yatırım yapmak yerine sayfanın kendisini hızlandırmak daha doğrudur.

Bu yazı, AMP’nin ne olduğunu, kimin için hâlâ anlamlı olabileceğini ve çıkmak isteyenlerin izleyeceği yolu anlatır. Mobil hız denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## AMP nedir?

AMP, sayfaların mobilde çok hızlı açılması için tasarlanmış, kısıtlı bir HTML çerçevesidir. İzin verilen etiket ve betikler sınırlıdır; özel JavaScript yazmak büyük ölçüde yasaktır. Çoğu kurulumda sayfanın iki sürümü olur: normal (standart) sayfa ve onun AMP sürümü. İkisi birbirine `rel="amphtml"` ve `rel="canonical"` etiketleriyle bağlanır.

Bir dönem haber sitelerinde çok yaygındı; WordPress eklentileriyle birçok işletme sitesine de farkında olunmadan kuruldu.

## Google bugün AMP’ye nasıl bakıyor?

Google’ın AMP belgesi durumu açıkça yazar ([Google Arama’da AMP hakkında](https://developers.google.com/search/docs/crawling-indexing/amp?hl=tr)):

- Google Arama, AMP sayfalarını diğer web sayfaları gibi dizine ekler.
- Sayfa oluşturulurken kullanılan teknolojiye bakılmaksızın tüm sayfalara aynı standardı uygular.
- AMP sayfaları, web’deki diğer sayfalar gibi zengin sonuç olarak görünebilir; yapılandırılmış veri eklemek bunu garanti etmez.
- Bir siteyi Google ile uyumlu hâle getirmeye dair en iyi uygulamaların tümü AMP için de geçerlidir.

Bu cümlelerin anlamı şudur: AMP bir ayrıcalık değil, sayfa yapmanın yollarından biridir. Hızlı ve iyi bir sayfa AMP olmadan da aynı değerlendirmeyi alır; yavaş ve kullanışsız bir AMP sayfası da avantaj kazanmaz.

Belge AMP’ye özel birkaç yönerge de koyar: AMP sayfası AMP HTML belirtimine uygun ve geçerli olmalı; kullanıcılar AMP sayfasında standart sayfadakiyle aynı içeriği görebilmeli ve mümkün olduğunca aynı işlemleri yapabilmeli; AMP adresi kullanıcı için anlamlı olmalı (alakasız bir alan adında değil, `ornek.com/amp/sayfa` gibi kendi sitenizde).

## AMP’nin maliyeti

AMP “bedava hız” değildir. İki sürümlü kurulumda:

1. **İki ayrı şablon bakımı.** Tasarım değişince AMP şablonu da güncellenmeli; çoğu zaman güncellenmez ve AMP sürümü eski, eksik bir site gibi kalır.
2. **İşlev kaybı.** Formlar, sohbet, rezervasyon aracı, çerez onayı, bazı ölçüm kodları AMP’de ya çalışmaz ya da özel bileşen gerektirir.
3. **Dönüşüm farkı.** AMP sürümünde telefon düğmesi, WhatsApp bağlantısı ya da teklif formu yoksa, mobil ziyaretçi talep bırakamaz ([iletişim formu ve WhatsApp düğmesi](/blog/iletisim-formu-ve-whatsapp-butonu-nasil-kurulur/)).
4. **Ölçüm karmaşası.** AMP sayfaları ayrı ölçüm kurulumu ister; yanlış kurulduğunda aynı ziyaretçi iki kez sayılır ya da hiç sayılmaz.
5. **Hata raporları.** Geçersiz AMP sayfaları Search Console’da sürekli uyarı üretir.

Google’ın “aynı içerik ve aynı işlemler” yönergesi tam bu noktayı hedefler: AMP sürümü, asıl sayfanın kırpılmış bir kopyası olmamalıdır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kimler için hâlâ anlamlı olabilir?

- **Sorunsuz çalışan, tek sürümlü (yalnızca AMP) siteler.** Sayfanın tamamı AMP ile yazılmışsa ve iş ihtiyaçlarını karşılıyorsa değiştirmek için neden yoktur.
- **Büyük haber yayıncıları.** Kendi teknik ekipleri ve AMP’ye bağlı gelir altyapıları olan yayıncılar kararı kendi verilerine göre verir.
- **Web Hikayeleri kullananlar.** Google, AMP sayfalarının Web Hikayeleri olarak da görünebildiğini belirtir; bu biçimi kullanan yayıncılar için AMP altyapısı gereklidir.

Yerel işletme, hizmet sitesi, katalog ve küçük e-ticaret için ise AMP’nin getirdiği yük, getirdiği faydadan büyüktür.

## Kararı veriyle verin

AMP’yi kaldırmadan önce bakılacaklar:

1. **Trafik payı.** Search Console’da Performans raporunu arama görünümüne göre filtreleyin: AMP sayfalarından gelen tıklama ne kadar?
2. **Standart sayfanın hızı.** Mobilde gerçek kullanıcı verisinde Core Web Vitals değerleri iyi mi ([Core Web Vitals nedir?](/blog/core-web-vitals-nedir-lcp-inp-cls/))? AMP’yi kaldırdığınızda ziyaretçi bu sayfaya inecek.
3. **Dönüşüm.** AMP sayfalarından gelen ziyaretçi talep bırakabiliyor mu?
4. **Bakım yükü.** AMP hataları ve şablon bakımı kaç saatinizi alıyor?

Standart sayfa mobilde yavaşsa önce onu düzeltin; AMP’yi kaldırıp ziyaretçiyi yavaş bir sayfaya göndermek kayıptır ([telefonda hızlı açılan site](/blog/telefonda-hizli-acilan-site/)).

## AMP’den güvenli çıkış adımları

İki sürümlü kurulumda sıra önemlidir:

1. **Standart sayfaları hazırlayın.** Mobil hız, içerik ve işlev açısından AMP sürümünden geri olmasınlar.
2. **Standart sayfalardan `rel="amphtml"` bağlantısını kaldırın.** Google böylece AMP sürümünü ilişkilendirmeyi bırakır.
3. **AMP adreslerini standart adreslere 301 ile yönlendirin.** `ornek.com/sayfa/amp/` → `ornek.com/sayfa/`. Dış bağlantılar ve yer imleri çalışmaya devam eder.
4. **Yönlendirmeleri tek adımda tutun** ([yönlendirme zincirleri](/blog/yonlendirme-zincirleri-ve-donguleri-nasil-duzeltilir/)).
5. **Site haritasında AMP adresi varsa çıkarın.**
6. **Eklentiyi en son kapatın.** WordPress’te AMP eklentisini kapatmak, yönlendirme kurulmadıysa tüm AMP adreslerini 404’e düşürür.
7. **Ölçümü güncelleyin.** AMP’ye özel ölçüm kurulumunu kaldırın; standart sayfalardaki olayların çalıştığını test edin.
8. **İzleyin.** Search Console’da AMP raporundaki sayfa sayısı azalır; standart sayfaların tıklaması artar. Birkaç hafta dalgalanma olağandır.

Yalnızca AMP ile yazılmış tek sürümlü sitede “çıkış” aslında yeni bir site yapmaktır; onu bir site yenileme projesi olarak planlayın ([site yenilerken SEO kaybı](/blog/web-sitesi-yenileme-seo-kaybetmeden-nasil-yapilir/)).

## AMP yerine ne yapılmalı?

AMP’nin hedefi hızdı; aynı hedefe tek sürümle ulaşılır:

- Görselleri doğru boyut ve biçimde sunun; ilk ekrandaki görseli öne alın, gerisini erteleyin ([görsel optimizasyonu](/blog/sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim/)).
- Gereksiz betik ve eklentileri kaldırın.
- Sayfa önbelleği ve iyi bir barındırma kullanın.
- Yazı tiplerini azaltın.
- Duyarlı tek tasarım kullanın; masaüstü ve mobilde aynı içerik bulunsun ([mobil öncelikli tasarım](/blog/mobil-oncelikli-tasarim-nedir-isletmeler-icin-rehber/)).

Bu işler bir kez yapılır ve tüm ziyaretçilere yarar; AMP ise yalnızca kendi sürümünü hızlandırır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir oto servisin WordPress sitesinde yıllar önce kurulmuş bir AMP eklentisi var. Mobil ziyaretçilerin çoğu AMP sayfasına iniyor; bu sayfalarda randevu formu ve telefon düğmesi yok.

- **Teşhis:** AMP sayfalarından gelen trafik yüksek, talep sıfıra yakın. Standart sayfa mobilde kabul edilebilir hızda.
- **Karar:** AMP kaldırılıyor. Önce standart sayfanın görselleri ve betikleri hafifletiliyor.
- **Uygulama:** `amphtml` bağlantısı kaldırılıyor, AMP adresleri 301 ile yönlendiriliyor, eklenti kapatılıyor.
- **İzleme:** Mobil taleplerin ve Core Web Vitals verisinin değişimi iki ay izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **AMP’nin sıralama avantajı verdiğini düşünmek.**
2. **AMP sürümünde form ve iletişim düğmelerini eksik bırakmak.**
3. **Eklentiyi yönlendirme kurmadan kapatmak.**
4. **Standart sayfa yavaşken AMP’yi kaldırmak.**
5. **AMP hatalarını yıllarca görmezden gelmek.**
6. **Yeni sitede alışkanlıkla AMP kurmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- AMP’nin trafik, hız ve talep üzerindeki payını verinizle çıkarırız,
- kalma ya da çıkma kararını birlikte veririz,
- çıkış için yönlendirme ve ölçüm planını uygularız,
- standart sayfalarınızı mobilde hızlandırırız.

Değerlendirme için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### AMP kullanmazsam sıralamam düşer mi?

Google, tüm sayfalara teknolojiden bağımsız aynı standardı uyguladığını belirtir. Hızlı ve kullanışlı bir sayfa AMP olmadan da değerlendirilir.

### Mevcut AMP sayfalarımı kaldırmalı mıyım?

Sorunsuz çalışıyor ve talep getiriyorsa zorunlu değil. Bakım yükü yüksek ya da işlev eksikse çıkmayı değerlendirin.

### AMP’yi kaldırırken en önemli adım ne?

AMP adreslerini standart adreslere 301 ile yönlendirmek ve eklentiyi bundan sonra kapatmak.

### AMP sayfasında form olmaması sorun mu?

Evet. Google, kullanıcıların AMP sayfasında mümkün olduğunca standart sayfadaki işlemleri yapabilmesini ister; ayrıca talep kaybedersiniz.

### Yeni siteme AMP kurmalı mıyım?

Çoğu işletme için hayır; tek, hızlı ve duyarlı bir sürüm yeterlidir.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’da AMP hakkında](https://developers.google.com/search/docs/crawling-indexing/amp?hl=tr)
