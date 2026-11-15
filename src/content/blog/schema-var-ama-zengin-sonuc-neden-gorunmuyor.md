---
title: "Schema Var Ama Zengin Sonuç Neden Görünmüyor?"
description: "Sayfanızda schema var ama Google’da zengin sonuç görünmüyor mu? Garanti olmaması, eksik zorunlu alanlar, görünmeyen içerik ve erişim engelleri."
date: 2026-11-15
service: teknik-seo
imageAlt: "Yapılandırılmış veri testi geçerli ama arama sonucunda yıldız ve fiyat görünmeyen ürün sayfası"
---

Sayfanızda yapılandırılmış veri (schema) olması, Google’da zengin sonuç çıkacağı anlamına gelmez: Google, işaretleme Zengin Sonuçlar Testi’nde doğru görünse bile zengin sonucun gösterileceğini garanti etmediğini açıkça yazar. Görünmemesinin başlıca nedenleri eksik zorunlu özellikler, sayfada kullanıcıya görünmeyen ya da sayfayı temsil etmeyen işaretleme, sayfaya erişim engeli, kalite yönergelerine aykırılık ve Google’ın o sorgu için düz metin sonucunu daha uygun bulmasıdır.

Önce kontrol edilebilir nedenleri eleyin, sonra geriye kalanın Google’ın takdiri olduğunu kabul edin. Yapılandırılmış veri denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## “Geçerli” ile “gösterilir” aynı şey değil

Google’ın yapılandırılmış veri yönergeleri iki cümleyle durumu özetler: yapılandırılmış veri kullanmak bir özelliğin var olmasını **mümkün kılar**, var olacağını **garanti etmez**. Bu, sayfanız Zengin Sonuçlar Testi’ne göre doğru işaretlenmiş olsa bile geçerlidir ([yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)).

Aynı belge yaygın nedenleri de sayar:

- Google algoritması sonuçları arama geçmişi, konum ve cihaz türü gibi birçok değişkene göre uyarlar; bir özelliğin diğerinden, hatta düz metin sonucunun bile daha uygun olduğuna karar verebilir.
- Yapılandırılmış veri sayfanın ana içeriğini temsil etmiyordur ya da yanıltıcı olabilir.
- Yapılandırılmış veri, Zengin Sonuçlar Testi’nin yakalayamadığı bir biçimde yanlıştır.
- Yapılandırılmış verinin başvurduğu içerik kullanıcıdan gizlenmiştir.
- Sayfa; bu genel yönergelere, ilgili özelliğin kendi yönergelerine, Arama Yönergeleri’ne ya da içerik politikalarına uygun değildir.

Aşağıdaki kontrol listesi bu nedenleri ürün sayfası için sıraya koyar.

## 1. Zorunlu özellikler eksik mi?

Yönergelerdeki “eksiksiz olma” kuralı nettir: ilgili zengin sonuç türünün belgesinde listelenen tüm gerekli özellikleri belirtin; gerekli özellikleri eksik olan öğeler zengin sonuç için uygun değildir. Önerilen özelliklerin sayısı arttıkça sonucun kalitesi yükselir.

Ürün sayfalarında sık görülen eksikler:

1. Fiyat var ama para birimi yok.
2. Stok durumu belirtilmemiş.
3. Toplu puan (`aggregateRating`) var ama yorum sayısı yok ya da sıfır.
4. Ürün adı ve görsel adresi boş ya da hatalı.
5. Şablon bazı ürünlerde alanları boş değerle basıyor.

Zengin Sonuçlar Testi “hata” ile “uyarı”yı ayırır: hatalar zengin sonucu engeller, uyarılar (önerilen alanların eksikliği) engellemez ama kaliteyi düşürür.

## 2. İşaretlenen bilgi sayfada görünüyor mu?

Kalite yönergelerinin en sık çiğnenen maddesi budur: **sayfanın okuyucularına görünmeyen içeriği işaretlemeyin.** Belgedeki örnek: JSON-LD bir sanatçıyı açıklıyorsa HTML gövdesi de aynı sanatçıyı tanımlamalıdır.

