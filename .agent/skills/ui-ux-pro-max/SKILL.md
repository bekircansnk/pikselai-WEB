---
name: ui-ux-pro-max
description: UI/UX tasarım zekası. 50 stil, 21 palet, 50 yazı tipi eşleşmesi, 20 grafik, 9 yığın. Eylemler: planla, inşa et, oluştur, tasarla, uygula, incele, düzelt, iyileştir, optimize et, geliştir, refactor, UI/UX kodunu kontrol et. Projeler: web sitesi, açılış sayfası, gösterge paneli, admin paneli, e-ticaret, SaaS, portfolyo, blog, mobil uygulama. Öğeler: buton, modal, navigasyon çubuğu, kenar çubuğu, kart, tablo, form, grafik. Stiller: glassmorphism, claymorphism, minimalizm, brutalizm, nöomorfizm, bento grid, karanlık mod, duyarlı. Konular: renk paleti, erişilebilirlik, animasyon, düzen, tipografi, yazı tipi eşleşmesi, boşluklandırma, üzerine gelme (hover), gölge, gradyan. Entegrasyonlar: bileşen arama ve örnekler için shadcn/ui MCP.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# UI/UX Pro Max - Tasarım Zekası

Web ve mobil uygulamalar için kapsamlı tasarım rehberi. 9 teknoloji yığınında 50+ stil, 97 renk paleti, 57 yazı tipi eşleşmesi, 99 UX yönergesi ve 25 grafik türü içerir. Öncelik tabanlı önerilerle aranabilir veritabanı.

## Ne Zaman Uygulanmalı

Şu durumlarda bu yönergelere başvurun:
- Yeni UI bileşenleri veya sayfaları tasarlarken
- Renk paletleri ve tipografi seçerken
- Kodu UX sorunları için incelerken
- Açılış sayfaları veya gösterge panelleri oluştururken
- Erişilebilirlik gereksinimlerini uygularken

## Önceliğe Göre Kural Kategorileri

| Öncelik | Kategori | Etki | Alan |
|---------|----------|------|------|
| 1 | Erişilebilirlik | KRİTİK | `ux` |
| 2 | Dokunma & Etkileşim | KRİTİK | `ux` |
| 3 | Performans | YÜKSEK | `ux` |
| 4 | Düzen & Duyarlı | YÜKSEK | `ux` |
| 5 | Tipografi & Renk | ORTA | `typography`, `color` |
| 6 | Animasyon | ORTA | `ux` |
| 7 | Stil Seçimi | ORTA | `style`, `product` |
| 8 | Grafikler & Veri | DÜŞÜK | `chart` |

## Hızlı Referans

### 1. Erişilebilirlik (KRİTİK)

- `color-contrast` - Normal metin için minimum 4.5:1 oranı
- `focus-states` - Etkileşimli öğelerde görünür odak halkaları
- `alt-text` - Anlamlı resimler için açıklayıcı alt metin
- `aria-labels` - Sadece ikonlu butonlar için aria-label
- `keyboard-nav` - Sekme sırası görsel sırayla eşleşmeli
- `form-labels` - for özniteliği ile etiket kullan

### 2. Dokunma & Etkileşim (KRİTİK)

- `touch-target-size` - Minimum 44x44px dokunma hedefleri
- `hover-vs-tap` - Birincil etkileşimler için tıkla/dokun kullan
- `loading-buttons` - Asenkron işlemler sırasında butonu devre dışı bırak
- `error-feedback` - Sorunun yakınında net hata mesajları
- `cursor-pointer` - Tıklanabilir öğelere cursor-pointer ekle

### 3. Performans (YÜKSEK)

- `image-optimization` - WebP, srcset, lazy loading kullan
- `reduced-motion` - prefers-reduced-motion kontrol et
- `content-jumping` - Asenkron içerik için yer ayır

### 4. Düzen & Duyarlı (YÜKSEK)

- `viewport-meta` - width=device-width initial-scale=1
- `readable-font-size` - Mobilde minimum 16px gövde metni
- `horizontal-scroll` - İçeriğin görüntüleme alanı genişliğine sığdığından emin ol
- `z-index-management` - z-index ölçeği tanımla (10, 20, 30, 50)

