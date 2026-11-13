---
title: "Sponsorluk Bağlantıları: sponsored Nasıl İşaretlenir?"
description: "Sponsorluk ve reklam bağlantıları nasıl işaretlenir? rel=sponsored, ugc ve nofollow farkı; ne zaman hangisi kullanılır, nasıl eklenir, sık yapılan hatalar."
date: 2026-11-12
service: backlink-hizmeti
imageAlt: "Bağlantı etiketi: rel sponsored, ugc ve nofollow karşılaştırması"
---

Reklam ya da ücretli yerleşim olan bağlantılar `rel="sponsored"` ile, kullanıcı içeriğindeki (yorum, forum) bağlantılar `rel="ugc"` ile işaretlenir; bir sayfayla ilişkilendirilmek istemediğiniz bağlantılar için `rel="nofollow"` kullanılır. Google’ın spam politikasına göre reklam ve sponsorluk bağlantıları `nofollow` veya `sponsored` ile nitelendiği sürece politikaya aykırı değildir. Nitelenmemiş ücretli bağlantı ise bağlantı spam’i sayılabilir.

Sponsorlu yazı, reklam alanı ya da ürün karşılığı yazı yayımlayan bir site de, bu tür bir yayında yer alan işletme de bağlantıyı doğru nitelemelidir. Genel çerçeve için [backlink satın almanın riskleri](/blog/backlink-satin-almak-riskleri/) ve [misafir yazı](/blog/misafir-yazi-guest-post-riskli-mi/) yazılarına bakabilirsiniz.

## Üç özellik, üç anlam

Google’ın giden bağlantı rehberi şöyle ayırır ([giden bağlantıları uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)):

| Özellik | Ne zaman? |
| --- | --- |
| `rel="sponsored"` | Reklam ya da ücretli yerleşim olan bağlantılar |
| `rel="ugc"` | Yorum ve forum gönderileri gibi kullanıcı içeriği bağlantıları |
| `rel="nofollow"` | Siteyi bağlantılı sayfayla ilişkilendirmek istemediğinizde |

Rehbere göre bu özelliklerle işaretlenen bağlantılar genellikle izlenmez.

## Nasıl eklenir?

```html
<a href="https://ornek.com/" rel="sponsored">Marka adı</a>
```

Çoğu sitede (WordPress dahil) bağlantı ekleme penceresinde ya da kod görünümünde bu özelliği ekleyebilirsiniz. Ücretli yayın alırsanız bağlantının nasıl işaretleneceğini yazılı olarak kararlaştırın.

## Ne zaman hangisi?

- **Reklam ya da sponsorlu yazı:** `sponsored`
- **Ürün gönderip yazı yazdırma:** `sponsored` (karşılık var)
- **Blog yorumundaki bağlantılar:** `ugc`
- **Güvenmediğiniz kaynağa bağlantı:** `nofollow`
- **Editoryal, kendi kararınızla verilen bağlantı:** Nitelemeye gerek yok

## İşaretlenmemiş ücretli bağlantı

Spam politikalarına göre sıralama için para karşılığı ya da ürün/hizmet karşılığı sağlanan bağlantılar bağlantı spam’i örnekleridir; bu bağlantılar nitelendiğinde ise politikaya aykırı sayılmaz ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)). Yani sorun reklam vermek değil, reklamı sıralama aracı gibi nitelemeden yayımlamaktır.

## Sık yapılan hatalar

- **Ücretli bağlantıyı nitelememek:** `sponsored` ekleyin
- **Nitelenmesi gereken bağlantıyı açık bırakmak:** Doğru `rel` değerini ekleyin
- **Tüm dış bağlantıları nofollow yapmak:** Yalnızca gereken bağlantılar
- **Yorum bağlantılarını açık bırakmak:** `ugc` ya da moderasyon
- **Bağlantı karşılığı ürün alıp bildirmemek:** Nitelendirin
- **Sözleşmede bağlantı niteleme hakkını kısıtlamak:** Niteleme seçeneğini koruyun

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir otel, yerel bir gezi rehberi sitesinde sponsorlu içerik yayımlatıyor ve sözleşmede bağlantının `sponsored` olarak işaretleneceğini yazıyor. Aynı otelin bloguna gelen yorumlardaki bağlantılar `ugc` ile işaretleniyor. Kendi sayfalarına verdiği iç bağlantılarda herhangi bir niteleme yok.

## Yayıncıyla yazılı anlaşma: bağlantı nasıl işaretlenecek?

Sponsorlu içerik ya da reklam alanı satın aldığınızda bağlantının nasıl işaretleneceğini baştan yazıya geçirin. Sonradan “bunu konuşmamıştık” demek zordur. Yayıncıya göndereceğiniz kısa bir e-posta ya da sözleşme maddesi şu unsurları içermelidir:

