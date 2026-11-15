---
title: "Yönlendirme Zincirleri ve Döngüleri Nasıl Düzeltilir?"
description: "Yönlendirme zinciri ve döngüsü nasıl bulunur, düzeltilir? curl ve geliştirici araçlarıyla tespit edin; eski adresleri tek adımda son adrese bağlayın."
date: 2026-11-14
service: teknik-seo
imageAlt: "Birden fazla adımdan geçen yönlendirme zinciri ve kendi kendine dönen yönlendirme döngüsü"
---

Yönlendirme zinciri, bir adresin başka bir adrese, onun da üçüncü bir adrese yönlendirilmesidir (A → B → C). Döngü ise adreslerin birbirine ya da kendine yönlendirmesidir (A → B → A) ve sayfaya hiç ulaşılamaz. Zincirleri tespit etmek için `curl -I -L` ya da geliştirici araçlarını, tüm sitede ise bir site tarayıcısını kullanın; düzeltme kuralı basittir: her eski adres tek adımda doğrudan son adrese gitsin, döngüler ise kaldırılsın.

Google’ın tarama bütçesi rehberi, taramayı olumsuz etkileyen uzun yönlendirme zincirlerinden kaçınılmasını açıkça önerir ([tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)). Zincirler site yenilemelerinde, https geçişlerinde ve plugin değişikliklerinde sessizce birikir. Bu yazı, zincir ve döngüleri bulup düzeltmenin yolunu anlatıyor. Sitenizin yönlendirmelerini incelettirmek isterseniz [teknik SEO hizmetimizi](/teknik-seo/) inceleyebilirsiniz.

## Zincir ve döngü nedir?

- **Tek yönlendirme (doğru):** `eski-adres → yeni-adres`.
- **Zincir:** `http://siteniz.com/hizmet → https://siteniz.com/hizmet → https://www.siteniz.com/hizmet → https://www.siteniz.com/hizmetler/hizmet/` (üç adım).
- **Döngü:** `A → B → A`. Tarayıcı “Bu sayfa sizi çok fazla yönlendirdi” gibi bir hata gösterir.

Zincirler yavaşlık, döngüler ise erişilemezlik yaratır. İkisi de ziyaretçiyi ve tarayıcıyı yorar. Yönlendirmelerin türünü ve doğru kullanımı için [301 ve 302 yönlendirme farkı nedir?](/blog/301-ve-302-yonlendirme-farki-nedir/) yazısına bakın.

## Zincirler neden oluşur?

Çoğu zincir, her biri tek başına doğru olan kuralların üst üste binmesiyle ortaya çıkar:

- **Site yenilemeleri:** Her yenilemede eski adres yeni adrese yönlendirilir; ama önceki yenilemenin yönlendirmeleri güncellenmediği için zincir uzar.
- **Protokol ve alan adı kuralları:** http→https ve www→www’suz yönlendirmeleri ayrı kurallarla yapılırsa iki adım olur.
- **Eğik çizgi kuralları:** `/sayfa` → `/sayfa/` yönlendirmesi diğer kurallarla birleşir.
- **Eklentiler ve sunucu kuralları:** Hem `.htaccess` hem bir yönlendirme eklentisi aynı adresi yönlendirir.
- **Kategori ve adres değişiklikleri:** Kategori adı değişince alt sayfaların adresleri de değişir ve eski kurallar yeni kurallara zincirlenir.

## Zincirler ve döngüler neden zararlı?

- **Yavaşlık:** Her ek yönlendirme bir ek istek demektir; sayfa geç açılır.
- **Tarama maliyeti:** Google her adımı ayrı istekle izler; uzun zincirler tarama bütçesini tüketir.
- **Sinyal kaybı riski:** Google’ın yönlendirme belgesine göre kalıcı yönlendirmeler hedefin standart olması yönünde sinyal verir; zincir ne kadar uzarsa sürecin karışma ve hatalı sonuç verme olasılığı artar ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).
- **Erişilemezlik (döngü):** Sayfaya hiç ulaşılamaz; Google adresi dizine ekleyemez.