### 5. Tipografi & Renk (ORTA)

- `line-height` - Gövde metni için 1.5-1.75 kullan
- `line-length` - Satır başına 65-75 karakterle sınırla
- `font-pairing` - Başlık/gövde yazı tipi kişiliklerini eşleştir

### 6. Animasyon (ORTA)

- `duration-timing` - Mikro etkileşimler için 150-300ms kullan
- `transform-performance` - transform/opacity kullan, width/height değil
- `loading-states` - İskelet ekranlar veya dönücüler (spinners)

### 7. Stil Seçimi (ORTA)

- `style-match` - Stili ürün tipiyle eşleştir
- `consistency` - Tüm sayfalarda aynı stili kullan
- `no-emoji-icons` - Emoji yerine SVG ikonları kullan

### 8. Grafikler & Veri (DÜŞÜK)

- `chart-type` - Grafik tipini veri tipiyle eşleştir
- `color-guidance` - Erişilebilir renk paletleri kullan
- `data-table` - Erişilebilirlik için tablo alternatifi sağla

---

## Bu Yetenek Nasıl Kullanılır

Kullanıcı UI/UX çalışması istediğinde (tasarla, inşa et, oluştur, uygula, incele, düzelt, iyileştir), şu iş akışını izle:

### Adım 1: Kullanıcı Gereksinimlerini Analiz Et

Kullanıcı isteğinden temel bilgileri çıkar:
- **Ürün tipi**: SaaS, e-ticaret, portfolyo, gösterge paneli, açılış sayfası vb.
- **Stil anahtar kelimeleri**: minimal, oyuncu, profesyonel, zarif, karanlık mod vb.
- **Endüstri**: sağlık, fintech, oyun, eğitim vb.
- **Yığın**: React, Vue, Next.js veya varsayılan olarak `html-tailwind`

### Adım 2: Tasarım Sistemi Oluştur (ZORUNLU)

Gerekçelendirmeyle kapsamlı öneriler almak için **Her zaman `--design-system` ile başla**:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<urun_tipi> <endustri> <anahtar_kelimeler>" --design-system [-p "Proje Adi"]
```

Bu komut:
1. Paralel olarak 5 alanı arar (ürün, stil, renk, açılış, tipografi)
2. En iyi eşleşmeleri seçmek için `ui-reasoning.csv`'den mantık kurallarını uygular
3. Tam tasarım sistemini döndürür: desen, stil, renkler, tipografi, efektler
4. Kaçınılması gereken anti-desenleri içerir

**Örnek:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "güzellik spa wellness servis" --design-system -p "Serenity Spa"
```

### Adım 3: Detaylı Aramalarla Destekle (Gerektiğinde)

Tasarım sistemini aldıktan sonra, ek detaylar almak için alan (domain) aramalarını kullan:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<anahtar_kelime>" --domain <alan> [-n <maks_sonuc>]
```

**Ne zaman detaylı aramalar kullanılır:**

| İhtiyaç | Alan | Örnek |
|---------|------|-------|
| Daha fazla stil seçeneği | `style` | `--domain style "glassmorphism dark"` |
| Grafik önerileri | `chart` | `--domain chart "real-time dashboard"` |
| UX en iyi uygulamaları | `ux` | `--domain ux "animation accessibility"` |
| Alternatif yazı tipleri | `typography` | `--domain typography "elegant luxury"` |
| Açılış yapısı | `landing` | `--domain landing "hero social-proof"` |

### Adım 4: Yığın Yönergeleri (Varsayılan: html-tailwind)

Uygulamaya özel en iyi uygulamaları al. Eğer kullanıcı bir yığın belirtmezse, **`html-tailwind` varsayılanını kullan**.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<anahtar_kelime>" --stack html-tailwind
```

Mevcut yığınlar: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`

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

> **Unutma:** UI/UX Pro Max, sübjektif tasarım seçimleri için değil, kanıtlanmış desenler ve erişilebilirlik standartları içindir.
