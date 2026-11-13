---
title: "WordPress SEO: Eklentiden Önce Bakılacak Ayarlar"
description: "WordPress SEO nasıl yapılır? Arama motoru görünürlüğü, kalıcı bağlantılar, başlıklar, site haritası, hız ve eklenti kararı için on kontrol."
date: 2026-11-06
service: teknik-seo
imageAlt: "Bir yönetim paneli ve SEO ayarlarını gösteren onay kutuları"
---

WordPress SEO’da önce ayarlara, sonra eklentiye bakın. Sitenin arama motorlarına açık olduğundan, kalıcı bağlantıların okunabilir olduğundan, her sayfanın kendi başlığı ve açıklaması olduğundan, site haritasının gönderildiğinden, temanın ve eklentilerin siteyi yavaşlatmadığından ve görsellerin düzenlendiğinden emin olun. SEO eklentisi bu işleri kolaylaştırır; ama ayarları yapmadan tek başına sıralama getirmez.

WordPress, dünyada çok kullanılan bir içerik yönetim sistemidir ve Denizli’deki birçok küçük işletme sitesi de onunla kuruludur. Sistem SEO’ya uygun kurulabilir, ama varsayılan hâlinde birçok şey eksik kalır. Bu yazıda, SEO eklentisi kurmadan önce kontrol edilecek on ayarı sırayla anlatıyoruz. Genel kontrol listesi için [SEO uyumlu web sitesi](/blog/seo-uyumlu-web-sitesi/) yazımıza da bakabilirsiniz.

## WordPress SEO için eklenti şart mı?

Şart değil, ama çoğu site için yararlıdır. Eklentilerin yaygın işlevleri; her sayfa için başlık ve açıklama alanı, site haritası oluşturma ve temel kontrol önerileridir. Eklentisiz de bu işleri yapabilirsiniz; yalnızca daha fazla elle işlem gerekir.

Önemli olan, eklentinin ne yaptığını bilmek:

| Eklenti sizin için ne yapar? | Eklenti sizin için ne yapmaz? |
| --- | --- |
| Başlık ve açıklama alanları sunar | Başlığı sizin yerinize yazmaz |
| Site haritası üretir | Sitemi hızlandırmaz |
| Basit uyarılar verir | Müşterinin sorusuna cevap veren içerik yazmaz |
| Yönlendirme yönetimine yardımcı olabilir | Sıralama garantisi vermez |

Eklentinin yeşil ışığı, Google’ın verdiği bir onay değildir. Google, üçüncü taraf araçları değerlendirmediğini ya da desteklemediğini söyler ([SEO’ya mı ihtiyacınız var?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)). Yeşil ışığı ipucu olarak okuyun.

## 1. Site arama motorlarına açık mı?

