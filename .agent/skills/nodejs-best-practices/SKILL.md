---
name: nodejs-best-practices
description: Node.js geliştirme prensipleri ve karar verme. Framework seçimi, asenkron desenler, güvenlik ve mimari. Kopyalamayı değil, düşünmeyi öğretir.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Node.js En İyi Uygulamaları

> 2025'te Node.js geliştirme için prensipler ve karar verme.
> **DÜŞÜNMEYİ öğren, kod desenlerini ezberlemeyi değil.**

---

## ⚠️ Bu Yetenek Nasıl Kullanılır

Bu yetenek kopyalanacak sabit kodları değil, **karar verme prensiplerini** öğretir.

- Belirsiz olduğunda kullanıcıya tercihlerini SOR
- BAĞLAMA göre framework/desen seç
- Her seferinde aynı çözüme varsayılan atama

---

## 1. Framework Seçimi (2025)

### Karar Ağacı

```
Ne inşa ediyorsun?
│
├── Edge/Serverless (Cloudflare, Vercel)
│   └── Hono (sıfır bağımlılık, ultra hızlı soğuk başlangıç)
│
├── Yüksek Performanslı API
│   └── Fastify (Express'ten 2-3 kat daha hızlı)
│
├── Kurumsal/Ekip aşinalığı
│   └── NestJS (yapılandırılmış, DI, dekoratörler)
│
├── Eski/Kararlı/Maksimum ekosistem
│   └── Express (olgun, en çok middleware)
│
└── Frontend ile tam yığın
    └── Next.js API Rotaları veya tRPC
```

### Karşılaştırma Prensipleri

| Faktör | Hono | Fastify | Express |
|--------|------|---------|---------|
| **En iyisi** | Edge, serverless | Performans | Eski sistemler, öğrenme |
| **Soğuk başlangıç** | En hızlı | Hızlı | Orta |
| **Ekosistem** | Büyüyor | İyi | En büyük |
| **TypeScript** | Yerel | Mükemmel | İyi |
| **Öğrenme eğrisi** | Düşük | Orta | Düşük |

---

## 2. Çalışma Zamanı Hususları (2025)

### Yerel TypeScript

```
Node.js 22+: --experimental-strip-types
├── .ts dosyalarını doğrudan çalıştır
├── Basit projeler için derleme adımına gerek yok
└── Şunlar için düşün: scriptler, basit API'ler
```

### Modül Sistemi Kararı

```
ESM (import/export)
├── Modern standart
├── Daha iyi tree-shaking
├── Asenkron modül yükleme
└── Kullanım: yeni projeler

CommonJS (require)
├── Eski uyumluluk
├── Daha fazla npm paketi desteği
└── Kullanım: mevcut kod tabanları, bazı uç durumlar
```

---

## 3. Mimari Prensipleri

### Katmanlı Yapı Kavramı

```
İstek Akışı:
│
├── Controller/Rota Katmanı
│   ├── HTTP detaylarını işler
│   ├── Sınırda girdi doğrulama
│   └── Servis katmanını çağırır
│
├── Servis Katmanı
│   ├── İş mantığı
│   ├── Framework-bağımsız
│   └── Depo katmanını çağırır
│
└── Depo (Repository) Katmanı
    ├── Sadece veri erişimi
    ├── Veritabanı sorguları
    └── ORM etkileşimleri
```

### Neden Önemli:
- **Test Edilebilirlik**: Katmanları bağımsız olarak mockla
- **Esneklik**: İş mantığına dokunmadan veritabanını değiştir
- **Netlik**: Her katmanın tek sorumluluğu var

---

## 4. Hata Yönetimi Prensipleri

### Merkezi Hata Yönetimi

```
Desen:
├── Özel hata sınıfları oluştur
├── Herhangi bir katmandan fırlat
├── En üst seviyede yakala (middleware)
└── Tutarlı yanıt formatla
```

### Durum Kodu Seçimi

| Durum | Statü | Ne Zaman |
|-------|-------|--------|
| Kötü girdi | 400 | İstemci geçersiz veri gönderdi |
| Kimlik doğrulama yok | 401 | Eksik veya geçersiz kimlik bilgileri |
| İzin yok | 403 | Geçerli kimlik, ancak izin yok |
| Bulunamadı | 404 | Kaynak mevcut değil |
| Çakışma | 409 | Kopya veya durum çakışması |
| Doğrulama | 422 | Şema geçerli ama iş kuralları başarısız |
| Sunucu hatası | 500 | Bizim hatamız, her şeyi logla |

