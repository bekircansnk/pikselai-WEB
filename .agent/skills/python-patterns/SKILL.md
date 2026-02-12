---
name: python-patterns
description: Python geliştirme prensipleri ve karar verme. Framework seçimi, asenkron desenler, tip ipuçları (type hints), proje yapısı. Kopyalamayı değil, düşünmeyi öğretir.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Python Desenleri

> 2025 için Python geliştirme prensipleri ve karar verme.
> **DÜŞÜNMEYİ öğren, desenleri ezberlemeyi değil.**

---

## ⚠️ Bu Yetenek Nasıl Kullanılır

Bu yetenek kopyalanacak sabit kodları değil, **karar verme prensiplerini** öğretir.

- Belirsiz olduğunda kullanıcıya framework tercihini SOR
- BAĞLAMA göre async vs sync seç
- Her seferinde aynı framework'e varsayılan atama

---

## 1. Framework Seçimi (2025)

### Karar Ağacı

```
Ne inşa ediyorsun?
│
├── API-öncelikli / Mikroservisler
│   └── FastAPI (async, modern, hızlı)
│
├── Full-stack web / CMS / Admin
│   └── Django (pilleri dahil)
│
├── Basit / Script / Öğrenme
│   └── Flask (minimal, esnek)
│
├── YZ/ML API sunumu
│   └── FastAPI (Pydantic, async, uvicorn)
│
└── Arka plan çalışanları (workers)
    └── Celery + herhangi bir framework
```

### Karşılaştırma Prensipleri

| Faktör | FastAPI | Django | Flask |
|--------|---------|--------|-------|
| **En iyisi** | API'ler, mikroservisler | Full-stack, CMS | Basit, öğrenme |
| **Async** | Yerel (Native) | Django 5.0+ | Eklentilerle |
| **Admin** | Manuel | Yerleşik | Eklentilerle |
| **ORM** | Kendin seç | Django ORM | Kendin seç |
| **Öğrenme eğrisi** | Düşük | Orta | Düşük |

---

## 2. Async vs Sync Kararı

### Ne Zaman Async Kullanmalı

```
async def şunlar için daha iyidir:
├── I/O-bağlı işlemler (veritabanı, HTTP, dosya)
├── Çok sayıda eşzamanlı bağlantı
├── Gerçek zamanlı özellikler
├── Mikroservis iletişimi
└── FastAPI/Starlette/Django ASGI

def (sync) şunlar için daha iyidir:
├── CPU-bağlı işlemler
├── Basit scriptler
├── Eski kod tabanı (legacy)
├── Ekip async'e aşina değilse
└── Bloklayan kütüphaneler (async sürümü yoksa)
```

### Altın Kural

```
I/O-bağlı → async (dışarıyı bekliyor)
CPU-bağlı → sync + multiprocessing (hesaplıyor)

Yapma:
├── Sync ve async'i dikkatsizce karıştırma
├── Async kodda sync kütüphaneler kullanma (bloklar)
└── CPU işi için async zorlama
```

---

## 3. Tip İpuçları (Type Hints) Stratejisi

### Ne Zaman Tiplemeli

```
Her zaman tiple:
├── Fonksiyon parametreleri
├── Dönüş tipleri
├── Sınıf öznitelikleri (attributes)
├── Genel API'ler

Atlayabilirsin:
├── Yerel değişkenler (çıkarım çalışsın)
├── Tek seferlik scriptler
├── Testler (genellikle)
```

### Doğrulama için Pydantic

```
Pydantic ne zaman kullanılır:
├── API istek/yanıt modelleri
├── Yapılandırma/ayarlar
├── Veri doğrulama
├── Serileştirme

Faydaları:
├── Çalışma zamanı doğrulaması
├── Otomatik oluşturulan JSON şeması
├── FastAPI ile yerel çalışır
└── Net hata mesajları
```

---

## 4. Proje Yapısı Prensipleri

### FastAPI Yapı Prensipleri

```
Özelliğe veya katmana göre organize et:

Katmana göre:
├── routes/ (API uç noktaları)
├── services/ (iş mantığı)
├── models/ (veritabanı modelleri)
├── schemas/ (Pydantic modelleri)
└── dependencies/ (paylaşılan bağımlılıklar)

Özelliğe göre:
├── users/
│   ├── routes.py
│   ├── service.py
│   └── schemas.py
└── products/
    └── ...
```

---

## 5. Django Prensipleri (2025)

### Django En İyi Uygulamaları

```
Model tasarımı:
├── Şişman modeller, zayıf görünümler (Fat models, thin views)
├── Yaygın sorgular için yöneticiler (managers) kullan
├── Paylaşılan alanlar için soyut temel sınıflar

Sorgular:
├── FK'lar için select_related()
├── M2M için prefetch_related()
├── N+1 sorgularından kaçın
└── Belirli alanlar için .only() kullan
```

---

## 6. FastAPI Prensipleri

### Bağımlılık Enjeksiyonu

```
Bağımlılıkları şunlar için kullan:
├── Veritabanı oturumları
├── Mevcut kullanıcı / Kimlik doğrulama
├── Yapılandırma
├── Paylaşılan kaynaklar

Faydaları:
├── Test edilebilirlik (bağımlılıkları mockla)
├── Temiz ayrım
├── Otomatik temizlik (yield)
```

---

## 7. Hata Yönetimi Prensipleri

### İstisna Stratejisi

```
Desen:
├── Servislerde alan (domain) istisnaları fırlat
├── İşleyicilerde (handlers) yakala ve dönüştür
└── İstemci temiz hata yanıtı alır

Dahil Et:
├── Hata kodu (programatik)
├── Mesaj (insan tarafından okunabilir)
├── Detaylar (varsa alan seviyesinde)
└── Yığın izleri (stack traces) YOK (güvenlik)
```

---

## 8. Test Prensipleri

### Test Stratejisi

| Tip | Amaç | Araçlar |
|-----|------|---------|
| **Birim** | İş mantığı | pytest |
| **Entegrasyon** | API uç noktaları | pytest + httpx/TestClient |
| **E2E** | Tam akışlar | pytest + DB |

### Async Test Etme

```python
# Async testler için pytest-asyncio kullan

import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_endpoint():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/users")
        assert response.status_code == 200
```

---

## 10. Karar Kontrol Listesi

Uygulamadan önce:

- [ ] **Kullanıcıya framework tercihi soruldu mu?**
- [ ] **BU bağlam için framework seçildi mi?** (sadece varsayılan değil)
- [ ] **Async vs sync kararı verildi mi?**
- [ ] **Tip ipucu stratejisi planlandı mı?**
- [ ] **Proje yapısı tanımlandı mı?**
- [ ] **Hata yönetimi planlandı mı?**

---

> **Unutma**: Python desenleri SİZİN özel bağlamınız için karar vermekle ilgilidir. Kodu kopyalamayın—uygulamanıza en iyi neyin hizmet ettiğini düşünün.
