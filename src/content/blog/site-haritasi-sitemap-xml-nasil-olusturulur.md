---
title: Site Haritası (sitemap.xml) Nasıl Oluşturulur ve Gönderilir?
description: "Site haritası (sitemap.xml) nedir, kimler için gerekir? Nasıl oluşturulur, kuralları nelerdir, Search Console ve robots.txt ile nasıl gönderilir?"
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir XML dosyası ve sitenin sayfalarını gösteren harita"
---

**Kısa cevap:** Site haritası, sitenizde önemsediğiniz URL’leri içeren ve Google’a sayfalarınızı bildiren bir dosyadır. WordPress, Wix gibi sistemler çoğunlukla otomatik üretir. Dosyanın adresini bulun (genellikle `/sitemap.xml`), `robots.txt` dosyanıza `Sitemap:` satırı olarak ekleyin ve Search Console’dan gönderin. Tek bir dosya en fazla 50 MB ya da 50.000 URL içerebilir. Küçük ve iyi bağlanmış sitelerde zorunlu değildir.

Site haritası, teknik SEO’nun en bilinen ama en çok yanlış anlaşılan parçasıdır: çoğu işletme sahibi onu sıralamayı yükselten bir araç sanır. Oysa görevi, Google’ın sayfalarınızı **bulmasına** yardımcı olmaktır. Bu yazı, site haritasının ne olduğunu, kimler için gerektiğini ve nasıl oluşturulup gönderileceğini anlatıyor. Sitenizin genel durumu için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza da bakabilirsiniz.

## Site haritası nedir?

Site haritası, sitenizdeki sayfalar, görseller, videolar ve diğer dosyalar hakkında bilgi veren bir dosyadır. Google, bu dosyayı sitenizi daha verimli taramak için okur ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)). Dosya sıralama garantisi vermez; sayfaların keşfedilmesine yardımcı olur.

## Site haritasına ihtiyacım var mı?

Google’a göre sitenizin sayfaları doğru şekilde bağlandıysa Google genellikle sitenizin büyük çoğunluğunu keşfedebilir. Doğru bağlantı, önemli tüm sayfalara menü ya da sayfalar arası bağlantılarla ulaşılabilmesi demektir. Yine de site haritası şu durumlarda daha yararlıdır:

| Durum | Neden yararlı? |
| --- | --- |
| Siteniz çok büyük | Tüm sayfaların birbirine bağlandığından emin olmak zordur |
| Siteniz yeni ve dışarıdan az bağlantı alıyor | Googlebot başka sitelerden bağlantı almayan sayfaları keşfedemeyebilir |
| Çok sayıda görsel ya da video var | Site haritasındaki ek bilgiler Arama’da dikkate alınabilir |
| Sayfalar yeterince bağlanmamış | Yetim sayfalar bulunur |

Google, “küçük” sitelerde (iyi bağlanmış birkaç yüz sayfa gibi) site haritasına ihtiyacınız olmayabileceğini de söyler. Yine de zararı yoktur ve kurulumu kolaydır. WordPress, Wix ya da Blogger gibi bir içerik yönetim sistemi kullanıyorsanız büyük olasılıkla sistem zaten bir site haritası hazırlamıştır.

## Hangi biçimde olmalı?

Google, site haritaları protokolünde tanımlanan biçimleri destekler ve bir biçim tercihi yoktur ([site haritası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)). En yaygın ve çok yönlü olanı **XML**’dir; görsel, video ve haber bilgisinin yanı sıra sayfaların yerelleştirilmiş sürümleri için de kullanılabilir. Çoğu içerik yönetim sistemi XML haritasını otomatik oluşturur.

En sade bir XML örneği:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/foo.html</loc>
    <lastmod>2022-06-04</lastmod>
  </url>
