# 🎯 PikselAI — Kapsamlı SEO Dönüşüm Planı

Pikselai.com web sitesinin Google aramalarda, AI aramalarında ve tüm arama motorlarında **birinci sıralara** çıkması için baştan aşağı SEO mimarisi revizyonu.

---

## 📊 Mevcut Durum Analizi — KRİTİK BULGULAR

### ❌ Tespit Edilen SEO Sorunları

| # | Sorun | Önem | Etki |
|---|-------|------|------|
| 1 | **SPA (Tek Sayfa Uygulama) — Pre-rendering YOK** | 🔴 KRİTİK | Google botu JS render etmekte gecikiyor; sayfalar indekslenemeyebilir |
| 2 | **Sitemap.xml eskimiş** — 34 blog + 4 müşteri hikayesi dahil DEĞİL | 🔴 KRİTİK | Google bu sayfaların varlığından haberdar değil |
| 3 | **Blog URL'leri İngilizce** — `/blog/ai-powered-creative/`, `/blog/digital-marketing/` | 🟡 YÜKSEK | Türkçe arama sorgularıyla URL eşleşmiyor |
| 4 | **Sayfalarda Helmet (title/description) EKSİK** — HomeYeni, About, Contact, EticaretYeni vb. | 🔴 KRİTİK | Google her sayfa için aynı fallback title gösteriyor |
| 5 | **Canonical tag YOK** — Hiçbir sayfada yok | 🔴 KRİTİK | Duplicate content riski |
| 6 | **Open Graph / Twitter Card YOK** — Sadece index.html'de var, SPA'da güncellenmez | 🟡 YÜKSEK | Sosyal medya paylaşımlarında yanlış önizleme |
| 7 | **JSON-LD yapısal veri YOK** — Blog makalelerinde Article schema yok | 🔴 KRİTİK | Rich snippet (zengin sonuç) gösterimi mümkün değil |
| 8 | **robots.txt AI botlarını engelliyor** — GPTBot, Claude, CCBot hepsi `Disallow: /` | 🟡 YÜKSEK | AI aramalarda (ChatGPT, Perplexity, Claude) çıkamıyorsun |
| 9 | **Müşteri hikayeleri URL yapısı marka adını içermiyor** — `/musteri-hikayeleri/referanslar` (Cazador için) | 🟡 ORTA | "Cazador hakkında" aramasında URL sinyal vermiyor |
| 10 | **Blog sayfasında Helmet YOK** — Blog.tsx ana sayfa Helmet kullanmıyor | 🔴 KRİTİK | Google'da "/blog" sayfası doğru başlıkla indekslenmiyor |
| 11 | **Müşteri Hikayeleri sayfasında Helmet YOK** | 🔴 KRİTİK | Aynı sorun |
| 12 | **Dahili bağlantılar (internal links) eksik** — Blog yazıları birbirine, müşteri hikayelerine link vermiyor | 🟡 ORTA | SEO juice akışı zayıf |
| 13 | **Google Search Console doğrulaması yorum satırında** — `google-site-verification` kapalı | 🔴 KRİTİK | Google indekslemeyi doğrulayamıyor olabilir |
| 14 | **lastmod tarihleri 2026-02-22** — Sitemap'teki tüm tarihler eski | 🟡 ORTA | Google tazelik sinyali alamıyor |
| 15 | **`hreflang` tag'i yok** — Gelecekte çok dilli yapı için temel atılmamış | ⚪ DÜŞÜK | Şu an tek dil olduğu için acil değil |

### ✅ İyi Olan Şeyler

- `react-helmet-async` ve `HelmetProvider` kurulu → Sadece sayfalara eklemek lazım
- `<html lang="tr">` doğru
- Blog yazıları detaylı ve kaliteli Türkçe içerik → İçerik tarafı güçlü
- Vercel'de rewrites SPA fallback kurulu → SEO pre-render eklenince sorunsuz çalışır
- Favicon ve manifest doğru yapılandırılmış
- Temel JSON-LD (ProfessionalService) index.html'de var

---

## 🔧 User Review Required

> [!IMPORTANT]
> **Blog URL Değişikliği Kararı:** Blog kategorilerindeki İngilizce slug'lar (`ai-powered-creative`, `digital-marketing` vb.) Türkçe'ye çevrilecek. Bu, mevcut Google indeksinde varsa URL'lerin değişmesi demek. 301 redirect'ler ekleyeceğiz ama **daha önce bu URL'ler indekslenmiş mi?** Eğer Google Search Console'da bu URL'ler indeksli görünüyorsa, redirect kurmamız kritik. Siten yeni yayına geçtiyse bu sorun değil.

> [!WARNING]
> **AI Bot Engellemesi:** Şu an `robots.txt`'te GPTBot, ChatGPT-User, Claude, CCBot hepsi engellenmiş. Senin amacın "yapay zeka ile aratıldığında bile çıkmak" olduğuna göre, **bu engelleri kaldırmamız gerekiyor**. Onay veriyor musun?

