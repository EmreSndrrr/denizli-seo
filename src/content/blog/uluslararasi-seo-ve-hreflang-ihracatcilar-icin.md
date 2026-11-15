---
title: "İhracatçılar İçin Uluslararası SEO ve Hreflang"
description: "İhracatçılar için uluslararası SEO: hedef dilde ayrı sayfalar, hreflang ve x-default, çeviri kalitesi ve yabancı alıcı için güven bilgileri."
date: 2026-11-13
service: teknik-seo
imageAlt: "Dil sürümleri arasında hreflang bağlantılarını gösteren site şeması"
---

İhracatçılar için uluslararası SEO, yabancı alıcının kendi dilinde aradığında ürün ve firma sayfalarınıza ulaşması demektir. Bunun için hedef dilde ayrı sayfalar hazırlanır, Google’a hreflang ile bildirilir, çeviri ve terimler hedef pazara uygun seçilir ve alıcının aradığı bilgiler eksiksiz verilir. Sıralama garantisi verilemez; ama doğru kurulum doğru sayfanın gösterilme ihtimalini artırır.

Denizli’de tekstil, ev tekstili, mermer ve traverten gibi alanlarda ihracat yapan çok sayıda üretici vardır. Bu yazıda ihracatçı bir üreticinin sitesini çok dilli nasıl kuracağını anlatıyoruz. Sektöre özgü yazılarımız için [tekstil üreticileri için SEO](/blog/tekstil-ve-ev-tekstili-ureticileri-icin-seo/) ve [mermer ve traverten firmaları için SEO](/blog/mermer-ve-traverten-firmalari-icin-seo/) yazılarına, bizim hizmetimiz için [teknik SEO sayfamıza](/teknik-seo/) bakabilirsiniz.

## Çok dilli site için temel yaklaşım nedir?

Yabancı alıcı için ayrı, hedef dilde yazılmış sayfalar hazırlamak temel yaklaşımdır. Her dil için ürün, firma ve iletişim bilgisini kapsayan eksiksiz bir sürüm olmalıdır; yalnızca ana sayfanın çevrilip geri kalanın Türkçe bırakılması müşteriyi yarı yolda bırakır. Her dil sürümünün kendi adresi olmalı (örneğin dil klasörü ya da alt alan adı) ve bu adresler tutarlı bir yapıda kurulmalıdır. Adres yapısına dair genel ilkeler için [web sitesi yenileme](/blog/web-sitesi-yenileme-seo-kaybetmeden-nasil-yapilir/) yazısındaki URL eşleme mantığı da yardımcı olur.

## Hreflang nedir, ne işe yarar?

Hreflang, bir sayfanın başka dillerdeki ya da bölgelerdeki karşılıklarını Google’a bildiren işaretlemedir. Google’ın belgesine göre bir sayfanın tüm dil ve bölge varyantlarını bildirmek için sayfa üst bilgisine `<link rel="alternate" hreflang="...">` öğeleri eklenir ve `x-default` tanımlanabilir ([yerelleştirilmiş sürümler](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)). Örnek yapı (alan adı hayalîdir):

```html
<link rel="alternate" hreflang="tr" href="https://ornek.com/tr/havlu/" />
<link rel="alternate" hreflang="en" href="https://ornek.com/en/towel/" />
<link rel="alternate" hreflang="x-default" href="https://ornek.com/en/towel/" />
```

Bu işaretleme, Google’a hangi dil sürümünün hangi kullanıcıya uygun olduğuna dair bilgi verir. İşaretlemeyi yaparken her sürümün diğerlerine bağlandığından ve adreslerin doğru olduğundan emin olun; kesin teknik kurallar için Google’ın güncel belgesini izleyin.

## Hangi diller ve pazarlar için sayfa hazırlanmalı?

Her dile sayfa açmak yerine gerçek alıcılarınıza göre öncelik belirleyin. Hangi ülkelerden talep alıyorsunuz, hangi dillerde yazışıyorsunuz, hangi fuarlara katılıyorsunuz? En çok talep gelen iki üç dille başlayın ve sürümleri eksiksiz hazırlayın. Her yeni dili, o dilde iletişimi yürütebilecek kapasiteyi göz önünde bulundurarak ekleyin: sayfayı İngilizce yayımlayıp gelen mesajlara İngilizce cevap veremiyorsanız alıcı kaybedersiniz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Çeviri kalitesi neden önemlidir?

