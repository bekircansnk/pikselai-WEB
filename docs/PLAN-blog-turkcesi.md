# PLAN: Superside Blog İçeriklerinin Türkçe'ye Çevirisi ve Pikselai Entegrasyonu

> **Durum:** ONAY BEKLENİYOR  
> **Oluşturulma:** 23 Nisan 2026  
> **Kapsam:** ~824 HTML kaynak dosyası → Seçilecek ~30-40 öncelikli makale → Türkçe blog sayfaları

---

## 1. GENEL BAKIŞ

Superside'ın blog bölümünden indirilen 824 HTML dosyası `docs/www.superside.com/blog/` klasöründe mevcut. Bu dosyalar İngilizce ve Superside markasına özel. Amacımız:

1. **Pikselai'ın hizmet alanına uygun** içerikleri seçmek (AI prodüksiyon, e-ticaret görseli, sosyal medya, marka tasarımı vb.)
2. İçerikleri **doğal Türkçe'ye** çevirmek (robot çevirisi değil, insan gibi Türkçe konuşma yapısı)
3. "Superside" referanslarını **Pikselai** ile değiştirmek
4. Mevcut `GizliAiOzellikleri.tsx` template'ini temel alarak tüm sayfaları oluşturmak
5. Blog listesi (`Blog.tsx`) ve route'ları (`App.tsx`) otomatik güncellemek

---

## 2. KATEGORİ YAPISI (6 + 1 Kategori)

Superside'ın 7 kategorisi mevcut. Bunları Pikselai diline uyarladık. `customer-stories` kategorisi zaten ayrı bir sayfa olarak (`/musteri-hikayeleri`) var, dolayısıyla blog'dan hariç tutulacak.

| # | Kategori ID | Türkçe Adı | Klasör Yolu | Açıklama |
|---|------------|------------|-------------|----------|
| 1 | `ai-powered-creative` | AI Destekli Yaratıcılık | `src/pages/blog/ai-powered-creative/` | AI araçları, AI tasarım, AI iş akışları |
| 2 | `all-things-brand` | Markaya Dair Her Şey | `src/pages/blog/all-things-brand/` | Marka kimliği, logo, branding, paketleme |
| 3 | `creative-leadership` | Yaratıcı Liderlik | `src/pages/blog/creative-leadership/` | Ekip yönetimi, liderlik, DesignOps |
| 4 | `digital-marketing` | Dijital Pazarlama | `src/pages/blog/digital-marketing/` | Reklam, sosyal medya, performans pazarlama |
| 5 | `inside-superside` | Pikselai'ın İçinden | `src/pages/blog/inside-pikselai/` | Şirket haberleri, kültür, güncellemeler |
| 6 | `video-marketing` | Video Pazarlama | `src/pages/blog/video-marketing/` | Video prodüksiyon, motion, animasyon |

> **NOT:** `customer-stories` kategorisi blog sayfasında kalacak (filtre olarak) fakat içerikleri `/musteri-hikayeleri/` rotasına yönlendirilecek.

---

## 3. TEMPLATE MİMARİSİ (Tekrarlayan Kodlama Engeli)

### 3.1 Mevcut Template: `GizliAiOzellikleri.tsx`

Bu dosya (~290 satır) blog okuma sayfasının "altın standardı" olarak kabul edilecek. Yapısı:

```
├── Helmet (SEO meta)
├── MainLayout wrapper
├── Hero Section (Ortalı başlık + yazar + tarih + okuma süresi)
├── Content Grid (Sol TOC + Sağ Makale)
│   ├── TableOfContents (sticky, IntersectionObserver ile aktif bölüm takibi)
│   ├── Article
│   │   ├── Kahraman görsel (16/8 aspect ratio, rounded)
│   │   ├── Özet (TL;DR kutusu)
│   │   ├── Bölümler (SectionHeading + paragraflar + alt başlıklar)
│   │   └── CTA Kutusu (Pikselai ile Başlayın)
└── Footer
```

