// Business facts used across the site and in structured data.
// Source: ventiajans.com (contact and about pages), October 2026.
export const SITE = {
  name: 'Denizli SEO',
  url: 'https://denizliseo.com',
  locale: 'tr_TR',
  parent: {
    name: 'Venti Dijital Ajans',
    url: 'https://www.ventiajans.com/',
    id: 'https://www.ventiajans.com/#isletme',
    logo: 'https://www.ventiajans.com/img/venti-logo.png',
    // Venti's own profiles, as listed in the structured data of ventiajans.com (November 2026).
    sameAs: [
      'https://www.google.com/maps?cid=3714531531433752929',
      'https://www.instagram.com/venti.ajans/',
      'https://www.linkedin.com/company/ventiajans',
      'https://www.facebook.com/ventiajans/',
    ],
    privacyUrl: 'https://www.ventiajans.com/gizlilik-politikasi/',
    kvkkUrl: 'https://www.ventiajans.com/kvkk-aydinlatma-metni/',
  },
  person: 'Emre Şandır',
  personId: 'https://denizliseo.com/#emre-sandir',
  founderUrl: 'https://www.ventiajans.com/hakkimizda/',
  geo: { latitude: 37.763902, longitude: 29.103202 },
  phone: '+905445965622',
  phoneDisplay: '0544 596 56 22',
  whatsapp: '905445965622',
  address: {
    street: 'Fatih, 1894. Sk. No:12 D:1',
    postalCode: '20170',
    locality: 'Pamukkale',
    region: 'Denizli',
    country: 'TR',
  },
  // Venti Dijital Ajans' Google Business Profile (the profile is under Venti's name, confirmed by the owner).
  mapsUrl: 'https://www.google.com/maps?cid=3714531531433752929',
  // Open 24/7 (confirmed by the owner, November 2026).
  hours: '7/24 açık',
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.locality}/${SITE.address.region}`;

export const DEFAULT_QUERY = 'kuyumcu';

export function waLink(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waQueryText(query: string = DEFAULT_QUERY): string {
  return `Merhaba, Denizli’de “${query}” aramasında işletmemizin nerede çıktığını öğrenmek istiyorum.`;
}

export const WA_GENERAL = waLink('Merhaba, Denizli SEO hakkında bilgi almak istiyorum.');

// The primary action on every page. The first analysis is free (confirmed by the owner).
export const CTA_LABEL = 'Ücretsiz SEO analizi iste';
export const WA_ANALYSIS = waLink('Merhaba, ücretsiz SEO analizi istiyorum. İşletmemin adı ve ilçesi: ');

// The 19 districts of Denizli, alphabetical (Turkish collation).
export const DISTRICTS = [
  'Acıpayam', 'Babadağ', 'Baklan', 'Bekilli', 'Beyağaç', 'Bozkurt', 'Buldan', 'Çal', 'Çameli',
  'Çardak', 'Çivril', 'Güney', 'Honaz', 'Kale', 'Merkezefendi', 'Pamukkale', 'Sarayköy',
  'Serinhisar', 'Tavas',
];

export const NAV = [
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/#nasil', label: 'Nasıl çalışırız' },
  { href: '/#isler', label: 'İşler' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
];
