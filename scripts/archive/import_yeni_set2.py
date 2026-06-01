import os
import shutil
import re

def main():
    project_root = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB"
    source_dir = os.path.join(project_root, "yeni set2")
    dest_dir = os.path.join(project_root, "public/assets/pages/yeni_set")
    
    if not os.path.exists(source_dir):
        print(f"❌ Kaynak klasör bulunamadı: {source_dir}")
        return
        
    os.makedirs(dest_dir, exist_ok=True)
    
    # Tüm dosyaları al
    files = [f for f in os.listdir(source_dir) if os.path.isfile(os.path.join(source_dir, f))]
    
    # Sadece resim dosyalarını filtrele
    image_files = []
    for f in files:
        _, ext = os.path.splitext(f)
        if ext.lower() not in ['.png', '.jpg', '.jpeg', '.webp']:
            continue
        image_files.append(f)
        
    # Sıralama anahtarı: 15_27_24 ve parantez içi numara
    def sorting_key(filename):
        time_match = re.search(r'(\d{2}_\d{2}_\d{2})', filename)
        time_str = time_match.group(1) if time_match else "00_00_00"
        
        num_match = re.search(r'\((\d+)\)', filename)
        num = int(num_match.group(1)) if num_match else 0
        
        return (time_str, num)
        
    sorted_files = sorted(image_files, key=sorting_key)
    
    print(f"📊 Kalan {len(sorted_files)} adet sıralı görsel bulundu.")
    
    # 10'arlı paketlere böl (Grup 9 ve Grup 10)
    chunk_size = 10
    asset_data_updates = {}
    
    # Başlangıç grup indexini 9 olarak belirliyoruz
    start_group_idx = 9
    
    for i in range(0, len(sorted_files), chunk_size):
        chunk = sorted_files[i:i + chunk_size]
        g_idx = start_group_idx + (i // chunk_size)
        
        print(f"  📂 Grup {g_idx} oluşturuluyor: {len(chunk)} dosya içeriyor.")
        
        web_paths = []
        for f_idx, f in enumerate(chunk, 1):
            _, ext = os.path.splitext(f)
            ext = ext.lower()
            
            new_name = f"pikselai_set{g_idx}_{f_idx:02d}{ext}"
            src_path = os.path.join(source_dir, f)
            dest_path = os.path.join(dest_dir, new_name)
            
            shutil.copy2(src_path, dest_path)
            
            web_path = f"/assets/pages/yeni_set/{new_name}"
            web_paths.append(web_path)
            
        asset_data_updates[f"yeni_set_{g_idx}"] = web_paths
        
    # assetData.ts dosyasını güncelle
    asset_data_path = os.path.join(project_root, "src/data/assetData.ts")
    if os.path.exists(asset_data_path):
        with open(asset_data_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # yeni_set_9 ve yeni_set_10 alanlarını oluştur
        set_blocks = []
        for skey, paths in asset_data_updates.items():
            formatted_paths = ",\n        ".join([f'"{p}"' for p in paths])
            block = f"""
    "{skey}": {{
      "files": [
        {formatted_paths}
      ]
    }}"""
            set_blocks.append(block)
            
        yeni_set_all_block = ",\n".join(set_blocks) + ","
        
        # 'yeni_set_1' anahtarının hemen üstüne ekleyelim
        if '"yeni_set_1":' in content and '"yeni_set_9":' not in content:
            new_content = content.replace('"yeni_set_1":', yeni_set_all_block + '\n    "yeni_set_1":')
            with open(asset_data_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print("✅ 'src/data/assetData.ts' dosyası kalan 2 set (yeni_set_9 ve yeni_set_10) ile güncellendi.")
        else:
            print("⚠️ assetData.ts zaten güncellenmiş veya 'yeni_set_1' bulunamadı.")

if __name__ == "__main__":
    main()
