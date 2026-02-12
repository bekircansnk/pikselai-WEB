---
name: mcp-builder
description: MCP (Model Context Protocol) sunucu oluşturma prensipleri. Araç tasarımı, kaynak desenleri, en iyi uygulamalar.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# MCP Oluşturucu

> MCP sunucuları oluşturma prensipleri.

---

## 1. MCP Genel Bakış

### MCP Nedir?

Model Context Protocol - YZ sistemlerini harici araçlar ve veri kaynaklarıyla bağlamak için standart.

### Temel Kavramlar

| Kavram | Amaç |
|--------|------|
| **Araçlar (Tools)** | YZ'nin çağırabileceği fonksiyonlar |
| **Kaynaklar (Resources)** | YZ'nin okuyabileceği veriler |
| **İstemler (Prompts)** | Önceden tanımlanmış istem şablonları |

---

## 2. Sunucu Mimarisi

### Proje Yapısı

```
my-mcp-server/
├── src/
│   └── index.ts      # Ana giriş
├── package.json
└── tsconfig.json
```

### İletim Tipleri

| Tip | Kullanım |
|-----|----------|
| **Stdio** | Yerel, CLI tabanlı |
| **SSE** | Web tabanlı, akışlı |
| **WebSocket** | Gerçek zamanlı, çift yönlü |

---

## 3. Araç Tasarım Prensipleri

### İyi Araç Tasarımı

| Prensip | Açıklama |
|---------|----------|
| Net isim | Eylem odaklı (get_weather, create_user) |
| Tek amaç | Bir şeyi iyi yap |
| Doğrulanmış girdi | Tipler ve açıklamalarla şema |
| Yapılandırılmış çıktı | Tahmin edilebilir yanıt formatı |

### Girdi Şema Tasarımı

| Alan | Zorunlu mu? |
|------|-------------|
| Tip | Evet - object |
| Özellikler | Her parametreyi tanımla |
| Zorunlu | Zorunlu parametreleri listele |
| Açıklama | İnsan tarafından okunabilir |

---

## 4. Kaynak Desenleri

### Kaynak Tipleri

| Tip | Kullanım |
|-----|----------|
| Statik | Sabit veri (yapılandırma, dökümanlar) |
| Dinamik | İstek üzerine oluşturulan |
| Şablon | Parametreli URI |

### URI Desenleri

| Desen | Örnek |
|-------|-------|
| Sabit | `docs://readme` |
| Parametreli | `users://{userId}` |
| Koleksiyon | `files://project/*` |

---

## 5. Hata Yönetimi

### Hata Tipleri

| Durum | Yanıt |
|-------|-------|
| Geçersiz parametreler | Doğrulama hata mesajı |
| Bulunamadı | Net "bulunamadı" |
| Sunucu hatası | Genel hata, detayları logla |

### En İyi Uygulamalar

- Yapılandırılmış hatalar döndür
- Dahili detayları ifşa etme
- Hata ayıklama için logla
- Eyleme geçirilebilir mesajlar sağla

---

## 6. Çok Modlu (Multimodal) İşleme

### Desteklenen Tipler

| Tip | Kodlama |
|-----|---------|
| Metin | Düz metin |
| Resimler | Base64 + MIME tipi |
| Dosyalar | Base64 + MIME tipi |

---

## 7. Güvenlik Prensipleri

### Girdi Doğrulama

- Tüm araç girdilerini doğrula
- Kullanıcı tarafından sağlanan verileri sterilize et
- Kaynak erişimini sınırla

### API Anahtarları

- Ortam değişkenlerini kullan
- Sırları loglama
- İzinleri doğrula

---

## 8. Yapılandırma

### Claude Masaüstü Yapılandırması

| Alan | Amaç |
|------|------|
| command | Çalıştırılacak yürütülebilir dosya |
| args | Komut argümanları |
| env | Ortam değişkenleri |

---

## 9. Test Etme

### Test Kategorileri

| Tip | Odak |
|-----|------|
| Birim | Araç mantığı |
| Entegrasyon | Tam sunucu |
| Sözleşme | Şema doğrulama |

---

## 10. En İyi Uygulamalar Kontrol Listesi

- [ ] Net, eylem odaklı araç isimleri
- [ ] Açıklamalarla birlikte tam girdi şemaları
- [ ] Yapılandırılmış JSON çıktısı
- [ ] Tüm durumlar için hata yönetimi
- [ ] Girdi doğrulama
- [ ] Ortam tabanlı yapılandırma
- [ ] Hata ayıklama için loglama

---

> **Unutma:** MCP araçları basit, odaklanmış ve iyi belgelenmiş olmalıdır. YZ, bunları doğru kullanmak için açıklamalara güvenir.
