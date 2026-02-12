---
name: frontend-design
description: Web arayüzü için tasarım düşüncesi ve karar verme. Bileşenler, düzenler, renk şemaları, tipografi tasarlarken veya estetik arayüzler oluştururken kullanın. Sabit değerleri değil, prensipleri öğretir.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Frontend Tasarım Sistemi

> **Felsefe:** Her pikselin bir amacı vardır. Kısıtlama lükstür. Kullanıcı psikolojisi kararları yönlendirir.
> **Temel Prensip:** DÜŞÜN, ezberleme. SOR, varsayma.

---

## 🎯 Seçici Okuma Kuralı (ZORUNLU)

**GEREKLİ dosyaları her zaman, İSTEĞE BAĞLI olanları sadece gerektiğinde oku:**

| Dosya | Durum | Ne Zaman Okunmalı |
|-------|-------|-------------------|
| [ux-psychology.md](ux-psychology.md) | 🔴 **ZORUNLU** | Her zaman önce oku! |
| [color-system.md](color-system.md) | ⚪ İsteğe Bağlı | Renk/palet kararları |
| [typography-system.md](typography-system.md) | ⚪ İsteğe Bağlı | Font seçimi/eşleştirme |
| [visual-effects.md](visual-effects.md) | ⚪ İsteğe Bağlı | Glassmorphism, gölgeler, gradyanlar |
| [animation-guide.md](animation-guide.md) | ⚪ İsteğe Bağlı | Animasyon gerektiğinde |
| [motion-graphics.md](motion-graphics.md) | ⚪ İsteğe Bağlı | Lottie, GSAP, 3D |
| [decision-trees.md](decision-trees.md) | ⚪ İsteğe Bağlı | Bağlam şablonları |

> 🔴 **ux-psychology.md = HER ZAMAN OKU. Diğerleri = sadece ilgiliyse.**

---

## 🔧 Çalışma Zamanı Scriptleri

**Denetimler için bunları çalıştır (okuma, sadece çalıştır):**

| Script | Amaç | Kullanım |
|--------|------|----------|
| `scripts/ux_audit.py` | UX Psikolojisi & Erişilebilirlik Denetimi | `python scripts/ux_audit.py <proje_yolu>` |

---

## ⚠️ KRİTİK: VARSAYMADAN ÖNCE SOR (ZORUNLU)

> **DUR! Kullanıcının isteği açık uçluysa, favorilerine DÜŞME.**

### Kullanıcı İstemi Belirsizse, SOR:

**Renk belirtilmemiş mi?** Sor:
> "Hangi renk paletini tercih edersiniz? (mavi/yeşil/turuncu/nötr/diğer?)"

**Stil belirtilmemiş mi?** Sor:
> "Hangi stili hedefliyorsunuz? (minimal/cesur/retro/fütüristik/organik?)"

**Düzen belirtilmemiş mi?** Sor:
> "Bir düzen tercihiniz var mı? (tek sütun/ızgara/asimetrik/tam genişlik?)"

### ⛔ KAÇINILMASI GEREKEN VARSAYILAN EĞİLİMLER (GÜVENLİ LİMAN KARŞITI):

| YZ Varsayılan Eğilimi | Neden Kötü | Yerine Düşün |
|-----------------------|------------|--------------|
| **Bento Izgaraları (Modern Klişe)** | Her YZ tasarımında kullanılır | Bu içeriğin NEDEN bir ızgaraya İHTİYACI var? |
| **Hero Bölünmesi (Sol/Sağ)** | Tahmin edilebilir & Sıkıcı | Devasa Tipografi veya Dikey Anlatı nasıl olur? |
| **Mesh/Aurora Radyanlar** | "Yeni" tembel arka plan | Radikal bir renk eşleşmesi nedir? |
| **Glassmorphism** | YZ'nin "premium" fikri | Katı, yüksek kontrastlı düz tasarıma ne dersin? |
| **Derin Camgöbeği / Fintech Mavisi** | Mor yasağından güvenli liman | Neden Kırmızı, Siyah veya Neon Yeşil değil? |
| **"Orkestre Et / Güçlendir"** | YZ üretimi metin yazarlığı | Bir insan bunu nasıl söylerdi? |
| Koyu arka plan + neon parıltı | Aşırı kullanılmış, "YZ görünümü" | MARKANIN aslında neye ihtiyacı var? |
| **Her şey yuvarlatılmış** | Jenerik/Güvenli | Keskin, brutalist kenarları nerede kullanabilirim? |

