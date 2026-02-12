---
name: database-design
description: Veritabanı tasarım prensipleri ve karar verme. Şema tasarımı, indeksleme stratejisi, ORM seçimi, sunucusuz veritabanları.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Veritabanı Tasarımı

> **DÜŞÜNMEYİ öğren, SQL desenlerini kopyalamayı değil.**

## 🎯 Seçici Okuma Kuralı

**SADECE istekle ilgili dosyaları oku!** İçerik haritasını kontrol et, ihtiyacın olanı bul.

| Dosya | Açıklama | Ne Zaman Okunmalı |
|-------|----------|-------------------|
| `database-selection.md` | PostgreSQL vs Neon vs Turso vs SQLite | Veritabanı seçerken |
| `orm-selection.md` | Drizzle vs Prisma vs Kysely | ORM seçerken |
| `schema-design.md` | Normalizasyon, PK'lar, ilişkiler | Şema tasarlarken |
| `indexing.md` | İndeks tipleri, bileşik indeksler | Performans ayarlama |
| `optimization.md` | N+1, EXPLAIN ANALYZE | Sorgu optimizasyonu |
| `migrations.md` | Güvenli migrasyonlar, serverless DB'ler | Şema değişiklikleri |

---

## ⚠️ Temel Prensip

- Belirsiz olduğunda kullanıcıya veritabanı tercihlerini SOR
- BAĞLAMA göre veritabanı/ORM seç
- Her şey için varsayılan olarak PostgreSQL kullanma

---

## Karar Kontrol Listesi

Şema tasarlamadan önce:

- [ ] Kullanıcıya veritabanı tercihi soruldu mu?
- [ ] BU bağlam için veritabanı seçildi mi?
- [ ] Dağıtım ortamı düşünüldü mü?
- [ ] İndeks stratejisi planlandı mı?
- [ ] İlişki tipleri tanımlandı mı?

---

## Anti-Desenler

❌ Basit uygulamalar için varsayılan olarak PostgreSQL (SQLite yetebilir)
❌ İndekslemeyi atlamak
❌ Üretimde SELECT * kullanmak
❌ Yapılandırılmış veri daha iyiyken JSON saklamak
❌ N+1 sorgularını görmezden gelmek
