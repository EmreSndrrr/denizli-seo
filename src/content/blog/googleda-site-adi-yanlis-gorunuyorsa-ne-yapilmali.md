---
title: "Google’da Site Adı Yanlış Görünüyorsa Ne Yapılmalı?"
description: "Google’da site adı yanlış ya da alan adı olarak görünüyorsa ne yapılır? WebSite yapılandırılmış verisi, alternatif ad, ana sayfa tutarlılığı ve kontrol adımları."
date: 2026-11-15
service: teknik-seo
imageAlt: "Arama sonucunda başlığın üstünde görünen site adı ve WebSite işaretlemesi"
---

Google’da site adınız yanlış, eksik ya da yalnızca alan adı olarak görünüyorsa, ana sayfanıza `WebSite` yapılandırılmış verisini `name` ve `url` özellikleriyle ekleyin, aynı adı ana sayfanın başlığında, `og:site_name` etiketinde ve görünür metninde tutarlı kullanın ve bir yedek olarak `alternateName` belirtin. Site adı tamamen otomatik oluşturulur; Google elle değiştirmez, ama tercihinizi en güçlü biçimde bu işaretleme bildirir.

Site adı, arama sonucunda başlığın üstünde, favicon’un yanında duran addır; yanlış görünmesi markanızın tanınmasını zorlaştırır. Yapılandırılmış veri ve ana sayfa denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Site adı nedir, başlıktan farkı ne?

