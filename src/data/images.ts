import type { ImageMetadata } from 'astro';
import ufuk from '../assets/img/pamukkale-ufuk.jpg';
import havuzlar from '../assets/img/pamukkale-havuzlar.jpg';
import ova from '../assets/img/pamukkale-ova.jpg';
import laodikya from '../assets/img/laodikya-pamukkale.jpg';
import kaskad from '../assets/img/laborde-1838-kaskadlar.jpg';
import palestra from '../assets/img/laborde-1838-palestra.jpg';
import type { ImageKey } from './services';

export interface Credit {
  title: string;
  author: string;
  license: string;
  licenseUrl: string | null;
  source: string;
}

export const VIDEO_CREDIT: Credit = {
  title: 'Травертини (Pamukkale travertenleri)',
  author: 'Сарапулов (Sarapulov)',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  source: 'https://commons.wikimedia.org/wiki/File:%D0%A2%D1%80%D0%B0%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D0%BD%D0%B8.webm',
};

export const IMAGES: Record<ImageKey, { src: ImageMetadata; alt: string; credit: Credit }> = {
  ufuk: {
    src: ufuk,
    alt: 'Mavi gökyüzü altında Pamukkale travertenleri ve önündeki turkuaz göl',
    credit: { title: 'Pamukkale - Denizli', author: 'Haluk Cömertel', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Pamukkale_-_Denizli_-_panoramio.jpg' },
  },
  havuzlar: {
    src: havuzlar,
    alt: 'Pamukkale travertenlerinde basamak basamak dizilmiş açık mavi su havuzları',
    credit: { title: 'Pamukkale 32', author: 'Antoine Taveneaux', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Pamukkale_32.jpg' },
  },
  ova: {
    src: ova,
    alt: 'Pamukkale travertenlerinden aşağıdaki kasabaya, göle ve Denizli ovasına bakış',
    credit: { title: 'Pamukkale', author: 'serkany', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Pamukkale_-_panoramio.jpg' },
  },
  laodikya: {
    src: laodikya,
    alt: 'Laodikya antik kentinden bakıldığında dağların önünde beyaz bir şerit gibi görünen Pamukkale',
    credit: { title: 'Pamukkale, seen from Laodikeia', author: 'Maarten Sepp', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', source: 'https://commons.wikimedia.org/wiki/File:Pamukkale,_seen_from_Laodikeia._-_panoramio.jpg' },
  },
  kaskad: {
    src: kaskad,
    alt: "Léon de Laborde’un 1838 tarihli gravürü: Pamukkale’nin taşlaşmış çağlayanları",
    credit: { title: 'Pambouk-Kalessi, vue des cascades pétrifiées (1838)', author: 'Léon de Laborde', license: 'Kamu malı', licenseUrl: null, source: 'https://commons.wikimedia.org/wiki/File:Pambouk-_Kalessi_Vue_des_cascades_petrifi%C3%A9es_-_Laborde_L%C3%A9on_Emmanuel_Simon_Joseph_-_1838.jpg' },
  },
  palestra: {
    src: palestra,
    alt: "Léon de Laborde’un 1838 tarihli gravürü: Hierapolis’te antik palestranın kalıntıları",
    credit: { title: "Pambouk-Kalessi, vue prise au milieu des ruines de l’ancienne palestre (1838)", author: 'Léon de Laborde', license: 'Kamu malı', licenseUrl: null, source: "https://commons.wikimedia.org/wiki/File:Pambouk-_Kalessi_Vue_prise_au_milieu_des_ruines_de_l%27ancienne_palestre_-_Laborde_L%C3%A9on_Emmanuel_Simon_Joseph_-_1838.jpg" },
  },
};
