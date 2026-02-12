---
name: mobile-design
description: iOS ve Android uygulamaları için mobil öncelikli tasarım düşüncesi ve karar verme. Dokunmatik etkileşim, performans desenleri, platform kuralları. Sabit değerleri değil, prensipleri öğretir. React Native, Flutter veya yerel mobil uygulamalar oluştururken kullanın.
allowed-tools: Read, Glob, Grep, Bash
---

# Mobil Tasarım Sistemi

> **Felsefe:** Dokunmatik öncelikli. Pil bilincine sahip. Platforma saygılı. Çevrimdışı çalışabilir.
> **Temel Prensip:** Mobil küçük bir masaüstü DEĞİLDİR. Mobil kısıtları DÜŞÜN, platform seçimini SOR.

---

## 🔧 Çalışma Zamanı Scriptleri

**Doğrulama için bunları çalıştır (okuma, sadece çalıştır):**

| Script | Amaç | Kullanım |
|--------|------|----------|
| `scripts/mobile_audit.py` | Mobil UX & Dokunmatik Denetimi | `python scripts/mobile_audit.py <proje_yolu>` |

---

## 🔴 ZORUNLU: Çalışmadan Önce Referans Dosyalarını Oku!

**⛔ İlgili dosyaları okumadan geliştirmeye BAŞLAMA:**

### Evrensel (Her Zaman Oku)

| Dosya | İçerik | Durum |
|-------|--------|-------|
| **[mobile-design-thinking.md](mobile-design-thinking.md)** | **⚠️ EZBER KARŞITI: Düşünmeye zorlar, YZ varsayılanlarını önler** | **⬜ KRİTİK İLK** |
| **[touch-psychology.md](touch-psychology.md)** | **Fitts Yasası, jestler, haptikler, başparmak alanı** | **⬜ KRİTİK** |
| **[mobile-performance.md](mobile-performance.md)** | **RN/Flutter performansı, 60fps, bellek** | **⬜ KRİTİK** |
| **[mobile-backend.md](mobile-backend.md)** | **Push bildirimleri, çevrimdışı senkronizasyon, mobil API** | **⬜ KRİTİK** |
| **[mobile-testing.md](mobile-testing.md)** | **Test piramidi, E2E, platforma özel** | **⬜ KRİTİK** |
| **[mobile-debugging.md](mobile-debugging.md)** | **Native vs JS hata ayıklama, Flipper, Logcat** | **⬜ KRİTİK** |
| [mobile-navigation.md](mobile-navigation.md) | Tab/Stack/Drawer, derin linkleme | ⬜ Oku |
| [mobile-typography.md](mobile-typography.md) | Sistem fontları, Dinamik Tip, erişilebilirlik | ⬜ Oku |
| [mobile-color-system.md](mobile-color-system.md) | OLED, koyu mod, pil dostu | ⬜ Oku |
| [decision-trees.md](decision-trees.md) | Framework/durum/depolama seçimi | ⬜ Oku |

> 🧠 **mobile-design-thinking.md ÖNCELİKLİDİR!** Bu dosya YZ'nin ezberlenmiş desenler yerine düşünmesini sağlar.

### Platforma Özel (Hedefe Göre Oku)

| Platform | Dosya | İçerik | Ne Zaman Okunmalı |
|----------|-------|--------|-------------------|
| **iOS** | [platform-ios.md](platform-ios.md) | İnsan Arayüzü Yönergeleri, SF Pro, SwiftUI desenleri | iPhone/iPad için |
| **Android** | [platform-android.md](platform-android.md) | Material Design 3, Roboto, Compose desenleri | Android için |
| **Çapraz Platform** | Yukarıdakilerin ikisi de | Platform ayrışma noktaları | React Native / Flutter |

> 🔴 **iOS için → ÖNCE platform-ios.md oku!**
> 🔴 **Android için → ÖNCE platform-android.md oku!**
> 🔴 **Çapraz platform → İKİSİNİ DE oku ve koşullu platform mantığı uygula!**

---