> 🔴 **"Seçtiğin her 'güvenli' yapı seni jenerik bir şablona bir adım daha yaklaştırır. RİSK AL."**

---

## 1. Kısıt Analizi (HER ZAMAN İLK)

Herhangi bir tasarım çalışmasından önce, BUNLARI CEVAPLA veya KULLANICIYA SOR:

| Kısıt | Soru | Neden Önemli |
|-------|------|--------------|
| **Zaman Çizelgesi** | Ne kadar zaman var? | Karmaşıklığı belirler |
| **İçerik** | Hazır mı yoksa yer tutucu mu? | Düzen esnekliğini etkiler |
| **Marka** | Mevcut yönergeler? | Renkleri/fontları dikte edebilir |
| **Teknoloji** | Hangi yığın? | Yetenekleri etkiler |
| **Kitle** | Tam olarak kim? | Tüm görsel kararları yönlendirir |

### Kitle → Tasarım Yaklaşımı

| Kitle | Düşün |
|-------|-------|
| **Z Kuşağı** | Cesur, hızlı, mobil-öncelikli, otantik |
| **Milenyaller** | Temiz, minimal, değer odaklı |
| **X Kuşağı** | Tanıdık, güvenilir, net |
| **Boomerlar** | Okunabilir, yüksek kontrast, basit |
| **B2B** | Profesyonel, veri odaklı, güven |
| **Lüks** | Kısıtlanmış zarafet, beyaz alan |

---

## 2. UX Psikolojisi Prensipleri

### Temel Yasalar (Bunları Özümse)

| Yasa | Prensip | Uygulama |
|------|---------|----------|
| **Hick Yasası** | Daha fazla seçenek = daha yavaş karar | Seçenekleri sınırla, aşamalı ifşa kullan |
| **Fitts Yasası** | Daha büyük + daha yakın = tıklaması daha kolay | CTA'ları uygun şekilde boyutlandır |
| **Miller Yasası** | ~7 öğe çalışan bellekte | İçeriği gruplara ayır |
| **Von Restorff** | Farklı olan = akılda kalıcı | CTA'ları görsel olarak ayırt edici yap |
| **Seri Konum** | İlk/son en çok hatırlanan | Anahtar bilgi başta/sonda |

### Güven İnşası

- Hassas işlemlerde güvenlik göstergeleri
- İlgili yerlerde sosyal kanıt
- Net iletişim/destek erişimi
- Tutarlı, profesyonel tasarım
- Şeffaf politikalar

---

## 3. Düzen Prensipleri

### Altın Oran (φ = 1.618)

```
Oransal uyum için kullan:
├── İçerik : Kenar Çubuğu = kabaca %62 : %38
├── Her başlık boyutu = önceki × 1.618 (dramatik ölçek için)
├── Boşluklandırma izleyebilir: sm → md → lg (her biri × 1.618)
```

### 8-Nokta Izgara Kavramı

```
Tüm boşluklandırma ve boyutlandırma 8'in katları:
├── Sıkı: 4px (mikro için yarım adım)
├── Küçük: 8px
├── Orta: 16px
├── Büyük: 24px, 32px
├── XL: 48px, 64px, 80px
└── İçerik yoğunluğuna göre ayarla
```

### Anahtar Boyutlandırma Prensipleri

