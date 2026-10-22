import type { ImageMetadata } from 'astro';

// Venti Dijital Ajans projects, as listed on https://www.ventiajans.com/projeler/ (October 2026).
// Screenshots are of each project’s live home page, taken for this site.
const shots = import.meta.glob<{ default: ImageMetadata }>('../assets/img/projects/*.jpg', { eager: true });
const shot = (slug: string) => shots[`../assets/img/projects/${slug}.jpg`]?.default;

export interface Project { name: string; url: string; work: string; shot?: ImageMetadata }

export const PROJECTS: Project[] = [
  { name: 'Bilgi Dem Akademi', url: 'https://bilgidemakademi.com', work: 'Eğitim · Web tasarım · SEO', shot: shot('bilgi-dem-akademi') },
  { name: 'Elea Premium Stay', url: 'https://www.eleapremiumstay.com/', work: 'Rezidans konaklama · SEO · İçerik', shot: shot('elea-premium-stay') },
  { name: 'Balkan Endüstriyel Mutfak', url: 'https://www.balkanmutfak.com/', work: 'Endüstriyel mutfak · Web tasarım · SEO', shot: shot('balkan-endustriyel-mutfak') },
  { name: 'Murat Center', url: 'https://www.muratcenter.com/tr', work: 'Mobilya · Sosyal medya · Reklam', shot: shot('murat-center') },
  { name: 'Denizli Kuyumcu', url: 'https://denizlikuyumcu.com/', work: 'Kuyumculuk · Web tasarım · SEO', shot: shot('denizli-kuyumcu') },
  { name: 'Essence Travel', url: 'https://www.essencetravel.com.tr/', work: 'Konaklama · Web tasarım', shot: shot('essence-travel') },
  { name: 'Jarkotech', url: 'https://www.jarkotech.com/', work: 'Isıtma ve soğutma · Web tasarım · SEO', shot: shot('jarkotech') },
  { name: 'Tekdağ Elektronik', url: 'https://www.tekdagelektronik.com/', work: 'Elektronik · E-ticaret sitesi', shot: shot('tekdag-elektronik') },
  { name: 'Yörükoğulları Nakliyat', url: 'https://www.evdenevenakliyatdenizli.net/', work: 'Nakliyat · Web tasarım · SEO', shot: shot('yorukogullari-nakliyat') },
  { name: 'Eseoğlu Sondaj', url: 'https://www.eseoglusondaj.com/', work: 'Su sondajı · Web tasarım · SEO', shot: shot('eseoglu-sondaj') },
  { name: 'Fairystone Travel', url: 'https://fairystonetravel.com/', work: 'Turizm · SEO', shot: shot('fairystone-travel') },
  { name: 'Travel Agency Türkiye', url: 'https://www.travelagencyturkiye.com/', work: 'Turizm · Web tasarım · SEO', shot: shot('travel-agency-turkiye') },
  { name: 'Turkey Trip Advisor', url: 'https://turkeytripadvisor.com/', work: 'Turizm · Web tasarım · SEO' },
  { name: 'World Trip Advisor', url: 'https://www.worldtripadvisor.com/', work: 'Seyahat rehberi · Web tasarım · SEO', shot: shot('world-trip-advisor') },
];
