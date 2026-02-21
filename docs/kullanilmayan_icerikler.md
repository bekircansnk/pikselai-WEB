# Kullanılmayan İçerikler

Taslak sayfaya (CreativeDesign.tsx) entegre edilirken bazı içerikler, mevcut UI bileşenlerinin dengesini bozmamak ve görsel hiyerarşiyi korumak (grid yapısının asimetrikleşmesi ya da kart sayılarının fazla gelmesi vb.) nedeniyle dışarıda bırakılmış veya kısaltılmıştır. Aşağıda bu metinler ve neden dışarıda bırakıldıkları belirtilmiştir:

## 1. PWA Desteği - Detaylı Açıklamalar
* **Kısaltılan Metin:** "Her zaman, her yerde satışa ve sunuma hazırsınız. Native (yerel) bir uygulama hızında çalışarak maksimum performans elde edersiniz."
* **Neden Kullanılmadı:** "Nasıl Çalışır" Showcase bölümündeki FeatureItem özellikleri kısa, net ve 3'lü yapıda tasarlandığı için uzun fayda açıklamaları bu bölümde kısaltıldı.

## 2. Kullanıcı Deneyimi - Toplu İndirme ve Paylaşım Kolaylığı
* **Tam Metin:** "İhtiyaç duyduğunuz görselleri veya albümleri tek tıkla cihazınıza indirebilir veya bir bağlantı aracılığıyla takım arkadaşlarınızla pürüzsüzce paylaşabilirsiniz."
* **Neden Kullanılmadı:** Sayfadaki "Kullanıcı Deneyimi" alanı (Stats section olarak kodlanmış) 3 kolonlu bir tasarıma sahip olduğu için bu 4. madde grid yapısını bozacağından dolayı dışarıda bırakıldı (diğer 3 madde: Minimalist Arayüz, Dokunsal Geri Bildirim ve Ana sayfada/Grid içerisindeki indirme açıklaması yeterli görüldü).

## 3. Kullanıcı Deneyimi - Her Ekrana Kusursuz Uyum
* **Tam Metin:** "İster dev bir monitörde toplantı odasında sunum yapın, ister hareket halindeyken akıllı telefonunuzdan koleksiyonları inceleyin; arayüz kendini ekrana göre mükemmel şekilde optimize eder."
* **Neden Kullanılmadı:** Yine aynı şekilde 3 kolonlu ızgara yapısını 4 veya 5 kolona çıkartıp görsel ağırlığı bozmamak adına dahil edilmedi. Zaten Responsive web tasarımına modern projelerde varsayılan bir özellik olarak bakıldığı için daha can alıcı olan dokunsal geri bildirim ve minimalist arayüz öğeleri tercih edildi.

## 4. Akıllı Arama - Uzun Metinler
* **Kısaltılan/Atılan Metin:** "Klasörler arasında gezinmek veya yüzlerce fotoğrafı kaydırmak zorunda kalmazsınız." ve "Bu muazzam hız, kullanan kişiye büyük bir özgüven ve sisteme karşı tam bir hakimiyet hissi sağlar. İş akışınızdaki o saniyelik beklemelerin tamamen ortadan kalktığını ve günlük operasyonunuzun ne kadar hızlandığını ilk kullanımda fark edersiniz."
* **Neden Kullanılmadı:** Showcase bölümünde madde işaretli özelliklerin UX gereği olabildiğince doğrudan okunabilir (skimmable) olması gerekiyor. Bu kısımlar fazla uzun paragraflar yarattığı için makaslandı.
