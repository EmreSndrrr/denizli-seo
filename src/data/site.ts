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
  },
  person: 'Emre Şandır',
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
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Venti%20Dijital%20Ajans%2C%20Fatih%2C%201894.%20Sk.%20No%3A12%20D%3A1%2C%2020170%20Pamukkale%2FDenizli',
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
  { href: '/#hizmetler', label: 'Hizmetler' },
  { href: '/#nasil', label: 'Nasıl çalışırız' },
  { href: '/#isler', label: 'İşler' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
];