### 3.2 Yeniden Kullanılabilir Template Bileşeni Oluşturulacak

> **ÖNERİ:** Her blog yazısı için bütün bu kodu kopyala-yapıştır yapmak yerine, **ortak bir `BlogArticleTemplate.tsx` bileşeni** oluşturulmalı.

**Dosya:** `src/components/blog/BlogArticleTemplate.tsx`

Bu bileşen şu prop'ları alacak:

```typescript
interface BlogArticleProps {
  // SEO
  title: string
  metaDescription: string
  
  // Hero
  category: string
  categoryId: string
  author?: string
  readTime: string
  publishDate?: string
  
  // Kapak görseli
  heroImage: string
  heroImageAlt: string
  
  // İçindekiler
  sections: { id: string; heading: string }[]
  
  // Ana içerik (JSX olarak geçirilecek)
  children: React.ReactNode
  
  // CTA (opsiyonel özelleştirme)
  ctaTitle?: string
  ctaDescription?: string
}
```

**Avantajlar:**
- Her yeni blog yazısı sadece **içerik verisi + JSX metin** ile oluşturulacak
- Layout, TOC, Hero, CTA kutusu otomatik gelecek
- Tasarım değişikliği tek bir yerden yapılacak

### 3.3 Tek Bir Blog Yazısının Yapısı

Her blog dosyası (~150-250 satır) şöyle görünecek:

```tsx
// src/pages/blog/ai-powered-creative/AiTasarimTrendleri.tsx
import BlogArticleTemplate from '../../../components/blog/BlogArticleTemplate'

const SECTIONS = [
  { id: "giris", heading: "Giriş" },
  { id: "trend-1", heading: "1. Generative AI ile Ölçeklenebilir Tasarım" },
  // ...
]

export default function AiTasarimTrendleri() {
  return (
    <BlogArticleTemplate
      title="2026'da Öne Çıkan AI Tasarım Trendleri"
      metaDescription="..."
      category="AI Destekli Yaratıcılık"
      categoryId="ai-powered-creative"
      readTime="10 dk"
      heroImage="https://cdn.sanity.io/..."
      heroImageAlt="AI Tasarım Trendleri"
      sections={SECTIONS}
    >
      {/* Sadece metin içeriği */}
      <div id="giris" className="scroll-mt-32 space-y-8">
        <p>Paragraf içeriği...</p>
      </div>
      {/* ... diğer bölümler */}
    </BlogArticleTemplate>
  )
}
```

---

## 4. ÖNCELİKLENDİRİLMİŞ BLOG YAZILAR LİSTESİ

824 dosyadan **Pikselai'ın hizmet alanına doğrudan uygun** olanları seçtim. Öncelik sırası:

### 🔴 Phase 1: İlk 10 Makale (En Yüksek Öncelik - Pikselai Odaklı)

Bu makaleler Pikselai'ın doğrudan hizmet alanıyla birebir örtüşüyor:

