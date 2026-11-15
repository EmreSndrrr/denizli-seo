---
title: "Çerez İzinleri GA4 Organik Trafik Verisini Nasıl Etkiler?"
description: "Çerez izinleri GA4’te organik trafik verisini nasıl etkiler? İzni reddeden ziyaretçiler, izin modu, modelleme eşikleri ve Search Console karşılaştırması."
date: 2026-11-15
service: teknik-seo
imageAlt: "Çerez izni veren ve reddeden ziyaretçilerin analitik verisine yansıması"
---

Sitenize çerez izin bandı koyduğunuzda, izni reddeden ziyaretçiler GA4 raporlarında eksik görünür: Google’ın ifadesiyle Analytics, izni reddeden kullanıcılara ait verileri toplamaz. Bu yüzden bant eklendikten sonra organik trafiğiniz düşmüş gibi görünebilir; oysa ziyaretçi sayısı değil, ölçülen kısım azalmıştır. Farkı anlamanın yolu Search Console tıklamalarıyla karşılaştırmaktır, çünkü Search Console çerezle değil arama kayıtlarıyla ölçer. İzin modu ve davranış modelleme kaybın bir kısmını tahminle kapatabilir, ama bunun veri eşikleri küçük siteler için yüksektir.

Bu yazı ölçüm etkisini anlatır; hangi izin metninin hukuken gerektiği konusu işletmenizin hukuk danışmanının işidir. Ölçüm kurulumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Çerez izni ölçümü neden değiştirir?

GA4, ziyaretçiyi ve oturumu tanımak için birinci taraf çerezleri kullanır. Ziyaretçi izin vermezse bu çerez yazılamaz; aynı kişinin iki sayfa görüntülemesi tek oturum olarak birleştirilemez, hangi kaynaktan geldiği ve talep bırakıp bırakmadığı izlenemez.

