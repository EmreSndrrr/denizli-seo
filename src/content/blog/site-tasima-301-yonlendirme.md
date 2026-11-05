---
title: "Yeni Siteye Geçerken Sıralamayı Korumak: 301 Listesi"
description: "Siteyi yenilerken eski adresleri 301 ile yeni karşılıklarına yönlendirmezseniz sıralamayı kaybedebilirsiniz. Geçiş öncesi, günü ve sonrası için liste."
date: 2026-10-29
service: web-tasarim
imageAlt: "Eski bir sayfadan yeni bir sayfaya giden ok ve 301 yazısı"
---

Yeni bir web sitesi yaptırdığınızda adresler değişiyorsa, **eski adreslerin hepsini yeni karşılıklarına 301 ile yönlendirmeniz** gerekir. Aksi halde Google eski adresleri bulamaz, bu adreslere bağlanan bağlantılar boşa gider ve sıralamanızın bir kısmını kaybedebilirsiniz. Bu yüzden site yenileme, işin en çok unutulan SEO adımıdır.

## 301 nedir?

301, “bu sayfa kalıcı olarak buraya taşındı” anlamına gelen bir yönlendirmedir. Ziyaretçi eski adrese tıklayınca yeni adrese gider; Google da eski adresin yerini yeni adrese devreder. Google, yönlendirmelerin ne zaman ve nasıl kullanılacağını ayrı bir rehberde açıklıyor ([Google: yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects)).

## Geçişten önce

1. **Eski sitenin adres listesini çıkarın.** Sitemap, Search Console performans raporu ve sitenin kendi sayfa listesi, hangi adreslerin gerçekten kullanıldığını gösterir.
2. **Hangi sayfalar ziyaret ve bağlantı alıyor, not edin.** Bunlar korunması gereken sayfalardır.
3. **Her eski adres için yeni karşılığı belirleyin.** Birebir karşılığı olmayan sayfa için, konusu en yakın sayfayı seçin. Hepsini ana sayfaya yönlendirmek iyi bir çözüm değildir.
4. **Yeni sitede başlık, açıklama ve iç bağlantıları eski sitedeki iyi sayfalara göre kurun.** İyi sıralanan bir sayfanın yeni karşılığını zayıf bırakmayın.

## Yayın günü

- Yönlendirmeleri yayınla aynı anda açın.
- Birkaç önemli eski adresi tarayıcıda deneyin; yeni adrese gidiyor mu?
- Yeni sitenin **robots.txt** dosyasında yanlışlıkla “bütün siteyi engelle” gibi bir kuralın kalmadığını kontrol edin. Test sitelerinde konan engeller, canlıya geçerken sık unutulur.
- Site haritasını Search Console’a yeniden gönderin.

## Yayından sonraki haftalar

- Search Console’da **Sayfa dizine alma** ve **performans** raporlarını izleyin. Düşüş ya da “bulunamadı (404)” hataları varsa eksik yönlendirmeyi ekleyin.
- Yönlendirmeleri kısa süre sonra kaldırmayın. Google, adres değişikliklerinde yönlendirmelerin mümkün olduğunca uzun, genellikle en az bir yıl yerinde tutulmasını öneriyor ([Google: adres değişikliğiyle site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)).

## Adresler değişmiyorsa?

Aynı alan adı ve aynı adres yapısında yalnızca tasarımı yeniliyorsanız yönlendirme gerekmez. Yine de sayfaların başlık, açıklama ve içeriğini bozmadığınızdan emin olun.

## Kaynaklar

- [Google Search Central: 301 yönlendirmeleri](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google Search Central: URL değişikliğiyle site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

Yeni siteyi baştan aramaya göre kurmak için [SEO uyumlu web tasarım](/web-tasarim/) sayfamıza bakın.
