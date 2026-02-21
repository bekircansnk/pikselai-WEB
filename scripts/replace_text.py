import os
import re

file_path = "/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/src/pages/EcommerceService.tsx"

replacements = {
    "Markalar İçin Uçtan Uca E-Ticaret Dönüşümü": "PikselAI - Kapsamlı E-Ticaret ve Shopify Danışmanlığı",
    "Hızla büyüyen markalar operasyonel süreçlerini hafifletmek ve satışlarını ölçeklendirmek için PikselAI kullanıyor. E-ticaret ekosisteminizi birlikte inşa edelim.": "Ben Bekir Can Sağnak, PikselAI çatısı altında e-ticaret markanızı global standartlarda kuruyorum. Shopify Türkiye Resmi Partneri olarak sıfırdan kurulumdan e-ihracata tüm süreçleri bizzat üstleniyorum.",
    
    "Altyapı, ERP, Yapay Zeka ve Pazarlama ": "Shopify Altyapısı ile ",
    "ve dahası tek platformda": "Sınır Tanımayan Büyüme",
    
    "İster kusursuz bir ERP entegrasyonu, ister global pazaryeri açılımı ya da dönüşüm odaklı performans pazarlaması olsun; PikselAI'ın uzman ekibi e-ticaret potansiyelinizi maksimuma çıkarır.": "Dünya genelinde milyonlarca işletmenin tercih ettiği güçlü platformda, kod bilgisine ihtiyaç duymadan mağazanızı yönetin. SSL sertifikası ve Core Web Vitals standartlarıyla sorunsuz hizmet alın.",
    
    "Geleneksel web ajanslarından farklı olarak PikselAI, yapay zekayı ve üst düzey veritabanı entegrasyonlarını kendi tescilli teknolojileriyle harmanlayarak size uçtan uca dijital çözüm ortaklığı sunar.": "Bulut tabanlı altyapısı sayesinde sunucu dertleriyle uğraşmaz, Shopify Markets ile farklı dillere, ülkelere ve para birimlerine (Dolar, Euro) anında e-ihracat yapabilirsiniz.",
    
    "Yapay Zeka Destekli Satış": "1. Sıfırdan Mağaza Kurulumu ve Tasarım",
    "E-ihracat ve global pazaryeri operasyonlarınız için (Etsy vb.) tek bir panelden çoklu yönetim altyapısı sağlıyoruz.": "İhtiyacınıza en uygun premium temaları seçip renk, tipografi ve görselleri markanıza uyarlıyorum. UX odaklı profesyonel bir mağaza oluşturuyorum.",
    
    "Branding": "2. Platform ve Veri Taşıma (Migration)",
    "Nebim V3 gibi ERP sistemleriyle sağlam veritabanı bağlantıları kurarak IT ve stok yükünüzü alıyoruz.": "Mevcut e-ticaret altyapınızı sipariş ve müşteri verilerinizle birlikte sorunsuz biçimde Shopify'a taşıyorum, kesintisiz operasyon sağlıyorum.",
    
    "Ölçeklenebilir Kod": "3. Kategori, İçerik ve Katalog Yönetimi",
    "Sanal POS kurulumları, kargo API bağlantıları ve alternatif ödeme sistemleri entegrasyonları ile sepet terk oranlarını düşürüyoruz.": "Ziyaretçilerin doğru ürüne ulaşabilmesi için SEO uyumlu varyantlar, koleksiyonlar ve filtreleme sistemini oluşturup uyguluyorum.",
    
    "Sosyal Medya Kampanyaları": "4. Gelişmiş Entegrasyonlar (Ödeme & Kargo)",
    "Karlılığınızı koruyan stratejilerle, doğru kitleyi hedefleyen performans reklamları ve akıllı kampanyalar kurguluyoruz.": "İyzico, PayTR, Yurtiçi, DHL, ShipEntegra gibi kargo ve ödeme firmalarıyla bağlantı kurup mağazanızı satışa tam hazır hale getiriyorum.",
    
    "Geçmiş Verilerin Aktarımı": "5. Dijital Pazarlama ve SEO Yönetimi",
    "Sipariş datasını ve müşteri hareketlerini yeni sisteminize SQL bazlı güvenli taşıma yöntemleriyle eksiksiz entegre ediyoruz.": "Google Analytics, Meta Ads bağlantılarını kuruyor; kampanya kurgularını karlılık analizi yaparak sisteme tanımlıyor, yönetiyorum.",
    
    "eBooks & report design": "6. Eğitim ve Canlı Destek (Lansman Süreci)",
    "Mevcut mağazanızı veri, ürün ve SEO link yapısı korunarak daha modern, hızlı ve ölçeklenebilir altyapılara sorunsuz taşıyoruz.": "Shopify paneli kullanımı, sipariş yönetimi gibi temel konularda eğitim veriyor, lansman sonrası 30 gün boyunca teknik destek sunuyorum."
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

for old, new in replacements.items():
    # Replace normal text
    content = content.replace(old, new)
    
    # In JSON context, strings might be unicode escaped or raw strings
    # We will just do raw replacement since Astro props JSON output is mostly plain
    pass

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacements done.")