Google bunu bir örnekle açıklar: kullanıcılar izin vermediğinde etkinlikler kalıcı bir kullanıcı tanımlayıcısıyla ilişkilendirilmez; Analytics 10 sayfa görüntüleme topladığında bunun 10 kullanıcı mı yoksa 1 kullanıcı mı olduğunu gözlemleyip bildiremez ([izin modu için davranış modelleme](https://support.google.com/analytics/answer/11161109?hl=tr)).

Sonuç: izin bandının metni, düğmelerin yeri ve rengi bile raporlarınızdaki “organik trafik” sayısını değiştirir. İzin oranı %80’den %50’ye inerse, sitenize gelen kişi sayısı aynı kalsa da GA4’te trafik belirgin biçimde azalır.

## Üç kurulum, üç farklı veri

| Kurulum | İzin reddedilince ne olur? | Rapordaki etkisi |
|---|---|---|
| İzin bandı yok, etiket her zaman çalışır | Herkes ölçülür | Veri tam; hukuki uygunluk ayrı konu |
| Temel kurulum: etiket yalnızca izin verilince yüklenir | Reddeden ziyaretçiden hiçbir veri gitmez | Reddedenler tümüyle kayıp |
| Gelişmiş izin modu: etiket her durumda yüklenir | Çerezsiz, kimliksiz sinyaller gider | Kayıp kısmen modellenebilir |

Google’ın izin modu belgesine göre izin reddedildiğinde etkinleşen etiketler çerez depolamaz; kullanıcı etkinliği hakkında minimum düzeyde bilgi iletir. `analytics_storage='denied'` olduğunda Analytics’e çerezsiz ping’ler gönderilir; cihazda hiçbir Analytics çerezi ayarlanmaz ve mevcut çerezler okunmaz. GA4 bu çerezsiz ping’leri modelleme için kullanır ([izin modu](https://support.google.com/analytics/answer/9976101?hl=tr)).

Hangi kurulumun işletmeniz için hukuken uygun olduğuna siz ve danışmanınız karar verirsiniz; bu yazı yalnızca her birinin veriye etkisini gösterir.

## Davranış modelleme nedir?

Davranış modelleme, Analytics çerezlerini reddeden kullanıcıların davranışını, çerezleri kabul eden benzer kullanıcıların davranışına dayanarak tahmin eder. Yani raporda gördüğünüz sayının bir kısmı gözlem, bir kısmı tahmindir.

Küçük işletmeler için kritik nokta ön koşullardır. Google’a göre mülkün modellemeye uygun olması için:

1. İzin modu tüm sayfalarda etkin olmalı ve **gelişmiş uygulama** kullanılmalı (etiketler izin iletişim kutusu görünmeden önce yüklenmeli).
2. Mülk, en az 7 gün boyunca, `analytics_storage='denied'` içeren **günde en az 1.000 etkinlik** toplamalı.
3. Mülkte, son 28 günün en az 7 gününde etkinlik gönderen, `analytics_storage='granted'` olan **en az 1.000 günlük kullanıcı** bulunmalı.

Google ayrıca bu koşulları karşılamanın uygunluğu garanti etmediğini ekler. Günde yüz–iki yüz ziyaretçi alan bir yerel işletme sitesi bu eşiklere ulaşamaz; modelleme devreye girmez ve reddeden ziyaretçiler raporda basitçe yoktur.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Organik trafik raporuna somut etkileri

1. **Oturum ve kullanıcı sayısı düşük görünür.** Düşüş, bandın eklendiği ya da değiştirildiği tarihte basamak biçiminde başlar.
2. **Kaynak dağılımı kayabilir.** İzin oranı kanaldan kanala değişir; sosyal medyadan gelen ile aramadan gelen aynı oranda izin vermeyebilir. Organik aramanın payı gerçekte değişmeden raporda değişebilir.
3. **Dönüşümler eksik sayılır.** Form gönderen ama izin vermeyen ziyaretçi dönüşüm raporunda görünmeyebilir; oysa talep gelen kutunuzdadır.
4. **Yeni/geri gelen ayrımı bozulur.** Çerez yoksa her ziyaret yeni görünür.
5. **Dönem karşılaştırmaları yanıltır.** Bant öncesi ve sonrası dönemleri doğrudan kıyaslamak, olmayan bir düşüş gösterir.

## Gerçek düşüş mü, ölçüm kaybı mı?

Ayırmanın en güvenilir yolu, çerezden bağımsız kaynaklara bakmaktır:

- **Search Console tıklamaları.** Arama sonucundaki tıklamayı Google kendi tarafında sayar; izin bandından etkilenmez. GA4 organik oturumu düşerken Search Console tıklaması sabitse sorun ölçümdedir ([tıklamalar oturumlarla neden eşleşmez?](/blog/search-console-tiklamalari-ga4-oturumlariyla-neden-eslesmez/)).
- **Gerçek talepler.** Form kayıtları, telefon görüşmeleri, WhatsApp mesajları. Bunlar işin kendisidir ve analitikten bağımsız sayılabilir ([talepleri ölçmek](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/)).
- **Sunucu kayıtları.** Barındırma panelindeki ziyaret istatistikleri kaba ama izinden bağımsız bir karşılaştırma verir.
- **Google İşletme Profili verisi.** Profilden gelen arama ve yol tarifi etkileşimleri sitenizdeki çerezden etkilenmez.

İki çizgi birlikte düşüyorsa (Search Console ve GA4), düşüş gerçektir ([trafik düşüşü teşhisi](/blog/trafik-dususu-nasil-teshis-edilir/)).

## İzin oranını izleyin

İzin bandı aracınız büyük olasılıkla kaç ziyaretçinin kabul ettiğini, kaçının reddettiğini ve kaçının hiç yanıt vermediğini raporlar. Bu oranı aylık raporunuza ekleyin:

- Oran sabitse GA4 verisi “eksik ama tutarlı”dır; eğilimleri yorumlayabilirsiniz.
- Oran değiştiyse (yeni tasarım, yeni metin, yeni araç), o tarihi rapora not düşün; trafik grafiğindeki kırılmanın nedeni budur.
- Mobil ve masaüstünde oran farklı olabilir; bant mobilde ekranı kapatıyorsa ziyaretçi sayfayı terk de edebilir ([mobil pop-up’lar](/blog/mobil-pop-uplar-seoyu-nasil-etkiler/)).

Bandı, ziyaretçiyi yanıltarak “kabul”e iten biçimde tasarlamak (reddet düğmesini gizlemek gibi) hem güveni hem hukuki uygunluğu zedeler; veri uğruna bunu önermeyiz.

## Raporlamada nasıl anlatılır?

Aylık raporda üç satır işinizi görür:

1. **Arama görünürlüğü:** Search Console tıklaması ve gösterimi (tam veri).
2. **Site içi davranış:** GA4 oturum ve dönüşümleri, yanında izin oranı notuyla (kısmi veri).
3. **İş sonucu:** Gerçek talep sayısı (tam veri).

Yöneticiye söylenecek cümle: “Analitikteki sayı, izin veren ziyaretçileri gösterir; tamamını değil. Karar için arama tıklamasına ve gelen talebe bakıyoruz.” Rapor düzeni için [aylık SEO raporu](/blog/seo-raporu-nasil-okunur-aylik-rapor-sablonu/) yazısına bakın.

## Kurulumda dikkat edilecekler

- İzin bandı ile etiketin birbirine bağlı çalıştığını test edin: reddettiğinizde çerez yazılıyor mu, kabul ettiğinizde ölçüm başlıyor mu?
- Aynı sayfada hem doğrudan eklenmiş hem etiket yöneticisinden gelen iki ölçüm kodu bırakmayın; biri izni dinlemeyebilir.
- İzin tercihi sayfalar arasında korunmalı; her sayfada yeniden soran bant hem veriyi hem deneyimi bozar.
- Değişiklik tarihlerini kaydedin ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir estetik kliniği siteye çerez izin bandı ekliyor. Ertesi ay GA4’te organik oturumlar üçte bir azalıyor; yönetim SEO çalışmasının durduğunu düşünüyor.

- **Kontrol:** Search Console’da aynı dönemde tıklama sabit; randevu formu sayısı değişmemiş. İzin aracı raporunda ziyaretçilerin önemli bir bölümünün reddettiği ya da yanıt vermediği görülüyor.
- **Sonuç:** Düşüş ölçüm kaynaklı. Site, modelleme eşiklerinin çok altında trafik aldığı için kayıp raporda tahminle de kapanmıyor.
- **Düzen:** Aylık rapora izin oranı ekleniyor; başarı ölçütü Search Console tıklaması ve randevu talebi olarak belirleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **İzin bandı sonrası düşüşü SEO kaybı saymak.**
2. **Bant öncesi ve sonrası dönemleri doğrudan karşılaştırmak.**
3. **Küçük sitede modellemenin kaybı kapatacağını varsaymak.**
4. **İzin oranını hiç izlememek.**
5. **Dönüşümleri yalnızca analitikten saymak.**
6. **Ziyaretçiyi yanıltan izin tasarımıyla veri toplamaya çalışmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- izin bandı ile ölçüm etiketinin birlikte doğru çalıştığını test ederiz,
- GA4 verisini Search Console ve talep kayıtlarıyla karşılaştırırız,
- raporlarınıza izin oranını ve veri sınırlarını açıkça yazarız,
- kararları tam veriye dayanan ölçütlerle almanızı sağlarız.

Ölçüm denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Çerez bandı ekledim, trafiğim düştü mü?

Büyük olasılıkla ölçülen kısım azaldı. Search Console tıklamalarıyla karşılaştırın; orada düşüş yoksa trafik yerindedir.

### İzin vermeyen ziyaretçi GA4’te hiç görünmez mi?

Kuruluma bağlıdır. Temel kurulumda hiç veri gitmez; gelişmiş izin modunda çerezsiz sinyaller gider ve yeterli veri varsa modellenir.

### Davranış modelleme küçük sitede çalışır mı?

Genellikle hayır. Google günde en az 1.000 reddedilmiş etkinlik ve 1.000 izinli kullanıcı gibi eşikler ister.

### Search Console çerez izninden etkilenir mi?

Hayır. Arama sonucundaki tıklama ve gösterimi Google kendi tarafında sayar.

### Hangi izin kurulumunu seçmeliyim?

Bu hukuki bir karardır; işletmenizin danışmanına sorun. Biz her seçeneğin ölçüme etkisini gösteririz.

## Kaynaklar

- [Analytics Yardım: Web sitelerinde ve mobil uygulamalarda izin modu](https://support.google.com/analytics/answer/9976101?hl=tr)
- [Analytics Yardım: İzin modu için davranış modelleme](https://support.google.com/analytics/answer/11161109?hl=tr)
