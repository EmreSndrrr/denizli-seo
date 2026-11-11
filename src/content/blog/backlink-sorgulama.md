---
title: "Backlink Sorgulama: Sitenize Kimler Bağlantı Veriyor?"
description: "Backlink sorgulama nasıl yapılır? Search Console Bağlantılar raporu, raporun sınırları, üçüncü taraf araçların farkı ve zararlı bağlantı kuralı."
date: 2026-11-06
service: backlink-hizmeti
imageAlt: "Bir tablo ve sitelerden ana siteye uzanan bağlantı okları"
---

**Kısa cevap:** Kendi sitenizin backlinklerini görmenin ücretsiz ve resmî yolu Google Search Console’daki Bağlantılar raporudur. Rapor, sitenize en çok bağlantı veren siteleri, en çok bağlantı verilen sayfalarınızı ve en çok kullanılan bağlantı metinlerini listeler. Yalnızca doğruladığınız site için çalışır ve Google’ın bulduğu bağlantıları gösterir; kaldırılmış bağlantılar da listede kalabilir.

Bu yazı, sitenize hangi sitelerin bağlantı verdiğini nasıl göreceğinizi ve raporu nasıl yorumlayacağınızı anlatıyor. Rakip sitelerin bağlantılarına bakmanın sınırlarını ve “zararlı backlink gördüm” paniğinde ne yapılacağını da ele alıyoruz. Backlinkin ne olduğunu bilmiyorsanız önce [backlink nedir?](/blog/backlink-nedir/) yazımıza bakın.

## Backlink sorgulaması nasıl yapılır?

Search Console’da kendi siteniz için şu adımları izleyin:

1. **Search Console’a girin ve mülkünüzü seçin.** Siteniz henüz doğrulanmadıysa önce doğrulayın; adımlar [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızda.
2. **“Bağlantılar” raporunu açın.** Rapor iki ana bölüme ayrılır: harici bağlantılar ve dahili bağlantılar.
3. **“Harici bağlantılar” bölümüne bakın.** Burada başka sitelerden sizin sitenize verilen bağlantılar listelenir.
4. **Listeyi genişletin.** Her tablonun altındaki “Diğer” bağlantısı listenin tamamını açar.
5. **Bir siteyi ya da sayfayı seçerek ayrıntıya inin.** Örneğin bir bağlantı veren siteyi seçerseniz, o siteden hangi sayfalarınıza bağlantı verildiğini görürsünüz.

Rapor tabloları 1.000 satırla sınırlıdır, bu yüzden çok bağlantı alan sitelerde veriler kesilebilir. Küçük yerel işletmeler için bu sınır genellikle sorun olmaz.

## Bağlantılar raporunda hangi bölümler var?

Google’ın yardım sayfasına göre harici bağlantılar altında üç tablo bulunur ([Bağlantılar raporu](https://support.google.com/webmasters/answer/9049606?hl=tr)):

| Tablo | Ne gösterir? | Ne için bakılır? |
| --- | --- | --- |
| En çok bağlantı verilen sayfalar | Başka sitelerden en çok bağlantı alan sayfalarınız | Hangi içeriğin kaynak olarak anıldığını anlamak |
| En çok bağlantı veren siteler | Size en çok bağlantı veren siteler | Kimin sizi andığını görmek, şüpheli kaynakları fark etmek |
| En çok bağlantı veren metin | Bağlantıların tıklanabilir yazısı | Doğal mı yoksa tek tip mi olduğuna bakmak |

Rapor ayrıca **dahili bağlantıları** gösterir: kendi sayfalarınızı birbirine bağlayan bağlantılar. Google’a göre bu bölüm, kullanıcıların bir sayfadan diğerine en az tıklamayla ulaşabildiğini doğrulamak için kullanılabilir. İç bağlantılar, hizmet sayfalarınızı ana sayfanıza ve birbirinize bağlamak için de iyi bir kontrol noktasıdır.

## Raporun sınırları nelerdir?

Raporu doğru yorumlamak için dört sınırı bilin:

- **Google’ın bulduğu bağlantılar listelenir.** Rapor, Google’ın zaman içinde bulduğu bağlantıları içerir; bu bağlantılar sonradan kaldırılmış olabilir veya sayfa artık mevcut olmayabilir.
- **Siteler kök alan adına göre gruplanır.** `www.example.com`, `m.example.com` ve `example.com` tek bir site olarak görünür; yani bağlantı veren siteler kök alan adına göre gruplanır.
- **Yalnızca sahip olduğunuz mülk için çalışır.** Rakip sitenin raporunu Search Console’dan göremezsiniz.
- **Veri anlık değildir.** Yeni bir bağlantı hemen raporda görünmeyebilir.

Bu yüzden rapordaki sayıyı kesin bir sayım değil, bir fikir olarak okuyun. Önemli olan sayı değil, kimlerin sizi andığı ve bağlantıların sebebidir.

## Rakip sitenin backlinklerine bakabilir miyim?

Search Console ile bakamazsınız, çünkü yalnızca sahip olduğunuz siteyi gösterir. Bunun için ücretsiz ya da ücretli “backlink sorgulama” araçları vardır. Bu araçlar kendi tarayıcılarıyla topladıkları veriyi gösterir. Dikkat edilecek üç nokta:

1. **Google’ın verisi değildir.** Google üçüncü taraf araçları değerlendirmediğini ya da desteklemediğini söyler ([SEO’ya mı ihtiyacınız var?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)). Araçların gösterdiği sayı Google’ın bildiğiyle uyuşmayabilir.
2. **Araçlar birbirini tutmaz.** Aynı site için farklı araçlar farklı sayılar verebilir. Birini seçip her zaman onunla karşılaştırma yapın.
3. **Ücretsiz sürümler kısıtlıdır.** Çoğunda sorgu sayısı ya da gösterilen satır sınırlıdır.

Rakibin backlink listesi size ilham verebilir: hangi yerel kaynaklar onları anıyor? Ama bir listeyi kopyalayıp aynı sitelere kayıt olmak doğal bir bağlantı kazandırmaz. Her sitenin sizi anması için bir sebep gerekir.

## Backlink raporu nasıl yorumlanır?

Aşağıdaki tablo, rapordaki en sık karşılaşılan durumlar için bir karar kuralıdır:

| Gördüğünüz | Anlamı | Ne yapmalı? |
| --- | --- | --- |
| Yerel dernek, oda ya da haber sitesinden bağlantı | Büyük olasılıkla doğal | Kayda alın, sayfanın doğru açıldığını kontrol edin |
| Tanımadığınız ama konuyla ilgili bir blogdan bağlantı | Büyük olasılıkla doğal | Siteye bakın; gerçekse teşekkür edin |
| Hiç tanımadığınız, ilgisiz birçok siteden bağlantı | Şüpheli olabilir | Rastgele birkaçını açıp bakın |
| Hepsi aynı bağlantı metnini kullanan çok sayıda bağlantı | Düzenli bir çalışmanın izi olabilir | Kimin yaptırdığını araştırın (eski ajans ya da tedarikçi) |
| Çok az bağlantı, ama gerçek | Normal | Yeni ya da küçük sitelerde beklenen durum |
| Hiç bağlantı yok | Yeni site ya da veri henüz yok | Sabırla bekleyin; kaynakları kendiniz oluşturun |

Manuel işlem yoksa ve bağlantıyı siz yaptırmadıysanız, tek bir tuhaf bağlantı için harekete geçmeyin.

## Zararlı backlink gördüm, reddetmem gerekir mi?

Çoğu zaman hayır. Google, çoğu zaman hangi bağlantılara güveneceğini ek yardım olmadan değerlendirebildiğini, bu yüzden çoğu sitede reddetme aracının kullanılmasına gerek olmadığını belirtir. Geri bağlantıları yalnızca iki koşul birlikte sağlanırsa reddetmeniz gerekir: sitenize işaret eden önemli miktarda spam, sahte ya da düşük kaliteli bağlantı olduğunu düşünüyorsanız **ve** bu bağlantılar sitenizde manuel işlem başlatılmasına neden olduysa ya da neden olma ihtimali taşıyorsa ([bağlantıları reddetme](https://support.google.com/webmasters/answer/2648487?hl=tr)).

Google ayrıca üçüncü taraf sitelerindeki işlemlerin bir web sitesini olumsuz yönde etkilememesini sağlamak için çok yoğun çaba harcadığını yazar. Bu yüzden tek bir spam bağlantı için telaşa gerek yok.

Ödeme karşılığı bağlantı aldıysanız durum farklıdır. O zaman bağlantıları önce ilgili siteden kaldırtmayı denemeli, olmazsa reddetme aracına başvurmalısınız. Bu süreci [backlink satın almak](/blog/backlink-satin-almak-riskleri/) yazımızın “Manuel işlem aldıysanız” bölümünde anlattık.

## Dahili bağlantılar raporu ne işe yarar?

Rapor yalnızca sizi kimin andığını değil, kendi sayfalarınızın birbirini nasıl andığını da gösterir. Dahili bağlantılar bölümünde, en çok iç bağlantı alan sayfalarınızı görürsünüz. Küçük bir işletme sitesi için bu bölüm şu üç soruyu cevaplar:

- **Önemli sayfalarım yeterince bağlantı alıyor mu?** Hizmet sayfalarınız ana sayfa ve diğer sayfalardan bağlantı almıyorsa, hem ziyaretçi hem Google onlara zor ulaşır.
- **Beklemediğim bir sayfa mı öne çıkıyor?** Örneğin tek bir eski blog yazısı çok bağlantı alıyorsa, oradan hizmet sayfalarına bağlantı vermek işe yarar.
- **Bazı sayfalar hiç bağlantı almıyor mu?** Hiçbir yerden bağlanmayan sayfa, menüde olsa bile zayıf kalır.

İç bağlantı metninde Google’ın tavsiyesi açıklayıcı, kısa ve sayfayla alakalı olmaktır; “buraya tıklayın” gibi genel ifadelerden kaçının.

## Bağlantı yanlış ya da kırık bir adrese gidiyorsa ne yapılır?

“En çok bağlantı verilen sayfalar” listesinde bir adrese bakın ve o adresi tarayıcıda açın. Sayfa açılmıyorsa (404), bağlantı veren kişi eski ya da hatalı bir adres kullanıyor olabilir. Bu bağlantılar boşa gider.

İki çözüm yolu var:

1. **Doğru sayfaya yönlendirin.** Eski adres artık yoksa ve içeriği başka bir sayfaya taşındıysa, eski adresi yeni adrese kalıcı yönlendirin (301). Yönlendirme listesi hazırlama mantığı site yenilemede de aynıdır.
2. **Bağlantıyı veren siteden düzeltmesini isteyin.** Özellikle yerel bir dernek ya da haber sitesi sizi doğru adresle anmak isteyecektir; kibar bir e-posta yeterlidir.

Siteyi yeni baştan yaptıysanız, eski adreslerinizin bir kısmına dışarıdan bağlantı geliyor olabilir. Bağlantılar raporu, hangi eski adreslerin korunması gerektiğini gösteren iyi bir kaynaktır.

## Ayda bir yapılacak 15 dakikalık kontrol

Bağlantı raporuna düzenli bakmak zahmetsizdir. Şu rutin yeterli:

1. Search Console’da **Bağlantılar** raporunu açın.
2. “En çok bağlantı veren siteler” listesine bakın; yeni bir isim var mı?
3. Tanımadığınız bir siteyi tarayıcıda açıp gerçek bir site olup olmadığına bakın.
4. “En çok bağlantı veren metin” listesinde dikkat çekici, tekrar eden ya da ilgisiz ifadeler var mı?
5. “En çok bağlantı verilen sayfalar” listesinde beklemediğiniz bir sayfa öne çıkıyor mu? Varsa o sayfayı daha iyi hale getirin; çünkü insanlar zaten ona bakıyor.

Bulduklarınızı bir dosyaya tarihle not edin. Üç ay sonra karşılaştırınca ilerlemeyi görürsünüz.

## Denizli’den bir okuma örneği

Örnek (hayalî bir işletme için): Merkezefendi’de küçük bir mobilya atölyesi, raporunu ilk kez açıyor. “En çok bağlantı veren siteler” listesinde şunları görüyor:

- bir yerel esnaf derneğinin üye listesi sayfası,
- bir yerel haber sitesindeki fuar haberi,
- bir iş ortağı malzeme tedarikçisinin “müşterilerimiz” sayfası,
- ilgisiz görünen ve kimin eklediğini bilmediği iki yabancı dilli site.

İlk üçü sebebi belli, doğal kaynaklardır; kaydedilir ve gerektiğinde güncel tutulur. Son ikisi için işletme önce eski web tasarımcısına ya da ajansına sorar. Cevap yoksa bile hemen reddetme yoluna gitmez: manuel işlem yok, spam bildirimi yok. Yalnızca not alır ve üç ay sonra yeniden bakar.

## Ajansla çalışıyorsanız raporu nasıl kullanırsınız?

Bir ajans size “şu kadar bağlantı kazandırdık” diyorsa, bu iddiayı kendi Search Console hesabınızdan kontrol edebilirsiniz. Ajansı hesabınıza yönetici olarak ekleyin, raporu birlikte açın ve şunları sorun: Bu bağlantılar hangi sitelerden geldi? Neden sizi andılar? Hangi tarihte oluştular?

Cevap “doğal bir haber” ya da “iş ortağı sayfası” gibi somut bir şeyse iyi işaret. “Teknik sır” ise ya da bağlantı veren sitelerin hepsi size hiçbir şekilde tanıdık gelmiyorsa uyarı işareti. Raporun sahibi sizsiniz; ajans değişse de veriler hesabınızda kalır.

## Sık sorulan sorular

### Backlink sorgulama ücretsiz mi?

Search Console ücretsizdir ve kendi siteniz için bağlantıları gösterir. Rakip siteler için kullanılan üçüncü taraf araçlarda genellikle ücretsiz sürüm kısıtlıdır.

### Search Console’daki bağlantı sayısı neden başka araçlardan farklı?

Çünkü her araç kendi tarayıcısıyla farklı sayfaları bulur. Search Console Google’ın bulduklarını gösterir, diğer araçlar kendi veri tabanlarını. İkisi birebir aynı olmaz.

### Backlink raporunda hiçbir şey yok, nedenini nasıl anlarım?

Site yeni ise ya da yeni doğrulandıysa veri birkaç gün ya da hafta sonra oluşabilir. Siteniz eskiyse ve gerçekten bağlantı almamışsa bu normaldir; kaynakları [Denizli yerel backlink kaynakları](/blog/denizli-yerel-backlink-kaynaklari/) yazısıyla oluşturmaya başlayabilirsiniz.

### Rakibim çok backlinke sahip, benim de aynı sayıya ulaşmam gerekir mi?

Hayır. Bağlantı sayısı kalitenin ölçüsü değildir. Önemli olan sizi anan kaynakların gerçek, ilgili ve sebepli olmasıdır.

## Kaynaklar

- [Search Console Yardımı: Bağlantılar raporu](https://support.google.com/webmasters/answer/9049606?hl=tr)
- [Search Console Yardımı: Sitenize bağlantıları reddetme](https://support.google.com/webmasters/answer/2648487?hl=tr)
- [Google Search Central: SEO’ya mı ihtiyacınız var?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr)

Bağlantı profilinize bakıp yapılacakları birlikte netleştirmek isterseniz [backlink hizmeti sayfamıza](/backlink-hizmeti/) bakabilir ya da [bize yazabilirsiniz](/iletisim/).