---

## 5. Asenkron Desen Prensipleri

### Her Birini Ne Zaman Kullanmalı

| Desen | Ne Zaman Kullanmalı |
|-------|---------------------|
| `async/await` | Sıralı asenkron işlemler |
| `Promise.all` | Paralel bağımsız işlemler |
| `Promise.allSettled` | Bazılarının başarısız olabildiği paralel işlemler |
| `Promise.race` | Zaman aşımı veya ilk yanıt kazanır |

### Olay Döngüsü (Event Loop) Farkındalığı

- Üretimde asla senkron metodlar kullanma (fs.readFileSync, vb.)
- CPU yoğun işleri iş parçacıklarına veya dışarıya aktar
- Büyük veriler için akış (streaming) kullan

---

## 6. Doğrulama Prensipleri

### Sınırlarda Doğrula

```
Nerede doğrulamalı:
├── API giriş noktası (istek gövdesi/parametreleri)
├── Veritabanı işlemlerinden önce
├── Harici veriler (API yanıtları, dosya yüklemeleri)
└── Ortam değişkenleri (başlangıçta)
```

### Doğrulama Kütüphanesi Seçimi

| Kütüphane | En İyisi |
|-----------|----------|
| **Zod** | TypeScript öncelikli, çıkarım |
| **Valibot** | Daha küçük paket (tree-shakeable) |
| **ArkType** | Performans kritik |
| **Yup** | Mevcut React Form kullanımı |

---

## 7. Güvenlik Prensipleri

### Güvenlik Kontrol Listesi (Kod Değil)

- [ ] **Girdi doğrulama**: Tüm girdiler doğrulanmış
- [ ] **Parametreli sorgular**: SQL için string birleştirme yok
- [ ] **Şifre hashleme**: bcrypt veya argon2
- [ ] **JWT doğrulama**: İmzayı ve süreyi her zaman doğrula
- [ ] **Hız sınırlama**: Kötüye kullanımdan koru
- [ ] **Güvenlik başlıkları**: Helmet.js veya eşdeğeri
- [ ] **HTTPS**: Üretimde her yerde
- [ ] **Sırlar**: Sadece ortam değişkenleri
- [ ] **Bağımlılıklar**: Düzenli olarak denetlenmiş

---

## 8. Test Prensipleri

### Test Stratejisi Seçimi

| Tip | Amaç | Araçlar |
|-----|------|---------|
| **Birim** | İş mantığı | node:test, Vitest |
| **Entegrasyon** | API uç noktaları | Supertest |
| **E2E** | Tam akışlar | Playwright |

---

## 10. Kaçınılması Gereken Anti-Desenler

### ❌ YAPMA:
- Yeni edge projeleri için Express kullanma (Hono kullan)
- Üretim kodunda senkron metodlar kullanma
- İş mantığını controller'lara koyma
- Girdi doğrulamasını atlama
- Sırları kodlama (hardcode)
- Doğrulamadan harici verilere güvenme
- Olay döngüsünü CPU işiyle bloklama

### ✅ YAP:
- Bağlama göre framework seç
- Belirsiz olduğunda kullanıcıya tercihleri sor
- Büyüyen projeler için katmanlı mimari kullan
- Tüm girdileri doğrula
- Sırlar için ortam değişkenleri kullan
- Optimize etmeden önce profille

---

## 11. Karar Kontrol Listesi

Uygulamadan önce:

- [ ] **Kullanıcıya yığın tercihi soruldu mu?**
- [ ] **BU bağlam için framework seçildi mi?** (sadece varsayılan değil)
- [ ] **Dağıtım hedefi düşünüldü mü?**
- [ ] **Hata yönetimi stratejisi planlandı mı?**
- [ ] **Doğrulama noktaları belirlendi mi?**
- [ ] **Güvenlik gereksinimleri düşünüldü mü?**

---

> **Unutma**: Node.js en iyi uygulamaları, desenleri ezberlemek değil, karar vermektir. Her proje, gereksinimlerine göre taze bir değerlendirmeyi hak eder.
