---
title: "Merchant Center’da Fiyat Uyuşmazlığı Nasıl Araştırılır?"
description: "Merchant Center’da fiyat uyuşmazlığı neden olur, nasıl çözülür? Googlebot’un fiyat kontrolü, güncelleme gecikmesi, yapılandırılmış veri ve para birimi."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ürün verisindeki fiyat ile ürün sayfasındaki fiyatın karşılaştırılması"
---

Merchant Center’da “ürün fiyatı eşleşmiyor” uyarısı, ürün verinizde gönderdiğiniz fiyat ile Googlebot’un ürün sayfanızda ya da sayfadaki yapılandırılmış veride bulduğu fiyatın farklı olduğu anlamına gelir. Uyuşmazlık bulunan ürün onaylanmayabilir; yaygınlaşırsa hesabın askıya alınmasına yol açabilir. Araştırma sırası: önce sayfanın sunucudan dönen HTML’indeki ve yapılandırılmış verisindeki fiyata bakın, sonra feed’in güncelleme zamanını, para birimini ve indirim tarihlerini kontrol edin. Düzeltmeden sonra Googlebot ürünü saatler ya da günler içinde yeniden tarar ve fiyat eşleşiyorsa ürün yeniden onaylanır.

Stok uyuşmazlığı da aynı mantıkla çalışır; yazının sonunda ona da değiniyoruz. Ürün verisi denetimi için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Google fiyatı nasıl kontrol eder?

