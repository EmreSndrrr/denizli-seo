---
title: "Yapay Zekâ Araçlarından Gelen Trafik Nasıl Ölçülür?"
description: "Yapay zekâ araçlarından gelen trafik GA4’te nasıl ölçülür? Kaynak alan adı, özel kanal grubu, doğrudan trafiğin gizlediği ziyaretler ve dürüst raporlama."
date: 2026-11-15
service: teknik-seo
imageAlt: "GA4 raporunda yönlendirme kaynağı olarak görünen yapay zekâ araçlarından gelen oturumlar"
---

Yapay zekâ araçlarından gelen ziyaretleri GA4’te iki yoldan görürsünüz: ziyaretçi bir yanıttaki bağlantıya tıkladığında kaynak olarak ilgili aracın alan adı “yönlendirme” (referral) kanalında listelenir; bağlantıyı kopyalayıp yapıştıran ya da aracın kaynak bilgisi göndermediği ziyaretler ise “doğrudan” içinde kaybolur. Bu yüzden ölçüm eksik kalır. Bilinen alan adlarını özel bir kanal grubunda toplayın, doğrudan trafikteki eğilimi de izleyin ve sayıyı “en az bu kadar” diye raporlayın.

Hangi aracın hangi alan adıyla geldiğini bu yazıda sabit bir liste olarak vermiyoruz: araçlar ve alan adları sık değişir; kendi verinizde görünenleri kullanın. Ölçüm kurulumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Ne ölçülebilir, ne ölçülemez?

**Ölçülebilir:**

- Bir yapay zekâ aracı yanıtındaki bağlantıya tıklayıp sitenize gelen ve tarayıcısı kaynak bilgisini ileten ziyaretçiler.
- Bu ziyaretlerin davranışı: hangi sayfaya indi, etkileşim, dönüşüm.

**Ölçülemeyen ya da zor ölçülen:**

- Yanıtta markanızı görüp bağlantıya tıklamadan sonradan marka adınızı arayarak gelenler (“markalı arama” ya da “doğrudan” olarak görünür).
- Yanıttan adresi kopyalayıp tarayıcıya yazanlar (doğrudan).
- Kaynak bilgisini hiç iletmeyen uygulama ve tarayıcılar (doğrudan).
- Bir yanıtta anılıp telefonla arayanlar ya da mağazaya gelenler.
- Aracın yanıtında sizin adınızın hiç geçmediği ama sektörünüzde ilgi uyandıran etkiler.

Yani ölçülen sayı, gerçek etkinin alt sınırıdır.

## Yöntem 1: Kaynak raporunda alan adlarına bakın

