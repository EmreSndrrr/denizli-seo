---
title: "Katalog ve PDF İndirmeleri GA4’te Nasıl Ölçülür?"
description: "Katalog ve PDF indirmeleri GA4’te nasıl ölçülür? file_download etkinliği, desteklenen dosya türleri, önemli etkinlik yapma, sınırlar ve raporlama adımları."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sitedeki katalog PDF bağlantısına tıklanması ve GA4’te file_download etkinliği olarak görünmesi"
---

Katalog ve PDF indirmeleri GA4’te, gelişmiş ölçüm (enhanced measurement) açıksa çoğu zaman otomatik ölçülür: bir kullanıcı sitenizdeki PDF, Excel, Word, sunum, sıkıştırılmış dosya, video ya da ses dosyasına giden bir bağlantıya tıkladığında GA4 `file_download` etkinliğini toplar. Etkinlik dosya adı, uzantısı, bağlantı metni ve bağlantı adresi gibi parametreleri taşır. Katalog indirmenizi bir iş hedefi olarak izlemek istiyorsanız bu etkinliği “önemli etkinlik” (key event) olarak işaretleyebilirsiniz.

Bu yazıda otomatik ölçümün nasıl çalıştığını, hangi dosyaların kapsandığını, hangi durumlarda çalışmayabileceğini, nasıl doğrulanıp raporlanacağını ve verinin nasıl yorumlanacağını anlatıyoruz. Dosyaların arama görünürlüğü için [PDF dosyaları için SEO nasıl yapılır?](/blog/pdf-dosyalari-icin-seo-nasil-yapilir/), GA4 temel raporlar için [Google Analytics 4: işletmeler için temel raporlar](/blog/google-analytics-4-temel-raporlar-isletmeler-icin/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## GA4 dosya indirmeyi nasıl ölçer?

Analytics’in gelişmiş ölçüm etkinlikleri sayfasına göre `file_download` etkinliği, kullanıcı şu dosya türlerinden birine (yaygın bir dosya uzantısına sahip) yönlendiren bağlantılara tıkladığında tetiklenir: doküman, metin, yürütülebilir dosya, sunum, sıkıştırılmış dosya, video ve işitsel dosya. Sayfa etkinliği tetikleyen uzantıları şu normal ifadeyle başlayan dosya uzantıları olarak listeler: pdf, xls/xlsx, doc/docx, txt, rtf, csv, exe, key, pps/ppt/pptx, 7z, pkg, rar, gz, zip, avi, mov, mp4, mpg/mpeg, wmv, mid/midi, mp3, wav ve wma. Etkinlik şu parametreleri taşır: `file_extension`, `file_name`, `link_classes`, `link_id`, `link_text` ve `link_url` ([gelişmiş ölçüm etkinlikleri](https://support.google.com/analytics/answer/9216061?hl=tr)).

Yani katalog PDF’iniz bağlantı olarak sayfada duruyor ve gelişmiş ölçümde “dosya indirmeleri” açıksa, kullanıcı bağlantıya tıkladığında GA4 bunu kaydeder. Ek bir kod yazmanıza gerek yoktur.

## Ölçüm hangi durumlarda çalışmaz?

Otomatik ölçüm her koşulda yeterli olmayabilir:

- **Gelişmiş ölçümde dosya indirmeleri kapalı.** Ayarı kontrol edin.
- **Dosya bağlantısı JavaScript ile açılıyorsa.** Tıklama gerçek bir dosya bağlantısı üzerinden olmadıysa etkinlik tetiklenmeyebilir.
- **Dosya bir form ya da yönlendirme arkasında.** İndirme bir form gönderimi sonrasında farklı bir adresten başlıyorsa tıklama ölçülmeyebilir.
- **Dosya uzantısı listede yok.** Listede olmayan bir uzantı (örneğin farklı bir sunum biçimi) etkinliği tetiklemez.
- **Dosya adresi uzantısız.** Uzantısı olmayan adreslerde (örneğin `/indir?id=12`) otomatik ölçüm çalışmaz.
- **Çerez izni ve veri sınırlamaları.** Kullanıcı izin vermediğinde veri eksik gelebilir ([çerez izinleri GA4 organik trafik verisini nasıl etkiler?](/blog/cerez-izinleri-ga4-organik-trafik-verisini-nasil-etkiler/)).
- **Dosya başka bir alan adında barınıyorsa.** Alanlar arası ölçüm gerekebilir.
- **Tarayıcıda açılan PDF.** Kullanıcı bağlantıya tıklayınca PDF tarayıcıda açılır; bu da tıklama olarak ölçülür ama gerçek “indirme” olmayabilir. Yani etkinlik tıklamayı sayar, dosyanın tam indirildiğini değil.

> **Hizmet almak için iletişime geçin.** Katalog ve dosya indirmelerinizi doğru ölçecek kurulumu birlikte yapalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Kurulum ve doğrulama adımları

1. **Gelişmiş ölçüm ayarını kontrol edin.** GA4 veri akışınızın gelişmiş ölçüm bölümünde dosya indirmeleri seçeneğinin açık olduğundan emin olun.
2. **Dosya bağlantılarını gerçek bağlantı yapın.** Katalog düğmesi `<a href="/dosyalar/katalog.pdf">` gibi doğrudan dosyaya gitmeli ([Google’ın takip edebileceği bağlantılar: href ve onclick](/blog/googlein-takip-edebilecegi-baglantilar-href-onclick/)).
3. **Test edin.** Sitede katalog bağlantısına tıklayın ve DebugView ya da gerçek zamanlı raporda `file_download` etkinliğini, `file_name` ve `file_extension` değerleriyle birlikte görün.
4. **Önemli etkinlik olarak işaretleyin (isteğe bağlı).** Katalog indirmesi iş hedefinizse etkinliği önemli etkinlik yaparak dönüşüm raporlarında izleyin. Birden fazla dosya varsa yalnızca katalog için ayrı bir koşul (örneğin dosya adı) tanımlayabilirsiniz.
5. **Parametreleri raporlayın.** `file_name` ve `link_text` gibi parametreleri raporlarda görmek için gerekirse etkinlik kapsamlı özel boyut tanımlayın.
6. **Sonuçları izleyin.** Birkaç gün sonra indirme sayısını ve hangi sayfalardan geldiğini inceleyin.

Arayüz zamanla değişebilir; menü adları farklıysa Analytics yardım sayfasını izleyin.

## Hangi sorular cevaplanır?

Dosya indirme verisi şu soruların cevabına yardımcı olur:

- **Hangi katalog ve doküman çok indiriliyor?** `file_name` kırılımıyla.
- **İndirmeler hangi sayfalardan geliyor?** Sayfa yolu ve açılış sayfası kırılımıyla.
- **Organik ziyaretçiler katalog indiriyor mu?** Organik kanal filtresiyle ([GA4’te organik açılış sayfaları nasıl incelenir?](/blog/ga4te-organik-acilis-sayfalari-nasil-incelenir/)).
- **İndirenler sonrasında iletişime geçiyor mu?** İndirme ile form ya da telefon dönüşümü arasındaki ilişkiyi kullanıcı yolunda görün.
- **Hangi bağlantı metni daha çok tıklanıyor?** `link_text` ile bağlantı metinlerini karşılaştırın.

Bu bilgiler, kataloğun nerede ve nasıl sunulacağına dair kararlara temel olur.

## Katalog stratejisi için notlar

Ölçüm yaparken katalogun kendisini de gözden geçirin. Kataloğun güncel olması, boyutunun makul olması ve mobilde rahat açılması indirme oranını etkiler. Katalog içeriği Google’da da bulunabilir olabilir; indirilebilir PDF’leri arama görünürlüğü açısından yönetmek için [PDF dosyaları için SEO nasıl yapılır?](/blog/pdf-dosyalari-icin-seo-nasil-yapilir/) yazısına bakın. Toptan ya da fiyatsız katalog sunuyorsanız [toptan satış sitesinde fiyatsız ürün sayfası hazırlamak](/blog/toptan-satis-sitesinde-fiyatsiz-urun-sayfasi-hazirlamak/) yazısı da yararlıdır. Katalogu bir form arkasına almak isterseniz (e-posta karşılığı indirme), kullanıcı deneyimi ve ölçüm ayrıca planlanmalıdır; formun gönderimi için ayrı bir etkinlik (`form_submit` ya da özel etkinlik) izleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili üreticisi, sitesinde toptan satış kataloğunu PDF olarak sunuyor ve kaç kişinin indirdiğini bilmiyor. GA4’te dosya indirme etkinliği görünmüyor.

İşletme gelişmiş ölçümde dosya indirmelerinin açık olduğunu görüyor; ama katalog düğmesi bir JavaScript açılır penceresiyle çalışıyor ve gerçek bir `href` içermiyor. Geliştirici düğmeyi doğrudan PDF’e giden gerçek bir bağlantıya çeviriyor. DebugView’da `file_download` etkinliği ve `file_name` değeri görülüyor; etkinlik önemli etkinlik olarak işaretleniyor. İki hafta sonra işletme organik kanaldan gelenlerin indirme oranını ve sonrasında iletişim formu dolduranların payını izliyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Gelişmiş ölçümü kontrol etmemek.** Kapalıysa etkinlik toplanmaz.
2. **Dosya bağlantısını JavaScript düğmesine bağlamak.** Gerçek bağlantı olmadan etkinlik tetiklenmeyebilir.
3. **Tıklamayı indirme sanmak.** Etkinlik tıklamayı ölçer; PDF tarayıcıda açılabilir.
4. **Test etmemek.** DebugView ile doğrulayın.
5. **Önemli etkinlik tanımlamamak.** İş hedefini raporlarda ayrıştırın.
6. **Dosya adlarını anlamsız bırakmak.** `katalog-2026.pdf` gibi okunabilir adlar raporu kolaylaştırır.

## Katalog bağlantısını ölçüme uygun tasarlamak

Ölçüm başarısı çoğu zaman bağlantının nasıl tasarlandığına bağlıdır. Katalog düğmesini gerçek bir `<a href>` bağlantısı olarak kurun; bağlantı metnini “Kataloğu indir (PDF)” gibi açık yazın; dosya adını okunabilir tutun (`katalog-2026.pdf`). Aynı kataloğu sitenin birden çok yerinde sunuyorsanız (ana sayfa, ürün sayfası, altbilgi), `link_text` ve sayfa yolu sayesinde hangi yerin daha çok tıklandığını görebilirsiniz. Yeni bir katalog sürümü yayınladığınızda dosya adı değişirse raporda iki ayrı dosya görünür; bunu bilerek eski ve yeni sürümleri toplayarak yorumlayın. Katalog güncel değilse bağlantıyı kaldırmak yerine yeni sürüme yönlendirmek, ziyaretçiyi kaybetmemenizi sağlar.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- katalog ve doküman bağlantılarınızı ölçüm açısından kontrol eder, `file_download` etkinliğini DebugView ile doğrularız,
- gerektiğinde önemli etkinlik, özel boyut ve rapor kurulumunu hazırlarız,
- indirme verisini organik trafik ve iletişim dönüşümleriyle birlikte okuruz,
- sonuç vaat etmeden, dosya ve katalog kullanımını düzenli izleriz.

Ölçümünüz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Katalog indirmelerinizi birlikte ölçülebilir hâle getirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### GA4 PDF indirmeyi otomatik ölçer mi?

Gelişmiş ölçümde dosya indirmeleri açıksa ve bağlantı bir PDF’e (ya da listedeki diğer uzantılara) gidiyorsa `file_download` etkinliği otomatik toplanır.

### Hangi dosya türleri kapsanır?

PDF, Excel, Word, metin, sunum, sıkıştırılmış dosya, video ve ses gibi yaygın uzantılar. Listede olmayan uzantılar için özel ölçüm gerekir.

### Etkinliği iş hedefi yapabilir miyim?

Evet; `file_download` etkinliğini ya da belirli bir dosya için koşullu bir etkinliği önemli etkinlik olarak işaretleyebilirsiniz.

### Tıklama ile gerçek indirme aynı mı?

Hayır. Etkinlik bağlantıya tıklamayı ölçer; PDF tarayıcıda açılıyorsa dosya fiilen indirilmemiş olabilir.

### Katalog bir form arkasındaysa nasıl ölçerim?

Form gönderimini ayrı bir etkinlik olarak izleyin; indirme tıklaması ile form gönderimini birlikte değerlendirin.

## Kaynaklar

- [Analytics Yardım: Gelişmiş ölçüm etkinlikleri (dosya indirmeleri)](https://support.google.com/analytics/answer/9216061?hl=tr)
- [Analytics Yardım: Google Analytics raporlarına genel bakış (GA4)](https://support.google.com/analytics/answer/9212670?hl=tr)
