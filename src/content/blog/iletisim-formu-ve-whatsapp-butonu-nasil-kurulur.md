---
title: "İletişim Formu ve WhatsApp Butonu Nasıl Kurulur?"
description: "İletişim formu ve WhatsApp butonu nasıl kurulur? wa.me bağlantısı, hazır mesaj, form alanları, spam önleme, mobil yerleşim, ölçüm ve gizlilik notları adım adım."
date: 2026-11-12
service: web-tasarim
imageAlt: "Sitede iletişim formu ve sabit WhatsApp butonu yerleşimi"
---

İletişim formu ve WhatsApp butonu, ziyaretçiyi müşteriye çeviren iki ana kapıdır. WhatsApp butonu için `https://wa.me/90XXXXXXXXXX` biçiminde, ülke koduyla yazılmış (başında 0 ve + olmadan) bir bağlantı kullanılır; isterseniz `?text=` ile hazır bir mesaj eklenir. Form ise kısa olmalıdır: ad, telefon, kısa not. Her ikisini de mobilde baş parmakla kolay basılacak yere koyun, gelen mesajlara hızlı dönün ve tıklamaları ölçün. Kişisel veri topladığınız için amacını açıkça söyleyin.

Birçok işletme sitesinde iletişim yolu ya hiç yoktur ya da öyle saklıdır ki müşteri vazgeçer. Oysa yerel hizmetlerde (klima servisi, klinik, temizlik) müşteri çoğu zaman sayfayı okumadan önce “hemen yazabilir miyim?” diye bakar. Bu yazıda iki kanalı kurmanın teknik ve pratik tarafını anlatıyoruz. Sayfanın bilgi tarafı için [iletişim sayfası SEO’su](/blog/iletisim-sayfasi-seo-su-adres-telefon-ve-harita/), kampanya sayfaları için [açılış sayfası nasıl hazırlanır?](/blog/acilis-sayfasi-landing-page-nasil-hazirlanir/) yazılarına bakabilirsiniz.

## Neden iki kanal birden?

Müşteriler aynı biçimde iletişim kurmaz. Kimi arar, kimi yazar, kimi form doldurur. Kanalların güçlü ve zayıf yanları farklıdır:

| Kanal | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Telefon araması | En hızlı, sıcak temas | Mesai dışında cevapsız kalır |
| WhatsApp | Hızlı, fotoğraf gönderilebilir, müşteri alışkın | Mesaj takibi dağınık kalabilir |
| İletişim formu | Düzenli kayıt, mesai dışında da çalışır | Doldurması zahmetli bulunabilir |
| E-posta | Resmî yazışma, belge ekleme | Cevap beklentisi yavaş |

Hepsini sunmak zorunda değilsiniz; ama müşterinizin alışkın olduğu en az iki kanalı verin. Fiziksel işletmelerde telefon ve WhatsApp çoğu zaman yeterli bir ikilidir; formun işi, mesai dışında gelen talepleri toplamaktır.

## WhatsApp butonu nasıl kurulur?

WhatsApp’ın kendi bağlantı biçimi `wa.me` adresidir. Telefon numarası uluslararası biçimde, başında artı ve sıfır olmadan yazılır. Türkiye için `90` ile başlar, ardından 10 haneli numara gelir. Örnek (numara hayalîdir):

```html
<a href="https://wa.me/905000000000?text=Merhaba%2C%20klima%20bak%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
   rel="noopener" target="_blank">WhatsApp ile yazın</a>
```

Bu biçim WhatsApp’ın bağlantı sistemidir; sitenizdeki bir Google kuralı değildir ve WhatsApp bu biçimi ileride değiştirebilir. Bu yüzden kurulumdan sonra bağlantıyı telefonda gerçekten deneyin.

### Hazır mesaj (text parametresi)

