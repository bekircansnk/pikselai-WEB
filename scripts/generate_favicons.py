import os
from PIL import Image

PROJECT_ROOT = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB"
source_path = os.path.join(PROJECT_ROOT, "public/assets/common/apple_icon_180x180.webp")
ico_dest = os.path.join(PROJECT_ROOT, "public/favicon.ico")
png_dest = os.path.join(PROJECT_ROOT, "public/favicon.png")

print(f"Kaynak dosya okunuyor: {source_path}")
if not os.path.exists(source_path):
    # Eğer o yolda yoksa logo-dark-v2.webp'yi dene
    source_path = os.path.join(PROJECT_ROOT, "public/assets/common/logo-dark-v2.webp")
    print(f"apple_icon bulunamadı, logo-dark-v2.webp deneniyor: {source_path}")

try:
    img = Image.open(source_path)
    
    # 1. favicon.png (48x48) üretimi
    print(f"favicon.png (48x48) oluşturuluyor...")
    img_png = img.resize((48, 48), Image.Resampling.LANCZOS)
    img_png.save(png_dest, format="PNG")
    print(f"Başarıyla kaydedildi: {png_dest}")
    
    # 2. favicon.ico (multi-size: 16x16, 32x32, 48x48) üretimi
    print(f"favicon.ico (16x16, 32x32, 48x48) oluşturuluyor...")
    # ICO formatında kaydetmek için resmin RGBA modunda olması iyidir (şeffaflık koruması)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    img.save(ico_dest, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Başarıyla kaydedildi: {ico_dest}")
    
    print("Favicon üretim işlemi başarıyla tamamlandı!")
except Exception as e:
    print(f"Hata oluştu: {e}")
