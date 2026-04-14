import os
import re
from PIL import Image
import shutil

HERO_DIR = 'public/sosyal_medya_resimler/Hero'
LOGO_DIR = 'public/sosyal_medya_resimler/marka-logo'
TRASH_DIR = '.silinecekler_cop_kutusu'
HOME_TSX = 'src/pages/HomeYeni.tsx'

def sanitize_name(filename):
    name, ext = os.path.splitext(filename)
    # lowercase, replace spaces and dashes with underscore, remove non-alphanumeric
    s = name.lower()
    s = s.replace(' ', '_').replace('-', '_').replace('__', '_')
    s = re.sub(r'[^a-z0-9_]', '', s)
    return s + '.webp'

def process_image(img_path, out_dir):
    try:
        img = Image.open(img_path)
        # convert to RGB if rgba/P
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # resize if too large
        max_size = 1920
        if img.width > max_size or img.height > max_size:
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        
        filename = os.path.basename(img_path)
        new_filename = sanitize_name(filename)
        new_path = os.path.join(out_dir, new_filename)
        
        img.save(new_path, 'WEBP', quality=85)
        return new_path
    except Exception as e:
        print(f"Failed to process {img_path}: {e}")
        return None

def process_directory(directory):
    replacements = {}
    
    if not os.path.exists(directory):
        return replacements

    trash_subdir = os.path.join(TRASH_DIR, os.path.basename(directory) + '_originals')
    os.makedirs(trash_subdir, exist_ok=True)
    
    for filename in os.listdir(directory):
        if filename.endswith('.webp'):
            continue # already processed perhaps or another wepb
        
        file_path = os.path.join(directory, filename)
        if not os.path.isfile(file_path):
            continue
            
        print(f"Processing {file_path}")
        new_path = process_image(file_path, directory)
        if new_path:
            old_web_path = '/' + file_path.replace('\\', '/')
            new_web_path = '/' + new_path.replace('\\', '/')
            replacements[old_web_path] = new_web_path
            
            # move original to trash
            try:
                shutil.move(file_path, os.path.join(trash_subdir, filename))
            except Exception as e:
                print(f"Failed to move {file_path} to trash: {e}")
                
    return replacements

def main():
    os.makedirs(TRASH_DIR, exist_ok=True)
    
    replacements = {}
    replacements.update(process_directory(HERO_DIR))
    replacements.update(process_directory(LOGO_DIR))
    
    # Read HomeYeni.tsx and apply replacements
    with open(HOME_TSX, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for old_path, new_path in replacements.items():
        # public/ removed for web path in standard React
        old_href = old_path.replace('/public/', '/')
        new_href = new_path.replace('/public/', '/')
        content = content.replace(old_href, new_href)
        
    with open(HOME_TSX, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done optimizing images and updating references.")

if __name__ == '__main__':
    main()
