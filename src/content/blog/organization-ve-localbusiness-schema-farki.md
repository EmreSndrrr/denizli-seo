---
title: "Organization ve LocalBusiness Schema Arasındaki Fark"
description: "Organization ve LocalBusiness schema arasındaki fark nedir? Hangi işletme hangisini kullanmalı, alt türler, zorunlu alanlar ve doğru uygulama rehberi."
date: 2026-11-19
service: teknik-seo
imageAlt: "Kuruluş kimliğini ve yerel işletme ayrıntılarını gösteren iki iç içe yapılandırılmış veri katmanı"
---

Organization, bir kuruluşun genel kimliğini (adı, logosu, adresi, sosyal profilleri gibi) tanımlayan schema türüdür; LocalBusiness ise Organization’ın alt türüdür ve adresi, çalışma saatleri ve harita konumu olan fiziksel bir yerel işletmeyi tanımlar. Yani her LocalBusiness aynı zamanda bir Organization’dır. Müşterinin gelip gittiği bir mağaza, klinik ya da atölyeniz varsa en belirgin LocalBusiness alt türünü kullanın; fiziksel konumu olmayan bir marka, çevrimiçi şirket ya da holding için Organization yeterlidir.

Bu yazıda iki türün farkını, Google’ın önerdiği kullanımı, hangi işletmenin hangisini seçeceğini, birlikte nasıl kullanılacağını ve sık yapılan hataları anlatıyoruz. Yapılandırılmış verinin temeli için [yapılandırılmış veri nedir? işletmeler için rehber](/blog/yapilandirilmis-veri-nedir-isletmeler-icin-rehber/), teknik tarafta desteğimiz için [teknik SEO hizmeti](/teknik-seo/) sayfamıza bakabilirsiniz.

## Organization schema nedir?

Organization, kuruluşunuz hakkında genel bilgi veren yapılandırılmış veridir. Google’ın Organization rehberi, bu verilerin Google’ın kuruluşunuzu anlamasına, aranan marka adıyla doğru eşleşmesine ve Arama sonuçlarında ve bilgi panelinde gösterilecek logo gibi görsel öğeleri etkilemeye yardımcı olabileceğini söyler; satıcıysanız satıcı bilgi panelinize ve marka profilinize iade politikası, adres, iletişim bilgisi gibi ayrıntılar ekleyebileceğinizi, zorunlu özellik olmadığını ama olabildiğince çok önerilen özelliği eklemenin kuruluşunuzu daha iyi tanıtacağını belirtir ([Organization yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=tr)). Örnekte `name`, `url`, `logo`, `sameAs` (sosyal profil ve diğer resmî sayfalar) gibi alanlar kullanılır.

Organization, yerel olması gerekmeyen kuruluşlar için uygundur: bir marka, bir dernek, bir yazılım şirketi ya da çok şubeli bir kurumun genel kimliği.

## LocalBusiness schema nedir?

LocalBusiness, fiziksel bir konumda müşteriye hizmet veren yerel işletmeler içindir. Google’ın yerel işletme rehberi şunu söyler: işletme konumunu LocalBusiness türü olarak tanımlayın ve mümkün olan en belirgin LocalBusiness alt türünü kullanın (örneğin Restaurant, DaySpa, HealthClub). LocalBusiness, Organization öğesinin alt türü olduğundan, zorunlu alanların yanı sıra Kuruluş alanlarını da takip etmenizi öneririz. Birden fazla tür varsa bunları dizi olarak belirtin; `additionalType` desteklenmez ([Yerel işletme yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=tr)).

LocalBusiness ile genellikle adres, telefon, çalışma saatleri, harita konumu, fiyat aralığı ve görsel gibi ayrıntılar tanımlanır. Bu bilgiler Google’ın işletmenizi yerel bağlamda anlamasına yardımcı olur; ama aynı bilgilerin Google İşletme Profili ve sitenizdeki görünür içerikle tutarlı olması gerekir ([ad, adres, telefon tutarlılığı: NAP kontrol listesi](/blog/ad-adres-telefon-tutarliligi/)).

> **Hizmet almak için iletişime geçin.** İşletmenize uygun schema yapısını birlikte planlayıp test edelim. [Teknik SEO hizmetimizi](/teknik-seo/) inceleyin ya da [bize yazın](/iletisim/).

## İkisi arasındaki fark