## ⚠️ KRİTİK: VARSAYMADAN ÖNCE SOR (ZORUNLU)

> **DUR! Kullanıcının isteği açık uçluysa, favorilerine DÜŞME.**

### Belirtilmemişse MUTLAKA Sor:

| Yön | Sor | Neden |
|-----|-----|-------|
| **Platform** | "iOS, Android veya her ikisi?" | HER tasarım kararını etkiler |
| **Framework** | "React Native, Flutter veya yerel?" | Desenleri ve araçları belirler |
| **Navigasyon** | "Tab çubuğu, çekmece veya yığın tabanlı?" | Temel UX kararı |
| **Durum** | "Hangi durum yönetimi? (Zustand/Redux/Riverpod/BLoC?)" | Mimari temeli |
| **Çevrimdışı** | "Bunun çevrimdışı çalışması gerekiyor mu?" | Veri stratejisini etkiler |
| **Hedef cihazlar** | "Sadece telefon mu, tablet desteği de var mı?" | Düzen karmaşıklığı |

### ⛔ YZ MOBİL ANTİ-DESENLERİ (YASAK LİSTESİ)

> 🚫 **Bunlar kaçınılması GEREKEN YZ varsayılan eğilimleridir!**

#### Performans Günahları

| ❌ ASLA YAPMA | Neden Yanlış | ✅ HER ZAMAN YAP |
|---------------|--------------|------------------|
| **Uzun listeler için ScrollView** | TÜM öğeleri render eder, bellek patlar | `FlatList` / `FlashList` / `ListView.builder` kullan |
| **Satır içi renderItem fonksiyonu** | Her renderda yeni fonksiyon, tüm öğeler yeniden render olur | `useCallback` + `React.memo` |
| **Eksik keyExtractor** | İndeks tabanlı anahtarlar yeniden sıralamada hataya neden olur | Veriden benzersiz, kararlı ID |
| **getItemLayout atlamak** | Asenkron düzen = titreyen kaydırma | Öğelerin sabit yüksekliği varsa sağla |
| **Her yerde setState()** | Gereksiz widget yeniden inşası | Hedefli durum, `const` yapıcılar |
| **Native driver: false** | Animasyonlar JS thread tarafından engellenir | Her zaman `useNativeDriver: true` |
| **Üretimde console.log** | JS thread'i ciddi şekilde bloklar | Sürüm yapmadan önce kaldır |
| **React.memo/const atlamak** | Herhangi bir değişiklikte her öğe yeniden render olur | Liste öğelerini HER ZAMAN memoize et |

#### Dokunmatik/UX Günahları

| ❌ ASLA YAPMA | Neden Yanlış | ✅ HER ZAMAN YAP |
|---------------|--------------|------------------|
| **Dokunma hedefi < 44px** | Doğru dokunmak imkansız, sinir bozucu | Minimum 44pt (iOS) / 48dp (Android) |
| **Hedefler arası < 8px boşluk** | Komşulara yanlışlıkla dokunma | Minimum 8-12px boşluk |
| **Sadece jest tabanlı etkileşimler** | Motor engelli kullanıcılar dışlanır | Her zaman buton alternatifi sağla |
| **Yükleme durumu yok** | Kullanıcı uygulamanın çöktüğünü sanır | HER ZAMAN yükleme geri bildirimi göster |
| **Hata durumu yok** | Kullanıcı takılır, kurtarma yolu yok | Yeniden deneme seçeneği ile hatayı göster |
| **Çevrimdışı işleme yok** | Ağ kesildiğinde çökme/bloklanma | Zarif bozulma (graceful degradation), önbelleğe alınmış veri |
| **Platform kurallarını görmezden gelme** | Kullanıcıların kafası karışır, kas hafızası bozulur | iOS iOS gibi, Android Android gibi hissettirmeli |

#### Güvenlik Günahları

