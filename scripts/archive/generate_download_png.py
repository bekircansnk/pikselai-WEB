import os
from PIL import Image, ImageDraw, ImageFont

PROJECT_ROOT = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB"
DOWNLOADS_DIR = "/Users/bekir/Downloads"

font_path = os.path.join(PROJECT_ROOT, "public/assets/fonts/InstrumentSerif-Regular.ttf")

def get_text_size(draw, text, font):
    try:
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
        return right - left, bottom - top, left, top
    except AttributeError:
        w, h = draw.textsize(text, font=font)
        return w, h, 0, 0

def generate_png(text, font_path, font_size, text_color, output_filename):
    temp_img = Image.new("RGBA", (100, 100), (0, 0, 0, 0))
    temp_draw = ImageDraw.Draw(temp_img)
    font = ImageFont.truetype(font_path, font_size)
    w, h, offset_x, offset_y = get_text_size(temp_draw, text, font)
    
    padding_x = 40
    padding_y = 30
    img_w = int(w + padding_x * 2)
    img_h = int(h + padding_y * 2)
    
    img = Image.new("RGBA", (img_w, img_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    x = padding_x - offset_x
    y = padding_y - offset_y
    draw.text((x, y), text, fill=text_color, font=font)
    
    dest_path = os.path.join(DOWNLOADS_DIR, output_filename)
    img.save(dest_path, "PNG")
    print(f"PNG logo oluşturuldu ve kaydedildi: {dest_path}")

def main():
    if not os.path.exists(DOWNLOADS_DIR):
        os.makedirs(DOWNLOADS_DIR)
        
    # Koyu gri/siyah logo
    generate_png("pikselai", font_path, 200, "#111827", "pikselai_logo_dark.png")
    # Beyaz logo
    generate_png("pikselai", font_path, 200, "#FFFFFF", "pikselai_logo_light.png")

if __name__ == "__main__":
    main()
