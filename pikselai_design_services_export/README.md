# PikselAI Design Services Sayfası Aktarım Paketi

Bu klasör, `DesignServices.tsx` sayfasının başka bir projeye (ana projeye) aktarılabilmesi için gereken tüm bağımlılıkları içerir.

## 👉 Nasıl Aktarılır?

1. **Dosyaları Taşıyın:**
   Buradaki `src/` ve `public/` klasörlerinin içeriğini ana projedeki kendi projenizin dizinine kopyalayın:
   - `src/pages/DesignServices.tsx` -> ana projenizin `src/pages/` veya router'ınıza bağlı ilgili sayfa dizinine.
   - `src/assets/design-services/` -> ana projenizin `src/assets/` dizinine.
   - `public/e_ticaret_images/` -> ana projenizin `public/` dizinine (Ana URL üzerinden erişilebilmesi için önemlidir).

2. **Bağımlılıklar & Bileşenler:**
   - Sayfa `MainLayout` isimli bir layout bileşeni kullanmaktadır: `import { MainLayout } from "../layouts/MainLayout";`
   Eğer ana projede farklı bir layout varsa import yolunu kendi projenize göre düzeltiniz.

3. **Tailwind Ayarları (Önemli):**
   Sayfanın doğru renklerde görünmesi için ana projenizin `tailwind.config.ts` (veya .js) dosyasına ve kök CSS (ör. `index.css`) dosyasına PikselAI renk temalarının eklenmiş olması gerekmektedir (Bilhassa `bor-background`, `bor-foreground`, `bor-primary` gibi renk değişkenleri). Aksi halde bazı alanlar stillendirilmemiş (beyaz/siyah) kalabilir.

