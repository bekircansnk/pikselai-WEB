---
name: testing-patterns
description: Test desenleri ve prensipleri. Birim, entegrasyon, mocklama stratejileri.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Test Desenleri

> Güvenilir test takımları için prensipler.

---

## 1. Test Piramidi

```
        /\          E2E (Az)
       /  \         Kritik akışlar
      /----\
     /      \       Entegrasyon (Biraz)
    /--------\      API, DB sorguları
   /          \
  /------------\    Birim (Çok)
                    Fonksiyonlar, sınıflar
```

---

## 2. AAA Deseni

| Adım | Amaç |
|------|------|
| **Hazırla (Arrange)** | Test verilerini ayarla |
| **Çalıştır (Act)** | Test edilen kodu yürüt |
| **Doğrula (Assert)** | Sonucu doğrula |

---

## 3. Test Tipi Seçimi

### Her Birini Ne Zaman Kullanmalı

| Tip | En İyisi | Hız |
|-----|----------|-----|
| **Birim** | Saf fonksiyonlar, mantık | Hızlı (<50ms) |
| **Entegrasyon** | API, DB, servisler | Orta |
| **E2E** | Kritik kullanıcı akışları | Yavaş |

---

## 4. Birim Test Prensipleri

### İyi Birim Testleri

| Prensip | Anlamı |
|---------|--------|
| Hızlı | Her biri < 100ms |
| İzole | Harici bağımlılık yok |
| Tekrarlanabilir | Her zaman aynı sonuç |
| Kendi kendini kontrol eden | Manuel doğrulama yok |
| Zamanında | Kodla birlikte yazılmış |

### Neleri Birim Test Etmeli

| Test Et | Test Etme |
|---------|-----------|
| İş mantığı | Framework kodu |
| Uç durumlar | Üçüncü taraf kütüphaneler |
| Hata yönetimi | Basit getter'lar |

---

## 5. Entegrasyon Test Prensipleri

### Neleri Test Etmeli

| Alan | Odak |
|------|------|
| API uç noktaları | İstek/yanıt |
| Veritabanı | Sorgular, işlemler (transactions) |
| Harici servisler | Sözleşmeler |

### Kurulum/Kaldırma

| Aşama | Eylem |
|-------|-------|
| Before All | Kaynakları bağla |
| Before Each | Durumu sıfırla |
| After Each | Temizle |
| After All | Bağlantıyı kes |

---

## 6. Mocklama Prensipleri

### Ne Zaman Mocklanmalı

| Mockla | Mocklama |
|--------|----------|
| Harici API'ler | Test edilen kodu |
| Veritabanı (ünite) | Basit bağımlılıklar |
| Zaman/rastgele | Saf fonksiyonları |
| Ağ | Bellek içi depoları |

### Mock Tipleri

| Tip | Kullanım |
|-----|----------|
| Stub | Sabit değerler döndür |
| Spy | Çağrıları izle |
| Mock | Beklentileri ayarla |
| Fake | Basitleştirilmiş uygulama |

---

## 7. Test Organizasyonu

### İsimlendirme

| Desen | Örnek |
|-------|-------|
| Should davranışı | "hata döndürmeli ..." |
| When koşulu | "kullanıcı bulunamadığında ..." |
| Given-when-then | "X verildiğinde, Y olduğunda, Z olmalı" |

### Gruplama

| Seviye | Kullanım |
|--------|----------|
| describe | İlgili testleri grupla |
| it/test | Bireysel durum |
| beforeEach | Ortak kurulum |

---

## 8. Test Verisi

### Stratejiler

| Yaklaşım | Kullanım |
|----------|----------|
| Fabrikalar (Factories) | Test verisi üret |
| Fikstürler (Fixtures) | Önceden tanımlanmış veri setleri |
| İnşa Ediciler (Builders) | Akıcı nesne oluşturma |

### Prensipler

- Gerçekçi veriler kullan
- Önemsiz değerleri rastgeleleştir (faker)
- Ortak fikstürleri paylaş
- Veriyi minimal tut

---

## 9. En İyi Uygulamalar

| Uygulama | Neden |
|----------|-------|
| Test başına bir assert | Net başarısızlık nedeni |
| Bağımsız testler | Sıra bağımlılığı yok |
| Hızlı testler | Sık çalıştır |
| Açıklayıcı isimler | Kendi kendini belgeleyen |
| Temizle | Yan etkilerden kaçın |

---

## 10. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Uygulamayı test et | Davranışı test et |
| Test kodunu yinele | Fabrikalar kullan |
| Karmaşık test kurulumu | Basitleştir veya böl |
| Titrek (flaky) testleri görmezden gel | Kök nedeni düzelt |
| Temizliği atla | Durumu sıfırla |

---

> **Unutma:** Testler dokümantasyondur. Eğer birisi kodun ne yaptığını testlerden anlayamıyorsa, testleri yeniden yaz.