Google bir sayfayı arama sonuçlarında listelediğinde, sayfanın alındığı sitenin adını gösterir; buna site adı denir. Google’ın vurguladığı ayrım şudur: başlık bağlantıları her web sayfasına özeldir, site adı ise sitenin tamamı için geçerlidir ([site adı sağlama](https://developers.google.com/search/docs/appearance/site-names?hl=tr)).

Yani “Halı Yıkama Fiyatları” başlık bağlantısıdır; onun üstündeki “Örnek Halı Yıkama” site adıdır. Başlığın değişmesi ayrı bir konudur ([Google başlığımı neden değiştiriyor?](/blog/google-sayfa-basligimi-neden-degistiriyor/)).

Google’a göre site adları, hem mobilde hem masaüstünde, Google Arama’nın kullanılabildiği tüm dillerde gösterilir ve alan adı ile alt alan adı düzeyindeki sitelerde görünebilir.

## Google site adını nasıl belirler?

Belgeye göre site adları tamamen otomatik oluşturulur; sitenin ana sayfasındaki içerikler ve o sayfa için web’de görünen referanslar göz önünde bulundurulur. Google şu kaynakları sayar:

- ana sayfadaki `WebSite` yapılandırılmış verisi (tercih belirtmek için en önemlisi),
- `og:site_name`,
- `<title>` öğesi,
- başlık öğeleri (H1 vb.),
- ana sayfadaki diğer metinler.

Google otomatik seçilen site adlarını elle değiştiremediğini, ancak birincil tercihiniz seçilmediğinde sistemin göz önünde bulunduracağı alternatifleri belirtebileceğinizi söyler.

## İyi bir site adı nasıl seçilir?

Google’ın yönergeleri:

1. **Benzersiz ve yanıltmayan bir ad seçin.** Sitenin kimliğini doğru yansıtmalı.
2. **Kısa ve yaygın bilinen adı kullanın.** Örnek olarak “Google, Inc” yerine “Google” verilir. Uzunluk sınırı yoktur ama uzun adlar bazı cihazlarda kesilebilir.
3. **Genel ad kullanmayın.** Belgeye göre sistem, “İzmir’deki En İyi Diş Hekimleri” gibi genel bir adı, çok iyi bilinen bir marka adı olmadığı sürece site adı olarak seçmez.
4. **Adı ana sayfada tutarlı kullanın.** Yapılandırılmış verideki ad, ana sayfadaki diğer kaynaklarla uyuşmalı.
5. **Alternatif ad girin.** Tercih ettiğiniz ad kullanılamazsa Google’ın bakacağı bir seçenek olsun.

Üçüncü madde yerel işletmeler için özellikle önemlidir: işletme adınız “Denizli Halı Yıkama” gibi tümüyle genel bir ifadeyse, Google bunu site adı olarak seçmeyip alan adını gösterebilir. Bu durumda ayırt edici bir marka unsuru (soyadı, özgün bir ad) işinizi kolaylaştırır.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## WebSite yapılandırılmış verisi nasıl eklenir?

Zorunlu iki özellik vardır: `name` (web sitesinin adı) ve `url` (alan adının ya da alt alan adının standart ana sayfa adresi). Google’ın verdiği örneğe uygun bir kullanım:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Örnek Halı Yıkama",
  "alternateName": ["ÖHY", "ornekhaliyikama.com"],
  "url": "https://ornekhaliyikama.com/"
}
</script>
```

Dikkat edilecek teknik kurallar:

- **Site başına tek ad.** Google Arama site başına yalnızca bir site adını destekler; site, alan adıyla ya da alt alan adıyla tanımlanır. Alt dizin düzeyinde (`example.com/blog`) ayrı site adı desteklenmez. `www` ya da `m` ile başlayan alt alan adları genellikle eşdeğer kabul edilir.
- **İşaretleme ana sayfada olmalı.** Her sayfaya değil, yalnızca ana sayfaya eklemeniz gerekir. `example.com/de/index.html` gibi bir sayfa ana sayfa sayılmaz.
- **Ana sayfa taranabilir olmalı.** Ana sayfa engelliyse Google site adı oluşturamayabilir.
- **Kopya ana sayfalar.** Ana sayfanın http/https ya da www’lu/www’suz kopyaları varsa aynı yapılandırılmış veri hepsinde bulunmalı ([tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/)).
- **Tek blok.** Sitede zaten `WebSite` işaretlemesi varsa site adı özelliklerini aynı düğüme koyun; ikinci bir `WebSite` bloğu oluşturmaktan kaçının.

`alternateName` isteğe bağlıdır; birden fazla alternatif yazabilir, en önemlisini ilk sıraya koyarsınız. Yapılandırılmış veriye genel giriş için [yapılandırılmış veri rehberine](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/) bakın.

## Nasıl test edilir?

Burada sık yapılan bir hata var: Google’a göre site adları **Zengin Sonuçlar Testi’nde desteklenmez**. Söz dizimini bir şema doğrulayıcıyla (ör. Şema İşaretleme Doğrulayıcı) kontrol edin. Ardından:

1. Search Console’da ana sayfayı URL Denetleme ile açın; Google’ın sayfaya erişebildiğini doğrulayın.
2. Ana sayfanın robots.txt, `noindex` ya da giriş zorunluluğuyla engellenmediğinden emin olun.
3. Yeniden tarama isteyin ([dizine ekleme isteği](/blog/google-a-dizine-ekleme-nasil-istenir-url-denetleme/)).
4. Yeniden tarama ve dizine ekleme için zaman tanıyın; Google bunun günler, hatta haftalar alabileceğini belirtir.

## Site adı hâlâ yanlışsa: kontrol listesi

- **Ad genel mi?** Tümüyle “şehir + hizmet” biçimindeki adlar seçilmeyebilir.
- **Tutarsızlık var mı?** Yapılandırılmış veride “Örnek Halı Yıkama”, başlıkta “ÖRNEK Temizlik Hizmetleri Ltd. Şti.”, logoda başka bir ad varsa sistem kararsız kalır.
- **İşaretleme ana sayfada mı?** Yalnızca iletişim ya da hakkımızda sayfasındaysa dikkate alınmaz.
- **İki `WebSite` bloğu var mı?** Tema ile eklenti ayrı ayrı ekliyor olabilir.
- **Yönlendirme var mı?** Ana sayfa başka bir adrese yönleniyorsa işaretleme hedef sayfada olmalı.
- **Alt alan adı mı?** Alt alan adının ana sayfasında işaretleme yoksa alan adı düzeyindeki site adı yedek olarak kullanılabilir.
- **Aynı adı taşıyan başka site var mı?** Google genellikle doğası gereği küresel olan iki farklı site için aynı adı kullanmaz; bu yüzden alternatif ad vermek önemlidir.

Alan adını site adı olarak görmek istiyorsanız (ya da en azından yedek olarak), alan adını `alternateName` içinde belirtebilirsiniz.

## Site adı, favicon ve işletme adı birlikte düşünülmeli

Arama sonucunda kullanıcı önce küçük simgeyi ve yanındaki adı görür. İkisi birlikte markanızdır:

- Favicon’u da düzenleyin ([favicon nasıl gösterilir?](/blog/google-arama-sonuclarinda-favicon-nasil-gosterilir/)).
- Site adınız ile Google İşletme Profili’ndeki işletme adı birbirini tutsun; farklı adlar müşteriyi şaşırtır ([NAP tutarlılığı](/blog/ad-adres-telefon-tutarliligi/)).
- Marka adınızı değiştirdiyseniz ana sayfa, işaretleme, başlık şablonu ve sosyal profilleri aynı gün güncelleyin.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir mimarlık ofisinin sitesi aramada marka adıyla değil, “ornekmimarlik.com.tr” alan adıyla görünüyor.

- **Teşhis:** Ana sayfada `WebSite` işaretlemesi yok; `<title>` “Ana Sayfa”, `og:site_name` ise temanın adı.
- **Düzeltme:** Ana sayfaya `name: "Örnek Mimarlık"` ve alternatif olarak kısaltma ile alan adı ekleniyor; `<title>` ve `og:site_name` aynı ada çekiliyor.
- **Kontrol:** Şema doğrulayıcıyla test ediliyor, ana sayfa yeniden taramaya gönderiliyor; birkaç hafta sonra marka aramasında görünüm kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **`WebSite` işaretlemesini ana sayfa dışına koymak.**
2. **Genel bir ifadeyi site adı olarak seçmek.**
3. **Başlık, `og:site_name` ve işaretlemede farklı ad kullanmak.**
4. **Zengin Sonuçlar Testi’nde görünmüyor diye işaretlemeyi hatalı sanmak.**
5. **Alternatif ad vermemek.**
6. **Yeniden taramayı beklemeden tekrar tekrar değiştirmek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- ana sayfanızdaki ad kaynaklarını (işaretleme, başlık, `og:site_name`, görünür metin) denetleriz,
- `WebSite` işaretlemesini tek blokta ve doğru adreste kurarız,
- kopya ana sayfa ve yönlendirme sorunlarını gideririz,
- site adı ile favicon’un arama sonucundaki görünümünü izleriz.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Site adını Google’da kendim değiştirebilir miyim?

Doğrudan hayır; site adı otomatik oluşturulur. Tercihinizi ana sayfadaki `WebSite` yapılandırılmış verisiyle bildirirsiniz.

### Neden alan adım görünüyor?

Tercih ettiğiniz ad genel, tutarsız ya da belirtilmemiş olabilir. Google başka seçenek bulamazsa alan adını kullanabilir.

### İşaretlemeyi her sayfaya eklemeli miyim?

Hayır. Google’a göre yalnızca ana sayfaya eklemeniz gerekir.

### Zengin Sonuçlar Testi site adını neden göstermiyor?

Site adları bu testte desteklenmez. Söz dizimi için şema doğrulayıcı, erişim için URL Denetleme kullanın.

### Blog alt dizinime ayrı site adı verebilir miyim?

Hayır. Site adı alan adı ya da alt alan adı düzeyinde desteklenir; alt dizin düzeyinde desteklenmez.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’ya site adı sağlama](https://developers.google.com/search/docs/appearance/site-names?hl=tr)
