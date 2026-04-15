# PikselAI Güncel Versiyon Kullanma Kılavuzu ve Geliştirme Özeti

Bu belge, yakın zamanda proje üzerinde (son merge çakışmasından önce) sizin tarafınızdan yapılmış tüm ağır yapısal ve tasarımsal geliştirmelerin kaydını tutmak içindir. Diğer ortamlardaki versiyonlarla bu projeyi birleştirirken hangi dosyaların neden üstün (hayatta kalan dosya) konumda olması gerektiğini açıklar.

## 📌 En Son Neler Yapıldı?

### 1. `HomeYeni.tsx` Yeniden Tasarlandı ve Özelleştirildi
- **Ghost/E-Ticaret Slideleri:** "Compare Slider" bileşeni portre fotoğraflarına uyumlu olacak şeklide çift kolonlu ve dikey bir düzenlemeye sokuldu. Tıklayıp kaydırma yerine sadece üzerine gelince (hover) çalışacak daha yumuşak bir sisteme geçirildi.
- **Dinamik Arka Plan Geçişleri:** Açık renklerin boğuculuğunu engellemek için peş peşe gelen bej renkli bloklar arasına, koyu zemin (Yeşil/Dark) geçişleri eklendi.
- **Dinamik Medya Beslemesi:** Ana sayfa afiş/banner alanındaki resimlerin gösterimleri algoritmik hale getirildi (dinamik ve rastgele). Sabit ve kopyalanmış büyük dosyalar iptal edildi.

### 2. Dosya, Boyut ve Performans İyileştirmeleri
- **.WebP Devrimi:** Büyük boyutlu JPEG veya PNG'ler Vercel derlemesini yormaması için kalitesi korunarak `.webp` yapısına derlendi.
- **Akıllı Kategorizasyon:** `public/` içindeki fotoğraf ve simgeler rastgele dizilmek yerine:
  - `hero/`
  - `marka_logo/`
  - `sanal_manken/`
  - `hayalet_oncesi_sonrasi/` gibi net klasörlere taşındı.
- Çöp dosyalar ana projeden `.silinecekler_cop_kutusu/` dizinine sürüldü (Git'e yüklenmeleri engellendi).

### 3. Yapı ve Disiplin (Root Temizliği)
- Projenin ana klasöründe `AGENTS.md` kurallarında belirtilen "sahipsiz, ortalıkta gezen" her tür `.tsx` test kodu ortadan kaldırıldı (örnek: sonradan yaratılan kopya sayfalar).

## 🛠 Diğer Geliştirici Dosyaları İle Birleştirme (Merge) Sırasında Dikkat Edilecekler
Bu uygulamanın mevcut hali, tasarımsal ve performans olarak **EN ÜST** iterasyondur. Diğer makineden gelen eklentilerle çakışma yaşandığında:
1. `src/pages/HomeYeni.tsx` dosyasında KESİNLİKLE gelen kodları ezmeliyiz. Lokal (Bu kodlar) hayatta kalmalı.
2. `public` dizininde gelen yüksek boyutlu fotoğraflar reddedilmeli ya da derhal WebP formuna çekilmelidir.
3. Diğer geliştirme yapılmış alanlar (Örnek: `Islerimiz.tsx` ya da `costCalculator` vb.) ise gelen eklentileri olduğu gibi alabilir.

*(Bu dosya geliştiriciler arasında "source of truth - tek gerçek" kaynağı oluşturmak maksadıyla oluşturulmuştur.)*