| # | Kaynak HTML | Türkçe Başlık Önerisi | Kategori | Slug |
|---|------------|----------------------|----------|------|
| 1 | `hidden-ai-tools.html` | ✅ **ZATEN MEVCUT** (`GizliAiOzellikleri.tsx`) | ai-powered-creative | `/blog/gizli-ai-ozellikleri` |
| 2 | `ai-design-trends.html` | AI Tasarım Trendleri: 2026'da Bilmeniz Gereken Her Şey | ai-powered-creative | `/blog/ai-tasarim-trendleri` |
| 3 | `ai-design-tools.html` | En İyi AI Tasarım Araçları: Kapsamlı Rehber | ai-powered-creative | `/blog/ai-tasarim-araclari` |
| 4 | `ai-image-generation-examples.html` | AI Görsel Üretimi: Örnekler ve En İyi Uygulamalar | ai-powered-creative | `/blog/ai-gorsel-uretimi-ornekleri` |
| 5 | `ai-in-design.html` | Tasarımda Yapay Zeka: Nerede, Nasıl ve Neden? | ai-powered-creative | `/blog/tasarimda-yapay-zeka` |
| 6 | `ai-content-repurposing-for-social-media.html` | Sosyal Medya İçin AI ile İçerik Dönüştürme | digital-marketing | `/blog/sosyal-medya-icerik-donusturme` |
| 7 | `brand-identity.html` | Marka Kimliği Oluşturma Rehberi | all-things-brand | `/blog/marka-kimligi-rehberi` |
| 8 | `social-media-design-trends.html` | Sosyal Medya Tasarım Trendleri | digital-marketing | `/blog/sosyal-medya-tasarim-trendleri` |
| 9 | `ai-creative-workflows.html` | AI Yaratıcı İş Akışları: Verimlilik Rehberi | ai-powered-creative | `/blog/ai-yaratici-is-akislari` |
| 10 | `how-to-use-ai-in-graphic-design.html` | Grafik Tasarımda AI Nasıl Kullanılır? | ai-powered-creative | `/blog/grafik-tasarimda-ai` |

### 🟡 Phase 2: Sonraki 10 Makale (Yüksek Öncelik)

| # | Kaynak HTML | Türkçe Başlık Önerisi | Kategori | Slug |
|---|------------|----------------------|----------|------|
| 11 | `ai-ad-creative-examples.html` | AI Reklam Görselleri: İlham Veren Örnekler | digital-marketing | `/blog/ai-reklam-gorselleri` |
| 12 | `advertising-creative-trends.html` | Reklam Yaratıcılık Trendleri | digital-marketing | `/blog/reklam-yaraticilik-trendleri` |
| 13 | `create-ad-creative-ai.html` | AI ile Reklam Görseli Oluşturma | digital-marketing | `/blog/ai-reklam-gorseli-olusturma` |
| 14 | `brand-design-trends.html` | Marka Tasarım Trendleri | all-things-brand | `/blog/marka-tasarim-trendleri` |
| 15 | `branding-guide.html` | Kapsamlı Markalaşma Rehberi | all-things-brand | `/blog/markalasma-rehberi` |
| 16 | `creative-leadership.html` | Yaratıcı Liderlik: Ekipleri Yönetme Sanatı | creative-leadership | `/blog/yaratici-liderlik` |
| 17 | `design-systems.html` | Tasarım Sistemleri: Nedir ve Neden Önemli? | all-things-brand | `/blog/tasarim-sistemleri` |
| 18 | `ecommerce-website-design.html` | E-Ticaret Web Tasarımı: En İyi Uygulamalar | all-things-brand | `/blog/eticaret-web-tasarimi` |
| 19 | `video-marketing-strategy.html` | Video Pazarlama Stratejisi Oluşturma | video-marketing | `/blog/video-pazarlama-stratejisi` |
| 20 | `motion-graphic-examples.html` | İlham Veren Motion Grafik Örnekleri | video-marketing | `/blog/motion-grafik-ornekleri` |

### 🟢 Phase 3: Kalan 10-20 Makale (Normal Öncelik)

| # | Kaynak HTML | Türkçe Başlık Önerisi | Kategori |
|---|------------|----------------------|----------|
| 21 | `ai-video-generators.html` | En İyi AI Video Oluşturma Araçları | video-marketing |
| 22 | `ai-email-marketing.html` | AI ile E-posta Pazarlama | digital-marketing |
| 23 | `social-media-campaigns.html` | Başarılı Sosyal Medya Kampanyaları | digital-marketing |
| 24 | `packaging-designs.html` | En İyi Ambalaj Tasarım Örnekleri | all-things-brand |
| 25 | `logo-design-tips-tricks.html` | Logo Tasarımı İpuçları ve Tüyolar | all-things-brand |
| 26 | `creative-at-scale.html` | Ölçeklenebilir Yaratıcı Üretim | creative-leadership |
| 27 | `ai-powered-agencies.html` | AI Destekli Ajanslar: Geleceğin Modeli | ai-powered-creative |
| 28 | `color-branding.html` | Renklerin Markalaşmadaki Gücü | all-things-brand |
| 29 | `content-marketing-examples.html` | En İyi İçerik Pazarlama Örnekleri | digital-marketing |
| 30 | `how-to-create-videos-with-ai.html` | AI ile Video Nasıl Oluşturulur? | video-marketing |

