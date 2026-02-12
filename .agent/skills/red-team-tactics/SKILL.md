---
name: red-team-tactics
description: MITRE ATT&CK'a dayalı Red Team taktik prensipleri. Saldırı aşamaları, tespit atlatma, raporlama.
allowed-tools: Read, Glob, Grep
---

# Red Team Taktikleri

> MITRE ATT&CK çerçevesine dayalı hasım simülasyonu prensipleri.

---

## 1. MITRE ATT&CK Aşamaları

### Saldırı Yaşam Döngüsü

```
KEŞİF (RECON) → İLK ERİŞİM → YÜRÜTME → KALICILIK
      ↓             ↓            ↓           ↓
  AYRICALIK YÜK. → SAVUNMA ATLATMA → KİMLİK BİLGİSİ → KEŞİF (DISCOVERY)
      ↓             ↓            ↓           ↓
 YATAY HAREKET → TOPLAMA → C2 → DIŞARI ÇIKARMA → ETKİ
```

---

## 2. Keşif (Reconnaissance) Prensipleri

### Pasif vs Aktif

| Tip | Ödünleşim |
|-----|-----------|
| **Pasif** | Hedefle temas yok, sınırlı bilgi |
| **Aktif** | Doğrudan temas, daha fazla tespit riski |

### Bilgi Hedefleri

| Kategori | Değer |
|----------|-------|
| Teknoloji yığını | Saldırı vektörü seçimi |
| Çalışan bilgisi | Sosyal mühendislik |
| Ağ aralıkları | Tarama kapsamı |
| Üçüncü taraflar | Tedarik zinciri saldırısı |

---

## 3. İlk Erişim Vektörleri

### Seçim Kriterleri

| Vektör | Ne Zaman Kullanılır |
|--------|---------------------|
| **Oltalama (Phishing)** | İnsan hedef, e-posta erişimi |
| **Genel istismarlar** | Savunmasız servisler açıkta |
| **Geçerli kimlik bilgileri** | Sızdırılmış veya kırılmış |
| **Tedarik zinciri** | Üçüncü taraf erişimi |

---

## 4. Ayrıcalık Yükseltme Prensipleri

### Windows Hedefleri

| Kontrol | Fırsat |
|---------|--------|
| Tırnak içine alınmamış servis yolları | Yola yazma |
| Zayıf servis izinleri | Servisi değiştirme |
| Token ayrıcalıkları | SeDebug vb. kötüye kullanma |
| Saklanan kimlik bilgileri | Hasat (Harvest) |

### Linux Hedefleri

| Kontrol | Fırsat |
|---------|--------|
| SUID binary'leri | Sahibi olarak çalıştır |
| Sudo yanlış yapılandırması | Komut yürütme |
| Kernel güvenlik açıkları | Kernel istismarları |
| Cron işleri | Yazılabilir scriptler |

---

## 5. Savunma Atlatma Prensipleri

### Anahtar Teknikler

| Teknik | Amaç |
|--------|------|
| LOLBins | Meşru araçları kullan |
| Karartma (Obfuscation) | Kötü amaçlı kodu gizle |
| Zamana damgalama (Timestomping) | Dosya değişikliklerini gizle |
| Log temizleme | Kanıtları kaldır |

### Operasyonel Güvenlik

- Mesai saatleri içinde çalış
- Meşru trafik modellerini taklit et
- Şifreli kanallar kullan
- Normal davranışla karış

---

## 6. Yatay Hareket Prensipleri

### Kimlik Bilgisi Tipleri

| Tip | Kullanım |
|-----|----------|
| Parola | Standart kimlik doğrulama |
| Hash | Pass-the-hash |
| Bilet (Ticket) | Pass-the-ticket |
| Sertifika | Sertifika ile kimlik doğrulama |

### Hareket Yolları

- Yönetici paylaşımları
- Uzak servisler (RDP, SSH, WinRM)
- Dahili servislerin istismarı

---

## 7. Active Directory Saldırıları

### Saldırı Kategorileri

| Saldırı | Hedef |
|---------|-------|
| Kerberoasting | Servis hesabı parolaları |
| AS-REP Roasting | Ön kimlik doğrulamasız hesaplar |
| DCSync | Alan (Domain) kimlik bilgileri |
| Golden Ticket | Kalıcı alan erişimi |

---

## 8. Raporlama Prensipleri

### Saldırı Hikayesi

Tam saldırı zincirini belgele:
1. İlk erişim nasıl kazanıldı
2. Hangi teknikler kullanıldı
3. Hangi hedeflere ulaşıldı
4. Tespit nerede başarısız oldu

### Tespit Boşlukları

Her başarılı teknik için:
- Bunu ne tespit etmeliydi?
- Tespit neden çalışmadı?
- Tespit nasıl iyileştirilir?

---

## 9. Etik Sınırlar

### Her Zaman

- Kapsam dahilinde kal
- Etkiyi en aza indir
- Gerçek tehdit bulunursa hemen bildir
- Tüm eylemleri belgele

### Asla

- Üretim verilerini yok etme
- Hizmet reddine (DoS) neden olma (kapsamda değilse)
- Kavram kanıtının ötesine geçme
- Hassas verileri saklama

---

## 10. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| İstismara acele et | Metodolojiyi izle |
| Hasara neden ol | Etkiyi en aza indir |
| Raporlamayı atla | Her şeyi belgele |
| Kapsamı görmezden gel | Sınırlar içinde kal |

---

> **Unutma:** Red team, savunmayı iyileştirmek için saldırganları simüle eder, zarar vermek için değil.
