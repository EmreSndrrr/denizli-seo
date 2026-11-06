---
title: "Yapay Zekâ Aramalarında Görünmek: İşletme Kontrol Listesi"
description: "Google’ın yapay zekâ özetlerinde, ChatGPT ve Perplexity’de görünmek için ayrı bir teknik yok. Botlar, robots.txt, ölçüm ve işletmeler için kontrol listesi."
date: 2026-11-04
updated: 2026-11-06
service: icerik-seo
imageAlt: "Bir yapay zekâ yanıt kartı ve altında kaynak gösteren üç site"
---

**Kısa cevap:** Google’a göre yapay zekâ özetlerinde (AI Overviews) ve AI Mode’da görünmek için ek bir koşul ya da özel bir teknik yok; sayfanın dizine alınmış ve arama sonucunda gösterilmeye uygun olması gerekir. ChatGPT, Perplexity ve Claude ise kendi botlarıyla sitenizi okur. Yapabileceğiniz iş, bilginizi net, doğru, tutarlı ve botların erişebileceği biçimde yayınlamaktır. Kimse bu yanıtlarda görünmeyi garanti edemez.

Bu yazıda Google’ın yapay zekâ özelliklerinin kaynakları nasıl bulduğunu, sohbet araçlarının sitenizi hangi botlarla okuduğunu, robots.txt’te neye dikkat etmeniz gerektiğini, nelerin işe yaramadığını ve sonucu nasıl ölçebileceğinizi anlatıyoruz. Sonda Denizli’deki bir işletmenin izleyebileceği somut bir sıra var.

## Yapay zekâ aramalarında görünmek için özel bir teknik gerekir mi?

