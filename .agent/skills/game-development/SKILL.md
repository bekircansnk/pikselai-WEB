---
name: game-development
description: Oyun geliştirme orkestratörü. Proje ihtiyaçlarına göre platforma özel yeteneklere yönlendirir.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Oyun Geliştirme

> **Orkestratör yeteneği**, oyun geliştirme prensiplerini sağlar ve bağlama göre özelleşmiş alt yeteneklere yönlendirir.

---

## Bu Yetenek Ne Zaman Kullanılır

Bir oyun geliştirme projesi üzerinde çalışıyorsun. Bu yetenek oyun geliştirmenin PRENSİPLERİNİ öğretir ve seni bağlama göre doğru alt yeteneğe yönlendirir.

---

## Alt Yetenek Yönlendirmesi

### Platform Seçimi

| Eğer oyun şurayı hedefliyorsa... | Alt Yeteneği Kullan |
|----------------------------------|---------------------|
| Web tarayıcıları (HTML5, WebGL) | `game-development/web-games` |
| Mobil (iOS, Android) | `game-development/mobile-games` |
| PC (Steam, Masaüstü) | `game-development/pc-games` |
| VR/AR başlıkları | `game-development/vr-ar` |

### Boyut Seçimi

| Eğer oyun şuyse... | Alt Yeteneği Kullan |
|--------------------|---------------------|
| 2D (sprite'lar, tilemap'ler) | `game-development/2d-games` |
| 3D (mesh'ler, shader'lar) | `game-development/3d-games` |

### Uzmanlık Alanları

| İhtiyacın varsa... | Alt Yeteneği Kullan |
|--------------------|---------------------|
| GDD, dengeleme, oyuncu psikolojisi | `game-development/game-design` |
| Çok oyunculu, ağ | `game-development/multiplayer` |
| Görsel stil, varlık boru hattı, animasyon | `game-development/game-art` |
| Ses tasarımı, müzik, uyarlanabilir ses | `game-development/game-audio` |

---

## Temel Prensipler (Tüm Platformlar)

### 1. Oyun Döngüsü (Game Loop)

Platform ne olursa olsun her oyun bu deseni izler:

```
GİRDİ (INPUT)  → Oyuncu eylemlerini oku
GÜNCELLE (UPDATE) → Oyun mantığını işle (sabit zaman adımı)
RENDER (RENDER) → Kareyi çiz (enterpolasyonlu)
```

**Sabit Zaman Adımı (Fixed Timestep) Kuralı:**
- Fizik/mantık: Sabit hız (örn. 50Hz)
- Rendering: Mümkün olduğunca hızlı
- Pürüzsüz görseller için durumlar arasında enterpolasyon yap

---

### 2. Desen Seçim Matrisi

| Desen | Ne Zaman Kullanılır | Örnek |
|-------|---------------------|-------|
| **Durum Makinesi (State Machine)** | 3-5 ayrık durum | Oyuncu: Bekle→Yürü→Zıpla |
| **Nesne Havuzu (Object Pooling)** | Sık oluşturma/yok etme | Mermiler, parçacıklar |
| **Gözlemci/Olaylar (Observer/Events)** | Sistemler arası iletişim | Sağlık→UI güncellemeleri |
| **ECS** | Binlerce benzer varlık | RTS birimleri, parçacıklar |
| **Komut (Command)** | Geri al, yeniden oynat, ağ | Girdi kaydı |
| **Davranış Ağacı (Behavior Tree)** | Karmaşık YZ kararları | Düşman YZ |

**Karar Kuralı:** Durum Makinesi ile başla. Sadece performans gerektirdiğinde ECS ekle.

---

### 3. Girdi Soyutlama

Girdiyi ham tuşlara değil, EYLEMLERE soyutla:

```
"zıpla"  → Boşluk, Gamepad A, Dokunmatik tık
"hareket"  → WASD, Sol çubuk, Sanal joystick
```

**Neden:** Çoklu platform, yeniden bağlanabilir kontroller sağlar.

---

### 4. Performans Bütçesi (60 FPS = 16.67ms)

| Sistem | Bütçe |
|--------|-------|
| Girdi | 1ms |
| Fizik | 3ms |
| YZ | 2ms |
| Oyun Mantığı | 4ms |
| Rendering | 5ms |
| Tampon | 1.67ms |

**Optimizasyon Önceliği:**
1. Algoritma (O(n²) → O(n log n))
2. Toplu İşleme (Batching) (çizim çağrılarını azalt)
3. Havuzlama (Pooling) (GC ani artışlarını önle)
4. LOD (mesafeye göre detay)
5. Eleme (Culling) (görünmeyeni atla)

---

### 5. Karmaşıklığa Göre YZ Seçimi

| YZ Tipi | Karmaşıklık | Ne Zaman Kullanılır |
|---------|-------------|---------------------|
| **FSM** | Basit | 3-5 durum, tahmin edilebilir davranış |
| **Davranış Ağacı** | Orta | Modüler, tasarımcı dostu |
| **GOAP** | Yüksek | Beliren (emergent), planlama tabanlı |
| **Utility AI** | Yüksek | Puanlama tabanlı kararlar |

---

### 6. Çarpışma Stratejisi

| Tip | En İyisi |
|-----|----------|
| **AABB** | Dikdörtgenler, hızlı kontroller |
| **Daire** | Yuvarlak nesneler, ucuz |
| **Uzaysal Hash (Spatial Hash)** | Çok sayıda benzer boyutlu nesne |
| **Quadtree** | Büyük dünyalar, değişen boyutlar |

---

## Anti-Desenler (Evrensel)

| Yapma | Yap |
|-------|-----|
| Her karede her şeyi güncelle | Olaylar, kirli bayraklar (dirty flags) kullan |
| Sıcak döngülerde nesne oluştur | Nesne havuzu |
| Hiçbir şeyi önbellekleme | Referansları önbellekle |
| Profillemeden optimize et | Önce profille |
| Girdiyi mantıkla karıştır | Girdi katmanını soyutla |

---

## Yönlendirme Örnekleri

### Örnek 1: "Tarayıcı tabanlı 2D platform oyunu yapmak istiyorum"
→ Framework seçimi için `game-development/web-games` ile başla
→ Sonra sprite/tilemap desenleri için `game-development/2d-games`
→ Seviye tasarımı için `game-development/game-design` referans al

### Örnek 2: "iOS ve Android için mobil bulmaca oyunu"
→ Dokunmatik girdi ve mağazalar için `game-development/mobile-games` ile başla
→ Bulmaca dengelemesi için `game-development/game-design` kullan

### Örnek 3: "Çok oyunculu VR nişancı"
→ Konfor ve daldırma (immersion) için `game-development/vr-ar`
→ Rendering için `game-development/3d-games`
→ Ağ oluşturma için `game-development/multiplayer`

---

> **Unutma:** Harika oyunlar yinelemeyle gelir, mükemmellikle değil. Hızlı prototip yap, sonra cilala.
