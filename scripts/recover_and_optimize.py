import os
import shutil
import re
from PIL import Image

TRASH = ".silinecekler_cop_kutusu"
DEST_DIRS = [
    "public/assets/pages/homeyeni/hayalet_oncesi_sonrasi",
    "public/assets/pages/homeyeni/kampanya_oncesi_sonrasi",
    "public/assets/pages/homeyeni/sosyal_medya_oncesi_sonrasi"
]

def optimize_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img = img.convert('RGBA')
        else:
            img = img.convert('RGB')
        img.save(output_path, 'webp', quality=85, optimize=True)
        return True
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False

def main():
    files = os.listdir(TRASH)
    # pair'leri bulmak için isimlerin sonundaki 1 ve 2 yi parse edelim
    
    pairs = {}
    
    for f in files:
        if not f.endswith(('.jpg', '.jpeg', '.png', '.webp')): continue
        name, ext = os.path.splitext(f)
        
        # Regex to find ending 1 or 2 with optional separators like _ or - or kar
        # e.g., Anna-1_1, Anna-1_2, 03085-Haki-1, 10600-kar1
        
        match = re.search(r'([-_]|^|kar|EKRU_|[A-Z]{3,4}-)?(1|2)$', name)
        if match:
            part1 = name[:match.start()].strip('-_')
            number = match.group(2)
            
            # fallback for 10600-kar1 etc.
            if "kar" in name:
                part1 = name.split("kar")[0].strip('-_')
                number = name[-1]

            if part1 not in pairs:
                pairs[part1] = {"1": None, "2": None}
                
            if number == "1":
                pairs[part1]["1"] = f
            elif number == "2":
                pairs[part1]["2"] = f
                
    # Now distribute these pairs
    idx = 0
    success_count = 0
    for base_name, p in pairs.items():
        if p["1"] and p["2"]:
            # Dağıtılacak dizin
            dest_dir = DEST_DIRS[idx % len(DEST_DIRS)]
            idx += 1
            
            in_file_1 = os.path.join(TRASH, p["1"])
            in_file_2 = os.path.join(TRASH, p["2"])
            
            clean_name = re.sub(r'[^a-zA-Z0-9]', '', base_name.lower())
            
            out_file_1 = os.path.join(dest_dir, f"{clean_name}__1.webp")
            out_file_2 = os.path.join(dest_dir, f"{clean_name}__2.webp")
            
            opt1 = optimize_image(in_file_1, out_file_1)
            opt2 = optimize_image(in_file_2, out_file_2)
            
            if opt1 and opt2:
                success_count += 1
                
    print(f"Restored and optimized {success_count} pairs across directories!")

if __name__ == '__main__':
    for d in DEST_DIRS:
        os.makedirs(d, exist_ok=True)
    main()
