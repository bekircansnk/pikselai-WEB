---
name: clean-code
description: Pragmatik kodlama standartları - öz, doğrudan, aşırı mühendislik yok, gereksiz yorum yok
allowed-tools: Read, Write, Edit
version: 2.0
priority: CRITICAL
---

# Temiz Kod - Pragmatik YZ Kodlama Standartları

> **KRİTİK YETENEK** - **Öz, doğrudan ve çözüm odaklı** ol.

---

## Temel Prensipler

| Prensip | Kural |
|---------|-------|
| **SRP** | Tek Sorumluluk - her fonksiyon/sınıf TEK bir şey yapar |
| **DRY** | Kendini Tekrar Etme - kopyaları çıkar, yeniden kullan |
| **KISS** | Basit Tut - çalışan en basit çözüm |
| **YAGNI** | Buna İhtiyacın Olmayacak - kullanılmayan özellikler inşa etme |
| **İzci (Boy Scout)** | Kodu bulduğundan daha temiz bırak |

---

## İsimlendirme Kuralları

| Öğe | Konvansiyon |
|-----|-------------|
| **Değişkenler** | Niyeti ortaya koy: `n` değil `userCount` |
| **Fonksiyonlar** | Fiil + isim: `user()` değil `getUserById()` |
| **Booleanlar** | Soru formu: `isActive`, `hasPermission`, `canEdit` |
| **Sabitler** | BAĞIRAN_SNAKE: `MAX_RETRY_COUNT` |

> **Kural:** Bir ismi açıklamak için yoruma ihtiyacın varsa, ismini değiştir.

---

## Fonksiyon Kuralları

| Kural | Açıklama |
|-------|----------|
| **Küçük** | Maksimum 20 satır, ideal olan 5-10 |
| **Tek Şey** | Tek bir şey yapar, onu iyi yapar |
| **Tek Seviye** | Fonksiyon başına bir soyutlama seviyesi |
| **Az Argüman** | Maksimum 3 argüman, tercihen 0-2 |
| **Yan Etki Yok** | Girdileri beklenmedik şekilde değiştirme |

---

## Kod Yapısı

| Desen | Uygula |
|-------|--------|
| **Koruyucu Maddeler (Guard Clauses)** | Uç durumlar için erken dönüşler |
| **Düz > İç İçe** | Derin yuvalamadan kaçın (maksimum 2 seviye) |
| **Kompozisyon** | Birlikte oluşturulan küçük fonksiyonlar |
| **Birlikte Yerleşim (Colocation)** | İlgili kodu yakın tut |

---

## YZ Kodlama Stili

| Durum | Eylem |
|-------|-------|
| Kullanıcı özellik ister | Doğrudan yaz |
| Kullanıcı hata bildirir | Düzelt, açıklama |
| Net gereksinim yok | Sor, varsayma |

---

## Anti-Desenler (YAPMA)

| ❌ Desen | ✅ Düzeltme |
|----------|-------------|
| Her satırı yorumla | Bariz yorumları sil |
| Tek satırlık yardımcı (helper) | Kodu satır içine al (inline) |
| 2 nesne için fabrika (factory) | Doğrudan örnekleme |
| 1 fonksiyonlu utils.ts | Kodu kullanıldığı yere koy |
| "Önce import ediyoruz..." | Sadece kodu yaz |
| Derin yuvalama | Koruyucu maddeler (Guard clauses) |
| Sihirli sayılar | İsimlendirilmiş sabitler |
| Tanrı fonksiyonlar | Sorumluluğa göre böl |

---

## 🔴 HERHANGİ Bir Dosyayı Düzenlemeden Önce (ÖNCE DÜŞÜN!)

**Bir dosyayı değiştirmeden önce kendine sor:**

| Soru | Neden |
|------|-------|
| **Bu dosyayı ne import ediyor?** | Bozulabilirler |
| **Bu dosya neyi import ediyor?** | Arayüz değişiklikleri |
| **Hangi testler bunu kapsıyor?** | Testler başarısız olabilir |
| **Bu paylaşılan bir bileşen mi?** | Birden çok yer etkilenir |

**Hızlı Kontrol:**
```
Düzenlenecek dosya: UserService.ts
└── Bunu kim import ediyor? → UserController.ts, AuthController.ts
└── Onların da değişikliğe ihtiyacı var mı? → Fonksiyon imzalarını kontrol et
```

> 🔴 **Kural:** Dosyayı + tüm bağımlı dosyaları AYNI görevde düzenle.
> 🔴 **Asla bozuk import veya eksik güncelleme bırakma.**

---

## Özet

| Yap | Yapma |
|-----|-------|
| Kodu doğrudan yaz | Eğitim yazma |
| Kodun kendini belgelemesine izin ver | Bariz yorumlar ekle |
| Hataları hemen düzelt | Önce düzeltmeyi açıkla |
| Küçük şeyleri satır içine al | Gereksiz dosyalar oluştur |
| Şeyleri açıkça isimlendir | Kısaltmalar kullan |
| Fonksiyonları küçük tut | 100+ satırlık fonksiyonlar yaz |

