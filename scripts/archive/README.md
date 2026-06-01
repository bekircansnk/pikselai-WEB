# 📂 PikselAI Yaratıcı Otomasyon ve Script Arşivi

Bu dizin, PikselAI platformundaki portfolyo yönetimi, Google Drive API entegrasyonları, yapay zeka tabanlı görsel işleme (arka plan temizleme) ve WebP optimizasyonu gibi süreçleri kolaylaştırmak ve hızlandırmak adına geliştirilen Python otomasyon scriptlerini barındırır.

---

## 🛠️ Script Kütüphanesi ve Kullanım Kılavuzları

### 1. `auto_ghost_mannequin.py` (Hayalet Çekim Otomasyonu)
* **Amacı:** Google Drive API'sinden gelen 100 adet görsel arasından eşleşen ön ve arka (1 & 2) kıyafet görsellerini bulur, bunları indirir, stüdyo arka planlarını BFS Flood Fill algoritmasıyla temizleyip transparan WebP yapar ve `Islerimiz.tsx` dosyasına otomatik entegre eder.
* **Nasıl Çalışır:**
  - `drive_images.json` dosyasını okuyarak kıyafet kodlarına göre gruplar oluşturur.
  - Seçilen görselleri Google Drive API'den HTTP Referer kısıtlamasını bypass ederek indirir.
  - **BFS Flood Fill:** Piksel düzeyinde komşuluk analizi yaparak kıyafetin dışındaki tüm beyaz/açık gri pikselleri transparan yapar (kıyafet içi beyaz detaylar korunur).
  - Arayüz kodlarını günceller.
* **Çalıştırma:**
  ```bash
  python3 scripts/archive/auto_ghost_mannequin.py
  ```

### 2. `fetch_drive_files.py` (Google Drive Arama & Listeleme)
* **Amacı:** Google Cloud Console referrer kısıtlamalarına sahip bir API anahtarını kullanarak Google Drive üzerindeki root klasör altında bulunan albüm klasörlerini ve albüm içindeki görselleri listeler, metadata'yı kaydeder.
* **Nasıl Çalışır:**
  - HTTP isteklerine `"Referer": "https://katalog.pikselai.com/"` başlığını ekleyerek referrer engelini bypass eder.
  - Albüm 6 (`6-hayalet-cekim`) klasörünün ID'sini dinamik olarak tespit eder.
  - Klasör içindeki tüm görsellerin ID, Name ve Size bilgilerini `scripts/drive_images.json` dosyasına JSON formatında kaydeder.
* **Çalıştırma:**
  ```bash
  python3 scripts/archive/fetch_drive_files.py
  ```

### 3. `import_yeni_set.py` ve `import_yeni_set2.py` (Kreatif Set Dağıtım)
* **Amacı:** Toplu üretilen kreatif görselleri zaman damgasına göre kronolojik olarak sıralar, 10'arlı gruplara böler, `public/assets/pages/yeni_set/` altına taşır ve `src/data/assetData.ts` dosyasına dinamik import yolları olarak ekler.
* **Nasıl Çalışır:**
  - Resim dosyalarını `requests` veya yerel dosya sistemi üzerinden okur.
  - Zaman damgaları ve parantez numaralarına göre alfabetik/kronolojik sıralama yapar.
  - dynamic `ASSET_DATA` nesnesine yeni set anahtarlarını (`yeni_set_1` ... `yeni_set_10`) ve WebP yollarını yazar.
* **Çalıştırma:**
  ```bash
  python3 scripts/archive/import_yeni_set.py
  python3 scripts/archive/import_yeni_set2.py
  ```

---

## 📜 Sistem Kuralları Entegrasyonu

Bu arşiv yapısı, **Gemini V3 Maestro Anayasası** kapsamında kalıcı kurallar haline getirilmiştir. Bundan sonraki tüm otonom ve yardımcı scriptler silinmek yerine bu klasör altında belgelenerek saklanacaktır.