| Öğe | Değerlendirme |
|-----|---------------|
| **Dokunma hedefleri** | Minimum rahat dokunma boyutu |
| **Butonlar** | Önem hiyerarşisine göre yükseklik |
| **Girdiler** | Hizalama için buton yüksekliğiyle eşleştir |
| **Kartlar** | Tutarlı dolgu, nefes alabilir |
| **Okuma genişliği** | 45-75 karakter optimal |

---

## 4. Renk Prensipleri

### 60-30-10 Kuralı

```
%60 → Birincil/Arka Plan (sakin, nötr taban)
%30 → İkincil (destekleyici alanlar)
%10 → Vurgu (CTA'lar, öne çıkanlar, dikkat)
```

### Renk Psikolojisi (Karar Verme İçin)

| İhtiyacın Varsa... | Tonları Düşün | Kaçın |
|--------------------|---------------|-------|
| Güven, sakinlik | Mavi ailesi | Agresif kırmızılar |
| Büyüme, doğa | Yeşil ailesi | Endüstriyel griler |
| Enerji, aciliyet | Turuncu, kırmızı | Pasif maviler |
| Lüks, yaratıcılık | Derin Deniz Mavisi, Altın, Zümrüt | Ucuz hissettiren parlaklar |
| Temiz, minimal | Nötrler | Aşırı renk |

### Seçim Süreci

1. **Endüstri ne?** (seçenekleri daraltır)
2. **Duygu ne?** (birincili seçer)
3. **Açık mı koyu mod mu?** (temeli belirler)
4. **KULLANICIYA SOR** eğer belirtilmemişse

Detaylı renk teorisi için: [color-system.md](color-system.md)

---

## 5. Tipografi Prensipleri

### Ölçek Seçimi

| İçerik Tipi | Ölçek Oranı | His |
|-------------|-------------|-----|
| Yoğun UI | 1.125-1.2 | Kompakt, verimli |
| Genel web | 1.25 | Dengeli (en yaygın) |
| Editoryal | 1.333 | Okunabilir, ferah |
| Hero/display | 1.5-1.618 | Dramatik etki |

### Eşleştirme Kavramı

```
Kontrast + Uyum:
├── Hiyerarşi için yeterince FARKLI
├── Bütünlük için yeterince BENZER
└── Genellikle: display + nötr, veya serif + sans
```

### Okunabilirlik Kuralları

- **Satır uzunluğu**: 45-75 karakter optimal
- **Satır yüksekliği**: Gövde metni için 1.4-1.6
- **Kontrast**: WCAG gereksinimlerini kontrol et
- **Boyut**: Web'de gövde için 16px+

Detaylı tipografi için: [typography-system.md](typography-system.md)

---

## 6. Görsel Efekt Prensipleri

### Glassmorphism (Uygun Olduğunda)

```
Anahtar özellikler:
├── Yarı saydam arka plan
├── Arka plan bulanıklığı (backdrop blur)
├── Tanım için ince kenarlık
└── ⚠️ **UYARI:** Standart mavi/beyaz glassmorphism modern bir klişedir. Radikal kullan veya hiç kullanma.
```

### Gölge Hiyerarşisi

```
Yükselti (Elevation) kavramı:
├── Daha yüksek öğeler = daha büyük gölgeler
├── Y-öteleme > X-öteleme (ışık yukarıdan)
├── Çoklu katmanlar = daha gerçekçi
└── Koyu mod: parıltı (glow) gerekebilir
```

### Radyan (Gradient) Kullanımı

```
Uyumlu radyanlar:
├── Çarkta bitişik renkler (analog)
├── VEYA aynı ton, farklı açıklık
├── Sert tamamlayıcı çiftlerden kaçın
├── 🚫 **Mesh/Aurora Radyanlar YOK** (yüzen damlalar)
└── Projeden projeye radikal olarak ÇEŞİTLENDİR
```

Tam efekt rehberi için: [visual-effects.md](visual-effects.md)

---

## 7. Animasyon Prensipleri

