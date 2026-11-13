# SEO ve GEO uyumlu blog yazısı talimatı

Bu dosya, denizliseo.com için yeni blog yazıları yazacak oturuma verilecek talimattır. Yeni bir sohbete "docs/seo-yazi-talimati.md dosyasındaki talimata göre çalış" deyip anahtar kelimeleri vermek yeterlidir.

## Başlamadan önce oku (bir kez)
- `CLAUDE.md` (proje kuralları; özellikle uydurma kanıt yasağı)
- `src/content.config.ts` (frontmatter şeması)
- Örnek iki yazı, hedef kalite ve yapı bunlar:
  - `src/content/blog/google-isletme-profili-nasil-doldurulur.md`
  - `src/content/blog/seo-ne-kadar-surede-sonuc-verir.md`
- `docs/kaynaklar.md` varsa oku: daha önce doğrulanmış Google sayfaları ve ne söyledikleri. Yoksa oluştur ve doğruladığın her kaynağı buraya ekle (URL, sayfa başlığı, doğrulanan cümle, tarih).
- `src/content/blog/` içindeki mevcut yazıların yalnızca başlık ve açıklamalarına bak (çakışma kontrolü için).

## İş akışı
1. Anahtar kelimeler verildiğinde önce bir PLAN çıkar, yazmaya başlama:
   - Hangi kelimeler aynı yazıda birleşir (aynı arama niyeti = tek yazı).
   - Mevcut yazılarla çakışan var mı (varsa yeni yazı yerine mevcut yazıyı genişletmeyi öner).
   - Her yazı için: dosya adı (slug), başlık (≤60 karakter, telefonda en fazla 2 satır), ana kelime, 5–10 yan kelime/soru, bağlı hizmet sayfası.
   - Planın onaylanmasını bekle.
2. Onaydan sonra yazıları 3–4'lük gruplar halinde sırayla yaz. Her grup sonunda derle, kontrol et, commit et ve kısa rapor ver.

## Her yazının yapısı (Venti blogu gibi: ventiajans.com/blog)
Ölçülü örnek: ventiajans.com/blog yazılarında gövde 1.200–1.550 kelime, 7–8 H2, 5 H3'lük SSS, düz yazı + madde listesi, en fazla bir tablo. Biz de aynı düzeni izleriz.
1. İlk paragraf başlıktaki soruya doğrudan cevap verir ("X nedir diye soruyorsanız cevap şu: ..."); etiket (**Kısa cevap:**) yazma. 40–70 kelime.
2. İkinci paragraf: yazının neyi anlattığı, kısaca; ilgili hizmet sayfasına düz metin içinde link ("... SEO hizmeti sayfamızda bulabilirsiniz").
3. 7–8 adet H2; insanların Google'da yazdığı biçimde soru olsun; her H2'nin ilk cümlesi soruyu doğrudan cevaplasın. Gövde düz paragraf; sıralama gereken yerde numaralı adım, sayılabilen şeyde madde listesi.
4. Tablo: yazı başına en fazla bir (2–3 sütun, dolu hücreler). Kontrol listesini "Şunları tek tek kontrol edin:" + madde listesi olarak yaz; boş "Evet / Hayır" sütunlu tablo yazma.
5. Denizli'ye özgü örnekler ("Örnek (hayalî bir işletme için): ..."). İlçe adları doğru yazılsın: Acıpayam, Babadağ, Baklan, Bekilli, Beyağaç, Bozkurt, Buldan, Çal, Çameli, Çardak, Çivril, Güney, Honaz, Kale, Merkezefendi, Pamukkale, Sarayköy, Serinhisar, Tavas.
6. `## Denizli SEO bu konuda nasıl yardımcı olur?`: kısa, sonuç vaat etmeyen, ilgili hizmete bağlanan bölüm.
7. `## Sık sorulan sorular`: 5 H3 soru ve 2–3 cümlelik cevap (yalnızca görünür metin, FAQPage şeması yok).
8. `## Kaynaklar`: yalnızca doğrulanmış resmî kaynaklar (developers.google.com/search, support.google.com, web.dev, resmî .gov.tr). Google linklerinde `?hl=tr` kullan.
Yazar kutusu, kapanış çağrısı ("... için bize ulaşın") ve "Diğer yazılar" sayfa şablonundan (`src/pages/blog/[...slug].astro`) gelir; metne yazma.

