---
title: "Web Sitesi Erişilebilirliği: Temel Kurallar"
description: "Erişilebilir web sitesi için temel kurallar: renk kontrastı, klavyeyle gezinme, alt metin, form etiketleri, hareket ve başlık yapısı ile kontrol listesi."
date: 2026-11-13
service: web-tasarim
imageAlt: "Kontrast oranı, klavye odağı ve alt metin işaretli erişilebilirlik kontrol listesi"
---

Erişilebilir web sitesi, görme, işitme, hareket ya da bilişsel farklılıkları olan kişilerin de kullanabildiği sitedir. Temel kurallar şunlardır: yeterli renk kontrastı, klavyeyle gezinilebilir yapı, anlamlı alt metin, etiketli formlar, rahatsız etmeyen hareket ve düzenli başlık yapısı. Bunlar genelde herkesin işine yarar: açık hava ışığında telefon kullanan biri de yüksek kontrasttan yararlanır.

Erişilebilirlik çoğu zaman “sonra bakarız” diye ertelenir; oysa baştan düşünüldüğünde ek maliyeti düşüktür, sonradan düzeltmek ise pahalıdır. Bu yazı genel iyi uygulamaları anlatır; hukuki gereklilik ya da uygunluk belgesi iddiası taşımaz. Yeni site ya da yenileme için [web tasarım hizmetimizi](/web-tasarim/) inceleyebilirsiniz.

## Erişilebilirlik neden önemli?

Üç nedenle:

- **Daha fazla insan siteyi kullanabilir.** Klavye kullanıcıları, ekran okuyucu kullananlar, az gören ya da renk körlüğü olanlar ve geçici engeli olanlar (kırık kol, parlak güneş) siteyi sorunsuz kullanabilir.
- **Kullanılabilirlik artar.** Net kontrast, büyük dokunma alanları ve anlaşılır formlar herkesin işini kolaylaştırır.
- **Teknik kalite işaretidir.** Düzgün başlık yapısı, alt metin ve etiketli form hem erişilebilirliği hem sitenin anlaşılabilirliğini artırır.

web.dev’in erişilebilirlik kursu bu konuları adım adım anlatır; aşağıdaki kurallar o kaynaktaki doğrulanmış bilgilere dayanır.

## Kural 1: Renk kontrastı yeterli olsun

