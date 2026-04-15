import os
import shutil
from PIL import Image

PROJECT_ROOT = os.getcwd()
SRC_DIR = os.path.join(PROJECT_ROOT, 'src')
PUBLIC_DIR = os.path.join(PROJECT_ROOT, 'public')
BACKUP_DIR = os.path.join(PROJECT_ROOT, '.silinecekler_cop_kutusu')
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png'}
CODE_EXTENSIONS = {'.tsx', '.ts', '.css', '.scss', '.html', '.json', '.js', '.jsx'}

def get_all_files(directory, extensions):
    matches = []
    for root, dirnames, filenames in os.walk(directory):
        if 'node_modules' in root or '.git' in root or 'dist' in root or '.silinecekler_cop_kutusu' in root:
            continue
        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext in extensions:
                matches.append(os.path.join(root, filename))
    return matches

def main():
    print("Fast Asset Optimizer started...")
    os.makedirs(BACKUP_DIR, exist_ok=True)
    
    # Tüm JPG ve PNG'leri bul (zaten webp olanları boşveriyoruz hız için)
    assets = get_all_files(SRC_DIR, IMAGE_EXTENSIONS) + get_all_files(PUBLIC_DIR, IMAGE_EXTENSIONS)
    code_files = get_all_files(SRC_DIR, CODE_EXTENSIONS) + get_all_files(PUBLIC_DIR, CODE_EXTENSIONS)
    
    # Kod dosyalarını belleğe yükle
    code_contents = {}
    for f in code_files:
        try:
            with open(f, 'r', encoding='utf-8') as file:
                code_contents[f] = file.read()
        except Exception:
            pass

    optimized_count = 0
    removed_count = 0

    for path in assets:
        name = os.path.basename(path)
        base_name, old_ext = os.path.splitext(name)
        
        # Kullanımda mı kontrolü
        is_used = False
        usages = []
        for cf_path, content in code_contents.items():
            if name in content:
                is_used = True
                usages.append(cf_path)
        
        # Sistem dosyalarını koruma
        if 'favicon' in name or 'logo' in name.lower() or 'manifest' in name:
            is_used = True
            
        if not is_used:
            # Çöpe gönder
            shutil.move(path, os.path.join(BACKUP_DIR, name))
            print(f"MOVED to trash (unused): {name}")
            removed_count += 1
            continue
            
        # Kullanımda, hızlıca WEBP dönüştür
        new_name = f"{base_name}.webp"
        dir_name = os.path.dirname(path)
        new_path = os.path.join(dir_name, new_name)
        
        try:
            img = Image.open(path)
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')
            # max% 85 quality tek geçiş
            img.save(new_path, 'webp', quality=85, optimize=True)
            print(f"OPTIMIZED: {name} -> {new_name}")
            optimized_count += 1
            
            # Kodlarda referansı düzelt
            for um in usages:
                new_str = code_contents[um].replace(name, new_name)
                code_contents[um] = new_str
                # Dosyayı da hemen diske yaz
                with open(um, 'w', encoding='utf-8') as w_file:
                    w_file.write(new_str)
                    
            # Orijinal JPG/PNG'yi çöpe taşı
            shutil.move(path, os.path.join(BACKUP_DIR, name))
            
        except Exception as e:
            print(f"FAILED to process {name}: {e}")

    print(f"\nDone! Optimized {optimized_count} images, Trashed {removed_count} unused images.")

if __name__ == "__main__":
    main()
