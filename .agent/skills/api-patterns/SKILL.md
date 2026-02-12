---
name: api-patterns
description: API tasarım prensipleri ve karar verme. REST vs GraphQL vs tRPC seçimi, yanıt formatları, sürümleme, sayfalama.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# API Desenleri

> 2025 için API tasarım prensipleri ve karar verme.
> **DÜŞÜNMEYİ öğren, sabit desenleri kopyalamayı değil.**

## 🎯 Seçici Okuma Kuralı

**SADECE istekle ilgili dosyaları oku!** İçerik haritasını kontrol et, ihtiyacın olanı bul.

---

## 📑 İçerik Haritası

| Dosya | Açıklama | Ne Zaman Okunmalı |
|-------|----------|-------------------|
| `api-style.md` | REST vs GraphQL vs tRPC karar ağacı | API tipi seçerken |
| `rest.md` | Kaynak isimlendirme, HTTP metodları, durum kodları | REST API tasarlarken |
| `response.md` | Zarf deseni, hata formatı, sayfalama | Yanıt yapısı |
| `graphql.md` | Şema tasarımı, ne zaman kullanılmalı, güvenlik | GraphQL düşünürken |
| `trpc.md` | TypeScript monorepo, tip güvenliği | TS fullstack projeleri |
| `versioning.md` | URI/Header/Query sürümleme | API evrim planlaması |
| `auth.md` | JWT, OAuth, Passkey, API Anahtarları | Auth deseni seçimi |
| `rate-limiting.md` | Token bucket, sliding window | API koruması |
| `documentation.md` | OpenAPI/Swagger en iyi uygulamalar | Dokümantasyon |
| `security-testing.md` | OWASP API İlk 10, auth/authz testi | Güvenlik denetimleri |

---

## 🔗 İlgili Yetenekler

| İhtiyaç | Yetenek |
|---------|---------|
| API uygulaması | `@[skills/backend-development]` |
| Veri yapısı | `@[skills/database-design]` |
| Güvenlik detayları | `@[skills/security-hardening]` |

---

## ✅ Karar Kontrol Listesi

API tasarlamadan önce:

- [ ] **Kullanıcıya API tüketicileri hakkında soruldu mu?**
- [ ] **BU bağlam için API stili seçildi mi?** (REST/GraphQL/tRPC)
- [ ] **Tutarlı yanıt formatı tanımlandı mı?**
- [ ] **Sürümleme stratejisi planlandı mı?**
- [ ] **Kimlik doğrulama ihtiyaçları düşünüldü mü?**
- [ ] **Hız sınırlama (rate limiting) planlandı mı?**
- [ ] **Dokümantasyon yaklaşımı tanımlandı mı?**

---

## ❌ Anti-Desenler

**YAPMA:**
- Her şey için varsayılan olarak REST kullanma
- REST uç noktalarında fiil kullanma (/getUsers)
- Tutarsız yanıt formatları döndürme
- İstemcilere dahili hataları ifşa etme
- Hız sınırlamayı atlama

**YAP:**
- Bağlama göre API stili seç
- İstemci gereksinimlerini sor
- Kapsamlı şekilde belgele
- Uygun durum kodlarını kullan

---

## Script

| Script | Amaç | Komut |
|--------|------|-------|
| `scripts/api_validator.py` | API uç noktası doğrulama | `python scripts/api_validator.py <proje_yolu>` |
