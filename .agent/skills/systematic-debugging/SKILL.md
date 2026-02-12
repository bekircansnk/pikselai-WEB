---
name: systematic-debugging
description: Kök neden analizi ve kanıta dayalı doğrulama ile 4 aşamalı sistematik hata ayıklama metodolojisi. Karmaşık sorunları hata ayıklarken kullanın.
allowed-tools: Read, Glob, Grep
---

# Sistematik Hata Ayıklama

> Kaynak: obra/superpowers

## Genel Bakış
Bu yetenek, rastgele tahminleri önleyen ve çözmeden önce sorunların düzgün bir şekilde anlaşılmasını sağlayan yapılandırılmış bir hata ayıklama yaklaşımı sağlar.

## 4 Aşamalı Hata Ayıklama Süreci

### Aşama 1: Yeniden Üret (Reproduce)
Düzeltmeden önce, sorunu güvenilir bir şekilde yeniden üretin.

```markdown
## Yeniden Üretme Adımları
1. [Yeniden üretmek için kesin adım]
2. [Sonraki adım]
3. [Beklenen vs gerçek sonuç]

## Yeniden Üretme Oranı
- [ ] Her zaman (%100)
- [ ] Sık sık (%50-90)
- [ ] Bazen (%10-50)
- [ ] Nadir (<%10)
```

### Aşama 2: İzole Et (Isolate)
Kaynağı daraltın.

```markdown
## İzolasyon Soruları
- Bu ne zaman olmaya başladı?
- Yakın zamanda ne değişti?
- Tüm ortamlarda oluyor mu?
- Minimal kodla yeniden üretebilir miyiz?
- Bunu tetikleyen en küçük değişiklik nedir?
```

### Aşama 3: Anla (Understand)
Sadece semptomları değil, kök nedeni bulun.

```markdown
## Kök Neden Analizi
### 5 Neden (5 Whys)
1. Neden: [İlk gözlem]
2. Neden: [Daha derin sebep]
3. Neden: [Daha da derin]
4. Neden: [Yaklaşıyor]
5. Neden: [Kök neden]
```

### Aşama 4: Düzelt & Doğrula (Fix & Verify)
Düzeltin ve gerçekten düzeltildiğini doğrulayın.

```markdown
## Düzeltme Doğrulaması
- [ ] Hata artık yeniden üretilemiyor
- [ ] İlgili işlevsellik hala çalışıyor
- [ ] Yeni sorunlar ortaya çıkmadı
- [ ] Regresyonu önlemek için test eklendi
```

## Hata Ayıklama Kontrol Listesi

```markdown
## Başlamadan Önce
- [ ] Tutarlı bir şekilde yeniden üretilebiliyor
- [ ] Minimal yeniden üretim durumuna sahip
- [ ] Beklenen davranışı anlasildi

## İnceleme Sırasında
- [ ] Son değişiklikleri kontrol et (git log)
- [ ] Hatalar için logları kontrol et
- [ ] Gerekirse loglama ekle
- [ ] Hata ayıklayıcı/kesme noktaları (breakpoints) kullan

## Düzelttikten Sonra
- [ ] Kök neden belgelendi
- [ ] Düzeltme doğrulandı
- [ ] Regresyon testi eklendi
- [ ] Benzer kodlar kontrol edildi
```

## Yaygın Hata Ayıklama Komutları

```bash
# Son değişiklikler
git log --oneline -20
git diff HEAD~5

# Desen ara
grep -r "hataDeseni" --include="*.ts"

# Logları kontrol et
pm2 logs app-name --err --lines 100
```

## Anti-Desenler

❌ **Rastgele değişiklikler** - "Belki şunu değiştirirsem..."
❌ **Kanıtları görmezden gelme** - "Sebep bu olamaz"
❌ **Varsayma** - "Kesinlikle X olmalı" (kanıt olmadan)
❌ **Önce yeniden üretmeme** - Körlemesine düzeltme
❌ **Semptomlarda durma** - Kök nedeni bulmama