</urlset>
```

## Kurallar ve sınırlar

- **Boyut ve URL sayısı:** Tek bir site haritası en fazla 50 MB (sıkıştırılmamış) olabilir ya da en fazla 50.000 URL içerebilir. Daha büyükse birden fazla dosyaya bölün; isterseniz bir site haritası dizin dosyasıyla birleştirin.
- **Kodlama:** UTF-8 olmalı.
- **Konum:** Site kök dizininde yayımlamanızı Google önerir; çünkü kök dizindeki harita tüm site dosyalarını etkileyebilir.
- **Tam adresler:** `loc` değerleri tam ve doğru URL’ler olmalı.
- **Yalnızca standart ve dizinlenmesini istediğiniz sayfalar.** noindex verdiğiniz ya da yönlendirilen sayfaları koymayın.
- **`priority` ve `changefreq`:** Google ikisini de yok sayar; bu alanlara emek harcamayın.
- **`lastmod`:** Doğruysa işe yarar. Google, tutarlı ve doğrulanabilir biçimde (örneğin sayfanın gerçek son değişikliğiyle karşılaştırarak) doğru olduğundan emin olduğunda bu değeri kullanır; her güncellemede rastgele tarih değiştirmeyin.

## Site haritası nasıl oluşturulur?

Üç yol var:

1. **İçerik yönetim sistemiyle otomatik.** WordPress’te SEO eklentileri, Wix ve benzeri sistemlerde yerleşik özellik. Adresi çoğunlukla sitenizin ana adresine `/sitemap.xml` ya da benzeri bir ek yaparak bulursunuz; tarayıcıdan deneyin.
2. **Araçla üretmek.** Küçük statik siteler için site haritası oluşturan çevrimiçi ya da yerel araçlar vardır; çıktıyı sitenizin köküne yükleyin.
3. **Elle yazmak.** Birkaç sayfalık bir sitede yukarıdaki XML örneğine uygun elle yazılabilir; ama sayfa eklendikçe güncellemek gerekir.

Hangisini seçerseniz seçin, dosya otomatik güncelleniyorsa en güvenlisidir; elle yazılan harita çabuk eskir.

## Site haritası nasıl gönderilir?

Google’a iki yolla bildirebilirsiniz:

1. **Search Console’dan gönderin.** Search Console’a girin, site haritasının adresini ilgili alana yazıp gönderin. Gönderdikten sonra raporda işlendi mi, hata var mı bakın.
2. **robots.txt’ye ekleyin.** Dosyanıza `Sitemap: https://alanadiniz.com/sitemap.xml` satırını yazın. Google, robots.txt’yi tekrar taradığında site haritanızı bulur; birden fazla site haritası satırı yazabilirsiniz. robots.txt’nin kendisi için [robots.txt nedir?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazımıza bakın.

İki yöntemi birlikte kullanmanın bir sakıncası yoktur.

## Gönderdikten sonra neye bakılır?

1. **İşlendi mi?** Search Console’daki site haritası bölümünde durum “başarılı” olmalı.
2. **Kaç URL bulundu?** Beklediğiniz sayıyla karşılaştırın.
3. **Hata var mı?** Erişilemeyen ya da yönlendirilen URL’ler listelenebilir; düzeltin.
4. **Dizine eklenen sayfa sayısı:** Sayfa dizine ekleme raporuyla karşılaştırın. Haritadaki her sayfa dizine girmeyebilir; bunu nedenleriyle birlikte okuyun.

## En sık yapılan hatalar

1. **Haritaya yönlendirilen ve noindex sayfaları koymak.** Harita temiz olmalı.
2. **Eski haritayı bırakmak.** Site yenilendiğinde eski URL’ler haritada kalır.
3. **Yanlış alan adı.** http ve https ya da www ve www’suz karışıklığı. Haritadaki tüm adresler sitenizin asıl adresi olmalı.
4. **Çok sayfa yüklemek.** Önemsiz sayfaları (etiket arşivleri, iç arama) haritaya doldurmak.
5. **Haritanın robots.txt tarafından engellenmesi.**
6. **Gönderip bir daha bakmamak.**

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de 12 sayfalık yeni bir pansiyon sitesi, WordPress ile kurulu. Site haritası eklentisi otomatik `/sitemap.xml` üretmiş. Kontrol: tarayıcıda açılıyor; içinde ana sayfa, oda sayfaları, iletişim ve blog yazıları var; ama “teşekkür” sayfası ve eski deneme sayfaları da listelenmiş. Çözüm: gereksiz sayfalar noindex yapılıp haritadan çıkarılıyor, `robots.txt` dosyasına site haritası satırı ekleniyor ve Search Console’dan gönderiliyor. Bir hafta sonra rapordaki bulunan URL sayısı gerçek sayfa sayısıyla karşılaştırılıyor.

Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Hangi sayfalar haritada olmalı?