| ❌ ASLA YAPMA | Neden Yanlış | ✅ HER ZAMAN YAP |
|---------------|--------------|------------------|
| **AsyncStorage içinde token** | Kolayca erişilebilir, rootlu cihazda çalınır | `SecureStore` / `Keychain` / `EncryptedSharedPreferences` |
| **API anahtarlarını kodlamak (Hardcode)** | APK/IPA'dan tersine mühendislik yapılabilir | Ortam değişkenleri, güvenli depolama |
| **SSL sabitlemeyi atlamak** | MITM saldırıları mümkün | Üretimde sertifikaları sabitle (pinning) |
| **Hassas verileri loglamak** | Loglar çıkarılabilir | Tokenları, şifreleri, PII'yi asla loglama |

#### Mimari Günahları

| ❌ ASLA YAPMA | Neden Yanlış | ✅ HER ZAMAN YAP |
|---------------|--------------|------------------|
| **UI içinde iş mantığı** | Test edilemez, bakımı yapılamaz | Servis katmanı ayrımı |
| **Her şey için global durum** | Gereksiz yeniden renderlar, karmaşıklık | Varsayılan yerel durum, gerektiğinde yukarı taşı |
| **Derin linklemeyi sonradan düşünmek** | Bildirimler, paylaşımlar bozuk | Derin linkleri ilk günden planla |
| **Dispose/cleanup atlamak** | Bellek sızıntıları, zombi dinleyiciler | Abonelikleri, zamanlayıcıları temizle |

---

## 📱 Platform Karar Matrisi

### Ne Zaman Birleştirilmeli vs Ayrışmalı

```
                    BİRLEŞTİR (ikisinde de aynı)  AYRIŞTIR (platforma özel)
                    ───────────────────           ──────────────────────────
İş Mantığı          ✅ Her Zaman                  -
Veri Katmanı        ✅ Her Zaman                  -
Temel Özellikler    ✅ Her Zaman                  -
                    
Navigasyon          -                             ✅ iOS: kenardan kaydırma, Android: geri butonu
Jestler             -                             ✅ Platforma özgü his
İkonlar             -                             ✅ SF Symbols vs Material Icons
Tarih Seçiciler     -                             ✅ Yerel seçiciler doğru hissettirir
Modallar/Sayfalar   -                             ✅ iOS: bottom sheet vs Android: dialog
Tipografi           -                             ✅ SF Pro vs Roboto (veya özel)
Hata Diyalogları    -                             ✅ Uyarılar için platform kuralları
```

### Hızlı Referans: Platform Varsayılanları

| Öğe | iOS | Android |
|-----|-----|---------|
| **Birincil Font** | SF Pro / SF Compact | Roboto |
| **Min Dokunma Hedefi** | 44pt × 44pt | 48dp × 48dp |
| **Geri Navigasyon** | Sola kenar kaydırma | Sistem geri butonu/jesti |
| **Alt Tab İkonları** | SF Symbols | Material Symbols |
| **Eylem Sayfası** | Alttan UIActionSheet | Bottom Sheet / Diyalog |
| **İlerleme** | Spinner | Doğrusal ilerleme (Material) |
| **Yenilemek için Çek** | Yerel UIRefreshControl | SwipeRefreshLayout |

---

## 🧠 Mobil UX Psikolojisi (Hızlı Referans)

### Dokunmatik için Fitts Yasası

```
Masaüstü: İmleç hassastır (1px)
Mobil:    Parmak hassas değildir (~7mm temas alanı)

→ Dokunma hedefleri minimum 44-48px OLMALIDIR
→ Önemli eylemler BAŞPARMAK ALANINDA (ekranın altı)
→ Yıkıcı eylemler kolay erişimden UZAKTA
```

### Başparmak Alanı (Tek Elle Kullanım)

```
┌─────────────────────────────┐
│       ZOR ERİŞİM            │ ← Navigasyon, menü, geri
│        (uzanma)             │
├─────────────────────────────┤
│       ERİŞİLEBİLİR          │ ← İkincil eylemler
│         (doğal)             │
├─────────────────────────────┤
│       KOLAY ERİŞİM          │ ← BİRİNCİL CTA'lar, tab bar
│  (başparmağın doğal yayı)   │ ← Ana içerik etkileşimi
└─────────────────────────────┘
        [  ANA EKRAN  ]
```

