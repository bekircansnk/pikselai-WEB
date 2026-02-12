---
name: geo-fundamentals
description: YZ arama motorları (ChatGPT, Claude, Perplexity) için Üretken Motor Optimizasyonu (GEO).
allowed-tools: Read, Glob, Grep
---

# GEO Temelleri

> YZ destekli arama motorları için optimizasyon.

---

## 1. GEO Nedir?

**GEO** = Üretken Motor Optimizasyonu (Generative Engine Optimization)

| Hedef | Platform |
|-------|----------|
| YZ yanıtlarında atıf almak | ChatGPT, Claude, Perplexity, Gemini |

### SEO vs GEO

| Yön | SEO | GEO |
|-----|-----|-----|
| Hedef | #1 sıralama | YZ atıfları |
| Platform | Google | YZ motorları |
| Metrikler | Sıralamalar, CTR | Atıf oranı |
| Odak | Anahtar kelimeler | Varlıklar (Entities), veriler |

---

## 2. YZ Motoru Manzarası

| Motor | Atıf Stili | Fırsat |
|-------|------------|--------|
| **Perplexity** | Numaralandırılmış [1][2] | En yüksek atıf oranı |
| **ChatGPT** | Satır içi/dipnotlar | Özel GPT'ler |
| **Claude** | Bağlamsal | Uzun form içerik |
| **Gemini** | Kaynaklar bölümü | SEO geçişi |

---

## 3. RAG Erişim Faktörleri

YZ motorları atıf yapılacak içeriği nasıl seçer:

| Faktör | Ağırlık |
|--------|---------|
| Semantik alaka | ~%40 |
| Anahtar kelime eşleşmesi | ~%20 |
| Otorite sinyalleri | ~%15 |
| Tazelik | ~%10 |
| Kaynak çeşitliliği | ~%15 |

---

## 4. Atıf Alan İçerik

| Öğe | Neden Çalışır |
|-----|---------------|
| **Orijinal istatistikler** | Benzersiz, atıf yapılabilir veri |
| **Uzman alıntıları** | Otorite transferi |
| **Net tanımlar** | Çıkarılması kolay |
| **Adım adım rehberler** | Eyleme geçirilebilir değer |
| **Karşılaştırma tabloları** | Yapılandırılmış bilgi |
| **SSS bölümleri** | Doğrudan cevaplar |

---

## 5. GEO İçerik Kontrol Listesi

### İçerik Öğeleri

- [ ] Soru tabanlı başlıklar
- [ ] Üstte özet/TL;DR
- [ ] Kaynaklı orijinal veriler
- [ ] Uzman alıntıları (isim, unvan)
- [ ] SSS bölümü (3-5 Soru-Cevap)
- [ ] Net tanımlar
- [ ] "Son güncelleme" zaman damgası
- [ ] Kimlik bilgileriyle yazar

### Teknik Öğeler

- [ ] Tarihli makale şeması (schema)
- [ ] Yazar için kişi şeması
- [ ] SSS Sayfası şeması
- [ ] Hızlı yüklenme (< 2.5s)
- [ ] Temiz HTML yapısı

---

## 6. Varlık (Entity) İnşası

| Eylem | Amaç |
|-------|------|
| Google Bilgi Paneli | Varlık tanıma |
| Wikipedia (eğer kayda değerse) | Otorite kaynağı |
| Web genelinde tutarlı bilgi | Varlık konsolidasyonu |
| Endüstri bahsetmeleri | Otorite sinyalleri |

---

## 7. YZ Tarayıcı Erişimi

### Anahtar YZ Kullanıcı Aracıları (User-Agents)

| Tarayıcı | Motor |
|----------|-------|
| GPTBot | ChatGPT/OpenAI |
| Claude-Web | Claude |
| PerplexityBot | Perplexity |
| Googlebot | Gemini (paylaşılan) |

### Erişim Kararı

| Strateji | Ne Zaman |
|----------|--------|
| Hepsine izin ver | YZ atıfları iste |
| GPTBot'u engelle | OpenAI eğitimini isteme |
| Seçici | Bazılarına izin ver, diğerlerini engelle |

---

## 8. Ölçüm

| Metrik | Nasıl Takip Edilir |
|--------|--------------------|
| YZ atıfları | Manuel izleme |
| "[Marka]'ya göre" bahsetmeleri | YZ'de ara |
| Rakip atıfları | Payı karşılaştır |
| YZ-yönlendirmeli trafik | UTM parametreleri |

---

## 9. Anti-Desenler

| ❌ Yapma | ✅ Yap |
|----------|-------|
| Tarihsiz yayınla | Zaman damgaları ekle |
| Belirsiz atıflar | Kaynakları isimlendir |
| Yazar bilgisini atla | Kimlik bilgilerini göster |
| İnce içerik | Kapsamlı kapsama |

---

> **Unutma:** YZ; net, yetkili ve çıkarılması kolay içeriğe atıf yapar. En iyi cevap ol.

---

## Script

| Script | Amaç | Komut |
|--------|------|-------|
| `scripts/geo_checker.py` | GEO denetimi (YZ atıf hazırlığı) | `python scripts/geo_checker.py <proje_yolu>` |
