// Copy and sample data for the home page. Everything shown as a sample is labelled as a sample on the page.

export interface SectorQuery { q: string; title: string }
export interface Sector { key: string; name: string; heading: string; queries: SectorQuery[] }

// Example searches by sector. The "title" is what a business in that sector could show; sample only.
export const SECTORS: Sector[] = [
  { key: 'saglik', name: 'Sağlık', heading: 'Klinikler', queries: [
    { q: 'denizli diş kliniği', title: 'Kliniğiniz | İmplant, Ortodonti ve Estetik Diş' },
    { q: 'implant fiyatları', title: 'Kliniğiniz | İmplant Tedavisi ve Şeffaf Fiyatlar' },
    { q: 'hafta sonu açık diş hekimi', title: 'Kliniğiniz | Cumartesi ve Pazar Açık Diş Kliniği' },
  ] },
  { key: 'hukuk', name: 'Hukuk', heading: 'Avukatlık büroları', queries: [
    { q: 'denizli boşanma avukatı', title: 'Hukuk Büronuz | Aile ve Boşanma Hukuku Danışmanlığı' },
    { q: 'iş davası avukat ücreti', title: 'Hukuk Büronuz | İşçilik Alacakları ve Tazminat' },
    { q: 'kira tespit davası nasıl açılır', title: 'Hukuk Büronuz | Kira Hukuku Rehberi' },
  ] },
  { key: 'turizm', name: 'Turizm', heading: 'Otel ve konaklama', queries: [
    { q: 'pamukkale butik otel', title: 'Oteliniz | Pamukkale’de Butik Konaklama' },
    { q: 'evcil hayvan kabul eden otel denizli', title: 'Oteliniz | Evcil Hayvan Dostu Odalar' },
    { q: 'kahvaltı dahil otel fiyatları', title: 'Oteliniz | Doğrudan Rezervasyon ve Fiyatlar' },
  ] },
  { key: 'ticaret', name: 'Ticaret', heading: 'Mağaza ve e-ticaret', queries: [
    { q: 'denizli kuyumcu', title: 'Mağazanız | Altın, Gümüş ve Pırlanta Koleksiyonu' },
    { q: 'kadın deri bot', title: 'Mağazanız | Hakiki Deri Kadın Bot Koleksiyonu' },
    { q: 'ücretsiz kargo kahve makinesi', title: 'Mağazanız | Espresso ve Filtre Kahve Makineleri' },
  ] },
  { key: 'emlak', name: 'Gayrimenkul', heading: 'Emlak', queries: [
    { q: 'denizli satılık 3+1 daire', title: 'Portföyünüz | Güncel 3+1 Satılık Daire İlanları' },
    { q: 'kiralık ofis merkezefendi', title: 'Portföyünüz | Merkezefendi’de Kiralık Ofisler' },
    { q: 'site içinde satılık villa', title: 'Portföyünüz | Havuzlu ve Güvenlikli Satılık Villalar' },
  ] },
  { key: 'hizmet', name: 'Hizmet', heading: 'Esnaf ve hizmet', queries: [
    { q: 'denizli evden eve nakliyat', title: 'Firmanız | Sigortalı Evden Eve Nakliyat' },
    { q: 'su sondajı fiyatları', title: 'Firmanız | Su Sondajı ve Pompa Hizmetleri' },
    { q: 'pamukkale oto servis', title: 'Servisiniz | Bakım, Onarım ve Randevu' },
  ] },
];

// The searches the hero box types by itself, and the quick chips under it.
export const HERO_CHIPS = [
  { label: 'Diş kliniği', ...SECTORS[0].queries[0] },
  { label: 'Avukat', ...SECTORS[1].queries[0] },
  { label: 'Butik otel', ...SECTORS[2].queries[0] },
  { label: 'Kuyumcu', ...SECTORS[3].queries[0] },
  { label: 'Nakliyat', ...SECTORS[5].queries[0] },
];

export const MARQUEE = ['Teknik SEO', 'Yerel SEO', 'Google Haritalar', 'İçerik stratejisi', 'Anahtar kelime araştırması', 'Core Web Vitals', 'Web tasarım', 'Aylık rapor'];

