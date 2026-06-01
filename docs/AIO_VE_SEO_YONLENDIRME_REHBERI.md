# 🚀 PikselAI - AIO (Yapay Zeka Aramaları) & SEO Yönlendirme ve Tetikleme Rehberi

Bu rehber, PikselAI platformundaki portfolyoların, yeni 174 adet kreatif görselin ve yenilenen dürüst metriklerin **Google, ChatGPT Search, Perplexity, Gemini, Yandex ve Bing** gibi geleneksel ve yapay zeka tabanlı arama motorlarında en hızlı şekilde güncellenmesi ve indekslenmesi için hazırlanmıştır.

---

## 🛠️ 1. BİZ NELERİ KODLADIK? (SİSTEM ALTYAPISI)

Yapay zeka arama motorlarının (GEO - Generative Engine Optimization) ve arama botlarının sitenizi kusursuz okuyabilmesi için arka planda şu teknik entegrasyonlar tamamlanmıştır:

### A. Gelişmiş JSON-LD GEO Şeması (Makine Okunabilirliği)
- [Islerimiz.tsx](file:///Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB/src/pages/Islerimiz.tsx) portfolyo sayfasına **`CollectionPage`** ve her bir portfolyo projesi için **`CreativeWork`** entegre edilmiştir.
- Bu JSON-LD makine dili sayesinde, yapay zeka botları (Perplexity, ChatGPT, Gemini) sayfayı tararken görsellerin arkasındaki asıl bağlamı (Örn: "Cazador kış kampanyası", "Rossea editorial sanal manken çekimleri", "PikselAI Lab lüks çanta serisi") doğrudan anlar ve yapay zeka aramalarında bu görselleri referans göstererek kaynağı sitenize bağlar.

### B. Robots.txt OpenAI Arama İzni
- [robots.txt](file:///Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB/public/robots.txt) dosyasına OpenAI'ın en yeni arama motoru botu olan **`OAI-SearchBot`** eklenmiş ve tüm dizine tam erişim yetkisi (`Allow: /`) verilmiştir. Bu sayede ChatGPT Search doğrudan sitenizi tarayabilir.

### C. Dinamik Sitemap & IndexNow Ping Mekanizması
- Projede geliştirilen sitemap otomasyonu sayesinde, her `npm run build` komutunda en güncel 174 adet kreatif WebP görseli otomatik olarak `sitemap.xml` dosyasına Google standartlarında eklenir.
- **IndexNow Ping Betiği:** [submit-indexnow.js](file:///Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB/scripts/submit-indexnow.js) betiği ile tüm site linkleri (statik sayfalar, blog yazıları, müşteri hikayeleri) tek bir komutla Bing ve Yandex API'lerine gönderilir.

---

## ⚡ 2. FOTOĞRAFLARIN İNDEKSLENMESİ İÇİN YAPMANIZ GEREKEN TETİKLEMELER (MANUEL ADIMLAR)

Görsellerin ve yeni dürüst metriklerin arama motorlarında **anında** güncellenmesini tetiklemek için sırasıyla aşağıdaki adımları uygulamanız gerekmektedir:

### 🔴 Adım A: Google Search Console (GSC) Google Botunu Tetikleme
Google, sitenizi periyodik olarak tarar. Ancak yaptığımız büyük portfolyo güncellemesini Google'a anında bildirmek için şu adımları yapmalısınız:
1. **Google Search Console** paneline giriş yapın ([search.google.com/search-console](https://search.google.com/search-console)).
2. Sol menüdeki **Site Haritaları (Sitemaps)** sekmesine tıklayın.
3. `sitemap.xml` adresini yazarak **Gönder (Submit)** butonuna basın. Bu işlem Google botunu site haritasındaki 174 görseli taramaya zorlar.
4. **URL Denetimi (URL Inspection):** Üstteki arama çubuğuna `https://pikselai.com/islerimiz` yazıp aratın.
5. Açılan sayfada **"Dizine Eklenmesini İste" (Request Indexing)** butonuna basın. Bu işlem Google botunu en fazla birkaç saat içinde sayfayı ve içindeki zengin görselleri taraması için kuyruğa alacaktır.

### 🔴 Adım B: Yandex Webmaster Botunu Tetikleme
Yandex, Rusya ve Türkiye'de görsellerde oldukça etkilidir:
1. **Yandex Webmaster** paneline girin ([webmaster.yandex.com](https://webmaster.yandex.com/)).
2. **Indexing > Sitemap files** sekmesine gidip sitemap dosyanızı ekleyin.
3. **Indexing > Reindex pages** sekmesine tıklayarak `https://pikselai.com/islerimiz` adresini kutucuğa ekleyip gönderin. Yandex botu birkaç dakika içinde sitenize uğrayacaktır.

### 🔴 Adım C: Bing Webmaster & Perplexity/ChatGPT Arama Tetiklemesi
Yapay zeka arama motorlarının birçoğu (Perplexity, ChatGPT Search, Bing AI) Bing dizin altyapısını kullanır. Dolayısıyla Bing'i tetiklemek yapay zekayı tetiklemektir:
1. **Bing Webmaster Tools** paneline girin ([bing.com/webmasters](https://www.bing.com/webmasters)).
2. **URL Submission** sekmesine tıklayarak `https://pikselai.com/islerimiz` adresini manuel gönderin.
3. (Biz sizin adınıza **IndexNow** üzerinden tüm 52 URL'i Bing ve Yandex'e başarıyla pingledik. Ancak panel üzerinden manuel istek göndermek süreci %100 garanti altına alır.)

---

## 📈 3. YAPAY ZEKA ARAMALARINDA (ChatGPT, Perplexity) ÇIKMAK İÇİN ALTIN İPUÇLARI

Yapay zeka arama motorları klasik SEO gibi sadece link okumaz, **bağlamsal otoriteye (E-E-A-T)** bakar. Aramalarda PikselAI'ın önerilmesi için şu ek adımları yapmanız çok faydalı olacaktır:
- **Sosyal Medya sameAs Entegrasyonu:** LinkedIn, Instagram ve YouTube hesaplarınızda sitenizin linkini ("pikselai.com") mutlaka profil bio'suna ekleyin. AI botları sosyal kanallardaki linkler ile web sitesindeki şemaları çapraz sorgulayarak doğrulama yapar.
- **Katalog ve PDF İndirmeleri:** AI botları sitenizdeki makine dilini okurken PDF ve katalog gibi zengin dokümanları da tarar. Sitedeki katalog indirme butonlarının aktif olması otoritenizi artırır.

---

*Bu rehber PikselAI'ın dijital arama motoru ve yapay zeka otoritesini maksimuma çıkarmak için AIO Uzmanı protokolleriyle hazırlanmıştır.*
