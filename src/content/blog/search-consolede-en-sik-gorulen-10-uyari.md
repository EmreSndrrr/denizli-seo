---
title: Search Console’da En Sık Görülen 10 Uyarı
description: "Search Console Sayfa dizine ekleme raporundaki en sık 10 durum: 5xx, yönlendirme, 404, soft 404, robots.txt, noindex, 401/403, tarandı, bulundu."
date: 2026-11-10
service: teknik-seo
imageAlt: "Search Console raporunda renkli durum satırları ve uyarı simgeleri"
---

Search Console’daki Sayfa dizine ekleme raporunda en sık görülen durumlar şunlardır: sunucu hatası (5xx), yönlendirme hatası, bulunamadı (404), soft 404, robots.txt tarafından engellendi, noindex nedeniyle hariç tutuldu, yetkisiz (401) ya da erişim izni verilmemesi (403) nedeniyle engellendi, “Tarandı: şu anda dizine eklenmiş değil” ve “Bulundu: şu anda dizine eklenmiş değil”. Her durum hata değildir; önce sayfanın dizine girmesi gerekip gerekmediğine bakın.

Search Console’u ilk açtığınızda kırmızı ve gri satırlar görürsünüz ve çoğu işletme sahibi bunları “hata” sanır. Oysa Google’ın kendi rehberi, bazı sayfaların dizine eklenmemesinin geçerli nedenleri olduğunu söyler. Bu yazıda en sık görülen on durumu, anlamlarını ve ne yapacağınızı anlatıyoruz. Raporu kurmak ve okumak için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza da bakabilirsiniz.

## Önce şunu bilin: her gri satır sorun değil

Google’ın Sayfa dizine ekleme raporu sayfası, dizine eklenmeyen URL’lerin bazı durumlarda sorun oluşturmadığını belirtir: robots.txt kuralı, noindex etiketi, kopya URL ya da kaldırdıktan sonra yerine bir şey koymadığınız sayfa için 404 gibi nedenler geçerlidir ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)). Önemli olan, **dizine girmesi gereken sayfaların** dizinde olmasıdır. Her uyarı için ilk soru: bu sayfa dizine girmeli mi?

## 1. Sunucu hatası (5xx)

**Anlamı:** Sayfa istendiğinde sunucunuz 500 düzeyinde bir hata döndürmüş; Googlebot URL’ye erişememiş, istek zaman aşımına uğramış ya da site meşgul olmuş olabilir.

**Neden önemli?** Google’ın durum kodu rehberine göre 5xx ve 429 sunucu hataları tarayıcıları geçici olarak taramayı yavaşlatmaya sevk eder; dizindeki URL’ler tutulur ama taranamazlarsa sonunda dizinden çıkarılır ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)).

**Ne yapmalı?** Barındırma firmanıza sunucu hata kayıtlarını sorun; Tarama İstatistikleri raporunda ana makine durumuna bakın; eklenti ve sunucu yükünü azaltın.

## 2. Yönlendirme hatası

**Anlamı:** Google yönlendirme sırasında çok uzun zincir, döngü, çok uzun URL ya da bozuk ya da boş URL gibi bir sorunla karşılaşmıştır.

**Ne yapmalı?** Yönlendirmeleri tek adımda ve doğru hedefe olacak şekilde düzeltin. Ayrıntı için “301 ve 302 farkı” yazımıza bakın.

## 3. Bulunamadı (404)

**Anlamı:** Sayfa 404 döndürüyor.

**Ne yapmalı?** Sayfa gerçekten silindiyse ve yerine bir şey yoksa sorun değildir. Önemli bir sayfa 404 veriyorsa düzeltin ya da yönlendirin. Ayrıntı için “404 hatası” yazımıza bakın.

## 4. Soft 404

**Anlamı:** Sayfa 404 değil, kullanıcı dostu bir “bulunamadı” mesajı döndürüyor (200 koduyla).

**Ne yapmalı?** Google, gerçekten bulunamayan sayfalar için 404 döndürmenizi ya da sayfaya daha fazla bilgi eklemenizi önerir. Ayrıntı: [soft 404 nedir?](/blog/soft-404-nedir-nasil-duzeltilir/)

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım; bulguları öncelik sırasıyla yazılı verelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## 5. robots.txt tarafından engellendi

