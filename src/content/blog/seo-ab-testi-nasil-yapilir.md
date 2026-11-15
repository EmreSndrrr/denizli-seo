---
title: "SEO A/B Testi Nasıl Yapılır?"
description: "SEO A/B testi nasıl yapılır? Google’ın test kuralları (gizleme yok, canonical, 302), sayfa grubu yöntemi, tek sayfa önce–sonra testi ve sonuçları yorumlama."
date: 2026-11-15
service: teknik-seo
imageAlt: "Kontrol ve test sayfa gruplarının tıklama eğilimini karşılaştıran grafik"
---

SEO A/B testi, bir değişikliğin (başlık, açıklama, içerik düzeni, iç bağlantı) arama performansını gerçekten iyileştirip iyileştirmediğini ölçmenin yoludur. Kullanıcıya dönük klasik A/B testinden farkı şudur: Google bir adresin tek sürümünü dizine alır; bu yüzden ziyaretçileri değil, **sayfaları** ikiye ayırırsınız. Benzer sayfalardan bir grubu değiştirir, diğerini olduğu gibi bırakır ve iki grubun tıklama eğilimini karşılaştırırsınız. Küçük sitelerde bunun yerine tek sayfada önce–sonra karşılaştırması yapılır; daha az kesindir ama hiç ölçmemekten iyidir.

İki tür testi karıştırmamak ve Google’ın test kurallarına uymak gerekir. Test planı için [teknik SEO hizmetimize](/teknik-seo/) bakabilirsiniz.

## İki farklı test türü

| | Kullanıcı (dönüşüm) A/B testi | SEO testi |
|---|---|---|
| Soru | Hangi sürüm daha çok talep getiriyor? | Hangi sürüm aramada daha çok tıklama alıyor? |
| Bölünen şey | Ziyaretçiler | Sayfalar |
| Ölçüt | Dönüşüm oranı | Gösterim, tıklama, tıklama oranı, konum |
| Veri kaynağı | Analitik, test aracı | Search Console |
| Risk | Google’ın yanlış sürümü görmesi | Tüm sayfalarda yanlış değişiklik |

İşletmeler çoğu zaman ilkini yaparken SEO’ya zarar vermekten korkar; ikincisini ise hiç yapmaz. İkisini de ele alalım.

## Kullanıcı testlerinde Google’ın kuralları