`?text=` ile müşterinin göndereceği mesajın ilk hâlini yazabilirsiniz. Mesaj adres satırında kodlanır (boşluk `%20`, Türkçe karakterler kodlu). Çoğu site yönetim paneli ya da çevrimiçi “URL kodlama” araçları bunu yapar. Hazır mesajın faydası, işletmenin neyle ilgili yazıldığını bilmesidir: “Merhaba, [hizmet] için bilgi almak istiyorum.” Sayfaya göre farklı mesaj kullanabilirsiniz; klima bakımı sayfasında bakım, montaj sayfasında montaj mesajı.

### Butonu nereye koymalı?

1. **Sabit (yüzen) buton:** Ekranın sağ altında; mobilde en rahat basılan bölge. Ama içeriği ya da başka bir butonu kapatmasın.
2. **Üst çubukta ve hizmet sayfalarında:** İlgili hizmetin yanında “WhatsApp ile yazın” bağlantısı.
3. **İletişim sayfasında:** Telefon, adres ve haritayla birlikte.
4. **Teşekkür sayfasında:** Form gönderildikten sonra “acil ise WhatsApp’tan yazın” notu.

### WhatsApp için dikkat edilecekler

- **İşletme numarası kullanın.** Kişisel numarayı sitede yayımlamak sonradan sorun yaratır; ayrı bir işletme hattı daha düzenlidir.
- **Çalışma saatlerini yazın.** “Hafta içi 09:00–18:00 arası dönüş yapıyoruz.” Müşteri beklentisini yönetir.
- **İlk cevabı hazırlayın.** Sık gelen sorulara kısa şablonlar tutun (adres, çalışma saati, fiyat nasıl belirlenir).
- **Müşteri bilgisini korumak sizin sorumluluğunuzda.** Konuşmaları ve fotoğrafları gereksiz yere paylaşmayın.

## İletişim formu nasıl kurulur?

### Form alanları

Her ek alan, formu doldurma oranını düşürür. Başlangıç için şu alanlar çoğu işletmeye yeter:

- **Ad soyad:** zorunlu mu?: Evet; not: Tek alan, ayrı ad ve soyad gerekmez
- **Telefon:** zorunlu mu?: Evet; not: Geri dönüş için
- **E-posta:** zorunlu mu?: İsteğe bağlı; not: Zorunlu yapmayın; çoğu müşteri telefon bırakır
- **Hizmet / konu:** zorunlu mu?: Seçmeli liste; not: Mesajı doğru kişiye yönlendirir
- **İlçe / adres:** zorunlu mu?: Hizmete göre; not: Servis işlerinde faydalıdır
- **Mesaj:** zorunlu mu?: İsteğe bağlı; not: Kısa tutun
- **Onay kutusu:** zorunlu mu?: Gerekirse; not: Kişisel veri bilgilendirmesi için

### Adım adım kurulum

1. **Aracı seçin.** Site paneliniz (WordPress eklentisi gibi), yazılımcınızın yazdığı bir form ya da hazır bir form hizmeti.
2. **Alanları belirleyin.** Yukarıdaki tabloya göre, mümkün olduğunca az alan.
3. **Gönderimi e-postaya ve kayda bağlayın.** Mesaj hem e-postanıza düşsün hem bir listede saklansın; böylece kaybolmaz.
4. **Spam korumasını ekleyin.** Basit bir gizli “tuzak alanı” (honeypot), zaman sınırı ya da doğrulama aracı; spam, formu işe yaramaz hâle getirir.
5. **Teşekkür mesajı ve sayfası hazırlayın.** “Mesajınız alındı, en geç … içinde dönüyoruz” gibi, sözünüzü tutabileceğiniz bir süreyle.
6. **Gizlilik bilgisini ekleyin.** Formun altında, kişisel verinin ne için kullanılacağını anlatan kısa bir metin ve gizlilik sayfasına bağlantı. Hukuki gereklilikler için bir uzmana danışın; bu yazı hukuki danışmanlık değildir.
7. **Test edin.** Kendiniz doldurun, e-postanın geldiğini, spam klasörüne düşmediğini doğrulayın.
8. **Telefonda deneyin.** Klavyenin alanları kapatıp kapatmadığına, telefon alanında sayısal klavye açılıp açılmadığına bakın.

