---
name: deployment-procedures
description: Üretim dağıtım prensipleri ve karar verme. Güvenli dağıtım iş akışları, geri alma stratejileri ve doğrulama. Scriptleri değil, düşünmeyi öğretir.
allowed-tools: Read, Glob, Grep, Bash
---

# Dağıtım Prosedürleri

> Güvenli üretim sürümleri için dağıtım prensipleri ve karar verme.
> **DÜŞÜNMEYİ öğren, scriptleri ezberlemeyi değil.**

---

## ⚠️ Bu Yetenek Nasıl Kullanılır

Bu yetenek kopyalanacak bash scriptlerini değil, **dağıtım prensiplerini** öğretir.

- Her dağıtım benzersizdir
- Her adımın arkasındaki NEDENi anla
- Prosedürleri platformuna uyarla

---

## 1. Platform Seçimi

### Karar Ağacı

```
Neyi dağıtıyorsun?
│
├── Statik site / JAMstack
│   └── Vercel, Netlify, Cloudflare Pages
│
├── Basit web uygulaması
│   ├── Yönetilen → Railway, Render, Fly.io
│   └── Kontrol → VPS + PM2/Docker
│
├── Mikroservisler
│   └── Konteyner orkestrasyonu
│
└── Sunucusuz (Serverless)
    └── Edge fonksiyonları, Lambda
```

### Her Platformun Farklı Prosedürleri Vardır

| Platform | Dağıtım Yöntemi |
|----------|-----------------|
| **Vercel/Netlify** | Git push, otomatik dağıtım |
| **Railway/Render** | Git push veya CLI |
| **VPS + PM2** | SSH + manuel adımlar |
| **Docker** | Image push + orkestrasyon |
| **Kubernetes** | kubectl apply |

---

## 2. Dağıtım Öncesi Prensipleri

### 4 Doğrulama Kategorisi

| Kategori | Kontrol Edilecekler |
|----------|---------------------|
| **Kod Kalitesi** | Testler geçiyor, linting temiz, incelendi |
| **Derleme (Build)** | Üretim derlemesi çalışıyor, uyarı yok |
| **Ortam** | Env değişkenleri ayarlı, sırlar güncel |
| **Güvenlik** | Yedekleme yapıldı, geri alma planı hazır |

### Dağıtım Öncesi Kontrol Listesi

- [ ] Tüm testler geçiyor
- [ ] Kod incelendi ve onaylandı
- [ ] Üretim derlemesi başarılı
- [ ] Ortam değişkenleri doğrulandı
- [ ] Veritabanı migrasyonları hazır (varsa)
- [ ] Geri alma planı belgelendi
- [ ] Ekip bilgilendirildi
- [ ] İzleme hazır

---

## 3. Dağıtım İş Akışı Prensipleri

### 5 Aşamalı Süreç

```
1. HAZIRLA (PREPARE)
   └── Kodu, derlemeyi, env değişkenlerini doğrula

2. YEDEKLE (BACKUP)
   └── Değiştirmeden önce mevcut durumu kaydet

3. DAĞIT (DEPLOY)
   └── İzleme açıkken yürüt

4. DOĞRULA (VERIFY)
   └── Sağlık kontrolü, loglar, ana akışlar

5. ONAYLA veya GERİ AL (CONFIRM or ROLLBACK)
   └── Her şey iyi mi? Onayla. Sorun mu var? Geri al.
```

### Aşama Prensipleri

| Aşama | Prensip |
|-------|---------|
| **Hazırla** | Asla test edilmemiş kodu dağıtma |
| **Yedekle** | Yedekleme olmadan geri alamazsın |
| **Dağıt** | Olurken izle, uzaklaşma |
| **Doğrula** | Güven ama doğrula |
| **Onayla** | Geri alma tetiğini hazır tut |

---

## 4. Dağıtım Sonrası Doğrulama

### Neyi Doğrulamalı

| Kontrol | Neden |
|---------|-------|
| **Sağlık uç noktası** | Servis çalışıyor |
| **Hata logları** | Yeni hata yok |
| **Ana kullanıcı akışları** | Kritik özellikler çalışıyor |
| **Performans** | Yanıt süreleri kabul edilebilir |

