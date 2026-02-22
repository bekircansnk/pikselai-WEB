import os
import subprocess
import unicodedata
from PIL import Image

src_dir = "/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/public/Katalog"
dst_dir = "/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/public/katalog-assets"

os.makedirs(dst_dir, exist_ok=True)

def normalize_name(name):
    name = unicodedata.normalize('NFKD', name)
    name = name.encode('ascii', 'ignore').decode('ascii')
    name = name.replace(' ', '_').lower()
    return name

for f in os.listdir(src_dir):
    if f.startswith('.'): continue
    src_path = os.path.join(src_dir, f)
    base_name, ext = os.path.splitext(f)
    norm_base = normalize_name(base_name)
    
    if ext.lower() in ['.jpg', '.jpeg', '.png']:
        dst_path = os.path.join(dst_dir, norm_base + '.webp')
        print(f"Converting {f} to {norm_base}.webp")
        img = Image.open(src_path)
        if img.mode != 'RGB': img = img.convert('RGB')
        img.save(dst_path, 'webp', quality=85, method=6)
    elif ext.lower() == '.mp4':
        dst_path = os.path.join(dst_dir, norm_base + '.mp4')
        print(f"Compressing video {f} to {norm_base}.mp4")
        if not os.path.exists(dst_path):
            cmd = [
                'ffmpeg', '-y', '-i', src_path,
                '-c:v', 'libx264', '-crf', '26', '-preset', 'fast',
                '-an', '-movflags', '+faststart',
                dst_path
            ]
            try:
                subprocess.run(cmd, check=True)
            except Exception as e:
                print(f"Ffmpeg failed or not found: {e}. Trying to copy...")
                import shutil
                shutil.copy2(src_path, dst_path)
        else:
            print("Video already compressed.")

print("Optimization complete!")