GA4, trafik kaynağı boyutlarıyla trafiğin nereden geldiğini gösterir; “oturum kaynağı” ve “oturum ortamı” gibi boyutlar vardır ([trafik kaynağı boyutlarının kapsamları](https://support.google.com/analytics/answer/11080067?hl=tr)). Adımlar:

1. Trafik edinme raporunu açın ve boyutu “oturum kaynağı / ortamı” yapın.
2. Ortamı “referral” olanları süzün.
3. Kaynak listesini okuyun; yapay zekâ sohbet ve arama araçlarının alan adlarını bulun.
4. Aynı alan adlarının hangi sayfalara trafik getirdiğini ve dönüşümünü açılış sayfası boyutuyla inceleyin.

Listeyi bir kez çıkarıp sabitlemeyin; üç ayda bir yeni alan adları için kaynak listesini gözden geçirin.

## Yöntem 2: Özel kanal grubu

GA4’ün varsayılan kanal grupları düzenlenemez; Google, kurala dayalı kendi kategorilerinizi oluşturmanız için özel kanal grupları sunduğunu belirtir ([varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)). Varsayılan “Yönlendirme” kanalı, kullanıcıların diğer sitelerdeki reklam olmayan bağlantılardan gelmesidir; yapay zekâ araçlarından gelen ziyaretler çoğunlukla buraya düşer.

Özel kanal grubuyla:

1. “Yapay zekâ araçları” adında yeni bir kanal oluşturun.
2. Kuralı, kaynak alan adlarının listesine göre tanımlayın (kaynak “şunu içerir” gibi).
3. Kanalı varsayılan kanalların **üstüne** sıralayın; kurallar sırayla çalışır.
4. Raporlarda bu özel gruba göre bakın.

Özel kanal grubu geriye dönük de uygulanabilir; ama hangi sürümde ve nasıl çalıştığını güncel arayüzde kontrol edin, menü adları değişebilir.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Doğrudan trafiğin içindeki gizli kısım

Birçok yapay zekâ ziyareti kaynak bilgisi taşımaz. Bu ziyaretler “doğrudan” kanalına karışır. İpuçları:

- **Doğrudan trafikte yeni sayfalara iniş.** Kimse bir blog yazısının adresini elle yazmaz; derin sayfaya inen “doğrudan” oturumlar çoğunlukla başka bir kaynaktan (e-posta, mesajlaşma uygulaması, yapay zekâ aracı) gelmiştir.
- **Markalı arama artışı.** Yanıtta adınızı gören kullanıcı sonradan marka adınızı aratır ([markalı ve markasız trafik](/blog/markali-ve-markasiz-organik-trafik-nasil-ayrilir/)).
- **“Nereden duydunuz?” cevapları.** Formda ya da telefonda “yapay zekâ”, “sohbet aracı”, “ChatGPT” gibi cevaplar veren müşteri olup olmadığına bakın; bu, analitikten bağımsız bir sinyaldir ([talepleri ölçmek](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/)).

Bu üç ipucu kesin kanıt değil, yön göstericidir.

## UTM ile ölçüm: ne zaman işe yarar?

Kendi kontrolünüzdeki bağlantılara (e-posta imzası, sosyal profil, dış yayın) UTM eklemek bu kanalı ölçmenize yarar; ama bir yapay zekâ aracının yanıtına koyduğu bağlantıya siz UTM ekleyemezsiniz. Bazı araçlar kendi parametrelerini ekleyebilir; bunu raporlarda “kaynak” ya da “kampanya” alanında görürsünüz. Her durumda bulduğunuz parametreleri kendi verinizde doğrulayın.

İç bağlantılarda UTM kullanmayın; ölçümü bozar ([UTM parametreli adresler](/blog/utm-parametreli-urller-seo-icin-nasil-yonetilir/)).

## Search Console’da ayrı bir satır var mı?

Google’ın yapay zekâ özellikleri (Yapay Zeka Bakışı, Yapay Zeka Modu), Search Console’da genel arama trafiğine dahil edilir ve Performans raporunda “Web” arama türü altında raporlanır; ayrı bir satır yoktur ([yapay zeka özellikleri ve web siteniz](https://developers.google.com/search/docs/appearance/ai-features?hl=tr)). Yani Google’ın kendi özetlerinden gelen tıklamalar GA4’te “organik arama” içinde görünür; yukarıdaki yönlendirme analizi ise Google dışındaki araçlar içindir.

Bu ayrım önemli: iki farklı şeyi karıştırmayın ve raporda ayrı yazın.

## Dönüşüme bakın, hacme değil

Yapay zekâ kaynaklı trafik çoğu işletme sitesinde küçük bir paydır. Yorumlarken:

- Oturum sayısından çok **dönüşüm** ve **etkileşim** önemlidir; birkaç oturum bir talep getirmişse değerlidir.
- Küçük örneklemle sonuç çıkarmayın: ayda 8 oturumun yüzdesel değişimi anlamsızdır.
- Aylık değil üç aylık eğilime bakın.
- Hangi sayfaların atıf aldığına bakın; içerik planınıza ipucu verir.

Başarıyı daha geniş ölçüt takımıyla okumak için [sıfır tıklamalı aramalar](/blog/sifir-tiklamali-aramalar-nedir-basari-nasil-olculur/) yazısına bakın.

## Raporda nasıl yazılır?

Dürüst ve sade bir satır:

> “Yapay zekâ araçlarından gelen yönlendirme: 34 oturum (3 talep). Not: Kaynak bilgisi taşımayan ziyaretler doğrudan trafiğe karışır; gerçek etki daha yüksek olabilir.”

Eklenecekler: ölçümün hangi kaynak listesine dayandığı, tarih aralığı ve çerez izni gibi bilinen sınırlar ([çerez izinleri ve GA4](/blog/cerez-izinleri-ga4-organik-trafik-verisini-nasil-etkiler/)).

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir ahşap doğrama atölyesi, sahibinin “yapay zekâ bizi öneriyor mu?” sorusu üzerine analitiğine bakıyor.

- **Kaynak raporu:** Yönlendirme ortamında altı ayda birkaç yapay zekâ aracının alan adı çıkıyor; toplam 52 oturum, 2 talep. Doğrudan trafikte derin sayfalara inen oturumlar da var.
- **Kurulum:** “Yapay zekâ araçları” özel kanal grubu oluşturuluyor; formda “nereden duydunuz?” seçeneklerine bu kaynak ekleniyor.
- **Rapor:** “En az 52 oturum, 2 talep; gerçek etki bundan yüksek olabilir” yazılıyor. Karar, bu kanala büyük yatırım değil, mevcut içeriği güncel ve net tutmak oluyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Ölçülen sayıyı toplam etki sanmak.**
2. **Alan adı listesini bir kez çıkarıp güncellememek.**
3. **Küçük örneklemden yüzde değişim çıkarmak.**
4. **Doğrudan trafiği hiç incelememek.**
5. **Google’ın kendi yapay zekâ özelliklerini, dış araçlarla karıştırmak.**
6. **İç bağlantılara UTM eklemek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- GA4’te kaynak listesini çıkarıp özel kanal grubunu kurarız,
- doğrudan trafikteki olası yapay zekâ ziyaretlerini ipuçlarıyla inceleriz,
- müşteri beyanı için “nereden duydunuz?” düzenini kurarız,
- raporlarda ölçülebileni ve ölçülemeyeni açıkça ayırırız.

Kurulum için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Yapay zekâ araçlarından gelen trafik GA4’te nerede görünür?

Kaynak bilgisini ileten ziyaretler “yönlendirme” kanalında kaynak alan adıyla; iletmeyenler “doğrudan” içinde görünür.

### Özel kanal grubu nasıl kurulur?

GA4’te özel kanal grubu oluşturup yapay zekâ araçlarının alan adlarına göre kural tanımlarsınız; kanalı varsayılanların üstüne sıralayın.

### Google’ın yapay zekâ özetlerinden gelen trafik ayrı mı görünür?

Hayır. Search Console’da genel “Web” arama türünde; GA4’te organik arama içinde görünür.

### Sayı neden düşük çıkıyor?

Kaynak bilgisi iletmeyen ziyaretler doğrudan trafiğe karışır; ölçülen sayı gerçek etkinin alt sınırıdır.

### Alan adı listesini nereden alırım?

Kendi GA4 kaynak raporunuzdan; araçlar ve alan adları değiştiği için listeyi düzenli güncelleyin.

## Kaynaklar

- [Analytics Yardım: Trafik kaynağı boyutlarının kapsamları](https://support.google.com/analytics/answer/11080067?hl=tr)
- [Analytics Yardım: Varsayılan kanal grubu](https://support.google.com/analytics/answer/9756891?hl=tr)
- [Google Arama Merkezi: Yapay zeka özellikleri ve web siteniz](https://developers.google.com/search/docs/appearance/ai-features?hl=tr)
