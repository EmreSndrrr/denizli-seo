---
title: "500 Sunucu Hatası SEO’yu Nasıl Etkiler?"
description: "500 sunucu hatası SEO’yu nasıl etkiler? Google’ın tarama hızını düşürmesi, dizinden çıkma riski, hatanın kaynağını bulma adımları ve 503 ile farkı."
date: 2026-11-19
service: teknik-seo
imageAlt: "Sunucudan 500 hatası dönen bir sayfa ve tarama hızının düşmesini gösteren grafik"
---

500 sunucu hatası (Internal Server Error), sunucunun isteği işlerken beklenmedik bir sorunla karşılaştığını ve sayfayı sunamadığını gösterir. SEO açısından kısa süreli ve nadir hatalar genellikle sorun yaratmaz; ama sürekli ya da çok sayıda sayfada tekrarlanan 500 hataları Google’ın sitenizi taramasını yavaşlatır, sayfaların güncellenmesini geciktirir ve kalıcı hâle gelirse sayfaların dizinden çıkmasına yol açabilir. Çözüm, hatanın kaynağını bulmak ve planlı kesintilerde 500 yerine 503 kullanmaktır.

Bu yazıda Google’ın 500 hatasına nasıl tepki verdiğini, hatanın olası kaynaklarını, adım adım teşhis yolunu ve ziyaretçi ile arama motorunu korumak için neler yapılabileceğini anlatıyoruz. Bakım ve kesinti için [503 hatası SEO’yu nasıl etkiler?](/blog/503-hatasi-seoyu-nasil-etkiler-bakim-ve-kesintiler/) yazısına, teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Google 500 hatasına nasıl tepki verir?

Google’ın HTTP durum kodları rehberi 5xx hatalarını sunucu hataları olarak ele alır ve şunları belirtir: 5xx ve 429 sunucu hataları, Google tarayıcılarını geçici olarak taramayı yavaşlatmaya sevk eder. Google Arama’da halihazırda dizine ekli olan URL’ler dizinde tutulur ancak taranmaları mümkün olmazsa sonunda dizinden çıkarılır. Rehber ayrıca 500 durum kodu için Google’ın sitenin tarama hızını düşürdüğünü ve düşüşün, sunucu hatası döndüren ayrı URL’lerin sayısıyla orantılı olduğunu söyler. Kalıcı olarak sunucu hatası döndüren URL’ler dizinden çıkarılır ([HTTP durum kodları](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)).

Bu üç cümleden pratik sonuç şudur: tek bir sayfanın bir saatlik hatası sorun değildir; ama siteniz sık sık 500 dönüyor ya da hatalı sayfa sayısı çoksa Google ziyaretlerini azaltır. Bu da yeni ve güncellenmiş sayfaların daha geç fark edilmesi demektir. Hata kalıcı hâle gelirse sayfalar dizinden de çıkabilir.

## 500 hatasına ne neden olur?

500 genel bir “beklenmedik hata” mesajıdır; nedeni sunucuda ya da uygulamada aranır. En sık nedenler:

- **Uygulama hatası.** Bozuk bir eklenti, tema ya da kod güncellemesi.
- **Sunucu yapılandırma hatası.** Hatalı bir `.htaccess` kuralı, yanlış izinler ya da PHP sürümü uyumsuzluğu.
- **Kaynak yetersizliği.** Bellek ya da işlemci sınırının aşılması; özellikle paylaşımlı barındırmada.
- **Veritabanı sorunu.** Bağlantı kopması, dolu disk ya da bozuk tablo.
- **Yoğun trafik ya da bot yükü.** Aşırı istek sunucuyu zorlayabilir.
- **Üçüncü taraf bağımlılıkları.** Dışarıdan çağrılan bir servisin yanıt vermemesi sayfayı çökertebilir.

Kaynağı bulmadan düzeltme yapmak zordur; bu yüzden ilk adım her zaman günlük kayıtlarına bakmaktır.

> **Hizmet almak için iletişime geçin.** Sitenizdeki sunucu hatalarının kaynağını birlikte bulalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Nasıl teşhis edilir?

Adım adım yol:

