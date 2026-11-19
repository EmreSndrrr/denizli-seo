---
title: "Site İçi Aramalardan Yeni İçerik Konuları Nasıl Çıkarılır?"
description: "Site içi arama verilerinden yeni içerik konuları nasıl çıkarılır? GA4 ve site arama kayıtlarını okuma, sonuçsuz aramalar, gruplama ve içerik planı."
date: 2026-11-19
service: icerik-seo
imageAlt: "Site içi arama kutusuna yazılan ifadelerin içerik konularına dönüşmesi"
---

Site içi arama, ziyaretçilerin sitenizde aradığını bulamadığında yazdığı ifadelerdir; bu yüzden eksik içeriğin en dürüst listesidir. Ziyaretçi bir ifadeyi arama kutusuna yazıyorsa ya menüde bulamamıştır ya da sayfanız o soruyu yeterince cevaplamıyordur. Bu ifadeleri toplayıp gruplayarak yeni yazı konuları, eksik hizmet sayfaları ve menü iyileştirmeleri çıkarabilirsiniz.

Bu yazıda site içi arama verisinin nereden alınacağını, nasıl okunacağını, sonuç çıkmayan aramaların neden özellikle değerli olduğunu ve verinin içerik planına nasıl çevrileceğini anlatıyoruz. Ölçümün kurulumu için [GA4’te site içi arama takibi nasıl kurulur?](/blog/ga4te-site-ici-arama-takibi-nasil-kurulur/), içerik tarafındaki desteğimiz için [içerik SEO hizmeti](/icerik-seo/) sayfamıza bakabilirsiniz.

## Site içi arama verisi nereden alınır?

Üç kaynak vardır:

