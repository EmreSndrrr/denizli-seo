---
title: "SEO Ajansına Hangi Hesap Yetkileri Verilmeli?"
description: "SEO ajansına hangi hesap yetkileri verilmeli? Search Console, GA4, İşletme Profili, alan adı ve site yönetimi için asgari yetki, sahiplik ve güvenlik rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Hesaplar ve verilen yetki seviyelerini gösteren anahtar ve kilit simgeleri"
---

SEO ajansına hesaplarınız için en az yetki ilkesiyle başlayın: ihtiyaç duydukları kadar, ihtiyaç duydukları sürece. Google’ın SEO uzmanı rehberi, uzmanın sizin için denetim yapması teklifinde Search Console’a yalnızca okuma erişimi vermenizi, bu aşamada yazma erişimi vermemenizi önerir. Diğer hesaplarda da aynı mantık geçerlidir: hesapların sahibi hep siz olun, ajansı kendi kullanıcı hesabıyla (şifre paylaşmadan) ekleyin ve yetkiyi işin gerektirdiği seviyede verin. Sahiplik ve devir, çalışma bittikten sonra sorun yaşamamanın temelidir.

Bu yazıda hangi hesaplarda hangi yetkinin makul olduğunu, sahipliğin neden sizde kalması gerektiğini, güvenlik önlemlerini ve çalışma sona erince erişimlerin nasıl kaldırılacağını anlatıyoruz. Ajans değişimi için [SEO ajansı değiştirirken hangi hesaplar teslim alınmalı?](/blog/seo-ajansi-degistirirken-hangi-hesaplar-teslim-alinmali/), teklif için [ilk sıra garantili SEO teklifleri nasıl değerlendirilir?](/blog/ilk-sira-garantili-seo-teklifleri-nasil-degerlendirilir/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Temel ilkeler

Her hesapta şu dört ilke işinizi görür:

1. **Sahip sizsiniz.** Hesap ya da mülk sizin e-postanızla ve işletme adınıza kurulu olmalı; ajans bu hesaba kullanıcı olarak eklenir.
2. **Şifre paylaşmayın.** Kullanıcılar kendi hesaplarıyla (örneğin Google Hesabı) davet edilir.
3. **En az yetki.** Önce okuma erişimi; gerekirse sonra düzenleme.
4. **Yazılı kayıt.** Kime, hangi hesapta, hangi yetki, hangi tarihte verildi; çalışma bitince kaldırılacak.

Google’ın SEO uzmanı rehberi bu mantığın temelini verir: uzmanınız bir SEO denetimi yapmayı teklif ederse işlemin kapsamını dikkatlice değerlendirin ve Search Console’a yalnızca okuma erişimi verin, bu aşamada yazma erişimi vermeyin ([SEO’ya mı ihtiyacınız var?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)).

## Hesap hesap yetki önerileri

| Hesap | Başlangıç yetkisi | Sonra gerekirse | Not |
| --- | --- | --- | --- |
| Search Console | Kısıtlı (okuma) kullanıcı | Tam kullanıcı | Sahiplik sizde; doğrulama sizin yönteminizle |
| GA4 | Görüntüleyici / Analist | Düzenleyici | Yönetici yetkisi yalnızca gerçekten gerekiyorsa |
| Google İşletme Profili | Yönetici | Sahip değil | Birincil sahip siz kalın |
| Google Tag Manager | Okuma | Yayınlama yetkisiz düzenleme | Etiket değişiklikleri izlenmeli |
| Alan adı kayıt hesabı | Erişim yok (ya da yalnızca DNS için geçici) | Geçici ve sınırlı | Sahiplik kesinlikle sizde |
| Barındırma / sunucu | Erişim yok ya da sınırlı | Geliştirici üzerinden | Hesap sahibi sizsiniz |
| İçerik yönetim sistemi (WordPress vb.) | Editör (içerik için) | Yönetici yalnızca teknik iş için | Ayrı kullanıcı; paylaşılan şifre yok |
| Reklam hesabı | Okuma | Standart | Yalnızca reklam yönetimi söz konusuysa |

Rol adları platformdan platforma değişir; mantık aynıdır: hangi işi yapacaksa o işe yetecek kadar.

> **Hizmet almak için iletişime geçin.** Hesaplarınızı güvenli ve sahipliği sizde kalacak biçimde birlikte kuralım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Search Console

Search Console’da sahiplik doğrulama yöntemleriyle kanıtlanır: HTML dosyası, HTML etiketi, Google Analytics, Google Etiket Yöneticisi ve DNS kaydı gibi yöntemler vardır; birden çok yöntem eklenebilir ([sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)). Doğrulamayı kendi hesabınızla yapın; ajansı kullanıcı olarak ekleyin. Ajans kendi hesabıyla mülk doğrularsa sahiplik onun adına kalır ve ayrılırken sorun çıkar. Doğrulama yöntemi olarak ajansa ait bir etiket ya da dosya bırakmayın; çalışma bitince kaldırılırsa doğrulama kaybolabilir.

Search Console verisinin sahibi olduğunuz sürece geçmişe erişirsiniz. Veriler sınırlı bir süre saklandığından düzenli dışa aktarmak da iyi bir alışkanlıktır ([GA4 veri saklama ayarı uzun dönem SEO analizlerini etkiler mi?](/blog/ga4-veri-saklama-ayari-uzun-donem-seo-analizleri/)).

## Google Analytics (GA4)

GA4’te hesap ve mülk sizin adınıza kurulmalı; ajans kullanıcı olarak eklenmelidir. Başlangıçta görüntüleme ya da analiz yetkisi yeterlidir; ölçüm kurulumu (etkinlik, dönüşüm, filtre) gerektiğinde düzenleme yetkisi verilebilir. Yönetici yetkisi, kullanıcı ekleme ve veri akışı değiştirme gibi geniş haklar içerdiğinden yalnızca gerçekten gerektiğinde ve sınırlı süreyle verilmelidir. Ölçüm ayarlarında yapılan değişikliklerin kaydı tutulmalı; yanlış bir filtre geçmiş veriyi etkileyebilir ([şirket içi ziyaretler GA4 raporlarından nasıl ayrılır?](/blog/sirket-ici-ziyaretler-ga4-raporlarindan-nasil-ayrilir/)).

## Google İşletme Profili

Google’ın yardım sayfasına göre profil için şifre paylaşmak gerekmez; her kullanıcının kendi Google Hesabı olmalıdır. İki ana rol vardır: sahip (tam kontrol: kullanıcı ekleme ve kaldırma, profili silme) ve yönetici (neredeyse aynı erişim ama kullanıcı ekleyip çıkaramaz, profili silemez). Birincil sahip yalnızca bir kişidir; yeni sahip ya da yönetici eklendiğinde bazı eylemler için 7 gün bekleme süresi uygulanır ([sahiplerini ve yöneticilerini yönetme](https://support.google.com/business/answer/3403100?hl=tr)). Birincil sahipliği yalnızca birincil sahip aktarabilir; ortak sahipler kendilerini birincil sahipliğe yükseltemez ([birincil sahipliği aktarma](https://support.google.com/business/answer/3415281?hl=tr)).

Bu nedenle ajansa “yönetici” rolü vermek çoğu zaman yeterlidir; birincil sahip siz kalın. Böylece ajans gönderi, fotoğraf, bilgi ve yorum yanıtlarını yönetebilir ama profili silemez ya da sizi çıkaramaz. Profil sahipliği sorunları için [Google İşletme Profili sahipliği nasıl devredilir?](/blog/google-isletme-profili-sahipligi-nasil-devredilir/) yazısına bakabilirsiniz.

## Alan adı, barındırma ve site yönetimi

Alan adı ve barındırma, sitenizin “mülkiyet belgeleridir”; bunlar ajansın adına kayıtlı olursa ayrılırken ciddi sorun çıkar ([alan adının süresi dolarsa Google görünürlüğü ne olur?](/blog/alan-adinin-suresi-dolarsa-google-gorunurlugu/)). Hesap sahibi siz olun; ajansa ihtiyaç halinde yalnızca DNS ya da barındırma işleri için geçici ve sınırlı erişim verin, işi bitince kaldırın. İçerik yönetim sisteminde (WordPress vb.) ajansa kendi kullanıcı hesabı açın: içerik yazan için editör, teknik iş yapan için gerektiği kadar yönetici. Paylaşılan tek bir yönetici şifresi vermeyin; kim ne yaptı izlenemez. Yedek alınmasını ve değişikliklerin kaydını isteyin ([web sitesi güvenliği: SSL, yedek ve güncelleme](/blog/web-sitesi-guvenligi-ssl-yedek-ve-guncelleme/)).

## Güvenlik önlemleri

- **İki aşamalı doğrulama.** Kendi ve ajans kullanıcı hesaplarında açık olsun.
- **Ortak e-posta ya da kişisel e-posta?** İşletme sahibi hesabı kurumsal ve sizin kontrolünüzdeki bir e-postayla açılsın.
- **Kullanıcı listesini gözden geçirin.** Üç ayda bir kimlerin hangi yetkiyle erişimi olduğuna bakın.
- **Eski kullanıcıları kaldırın.** Ayrılan çalışan ve eski ajans hesapları temizlensin.
- **Değişiklik kaydı isteyin.** Yapılan işlerin ve nedenlerinin paylaşılması; Google’ın rehberi de ajansa bunu sormayı önerir.
- **Gizli bilgi paylaşmayın.** Ödeme bilgisi, müşteri verisi gibi hassas bilgiler yetki gerektirmiyorsa gösterilmesin.

## Çalışma bitince ne yapılır?

Çalışma sona erdiğinde ya da ajans değiştiğinde şu adımları izleyin:

1. **Kullanıcı yetkilerini kaldırın.** Tüm hesaplarda ajansın kullanıcılarını silin.
2. **Sahipliği teyit edin.** Hesap ve mülklerin hâlâ sizin adınıza kayıtlı olduğundan emin olun.
3. **Doğrulama yöntemlerini kontrol edin.** Ajansa ait etiket ya da dosyalar kalktığında doğrulamanız bozuluyorsa önce kendi yönteminizi ekleyin.
4. **Verileri ve kayıtları alın.** Raporlar, dışa aktarmalar, yapılan iş listesi.
5. **Şifre ve anahtarları yenileyin.** Paylaşılmış olabilecek tüm şifreleri değiştirin.
6. **Reklam ve diğer entegrasyonları gözden geçirin.** Ajans adına kalan bağlantıları kesin.

Süreç sonrasında izleme için [SEO çalışması durdurulunca hangi veriler takip edilmeli?](/blog/seo-calismasi-durdurulunca-hangi-veriler-takip-edilmeli/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya mağazası ilk kez bir SEO ajansıyla çalışacak. Ajans her hesap için “yönetici yetkisi” ve ortak bir şifre istiyor.

Mağaza sahibi Google’ın rehberini ve profil yardım sayfasını okuyor, kendi yöntemini kuruyor: Search Console’a ajans için kısıtlı kullanıcı ekliyor; GA4’e analist yetkisi veriyor; İşletme Profili’nde ajansı yönetici yapıyor ama birincil sahip kendisi kalıyor; WordPress’te ajans için ayrı bir editör hesabı açıyor; alan adı ve barındırma erişimi vermiyor. İki aşamalı doğrulamayı açıyor ve yetkileri bir tabloya yazıyor. Ajans gerektiğinde teknik iş için geçici ek yetki istiyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Ajansa sahiplik vermek.** Hesaplar sizin adınıza kayıtlı olmalı.
2. **Şifre paylaşmak.** Kullanıcı davetini kullanın.
3. **Baştan tam yetki vermek.** Önce okuma erişimi.
4. **Yetki kaydı tutmamak.** Kimde ne var bilinmez.
5. **Çalışma bitince erişimleri kaldırmamak.** Güvenlik riski.
6. **Alan adı ve barındırmayı ajans adına kaydettirmek.** En ağır ayrılık sorunu.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- hesaplarınız için en az yetki ilkesine göre bir erişim tablosu hazırlar, sahipliği sizde bırakırız,
- bizim için talep ettiğimiz yetkileri gerekçeleriyle yazılı belirtir, işimiz bitince kaldırılmasını sağlarız,
- yaptığımız değişiklikleri nedenleriyle paylaşır, hesap güvenliği için iki aşamalı doğrulama öneririz,
- sonuç vaat etmeden, çalışma boyunca erişimleri düzenli gözden geçiririz.

Hesap yetkileriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Hesap yetkilerinizi güvenli bir düzene birlikte oturtalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Ajansa Search Console’da hangi yetkiyi vermeliyim?

Önce kısıtlı (okuma) erişim; Google bu aşamada yazma erişimi vermemenizi önerir. Düzeltme gerektiğinde yetkiyi artırabilirsiniz.

### İşletme Profili’nde ajansı sahip yapmalı mıyım?

Genellikle hayır. Yönetici rolü çoğu iş için yeterlidir; birincil sahip siz kalın.

### Ajans hesapları kendi adına kurduysa ne olur?

Ayrılırken veri ve sahiplik kaybı yaşanabilir. Hesapların sizin adınıza kurulmasını baştan şart koşun.

### Şifre paylaşmak neden riskli?

Kimin ne yaptığı izlenemez ve şifre başkalarının eline geçebilir. Kullanıcı daveti daha güvenlidir.

### Çalışma bitince hangi işlemler yapılmalı?

Kullanıcıları kaldırın, sahipliği teyit edin, doğrulamaları kontrol edin, verileri alın ve şifreleri yenileyin.

## Kaynaklar

- [Google Arama Merkezi: SEO’ya mı ihtiyacınız var? SEO uzmanı işe alma ipuçları](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)
- [İşletme Profili Yardım: İşletme profilinizin sahiplerini ve yöneticilerini yönetme](https://support.google.com/business/answer/3403100?hl=tr)
- [İşletme Profili Yardım: İşletme Profilinin birincil sahipliğini aktarma](https://support.google.com/business/answer/3415281?hl=tr)
- [Search Console Yardımı: Sitenin sahibi olduğunuzu doğrulama](https://support.google.com/webmasters/answer/9008080?hl=tr)
