---
name: plan-writing
description: Net kırılımlar, bağımlılıklar ve doğrulama kriterleri ile yapılandırılmış görev planlaması. Özellikler uygularken, refactor yaparken veya çok adımlı herhangi bir işte kullanın.
allowed-tools: Read, Glob, Grep
---

# Plan Yazımı

> Kaynak: obra/superpowers

## Genel Bakış
Bu yetenek, işi doğrulama kriterleri olan net, eyleme geçirilebilir görevlere ayırmak için bir çerçeve sağlar.

## Görev Kırılım Prensipleri

### 1. Küçük, Odaklı Görevler
- Her görev 2-5 dakika sürmeli
- Görev başına tek bir net sonuç
- Bağımsız olarak doğrulanabilir

### 2. Açık Doğrulama
- Bittiğini nasıl anlarsın?
- Neyi kontrol edebilir/test edebilirsin?
- Beklenen çıktı nedir?

### 3. Mantıksal Sıralama
- Bağımlılıklar tanımlanmış
- Mümkünse paralel iş
- Kritik yol vurgulanmış
- **Aşama X: Doğrulama her zaman SONUNCUDUR**

### 4. Proje Kökünde Dinamik İsimlendirme
- Plan dosyaları PROJE KÖKÜNDE `{task-slug}.md` olarak kaydedilir
- İsim görevden türetilir (örn., "add auth" → `auth-feature.md`)
- **ASLA** `.claude/`, `docs/` veya geçici klasörlerde değil

## Planlama Prensipleri (Şablonlar DEĞİL!)

> 🔴 **Sabit şablon YOK. Her plan göreve ÖZGÜDÜR.**

### Prensip 1: KISA Tut

| ❌ Yanlış | ✅ Doğru |
|-----------|----------|
| Alt-alt-görevleri olan 50 görev | Maksimum 5-10 net görev |
| Listelenen her mikro adım | Sadece eyleme geçirilebilir öğeler |
| Ayrıntılı açıklamalar | Görev başına tek satır |

> **Kural:** Plan 1 sayfadan uzunsa, çok uzundur. Sadeleştir.

---

### Prensip 2: Jenerik Değil, SPESİFİK Ol

| ❌ Yanlış | ✅ Doğru |
|-----------|----------|
| "Projeyi kur" | "`npx create-next-app` çalıştır" |
| "Kimlik doğrulama ekle" | "next-auth kur, `/api/auth/[...nextauth].ts` oluştur" |
| "Arayüzü stillendir" | "`Header.tsx`'e Tailwind sınıfları ekle" |

> **Kural:** Her görevin net, doğrulanabilir bir sonucu olmalıdır.

---

### Prensip 3: Proje Tipine Dayalı Dinamik İçerik

**YENİ PROJE İçin:**
- Hangi teknoloji yığını? (önce karar ver)
- MVP nedir? (minimum özellikler)
- Dosya yapısı nedir?

**ÖZELLİK EKLEME İçin:**
- Hangi dosyalar etkileniyor?
- Hangi bağımlılıklar gerekli?
- Çalıştığı nasıl doğrulanır?

**HATA DÜZELTME (BUG FIX) İçin:**
- Kök neden nedir?
- Hangi dosya/satır değişmeli?
- Düzeltme nasıl test edilir?

---

### Prensip 4: Scriptler Projeye Özgüdür

> 🔴 **Script komutlarını kopyala-yapıştır YAPMA. Proje tipine göre seç.**

| Proje Tipi | İlgili Scriptler |
|------------|------------------|
| Frontend/React | `ux_audit.py`, `accessibility_checker.py` |
| Backend/API | `api_validator.py`, `security_scan.py` |
| Mobil | `mobile_audit.py` |
| Veritabanı | `schema_validator.py` |
| Full-stack | Dokunduğun şeye bağlı olarak yukarıdakilerin karışımı |

**Yanlış:** Tüm scriptleri her plana eklemek
**Doğru:** Sadece BU görevle ilgili scriptler

---

### Prensip 5: Doğrulama Basittir

| ❌ Yanlış | ✅ Doğru |
|-----------|----------|
| "Bileşenin doğru çalıştığını doğrula" | "`npm run dev` çalıştır, butona tıkla, tostu gör" |
| "API'yi test et" | "`curl localhost:3000/api/users` 200 dönüyor mu" |
| "Stilleri kontrol et" | "Tarayıcıyı aç, karanlık mod geçişinin çalıştığını doğrula" |

---

## Plan Yapısı (Esnek, Sabit Değil!)

```
# [Görev Adı]

## Hedef
Tek cümle: Neyi inşa ediyoruz/düzeltiyoruz?

## Görevler
- [ ] Görev 1: [Belirli eylem] → Doğrula: [Nasıl kontrol edilir]
- [ ] Görev 2: [Belirli eylem] → Doğrula: [Nasıl kontrol edilir]
- [ ] Görev 3: [Belirli eylem] → Doğrula: [Nasıl kontrol edilir]

## Bittiğinde (Done When)
- [ ] [Ana başarı kriterleri]
```

> **Bu kadar.** Gerçekten gerekmedikçe aşamalar, alt bölümler yok.
> Minimal tut. Sadece gerektiğinde karmaşıklık ekle.

## Notlar
[Önemli düşünceler]
```

---

## En İyi Uygulamalar (Hızlı Referans)

1. **Hedefle başla** - Neyi inşa ediyoruz/düzeltiyoruz?
2. **Maks 10 görev** - Daha fazlaysa, birden çok plana böl
3. **Her görev doğrulanabilir** - Net "bitti" kriterleri
4. **Projeye özgü** - Kopyala-yapıştır şablonlar yok
5. **Gittikçe güncelle** - Tamamlanınca `[x]` işaretle

---

## Ne Zaman Kullanılmalı

- Sıfırdan yeni proje
- Özellik ekleme
- Hata düzeltme (karmaşıksa)
- Çoklu dosya refactoring