1. **GA4.** Gelişmiş ölçüm açıksa `view_search_results` etkinliği, URL’de aşağıdaki beş parametreden biri (q, s, search, query, keyword) bulunduğunda varsayılan olarak tetiklenir; dilerseniz bu parametreleri özelleştirebilirsiniz ([Gelişmiş ölçüm etkinlikleri](https://support.google.com/analytics/answer/9216061?hl=tr)). Arama ifadesini raporlarda görmek için ilgili parametrenin özel boyut olarak tanımlanması gerekebilir.
2. **Sitenin kendi arama kaydı.** Birçok içerik yönetim sistemi ve e-ticaret yazılımı, yapılan aramaları ve sonuç sayısını yönetim panelinde tutar.
3. **Tema ya da eklenti raporları.** Arama eklentileri kendi panolarını sunabilir.

Sitenizde arama kutusu hiç yoksa bu veri de olmaz. Küçük bir kurumsal sitede arama kutusunun gerekli olup olmadığına karar vermek için ziyaretçi davranışına bakın; çok sayfalı, çok ürünlü ya da bilgi ağırlıklı sitelerde arama kutusu genellikle işe yarar.

## Veriyi okumaya nereden başlanır?

Aylık ya da üç aylık dışa aktarma alın ve şu sütunlarla bir tablo kurun: arama ifadesi, arama sayısı, aramadan sonra çıkış oranı ya da sonuç sayısı, ifadenin geçtiği sayfalar. Ardından üç liste çıkarın:

- **En çok aranan ifadeler.** İlk yirmi ifade, ziyaretçilerin en çok neyi aradığını gösterir.
- **Sonuç çıkmayanlar.** Sitede karşılığı olmayan ifadeler.
- **Aramadan sonra siteden çıkılanlar.** Ziyaretçi aradı ama bulamadı ya da beğenmedi.

Üçüncü liste için GA4’te aramadan sonra yapılan etkileşimlere bakmak gerekebilir; bu analiz kurulumunuza bağlıdır.

> **Hizmet almak için iletişime geçin.** Site içi arama verinizi içerik planına birlikte çevirelim. [İçerik SEO hizmetimizi](/icerik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Sonuç çıkmayan aramalar neden değerlidir?

Ziyaretçi bir şeyi aradı ve bulamadı: bu, doğrudan bir içerik boşluğudur. Bu ifadelerin üç olası nedeni vardır:

1. **Sitede gerçekten yok.** Yeni bir hizmet sayfası, ürün ya da yazı gerekir.
2. **Sitede var ama farklı adla geçiyor.** Ziyaretçi “koltuk yıkama” yazıyor, siz “döşeme temizliği” demişsiniz. Sayfaya müşterinin kullandığı sözcüğü ekleyin.
3. **Yazım ya da ek farkı.** “Merkezefendi” yerine “merkez efendi” yazılmış olabilir; arama kutusunu daha toleranslı hâle getirmek gerekebilir.

Bu ayrım önemlidir: ilk durum yeni içerik, ikinci durum mevcut içeriğin dilini düzeltmek, üçüncü durum teknik bir arama ayarıdır.

## Aramalar içerik konularına nasıl dönüşür?

Çıkan ifadeleri niyetine göre gruplayın:

| Arama ifadesi örneği | Anlamı | Karar |
| --- | --- | --- |
| “fiyat”, “ücret” | Fiyat bilgisi aranıyor | Fiyat bölümü ya da “neye göre değişir” sayfası |
| “adres”, “harita”, “çalışma saatleri” | İletişim bilgisi bulunamıyor | İletişim sayfasını ve menüyü gözden geçir |
| Hizmet adı (sitenizde olmayan) | Eksik hizmet | Yeni hizmet sayfası ya da bölümü |
| Soru ifadeleri (“nasıl”, “kaç gün”) | Bilgi arayışı | Rehber yazı ya da SSS maddesi |
| Marka ya da ürün kodu | Belirli ürün aranıyor | Ürün sayfası ve iç bağlantı |

Bu tablo, içerik takviminizi tahmine değil gerçek ziyaretçi davranışına dayandırır. Bir ifade sürekli aranıyor ve karşılığı yoksa listenin en üstüne yazın. Soru biçimindeki ifadeler için [otomatik tamamlama taraması](/blog/google-otomatik-tamamlamadan-icerik-konusu-bulma/) ile aynı soruların Google’da nasıl sorulduğunu da karşılaştırabilirsiniz.

## Menü ve site yapısı için ne söyler?

Arama verisi yalnızca yazı konusu vermez; menünüzün zayıf noktalarını da gösterir. Ziyaretçi hizmetinizi menüden bulamıyor ve aramayı kullanıyorsa, menü başlığı müşteri dilinden uzak olabilir. “Çözümlerimiz” gibi belirsiz bir menü başlığı yerine “Halı yıkama” gibi açık bir başlık denenebilir. İletişim ya da fiyat bilgisi çok aranıyorsa bu bilgiye daha görünür bir yer verin ([menü ve site yapısı nasıl planlanır?](/blog/menu-ve-site-yapisi-nasil-planlanir/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de ev tekstili üreten bir firmanın sitesinde arama kutusu var. Üç aylık kayıtta en çok aranan ifadeler şunlar: “toptan”, “nevresim takımı ölçüleri”, “Çardak” (fabrika konumu) ve “katalog”. Sonuç çıkmayan ifadeler arasında “özel üretim” ve “ihracat” da var.

Firma şu kararları veriyor: “toptan” için toptan satış bilgileri sayfası hazırlanıyor ([toptan satış sitesinde fiyatsız ürün sayfası](/blog/toptan-satis-sitesinde-fiyatsiz-urun-sayfasi-hazirlamak/)); “nevresim takımı ölçüleri” için ölçü tablosu içeren bir rehber yazı yazılıyor; “özel üretim” için ayrı bir hizmet sayfası planlanıyor; “katalog” bağlantısı menüye ve ürün sayfalarına taşınıyor. Bu örnek bir sonuç vaadi değildir.

## Veri toplarken nelere dikkat edilmeli?

- **Kişisel bilgiyi saklamayın.** Ziyaretçiler arama kutusuna ad, telefon ya da e-posta yazabilir. Analizde bunlar çıkarılmalı; analiz araçlarına kişisel veri gönderilmemelidir.
- **Yetersiz hacimde sonuç çıkarmayın.** Birkaç yüz arama içeren küçük bir sitede tek bir ifadeye aşırı anlam yüklemeyin; üç aylık veriyi birleştirin.
- **Bot ve şirket içi aramaları ayıklayın.** Kendi ekibinizin yaptığı testler listeyi çarpıtabilir ([şirket içi ziyaretler GA4 raporlarından nasıl ayrılır?](/blog/sirket-ici-ziyaretler-ga4-raporlarindan-nasil-ayrilir/)).
- **Arama sonuç sayfalarını dizine eklemeyin.** Site içi arama sonuç sayfaları genellikle dizine eklenmemelidir ([site içi arama sonuçları Google’da indekslenmeli mi?](/blog/site-ici-arama-sonuclari-googleda-indekslenmeli-mi/)).

## Arama verisini aylık bir rutine nasıl bağlarsınız?

Site içi arama analizi tek seferlik bir iş değil, küçük bir aylık alışkanlık olmalıdır. Yarım saatlik bir rutin şöyle işler:

1. **Veriyi dışa aktarın.** Son otuz günün arama ifadelerini ve sonuç sayılarını alın.
2. **Yeni ifadeleri işaretleyin.** Geçen ay listede olmayan ifadeler yeni merak konularını gösterir.
3. **Sonuç çıkmayanları ayırın.** Her biri için “yeni sayfa”, “mevcut sayfaya ek” ya da “menü değişikliği” kararı yazın.
4. **Kararları işe çevirin.** Her karar için sorumlu kişi ve tarih belirleyin; yoksa liste dosyada kalır.
5. **Geçen ayın işlerini kontrol edin.** Yayınlanan bölümün ilgili aramayı azaltıp azaltmadığına bakın.

Beşinci adım önemlidir: bir içeriği yayınladıktan sonra o ifadenin site içi aramasında düşüş görmek, ziyaretçinin aradığını artık bulduğunu gösteren somut bir işarettir. Düşüş yoksa içerik ya yanlış yerde ya da yanlış dille yazılmıştır; düzeltme adayı olarak listeye geri dönün.

## Denizli SEO bu konuda nasıl yardımcı olur?

[İçerik SEO hizmetimizde](/icerik-seo/):

- sitenizin içi arama verisini (GA4 ya da site kaydı) dışa aktarıp gruplar, sonuç çıkmayan ifadeleri ayırırız,
- ifadeleri yeni sayfa, mevcut sayfaya ek ve menü değişikliği olarak üç listede sunarız,
- kişisel veri ve bot trafiğini analizden çıkarırız,
- sonuç vaat etmeden, yayınlanan içeriklerin etkisini Search Console ve GA4 ile izleriz.

Verinizi birlikte okumak isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Ziyaretçilerinizin bulamadığı içeriği birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [içerik SEO sayfamızda](/icerik-seo/) yazılı.

## Sık sorulan sorular

### Sitemde arama kutusu yoksa ne yapmalıyım?

Önce Search Console’daki gerçek sorgulara, müşteri sorularına ve otomatik tamamlama önerilerine bakın. Siteniz büyükse arama kutusu eklemeyi de düşünün.

### GA4 arama ifadesini otomatik gösterir mi?

Gelişmiş ölçüm açıksa `view_search_results` etkinliği toplanır. Arama ifadesini rapor edebilmek için parametrenin özel boyut olarak tanımlanması gerekebilir; kurulumu kontrol edin.

### Kaç aylık veri incelenmeli?

Üç aylık veri çoğu site için yeterlidir. Mevsimsel işlerde yılın aynı dönemine ait geçmiş veriyle karşılaştırın.

### Her arama ifadesi yazı olmalı mı?

Hayır. Çoğu ifade mevcut bir sayfaya ek, menü düzeltmesi ya da SSS maddesi olur. Yalnızca ayrı bir cevap gerektirenler yeni yazıya dönüşür.

### Arama sonuç sayfaları SEO’ya zarar verir mi?

Kontrolsüz bırakılırsa çok sayıda ince sayfa üretebilirler. Bu sayfaları dizine eklememek genellikle doğru yaklaşımdır.

## Kaynaklar

- [Analytics Yardım: Gelişmiş ölçüm etkinlikleri (site arama, dosya indirme)](https://support.google.com/analytics/answer/9216061?hl=tr)
- [Google Arama Merkezi: Kullanıcı odaklı, faydalı ve güvenilir içerikler oluşturma](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)