### Mobile Özel Bilişsel Yük

| Masaüstü | Mobil Farkı |
|----------|-------------|
| Çoklu pencereler | Tek seferde TEK görev |
| Klavye kısayolları | Dokunmatik jestler |
| Hover durumları | Hover YOK (dokun ya da hiç) |
| Büyük görünüm alanı | Sınırlı alan, dikey kaydırma |
| Kararlı dikkat | Sürekli kesintiye uğrar |

Derinlemesine inceleme için: [touch-psychology.md](touch-psychology.md)

---

## ⚡ Performans Prensipleri (Hızlı Referans)

### React Native Kritik Kuralları

```typescript
// ✅ DOĞRU: Memoize edilmiş renderItem + React.memo sarmalayıcı
const ListItem = React.memo(({ item }: { item: Item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
));

const renderItem = useCallback(
  ({ item }: { item: Item }) => <ListItem item={item} />,
  []
);

// ✅ DOĞRU: Tüm optimizasyonlarla FlatList
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}  // Kararlı ID, indeks DEĞİL
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

### Flutter Kritik Kuralları

```dart
// ✅ DOĞRU: const yapıcılar yeniden inşayı önler
class MyWidget extends StatelessWidget {
  const MyWidget({super.key}); // CONST!

  @override
  Widget build(BuildContext context) {
    return const Column( // CONST!
      children: [
        Text('Statik içerik'),
        MyConstantWidget(),
      ],
    );
  }
}

// ✅ DOĞRU: ValueListenableBuilder ile hedefli durum
ValueListenableBuilder<int>(
  valueListenable: counter,
  builder: (context, value, child) => Text('$value'),
  child: const ExpensiveWidget(), // Yeniden inşa edilmez!
)
```

### Animasyon Performansı

```
GPU-hızlandırmalı (HIZLI):  CPU-sınırlı (YAVAŞ):
├── transform               ├── width, height
├── opacity                 ├── top, left, right, bottom
└── (SADECE bunları kullan) ├── margin, padding
                            └── (bunları animasyonlamaktan KAÇIN)
```

Tam rehber için: [mobile-performance.md](mobile-performance.md)

---

## 📝 KONTROL NOKTASI (Herhangi Bir Mobil Çalışmadan Önce ZORUNLU)

> **HERHANGİ bir mobil kod yazmadan önce, bu kontrol noktasını tamamlamalısın:**

```
🧠 KONTROL NOKTASI:

Platform:   [ iOS / Android / Her İkisi ]
Framework:  [ React Native / Flutter / SwiftUI / Kotlin ]
Okunan Dosyalar: [ Okuduğun yetenek dosyalarını listele ]

Uygulayacağım 3 Prensip:
1. _______________
2. _______________
3. _______________

Kaçınacağım Anti-Desenler:
1. _______________
2. _______________
```

**Örnek:**
```
🧠 KONTROL NOKTASI:

Platform:   iOS + Android (Çapraz platform)
Framework:  React Native + Expo
Okunan Dosyalar: touch-psychology.md, mobile-performance.md, platform-ios.md, platform-android.md

Uygulayacağım 3 Prensip:
1. Tüm listeler için React.memo + useCallback ile FlatList
2. 48px dokunma hedefleri, birincil CTA'lar için başparmak alanı
3. Platforma özel navigasyon (iOS kenar kaydırma, Android geri butonu)