| Özellik | Organization | LocalBusiness |
| --- | --- | --- |
| Neyi tanımlar? | Kuruluşun genel kimliği | Fiziksel yerel işletme |
| İlişki | Üst tür | Organization’ın alt türü |
| Tipik alanlar | Ad, logo, url, sameAs, iletişim | Ad, adres, telefon, saat, konum, fiyat aralığı |
| Kimler için? | Marka, çevrimiçi şirket, dernek, holding | Mağaza, klinik, restoran, atölye, ofis |
| Alt türleri | Çok sayıda (Corporation, NGO vb.) | Çok sayıda (Restaurant, Dentist vb.) |
| Google özelliği | Organization rehberi | Yerel işletme rehberi |

Karar kuralı: müşteriniz bir adrese gelip gidiyorsa LocalBusiness (ve en uygun alt tür); gelip gitmiyorsa ya da yalnızca marka kimliğini anlatıyorsanız Organization.

## Hangi işletme hangisini kullanmalı?

- **Mağaza, klinik, restoran, güzellik salonu, atölye, ofis:** LocalBusiness ve uygun alt tür (örneğin Dentist, Restaurant, HairSalon).
- **Müşteri kabul etmeyen hizmet bölgesi işletmesi (tesisatçı, nakliyat, temizlik):** Çoğunlukla LocalBusiness ya da uygun alt tür; adres göstermiyorsanız adresi yapılandırılmış veride ve sitede nasıl gösterdiğinize dikkat edin; Google İşletme Profili’nizdeki gösterimle uyumlu olsun.
- **Çevrimiçi satış yapan marka:** Organization ve gerekirse satıcı bilgileri.
- **Birden fazla şubesi olan marka:** Genel marka için Organization; her şube için ayrı LocalBusiness.
- **Ajans ya da hizmet markası (fiziksel ofisli):** Organization ve ofis için LocalBusiness ya da uygun alt tür (ProfessionalService gibi).

Bu sitenin kendi yapısı da bunun bir örneğidir: yerel işletme bilgileri bağlı ajansın düğümünde, markanın ise Organization olarak tanımlandığı bir grafik kullanılır.

## İkisini birlikte kullanmak mümkün mü?

Evet. Birçok sitede ana kuruluş Organization olarak, fiziksel konum LocalBusiness olarak tanımlanır ve aralarındaki ilişki (`parentOrganization`, `branchOf` gibi) belirtilir. Önemli olan, aynı varlığı iki ayrı, çelişen kayıtla tanımlamamaktır. Aynı işletme için hem Organization hem LocalBusiness düğümü yazıyorsanız, birini ötekine bağlayın ya da LocalBusiness alt türünü tek düğüm olarak kullanıp Organization alanlarını ona ekleyin; Google da LocalBusiness’ın Organization alt türü olduğunu ve her iki türün alanlarının izlenmesini önerir.

## Hangi alanlar eklenmeli?

Küçük bir işletme için sağlıklı bir temel kümesi:

- **Ad:** Gerçek, tabelada kullanılan ad ([Google işletme adına anahtar kelime eklemek doğru mu?](/blog/google-isletme-adina-anahtar-kelime-eklemek-dogru-mu/)).
- **Url ve logo:** Ana sayfa adresi ve taranabilir bir logo adresi.
- **Adres, telefon, harita konumu:** Sitedeki ve profildeki bilgilerle aynı.
- **Çalışma saatleri:** Profildeki saatlerle tutarlı.
- **sameAs:** Doğrulanmış sosyal profiller ve profil bağlantıları.
- **Görsel:** İşletmenin gerçek fotoğrafı.
- **Açıklama ve hizmetler:** Kısa ve doğru.

Yapılandırılmış verideki bilgi, sayfada kullanıcıya görünen bilgiyle uyumlu olmalıdır; Google’ın genel yapılandırılmış veri yönergeleri, yapılandırılmış verilerin başvurduğu içeriğin kullanıcıdan gizlenmemesini ister ([yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)). Yani sayfada olmayan bir bilgiyi yalnızca işaretlemede yazmayın.

## Nasıl uygulanır ve test edilir?