## Nasıl tespit edersiniz? Tek adres için

**Komut satırı:** Terminalde `curl -I -L https://siteniz.com/eski-adres` komutu yönlendirme adımlarını sırayla gösterir. Her yanıtın durum kodunu ve `Location` başlığını okuyun. Üçten fazla adım ya da aynı adreslerin tekrarı varsa zincir ya da döngü vardır.

**Tarayıcı geliştirici araçları:** Network sekmesinde “Preserve log” seçeneğini açıp adresi yükleyin; tüm yönlendirme adımları listelenir.

**Search Console URL Denetleme:** Adresi girip “Taranan sayfayı görüntüle” ile Google’ın izlediği yolu kontrol edin ([URL Denetleme](https://support.google.com/webmasters/answer/9012289?hl=tr)).

## Nasıl tespit edersiniz? Tüm site için

1. **Site tarayıcısı:** Siteyi bir tarayıcı yazılımla gezip yönlendirmeleri ve zincirleri listeleyin; çoğu yazılımın “yönlendirme zincirleri” raporu vardır.
2. **Eski adres listesi:** Önceki yenilemelerden kalan adres listesini (eski eşleme tablosu) tek tek `curl` ile test edin.
3. **Search Console sayfa dizine ekleme raporu:** “Yönlendirme içeren sayfa” gibi nedenlerle dizine eklenmeyen adreslere bakın ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).
4. **Dış bağlantılar:** Bağlantılar raporunda dışarıdan çok bağlantı alan eski adreslerin hangi adımlardan geçtiğine bakın.
5. **İç bağlantılar:** Sitenizdeki bağlantılar yönlendirilen adreslere mi gidiyor? Bunları doğrudan son adrese çevirin.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Zincirleri nasıl düzeltirsiniz?

Düzeltmenin tek kuralı: **her eski adres doğrudan son hedef adrese gitsin.**

1. **Son hedefi belirleyin:** Zincirin sonundaki, gerçekten çalışan ve kalıcı adresi bulun.
2. **Tüm eski adresleri eşleyin:** Bir tabloya “eski adres → son adres” yazın; zincirin her halkasını (A, B) son adrese (C) bağlayın.
3. **Kuralları güncelleyin:** Sunucu yapılandırmasındaki ya da eklentideki kuralları buna göre değiştirin. Birbirine zincirlenen kuralları tek kurala indirin.
4. **Protokol ve alan adı tek adımda:** http ve www varyantlarını tek seferde standart adrese yönlendirin ([www ve www’suz adres: tek adrese yönlendirme](/blog/www-ve-wwwsuz-adres-tek-adrese-yonlendirme/)).
5. **İç bağlantıları güncelleyin:** Menü, içerik ve site haritasındaki bağlantılar yönlendirilen adresler yerine doğrudan son adresi göstermeli.
6. **Yeniden test edin:** Her adresi `curl` ile tekrar kontrol edin; tek adım ve doğru durum kodu görmelisiniz.

Yönlendirme türünü doğru seçin: kalıcı taşıma için 301/308; Google’a göre sunucu tarafı yönlendirme en güvenilir olandır; meta refresh ve JavaScript yönlendirmesi yalnızca başka seçenek yoksa kullanılmalıdır.

## Döngüleri nasıl çözersiniz?

Döngü genellikle çelişen iki kuraldan doğar. Örnek: bir kural `/hizmet`i `/hizmet/`e, başka bir kural `/hizmet/`i `/hizmet`e yönlendirir. Çözüm:

1. Döngüye giren adresleri `curl -I -L` ile tespit edin.
2. Hangi kuralların çeliştiğini bulun (sunucu yapılandırması, eklenti, CDN, hosting paneli).
3. Standart adres biçimini seçin (eğik çizgili ya da çizgisiz) ve yalnızca tek yönde yönlendirin.
4. Fazlalık kuralı silin; değişikliği test edin.
5. Önbelleği temizleyin; tarayıcı eski yönlendirmeyi hatırlıyor olabilir.

Döngüde tarayıcı hata verir ve sayfa açılmaz; Search Console’da bu adresler dizine eklenmeyen sayfalar arasında görünebilir.

## Yönlendirme planını belgeleyin

Zincirler çoğu zaman unutulan kuralların sonucudur. Şunu kurun:

- **Eşleme tablosu:** Eski adres, yeni adres, yönlendirme türü, tarih ve nedeni.
- **Tek kaynak:** Yönlendirmeleri tek yerde (sunucu ya da bir eklenti) yönetin; birden çok katmanda aynı kuralı yazmayın.
- **Yenilemede güncelleme:** Her site yenilemesinde eski tabloyu da yeni hedeflere göre güncelleyin.
- **Düzenli denetim:** Yılda bir yönlendirme listesini tarayın.

Site taşımada kullanılacak eşleme için [yeni siteye geçerken sıralamayı korumak: 301 listesi](/blog/site-tasima-301-yonlendirme/) yazısına bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Pamukkale’de bir otelin sitesi iki kez yenilenmiş; eski oda sayfaları üç adımlık zincirlerden geçiyor, bir sayfa da döngüye girmiş.

- **Tespit:** Site tarayıcısı 40 zincir ve iki döngü listeliyor; `curl` ile örnekler doğrulanıyor.
- **Plan:** Eşleme tablosu hazırlanıyor; her eski adres son oda sayfasına tek adımda gidecek biçimde kurallar yeniden yazılıyor.
- **Döngü:** Eğik çizgi kuralları çakışmıştı; tek yönlü kural bırakılıyor.
- **Kontrol:** İç bağlantılar ve site haritası güncelleniyor; Search Console’da birkaç hafta izleme yapılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yeni yönlendirmeyi eskisinin üstüne eklemek, zinciri güncellememek.**
2. **http, www ve eğik çizgi kurallarını ayrı adımlarla yazmak.**
3. **Kalıcı taşımada 302 kullanmak.**
4. **İç bağlantıları yönlendirilen adreslere bırakmak.**
5. **Aynı kuralı hem sunucuda hem eklentide yazmak.**
6. **Düzeltmeden sonra yeniden test etmemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Yönlendirme temizliği hız ve tarama kazandırır. [Teknik SEO hizmetimizde](/teknik-seo/):

- tüm sitenizi tarayıp zincir, döngü ve gereksiz yönlendirmeleri listeleriz,
- eski adresleri tek adımda son adrese bağlayan yazılı bir eşleme tablosu hazırlarız,
- sunucu, eklenti ve CDN kurallarını düzeltir, iç bağlantı ve site haritasını güncelleriz,
- sonuçları Search Console’da izler ve raporlarız.

Yönlendirmelerinizi incelemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## Sık sorulan sorular

### Yönlendirme zinciri kaç adım olursa sorun olur?

Sabit bir eşik vermiyoruz; Google uzun zincirlerden kaçınmayı önerir. Hedef her adresin tek adımda son adrese gitmesidir.

### Zincir sıralamayı düşürür mü?

Doğrudan düşüreceğini söyleyemeyiz; ama hız ve tarama maliyetini artırır, karışıklık riskini büyütür. Düzeltmek en güvenli yoldur.

### Döngü nasıl anlaşılır?

Tarayıcı “çok fazla yönlendirdi” hatası verir ve sayfa açılmaz; `curl -I -L` aynı adreslerin tekrarını gösterir.

### 301 mi 302 mi kullanmalıyım?

Kalıcı taşıma için 301/308; geçici durumlar için 302/307. Google’a göre kalıcı yönlendirme hedefin standart olması yönünde sinyaldir.

### İç bağlantıları da değiştirmeli miyim?

Evet. İç bağlantılar yönlendirilen adresler yerine doğrudan son adresi göstermeli.

## Kaynaklar

- [Google Arama Merkezi: Tarama bütçenizi optimize etme](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
