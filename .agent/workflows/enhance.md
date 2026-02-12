---
description: Mevcut uygulamaya özellik ekler veya günceller. Yinelemeli geliştirme için kullanılır.
---

# /enhance - Uygulamayı Güncelle

$ARGUMENTS

---

## Görev

Bu komut mevcut uygulamaya özellikler ekler veya güncellemeler yapar.

### Adımlar:

1. **Mevcut Durumu Anla**
   - `session_manager.py` ile proje durumunu yükle
   - Mevcut özellikleri, teknoloji yığınını anla

2. **Değişiklikleri Planla**
   - Neyin ekleneceğini/değiştirileceğini belirle
   - Etkilenen dosyaları tespit et
   - Bağımlılıkları kontrol et

3. **Planı Kullanıcıya Sun** (büyük değişiklikler için)
   ```
   "Admin paneli eklemek için:
   - 15 yeni dosya oluşturacağım
   - 8 dosyayı güncelleyeceğim
   - ~10 dakika sürer
   
   Başlayayım mı?"
   ```

4. **Uygula**
   - İlgili ajanları çağır
   - Değişiklikleri yap
   - Test et

5. **Önizlemeyi Güncelle**
   - Sıcak yeniden yükleme (hot reload) veya yeniden başlatma

---

## Kullanım Örnekleri

```
/enhance karanlık mod ekle
/enhance admin paneli inşa et
/enhance ödeme sistemi entegre et
/enhance arama özelliği ekle
/enhance profil sayfasını düzenle
/enhance duyarlı (responsive) yap
```

---

## Dikkat

- Büyük değişiklikler için onay al
- Çakışan isteklerde uyar (örn. proje PostgreSQL kullanırken "Firebase kullan" denmesi)
- Her değişikliği git ile commit et