- **İçeriğin niteliği:** “Bu yayın ücretli/sponsorlu bir yerleşimdir.”
- **Bağlantı özelliği:** “Siteme verilen bağlantı `rel="sponsored"` ile işaretlenecektir.”
- **Bağlantı metni:** “Bağlantı metni marka adı ya da doğal bir ifade olacaktır.”
- **Yayın tarihi ve süresi:** “Yayın tarihi ve yayında kalma süresi şudur.”
- **İçerik onayı:** “Metin yayımlanmadan önce onayıma sunulacaktır.”
- **Şeffaflık:** “Sayfada sponsorlu içerik olduğu okuyucuya belirtilecektir.”

Google’ın spam politikası, üçüncü tarafın giden bağlantıyı niteleme seçeneğine izin vermeyip hizmet şartları ya da sözleşme kapsamında bağlantı zorunlu kılmayı bağlantı spam’i örnekleri arasında sayar ([spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)). Yani sözleşmede “bağlantıyı niteleme hakkı” yayıncıda bırakılmalı, bu hak kısıtlanmamalıdır.

## Sitenizdeki giden bağlantıları kontrol etme

Çoğu işletme, kendi sitesinde hangi dış bağlantıların olduğunu bilmez. Basit bir denetim şöyle yapılır:

1. **Sitenizdeki dış bağlantıları listeleyin.** Bir tarama aracı ya da yazılımcınızın hazırlayacağı bir liste kullanın.
2. **Her bağlantıyı sınıflandırın.** Reklam mı, ortaklık mı, kaynak mı, kullanıcı yorumu mu?
3. **Ücretli ya da karşılığı olan bağlantıları işaretleyin.** Bunlara `sponsored` ekleyin.
4. **Kullanıcı içeriği bağlantılarına `ugc` ekleyin.** Blog yorumları, forum gönderileri gibi.
5. **Kaynak olarak verdiğiniz bağlantılar için kural koymayın.** Kendi kararınızla verdiğiniz editoryal bağlantılar çoğu zaman nitelemeyi gerektirmez.
6. **Kırık ve eski bağlantıları temizleyin.** Artık çalışmayan kaynaklara bağlantı vermeyin.
7. **Listeyi yılda bir güncelleyin.** Eski ortaklıklar unutulur, bağlantılar kalır.

## Sistemlere göre nasıl eklenir?

- **Kod görünümü olan sayfa:** `<a href="..." rel="sponsored">metin</a>` biçiminde elle yazın
- **WordPress blok düzenleyici:** Bağlantı kutusunda “Gelişmiş” ya da “Sponsorlu olarak işaretle” benzeri seçenekleri arayın; yoksa “HTML olarak düzenle” ile ekleyin
- **Eklentili sistemler:** Bağlantı yönetimi eklentileri `rel` değerlerini toplu atayabilir; kullanmadan önce güncel ve güvenilir olduğunu kontrol edin
- **Elle hazırlanmış (özel kodlu) site:** Şablonda reklam bağlantılarına otomatik `rel` ekleyen bir kural yazdırın
- **Yorum sistemi:** Çoğu yorum sistemi bağlantılara otomatik `ugc` ya da `nofollow` ekleyebilir; ayarını kontrol edin

Sistemlerin menü adları değişebilir; bu nedenle ekleme sonrası sayfanın kaynak kodunda bağlantının gerçekten `rel="sponsored"` taşıdığını kontrol edin.

## Yaygın yanlış anlamalar

- **“Reklam bağlantısı vermek yasak.”:** Google’ın politikasına göre nitelendiği sürece aykırı değil.
- **“nofollow ile sponsored aynı şey.”:** İkisi farklı anlam taşır: `sponsored` ücretli yerleşimi, `nofollow` ilişkilendirmek istememeyi anlatır.
- **“İşaretli bağlantı değersizdir.”:** Google bu bağlantıların genellikle izlenmediğini söyler; ama okuyucu tıklayıp müşteri olabilir.
- **“Bağlantıyı işaretlemezsem kimse anlamaz.”:** Ücretli bağlantıyı gizlemek, spam politikası açısından sorun yaratabilir; şeffaf olun.
- **“Her dış bağlantıyı nofollow yapmalıyım.”:** Kendi kararınızla verdiğiniz kaynak bağlantıları için genel bir zorunluluk yok.

## Okuyucuya şeffaflık

`rel` özelliği arama sistemlerine konuşur; okuyucuya da dürüst olmak gerekir. Sponsorlu bir yazının başına ya da sonuna “Bu içerik [marka] iş birliğiyle hazırlanmıştır” gibi kısa bir not ekleyin. Reklam ve editoryal içeriği birbirine karıştırmayın. Bu, hem güveni korur hem de ileride bir yayıncıyla ilişkinizin netliğini sağlar.