Google’ın belgesi, sayfa içeriği ve adreslerindeki değişikliklerin arama performansını en az etkileyecek biçimde nasıl test edileceğini anlatır ([A/B testi etkisini en aza indirme](https://developers.google.com/search/docs/crawling-indexing/website-testing?hl=tr)). Dört kural vardır.

**1. Test sayfalarını gizlemeyin.** Googlebot’a bir sürümü, kullanıcılara başka bir sürümü göstermeyin. Buna gizleme (cloaking) denir ve test çalıştırıyor olsanız da spam politikalarına aykırıdır; sitenin sıralaması düşürülebilir ya da sonuçlardan kaldırılabilir. Bunu sunucu mantığıyla, robots.txt ile ya da başka bir yolla yapmanız fark etmez. Google ayrıca Googlebot’un genellikle çerezleri desteklemediğini hatırlatır: testi çerezle yönetiyorsanız Googlebot, çerez kabul etmeyen bir ziyaretçinin gördüğü sürümü görür.

**2. `rel="canonical"` kullanın.** Testi birden çok adresle yürütüyorsanız (ör. `/sayfa/` ve `/sayfa-b/`), varyasyon adreslerinin tamamında orijinal adresi gösteren canonical kullanın. Google burada `noindex` yerine canonical önerir: amaç varyasyonu dizinden atmak değil, orijinalle gruplanmasını sağlamaktır; `noindex` kullanmak beklenmeyen olumsuz etkilere yol açabilir ([canonical etiketi](/blog/canonical-etiketi-nedir-kopya-sayfa-sorunu/)).

**3. 301 değil 302 kullanın.** Kullanıcıları orijinal adresten varyasyon adresine yönlendiriyorsanız geçici (302) yönlendirme kullanın. Böylece arama motoru yönlendirmenin deneme süresince geçerli olduğunu anlar ve dizinde orijinal adresi tutar. JavaScript tabanlı yönlendirme de kullanılabilir ([301 ve 302 farkı](/blog/301-ve-302-yonlendirme-farki-nedir/)).

**4. Denemeyi yalnızca gerektiği kadar çalıştırın.** Test bitince siteyi seçilen sürümle güncelleyin ve alternatif adresler, test betikleri ve işaretleme gibi tüm test öğelerini mümkün olan en kısa sürede kaldırın. Google, bir denemenin gereksiz uzun sürdüğünü fark ederse bunu arama motorlarını yanıltma girişimi olarak yorumlayabileceğini belirtir; özellikle bir varyasyon kullanıcıların büyük bölümüne sunuluyorsa.

Google rahatlatıcı bir not da ekler: düğme rengi, boyutu, yerleşimi ya da çağrı metni gibi küçük değişiklikler kullanıcı davranışını şaşırtıcı biçimde etkileyebilir, ama genellikle sayfanın snippet’i ya da sıralaması üzerinde çok az etkisi olur ya da hiç olmaz.

> **Hizmet almak için iletişime geçin.** Sitenizin dizine eklenme, hız ve mobil durumunu birlikte tarayalım. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## SEO testi: sayfa grubu yöntemi

Yeterince benzer sayfanız varsa (ürün, ilan, şube, ilçe, kategori sayfaları) gerçek bir SEO testi yapabilirsiniz.

1. **Hipotezi yazın.** “Ürün başlıklarının sonuna ‘fiyatı ve özellikleri’ eklemek tıklama oranını artırır.” Tek değişken olsun.
2. **Benzer sayfaları seçin.** Aynı şablonu kullanan, benzer trafik alan en az birkaç on sayfa. Çok az sayfayla sonuç gürültüde kaybolur.
3. **İki gruba ayırın.** Kontrol ve test. Ayırırken rastgele seçin ya da trafiğe göre eşleştirin; “en iyi sayfaları test grubuna koymak” sonucu çarpıtır.
4. **Önceki dönemi kaydedin.** Her grubun değişiklikten önceki dört–altı haftalık gösterim, tıklama ve tıklama oranını Search Console’dan alın.
5. **Değişikliği yalnızca test grubuna uygulayın.** Tarihi not edin.
6. **Bekleyin.** Google’ın sayfaları yeniden taraması ve verinin birikmesi için en az üç–dört hafta.
7. **Karşılaştırın.** Test grubunun değişimini kontrol grubunun değişimiyle kıyaslayın. İkisi de %10 arttıysa değişikliğin etkisi yoktur; mevsim ya da genel eğilim vardır.
8. **Karar verin.** Kazanç varsa tüm sayfalara uygulayın; yoksa geri alın.

Burada gizleme riski yoktur: her adres herkese, Google dahil, aynı içeriği gösterir. Yalnızca bazı sayfalar değişmiş, bazıları değişmemiştir.

## Küçük site: tek sayfada önce–sonra

On beş sayfalık bir işletme sitesinde grup oluşturamazsınız. O zaman:

1. Bir sayfa ve bir değişiklik seçin (ör. hizmet sayfasının başlığı ve meta açıklaması).
2. Önceki dört haftanın verisini kaydedin: sayfa bazında tıklama, gösterim, tıklama oranı, ortalama konum ve öne çıkan sorgular.
3. Değişikliği yapın, tarihi yazın, sayfayı yeniden taramaya gönderin.
4. Aynı dönemde o sayfada başka hiçbir şeyi değiştirmeyin.
5. Dört hafta sonra aynı ölçütleri karşılaştırın; mümkünse geçen yılın aynı dönemine de bakın.
6. Karşılaştırma için değiştirmediğiniz benzer bir sayfayı “kaba kontrol” olarak izleyin.

Bu yöntem kesin kanıt vermez; mevsim, rakip hareketi ve güncellemeler sonucu etkiler. Ama değişiklikleri kayıt altına alan bir işletme, bir yıl sonunda neyin işe yaradığını tahminle değil veriyle konuşur ([SEO değişiklikleri nasıl kaydedilir?](/blog/seo-degisiklikleri-nasil-kaydedilir/)).

## Neler test edilir?

Etkisi görece hızlı görülen ve geri alınabilen değişiklikler:

- **Başlık ve meta açıklama:** Tıklama oranına doğrudan dokunur ([tıklama oranı nasıl artırılır?](/blog/arama-sonuclarinda-tiklama-orani-nasil-artirilir/)).
- **Sayfa başındaki özet paragraf:** Cevabı başa almak.
- **İç bağlantı:** Bir grup sayfaya ilgili içeriklerden bağlantı eklemek.
- **Yapılandırılmış veri:** Bir grup sayfaya SSS ya da ürün işaretlemesi eklemek.
- **İçerik bölümleri:** Fiyat tablosu, SSS, karşılaştırma eklemek.

Test edilmemesi gerekenler: adres yapısı, alan adı, site genelindeki şablon değişiklikleri. Bunlar geri alınması zor, etkisi uzun süren işlerdir; test değil, planlı geçiş gerektirir.

## Sonuçları yorumlarken tuzaklar

- **Kısa süre.** Bir haftalık veriyle karar vermeyin; haftanın günleri bile farklıdır.
- **Az veri.** Ayda 40 tıklama alan bir sayfada 40’tan 48’e çıkmak kanıt değildir.
- **Yalnızca konuma bakmak.** Ortalama konum, sayfanın göründüğü sorgular değiştikçe kendiliğinden oynar; tıklama ve gösterimle birlikte okuyun ([sıralama takibi](/blog/google-siralamasi-nasil-takip-edilir-konum-ve-cihaza-gore/)).
- **Dış etkenler.** Test döneminde Google güncellemesi, kampanya ya da tatil olduysa not edin.
- **Birden çok değişiklik.** Aynı anda başlık, içerik ve iç bağlantıyı değiştirirseniz hangisinin işe yaradığını bilemezsiniz.
- **Kazananı tıklamayla sınırlamak.** Tıklama artıp talep düşüyorsa başlık yanlış kitleyi çekiyordur; dönüşüme de bakın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Denizli’de bir yapı market zincirinin 120 ürün kategorisi sayfası var. Başlıkların sonuna “fiyatları” kelimesinin eklenmesinin işe yarayıp yaramayacağı merak ediliyor.

- **Kurulum:** Kategoriler trafiğe göre eşleştirilip 60’ar sayfalık iki gruba ayrılıyor; önceki altı haftanın verisi kaydediliyor.
- **Uygulama:** Yalnızca test grubunun başlıkları değiştiriliyor.
- **Sonuç okuma:** Beş hafta sonra iki grubun tıklama oranı değişimi karşılaştırılıyor; fark belirgin ve tutarlıysa değişiklik tüm kategorilere uygulanacak, değilse geri alınacak.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Googlebot’a ziyaretçiden farklı sürüm göstermek.**
2. **Varyasyon adreslerini canonical’sız bırakmak ya da `noindex` yapmak.**
3. **Test yönlendirmesinde 301 kullanmak.**
4. **Test bittikten sonra betikleri ve varyasyon adreslerini bırakmak.**
5. **Kontrol grubu olmadan “arttı” demek.**
6. **Aynı anda birden çok şeyi değiştirmek.**

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- sitenizin büyüklüğüne uygun test yöntemini seçeriz,
- hipotez, grup ve ölçüm planını yazarız,
- kullanıcı testlerinizin Google kurallarına uygunluğunu denetleriz,
- sonuçları kontrol grubuyla karşılaştırarak raporlarız.

Test planı için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Sitenizin Google’da neden görünmediğine birlikte bakalım. [Hizmet almak için iletişime geçin](/iletisim/); yöntemimiz [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### A/B testi SEO’ya zarar verir mi?

Google’ın kurallarına uyarsanız hayır: gizleme yapmayın, canonical ve 302 kullanın, testi gereğinden uzun sürdürmeyin.

### SEO testinde ziyaretçiler mi bölünür?

Hayır. Sayfalar bölünür: bir grup değişir, benzer bir grup kontrol olarak kalır.

### Test ne kadar sürmeli?

Sayfaların yeniden taranması ve verinin birikmesi için genellikle en az üç–dört hafta.

### Küçük sitede test yapılabilir mi?

Grup testi yapılamaz; tek sayfada önce–sonra karşılaştırması yapılır ve sonuç dikkatle yorumlanır.

### Varyasyon sayfasına noindex mi koymalıyım?

Google, bu durumda `noindex` yerine orijinali gösteren `rel="canonical"` kullanmanızı önerir.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’da A/B testi etkisini en aza indirme](https://developers.google.com/search/docs/crawling-indexing/website-testing?hl=tr)