Google’ın yardım sayfasına göre Googlebot, sitenizin açılış sayfalarını düzenli olarak tarar ve veri kaynağınızdaki fiyat `[price]` özelliğini, açılış sayfanızdaki ya da (uygulandıysa) yapılandırılmış veri işaretlemenizdeki fiyatlarla karşılaştırır. Uyuşmazlık bulunursa ilgili ürün onaylanmayabilir ([ürün fiyatı eşleşmiyor: nasıl çözülür?](https://support.google.com/merchants/answer/12159029?hl=tr)).

Belgedeki üç ayrıntı, araştırmanın yönünü belirler:

1. **Googlebot sunucudan dönen HTML’e bakar.** Fiyat sayfaya yüklendikten sonra JavaScript ile dinamik olarak aktarılıyorsa bu, hatayı tetikler. HTML kodunda görünen fiyat, Merchant Center’a yüklenenle aynı olmalıdır.
2. **Yeniden tarama otomatiktir.** Googlebot, onaylanmamış ürünleri sonraki birkaç saat ya da gün içinde kendiliğinden yeniden tarar; fiyat eşleşiyorsa ürün yeniden onaylanır.
3. **Tarama hızı sunucunuza bağlıdır.** Sunucu kapasitesi sınırdaysa sayfa tarama daha uzun sürebilir.

## Uyuşmazlığın yaygın nedenleri

Google’ın saydığı nedenler ve her birinin pratikteki görünümü:

### 1. Güncelleme zamanı farkı

Sitede fiyatı değiştirdiniz; feed bir sonraki zamanlanmış yüklemeye kadar eski fiyatı taşıyor. Fiyatı sık değişen mağazalarda en yaygın nedendir. Google’ın önerisi: ürün verisinin dosyadan yüklenmesi için bir zamanlama oluşturun ya da API kullanın; ikisi de Merchant Center’daki fiyatları düzenli ve otomatik günceller ([ürün feed’i nasıl hazırlanır?](/blog/e-ticaret-urun-feedi-nasil-hazirlanir/)).

### 2. Yanlış yapılandırılmış veri

Google, açılış sayfalarındaki fiyatı anlamak için yapılandırılmış veri işaretlemesini kullanır. İşaretleme eski fiyatı, KDV hariç fiyatı ya da başka bir varyantın fiyatını taşıyorsa uyuşmazlık çıkar. Belgedeki kritik cümle: görsel açılış sayfası veri kaynağınızla eşleşse bile yapılandırılmış veriniz eşleşmiyorsa, yapılandırılmış veri güncellenene kadar ürünler onaylanmaz.

### 3. Gösterilen fiyat ile işaretlemedeki fiyat ya da para birimi farklı

Birden çok para birimi ya da bölgesel fiyat kullanıyorsanız site ziyaretçiye dönüştürülmüş fiyatı gösterirken, alttaki yapılandırılmış veri hâlâ baz fiyatı ya da varsayılan para birimini içerebilir. Googlebot doğrulama için yapılandırılmış veriyi okur.

### 4. İndirim tarihleri

`sale_price` kullanıyorsanız indirimin geçerli olduğu dönem, indirim geçerlilik tarihi özelliğiyle doğru belirtilmeli ve **saat dilimi doğru** olmalıdır. Yanlış başlangıç tarihi ya da saat dilimi, yanlış fiyatın gösterilmesine neden olur.

### 5. Minimum sipariş ve toplu satış

Minimum sipariş miktarınız varsa ya da ürün toplu satılıyorsa, satılan en az adet için **toplam** fiyat belirtilmelidir. Koli olarak satılan ürünün birim fiyatını göndermek uyuşmazlık yaratır.

### 6. Bildirim eski olabilir

Uyuşmazlık belirli bir tarih ve saatte tespit edilip bildirilmiştir. Google, bildirimin zaman damgasını incelemenizi önerir; geçen sürede veri güncellenip ürün yeniden onaylanmış olabilir. Ürünün güncel durumunu “Tüm ürünler” sayfasındaki durum sütunundan görürsünüz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım adım araştırma

1. **Etkilenen ürünleri listeleyin.** Merchant Center’da Ürünler > **İlgilenilmesi gerekiyor** sekmesini açın; filtreyle bu sorundan etkilenenleri bulun. Çok ürün varsa listeyi (.csv) indirin.
2. **Bir ürünü seçip üç fiyatı yan yana yazın:** feed’deki fiyat, sayfada görünen fiyat, yapılandırılmış verideki fiyat.
3. **Sayfanın ham HTML’ine bakın.** Tarayıcıda “kaynağı görüntüle” ile fiyatı aratın. Kaynakta fiyat yoksa ya da farklıysa, fiyat betikle sonradan yazılıyor demektir ([JavaScript siteleri ve SEO](/blog/javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu/)).
4. **Zengin Sonuçlar Testi’ni çalıştırın.** Google, inceleme istemeden ya da tarayıcı hatası varsaymadan önce sayfayı bu araçla test etmenizi ister. Algılanan teklif bloğunda fiyat ve para birimi, Merchant Center’a gönderilenle aynı mı?
5. **Varyantı kontrol edin.** Feed’deki bağlantı hangi varyantı açıyor? Sayfa varsayılan olarak en ucuz varyantı gösterirken feed başka bir bedenin fiyatını taşıyor olabilir.
6. **Vergi ve kargo.** Sayfada KDV dahil, feed’de hariç fiyat mı var?
7. **Zamanlamayı kontrol edin.** Feed en son ne zaman yüklendi? Sitedeki fiyat ne zaman değişti?
8. **Konuma göre fiyat.** Site ziyaretçinin konumuna ya da üyeliğine göre farklı fiyat gösteriyor mu? Googlebot giriş yapmamış, çoğunlukla yurt dışından gelen bir ziyaretçi gibi görür ([otomatik dil yönlendirmesi](/blog/otomatik-dil-yonlendirmesi-seoyu-nasil-etkiler/)).

Bir üründe nedeni bulduğunuzda, aynı nedenin tüm ürünleri etkileyip etkilemediğine bakın: sorun çoğu zaman tek ürün değil, şablon ya da kural düzeyindedir.

## Nasıl düzeltilir?

Google’ın çözümü basittir: veri kaynağındaki fiyatı sitede listelenen fiyatla aynı olacak biçimde güncelleyin ve hedeflediğiniz ülke için uygun para birimini kullanın. Sayfada birden çok para birimi görünüyorsa, feed’deki fiyat ve para birimi sayfada **belirgin şekilde** gösterilenle eşleşmelidir.

Uygulama yolları:

- **Tek tek:** İlgilenilmesi gerekiyor sekmesinde ürünü seçin, “Ürünü düzenle” ile fiyatı güncelleyin.
- **Toplu:** Etkilenen ürünlerin listesini indirin, feed’inizle karşılaştırın, düzeltilmiş veriyi kendi yükleme yönteminizle yeniden gönderin.
- **Kalıcı:** Feed’i sitenin veritabanından otomatik üretin; zamanlamayı fiyat değişim sıklığınıza göre ayarlayın.
- **Site tarafı:** Fiyatı ve yapılandırılmış veriyi sunucu tarafında, HTML’in içinde üretin.

Düzeltmeden sonra Googlebot’un yeniden taramasını bekleyin. Ürün hâlâ onaylanmıyorsa ve sorunun giderildiğinden eminseniz Merchant Center üzerinden inceleme isteğinde bulunabilirsiniz; önce testi yapın.

## Stok uyuşmazlığı

Aynı mantık stok durumu için de geçerlidir. Google, stok durumunu doğru göndermenizi ve açılış sayfanızdaki, ödeme sayfalarınızdaki ve yapılandırılmış verinizdeki durumla eşleştirmenizi ister. Tipik nedenler:

- Ürün sitede tükendi; feed hâlâ `in_stock` gönderiyor.
- Yapılandırılmış veri şablonda sabit “stokta” değeri taşıyor.
- Varyantlardan biri tükenmiş; feed ürünün tamamını stokta gösteriyor.
- Sayfa “tükendi” yazısını betikle sonradan ekliyor.

Çözüm de aynıdır: stok bilgisini tek kaynaktan (veritabanı) üretin ve üç yerde (sayfa, işaretleme, feed) aynı değeri gösterin ([stokta olmayan ürün sayfaları](/blog/stokta-olmayan-urun-sayfalari-nasil-yonetilmeli/)).

## Önleme

1. **Tek kaynak ilkesi.** Fiyat ve stok yalnızca altyapının veritabanında tutulur; feed ve işaretleme oradan üretilir.
2. **Kampanya takvimi.** İndirim başlangıç ve bitiş saatlerinde feed’in yenilendiğini doğrulayın; indirim tarihlerini saat dilimiyle girin ([Black Friday SEO’su](/blog/black-friday-seosu-calismaya-ne-zaman-baslanmali/)).
3. **Şablon testi.** Tema ya da eklenti güncellemesinden sonra üç ürün sayfasını Zengin Sonuçlar Testi’nden geçirin.
4. **Haftalık bakış.** İlgilenilmesi gerekiyor sekmesini rutine alın ([otomatik uyarılar](/blog/seo-sorunlari-icin-otomatik-uyarilar-nasil-kurulur/)).
5. **Fiyat eklentilerine dikkat.** Para birimi dönüştürücü, üyeye özel fiyat ve dinamik indirim eklentileri görünen fiyatı değiştirir ama işaretlemeyi değiştirmeyebilir.

Arama sonuçlarındaki ürün zengin sonuçları da aynı yapılandırılmış veriye dayanır; fiyat tutarsızlığı orada da güven sorunudur ([zengin sonuç neden görünmüyor?](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir züccaciye mağazasının 400 ürününden 150’si fiyat uyuşmazlığıyla onaylanmıyor.

- **Teşhis:** Sayfada fiyat doğru görünüyor; ama Zengin Sonuçlar Testi’nde teklif bloğu KDV hariç fiyatı gösteriyor. Tema, işaretlemeye vergisiz fiyatı yazıyor. Ayrıca feed günde bir kez gece yükleniyor, kampanyalar öğlen başlıyor.
- **Düzeltme:** İşaretleme KDV dahil görünen fiyatı taşıyacak biçimde düzeltiliyor; feed zamanlaması günde üçe çıkarılıyor.
- **Sonuç izleme:** Ürünler birkaç gün içinde yeniden taranıyor; durum sütunu takip ediliyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Yalnızca sayfada görünen fiyata bakıp yapılandırılmış veriyi kontrol etmemek.**
2. **Fiyatı sayfaya betikle sonradan yüklemek.**
3. **Feed’i elle güncellemek.**
4. **İndirim tarihlerinde saat dilimini yanlış girmek.**
5. **Koli satışında birim fiyat göndermek.**
6. **Test etmeden inceleme isteğinde bulunmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- etkilenen ürünlerde feed, sayfa ve işaretleme fiyatını karşılaştırırız,
- şablondaki işaretleme hatasını bulup düzeltiriz,
- feed güncelleme düzenini fiyat değişim sıklığınıza göre kurarız,
- yeniden onay sürecini ve tekrar eden hataları izleriz.

Kontrol için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Fiyat uyuşmazlığı neden olur?

Feed’deki fiyat, Googlebot’un sayfada ya da yapılandırılmış veride bulduğu fiyattan farklıdır; en sık neden güncelleme gecikmesi ve hatalı işaretlemedir.

### Düzelttim, ürün ne zaman onaylanır?

Googlebot onaylanmamış ürünleri birkaç saat ya da gün içinde yeniden tarar; fiyat eşleşiyorsa ürün yeniden onaylanır.

### Sayfada fiyat doğru, neden hâlâ hata var?

Yapılandırılmış verideki fiyat ya da para birimi farklı olabilir; Zengin Sonuçlar Testi ile kontrol edin.

### Fiyatın JavaScript ile yüklenmesi sorun mu?

Evet. Googlebot sunucudan dönen HTML’deki veriye bakar; sonradan yüklenen fiyat hatayı tetikler.

### Uyuşmazlık hesabımı etkiler mi?

Google, bu durumun hesabın askıya alınmasına neden olabileceğini belirtir; yaygın uyuşmazlığı hızla giderin.

## Kaynaklar

- [Google Merchant Center Yardım: Ürün fiyatı eşleşmiyor – nasıl çözülür?](https://support.google.com/merchants/answer/12159029?hl=tr)
- [Google Merchant Center Yardım: Ürün verileri spesifikasyonu](https://support.google.com/merchants/answer/7052112?hl=tr)
