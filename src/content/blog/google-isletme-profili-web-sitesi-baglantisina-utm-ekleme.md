---
title: "Google İşletme Profili Web Sitesi Bağlantısına UTM Ekleme"
description: "Google İşletme Profili web sitesi bağlantısına UTM nasıl eklenir? Parametre seçimi, GA4’te kaynak takibi, kanonik ve temizlik önerileri; adım adım rehber."
date: 2026-11-19
service: yerel-seo
imageAlt: "İşletme profilindeki web sitesi bağlantısının UTM parametreleriyle analiz raporuna ulaşması"
---

Google İşletme Profili’ndeki web sitesi bağlantısına UTM parametreleri eklemek, profilden gelen ziyaretleri analiz raporlarında ayrı görmenizi sağlar. UTM’siz bağlantıda profilden gelen ziyaretler, ayarlarınıza bağlı olarak genel organik trafiğin içinde karışabilir; UTM’li bağlantıda ise “bu ziyaretçi Google İşletme Profili’nden geldi” bilgisini ayırabilirsiniz. Önemli olan, parametreleri tutarlı yazmak, sayfanın standart adresini korumak ve yalnızca web sitesi bağlantısı için kullanmaktır.

Bu yazıda UTM’nin ne olduğunu, hangi parametrelerin kullanılacağını, profildeki bağlantıya nasıl ekleneceğini, GA4’te nasıl izleneceğini ve SEO açısından dikkat edilecek noktaları anlatıyoruz. UTM’li adreslerin SEO yönetimi için [UTM parametreli URL’ler SEO için nasıl yönetilir?](/blog/utm-parametreli-urller-seo-icin-nasil-yonetilir/), profil performansı için [işletme profili performans raporu nasıl okunur?](/blog/isletme-profili-performans-raporu-nasil-okunur/), hizmet tarafında [yerel SEO hizmeti](/yerel-seo/) sayfamıza bakabilirsiniz.

## UTM parametresi nedir?

