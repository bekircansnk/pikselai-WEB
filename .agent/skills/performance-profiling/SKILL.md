---
name: performance-profiling
description: Performans profilleme prensipleri. Ölçüm, analiz ve optimizasyon teknikleri.
allowed-tools: Read, Glob, Grep, Bash
---

# Performans Profilleme

> Ölç, analiz et, optimize et - bu sırayla.

## 🔧 Çalışma Zamanı Scriptleri

**Otomatik profilleme için bunları çalıştır:**

| Script | Amaç | Kullanım |
|--------|------|----------|
| `scripts/lighthouse_audit.py` | Lighthouse performans denetimi | `python scripts/lighthouse_audit.py https://example.com` |

---

## 1. Core Web Vitals

### Hedefler

| Metrik | İyi | Kötü | Ölçtüğü |
|--------|-----|------|---------|
| **LCP** | < 2.5s | > 4.0s | Yükleme |
| **INP** | < 200ms | > 500ms | Etkileşim |
| **CLS** | < 0.1 | > 0.25 | Kararlılık |

### Ne Zaman Ölçülmeli

| Aşama | Araç |
|-------|------|
| Geliştirme | Yerel Lighthouse |
| CI/CD | Lighthouse CI |
| Üretim | RUM (Gerçek Kullanıcı İzleme) |

---

## 2. Profilleme İş Akışı

### 4 Adımlı Süreç

```
1. TEMEL (BASELINE) → Mevcut durumu ölç
2. TANIMLA (IDENTIFY) → Darboğazı bul
3. DÜZELT (FIX) → Hedefli değişiklik yap
4. DOĞRULA (VALIDATE) → İyileştirmeyi onayla
```

### Profilleme Aracı Seçimi

| Sorun | Araç |
|-------|------|
| Sayfa yükleme | Lighthouse |
| Paket boyutu | Bundle analyzer |
| Çalışma zamanı | DevTools Performance |
| Bellek | DevTools Memory |
| Ağ | DevTools Network |

---

## 3. Paket (Bundle) Analizi

### Bakılacak Şeyler

| Sorun | Gösterge |
|-------|----------|
| Büyük bağımlılıklar | Paketin tepesi |
| Yinelenen kod | Çoklu parçalar (chunks) |
| Kullanılmayan kod | Düşük kapsam |
| Eksik bölmeler | Tek büyük parça |

### Optimizasyon Eylemleri

| Bulgu | Eylem |
|-------|-------|
| Büyük kütüphane | Belirli modülleri import et |
| Yinelenen bağımlılıklar | Tekilleştir (dedupe), sürümleri güncelle |
| Ana pakette rota | Kod bölme (Code split) |
| Kullanılmayan dışa aktarımlar | Tree shake |

---

## 4. Çalışma Zamanı Profilleme

### Performans Sekmesi Analizi

| Desen | Anlamı |
|-------|--------|
| Uzun görevler (>50ms) | UI bloklama |
| Çok sayıda küçük görev | Olası toplu işleme (batching) fırsatı |
| Düzen/boyama (Layout/paint) | Render darboğazı |
| Script | JavaScript yürütme |

### Bellek Sekmesi Analizi

| Desen | Anlamı |
|-------|--------|
| Büyüyen yığın (heap) | Olası sızıntı |
| Büyük tutulan (retained) | Referansları kontrol et |
| Ayrık (Detached) DOM | Temizlenmemiş |

---

## 5. Yaygın Darboğazlar

| Semptom | Olası Neden |
|---------|-------------|
| Yavaş ilk yükleme | Büyük JS, render bloklama |
| Yavaş etkileşimler | Ağır olay işleyicileri |
| Kaydırma sırasında takılma | Düzen (Layout) thrashing |
| Büyüyen bellek | Sızıntılar, tutulan referanslar |

---

## 6. Hızlı Kazanım Öncelikleri

| Öncelik | Eylem | Etki |
|---------|-------|------|
| 1 | Sıkıştırmayı etkinleştir | Yüksek |
| 2 | Resimleri tembel yükle (Lazy load) | Yüksek |
| 3 | Rotaları kodlara böl | Yüksek |
| 4 | Statik varlıkları önbellekle | Orta |
| 5 | Resimleri optimize et | Orta |

---

## 7. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Sorunları tahmin et | Önce profille |
| Mikro-optimize et | En büyük sorunu düzelt |
| Erken optimize et | Gerektiğinde optimize et |
| Gerçek kullanıcıları görmezden gel | RUM verilerini kullan |

---

> **Unutma:** En hızlı kod, çalışmayan koddur. Optimize etmeden önce kaldır.
