---
title: "X-Robots-Tag Nasıl Kullanılır? Dosya İndekslemesi"
description: "X-Robots-Tag nedir, nasıl kullanılır? PDF ve görsel gibi HTML olmayan dosyaları noindex yapma, Apache ve Nginx örnekleri, robots.txt ile farkı ve test yöntemi."
date: 2026-11-15
service: teknik-seo
imageAlt: "PDF ve görsel dosyaları için HTTP yanıt başlığında X-Robots-Tag kuralı"
---

X-Robots-Tag, robots meta etiketinin yaptığı işi HTTP yanıt başlığıyla yapan kuraldır: sunucu, dosyayı gönderirken başlığa `X-Robots-Tag: noindex` gibi bir satır ekler ve arama motoru o dosyayı dizine almaz. En önemli kullanım alanı, içine meta etiketi yazamayacağınız HTML olmayan dosyalardır: PDF’ler, görseller, videolar ve belgeler. Kuralın çalışması için dosyanın taranabilir olması gerekir; robots.txt ile engellenen bir dosyada başlık hiç okunmaz.

Fiyat listesi PDF’i, eski katalog ya da iç yazışma belgesi Google’da çıkıyorsa aradığınız araç budur. Sunucu ayarları için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## X-Robots-Tag nedir?

Google’ın belgesine göre sayfa düzeyindeki ayarlar iki yoldan verilebilir: HTML sayfasına meta etiketi ekleyerek ya da bir HTTP üst bilgisiyle. Robots meta etiketinde kullanılabilen her kural, X-Robots-Tag olarak da belirtilebilir ([robots meta etiketi, data-nosnippet ve X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)).

Bir sunucu yanıtı şöyle görünür:

```
HTTP/1.1 200 OK
Content-Type: application/pdf
X-Robots-Tag: noindex
```

Kullanıcı bu satırı görmez; dosya normal açılır. Arama motoru ise dosyayı indirirken başlığı okur ve kurala uyar.

Google iki avantajı vurgular: HTML’de robots meta etiketi kullanmanın imkânsız olduğu dosyalarda (görsel gibi) kullanılabilmesi ve site genelinde uygulanacak kuralları tek yerden, normal ifadelerle belirtebilmeniz.

## Hangi kurallar kullanılabilir?

Meta etiketindeki kuralların aynısı:

- `noindex`: Dosyayı arama sonuçlarında gösterme.
- `nofollow`: Dosyadaki bağlantıları izleme.
- `none`: `noindex, nofollow` ile eş değer.
- `nosnippet`, `max-snippet:[sayı]`: Önizleme metnini kapat ya da sınırla ([nosnippet nasıl kullanılır?](/blog/nosnippet-ve-data-nosnippet-nasil-kullanilir/)).
- `max-image-preview:[ayar]`, `noimageindex` gibi sunum kuralları.

Birden çok kuralı virgülle ayırarak tek başlıkta ya da ayrı başlıklarda verebilirsiniz. Kurallar büyük/küçük harfe duyarlı değildir. Çakışan kurallarda daha kısıtlayıcı olan uygulanır.

Belirli bir tarayıcıyı hedeflemek de mümkündür:

```
X-Robots-Tag: googlebot: nofollow
X-Robots-Tag: otherbot: noindex, nofollow
```

Kullanıcı aracısı belirtilmeyen kurallar tüm tarayıcılar için geçerlidir. Google, bu kuralların diğer arama motorlarınca aynı biçimde ele alınmayabileceğini de not eder.

## Sunucuda nasıl ayarlanır?

Google’ın belgesindeki örnekler doğrudan kullanılabilir.

**Tüm PDF dosyaları için (Apache, `.htaccess` ya da `httpd.conf`):**

```apache
<Files ~ "\.pdf$">
  Header set X-Robots-Tag "noindex, nofollow"
</Files>
```

**Tüm PDF dosyaları için (Nginx, `.conf`):**

```nginx
location ~* \.pdf$ {
  add_header X-Robots-Tag "noindex, nofollow";
}
```

**Görsel dosyaları için (Apache):**

```apache
<Files ~ "\.(png|jpe?g|gif)$">
  Header set X-Robots-Tag "noindex"
</Files>
```

