---
title: "Şirket İçi Ziyaretler GA4 Raporlarından Nasıl Ayrılır?"
description: "Şirket çalışanlarının ziyaretleri GA4 raporlarından nasıl ayrılır? Dahili trafik tanımı, IP kuralları, veri filtresinin test ve etkin durumu."
date: 2026-11-15
service: teknik-seo
imageAlt: "Ofis IP adresinden gelen ziyaretlerin analitik raporundan ayrılması"
---

GA4’te şirket içi ziyaretleri ayırmak iki adımlıdır: önce veri akışının etiket ayarlarında ofisinizin IP adresini “dahili trafik” olarak tanımlarsınız, sonra Veri filtreleri bölümünde bu trafiği hariç tutan filtreyi önce **Test**, doğrulandıktan sonra **Etkin** duruma alırsınız. Etkin filtre veriye kalıcı olarak uygulanır; geri alınamaz. Bu yüzden test adımını atlamayın. Sabit IP’si olmayan ya da evden çalışan ekipler için IP kuralı yetmez; ek yöntem gerekir.

Küçük sitede çalışanların ziyaretleri toplamın önemli bir bölümünü oluşturabilir ve bütün oranları bozar. Ölçüm kurulumu için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## Neden ayırmak gerekir?

Günde 60 ziyaret alan bir işletme sitesinde, üç çalışanın gün boyu siteyi açıp fiyat kontrol etmesi, yeni sayfayı gözden geçirmesi ve formu test etmesi kolayca 15–20 oturum eder. Bu ziyaretler:

- trafik sayısını şişirir,
- etkileşim süresini ve sayfa/oturum oranını yükseltir (çalışan çok sayfa gezer),
- dönüşümü çarpıtır (test formları talep gibi sayılır),
- “doğrudan” kanalın payını büyütür, organik aramanın payını küçültür,
- yeni yayınlanan sayfayı ilk gün “popüler” gösterir.

Ajansınızın ve geliştiricinizin ziyaretleri de aynı etkiyi yapar. SEO’nun katkısını ölçmek istiyorsanız önce kendi ayak izinizi rapordan çıkarmalısınız.

## Ön koşul

