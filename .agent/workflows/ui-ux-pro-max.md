---
description: Plan and implement UI
---

# UI/UX Pro Max - Tasarım Zekası

UI stilleri, renk paletleri, yazı tipi eşleşmeleri, grafik türleri, ürün önerileri, UX yönergeleri ve yığına özgü en iyi uygulamalar için aranabilir veritabanı.

## Gereksinimler

Python yüklü olup olmadığını kontrol et:

```bash
python3 --version || python --version
```

Eğer Python yüklü değilse, kullanıcının işletim sistemine göre yükle:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## Bu İş Akışı Nasıl Kullanılır

Kullanıcı UI/UX çalışması istediğinde (tasarla, inşa et, oluştur, uygula, incele, düzelt, iyileştir), şu iş akışını izle:

### Adım 1: Kullanıcı Gereksinimlerini Analiz Et

Kullanıcı isteğinden temel bilgileri çıkar:
- **Ürün tipi**: SaaS, e-ticaret, portfolyo, gösterge paneli, açılış sayfası vb.
- **Stil anahtar kelimeleri**: minimal, oyuncu, profesyonel, zarif, karanlık mod vb.
- **Endüstri**: sağlık, fintech, oyun, eğitim vb.
- **Yığın**: React, Vue, Next.js veya varsayılan olarak `html-tailwind`

### Adım 2: İlgili Alanları Ara

Kapsamlı bilgi toplamak için `search.py`'yi birden çok kez kullan. Yeterli bağlama sahip olana kadar ara.

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "<anahtar_kelime>" --domain <alan> [-n <maks_sonuc>]
```

**Önerilen arama sırası:**

1. **Product** - Ürün tipi için stil önerileri al
2. **Style** - Detaylı stil rehberi al (renkler, efektler, frameworkler)
3. **Typography** - Google Fonts importları ile yazı tipi eşleşmeleri al
4. **Color** - Renk paleti al (Birincil, İkincil, CTA, Arka Plan, Metin, Sınır)
5. **Landing** - Sayfa yapısı al (eğer açılış sayfasıysa)
6. **Chart** - Grafik önerileri al (eğer gösterge paneli/analitikse)
7. **UX** - En iyi uygulamaları ve anti-desenleri al
8. **Stack** - Yığına özgü yönergeler al (varsayılan: html-tailwind)

### Adım 3: Yığın Yönergeleri (Varsayılan: html-tailwind)

Eğer kullanıcı bir yığın belirtmezse, **`html-tailwind` varsayılanını kullan**.

```bash
python3 .shared/ui-ux-pro-max/scripts/search.py "<anahtar_kelime>" --stack html-tailwind
```

Mevcut yığınlar: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`

---

## Arama Referansı

### Mevcut Alanlar (Domains)

| Alan | Kullanım Amacı | Örnek Anahtar Kelimeler |
|------|----------------|-------------------------|
| `product` | Ürün tipi önerileri | SaaS, e-ticaret, portfolyo, sağlık, güzellik, servis |
| `style` | UI stilleri, renkler, efektler | glassmorphism, minimalizm, karanlık mod, brutalizm |
| `typography` | Yazı tipi eşleşmeleri, Google Fonts | zarif, oyuncu, profesyonel, modern |
| `color` | Ürün tipine göre renk paletleri | saas, e-ticaret, sağlık, güzellik, fintech, servis |
| `landing` | Sayfa yapısı, CTA stratejileri | hero, hero-merkezli, referans, fiyatlandırma, sosyal-kanıt |
| `chart` | Grafik tipleri, kütüphane önerileri | trend, karşılaştırma, zaman çizelgesi, huni, pasta |
| `ux` | En iyi uygulamalar, anti-desenler | animasyon, erişilebilirlik, z-index, yükleme |
| `prompt` | YZ istemleri, CSS anahtar kelimeleri | (stil adı) |

### Mevcut Yığınlar (Stacks)

| Yığın | Odak |
|-------|------|
| `html-tailwind` | Tailwind utility'leri, duyarlı, a11y (VARSAYILAN) |
| `react` | Durum, hook'lar, performans, desenler |
| `nextjs` | SSR, yönlendirme, görseller, API rotaları |
| `vue` | Composition API, Pinia, Vue Router |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Görünümler, Durum, Navigasyon, Animasyon |
| `react-native` | Bileşenler, Navigasyon, Listeler |
| `flutter` | Widget'lar, Durum, Düzen, Temalandırma |
| `shadcn` | shadcn/ui bileşenleri, temalandırma, formlar, desenler |

---

## Örnek İş Akışı

**Kullanıcı isteği:** "Làm landing page cho dịch vụ chăm sóc da chuyên nghiệp"

**YZ ne yapmalı:**

```bash
# 1. Ürün tipini ara
python3 .shared/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --domain product

# 2. Stil ara (endüstriye dayalı: güzellik, zarif)
python3 .shared/ui-ux-pro-max/scripts/search.py "elegant minimal soft" --domain style

# 3. Tipografi ara
python3 .shared/ui-ux-pro-max/scripts/search.py "elegant luxury" --domain typography

# 4. Renk paleti ara
python3 .shared/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --domain color

# 5. Açılış sayfası yapısı ara
python3 .shared/ui-ux-pro-max/scripts/search.py "hero-centric social-proof" --domain landing

# 6. UX yönergeleri ara
python3 .shared/ui-ux-pro-max/scripts/search.py "animation" --domain ux
python3 .shared/ui-ux-pro-max/scripts/search.py "accessibility" --domain ux

# 7. Yığın yönergeleri ara (varsayılan: html-tailwind)
python3 .shared/ui-ux-pro-max/scripts/search.py "layout responsive" --stack html-tailwind
```