### Form ve SEO

Form SEO’yu doğrudan yükseltmez; ama Google’ın yardımcı içerik rehberi, kullanıcının ihtiyacını karşılayan, güvenilir bir deneyimi önerir ([yardımcı içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)). Sayfada açık adres, telefon ve ulaşılabilir bir form, işletmenin gerçek ve ulaşılabilir olduğunu gösterir. Teknik olarak formun bulunduğu sayfanın hızlı açılması ve mobil uyumlu olması önemlidir; bkz. [mobil uyumluluk nasıl test edilir?](/blog/mobil-uyumluluk-nasil-test-edilir/)

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Mobilde yerleşim

Google, dizine ekleme ve sıralama için sitenizin mobil sürümünü esas alır ([mobil öncelikli dizine ekleme](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)). Ziyaretçilerin önemli bir kısmı da telefondan gelir; bu yüzden:

- Butonlar parmakla kolay basılacak büyüklükte olsun, birbirine çok yakın durmasın.
- Telefon numarası tıklanabilir olsun (`tel:` bağlantısı).
- Form alanları tek sütunda, büyük yazıyla olsun.
- Yüzen buton, çerez uyarısı ya da başka bir pencereyle çakışmasın.
- Sayfa yüklenirken buton aniden yer değiştirmesin; ani kayma ziyaretçiyi yanlış yere tıklatır. Düzen kayması için Core Web Vitals yazısına bakın.

## Ölçüm: hangi kanal işe yarıyor?

Kurup bırakmayın. Hangi kanalın müşteri getirdiğini bilmek, bütçe ve zaman kararlarını değiştirir:

- **Form gönderimi:** Teşekkür sayfasının ziyaret sayısı
- **WhatsApp tıklaması:** Buton tıklamasını analiz aracında olay olarak kaydedin
- **Telefon tıklaması:** `tel:` bağlantısı tıklaması
- **Kaynak:** Hangi sayfa ve hangi aramadan geldi?
- **Gerçek sonuç:** Gelen talebin kaçı müşteriye döndü? (kendi kaydınızla)

Tıklama sayısı gerçek müşteri sayısı değildir; talebin sonucunu kendi kaydınızda tutun. Ölçüm yaklaşımı için [yerel SEO sonuçları nasıl ölçülür?](/blog/yerel-seo-sonuclari-nasil-olculur/) yazısına bakın.

## Cevap hızı ve alışkanlıklar

Teknik kurulum yarım iştir. Müşteri bir mesaj bıraktığında ilk cevap hızı çoğu zaman rekabeti belirler.

1. **Sorumlu kişi belirleyin.** Mesajlara kimin bakacağı belli olsun.
2. **Dönüş süresi koyun ve tutun.** Yapamayacağınız süreyi yazmayın.
3. **Mesai dışı otomatik mesaj kullanın.** “Mesajınızı aldık, yarın 09:00’dan sonra döneceğiz.”
4. **Bir kayıt listesi tutun.** Kim yazdı, ne istedi, ne oldu.
5. **Spam ve alakasız mesajları temizleyin.** Önemli talepler kaybolmasın.

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık yapılan hatalar