### Doğrulama Penceresi

- **İlk 5 dakika**: Aktif izleme
- **15 dakika**: Kararlılığı onayla
- **1 saat**: Son doğrulama
- **Ertesi gün**: Metrikleri incele

---

## 5. Geri Alma (Rollback) Prensipleri

### Ne Zaman Geri Alınmalı

| Semptom | Eylem |
|---------|-------|
| Servis kapalı | Hemen geri al |
| Kritik hatalar | Geri al |
| Performans >%50 düştü | Geri almayı düşün |
| Küçük sorunlar | Hızlıysa ileriye dönük düzelt |

### Platforma Göre Geri Alma Stratejisi

| Platform | Geri Alma Yöntemi |
|----------|-------------------|
| **Vercel/Netlify** | Önceki commit'i yeniden dağıt |
| **Railway/Render** | Panoda geri al |
| **VPS + PM2** | Yedeği geri yükle, yeniden başlat |
| **Docker** | Önceki imaj etiketi |
| **K8s** | kubectl rollout undo |

### Geri Alma Prensipleri

1. **Hız mükemmellikten önemlidir**: Önce geri al, sonra hata ayıkla
2. **Hataları birleştirme**: Tek bir geri alma, çoklu değişiklik değil
3. **İletişim Kur**: Ekibe ne olduğunu söyle
4. **Post-mortem**: Kararlı olduktan sonra nedenini anla

---

## 6. Sıfır Kesintili Dağıtım

### Stratejiler

| Strateji | Nasıl Çalışır |
|----------|---------------|
| **Yuvarlanan (Rolling)** | Örnekleri teker teker değiştir |
| **Mavi-Yeşil** | Trafiği ortamlar arasında değiştir |
| **Kanarya** | Kademeli trafik kaydırma |

### Seçim Prensipleri

| Senaryo | Strateji |
|---------|----------|
| Standart sürüm | Yuvarlanan |
| Yüksek riskli değişiklik | Mavi-yeşil (kolay geri alma) |
| Doğrulama gerekli | Kanarya (gerçek trafikle test) |

---

## 7. Acil Durum Prosedürleri

### Servis Kapalı Önceliği

1. **Değerlendir**: Semptom ne?
2. **Hızlı düzeltme**: Belirsizse yeniden başlat
3. **Geri al**: Yeniden başlatma işe yaramazsa
4. **İncele**: Kararlı olduktan sonra

### İnceleme Sırası

| Kontrol | Yaygın Sorunlar |
|---------|-----------------|
| **Loglar** | Hatalar, istisnalar |
| **Kaynaklar** | Disk dolu, bellek |
| **Ağ** | DNS, güvenlik duvarı |
| **Bağımlılıklar** | Veritabanı, API'ler |

---

## 8. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Cuma günü dağıt | Haftanın başlarında dağıt |
| Dağıtımı aceleye getir | Süreci izle |
| Staging'i atla | Her zaman önce test et |
| Yedeksiz dağıt | Dağıtımdan önce yedekle |
| Dağıtımdan sonra uzaklaş | 15+ dk izle |
| Aynı anda çoklu değişiklik | Tek seferde tek değişiklik |

---

## 9. Karar Kontrol Listesi

Dağıtımdan önce:

- [ ] **Platforma uygun prosedür mü?**
- [ ] **Yedekleme stratejisi hazır mı?**
- [ ] **Geri alma planı belgelendi mi?**
- [ ] **İzleme yapılandırıldı mı?**
- [ ] **Ekip bilgilendirildi mi?**
- [ ] **Sonrasında izlemek için zaman var mı?**

---

## 10. En İyi Uygulamalar

1. Büyük sürümler yerine **küçük, sık dağıtımlar**
2. Riskli değişiklikler için **özellik bayrakları (feature flags)**
3. Tekrarlayan adımları **otomatikleştir**
4. Her dağıtımı **belgele**
5. Sorunlardan sonra neyin yanlış gittiğini **incele**
6. İhtiyacın olmadan önce **geri almayı test et**

---

> **Unutma:** Her dağıtım bir risktir. Hızla değil, hazırlıkla riski en aza indir.
