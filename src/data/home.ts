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

// The service map: four groups around one ring. Items are the real work of each service page.
export interface ServiceNode { tone: 'pink' | 'orange' | 'purple'; icon: 'pin' | 'gauge' | 'doc' | 'layout'; title: string; href: string; items: string[] }
export const SERVICE_NODES: ServiceNode[] = [
  { tone: 'pink', icon: 'pin', title: 'Yerel SEO', href: '/yerel-seo/', items: ['İşletme Profili kurulumu', 'Kategori ve hizmetler', 'Yorum düzeni', 'Harita sırası takibi'] },
  { tone: 'orange', icon: 'gauge', title: 'Teknik SEO ve hız', href: '/teknik-seo/', items: ['Tarama ve dizin denetimi', 'Site hızı', 'Mobil uyum', 'Yapılandırılmış veri'] },
  { tone: 'purple', icon: 'doc', title: 'İçerik ve otorite', href: '/icerik-seo/', items: ['Anahtar kelime araştırması', 'İçerik planı', 'Blog yazıları', 'Backlink ve otorite'] },
  { tone: 'pink', icon: 'layout', title: 'Web tasarım', href: '/web-tasarim/', items: ['Arama odaklı site planı', 'Önce telefon', 'Teknik SEO hazır', 'Aylık raporlama'] },
];

// What sets the team apart: said before the work starts. Facts only.
export const WHY_CARDS = [
  { tone: 'pink', icon: 'pin', name: 'Denizli’ye odaklı', text: 'Denizli’nin 19 ilçesinde çalışırız; aramalar ilçeye göre değiştiği için her ilçeye ayrı bakarız.' },
  { tone: 'purple', icon: 'team', name: 'Tek elden', text: 'Site, SEO ve reklam aynı ekipte. Bir kanalın verisi diğerini besler; işiniz ajanslar arasında bölünmez.' },
  { tone: 'orange', icon: 'chart', name: 'Rakamla rapor', text: 'Her ay sıra, ziyaret ve gelen talep rakamla raporlanır. Sonuç vermeyen çalışma da raporda yazar.' },
  { tone: 'orange', icon: 'user', name: 'Doğrudan iletişim', text: 'İşi yapan kişiyle konuşursunuz. Araya hesap yöneticisi girmez.' },
  { tone: 'pink', icon: 'eye', name: 'Garanti değil, şeffaflık', text: 'Google’da sıra garanti edilemez. Yapılacak işi, süresini ve sonucunu açıkça yazarız.' },
] as const;

// Tabs of the project carousel: a project shows under a tab when one of its work tags matches.
export const PROJECT_TABS = [
  { key: 'hepsi', label: 'Tümü', tags: [] as string[] },
  { key: 'web', label: 'Web tasarım', tags: ['Web tasarım'] },
  { key: 'seo', label: 'SEO', tags: ['SEO'] },
  { key: 'turizm', label: 'Turizm ve konaklama', tags: ['Turizm', 'Konaklama', 'Rezidans konaklama', 'Seyahat rehberi'] },
  { key: 'ticaret', label: 'Ticaret', tags: ['Kuyumculuk', 'Elektronik', 'E-ticaret sitesi', 'Mobilya', 'Endüstriyel mutfak'] },
  { key: 'hizmet', label: 'Hizmet ve eğitim', tags: ['Nakliyat', 'Su sondajı', 'Isıtma ve soğutma', 'Eğitim'] },
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

