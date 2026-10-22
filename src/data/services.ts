// Copy for the four service pages. Plain facts and method only: no invented results or promises.
export type ImageKey = 'ufuk' | 'havuzlar' | 'ova' | 'laodikya' | 'kaskad' | 'palestra';

export interface Step { line: string; text: string }
export interface Qa { q: string; a: string }
export interface Service {
  slug: string;
  name: string;           // used in navigation, breadcrumbs and the home paragraph
  title: string;          // <title>
  description: string;    // meta description
  h1: [string, string];   // two authored lines; the picture slot sits at the end of line one
  slot: ImageKey;
  band: ImageKey;         // the wide picture under the first screen
  bandAlt: string;
  lead: string;
  statementHead: string;
  statement: string;
  items: { name: string; text: string }[];
  steps: Step[];
  faq: Qa[];
}

export const SERVICES: Service[] = [
  {
    slug: 'yerel-seo',
    name: 'Yerel SEO ve Google Haritalar',
    title: 'Yerel SEO ve Google Haritalar, Denizli | Denizli SEO',
    description:
      "Google Haritalar’da ve “yakınımdaki” aramalarında Denizli’deki müşterinin sizi bulması için İşletme Profili, yorum ve konum çalışması.",
    h1: ['Haritada', 'öne çıkın.'],
    slot: 'havuzlar',
    band: 'ova',
    bandAlt: "Pamukkale travertenlerinden aşağıdaki kasabaya ve Denizli ovasına bakış",
    lead:
      "Yerel SEO; Google Haritalar’da ve “yakınımdaki” aramalarında, Denizli’de sizi arayan müşterinin karşısına çıkmanız için yapılan çalışmadır.",
    statementHead: 'Haritadaki ilk üç',
    statement:
      'Google, konum içeren bir aramada haritayı sonuçların en üstüne koyar ve yanına birkaç işletme dizer. Bu listeye girmek için profiliniz, yorumlarınız ve adres bilgileriniz birbirini doğrulamalı.',
    items: [
      { name: 'İşletme Profili kurulumu', text: 'Profil yoksa açar, varsa sahipliğini sizde toplar ve doğrulamayı tamamlarız.' },
      { name: 'Kategori ve hizmetler', text: 'Ana kategori, haritadaki sırayı en çok etkileyen alanlardan biridir. Doğru ana kategoriyi ve ek kategorileri seçeriz.' },
      { name: 'Fotoğraf ve gönderiler', text: 'İşletmenin içi, dışı ve işi. Düzenli eklenen fotoğraf ve gönderilerle profil güncel kalır.' },
      { name: 'Yorum düzeni', text: 'Memnun müşterinin yorum bırakmasını kolaylaştıran kısa bağlantı ve QR kod hazırlar, her yoruma yanıt verilmesini sağlarız.' },
      { name: 'Ad, adres, telefon tutarlılığı', text: 'Sitenizde, profilde ve rehber sitelerinde işletme bilgilerinin harfi harfine aynı olmasını sağlarız.' },
      { name: 'İlçe ve şube sayfaları', text: 'Birden fazla şubeniz ya da hizmet verdiğiniz ilçeler varsa, her biri için gerçek bilgi taşıyan ayrı sayfa hazırlarız.' },
      { name: 'Harita sırası takibi', text: 'Belirlediğimiz aramalarda haritada kaçıncı sırada olduğunuzu her ay ölçer ve raporlarız.' },
    ],
    steps: [
      { line: 'Önce profili denetleriz.', text: 'Eksik alanları, yanlış kategoriyi ve tutarsız bilgileri çıkarırız.' },
      { line: 'Eksikleri tamamlarız.', text: 'Profil, site ve rehberler aynı bilgiyi söyler hale gelir.' },
      { line: 'Yorum düzenini kurarız.', text: 'Gerçek müşteriden yorum istemek işin rutini olur.' },
      { line: 'Her ay sırayı ölçeriz.', text: 'Hangi aramada kaçıncı olduğunuz raporda yazar.' },
    ],
    faq: [
      { q: 'Haritadaki sırayı ne belirler?', a: 'Google üç şeye baktığını açıklıyor: aramayla ilgililik, arayan kişiye uzaklık ve işletmenin bilinirliği. Uzaklığı değiştiremeyiz; diğer ikisi üzerinde çalışırız.' },
      { q: 'İşletme Profili ücretli mi?', a: 'Hayır, profil ücretsizdir. Ücret; profili kurmak, güncel tutmak ve sırayı takip etmek için harcanan emeğe karşılıktır.' },
      { q: 'Yorum satın alıyor musunuz?', a: 'Hayır. Sahte yorum Google kurallarına aykırıdır ve profilin kısıtlanmasına yol açabilir. Gerçek müşterinin yorum bırakmasını kolaylaştırırız.' },
      { q: 'Dükkânım yoksa haritada çıkabilir miyim?', a: 'Müşterinin yanına giden işletmeler (tesisatçı, nakliyat gibi) adresini gizleyip hizmet bölgesi tanımlayabilir. Bu ayarı kurulumda birlikte yaparız.' },
    ],
  },
  {
    slug: 'teknik-seo',
    name: 'Teknik SEO ve site hızı',
    title: 'Teknik SEO ve Site Hızı Optimizasyonu | Denizli SEO',
    description:
      'Sitenizin Google tarafından sorunsuz taranması, doğru sayfaların dizine girmesi ve telefonda hızlı açılması için teknik SEO denetimi ve düzeltme.',
    h1: ['Siteniz', 'hızlı açılsın.'],
    slot: 'kaskad',
    band: 'havuzlar',
    bandAlt: 'Pamukkale travertenlerinde basamak basamak dizilmiş su havuzları',
    lead:
      'Teknik SEO; sitenizin Google tarafından eksiksiz taranması, doğru sayfaların dizine girmesi ve telefonda hızlı açılması için yapılan altyapı çalışmasıdır.',
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
      { line: 'Önce siteyi tararız.', text: 'Her sayfanın durumu bir tabloda toplanır.' },
      { line: 'Sorunları sıraya dizeriz.', text: 'Önce sıralamayı en çok etkileyenler düzelir.' },
      { line: 'Düzeltmeleri uygularız.', text: 'Kodda, sunucuda ve panelde, yapılabilen her yerde.' },
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
    name: 'İçerik ve blog SEO',
    title: 'İçerik ve Blog SEO, Anahtar Kelime Araştırması | Denizli SEO',
    description:
      "Müşterinizin Google’a sorduğu soruları bulur, bunları yanıtlayan hizmet sayfaları ve blog yazıları hazırlarız. Anahtar kelime araştırması ve içerik planı.",
    h1: ['İçerikle', 'soruyu yanıtlayın.'],
    slot: 'laodikya',
    band: 'kaskad',
    bandAlt: "Léon de Laborde’un 1838 tarihli gravürü: Pamukkale’nin taşlaşmış çağlayanları",
    lead:
      "İçerik SEO’su; müşterinizin Google’a yazdığı soruları bulup bunları en iyi yanıtlayan sayfaları hazırlamaktır.",
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
      { line: 'Önce soruları toplarız.', text: 'Arama verisinden ve sizin müşteri deneyiminizden.' },
      { line: 'Planı çıkarırız.', text: 'Her soru için bir sayfa ve bir tarih.' },
      { line: 'Yazar, size sorarız.', text: 'Her metin yayından önce sizin onayınızdan geçer.' },
      { line: 'Her ay sonucu ölçeriz.', text: 'Hangi yazının ziyaret ve talep getirdiği raporda.' },
    ],
    faq: [
      { q: 'Yazıları yapay zekâ mı yazıyor?', a: "Araştırmada ve taslakta yapay zekâ araçlarından yararlanabiliriz. Her metin sizin sektör bilginizle kontrol edilir ve onayınızla yayına girer. Google içeriğin nasıl üretildiğine değil, okura faydasına bakar." },
      { q: 'Ayda kaç yazı gerekir?', a: 'Sabit bir sayı yok. Aranan konuda derinlemesine bir yazı, çok sayıda yüzeysel yazıdan daha iyi sonuç verir. Sayıyı rekabete göre belirleriz.' },
      { q: 'Yazıları kim yayına alıyor?', a: 'İsterseniz biz yayına alırız, isterseniz metni ve görsel önerilerini size teslim ederiz.' },
    ],
  },
  {
    slug: 'web-tasarim',
    name: 'SEO uyumlu web tasarım',
    title: "SEO Uyumlu Web Tasarım Denizli | Denizli SEO",
    description:
      "Telefonda hızlı açılan, Google’ın sorunsuz okuduğu ve aramaya göre kurulan kurumsal web siteleri. Denizli’de SEO uyumlu web tasarım.",
    h1: ['Aramaya göre', 'site kuralım.'],
    slot: 'ova',
    band: 'laodikya',
    bandAlt: "Laodikya antik kentinden uzaktaki Pamukkale travertenlerine bakış",
    lead:
      'Sitenizi tasarlarken önce müşterinin Google’da ne aradığına bakarız; sayfaları, başlıkları ve adresleri buna göre kurarız.',
    statementHead: 'Önce aramalar, sonra tasarım',
    statement:
      'Güzel bir site, aranmadıkça ziyaretçi getirmez. Hangi sayfanın olacağına aranan kelimeler, sayfanın nasıl görüneceğine işletmeniz ve müşteriniz karar verir.',
    items: [
      { name: 'Arama odaklı site planı', text: 'Hangi sayfaların olacağını aranan kelimelere ve hizmetlerinize göre baştan planlarız.' },
      { name: 'Markaya özel tasarım', text: 'Hazır şablon kullanmayız; tasarımı işletmenize ve müşterinize göre yaparız.' },
      { name: 'Önce telefon', text: 'Önce telefon ekranında tasarlar, görselleri ve kodu hız için hazırlarız.' },
      { name: 'Teknik SEO hazır', text: 'Başlık etiketleri, açıklamalar, site haritası ve yapılandırılmış veri yayından önce kurulur.' },
      { name: 'Ölçüm altyapısı', text: 'Search Console, analiz aracı ve telefon ile WhatsApp tıklamalarının ölçümü kurulur.' },
      { name: 'Taşımada sıra koruma', text: 'Eski siteniz varsa her eski adresi yenisine yönlendirir, mevcut sıralamaları korumaya çalışırız.' },
    ],
    steps: [
      { line: 'Önce aramaları çıkarırız.', text: 'Müşteriniz hangi kelimelerle arıyor?' },
      { line: 'Sayfaları planlarız.', text: 'Her aramanın karşılığı olan bir sayfa.' },
      { line: 'Tasarlar, kodlarız.', text: 'Hızlı, telefona uygun, size özel.' },
      { line: 'Yayına alıp ölçeriz.', text: 'İlk aydan itibaren rakamla rapor.' },
    ],
    faq: [
      { q: 'Site yenilenirse sıram düşer mi?', a: "Yönlendirmeler doğru kurulmazsa düşebilir. Eski adreslerin tamamını listeler, her birini yeni karşılığına 301 ile yönlendirir ve geçişten sonraki haftalarda Search Console’u izleriz." },
      { q: 'SEO’yu sonra düşünsem olur mu?', a: 'Olur, ama sonradan eklemek daha zahmetlidir. En azından sayfa yapısını ve adresleri baştan aramaya göre kurmanızı öneririz.' },
      { q: 'E-ticaret sitesi yapıyor musunuz?', a: 'Evet. Venti Dijital Ajans e-ticaret siteleri de kuruyor; Tekdağ Elektronik bunlardan biri. Ürün ve kategori sayfalarının SEO’sunu kurulumda planlarız.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
