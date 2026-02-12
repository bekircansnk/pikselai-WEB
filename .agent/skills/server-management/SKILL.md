---
name: server-management
description: Sunucu yönetim prensipleri ve karar verme. Süreç yönetimi, izleme stratejisi ve ölçeklendirme kararları. Komutları değil, düşünmeyi öğretir.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Sunucu Yönetimi

> Üretim operasyonları için sunucu yönetim prensipleri.
> **DÜŞÜNMEYİ öğren, komutları ezberlemeyi değil.**

---

## 1. Süreç Yönetimi Prensipleri

### Araç Seçimi

| Senaryo | Araç |
|---------|------|
| **Node.js uygulaması** | PM2 (kümeleme, yeniden yükleme) |
| **Herhangi bir uygulama** | systemd (Linux yerel) |
| **Konteynerler** | Docker/Podman |
| **Orkestrasyon** | Kubernetes, Docker Swarm |

### Süreç Yönetimi Hedefleri

| Hedef | Anlamı |
|-------|--------|
| **Çökmede yeniden başlatma** | Otomatik kurtarma |
| **Sıfır kesintiyle yeniden yükleme** | Servis kesintisi yok |
| **Kümeleme (Clustering)** | Tüm CPU çekirdeklerini kullan |
| **Kalıcılık** | Sunucu yeniden başlatılmasında hayatta kal |

---

## 2. İzleme Prensipleri

### Ne İzlenmeli

| Kategori | Anahtar Metrikler |
|----------|-------------------|
| **Kullanılabilirlik** | Çalışma süresi (Uptime), sağlık kontrolleri |
| **Performans** | Yanıt süresi, işlem hacmi (throughput) |
| **Hatalar** | Hata oranı, tipleri |
| **Kaynaklar** | CPU, bellek, disk |

### Uyarı Önem Derecesi Stratejisi

| Seviye | Yanıt |
|--------|-------|
| **Kritik** | Acil eylem |
| **Uyarı** | Yakında araştır |
| **Bilgi** | Günlük incele |

### İzleme Aracı Seçimi

| İhtiyaç | Seçenekler |
|---------|------------|
| Basit/Ücretsiz | PM2 metrikleri, htop |
| Tam gözlemlenebilirlik | Grafana, Datadog |
| Hata takibi | Sentry |
| Çalışma süresi | UptimeRobot, Pingdom |

---

## 3. Log Yönetimi Prensipleri

### Log Stratejisi

| Log Tipi | Amaç |
|----------|------|
| **Uygulama logları** | Hata ayıklama, denetim |
| **Erişim logları** | Trafik analizi |
| **Hata logları** | Sorun tespiti |

### Log Prensipleri

1. **Logları döndür (Rotate)** (diskin dolmasını önle)
2. **Yapılandırılmış loglama** (JSON) (ayrıştırma için)
3. **Uygun seviyeler** (error/warn/info/debug)
4. **Hassas veri yok** (loglarda)

---

## 4. Ölçeklendirme Kararları

### Ne Zaman Ölçeklendirilmeli

| Semptom | Çözüm |
|---------|-------|
| Yüksek CPU | Örnek (instance) ekle (yatay) |
| Yüksek bellek | RAM artır veya sızıntıyı düzelt |
| Yavaş yanıt | Önce profille, sonra ölçeklendir |
| Trafik ani artışları | Otomatik ölçeklendirme |

### Ölçeklendirme Stratejisi

| Tip | Ne Zaman Kullanılır |
|-----|---------------------|
| **Dikey** | Hızlı çözüm, tek örnek |
| **Yatay** | Sürdürülebilir, dağıtık |
| **Otomatik** | Değişken trafik |

---

## 5. Sağlık Kontrolü Prensipleri

### Sağlıklı Olması Ne Demektir

| Kontrol | Anlamı |
|---------|--------|
| **HTTP 200** | Servis yanıt veriyor |
| **Veritabanı bağlı** | Veri erişilebilir |
| **Bağımlılıklar Tamam** | Harici servisler ulaşılabilir |
| **Kaynaklar Tamam** | CPU/bellek tükenmemiş |

### Sağlık Kontrolü Uygulaması

- Basit: Sadece 200 döndür
- Derin: Tüm bağımlılıkları kontrol et
- Yük dengeleyici ihtiyaçlarına göre seç

---

## 6. Güvenlik Prensipleri

| Alan | Prensip |
|------|---------|
| **Erişim** | Sadece SSH anahtarları, parola yok |
| **Güvenlik Duvarı** | Sadece gerekli portlar açık |
| **Güncellemeler** | Düzenli güvenlik yamaları |
| **Sırlar** | Ortam değişkenleri, dosyalar değil |
| **Denetim** | Erişimi ve değişiklikleri logla |

---

## 7. Sorun Giderme Önceliği

Bir şeyler ters gittiğinde:

1. **Çalışıyor mu kontrol et** (süreç durumu)
2. **Logları kontrol et** (hata mesajları)
3. **Kaynakları kontrol et** (disk, bellek, CPU)
4. **Ağı kontrol et** (portlar, DNS)
5. **Bağımlılıkları kontrol et** (veritabanı, API'ler)

---

## 8. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Root olarak çalıştır | Root olmayan kullanıcı kullan |
| Logları görmezden gel | Log döndürmeyi ayarla |
| İzlemeyi atla | İlk günden itibaren izle |
| Manuel yeniden başlat | Otomatik yeniden başlatma yapılandır |
| Yedek yok | Düzenli yedekleme takvimi |

---

> **Unutma:** İyi yönetilen bir sunucu sıkıcıdır. Hedef budur.
