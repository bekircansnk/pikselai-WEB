import os
import re
import shutil
from PIL import Image

PROJECT_ROOT = "/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB"
SRC_DIRS = [os.path.join(PROJECT_ROOT, "src"), os.path.join(PROJECT_ROOT, "public")]
IMG_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif']
REPLACE_EXTS = ['.jpg', '.jpeg', '.png']
BACKUP_DIR = os.path.join(PROJECT_ROOT, "public", "_yedek_gorseller")

EXCLUDE_DIRS = {'_yedek_gorseller', 'node_modules', 'dist', '.git', 'wp-content', 'wp-includes'}

os.makedirs(BACKUP_DIR, exist_ok=True)

all_images = []
for d in SRC_DIRS:
    for root, dirs, files in os.walk(d):
        dirs[:] = [dir for dir in dirs if dir not in EXCLUDE_DIRS]
        
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in IMG_EXTS:
                all_images.append(os.path.join(root, f))

text_extensions = {'.tsx', '.ts', '.jsx', '.js', '.css', '.html', '.json', '.md'}
all_code = ""

files_to_update = []
for d in SRC_DIRS:
    for root, dirs, files in os.walk(d):
        dirs[:] = [dir for dir in dirs if dir not in EXCLUDE_DIRS]
        
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in text_extensions:
                filepath = os.path.join(root, f)
                try:
                    with open(filepath, 'r', encoding='utf-8') as file:
                        c = file.read()
                        all_code += c + "\n"
                        files_to_update.append(filepath)
                except Exception:
                    pass

# Read root files too
for rf in ['index.html', 'package.json']:
    rp = os.path.join(PROJECT_ROOT, rf)
    if os.path.exists(rp):
        try:
            with open(rp, 'r', encoding='utf-8') as f:
                c = f.read()
                all_code += c + "\n"
                if rp not in files_to_update:
                    files_to_update.append(rp)
        except Exception:
            pass

used_images = []
unused_images = []

print(f"Total images found: {len(all_images)}")

for img_path in all_images:
    filename = os.path.basename(img_path)
    basename, ext = os.path.splitext(filename)
    
    url_encoded = filename.replace(' ', '%20')
    
    if filename in all_code or url_encoded in all_code or re.search(r'\b' + re.escape(basename) + r'\b', all_code):
        used_images.append(img_path)
    else:
        unused_images.append(img_path)

print(f"Used images: {len(used_images)}")
print(f"Unused images: {len(unused_images)}")

for img_path in unused_images:
    filename = os.path.basename(img_path)
    dest = os.path.join(BACKUP_DIR, filename)
    counter = 1
    basename, ext = os.path.splitext(filename)
    while os.path.exists(dest):
        dest = os.path.join(BACKUP_DIR, f"{basename}_{counter}{ext}")
        counter += 1
    print(f"Moving unused to backup: {filename}")
    shutil.move(img_path, dest)

replacements_made = 0
for img_path in used_images:
    filename = os.path.basename(img_path)
    basename, ext = os.path.splitext(filename)
    ext = ext.lower()
    
    if ext in REPLACE_EXTS:
        img_dir = os.path.dirname(img_path)
        new_filename = basename + '.webp'
        new_path = os.path.join(img_dir, new_filename)
        
        if not os.path.exists(new_path):
            print(f"Optimizing to WebP: {filename}")
            try:
                img = Image.open(img_path)
                if img.mode not in ('RGB', 'RGBA'):
                    img = img.convert('RGBA') if 'A' in img.mode else img.convert('RGB')
                img.save(new_path, 'webp', quality=85, method=6)
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")
                continue
                
        dest = os.path.join(BACKUP_DIR, filename)
        counter = 1
        while os.path.exists(dest):
            dest = os.path.join(BACKUP_DIR, f"{basename}_{counter}{ext}")
            counter += 1
        shutil.move(img_path, dest)
        
        for fpath in files_to_update:
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if filename in content:
                    new_content = content.replace(filename, new_filename)
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    replacements_made += 1
                    print(f"Updated {os.path.basename(fpath)}: {filename} -> {new_filename}")
            except Exception:
                pass

print(f"\nProcess complete. File replacements made: {replacements_made}")