Google için gerekmez. Google, AI Overviews ve AI Mode’da görünmek için ek bir koşul ya da özel bir optimizasyon olmadığını açıkça yazıyor ([Google: yapay zekâ özellikleri ve web siteniz](https://developers.google.com/search/docs/appearance/ai-features?hl=tr)). Google’ın yayımladığı yapay zekâ optimizasyon rehberi de bunu “hâlâ SEO” diye özetliyor ([Google: yapay zekâ optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=tr)).

İnternette bu iş için “AEO” (yanıt motoru optimizasyonu) ve “GEO” (üretken motor optimizasyonu) gibi adlar kullanılıyor. Google’ın rehberine göre Google Arama açısından bunlar da SEO’dur. Google, bu adlarla sunulan üçüncü taraf tavsiye ve hizmetleri kendi resmî rehberiyle karşılaştırarak değerlendirmenizi öneriyor.

Sohbet araçları (ChatGPT, Perplexity, Claude gibi) ise kendi botlarıyla ve kendi kurallarıyla çalışır. Hangi sayfayı kaynak göstereceklerini önceden bilmek mümkün değildir.

## Google’ın yapay zekâ özetleri kaynakları nasıl seçer?

Google’ın yapay zekâ özellikleri, kaynakları Google Arama’nın kendi dizininden ve sıralama sistemlerinden alır. Google’ın rehberine göre süreç kabaca şöyle işler:

1. **Dizinden ilgili sayfalar bulunur.** Google bu yönteme “dayanaklandırma” (grounding) ya da RAG diyor: Yanıt, Arama’nın sıralama sistemleriyle bulunan güncel sayfalara dayandırılır ve bu sayfalara tıklanabilir bağlantılar verilir.
2. **İlgili ek aramalar yapılır.** Google buna “query fan-out” diyor: Model, sorunun alt konuları için birden fazla ilgili arama yapar. Google’ın verdiği örnekte, çimdeki yabani otları sorana herbisitler, kimyasalsız temizlik ve önleme üzerine ek aramalar yapılıyor.
3. **Yanıt ve destekleyen bağlantılar gösterilir.** AI Overviews ve AI Mode farklı modeller ve yöntemler kullanabilir; bu yüzden gösterdikleri yanıt ve bağlantılar farklı olabilir.

Bir sayfanın bu özelliklerde destekleyen bağlantı olarak gösterilebilmesi için dizine alınmış ve Google Arama’da snippet (kısa açıklama metni) ile gösterilmeye uygun olması gerekir. Google, bütün koşulları karşılayan bir sayfanın bile taranacağını, dizine alınacağını ya da gösterileceğini garanti etmediğini belirtiyor. Ayrıca AI Overviews, yalnızca klasik arama sonucuna bir şey kattığı düşünülen aramalarda çıkar; birçok aramada hiç görünmez.

Google’ın güncel optimizasyon rehberi, bunlara ek olarak sitenin Search Console’da Arama’daki üretken yapay zekâ özelliklerine dahil edilmiş olması gerektiğini de yazıyor. Search Console’a sitenizi ekleyin ve oradaki ayarları kontrol edin.

## ChatGPT, Perplexity ve Claude sitenizi nasıl okur?

Bu araçlar sitenizi kendi botlarıyla okur ve her şirket botlarını kendi belgesinde açıklar. Bazı botlar arama yanıtları için, bazıları yapay zekâ modellerini eğitmek için, bazıları ise bir kullanıcının o anki isteği için sayfayı açar. Aşağıdaki tablo, şirketlerin kendi belgelerine göre hazırlandı.

| Bot | Şirket | Ne için kullanılır? |
| --- | --- | --- |
| OAI-SearchBot | OpenAI | ChatGPT’nin arama özelliklerinde siteleri göstermek |
| GPTBot | OpenAI | Yapay zekâ modellerinin eğitiminde kullanılabilecek içeriği taramak |
| ChatGPT-User | OpenAI | Kullanıcının ChatGPT’deki isteği üzerine sayfayı açmak |
| PerplexityBot | Perplexity | Perplexity’nin arama sonuçlarında siteleri göstermek ve bağlantı vermek |
| Perplexity-User | Perplexity | Kullanıcının sorusu üzerine sayfayı açmak |
| Claude-SearchBot | Anthropic | Arama yanıtlarının kalitesini artırmak için içeriği dizine almak |
| ClaudeBot | Anthropic | Model eğitimine katkı sağlayabilecek içeriği toplamak |
| Claude-User | Anthropic | Kullanıcının Claude’a sorduğu soru üzerine sayfayı açmak |
| Google-Extended | Google | Gemini modellerinin eğitimi ve Gemini uygulamalarında dayanaklandırma için tercih bildirmek |

Bu belgelerdeki önemli ayrıntılar şunlar:

- **OpenAI**, OAI-SearchBot’u engelleyen sitelerin ChatGPT’nin arama yanıtlarında (gezinme bağlantıları dışında) gösterilmeyeceğini, GPTBot’u engellemenin ise içeriğin model eğitiminde kullanılmaması isteği anlamına geldiğini yazıyor. İki ayar birbirinden bağımsızdır. ChatGPT-User kullanıcı isteğiyle çalıştığı için robots.txt kurallarının ona uygulanmayabileceğini de belirtiyor ([OpenAI: tarayıcılar](https://developers.openai.com/api/docs/bots)).
- **Perplexity**, PerplexityBot’un yapay zekâ modellerini eğitmek için kullanılmadığını, sitenin aramalarında görünmesi için bu bota izin verilmesini önerdiğini yazıyor. Perplexity-User ise kullanıcı isteğiyle çalıştığı için genellikle robots.txt kurallarını dikkate almıyor ([Perplexity: tarayıcılar](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)).
- **Anthropic**, Claude-SearchBot’u ya da Claude-User’ı engellemenin sitenin kullanıcı aramalarındaki görünürlüğünü azaltabileceğini, ClaudeBot’u engellemenin ise sitenin gelecekteki içeriğinin eğitim verisinden çıkarılması isteği olduğunu yazıyor ([Anthropic: tarayıcılar](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
- **Google**, Google-Extended ayarının sitenin Google Arama’ya dahil edilmesini etkilemediğini ve Arama’da sıralama sinyali olarak kullanılmadığını yazıyor ([Google: yaygın tarayıcılar](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=tr)).

## robots.txt’te hangi botlara izin vermeliyim?

Arama için çalışan botlara izin verin; eğitim botları için kararı kendiniz verin. robots.txt, sitenizin `/robots.txt` adresinde duran ve botlara hangi bölümleri tarayabileceklerini söyleyen dosyadır. Bir karar kuralı:

1. **Googlebot’u engellemeyin.** Google, yapay zekâ özelliklerini de Arama’nın parçası saydığı için sitenizin Arama’da nasıl tarandığını Googlebot kurallarıyla yönetmenizi söylüyor. Googlebot’u engellemek, normal arama sonuçlarındaki görünümünüzü de etkiler.
2. **Arama botlarına izin verin.** ChatGPT, Perplexity ya da Claude’un arama yanıtlarında görünmek istiyorsanız OAI-SearchBot, PerplexityBot ve Claude-SearchBot’u engellemeyin.
3. **Eğitim botları için bilinçli karar verin.** GPTBot, ClaudeBot ve Google-Extended için izin vermek ya da engellemek sizin tercihinizdir. Bu karar, şirketlerin belgelerine göre arama görünürlüğünü belirleyen ayarlardan ayrıdır.
4. **Sunucu ve güvenlik duvarını da kontrol edin.** Google, taramaya yalnızca robots.txt’te değil, CDN ve barındırma altyapısında da izin verilmesini öneriyor. Perplexity de güvenlik duvarı kullanan sitelerin botlarına ayrıca izin vermesi gerekebileceğini yazıyor. Barındırma firmanızın “bot koruması” ayarı, bilmeden bu botları engelliyor olabilir.
5. **Dosyayı kontrol edin.** Tarayıcıda `alanadiniz.com/robots.txt` adresini açın. Bütün siteyi kapatan bir `Disallow: /` satırı, istemediğiniz bir yerde kalmamış olsun.

Teknik tarafın tamamını tek başına kontrol etmek zorsa [teknik SEO](/teknik-seo/) sayfamızda neleri incelediğimizi anlattık.

## Kontrol listesi: yapay zekâ aramaları için sayfanızı nasıl hazırlarsınız?

Bu liste, Google’ın önerileriyle genel iyi uygulamaları bir arada veriyor. Maddelerin çoğu, sayfayı insanlar için de daha iyi yapar.

1. **Soruyu ilk paragrafta yanıtlayın.** “Yerel SEO nedir?” gibi bir başlığın altında, ilk iki cümlede kısa ve tam bir tanım olsun. Bu, hem okur hem özet çıkaran sistemler için işe yarar.
2. **Sorulara dönük başlıklar kullanın.** Müşterinin gerçekten sorduğu sorular başlık olarak yazıldığında sayfa kendi kendini açıklar. Google da metni paragraflara ve bölümlere ayırmanızı, başlıklarla düzenlemenizi öneriyor.
3. **Kendi bilginizi yazın.** Google’ın rehberi, herkesin bildiği bilgiyi tekrarlayan içerik yerine, deneyime dayanan ve başka yerde bulunmayan içeriği öne çıkarıyor. Denizli’de kendi işinizde gördüğünüz durumlar, sık yapılan hatalar ve müşterinin gerçek soruları bu türden bilgidir.
4. **Bilgiyi her yerde tutarlı yazın.** İşletme adınız, adresiniz, telefonunuz, hizmetleriniz ve hizmet bölgeniz sitede, Google İşletme Profili’nde ve diğer kayıtlarda aynı olmalı. Tutarsız bilgi, hem insanı hem sistemi şüpheye düşürür.
5. **Kimin yazdığını ve ne zaman güncellendiğini gösterin.** Google, okurun beklediği yerlerde yazar bilgisini açıkça vermenizi öneriyor ([Google: yararlı, güvenilir, insan odaklı içerik](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)). Güncel olmayan bilgi, yanlış bilgidir.
6. **Rakam verirseniz kaynağını gösterin.** Kaynağını gösteremediğiniz bir rakamı yazmayın. Sayfanızdan alıntı yapan her sistem, yanlış bir rakamı da aynı güvenle aktarabilir.
7. **Önemli bilgiyi metin olarak yayınlayın.** Google, önemli içeriğin metin hâlinde bulunmasını öneriyor. Fiyat çerçevesini, çalışma saatlerini ya da hizmet bölgesini yalnızca bir görselin içine yazmayın. Metnin sayfanın HTML’inde gelmesi, JavaScript çalıştırmayan araçların da sayfayı okumasını kolaylaştırır.
8. **Sayfayı iç bağlantılarla bulunur kılın.** Google, içeriğin sitenizdeki iç bağlantılarla kolayca bulunabilmesini öneriyor. Önemli bir sayfa, menüden ya da ilgili sayfalardan bağlantı almalıdır.
9. **Yapılandırılmış veri, görünen metinle aynı olsun.** Google, yapay zekâ özellikleri için özel bir schema.org işaretlemesi gerekmediğini, ama kullandığınız yapılandırılmış verinin sayfadaki görünen metinle uyuşması gerektiğini yazıyor.
10. **İşletme Profili’ni güncel tutun.** Google’ın rehberine göre yapay zekâ yanıtları, uygun durumlarda yerel işletmelerle ilgili bilgileri de içerebilir ve İşletme Profili bu yanıtlarda görünmenize yardımcı olabilir ([profil rehberimiz](/blog/google-isletme-profili-nasil-doldurulur/)).

Hizmet sayfalarınızı bu ilkelere göre baştan yazmak istiyorsanız [hizmet sayfası nasıl yazılır?](/blog/hizmet-sayfasi-nasil-yazilir/) yazımızda adım adım bir taslak var.

## Ne işe yaramaz?

Google’ın optimizasyon rehberi, internette dolaşan bazı “yapay zekâ taktiklerini” Google Arama için gereksiz sayıyor:

- **`llms.txt` dosyası.** Google Arama bu dosyayı kullanmıyor; Google, dosyanın Arama’daki görünürlüğe ne zarar ne yarar sağladığını açıkça yazıyor. Bu dosyayı kullanan başka sistemler için hazırlamak sizin tercihinizdir, ama bunu bir ana kaldıraç saymayın.
- **İçeriği küçük parçalara bölmek.** Google’ın rehberi, içeriği yapay zekâ anlasın diye küçük parçalara bölmenin gerekmediğini ve ideal bir sayfa uzunluğu olmadığını söylüyor.
- **Her cümleyi “yapay zekâ için” yeniden yazmak.** Google’ın rehberine göre sistemler eş anlamlıları ve genel anlamı anlıyor; her arama biçimini metne tek tek eklemeniz gerekmiyor.
- **Her soru biçimine ayrı sayfa açmak.** Google, aramaların her olası biçimi için ayrı içerik üretmenin, bunu sıralamayı ya da yapay zekâ yanıtlarını etkilemek için yaptığınızda “ölçekli içerik kötüye kullanımı” spam politikasını ihlal ettiğini yazıyor.
- **Yapay “anılma” kampanyaları.** Google, sahte yollarla web’de adınızın geçmesini sağlamanın sanıldığı kadar faydalı olmadığını belirtiyor. Gerçek itibar, gerçek iş ve gerçek müşteriyle gelir.
- **İç verilere eriştiğini söyleyen araçlar.** Google, hiçbir üçüncü taraf aracın kendi iç sıralama ya da yapay zekâ sistemlerine erişimi olmadığını yazıyor.

## Yapay zekâ özetlerinde görünüp görünmediğimi nasıl ölçerim?

Google tarafı için Search Console’u kullanın. Google, AI Overviews ve AI Mode’da görünen sitelerin Search Console performans raporunda “Web” arama türü içinde sayıldığını yazıyor. Google’ın optimizasyon rehberi ayrıca Search Console’daki üretken yapay zekâ performans raporunu öneriyor. Search Console’u yeni kurduysanız [Search Console’da ilk kontrol](/blog/search-console-ilk-kontrol/) yazımızdan başlayabilirsiniz.

Sohbet araçları için bu yazıda doğruladığımız resmî bir ölçüm raporu yok. Pratikte şunları yapabilirsiniz:

1. Sunucu kayıtlarınızda yukarıdaki tablodaki bot adlarını arayın. Barındırma firmanız bu kayıtları size verebilir.
2. Analiz aracınızda bu araçlardan gelen ziyaretleri ayrı izleyin.
3. Yeni müşteriye sizi nereden bulduğunu sorun. Bizim gözlemimiz, bu basit sorunun çoğu zaman en net cevabı verdiği yönünde.

## İçeriğimin yapay zekâ özetlerinde kullanılmasını sınırlayabilir miyim?

Evet, ama Google’da bunun bedeli normal arama görünümünü de etkilemesidir. Google, sayfalarınızdan Arama’da gösterilen bilgiyi sınırlamak için `nosnippet`, `data-nosnippet`, `max-snippet` ya da `noindex` kullanmanızı söylüyor. Bu ayarlar yalnızca yapay zekâ özetlerini değil, klasik sonuçlardaki görünümünüzü de etkiler. Gemini’nin eğitimi ve Gemini uygulamalarındaki dayanaklandırma içinse Google-Extended ayarı var; bu ayar Google Arama’yı etkilemiyor.

Yerel bir işletme için çoğu zaman doğru karar, görünmek ve bilgiyi doğru tutmaktır. Kısıtlamayı ancak somut bir nedeniniz varsa düşünün.

## Yerel işletme için somut bir sıra

1. Profilinizi ve sitenizdeki işletme bilgilerini eşitleyin.
2. Her hizmetiniz için tek, kapsamlı bir sayfa yazın.
3. Sık sorulan soruları sayfalara ekleyin; yanıtlar kısa ve dürüst olsun.
4. Sayfaların altına yazar ve güncelleme tarihi ekleyin.
5. robots.txt dosyanızı ve barındırma firmanızın bot ayarlarını kontrol edin.
6. Search Console’dan hangi aramalarda göründüğünüzü izleyin.
7. Bilgi değiştiğinde (adres, telefon, saat, fiyat çerçevesi) önce siteyi ve profili, aynı gün güncelleyin.

Yerel aramalardaki görünürlüğünüzü bir bütün olarak ele almak isterseniz [yerel SEO](/yerel-seo/) sayfamıza bakabilirsiniz.

## Sık sorulan sorular

### llms.txt dosyası gerekli mi?

Google Arama için gerekli değil. Google, bu dosyayı kullanmadığını ve dosyanın Arama’da ne zarar ne yarar sağladığını yazıyor. Başka sistemler için hazırlamak sizin tercihinizdir.

### AEO ya da GEO ayrı bir hizmet mi?

Google’a göre Google Arama açısından bunlar SEO’dur. Bu adla sunulan bir hizmeti, Google’ın resmî rehberindeki önerilerle karşılaştırarak değerlendirin.

### Yapay zekâ özetinde çıkmayı garanti eden biri olabilir mi?

Hayır. Google, koşulları karşılayan bir sayfanın bile gösterileceğini garanti etmediğini yazıyor. Görünme garantisi veren tekliflere temkinli yaklaşın.

### GPTBot’u engellersem ChatGPT’de hiç görünmez miyim?

OpenAI’ın belgesine göre GPTBot model eğitimi, OAI-SearchBot ise ChatGPT’nin arama özellikleri içindir ve iki ayar birbirinden bağımsızdır. ChatGPT aramasında görünmek istiyorsanız OAI-SearchBot’u engellemeyin.

## Kaynaklar

- [Google Search Central: yapay zekâ optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=tr)
- [Google Search Central: yapay zekâ özellikleri ve web siteniz](https://developers.google.com/search/docs/appearance/ai-features?hl=tr)
- [Google Search Central: yararlı, güvenilir, insan odaklı içerik oluşturma](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=tr)
- [Google tarama altyapısı: yaygın tarayıcılar (Google-Extended)](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=tr)
- [OpenAI: OpenAI tarayıcılarına genel bakış](https://developers.openai.com/api/docs/bots)
- [Perplexity: Perplexity tarayıcıları](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Anthropic: Anthropic web’i tarıyor mu, site sahipleri tarayıcıyı nasıl engeller?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)

Bu yazı, Google’ın ve yapay zekâ şirketlerinin Kasım 2026’daki belgelerine göre hazırlandı. Bot adları ve kurallar değişebilir; güncel hâli için kaynaklardaki sayfalara bakın.

Ana sitemizde [yapay zekânın SEO’yu nasıl değiştirdiğini](https://www.ventiajans.com/blog/yapay-zeka-seo/) anlatan bir yazı da var. Hizmet ve blog sayfalarınızı birlikte düzenlemek için [İçerik ve blog SEO](/icerik-seo/) sayfasına bakın.