1. **Hatanın kapsamını belirleyin.** Tek sayfa mı, belirli bir bölüm mü, tüm site mi? Search Console’un Sayfa dizine ekleme ve tarama raporlarında “sunucu hatası (5xx)” görünen adreslere bakın.
2. **Sayfayı kendiniz açın.** Hata sürekli mi, aralıklı mı? Farklı cihaz ve ağdan deneyin.
3. **Hata günlüklerini okuyun.** Barındırma panelindeki hata günlüğü, hatanın hangi dosya ve satırdan geldiğini çoğu zaman gösterir.
4. **Son değişiklikleri sorgulayın.** Hata bir güncellemeden, eklenti kurulumundan ya da kod değişikliğinden sonra mı başladı? Geri almayı deneyin.
5. **Kaynak kullanımına bakın.** Bellek, işlemci ve disk sınırlarını panelden kontrol edin.
6. **Barındırma sağlayıcınıza danışın.** Sunucu tarafı bir sorun varsa destek ekibi günlük kayıtlarını inceleyebilir ([hosting seçimi: nelere bakılır?](/blog/hosting-secimi-nelere-bakilir/)).
7. **Düzeltmeden sonra doğrulayın.** URL Denetleme aracıyla Google’ın sayfayı nasıl gördüğüne bakın.

Googlebot’un sitenize gerçekten eriştiğini doğrulamak için günlük analizi de yararlıdır ([SEO için log analizi: Googlebot hareketlerini inceleme](/blog/seo-icin-log-analizi-googlebot-hareketlerini-inceleme/)).

## Planlı kesintilerde 500 mü 503 mü?

Bakım, taşıma ya da güncelleme nedeniyle siteyi geçici olarak kapatacaksanız 500 değil 503 (Service Unavailable) kullanın. 503, sunucunun geçici olarak yanıt veremediğini bildirir; arama motoru bunu kalıcı bir hata olarak değil, tekrar denenecek bir durum olarak okur. Google’ın tarama hızını azaltma rehberi, tarama hızını kısa süreliğine acilen azaltmak gerekirse 500, 503 ya da 429 durum kodlarının döndürülebileceğini, ancak bunun uzun süre sürdürülmemesi gerektiğini belirtir ([Google tarama hızını azaltma](https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=tr)).

Kural şu: kısa, planlı kesintiler için 503 ve mümkünse `Retry-After` başlığı; beklenmedik hatalar için kaynağı düzeltmek. Bakım sayfası gösterip 200 dönmek ise yanlıştır; sayfa “bakımda” der ama sunucu “başarılı” der.

## Hata bir sayfada mı, tüm sitede mi: ne yapılır?

| Durum | Olası neden | İlk adım |
| --- | --- | --- |
| Tek sayfa 500 veriyor | Sayfaya özel kod ya da veri sorunu | Sayfanın kaynağını ve günlüğünü inceleyin |
| Bir bölüm 500 veriyor | Şablon ya da eklenti sorunu | Son değişiklikleri geri alın |
| Tüm site 500 veriyor | Sunucu, veritabanı ya da yapılandırma sorunu | Barındırma sağlayıcısına hemen ulaşın |
| Aralıklı 500 | Kaynak yetersizliği ya da yoğun trafik | Kaynak kullanımına ve bot trafiğine bakın |

Hata tüm sitede ve uzun sürdüyse Search Console’da tarama ve dizin durumunu birkaç gün yakından izleyin; düzeldikten sonra Google tarama hızını kademeli olarak artırır.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir üretici firmanın WordPress sitesinde, bir eklenti güncellemesinden sonra katalog sayfaları aralıklı olarak 500 hatası vermeye başlıyor. Search Console’da “sunucu hatası (5xx)” görünen sayfa sayısı birkaç günde artıyor.

Firma hata günlüğüne bakıyor; eklentinin bellek sınırını aştığını görüyor. Eklenti eski sürüme dönüyor, bellek sınırı barındırma panelinden yükseltiliyor ve katalog sayfaları URL Denetleme aracıyla kontrol ediliyor. Birkaç hafta boyunca Search Console’da hata sayısının düşmesi izleniyor. Bu örnek bir sonuç vaadi değildir; teşhis sırasını gösterir.

## Önleyici bakım için neler yapılır?

Şunları tek tek kontrol edin:

- Güncellemeleri canlı siteye uygulamadan önce test ortamında deneyin.
- Eklenti ve temaları düzenli güncelleyin; ama kullanılmayanları kaldırın.
- Yedek alın; geri dönüş yolunuz olsun ([web sitesi güvenliği: SSL, yedek ve güncelleme](/blog/web-sitesi-guvenligi-ssl-yedek-ve-guncelleme/)).
- Barındırma kaynaklarını trafiğe göre gözden geçirin.
- Hata günlüğünü düzenli kontrol edin; sorunları kullanıcı şikâyet etmeden yakalayın.
- Bakımları düşük trafikli saatlere planlayın ve 503 kullanın.
- SEO sorunları için otomatik uyarı kurun ([SEO sorunları için otomatik uyarılar](/blog/seo-sorunlari-icin-otomatik-uyarilar-nasil-kurulur/)).

## Sık yapılan hatalar

1. **Hatayı yok saymak.** Aralıklı 500’ler zamanla tarama hızını düşürür.
2. **Bakım için 500 ya da 200 kullanmak.** Planlı kesinti için 503 gerekir.
3. **Nedenini bulmadan eklenti silmek.** Günlüğe bakmadan yapılan değişiklikler sorunu büyütebilir.
4. **Barındırma sınırlarını bilmemek.** Paylaşımlı sunucuda kaynak sınırları sürpriz hata doğurabilir.
5. **Düzeltmeyi doğrulamamak.** URL Denetleme ve Search Console’da izleme şart.

## Hata sonrası toparlanma nasıl izlenir?

Hata düzeldikten sonra iş bitmiş sayılmaz; Google’ın siteyi yeniden sağlıklı görmesini izlemek gerekir. İlk günlerde Search Console’daki sunucu hatası (5xx) sayısının düşmesine bakın. Önemli sayfaları URL Denetleme ile canlı test edin; sayfanın alınabildiğini ve içeriğin görüldüğünü doğrulayın. Birkaç hafta boyunca Performans raporunda tıklama ve gösterimlerin hata öncesi seviyeye dönüp dönmediğini karşılaştırın.

Toparlanmanın süresi hatanın ne kadar sürdüğüne ve site büyüklüğüne bağlıdır; Google’ın tarama hızını kademeli olarak artırdığı bilindiğinden birkaç gün ile birkaç hafta arası sürebilir ve süre garanti edilemez. Hata tekrar ediyorsa kök nedeni bulunmamıştır; geçici düzeltmeyle yetinmeyin ve günlük kayıtlarını izlemeye devam edin.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- Search Console’daki sunucu hatalarını ve tarama durumunu inceleriz,
- hatanın sayfa, bölüm ya da site genelinde olduğunu ayırır, olası nedenleri sıralarız,
- barındırma ve geliştirici ekibine net bir teşhis ve düzeltme listesi veririz,
- sonuç vaat etmeden, düzeltme sonrası tarama ve dizin durumunu izleriz.

Sitenizde sunucu hatası varsa [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sunucu hatalarınızın kaynağını birlikte bulalım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Tek bir 500 hatası sıralamayı düşürür mü?

Kısa süreli ve tek bir hata genellikle sorun yaratmaz. Sürekli ya da çok sayıda sayfada tekrarlanan hatalar Google’ın tarama hızını düşürür.

### 500 hatası alan sayfa dizinden çıkar mı?

Google, dizinde olan sayfaları tutar; ama sürekli taranamazlarsa sonunda dizinden çıkarabilir. Kalıcı sunucu hatası döndüren URL’ler dizinden çıkarılır.

### 500 ile 503 arasındaki fark nedir?

500 beklenmedik bir sunucu hatasıdır; 503 geçici olarak hizmet verilemediğini bildirir. Planlı bakımda 503 kullanılır.

### Hatanın düzeldiğini Google nasıl anlar?

Sunucu yeniden sağlıklı yanıt vermeye başladığında Google tarama hızını kademeli olarak artırır. URL Denetleme ile belirli bir sayfanın durumunu kontrol edebilirsiniz.

### Hata günlüklerine nereden ulaşırım?

Barındırma panelindeki “hata günlüğü” (error log) bölümünden. Bulamazsanız barındırma sağlayıcınızın destek ekibine sorun.

## Kaynaklar

- [Google Arama Merkezi: HTTP durum kodlarının, ağ ve DNS hatalarının Google tarayıcılarını nasıl etkilediği](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=tr)
- [Google Arama Merkezi: Google tarama hızını azaltma](https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=tr)