> [!IMPORTANT]
> **Pre-rendering Yöntemi:** SPA sitelerde Google SEO için en kritik adım pre-rendering. İki seçenek var:
> 1. **`react-snap`** → Build sırasında statik HTML üretir (basit, hızlı) 
> 2. **Vercel ISR / SSR'e geçiş** → Next.js'e taşıma (karmaşık ama en iyi SEO)
> 
> Şu an için **react-snap** veya benzeri bir **Vite prerender eklentisi** ile devam etmeni öneriyorum. Bu en az riskli ve en hızlı çözüm.

---

## 📋 Open Questions

> [!IMPORTANT]
> 1. **Google Search Console** bağlı mı? `google-site-verification` meta tag'i yorum satırında — doğrulama kodun var mı?
> 2. **Google Analytics veya Tag Manager** kullanıyor musun? Varsa entegre etmemiz lazım.
> 3. **Bing Webmaster Tools** doğrulaması `754796BEE9929704663E6E1514D6A332` olarak var — bu aktif mi?
> 4. **Blog kategorileri Türkçe slug önerileri** aşağıdaki gibi olacak, uygun mu?

| Mevcut (İngilizce) | Önerilen (Türkçe) |
|---|---|
| `ai-powered-creative` | `yapay-zeka-yaraticilik` |
| `all-things-brand` | `marka-rehberi` |
| `creative-leadership` | `yaratici-liderlik` |
| `digital-marketing` | `dijital-pazarlama` |
| `inside-pikselai` | `pikselainin-icinden` |
| `video-marketing` | `video-pazarlama` |

> 5. **Cazador müşteri hikayesi URL'si** `/musteri-hikayeleri/referanslar` → `/musteri-hikayeleri/cazador` olarak değiştirilsin mi? Bu, "cazador hakkında" aramasında çıkman için önemli.

---

## 🚀 Proposed Changes — 5 Fazlı SEO Dönüşüm

---

### **FAZ 1 — Teknik SEO Altyapısı** (Temel)

Bu faz olmadan diğer hiçbir şey işe yaramaz. Google'ın sayfaları görebilmesinin ve indeksleyebilmesinin temelini atıyoruz.

#### [NEW] `src/components/seo/SEOHead.tsx`
Tüm sayfalar için merkezi SEO bileşeni. Her sayfaya `<Helmet>` ile:
- Dinamik `<title>` ve `<meta description>`
- `<link rel="canonical">` 
- Open Graph tag'leri (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tag'leri
- JSON-LD yapısal veri inject noktası
- `hreflang` desteği (gelecek için)

```tsx
// Kullanım örneği:
<SEOHead
  title="Cazador Dijital Dönüşüm Hikayesi"
  description="Cazador'un Pikselai ile gerçekleştirdiği yapay zeka destekli dijital dönüşüm hikayesi."
  canonical="/musteri-hikayeleri/cazador"
  ogImage="/assets/brands/cazador/ai_cazador.webp"
  ogType="article"
  jsonLd={articleSchema}
/>
```

#### [NEW] `scripts/generate-sitemap.ts`
Build sırasında otomatik sitemap oluşturan script:
- `src/App.tsx`'teki tüm route'ları tarar
- `src/data/blogPosts.ts`'teki tüm blog yazılarını dahil eder
- Müşteri hikayelerini dahil eder
- Her URL için doğru `lastmod`, `priority`, `changefreq` atar
- `npm run build` öncesinde otomatik çalışır

#### [MODIFY] `public/robots.txt`
- AI bot engellerini kaldır (GPTBot, ChatGPT-User, Claude-Web, CCBot, anthropic-ai)
- `Allow: /blog/` ve `Allow: /musteri-hikayeleri/` ekle
- Sitemap referansını koru

#### [MODIFY] `public/sitemap.xml`
- Script tarafından otomatik üretilecek
- 34 blog yazısı + 4 müşteri hikayesi + tüm ana sayfalar dahil
- Toplam ~50+ URL

#### [MODIFY] `index.html`
- `google-site-verification` aktifleştir (kodun varsa)
- Fallback noscript içeriğini zenginleştir
- `<meta name="keywords">` güncelle (daha spesifik Türkçe anahtar kelimeler)

#### [NEW] Vite Pre-render Eklentisi Entegrasyonu
`vite-plugin-prerender` veya `vite-ssg` ile build çıktısına statik HTML sayfalar eklenmesi:
- Her route için bir `.html` dosyası
- Google botu JS render etmeden içeriği görebilir
- **SEO için en kritik adım**

#### [MODIFY] `vercel.json`
- Pre-render'ın ürettiği statik HTML dosyalarının öncelikli sunulması
- Gerekirse `headers` ile cache kontrol eklenmesi

