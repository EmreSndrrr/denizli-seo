---
title: "JSON-LD ile Microdata Arasındaki Fark Nedir?"
description: "JSON-LD ile microdata arasındaki fark nedir? Google’ın önerdiği biçim, uygulama farkları, bakım kolaylığı ve hangi sitede hangisi seçilmeli rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sayfa kodundan ayrı bir JSON-LD bloğu ile HTML içine gömülü microdata öznitelikleri karşılaştırması"
---

JSON-LD, yapılandırılmış veriyi sayfanın içine ayrı bir betik bloğu olarak yazmanın yoludur; microdata ise aynı bilgiyi sayfanın görünen HTML etiketlerinin üzerine özniteliklerle ekler. Google üç biçimi (JSON-LD, microdata, RDFa) destekler; işaretleme geçerli ve doğru uygulandığında üçü Google için aynıdır. Yine de Google genel olarak, sitenizin kurulumu izin veriyorsa, uygulaması ve sürdürmesi en kolay olan biçim olan JSON-LD’yi kullanmanızı önerir. Çoğu işletme sitesi için doğru seçim JSON-LD’dir.

Bu yazıda iki yöntemin ne olduğunu, farklarını, Google’ın önerisini, hangi durumda microdata’nın mantıklı olabileceğini ve JSON-LD’yi nasıl doğru uygulayacağınızı anlatıyoruz. Yapılandırılmış verinin genel anlatımı için [yapılandırılmış veri nedir? işletmeler için rehber](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Yapılandırılmış veri biçimleri nelerdir?

Google’ın yapılandırılmış verilere giriş rehberi üç biçimi sayar: JSON-LD (önerilen), microdata ve RDFa. Rehber, işaretlemenin geçerli olması ve özelliğin belgelerine göre doğru uygulanması koşuluyla üç biçimin de Google için aynı olduğunu, genel olarak ise uygulaması ve sürdürmesi en kolay biçimin (çoğu durumda JSON-LD) kullanılmasını önerdiğini söyler ([yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)).

Yani biçim seçimi bir sıralama meselesi değil, uygulama ve bakım meselesidir. Google üç biçimi de aynı ciddiyetle okur; seçimi belirleyen, hangisinin sitenizde doğru ve sürdürülebilir kurulabileceğidir.

## JSON-LD nedir?

JSON-LD (JavaScript Object Notation for Linked Data), yapılandırılmış veriyi sayfanın HTML’inden ayrı bir JSON bloğunda tutar. Genellikle `<script type="application/ld+json">` etiketi içinde, sayfanın `<head>` ya da `<body>` bölümünde yer alır. Örnek:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Örnek Diş Kliniği",
  "telephone": "+90 258 000 00 00",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Merkezefendi",
    "addressRegion": "Denizli"
  }
}
</script>
```

Bu blok sayfada görünmez; tarayıcı ona dokunmaz, arama motoru okur. Google, içerik yönetim sistemlerindeki yerleşik widget’lar gibi sayfanın içeriğine dinamik olarak eklenen JSON-LD verilerini de okuyabileceğini belirtir.

## Microdata nedir?

Microdata, yapılandırılmış veriyi HTML etiketlerinin üzerine öznitelikler ekleyerek tanımlar: `itemscope`, `itemtype`, `itemprop` gibi. Google, microdata’yı HTML içine yapılandırılmış veri yerleştirmek için kullanılan açık topluluk HTML spesifikasyonu olarak tanımlar; genellikle `<body>` öğesinde kullanılır ama `<head>` içinde de kullanılabilir. Örnek:

```html
<div itemscope itemtype="https://schema.org/Dentist">
  <h1 itemprop="name">Örnek Diş Kliniği</h1>
  <span itemprop="telephone">+90 258 000 00 00</span>
