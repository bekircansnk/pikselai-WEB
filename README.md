# 📚 Katalog Web - Dijital Katalog Çözümleri

Profesyonel dijital katalog ve yapay zeka destekli içerik yönetimi için modern web uygulaması.

---

## 🚀 Özellikler

- **Yapay Zeka Desteği** - AI destekli fotoğraf üretimi ile profesyonel içerikler
- **Hızlı Arama** - IndexedDB tabanlı kalıcı arama indeksi
- **Mobil Uyumluluk** - PWA desteği ile her cihazdan erişim
- **Google Drive Entegrasyonu** - Mevcut klasörlerden kolayca katalog oluşturma
- **Modern Tasarım** - Liquid Glass UI ve akıcı animasyonlar
- **Hızlı Paylaşım** - Bayilerle tek tıkla fotoğraf paylaşımı

---

## 🛠️ Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React 19 | Modern kullanıcı arayüzü |
| TypeScript | Tip güvenli geliştirme |
| Vite | Hızlı geliştirme ortamı |
| Framer Motion | Akıcı animasyonlar |
| React Router | Sayfa yönlendirme |

---

## 📦 Kurulum

### Gereksinimler

- Node.js 18 veya üzeri
- npm veya yarn paket yöneticisi

### Bağımlılıkları Yükleme

```bash
# Proje klasörüne git
cd Katalog-Web

# Bağımlılıkları yükle
npm install
```

---

## 💻 Geliştirme Komutları

### Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

> Varsayılan olarak `http://localhost:5173` adresinde çalışır.

### Kod Kalitesi Kontrolü (Lint)

```bash
npm run lint
```

---

## 🏗️ Derleme (Build) Komutları

### Üretim İçin Derleme

```bash
npm run build
npm run preview

```

> `dist/` klasörüne derlenmiş dosyalar oluşturulur.

### Derlenmiş Dosyaları Önizleme

```bash
npm run preview
```

> Derleme sonrası oluşan dosyaları yerel sunucuda test eder.

---

## 🚀 Dağıtım (Deploy)

### Manuel Dağıtım

1. Projeyi derleyin:
   ```bash
   npm run build
   ```

2. `dist/` klasöründeki dosyaları sunucunuza yükleyin.

### Netlify ile Dağıtım

1. [Netlify](https://netlify.com) hesabı oluşturun
2. GitHub reposunu bağlayın
3. Derleme ayarları:
   - **Derleme Komutu:** `npm run build`
   - **Yayın Klasörü:** `dist`

### Vercel ile Dağıtım

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub reposunu içe aktarın
3. Vite projesi otomatik algılanır

---

## 📁 Proje Yapısı

```
Katalog-Web/
├── public/              # Statik dosyalar
├── src/
│   ├── components/      # React bileşenleri
│   ├── pages/           # Sayfa bileşenleri
│   ├── styles/          # CSS dosyaları
│   ├── App.tsx          # Ana uygulama bileşeni
│   └── main.tsx         # Giriş noktası
├── index.html           # Ana HTML dosyası
├── package.json         # Proje bağımlılıkları
├── vite.config.ts       # Vite yapılandırması
└── tsconfig.json        # TypeScript yapılandırması
```

---

## 🔧 Ortam Değişkenleri

Proje kök dizininde `.env` dosyası oluşturun:

```env
VITE_API_URL=https://api.orneksite.com
VITE_GOOGLE_CLIENT_ID=client-id-buraya
```

> `.env` dosyası `.gitignore`'da olmalıdır, asla repoya eklemeyin!

---

## 📝 Sık Kullanılan Komutlar Özeti

| Komut | Açıklama |
|-------|----------|
| `npm install` | Bağımlılıkları yükler |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Üretim için derler |
| `npm run preview` | Derlenmiş dosyaları önizler |
| `npm run lint` | Kod kalitesini kontrol eder |
npm run build
npm run preview
---

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Yeni bir dal oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Dalınıza push edin (`git push origin yeni-ozellik`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje özel kullanım içindir.

---

## 📞 İletişim

Sorularınız için geliştirici ekibiyle iletişime geçin.
bekircan