Google’a göre dahili trafiği tanımlamak ve veri filtrelerini oluşturmak, düzenlemek ve silmek için mülk düzeyinde **Düzenleyici** rolüne sahip olmanız gerekir ([dahili trafiği filtreleme](https://support.google.com/analytics/answer/10104470?hl=tr)).

## Adım 1: Dahili trafiği tanımlayın

Google’ın tarif ettiği yol:

1. **Yönetici** bölümünde, Veri toplama ve değiştirme altında **Veri akışları**’nı açın.
2. Web veri akışınızı tıklayın.
3. **Etiket ayarlarını yapılandırın**’ı, ardından **Daha fazla göster**’i tıklayın.
4. **Dahili trafiği tanımlayın**’ı ve **Oluştur**’u tıklayın.
5. Kurala bir ad verin (ör. “Merkez ofis”).
6. `traffic_type` parametresi için değer girin. Varsayılan `internal` değeridir; isterseniz konumu belirten başka bir değer yazabilirsiniz.
7. IP adresi için eşleme türünü seçin ve değeri girin.
8. **Oluştur**’u tıklayın.

Bu adım tamamlandığında Analytics, eşleşen her etkinliğe `traffic_type` parametresini ekler. Henüz hiçbir şey hariç tutulmamıştır; yalnızca etiketlenmiştir.

### IP eşleme seçenekleri

Belgedeki operatörler ve örnekleri:

| Operatör | Örnek |
|---|---|
| Şuna eşittir | `172.16.1.1` |
| Şununla başlar | `10.0.` |
| Şununla biter | `.255` |
| Şunu içerir | `.0.0.` |
| Şu aralıktadır (CIDR) | `192.168.0.0/16` |
| Normal ifadeyle eşleşir | `192\.0.*` |

IPv4 ve IPv6 adresleri girilebilir. Birden çok koşul eklediğinizde koşullar “ve” değil “veya” mantığıyla çalışır: herhangi biriyle eşleşen adres dahili sayılır. Ofisinizin dışarıya görünen IP adresini aynı ekrandaki “IP adresim nedir?” bağlantısıyla bulabilirsiniz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 2: Veri filtresini oluşturun ve test edin

1. **Yönetici** bölümünde, Veri toplama ve değiştirme altında **Veri filtreleri**’ni açın.
2. **Filtre Oluştur**’u tıklayın ve **Dahili Trafik**’i seçin.
3. Filtreye ad verin. Ad mülkte benzersiz olmalı, bir harfle başlamalı ve en fazla 40 karakter olmalıdır.
4. `traffic_type` değerinin birinci adımda girdiğinizle aynı olduğunu kontrol edin.
5. Filtre durumunu seçin.

Üç durum vardır:

- **Test:** Analytics eşleşen verileri “Test verileri filtre adı” boyutuyla işaretler; hiçbir şey silinmez.
- **Etkin:** Filtre gelen verilere uygulanır ve **kalıcı değişiklikler yapar**.
- **Etkin değil:** Filtre değerlendirilmez.

Önce **Test** seçin. Google, test durumundaki verinin Keşfet’te bulunduğunu, böylece filtreyi etkinleştirmeden önce doğrulayabileceğinizi belirtir. Doğrulama için serbest biçimli bir keşif oluşturup “Test verileri filtre adı” boyutunu ekleyin; ofisten yaptığınız ziyaretler bu boyutta filtre adıyla görünmelidir.

Birkaç gün izleyin:

- Ofisten yapılan ziyaretler işaretleniyor mu?
- Müşteri ziyaretleri yanlışlıkla işaretleniyor mu? (Çok geniş bir aralık girdiyseniz olur.)

Emin olduktan sonra durumu **Etkin** yapın. Bu andan sonra eşleşen veri mülke hiç yazılmaz ve geri getirilemez; filtre geçmişe de uygulanmaz.

## Sabit IP yoksa ne yapılır?

IP kuralının işe yaraması için ofisin dış IP adresinin değişmemesi gerekir. Türkiye’de birçok küçük işletmenin internet bağlantısı değişken IP’lidir; modem yeniden başladığında adres değişir. Seçenekler:

1. **Sabit IP hizmeti alın.** İnternet sağlayıcınız çoğunlukla küçük bir ek ücretle verir. En temiz çözümdür.
2. **Aralık tanımlayın.** Adresiniz hep aynı blok içinde değişiyorsa o bloğu CIDR ile girebilirsiniz; ama aynı bloktaki başka abonelerin (olası müşterilerin) de hariç kalacağını unutmayın.
3. **`traffic_type` parametresini elle gönderin.** Google, bu parametrenin etkinliklere manuel olarak da eklenebileceğini belirtir. Geliştirici, çalışanların tarayıcısında bir kez ayarlanan bir işaretle (ör. özel bir adrese girince yazılan çerez) etiketin `traffic_type=internal` göndermesini sağlayabilir. Evden ve mobilden çalışanlar için işe yarayan yol budur.
4. **Ölçümü engelleyen tarayıcı eklentisi.** Çalışan tarayıcılarında analitik ölçümünü kapatan bir eklenti kullanmak basit bir çözümdür; ama her cihazda ve her tarayıcıda kurulması, yeni çalışanlarda hatırlanması gerekir.

## Ajans, geliştirici ve test trafiği

- Ajansınızın ve geliştiricinizin IP adreslerini ayrı kurallar olarak ekleyin; kurala kimin adresi olduğunu yazın.
- Geliştirme trafiği için GA4’te ayrı bir filtre türü (geliştirici trafiği) bulunur; hata ayıklama modunda gönderilen etkinlikler bununla ayrılır.
- Test (staging) sitesinde canlı sitenin ölçüm kodunu çalıştırmayın ([test sitesi](/blog/test-sitesinin-googleda-indekslenmesi-nasil-onlenir/)).
- Form testlerini kayıt tablonuzda “test” olarak işaretleyin ([talepleri ölçmek](/blog/seodan-gelen-form-ve-telefon-talepleri-nasil-olculur/)).

## Filtreyi ne zaman gözden geçirmeli?

- Ofis taşındığında ya da internet sağlayıcısı değiştiğinde.
- Yeni şube açıldığında.
- Ajans ya da geliştirici değiştiğinde ([ajans değiştirirken teslim alınacaklar](/blog/seo-ajansi-degistirirken-hangi-hesaplar-teslim-alinmali/)).
- Üç ayda bir, rutin kontrol olarak: kendi ziyaretiniz gerçek zamanlı raporda görünüyor mu?

IP değişip filtre güncellenmezse iki şey olur: yeni adresiniz ölçülmeye başlar ve eski adresinizi devralan yabancı bir abone hariç tutulur.

## Kurulumu doğrulamanın hızlı yolu

Filtre etkinleştikten sonra basit bir denemeyle çalıştığını görün:

1. Ofis ağından sitenin az ziyaret edilen bir sayfasını açın; gerçek zamanlı raporda ziyaretiniz **görünmemeli**.
2. Telefonunuzda Wi-Fi’ı kapatıp mobil veriyle aynı sayfayı açın; bu ziyaret **görünmeli**.
3. İkisi de görünüyorsa IP kuralı eşleşmiyordur; ikisi de görünmüyorsa etiket ya da izin bandı sorununa bakın.

Bu denemeyi her IP değişikliğinden sonra yineleyin; iki dakika sürer ve aylarca yanlış veriyle çalışmanızı önler.

## Geçmiş veri ve karşılaştırma

Filtre geriye dönük çalışmadığı için, etkinleştirdiğiniz gün raporlarda küçük bir basamak görürsünüz: trafik azalır, etkileşim süresi düşer, dönüşüm oranı değişir. Bu bir kayıp değil, düzeltmedir. Tarihi not edin ve önceki dönemle karşılaştırmalarda bu farkı hatırlatın ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)). Geçmiş dönemi temizlemek isterseniz, keşiflerde ofis şehrini ve “doğrudan” kanalı birlikte inceleyerek kaba bir tahmin yapabilirsiniz; kesin ayrım mümkün değildir.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir sigorta acentesinin sitesinde en çok ziyaret edilen sayfa “Teklif Formu” ve dönüşüm oranı şaşırtıcı derecede yüksek görünüyor.

