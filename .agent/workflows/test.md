---
description: Test üretme ve test çalıştırma komutu. Kod için testler oluşturur ve yürütür.
---

# /test - Test Üretimi ve Yürütme

$ARGUMENTS

---

## Amaç

Bu komut testler üretir, mevcut testleri çalıştırır veya test kapsamını kontrol eder.

---

## Alt Komutlar

```
/test                - Tüm testleri çalıştır
/test [dosya/özellik]- Belirli hedef için test üret
/test coverage       - Test kapsamı raporunu göster
/test watch          - Testleri izleme modunda çalıştır
```

---

## Davranış

### Test Üretimi

Bir dosya veya özelliği test etmesi istendiğinde:

1. **Kodu analiz et**
   - Fonksiyonları ve metotları belirle
   - Uç durumları bul
   - Mocklanacak bağımlılıkları tespit et

2. **Test senaryoları üret**
   - Mutlu yol testleri
   - Hata durumları
   - Uç durumlar
   - Entegrasyon testleri (gerekirse)

3. **Testleri yaz**
   - Projenin test framework'ünü kullan (Jest, Vitest, vb.)
   - Mevcut test desenlerini izle
   - Harici bağımlılıkları mockla

---

## Çıktı Formatı

### Test Üretimi İçin

```markdown
## 🧪 Testler: [Hedef]

### Test Planı
| Test Senaryosu | Tip | Kapsam |
|----------------|-----|--------|
| Kullanıcı oluşturmalı | Birim | Mutlu yol |
| Geçersiz epostayı reddetmeli | Birim | Doğrulama |
| Db hatasını işlemeli | Birim | Hata durumu |

### Üretilen Testler

`tests/[dosya].test.ts`

[Testleri içeren kod bloğu]

---

Şununla çalıştır: `npm test`
```

### Test Yürütme İçin

```
🧪 Testler çalıştırılıyor...

✅ auth.test.ts (5 geçti)
✅ user.test.ts (8 geçti)
❌ order.test.ts (2 geçti, 1 kaldı)

Başarısız:
  ✗ indirimi toplamla hesaplamalı
    Beklenen: 90
    Alınan: 100

Toplam: 15 test (14 geçti, 1 kaldı)
```

---

## Örnekler

```
/test src/services/auth.service.ts
/test kullanıcı kayıt akışı
/test coverage
/test başarısız testleri düzelt
```

---

## Test Desenleri

### Birim Test Yapısı

```typescript
describe('AuthService', () => {
  describe('login', () => {
    it('should return token for valid credentials', async () => {
      // Arrange
      const credentials = { email: 'test@test.com', password: 'pass123' };
      
      // Act
      const result = await authService.login(credentials);
      
      // Assert
      expect(result.token).toBeDefined();
    });

    it('should throw for invalid password', async () => {
      // Arrange
      const credentials = { email: 'test@test.com', password: 'wrong' };
      
      // Act & Assert
      await expect(authService.login(credentials)).rejects.toThrow('Invalid credentials');
    });
  });
});
```

---

## Temel Prensipler

- **Uygulamayı değil davranışı test et**
- **Test başına bir iddia (assertion)** (pratik olduğunda)
- **Açıklayıcı test isimleri**
- **Arrange-Act-Assert deseni**
- **Harici bağımlılıkları mockla**