Kaçınacağım Anti-Desenler:
1. Listeler için ScrollView → FlatList
2. Satır içi renderItem → Memoize edilmiş
3. Tokenlar için AsyncStorage → SecureStore
```

> 🔴 **Kontrol noktasını dolduramıyor musun? → GERİ DÖN VE YETENEK DOSYALARINI OKU.**

---

## 🔧 Framework Karar Ağacı

```
NE İNŞA EDİYORSUN?
        │
        ├── OTA güncellemelerine + hızlı iterasyona + web ekibine ihtiyaç var
        │   └── ✅ React Native + Expo
        │
        ├── Piksel mükemmelliğinde özel UI + performans kritik
        │   └── ✅ Flutter
        │
        ├── Derin yerel özellikler + tek platform odağı
        │   ├── Sadece iOS → SwiftUI
        │   └── Sadece Android → Kotlin + Jetpack Compose
        │
        ├── Mevcut RN kod tabanı + yeni özellikler
        │   └── ✅ React Native (bare workflow)
        │
        └── Kurumsal + mevcut Flutter kod tabanı
            └── ✅ Flutter
```

Tam karar ağaçları için: [decision-trees.md](decision-trees.md)

---

## 📋 Geliştirme Öncesi Kontrol Listesi

### HERHANGİ Bir Mobil Projeye Başlamadan Önce

- [ ] **Platform onaylandı mı?** (iOS / Android / Her İkisi)
- [ ] **Framework seçildi mi?** (RN / Flutter / Native)
- [ ] **Navigasyon desenine karar verildi mi?** (Tablar / Yığın / Çekmece)
- [ ] **Durum yönetimi seçildi mi?** (Zustand / Redux / Riverpod / BLoC)
- [ ] **Çevrimdışı gereksinimler biliniyor mu?**
- [ ] **Derin linkleme ilk günden planlandı mı?**
- [ ] **Hedef cihazlar tanımlandı mı?** (Telefon / Tablet / Her İkisi)

### Her Ekrandan Önce

- [ ] **Dokunma hedefleri ≥ 44-48px mi?**
- [ ] **Birincil CTA başparmak alanında mı?**
- [ ] **Yükleme durumu var mı?**
- [ ] **Yeniden denemeli hata durumu var mı?**
- [ ] **Çevrimdışı işleme düşünüldü mü?**
- [ ] **Platform kurallarına uyuldu mu?**

### Sürümden Önce

- [ ] **console.log kaldırıldı mı?**
- [ ] **Hassas veriler için SecureStore kullanıldı mı?**
- [ ] **SSL sabitleme etkin mi?**
- [ ] **Listeler optimize edildi mi (memo, keyExtractor)?**
- [ ] **Unmount sırasında bellek temizliği yapıldı mı?**
- [ ] **Düşük seviye cihazlarda test edildi mi?**
- [ ] **Tüm etkileşimli öğelerde erişilebilirlik etiketleri var mı?**

---

## 📚 Referans Dosyaları

Belirli alanlarda daha derin rehberlik için:

| Dosya | Ne Zaman Kullanılmalı |
|-------|-----------------------|
| [mobile-design-thinking.md](mobile-design-thinking.md) | **İLK! Ezber karşıtı, bağlam tabanlı düşünmeye zorlar** |
| [touch-psychology.md](touch-psychology.md) | Dokunmatik etkileşimi, Fitts Yasasını, jest tasarımını anlama |
| [mobile-performance.md](mobile-performance.md) | RN/Flutter optimizasyonu, 60fps, bellek/pil |
| [platform-ios.md](platform-ios.md) | iOS'a özel tasarım, HIG uyumluluğu |
| [platform-android.md](platform-android.md) | Android'e özel tasarım, Material Design 3 |
| [mobile-navigation.md](mobile-navigation.md) | Navigasyon desenleri, derin linkleme |
| [mobile-typography.md](mobile-typography.md) | Tip ölçeği, sistem fontları, erişilebilirlik |
| [mobile-color-system.md](mobile-color-system.md) | OLED optimizasyonu, koyu mod, pil |
| [decision-trees.md](decision-trees.md) | Framework, durum, depolama kararları |

---

> **Unutma:** Mobil kullanıcılar sabırsızdır, kesintiye uğrarlar ve küçük ekranlarda hassas olmayan parmaklar kullanırlar. EN KÖTÜ koşullar için tasarla: kötü ağ, tek el, parlak güneş, düşük pil. Orada çalışıyorsa, her yerde çalışır.