Ürün sayfasına uyarlarsak:

- İşaretlemede 4,8 puan ve 37 yorum yazıyor, ama sayfada yorum bölümü yok ya da yorumlar yalnızca bir düğmeye basınca geliyor.
- İşaretlemede fiyat 1.250 TL, sayfada kampanya nedeniyle 990 TL.
- İşaretlemede “stokta”, sayfada “tükendi”.

Bu tutarsızlıklar test aracında hata vermez, ama zengin sonucun gösterilmemesinin tipik nedenidir. Yorumların doğru gösterimi için [ürün yorumları](/blog/urun-yorumlari-e-ticaret-seosunda-nasil-kullanilir/) yazısına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 3. Yorumlar ve puanlar gerçek mi?

Yönergeler açık: sahte yorumlar gibi alakasız ya da yanıltıcı içerikleri işaretlemeyin; gerçek kullanıcılara ait olmayan yorum ve puanlar spam kabul edilir. Bir kalite yönergesinin ihlali, söz dizimi doğru olan işaretlemenin zengin sonuç olarak gösterilmesini engelleyebilir ya da spam olarak işaretlenmesine yol açabilir.

Sık görülen riskli uygulamalar: her ürüne aynı sabit puanı basan eklenti ayarı, mağaza geneli puanı tek tek ürünlere yazmak, yorum olmadığı hâlde 5 yıldız işaretlemek. Bunları kaldırın; “yıldız çıksın” diye yapılan işaretleme, yıldızın hiç çıkmamasının nedeni olur.

## 4. Google sayfaya erişebiliyor mu?

Teknik yönergelerdeki erişim kuralı: yapılandırılmış veri içeren sayfalarınızda Googlebot’u robots.txt, `noindex` ya da başka erişim kontrolü yöntemleriyle engellemeyin. Ayrıca:

- İşaretlemede belirtilen tüm görsel adresleri taranabilir ve dizine eklenebilir olmalıdır; aksi hâlde Google bunları bulamaz ve gösteremez.
- İşaretleme JavaScript ile sonradan ekleniyorsa Google’ın oluşturulmuş sayfada onu gördüğünü URL Denetleme ile doğrulayın ([JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).
- Sayfa dizinde değilse zengin sonuç da olmaz; önce dizin durumuna bakın.

## 5. İşaretleme sayfanın ana konusunu mu anlatıyor?

“Alaka düzeyi” kuralına göre yapılandırılmış veri, sayfa içeriğinin doğru bir gösterimi olmalıdır. Kategori sayfasına tek bir ürünün `Product` işaretlemesini koymak, blog yazısına ürün puanı eklemek ya da ana sayfaya tüm ürünleri işaretlemek bu kurala takılır. İşaretlemeyi açıkladığı sayfaya yerleştirin: ürün işaretlemesi ürün sayfasında durur.

Aynı içeriğin kopya sayfaları varsa (ör. parametreli adresler), Google aynı yapılandırılmış veriyi yalnızca standart sayfaya değil tüm kopyalara yerleştirmenizi önerir ([canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).

## 6. Bilgi güncel mi?

Yönergeler güncel bilgi ister: artık alakalı olmayan, zamana duyarlı içerik için zengin sonuç gösterilmez. Bitmiş bir kampanyanın fiyatı, geçmiş tarihli bir etkinlik ya da süresi dolmuş bir ilan bu kapsamdadır ([stokta olmayan ürün sayfaları](/blog/stokta-olmayan-urun-sayfalari-nasil-yonetilmeli/)).

## 7. Zaman tanıdınız mı?

İşaretlemeyi yeni eklediyseniz Google’ın sayfayı yeniden taraması ve işlemesi gerekir. Yapılacaklar:

1. Zengin Sonuçlar Testi ile kodu doğrulayın, kritik hataları düzeltin.
2. URL Denetleme ile Google’ın sayfayı nasıl gördüğünü test edin.
3. Yeniden tarama isteyin ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)).
4. Search Console’un ilgili zengin sonuç raporunda (ör. ürün snippet’leri) geçerli öğe sayısını izleyin.
5. Birkaç hafta sonra sonuçları farklı sorgularla kontrol edin.

