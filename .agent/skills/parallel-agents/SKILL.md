---
name: parallel-agents
description: Çoklu ajan orkestrasyon desenleri. Birden fazla bağımsız görevin farklı alan uzmanlıklarıyla çalışabildiği veya kapsamlı analizin birden çok perspektif gerektirdiği durumlarda kullanın.
allowed-tools: Read, Glob, Grep
---

# Yerel Paralel Ajanlar

> Claude Code'un yerleşik Ajan Aracı aracılığıyla orkestrasyon

## Genel Bakış

Bu yetenek, Claude Code'un yerel ajan sistemi aracılığıyla birden fazla uzmanlaşmış ajanı koordine etmeyi sağlar. Harici scriptlerin aksine, bu yaklaşım tüm orkestrasyonu Claude'un kontrolü altında tutar.

## Orkestrasyon Ne Zaman Kullanılmalı

✅ **Şunlar için iyidir:**
- Çoklu uzmanlık alanı gerektiren karmaşık görevler
- Güvenlik, performans ve kalite perspektiflerinden kod analizi
- Kapsamlı incelemeler (mimari + güvenlik + test)
- Backend + frontend + veritabanı çalışması gerektiren özellik uygulaması

❌ **Şunlar için değil:**
- Basit, tek alanlı görevler
- Hızlı düzeltmeler veya küçük değişiklikler
- Tek bir ajanın yettiği görevler

---

## Yerel Ajan Çağırma

### Tek Ajan
```
Kimlik doğrulamasını incelemek için security-auditor ajanını kullan
```

### Sıralı Zincir
```
Önce, proje yapısını keşfetmek için explorer-agent kullan.
Sonra, API uç noktalarını incelemek için backend-specialist kullan.
Son olarak, test boşluklarını belirlemek için test-engineer kullan.
```

### Bağlam Aktarımı ile
```
React bileşenlerini analiz etmek için frontend-specialist kullan.
Bu bulgulara dayanarak, bileşen testleri oluşturması için test-engineer görevlendir.
```

### Önceki İşi Sürdürme
```
[agentId] ajanını sürdür ve ek gereksinimlerle devam et.
```

---

## Orkestrasyon Desenleri

### Desen 1: Kapsamlı Analiz
```
Ajanlar: explorer-agent → [alan-ajanları] → sentez

1. explorer-agent: Kod tabanı yapısını haritala
2. security-auditor: Güvenlik duruşu
3. backend-specialist: API kalitesi
4. frontend-specialist: UI/UX desenleri
5. test-engineer: Test kapsamı
6. Tüm bulguları sentezle
```

### Desen 2: Özellik İncelemesi
```
Ajanlar: etkilenen-alan-ajanları → test-engineer

1. Etkilenen alanları belirle (backend? frontend? ikisi de?)
2. İlgili alan ajanlarını çağır
3. test-engineer değişiklikleri doğrular
4. Önerileri sentezle
```

### Desen 3: Güvenlik Denetimi
```
Ajanlar: security-auditor → penetration-tester → sentez

1. security-auditor: Yapılandırma ve kod incelemesi
2. penetration-tester: Aktif güvenlik açığı testi
3. Önceliklendirilmiş iyileştirme ile sentezle
```

---

## Sentez Protokolü

Tüm ajanlar tamamlandıktan sonra sentezle:

```markdown
## Orkestrasyon Sentezi

### Görev Özeti
[Ne başarıldı]

### Ajan Katkıları
| Ajan | Bulgu |
|------|-------|
| security-auditor | X Buldu |
| backend-specialist | Y Belirledi |

### Konsolide Öneriler
1. **Kritik**: [A Ajanından Sorun]
2. **Önemli**: [B Ajanından Sorun]
3. **Olsa İyi Olur**: [C Ajanından İyileştirme]

### Eylem Öğeleri
- [ ] Kritik güvenlik sorununu düzelt
- [ ] API uç noktasını refactor et
- [ ] Eksik testleri ekle
```

---

## En İyi Uygulamalar

1. **Mevcut ajanlar** - 17 uzmanlaşmış ajan orkestre edilebilir
2. **Mantıksal sıralama** - Keşif → Analiz → Uygulama → Test
3. **Bağlam paylaş** - İlgili bulguları sonraki ajanlara aktar
4. **Tek sentez** - Ayrı çıktılar yerine tek bir birleşik rapor
5. **Değişiklikleri doğrula** - Kod değişiklikleri için her zaman test-engineer dahil et

---

## Temel Faydalar

- ✅ **Tek oturum** - Tüm ajanlar bağlamı paylaşır
- ✅ **YZ kontrollü** - Claude otonom olarak orkestre eder
- ✅ **Yerel entegrasyon** - Yerleşik Keşif, Plan ajanlarıyla çalışır
- ✅ **Sürdürme desteği** - Önceki ajan çalışmasına devam edebilir
- ✅ **Bağlam aktarımı** - Bulgular ajanlar arasında akar