## Yayıncıya gönderilebilecek kısa e-posta örneği

“Merhaba, [tarih] tarihli sponsorlu yayınımız için bir not: Sitemize verilen bağlantının `rel="sponsored"` özelliğiyle işaretlenmesini rica ederiz. Bağlantı metni olarak marka adımızı kullanabilirsiniz. Yayın öncesinde metni onayımıza sunarsanız seviniriz. Teşekkürler.”

Bu kısa not, sonradan yaşanacak anlaşmazlıkları azaltır. Yayıncı niteleme yapmayı reddederse ücretli yerleşimi gözden geçirmeniz gerekir.

## Kontrol listesi

Şunları tek tek kontrol edin:

- Ücretli ya da karşılığı olan her bağlantı `sponsored` ile işaretli mi?
- Yorum ve forum bağlantıları `ugc` ile işaretli mi?
- Sözleşmede niteleme hakkı kısıtlanmış mı? (Kısıtlanmamalı)
- Sponsorlu içerik okuyucuya belirtilmiş mi?
- Sitedeki giden bağlantılar yılda bir denetleniyor mu?
- Eklenen `rel` özelliği sayfa kaynağında doğrulandı mı?

## Üç farklı işletmede uygulama

Aynı kural, farklı işletmelerde farklı biçimlerde karşınıza çıkar. Üç hayalî senaryo:

### Senaryo 1: Otel ve gezi rehberi

Örnek (hayalî bir işletme için): Pamukkale’de bir termal otel, bir gezi rehberi sitesinde “Denizli’de kış tatili” başlıklı sponsorlu bir yazı yayımlatıyor. Yazı otelin hizmetlerini anlatıyor ve otelin sitesine bağlantı veriyor. Otel, yayıncıdan bağlantının `sponsored` olarak işaretlenmesini ve yazının başında “sponsorlu içerik” notunun yer almasını istiyor. Yayın sonrası otel sayfa kaynağını açıp bağlantıyı kontrol ediyor. Amaç sıralama değil, kış döneminde gezginlerin dikkatini çekmek.

### Senaryo 2: Klinik ve sağlık içerikli blog

Örnek (hayalî bir işletme için): Merkezefendi’de bir fizyoterapi kliniği, sağlık içerikleri yayımlayan bir blogla çalışıyor. Blog, klinikten gelen bilgiyle bir yazı hazırlıyor ve klinik için ücret alıyor. Klinik; bağlantının `sponsored` ile işaretlenmesini, yazıdaki tıbbi bilgilerin klinik uzmanınca kontrol edilmesini ve tedavi sonucu vaadi yazılmamasını şart koşuyor. Burada işaretleme kadar içeriğin doğruluğu da kritik; reklam niteliği hiçbir zaman “tarafsız tıbbi tavsiye” gibi sunulmamalı.

### Senaryo 3: Esnaf ve yerel haber sitesi

Örnek (hayalî bir işletme için): Pamukkale’de bir kuruyemişçi, yerel bir haber sitesinde yeni şube açılışını haber olarak yayımlatmak istiyor. Açılış gerçek bir haber değeri taşıyorsa ve editör kendi kararıyla yayımlıyorsa bağlantı editoryal olabilir. Haber sitesi bunun için ücret alıyorsa yayın reklam niteliğindedir ve bağlantının `sponsored` olması gerekir. İşletme, bu ayrımı yayıncıyla açıkça konuşuyor.

## Sponsorlu yayın satın almadan önce sorulacak sorular

1. **Sitenin gerçek okuyucusu var mı?** Okuyucusu olmayan bir sitede reklam vermenin değeri yoktur.
2. **Konu bana uygun mu?** İlgisiz bir yayında markanızın anılması işe yaramaz.
3. **Bağlantı nasıl işaretlenecek?** `sponsored` mı, `nofollow` mu? Yazılı onay isteyin.
4. **İçerik reklam olarak belirtilecek mi?** Okuyucuya şeffaflık.
5. **Yayın ne kadar süre yayında kalacak?** Süre sınırı var mı?
6. **Fiyat neyi kapsıyor?** Yazım, görsel, sosyal medya paylaşımı, süre.
7. **Raporlama var mı?** Yayın adresi, tarih, görüntüleme bilgisi.
8. **Aynı yazı başka sitelerde de yayımlanacak mı?** Kopya içerik sorunu yaratabilir.

## Kayıt ve izleme tablosu

Ücretli yerleşimleri bir tabloda tutun; böylece yıllar sonra hangi bağlantının neden orada olduğunu hatırlarsınız.

