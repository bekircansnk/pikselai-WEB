---
name: webapp-testing
description: Web uygulaması test prensipleri. E2E, Playwright, derin denetim stratejileri.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Web Uygulaması Testi

> Her şeyi keşfet ve test et. Test edilmemiş hiçbir rota bırakma.

## 🔧 Çalışma Zamanı Scriptleri

**Otomatik tarayıcı testi için bunları çalıştır:**

| Script | Amaç | Kullanım |
|--------|------|----------|
| `scripts/playwright_runner.py` | Temel tarayıcı testi | `python scripts/playwright_runner.py https://example.com` |
| | Ekran görüntüsü ile | `python scripts/playwright_runner.py <url> --screenshot` |
| | Erişilebilirlik kontrolü | `python scripts/playwright_runner.py <url> --a11y` |

**Gereksinimler:** `pip install playwright && playwright install chromium`

---

## 1. Derin Denetim Yaklaşımı

### Önce Keşif

| Hedef | Nasıl Bulunur |
|-------|---------------|
| Rotalar | app/, pages/, router dosyalarını tara |
| API uç noktaları | HTTP metodlarını Grep'le |
| Bileşenler | Bileşen dizinlerini bul |
| Özellikler | Dokümantasyonu oku |

### Sistematik Test

1. **Haritala** - Tüm rotaları/API'leri listele
2. **Tara** - Yanıt verip vermediklerini doğrula
3. **Test Et** - Kritik yolları kapsa

---

## 2. Web İçin Test Piramidi

```
        /\          E2E (Az)
       /  \         Kritik kullanıcı akışları
      /----\
     /      \       Entegrasyon (Biraz)
    /--------\      API, veri akışı
   /          \
  /------------\    Bileşen (Çok)
                    Bireysel UI parçaları
```

---

## 3. E2E Test Prensipleri

### Neleri Test Etmeli

| Öncelik | Testler |
|---------|---------|
| 1 | Mutlu yol kullanıcı akışları |
| 2 | Kimlik doğrulama akışları |
| 3 | Kritik iş eylemleri |
| 4 | Hata yönetimi |

### E2E En İyi Uygulamaları

| Uygulama | Neden |
|----------|-------|
| data-testid kullan | Kararlı seçiciler |
| Öğeleri bekle | Titrek (flaky) testlerden kaçın |
| Temiz durum | Bağımsız testler |
| Uygulama detaylarından kaçın | Kullanıcı davranışını test et |

---

## 4. Playwright Prensipleri

### Temel Kavramlar

| Kavram | Kullanım |
|--------|----------|
| Sayfa Nesne Modeli | Sayfa mantığını kapsülleyin |
| Fikstürler | Yeniden kullanılabilir test kurulumu |
| İddialar (Assertions) | Yerleşik otomatik bekleme |
| İz Görüntüleyici (Trace Viewer) | Hataları ayıkla |

### Yapılandırma

| Ayar | Öneri |
|------|-------|
| Yeniden Denemeler | CI üzerinde 2 |
| İz (Trace) | on-first-retry (ilk yeniden denemede) |
| Ekran Görüntüleri | on-failure (hatada) |
| Video | retain-on-failure (hatada sakla) |

---

## 5. Görsel Test

### Ne Zaman Kullanmalı

| Senaryo | Değer |
|---------|-------|
| Tasarım sistemi | Yüksek |
| Pazarlama sayfaları | Yüksek |
| Bileşen kütüphanesi | Orta |
| Dinamik içerik | Daha Düşük |

### Strateji

- Temel (baseline) ekran görüntüleri
- Değişikliklerde karşılaştır
- Görsel farkları incele
- Kasıtlı değişiklikleri güncelle

---

## 6. API Test Prensipleri

### Kapsama Alanları

| Alan | Testler |
|------|---------|
| Durum kodları | 200, 400, 404, 500 |
| Yanıt şekli | Şema ile eşleşiyor mu |
| Hata mesajları | Kullanıcı dostu mu |
| Uç durumlar | Boş, büyük, özel karakterler |

---

## 7. Test Organizasyonu

### Dosya Yapısı

```
tests/
├── e2e/           # Tam kullanıcı akışları
├── integration/   # API, veri
├── component/     # UI birimleri
└── fixtures/      # Paylaşılan veriler
```

### İsimlendirme Kuralı

| Desen | Örnek |
|-------|-------|
| Özellik tabanlı | `login.spec.ts` |
| Açıklayıcı | `user-can-checkout.spec.ts` |

---

## 8. CI Entegrasyonu

### Boru Hattı Adımları

1. Bağımlılıkları yükle
2. Tarayıcıları yükle
3. Testleri çalıştır
4. Eserleri (izler, ekran görüntüleri) yükle

### Paralelleştirme

| Strateji | Kullanım |
|----------|----------|
| Dosya başına | Playwright varsayılanı |
| Parçalama (Sharding) | Büyük takımlar (suites) |
| İşçiler (Workers) | Çoklu tarayıcılar |

---

## 9. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Uygulamayı test et | Davranışı test et |
| Beklemeleri sabit kodla | Otomatik beklemeyi kullan |
| Temizliği atla | Testleri izole et |
| Titrek testleri görmezden gel | Kök nedeni düzelt |

---

> **Unutma:** E2E testleri pahalıdır. Onları sadece kritik yollar için kullan.
