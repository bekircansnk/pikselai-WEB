---
name: code-review-checklist
description: Kod kalitesi, güvenlik ve en iyi uygulamaları kapsayan kod inceleme yönergeleri.
allowed-tools: Read, Glob, Grep
---

# Kod İnceleme Kontrol Listesi

## Hızlı İnceleme Kontrol Listesi

### Doğruluk
- [ ] Kod yapması gerekeni yapıyor
- [ ] Uç durumlar (edge cases) ele alınmış
- [ ] Hata yönetimi yerinde
- [ ] Bariz hata yok

### Güvenlik
- [ ] Girdi doğrulanmış ve sterilize edilmiş
- [ ] SQL/NoSQL enjeksiyon açığı yok
- [ ] XSS veya CSRF açığı yok
- [ ] Kodlanmış sır veya hassas kimlik bilgisi yok
- [ ] **YZ-Özel:** İstemi Enjeksiyonuna (Prompt Injection) karşı koruma (varsa)
- [ ] **YZ-Özel:** Çıktılar kritik noktalarda kullanılmadan önce sterilize ediliyor

### Performans
- [ ] N+1 sorgusu yok
- [ ] Gereksiz döngü yok
- [ ] Uygun önbellekleme
- [ ] Paket boyutu etkisi düşünülmüş

### Kod Kalitesi
- [ ] Net isimlendirme
- [ ] DRY - yinelenen kod yok
- [ ] SOLID prensipleri izlenmiş
- [ ] Uygun soyutlama seviyesi

### Test
- [ ] Yeni kod için birim testler
- [ ] Uç durumlar test edilmiş
- [ ] Testler okunabilir ve bakımı yapılabilir

### Dokümantasyon
- [ ] Karmaşık mantık yorumlanmış
- [ ] Genel API'ler belgelenmiş
- [ ] Gerekirse README güncellenmiş

## YZ & LLM İnceleme Desenleri (2025)

### Mantık & Halüsinasyonlar
- [ ] **Düşünce Zinciri (Chain of Thought):** Mantık doğrulanabilir bir yolu izliyor mu?
- [ ] **Uç Durumlar:** YZ boş durumları, zaman aşımlarını ve kısmi başarısızlıkları hesaba kattı mı?
- [ ] **Harici Durum:** Kod dosya sistemleri veya ağlar hakkında güvenli varsayımlar yapıyor mu?

### İstemi Mühendisliği (Prompt Engineering) İncelemesi
```markdown
// ❌ Kodda belirsiz istemi
const response = await ai.generate(userInput);

// ✅ Yapılandırılmış & Güvenli istemi
const response = await ai.generate({
  system: "Sen özelleşmiş bir ayrıştırıcısın...",
  input: sanitize(userInput),
  schema: ResponseSchema
});
```

## İşaretlenecek Anti-Desenler

```typescript
// ❌ Sihirli sayılar
if (status === 3) { ... }

// ✅ İsimlendirilmiş sabitler
if (status === Status.ACTIVE) { ... }

// ❌ Derin yuvalama
if (a) { if (b) { if (c) { ... } } }

// ✅ Erken dönüşler
if (!a) return;
if (!b) return;
if (!c) return;
// iş yap

// ❌ Uzun fonksiyonlar (100+ satır)
// ✅ Küçük, odaklanmış fonksiyonlar

// ❌ any tipi
const data: any = ...

// ✅ Düzgün tipler
const data: UserData = ...
```

## İnceleme Yorumları Rehberi

```
// Engelleyici sorunlar 🔴 kullanır
🔴 ENGELLEYİCİ: Burada SQL enjeksiyon açığı var

// Önemli öneriler 🟡 kullanır
🟡 ÖNERİ: Performans için useMemo kullanmayı düşünün

// Küçük düzeltmeler (nits) 🟢 kullanır
🟢 UFAK: Değişmez değişken için let yerine const tercih edin

// Sorular ❓ kullanır
❓ SORU: Kullanıcı burada null ise ne olur?
```
