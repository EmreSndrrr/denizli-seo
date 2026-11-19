---
title: "GA4’te Site İçi Arama Takibi Nasıl Kurulur?"
description: "GA4’te site içi arama takibi nasıl kurulur? view_search_results etkinliği, gelişmiş ölçüm, arama parametresi, özel boyut ve raporlama adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Site içi arama kutusuna yazılan ifadenin GA4’te arama terimi olarak raporlanması"
---

GA4’te site içi arama takibi, çoğu sitede gelişmiş ölçüm (enhanced measurement) açıksa varsayılan olarak çalışır: kullanıcı bir arama sonuçları sayfası görüntülediğinde GA4 `view_search_results` etkinliğini toplar ve aranan ifadeyi `search_term` parametresiyle kaydeder. Etkinlik, arama sonuç adresinde q, s, search, query ve keyword parametrelerinden biri bulunduğunda tetiklenir; sitenizin arama adresi farklı bir parametre kullanıyorsa bunu yapılandırmanız gerekir. Kurulumu doğrulamak için arama yapıp DebugView ya da gerçek zamanlı raporda etkinliği görmek yeterlidir.

Bu yazıda site içi arama takibinin nasıl çalıştığını, hangi adımlarla doğrulanıp yapılandırılacağını, arama terimlerinin nasıl raporlanacağını ve verinin nasıl kullanılacağını anlatıyoruz. Verinin içerik planına dönüşümü için [site içi aramalardan yeni içerik konuları nasıl çıkarılır?](/blog/site-ici-arama-verilerinden-icerik-konusu-cikarma/), GA4 temel raporları için [Google Analytics 4: işletmeler için temel raporlar](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## GA4 site içi aramayı nasıl ölçer?

Analytics’in gelişmiş ölçüm etkinlikleri sayfasına göre site arama etkinliği `view_search_results`, kullanıcıya her arama sonuçları sayfası sunulduğunda (bunun göstergesi URL sorgu parametresidir) tetiklenir. Varsayılan olarak etkinlik, aşağıdaki beş parametreden biri adreste bulunduğunda çalışır: `q`, `s`, `search`, `query` ve `keyword`. Dilerseniz etkinliği diğer URL sorgu parametrelerini arayacak şekilde yapılandırabilirsiniz. `search_term` parametresi Arama terimi boyutunu doldurur; isteğe bağlı olarak toplanacak ek bir sorgu parametresi de belirtebilirsiniz ([gelişmiş ölçüm etkinlikleri](https://support.google.com/analytics/answer/9216061?hl=tr)).

Yani çoğu sitede ayrıca bir kod yazmanız gerekmez: arama sonuç sayfasının adresi örneğin `alanadi.com/?s=halı` ya da `alanadi.com/arama/?q=halı` biçimindeyse ve gelişmiş ölçümde site arama seçeneği açıksa GA4 aramayı otomatik toplar.

## Kurulum adımları

1. **Sitenizin arama adresini belirleyin.** Sitede bir şey arayın ve sonuç sayfasının adresine bakın; hangi parametre kullanılıyor (`?s=`, `?q=`, `?arama=` gibi)?
2. **Gelişmiş ölçümü kontrol edin.** GA4 yönetici ayarlarında veri akışınızın gelişmiş ölçüm bölümünde “Site araması” seçeneğinin açık olduğundan emin olun.
3. **Parametre varsayılanlardan biriyse bitti.** q, s, search, query ya da keyword kullanıyorsanız ek ayar gerekmez.
4. **Parametre farklıysa yapılandırın.** Gelişmiş ölçümün site arama ayarında kendi parametrenizi (örneğin `arama`) ekleyin.
5. **Test edin.** Sitede bir arama yapın; DebugView ya da gerçek zamanlı raporda `view_search_results` etkinliğinin ve `search_term` değerinin geldiğini görün.
6. **Raporlamayı hazırlayın.** Arama terimini rapor ve keşiflerde kullanmak için gerekirse özel tanım ve boyut oluşturun (aşağıda).

Arayüzdeki menü adları zamanla değişebilir; güncel adım için Analytics yardım sayfasını izleyin.

> **Hizmet almak için iletişime geçin.** Site içi arama takibinizi kurup doğrulayalım ve verinizi içerik planına dönüştürelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Sitenizde arama adresi parametre kullanmıyorsa

Bazı arama bileşenleri sonucu adres çubuğunda parametre göstermeden (arama kutusu AJAX ile sonuç gösterir) sunar. Bu durumda GA4 varsayılan etkinliği tetikleyemez. Seçenekler:

- **Aramayı parametreli adrese taşımak.** Geliştiriciden arama sonuçlarının `?s=` ya da `?q=` gibi adreslerde gösterilmesini isteyin; bu aynı zamanda aramanın paylaşılabilir ve ölçülebilir olmasını sağlar.
- **Özel etkinlik göndermek.** Geliştirici, arama yapıldığında `view_search_results` benzeri bir etkinliği `search_term` parametresiyle GA4’e göndersin (etiket yöneticisi ya da doğrudan kod ile).
- **Arama eklentisinin kendi ayarını kullanmak.** Bazı arama eklentileri GA4 entegrasyonu sunar.

Hangi yolun seçileceği sitenizin yazılımına bağlıdır; geliştirici ile konuşurken “arama sonuçları gerçek adreste ve parametreyle gösterilsin” isteği en basit ve sürdürülebilir çözümdür.

## Arama terimleri nasıl raporlanır?

`search_term` parametresi, Arama terimi boyutunu doldurur. Raporlarda bu boyutu görmek için şu yollar kullanılır:

- **Etkinlik raporunda.** `view_search_results` etkinliğine tıklayıp parametre kırılımına bakın.
- **Keşiflerde.** Boş bir keşif oluşturup “Arama terimi” boyutu ve “Etkinlik sayısı” ölçüsüyle bir tablo hazırlayın.
- **Özel boyutla.** Standart raporlarda görmek için `search_term` parametresini etkinlik kapsamlı özel boyut olarak tanımlayabilirsiniz.
- **Looker Studio.** Düzenli raporlama için GA4 verisini Looker Studio’ya bağlayıp arama terimi tablosu kurabilirsiniz ([Looker Studio ile SEO paneli nasıl hazırlanır?](/blog/looker-studio-ile-seo-paneli-nasil-hazirlanir/)).

Raporda şu soruları sorun: en çok aranan ifadeler neler? Aramadan sonra hangi sayfaya gidildi? Aramadan sonra dönüşüm (form, telefon) var mı? Hiç sonuç çıkmayan ifadeler hangileri (bu bilgi için sitenin kendi arama kaydı gerekebilir)?

## Verileri temiz tutmak

Arama verisi, gerçek ziyaretçi davranışını yansıtmalıdır:

- **Şirket içi aramaları ayıklayın.** Ekibinizin testleri veriyi çarpıtır ([şirket içi ziyaretler GA4 raporlarından nasıl ayrılır?](/blog/sirket-ici-ziyaretler-ga4-raporlarindan-nasil-ayrilir/)).
- **Bot trafiğini kontrol edin.** Otomatik aramalar anlamsız terimler üretebilir ([GA4’te bot trafiği nasıl fark edilir?](/blog/ga4te-bot-trafigi-nasil-fark-edilir/)).
- **Kişisel veriyi toplamayın.** Ziyaretçiler arama kutusuna ad, telefon ya da e-posta yazabilir; analiz araçlarına kişisel olarak tanımlanabilir bilgi göndermekten kaçınmalısınız. Arama terimlerinden bu tür veriyi ayıklayacak bir yapı kurun ve gerekirse arama kutusuna “kişisel bilgi yazmayın” uyarısı ekleyin.
- **Aynı ifadelerin varyasyonlarını gruplayın.** “halı”, “Halı”, “hali” aynı niyet olabilir.

## Veriyi nasıl kullanırsınız?

Arama verisi üç iş için değerlidir: eksik içerik fikri (ziyaretçi aradı ve bulamadı), menü ve site yapısı düzeltmesi (sık aranan şey menüde yok) ve dönüşüm analizi (aramayı kullananlar daha mı çok dönüşüyor?). Ayrıntı için [site içi aramalardan yeni içerik konuları nasıl çıkarılır?](/blog/site-ici-arama-verilerinden-icerik-konusu-cikarma/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili e-ticaret sitesinde arama kutusu var ama GA4’te arama etkinliği hiç görünmüyor. İşletme sitede “nevresim” araması yapınca adres çubuğunda `alanadi.com/ara/nevresim` görüyor; parametre yok.

Geliştirici arama sonuçlarının `alanadi.com/ara/?q=nevresim` adresinde gösterilmesini sağlıyor. Gelişmiş ölçümde site araması açık olduğundan GA4 `view_search_results` etkinliğini ve `search_term` değerini toplamaya başlıyor. İşletme DebugView’da testi doğruluyor, Keşiflerde bir arama terimi tablosu kuruyor ve ay sonunda en çok aranan ifadelere göre içerik planı yapıyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Gelişmiş ölçümü kontrol etmemek.** Kapalıysa arama toplanmaz.
2. **Arama adresinin parametresini bilmemek.** Hangi parametre kullanıldığını bulun.
3. **Test etmemek.** DebugView ile doğrulayın.
4. **Özel boyut tanımlamadan standart raporda arama terimi aramak.** Keşiflerden başlayın ya da özel boyut tanımlayın.
5. **Kişisel veriyi analize göndermek.** Arama terimlerinden ayıklayın.
6. **Verinin dışında karar vermek.** Küçük örneklemde tek ifadeye anlam yüklemeyin.

## Arama verisinden ilk rapor: üç tablo

Kurulumu bitirdikten sonra ilk raporunuzu üç basit tabloyla hazırlayın. Birinci tablo: en çok aranan yirmi ifade ve her birinin arama sayısı. İkinci tablo: aramadan sonra dönüşüm yapanların (form, telefon, WhatsApp) payı; arama yapan ziyaretçiler dönüşüyor mu, dönüşmüyor mu? Üçüncü tablo: aramanın yapıldığı sayfalar; ziyaretçiler hangi sayfada aradığını bulamayıp arama kutusuna yöneliyor? Bu üç tablo, hem içerik eksiklerini hem menü ve sayfa düzeni sorunlarını gösterir. İlk iki ay veriyi toplayın, ardından kararlar alın; birkaç günlük veriyle sonuç çıkarmayın.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin arama adresini ve GA4 gelişmiş ölçüm ayarını kontrol eder, gerekirse geliştiriciye net talimat veririz,
- `view_search_results` etkinliğini DebugView ile doğrular, arama terimi raporunu hazırlarız,
- kişisel veri ve şirket içi trafik filtrelerini planlarız,
- sonuç vaat etmeden, verinin içerik ve menü kararlarına dönüşümünü destekleriz.

Site içi aramanız için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Site içi arama takibinizi birlikte kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### GA4 site içi aramayı otomatik izler mi?

Gelişmiş ölçümde site araması açıksa ve arama sonuç adresi q, s, search, query ya da keyword parametrelerinden birini içeriyorsa evet.

### Arama terimini raporda nerede görürüm?

`view_search_results` etkinliğinin `search_term` parametresinde; Keşifler ya da özel boyutla raporlayabilirsiniz.

### Arama adresimde parametre yok, ne yapmalıyım?

Aramayı parametreli bir adreste göstermesi için geliştiriciden yardım isteyin ya da özel etkinlik gönderin.

### Arama verisi kişisel bilgi içerebilir mi?

Ziyaretçiler arama kutusuna kişisel bilgi yazabilir. Bu tür veriyi ayıklayacak bir yapı kurun ve analize göndermeyin.

### Hiç sonuç çıkmayan aramaları GA4 gösterir mi?

GA4 aranan terimi toplar; sonuç sayısını göstermek için sitenin kendi arama kaydına ya da özel etkinliğe ihtiyaç duyabilirsiniz.

## Kaynaklar

- [Analytics Yardım: Gelişmiş ölçüm etkinlikleri (site arama)](https://support.google.com/analytics/answer/9216061?hl=tr)
- [Analytics Yardım: Google Analytics raporlarına genel bakış (GA4)](https://support.google.com/analytics/answer/9212670?hl=tr)
