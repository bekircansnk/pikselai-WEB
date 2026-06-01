import os
import shutil
import re

def main():
    project_root = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB"
    source_dir = os.path.join(project_root, "yeni set")
    dest_dir = os.path.join(project_root, "public/assets/pages/yeni_set")
    
    if not os.path.exists(source_dir):
        print(f"❌ Kaynak klasör bulunamadı: {source_dir}")
        return
        
    # Eğer önceden klasör oluşturulduysa temizleyelim ki eski yanlış isimlendirilmişler kalmasın
    if os.path.exists(dest_dir):
        shutil.rmtree(dest_dir)
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
        
    # Dosyaları alfabetik olarak sırala (alfabetik sıralama doğal olarak zaman sırasına göre dizer)
    # Çünkü isimler: "ChatGPT Image 1 Haz 2026 15_08_35 (1).png" formatında.
    # Yani saat, dakika, saniye ve parantez numarasına göre tam sıralı gelecek!
    # Ancak parantez içindeki 10 sayısı alfabetik sıralamada 1'in arkasına gelebilir (örn: 1, 10, 2, 3...)
    # Bunun önüne geçmek için zaman damgasına ve parantez numarasına göre sıralama yapalım.
    
    def sorting_key(filename):
        # 1. Zaman damgası: 15_08_35
        time_match = re.search(r'(\d{2}_\d{2}_\d{2})', filename)
        time_str = time_match.group(1) if time_match else "00_00_00"
        
        # 2. Parantez numarası: (1) -> 1
        num_match = re.search(r'\((\d+)\)', filename)
        num = int(num_match.group(1)) if num_match else 0
        
        return (time_str, num)
        
    sorted_files = sorted(image_files, key=sorting_key)
    
    print(f"📊 Toplam {len(sorted_files)} adet sıralı görsel bulundu.")
    
    # 10'arlı paketlere böl
    chunk_size = 10
    asset_data_updates = {}
    
    for i in range(0, len(sorted_files), chunk_size):
        chunk = sorted_files[i:i + chunk_size]
        g_idx = (i // chunk_size) + 1
        
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
        
    # assetData.ts dosyasını temizleyip sıfırdan doğru setleri ekleyelim
    asset_data_path = os.path.join(project_root, "src/data/assetData.ts")
    if os.path.exists(asset_data_path):
        with open(asset_data_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Eğer daha önce yanlış eklenen "yeni_set_*" blokları varsa temizleyelim
        # regex ile "yeni_set_\d+": { ... }, yapısını temizleyebiliriz
        cleaned_content = re.sub(r'\s*"yeni_set_\d+":\s*\{\s*"files":\s*\[[^\]]*\]\s*\},?', '', content)
        
        # yeni_set_* alanlarını oluştur
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
        
        # 'yeni_icerik_urun' anahtarının hemen üstüne ekleyelim
        if '"yeni_icerik_urun":' in cleaned_content:
            new_content = cleaned_content.replace('"yeni_icerik_urun":', yeni_set_all_block + '\n    "yeni_icerik_urun":')
            with open(asset_data_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print("✅ 'src/data/assetData.ts' dosyası 10'arlı 8 set ile başarıyla güncellendi.")
        else:
            print("❌ 'yeni_icerik_urun' bulunamadı, ekleme yapılamadı.")

if __name__ == "__main__":
    main()
