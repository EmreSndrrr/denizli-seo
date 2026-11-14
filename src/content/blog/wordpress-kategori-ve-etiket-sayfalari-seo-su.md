---
title: "WordPress Kategori ve Etiket Sayfaları SEO’su"
description: "WordPress kategori ve etiket sayfaları SEO için nasıl düzenlenir? Yapıyı planlayın, kategori metni ekleyin, ince etiket sayfalarını yönetin."
date: 2026-11-14
service: web-tasarim
imageAlt: "WordPress kategori ve etiket arşivlerinin hiyerarşi şeması ve noindex kararı"
---

WordPress’te kategori sayfaları sitenizin konu yapısını kurar; etiket sayfaları ise çoğu küçük sitede gereksiz ve ince arşivler üretir. Pratik kural: az sayıda, net ve anlamlı kategori oluşturun, her birine kısa ve işe yarar bir açıklama yazın, etiketleri yalnızca gerçekten ziyaretçiye yarayacaksa kullanın ve değer katmayan arşivleri noindex ile dizin dışında tutun. Bu düzenleme hem kopya içeriği hem de ince sayfa yığınını önler.

WordPress her kategori, etiket, yazar ve tarih için otomatik arşiv sayfası üretir. Planlamazsanız yüzlerce benzer ve boş sayfa oluşur: Google’ın taramasını boşa harcar ve sitenizin genel kalitesini bulanıklaştırır. Bu yazı, arşiv sayfalarını SEO açısından nasıl düzenleyeceğinizi anlatıyor. Sitenizin yapısını birlikte kurmak isterseniz [web tasarım hizmetimizi](/web-tasarim/) inceleyebilirsiniz. Genel WordPress ayarları için [WordPress SEO: eklentiden önce bakılacak ayarlar](/blog/wordpress-seo/) yazısına da bakın.

## Kategori ve etiket nedir, ne işe yarar?

- **Kategori:** Yazıları geniş konu gruplarına ayıran hiyerarşik yapı (ör. “Yerel SEO”, “Teknik SEO”). Bir yazı genellikle bir ya da iki kategoriye girer.
- **Etiket:** Yazıları daha ayrıntılı, serbest anahtar kelimelerle işaretleyen düz yapı (ör. “harita”, “profil”). Hiyerarşisi yoktur.

Kategoriler sitenizin içerik yapısını ve menüsünü kurar; etiketler ise çoğu zaman gereksiz bir ek sınıflandırmadır. Küçük bir işletme blogunda genellikle 5–10 iyi tanımlanmış kategori yeter; etiket hiç gerekmeyebilir.

## Adım 1: Kategori yapısını planlayın

Kategorileri müşterinizin bakış açısına göre, hizmetlerinizle uyumlu kurun:

1. Hizmetlerinizi ve ana konularınızı listeleyin.
2. Her yazının bir ana kategoriye gireceği şekilde, birbirinden net ayrılan 5–10 kategori belirleyin.
3. Kategori adlarını ziyaretçinin anlayacağı sade dille yazın.
4. “Genel” ya da “Diğer” gibi anlamsız kategorilerden kaçının.
5. Bir yazıyı çok sayıda kategoriye koymayın; her yazı için birincil kategoriyi seçin.

Kategori adları, sitenizin konu bütünlüğünü de gösterir; konu kümeleri için [konu kümesi (topic cluster) nedir?](/blog/konu-kumesi-topic-cluster-nedir-basit-anlatim/) yazısına bakın. Kategorileri sitenizin hizmet sayfalarıyla uyumlu tutun: blog kategorisi hizmet sayfasına, hizmet sayfası ilgili kategoriye bağlansın.

## Adım 2: Kategori sayfasına içerik ekleyin

Varsayılan kategori sayfası yalnızca yazı listesi gösterir. Kısa bir giriş metni eklemek hem okuyucuya hem arama motoruna sayfanın amacını anlatır:

- İlk iki üç cümlede kategorinin neyi kapsadığını ve kimin için olduğunu yazın.
- İlgili hizmet sayfasına bir bağlantı verin.
- Başlığı sayfanın ne hakkında olduğunu söyleyen açıklayıcı bir ifadeyle yazın.
- Metni liste öncesine koyun; okuyucu yazıları aramadan önce bağlamı görsün.