web.dev’e göre normal boyutlu metin (görsel içindeki metin dahil) WCAG’nin minimum koşulu için 4,5:1 kontrast oranına sahip olmalıdır. Büyük metin ve temel simgeler için oran 3:1’dir; büyük metin en az 18 punto/24 piksel ya da 14 punto/18,5 piksel kalın olarak tanımlanır. Logolar ve dekoratif öğeler bu koşuldan muaftır ([renk kontrastı](https://web.dev/learn/accessibility/color-contrast?hl=tr)).

Uygulama:

- Açık gri metni beyaz zemine koymayın.
- Düğme metni ile düğme zemini arasındaki oranı ölçün.
- Chrome Geliştirici Araçları’nın renk seçicisi kontrast oranını gösterir.
- Görselin üstüne yazı koyuyorsanız okunurluğu fotoğrafın en açık ve en koyu yerinde kontrol edin.

## Kural 2: Bilgiyi yalnızca renkle vermeyin

“Kırmızı alanları doldurun” ya da “yeşil düğmeye basın” talimatı, renk körlüğü olan biri için işe yaramaz. web.dev, bilgi aktarmak ya da bir öğeyi ayırt etmek için tek başına renk kullanılmamasını, desen, metin ya da simge gibi bir tanımlayıcı eklenmesini önerir. Hata mesajında kırmızı renk yanında “Telefon numarası eksik” gibi bir yazı ve bir simge bulunsun. Siteyi gri tonlarda inceleyerek renk sorunlarını hızlıca görebilirsiniz.

## Kural 3: Klavyeyle gezinilebilsin

Birçok kullanıcı birincil gezinme aracı olarak klavye kullanır. web.dev’e göre odak sırası mantıklı ve sayfanın görsel sırasıyla eşleşmelidir; bağlantı, onay kutusu ve metin girişi gibi doğal odaklanılabilir HTML öğeleri varsayılan olarak odak sırasında yer alır ([odak ve klavye](https://web.dev/learn/accessibility/focus?hl=tr)).

Kendiniz test edin: fareyi bırakın, Tab tuşuyla sayfada gezinin. Şunlara bakın:

- Menü, formlar, düğmeler klavyeyle ulaşılabiliyor mu?
- Hangi öğede olduğunuzu gösteren görünür bir odak çerçevesi var mı?
- Sıra ekrandaki sıraya uyuyor mu?
- Açılır pencere ya da menü klavyeyle kapanabiliyor mu?

Odak çerçevesini CSS ile tamamen gizlemeyin; kullanıcı nerede olduğunu kaybeder. Mümkün olduğunca standart HTML öğeleri (gerçek `<button>`, `<a>`, `<input>`) kullanın.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Kural 4: Görsellere doğru alt metin yazın

web.dev, bir resme alt metin yazmadan önce amacını ve bağlamını düşünmeyi önerir: resim sayfanın anlamı için gerekli mi? Gerçek bir amacı olmayan dekoratif bir resimse yardımcı teknolojiden gizlenmelidir (örneğin boş alt metinle). Kolay bir sınama: resimleri gizleyin ve kalan içeriği anlıyor musunuz diye bakın; anlıyorsanız resim büyük olasılıkla dekoratiftir ([resimler](https://web.dev/learn/accessibility/images?hl=tr)).

Uygulama:

- **Bilgilendirici resim:** Ne gösterdiğini kısa bir cümleyle anlatın (“Ofiste müşteriyle toplantı yapan iki kişi”).
- **Dekoratif resim:** Alt metni boş bırakın ve ekran okuyucuya gizleyin.
- **Düğme ya da bağlantı olan resim:** Alt metin hedefi anlatsın (“İletişim sayfasına git”).
- **Metin içeren görsel:** Metni sayfada gerçek metin olarak da verin.

Alt metin aynı zamanda görsel SEO’ya da yarar; ayrıntı için [görsel SEO](/blog/gorsel-seo/) yazımıza bakın.

## Kural 5: Formlar etiketli ve anlaşılır olsun

web.dev, formların erişilebilir oluşturulması en zor öğelerden biri olduğunu söyler ve özel ARIA yapıları yerine yerleşik HTML form öğelerinin kullanılmasını önerir ([formlar](https://web.dev/learn/accessibility/forms?hl=tr)). Pratik kurallar:

- Her alanın görünür ve doğru bağlanmış bir etiketi olsun; yalnızca yer tutucu metin yeterli değildir.
- Zorunlu alanları açıkça belirtin.
- Hata mesajı sorunun nerede ve nasıl düzeltileceğini yazsın.
- Alanlar ve düğmeler dokunmatik ekranda rahat basılacak büyüklükte olsun.
- Formu klavyeyle gönderebildiğinizi test edin.

İletişim formu çoğu işletme için en önemli dönüşüm noktasıdır; erişilebilir olması doğrudan talep sayısını da etkileyebilir.

## Kural 6: Hareket ve animasyon kontrollü olsun

web.dev, aşırı hareketin vestibüler bozukluğu olanları ve dikkat güçlüğü yaşayanları rahatsız edebileceğini anlatır; WCAG yönergeleri, herhangi bir saniyede üçten fazla yanıp sönen içeriğin kullanılmamasını önerir. Hareketi seçici kullanmak, kullanıcıya hareketi duraklatma ya da durdurma imkânı vermek ve sonsuz animasyon döngülerinden kaçınmak önerilir. `@prefers-reduced-motion` medya sorgusu, kullanıcının işletim sistemindeki hareketi azaltma tercihine saygı göstermenizi sağlar ([hareket](https://web.dev/learn/accessibility/motion?hl=tr)).

Uygulama: otomatik kayan manşetleri, yanıp sönen uyarıları ve sürekli dönen görselleri kaldırın ya da durdurma düğmesi ekleyin; hareket azaltma tercihinde animasyonları kapatın.

## Kural 7: Yazı ve başlık düzeni okunaklı olsun

Yazı tipi ve boyutu okunurluğu doğrudan etkiler. web.dev, yaygın yazı tiplerinin (Arial, Verdana gibi) engelli kullanıcılarla yapılan çalışmalarda daha hızlı okuma ve daha derin anlama sağladığını anlatır; süslü ya da el yazısı biçimlerden ve yalnızca büyük harf karakterlerden kaçınmayı önerir ([tipografi](https://web.dev/learn/accessibility/typography?hl=tr)). Boyut, satır aralığı ve karakter aralığını rahat tutun; web.dev bu öğelerin de metni işlemeyi etkilediğini belirtir.

Başlıklar için Google’ın SEO Başlangıç Kılavuzu, başlık sırasının Google Arama için önemli olmadığını ama ekran okuyucular için yararlı olduğunu belirtir. Yani ana başlık, alt başlıklar şeklinde mantıklı bir hiyerarşi kurun; ayrıntı için [H1, H2, H3 başlık yapısı](/blog/h1-h2-h3-baslik-yapisi-nasil-kurulur/) yazısına bakın.

## Nasıl test edersiniz?

Üç kademeli test yeterlidir:

1. **Otomatik araç:** Tarayıcı geliştirici araçlarındaki erişilebilirlik denetimini ya da benzer bir aracı çalıştırın; kontrast ve eksik etiketleri hızlıca yakalar.
2. **Klavye testi:** Fareyi bırakıp tüm sayfayı klavyeyle gezin.
3. **Gerçek kullanıcı ya da ekran okuyucu:** Mümkünse ekran okuyucuyla ana sayfayı ve iletişim formunu deneyin.

Otomatik araçlar yalnızca sorunların bir kısmını bulur; elle test vazgeçilmezdir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir kuaför salonunun sitesinde açık pembe yazı beyaz zeminde okunmuyor, iletişim formunda yalnızca yer tutucu metin var ve menü klavyeyle açılmıyor.

- **Kontrast:** Metin ve düğme renkleri 4,5:1 oranının üstüne çıkarılıyor.
- **Form:** Her alana etiket ekleniyor; hata mesajları metinle ve simgeyle veriliyor.
- **Klavye:** Menü gerçek düğmeyle yeniden kuruluyor; odak çerçevesi görünür yapılıyor.
- **Kontrol:** Sayfa Tab tuşuyla baştan sona gezilerek test ediliyor.

Bu örnek bir sonuç vaadi ya da uygunluk belgesi değildir.

## Sık yapılan altı hata

1. **Açık renkli metni açık zeminde kullanmak.**
2. **Bilgiyi yalnızca renkle vermek.**
3. **Odak çerçevesini gizlemek.**
4. **Alt metni boş bırakmak ya da anahtar kelimeyle doldurmak.**
5. **Formda etiketsiz alan kullanmak.**
6. **Otomatik kayan ve durdurulamayan animasyon eklemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Erişilebilir tasarım, baştan düşünüldüğünde hem kullanıcıya hem SEO’ya yarar. [Web tasarım hizmetimizde](/web-tasarim/):

- renk, tipografi ve bileşenleri okunurluk ve kontrast kurallarına göre tasarlarız,
- menü, form ve düğmeleri klavyeyle kullanılabilir kurarız,
- görsellere doğru alt metin ve başlıklara düzenli yapı veririz,
- yayın öncesi klavye ve kontrast testi yapar, bulguları yazılı raporlarız.

Yeni site ya da yenileme planınız varsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık sorulan sorular

### Erişilebilirlik yasal bir zorunluluk mu?

Bu yazı hukuki bilgi vermez. Yükümlülüklerinizi bir hukuk danışmanından öğrenin; iyi uygulama olarak erişilebilir tasarım her işletmeye yarar.

### Erişilebilirlik SEO’yu etkiler mi?

Doğrudan sıralama garantisi yoktur; ama alt metin, başlık yapısı ve anlaşılır içerik hem erişilebilirliği hem sitenin anlaşılırlığını artırır.

### Kontrast oranı kaç olmalı?

Normal metin için 4,5:1, büyük metin ve temel simgeler için 3:1 (WCAG minimumu).

### Otomatik araç yeterli mi?

Hayır. Otomatik araçlar yalnızca bir kısım sorunu bulur; klavye ve ekran okuyucu testi de gerekir.

### Mevcut sitemi nasıl düzeltirim?

Önce en çok kullanılan sayfalardan (ana sayfa, iletişim, hizmetler) başlayın; kontrast, form etiketi ve klavye gezinmesini sırayla düzeltin.

## Kaynaklar

- [web.dev Öğren: Erişilebilirlik – Renk kontrastı](https://web.dev/learn/accessibility/color-contrast?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Resimler](https://web.dev/learn/accessibility/images?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Odak ve klavye](https://web.dev/learn/accessibility/focus?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Formlar](https://web.dev/learn/accessibility/forms?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Hareket](https://web.dev/learn/accessibility/motion?hl=tr)
- [web.dev Öğren: Erişilebilirlik – Tipografi](https://web.dev/learn/accessibility/typography?hl=tr)
