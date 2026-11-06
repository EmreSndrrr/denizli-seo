import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SERVICES } from '../data/services';
import { SITE, ADDRESS_LINE, DISTRICTS } from '../data/site';

// llms.txt: a plain-text map of the site for AI systems. Google Search ignores it; it costs nothing to offer.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name}, Pamukkale’deki ${SITE.parent.name}’ın arama motoru optimizasyonu (SEO) markasıdır. Denizli’deki işletmelere yerel SEO, Google Haritalar, teknik SEO, içerik SEO, backlink ve SEO uyumlu web tasarım hizmeti verir. Sıralama garantisi vermez; her ay rakamlı rapor sunar.`,
    '',
    '## Hizmetler',
    `- [Tüm hizmetler](${SITE.url}/hizmetler/): beş hizmetin özeti, kime uygun olduğu ve sonucun nasıl ölçüldüğü`,
    ...SERVICES.map((s) => `- [${s.name}](${SITE.url}/${s.slug}/): ${s.lead}`),
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}/): ${p.data.description}`),
    '',
    '## Kurum',
    `- [Hakkımızda](${SITE.url}/hakkimizda/): ekip, çalışma biçimi ve kurucu ${SITE.person}`,
    `- [Editoryal ilkeler](${SITE.url}/editoryal-ilkeler/): içeriklerin nasıl hazırlandığı, kaynaklar ve düzeltme`,
    `- [İletişim](${SITE.url}/iletisim/): telefon, WhatsApp ve adres`,
    `- [${SITE.parent.name}](${SITE.parent.url}): bağlı olduğumuz ajans (web tasarım, Google reklamları, sosyal medya)`,
    '',
    '## Temel bilgiler',
    `- Kurum: ${SITE.name}, ${SITE.parent.name} markası`,
    `- Adres: ${ADDRESS_LINE}`,
    `- Telefon ve WhatsApp: ${SITE.phoneDisplay}`,
    `- Çalışma saatleri: ${SITE.hours}`,
    `- Google İşletme Profili: ${SITE.parent.name} (${SITE.mapsUrl})`,
    `- Hizmet bölgesi: Denizli ve ${DISTRICTS.length} ilçesi`,
    '- Dil: Türkçe',
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
