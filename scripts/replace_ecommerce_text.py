import re

file_path = "/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/src/pages/EcommerceService.tsx"

replacements = {
    # Hero Title and Subtitle
    "Markalar İçin Uçtan Uca E-Ticaret Dönüşümü": "Kapsamlı E-Ticaret ve Shopify Danışmanlığı",
    "Hızla büyüyen markalar operasyonel süreçlerini hafifletmek ve satışlarını ölçeklendirmek için PikselAI kullanıyor. E-ticaret ekosisteminizi birlikte inşa edelim.": "Ben Bekir Can Sağnak, PikselAI çatısı altında e-ticaret markanızı global standartlarda kuruyorum. Shopify Türkiye Resmi Partneri olarak sıfırdan kurulumdan e-ihracata tüm süreçleri bizzat üstleniyorum.",
    
    # Second Section
    "Altyapı, ERP, Yapay Zeka ve Pazarlama ": "Neden Shopify Altyapısını ",
    "ve dahası tek platformda": "Tercih Ediyoruz?",
    
    "İster kusursuz bir ERP entegrasyonu, ister global pazaryeri açılımı ya da dönüşüm odaklı performans pazarlaması olsun; PikselAI'ın uzman ekibi e-ticaret potansiyelinizi maksimuma çıkarır.": "Shopify, dünya genelinde 2 milyondan fazla işletmenin tercih ettiği güçlü platformdur. Kod bilgisine gerek kalmadan mağazanızı yönetebilir, SSL sertifikasıyla müşteri verilerinizi koruyabilirsiniz.",
    
    "Geleneksel web ajanslarından farklı olarak PikselAI, yapay zekayı ve üst düzey veritabanı entegrasyonlarını kendi tescilli teknolojileriyle harmanlayarak size uçtan uca dijital çözüm ortaklığı sunar.": "Mobil uyumlu temalarla Google Core Web Vitals standartlarını yakalayın. Bulut tabanlı altyapısı sayesinde sunucu dertleriyle uğraşmaz, Shopify Markets ile dünyaya anında e-ihracat yapabilirsiniz.",
    
    # 6 Service Cards
    # Card 1
    "Yapay Zeka Destekli Satış": "1. Mağaza Kurulumu ve Tasarım",
    "E-ihracat ve global pazaryeri operasyonlarınız için (Etsy vb.) tek bir panelden çoklu yönetim altyapısı sağlıyoruz.": "Premium temaları seçip renk ve tipografiyi markanıza uyarlıyorum. Kullanıcı deneyimini (UX) ön planda tutarak profesyonel bir mağaza oluşturuyorum.",
    
    # Card 2
    "Branding": "2. Platform ve Veri Taşıma",
    "Nebim V3 gibi ERP sistemleriyle sağlam veritabanı bağlantıları kurarak IT ve stok yükünüzü alıyoruz.": "E-ticaret altyapınızı sipariş ve müşteri verilerinizle sorunsuz biçimde Shopify'a taşıyorum, kesintisiz operasyon yürütmenizi sağlıyorum.",
    
    # Card 3
    "Ölçeklenebilir Kod": "3. Kategori ve İçerik Yönetimi",
    "Sanal POS kurulumları, kargo API bağlantıları ve alternatif ödeme sistemleri entegrasyonları ile sepet terk oranlarını düşürüyoruz.": "Ziyaretçilerin hızlıca ulaşabilmesi için SEO uyumlu varyant, koleksiyon ve filtreleme sistemini oluşturuyor, kurumsal sayfaları kurguluyorum.",
    
    # Card 4
    "Sosyal Medya Kampanyaları": "4. Ödeme ve Kargo Entegrasyonları",
    "Karlılığınızı koruyan stratejilerle, doğru kitleyi hedefleyen performans reklamları ve akıllı kampanyalar kurguluyoruz.": "İyzico, PayTR gibi ödeme sistemlerini ve Yurtiçi, DHL gibi kargo firmalarını entegre ederek mağazanızı global satışa tam hazır hale getiriyorum.",
    
    # Card 5
    "Geçmiş Verilerin Aktarımı": "5. Dijital Pazarlama ve SEO Yönetimi",
    "Sipariş datasını ve müşteri hareketlerini yeni sisteminize SQL bazlı güvenli taşıma yöntemleriyle eksiksiz entegre ediyoruz.": "Google Analytics ve Meta Ads araçlarını entegre ediyor; çok kanallı satışı aktifleştirerek performans reklamlarınızı bizzat analiz edip yönetiyorum.",
    
    # Card 6
    "eBooks & report design": "6. Uçtan Uca Eğitim ve Canlı Destek",
    "Mevcut mağazanızı veri, ürün ve SEO link yapısı korunarak daha modern, hızlı ve ölçeklenebilir altyapılara sorunsuz taşıyoruz.": "Tüm testleri bitirip satışı açmadan önce Shopify paneli kullanımı eğitimi veriyor, lansman sonrası 30 gün boyunca teknik destek sunuyorum."
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

for old, new in replacements.items():
    content = content.replace(old, new)
    # Also handle some edge cases for unicode escapes if the original string was escaped in the inner HTML prop
    # Unlikely since we are searching the plaintext rendered output inside Astro snippet but let's be safe.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Text replacements complete. HTML structure unchanged.")
