---
title: "Sitem Telefonda Yavaş: Nereden Başlamalıyım?"
description: "Siteniz telefonda geç açılıyorsa önce neyi ölçmeli, neyi düzeltmelisiniz? Core Web Vitals eşikleri ve işletmeler için sade bir kontrol sırası."
date: 2026-10-26
service: teknik-seo
imageAlt: "Site hızını gösteren renkli bir kadran ve altında üç ilerleme çubuğu"
---

Siteniz telefonda geç açılıyorsa önce **ölçün**, sonra en büyük kalemi düzeltin. Çoğu işletme sitesinde yavaşlığın büyük kısmı üç şeyden gelir: boyutlandırılmamış görseller, gereksiz eklentiler ve sayfaya yüklenen üçüncü taraf kodlar. Kod tarafına inmeden bunları kontrol etmek bile fark yaratır.

## Google neyi ölçüyor?

Google, sayfa deneyimini **Core Web Vitals** adı verilen üç değerle ölçer. “İyi” sayılan sınırlar şöyledir ([web.dev: Core Web Vitals](https://web.dev/articles/vitals)):

| Ölçü | Ne anlatır? | “İyi” sınırı |
|---|---|---|
| LCP | Sayfanın ana içeriği ne kadar sürede göründü? | 2,5 saniye veya altı |
| INP | Dokunmaya sayfa ne kadar hızlı yanıt verdi? | 200 milisaniye veya altı |
| CLS | Sayfa açılırken içerik yerinden kaydı mı? | 0,1 veya altı |

## Önce ölçün: laboratuvar mı, gerçek kullanıcı mı?

[PageSpeed Insights](https://pagespeed.web.dev/) iki tür veri gösterir. **Laboratuvar verisi**, tek bir deneme ölçümüdür; puanı her seferinde biraz değişir. **Gerçek kullanıcı verisi** ise siteyi ziyaret edenlerin yaşadığı süredir ve Google’ın asıl bakacağı budur. Yeni ya da az ziyaret edilen sitelerde gerçek kullanıcı verisi olmayabilir; o zaman laboratuvar verisini yön göstermek için kullanın, puanı hedefe dönüştürmeyin.

## Kontrol sırası

1. **Görseller.** Ekranda 400 piksel görünen bir fotoğraf 4000 piksel olarak yükleniyorsa, ilk düzeltilecek şey budur. Görselleri görüntülendikleri boyuta indirin ve modern biçimler (WebP gibi) kullanın.
2. **Ana sayfadaki kayar görseller (slider).** Hem ağırdır hem içeriği yerinden oynatabilir. Tek, net bir görsel çoğu işletme için yeterlidir.
3. **Eklentiler.** WordPress ve benzeri sistemlerde kullanılmayan eklentiler de yükleme süresine eklenir. Gerekmeyeni kaldırın.
4. **Üçüncü taraf kodlar.** Sohbet pencereleri, takip kodları ve harici yazı tipleri sayfayı yavaşlatabilir. Gerçekten kullandığınız ve ölçtüğünüz olanlar kalsın.
5. **Barındırma (hosting).** Yukarıdakiler düzeldiği halde yavaşsa sunucunun yanıt süresine bakın.

## Puan 100 olmalı mı?

Hayır. Puanı 100’e çıkarmak amaç değildir; asıl amaç, gerçek ziyaretçinin telefonda beklemeden işini görmesidir. Google’ın “iyi” sınırlarının içinde kalmak çoğu işletme için yeterlidir.

## Kaynaklar

- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Google Search Central: Core Web Vitals ve Google Arama](https://developers.google.com/search/docs/appearance/core-web-vitals)

Ana sitemizde konuyu başka bir açıdan ele alan [Core Web Vitals yazısı](https://www.ventiajans.com/blog/core-web-vitals/) da var. Sitenizin teknik denetimi için [Teknik SEO ve site hızı](/teknik-seo/) sayfasına bakın.