Google, `<title>` öğesinin her sayfada benzersiz ve açıklayıcı olması gerektiğini söyler ([başlık bağlantıları](https://developers.google.com/search/docs/appearance/title-link?hl=tr)); kategori sayfalarında da bu geçerlidir. Açıklama için benzersiz bir meta tanım yazmanız önerilir ([meta tanımlar](https://developers.google.com/search/docs/appearance/snippet?hl=tr)). E-ticaret kategorileri için ayrıntı [kategori sayfası metni nasıl yazılır?](/blog/kategori-sayfasi-metni-nasil-yazilir/) yazısında.

> **Hizmet almak için iletişime geçin.** SEO’yu baştan düşünerek tasarlanmış, hızlı ve telefonda rahat bir site kuralım. [Web tasarım hizmetimizi](/web-tasarim/) inceleyin ya da [bize yazın](/iletisim/).

## Adım 3: Etiketleri yönetin

Etiket sayfaları en sık sorun çıkaran arşivlerdir. Şunları kontrol edin:

- **Tek yazılık etiketler:** Yalnızca bir yazıyı içeren etiket sayfası ince ve gereksizdir.
- **Çok sayıda etiket:** Her yazıya 10–15 etiket eklemek, yüzlerce benzer arşiv üretir.
- **Etiket–kategori çakışması:** Aynı adı taşıyan kategori ve etiket aynı konuda iki sayfa demektir.
- **Kullanılmayan etiketler:** Silinmeli ya da birleştirilmelidir.

Karar akışı:

1. Etiket kullanmanız gerçekten gerekiyor mu? Gerekmiyorsa hiç kullanmayın.
2. Kullanıyorsanız her etiketin en az birkaç yazısı olmalı ve ziyaretçiye faydası bulunmalı.
3. Değer katmayan etiket arşivlerini noindex yapın ya da SEO eklentisinde etiket arşivlerini dizin dışı bırakın.

## Adım 4: noindex kararını verin

noindex, bir sayfayı arama sonuçlarından tamamen çıkarır; `<meta name="robots" content="noindex">` ya da `X-Robots-Tag` başlığıyla uygulanır, ve etkili olması için sayfanın robots.txt ile engellenmemesi gerekir ([noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)). WordPress’te çoğu SEO eklentisi arşiv türleri için bunu tek ayarla yapmanızı sağlar. Genel öneri:

| Arşiv türü | Küçük işletme sitesi için öneri |
| --- | --- |
| Kategori | Anlamlı ve metinli ise dizine açık |
| Etiket | Çoğunlukla noindex ya da kullanma |
| Yazar | Tek yazarlı sitede noindex |
| Tarih arşivi | noindex |
| Sayfalama (2. sayfa vb.) | Dizine açık, normal sayfalama kuralları |

Karar vermeden önce Search Console’da sayfa dizine ekleme raporuna bakın: hangi arşiv sayfaları dizinde? Gerçekten değer üretenleri dizinde bırakın. Noindex ayrıntısı için [noindex nedir, ne zaman kullanılır?](/blog/noindex-nedir-ne-zaman-kullanilir/) yazısına bakın.

## Adım 5: Sayfalama ve standart adres

Kategori sayfalarında çok yazı varsa sayfalama devreye girer. Google’ın sayfalama belgesine göre her sayfa benzersiz bir URL’ye sahip olmalı, sayfalar `<a href>` ile birbirine bağlanmalı ve ilk sayfa tüm sayfaların standart adresi yapılmamalıdır ([sayfalama](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)). WordPress varsayılan sayfalamasında bu kurallar genellikle sağlanır; ancak tema ve eklentilerin standart adresi doğru ayarladığını kaynak kodunda kontrol edin. Ayrıntı için [kategori ve liste sayfalarında sayfalama SEO’su](/blog/kategori-ve-liste-sayfalarinda-sayfalama-seo-su/) yazımıza bakın.

## Adım 6: İç bağlantı ve menü

Kategori sayfalarını sitenizin gezinmesine dahil edin:

- Ana menüde ya da blog sayfasında kategorilere yer verin.
- Her yazıdan kategorisine bağlantı bulunsun (kırıntı/breadcrumb ya da kategori bağlantısı).
- Kategori sayfasından ilgili hizmet sayfasına bağlantı verin.
- Çok eski, dizine açık olmayan arşivlere bağlantı vermeyin.

Google’ın belirttiğine göre bağlantılar `href` özelliği olan `<a>` öğeleri olmalıdır ([bağlantılar rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=tr)). Genel yaklaşım için [iç bağlantı stratejisi](/blog/ic-baglanti-stratejisi-kucuk-siteler-icin-rehber/) yazısına bakın.

## Mevcut karmaşayı nasıl toplarsınız?

Yıllardır blog yazan bir sitede kategori ve etiket sayısı kontrolden çıkmış olabilir. Temizlik planı:

1. Tüm kategori ve etiketleri yazı sayılarıyla listeleyin.
2. Benzer kategorileri birleştirin; yazıları yeni kategoriye taşıyın.
3. Tek yazılık ve kullanılmayan etiketleri silin ya da birleştirin.
4. Silinen kategori ve etiket adreslerini karşılığı varsa kalıcı yönlendirmeyle bağlayın; karşılığı yoksa 404 normaldir ([yönlendirmeler](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)).
5. Menü, site haritası ve iç bağlantıları güncelleyin.
6. Birkaç hafta Search Console’da hata ve dizine ekleme raporunu izleyin.

Toplu işlemlerden önce tam yedek alın.

## Denizli’den bir örnek

Örnek (hayalî bir işletme için): Merkezefendi’de bir muhasebe bürosunun WordPress blogunda 60 yazıya karşılık 140 etiket ve 18 kategori var.

- **Plan:** Kategoriler yedi anlamlı gruba indiriliyor; her birine kısa açıklama ve ilgili hizmet sayfası bağlantısı ekleniyor.
- **Etiket:** Etiketlerin çoğu tek yazılık olduğu için silinip kalanlar noindex yapılıyor.
- **Yönlendirme:** Silinen kategorilerin adresleri en yakın karşılığa yönlendiriliyor.
- **Kontrol:** Site haritası ve menü güncelleniyor; Search Console’da dizine ekleme raporu birkaç hafta izleniyor.

Bu örnek bir sonuç vaadi değildir.

## Sık yapılan altı hata

1. **Her yazıya düzinelerce etiket eklemek.**
2. **Kategori sayfasına hiç metin yazmamak.**
3. **Aynı adlı kategori ve etiket kullanmak.**
4. **Tüm arşivleri düşünmeden dizine açık bırakmak.**
5. **Kategori silerken yönlendirme yapmamak.**
6. **Yedek almadan toplu değişiklik yapmak.**

## Denizli SEO bu konuda nasıl yardımcı olur?

Arşiv yapısı, sitenin uzun vadeli sağlığını belirler. [Web tasarım hizmetimizde](/web-tasarim/):

- kategori ve etiket yapınızı denetler, sadeleştirme planı hazırlarız,
- kategori sayfalarına kısa, işe yarar metinler ve doğru başlıklar yazarız,
- noindex, canonical ve sayfalama ayarlarını WordPress’te doğru yapılandırırız,
- yönlendirme ve site haritası güncellemelerini yapar, sonuçları raporlarız.

WordPress sitenizin yapısını düzenlemek isterseniz [bize yazın](/iletisim/).

> **Sizin için de yapalım mı?** Mevcut sitenizi yenilemek ya da sıfırdan kurmak istiyorsanız ihtiyacınızı birlikte netleştirelim. [Hizmet almak için iletişime geçin](/iletisim/); ayrıntı [web tasarım sayfamızda](/web-tasarim/).

## Sık sorulan sorular

### WordPress’te etiket kullanmak zorunda mıyım?

Hayır. Çoğu küçük işletme blogunda etiket gereksizdir; kategori yapısı yeterlidir.

### Kategori sayfaları dizine açık olmalı mı?

Anlamlı, metinli ve değerli kategori sayfaları dizine açık kalabilir; boş ya da ince olanlar noindex olmalı.

### Etiket sayfalarını noindex yapmak zarar verir mi?

Genellikle değil; değer katmayan arşivleri dizin dışı bırakmak yaygın bir uygulamadır. Karar vermeden önce Search Console’da hangi sayfaların trafik getirdiğine bakın.

### Kaç kategori olmalı?

Sabit sayı yoktur; küçük bir blog için 5–10 net kategori çoğu zaman yeterlidir.

### Kategori adını değiştirirsem ne olur?

Adres de değişirse eski adresi yeniye kalıcı yönlendirin ve iç bağlantıları güncelleyin.

## Kaynaklar

- [Google Arama Merkezi: Google Arama’daki başlık bağlantılarını etkileme](https://developers.google.com/search/docs/appearance/title-link?hl=tr)
- [Google Arama Merkezi: noindex ile arama dizinine eklemeyi engelleme](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=tr)
- [Google Arama Merkezi: Sayfalara ayırma, artımlı sayfa yükleme ve Google Arama’ya etkisi](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=tr)
- [Google Arama Merkezi: Yönlendirmeler ve Google Arama](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=tr)