**Anlamı:** Sayfa robots.txt dosyanızdaki bir kurala takılıyor.

**Ne yapmalı?** Sayfanın dizine girmesini istiyorsanız robots.txt’deki engel kuralını bulup kaldırın. Google’ın rapor açıklamasına göre bu durumda sayfa dizine ekleme raporunda “robots.txt tarafından engellendi” olarak işaretlenir. Ayrıntı için “robots.txt nedir?” yazımıza bakın.

## 6. noindex etiketi nedeniyle hariç tutuldu

**Anlamı:** Sayfada noindex kuralı bulunuyor.

**Ne yapmalı?** Teşekkür ya da yönetim sayfası gibi gizlemek istediğiniz sayfalarda sorun değildir. Müşteri getirecek bir sayfada noindex varsa kaldırın. Ayrıntı için “noindex nedir?” yazımıza bakın.

## 7. Yetkisiz istek (401) nedeniyle engellendi

**Anlamı:** Sayfa bir yetkilendirme (giriş) istiyor; Googlebot bu yüzden erişemiyor.

**Ne yapmalı?** Sayfayı dizine ekletmek istiyorsanız yetkilendirme koşulunu kaldırın. Google, bu hatayı sayfayı gizli modda ziyaret ederek doğrulayabileceğinizi söyler. Üyelik alanları ve özel sayfalar için sorun değildir.

## 8. Erişim izni verilmemesi (403) nedeniyle engellendi

**Anlamı:** Sunucu Googlebot’a “erişim izni yok” cevabı vermiş. Google’ın açıklamasına göre Googlebot hiçbir zaman kimlik bilgisi sağlamadığından sunucunuz bu hatayı yanlışlıkla döndürüyor olabilir; sayfa dizine eklenmez.

**Ne yapmalı?** Güvenlik duvarı, eklenti ya da sunucu ayarında botları yanlışlıkla engelleyen bir kural olup olmadığını kontrol edin; barındırma firmanızla konuşun.

## 9. Tarandı: şu anda dizine eklenmiş değil

**Anlamı:** Sayfa Google tarafından taranmış ama dizine eklenmemiş. Google, web’deki tüm sayfaları dizine eklemediği için bunun birçok site için yaygın bir mesaj olduğunu ve mutlaka ilgilenilmesi gereken bir sorun anlamına gelmediğini belirtir. Önemli sayfalar için bu mesajı görürseniz sayfaların görünmesini sağlamaya çalışın.

**Ne yapmalı?** İçeriği özgün ve yararlı hale getirin, iç bağlantı verin. Ayrıntı: [Taranan, dizine eklenmeyen sayfalar](/blog/taranan-dizine-eklenmeyen-sayfalar-nedenleri/).

> **Sizin için de yapalım mı?** Sitenizde teknik bir sorun şüpheniz varsa nedenini sırayla teşhis edelim. [Hizmet almak için iletişime geçin](/iletisim/); çalışmanın kapsamı [teknik SEO sayfamızda](/teknik-seo/) anlatılıyor.

## 10. Bulundu: şu anda dizine eklenmiş değil

**Anlamı:** Sayfa bulunmuş ama henüz taranmamış; tipik olarak Google sitenin aşırı yüklenmesi beklendiği için taramayı ertelemiştir.

**Ne yapmalı?** Sunucuyu, iç bağlantıyı ve site haritasını gözden geçirin. Ayrıntı: [Keşfedildi, dizine eklenmedi](/blog/kesfedildi-dizine-eklenmedi-ne-anlama-gelir/).

## İyi haber veren durumlar: kopya ve alternatif sayfalar

Google, bir sayfanın kopya ya da alternatif olarak işaretlenmesinin genellikle iyi bir şey olduğunu, standart sayfayı bulduğunu ve dizine eklediğini gösterdiğini belirtir. Kopya ya da alternatif sayfaların dizine eklenmemesi gerekir. Herhangi bir URL’nin standart sayfasını URL Denetleme ile bulabilirsiniz. Bkz. “Canonical etiketi” yazımız.