Otomatik çeviri tek başına güven vermez; teknik terimleri yanlış çevirmek alıcıyı kaybettirir. Ürün adlarını, ölçü birimlerini (hedef pazarın kullandığı birimler) ve sektör terimlerini hedef pazarın kullandığı biçimde yazın. Çeviriyi mümkünse o dili iyi bilen biriyle gözden geçirtin. Yabancı alıcının aradığı kelimeleri ayrıca araştırın; Türkçe bir ürün adının doğrudan çevirisi yabancı pazarda kullanılan terim olmayabilir. Anahtar kelime araştırması için [anahtar kelime analizi](/blog/anahtar-kelime-analizi/) yazısındaki yöntemi hedef dilde uygulayın.

## Yabancı alıcı için hangi bilgiler gerekir?

İhracat alıcısı çoğu zaman web sitesini bir tedarikçi doğrulama aracı olarak kullanır. Şunlar eksiksiz olmalı: firma tanıtımı ve üretim süreci (gerçek fotoğraflarla), ürün grupları ve teknik bilgiler, katalog (indirilebilir ve sayfada metin olarak), sertifika ve belgeler (yalnızca gerçekten sahip olduklarınız, belge numarası ve kurumla), minimum sipariş ve teslim koşulları, ödeme ve yükleme süreci hakkında genel bilgi, iletişim (uluslararası telefon kodu, e-posta, saat dilimiyle çalışma saatleri) ve teklif talep formu. Uydurma sertifika, kapasite ya da referans yazmayın.

## Hreflang kurarken sık yapılan hatalar

- **Karşılıklı bağlantı eksik.** Her dil sürümü diğerlerini işaretlemeli.
- **Yanlış dil ya da bölge kodu.** Kodları doğru yazın; yazım hatası işaretlemeyi etkisiz kılar.
- **Hedef sayfa yok ya da yönlendiriyor.** İşaretlenen adresler çalışmalı.
- **Otomatik çeviri ile yetinmek.** Kalitesiz çeviri güveni zedeler.
- **Kopya içerik sorunu.** Çok benzer sürümler için doğru yapıyı kurun; ayrıntı için [canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/) yazısına bakın.
- **Yalnızca ana sayfayı çevirmek.** Ürün ve iletişim sayfaları da çevrilmeli.

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Yerel arama ve harita ihracatçıyı ilgilendirir mi?

