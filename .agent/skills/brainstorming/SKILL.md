---
name: brainstorming
description: Sokratik sorgulama protokolü + kullanıcı iletişimi. Karmaşık istekler, yeni özellikler veya belirsiz gereksinimler için ZORUNLUDUR. İlerleme raporlama ve hata yönetimini içerir.
allowed-tools: Read, Glob, Grep
---

# Beyin Fırtınası & İletişim Protokolü

> **ZORUNLU:** Karmaşık/belirsiz istekler, yeni özellikler, güncellemeler için kullanın.

---

## 🛑 SOKRATİK KAPI (UYGULAMA)

### Ne Zaman Tetiklenir

| Desen | Eylem |
|-------|-------|
| Detay vermeden "İnşa et/Oluştur/Yap [şey]" | 🛑 3 soru SOR |
| Karmaşık özellik veya mimari | 🛑 Uygulamadan önce netleştir |
| Güncelleme/değişiklik isteği | 🛑 Kapsamı onayla |
| Belirsiz gereksinimler | 🛑 Amaç, kullanıcılar, kısıtları sor |

### 🚫 ZORUNLU: Uygulamadan Önce 3 Soru

1. **DUR (STOP)** - Kodlamaya BAŞLAMA
2. **SOR (ASK)** - Minimum 3 soru:
   - 🎯 Amaç: Hangi problemi çözüyorsun?
   - 👥 Kullanıcılar: Bunu kim kullanacak?
   - 📦 Kapsam: Olmazsa olmaz (must-have) vs olsa iyi olur (nice-to-have)?
3. **BEKLE (WAIT)** - Devam etmeden önce yanıt al

---

## 🧠 Dinamik Soru Üretimi

**⛔ ASLA statik şablonlar kullanma.** Prensipler için `dynamic-questioning.md` oku.

### Temel Prensipler

| Prensip | Anlamı |
|---------|--------|
| **Sorular Sonuçları Ortaya Çıkarır** | Her soru bir mimari karara bağlanır |
| **İçerikten Önce Bağlam** | Önce yeşil alan/özellik/refactor/debug bağlamını anla |
| **Minimum Uygulanabilir Sorular** | Her soru uygulama yollarını elemelidir |
| **Varsayım Değil Veri Üret** | Tahmin etme—ödünleşimlerle sor |

### Soru Üretim Süreci

```
1. İsteği Ayrıştır → Alanı, özellikleri, ölçek göstergelerini çıkar
2. Karar Noktalarını Belirle → Engelleyici vs ertelenebilir
3. Sorular Üret → Öncelik: P0 (engelleyici) > P1 (yüksek kaldıraç) > P2 (olsa iyi olur)
4. Ödünleşimlerle Biçimlendir → Ne, Neden, Seçenekler, Varsayılan
```

### Soru Formatı (ZORUNLU)

```markdown
### [ÖNCELİK] **[KARAR NOKTASI]**

**Soru:** [Net soru]

**Bu Neden Önemli:**
- [Mimari sonuç]
- [Etkiler: maliyet/karmaşıklık/zaman çizelgesi/ölçek]

**Seçenekler:**
| Seçenek | Artılar | Eksiler | En İyisi |
|---------|---------|---------|----------|
| A | [+] | [-] | [Kullanım durumu] |

**Belirtilmezse:** [Varsayılan + gerekçe]
```

**Detaylı alana özgü soru bankaları ve algoritmalar için**, bkz: `dynamic-questioning.md`

---

## İlerleme Raporlama (PRENSİP TABANLI)

**PRENSİP:** Şeffaflık güven inşa eder. Durum görünür ve eyleme geçirilebilir olmalıdır.

### Durum Panosu Formatı

| Ajan | Durum | Mevcut Görev | İlerleme |
|------|-------|--------------|----------|
| [Ajan Adı] | ✅🔄⏳❌⚠️ | [Görev açıklaması] | [% veya sayı] |

### Durum İkonları

| İkon | Anlamı | Kullanım |
|------|--------|--------|
| ✅ | Tamamlandı | Görev başarıyla bitti |
| 🔄 | Çalışıyor | Şu anda yürütülüyor |
| ⏳ | Bekliyor | Bloklandı, bağımlılık bekliyor |
| ❌ | Hata | Başarısız, ilgi gerekiyor |
| ⚠️ | Uyarı | Potansiyel sorun, engelleyici değil |

---

## Hata Yönetimi (PRENSİP TABANLI)

**PRENSİP:** Hatalar net iletişim için fırsatlardır.

### Hata Yanıt Deseni

```
1. Hatayı kabul et
2. Ne olduğunu açıkla (kullanıcı dostu)
3. Ödünleşimlerle belirli çözümler sun
4. Kullanıcıdan seçim yapmasını veya alternatif sunmasını iste
```

### Hata Kategorileri

| Kategori | Yanıt Stratejisi |
|----------|------------------|
| **Port Çatışması** | Alternatif port öner veya mevcut olanı kapat |
| **Bağımlılık Eksik** | Otomatik yükle veya izin iste |
| **Derleme Hatası** | Belirli hatayı + önerilen düzeltmeyi göster |
| **Belirsiz Hata** | Detay iste: ekran görüntüsü, konsol çıktısı |

---

## Tamamlama Mesajı (PRENSİP TABANLI)

**PRENSİP:** Başarıyı kutla, sonraki adımlara rehberlik et.

### Tamamlama Yapısı

```
1. Başarı onayı (kısaca kutla)
2. Yapılanların özeti (somut)
3. Nasıl doğrulanır/test edilir (eyleme geçirilebilir)
4. Sonraki adımlar önerisi (proaktif)
```

---

## İletişim Prensipleri

| Prensip | Uygulama |
|---------|----------|
| **Öz (Concise)** | Gereksiz detay yok, sadede gel |
| **Görsel** | Hızlı tarama için emojiler (✅🔄⏳❌) kullan |
| **Spesifik** | "biraz bekle" değil "~2 dakika" |
| **Alternatifler** | Takıldığında birden fazla yol sun |
| **Proaktif** | Tamamlandıktan sonra sonraki adımı öner |

---

## Anti-Desenler (KAÇIN)

| Anti-Desen | Neden |
|------------|-------|
| Anlamadan çözümlere atlamak | Yanlış problemde zaman harcar |
| Sormadan gereksinim varsaymak | Yanlış çıktı yaratır |
| İlk sürümü aşırı mühendislik yapmak | Değer teslimini geciktirir |
| Kısıtları görmezden gelmek | Kullanılamaz çözümler yaratır |
| "Sanırım" ifadeleri | Belirsizlik → Yerine sor |
