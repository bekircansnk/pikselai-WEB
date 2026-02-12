---
description: Hata ayıklama komutu. Sistematik sorun incelemesi için HATA AYIKLAMA (DEBUG) modunu etkinleştirir.
---

# /debug - Sistematik Sorun İncelemesi

$ARGUMENTS

---

## Amaç

Bu komut, sorunların, hataların veya beklenmedik davranışların sistematik olarak incelenmesi için HATA AYIKLAMA modunu etkinleştirir.

---

## Davranış

`/debug` tetiklendiğinde:

1. **Bilgi topla**
   - Hata mesajı
   - Yeniden üretme adımları
   - Beklenen vs gerçek davranış
   - Son değişiklikler

2. **Hipotezler oluştur**
   - Olası nedenleri listele
   - Olasılığa göre sırala

3. **Sistematik olarak incele**
   - Her hipotezi test et
   - Logları, veri akışını kontrol et
   - Eleme yöntemini kullan

4. **Düzelt ve önle**
   - Düzeltmeyi uygula
   - Kök nedeni açıkla
   - Önleme tedbirleri ekle

---

## Çıktı Formatı

```markdown
## 🔍 Hata Ayıklama: [Sorun]

### 1. Semptom
[Ne oluyor]

### 2. Toplanan Bilgiler
- Hata: `[hata mesajı]`
- Dosya: `[dosya yolu]`
- Satır: [satır numarası]

### 3. Hipotezler
1. ❓ [En olası neden]
2. ❓ [İkinci olasılık]
3. ❓ [Daha az olası neden]

### 4. İnceleme

**Hipotez 1 Testi:**
[Ne kontrol ettim] → [Sonuç]

**Hipotez 2 Testi:**
[Ne kontrol ettim] → [Sonuç]

### 5. Kök Neden
🎯 **[Bunun neden olduğunun açıklaması]**

### 6. Düzeltme
```[dil]
// Önce
[bozuk kod]

// Sonra
[düzeltilmiş kod]
```

### 7. Önleme
🛡️ [Gelecekte bu nasıl önlenir]
```

---

## Örnekler

```
/debug giriş çalışmıyor
/debug API 500 döndürüyor
/debug form gönderilmiyor
/debug veri kaydedilmiyor
```

---

## Temel Prensipler

- **Varsaymadan önce sor** - tam hata bağlamını al
- **Hipotezleri test et** - rastgele tahmin etme
- **Nedenini açıkla** - sadece neyin düzeltileceğini değil
- **Tekrarı önle** - testler, doğrulama ekle