UTM, bir adresin sonuna eklenen ve trafiğin nereden geldiğini analiz araçlarına bildiren etiketlerdir. Google Analytics’in özel kampanya URL’leri sayfası, adrese ekleyebileceğiniz parametreleri şöyle sıralar: `utm_source` (trafiği gönderen reklamveren, site ya da yayın), `utm_medium` (reklam ya da pazarlama aracısı, örneğin e-posta bülteni ya da banner), `utm_campaign` (ürüne yönelik ayrı kampanya adı, slogan, promosyon kodu), `utm_term` (ücretli arama anahtar kelimeleri) ve `utm_content` (benzer bağlantıları ayırt etmek için) ([özel kampanya verilerini görme](https://support.google.com/analytics/answer/1033863?hl=tr)).

Bir UTM’li adres şöyle görünür: `https://alanadi.com/?utm_source=google&utm_medium=organic&utm_campaign=isletme-profili`. Analiz aracı bu parametreleri okur ve ziyareti ilgili kaynağa atfeder.

## Profil bağlantısına neden UTM eklenir?

İşletme Profili, yerel işletmeler için önemli bir ziyaretçi kaynağıdır; ama web sitesi bağlantısından gelen ziyaretler UTM olmadığında genel trafiğin içinde görünebilir. UTM ile şunları yapabilirsiniz:

- **Profilden gelen ziyaretleri ayırmak.** Kaç kişi profilinizdeki bağlantıdan sitenize geldi?
- **Dönüşümü kaynağa bağlamak.** Profilden gelen ziyaretçilerin kaçı form doldurdu ya da WhatsApp’a tıkladı?
- **Farklı bağlantıları ayırmak.** Web sitesi, randevu ve menü bağlantıları için ayrı etiketler kullanmak.
- **Kampanya etkisini görmek.** Profil gönderilerindeki bağlantılar için ayrı kampanya adı vermek.

Profilin kendi performans raporu da web sitesi tıklamalarını gösterir; ama o rapor sitenizdeki sonraki davranışı göstermez. UTM ile ikisini birleştirirsiniz ([yerel SEO sonuçları nasıl ölçülür?](/blog/yerel-seo-sonuclari-nasil-olculur/)).

> **Hizmet almak için iletişime geçin.** Profilinizden gelen ziyaretleri ve dönüşümleri doğru ölçecek kurulumu birlikte yapalım. [Yerel SEO hizmetimizi](/yerel-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Hangi parametreler yazılmalı?

Basit ve tutarlı bir yapı yeterlidir. Örnek bir öneri (kendi isimlendirmenize göre uyarlayın):

| Parametre | Örnek değer | Anlamı |
| --- | --- | --- |
| `utm_source` | `google` | Trafik kaynağı |
| `utm_medium` | `organic` | Ortam; profil organik görünürlükten gelir |
| `utm_campaign` | `isletme-profili` | Kampanya ya da bağlantı konumu |
| `utm_content` | `web-sitesi` ya da `randevu` | İsteğe bağlı; hangi bağlantı |

Yazım kuralları: küçük harf, tire ile ayrılmış kelimeler, boşluk ve Türkçe karakter olmadan. Aynı değeri her yerde aynı yazın; `Isletme-Profili` ve `isletme-profili` analizde iki ayrı kampanya sayılabilir. `utm_term` genellikle ücretli aramalar içindir; profil bağlantısında gerekmez.

## Hangi bağlantıya UTM eklenir?

Profilde birkaç bağlantı alanı bulunabilir: web sitesi, randevu, sipariş, menü ya da ürün bağlantıları. Her biri için ayrı `utm_content` kullanmak hangi bağlantının kullanıldığını gösterir. Dikkat: işletme açıklamasında hiçbir türde bağlantıya izin verilmediği için UTM’li bir adresi açıklamaya yazmayın; bağlantıyı yalnızca web sitesi ve benzeri ayrılmış bağlantı alanlarına koyun ([Google İşletme Profili açıklaması nasıl yazılır?](/blog/google-isletme-profili-aciklamasi-nasil-yazilir/)).

Profil gönderilerindeki düğme bağlantıları için de ayrı bir kampanya adı verebilirsiniz ([Google İşletme Profili gönderileri nasıl paylaşılır?](/blog/google-isletme-profili-gonderileri-nasil-paylasilir/)).

## Adım adım nasıl eklenir?

1. **Hedef adresi belirleyin.** Genellikle ana sayfa ya da yerel hizmet sayfası; sitenizin standart adresini kullanın (HTTPS, tercih ettiğiniz www durumu, sonunda eğik çizgi).
2. **UTM’li adresi oluşturun.** Parametreleri tabloya göre elle yazın ya da bir kampanya URL oluşturucu kullanın.
3. **Adresi test edin.** Tarayıcıda açın; sayfa normal yükleniyor ve yönlendirme olmadan çalışıyor mu?
4. **Profili düzenleyin.** İşletme Profilinizin düzenleme bölümünde web sitesi alanına UTM’li adresi yapıştırın ([işletme profilinizi düzenleme](https://support.google.com/business/answer/3039617?hl=tr)).
5. **Düzenlemeyi kaydedin.** Düzenleme incelemeye girebilir; bu normaldir.
6. **Analizde kontrol edin.** Birkaç gün sonra GA4’te ilgili kaynağın veri alıp almadığına bakın.

## GA4’te nasıl izlenir?

GA4’te UTM değerleri trafik kaynağı boyutlarına dönüşür: `utm_source` kaynak, `utm_medium` ortam, `utm_campaign` kampanya olarak görünür. Analytics’in kaynak boyutlarını ve varsayılan kanal gruplarını anlatan sayfaları, bu değerlerin raporlara nasıl yansıdığını açıklar; varsayılan kanal grupları düzenlenemez, ama kaynak ve ortam değerlerine göre kanallara atanır ([varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)). Pratikte `google` kaynağı ve `organic` ortamı genellikle “Organik Arama” kanalında toplanır; profil ziyaretlerini ayrı görmek istiyorsanız kampanya (`utm_campaign`) boyutuna göre filtreleyin.

Yani “Organik Arama” kanalı içinde “isletme-profili” kampanyasına bakarak profil kaynaklı ziyaretleri ayırabilirsiniz. Kanalların nasıl atandığı ve doğrudan trafik karışıklığı için [organik ziyaretler GA4’te neden direct görünebilir?](/blog/organik-ziyaretler-ga4te-neden-direct-gorunebilir/) yazısına bakabilirsiniz.

## SEO açısından dikkat edilecekler

UTM’li adresler aynı sayfanın farklı adresleri gibi görünür; bu nedenle şunlara dikkat edin:

- **Sayfa kendi standart adresini göstermeli.** UTM’li adres açıldığında sayfanın standart (canonical) adresi parametresiz adres olmalı ([canonical etiketi nedir?](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
- **UTM’li adresleri site içinde kullanmayın.** İç bağlantılarda UTM kullanmak analiz verisini bozar ve gereksiz adres çoğaltır.
- **Site haritasına UTM’li adres koymayın.** Yalnızca standart adresler olsun.
- **Sadece dış kaynaklar için kullanın.** Profil, e-bülten ve reklam gibi.

Bu konuların ayrıntısı için [UTM parametreli URL’ler SEO için nasıl yönetilir?](/blog/utm-parametreli-urller-seo-icin-nasil-yonetilir/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir veteriner kliniği, profilinden gelen ziyaretlerin randevu formuna dönüşüp dönüşmediğini bilmiyor. GA4’te profilden gelen trafik genel organik trafiğin içinde kayboluyor.

Klinik profilin web sitesi alanına `https://alanadi.com/?utm_source=google&utm_medium=organic&utm_campaign=isletme-profili&utm_content=web-sitesi` adresini yazıyor; randevu bağlantısı için `utm_content=randevu` ekliyor. Sitenin canonical etiketi parametresiz adresi gösteriyor. Birkaç hafta sonra GA4’te “isletme-profili” kampanyasından gelen oturum ve randevu formu gönderimlerini görüyor. Bu örnek sonuç vaadi değildir; kurulum sırasını gösterir.

## Sık yapılan hatalar

1. **Her yerde farklı yazımlar kullanmak.** Büyük/küçük harf farkı verileri böler.
2. **UTM’yi açıklamaya yazmak.** Açıklamada hiçbir bağlantıya izin verilmez.
3. **İç bağlantılarda UTM kullanmak.** Analiz verisini bozar.
4. **Canonical’ı parametreli adrese vermek.** Standart adres parametresiz olmalı.
5. **Test etmeden yayınlamak.** Yönlendirme UTM’yi silebilir; sayfayı test edin.
6. **Sonucu raporlamamak.** Kurulum yapıp izlememek emeği boşa harcar.

## UTM isimlendirme şablonu

Ekip içinde herkesin aynı yazımı kullanması için kısa bir isimlendirme belgesi hazırlayın. Belgeye şunları yazın: kaynak her zaman `google`, ortam profil için `organic`, kampanya profil bağlantıları için `isletme-profili`, içerik ise bağlantının yerini gösteren tek kelime (`web-sitesi`, `randevu`, `menu`, `gonderi`). Gönderi bağlantılarında kampanya adına tarih ekleyebilirsiniz (`gonderi-2026-11`). Belgeye kullanılmayacak yazımları da ekleyin: büyük harf, boşluk ve Türkçe karakter. Her yeni UTM’li adres için tabloya satır ekleyin; böylece aylar sonra hangi adresin nerede kullanıldığını bilirsiniz. Bu küçük belge, analiz verisinin temiz kalmasını sağlar.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Yerel SEO hizmetimizde](/yerel-seo/):

- profilinizdeki web sitesi, randevu ve gönderi bağlantıları için tutarlı bir UTM şeması kurarız,
- GA4’te profil kaynaklı ziyaret ve dönüşümleri raporlayacak görünümü hazırlarız,
- standart adres, canonical ve yönlendirme ayarlarını kontrol ederiz,
- sonuç vaat etmeden, profil kaynaklı ziyaretçi ve dönüşümü izleriz.

Profil ölçümünüz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Profilinizden gelen ziyaretleri birlikte ölçelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [yerel SEO sayfamızda](/yerel-seo/) yazılı.

## Sık sorulan sorular

### Profil bağlantısına UTM eklemek zorunlu mu?

Hayır; ama profilden gelen ziyaretleri ayrı görmek ve dönüşümü kaynağa bağlamak için faydalıdır.

### UTM eklemek sıralamayı etkiler mi?

Doğrudan etkilemesi beklenmez. Standart adresi koruduğunuz sürece SEO açısından sorun yaşanmaz.

### Hangi utm_medium değerini kullanmalıyım?

Tutarlı olması yeterlidir. Birçok işletme profil için `organic` kullanır; ama kendi isimlendirme düzeninizi yazılı hâle getirin.

### Profil performans raporu ile GA4 verisi neden farklı?

Profil raporu profil içindeki tıklamaları, GA4 sitenizdeki oturumları sayar; ölçüm yöntemleri ve gecikmeler farklıdır, birebir eşleşmez.

### Eski bağlantıdaki UTM’yi nasıl değiştiririm?

Profil düzenleme bölümünde web sitesi alanını yeni adresle değiştirin ve kaydedin; incelemeyi bekleyin.

## Kaynaklar

- [Analytics Yardım: Özel kampanya verilerini görme (URL oluşturucu)](https://support.google.com/analytics/answer/1033863?hl=tr)
- [Analytics Yardım: Varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)
- [İşletme Profili Yardım: İşletme Profilinizi düzenleme](https://support.google.com/business/answer/3039617?hl=tr)