- **Teşhis:** Altı çalışan, müşteriler telefondayken teklif formunu sitenin üzerinden kendileri dolduruyor. Oturumların üçte biri ofisten.
- **Kurulum:** Sabit IP alınıyor, dahili trafik kuralı tanımlanıyor; filtre bir hafta Test durumunda izleniyor, sonra Etkin yapılıyor.
- **Sonuç:** Raporlar gerçek müşteri davranışını gösteriyor; organik aramanın payı ilk kez doğru okunuyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Dahili trafiği tanımlayıp veri filtresini oluşturmamak.**
2. **Filtreyi test etmeden Etkin yapmak.**
3. **Çok geniş IP aralığıyla müşterileri de hariç tutmak.**
4. **Değişken IP’de tek adres girip unutmak.**
5. **Ajans ve geliştirici ziyaretlerini saymaya devam etmek.**
6. **Filtre tarihini not etmeden dönem karşılaştırması yapmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- dahili trafik kurallarını ve veri filtresini kurar, test ederiz,
- sabit IP olmayan ekipler için parametre tabanlı çözüm hazırlarız,
- kendi ziyaretlerimizi de raporlarınızdan ayırırız,
- filtreyi periyodik olarak kontrol ederiz.

Kurulum için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### Dahili trafiği tanımlamak yeterli mi?

Hayır. Tanım yalnızca etkinlikleri etiketler; hariç tutmak için veri filtresi oluşturup etkinleştirmeniz gerekir.

### Etkin filtreyi geri alabilir miyim?

Filtreyi kapatabilirsiniz; ama etkinken hariç tutulan veri geri gelmez. Google, etkin filtrenin kalıcı değişiklik yaptığını belirtir.

### Filtre geçmiş veriyi temizler mi?

Hayır; yalnızca etkinleştirildikten sonra gelen veriye uygulanır.

### Evden çalışanların ziyaretlerini nasıl ayırırım?

IP kuralı yetmez; `traffic_type` parametresini elle gönderen bir kurulum ya da tarayıcıda ölçümü kapatan bir eklenti gerekir.

### Hangi rol gerekir?

Mülk düzeyinde Düzenleyici rolü.

## Kaynaklar

- [Analytics Yardım: Dahili trafiği filtreleme](https://support.google.com/analytics/answer/10104470?hl=tr)
