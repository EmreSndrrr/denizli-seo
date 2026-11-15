# SEO yol haritası: denizliseo.com

Kaynak: `denizliseo.com-audit/` (14 Kasım 2026, yerel derleme, puan 85/100). Bu belge o raporun bulgularını sıraya koyar ve rapordaki eksik alanı (otorite, yerel görünürlük, ölçüm) ekler.

## Önce beklenti

Kod tarafı zaten iyi durumda; 85'ten 95'e çıkmak sıralamayı tek başına değiştirmez. Yeni bir alan adında sonucu belirleyen üç şey var: **Google'ın yazılara güvenmesi** (kalite ve inceleme), **başka sitelerin bağlantı vermesi** (otorite) ve **gerçek iş kanıtı** (projeler, yorumlar). Yol haritası bu üçüne göre kurulu.

Sıralama garantisi verilemez. Rekabetli yerel sorgularda (ör. "denizli seo") yeni alan adının yerleşmesi haftalar değil aylar sürer. Aşağıdaki her fazın sonunda ölçülebilir bir kontrol var; hedef tutmuyorsa bir sonraki faza geçmeden nedenine bakılır.

## Hedef sorgular

Hacim rakamı yazılmadı: kaynağı yok. Yayından sonra Search Console ve Google Ads Anahtar Kelime Planlayıcı'dan alınacak.

| Küme | Sorgular | Hedef sayfa |
| --- | --- | --- |
| Marka + ana | denizli seo, denizli seo ajansı, denizli seo uzmanı, denizli seo hizmeti | `/` |
| Hizmet | denizli yerel seo, denizli teknik seo, denizli backlink, denizli web tasarım, denizli seo danışmanlığı | 5 hizmet sayfası |
| Sektör | denizli [sektör] seo (diş kliniği, emlak, kuyumcu, oto servis…) | sektör yazıları |
| İlçe | pamukkale / merkezefendi seo, ilçe bazlı arama | `denizli-ilce-bazli-arama` yazısı ve ilgili hizmet sayfası |
| Bilgi | seo nedir, backlink nedir, seo fiyatları… | blog (Denizli açısıyla) |

