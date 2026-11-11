---
title: noindex Nedir? Ne Zaman Kullanılır?
description: "noindex nedir, ne zaman kullanılır? Meta etiketi, X-Robots-Tag, robots.txt ile farkı ve yanlışlıkla kalan noindex’in belirtileri ve kontrolü."
date: 2026-11-10
service: teknik-seo
imageAlt: "Bir sayfa kartının üzerinde çizili göz ve noindex etiketi"
---

**Kısa cevap:** noindex, arama motorlarına bir sayfayı dizine eklememelerini söyleyen kuraldır. Sayfanın `<head>` bölümüne `<meta name="robots" content="noindex">` etiketi ya da HTTP yanıtına `X-Robots-Tag: noindex` başlığı eklenir. Google bu kuralı gördüğünde sayfayı arama sonuçlarından tamamen çıkarır. Kuralın çalışması için sayfa robots.txt ile engellenmemeli ve taranabilir olmalıdır. Yayında unutulan noindex, bir sitenin aylarca görünmemesine yol açabilir.

noindex, doğru kullanıldığında yararlı, yanlış kullanıldığında yıkıcı bir araçtır. Teşekkür sayfası, iç arama sonuçları ya da yönetim sayfaları gibi arama sonuçlarında istemediğiniz sayfalar için kullanılır; ama bir hizmet sayfanızda kalırsa o sayfa Google’da asla çıkmaz. Bu yazıda noindex’in ne olduğunu, nasıl eklendiğini, ne zaman kullanılması gerektiğini ve yanlışlıkla kalanı nasıl bulacağınızı anlatıyoruz. Genel dizin durumu için [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımıza bakabilirsiniz.

## noindex nedir?

Google’ın tanımına göre noindex kuralı, sayfayı Google Arama sonuçlarından tamamen çıkarır. Bu kural, sayfanın taranmasını değil **dizine eklenmesini** engeller ([noindex ile engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)). Sayfa taranabilir, ama sonuçlarda gösterilmez.

## noindex nasıl eklenir?

İki yöntem var:

**1. Meta etiketi.** Sayfanın `<head>` bölümüne şunu koyun:

```
<meta name="robots" content="noindex">
```

Yalnızca Google’ın bir sayfayı dizine eklemesini önlemek için:

```
<meta name="googlebot" content="noindex">
```

Google, bazı arama motorlarının noindex kuralını farklı yorumlayabileceğini, bu yüzden sayfanın başka arama motorlarında görünmeye devam edebileceğini belirtir.

**2. HTTP yanıt başlığı.** Meta etiketi yerine yanıtta `X-Robots-Tag: noindex` döndürebilirsiniz. Google, bu yöntemin PDF, video ve görsel gibi HTML olmayan kaynaklar için kullanılabileceğini söyler.

WordPress, Wix ya da Blogger gibi bir içerik yönetim sistemi kullanıyorsanız HTML’yi doğrudan düzenlemek yerine sistemin sunduğu ayarı (sayfa düzenleme ekranı ya da SEO eklentisi) kullanırsınız.

## noindex ile robots.txt aynı şey değil

| | noindex | robots.txt `Disallow` |
| --- | --- | --- |
| Neyi engeller? | Dizine eklemeyi | Taramayı |
| Sayfayı sonuçlardan çıkarır mı? | Evet | Tek başına hayır |
| Bot sayfayı okumalı mı? | Evet, etiketi görmesi gerekir | Hayır, sayfaya hiç girmez |

Kritik uyarı: Google, noindex’in etkili olabilmesi için sayfanın hem robots.txt tarafından engellenmemesi hem de tarayıcı tarafından erişilebilir olması gerektiğini söyler. Sayfa robots.txt ile engellenirse ya da bot sayfaya erişemezse noindex hiç görülmez ve sayfa, başka sayfalar ona bağlantı verirse sonuçlarda görünmeye devam edebilir. Bu yüzden bir sayfayı gizlemek istiyorsanız robots.txt ile değil noindex ile (ve sayfayı taramaya açık bırakarak) gizleyin. robots.txt ayrıntıları için [robots.txt nedir?](/blog/robots-txt-nedir-nasil-hazirlanir/) yazımıza bakın.

Google ayrıca, bir web sayfasını Google’ın dışında tutmak için noindex kullanmanızı ya da sayfayı şifre korumalı yapmanızı söyler.

## Ne zaman noindex kullanılır?

Arama sonuçlarında görünmesini istemediğiniz ve müşteriye yararı olmayan sayfalar için:

- **Teşekkür sayfaları:** Form ya da sipariş sonrası gösterilen sayfalar.
- **İç arama sonuçları:** Sitenizin kendi arama kutusunun ürettiği sayfalar.
- **Yönetim ve hesap sayfaları:** Giriş, kullanıcı paneli.
- **Deneme ve geçici sayfalar:** Yayında kalmış test sayfaları.
- **İnce ya da tekrar eden arşiv sayfaları:** Değer katmayan etiket ve tarih arşivleri (gerekirse).
- **Özel bilgi içeren sayfalar:** Ancak gerçek gizlilik için şifre koruması gerekir; noindex tek başına yetmez.

Kural: **Müşterinin bulmasını istediğiniz hiçbir sayfada noindex olmamalı.**

## Ne zaman noindex kullanılmaz?

- **Hizmet, ürün ve iletişim sayfalarında.** Bunlar sizi müşteriye getiren sayfalardır.
- **Kopya sayfaları gizlemek için.** Kopya sayfa sorununda çözüm genellikle standart adres (canonical) belirtmek ya da yönlendirmedir; bkz. [canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/).
- **Yetim sayfalar yüzünden.** Önce neden dizine girmediğini bulun.

## Yanlışlıkla kalan noindex: belirtiler

Yayına yeni geçmiş ve Google’da hiç çıkmayan bir sitede sık görülen neden, geliştirme sırasında konulan noindex’in yayında kalmasıdır. Belirtiler:

- Site aylardır hiç dizine girmiyor.
- Search Console’da sayfalar noindex ile ilgili bir durumla hariç tutulanlar arasında listeleniyor.
- URL Denetleme’de sayfa için “dizine eklenmeye uygun değil” bilgisi görünüyor.
- Siteyi yapan kişi “Google’a kapalı” ayarını kullanmıştı ve hatırlamıyor.

Google’ın yardım sayfasına göre URL Denetleme aracı, bir URL’nin Google dizinindeki durumunu ve dizine eklenip eklenemeyeceğini gösterir ([URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)).

## noindex nasıl kontrol edilir?

1. **Sayfanın kaynağına bakın.** Tarayıcıda sayfayı sağ tıklayıp kaynağı görüntüleyin; `noindex` arayın.
2. **URL Denetleme’yi kullanın.** Önemli sayfanızı Search Console’da denetleyin; dizin durumuna bakın.
3. **Sayfa dizine ekleme raporunu okuyun.** Hariç tutulan sayfaları ve nedenlerini inceleyin ([sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)).
4. **Tüm siteyi kontrol edin.** WordPress’te okuma ayarlarında “arama motorlarının siteyi görmesini engelle” gibi bir seçenek geliştirme sırasında işaretlenmiş olabilir; yayından sonra kapatın.
5. **Düzelttikten sonra Google’a bildirin.** URL Denetleme ile dizine ekleme isteyin ve sayfa durumunu birkaç gün sonra yeniden kontrol edin.

## noindex kaldırıldı, sayfa ne zaman geri gelir?

Google’ın yeniden taramasına ve dizine eklemesine bağlı; kesin süre veremeyiz. Sayfayı yeniden taramak için Search Console’dan istek gönderebilirsiniz; ama istek garanti vermez. Düzeltmeden sonra birkaç gün ile birkaç hafta arasında takip edin. Süre konusunda genel çerçeve için [SEO ne kadar sürede sonuç verir?](/blog/seo-ne-kadar-surede-sonuc-verir/) yazımıza bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Sarayköy’de bir inşaat malzemesi bayisi, yeni sitesini yaptırmış ve altı aydır hiçbir sayfası Google’da çıkmıyor. İnceleme: ana sayfa kaynağında `<meta name="robots" content="noindex">` bulunuyor; sistem ayarlarında “arama motorlarını engelle” seçeneği geliştirme sırasında işaretlenmiş ve yayında kapatılmamış.

Düzeltme sırası: ayar kapatılıyor, sayfa kaynağında noindex’in kalktığı doğrulanıyor, Search Console’da ana sayfa ve hizmet sayfaları için URL Denetleme yapılıyor, site haritası yeniden gönderiliyor ve dizin raporu bir hafta boyunca izleniyor. Bu örnek sonuç vaadi değildir; kontrol sırasını gösterir.

## Sayfaları noindex’e karar verme tablosu

Bir sayfa için karar verirken şu soruları sorun:

| Soru | Cevap evet ise | Cevap hayır ise |
| --- | --- | --- |
| Müşteri bu sayfayı Google’da bulmalı mı? | noindex kullanmayın | noindex düşünün |
| Sayfa yalnızca işlem sonrası görüntüleniyor mu? | noindex uygun | — |
| Sayfa başka bir sayfanın kopyası mı? | noindex yerine canonical ya da yönlendirme | — |
| Sayfa gizli bilgi içeriyor mu? | Şifre koruması gerekir | — |
| Sayfayı gelecekte yayınlayacak mıyım? | Geçici noindex; yayında kaldır | — |

Karar kuralı basit: bir sayfanın müşteriye getirisi varsa noindex koymayın; yoksa koyabilirsiniz.

## Geliştirme ortamında noindex nasıl yönetilir?

Test ve geliştirme sitelerinin Google’da görünmemesi için noindex ya da şifre koruması kullanılır. Asıl tehlike, yayına geçişte bu ayarın unutulmasıdır. Yayın öncesi kontrol listesine şunu ekleyin: “Sitenin tamamını kapatan ayarı kapattım mı? Ana sayfanın kaynağında noindex var mı?” Sitenizi yapan kişiden bu maddeyi yazılı onaylamasını isteyin.

## Denizli SEO bu konuda nasıl yardımcı olur?

Yanlış kalan bir noindex, sitenin görünürlüğünü sessizce yok eder. [Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizdeki tüm sayfaların dizin durumunu Search Console’da çıkarır, noindex ve diğer engelleri tespit ederiz,
- gereksiz sayfaları doğru yöntemle (noindex, yönlendirme ya da canonical) yönetiriz,
- site haritası ve robots.txt dosyalarını bu kararlarla uyumlu hale getiririz,
- düzeltmeleri tek tek yazılı raporlarız.

Siteniz Google’da hiç ya da eksik çıkıyorsa [bize yazın](/iletisim/); sitenize bakıp nedenini yazılı olarak söyleyelim.

### noindex etiketi sayfa hızını etkiler mi?

Hayır. Etiket küçük bir HTML satırıdır; hızla ilgisi yoktur.

### noindex’i sonradan kaldırırsam sıram geri gelir mi?

Sayfa dizine eklenebilir ve sıralanabilir; ama önceki sıranın geri geleceğini garanti edemeyiz. Sayfanın içeriği ve rekabet yine belirleyicidir.

## Sık sorulan sorular

### noindex sayfayı hemen kaldırır mı?

Hayır. Google’ın sayfayı yeniden tarayıp noindex’i görmesi gerekir; bu zaman alabilir.

### noindex ile nofollow aynı şey mi?

Hayır. noindex sayfanın dizine girmesini engeller; nofollow ise bağlantılarla ilgili ayrı bir kuraldır. İkisi farklı amaçlara hizmet eder.

### Tüm sayfaları noindex yapsam sorun olur mu?

Tüm sayfalar noindex olursa site Google’da hiç çıkmaz. Yalnızca müşterinin bulmasını istemediğiniz sayfalarda kullanın.

### noindex’i ben mi eklemeliyim, yazılımcı mı?

İçerik yönetim sisteminizdeki SEO ayarlarından çoğu zaman siz ekleyebilirsiniz; X-Robots-Tag gibi sunucu düzeyindeki ayarlar için yazılımcı desteği gerekir.

## Kaynaklar

- [Google Search Central: “noindex” ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Google Search Central: robots.txt dosyasına giriş ve kullanım rehberi](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr)
- [Search Console Yardımı: URL Denetleme Aracı](https://support.google.com/webmasters/answer/9012289?hl=tr)
- [Search Console Yardımı: Sayfa dizine ekleme raporu](https://support.google.com/webmasters/answer/7440203?hl=tr)