</div>
```

Burada bilgi görünen metnin kendisine bağlıdır. Yani başlık ya da telefon numarası aynı zamanda işaretlenmiş veridir. Bu, bilginin görünür içerikle birebir uyumlu olmasını sağlar ama kodu karmaşıklaştırır.

> **Hizmet almak için iletişime geçin.** Sitenizdeki yapılandırılmış veriyi doğru biçimde ve test ederek kuralım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Karşılaştırma tablosu

| Özellik | JSON-LD | Microdata |
| --- | --- | --- |
| Nerede yazılır? | Ayrı betik bloğu | Görünen HTML öğelerinin öznitelikleri |
| Görünür içerikten ayrı mı? | Evet | Hayır; içerikle iç içe |
| Bakım | Kolay; tek yerde | Zor; şablona dağılır |
| Hata riski | Görünür içerikle uyumsuzluk | Etiket yapısı bozulursa işaretleme bozulur |
| Google önerisi | Genel olarak önerilen | Destekleniyor |
| Dinamik ekleme | Mümkün | Zorlaşır |
| Geliştirme ekibi için | Genellikle daha kolay | HTML şablonuna müdahale gerekir |

Tablodaki ana fark şudur: JSON-LD bilgiyi ayrı bir yerde toplar; microdata bilgiyi sayfanın görünür parçalarına dağıtır. Ayrı toplamak bakımı kolaylaştırır, ama görünür içerikle işaretleme arasında uyumsuzluk riskini artırır; bu nedenle JSON-LD’yi güncel tutmak önemlidir.

## Hangi durumda hangisi seçilir?

- **Çoğu işletme sitesi, WordPress, Astro ve benzeri sistemler:** JSON-LD. Eklentiler ve temalar da genellikle JSON-LD üretir.
- **Mevcut sitede zaten microdata varsa ve düzgün çalışıyorsa:** Acele etmeyin; işaretleme geçerli ve doğruysa Google için sorun yoktur. Yeniden yazma maliyetine değip değmediğine bakın.
- **Geliştirici yalnızca şablon düzeyinde çalışabiliyorsa:** Hangi biçimin güvenle uygulanabildiğine göre karar verin.
- **Birden çok biçimi birlikte kullanmak:** Mümkündür ama çelişen bilgi vermemeye dikkat edin; aynı varlık için iki farklı kayıt kurmak karışıklık yaratır.

İşaretlemenin hangi türde olacağı (Organization, LocalBusiness, Product vb.) ayrı bir karardır ([Organization ve LocalBusiness schema arasındaki fark](/blog/organization-ve-localbusiness-schema-farki/)).

## JSON-LD’yi doğru uygulamak için adımlar

1. **Hangi sayfaya hangi tür?** Ana sayfa ve iletişim için işletme türü, ürün sayfaları için Product, yazılar için Article ya da BlogPosting.
2. **Gerçek ve görünür bilgiyi yazın.** İşaretlenen her bilgi sayfada kullanıcıya da görünür olmalı; Google’ın genel yönergeleri, yapılandırılmış verilerin başvurduğu içeriğin kullanıcıdan gizlenmemesini ister ([yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)).
3. **Bloğu `<head>` ya da `<body>` içine koyun.** Çoğu sistem `<head>` içinde kullanır.
4. **Sözdizimini doğrulayın.** Virgül, tırnak ve parantez hataları bloğu bozar.
5. **Zengin Sonuçlar Testi’yle test edin.** Hata ve uyarıları düzeltin.
6. **Yayından sonra Search Console’da izleyin.** Yapılandırılmış veri raporlarında sorun var mı?
7. **İçerik değişince JSON-LD’yi de güncelleyin.** Fiyat, saat ve adres değiştiğinde işaretleme eski kalmasın.

## WordPress ve eklentiler

WordPress’te SEO eklentileri ve tema özellikleri çoğunlukla JSON-LD üretir. Eklenti kullanıyorsanız çıktının doğru ve çelişkisiz olduğunu kontrol edin: birden fazla eklenti aynı türü iki kez yazıyor olabilir. Eklentinin ürettiği işaretlemeyi sayfa kaynağında “application/ld+json” araması yaparak görebilirsiniz. Eklenti seçimi için [WordPress SEO eklentisi seçerken nelere bakılmalı?](/blog/wordpress-seo-eklentisi-secerken-nelere-bakilmali/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir mobilya atölyesinin sitesinde işletme bilgileri microdata ile ürün kartlarının içine dağıtılmış; şablon güncellendiğinde bazı alanlar kayboluyor ve Search Console’da hata çıkıyor.

Atölye işaretlemeyi tek bir JSON-LD bloğuna taşıyor: işletme türü, adres, telefon, saat ve logo ana sayfa ve iletişim sayfasında; ürün bilgileri ürün sayfalarında ayrı bloklarda. Eski microdata kaldırılıyor ki çelişen kayıt olmasın. Zengin Sonuçlar Testi’yle doğrulanıyor, Search Console’da hata raporları izleniyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **JSON-LD’yi bir kez yazıp güncellememek.** Bilgi değişir, işaretleme eski kalır.
2. **Aynı bilgiyi iki biçimle çelişkili yazmak.** Karışıklık yaratır.
3. **Görünmeyen bilgiyi işaretlemek.** Genel yönergelere aykırıdır.
4. **Sözdizimi hatasını fark etmemek.** Test aracıyla doğrulayın.
5. **İki eklentinin aynı türü yazması.** Çıktıyı kontrol edin.
6. **Biçim değiştirmek için acele etmek.** Çalışan, doğru microdata varsa yeniden yazma gerekmez.

## Geçiş yapacaksanız güvenli sıra

Microdata’dan JSON-LD’ye geçmeye karar verdiyseniz işi aşamalara bölün. Önce mevcut işaretlemenin envanterini çıkarın: hangi sayfada hangi tür, hangi alanlar var? Ardından aynı bilgiyi JSON-LD olarak hazırlayın ve test ortamında doğrulayın. Canlıya alırken eski microdata’yı aynı anda kaldırın; ikisini birlikte bırakırsanız aynı varlık iki kez tanımlanır ve çelişki riski doğar. Geçişten sonra Search Console’un yapılandırılmış veri raporlarında hata ve uyarıların arttığına bakın; birkaç hafta izleyin. Şablon düzeyinde yapılan bu tür değişikliklerde bir pilot sayfa grubuyla başlamak, hatayı tüm siteye yaymadan yakalamanızı sağlar.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki mevcut yapılandırılmış veriyi (JSON-LD, microdata, eklenti çıktısı) tarar, çelişki ve hataları listeleriz,
- doğru türleri ve tutarlı bilgileri içeren JSON-LD’yi hazırlarız,
- Zengin Sonuçlar Testi ve Search Console ile doğrulama yapar,
- sonuç vaat etmeden, yapılandırılmış veri durumunu izleriz.

Yapılandırılmış verileriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Yapılandırılmış veri biçiminizi birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### JSON-LD mi microdata mı daha iyi?

Google üç biçimi de destekler ve doğru uygulandığında aynı kabul eder; ama uygulaması ve bakımı kolay olduğu için genel olarak JSON-LD’yi önerir.

### Microdata’dan JSON-LD’ye geçmeli miyim?

Mevcut microdata doğru çalışıyorsa zorunlu değil. Bakım zorlaşıyorsa geçiş mantıklı olabilir.

### İki biçimi birlikte kullanabilir miyim?

Mümkündür; ama aynı varlık için çelişen bilgi yazmayın.

### JSON-LD sayfada görünür mü?

Hayır; arama motoru okur, ziyaretçi görmez. Ama işaretlenen bilgi sayfada kullanıcıya görünür olmalı.

### Test için hangi aracı kullanmalıyım?

Google’ın Zengin Sonuçlar Testi ve Search Console’un yapılandırılmış veri raporları temel araçlardır.

## Kaynaklar

- [Google Arama Merkezi: Yapılandırılmış veri işaretlemenin nasıl çalıştığına giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
