import os
import shutil
import re

BASE_DIR = 'public/sosyal_medya_resimler'
SRC_DIR = 'src'

# Map old folder names to new normalized ones
FOLDER_MAP = {
    'Hayalet öncesi sonrası': 'hayalet_oncesi_sonrasi',
    'Hayalet öncesi sonrası': 'hayalet_oncesi_sonrasi',
    'Hero': 'hero',
    'camp and map': 'camp_and_map',
    'cazador': 'cazador',
    'ghost_v2': 'ghost_v2',
    'konsept': 'konsept',
    'marka-logo': 'marka_logo',
    'mina drinks': 'mina_drinks',
    'sanal_manken': 'sanal_manken',
    'sosyal_medya_partlar': 'sosyal_medya_partlar',
    'venüs': 'venus',
    'ürün_fotoğraf': 'urun_fotograf',
}

def get_tsx_files(d):
    res = []
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.ts'):
                res.append(os.path.join(root, f))
    return res

def rename_folders_and_update_refs():
    tsx_files = get_tsx_files(SRC_DIR)
    
    # Do replacements one by one
    for old_folder, new_folder in FOLDER_MAP.items():
        old_path = os.path.join(BASE_DIR, old_folder)
        new_path = os.path.join(BASE_DIR, new_folder)
        
        if os.path.exists(old_path) and os.path.isdir(old_path):
            if old_path != new_path:
                print(f"Renaming {old_path} -> {new_path}")
                try:
                    os.rename(old_path, new_path)
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")
                    continue
                
                # Update tsx files
                old_ref = f"/sosyal_medya_resimler/{old_folder}/"
                new_ref = f"/sosyal_medya_resimler/{new_folder}/"
                for tsx in tsx_files:
                    with open(tsx, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if old_ref in content:
                        content = content.replace(old_ref, new_ref)
                        with open(tsx, 'w', encoding='utf-8') as f:
                            f.write(content)
                            print(f"Updated references in {tsx}")

def move_orphan_files():
    # Move files in public/sosyal_medya_resimler into "standart_gorseller"
    orphan_dir = os.path.join(BASE_DIR, 'standart_gorseller')
    os.makedirs(orphan_dir, exist_ok=True)
    
    tsx_files = get_tsx_files(SRC_DIR)

    for item in os.listdir(BASE_DIR):
        item_path = os.path.join(BASE_DIR, item)
        if os.path.isfile(item_path):
            if item == '.DS_Store': continue
            
            new_item_path = os.path.join(orphan_dir, item)
            shutil.move(item_path, new_item_path)
            print(f"Moved {item_path} to {new_item_path}")
            
            old_ref = f"/sosyal_medya_resimler/{item}"
            new_ref = f"/sosyal_medya_resimler/standart_gorseller/{item}"
            
            for tsx in tsx_files:
                with open(tsx, 'r', encoding='utf-8') as f:
                    content = f.read()
                if old_ref in content:
                    content = content.replace(old_ref, new_ref)
                    with open(tsx, 'w', encoding='utf-8') as f:
                        f.write(content)
                        print(f"Updated references in {tsx}")

if __name__ == '__main__':
    rename_folders_and_update_refs()
    move_orphan_files()
    print("Project restructuring completed.")
