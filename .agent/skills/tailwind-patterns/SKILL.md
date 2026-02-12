---
name: tailwind-patterns
description: Tailwind CSS v4 prensipleri. CSS-öncelikli yapılandırma, kapsayıcı sorguları, modern desenler, tasarım token mimarisi.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Tailwind CSS Desenleri (v4 - 2025)

> CSS-tabanlı yapılandırma ile modern, önce-fayda (utility-first) CSS.

---

## 1. Tailwind v4 Mimarisi

### v3'ten Ne Değişti?

| v3 (Eski) | v4 (Mevcut) |
|-----------|-------------|
| `tailwind.config.js` | CSS-tabanlı `@theme` direktifi |
| PostCSS eklentisi | Oxide motoru (10 kat daha hızlı) |
| JIT modu | Yerel, her zaman açık |
| Eklenti sistemi | CSS-yerel özellikleri |
| `@apply` direktifi | Hala çalışıyor, önerilmiyor |

### v4 Temel Kavramlar

| Kavram | Açıklama |
|--------|----------|
| **CSS-öncelikli** | Yapılandırma JavaScript'te değil CSS'te |
| **Oxide Motoru** | Rust-tabanlı derleyici, çok daha hızlı |
| **Yerel İç İçe Geçme** | PostCSS olmadan CSS nesting |
| **CSS Değişkenleri** | Tüm tokenlar `--*` değişkenleri olarak açık |

---

## 2. CSS-Tabanlı Yapılandırma

### Tema Tanımı

```
@theme {
  /* Renkler - anlamsal isimler kullan */
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
  --color-surface-dark: oklch(0.15 0 0);
  
  /* Boşluk ölçeği */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Tipografi */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Ne Zaman Genişletmeli vs Geçersiz Kılmalı

| Eylem | Ne Zaman Kullanmalı |
|-------|---------------------|
| **Genişlet (Extend)** | Varsayılanların yanına yeni değerler eklerken |
| **Geçersiz Kıl (Override)** | Varsayılan ölçeği tamamen değiştirirken |
| **Anlamsal Tokenlar** | Projeye özel isimlendirme (primary, surface) |

---

## 3. Kapsayıcı Sorguları (v4 Yerel)

### Breakpoint vs Kapsayıcı

| Tip | Yanıt Verdiği |
|-----|-------------|
| **Breakpoint** (`md:`) | Görüntüleme alanı (viewport) genişliği |
| **Kapsayıcı** (`@container`) | Ebeveyn öğe genişliği |

### Kapsayıcı Sorgusu Kullanımı

| Desen | Sınıflar |
|-------|----------|
| Kapsayıcı tanımla | Ebeveynde `@container` |
| Kapsayıcı kırılma noktası | Çocuklarda `@sm:`, `@md:`, `@lg:` |
| İsimlendirilmiş kapsayıcılar | Özgüllük için `@container/card` |

### Ne Zaman Kullanmalı

| Senaryo | Kullanım |
|---------|----------|
| Sayfa düzeyi düzenler | Viewport breakpointleri |
| Bileşen düzeyi duyarlılık | Kapsayıcı sorguları |
| Yeniden kullanılabilir bileşenler | Kapsayıcı sorguları (bağlamdan bağımsız) |

---

## 4. Duyarlı Tasarım

### Breakpoint Sistemi

| Önek | Min Genişlik | Hedef |
|------|--------------|-------|
| (yok) | 0px | Mobil-öncelikli temel |
| `sm:` | 640px | Büyük telefon / küçük tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Masaüstü |
| `2xl:` | 1536px | Büyük masaüstü |

### Mobil-Öncelikli Prensibi

1. Mobil stilleri önce yaz (önek yok)
2. Daha büyük ekran geçersiz kılmalarını öneklerle ekle
3. Örnek: `w-full md:w-1/2 lg:w-1/3`

---

## 5. Karanlık Mod

### Yapılandırma Stratejileri

| Yöntem | Davranış | Ne Zaman Kullanmalı |
|--------|----------|---------------------|
| `class` | `.dark` sınıfı değiştirir | Manuel tema değiştirici |
| `media` | Sistem tercihini izler | Kullanıcı kontrolü yok |
| `selector` | Özel seçici (v4) | Karmaşık temalandırma |

### Karanlık Mod Deseni

| Öğe | Aydınlık | Karanlık |
|-----|----------|----------|
| Arka plan | `bg-white` | `dark:bg-zinc-900` |
| Metin | `text-zinc-900` | `dark:text-zinc-100` |
| Kenarlıklar | `border-zinc-200` | `dark:border-zinc-700` |

---

## 6. Modern Düzen Desenleri

### Flexbox Desenleri

| Desen | Sınıflar |
|-------|----------|
| Ortala (her iki eksen) | `flex items-center justify-center` |
| Dikey yığın | `flex flex-col gap-4` |
| Yatay satır | `flex gap-4` |
| BOşluk bırak (space between) | `flex justify-between items-center` |
| Sarma ızgarası (Wrap grid) | `flex flex-wrap gap-4` |

### Grid Desenleri

| Desen | Sınıflar |
|-------|----------|
| Otomatik sığdır duyarlı | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |
| Asimetrik (Bento) | `grid grid-cols-3 grid-rows-2` span'lar ile |
| Kenar çubuğu düzeni | `grid grid-cols-[auto_1fr]` |

> **Not:** Simetrik 3 sütunlu ızgaralar yerine asimetrik/Bento düzenlerini tercih et.

---

## 7. Modern Renk Sistemi

### OKLCH vs RGB/HSL

| Format | Avantaj |
|--------|---------|
| **OKLCH** | Algısal olarak tekdüze, tasarım için daha iyi |
| **HSL** | Sezgisel ton/doygunluk |
| **RGB** | Eski uyumluluk |

### Renk Token Mimarisi

| Katman | Örnek | Amaç |
|--------|-------|------|
| **İlkel** | `--blue-500` | Ham renk değerleri |
| **Anlamsal** | `--color-primary` | Amaç tabanlı isimlendirme |
| **Bileşen** | `--button-bg` | Bileşene özel |

---

## 8. Tipografi Sistemi

### Yazı Tipi Yığını Deseni

| Tip | Önerilen |
|-----|----------|
| Sans | `'Inter', 'SF Pro', system-ui, sans-serif` |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` |
| Display | `'Outfit', 'Poppins', sans-serif` |

