# Şema

## Tarama (15 Kasım 2026, 111 sayfa)

Her sayfada: JSON-LD ayrıştırılıyor, `@context` doğru, bütün `@id` başvuruları aynı sayfada çözülüyor, adresler https, tarihler ISO 8601, şemadaki görsel ve sayfa hedefleri dosya olarak var.

| Tür | Nerede | Durum |
| --- | --- | --- |
| Organization (Denizli SEO) + ProfessionalService (Venti: adres, konum, saat, harita) + Person + WebSite | her sayfa | Tam. Puan/yorum işaretlemesi yok (kendi sitenizdeki puan için uygun değildir, doğru karar). |
| Service + OfferCatalog | 5 hizmet sayfası | `provider`, `areaServed`, `serviceType`, `url` var |
| BlogPosting | 91 yazı | `headline`, görsel (1200×630), yayın ve güncelleme tarihi, `author`, `publisher`, `mainEntityOfPage` var |
| BreadcrumbList | 109 sayfa | Sıra numaraları ardışık, son öğe sayfanın kendisi, bütün hedefler var |
| FAQPage | 7 sayfa | Her soru ve yanıt sayfada görünür metinle aynı. Google SSS zengin sonucunu Mayıs 2026'da kaldırdı: bilgi amaçlı kalır |
| Blog / CollectionPage | blog listeleri | Düzeltildi: listedeki yazı düğümleri artık yazının kendi `@id`'sini ve `author` alanını taşıyor (Rich Results Test'te "author eksik" uyarısı vermesin diye) |

## Sahibinden gelecek bilgiyle güçlenir (uydurulmaz)

- Person düğümünde `sameAs` (kurucunun LinkedIn profili) ve fotoğraf yok.
- Denizli SEO düğümünde `sameAs` yok (markanın kendi sosyal hesabı varsa).
- Yayından sonra Rich Results Test ve validator.schema.org ile bir ana sayfa, bir hizmet, bir yazı denenmeli.
