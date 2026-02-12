---
name: nextjs-best-practices
description: Next.js App Router prensipleri. Sunucu Bileşenleri, veri getirme, yönlendirme desenleri.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Next.js En İyi Uygulamaları

> Next.js App Router geliştirme prensipleri.

---

## 1. Sunucu (Server) vs İstemci (Client) Bileşenleri

### Karar Ağacı

```
Neye ihtiyacı var?
│
├── useState, useEffect, olay işleyicileri
│   └── İstemci Bileşeni ('use client')
│
├── Doğrudan veri getirme, etkileşim yok
│   └── Sunucu Bileşeni (varsayılan)
│
└── İkisi de? 
    └── Böl: Sunucu ebeveyn + İstemci çocuk
```

### Varsayılan Olarak

| Tip | Kullanım |
|-----|----------|
| **Sunucu** | Veri getirme, düzen, statik içerik |
| **İstemci** | Formlar, butonlar, etkileşimli UI |

---

## 2. Veri Getirme Desenleri

### Fetch Stratejisi

| Desen | Kullanım |
|-------|----------|
| **Varsayılan** | Statik (derlemede önbelleğe alınır) |
| **Yeniden Doğrulama (Revalidate)** | ISR (zaman tabanlı yenileme) |
| **Depolama Yok (No-store)** | Dinamik (her istekte) |

### Veri Akışı

| Kaynak | Desen |
|--------|-------|
| Veritabanı | Sunucu Bileşeni fetch |
| API | önbellekleme ile fetch |
| Kullanıcı girdisi | İstemci durumu + sunucu eylemi |

---

## 3. Yönlendirme Prensipleri

### Dosya Kuralları

| Dosya | Amaç |
|-------|------|
| `page.tsx` | Rota UI |
| `layout.tsx` | Paylaşılan düzen |
| `loading.tsx` | Yükleme durumu |
| `error.tsx` | Hata sınırı |
| `not-found.tsx` | 404 sayfası |

### Rota Organizasyonu

| Desen | Kullanım |
|-------|----------|
| Rota grupları `(isim)` | URL olmadan organize et |
| Paralel rotalar `@slot` | Çoklu aynı seviye sayfalar |
| Kesen (Intercepting) `(.)` | Modal bindirmeleri (overlays) |

---

## 4. API Rotaları

### Rota İşleyicileri (Route Handlers)

| Metot | Kullanım |
|-------|----------|
| GET | Veri oku |
| POST | Veri oluştur |
| PUT/PATCH | Veri güncelle |
| DELETE | Veri kaldır |

### En İyi Uygulamalar

- Girdiyi Zod ile doğrula
- Düzgün durum kodları döndür
- Hataları zarifçe işle
- Mümkün olduğunda Edge çalışma zamanı kullan

---

## 5. Performans Prensipleri

### Resim Optimizasyonu

- next/image bileşenini kullan
- Katlama (fold) üstü için öncelik ayarla
- Bulanık yer tutucu sağla
- Duyarlı boyutlar kullan

### Paket (Bundle) Optimizasyonu

- Ağır bileşenler için dinamik importlar
- Rota tabanlı kod bölme (otomatik)
- Paket analizcisi ile analiz et

---

## 6. Metadata

### Statik vs Dinamik

| Tip | Kullanım |
|-----|----------|
| Statik dışa aktarma | Sabit metadata |
| generateMetadata | Rota başına dinamik |

### Temel Etiketler

- title (50-60 karakter)
- description (150-160 karakter)
- Open Graph resimleri
- Canonical URL

---

## 7. Önbellekleme Stratejisi

### Önbellek Katmanları

| Katman | Kontrol |
|--------|---------|
| İstek | fetch seçenekleri |
| Veri | revalidate/etiketler |
| Tam rota | rota yapılandırması |

### Yeniden Doğrulama

| Metot | Kullanım |
|-------|----------|
| Zaman tabanlı | `revalidate: 60` |
| İsteğe bağlı | `revalidatePath/Tag` |
| Önbellek yok | `no-store` |

---

## 8. Sunucu Eylemleri (Server Actions)

### Kullanım Durumları

- Form gönderimleri
- Veri mutasyonları
- Yeniden doğrulama tetikleyicileri

### En İyi Uygulamalar

- 'use server' ile işaretle
- Tüm girdileri doğrula
- Tipli yanıtlar döndür
- Hataları işle

---

## 9. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Her yerde 'use client' | Varsayılan olarak Sunucu |
| İstemci bileşenlerinde fetch | Sunucuda fetch |
| Yükleme durumlarını atla | loading.tsx kullan |
| Hata sınırlarını görmezden gel | error.tsx kullan |
| Büyük istemci paketleri | Dinamik importlar |

---

## 10. Proje Yapısı

```
app/
├── (pazarlama)/     # Rota grubu
│   └── page.tsx
├── (paneli)/
│   ├── layout.tsx   # Panel düzeni
│   └── page.tsx
├── api/
│   └── [kaynak]/
│       └── route.ts
└── components/
    └── ui/
```

---

> **Unutma:** Sunucu Bileşenleri bir nedenle varsayılandır. Oradan başla, sadece gerektiğinde istemci ekle.
