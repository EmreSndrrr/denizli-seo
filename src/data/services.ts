// Copy for the five service pages and the services overview. Plain facts and method only: no invented results or promises.

export interface Step { line: string; text: string }
export interface Qa { q: string; a: string }
export type ServiceIcon = 'pin' | 'gauge' | 'doc' | 'link' | 'layout';
export interface Service {
  slug: string;
  icon: ServiceIcon;
  short: string;          // short label for cards and the service map
  fit: string;            // who the service suits (services overview)
  measure: string;        // how the result is seen (services overview)
  name: string;           // used in navigation, breadcrumbs and the home paragraph
  title: string;          // <title>
  description: string;    // meta description
  h1: [string, string];   // two authored lines
  queries: string[];      // searches this service answers, shown on the page
  lead: string;
  goal: string;           // the business goal the service works toward
  statementHead: string;
  statement: string;
  items: { name: string; text: string }[];
  steps: Step[];
  faq: Qa[];
}

export const SERVICES: Service[] = [
  {
    slug: 'yerel-seo',
    icon: 'pin',
    short: 'Yerel SEO',
    fit: 'Müşterisi dükkâna gelen ya da Denizli içinde müşteriye giden, haritada ve “yakınımda” aramalarında görünmek isteyen işletmeler için.',
    measure: 'Belirlenen aramalarda haritada kaçıncı sırada olduğunuz, profilinizin aldığı arama, yol tarifi ve telefon sayısı.',
    name: 'Yerel SEO ve Google Haritalar',
    title: 'Yerel SEO ve Google Haritalar, Denizli | Denizli SEO',
    description:
      "Google Haritalar’da ve “yakınımdaki” aramalarında Denizli’deki müşterinin sizi bulması için İşletme Profili, yorum ve konum çalışması.",
    h1: ['Google Haritalar’da', 'öne çıkın.'],
    queries: ['denizli kuyumcu', 'yakınımdaki eczane', 'merkezefendi diş hekimi', 'pamukkale pansiyon'],
    lead:
      "Yerel SEO; Google Haritalar’da ve “yakınımdaki” aramalarında, Denizli’de sizi arayan müşterinin karşısına çıkmanız için yapılan çalışmadır.",
    goal: 'Haritadan gelen arama, yol tarifi ve ziyaret taleplerini artırmak.',
    statementHead: 'Haritadaki ilk üç',
    statement:
      'Google, konum içeren bir aramada haritayı sonuçların en üstüne koyar ve yanına birkaç işletme dizer. Bu listeye girmek için profiliniz, yorumlarınız ve adres bilgileriniz birbirini doğrulamalı.',
    items: [
      { name: 'İşletme Profili kurulumu', text: 'Profil yoksa açar, varsa sahipliğini sizde toplar ve doğrulamayı tamamlarız.' },
      { name: 'Kategori ve hizmetler', text: 'Ana kategori, haritadaki sırayı etkileyen önemli alanlardan biridir. Doğru ana kategoriyi ve ek kategorileri seçeriz.' },
      { name: 'Fotoğraf ve gönderiler', text: 'İşletmenin içi, dışı ve işi. Düzenli eklenen fotoğraf ve gönderilerle profil güncel kalır.' },
      { name: 'Yorum düzeni', text: 'Memnun müşterinin yorum bırakmasını kolaylaştıran kısa bağlantı ve QR kod hazırlar, her yoruma yanıt verilmesini sağlarız.' },
      { name: 'Ad, adres, telefon tutarlılığı', text: 'Sitenizde, profilde ve rehber sitelerinde işletme bilgilerinin harfi harfine aynı olmasını sağlarız.' },
      { name: 'İlçe ve şube sayfaları', text: 'Birden fazla şubeniz ya da hizmet verdiğiniz ilçeler varsa, her biri için gerçek bilgi taşıyan ayrı sayfa hazırlarız.' },
      { name: 'Harita sırası takibi', text: 'Belirlediğimiz aramalarda haritada kaçıncı sırada olduğunuzu her ay ölçer ve raporlarız.' },
    ],
    steps: [
      { line: 'Önce profili denetleriz.', text: 'Eksik alanları, yanlış kategoriyi ve tutarsız bilgileri çıkarırız; teslim: düzeltme listesi.' },
      { line: 'Eksikleri tamamlarız.', text: 'Profil, site ve rehberler aynı bilgiyi söyler hale gelir.' },
      { line: 'Yorum düzenini kurarız.', text: 'Gerçek müşteriden yorum istemek işin rutini olur.' },
      { line: 'Her ay sırayı ölçeriz.', text: 'Belirlediğimiz aramalarda kaçıncı olduğunuz, arama ve yol tarifi sayısıyla birlikte aylık raporda yer alır.' },
    ],
    faq: [
      { q: 'Haritadaki sırayı ne belirler?', a: 'Google üç şeye baktığını açıklıyor: aramayla ilgililik, arayan kişiye uzaklık ve işletmenin bilinirliği. Uzaklığı değiştiremeyiz; diğer ikisi üzerinde çalışırız.' },
      { q: 'İşletme Profili ücretli mi?', a: 'Hayır, profil ücretsizdir. Ücret; profili kurmak, güncel tutmak ve sırayı takip etmek için harcanan emeğe karşılıktır.' },
      { q: 'Yorum satın alıyor musunuz?', a: 'Hayır. Sahte yorum Google kurallarına aykırıdır ve profilin kısıtlanmasına yol açabilir. Gerçek müşterinin yorum bırakmasını kolaylaştırırız.' },
      { q: 'Dükkânım yoksa haritada çıkabilir miyim?', a: 'Müşterinin yanına giden işletmeler (tesisatçı, çilingir gibi) adresini gizleyip hizmet bölgesi tanımlayabilir. Bu ayarı kurulumda birlikte yaparız.' },
    ],
  },
  {
    slug: 'teknik-seo',
    icon: 'gauge',
    short: 'Teknik SEO ve hız',
    fit: 'Sitesi Google’da hiç ya da eksik çıkan, telefonda geç açılan veya yeni bir siteye geçmeden önce altyapısını denetletmek isteyen işletmeler için.',
    measure: 'Search Console’da dizine giren sayfa sayısı, tarama hataları ve Core Web Vitals raporundaki “iyi” sayfa oranı.',
    name: 'Teknik SEO ve site hızı',
    title: 'Teknik SEO ve Site Hızı Optimizasyonu | Denizli SEO',
    description:
      'Sitenizin Google tarafından sorunsuz taranması, doğru sayfaların dizine girmesi ve telefonda hızlı açılması için teknik SEO denetimi ve düzeltme.',
    h1: ['Google sitenizi', 'sorunsuz okusun.'],
    queries: ['site neden açılmıyor', 'google sitemi göstermiyor', 'sayfa dizine eklenmedi', 'mobil uyumlu site'],
    lead:
      'Teknik SEO; sitenizin Google tarafından eksiksiz taranması, doğru sayfaların dizine girmesi ve telefonda hızlı açılması için yapılan altyapı çalışmasıdır.',
    goal: 'Teknik engelleri kaldırarak doğru sayfaların Google’da görünmesini ve ziyaretçinin siteyi telefonda hızlı kullanmasını sağlamak.',
    statementHead: 'Google önce okur',
    statement:
      'Google bir sayfayı sıralamadan önce onu bulmalı, açabilmeli ve okuyabilmelidir. Bu üç adımdan birinde takılan sayfa, içeriği ne kadar iyi olursa olsun aramada görünmez.',
    items: [
      { name: 'Tarama ve dizin denetimi', text: "Search Console’da hangi sayfaların dizinde olduğunu, hangilerinin neden dışarıda kaldığını çıkarırız." },
      { name: 'Site hızı', text: "Görselleri sıkıştırır, gereksiz kodu ayıklar; LCP, INP ve CLS değerlerini Google’ın “iyi” sınırına çekmek için çalışırız." },
      { name: 'Mobil uyum', text: 'Google siteyi telefon sürümüyle değerlendirir. Menüyü, yazı boyunu ve dokunma alanlarını telefonda test ederiz.' },
      { name: 'Site haritası ve robots.txt', text: "Google’a hangi sayfaları taraması gerektiğini söyleyen dosyaları düzenleriz." },
      { name: 'Yönlendirme ve kırık bağlantı', text: 'Taşınan sayfalara 301 yönlendirmesi kurar, 404 veren bağlantıları düzeltiriz.' },
      { name: 'Kopya içerik', text: "Aynı içeriğin birden çok adreste görünmesini engeller, asıl sayfayı canonical etiketiyle bildiririz." },
      { name: 'Yapılandırılmış veri', text: "İşletme, hizmet, sık sorulan soru ve makale bilgilerini schema.org işaretlemesiyle Google’a okunur hale getiririz." },
    ],
    steps: [
      { line: 'Önce siteyi tararız.', text: 'Her sayfanın tarama, dizin, hız ve yönlendirme durumu bir tabloda toplanır.' },
      { line: 'Sorunları önceliklendiririz.', text: 'Her sorunun sayfaya etkisine ve düzeltme emeğine bakarız; teslim: öncelikli iyileştirme planı.' },
      { line: 'Düzeltmeleri uygularız.', text: 'Kodda, sunucuda ve panelde, erişimin izin verdiği her yerde; yapılamayanları ayrıca yazarız.' },
      { line: "Search Console’dan izleriz.", text: 'Düzelen sayfaların dizine girişini her ay takip ederiz.' },
    ],
    faq: [
      { q: 'Sitem WordPress, olur mu?', a: 'Evet. WordPress, Wix, Shopify, İdeasoft ya da özel yazılım fark etmez; yönetim paneline veya koda erişim yeterlidir. Bazı altyapılar bazı ayarlara izin vermez, bunu baştan söyleriz.' },
      { q: 'Hız puanım 100 olmalı mı?', a: "Hayır. PageSpeed puanı bir laboratuvar ölçümüdür. Asıl önemli olan gerçek ziyaretçilerin telefonda yaşadığı süredir; Search Console’daki Core Web Vitals raporunu esas alırız." },
      { q: 'Teknik SEO bir kerelik mi?', a: 'Büyük kısmı bir kerelik kurulumdur. Ancak siteye her yeni sayfa ve eklenti eklendiğinde yeni sorunlar çıkabilir; aylık takipte bunları yakalarız.' },
    ],
  },
  {
    slug: 'icerik-seo',
    icon: 'doc',
    short: 'İçerik SEO',
    fit: 'Müşterisi satın almadan önce Google’da soru soran, hizmet sayfası ve blog yazısıyla bu soruları yanıtlamak isteyen işletmeler için.',
    measure: 'Search Console’da yazıların ve hizmet sayfalarının kaç aramada, hangi sırada göründüğü ve kaç tıklama aldığı.',
    name: 'İçerik ve blog SEO',
    title: 'İçerik ve Blog SEO, Anahtar Kelime Araştırması | Denizli SEO',
    description:
      "Müşterinizin Google’a sorduğu soruları bulur, bunları yanıtlayan hizmet sayfaları ve blog yazıları hazırlarız. Anahtar kelime araştırması ve içerik planı.",
    h1: ['Müşterinizin sorusuna', 'içerikle yanıt verin.'],
    queries: ['kuyumcu fiyatları', 'diş beyazlatma ne kadar', 'kombi bakımı ne zaman yapılır', 'düğün salonu fiyatları denizli'],
    lead:
      "İçerik SEO’su; müşterinizin Google’a yazdığı soruları bulup bunları en iyi yanıtlayan sayfaları hazırlamaktır.",
    goal: 'Satın almaya yakın aramalardan teklif, randevu ya da rezervasyon talebi getirecek sayfalar oluşturmak.',
    statementHead: 'Her arama bir soru',
    statement:
      '“Denizli’de düğün salonu fiyatları”, “pamukkale yakınında pansiyon”, “kombi bakımı ne zaman yapılır”. Müşteriniz satın almadan önce soru sorar; yanıtı veren sayfa onu kazanır.',
    items: [
      { name: 'Anahtar kelime araştırması', text: "Sektörünüzde Denizli’de hangi aramaların yapıldığını ve hangisinin satışa yakın olduğunu çıkarırız." },
      { name: 'Rakip içerik analizi', text: 'İlk sıralardaki sayfaların neyi anlattığını, neyi eksik bıraktığını inceleriz.' },
      { name: 'İçerik planı', text: 'Hangi sayfanın hangi aramayı karşılayacağını aylık takvimle yazılı plana dökeriz.' },
      { name: 'Hizmet sayfaları', text: 'Her hizmetiniz için süreci ve sık sorulanları anlatan ayrı sayfa yazarız.' },
      { name: 'Blog yazıları', text: 'Müşterinin satın almadan önce sorduğu sorulara sizin bilginizle yanıt veren yazılar hazırlarız.' },
      { name: 'Eski içeriği güncelleme', text: 'Sırası düşen yazıları günceller, birbirini tekrar eden sayfaları birleştiririz.' },
      { name: 'İç bağlantılar', text: 'Yazılardan hizmet sayfalarına giden bağlantılarla ziyaretçiyi ve Google’ı doğru sayfaya yönlendiririz.' },
    ],
    steps: [
      { line: 'Önce soruları araştırırız.', text: 'Arama verisinden, rakip sayfalardan ve sizin müşteri deneyiminizden.' },
      { line: 'Planı çıkarırız.', text: 'Her soru için bir sayfa ve bir tarih; teslim: aylık içerik planı.' },
      { line: 'Hazırlar ve kontrol ederiz.', text: 'Metin araştırılır, yazılır, kaynakları ve sektör bilginiz açısından kontrol edilir; sizin onayınızla yayımlanır.' },
      { line: 'Her ay sonucu ölçeriz.', text: 'Hangi yazının hangi aramada göründüğü, ziyaret ve talep sayısı aylık raporda yer alır.' },
    ],
    faq: [
      { q: 'Yazıları yapay zekâ mı yazıyor?', a: "Araştırmada ve taslakta yapay zekâ araçlarından yararlanabiliriz. Her metin sizin sektör bilginizle kontrol edilir ve onayınızla yayına girer. Google içeriğin nasıl üretildiğine değil, okura faydasına bakar." },
      { q: 'Ayda kaç yazı gerekir?', a: 'Sabit bir sayı yok. Aranan konuda derinlemesine bir yazı, çok sayıda yüzeysel yazıdan daha iyi sonuç verir. Sayıyı rekabete göre belirleriz.' },
      { q: 'Yazıları kim yayına alıyor?', a: 'İsterseniz biz yayına alırız, isterseniz metni ve görsel önerilerini size teslim ederiz.' },
    ],
  },
  {
    slug: 'backlink-hizmeti',
    icon: 'link',
    short: 'Backlink ve otorite',
    fit: 'Sitesi teknik olarak sağlam ve içeriği hazır olduğu hâlde Google’da rakiplerinin gerisinde kalan, itibarını Denizli’de ve sektöründe artırmak isteyen işletmeler için.',
    measure: 'Search Console’un Bağlantılar raporunda yeni ve kaybolan bağlantılar, bağlantı veren kaynak sayısı ve bağlantı alan sayfaların aramadaki sırası.',
    name: 'Backlink ve otorite çalışması',
    title: 'Backlink Hizmeti ve Otorite Çalışması, Denizli | Denizli SEO',
    description:
      'Satın alınmış değil, hak edilmiş backlink: yerel kurum, iş ortağı ve içerik bağlantıları, mevcut bağlantı denetimi ve aylık rapor. Denizli işletmeleri için.',
    h1: ['Hak edilmiş bağlantılarla', 'güven kazanın.'],
    queries: ['backlink hizmeti', 'backlink nasıl alınır', 'denizli seo bağlantı çalışması', 'hacklink zararı'],
    lead:
      'Backlink, başka bir sitede yer alan ve sizin sitenize götüren bağlantıdır. İki yolla çalışırız: yerel kurum, iş ortağı ve içerik yoluyla kazanılan bağlantılar ve global platformlarda elle oluşturulan manuel backlink paketleri.',
    goal: 'Sektörünüzde ve Denizli’de güvenilir kaynaklardan gerçek bağlantılar kazanarak itibarınızı artırmak.',
    statementHead: 'Bağlantı bir tavsiyedir',
    statement:
      'Google, başka sitelerin size verdiği bağlantıyı bir tavsiye gibi okur; kaynağın niteliği ve konuyla ilgisi önemlidir. Kazanılan bağlantı çalışmasında sektörünüzdeki dernek, yerel haber ve iş ortaklarını önceleriz. Bağlantı profilini belirli bir hacimde güçlendirmek isteyenler için global platformlarda elle oluşturulan manuel paketler sunarız. Bot, hacklink ve ele geçirilmiş site kullanmayız.',
    items: [
      { name: 'Bağlantı profili denetimi', text: 'Search Console’un Bağlantılar raporunda sitenize kimlerin bağlandığını, hangi sayfalarınızın bağlantı aldığını ve şüpheli kaynakları çıkarırız.' },
      { name: 'Rakip bağlantı karşılaştırması', text: 'Aynı aramada üst sıradaki rakiplerinizin hangi kaynaklardan bağlantı aldığına bakar, sizinle de ilişkili olabilecek kaynakları listeleriz.' },
      { name: 'Yerel kurum ve haber bağlantıları', text: 'Üyesi olduğunuz oda, dernek ve meslek kuruluşlarının sitelerinde işletmenizin doğru ve güncel yer almasını; gerçek haberleriniz için yerel haber sitelerine metin hazırlanmasını sağlarız.' },
      { name: 'İş ortağı ve tedarikçi bağlantıları', text: 'Birlikte çalıştığınız marka ve tedarikçilerin sitelerinde, gerçek ilişkinize dayanan bir referans ya da iş ortağı bağlantısı için ilk görüşmeyi hazırlarız.' },
      { name: 'Bağlantı kazandıran içerik', text: 'Başka sitelerin kaynak göstermek isteyeceği rehber, karşılaştırma ve yerel bilgi içeriği hazırlarız; bağlantı bu içeriğe kendiliğinden gelir.' },
      { name: 'Zararlı bağlantı kontrolü', text: 'Ele geçirilmiş ya da spam sitelerden gelen bağlantıları tek tek inceler; yalnızca gerçekten gerekliyse Google’ın reddetme aracını kullanırız.' },
      { name: 'Aylık bağlantı raporu', text: 'Kazanılan ve kaybolan bağlantıları, bağlantı veren kaynağın adı ve bağlantı alan sayfayla birlikte her ay yazılı olarak sunarız.' },
    ],
    steps: [
      { line: 'Önce profili inceleriz.', text: 'Sitenize bugün kimler bağlanıyor, rakipleriniz hangi kaynaklardan bağlantı alıyor? Teslim: bağlantı profili özeti.' },
      { line: 'Kaynakları seçeriz.', text: 'Sektörünüzle ve Denizli ile gerçekten ilgili siteleri listeleriz; teslim: öncelik sıralı kaynak listesi.' },
      { line: 'Bağlantıları kurarız.', text: 'İçerik, haber ve iş birliğiyle kazanır; paket seçtiyseniz platformlarda elle oluştururuz.' },
      { line: 'Her ay raporlarız.', text: 'Kazanılan ve kaybolan bağlantı, kaynağın adıyla raporda yazar.' },
    ],
    faq: [
      { q: 'Manuel backlink paketi nedir, farkı ne?', a: 'Manuel backlink paketlerinde bağlantılar global platformlarda bot kullanılmadan, tek tek elle oluşturulur; katman sistemiyle desteklenir ve teslimde bağlantı listesiyle raporlanır. Kazanılan bağlantı çalışmasından farkı, belirli bir hacimde ve kısa sürede kurulmasıdır. Hacklink, ele geçirilmiş siteler ve bot ile toplu bağlantı kullanmayız; sıralama garantisi vermeyiz. Ayrıntılar manuel backlink paketleri sayfamızda.' },
      { q: 'Kaç backlink gerekir?', a: 'Sabit bir sayı yoktur. Sayıdan çok kaynağın niteliği ve konuyla ilgisi önemlidir. İlk incelemede aynı aramadaki rakiplerinizin durumuna bakar, hedefi ona göre yazarız.' },
      { q: 'Bağlantı kazanmak ne kadar sürer, sıralamaya etkisi ne zaman görülür?', a: 'Bağlantıyı hak etmek zaman alır; sıralamaya etkisi de hemen görülmez. Genellikle aylar içinde ölçülür ve sonuç garanti edilemez. Aylık raporda her yeni bağlantıyı ve bağlantı alan sayfanın sırasını görürsünüz.' },
      { q: 'Bağlantı için ücret ödenir mi?', a: 'Reklam ya da sponsorluk niteliğindeki yerleşimlerde Google, bağlantının rel="sponsored" ile işaretlenmesini ister. Böyle bir yerleşimi sıra kazanma yolu olarak sunmayız; olursa açıkça belirtiriz.' },
      { q: 'Sitemde zararlı bağlantılar var, ne yapmalıyım?', a: 'Google çoğu zaman bu tür bağlantıları kendisi yok sayar. Reddetme aracı ileri düzey bir araçtır ve yanlış kullanılırsa zarar verebilir. Önce bağlantıları inceleriz; araca ancak gerçekten gerekliyse başvururuz.' },
    ],
  },
  {
    slug: 'web-tasarim',
    icon: 'layout',
    short: 'Web tasarım',
    fit: 'Sitesi olmayan, eski sitesi telefonda zor açılan ya da markasını yansıtmayan ve yeni siteyi baştan aramaya göre kurmak isteyen işletmeler için.',
    measure: 'Sitenin telefonda açılış hızı, Google’ın siteyi dizine alması ve ziyaretçinin telefon, WhatsApp ya da form gibi eylemleri yapma sayısı.',
    name: 'SEO uyumlu web tasarım',
    title: "SEO Uyumlu Web Tasarım Denizli | Denizli SEO",
    description:
      "Telefonda hızlı açılan, Google’ın sorunsuz okuduğu ve aramaya göre kurulan kurumsal web siteleri. Denizli’de SEO uyumlu web tasarım.",
    h1: ['Aramada bulunan,', 'hızlı açılan site.'],
    queries: ['denizli web tasarım', 'kurumsal web sitesi', 'e-ticaret sitesi', 'seo uyumlu site'],
    lead:
      'Sitenizi tasarlarken önce müşterinin Google’da ne aradığına bakarız; sayfaları, başlıkları ve adresleri buna göre kurarız.',
    goal: 'Telefon, WhatsApp ve form talebi toplayan; aramada bulunabilen ve hızlı açılan bir site kurmak.',
    statementHead: 'Önce aramalar, sonra tasarım',
    statement:
      'Güzel bir site, aranmadıkça ziyaretçi getirmez. Hangi sayfanın olacağına aranan kelimeler, sayfanın nasıl görüneceğine işletmeniz ve müşteriniz karar verir.',
    items: [
      { name: 'Arama odaklı site planı', text: 'Hangi sayfaların olacağını aranan kelimelere ve hizmetlerinize göre baştan planlarız.' },
      { name: 'Markaya özel tasarım', text: 'Hazır şablon kullanmayız; tasarımı işletmenize ve müşterinize göre yaparız.' },
      { name: 'Mobil öncelikli tasarım', text: 'Önce telefon ekranında tasarlar, görselleri ve kodu hız için hazırlarız.' },
      { name: 'Teknik SEO hazır', text: 'Başlık etiketleri, açıklamalar, site haritası ve yapılandırılmış veri yayından önce kurulur.' },
      { name: 'Ölçüm altyapısı', text: 'Search Console, analiz aracı ve telefon ile WhatsApp tıklamalarının ölçümü kurulur.' },
      { name: 'Taşımada sıra koruma', text: 'Eski siteniz varsa her eski adresi yenisine yönlendirir, mevcut sıralamaları korumaya çalışırız.' },
    ],
    steps: [
      { line: 'Önce aramaları çıkarırız.', text: 'Müşteriniz hangi kelimelerle arıyor? Teslim: anahtar kelime listesi.' },
      { line: 'Sayfaları planlarız.', text: 'Her aramanın karşılığı olan bir sayfa; teslim: site haritası ve sayfa planı, sizin onayınızla.' },
      { line: 'Tasarlar, kodlarız.', text: 'Hızlı, telefona uygun, size özel; yayından önce teknik SEO kontrol listesi uygulanır.' },
      { line: 'Yayına alıp ölçeriz.', text: 'Yayından itibaren ölçülebilir göstergelerle düzenli rapor.' },
    ],
    faq: [
      { q: 'Site yenilenirse sıram düşer mi?', a: "Yönlendirmeler doğru kurulmazsa düşebilir. Eski adreslerin tamamını listeler, her birini yeni karşılığına 301 ile yönlendirir ve geçişten sonraki haftalarda Search Console’u izleriz." },
      { q: 'SEO’yu sonra düşünsem olur mu?', a: 'Olur, ama sonradan eklemek daha zahmetlidir. En azından sayfa yapısını ve adresleri baştan aramaya göre kurmanızı öneririz.' },
      { q: 'E-ticaret sitesi yapıyor musunuz?', a: 'Evet. Venti Dijital Ajans e-ticaret siteleri de kuruyor; Tekdağ Elektronik bunlardan biri. Ürün ve kategori sayfalarının SEO’sunu kurulumda planlarız.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
