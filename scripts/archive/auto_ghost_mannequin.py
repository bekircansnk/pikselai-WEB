import os
import json
import requests
import random
from PIL import Image

def flood_fill_background(img_path, output_path, threshold=235):
    """
    Kıyafetin dışındaki beyaz/açık gri stüdyo arka planını BFS Flood Fill ile transparan yapar.
    Kıyafetin içindeki beyaz bölgeleri korur.
    """
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Başlangıç noktaları (4 köşe ve kenar çizgileri)
    queue = []
    # Üst ve alt kenarlar
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    # Sol ve sağ kenarlar
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    visited = set(queue)
    
    while queue:
        x, y = queue.pop(0)
        r, g, b, a = pixels[x, y]
        
        # Eğer piksel beyaza/açık griye yakınsa arka plandır
        if r >= threshold and g >= threshold and b >= threshold:
            pixels[x, y] = (255, 255, 255, 0) # Transparan yap
            
            # 4 yönlü komşuları kontrol et
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # WebP formatında kaydet (transparanlığı korumak için)
    img.save(output_path, "WEBP", quality=85)
    print(f"  ✓ Arka plan temizlendi ve kaydedildi: {output_path}")

def main():
    api_key = os.environ.get("GOOGLE_API_KEY", "YOUR_API_KEY_HERE")
    json_path = os.path.join(project_root, "scripts/drive_images.json")
    dest_dir = os.path.join(project_root, "public/assets/pages/islerimiz/hayalet_cekim")
    
    os.makedirs(dest_dir, exist_ok=True)
    
    if not os.path.exists(json_path):
        print(f"❌ drive_images.json bulunamadı: {json_path}")
        return
        
    with open(json_path, 'r', encoding='utf-8') as f:
        all_files = json.load(f)
        
    print(f"📊 Toplam {len(all_files)} adet hayalet çekim görseli yüklendi.")
    
    # 1. Ön (1) ve Arka (2) olan eşleri grupla
    # İsim şablonu: "35325-Siyah (1).jpg" -> kod: 35325-Siyah, num: 1
    pairs = {}
    for f in all_files:
        name = f['name']
        # Kod ve ön/arka numarasını çıkaralım
        # "35325-Siyah (1).jpg" -> group_key = "35325-Siyah", num = "1"
        import re
        match = re.search(r'([^-]+-[^\s(]+)\s*\((\d+)\)', name)
        if match:
            group_key = match.group(1)
            num = match.group(2)
            if group_key not in pairs:
                pairs[group_key] = {}
            pairs[group_key][num] = f
            
    # Sadece hem önü (1) hem arkası (2) olan çiftleri alalım
    valid_pairs = {k: v for k, v in pairs.items() if "1" in v and "2" in v}
    print(f"🔍 Eşleşen çift sayısı (Ön & Arka): {len(valid_pairs)}")
    
    # Çeşitlilik için rastgele 10 çift seçelim
    selected_keys = list(valid_pairs.keys())
    random.shuffle(selected_keys)
    selected_keys = selected_keys[:10]
    
    print("\n🚀 Seçilen 10 Çift (20 Görsel):")
    for k in selected_keys:
        print(f"  - {k}: Ön (ID: {valid_pairs[k]['1']['id']}) & Arka (ID: {valid_pairs[k]['2']['id']})")
        
    # 2. Görselleri indir, arka planı temizle ve kaydet
    headers = {
        "Referer": "https://katalog.pikselai.com/"
    }
    
    new_web_paths = []
    
    for idx, k in enumerate(selected_keys, 1):
        front_file = valid_pairs[k]["1"]
        back_file = valid_pairs[k]["2"]
        
        # Geçici indirme yolları
        temp_front = os.path.join(dest_dir, f"temp_{idx}_n.jpg")
        temp_back = os.path.join(dest_dir, f"temp_{idx}_arka.jpg")
        
        # Nihai webp yolları
        webp_front_name = f"ghost_{idx}_n.webp"
        webp_back_name = f"ghost_{idx}_arka.webp"
        webp_front = os.path.join(dest_dir, webp_front_name)
        webp_back = os.path.join(dest_dir, webp_back_name)
        
        # Ön görsel indir
        print(f"\n[{idx}/10] Eş indiriliyor: {k}...")
        url_front = f"https://www.googleapis.com/drive/v3/files/{front_file['id']}?alt=media&key={api_key}"
        resp_f = requests.get(url_front, headers=headers)
        with open(temp_front, 'wb') as f_out:
            f_out.write(resp_f.content)
            
        # Arka görsel indir
        url_back = f"https://www.googleapis.com/drive/v3/files/{back_file['id']}?alt=media&key={api_key}"
        resp_b = requests.get(url_back, headers=headers)
        with open(temp_back, 'wb') as b_out:
            b_out.write(resp_b.content)
            
        # Arka plan temizle ve WebP'ye dönüştür
        print(f"  🧹 Arka plan temizleniyor...")
        flood_fill_background(temp_front, webp_front)
        flood_fill_background(temp_back, webp_back)
        
        # Geçici büyük dosyaları temizle
        os.remove(temp_front)
        os.remove(temp_back)
        
        new_web_paths.append(f"/assets/pages/islerimiz/hayalet_cekim/{webp_front_name}")
        new_web_paths.append(f"/assets/pages/islerimiz/hayalet_cekim/{webp_back_name}")
        
    print(f"\n🎉 20 adet görsel başarıyla indirilip temizlendi!")
    
    # 3. Islerimiz.tsx dosyasını güncelle
    # Hayalet Manken Çekimleri projesinin (id: 7) images dizisini güncelleyeceğiz
    islerimiz_path = os.path.join(project_root, "src/pages/Islerimiz.tsx")
    if os.path.exists(islerimiz_path):
        with open(islerimiz_path, 'r', encoding='utf-8') as f_isl:
            content = f_isl.read()
            
        # Regex ile id: 7 projesinin 'images: [...]' kısmını değiştireceğiz
        # Bulmak için id: 7'nin images bloğunu yakalayalım
        # images: [ ... ]
        images_block = "images: [\n"
        for i, path in enumerate(new_web_paths):
            aspect = "tall" if i % 2 == 0 else "wide" # ön-arka asimetrisi için ideal
            images_block += f"            {{ url: '{path}', type: 'image', aspect: '{aspect}' }},\n"
        images_block = images_block.rstrip(",\n") + "\n        ]"
        
        # id: 7'nin images bloğunu hedef alalım
        # search: id: 7, ... images: [ ... ]
        pattern = r"(id:\s*7,.*?images:\s*\[)(.*?)(\],\s*description:)"
        
        def repl(match):
            return match.group(1) + "\n" + "\n".join([f"            {{ url: '{p}', type: 'image', aspect: 'tall' if i % 2 == 0 else 'wide' }}" for i, p in enumerate(new_web_paths)]) + "\n        " + match.group(3)
            
        # Basit string replacement daha güvenli olabilir, regex yerine:
        # id: 7 projesini doğrudan bulalım ve replace edelim
        # images: [ ... ] bloğunu doğrudan değiştirmek için:
        target_find = """        id: 7,
        title: 'Hayalet Manken Çekimleri',
        client: 'Ghost Mannequin',
        category: 'Hayalet Çekim',
        thumbnail: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_n.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_arka.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/3_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/3_arka.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/5_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/5_arka.webp', type: 'image', aspect: 'tall' }
        ],"""
        
        # Yeni images listesi
        new_images_list = "        id: 7,\n        title: 'Hayalet Manken Çekimleri',\n        client: 'Ghost Mannequin',\n        category: 'Hayalet Çekim',\n        thumbnail: '/assets/pages/islerimiz/hayalet_cekim/ghost_1_n.webp',\n        thumbnailType: 'single',\n        images: [\n"
        for i, p in enumerate(new_web_paths):
            aspect = "tall" if i % 2 == 0 else "wide"
            comma = "," if i < len(new_web_paths) - 1 else ""
            new_images_list += f"            {{ url: '{p}', type: 'image', aspect: '{aspect}' }}{comma}\n"
        new_images_list += "        ],"
        
        if target_find in content:
            new_content = content.replace(target_find, new_images_list)
            with open(islerimiz_path, 'w', encoding='utf-8') as f_isl_w:
                f_isl_w.write(new_content)
            print("✅ Islerimiz.tsx başarıyla güncellendi!")
        else:
            print("⚠️ id: 7 şablonu bulunamadı, manuel regex ile güncelleniyor...")
            # Alternatif eşleme
            import re
            pattern = r"(id:\s*7,\s*title:\s*'Hayalet Manken Çekimleri',\s*client:\s*'Ghost Mannequin',\s*category:\s*'Hayalet Çekim',\s*thumbnail:\s*'[^']+',\s*thumbnailType:\s*'single',\s*images:\s*\[)(.*?)(\])"
            
            def repl_func(match):
                imgs_str = "\n"
                for i, p in enumerate(new_web_paths):
                    aspect = "tall" if i % 2 == 0 else "wide"
                    comma = "," if i < len(new_web_paths) - 1 else ""
                    imgs_str += f"            {{ url: '{p}', type: 'image', aspect: '{aspect}' }}{comma}\n"
                imgs_str += "        "
                # Ayrıca thumbnail'ı ghost_1_n.webp yapalım
                header = match.group(1).replace("thumbnail: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_n.webp'", "thumbnail: '/assets/pages/islerimiz/hayalet_cekim/ghost_1_n.webp'")
                return header + imgs_str + match.group(3)
                
            new_content = re.sub(pattern, repl_func, content, flags=re.DOTALL)
            with open(islerimiz_path, 'w', encoding='utf-8') as f_isl_w:
                f_isl_w.write(new_content)
            print("✅ Islerimiz.tsx (Regex fallback) başarıyla güncellendi!")

if __name__ == "__main__":
    main()