Harita paketi (Google Haritalar'daki üç sonuç) **Venti Dijital Ajans profilinin** işidir; denizliseo.com organik sonuçları hedefler. İkisi birbirini destekler, yarışmaz.

---

## Faz 0: Yayından önce (bu hafta)

| # | İş | Kim | Bitti sayılır |
| --- | --- | --- | --- |
| 0.1 | **91 yazıyı tek seferde yayınlama.** En iyi 20–25 yazıyı okuyup onaylayın; kalanlar taslak olsun ve haftada 2–3 tane yayına girsin. Okunmamış toplu içerik hem "Editoryal ilkeler" sayfasıyla çelişir hem de yeni alan adında en büyük kalite riskidir. Sonuç: risk biter, 6 aylık yayın takvimi hazır olur. | Siz (seçim, okuma) + kod (`draft` alanı) | Yayındaki her yazı sizin gözünüzden geçmiş |
| 0.2 | ventiajans.com ile aynı adresli 7 yazıya Denizli açısı: başlık, giriş ve en az bir yerel örnek. Karşılıklı bağlantı. | Kod + sizin onayınız | 7 başlıkta "Denizli" geçiyor, iki site aynı cümleyi kurmuyor |
| 0.3 | Blog kategori sayfaları (5 hizmet) + sayfalama; yazı sonunda "ilgili yazılar". Tek bağlantı alan yazı kalmaz. | Kod | Her yazı en az 3 iç bağlantı alıyor |
| 0.4 | Küçük temizlik: 160 karakteri aşan açıklamalar, yazı sayfalarında 19 ilçelik `areaServed` tekrarı. | Kod | Denetim betiği temiz |
| 0.5 | Yükleme, DNS, SSL, curl testleri (`docs/yayin-kontrol-listesi.md`). | Siz | 6 curl testi beklenen sonucu veriyor |

## Faz 1: İlk 30 gün (indekslenme ve temel sinyaller)

| # | İş | Kim | Bitti sayılır |
| --- | --- | --- | --- |
| 1.1 | Search Console (alan adı mülkü) + Bing Webmaster; sitemap gönderimi; ana sayfa ve 5 hizmet sayfası için dizine ekleme isteği. | Siz | Sitemap "Başarılı" |
| 1.2 | ventiajans.com'dan bağlantı: SEO hizmet sayfasından ve altbilgiden. İlk ve en değerli bağlantı. | Siz | Bağlantı canlı |
| 1.3 | Venti Google İşletme Profili: hizmetler listesine SEO kalemleri, "Denizli SEO" markasını anlatan bir gönderi (denizliseo.com bağlantılı), haftada bir gönderi. Profilin web sitesi alanı Venti'de kalır. | Siz | Hizmetler dolu, ilk gönderi yayında |
| 1.4 | Yorum akışı: biten her işten sonra müşteriden Google yorumu isteyin (hizmeti adıyla anması iyi olur). Bugün 5,0 / 28. Yorum satın alınmaz, yazdırılmaz. | Siz | Ayda en az 2 yeni gerçek yorum |
| 1.5 | Ölçüm: Search Console yeterli. İsterseniz çerezsiz bir analiz aracı (KVKK açısından en sade yol) ya da GA4 + çerez onayı eklenir. WhatsApp tıklamaları olay olarak sayılır. | Karar sizde, kurulum kod | Tıklama sayısı görünüyor |
| 1.6 | PageSpeed Insights ile gerçek sunucuda ölçüm (telefon). Sorun çıkarsa three.js yüklemesi daha da ertelenir. | Kod | LCP < 2,5 sn, INP < 200 ms, CLS < 0,1 |

**30. gün kontrolü:** ana sayfa + hizmet sayfaları dizinde; yayındaki yazıların yarısından fazlası dizinde; "Taranmış, dizine eklenmemiş" listesi kısa. Değilse yeni yazı yayınını durdurup dizine girmeyen yazıları güçlendirin ya da kaldırın.

## Faz 2: 30–90 gün (otorite ve yerel ağ)

Bu faz sıralamayı en çok etkileyen kısımdır ve çoğu kod dışıdır.

| # | İş | Not |
| --- | --- | --- |
| 2.1 | **Müşteri sitelerinden bağlantı.** 13 yayındaki projenin altbilgisinde "SEO: Denizli SEO" imzası (müşteri izniyle). Gerçek iş ilişkisine dayanan, temiz bağlantılardır. | Önce izin |
| 2.2 | Yerel kurum ve dizinler: Denizli Ticaret Odası üye sayfası, sanayi odası, yerel iş dizinleri, sektör dernekleri. Ad, adres, telefon her yerde Venti profiliyle harfi harfine aynı. | NAP tutarlılığı |
| 2.3 | Yerel basın ve üniversite: Denizli haber sitelerine uzman görüşü ("Denizli esnafı Google'da nasıl bulunur"), PAÜ kulüplerine ücretsiz seminer. Bağlantı doğal sonuçtur. | Ayda 1 temas |
| 2.4 | **Özgün yerel veri yazısı.** Örn. "Denizli'de 100 işletmenin Google profili incelemesi": kaç tanesinin sitesi var, kaçının saatleri eksik. Kendi yaptığınız sayım; yöntemi yazıda açık. Başkalarının kaynak göstereceği tek içerik türü budur ve yapay zekâ aramalarında alıntılanma şansı en yüksek olan da budur. | 1 yazı / çeyrek |
| 2.5 | **Vaka çalışmaları.** Mevcut projelerden 3 tanesi için: sorun, yapılan iş, Search Console ekran görüntüsüyle sonuç (müşteri izniyle, gerçek rakam). `/projeler/<ad>/` sayfaları. Uydurma rakam yazılmaz; izin yoksa rakamsız süreç anlatısı. | Kod + sizin veriniz |
| 2.6 | Yazar otoritesi: kurucunun LinkedIn profili, Venti hakkımızda sayfası ve sitedeki Person şeması aynı kişiyi göstersin (`sameAs`). | Kod + siz |

**90. gün kontrolü:** en az 10 farklı alan adından bağlantı; marka sorgusunda ("denizli seo") gösterim var; hizmet sorgularında ilk 20'de en az birkaç sayfa. Yoksa 2.1–2.3'e ağırlık verilir, yeni yazı değil.

## Faz 3: 3–6 ay (derinlik ve dönüşüm)

| # | İş | Not |
| --- | --- | --- |
| 3.1 | Search Console'da 8–20. sırada kalan sorguları bulun; o sayfaları genişletin (eksik soru, örnek, görsel). Yeni yazıdan daha hızlı sonuç verir. | Aylık |
| 3.2 | Sektör sayfaları: en çok talep gelen 3–4 sektör için yazı değil, hizmet niteliğinde sayfa (ör. `/dis-klinigi-seo/`), o sektörden gerçek proje varsa. | Talep görünce |
| 3.3 | İlçe sayfaları: **yalnızca** o ilçede gerçek müşteri ve özgün içerik varsa, en fazla birkaç tane. 19 ilçe için şablon sayfa açılmaz (kapı sayfası sayılır). | Dikkatli |
| 3.4 | İçerik budama: 3 ayda hiç gösterim almayan yazıları birleştirin ya da kaldırın (301 ile). Az ama güçlü yazı, çok ama zayıf yazıdan iyidir. | Çeyrekte bir |
| 3.5 | Dönüşüm: en çok trafik alan 5 sayfada "Ücretsiz SEO analizi iste" çağrısının yeri ve metni denenir. Trafik artışı ancak WhatsApp mesajına dönüyorsa değerlidir. | Ölçüm 1.5'e bağlı |
| 3.6 | Yapay zekâ aramaları: ChatGPT, Perplexity ve Google AI modunda "Denizli'de SEO ajansı" diye sorup markanın geçip geçmediğini ayda bir not edin. Geçmesini sağlayan şey 2.2–2.5'tir (başka sitelerde anılmak), llms.txt değil. | Ayda 10 dk |

## Sürekli ritim

- **Haftalık (15 dk):** Search Console → dizin hataları, yeni sorgular. Bir GBP gönderisi.
- **Aylık:** taslaklardan 8–10 yazı yayını; 2 eski yazının güncellenmesi (`updated`); bağlantı ve yorum sayısı; 3.1 listesi.
- **Çeyreklik:** bu denetimin tekrarı (`/claude-seo:seo-audit`, bu kez canlı site ve saha verisiyle); budama; yol haritasının gözden geçirilmesi.

## Yapılmayacaklar

Bunlar kısa vadede işe yarar gibi görünür, sitenin kendi anlattığı ilkelerle çelişir ve ceza riski taşır:

- Satın alınmış bağlantı, özel blog ağı, hacklink.
- Sahte ya da ısmarlama yorum; uydurma istatistik, ödül, "1. sıra garantisi".
- "Denizli SEO" adına aynı adreste ikinci Google profili.
- 19 ilçe için şablondan üretilmiş sayfalar.
- Okunmadan yayınlanan toplu yazı.

## Sıradaki adım

Kod tarafındaki işler (0.1'in `draft` alanı, 0.2, 0.3, 0.4) bir oturumda biter. 0.1 için hangi yazıların ilk gün yayında olacağına siz karar verirsiniz.