## Her şey doğruysa: Google’ın takdiri

Listeyi temizlediğiniz hâlde zengin sonuç çıkmıyorsa, geriye belgenin ilk maddesi kalır: Google o sorgu, konum ve cihaz için düz metin sonucunu ya da başka bir özelliği daha uygun bulmuş olabilir. Aynı sayfa bir sorguda yıldızla, başka bir sorguda yıldızsız çıkabilir.

Burada yapılacak şey zorlamak değil, ölçmektir. Zengin sonuç bir amaç değil, tıklama oranını artırmanın araçlarından biridir. Başlık ve açıklama da aynı işi görür ([tıklama oranı nasıl artırılır?](/blog/arama-sonuclarinda-tiklama-orani-nasil-artirilir/)).

## Biçim notu

Google üç biçimi destekler: JSON-LD (önerilen), mikro veri ve RDFa. Tema bir biçimde, eklenti başka biçimde aynı ürünü iki kez işaretliyorsa çelişen değerler çıkabilir. Sayfa kaynağında aynı ürün için tek ve tutarlı bir işaretleme bırakın. Temel kavramlar için [yapılandırılmış veri rehberine](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/) bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir havlu üreticisinin çevrimiçi mağazasında ürün işaretlemesi testte geçerli, ama sonuçlarda fiyat ve yıldız görünmüyor.

- **Teşhis:** Eklenti her ürüne sabit “5 yıldız, 1 yorum” basıyor; sayfalarda yorum bölümü yok. Fiyat işaretlemede KDV hariç, sayfada KDV dahil.
- **Düzeltme:** Sahte puan kaldırılıyor; gerçek yorum toplama başlatılıyor; fiyat sayfadaki görünen fiyatla eşitleniyor; para birimi ve stok alanları tamamlanıyor.
- **İzleme:** Sayfalar yeniden taramaya gönderiliyor; Search Console’da geçerli ürün öğeleri ve tıklama oranı izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Testte “geçerli” görünce işin bittiğini sanmak.**
2. **Sayfada görünmeyen puan ve yorumu işaretlemek.**
3. **Her ürüne sabit ya da mağaza geneli puan basmak.**
4. **İşaretlemedeki fiyatı sayfadaki fiyatla eşitlememek.**
5. **Aynı ürünü iki farklı eklentiyle iki kez işaretlemek.**
6. **Zengin sonucun garanti olduğunu düşünmek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki işaretlemeyi zorunlu alanlar ve görünür içerikle karşılaştırırız,
- sahte ya da çelişen işaretlemeyi temizleriz,
- şablonu, alanların gerçek veriden dolacağı biçimde düzeltiriz,
- Search Console raporlarını ve tıklama oranını izleriz.

Yapılandırılmış veri denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Test geçerli diyor, neden zengin sonuç yok?

Google, doğru işaretleme olsa bile zengin sonucun gösterilmesini garanti etmez; karar sorguya, cihaza ve kalite yönergelerine bağlıdır.

### Uyarılar zengin sonucu engeller mi?

Zorunlu alan hataları engeller; önerilen alanlara dair uyarılar engellemez ama sonucun kalitesini düşürür.

### Sayfada olmayan puanı işaretleyebilir miyim?

Hayır. Okuyucuya görünmeyen içeriği işaretlemek yönergelere aykırıdır; gerçek olmayan puanlar spam sayılır.

### Ne kadar beklemeliyim?

Sayfanın yeniden taranıp işlenmesi gerekir; bu günler ya da haftalar alabilir.

### JSON-LD mi kullanmalıyım?

Google üç biçimi destekler ve JSON-LD’yi önerir.

## Kaynaklar

- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