- **Yayın tarihi:** Kasım 2026
- **Yayıncı:** Yayının adı ve adresi
- **Sayfa adresi:** Bağlantının bulunduğu sayfa
- **Bağlantı verilen sayfamız:** Hangi sayfamıza bağlantı veriliyor?
- **Ücret / karşılık:** Tutar ya da ürün
- **`rel` değeri:** `sponsored`
- **Doğrulama tarihi:** Kaynak kodunda kontrol ettiğimiz tarih
- **Notlar:** Yayın süresi, anlaşma şartları

## İşaretlemeyi unutursanız ne yapmalı?

Geçmişte nitelenmemiş ücretli bağlantılar bulursanız panik yapmayın. Pratik adımlar:

1. **Bağlantıyı bulun.** Kayıt tablonuz ya da yayıncı listeniz yardımcı olur.
2. **Yayıncıya yazın.** Bağlantıya `sponsored` eklenmesini nazikçe isteyin.
3. **Yanıt gelmezse seçeneklerinizi değerlendirin.** Bağlantının kaldırılmasını ya da yayının sonlandırılmasını isteyebilirsiniz.
4. **Reddetme aracı çoğu zaman gerekmez.** Google, bağlantıları reddetme aracının yalnızca önemli miktarda spam ya da düşük kaliteli bağlantı varsa ve manuel işleme neden olduysa ya da olma ihtimali varsa gerektiğini söyler ([bağlantıları reddetme](https://support.google.com/webmasters/answer/2648487?hl=tr)).
5. **Bundan sonrası için süreç kurun.** Her ücretli yerleşim yazılı şartla başlasın.

## Kendi sitenizdeki reklam ve ortaklık alanları

Başka sitelerdeki bağlantılar kadar kendi sitenizdeki reklam alanları da önemlidir. Sitenizde reklam yayımlıyorsanız (ör. banner), reklam bağlantılarını `sponsored` ile işaretlemek sizin sorumluluğunuzdadır. Aynı şekilde “Ortaklarımız” sayfasında ücret karşılığı yer alan firmalar varsa onların bağlantıları da nitelenmelidir. Gerçek iş ortaklarını karşılıksız anmak ise ayrı bir konudur; bkz. [iş ortaklığı sayfaları](/blog/is-ortakligi-sayfalarindan-baglanti-almak/).

## Sık yapılan ek hatalar

- **Yalnızca ana sayfadaki reklamı işaretleyip iç sayfalarda unutmak:** Tüm şablonlarda kontrol edin
- **Reklam bağlantısı için `rel` yerine yalnızca görsel “reklam” etiketi koymak:** Hem okuyucuya hem koda yansıtın
- **Kaynak kodda doğrulamadan bırakmak:** Yayın sonrası kontrol edin
- **Eski sponsorlu yazıları unutmak:** Kayıt tablosu tutun
- **Yayıncının niteleme hakkını sözleşmeyle engellemek:** Yazılı olarak hakkı tanıyın

## Denizli SEO bu konuda nasıl yardımcı olur?

[Backlink hizmetimizde](/backlink-hizmeti/):

- ücretli yerleşimleri baştan doğru nitelenecek şekilde planlarız,
- sitenizdeki giden bağlantıları ve yorum bağlantılarını denetleriz,
- satın alınmış bağlantı ve hacklink önermeyiz,
- yapılan işi yazılı raporlarız; sıralama garantisi vermeyiz.

Giden bağlantılarınızı denetlememizi isterseniz [bize yazın](/iletisim/).

## Sık sorulan sorular

### sponsored işaretli bağlantı değersiz mi?

Google bu bağlantıların genellikle izlenmediğini söyler; ama tanınırlık ve doğrudan ziyaretçi açısından değer taşıyabilir.

### Her ücretli yayın sponsored mi olmalı?

Reklam ya da ücretli yerleşim varsa evet.

### Kendi sitemde nasıl eklerim?

Bağlantı düzenleme ekranında ya da kod görünümünde `rel` özelliğini ekleyin.

### Ürün gönderip yazı yazdırmak sponsored mu olmalı?

Ürün ya da hizmet karşılığı yazılan ve bağlantı içeren yazılarda bağlantının nitelenmesi uygundur; Google’ın spam politikası, ürün karşılığı bağlantı almayı örnekler arasında sayar.

### Satış ortağı (affiliate) bağlantıları nasıl işaretlenir?

Bu konuda kesin bir iddia yazmıyoruz; satış ortaklığı bağlantıları için Google’ın güncel dokümanına bakın. Genel olarak ücretli ilişkiyi belirten bağlantıların `sponsored` ile işaretlenmesi uygundur.

### Kendi sitemde reklam vermeden bağlantıyı niteleme gerekir mi?

Reklam, ücretli yerleşim ya da karşılık yoksa ve bağlantıyı kendi editoryal kararınızla veriyorsanız genellikle gerekmez.

## Kaynaklar

- [Google Search Central: giden bağlantıları SEO için uygun hale getirme](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Google Search Central: Google Web Arama için spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies?hl=tr)