İhracatçı bir üretici için yabancı alıcı genellikle yerel haritadan değil, ürün ve tedarikçi aramasıyla gelir. Yine de fabrika ya da ofis için Google İşletme Profili, firmanın gerçek ve ulaşılabilir olduğunu gösteren bir doğrulama noktası olabilir. Adres, telefon ve çalışma saati bilgisi profil, site ve diğer kayıtlarda tutarlı olmalıdır. Google, işletme adına pazarlama etiketi eklenmesine izin vermez ([işletme kuralları](https://support.google.com/business/answer/3038177?hl=tr)).

## Ölçüm ve izleme

Her dil sürümünün performansını ayrı izleyin: hangi dilde ziyaret ve talep geliyor, hangi ülkelerden? Search Console’da dil ve ülke kırılımlarına bakın; analiz aracında kaynak ve ülke verilerine bakın. Gelen teklif taleplerini dil ve ülke bilgisiyle kaydedin. Yeni bir dil sürümünün sonucunu görmek zaman alır; hızlı sonuç beklemeyin. Google, yeni bir sayfanın dizine eklenmesinin bir haftayı bulabileceğini söyler ([dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).

## Yabancı alıcı sitede ne kadar kalır, ne arar?

Yabancı alıcı sitenizi genellikle bir tedarikçi doğrulama noktası olarak kullanır: firma gerçek mi, ürünleri ne, üretim nasıl, nasıl ulaşılır? Bu soruların cevabını ilk bir iki dakikada bulamazsa başka tedarikçiye geçer. Bu yüzden ana sayfanın ilk ekranında firmanın ne ürettiği, hangi pazarlara satış yaptığı ve nasıl ulaşılacağı hedef dilde net yazılmalıdır. Katalog indirme bağlantısı ve teklif formu görünür olsun. Alıcıya hızlı cevap vermek, sitedeki bilgi kadar önemlidir; teklif taleplerine hangi sürede dönebileceğinizi baştan netleştirin.

## Çok dilli sitede sürdürülebilirlik

Her dil sürümü bir bakım yükü getirir: ürün eklediğinizde ya da fiyat, katalog ve iletişim bilgisi değiştiğinde bütün dillerde güncelleme gerekir. Bu yükü karşılayamayacağınız bir dili açmak, eski ve çelişkili bilgiye yol açar. Dil sayısını kapasitenize göre belirleyin; her dil için bir sorumlu atayın ve içerik güncelleme sırasını belirleyin. Yeni ürün ya da değişiklikte önce ana dilde güncelleyip ardından diğer dillere yansıtan basit bir kontrol listesi kullanın.

## Pazar araştırması ve kanal çeşitliliği

Sitenizin hangi ülkelerden ziyaret aldığını Search Console ve analiz aracından izleyin; hangi ülkelerden teklif geldiğini kendi kaydınızla karşılaştırın. Bu veri, hangi dile öncelik vereceğinizi gösterir. Unutmayın ki ihracat alıcıları yalnızca arama motoruyla gelmez: fuarlar, referanslar, ticaret odası listeleri ve doğrudan iletişim önemli kanallardır. Site bu kanalların destekleyicisi olmalı; gelen bir alıcı sitenizi açtığında firmanızı güvenilir ve anlaşılır bulmalıdır.

## Denizli SEO bu konuda nasıl yardımcı olur?

Biz ihracatçı üreticinin sitesini çok dilli yapıya göre planlarız: hangi dillerde hangi sayfalar, adres yapısı, hreflang kurulumu, kopya sayfa kontrolü, hız ve mobil uyum ve ölçüm. Çeviri ve içerik için işletmenizin doğrulanmış bilgisini kullanır, uydurma sertifika ya da referans yazmayız. Sıralama garantisi vermeyiz; yaptığımız işi yazılı raporlarız. Örnek (hayalî bir işletme için): Merkezefendi’de bir ev tekstili üreticisi için Türkçe ve İngilizce ürün ve firma sayfaları hreflang ile bağlanır; indirilebilir katalog ve teklif formu İngilizce sürümde de bulunur.

## Sık sorulan sorular

### Hreflang olmadan da çok dilli site yapılır mı?

Yapılır; ama Google’a dil ve bölge varyantlarını bildirmenin standart yolu hreflang’dir. İşaretlemeden hangi etkilerin doğacağını önceden söyleyemeyiz.

### Otomatik çeviri yeterli mi?

Başlangıç taslağı olarak kullanılabilir; ama yayımlamadan önce teknik terimleri ve anlamı o dili bilen biriyle kontrol edin.

### Her ülke için ayrı sayfa gerekir mi?

Dil ve bölge ayrımı gerçekten farklı bilgi gerektiriyorsa (fiyat, teslimat, belge) evet; aksi hâlde dil bazında ayrım çoğu zaman yeterlidir.

### Yabancı dilde blog yazmalı mıyım?

Yabancı alıcının soruları varsa evet; ama önce ürün ve firma sayfalarını hazırlayın.

### İhracat için Google yeterli mi?

Birçok alıcı Google’dan arar; ama fuar, referans ve doğrudan iletişim kanalları da önemlidir. SEO bunlardan yalnızca biridir.

## Kaynaklar

- [Google Search Central: sayfalarınızın yerelleştirilmiş sürümleri](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=tr)
- [Google İşletme Profili Yardımı: işletmenizin Google’da gösterilmesiyle ilgili kurallar](https://support.google.com/business/answer/3038177?hl=tr)
- [Search Console Yardımı: sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
