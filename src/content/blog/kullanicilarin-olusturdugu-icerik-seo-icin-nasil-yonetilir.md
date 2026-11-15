---
title: "Kullanıcıların Oluşturduğu İçerik SEO İçin Nasıl Yönetilir?"
description: "Yorum ve forum gibi kullanıcı içeriği SEO için nasıl yönetilir? rel=ugc, moderasyon, yeni kullanıcı noindex’i, spam önleme ve değerli içeriği öne çıkarma."
date: 2026-11-15
service: teknik-seo
imageAlt: "Yorum ve soru alanlarında moderasyon, rel=ugc bağlantısı ve spam filtresi"
---

Kullanıcı içeriği (yorum, soru-cevap, forum, ilan) siteye değer katar ama spam’in de ana giriş kapısıdır. Dört kural: kullanıcı bağlantılarını `rel="ugc"` ile işaretleyin, yeni ve güvenilmeyen kullanıcıların içeriğini onaya bağlayın (ya da geçici olarak `noindex` yapın), spam’i yorum formunda caydırıcı adımlarla ve filtrelerle engelleyin ve kaliteli içeriği öne çıkarıp değersizi kaldırın. Google, spam politikalarının sitenizin kullanıcı içeriği için de geçerli olduğunu ve engellemenin genellikle zor olmadığını belirtir.

Kontrolsüz bir yorum alanı bir gün Japonca ilaç reklamlarıyla dolabilir; ya da değerli bir soru-cevap bölümü size yüzlerce uzun kuyruklu sorguda trafik getirebilir. Hangisinin olacağı yönetime bağlıdır. Teknik kurulum için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Kullanıcı içeriği neden önemlidir?

Faydaları:

- **Özgün içerik:** Üretici metnini kopyalayan ürün sayfalarına gerçek müşteri dili katar ([ürün yorumları](/blog/urun-yorumlari-e-ticaret-seosunda-nasil-kullanilir/)).
- **Uzun kuyruklu sorgular:** Müşterilerin sorduğu sorular ve verdiği cevaplar, sizin yazmayacağınız sorguları kapsar.
- **Güven ve etkileşim:** Gerçek yorumlar karar verirken güvenilir bulunur.
- **Taze içerik:** Sayfa zamanla güncellenir.

Riskleri:

- **Spam:** Bağlantı ve reklam spam’i.
- **Düşük kaliteli ya da zararlı içerik:** Hakaret, yanlış bilgi, kişisel veri.
- **Kopya ve boş sayfalar:** Düşük değerli kullanıcı sayfaları dizini şişirir.
- **Sitenin itibarı:** Spam içerikli sayfaların sitenizde bulunması hem kullanıcıyı hem Google’ı olumsuz etkiler.

## Google’ın yönergesi: kullanıcı kaynaklı spam’i önleme

