---
title: "UTM Parametreli URL’ler SEO İçin Nasıl Yönetilir?"
description: "UTM parametreli URL’ler SEO’yu nasıl etkiler? Kopya adres riski, canonical ile birleştirme, iç bağlantıda UTM hatası ve kampanya bağlantıları için kurallar."
date: 2026-11-15
service: teknik-seo
imageAlt: "UTM parametreli kampanya adresi ile temiz kanonik adresin eşleşmesi"
---

UTM parametreleri (`utm_source`, `utm_medium`, `utm_campaign`) sayfanın içeriğini değiştirmez; yalnızca ziyaretin nereden geldiğini analitik aracına bildirir. Ama her parametreli adres Google için ayrı bir adrestir ve aynı sayfanın kopyası gibi görünebilir. Yönetimi üç kurala dayanır: her sayfada parametresiz adresi gösteren bir canonical etiketi bulunsun, UTM’i yalnızca dışarıdan gelen kampanya bağlantılarında kullanın ve site içi bağlantılara asla UTM eklemeyin.

Doğru kurulduğunda UTM, SEO’ya zarar vermeden ölçümü keskinleştirir. Adres ve ölçüm düzeni için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## UTM parametresi nedir?

UTM, bir bağlantının sonuna eklenen izleme etiketidir:

`https://ornek.com/kampanya/?utm_source=instagram&utm_medium=social&utm_campaign=kis-indirimi`

Ziyaretçi bu bağlantıya tıkladığında analitik aracı, oturumu “instagram / social / kis-indirimi” olarak kaydeder. Sayfa aynı sayfadır; yalnızca adres uzamıştır. E-posta bültenleri, sosyal medya paylaşımları, QR kodlar ve reklam dışı kampanyalar için kullanılır.

## SEO açısından sorun nerede?

Google’ın URL yapısı rehberi iki ilke koyar: mümkün olduğunca az parametre kullanın ve içeriği değiştirmeyen gereksiz parametreleri çıkararak adresleri kısaltın ([URL yapısı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)).

UTM tam olarak “içeriği değiştirmeyen parametre”dir. Kontrolsüz kaldığında:

- **Kopya adresler oluşur.** `…/kampanya/` ile `…/kampanya/?utm_source=…` aynı içeriği taşır ([kopya içerik nedir?](/blog/kopya-icerik-nedir-nasil-onlenir/)).
- **Tarama boşa gider.** Parametre kombinasyonları çoğaldıkça Googlebot aynı sayfayı farklı adreslerle tekrar tekrar ister.
- **Bağlantı sinyalleri bölünür.** Biri sayfanızı UTM’li adresle paylaşır ya da ona bağlantı verirse, sinyal temiz adrese değil parametreli sürüme gider.
- **Sonuçlarda çirkin adres görünebilir.** Google parametreli sürümü dizine alırsa kullanıcı o adresi görür.

Bunların hiçbiri felaket değildir; Google kopyaları çoğu zaman kendisi kümeler. Ama tercihinizi açıkça bildirmek hem daha güvenli hem daha temizdir.

## Çözüm 1: Kendini gösteren canonical

Her sayfanın `<head>` bölümünde, sayfanın **parametresiz** adresini gösteren bir canonical etiketi bulunsun:

```html
<link rel="canonical" href="https://ornek.com/kampanya/">
```

Böylece sayfa UTM’li adresle açılsa bile Google’a “asıl adres budur” denmiş olur. Google, canonical kullanma nedenlerini anlatırken tam bu örneği verir: kullanıcıların ürün sayfasına `?gclid=ABCD` gibi parametreli bir adres yerine temiz adresten ulaşmasını tercih edebilirsiniz; canonical ayrıca kopya sayfaların bağlantı sinyallerini tek adreste birleştirmeye yarar ([standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)).

Dikkat edilecekler:

1. Canonical, isteğin adresinden otomatik üretiliyorsa parametreyi de içine alabilir. Sayfayı UTM’li adresle açıp kaynağa bakın: canonical temiz adresi mi gösteriyor?
2. Canonical mutlak adres olsun (`https://` ile başlasın).
3. Sayfada tek canonical bulunsun ([canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Çözüm 2: Site içinde UTM kullanmayın

En zararlı hata, site içindeki bağlantılara UTM eklemektir: ana sayfadaki bir afişe `?utm_source=anasayfa&utm_medium=banner` yazmak gibi. İki ayrı zarar verir:

- **Ölçümü bozar.** Analitik araçları yeni bir kampanya parametresi gördüğünde ziyaretin kaynağını ona göre yeniden etiketler. Google’dan organik gelen ziyaretçi afişe tıkladığı anda “anasayfa / banner” olarak görünmeye başlar; organik aramanın getirdiği dönüşümler kaybolur. SEO’nun katkısını ölçmeye çalışan biri için bu, verinin en değerli kısmını silmektir ([SEO’dan gelen talepler nasıl ölçülür?](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/)).
- **Kopya adresi taranabilir kılar.** Googlebot site içi bağlantıları izler; UTM’li iç bağlantı, parametreli adresi doğrudan Google’a tanıtır.

Site içi bir öğenin tıklanmasını ölçmek istiyorsanız UTM yerine analitik aracında olay (event) tanımlayın.

## Çözüm 3: Dış bağlantılarda düzen

UTM’in yeri dışarıdan sitenize gelen bağlantılardır. Burada da birkaç kural işinizi kolaylaştırır:

1. **Adlandırma kuralı yazın.** Hep küçük harf, Türkçe karaktersiz, tire ile: `utm_source=instagram`, `Instagram` değil. Google, URL’lerin büyük/küçük harfe duyarlı olduğunu hatırlatır; analitikte de `Instagram` ile `instagram` iki ayrı satır olur.
2. **Bir tabloda tutun.** Hangi kampanya, hangi kaynak, hangi bağlantı.
3. **Kalıcı bağlantı beklediğiniz yerlerde UTM kullanmayın.** İş ortağı sayfası, rehber kaydı, basın bülteni, konuk yazı gibi yerlerde verdiğiniz adres yıllarca kalır ve başkalarınca kopyalanır. Temiz adresi verin; bu trafiği analitikte yönlendiren alan adından zaten görürsünüz.
4. **Google İşletme Profili istisnası.** Profildeki web sitesi bağlantısına UTM eklemek yaygın ve yararlı bir uygulamadır: haritadan gelen tıklamaları organik aramadan ayırmanızı sağlar. Sayfada canonical doğruysa SEO açısından sorun çıkarmaz ([yerel SEO sonuçları nasıl ölçülür?](/blog/yerel-seo-sonuclari-nasil-olculur/)).
5. **Organik sonuçlara UTM ekleyemezsiniz ve gerekmez.** Arama motorundan gelen trafik zaten otomatik tanınır.

## robots.txt ile engellemeli miyim?

Genellikle hayır. `Disallow: /*?utm_` gibi bir kural taramayı engeller; ama Google engellenen adresi tarayamadığı için içindeki canonical etiketini de göremez. Parametreli adres dış bağlantı almışsa içeriksiz bir sonuç olarak dizinde kalabilir ve o bağlantının sinyali temiz adrese aktarılamaz.

Sıra şöyle olmalı:

- **Varsayılan:** Taramaya izin verin, canonical ile birleştirin.
- **İstisna:** Çok büyük bir sitede parametreli adresler tarama bütçesini gerçekten tüketiyorsa robots.txt değerlendirilebilir; küçük ve orta sitelerde bu sorun pratikte oluşmaz ([büyük sitelerde tarama bütçesi](/blog/buyuk-sitelerde-tarama-butcesi-nasil-yonetilir/)).

## Diğer izleme parametreleri

Aynı mantık, kendiliğinden eklenen parametreler için de geçerlidir: reklam tıklama kimlikleri (`gclid`, `fbclid` gibi), e-posta araçlarının eklediği kimlikler, oturum kimlikleri. Bunları siz yazmazsınız; platformlar ekler. Sizin göreviniz yine aynıdır: canonical temiz adresi göstersin, site haritasında yalnızca temiz adresler bulunsun, iç bağlantılar parametresiz olsun.

Oturum kimliği özel bir durumdur: Google, mümkünse URL’de oturum kimliği kullanmaktan kaçınmayı ve onun yerine çerez kullanmayı önerir.

## Kontrol listesi

1. Bir sayfayı `?utm_source=test` ekleyerek açın; kaynakta canonical temiz adresi gösteriyor mu?
2. Sayfa UTM’li adresle de 200 dönüyor ve doğru içeriği gösteriyor mu? (Bazı önbellek kurulumları parametreli adreste hata verir.)
3. Site içinde UTM’li bağlantı var mı? Sayfa kaynaklarında ve menüde `utm_` aratın.
4. Site haritasında parametreli adres var mı?
5. Search Console’da Sayfa dizine ekleme raporunda `utm_` içeren adresler hangi durumda? “Uygun standart etikete sahip alternatif sayfa” görmek, canonical’ın çalıştığını gösterir.
6. Analitikte kaynak adlarında büyük/küçük harf ya da yazım farkı nedeniyle bölünmüş satırlar var mı?

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir butik otelin analitiğinde organik aramadan gelen rezervasyon talepleri neredeyse sıfır görünüyor; oysa trafiğin çoğu Google’dan geliyor.

- **Teşhis:** Ana sayfadaki “Erken rezervasyon” afişi `?utm_source=site&utm_medium=banner` ile bağlanmış. Organik gelen ziyaretçi afişe tıklayınca kaynak değişiyor; talepler “site / banner” altında birikiyor. Ayrıca UTM’li adresler dizine girmiş.
- **Düzeltme:** İç bağlantılardan UTM kaldırılıyor, afiş tıklaması olay olarak ölçülüyor; canonical etiketleri parametresiz adrese sabitleniyor.
- **İzleme:** Bir ay sonra organik aramanın talep payı yeniden okunuyor; dizin raporunda parametreli adreslerin durumu kontrol ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Site içi bağlantılara UTM eklemek.**
2. **Canonical etiketinin parametreyi de içermesi.**
3. **Kalıcı dış bağlantılarda UTM’li adres vermek.**
4. **UTM adlarında büyük/küçük harf ve yazım tutarsızlığı.**
5. **Parametreli adresleri robots.txt ile engelleyip canonical’ı görünmez yapmak.**
6. **Site haritasına parametreli adres koymak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki parametreli adresleri ve dizin durumlarını çıkarırız,
- canonical kurulumunu parametreli adreslerle test ederiz,
- iç bağlantılardaki UTM’leri temizler, yerine olay ölçümü kurarız,
- kampanya bağlantıları için adlandırma kuralı ve tablo hazırlarız.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### UTM parametreleri SEO’ya zarar verir mi?

Doğru canonical ile hayır. Kontrolsüz kullanıldığında kopya adres ve bölünmüş sinyal üretir.

### Site içi bağlantılarda UTM kullanabilir miyim?

Kullanmayın. Ziyaretin asıl kaynağını siler ve parametreli adresleri taranabilir kılar; bunun yerine olay ölçümü kurun.

### UTM’li adresleri robots.txt ile engellemeli miyim?

Çoğu sitede hayır. Engellenen adreste canonical okunamaz.

### Google İşletme Profili bağlantısına UTM eklenir mi?

Eklenebilir; haritadan gelen tıklamaları ayırmaya yarar. Sayfadaki canonical temiz adresi göstermelidir.

### UTM’li adresim Google’da çıkıyor, ne yapmalıyım?

Canonical’ın temiz adresi gösterdiğini doğrulayın, iç bağlantıları temizleyin ve yeniden taranmasını bekleyin.

## Kaynaklar

- [Google Arama Merkezi: URL yapısı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
- [Google Arama Merkezi: rel="canonical" ve diğer yöntemlerle standart URL belirtme](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=tr)