### Zamanlama Kavramı

```
Süre şuna bağlı:
├── Mesafe (daha uzak = daha uzun)
├── Boyut (daha büyük = daha yavaş)
├── Önem (kritik = net)
└── Bağlam (acil = hızlı, lüks = yavaş)
```

### Yumuşatma (Easing) Seçimi

| Eylem | Easing | Neden |
|-------|--------|-------|
| Giriş | Ease-out | Yavaşla, yerleş |
| Çıkış | Ease-in | Hızlan, çık |
| Vurgu | Ease-in-out | Pürüzsüz, kasıtlı |
| Oyuncu | Bounce | Eğlenceli, enerjik |

Animasyon desenleri için: [animation-guide.md](animation-guide.md), ileri seviye için: [motion-graphics.md](motion-graphics.md)

---

## 8. "Wow Faktörü" Kontrol Listesi

### Premium Göstergeler

- [ ] Cömert beyaz alan (lüks = nefes alma alanı)
- [ ] İnce derinlik ve boyut
- [ ] Pürüzsüz, amaçlı animasyonlar
- [ ] Detaylara dikkat (hizalama, tutarlılık)
- [ ] Bağdaşık görsel ritim
- [ ] Özel öğeler (tümü varsayılan değil)

### Güven İnşacılar

- [ ] Uygun yerlerde güvenlik ipuçları
- [ ] Sosyal kanıt / referanslar
- [ ] Net değer önerisi
- [ ] Profesyonel görseller
- [ ] Tutarlı tasarım dili

### Duygusal Tetikleyiciler

- [ ] Amaçlanan duyguyu uyandıran Hero
- [ ] İnsan öğeleri (yüzler, hikayeler)
- [ ] İlerleme/başarı göstergeleri
- [ ] Haz anları (moments of delight)

---

## 9. Anti-Desenler (YAPMAMAN Gerekenler)

### ❌ Tembel Tasarım Göstergeleri

- Dikkate alınmadan kullanılan varsayılan sistem fontları
- Uyuşmayan stok görseller
- Tutarsız boşluklandırma
- Çok fazla yarışan renk
- Hiyerarşisi olmayan metin duvarları
- Erişilemez kontrast

### ❌ YZ Eğilim Desenleri (KAÇIN!)

- **Her projede aynı renkler**
- **Varsayılan olarak koyu + neon**
- **Her şey mor/menekşe (MOR YASAĞI ✅)**
- **Basit açılış sayfaları için Bento ızgaraları**
- **Mesh Radyanlar & Parıltı Efektleri**
- **Aynı düzen yapısı / Vercel kopyası**
- **Kullanıcı tercihlerini sormamak**

### ❌ Karanlık Desenler (Etik Dışı)

- Gizli maliyetler
- Sahte aciliyet
- Zorunlu eylemler
- Aldatıcı UI
- Onay utandırma (Confirmshaming)

---

## 10. Karar Süreci Özeti

```
HER tasarım görevi için:

1. KISITLAR
   └── Zaman çizelgesi, marka, teknoloji, kitle nedir?
   └── Belirsizse → SOR

2. İÇERİK
   └── Hangi içerik var?
   └── Hiyerarşi nedir?

3. STİL YÖNÜ
   └── Bağlam için ne uygun?
   └── Belirsizse → SOR (varsayılan atama!)

4. UYGULAMA
   └── Yukarıdaki prensipleri uygula
   └── Anti-desenlere karşı kontrol et

5. İNCELEME
   └── "Bu kullanıcıya hizmet ediyor mu?"
   └── "Bu benim varsayılanlarımdan farklı mı?"
   └── "Bununla gurur duyar mıydım?"
```

---

> **Unutma:** Tasarım DÜŞÜNMEKTİR, kopyalamak değil. Her proje, benzersiz bağlamına ve kullanıcılarına dayalı taze bir değerlendirmeyi hak eder. **Modern SaaS Güvenli Limanından Kaçın!**