### Tip Ölçeği

| Sınıf | Boyut | Kullanım |
|-------|-------|----------|
| `text-xs` | 0.75rem | Etiketler, alt yazılar |
| `text-sm` | 0.875rem | İkincil metin |
| `text-base` | 1rem | Gövde metni |
| `text-lg` | 1.125rem | Öncü metin |
| `text-xl`+ | 1.25rem+ | Başlıklar |

---

## 9. Animasyon & Geçişler

### Yerleşik Animasyonlar

| Sınıf | Efekt |
|-------|-------|
| `animate-spin` | Sürekli döndürme |
| `animate-ping` | Dikkat darbesi (pulse) |
| `animate-pulse` | İnce opaklık darbesi |
| `animate-bounce` | Zıplama efekti |

### Geçiş Desenleri

| Desen | Sınıflar |
|-------|----------|
| Tüm özellikler | `transition-all duration-200` |
| Belirli | `transition-colors duration-150` |
| Yumuşatma (Easing) ile | `ease-out` veya `ease-in-out` |
| Üzerine gelme (Hover) | `hover:scale-105 transition-transform` |

---

## 10. Bileşen Çıkarma

### Ne Zaman Çıkarılmalı

| Sinyal | Eylem |
|--------|-------|
| Aynı sınıf kombinasyonu 3+ kez | Bileşen çıkar |
| Karmaşık durum varyantları | Bileşen çıkar |
| Tasarım sistemi öğesi | Çıkar + belgele |

### Çıkarma Yöntemleri

| Yöntem | Ne Zaman Kullanmalı |
|--------|---------------------|
| **React/Vue bileşeni** | Dinamik, JS gerekli |
| **CSS'te @apply** | Statik, JS gerekmiyor |
| **Tasarım tokenları** | Yeniden kullanılabilir değerler |

---

## 11. Anti-Desenler

| Yapma | Yap |
|-------|-----|
| Her yerde keyfi değerler | Tasarım sistemi ölçeğini kullan |
| `!important` | Özgüllüğü düzgün ayarla |
| Satır içi `style=` | Utility'leri kullan |
| Tekrar eden uzun sınıf listeleri | Bileşen çıkar |
| v3 yapılandırmasını v4 ile karıştırma | Tamamen CSS-öncelikli yapıya geç |
| `@apply`'ı aşırı kullanma | Bileşenleri tercih et |

---

## 12. Performans Prensipleri

| Prensip | Uygulama |
|---------|----------|
| **Kullanılmayanı temizle (Purge)** | v4'te otomatik |
| **Dinamizmden kaçın** | Şablon dizesi sınıfları yok |
| **Oxide kullan** | v4'te varsayılan, 10 kat daha hızlı |
| **Derlemeleri önbellekle** | CI/CD önbellekleme |

---

> **Unutma:** Tailwind v4 CSS-önceliklidir. CSS değişkenlerini, kapsayıcı sorgularını ve yerel özellikleri benimse. Yapılandırma dosyası artık isteğe bağlıdır.
