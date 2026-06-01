# Değişiklik Günlüğü (Changelog)

Projedeki tüm önemli değişiklikler bu dosyada belgelenecektir.

## [2026-06-01] - İşlerimiz Portfolyo İstatistik & Metin Sadeleştirmesi

### ⚡ Değiştirilenler & Optimize Edilenler (Changed)
- **Gerçekçi Metrikler Entegre Edildi:** "İşlerimiz" sayfasındaki abartılı veriler (500+ tamamlanan proje, 50+ mutlu marka) kaldırılarak; dürüst, yapay zeka odaklı ve performansa dayalı "10x Üretim Hızı" ve "7/24 Kesintisiz Üretim" gibi gerçekçi metrikler eklendi.
- **Alt Başlık Sadeleştirildi:** "Türkiye'nin lider markalarına..." şeklinde başlayan ve gerçekçi olmayan giriş metni, "Yapay zeka destekli yaratıcı prodüksiyon süreçlerimizle..." şeklinde daha dürüst ve marka odaklı bir ifadeyle güncellendi.

## [2026-06-01] - İşlerimiz Portfolyo Düzeltmeleri ve Temizliği

### 🧹 Temizlenenler & Düzeltilenler (Removed & Fixed)
- **Mükerrer Projeler Temizlendi:** `Islerimiz.tsx` sayfasındaki projelerden mükerrer ve hatalı görsel karışımı olan `E-Ticaret Dönüşümü - Cazador` projesi tamamen portfolyodan kaldırıldı.
- **Cazador Markası Sadeleştirildi:** Portfolyoda sadece tek bir Cazador projesi (`Kış Kampanyası`) bırakıldı. En alttaki `Ghost Mannequin Sistemleri` projesinin Cazador ile bağı koparılarak `Ghost Mannequin` adıyla bağımsız bir projeye dönüştürüldü ve başlığı `Hayalet Manken Çekimleri` yapıldı.
- **Kırık Görsel Linkleri Düzeltildi:** Ghost Mannequin projesindeki dizinde fiziksel olarak bulunmayan `l0000000751458__1.webp` ve `l0000000746579__1.webp` kırık görsel bağlantıları temizlendi.
- **Alakasız Görseller Taşındı:** "Mina Drinks" portfolyo projelerinin (Sosyal Medya ve Ürün Çekimleri) sonunda yer alan ve Camp/Cazador projesine ait olan alakasız `ca.webp` görselleri portfolyodan kaldırıldı ve `.silinecekler_cop_kutusu/` klasörüne taşındı.

## [2026-03-30] - Medya Optimizasyon & Yeni Sayfa Entegrasyonları

### ✨ Eklenenler (Added)
- **Yeni Medya Optimizasyon Betiği:** Sık kullanılan yüksek çözünürlüklü medya dosyalarını kalite kaybı olmaksızın otomatik tarayan, boyutlandıran ve WebP formatına çeviren `scripts/optimize_media.py` eklendi.
- **Sayfa Entegrasyonları:** PikselAI export paketinden gelen `HomeYeni.tsx`, `AiProductionYeni.tsx` ve `SosyalMedyaYeni.tsx` dosyaları mevcut yapı ile birleştirildi.
- **Navigasyon Yönlendirmeleri:** `App.tsx`, `MegaMenu.tsx` ve `MobileMenu.tsx` rotaları, yeni oluşturulan ana sayfa ve hizmet sayfalarına uygun olarak yönlendirildi.

### ⚡ Değiştirilenler & Optimize Edilenler (Changed)
- `public/sosyal_medya_resimler/` klasöründeki tüm yüksek kaliteli JPEG/PNG resimler WebP formatına dönüştürüldü.
- Web'de yükleme hatası veren (Google Drive / Unsplash vb.) kırık çevrimiçi bağlantılar kaldırılarak yerel ve hızlı çalışan optimize `.webp` varyantlarıyla değiştirildi. Bu sayede Core Web Vitals (LCP) skoru ciddi şekilde artırıldı.
- `public/as.mp4` kaynak dosyası, web performans standartlarına uygun (H.264/AAC) sıkıştırılarak ve kaliteden ödün vermeden yeniden kodlandı (ffmpeg).

### 🧹 Temizlenenler (Removed)
- Eski, şişkin görsellerin ve devasa videoların tamamı `.silinecekler_cop_kutusu/` isimli güvenli klasöre taşındı (ve `.gitignore` dahil edilerek sunucu performansı ve Kitap arşivi gereksiz yükten kurtarıldı).
- Sayfalarda ESLint uyarılarına sebep olan kullanılmayan `framer-motion` değişkenleri, fazla ve ölü modüler bileşenler kaldırıldı.

### 30 Mart 2026 - Sayfa Oranları ve Responsive Optimizasyonu

- **AiProductionYeni:** Hero video alanı yüksekliği kısaltıldı (min-h-[75vh] -> min-h-[50vh]) ve ekrana sığma sorunları giderildi.
- **HomeYeni & SosyalMedyaYeni:** Devasa boşluklar yaratan eski (py-32, py-40) padding değerleri, ekran boyutuna göre optimize edilmiş (py-20 md:py-32) yapılarla değiştirildi.
- Kapsamlı görsel alan iyileştirmesi yapıldı.

### 30 Mart 2026 - Video ve Yükseklik Revizyonları

- **AiProductionYeni:** Kullanıcı geribildirimi üzerine hero video alanı tekrar `min-h-screen` (tam ekran) yapıldı. Videonun alt kısmındaki yazıları gizlemek için video `scale-[1.15]` ve `translate-y-8` ile ekran dışına itildi.
- **Tüm Yeni Sayfalar:** Renk geçişleri sonrası çok fazla aşağı kaydırma gereksinimi (`py-20 md:py-32`) tamamen daraltılarak (`py-12 md:py-16`) ekranda daha bütünleşik bir okuma sağlandı.

### 30 Mart 2026 - Portfolyo Modal Entegrasyonu (Cazador ve Diğer Markalar)

- **AiProductionYeni:** Dışa aktarılan asıl pakette bulunmayan "Projeler (Portfolyo)" Modal sistemi (tıklamayla tam ekran galeri açma özelliği) sayfaya sıfırdan entegre edildi. Cazador, Venüs, Camp and Map ve Mina Drinks markaları için çoklu resim galeri yapısı eklendi.
- **SosyalMedyaYeni:** Projelerde bulunan `.jpg`/`.png` uzantılı görsel hedefleri, önceden optimize edilen hafif, hızlı ve yüksek performanslı WebP `.webp` görseller olacak şekilde değiştirildi.