Haritaya yalnızca Google’ın dizine eklemesini istediğiniz, standart ve erişilebilir sayfaları koyun:

| Olmalı | Olmamalı |
| --- | --- |
| Ana sayfa, hizmet sayfaları, iletişim | Teşekkür ve giriş sayfaları |
| Önemli blog yazıları | noindex verilmiş sayfalar |
| Ürün ve kategori sayfaları | Başka adrese yönlendirilen sayfalar |
| Gerçek, özgün ilçe ve şube sayfaları | 404 veren sayfalar |
| Standart (canonical) adresler | Parametreli kopya adresler |

## Site yenilerken ya da büyütürken harita

Site her büyüdüğünde ya da yapısı değiştiğinde haritayı gözden geçirin:

1. **Yeni sayfa eklendi mi?** Otomatik üretilen haritada görünmeli.
2. **Silinen sayfa haritadan çıktı mı?** Silinmiş adresin haritada kalması hatadır.
3. **Adres yapısı değişti mi?** Yeni adresleri içeren haritayı gönderin.
4. **Alan adı ya da https geçişi oldu mu?** Haritadaki tüm adresler yeni adres biçiminde olmalı.

## Birden çok harita ve dizin dosyası

Siteniz büyükse ya da farklı bölümleri ayrı izlemek istiyorsanız birden fazla harita dosyası kullanabilirsiniz (ör. sayfalar, blog yazıları, ürünler) ve bir site haritası dizin dosyasında birleştirebilirsiniz. Google, birden fazla harita göndermenin Search Console’da her haritanın arama performansını ayrı izlemeye yardımcı olduğunu belirtir. Küçük bir işletme sitesi için tek harita yeter.

## Denizli SEO bu konuda nasıl yardımcı olur?

Site haritası küçük bir dosyadır; ama yanlış kurulursa Google’a hatalı sinyal verir. [Teknik SEO hizmetimizde](/teknik-seo/):

- site haritasını ve robots.txt dosyasını sitenizin yapısına göre düzenler, Search Console’a göndeririz,
- haritadaki gereksiz, yönlendirilen ya da noindex sayfaları temizleriz,
- hangi sayfaların dizinde olduğunu, hangilerinin neden dışarıda kaldığını çıkarırız,
- değişiklikleri yazılı rapor olarak sunarız.

Sitenizin haritasına bakmamızı isterseniz [bize yazın](/iletisim/); ücretsiz ve yazılı bir analiz hazırlayalım.

### Haritayı kaç günde bir güncellemeliyim?

Elle yönetilen harita sayfa eklendiğinde ya da kaldırıldığında güncellenmeli. Otomatik üretilen harita bunu sizin yerinize yapar; yine de ayda bir kontrol edin.

### Harita hata veriyorsa ne yapmalıyım?

Search Console’daki raporda hata türünü okuyun: genellikle erişilemeyen ya da yönlendirilen adres, geçersiz biçim ya da yanlış alan adı sorunudur. Düzeltip yeniden gönderin.

## Sık sorulan sorular

### Site haritası sıralamamı yükseltir mi?

Doğrudan sıra garantisi yok. Site haritası sayfaların keşfedilmesine yardımcı olur; sıralamayı içerik, teknik düzen ve tanınırlık belirler.

### Kaç site haritası olmalı?

Tek dosya çoğu küçük site için yeter. 50.000 URL ya da 50 MB’ı aşarsanız bölmek gerekir.

### Sitemi yeniden yaptım, haritayı ne yapmalıyım?

Yeni adresleri içeren haritayı oluşturun, eski haritayı kaldırın ya da güncelleyin ve Search Console’dan yeniden gönderin. Adres değiştirdiyseniz eski adreslerin yönlendirildiğinden de emin olun; bkz. [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/).

### Site haritası olmayan site Google’da çıkar mı?

Çıkabilir. Sayfalarınız iyi bağlanmışsa Google çoğu sayfayı keşfeder. Site haritası yalnızca keşfi kolaylaştırır.

## Kaynaklar

- [Google Search Central: site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
- [Google Search Central: site haritası oluşturma ve gönderme](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=tr)
- [Google Search Central: SEO Başlangıç Kılavuzu](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr)