- **Form çok uzun:** 3–4 alana indirin
- **E-posta alanını zorunlu yapmak:** Telefon yeterli olabilir
- **Formun e-postası spam’e düşer:** Gönderen adresini ve e-posta ayarlarını test edin
- **WhatsApp numarasında ülke kodu hatası:** `90` ile başlayan, sıfırsız biçim
- **Yüzen buton içeriği kapatır:** Konumu ve boyutu mobilde deneyin
- **Teşekkür sayfası yok:** Gönderimi ölçmek için ayrı sayfa
- **Gelen mesajlara geç dönmek:** Dönüş süresi ve sorumlu belirleyin
- **Kişisel veri bilgisi eksik:** Kısa bilgilendirme ve gizlilik sayfası
- **Müşteri mesajlarını kişisel telefonda tutmak:** İşletme hattı kullanın

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisi, sitesinde yalnızca sayfanın en altında bir telefon numarası yazıyor. Düzenleme: üst çubuğa tıklanabilir telefon eklenir; hizmet sayfalarına “WhatsApp ile yazın” bağlantısı konur ve her sayfada farklı bir hazır mesaj tanımlanır (bakım, montaj, tamir); iletişim sayfasında üç alanlı bir form (ad, telefon, hizmet) kurulur; form gönderimi hem e-postaya düşer hem bir listeye kaydedilir; teşekkür sayfasında çalışma saatleri yazılır. Bir ay sonra işletme hangi kanaldan kaç talep geldiğine bakar. Bu örnek bir sonuç vaadi değildir; kurulum düzenini gösterir.

## Yayın öncesi kontrol listesi

Şunları tek tek kontrol edin:

- WhatsApp bağlantısı telefonda doğru numarayı açıyor mu?
- Hazır mesaj okunaklı ve Türkçe karakterler doğru mu?
- Telefon numarası tıklanabilir mi?
- Form alanları en aza indirilmiş mi?
- Spam koruması var mı?
- Form e-postası gerçekten geliyor mu?
- Teşekkür sayfası ve ölçüm kurulu mu?
- Kişisel veri bilgilendirmesi ve gizlilik bağlantısı var mı?
- Yüzen buton mobilde içeriği kapatıyor mu?
- Dönüş süresi ve sorumlu kişi belli mi?

## Denizli SEO bu konuda nasıl yardımcı olur?

İletişim kanalları, sitenin işe dönüştüğü yerdir. [SEO uyumlu web tasarım hizmetimizde](/web-tasarim/):

- sitenize işletmenizin çalışma biçimine uygun form ve WhatsApp kurulumunu planlarız,
- butonları ve formu mobilde kolay kullanılacak şekilde yerleştiririz,
- form gönderimi ve buton tıklamalarını ölçülebilir hâle getiririz,
- sayfa hızını ve mobil uyumu bozmayacak hafif çözümler seçeriz,
- yaptığımız işleri yazılı rapor olarak sunarız; belirli bir talep sayısı ya da sıralama garantisi vermeyiz.

Sitenizdeki iletişim yollarının nasıl çalıştığına bakmamızı isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### WhatsApp butonu SEO’ya yardım eder mi?

Doğrudan sıralama etkisi iddia etmiyoruz; müşterinin size ulaşmasını kolaylaştırır ve işletmenin ulaşılabilir olduğunu gösterir.

### Yüzen WhatsApp butonu sayfayı yavaşlatır mı?

Hafif bir bağlantı ya da düğme yavaşlatmaz; ağır sohbet eklentileri yavaşlatabilir. Kurulumdan sonra hızı ölçün.

### Form mu WhatsApp mı daha iyi?

Müşteri kitlenize bağlıdır; ikisini de sunmak ve hangisinin daha çok kullanıldığını ölçmek en doğrusudur.

### Formda captcha kullanmalı mıyım?

Spam çoksa evet; ama zor doğrulamalar müşteriyi kaçırabilir. Önce gizli tuzak alanı gibi görünmez önlemleri deneyin.

### Gelen mesajlar için KVKK’da ne yapmalıyım?

Bu yazı hukuki danışmanlık değildir; aydınlatma metni ve veri saklama konularında bir hukuk uzmanına danışın.

## Kaynaklar

- [Google Search Central: yardımcı, güvenilir, insan öncelikli içerik oluşturma](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)
- [Google Search Central: mobil öncelikli dizine ekleme en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=tr)
- [web.dev: Core Web Vitals’ı anlama (LCP, INP, CLS)](https://web.dev/articles/vitals?hl=tr)
