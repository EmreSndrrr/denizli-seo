---
title: "Search Console’da Manuel İşlem Bildirimi: Ne Yapılmalı?"
description: "Search Console’da manuel işlem bildirimi gelirse ne yapılmalı? Raporu okuma, tüm etkilenen sayfaları düzeltme, inceleme isteği yazma ve süreç; adım adım rehber."
date: 2026-11-14
service: teknik-seo
imageAlt: "Manuel işlem bildirimi, düzeltme ve inceleme isteği adımları"
---

Search Console’da manuel işlem bildirimi görürseniz önce Manuel İşlemler raporunda açıklamayı okuyun, etkilenen sayfaları belirleyin, **tüm** etkilenen sayfalarda sorunu düzeltin ve ancak sonra “İnceleme İsteğinde Bulunun” düğmesiyle inceleme isteyin. Google’ın belgesine göre kısmi düzeltme kısmi dönüş getirmez; birden fazla işlem varsa hepsi düzeltilmelidir.

Manuel işlem, bir inceleme uzmanının sayfaların spam politikalarına uymadığını belirlemesiyle uygulanır; siteniz sonuçlardan kısmen ya da tamamen çıkarılabilir veya sırası düşebilir. Teknik inceleme için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Manuel işlem nedir?

Google’ın yardım sayfasına göre manuel işlem, bir inceleme uzmanı sitenizdeki sayfaların Google’ın spam politikalarına uymadığını belirlediğinde uygulanır. Sonuç olarak sitenin bir kısmı ya da tamamı arama sonuçlarının dışında tutulabilir ya da sıralaması düşebilir. İşlem Manuel İşlemler raporunda ve mesaj merkezinde bildirilir ([Manuel işlemler raporu](https://support.google.com/webmasters/answer/9044175?hl=tr)).

Manuel işlem, algoritmik düşüşten farklıdır: algoritmik değişiklikte bildirim gelmez; manuel işlemde bildirim ve belirli bir sorun açıklaması vardır. Trafik düşüşünün nedenini ayırmak için [trafik düşüşü teşhisine](/blog/trafik-dususu-nasil-teshis-edilir/) bakın.

## Bildirimi nerede görürsünüz?

- Search Console’da **Manuel İşlemler** raporu.
- Search Console **mesaj merkezi** ve e-posta bildirimleri.
- Raporda “işlem yok” yazıyorsa manuel işlem bulunmaz.

Bu yüzden Search Console’a doğru e-posta ile bağlı olmalı ve bildirimleri kimin okuduğunu bilmelisiniz ([Search Console kurulumu](/blog/google-search-console-nasil-kurulur-dogrulama-yontemleri/)).

## Önce sakin kalın ve okuyun

Bildirimi aldığınızda panik yapıp hızlı ve yanlış düzeltme yapmayın. İlk adımlar:

1. Raporda sorunun açıklamasını dikkatle okuyun.
2. Etkilenen sayfaların listesini görün (bazı işlemler tüm siteyi, bazıları belirli sayfaları kapsar).
3. Hangi spam politikasının ihlal edildiğini anlayın (gizli metin, anahtar kelime doldurma, bağlantı spam’i, ölçeklendirilmiş içerik vb.).
4. Sorunun nasıl ortaya çıktığını araştırın: yeni bir ajans, eski bir uygulama, hacklenme, satın alınmış bağlantı?
5. Son değişiklikleri (içerik, eklenti, bağlantı çalışması) listeleyin.

Politika başlıkları için [Google’ın spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr) sayfasına bakın.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Sorunu tüm sayfalarda düzeltin

Google’ın belgesine göre düzeltme için:

1. **Açıklamayı oku:** Hangi sorun var?
2. **Etkilenen sayfaları gör:** Raporda örnekler gösterilir.
3. **Tüm etkilenen sayfalarda düzelt:** Kısmi düzeltme kısmi dönüş getirmez.
4. **Birden fazla işlem varsa hepsini düzelt.**
5. **Google’ın sayfalara erişebildiğinden emin ol:** Robots.txt ya da oturum kısıtı Googlebot’u engellemesin.

Düzeltme örnekleri:

- **Bağlantı spam’i (satın alınmış bağlantı):** Bağlantıları kaldırtmaya çalışın; olmazsa reddetme düşünün ([bağlantıları reddetme](/blog/spam-backlink-nasil-anlasilir-reddetme-gerekli-mi/)).
- **Gizli metin ya da anahtar kelime doldurma:** Gizli içeriği ve yapay yoğunlaştırılmış metni kaldırın.
- **Kullanıcı kaynaklı spam:** Yorum ve forum spam’ini temizleyin; gelecekte engelleyin.
- **Hacklenmiş site:** Güvenlik açığını kapatın, zararlı kodu temizleyin.
- **Ölçeklendirilmiş düşük kaliteli içerik:** Değer katmayan sayfaları kaldırın ya da gerçekten geliştirin.

## Ekip ve ajansla koordinasyon

Manuel işlem, tek kişinin çözeceği bir iş değildir; birkaç tarafı aynı anda yönetmeniz gerekir:

- **İşletme sahibi:** Karar verir, raporu okur, sürecin sahibidir.
- **Geliştirici:** Teknik sorunları (gizli içerik, zararlı kod, otomatik sayfa) düzeltir.
- **İçerik ekibi:** Düşük kaliteli ya da çoğaltılmış içeriği temizler.
- **Ajans (varsa):** Bağlantı ve içerik çalışmalarını açıklar, belgeler.

Herkesin aynı belgede çalışması, inceleme isteğindeki anlatımı tutarlı yapar. Bir yapılacaklar tablosu (sorun, sorumlu, tarih, kanıt) hazırlayıp her güncellemeyi işleyin.

## Sorun ile belirtiyi karıştırmayın

Manuel işlem bildirimi, sorunun kendisi değil belirtisidir. Örneğin “yapay bağlantılar” bildirimi alıyorsanız asıl sorun, bu bağlantıları oluşturan çalışma biçimidir. Bağlantıları kaldırıp aynı ajansla çalışmaya devam ederseniz sorun tekrarlar. Bu yüzden kök nedeni bulun: kimin, hangi sözleşmeyle, hangi süreçle bu bağlantıları ya da içeriği ürettiğini belirleyin ve süreci değiştirin. İnceleme isteğinde bu değişikliği anlatmak, düzeltmenin kalıcı olduğunu gösterir.

## İzleme ve erken uyarı

Bir daha benzer bir sorunla karşılaşmamak için:

1. Search Console bildirimlerini birden fazla kişiye ulaştırın.
2. Manuel İşlemler ve Güvenlik Sorunları raporlarına ayda bir bakın.
3. Bağlantılar raporunu üç ayda bir gözden geçirin.
4. Sitenize içerik ekleyen herkesle (yazar, ajans, stajyer) kuralları paylaşın.
5. Önemli değişikliklerden önce yedek alın ve değişiklik kaydı tutun.

## İnceleme isteği nasıl yazılır?

Düzeltme bittiğinde Manuel İşlemler raporunda **İnceleme İsteğinde Bulunun** düğmesine basın. Google’a göre iyi bir inceleme isteği:

- Sorunu açıklar (neydi?).
- Atılan adımları açıklar (ne yaptınız?).
- Sonucu belgeler (neler değişti, kanıt nedir?).

Örnek yapı:

1. **Sorun:** “Raporda belirtilen sorun, satın alınmış bağlantılardı.”
2. **Yapılan:** “Bağlantı listesini çıkardık, X siteye kaldırma talebi gönderdik, kaldırılmayanlar için reddetme listesi hazırladık.”
3. **Sonuç:** “Güncel bağlantı raporunu ekledik; ajansla çalışmayı bitirdik ve süreçleri değiştirdik.”

Belgeleri (elektronik tablo, ekran görüntüsü) paylaşılabilir bir bağlantıyla ekleyin. Dürüst ve açık olun; olanı gizlemeye çalışmak işinizi uzatır.

## İnceleme ne kadar sürer?

Google’a göre inceleme birkaç gün veya birkaç hafta sürebilir; bağlantı işlemleri daha uzun sürebilir. Bu sırada:

- Karar gelmeden aynı isteği yeniden göndermeyin.
- Sitenizde yeni değişiklik yapmadan önce nedenini not edin.
- Sonuç bildirimini mesaj merkezinden izleyin.

İstek reddedilirse nedenini okuyun, eksik kalan düzeltmeleri tamamlayın ve yeniden isteyin.

## Yeni satın aldığınız sitede manuel işlem

Alan adını yeni satın aldıysanız Google, inceleme isteğinde bunu belirtmenizi önerir. Siteyi kendiniz kurmadığınızı ve sorunun önceki sahipten kaldığını yazın; yine de düzeltme yapmanız gerekir ([süresi dolmuş domain alırken geçmiş kontrolü](/blog/suresi-dolmus-domain-alirken-seo-gecmisi-kontrolu/)).

## Dönüşten sonra ne olur?

İşlem kaldırıldığında sitenizin görünürlüğü eski düzeyine hemen dönmeyebilir; Google siteyi yeniden değerlendirir. Sabırlı olun ve:

1. Sorunun tekrarını önleyecek süreçler kurun.
2. Ajans ve içerik yazarlarıyla politika kurallarını paylaşın.
3. Bağlantı ve içerik denetimlerini düzenli yapın ([kendi sitenizin backlink denetimi](/blog/kendi-sitenizin-backlink-denetimi-adim-adim/)).
4. Güvenlik izlemesi ve yedekleme yapın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir klima firmasının Search Console’unda “yapay bağlantılar” manuel işlemi görünüyor; trafik belirgin şekilde düşmüş.

- **Teşhis:** Eski bir ajansın satın aldığı yüzlerce bağlantı bulunuyor.
- **Düzeltme:** Ajanstan bağlantı listesi alınıyor, kaldırma talepleri gönderiliyor, kaldırılamayanlar için reddetme listesi hazırlanıyor.
- **İstek:** Sorun, yapılanlar ve belgeler anlatılarak inceleme isteniyor.
- **Sonrası:** Ajans değişiyor; bağlantı çalışması gerçek içerik ve yerel ortaklıklara kaydırılıyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Bildirimi görmezden gelmek.**
2. **Yalnızca bazı sayfaları düzeltip inceleme istemek.**
3. **Belgesiz, genel bir inceleme isteği yazmak.**
4. **Karar gelmeden tekrar tekrar istek göndermek.**
5. **Sorunun kaynağını (ajans, eklenti) kapatmamak.**
6. **İşlem kalktıktan sonra denetimi bırakmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- manuel işlem açıklamasını ve etkilenen sayfaları analiz eder,
- düzeltme planı ve kanıt dosyası hazırlarız,
- inceleme isteği taslağını yazarız,
- süreci ve dönüşü izleriz; satın alınmış bağlantı ve spam teknikleri uygulamayız.

Manuel işlem desteği için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Manuel işlem nedir?

Bir inceleme uzmanı sayfaların spam politikalarına uymadığını belirlediğinde uygulanan işlemdir; site kısmen ya da tamamen sonuçlardan çıkarılabilir ya da sırası düşebilir.

### Bildirimi nerede görürüm?

Search Console’un Manuel İşlemler raporunda ve mesaj merkezinde.

### Kısmi düzeltme yeterli mi?

Hayır; Google’a göre tüm etkilenen sayfalar düzeltilmelidir; kısmi düzeltme kısmi dönüş getirmez.

### İnceleme ne kadar sürer?

Birkaç gün veya birkaç hafta; bağlantı işlemleri daha uzun sürebilir.

### İstek reddedilirse ne yapmalıyım?

Nedeni okuyun, eksik düzeltmeleri tamamlayın ve yeniden isteyin; karar gelmeden tekrar göndermeyin.

## Kaynaklar

- [Search Console Yardımı: Manuel işlemler raporu](https://support.google.com/webmasters/answer/9044175?hl=tr)
- [Google Arama Merkezi: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)
- [Search Console Yardımı: Sitenize bağlantıları reddetme](https://support.google.com/webmasters/answer/2648487?hl=tr)
