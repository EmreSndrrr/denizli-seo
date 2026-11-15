---
title: "Ödeme Başka Alan Adındaysa Trafik Nasıl Ölçülür?"
description: "Rezervasyon ya da ödeme başka bir alan adındaysa trafik nasıl ölçülür? GA4 alanlar arası ölçüm, _gl parametresi, üçüncü taraf sistem sınırları ve test."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ana site ile ayrı alan adındaki ödeme sayfası arasında oturumun korunması"
---

Rezervasyon, randevu ya da ödeme adımı sitenizden farklı bir alan adında gerçekleşiyorsa, hiçbir ayar yapılmadığında ziyaretçi alan değiştirdiği anda GA4 onu yeni bir kullanıcı ve yeni bir oturum olarak sayar; satış da organik arama yerine kendi sitenizden gelen bir “yönlendirme”ye yazılır. Çözüm GA4’ün web alanları arası ölçümüdür: iki alan adına aynı etiketi koyar ve alan adlarını veri akışı ayarlarında tanımlarsınız; kimlik, bağlantıya eklenen `_gl` parametresiyle taşınır.

Bu kurulum yapılmadan “SEO kaç rezervasyon getirdi?” sorusu yanıtlanamaz. Ölçüm kurulumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Sorun tam olarak nedir?

Tipik durumlar:

- Otelin sitesi `ornekotel.com`, rezervasyon motoru `rezervasyon-saglayici.com/ornekotel`.
- Kliniğin sitesi kendi alan adında, randevu sistemi başka bir platformda.
- Mağaza vitrini bir alan adında, sepet ve ödeme e-ticaret altyapısının alan adında.
- Etkinlik sayfası sitede, bilet satışı bilet platformunda.

