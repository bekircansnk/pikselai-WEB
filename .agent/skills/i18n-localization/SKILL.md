---
name: i18n-localization
description: Internationalization and localization patterns. Detecting hardcoded strings, managing translations, locale files, RTL support.
allowed-tools: Read, Glob, Grep
---

# i18n & Yerelleştirme

> Uluslararasılaştırma (i18n) ve Yerelleştirme (L10n) en iyi uygulamaları.

---

## 1. Temel Kavramlar

| Terim | Anlamı |
|-------|--------|
| **i18n** | Uluslararasılaştırma - uygulamayı çevrilebilir yapma |
| **L10n** | Yerelleştirme - asıl çeviriler |
| **Locale** | Dil + Bölge (en-US, tr-TR) |
| **RTL** | Sağdan sola diller (Arapça, İbranice) |

---

## 2. i18n Ne Zaman Gerekli

| Proje Tipi | i18n Gerekli mi? |
|-------------|------------------|
| Halka açık web uygulaması | ✅ Evet |
| SaaS ürünü | ✅ Evet |
| Dahili araç | ⚠️ Belki |
| Tek bölgeli uygulama | ⚠️ Geleceği düşün |
| Kişisel proje | ❌ İsteğe bağlı |

---

## 3. Uygulama Desenleri

### React (react-i18next)

```tsx
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t } = useTranslation();
  return <h1>{t('welcome.title')}</h1>;
}
```

### Next.js (next-intl)

```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Home');
  return <h1>{t('title')}</h1>;
}
```

### Python (gettext)

```python
from gettext import gettext as _

print(_("Uygulamamıza hoş geldiniz"))
```

---

## 4. Dosya Yapısı

```
locales/
├── en/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
├── tr/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
└── ar/          # RTL
    └── ...
```

---

## 5. En İyi Uygulamalar

### YAP ✅

- Ham metin değil, çeviri anahtarları kullan
- Çevirileri özelliğe göre ad alanlarına (namespace) ayır
- Çoğullaştırmayı (pluralization) destekle
- Dil başına tarih/sayı formatlarını işle
- Başlangıçtan itibaren RTL planla
- Karmaşık dizeler için ICU mesaj formatı kullan

### YAPMA ❌

- Bileşenlerde metinleri kodlama (hardcode)
- Çevrilmiş dizeleri birleştirme (concatenate)
- Metin uzunluğunu varsayma (Almanca %30 daha uzundur)
- RTL düzenini unutma
- Aynı dosyada dilleri karıştırma

---

## 6. Yaygın Sorunlar

| Sorun | Çözüm |
|-------|-------|
| Eksik çeviri | Varsayılan dile geri dön |
| Kodlanmış metinler | Linter/denetleyici script kullan |
| Tarih formatı | Intl.DateTimeFormat kullan |
| Sayı formatı | Intl.NumberFormat kullan |
| Çoğullaştırma | ICU mesaj formatı kullan |

---

## 7. RTL Desteği

```css
/* CSS Mantıksal Özellikleri */
.container {
  margin-inline-start: 1rem;  /* margin-left değil */
  padding-inline-end: 1rem;   /* padding-right değil */
}

[dir="rtl"] .icon {
  transform: scaleX(-1);
}
```

---

## 8. Kontrol Listesi

Göndermeden önce:

- [ ] Tüm kullanıcıya dönük metinler çeviri anahtarları kullanıyor
- [ ] Desteklenen tüm diller için yerel ayar dosyaları mevcut
- [ ] Tarih/sayı formatları Intl API kullanıyor
- [ ] RTL düzeni test edildi (varsa)
- [ ] Geri dönüş (fallback) dili yapılandırıldı
- [ ] Bileşenlerde kodlanmış metin yok

---

## Script

| Script | Amaç | Komut |
|--------|------|-------|
| `scripts/i18n_checker.py` | Kodlanmış metinleri & eksik çevirileri tespit et | `python scripts/i18n_checker.py <proje_yolu>` |
