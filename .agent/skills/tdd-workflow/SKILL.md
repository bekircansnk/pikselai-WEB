---
name: tdd-workflow
description: Test Güdümlü Geliştirme (TDD) iş akışı prensipleri. KIRMIZI-YEŞİL-REFACTOR döngüsü.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# TDD İş Akışı

> Önce testleri yaz, sonra kodu.

---

## 1. TDD Döngüsü

```
🔴 KIRMIZI → Başarısız test yaz
    ↓
🟢 YEŞİL → Geçmek için minimum kodu yaz
    ↓
🔵 REFACTOR → Kod kalitesini artır
    ↓
   Tekrarla...
```

---

## 2. TDD'nin Üç Kuralı

1. Üretim kodunu sadece başarısız bir testi geçmek için yaz
2. Sadece başarısızlığı göstermek için yeterli testi yaz
3. Sadece testi geçecek kadar kod yaz

---

## 3. KIRMIZI Aşama Prensipleri

### Ne Yazmalı

| Odak | Örnek |
|------|-------|
| Davranış | "iki sayıyı toplamalı" |
| Uç durumlar | "boş girdiyi işlemeli" |
| Hata durumları | "geçersiz veri için hata fırlatmalı" |

### KIRMIZI Aşama Kuralları

- Test önce başarısız olmalı
- Test adı beklenen davranışı tanımlamalı
- Test başına bir iddia (assertion) (ideal olarak)

---

## 4. YEŞİL Aşama Prensipleri

### Minimum Kod

| Prensip | Anlamı |
|---------|--------|
| **YAGNI** | Ona İhtiyacın Olmayacak (You Aren't Gonna Need It) |
| **En basiti** | Geçmek için minimumu yaz |
| **Optimizasyon yok** | Sadece çalışmasını sağla |

### YEŞİL Aşama Kuralları

- Gereksiz kod yazma
- Henüz optimize etme
- Testi geç, daha fazlası değil

---

## 5. REFACTOR Aşama Prensipleri

### Ne İyileştirilmeli

| Alan | Eylem |
|------|-------|
| Yineleme | Ortak kodu çıkar |
| İsimlendirme | Niyeti netleştir |
| Yapı | Organizasyonu iyileştir |
| Karmaşıklık | Mantığı basitleştir |

### REFACTOR Kuralları

- Tüm testler yeşil kalmalı
- Küçük artımlı değişiklikler
- Her refactordan sonra commit et

---

## 6. AAA Deseni

Her test şunu izler:

| Adım | Amaç |
|------|------|
| **Hazırla (Arrange)** | Test verilerini ayarla |
| **Çalıştır (Act)** | Test edilen kodu yürüt |
| **Doğrula (Assert)** | Beklenen sonucu doğrula |

---

## 7. TDD Ne Zaman Kullanılmalı

| Senaryo | TDD Değeri |
|---------|------------|
| Yeni özellik | Yüksek |
| Hata düzeltme | Yüksek (önce test yaz) |
| Karmaşık mantık | Yüksek |
| Keşifsel | Düşük (spike, sonra TDD) |
| UI düzeni | Düşük |

---

## 8. Test Önceliklendirmesi

| Öncelik | Test Tipi |
|---------|-----------|
| 1 | Mutlu yol (Happy path) |
| 2 | Hata durumları |
| 3 | Uç durumlar |
| 4 | Performans |

---

## 9. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| KIRMIZI aşamayı atla | Testin başarısız olduğunu izle |
| Sonradan test yaz | Testleri önce yaz |
| Başlangıçta aşırı mühendislik | Basit tut |
| Çoklu iddialar | Test başına tek davranış |
| Uygulamayı test et | Davranışı test et |

---

## 10. YZ Destekli TDD

### Çoklu Ajan Deseni

| Ajan | Rol |
|------|-----|
| Ajan A | Başarısız testler yaz (KIRMIZI) |
| Ajan B | Geçmek için uygula (YEŞİL) |
| Ajan C | Optimize et (REFACTOR) |

---

> **Unutma:** Test spesifikasyondur. Eğer bir test yazamıyorsan, gereksinimi anlamamışsındır.