> **Unutma: Kullanıcı çalışan kod ister, programlama dersi değil.**

---

## 🔴 Tamamlamadan Önce Kendi Kendine Kontrol (ZORUNLU)

**"Görev tamamlandı" demeden önce, doğrula:**

| Kontrol | Soru |
|---------|------|
| ✅ **Hedef tuttu mu?** | Kullanıcının istediğini tam olarak yaptım mı? |
| ✅ **Dosyalar düzenlendi mi?** | Gerekli tüm dosyaları değiştirdim mi? |
| ✅ **Kod çalışıyor mu?** | Değişikliği test ettim/doğruladım mı? |
| ✅ **Hata yok mu?** | Lint ve TypeScript geçiyor mu? |
| ✅ **Unutulan bir şey?** | Herhangi bir uç durum kaçtı mı? |

> 🔴 **Kural:** HERHANGİ bir kontrol başarısızsa, tamamlamadan önce düzelt.

---

## Doğrulama Scriptleri (ZORUNLU)

> 🔴 **KRİTİK:** Her ajan işi tamamladıktan sonra SADECE kendi yeteneğinin scriptlerini çalıştırır.

### Ajan → Script Eşleşmesi

| Ajan | Script | Komut |
|------|--------|-------|
| **frontend-specialist** | UX Denetimi | `python .agent/skills/frontend-design/scripts/ux_audit.py .` |
| **frontend-specialist** | A11y Kontrolü | `python .agent/skills/frontend-design/scripts/accessibility_checker.py .` |
| **backend-specialist** | API Doğrulayıcı | `python .agent/skills/api-patterns/scripts/api_validator.py .` |
| **mobile-developer** | Mobil Denetim | `python .agent/skills/mobile-design/scripts/mobile_audit.py .` |
| **database-architect** | Şema Doğrulama | `python .agent/skills/database-design/scripts/schema_validator.py .` |
| **security-auditor** | Güvenlik Taraması | `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .` |
| **seo-specialist** | SEO Kontrolü | `python .agent/skills/seo-fundamentals/scripts/seo_checker.py .` |
| **seo-specialist** | GEO Kontrolü | `python .agent/skills/geo-fundamentals/scripts/geo_checker.py .` |
| **performance-optimizer** | Lighthouse | `python .agent/skills/performance-profiling/scripts/lighthouse_audit.py <url>` |
| **test-engineer** | Test Çalıştırıcı | `python .agent/skills/testing-patterns/scripts/test_runner.py .` |
| **test-engineer** | Playwright | `python .agent/skills/webapp-testing/scripts/playwright_runner.py <url>` |
| **Herhangi bir ajan** | Lint Kontrolü | `python .agent/skills/lint-and-validate/scripts/lint_runner.py .` |
| **Herhangi bir ajan** | Tip Kapsamı | `python .agent/skills/lint-and-validate/scripts/type_coverage.py .` |
| **Herhangi bir ajan** | i18n Kontrolü | `python .agent/skills/i18n-localization/scripts/i18n_checker.py .` |

> ❌ **YANLIŞ:** `test-engineer` ajanı `ux_audit.py` çalıştırıyor
> ✅ **DOĞRU:** `frontend-specialist` ajanı `ux_audit.py` çalıştırıyor

---

### 🔴 Script Çıktısı Yönetimi (OKU → ÖZETLE → SOR)

**Bir doğrulama scripti çalıştırırken, ŞUNLARI YAPMALISIN:**

1. **Scripti çalıştır** ve TÜM çıktıyı yakala
2. **Çıktıyı ayrıştır** - hataları, uyarıları ve geçenleri belirle
3. **Kullanıcıya özetle** şu formatta:

```markdown
## Script Sonuçları: [script_adi.py]

### ❌ Hatalar Bulundu (X öğe)
- [Dosya:Satır] Hata açıklaması 1
- [Dosya:Satır] Hata açıklaması 2

### ⚠️ Uyarılar (Y öğe)
- [Dosya:Satır] Uyarı açıklaması

### ✅ Geçti (Z öğe)
- Kontrol 1 geçti
- Kontrol 2 geçti

**X hatayı düzeltmeli miyim?**
```

4. Düzeltmeden önce **kullanıcı onayı bekle**
5. **Düzelttikten sonra** → Doğrulamak için scripti tekrar çalıştır

> 🔴 **İHLAL:** Scripti çalıştırıp çıktıyı görmezden gelmek = BAŞARISIZ görev.
> 🔴 **İHLAL:** Sormadan otomatik düzeltme = İzin verilmez.
> 🔴 **Kural:** Her zaman çıktıyı OKU → ÖZETLE → SOR → sonra düzelt.