**Sonra:** Tüm arama sonuçlarını sentezle ve tasarımı uygula.

---

## Daha İyi Sonuçlar İçin İpuçları

1. **Anahtar kelimelerde spesifik ol** - "sağlık SaaS gösterge paneli" > "uygulama"
2. **Birden çok kez ara** - Farklı anahtar kelimeler farklı içgörüler ortaya çıkarır
3. **Alanları birleştir** - Stil + Tipografi + Renk = Tam tasarım sistemi
4. **Her zaman UX kontrol et** - Yaygın sorunlar için "animasyon", "z-index", "erişilebilirlik" ara
5. **Yığın bayrağını kullan** - Uygulamaya özel en iyi uygulamaları al
6. **Yinele** - İlk arama eşleşmezse, farklı anahtar kelimeler dene
7. **Çoklu Dosyalara Böl** - Daha iyi bakım için:
   - Bileşenleri bireysel dosyalara ayır (örn. `Header.tsx`, `Footer.tsx`)
   - Yeniden kullanılabilir stilleri özel dosyalara çıkar
   - Her dosyayı odaklanmış ve 200-300 satırın altında tut

---

## Profesyonel UI İçin Yaygın Kurallar

Bunlar UI'ın profesyonel görünmemesine neden olan ve sıkça gözden kaçan sorunlardır:

### İkonlar & Görsel Öğeler

| Kural | Yap | Yapma |
|-------|-----|-------|
| **Emoji ikonları yok** | SVG ikonları kullan (Heroicons, Lucide, Simple Icons) | Arayüz ikonu olarak 🎨 🚀 ⚙️ gibi emojiler kullan |
| **Kararlı hover durumları** | Hover'da renk/opaklık geçişleri kullan | Düzeni kaydıran ölçek dönüşümleri kullan |
| **Doğru marka logoları** | Simple Icons'dan resmi SVG'yi araştır | Tahmin et veya yanlış logo yolları kullan |
| **Tutarlı ikon boyutlandırma** | w-6 h-6 ile sabit viewBox (24x24) kullan | Farklı ikon boyutlarını rastgele karıştır |

### Etkileşim & İmleç

| Kural | Yap | Yapma |
|-------|-----|-------|
| **Cursor pointer** | Tıklanabilir tüm kartlara `cursor-pointer` ekle | Etkileşimli öğelerde varsayılan imleci bırak |
| **Hover geri bildirimi** | Görsel geri bildirim sağla (renk, gölge, sınır) | Öğenin etkileşimli olduğuna dair işaret yok |
| **Yumuşak geçişler** | `transition-colors duration-200` kullan | Anlık durum değişiklikleri veya çok yavaş (>500ms) |

### Aydınlık/Karanlık Mod Kontrastı

| Kural | Yap | Yapma |
|-------|-----|-------|
| **Cam kart aydınlık mod** | `bg-white/80` veya daha yüksek opaklık kullan | `bg-white/10` kullan (çok şeffaf) |
| **Metin kontrastı aydınlık** | Metin için `#0F172A` (slate-900) kullan | Gövde metni için `#94A3B8` (slate-400) kullan |
| **Sönük metin aydınlık** | Minimum `#475569` (slate-600) kullan | gray-400 veya daha açığını kullan |
| **Sınır görünürlüğü** | Aydınlık modda `border-gray-200` kullan | `border-white/10` kullan (görünmez) |

### Düzen & Boşluklandırma

| Kural | Yap | Yapma |
|-------|-----|-------|
| **Yüzen navigasyon** | `top-4 left-4 right-4` boşluğu ekle | Navigasyonu `top-0 left-0 right-0`a yapıştır |
| **İçerik dolgusu** | Sabit navigasyon yüksekliğini hesaba kat | İçeriğin sabit öğelerin arkasında gizlenmesine izin ver |
| **Tutarlı maks-genişlik** | Aynı `max-w-6xl` veya `max-w-7xl` kullan | Farklı kapsayıcı genişliklerini karıştır |

---

## Teslimat Öncesi Kontrol Listesi

UI kodunu teslim etmeden önce, şu maddeleri doğrula:

### Görsel Kalite
- [ ] İkon olarak emoji kullanılmadı (yerine SVG kullanıldı)
- [ ] Tüm ikonlar tutarlı ikon setinden (Heroicons/Lucide)
- [ ] Marka logoları doğru (Simple Icons'dan doğrulandı)
- [ ] Hover durumları düzen kaymasına neden olmuyor

### Etkileşim
- [ ] Tüm tıklanabilir öğelerde `cursor-pointer` var
- [ ] Hover durumları net görsel geri bildirim sağlıyor
- [ ] Geçişler yumuşak (150-300ms)
- [ ] Klavye navigasyonu için odak durumları görünür

### Aydınlık/Karanlık Mod
- [ ] Aydınlık mod metni yeterli kontrasta sahip (4.5:1 minimum)
- [ ] Cam/şeffaf öğeler aydınlık modda görünür
- [ ] Sınırlar her iki modda da görünür
- [ ] Teslimattan önce her iki modu test et

### Düzen
- [ ] Yüzen öğeler kenarlardan uygun boşluğa sahip
- [ ] Sabit navigasyonların arkasında gizlenen içerik yok
- [ ] 320px, 768px, 1024px, 1440px'de duyarlı
- [ ] Mobilde yatay kaydırma yok

### Erişilebilirlik
- [ ] Tüm görsellerde alt metin var
- [ ] Form girdilerinde etiketler var
- [ ] Renk tek gösterge değil
- [ ] `prefers-reduced-motion` saygı duyuluyor