> **Toplam ilk etapta hedef: 30 blog yazısı** (Mevcut 1 + Yeni 29)

---

## 5. ÇEVİRİ KURALLARI

### 5.1 Türkçe Dil Standartları

1. **İnsan gibi konuşma:** "Yapay zeka destekli çözümler kullanarak..." DEĞİL → "Yapay zeka araçlarını kullanarak işlerinizi hızlandırabilirsiniz" GİBİ
2. **Cümle uzunluğu:** Kısa, öz ve vurucu. Uzun İngilizce cümleleri kısalt.
3. **Teknik terimler:** AI, SEO, ROI gibi evrensel kısaltmalar aynen kalır. Ancak "design system" → "tasarım sistemi" gibi Türkçe karşılığı olanlar çevrilir.
4. **Marka dönüşümü:** "Superside" → "Pikselai", "Superspace" → "Pikselai Platformu"
5. **CTA metinleri:** Her makalenin sonunda Pikselai'a yönlendiren CTA kutusu bulunacak.
6. **Tarih ve sayılar:** "2024" gibi eski tarihler → "2026" olarak güncellenir.

### 5.2 İçerik Uyarlama Kuralları

- **Superside'a özel referanslar** (Superspace, "our team" vb.) → Pikselai bağlamına uyarlanacak
- **Case study referansları** (Reddit, Amazon vb.) → İçeriğe katkısı varsa kalır, yoksa çıkarılır
- **Rekabetçi listeleme** yazıları (ör: "10 En İyi Ajans") → Pikselai'ı vurgulayan bölüm eklenir
- **Görseller:** Superside CDN linklerinden alınan görseller (sanity.io) aynen kullanılabilir; daha sonra optimize edilip `public/` altına taşınacak

---

## 6. UYGULAMA FAZLARI

### Phase 0: Temel Altyapı (1 oturum)

- [ ] `BlogArticleTemplate.tsx` bileşeni oluştur
- [ ] Mevcut `GizliAiOzellikleri.tsx` dosyasını bu template'i kullanacak şekilde refactor et
- [ ] Her kategori için boş klasör yapısını oluştur
- [ ] `App.tsx`'e lazy-load route kalıplarını ekle
- [ ] `Blog.tsx`'teki `POSTS` dizisini merkezi bir veri dosyasına (`src/data/blogPosts.ts`) taşı

### Phase 1: İlk 10 Makale (2-3 oturum)

Her makale için:
1. Kaynak HTML dosyasını oku (`docs/www.superside.com/blog/{slug}.html`)
2. İçeriği parse et (başlıklar, paragraflar, alt başlıklar, görseller)
3. Doğal Türkçe'ye çevir
4. TSX dosyası oluştur (BlogArticleTemplate kullanarak)
5. `blogPosts.ts` veri dosyasına ekle
6. Route tanımını `App.tsx`'e ekle
7. Build kontrolü (`tsc --noEmit`)

**İş sırası (makale numaralarıyla):**
```
Oturum 1: Template + #2, #3, #4 (AI odaklı, 3 makale)
Oturum 2: #5, #6, #7, #8 (AI + Dijital + Marka, 4 makale)
Oturum 3: #9, #10 + Build & Git Push (2 makale + final kontrol)
```

### Phase 2: Sonraki 10 Makale (2-3 oturum)

