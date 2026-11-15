---
title: "Headless CMS Kullanılan Sitelerde SEO Kontrolleri"
description: "Headless CMS kullanılan sitelerde SEO kontrolleri: SEO alanları, ilk HTML, yönlendirme, site haritası, önizleme ortamı ve yayın öncesi denetim listesi."
date: 2026-11-15
service: web-tasarim
imageAlt: "İçerik yönetim sistemi ile ön yüz arasındaki SEO alanlarının akışı"
---

Headless CMS kullanan bir sitede içerik bir yerde yazılır, sayfa başka bir yerde üretilir. SEO açısından bunun anlamı şudur: geleneksel sistemlerin hazır verdiği başlık, kanonik adres, site haritası ve yönlendirme gibi parçaları ön yüzde sizin kurmanız gerekir. Kontrol edilecek beş şey vardır: içerik modelinde SEO alanları var mı, sayfalar ilk HTML’de içerikle geliyor mu, adres ve yönlendirme kuralları tutarlı mı, site haritası ve robots doğru mu, önizleme ve test ortamları dizine kapalı mı.

Yeni bir yapı kuruyor ya da mevcut yapıyı denetletmek istiyorsanız [web tasarım hizmetimiz](/web-tasarim/) bu kontrolleri proje başında planlar.

## İçerik modelinde SEO alanları

Editörün her içerik için doldurabileceği alanlar baştan tanımlanmalıdır:

- Sayfa başlığı (başlık etiketi) ve açıklama; boş bırakılırsa mantıklı bir varsayılana düşmesi ([başlık ve açıklama](/blog/baslik-etiketi-ve-meta-aciklama-nasil-yazilir/)).
- Adres bölümü (slug) ve değişiklik kuralı: slug değişince eski adresten yeniye 301 oluşmalı.
- Kanonik adres alanı (gerektiğinde elle geçersiz kılınabilir).
- Dizine açık/kapalı seçeneği.
- Görsel ve alt metin alanları; alt metin zorunlu olsun.
- Yazar, yayın ve güncelleme tarihi (yapılandırılmış veri ve görünür tarih için).
- İlgili içerik ve iç bağlantı alanları.

Bu alanlar yoksa editör SEO’yu yönetemez, her değişiklik yazılımcıya kalır.

## İlk HTML’de içerik var mı?