WordPress’te, geliştirme sırasında sitenin arama motorlarından gizlenmesini sağlayan bir ayar bulunur (genellikle okuma ayarlarında). Site yayına alındığında bu ayarın kapatılmaması, sitenin aylarca Google’a görünmemesine yol açabilir. Yayından hemen sonra bu ayarı kontrol edin ve Search Console’da ana sayfanın dizine eklenebilir olduğunu URL Denetleme ile doğrulayın. Adımlar [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızda.

## 2. Kalıcı bağlantılar (adres yapısı) okunabilir mi?

WordPress adresleri varsayılan olarak `?p=123` gibi biçimde olabilir. Bunun yerine sayfanın adını içeren bir yapı seçin. Google’ın URL rehberi, kelimeleri ayırmak için kısa çizgi kullanmayı önerir ([URL yapısı](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)). Yazı adresi `/pamukkale-pansiyon/` gibi okunabilir olsun.

Önemli uyarı: yayında olan bir sitede adres yapısını değiştirirseniz eski adresler yeni adreslere yönlendirilmelidir; aksi hâlde eski adresler 404 verir. Yeni sitede ise baştan doğru seçin.

## 3. Her sayfanın kendi başlığı ve açıklaması var mı?

Her sayfanın `<title>` öğesi açıklayıcı ve kısa olmalıdır; “Ana Sayfa” gibi belirsiz ya da tüm sayfalarda tekrar eden başlıklardan kaçınılmalıdır ([başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)). Meta açıklama için de her sayfa benzersiz bir metin almalıdır ([meta tanımlar](https://developers.google.com/search/docs/appearance/snippet?hl=tr)).

Eklentiyi kurduğunuzda ilk olarak ana sayfanın, hizmet sayfalarının ve iletişim sayfasının başlık ve açıklamalarını elle yazın. Şablonla otomatik gelen başlıklar çoğunlukla zayıftır.

## 4. Site haritası var mı ve gönderildi mi?

Site haritası, sitenizdeki önemli adresleri içeren bir dosyadır; bazı içerik yönetim sistemleri bunu sizin yerinize otomatik yapabilir ([site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)). SEO eklentileri çoğunlukla site haritasını üretir. Siz yalnızca adresini bulun (genellikle sitenizin ana adresinin sonuna bir dosya adı eklenir) ve Search Console’dan gönderin.

## 5. Tema ve eklentiler siteyi yavaşlatıyor mu?

Hız, ziyaretçiyi ve Google’ın ölçümlerini etkiler. web.dev, en büyük içeriğin yüklenmesi (LCP) için 2,5 saniye, etkileşime yanıt (INP) için 200 milisaniye ve altını iyi sayar ([Web Vitals](https://web.dev/articles/vitals?hl=tr)).

WordPress’te yavaşlığın sık nedenleri:

- Çok sayıda kullanılmayan eklenti,
- ağır, çok özellikli tema,
- büyük, sıkıştırılmamış görseller,
- önbellek (cache) kullanılmaması.

Kurduğunuz her eklentiyi sorgulayın: gerçekten kullanıyor muyum? Kullanılmayanı silin. Hızı nasıl ölçeceğinizi “Sitem telefonda yavaş” yazımızda anlattık.

## 6. Görseller düzenlenmiş mi?

Yüklemeden önce görseli boyutlandırın ve sıkıştırın. Yüklerken açıklayıcı bir dosya adı verin ve alt metin alanını doldurun. Ayrıntılar [görsel SEO](/blog/gorsel-seo/) yazımızda.

## 7. Kategori, etiket ve arşiv sayfaları kontrol altında mı?

WordPress; kategori, etiket, yazar ve tarih arşivleri gibi otomatik sayfalar üretir. Bu sayfalar çoğu zaman az içerikli ve birbirine benzerdir. Küçük bir işletme sitesinde şunu sorun: bu arşiv sayfası ziyaretçiye gerçekten faydalı mı? Değilse sayısını azaltmak (kullanılmayan etiketleri silmek gibi) ya da SEO eklentisinin ayarlarından yönetmek mantıklıdır. Neyi dizinden çıkaracağınızdan emin değilseniz önce Search Console’da hangi sayfaların dizinde olduğuna bakın.

## 8. Yorumlardaki bağlantılar nasıl işaretleniyor?

Blog yorumları spam bağlantılarla dolabilir. Google, yorum ve forum gibi kullanıcı içeriği bağlantılarının `ugc` değeriyle işaretlenmesini önerir ([giden bağlantılar](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)). Yorumları kullanmıyorsanız kapatın; kullanıyorsanız onay sistemi ve spam filtresi açın.

## 9. Güncellemeler ve yedek

SEO ile doğrudan ilgili görünmez, ama güncellenmeyen bir WordPress sitesi güvenlik sorunlarına açıktır; ele geçirilen bir site ciddi sorunlara yol açabilir. Çekirdek, tema ve eklentileri güncel tutun, düzenli yedek alın ve güvenilir bir barındırma firması seçin.

## 10. Yayın sonrası kontrol

Siteyi yayına aldıktan sonra Search Console’da siteyi doğrulayın, site haritasını gönderin ve ilk günlerde Sayfa dizine ekleme raporuna bakın. Aylık kontrol için “Ücretsiz SEO analizi nasıl yapılır?” yazımızdaki on kontrolü kullanabilirsiniz.

## Sayfa oluşturucu (page builder) kullanıyorsanız

Sürükle-bırak sayfa oluşturucular tasarımı kolaylaştırır ama bazen gereksiz kod ve ağır dosyalar ekler. SEO açısından üç şeye bakın:

1. **Metin gerçek metin mi?** Yazılar görsele gömülmemeli; sayfada seçilebilir metin olarak durmalı.
2. **Başlık yapısı doğru mu?** Sayfanın ana başlığı (H1) tek ve açıklayıcı olmalı; alt başlıklar (H2, H3) konu akışını izlemeli. Sırf büyük yazı görünsün diye başlık etiketi kullanmayın.
3. **Telefonda hız.** Oluşturucunun ürettiği sayfa telefonda gerçekten hızlı açılıyor mu, ölçün.

Sayfa oluşturucunun sunduğu ek animasyon ve kaydırma efektleri, çoğu küçük işletme sitesi için gereksiz yük demektir.

## WordPress’te en sık yapılan SEO hataları

- **Yayında “arama motorlarından gizle” açık kalmış:** sonuç: Site dizine girmez; çözüm: Ayarı kapat, URL Denetleme ile doğrula
- **Tüm sayfalarda aynı başlık:** sonuç: Sonuçlarda ayırt edilemez; çözüm: Her sayfaya özel başlık
- **Onlarca kullanılmayan eklenti:** sonuç: Yavaşlık, güvenlik riski; çözüm: Kullanılmayanları sil
- **Büyük, sıkıştırılmamış görseller:** sonuç: Yavaş sayfa; çözüm: Boyutlandır ve sıkıştır
- **Yorumlarda spam bağlantılar:** sonuç: Düşük kaliteli içerik; çözüm: Onay ve spam filtresi
- **Adres yapısını sonradan değiştirmek:** sonuç: Kırık bağlantılar; çözüm: Eski adresleri yönlendir

## Eklenti seçerken nelere bakılır?

Hangi eklentiyi seçerseniz seçin şu soruları sorun:

1. Başlık ve açıklamayı her sayfada ayrı girebiliyor muyum?
2. Site haritasını üretiyor mu?
3. Yönlendirme yönetimi var mı, ya da ayrı bir çözüm gerekir mi?
4. Sitemi yavaşlatıyor mu? (Kurmadan önce ve sonra hızı ölçün.)
5. Düzenli güncelleniyor mu?
6. Beni gereksiz abonelik ya da sahte uyarılarla ilerlemeye zorluyor mu?

Aynı anda birden fazla SEO eklentisi çalıştırmayın; ayarlar çakışabilir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Sarayköy’de bir inşaat malzemesi bayisi, WordPress ile kurulmuş sitesinde Google’da hiç görünmüyor.

- **1. Arama motoru görünürlüğü:** bulgu: Geliştirme sırasında kapatılmış ayar açılmamış; yapılacak: Ayarı kapat, URL Denetleme ile doğrula
- **2. Adres yapısı:** bulgu: Adresler `?p=` biçiminde; yapılacak: Okunabilir yapıya geçir, eski adresleri yönlendir
- **3. Başlıklar:** bulgu: Tüm sayfalarda sadece firma adı; yapılacak: Her sayfaya özgü başlık yaz
- **5. Hız:** bulgu: Onlarca eklenti, büyük fotoğraflar; yapılacak: Kullanılmayanları sil, görselleri küçült
- **7. Arşivler:** bulgu: Kullanılmayan etiket sayfaları; yapılacak: Gerekmeyenleri sil

İlk satır tek başına, sitenin neden aylarca görünmediğini açıklayabilir.

## İlk 30 günlük WordPress SEO planı

1. **1. gün:** Arama motoru görünürlüğü ayarını, adres yapısını ve site haritasını kontrol edin.
2. **1. hafta:** Ana sayfa, hizmet sayfaları ve iletişim için başlık ve açıklamaları yazın.
3. **2. hafta:** Kullanılmayan eklentileri silin, görselleri küçültün, hızı ölçün.
4. **3. hafta:** Eksik hizmet sayfalarından birini yazın; İşletme Profili bilgilerini siteyle eşitleyin.
5. **4. hafta:** Search Console’da Sayfa dizine ekleme ve Performans raporlarına bakın.

Her adımdan sonra değişikliği not edin. Üç ay sonra hangi ayarın neye yaradığını görebilirsiniz.

## Sık sorulan sorular

### WordPress SEO için en iyi eklenti hangisi?

“En iyi” tek bir eklenti yoktur. Başlık, açıklama ve site haritası gibi temel işleri yapan, düzenli güncellenen ve sitenizi yavaşlatmayan herhangi bir eklenti yeterli olur.

### SEO eklentisinin ücretsiz sürümü yeter mi?

Küçük bir işletme sitesi için çoğu zaman yeter. Ücretli sürümler daha çok büyük siteler ve ek özellikler için kullanışlıdır.

### WordPress’i bırakıp başka sisteme geçmeli miyim?

SEO açısından gerekli değildir. Sorun sistemde değil ayarlardadır. Başka sisteme geçmek isterseniz yönlendirme planı yapın: [yeni siteye geçerken 301 listesi](/blog/site-tasima-301-yonlendirme/) yazımıza bakın.

### Yeşil ışıkları aldım ama sıralamam yok, neden?

Eklentinin işaretleri teknik ve sayfa içi bir kontrol listesidir; sıralamayı içeriğin kalitesi, rekabet ve tanınırlık belirler.

### WordPress sitem yavaş, önce neyi düzeltmeliyim?

Önce görsellerin boyutuna ve kullanılmayan eklentilere bakın. Bu ikisi çoğu sitede hızı en çok etkileyen kalemlerdir. Sonra önbellek ayarını ve temanın ağırlığını değerlendirin.

### Yeni yazı yayımlarken nelere dikkat etmeliyim?

Yazının açıklayıcı bir başlığı, sayfaya özgü bir meta açıklaması, okunabilir bir adresi ve ilgili sayfalara iç bağlantıları olsun. Görsellerin alt metnini doldurun ve yayından sonra URL Denetleme ile dizine eklenip eklenmediğine bakın.

## Kaynaklar

- [Google Search Central: URL yapısı en iyi uygulamaları](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=tr)
- [Google Search Central: başlık bağlantılarını etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
- [Google Search Central: meta tanımlar nasıl yazılır?](https://developers.google.com/search/docs/appearance/snippet?hl=tr)
- [Google Search Central: site haritası nedir?](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=tr)
- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=tr)
- [Google Search Central: giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Google Search Central: SEO’ya mı ihtiyacınız var?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)

WordPress sitenizin ayarlarını birlikte gözden geçirmek isterseniz [teknik SEO sayfamıza](/teknik-seo/) bakabilir ya da [bize yazabilirsiniz](/iletisim/).
