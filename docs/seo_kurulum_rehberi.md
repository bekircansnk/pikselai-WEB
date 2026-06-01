# PikselAI AIO ve SEO Sistem Kurulum Rehberi

Bu doküman, PikselAI platformunu 2026/2027 standartlarında bir **"Yapay Zeka Optimizasyonu (AIO) ve SEO Otoritesi"** haline getirmek için kurulan teknik altyapıyı, arka planda çalışan mekanizmaları ve manuel olarak tamamlanması gereken operasyonel adımları açıklamaktadır.

---

## 1. Sisteme Neler Kurduk? (Teknik Altyapı)

PikselAI'ın arama motorları ve AI botları (ChatGPT, Perplexity vb.) tarafından kusursuz bir şekilde okunabilmesi için şu sistemleri inşa ettik:

### A. E-E-A-T ve Yazar Otoritesi (AuthorBio)
- **Ne Yaptık:** Google'ın "Uzmanlık, Deneyim, Otorite ve Güvenilirlik" (E-E-A-T) kriterlerini karşılamak amacıyla özel bir yazar sayfası (`/yazar/bekircan-sagnak`) oluşturuldu.
- **Arka Plan:** Sitedeki 36+ blog yazısı otomatik olarak bu yazar profiline bağlandı. Kod düzeyinde `ProfilePage` ve `Person` JSON-LD şemaları eklendi. Böylece Google, içeriklerin "Bekircan Sağnak" isimli gerçek ve uzman bir kişi tarafından yazıldığını makine dilinde anlıyor.

### B. IndexNow (Anlık İndeksleme Sistemi)
- **Ne Yaptık:** Bing, Yandex, Seznam gibi arama motorlarına "yeni içerik girildi, hemen gelip tara" mesajı veren **IndexNow** protokolünü kurduk.
- **Arka Plan:** `public/pikselai-indexnow-key-2026.txt` dosyası sunucu kök dizinine yerleştirildi. `scripts/submit-indexnow.js` adında bir otomasyon betiği yazıldı. Her Vercel build işleminde veya manuel olarak `npm run indexnow` komutu çalıştırıldığında, site haritasındaki tüm URL'ler arama motorlarına "ping" olarak gönderilir.

### C. Gelişmiş Schema Markup (JSON-LD)
- **Ne Yaptık:** Sitenin sadece insanlar tarafından değil, botlar tarafından da anlaşılması için Yapısal Veri (Schema) ağı kuruldu.
- **Arka Plan:** 
  - `BreadcrumbList` (Site Hiyerarşisi Yolu) tüm ana, hizmet, portfolyo ve iletişim sayfalarına entegre edildi.
  - `VideoObject` (Video Şeması) ve `Article` (Makale Şeması) hazırlandı. 
  - Hizmet fiyatlarının olduğu sayfalara `Product` (Ürün) ve hesaplama aracına `SoftwareApplication` (Yazılım Uygulaması) şemaları yerleştirildi.

### D. Performans (Core Web Vitals - LCP)
- **Ne Yaptık:** Sitenin ilk açılış hızını (LCP) maksimize etmek için kritik görseller önden yüklenecek şekilde ayarlandı.
- **Arka Plan:** `index.html` dosyası içerisine `<link rel="preload">` etiketleri eklenerek, sayfa henüz render edilmeden kahraman (hero) görsellerin tarayıcı hafızasına alınması sağlandı.

---

## 2. Kullanıcının / Yöneticinin Tamamlaması Gereken "Manuel" Adımlar (ÖNEMLİ)

Sistemi kod bazında kurmuş olsak da, tam verim alabilmek için dış platformlarda (Google, Yandex vb.) yapmanız gereken doğrulamalar bulunmaktadır. Bunları yapmazsak arka plandaki emek havada kalır:

### 🔴 Adım 1: Google Search Console (GSC) Kontrolleri
Sistem kurulduktan sonra Google'a "ben kodlarımı yeniledim" dememiz gerekiyor.
1. [Google Search Console](https://search.google.com/search-console)'a giriş yapın.
2. Sol menüden **Site Haritaları (Sitemaps)** sekmesine gidin.
3. `https://pikselai.com/sitemap.xml` adresini gönderin. (Zaten gönderiliyse bile "Yeniden Gönder" yapın).
4. Sol menüdeki **Geliştirmeler (Enhancements)** altından "İçerik Yolu (Breadcrumbs)" ve "Logolar" sekmelerinin aktif olduğunu, hata verip vermediğini kontrol edin.

### 🔴 Adım 2: IndexNow ve Bing Webmaster Doğrulaması
IndexNow'un sorunsuz çalışması için arama motorlarının sitenin size ait olduğunu bilmesi gerekir.
1. [Bing Webmaster Tools](https://www.bing.com/webmasters/)'a kayıt olun (Google hesabı ile içeri aktarabilirsiniz).
2. Sağ üst menüden veya sol menüden **IndexNow** sekmesine tıklayın.
3. Bizim projeye eklediğimiz anahtarı görecektir. Eğer manuel anahtar isterse, projeye eklediğimiz şu anahtarı girin: `pikselai-indexnow-key-2026`
4. Bu adımdan sonra yazdığımız `npm run indexnow` komutu gerçek anlamda Bing ve Yandex'e içeriklerinizi anında indeksletecektir.

### 🔴 Adım 3: Yazar Otoritesi (Sosyal Medya Linkleri) Kontrolü
Google'ın "Bekircan Sağnak kimdir?" sorusunu tam yanıtlayabilmesi için;
1. LinkedIn ve Twitter profilinizde mutlaka "PikselAI Kurucusu" veya benzeri bir ibare olduğundan emin olun.
2. Sitenize yönlenen (backlink veren) sosyal medya profillerinizin linklerinin, `SEOHead.tsx` dosyasındaki sosyal medya linkleri ile birebir örtüştüğünden emin olun. (Örn: Instagram URL'iniz değişirse koddan da değiştirin).

---

## 3. Sistem Kurulumu Başarı Testi Nasıl Yapılır?

Kurduğumuz sistemin çalıştığını kendi gözlerinizle test edebilirsiniz:

1. **Zengin Sonuçlar Testi (Rich Results Test):**
   - [Google Zengin Sonuçlar Testi Aracı](https://search.google.com/test/rich-results) sitesine gidin.
   - Herhangi bir sayfanızın URL'sini yapıştırın (Örn: `https://pikselai.com/hizmetler/urun-fotografciligi`).
   - Çıkan raporda yeşil tikli olarak **İçerik Yolu (Breadcrumb)**, **Kuruluş (Organization)** ve bloglar için **Makale (Article)** rozetlerini görmelisiniz.

2. **Otomasyon Testi:**
   - Terminalde (veya VS Code'da) proje dizinindeyken şu komutu çalıştırın:
     `npm run indexnow`
   - Konsolda "IndexNow Ping başarıyla gönderildi: 200 OK" yazısını görüyorsanız, sistem kusursuz bir otomasyonla çalışıyor demektir.

---

## 4. Özet

PikselAI, artık klasik bir React uygulamasından çıkmış, arama motorlarıyla (Google, Bing) ve yapay zeka botlarıyla (ChatGPT, Perplexity vb.) **JSON-LD makine dili üzerinden direkt konuşan** akıllı bir sisteme dönüşmüştür. Yukarıdaki GSC ve Bing Webmaster kayıt adımlarını tamamladığınızda ekosistem %100 kapasiteyle çalışmaya başlayacaktır.
