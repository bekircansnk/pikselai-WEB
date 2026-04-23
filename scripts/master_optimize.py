import os
import re
import shutil
from PIL import Image

# --- YAPILANDIRMA ---
PROJECT_ROOT = os.getcwd()
SRC_DIRS = [os.path.join(PROJECT_ROOT, "src"), os.path.join(PROJECT_ROOT, "public")]
BACKUP_DIR = os.path.join(PROJECT_ROOT, ".silinecekler_cop_kutusu")

# İşlenecek resim uzantıları
ALL_IMG_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif'}
# WebP'ye dönüştürülecek uzantılar
CONVERT_EXTS = {'.jpg', '.jpeg', '.png'}
# Kod dosyaları
CODE_EXTS = {'.tsx', '.ts', '.jsx', '.js', '.css', '.scss', '.html', '.json', '.md'}

# Göz ardı edilecek klasörler
EXCLUDE_DIRS = {'node_modules', 'dist', '.git', '.silinecekler_cop_kutusu', '_backup_unused', 'public/_yedek_gorseller'}

def setup():
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)

def get_files(directories, extensions):
    matched_files = []
    for d in directories:
        if not os.path.exists(d): continue
        for root, dirs, files in os.walk(d):
            dirs[:] = [dir for dir in dirs if dir not in EXCLUDE_DIRS]
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in extensions:
                    matched_files.append(os.path.join(root, f))
    return matched_files

def is_image_used(filename, basename, all_code_content):
    # Eğer dosya adı tam olarak geçiyorsa veya boşluklar %20 ile geçiyorsa kullanılmıştır.
    url_encoded = filename.replace(' ', '%20')
    if filename in all_code_content or url_encoded in all_code_content:
        return True
    
    # SVG, ICO ve Manifest'leri veya system dosyalarını koru
    if 'favicon' in filename or 'logo' in filename or 'manifest' in filename:
        return True

    # Basename ile basit kontrol (biraz agresif ama güvenli)
    if re.search(r'\b' + re.escape(basename) + r'\b', all_code_content):
        return True
        
    return False

def move_to_backup(file_path):
    filename = os.path.basename(file_path)
    dest = os.path.join(BACKUP_DIR, filename)
    counter = 1
    basename, ext = os.path.splitext(filename)
    while os.path.exists(dest):
        dest = os.path.join(BACKUP_DIR, f"{basename}_{counter}{ext}")
        counter += 1
    shutil.move(file_path, dest)
    return dest

def optimize_to_webp(img_path):
    filename = os.path.basename(img_path)
    basename, ext = os.path.splitext(filename)
    new_filename = basename + '.webp'
    new_path = os.path.join(os.path.dirname(img_path), new_filename)
    
    if os.path.exists(new_path):
        return new_path, new_filename, False # Zaten var
        
    print(f"Optimize ediliyor: {filename} -> {new_filename}")
    try:
        img = Image.open(img_path)
        
        # Max genişlik 1920px
        if img.width > 1920:
            ratio = 1920.0 / img.width
            new_height = int(img.height * ratio)
            img = img.resize((1920, new_height), Image.Resampling.LANCZOS)

        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGBA') if 'A' in img.mode or 'transparency' in img.info else img.convert('RGB')
            
        img.save(new_path, 'webp', quality=85, method=6)
        return new_path, new_filename, True
    except Exception as e:
        print(f"Hata: {filename} dönüştürülemedi - {e}")
        return None, None, False

def main():
    print("🚀 Master Image Optimization & Clean-up Script Başlatılıyor...\n")
    setup()

    # 1. Dosyaları Topla
    all_images = get_files(SRC_DIRS, ALL_IMG_EXTS)
    code_files = get_files(SRC_DIRS, CODE_EXTS)
    
    # Root dosyaları da ekle (index.html vb.)
    for rf in ['index.html', 'package.json']:
        rp = os.path.join(PROJECT_ROOT, rf)
        if os.path.exists(rp):
            code_files.append(rp)

    print(f"📁 Toplam Bulunan Görsel: {len(all_images)}")
    print(f"📄 Taranacak Kod Dosyası: {len(code_files)}")

    # 2. Kod İçeriklerini Oku (Hızlı arama için tek metinde birleştir)
    all_code_content = ""
    for fpath in code_files:
        try:
            with open(fpath, 'r', encoding='utf-8') as file:
                all_code_content += file.read() + "\n"
        except Exception:
            pass

    # 3. Kullanılan/Kullanılmayan Görselleri Ayır
    used_images = []
    unused_images = []

    for img_path in all_images:
        filename = os.path.basename(img_path)
        basename, _ = os.path.splitext(filename)
        
        if is_image_used(filename, basename, all_code_content):
            used_images.append(img_path)
        else:
            unused_images.append(img_path)

    print(f"✅ Kullanılan Görsel: {len(used_images)}")
    print(f"🗑️  Kullanılmayan Görsel: {len(unused_images)}")

    # 4. Kullanılmayanları Çöpe Taşı
    for img_path in unused_images:
        print(f"Çöpe taşınıyor: {os.path.basename(img_path)}")
        move_to_backup(img_path)

    # 5. Kullanılanları Optimize Et (.webp) ve Kodları Güncelle
    replacements_made = 0
    optimized_count = 0

    for img_path in used_images:
        filename = os.path.basename(img_path)
        ext = os.path.splitext(filename)[1].lower()
        
        if ext in CONVERT_EXTS:
            new_path, new_filename, success = optimize_to_webp(img_path)
            
            if success or (new_path and os.path.exists(new_path)):
                if success: optimized_count += 1
                
                # Kod dosyalarındaki eski isimleri yenileriyle (.webp) değiştir
                for fpath in code_files:
                    try:
                        with open(fpath, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        if filename in content:
                            new_content = content.replace(filename, new_filename)
                            with open(fpath, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            replacements_made += 1
                            print(f"   🔄 Kod güncellendi: {os.path.basename(fpath)} ({filename} -> {new_filename})")
                    except Exception:
                        pass
                
                # Eski orijinal dosyayı çöpe taşı
                move_to_backup(img_path)

    print(f"\n🎉 İşlem Tamamlandı!")
    print(f" - {len(unused_images)} kullanılmayan dosya '{BACKUP_DIR}' klasörüne taşındı.")
    print(f" - {optimized_count} görsel WebP formatına dönüştürüldü.")
    print(f" - Kod içerisinde {replacements_made} adet dosya uzantısı (.webp) güncellendi.")

if __name__ == "__main__":
    main()