```
Oturum 4: #11, #12, #13, #14 (Dijital Pazarlama ağırlıklı)
Oturum 5: #15, #16, #17, #18 (Marka + Liderlik + E-ticaret)
Oturum 6: #19, #20 + Build & Git Push (Video Pazarlama)
```

### Phase 3: Kalan Makaleler (2-3 oturum)

```
Oturum 7: #21-#25 (Çeşitli kategoriler)
Oturum 8: #26-#30 + Build & Git Push (Son batch)
```

### Phase 4: Final Kontrol ve Polish (1 oturum)

- [ ] Tüm rotaların çalıştığını doğrula
- [ ] Blog listesinin doğru filtrelendiğini kontrol et
- [ ] SEO meta verileri kontrol et
- [ ] Tüm görsellerin yüklendiğini doğrula
- [ ] Final build + GitHub push

---

## 7. DOSYA YAPISI (Son Hali)

```
src/
├── components/
│   └── blog/
│       └── BlogArticleTemplate.tsx          ← [YENİ] Ortak template
│
├── data/
│   └── blogPosts.ts                         ← [YENİ] Merkezi blog veri dosyası
│
├── pages/
│   ├── Blog.tsx                             ← [GÜNCELLE] POSTS'u import et
│   │
│   └── blog/
│       ├── ai-powered-creative/
│       │   ├── GizliAiOzellikleri.tsx        ← [MEVCUT → REFACTOR]
│       │   ├── AiTasarimTrendleri.tsx        ← [YENİ]
│       │   ├── AiTasarimAraclari.tsx         ← [YENİ]
│       │   ├── AiGorselUretimiOrnekleri.tsx  ← [YENİ]
│       │   ├── TasarimdaYapayZeka.tsx        ← [YENİ]
│       │   ├── AiYaraticiIsAkislari.tsx      ← [YENİ]
│       │   ├── GrafikTasarimdaAi.tsx         ← [YENİ]
│       │   └── AiDestekliAjanslar.tsx        ← [YENİ]
│       │
│       ├── all-things-brand/
│       │   ├── MarkaKimligiRehberi.tsx       ← [YENİ]
│       │   ├── MarkaTasarimTrendleri.tsx     ← [YENİ]
│       │   ├── MarkalasmaRehberi.tsx         ← [YENİ]
│       │   ├── TasarimSistemleri.tsx         ← [YENİ]
│       │   ├── EticaretWebTasarimi.tsx       ← [YENİ]
│       │   ├── AmbalajTasarimOrnekleri.tsx   ← [YENİ]
│       │   ├── LogoTasarimiIpuclari.tsx      ← [YENİ]
│       │   └── RenklerinMarkalasmadakiGucu.tsx ← [YENİ]
│       │
│       ├── creative-leadership/
│       │   ├── YaraticiLiderlik.tsx          ← [YENİ]
│       │   └── OlceklenebilirYaraticiUretim.tsx ← [YENİ]
│       │
│       ├── digital-marketing/
│       │   ├── SosyalMedyaIcerikDonusturme.tsx  ← [YENİ]
│       │   ├── SosyalMedyaTasarimTrendleri.tsx  ← [YENİ]
│       │   ├── AiReklamGorselleri.tsx            ← [YENİ]
│       │   ├── ReklamYaraticilikTrendleri.tsx    ← [YENİ]
│       │   ├── AiReklamGorseliOlusturma.tsx      ← [YENİ]
│       │   ├── AiEpostaPazarlama.tsx             ← [YENİ]
│       │   ├── SosyalMedyaKampanyalari.tsx       ← [YENİ]
│       │   └── IcerikPazarlamaOrnekleri.tsx      ← [YENİ]
│       │
│       ├── inside-pikselai/
│       │   └── (Phase 3'te doldurulacak)
│       │
│       └── video-marketing/
│           ├── VideoPazarlamaStratejisi.tsx   ← [YENİ]
│           ├── MotionGrafikOrnekleri.tsx      ← [YENİ]
│           ├── AiVideoOlusturmaAraclari.tsx   ← [YENİ]
│           └── AiIleVideoOlusturma.tsx        ← [YENİ]
```