Google’ın yardım sayfası, spam yapanların genellikle herkese açık yorum formlarından ve kullanıcı içeriği girişlerinden yararlandığını, saldırdıkları şüphe çekmeyen sitede spam barındıran içerik oluşturduklarını söyler. Önleme genellikle zor değildir; hatta kullanıcıların etkileşime girmeden önce tamamlaması gereken alışılmadık bir görev gibi basit caydırıcılar bile spam yapanları vazgeçirebilir ([kullanıcılar tarafından oluşturulan spam’i önleme](https://developers.google.com/search/docs/monitor-debug/prevent-abuse?hl=tr)).

Google’ın önerdiği adımlar sonraki bölümlerde uygulamaya uyarlanmıştır.

## Adım 1: Bağlantıları `rel="ugc"` ile işaretleyin

Google’a göre yorumlar ve forum yayınları gibi kullanıcı içeriği bağlantılarını `ugc` değeriyle işaretlemeniz önerilir; `nofollow` da kabul edilebilir bir yoldur ([giden bağlantıları niteleme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)).

```html
<a rel="ugc" href="https://ornek-site.com/">Ziyaretçi sitesi</a>
```

Neden: kullanıcı bağlantılarını güvenerek onaylamıyorsunuz; Google bu bağlantıların genellikle izlenmediğini belirtir. Spam yapanlar çoğunlukla kendi sitelerinin bağlantısını bırakmaya çalıştığından, bu işaretleme bağlantı spam’inin cazibesini düşürür.

Uygulama:

- WordPress ve çoğu yorum sistemi bunu otomatik yapar; sayfa kaynağında yorum bağlantılarında `rel` değerini kontrol edin.
- Güvenilir katkıcıları ödüllendirmek isterseniz, zaman içinde sürekli yüksek kaliteli katkı yapan üyelerin bağlantılarından bu özelliği kaldırabilirsiniz (Google’ın önerisi).
- Ücretli ya da ticari bağlantılar için `sponsored` kullanılır; ayrımı karıştırmayın ([sponsorlu bağlantılar](/blog/sponsorluk-baglantilari-sponsored-nasil-isaretlenir/)).

## Adım 2: Yeni kullanıcı içeriğini sınırlayın

Google şu öneriyi yapar: spam yapanlar içeriklerinin arama motorlarında görünmesini istedikleri için, topluluğunuzda henüz itibarı olmayan yeni kullanıcıların yayınlarına bir `noindex` robots meta etiketi eklemeyi düşünün; kullanıcı itibar kazandığında içeriğinin dizine eklenmesine izin verebilirsiniz. Bu, spam yapanları platformdan uzaklaştırır.

Uygulaması:

- İlk yorum ya da yazıda içeriği `noindex` ile yayınlayın ya da onaya bağlayın.
- Belirli sayıda onaylı katkıdan sonra otomatik olarak dizine açın.
- Ticari sitelerde bu, ürün yorumlarının hemen dizine girmesini geciktirir; kabul edilebilir bir ödünleşimdir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 3: Onay (moderasyon)

Google’a göre şüpheli kullanıcı etkileşimleri için manuel onay, spam yapanların spam içeriği anında yayınlamasını engelleyerek spam’i önemli ölçüde azaltır; günlük iş akışına ek yük getirir ama etkilidir. Yorum denetleme çoğu içerik yönetim sisteminde yerleşik özelliktir.

Pratik kurallar:

- Yeni kullanıcının ilk yorumunu onaya alın.
- Bağlantı içeren yorumları her zaman onaya alın.
- Çok sayıda yorum gelen sitelerde yalnızca şüpheli kalıpları onaya alacak kurallar yazın.
- Onay süresini makul tutun; aylarca bekleyen yorum kullanıcıyı küstürür.

## Adım 4: Otomatik spam’i engelleyin

Google’ın önerileri:

- **Spam kalıplarını izleyin.** Form tamamlama süresi, aynı IP aralığından gelen istek sayısı, kullanıcı aracıları ve kullanıcı adları spam göstergesidir.
- **Kara liste kullanın.** Aynı kaynaktan gelen spam profilleri toplu kaldırın; IP adresini yasak listesine ekleyin. WordPress için Akismet gibi eklentiler yardımcı olur; güvenlik duvarı reddetme listesi de etkilidir.
- **Otomatik hesap açmayı engelleyin.** Kayıt formunda reCAPTCHA benzeri doğrulama kullanın.
- **Net bir kötüye kullanım politikası yayınlayın** ve kayıt sırasında kullanıcıya iletin; güvenilir kullanıcıların spam bildirmesine izin verin.

Küçük bir işletme sitesinde yorum alanı yoksa ya da çok az kullanılıyorsa, en etkili yöntem yorumları tamamen kapatmak ya da yalnızca gerçek müşterilerin (sipariş numarasıyla) yorum yapabilmesini sağlamaktır.

## Adım 5: Dizine girmesi gerekmeyenleri girmeyin

Platformunuz kullanıcıların sayfa, çıktı ya da araç oluşturmasına izin veriyorsa, bu içeriklerin arama motorlarıyla mı bulunacağını yoksa yalnızca bağlantı sahibi kişilerce mi erişileceğini düşünün. Google’a göre sayfalar herkese açık arama keşfi için değil, doğrudan paylaşım ya da ortak çalışma için oluşturuluyorsa `noindex` (meta etiketi ya da `X-Robots-Tag`) ya da varsayılan olarak robots.txt ile tarama engeli uygulanmalıdır ([X-Robots-Tag](/blog/x-robots-tag-nasil-kullanilir/)).

İşletme sitelerinden örnekler: kullanıcı profil sayfaları, arama sonuç sayfaları, boş forum başlıkları, tek kelimelik yorum sayfaları. Bunlar dizinde yer alırsa kalite ortalamasını düşürür ([site içi arama sonuçları](/blog/site-ici-arama-sonuclari-googleda-indekslenmeli-mi/)).

## Kaliteyi artırma: değerli kullanıcı içeriğini öne çıkarın

Yönetim yalnızca engellemek değildir; iyiyi görünür kılmaktır:

1. **Yorumlara yanıt verin.** Soru-cevap bölümünde işletme yanıtı güven ve uzmanlık gösterir.
2. **En faydalı yorumları öne çıkarın.** Fotoğraflı, ayrıntılı yorumlar üstte.
3. **Sık sorulan soruları sayfa içeriğine taşıyın.** Müşterilerin tekrar tekrar sorduğu sorular SSS bölümü olur ([SSS bölümü nasıl yazılır?](/blog/sik-sorulan-sorular-bolumu-nasil-yazilir/)).
4. **Düşük kaliteli içeriği kaldırın ya da düzenleyin.** “Teşekkürler” gibi tek kelimelik yorumlar sayfaya değer katmaz.
5. **Eskiyen içeriği temizleyin.** Yıllar önceki, artık geçerli olmayan cevaplar yanıltır.

## Yasal ve etik notlar

- **Kişisel veri:** Yorumlarda telefon, adres gibi veriler yayınlanmasın; gerekirse kaldırın. Veri işleme konusunda hukuk danışmanınıza başvurun.
- **Hakaret ve haksız eleştiri:** Politikanızda açık kural olsun; kaldırma kararlarını tutarlı uygulayın.
- **Sahte yorum:** Kendiniz yazmayın, yazdırmayın ([sahte yorumlar nasıl bildirilir?](/blog/sahte-google-yorumlari-nasil-bildirilir/)).
- **Olumsuz yorumu silmeyin.** Politika ihlali yoksa yanıtlayın; silmek güveni zedeler.

## İzleme

Google, hizmetinizin kötüye kullanımını izlemek için Search Console’da siteyi doğrulamanızı (manuel işlem ve güvenlik sorunu e-postaları için) ve Sayfa Dizine Ekleme ile Performans raporlarını incelemenizi önerir: dizine eklenen sayfalarda, gösterimlerde ya da sitenin amacıyla eşleşmeyen sorgularda beklenmedik artış spam işaretidir.

Aylık kontrol:

1. Dizindeki sayfa sayısında ani artış var mı?
2. Performans raporunda tanımadığınız, konuyla ilgisiz sorgular var mı?
3. Yorumların bağlantılarında `rel="ugc"` hâlâ çalışıyor mu?
4. Onay bekleyen yorum yığını birikti mi?

Spam sayfaları fark ederseniz [Japonca spam sayfalar](/blog/googleda-sitem-icin-japonca-spam-sayfalar-cikiyor/) yazısındaki temizlik adımlarına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ev tekstili mağazasının blogunda yorum alanı açık; üç ayda 600 yorum birikmiş, çoğu “iyi site, şuraya bakın” biçiminde bağlantılı.

- **Teşhis:** Yorumlar onaysız yayınlanıyor, bağlantılarda `rel` yok; Search Console’da blog sayfaları alakasız sorgularda gösteriliyor.
- **Düzeltme:** Spam yorumlar toplu silinip IP’ler engelleniyor; bağlantılı yorumlar onaya alınıyor; tüm kullanıcı bağlantıları `rel="ugc"` ile işaretleniyor; spam filtresi eklentisi ve basit bir doğrulama kuruluyor. Gerçek yorumlara işletme olarak yanıt veriliyor.
- **İzleme:** Dizin ve performans raporları aylık izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yorumları onaysız ve filtresiz açık bırakmak.**
2. **Kullanıcı bağlantılarını işaretlememek.**
3. **Yeni kullanıcı içeriğini hemen dizine açmak.**
4. **Değersiz kullanıcı sayfalarını dizinde bırakmak.**
5. **Olumsuz ama kurallara uygun yorumları silmek.**
6. **Dizin ve performans raporlarındaki spam işaretlerini izlememek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- yorum ve soru-cevap alanlarınızın spam açığını denetleriz,
- `rel="ugc"`, onay ve yeni kullanıcı kurallarını kurarız,
- dizinde istenmeyen kullanıcı sayfalarını temizleriz,
- değerli kullanıcı içeriğini görünür kılan düzeni planlarız.

Denetim için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Kullanıcı bağlantılarına hangi özelliği eklemeliyim?

Google, yorum ve forum gibi kullanıcı içeriği bağlantıları için `rel="ugc"` öneriyor; `nofollow` da kabul edilebilir.

### Yeni kullanıcının içeriği hemen dizine alınmalı mı?

Google, itibarı olmayan yeni kullanıcıların yayınlarına `noindex` eklemeyi ve itibar kazandıkça dizine açmayı önerir.

### Spam’i nasıl engellerim?

Onay, kara liste, doğrulama (reCAPTCHA), spam filtresi eklentisi ve net bir kötüye kullanım politikasıyla.

### Yorumları tamamen kapatmalı mıyım?

Yönetemeyecekseniz yorum alanını kapatmak daha sağlıklıdır; yönetirseniz yorumlar değer katar.

### Spam sayfalar oluştuysa ne yapmalıyım?

Temizleyin, açığı kapatın ve Search Console’da dizin raporunu izleyin; ayrıntı için temizlik rehberine bakın.

## Kaynaklar

- [Google Arama Merkezi: Sitenizde ve platformunuzda kullanıcılar tarafından oluşturulan spam’i önleme](https://developers.google.com/search/docs/monitor-debug/prevent-abuse?hl=tr)
- [Google Arama Merkezi: Giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