export interface HomeService { icon: 'gauge' | 'pin' | 'doc' | 'layout' | 'link' | 'chart'; name: string; text: string; tags: string[]; href: string; cta: string }
export const HOME_SERVICES: HomeService[] = [
  { icon: 'pin', name: 'Yerel SEO', text: 'Google İşletme Profilinizi düzenler, haritada ve “yakınımdaki” aramalarında ilk üçe girmeniz için çalışırız.', tags: ['İşletme profili', 'Yorum düzeni', 'Ad-adres-telefon tutarlılığı'], href: '/yerel-seo/', cta: 'Yerel SEO’yu inceleyin' },
  { icon: 'gauge', name: 'Teknik SEO', text: 'Tarama, site haritası, yapılandırılmış veri ve dizinleme sorunlarını çözer; sayfalarınızın telefonda hızlı açılmasını sağlarız.', tags: ['Search Console', 'Schema.org', 'Core Web Vitals'], href: '/teknik-seo/', cta: 'Teknik SEO’yu inceleyin' },
  { icon: 'doc', name: 'İçerik ve anahtar kelime', text: 'Müşterinizin satın almadan önce aradığı kelimeleri bulur, arama niyetine tam yanıt veren sayfalar yazarız.', tags: ['Arama niyeti', 'Hizmet sayfaları', 'Blog'], href: '/icerik-seo/', cta: 'İçerik SEO’yu inceleyin' },
  { icon: 'layout', name: 'SEO uyumlu web tasarım', text: 'Önce telefon için tasarlar; başlıklar, site haritası ve ölçüm yayından önce kurulu gelir.', tags: ['Telefon önce', 'Hızlı kod', 'Ölçüm kurulumu'], href: '/web-tasarim/', cta: 'Web tasarımı inceleyin' },
  { icon: 'link', name: 'Backlink ve otorite', text: 'Sektörünüzle ilgili, gerçek okuru olan yayıncılardan doğal bağlantılar kazanarak alan adı otoritenizi yükseltiriz.', tags: ['Dijital PR', 'Kazanılmış bağlantı', 'Otorite'], href: '#analiz', cta: 'Bu işi konuşalım' },
  { icon: 'chart', name: 'Aylık raporlama', text: 'Hangi aramada kaçıncı olduğunuzu ve organik aramadan gelen telefon ve form taleplerini sade bir raporla paylaşırız.', tags: ['Sıralama takibi', 'GA4 ve Search Console', 'Talep takibi'], href: '#analiz', cta: 'Raporu konuşalım' },
];

export const PROCESS = [
  { n: '01', when: '1. hafta', title: 'Tarama ve teşhis', text: 'Sitenizi bir arama motoru botu gibi baştan sona tarar; dizinleme engellerini, hız kayıplarını ve içerik boşluklarını listeleriz.' },
  { n: '02', when: '2. hafta', title: 'Strateji ve yol haritası', text: 'Rakip boşluklarını inceler; en hızlı dönüş getirecek anahtar kelimeleri, hedef sayfaları ve öncelik sırasını yazılı plana döker, süreleriyle birlikte veririz.' },
  { n: '03', when: '1–3. ay', title: 'Uygulama ve optimizasyon', text: 'Teknik düzeltmeleri, yerel harita çalışmasını, içerik üretimini ve otorite çalışmalarını hayata geçiririz.' },
  { n: '04', when: 'Her ay', title: 'Ölçüm ve büyüme', text: 'Sıralamayı, tıklamayı ve gelen talepleri izler, her ay raporlarız. İşe yarayan sayfaları çoğaltır, yaramayanı raporda açıkça yazarız.' },
];

// Competitor rows are neutral so they fit any query; their titles take the query (see serp.ts).
export const SERP_ROWS = [
  { url: 'rakip1.com.tr', title: 'Rakip 1', desc: 'Hizmetler, fiyatlar ve iletişim bilgileri.' },
  { url: 'rakip2.com › hizmetler', title: 'Rakip 2', desc: 'Randevu ve sipariş için bizi arayın.' },
  { url: 'rehber-ornek.com › liste', title: 'En iyi 10 liste', desc: 'Kullanıcı yorumlarına göre derlenen rehber.' },
  { url: 'rakip3.com.tr', title: 'Rakip 3', desc: 'Ürün ve hizmet bilgileri.' },
  { url: 'harita-ornek.com › yakinda', title: 'Yakınınızdakiler haritada', desc: 'Adres, telefon ve çalışma saatleri.' },
  { url: 'rakip4.com › iletisim', title: 'Rakip 4', desc: 'Adresimiz ve yol tarifi.' },
];

export const WORK_PICKS = ['Denizli Kuyumcu', 'Yörükoğulları Nakliyat', 'Balkan Endüstriyel Mutfak', 'Elea Premium Stay', 'Bilgi Dem Akademi', 'Eseoğlu Sondaj'];