---

## 8. TEKNİK KARAR NOKTALARI

### ✅ Kabul Edilen Kararlar
- **Template bileşeni kullanılacak** (her seferinde 290 satır kopyalamak yerine)
- **Görseller:** İlk aşamada Sanity CDN'den kullanılacak, daha sonra optimize edilecek
- **Routing:** Lazy load ile (`React.lazy`)
- **Kategori verileri:** Merkezi `blogPosts.ts` dosyasından yönetilecek

### ❓ Kullanıcıdan Onay Beklenen Kararlar

1. **Makale seçimi:** Yukarıdaki 30 makale listesi uygun mu? Eklenmesini/çıkarılmasını istediğin var mı?
2. **"Inside Pikselai" kategorisi:** Bu kategoriye ne tür içerikler eklemek istiyorsun? (Şirket haberleri, kültür yazıları vb.)
3. **Görseller:** Superside CDN'den mi devam edelim yoksa görselleri indirip `public/` altına mı koyalım?
4. **Blog yazı sayısı:** İlk etapta 30 makale hedefi doğru mu? Daha az/çok mu olsun?

---

## 9. KALİTE KONTROL KURALLARI

Her oturumun sonunda:

1. `npx tsc --noEmit` → Sıfır TypeScript hatası
2. `npm run build` → Başarılı Vite build
3. Tüm yeni rotaların tarayıcıda açıldığını doğrula
4. TOC (İçindekiler) navigasyonunun çalıştığını doğrula
5. Blog listesindeki yeni yazıların doğru kategoride gözüktüğünü doğrula
6. `git add`, `git commit`, `git push` → GitHub'a yükle

---

## 10. TAŞINACAK KODLAMA AJANINA TALİMATLAR

Kodlama ajanı şu adımları takip edecek:

```
1. Bu planı oku ve anla
2. Phase 0: BlogArticleTemplate.tsx oluştur
3. GizliAiOzellikleri.tsx'i refactor et (template kullansın)
4. blogPosts.ts merkezi veri dosyasını oluştur
5. Phase 1'deki makaleleri sırayla işle:
   a. docs/www.superside.com/blog/{slug}.html dosyasını oku
   b. İçeriği parse et (metin, başlıklar, görseller)
   c. Doğal Türkçe'ye çevir (robot değil, insan gibi)
   d. "Superside" → "Pikselai" dönüşümü yap
   e. TSX dosyası oluştur (BlogArticleTemplate kullanarak)
   f. blogPosts.ts'ye ekle
   g. App.tsx'e route ekle
   h. Build kontrol et
6. Her 4-5 makale sonrası git commit + push
7. Phase 2 ve 3'ü aynı şekilde tamamla
8. Final kontrol ve push
```

### Çeviri Yaklaşımı (Ajan İçin Detay)

```
❌ YANLIŞ: "AI-powered creative workflows can help your team scale production."
          → "AI destekli yaratıcı iş akışları ekibinizin üretimi ölçeklendirmesine yardımcı olabilir."

✅ DOĞRU:  → "Yapay zeka destekli iş akışlarıyla ekibiniz, üretim kapasitesini 
             kolayca katlayabilir. Biz Pikselai'da bunu her gün yapıyoruz."
```

- Cümleleri kısa tut
- Pasif yapı yerine aktif yapı kullan
- Türkçe konuşma kalıplarına sadık kal
- Her makale sonunda Pikselai CTA'sı ekle
- Tarih referanslarını güncelle (2024 → 2026)

---

> **Sonraki adım:** Bu planı incele. Onay verdiğinde kodlama ajanı Phase 0'dan başlayarak çalışmaya geçecek.
