import os
from PIL import Image, ImageDraw, ImageFont

PROJECT_ROOT = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB"

regular_font_path = os.path.join(PROJECT_ROOT, "public/assets/fonts/InstrumentSerif-Regular.ttf")
italic_font_path = os.path.join(PROJECT_ROOT, "public/assets/fonts/InstrumentSerif-Italic.ttf")

def get_text_size(draw, text, font):
    try:
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
        return right - left, bottom - top, left, top
    except AttributeError:
        w, h = draw.textsize(text, font=font)
        return w, h, 0, 0

def create_text_logo(text, font_path, font_size, text_color, output_path):
    # Geçici bir resim oluşturup metin boyutunu ölçüyoruz
    temp_img = Image.new("RGBA", (100, 100), (0, 0, 0, 0))
    temp_draw = ImageDraw.Draw(temp_img)
    font = ImageFont.truetype(font_path, font_size)
    w, h, offset_x, offset_y = get_text_size(temp_draw, text, font)
    
    # Gerçek resmi oluştur (biraz padding ekleyelim)
    padding_x = 24
    padding_y = 24
    img_w = int(w + padding_x * 2)
    img_h = int(h + padding_y * 2)
    
    img = Image.new("RGBA", (img_w, img_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Metni ortalayarak çiz
    x = padding_x - offset_x
    y = padding_y - offset_y
    draw.text((x, y), text, fill=text_color, font=font)
    
    # WebP olarak kaydet
    img.save(output_path, "WEBP", quality=95)
    print(f"Metin logosu oluşturuldu: {output_path} ({img_w}x{img_h})")

def create_favicon_base(text, font_path, bg_color, text_color, size=512):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Yuvarlatılmış kare arka plan çiz (köşe yarıçapı: boyutun %20'si)
    corner_radius = int(size * 0.2)
    draw.rounded_rectangle(
        [(size * 0.03, size * 0.03), (size * 0.97, size * 0.97)],
        radius=corner_radius,
        fill=bg_color
    )
    
    # Harfi ortalayarak çiz
    font_size = int(size * 0.7)
    font = ImageFont.truetype(font_path, font_size)
    w, h, offset_x, offset_y = get_text_size(draw, text, font)
    
    x = (size - w) / 2 - offset_x
    y = (size - h) / 2 - offset_y
    draw.text((x, y), text, fill=text_color, font=font)
    
    return img

def main():
    print("Yeni logo ve favicon dosyaları üretiliyor...")
    
    # 1. Metin Logoları (Koyu ve Açık versiyonlar)
    logo_dark_path = os.path.join(PROJECT_ROOT, "public/assets/common/logo-dark-v2.webp")
    logo_full_dark_path = os.path.join(PROJECT_ROOT, "public/assets/common/full-logo-dark-v2.webp")
    
    # pikselai metin logosu (#111827 renginde, serif)
    create_text_logo("pikselai", regular_font_path, 150, "#111827", logo_dark_path)
    create_text_logo("pikselai", regular_font_path, 150, "#111827", logo_full_dark_path)
    
    # 2. Favicon Ana Şablon Üretimi (Fosforlu Yeşil arka plan, koyu 'p' harfi)
    favicon_base = create_favicon_base("p", italic_font_path, "#a8ff57", "#0a0f0a", size=512)
    
    # Varyasyonları kaydet
    # Apple Icon (180x180)
    apple_icon_path = os.path.join(PROJECT_ROOT, "public/assets/common/apple_icon_180x180.webp")
    favicon_base.resize((180, 180), Image.Resampling.LANCZOS).save(apple_icon_path, "WEBP", quality=95)
    print(f"Apple Icon oluşturuldu: {apple_icon_path}")
    
    # Favicon 32x32
    fav_32_path = os.path.join(PROJECT_ROOT, "public/assets/common/favicon_32x32.webp")
    favicon_base.resize((32, 32), Image.Resampling.LANCZOS).save(fav_32_path, "WEBP")
    print(f"Favicon 32x32 oluşturuldu: {fav_32_path}")
    
    # Favicon 16x16
    fav_16_path = os.path.join(PROJECT_ROOT, "public/assets/common/favicon_16x16.webp")
    favicon_base.resize((16, 16), Image.Resampling.LANCZOS).save(fav_16_path, "WEBP")
    print(f"Favicon 16x16 oluşturuldu: {fav_16_path}")
    
    # Favicon.webp (48x48)
    fav_webp_path = os.path.join(PROJECT_ROOT, "public/favicon.webp")
    favicon_base.resize((48, 48), Image.Resampling.LANCZOS).save(fav_webp_path, "WEBP")
    print(f"Favicon.webp oluşturuldu: {fav_webp_path}")
    
    # Favicon.ico (16x16, 32x32, 48x48)
    fav_ico_path = os.path.join(PROJECT_ROOT, "public/favicon.ico")
    icon_img = favicon_base.convert("RGBA")
    icon_img.save(fav_ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Favicon.ico oluşturuldu: {fav_ico_path}")
    
    print("\nTüm marka görselleri başarıyla Instrument Serif stiline dönüştürüldü!")

if __name__ == "__main__":
    main()