Ön yüz, içeriği istemci tarafında çekiyorsa Google’ın işleme aşamasına bağımlı olursunuz. Google, JavaScript ile oluşturulan içeriği işleyebildiğini ama bunun ek bir aşama olduğunu belirtir; önemli içeriği, bağlantıları ve meta etiketleri sunucuda ya da derleme sırasında üretmek en güvenli yoldur ([JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)). Kontrol için sayfanın kaynağını (`curl` ya da “kaynağı görüntüle”) açın ve ana içeriğin, `h1`’in ve bağlantıların orada olup olmadığına bakın; ayrıca Search Console URL Denetimi’yle Google’ın gördüğü HTML’i inceleyin ([JavaScript siteleri](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).

Gerçek `<a href>` bağlantıları kullanın; yalnızca tıklama olaylarıyla yönlendiren öğeler tarama için yetersizdir.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve sade bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Adres, yönlendirme ve kanonik

İçerik ile adres ayrı yönetildiği için en sık hata burada çıkar:

- **Tek adres kuralı:** Aynı içerik birden çok adresten açılmasın (eğik çizgi, büyük/küçük harf, parametre) ([kanonik etiket](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).
- **Slug değişimi:** Otomatik 301 listesi tutulsun; zincirleme yönlendirme oluşmasın.
- **Kanonik adres:** Üretim alan adından, tam adres olarak verilsin; önizleme alan adından üretilmesin.
- **Silinen içerik:** 404 ya da 410 dönmeli; boş sayfa ve 200 yanıt (soft 404) olmamalı.
- **Sayfalama ve filtre adresleri:** İçerik modelinden gelen listelerde kontrolsüz parametre çoğalmasın (URL parametreleri).

## Site haritası ve robots

- Site haritası içerik modelinden otomatik üretilsin; yalnızca kanonik ve dizine açık içerikleri taşısın.
- `lastmod` değeri gerçek güncelleme tarihini yansıtsın ([site haritası](/blog/site-haritasi-sitemap-xml-nasil-olusturulur/)).
- robots.txt üretim alan adında doğru yayınlansın ve site haritasını göstersin.
- Önizleme, hazırlık ve test alan adları dizine kapalı ve erişim denetimli olsun; yalnızca robots.txt ile engellemek yeterli değildir, çünkü dizinleme bağlantı yoluyla yine olabilir. Parola ya da erişim kısıtı güvenli yoldur ([noindex ve robots farkı](/blog/noindex-nedir-ne-zaman-kullanilir/)).

## Yayın akışı ve önizleme

Editör yayına bastığında ne olur? Yeniden derleme mi tetiklenir, önbellek mi temizlenir? Bu akışta şunlara bakın:

- Yayından sonra sayfanın canlı sürümde gerçekten güncellendiği doğrulansın.
- Önbellekte kalan eski sürümler (CDN) temizlensin (CDN ve SEO).
- Taslak içerik halka açık adreslerden erişilemesin.
- Bir içerik silindiğinde ya da gizlendiğinde adresi 404/301 dönsün, site haritasından çıksın.

## Yayın öncesi denetim listesi

1. Her şablonda tek `h1`, doğru başlık ve açıklama.
2. Kanonik adresler üretim alan adıyla.
3. İlk HTML’de içerik, bağlantı ve yapılandırılmış veri.
4. Yönlendirme listesi ve zincir kontrolü.
5. Site haritası ve robots.txt.
6. Önizleme/test ortamının dizine kapalı olması.
7. Hız: görsel boyutları, geç yükleme, yazı tipi ([Core Web Vitals](/blog/core-web-vitals-nedir-lcp-inp-cls/)).
8. Taşıma yapıyorsanız eski–yeni adres eşlemesi ([site taşıma](/blog/site-tasima-301-yonlendirme/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mobilya markası, içerikleri headless bir sistemde yönetip ön yüzü ayrı yayınlıyor. Birkaç ay sonra editör bir ürünün adresini değiştirince eski adres 404 veriyor ve önizleme alan adı Google’da çıkıyor.

- **Teşhis:** Slug değişiminde yönlendirme oluşmuyor; önizleme alan adı herkese açık ve kendi kanonik adresini yayınlıyor.
- **Çözüm:** Adres değişiminde otomatik 301 kaydı, önizlemeye erişim kısıtı, kanonik adresin her zaman üretim alan adından üretilmesi.
- **Kontrol:** Search Console’da kapsam ve taramada hata raporları birkaç hafta izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Rollerin ayrımı: editör, yazılımcı, SEO

Headless yapılarda sorumluluk dağılımı net olmazsa SEO ayarları sahipsiz kalır. Genel bir düzen şöyle kurulabilir: editör başlık, açıklama, görsel ve alt metni içerik girerken doldurur; yazılımcı şablon, kanonik, yönlendirme ve site haritası mantığını kurar; SEO sorumlusu içerik modelinin zorunlu alanlarını belirler ve yayın öncesi listeyi onaylar. Zorunlu alanları sistem düzeyinde kontrol etmek (boş başlıkla yayına izin vermemek gibi) insan hatasını azaltır. Yeni bir içerik türü eklenirken de aynı sorular sorulmalıdır: adresi ne olacak, kanonik kimden gelecek, site haritasına girecek mi, hangi yapılandırılmış veri uygulanacak? Bu soruları işin başında yanıtlamak, yayından sonra yüzlerce sayfayı düzeltmekten çok daha ucuzdur.

## Sık yapılan altı hata

1. **İçerik modelinde SEO alanlarını tanımlamamak.**
2. **Önemli içeriği yalnızca tarayıcıda çekmek.**
3. **Slug değişince yönlendirme oluşturmamak.**
4. **Önizleme ortamını dizine açık bırakmak.**
5. **Kanonik adresi yanlış alan adından üretmek.**
6. **Site haritasına taslak ya da silinmiş içerik koymak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Web tasarım hizmetimizde](/web-tasarim/):

- içerik modelini SEO alanlarıyla birlikte tasarlarız,
- yönlendirme, kanonik ve site haritası kurallarını yapıya gömeriz,
- önizleme ve test ortamlarını dizine kapatırız,
- yayın öncesi denetim listesini projenize uygularız.

Mevcut yapınızın denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin tasarımına, hızına ve arama görünürlüğüne birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [web tasarım sayfamızda](/web-tasarim/) yazılı.

## Sık sorulan sorular

### Headless yapı SEO’ya zarar verir mi?

Hayır; içerik ilk HTML’de hazır gelir ve temel ayarlar doğru kurulursa zarar vermez. Risk, bu ayarların kendiliğinden gelmediğini unutmaktır.

### Önizleme alan adı Google’a nasıl girer?

Herkese açık olup bağlantı alıyorsa dizine girebilir; erişim kısıtı ve `noindex` kullanın.

### Slug değiştirirsem ne olur?

Yönlendirme yoksa eski adres 404 verir ve sinyaller kaybolur; otomatik 301 kaydı tutun.

### Site haritasını nasıl üretmeliyim?

İçerik modelinden otomatik; yalnızca kanonik ve dizine açık içerikleri taşısın.

### JavaScript ile içerik çekmek yasak mı?

Hayır; ama önemli içerik ve bağlantıları ilk HTML’de sunmak daha güvenlidir.

## Kaynaklar

- [Google Arama Merkezi: JavaScript SEO temelleri](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=tr)
- [Google Arama Merkezi: Site haritası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)
