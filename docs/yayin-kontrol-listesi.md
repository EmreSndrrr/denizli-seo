# Yayın kontrol listesi: denizliseo.com

Sunucu: Güzel Hosting (cPanel). Site statiktir; yüklenecek olan `dist/` klasörünün içeriğidir. Bu liste yayına almadan önce, yükleme sırasında ve yayından sonra yapılacakları sırayla verir.

## 0. Kod tarafında hazır olanlar (Kasım 2026 itibarıyla)

- 24 sayfa derleniyor; `astro check` 0 hata. Başlık, açıklama, tek `h1`, kanonik adres ve iç bağlantı denetimi temiz.
- Yalnızca 404 sayfası `noindex`; diğer 23 sayfa indekslenebilir ve sitemap'te (`/sitemap-index.xml`).
- `robots.txt` her şeye açık ve sitemap adresini veriyor; `llms.txt` ve `rss.xml` var.
- `public/.htaccess`: https + `www`'suz tek 301, sonu `/` ile biten adresler, 404 sayfası, güvenlik başlıkları (HSTS, nosniff, referrer, çerçeveleme, izinler) ve önbellek.
- Şema: Venti işletme/kuruluş düğümü, kurucu kişi, hizmet, SSS, blog yazısı; sayfa başına paylaşım görseli.
- Sitede çerez, analiz kodu ya da form sunucusu yok; iletişim WhatsApp'a açılır. KVKK ve gizlilik bağlantıları Venti'nin sayfalarına gider.

## 1. Yüklemeden önce (siz)

- [ ] Örnek blog yazılarını okuyun (yazıların bir kısmı sizin gözünüzden geçmedi). "Editoryal ilkeler" sayfası her metnin kontrol edildiğini söylüyor; bu doğru olsun.
- [ ] Telefon (0544 596 56 22), WhatsApp ve adres bilgilerini bir kez gözle doğrulayın.
- [ ] Google puanı (5,0 · 28 yorum, Ekim 2026) hâlâ güncel mi bakın; değiştiyse `src/data/` içindeki ilgili yerleri güncelleyin.

## 2. Derleme ve paket

```bash
npx -y -p node@24 npm ci
npx -y -p node@24 npm run build   # dist/
npx -y -p node@24 npm run check   # 0 hata beklenir
```

`dist/` içinde **gizli `.htaccess` dosyası** da vardır; paketlerken dışarıda kalmamalı.

## 3. Hosting: yükleme

1. cPanel → **Dosya Yöneticisi** → Ayarlar → **Gizli dosyaları göster**'i açın.
2. Alan adının kök klasörünü (genellikle `public_html`) yedekleyin ya da `public_html_eski` adıyla taşıyın.
3. `dist/` **içeriğini** (klasörün kendisini değil) kök klasöre yükleyin; zip yükleyip "Extract" ile açmak en kolayı.
4. `.htaccess` dosyasının kökte olduğunu doğrulayın.

## 4. Alan adı ve SSL

- [ ] DNS: `denizliseo.com` A kaydı hosting IP'sine; `www` CNAME ile `denizliseo.com`'a ya da aynı IP'ye.
- [ ] cPanel → **SSL/TLS Status** → hem `denizliseo.com` hem `www.denizliseo.com` için AutoSSL çalıştırın. `www` için de sertifika şart: yönlendirme önce https'e ulaşabilmeli.
- [ ] Cloudflare gibi bir vekil kullanacaksanız SSL modunu **Full (strict)** yapın. Aksi halde `.htaccess`'teki https yönlendirmesi döngüye girebilir.

## 5. Yükleme sonrası testler

```bash
# Tek 301, doğru adres
curl -sI http://www.denizliseo.com/yerel-seo  | grep -iE "^HTTP|^location"
#   beklenen: 301 → https://denizliseo.com/yerel-seo/

curl -sI https://www.denizliseo.com/          | grep -iE "^HTTP|^location"   # 301 → https://denizliseo.com/
curl -sI https://denizliseo.com/yerel-seo     | grep -iE "^HTTP|^location"   # 301 → /yerel-seo/
curl -sI https://denizliseo.com/yerel-seo/    | grep -iE "^HTTP|strict|x-frame|x-content"   # 200 + başlıklar
curl -sI https://denizliseo.com/olmayan-sayfa/ | head -1                       # 404
curl -s  https://denizliseo.com/robots.txt | tail -2                           # Sitemap satırı
```

- [ ] Ana sayfada 3D büyüteç çalışıyor mu (bilgisayarda ve telefonda)?
- [ ] "Ücretsiz SEO analizi iste" düğmesi WhatsApp'ı hazır mesajla açıyor mu?
- [ ] Bir blog yazısı, `/hizmetler/` ve `/iletisim/` (3D harita) açılıyor mu?

## 6. Arama motorlarına tanıtma

- [ ] **Google Search Console**: alan adı mülkü ekleyin (DNS TXT ile doğrulama sunucudan bağımsızdır). Sitemap olarak `https://denizliseo.com/sitemap-index.xml` gönderin. Ana sayfa için **URL denetimi → Dizine eklenmesini iste**.
- [ ] **Bing Webmaster Tools**: Search Console'dan içe aktarın.
- [ ] Şemayı bir kez deneyin: [Rich Results Test](https://search.google.com/test/rich-results) ve [validator.schema.org](https://validator.schema.org/) ile ana sayfa ve bir hizmet sayfası.
- [ ] **ventiajans.com'dan denizliseo.com'a bağlantı ekleyin** (SEO hizmeti sayfasına ya da altbilgiye). Marka ilişkisini iki yönde doğrular ve ilk gerçek bağlantıdır. denizliseo.com zaten ventiajans.com'a bağlanıyor.
- [ ] Google İşletme Profili Venti adına kalır; "Denizli SEO" adına ikinci profil açılmaz (adres aynı).

## 7. Yayından sonra

| Ne zaman | Ne bakılır |
| --- | --- |
| 1–3 gün | Search Console → Sayfalar raporu: 23 sayfa keşfedildi mi, hata var mı |
| 1 hafta | Performans raporu: ilk gösterimler; "Bulunamadı (404)" listesi boş mu |
| 4 hafta | Core Web Vitals (gerçek kullanıcı verisi) ve PageSpeed Insights, telefon |
| Her ay | Yeni yazı: `docs/seo-yazi-talimati.md` akışı; eski yazıların `updated` tarihi |

## 8. Geri alma

Bir şey ters giderse `public_html`'i silip yedeği (`public_html_eski`) geri taşıyın. DNS değişmediği için anında etkili olur.