**Tek bir dosya için (Apache):**

```apache
<Files "fiyat-listesi-2024.pdf">
  Header set X-Robots-Tag "noindex, nofollow"
</Files>
```

Tek dosya örneğinde `.htaccess` dosyası, eşleşen dosyanın bulunduğu dizine konmalıdır. Apache’de `Header` yönergesi için `mod_headers` modülünün açık olması gerekir; paylaşımlı barındırmada çoğunlukla açıktır, değilse barındırma firmanıza sorun.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Ne zaman X-Robots-Tag, ne zaman meta etiketi?

| Durum | Uygun yöntem |
|---|---|
| Tek bir HTML sayfası | Robots meta etiketi |
| PDF, Word, Excel dosyası | X-Robots-Tag |
| Görsel ve video dosyaları | X-Robots-Tag |
| Bir klasördeki tüm dosyalar | X-Robots-Tag (sunucu kuralı) |
| İçerik yönetim sisteminde HTML’e erişim yok | Sistemin SEO ayarı ya da X-Robots-Tag |

HTML sayfalarında ikisini birden kullanmak gerekmez; birini seçin. Çelişen iki kural verirseniz kısıtlayıcı olan geçerli olur ve neden dizinden düştüğünüzü bulmak zorlaşır. `noindex` kavramı için [noindex ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazısına bakın.

## robots.txt ile farkı ve en sık hata

robots.txt **taramayı**, X-Robots-Tag **dizine eklemeyi** yönetir. İkisini aynı dosya için birlikte kullanmak işe yaramaz. Google’ın `noindex` belgesi bunu açıkça yazar: kuralın etkili olabilmesi için sayfanın robots.txt tarafından engellenmemesi ve tarayıcı tarafından erişilebilir olması gerekir; engellenirse tarayıcı `noindex` kuralını hiçbir zaman görmez ve sayfa, başka sayfalar ona bağlantı veriyorsa, sonuçlarda görünmeye devam edebilir ([noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)).

Yani:

- PDF’i dizinden çıkarmak istiyorsanız: taramaya **izin verin**, başlıkla `noindex` gönderin.
- Tarama yükünü azaltmak istiyorsanız: robots.txt kullanın; ama bunun dizinden çıkarma garantisi olmadığını bilin ([robots.txt nasıl hazırlanır?](/blog/robots-txt-nedir-nasil-hazirlanir/)).

Zaten dizinde olan dosyalar için sıra önemlidir: önce `noindex` başlığını ekleyin, dosyaların dizinden düşmesini bekleyin, tarama yükü sorunsa robots.txt kuralını sonra ekleyin.

## Hangi dosyalar için düşünülmeli?

1. **Eski katalog ve fiyat listeleri:** Güncel olmayan fiyat, müşteriyi yanıltır.
2. **İç belgeler:** Teklif şablonları, sözleşme taslakları, personel formları. Bunlar için asıl çözüm yayından kaldırmak ya da şifrelemektir; `noindex` gizlilik sağlamaz.
3. **Kopya PDF’ler:** Aynı içeriğin hem HTML sayfası hem PDF’i varsa ve HTML sayfasının sıralanmasını istiyorsanız.
4. **Otomatik üretilen dosyalar:** Fatura, etiket, dışa aktarım dosyaları.
5. **Yüklenen ham görseller:** Ürün fotoğraflarının düzenlenmemiş orijinalleri.

Tersine, müşterinin aradığı güncel katalog ya da teknik föy dizinde kalmalıdır; PDF’lerin de arama trafiği getirebileceğini unutmayın ([PDF dosyaları için SEO](/blog/pdf-dosyalari-icin-seo-nasil-yapilir/)).

## Nasıl test edilir?

1. **Başlığı görün.** Tarayıcının geliştirici araçlarında Ağ sekmesinde dosyaya tıklayın; yanıt başlıklarında `X-Robots-Tag` satırını arayın. Komut satırında `curl -I https://ornek.com/dosya.pdf` aynı işi görür.
2. **URL Denetleme.** Search Console’da dosyanın adresini denetleyin; “dizine eklemeye izin veriliyor mu?” satırında `noindex` algılandığını görmelisiniz.
3. **Kapsamı kontrol edin.** Kural yanlışlıkla HTML sayfalarını da kapsıyor mu? Ana sayfa ve birkaç önemli sayfanın başlıklarına bakın.
4. **Bekleyin.** Dosyanın yeniden taranması gerekir; Google meta etiketleri ve başlıkları görebilmek için sayfayı taramak zorundadır.

Üçüncü adım önemlidir: geniş yazılmış bir normal ifade ya da ana dizine konmuş bir kural, tüm siteye `noindex` gönderebilir. Bu, bir sitenin dizinden toplu düşmesinin sessiz nedenlerinden biridir, çünkü sayfa kaynağında hiçbir şey görünmez ([sitem neden görünmüyor?](/blog/web-sitem-googleda-neden-gorunmuyor-indeksleme-rehberi/)).

## CDN ve önbellek notu

Dosyalar bir CDN ya da önbellek katmanı üzerinden sunuluyorsa başlığın oradan da geçtiğini doğrulayın; bazı kurulumlarda sunucudaki başlık CDN’de düşer ya da eski yanıt önbellekte kalır. Kuralı ekledikten sonra önbelleği temizleyin ve başlığı son kullanıcının gördüğü adresten test edin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir kablo üreticisinin üç yıllık fiyat listesi PDF’i, marka aramalarında güncel ürün sayfasının üstünde çıkıyor; müşteriler eski fiyatla teklif istiyor.

- **Teşhis:** `/dokumanlar/` klasöründe otuz eski PDF var; hepsi dizinde.
- **Düzeltme:** Klasöre, yalnızca arşiv dosyalarını kapsayan bir kural ekleniyor: `X-Robots-Tag: noindex`. Güncel katalog kapsam dışında bırakılıyor. robots.txt’teki eski engel kaldırılıyor ki başlık okunabilsin.
- **Kontrol:** `curl -I` ile başlık doğrulanıyor; URL Denetleme’de `noindex` görülüyor; dosyalar haftalar içinde sonuçlardan çıkıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Dosyayı hem robots.txt ile engelleyip hem `noindex` göndermek.**
2. **Kuralı fazla geniş yazıp HTML sayfalarını da kapatmak.**
3. **`noindex`’i gizlilik önlemi sanmak.**
4. **Başlığı test etmeden bırakmak.**
5. **CDN’de başlığın düştüğünü fark etmemek.**
6. **Müşterinin aradığı güncel belgeleri de dizinden çıkarmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- dizindeki PDF ve dosyaları listeler, hangisinin kalacağına birlikte karar veririz,
- sunucu kuralını dar kapsamla yazar ve test ederiz,
- robots.txt ile çakışmaları gideririz,
- yanlışlıkla `noindex` gönderen başlıkları tararız.

Dosya denetimi için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### X-Robots-Tag ile robots meta etiketi arasındaki fark nedir?

Aynı kuralları taşırlar; meta etiketi HTML’in içinde, X-Robots-Tag HTTP yanıt başlığında durur. HTML olmayan dosyalarda yalnızca başlık kullanılabilir.

### PDF’i Google’dan nasıl çıkarırım?

Dosyayı taranabilir bırakıp yanıt başlığında `X-Robots-Tag: noindex` gönderin; ya da dosyayı tümüyle kaldırın.

### robots.txt ile engellesem yetmez mi?

Hayır. Engellenen dosyada başlık okunamaz; dosya başka sitelerden bağlantı alıyorsa sonuçlarda görünmeye devam edebilir.

### Başlığın eklendiğini nasıl anlarım?

Tarayıcının Ağ sekmesinde ya da `curl -I` komutuyla yanıt başlıklarına bakın; Search Console’da URL Denetleme ile doğrulayın.

### Kural bütün arama motorlarında çalışır mı?

Google, bu kuralların diğer arama motorlarınca aynı şekilde ele alınmayabileceğini belirtir.

## Kaynaklar

- [Google Arama Merkezi: Robots meta etiketi, data-nosnippet ve X-Robots-Tag teknik özellikleri](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr)
- [Google Arama Merkezi: noindex ile dizine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
