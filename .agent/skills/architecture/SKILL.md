---
name: architecture
description: Mimari karar verme çerçevesi. Gereksinim analizi, ödünleşim değerlendirmesi, ADR dokümantasyonu. Mimari kararlar alırken veya sistem tasarımını analiz ederken kullanın.
allowed-tools: Read, Glob, Grep
---

# Mimari Karar Çerçevesi

> "Gereksinimler mimariyi yönlendirir. Ödünleşimler (trade-offs) kararları bilgilendirir. ADR'ler gerekçeyi yakalar."

## 🎯 Seçici Okuma Kuralı

**SADECE istekle ilgili dosyaları oku!** İçerik haritasını kontrol et, ihtiyacın olanı bul.

| Dosya | Açıklama | Ne Zaman Okunmalı |
|-------|----------|-------------------|
| `context-discovery.md` | Sorulacak sorular, proje sınıflandırması | Mimari tasarımına başlarken |
| `trade-off-analysis.md` | ADR şablonları, ödünleşim çerçevesi | Kararları belgelerken |
| `pattern-selection.md` | Karar ağaçları, anti-desenler | Desen seçerken |
| `examples.md` | MVP, SaaS, Kurumsal örnekler | Referans uygulamalar |
| `patterns-reference.md` | Desenler için hızlı başvuru | Desen karşılaştırması |

---

## 🔗 İlgili Yetenekler

| Yetenek | Kullanım Amacı |
|---------|----------------|
| `@[skills/database-design]` | Veritabanı şema tasarımı |
| `@[skills/api-patterns]` | API tasarım desenleri |
| `@[skills/deployment-procedures]` | Dağıtım mimarisi |

---

## Temel Prensip

**"Basitlik en üstün karmaşıklıktır."**

- Basit başla
- Karmaşıklığı SADECE gerekli olduğu kanıtlandığında ekle
- Desenleri her zaman sonra ekleyebilirsin
- Karmaşıklığı kaldırmak, eklemekten ÇOK daha zordur

---

## Doğrulama Kontrol Listesi

Mimariyi kesinleştirmeden önce:

- [ ] Gereksinimler net bir şekilde anlaşıldı
- [ ] Kısıtlar belirlendi
- [ ] Her kararın ödünleşim analizi var
- [ ] Daha basit alternatifler düşünüldü
- [ ] Önemli kararlar için ADR'ler yazıldı
- [ ] Ekip uzmanlığı seçilen desenlerle eşleşiyor