Google durumu şöyle açıklar: izin verildiğinde Analytics, her kullanıcı ve oturum için kimlik belirlemek üzere birinci taraf çerezlerini kullanır. Web alanları arası ölçüm olmadığında, kullanıcının ziyaret ettiği her alan için yeni kimlikli yeni çerezler oluşturulur; aynı cihazda iki farklı kök alanı ziyaret eden tek kullanıcı ayrı ayrı tanımlanır: bir kullanıcı ve bir oturum yerine iki kullanıcı ve iki oturum ([web alanları arası ölçümü ayarlama](https://support.google.com/analytics/answer/10071811?hl=tr)).

Rapora yansıması:

1. Google’dan gelen ziyaretçi sitenizi gezer (oturum 1: organik arama).
2. “Rezervasyon yap”a tıklar, diğer alan adına geçer (oturum 2: kaynak sizin siteniz, yani yönlendirme).
3. Satış oturum 2’ye yazılır. Organik arama raporunda satış sıfırdır.

## Çözüm: web alanları arası ölçüm

Google’a göre alanlar arası ölçüm açıkken, kullanıcı bir bağlantı ya da form aracılığıyla alanlar arasında gezinirken çerezler bir URL parametresi (`_gl`) ile bir alandan diğerine aktarılır ve aynı kimlikleri korur; Analytics yalnızca bir kullanıcı ve bir oturum tanımlar.

### Ön koşul: aynı etiket iki tarafta

Kapsama almak istediğiniz her alan adının her sayfasında, **aynı web veri akışından alınmış aynı etiket kimliği** (“G-” ile başlayan kimlik) bulunmalıdır. Bu, kurulumun yapılıp yapılamayacağını belirleyen koşuldur: ödeme alan adına kendi etiketinizi koyamıyorsanız alanlar arası ölçüm kurulamaz.

### Yönetici bölümünden kurulum

1. **Yönetici** > Veri toplama ve değiştirme > **Veri akışları**’nı açın, web veri akışınızı seçin.
2. **Etiket ayarlarını yapılandırın**’ı tıklayın.
3. Ayarlar bölümünde **Alanlarınızı yapılandırın**’ı tıklayın.
4. Aynı etiketi kullanan alanlar otomatik algılanıp öneri olarak gösterilir; **Ekle** ile kabul edin. Elle eklemek için **Koşul ekle** ile eşleme türünü seçip alan adını yazın.
5. Kaydedin.

Bunun için Düzenleyici rolü gerekir; 100 adede kadar koşul tanımlanabilir. Google ayrıca, normalde “giden tıklama” etkinliği tetikleyen bağlantıların, hedef bu listede tanımlı bir alansa yok sayıldığını belirtir; yani iki alan tek site gibi davranır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Çalıştığını doğrulama

Google’ın önerdiği test:

1. Sitenizde, diğer alana giden bağlantı ya da formun bulunduğu bir sayfayı açın.
2. Bağlantıya tıklayın ya da formu gönderin.
3. Hedef sayfanın düzgün açıldığını ve adres çubuğunda `_gl` parametresinin göründüğünü kontrol edin.

Google bir uyarı ekler: alanlar arası ölçüm adreslere parametre ekleyerek çalışır; nadir durumlarda hedef sunucu bu parametre yüzünden hata (5xx) verebilir. Parametre eklendiğinde sayfa bozuluyorsa karşı sistemin yöneticisiyle görüşün.

Ek kontroller:

- GA4 gerçek zamanlı raporunda geçiş sırasında yeni bir kullanıcı oluşmamalı.
- Birkaç gün sonra trafik edinme raporunda kendi alan adınız “yönlendirme” kaynağı olarak görünmemeli.
- Satın alma ya da rezervasyon etkinliği, oturumun asıl kaynağıyla (ör. organik arama) raporlanmalı.

`_gl` parametresi yönlendirme sırasında kayboluyorsa (ara sayfa, kısaltılmış bağlantı, betikle açılan pencere) kimlik taşınmaz; geçiş bağlantısının doğrudan hedef alana gitmesini sağlayın.

## Alt alan adları için gerekir mi?

`ornek.com` ile `rezervasyon.ornek.com` aynı kök alanın alt alan adlarıdır; çerez çoğu kurulumda zaten ortaktır ve alanlar arası ölçüm gerekmez. Google, farklı çerez alan adı kullanan alt alan adları arasında “kendine yönlendirme” oluşabileceğini not eder ve önlemler sayar: tüm sayfaların etiketli olması, tüm alt alan adlarının aynı çerez alan adını kullanması ve gerekirse alt alan adlarını istenmeyen yönlendirmeler listesine eklemek.

Bu, karar verirken işinize yarar: üçüncü taraf sistem özel alan adı (ör. `rezervasyon.ornekotel.com`) desteği veriyorsa, kurulumu bu biçimde istemek ölçümü kolaylaştırır.

## Karşı tarafa etiket koyamıyorsanız

Birçok rezervasyon, randevu ve ödeme platformu kendi sayfalarına sizin etiketinizi koymanıza izin vermez ya da bunu yalnızca üst paketlerde sunar. Seçenekler, tercih sırasıyla:

1. **Platformun kendi entegrasyonunu kullanın.** Bazı sistemler GA4 ölçüm kimliğinizi girebileceğiniz bir alan sunar. Varsa, alanlar arası ayarı da yapıp test edin.
2. **Onay sayfasını kendi sitenize döndürün.** İşlem bitince ziyaretçi sitenizdeki bir “teşekkürler” sayfasına yönlendiriliyorsa, dönüşümü orada sayabilirsiniz. Kaynak bilgisi kaybolabilir; ama dönüşüm sayısı elinizde olur. Geri dönen ziyaretin ödeme sağlayıcısına yazılmaması için o alan adını istenmeyen yönlendirmeler listesine ekleyin.
3. **Geçiş tıklamasını ölçün.** “Rezervasyon yap” düğmesine tıklamayı olay olarak kaydedin. Bu bir satış değil, niyet göstergesidir; ama organik aramadan gelenlerin kaçının rezervasyona yöneldiğini gösterir.
4. **Platformun raporunu elle eşleştirin.** Karşı sistemin satış raporunu tarih bazında alın; kendi sitenizdeki geçiş tıklamalarıyla yan yana koyun.
5. **Müşteriye sorun.** “Bizi nereden buldunuz?” sorusu hâlâ en dayanıklı yöntemdir ([talepleri ölçmek](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/)).

Rapor dili dürüst olmalı: “Organik aramadan gelen 420 ziyaretçinin 58’i rezervasyon sayfasına geçti; platform aynı dönemde toplam 31 rezervasyon bildirdi; hangisinin aramadan geldiği ölçülemiyor.”

## Ödeme sağlayıcısına gidip dönen ziyaretçi

Ödeme adımı bankanın ya da ödeme kuruluşunun sayfasında yapılıp ziyaretçi sitenize geri dönüyorsa, dönüşte kaynak “ödeme sağlayıcısı / yönlendirme” olarak görünür ve satış ona yazılır. Çözüm, bu alan adlarını etiket ayarlarındaki istenmeyen yönlendirmeler listesine eklemektir; böylece asıl kaynak korunur. Bankanın sayfasına etiket koymanız gerekmez ve mümkün de değildir.

## İzin bandı ve gizlilik

Alanlar arası ölçüm, iki sitede de ziyaretçi izni olduğunda çalışır. İzin bandı iki alan adında ayrı ayrı soruyorsa ve ziyaretçi ikincisinde reddederse zincir kopar ([çerez izinleri ve GA4](/blog/cerez-izinleri-ga4-organik-trafik-verisini-nasil-etkiler/)). Gizlilik metninizde verinin iki alan arasında aktarıldığını belirtmeniz gerekebilir; bunu hukuk danışmanınıza sorun.

## SEO açısından ek not

Ölçümün ötesinde, işlem adımının başka alan adında olması arama görünürlüğünü de etkiler: fiyat, müsaitlik ve ürün bilgisi karşı alandaysa sitenizdeki sayfalar bu içerikten yoksun kalır. Ana sitede hizmeti, fiyat aralığını ve koşulları anlatan gerçek sayfalar bulunsun; yalnızca “rezervasyon için tıklayın” düğmesinden ibaret bir site aramada zayıf kalır ([hizmet sayfası nasıl yazılır?](/blog/hizmet-sayfasi-nasil-yazilir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir butik otelin rezervasyonları üçüncü taraf bir rezervasyon motorunda alınıyor. GA4’te organik aramanın rezervasyon katkısı sıfır görünüyor.

- **Teşhis:** Rezervasyon motoru farklı alan adında; oturum geçişte bölünüyor. Sağlayıcı, GA4 kimliği girmeye ve özel alt alan adı kullanmaya izin veriyor.
- **Kurulum:** Rezervasyon motoru `rezervasyon.ornekotel.com` altına alınıyor, aynı etiket ekleniyor; ödeme sağlayıcısının alan adı istenmeyen yönlendirmelere ekleniyor.
- **Doğrulama:** Deneme rezervasyonuyla oturumun bölünmediği ve satın almanın organik aramaya yazıldığı görülüyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **İki alanda farklı ölçüm kimliği kullanmak.**
2. **Alanları tanımlamadan yalnızca etiketi eklemek.**
3. **`_gl` parametresini düşüren ara yönlendirmeler bırakmak.**
4. **Ödeme sağlayıcısını istenmeyen yönlendirmelere eklememek.**
5. **Ölçülemeyen satışı tahminle “SEO’dan geldi” diye raporlamak.**
6. **Kurulumu deneme işlemiyle test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- işlem akışınızı adım adım çıkarır, oturumun nerede bölündüğünü buluruz,
- mümkünse alanlar arası ölçümü kurar ve deneme işlemiyle doğrularız,
- mümkün değilse geçiş tıklaması ve eşleştirme raporu düzeni kurarız,
- raporda ölçülebileni ve ölçülemeyeni açıkça ayırırız.

Kurulum için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Alanlar arası ölçüm ne işe yarar?

Ziyaretçi bir alan adından diğerine geçtiğinde aynı kullanıcı ve aynı oturum olarak sayılmasını sağlar; satış doğru kaynağa yazılır.

### Kurulum için ne gerekir?

İki alan adında da aynı veri akışına ait aynı etiket ve alan adlarının veri akışı ayarlarında tanımlanması.

### Alt alan adı için de gerekir mi?

Çoğunlukla hayır; aynı kök alan adının alt alan adları çerezi paylaşır.

### Rezervasyon sistemine etiket koyamıyorum, ne yapabilirim?

Geçiş tıklamasını ölçün, varsa onay sayfasını sitenize döndürün ve platform raporuyla elle eşleştirin.

### Satışlar neden ödeme sağlayıcısından gelmiş görünüyor?

Ziyaretçi ödeme sayfasından döndüğünde kaynak değişir; sağlayıcının alan adını istenmeyen yönlendirmeler listesine ekleyin.

## Kaynaklar

- [Analytics Yardım: Web alanları arası ölçümü ayarlama](https://support.google.com/analytics/answer/10071811?hl=tr)
