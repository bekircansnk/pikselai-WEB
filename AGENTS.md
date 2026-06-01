# AGENTS.md - PikselAI Proje Yapısı ve Kuralları

> Bu uygulama kuralları, `/Users/bekir/.gemini/GEMINI.md` adresindeki ANA SİSTEM KURALLARI'nı temel alır. Ajanlar önce ana kuralları okumalı, ardından bu dosyadaki projeye özel kuralları uygulamalıdır.

## 1. Proje Dizin (Klasör) Mimarisi 🗂️

Tüm projeyi temiz, yönetilebilir ve net kategoriler halinde tutmak ZORUNLUDUR. Klasörleme mantığı şu şekildedir:

- `src/pages/` -> Sayfa tasarımları ve ana bileşenler
- `src/components/` -> Ortak kullanım bileşenleri
- `src/layouts/` -> Ana şablonlar (örn: MainLayout)
- `scripts/` -> Projeye özgü otomasyon ve iyileştirme komutları (DİKKAT: Görev gerçekleştirmeden önce burada var olan scriptleri incele! Yeniden icat etme.)
- `public/sosyal_medya_resimler/` -> Tüm proje görselleri. 

### 1.1 Görsel Kategorizasyon Kuralları
- **Sayfa Bazlı Görsel Mimarisi (MANDATORY):** İlgili sayfanın veya bileşenin görselleri başka merkezi ya da genel konumlara taşınmamalı, o sayfanın adını ve amacını taşıyan alt klasörlerde tutulmalıdır (Örn: `public/assets/pages/homeyeni/hayalet_oncesi_sonrasi/`).
- `public/sosyal_medya_resimler` klasörü her marka ve duruma göre alt klasörlere ayrılmıştır ve kesinlikle boşluk veya Türkçe/özel karakter içermemelidir:
- `hero/` -> Ana sayfa tam tur görüntüleri.
- `marka_logo/` -> Referans markaların SVG/PNG logoları.
- `hayalet_oncesi_sonrasi/` -> Ghost mannequin değişimleri.
- `cazador/`, `venus/`, `mina_drinks/`, `camp_and_map/` -> Marka bazlı işler.
- `sanal_manken/` -> Manken resimleri.
- `standart_gorseller/` -> Daha önce başıboş duran fotoğraflar düzenlenip kategorize edilmiştir.

LÜTFEN yeni bir dosya eklerken her zaman yukarıdaki spesifik alt klasörleri kullan (boşluk kullanmadan "_" ile) ve görüntüleri `webp` formatında kaydet (`.silinecekler_cop_kutusu` dizinine orijinalleri at!).

## 2. Ajan (Agent) Ortak Çalışma Kuralı 🤖

Ajanların yeniden iş üretmesini engelleme yasası:
- Projeye hakimiyet için MÜDAHALE ETMEDEN ÖNCE `AGENTS.md` veya ilgili `scripts` ve `public` klasöründe ne tür materyaller var hızlıca `list_dir` ile tara.
- Optimize python script'i veya component gibi daha önceden yazılmış dosyaların mevcutlarını BİR KEZ DAHA OLUŞTURMA.
- Varsa üzerlerine ekleme yap veya düzenle. Yalnızca projeye faydası dokunacak işlevsel çözümler inşa et. 

## 3. "yapi_kontrol" Standartları 🏗️
- Tıpkı şu an bu dosyanın yaptığı gibi, her yenilik sisteme kazandırıldığında klasör kurallarının aşılmadığından emin ol.
- Eski kalıntı dosyaları çekinmeden sil veya çöp kutusuna taşı.
- Türkçe isim, özel karakterli (boşluk içeren) dosya isimlendirmeleri YAPILAMAZ! (örn: "hero kopya.jpg" YASAK, "hero_v2.webp" İDEAL)

## 4. Ana Dizin (Root) Temizlik Kuralı 🧹
Sistem her zaman derli toplu ve düzenli olmalıdır.
- Ana dizinde (root) asla sahipsiz `.tsx`, `.js`, `.py` gibi kaynak dosyalar, test veya yedekleme dosyaları bulundurulamaz. Varsa ilgili ait oldukları klasörlere (örn: `src/pages/`, `scripts/`) taşınmalıdır.
- Dokümantasyon niteliğindeki (`.md`, `.pdf`, `.txt`) her türlü plan, spec, rapor gibi dosyalar ZORUNLU olarak `docs/` klasöründe tutulmalıdır (Sadece `README.md`, `GEMINI.md`, `AGENTS.md`, `CHANGELOG.md` hariç).
- İşe yaramayan, kopyalanmış veya eski sürüme ait olduğu düşünülen tüm döküman ve dosyalar `.silinecekler_cop_kutusu/` dizinine taşınmalıdır. Bu kurala her ajan proaktif olarak uymalı ve ortalığı her zaman temiz bırakmalıdır.

## 5. Build Kontrol Zorunluluğu (CRITICAL) 📦
Vercel deployment hatalarını sıfıra indirmek için:
- **Harekete Geçmeden Önce:** Her kod değişikliği sonrası `npm run build` veya `npx tsc --noEmit` çalıştırılacaktır.
- **Unused Variable Temizliği:** Kullanılmayan hiçbir `import`, `variable` veya `function` kod içerisinde bırakılmayacaktır.
- **Commit Öncesi Onay:** Ajan, build'in başarılı olduğundan emin olmadan asla `git push` yapmayacaktır.

## 6. Script Arşivleme ve Belgeleme Standardı 📜
- Projede geliştirilen tüm yardımcı, geçici veya otomasyon amaçlı Python/JavaScript betikleri silinmek yerine MUTLAKA `scripts/archive/` klasörü altında saklanacaktır.
- `scripts/archive/README.md` dosyası her yeni betik eklendiğinde güncellenecek; betiğin adı, amacı ve kullanım talimatları Türkçe olarak belgelenecektir. Bu sayede kurumsal hafıza korunarak kodların yeniden kullanımı sağlanacaktır.