---

### **FAZ 2 — Blog URL Türkçeleştirme & Redirect Altyapısı**

#### [MODIFY] `src/data/blogPosts.ts`
Tüm `catId` ve `link` alanlarında İngilizce slug'ları Türkçe ile değiştir:

```diff
- catId: "ai-powered-creative"
+ catId: "yapay-zeka-yaraticilik"

- link: "/blog/ai-powered-creative/gizli-ai-ozellikleri"
+ link: "/blog/yapay-zeka-yaraticilik/gizli-ai-ozellikleri"
```

#### [MODIFY] `src/App.tsx`
Tüm blog route path'lerini Türkçeleştir:
```diff
- <Route path="/blog/ai-powered-creative/gizli-ai-ozellikleri" .../>
+ <Route path="/blog/yapay-zeka-yaraticilik/gizli-ai-ozellikleri" .../>
```

#### [MODIFY] Blog klasör yapısı (`src/pages/blog/`)
Klasör isimlerini Türkçeleştir:
- `ai-powered-creative/` → `yapay-zeka-yaraticilik/`
- `all-things-brand/` → `marka-rehberi/`
- `creative-leadership/` → `yaratici-liderlik/`
- `digital-marketing/` → `dijital-pazarlama/`
- `inside-pikselai/` → `pikselainin-icinden/`
- `video-marketing/` → `video-pazarlama/`

#### [MODIFY] `src/components/blog/BlogArticleTemplate.tsx`
- Sidebar'daki kategori linklerini Türkçe slug'lara güncelle
- Breadcrumb navigasyonu ekle (SEO ve kullanıcı deneyimi)

#### [MODIFY] Müşteri Hikayeleri URL'leri
```diff
- /musteri-hikayeleri/referanslar  (Cazador)
+ /musteri-hikayeleri/cazador

- (diğerleri zaten marka adıyla)
```

#### [NEW] `public/_redirects` güncelleme
Eski İngilizce URL'lerden yeni Türkçe URL'lere 301 redirect kuralları:
```
/blog/ai-powered-creative/*  /blog/yapay-zeka-yaraticilik/:splat  301
/blog/digital-marketing/*     /blog/dijital-pazarlama/:splat      301
...
```

---

### **FAZ 3 — Her Sayfaya SEO Bileşeni Eklenmesi**

Aşağıdaki her sayfaya `<SEOHead>` bileşeni eklenecek:

| Sayfa | Mevcut Durum | Yapılacak |
|-------|-------------|-----------|
| `HomeYeni.tsx` | ❌ Helmet YOK | Title, description, JSON-LD (LocalBusiness + WebSite) |
| `About.tsx` | ❌ Helmet YOK | Title, description, JSON-LD (AboutPage) |
| `Contact.tsx` | ❌ Helmet YOK | Title, description, JSON-LD (ContactPage) |
| `Pricing.tsx` | ✅ Helmet var ama eksik | canonical, OG, JSON-LD ekle |
| `Blog.tsx` | ❌ Helmet YOK | Title, description, JSON-LD (Blog) |
| `MusteriHikayeleri.tsx` | ❌ Helmet YOK | Title, description, OG |
| `AiProductionYeni.tsx` | ❌ Helmet YOK | Hizmet sayfası SEO |
| `EticaretYeni.tsx` | ❌ Helmet YOK | Hizmet sayfası SEO |
| `SosyalMedyaYeni.tsx` | ❌ Helmet YOK | Hizmet sayfası SEO |
| `CreativeDesign.tsx` | ❌ Helmet YOK | Hizmet sayfası SEO |
| `Islerimiz.tsx` | ❌ Helmet YOK | Portföy sayfası SEO |
| `CostCalculator.tsx` | ❌ Helmet YOK | Fiyat hesaplama SEO |
| Blog yazıları (34 adet) | ✅ Title+desc var | canonical, OG, JSON-LD (Article) ekle |
| Müşteri hikayeleri (4 adet) | ✅ Title+desc var | canonical, OG, JSON-LD (Article) ekle |
| Legal sayfaları | ❌ Kontrol gerekli | Title, description, noindex |

---

### **FAZ 4 — Yapısal Veri (JSON-LD) ve Rich Snippets**

Google'da zengin sonuçlar (yıldızlar, breadcrumb, FAQ, article snippet) gösterilmesi için:

#### Her Blog Yazısına `Article` Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cazador Dijital Dönüşüm Hikayesi",
  "author": { "@type": "Organization", "name": "Pikselai" },
  "publisher": { "@type": "Organization", "name": "Pikselai", "logo": "..." },
  "datePublished": "2026-04-23",
  "image": "https://pikselai.com/assets/...",
  "description": "..."
}
```

#### Blog Listesi İçin `BlogPosting` + `ItemList` Schema

#### Ana Sayfaya `WebSite` + `SearchAction` Schema:
```json
{
  "@type": "WebSite",
  "url": "https://pikselai.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pikselai.com/blog?q={search_term}",
    "query-input": "required name=search_term"
  }
}
```

#### FAQ Schema — Fiyatlandırma ve Hizmet Sayfalarına:
Google'da direkt cevap kutusu olarak çıkma şansı.

#### `BreadcrumbList` Schema — Tüm sayfalara:
Google'da sayfa hiyerarşisi gösterimi.

#### Müşteri Hikayelerine `CaseStudy` / `Article` Schema:
"Cazador hakkında" aramasında zengin snippet gösterimi.

---

### **FAZ 5 — İçerik SEO Optimizasyonu**

#### Blog Yazıları Arası Dahili Bağlantılar
- Her blog yazısının sonuna "İlgili Yazılar" bölümü
- Blog template'ine otomatik ilişkili yazı önerisi
- Müşteri hikayelerine blog yazılarından link

#### Müşteri Hikayelerini Blog'la Birleştirme
- `AiPazarlamaKampanyalari.tsx` yazısındaki Cazador, Venus, Campandmap bölümlerinden ilgili müşteri hikayelerine link
- Her müşteri hikayesine ilgili blog yazılarından link

#### Meta Description Optimizasyonu
- Her blog yazısı için 150-160 karakter sınırında, anahtar kelime içeren, tıklamaya teşvik eden description
- CTA içeren description'lar ("Hemen keşfedin", "Detaylı rehber" gibi)

#### Blog Yazısı İçi SEO İyileştirmeleri
- `<img>` tag'lerine anlamlı `alt` text'ler
- Her blog yazısına tarih bilgisi (datePublished)
- Yazar bilgisi zenginleştirme

---

## 📁 Etkilenen Dosya Özeti

| Dosya/Klasör | İşlem |
|---|---|
| `src/components/seo/SEOHead.tsx` | YENİ — Merkezi SEO bileşeni |
| `scripts/generate-sitemap.ts` | YENİ — Otomatik sitemap üretici |
| `public/robots.txt` | GÜNCELLE — AI botları aç |
| `public/sitemap.xml` | GÜNCELLE — 50+ URL dahil et |
| `index.html` | GÜNCELLE — GSC doğrulama, keywords |
| `vercel.json` | GÜNCELLE — Pre-render headers |
| `public/_redirects` | GÜNCELLE — 301 redirect kuralları |
| `src/data/blogPosts.ts` | GÜNCELLE — Türkçe slug'lar |
| `src/App.tsx` | GÜNCELLE — Türkçe route'lar |
| `src/pages/blog/*` | GÜNCELLE — Klasör yeniden adlandırma |
| `src/components/blog/BlogArticleTemplate.tsx` | GÜNCELLE — SEO + breadcrumb |
| Ana sayfalar (12 adet) | GÜNCELLE — SEOHead ekleme |
| Blog yazıları (34 adet) | GÜNCELLE — JSON-LD + canonical + OG |
| Müşteri hikayeleri (4 adet) | GÜNCELLE — JSON-LD + canonical + OG + URL |
| `package.json` | GÜNCELLE — Pre-render bağımlılığı |
| `vite.config.ts` | GÜNCELLE — Pre-render eklentisi |

---

## ✅ Verification Plan

### Otomatik Testler
1. `npm run build` — TypeScript hata kontrolü
2. Üretilen sitemap.xml'i doğrula — tüm URL'ler mevcut mu?
3. Pre-render çıktılarını kontrol et — her sayfa için HTML var mı?
4. 301 redirect'lerin çalıştığını test et

### Manuel Doğrulama
1. Google Rich Results Test aracı ile JSON-LD doğrulama
2. Google Mobile-Friendly Test
3. Lighthouse SEO skoru kontrolü (hedef: 95+)
4. Sosyal medya paylaşım önizlemesi kontrolü (OG tag'ler)
5. [Google Search Console'a sitemap yeniden gönderme]

### SEO İzleme (Deploy Sonrası)
1. Google Search Console'da indeksleme durumu
2. "pikselai" aramasında pozisyon takibi
3. "cazador dijital dönüşüm" gibi marka aramalarında görünürlük
4. Core Web Vitals skoru

---

## 📅 Tahmini Süre

| Faz | Süre |
|-----|------|
| Faz 1 — Teknik Altyapı | ~2-3 saat |
| Faz 2 — URL Türkçeleştirme | ~1-2 saat |
| Faz 3 — SEOHead Ekleme | ~2-3 saat |
| Faz 4 — JSON-LD Schema | ~1-2 saat |
| Faz 5 — İçerik Optimizasyonu | ~1-2 saat |
| **TOPLAM** | **~7-12 saat** |