## Uyarıları önceliklendirme tablosu

| Durum | Önce hangisi? |
| --- | --- |
| Önemli sayfa: 5xx, 403, 401, robots.txt, noindex | Çok yüksek |
| Önemli sayfa: 404 ya da soft 404 | Yüksek |
| Önemli sayfa: Tarandı / Bulundu, dizine eklenmedi | Orta (içerik, bağlantı) |
| Yönlendirme hatası | Orta |
| Önemsiz sayfa: noindex, 404, kopya | Sorun değil |

## Raporu ayda bir nasıl okursunuz?

1. Sayfa dizine ekleme raporunu açın; dizine eklenen sayfa sayısı beklentinize yakın mı?
2. “Neden dizine eklenmedi” listesini en çok sayfa içeren nedenden başlayarak okuyun.
3. Her neden için örnek sayfaları açıp “bu sayfa dizine girmeli mi?” diye sorun.
4. Girmesi gereken sayfaları yukarıdaki tabloya göre düzeltin.
5. Düzeltme sonrası birkaç hafta bekleyin ve raporu yeniden kontrol edin.
6. Sonuçları tarihle not edin.

Google, rapordaki örnek URL listesinin 1.000 öğeyle sınırlı olduğunu belirtir; çok sayfalı sitelerde tüm URL’lerin gösterilmeyebileceğini unutmayın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir klima servisinin sitesi. Raporda 12 sayfa “noindex” (teşekkür ve deneme sayfaları), 3 sayfa 404 (eski kampanyalar), 2 sayfa “Tarandı, dizine eklenmedi” (hizmet sayfaları), 1 sayfa “sunucu hatası (5xx)” (ana sayfa) görünüyor.

Önceliklendirme: önce ana sayfa 5xx (sunucu); sonra iki hizmet sayfası (içerik ve iç bağlantı); noindex ve 404’ler bilinçli olduğu için bırakılıyor. Düzeltme sonrası rapor haftalarca izleniyor. Bu örnek sonuç vaadi değildir; önceliklendirme sırasını gösterir.

## Denizli SEO bu konuda nasıl yardımcı olur?

Raporu görmek kolay, hangisinin önemli olduğunu ayırmak deneyim ister. [Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’da hangi sayfaların dizinde olduğunu, hangilerinin neden dışarıda kaldığını çıkarırız,
- uyarıları “sorun” ve “sorun değil” olarak ayırır, önceliklendirmiş bir düzeltme listesi veririz,
- sunucu, yönlendirme, robots.txt ve noindex düzeltmelerini uygular ya da yazılımcınıza net talimatla ileteceğiz,
- düzeltmeleri yazılı rapor olarak sunarız.

Raporunuzdaki uyarıların ne anlama geldiğini öğrenmek isterseniz [bize yazın](/iletisim/); sitenize bakıp yazılı olarak söyleyelim.

## Sık sorulan sorular

### Raporda yüzlerce sayfa dizine eklenmemiş görünüyor, panik yapmalı mıyım?

Hayır. Önce bu sayfaların kaçının gerçekten dizine girmesi gerektiğine bakın; çoğu kopya, etiket ya da teşekkür sayfası olabilir.

### Düzeltmeyi nasıl doğrularım?

Düzeltmeden sonra raporun güncellenmesini izleyin; Google sayfaları yeniden tarayıp değerlendirir. Süre sayfa sayısına bağlıdır.

### Uyarı e-postası gelince ne yapmalıyım?

E-postayı okuyun, raporda ilgili durumu bulun ve sayfaların önemli olup olmadığına bakın. Acele düzeltmelere girişmeyin; önce nedeni anlayın.

### Hangi uyarılar gerçekten acil?

Önemli bir sayfanın sunucu hatası, 403, robots.txt engeli ya da yanlışlıkla kalan noindex gibi durumları. Bunlar görünürlüğü doğrudan keser.

## Kaynaklar

- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
- [Google Search Central: HTTP durum kodlarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