- Uzunluk: gövde 1.300–1.600 kelime gerçek içerik (süreç, örnek, karar kuralı). Dolgu yazma.
- 3–6 iç link, hepsi `/` ile bitsin: `/yerel-seo/` `/teknik-seo/` `/icerik-seo/` `/backlink-hizmeti/` `/web-tasarim/` `/hizmetler/` `/iletisim/` ve ilgili `/blog/<id>/` yazıları.
- Yeni yazı bir hizmetle ilgiliyse `src/pages/[service].astro` içindeki `readFor` listesine eklemeyi öner (hizmet sayfasındaki "İlgili yazılar" bölümü).

## Frontmatter
`title` (≤60), `description` (≤160 karakter, düz Türkçe), `date` (bugün), `service` (yerel-seo | teknik-seo | icerik-seo | backlink-hizmeti | web-tasarim), `imageAlt` (görseli anlatan kısa cümle). Yeni yazıda `updated` alanı koyma; `updated` yalnızca içerik gerçekten değiştiğinde eklenir.

## Görseller
`CLAUDE.md` gereği her yazının `public/blog/<id>.jpg` ve `public/og/blog-<id>.jpg` görseli olmalı. Yazıyı ekledikten sonra şu komutla üret (gerekirse önce `scripts/make-images.cjs` dosyasının başını oku):

```bash
NODE_PATH=$(npm root -g) node scripts/make-images.cjs
```

## Kesin kurallar (kısa yazı, kurala aykırı yazıdan iyidir)
- Uydurma yok: istatistik, yüzde, arama hacmi, müşteri yorumu, vaka sonucu, müşteri adı, sıralama garantisi, ödül yazma. Rakam yalnızca açılan resmî kaynakta yazıyorsa.
- Google'a atfedilen her kritik iddiayı (sayı, süre, limit, politika, menü adı) doğrula: önce `docs/kaynaklar.md`'ye bak; orada yoksa sayfayı curl ile aç, başlığın konuyla eşleştiğini ve cümlenin sayfada geçtiğini kontrol et, sonra kaynaklar dosyasına ekle. Doğrulanamayanı sil ya da Google'a atfetmeden genel tavsiye olarak yaz. Google sayfaları değişir: örneğin "SEO 4 ay–1 yıl sürer" cümlesi Haziran 2026'da kaldırıldı.
- Ajansın deneyimi yalnızca "bizim gözlemimiz" diye ve rakamsız yazılabilir.
- Örnek işletme, metin ve adresler "Örnek" ya da "hayalî bir işletme için" diye işaretlensin. Gerçek Denizli işletmelerini örnek olarak anma.
- Google'daki yerel sıralama etkenlerinin Türkçe adları: alaka düzeyi, mesafe, belirginlik (popülerlik).
- Emoji yok. Kısa, düz Türkçe cümleler, etken çatı. Kesme işareti ’ ve tırnak “ ” kullan (mevcut yazılardaki gibi).

## Token tasarrufu
- Alt ajan açma; yazıları sırayla kendin yaz.
- Dosyaları bir kez oku; zaten okuduğun dosyayı tekrar okuma.
- Doğrulamayı yalnızca kritik iddialar için yap; genel tavsiye için kaynak açma.

## Her grup sonunda
```bash
npx -y -p node@24 npm run build
npx -y -p node@24 npm run check
```
İkisi de hatasız olmalı. Sonra yalnızca yazılan dosyaları commit et ve gönder. Rapor kısa olsun: yazı başına kelime sayısı, H2 listesi, doğrulanan yeni kaynaklar, emin olunamayan noktalar.
