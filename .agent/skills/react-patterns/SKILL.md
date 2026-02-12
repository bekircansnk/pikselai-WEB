---
name: react-patterns
description: Modern React desenleri ve prensipleri. Hook'lar, kompozisyon, performans, TypeScript en iyi uygulamaları.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# React Desenleri

> Üretime hazır React uygulamaları oluşturmak için prensipler.

---

## 1. Bileşen Tasarım Prensipleri

### Bileşen Tipleri

| Tip | Kullanım | Durum |
|-----|----------|-------|
| **Sunucu** | Veri getirme, statik | Yok |
| **İstemci** | Etkileşim | useState, effects |
| **Sunumsal** | UI gösterimi | Sadece props |
| **Kapsayıcı** | Mantık/durum | Ağır durum |

### Tasarım Kuralları

- Bileşen başına tek sorumluluk
- Proplar aşağı, olaylar yukarı
- Kalıtım yerine kompozisyon
- Küçük, odaklanmış bileşenleri tercih et

---

## 2. Hook Desenleri

### Hook'lar Ne Zaman Çıkarılmalı

| Desen | Şu Durumda Çıkar |
|-------|------------------|
| **useLocalStorage** | Aynı depolama mantığı gerektiğinde |
| **useDebounce** | Birden fazla debounce edilmiş değer |
| **useFetch** | Tekrarlanan getirme desenleri |
| **useForm** | Karmaşık form durumu |

### Hook Kuralları

- Hook'lar sadece en üst seviyede
- Her renderda aynı sıra
- Özel hook'lar "use" ile başlar
- Unmount sırasında etkileri temizle

---

## 3. Durum Yönetimi Seçimi

| Karmaşıklık | Çözüm |
|-------------|-------|
| Basit | useState, useReducer |
| Paylaşılan yerel | Context |
| Sunucu durumu | React Query, SWR |
| Karmaşık global | Zustand, Redux Toolkit |

---

## 4. React 19 Desenleri

### Yeni Hook'lar

| Hook | Amaç |
|------|------|
| **useActionState** | Form gönderim durumu |
| **useOptimistic** | İyimser UI güncellemeleri |
| **use** | Render sırasında kaynakları oku |

---

## 5. Kompozisyon Desenleri

### Bileşik Bileşenler (Compound Components)

- Ebeveyn bağlam (context) sağlar
- Çocuklar bağlamı tüketir
- Esnek yuva (slot) tabanlı kompozisyon
- Örnek: Sekmeler (Tabs), Akordeon, Açılır Menü

### Render Props vs Hooks

| Kullanım Durumu | Tercih Et |
|-----------------|-----------|
| Yeniden kullanılabilir mantık | Özel hook |
| Render esnekliği | Render props |
| Kesişen (Cross-cutting) | Yüksek dereceli bileşen (HOC) |

---

## 6. Performans Prensipleri

### Ne Zaman Optimize Edilmeli

| Sinyal | Eylem |
|--------|-------|
| Yavaş renderlar | Önce profille |
| Büyük listeler | Sanallaştır (Virtualize) |
| Pahalı hesaplama | useMemo |
| Kararlı geri çağrılar | useCallback |

### Optimizasyon Sırası

1. Gerçekten yavaş mı kontrol et
2. DevTools ile profille
3. Darboğazı belirle
4. Hedefli düzeltme uygula

---

## 7. Hata Yönetimi

### Hata Sınırı (Error Boundary) Kullanımı

| Kapsam | Yerleşim |
|--------|----------|
| Uygulama geneli | Kök seviyesi |
| Özellik | Rota/özellik seviyesi |
| Bileşen | Riskli bileşen etrafı |

---

## 8. TypeScript Desenleri

### Props Tipleme

| Desen | Kullanım |
|-------|----------|
| Interface | Bileşen propları |
| Type | Birleşimler (Unions), karmaşık |
| Generic | Yeniden kullanılabilir bileşenler |

### Yaygın Tipler

| İhtiyaç | Tip |
|---------|-----|
| Çocuklar | ReactNode |
| Olay işleyici | MouseEventHandler |
| Referans | RefObject<Element> |

---

## 9. Test Prensipleri

### Test Öncelikleri

- Kullanıcı tarafından görünen davranış
- Uç durumlar
- Hata durumları
- Erişilebilirlik

---

## 10. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Derine prop delme (prop drilling) | Context kullan |
| Dev bileşenler | Daha küçük parçalara böl |
| Her şey için useEffect | Sunucu bileşenleri |
| Erken optimizasyon | Önce profille |
| İndeks anahtar (key) olarak | Kararlı benzersiz ID |

---

> **Unutma:** React kompozisyonla ilgilidir. Küçük inşa et, düşünceli bir şekilde birleştir.