1. **Türü seçin.** Yukarıdaki karar kuralına göre.
2. **JSON-LD olarak yazın.** Genellikle en kolay biçimdir ([JSON-LD ile microdata arasındaki fark](/blog/json-ld-ile-microdata-arasindaki-fark/)).
3. **Ana sayfaya ve iletişim sayfasına ekleyin.** İşletme bilgilerini içeren sayfalara.
4. **Doğrulayın.** Zengin Sonuçlar Testi ve şema doğrulama araçlarıyla hata ve uyarıları kontrol edin.
5. **Google İşletme Profili ile karşılaştırın.** Ad, adres, telefon ve saatler aynı olsun.
6. **Search Console’da izleyin.** Yapılandırılmış veri raporlarında hata var mı bakın.

Zengin sonuç görünmüyorsa nedenleri için [schema var ama zengin sonuç neden görünmüyor?](/blog/schema-var-ama-zengin-sonuc-neden-gorunmuyor/) yazısına bakabilirsiniz.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir fizyoterapi kliniğinin sitesinde yalnızca “Organization” türünde bir işaretleme var; adres ve saat bilgileri yok. Klinik fiziksel bir yerde hasta kabul ediyor.

Düzeltme: işaretleme klinik için en uygun LocalBusiness alt türüne çevriliyor; adres, telefon, harita konumu ve çalışma saatleri, Google İşletme Profili ve sitedeki iletişim sayfasıyla aynı olacak şekilde ekleniyor; logo ve doğrulanmış sosyal profiller `sameAs` ile belirtiliyor. Zengin Sonuçlar Testi’yle doğrulanıyor ve Search Console’da hata raporları izleniyor. Bu örnek sonuç vaadi değildir.

## Sık yapılan hatalar

1. **Fiziksel işletmeye yalnızca Organization yazmak.** Adres ve saat gibi yerel ayrıntılar eksik kalır.
2. **Çok genel tür seçmek.** Mümkün olan en belirgin alt türü kullanın.
3. **Sitede ve profilde farklı bilgi yazmak.** Tutarsızlık güveni zedeler.
4. **Sayfada görünmeyen bilgiyi işaretlemek.** Genel yönergelere aykırıdır.
5. **Aynı işletmeyi iki çelişen düğümle tanımlamak.** Tek ve tutarlı yapı kurun.
6. **Doğrulamadan yayınlamak.** Hata ve uyarıları test edin.

## Denizli SEO bu konuda nasıl yardımcı olur?

[Teknik SEO hizmetimizde](/teknik-seo/):

- işletmeniz için doğru Organization ve LocalBusiness yapısını seçer, JSON-LD’yi hazırlarız,
- adres, telefon ve saat bilgilerini sitede ve Google İşletme Profili’nde tutarlı hâle getiririz,
- uygulamayı test eder, hata ve uyarıları düzeltiriz,
- sonuç vaat etmeden, Search Console’da yapılandırılmış veri durumunu izleriz.

Yapılandırılmış verileriniz için [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Schema yapınızı birlikte doğru kuralım. [Hizmet almak için iletişime geçin](/iletisim/); kapsam [teknik SEO sayfamızda](/teknik-seo/) yazılı.

## Sık sorulan sorular

### LocalBusiness Organization’ın yerine geçer mi?

LocalBusiness Organization’ın alt türüdür; Google da Organization alanlarını da takip etmenizi önerir. Fiziksel işletmede genellikle LocalBusiness yeterlidir.

### Hangi alt türü seçmeliyim?

Mümkün olan en belirgin olanı: restoran için Restaurant, diş kliniği için Dentist gibi. Uygun olan yoksa genel LocalBusiness’a dönün.

### Birden fazla tür yazabilir miyim?

Evet; Google çok türlü kullanım için türleri dizi olarak belirtmenizi önerir. `additionalType` desteklenmez.

### Zorunlu alan var mı?

Organization için Google zorunlu alan belirtmez ama önerilen alanları eklemeyi önerir. LocalBusiness için rehberdeki zorunlu alanları takip edin.

### Schema sıralamayı yükseltir mi?

Doğrudan sıralama sinyali olarak sunulmaz; Google’ın işletmenizi anlamasına ve uygun görünümlere yardımcı olabilir.

## Kaynaklar

- [Google Arama Merkezi: Organization (Kuruluş) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=tr)
- [Google Arama Merkezi: Yerel işletme (LocalBusiness) yapılandırılmış verileri](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=tr)
- [Google Arama Merkezi: Yapılandırılmış veri genel yönergeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
