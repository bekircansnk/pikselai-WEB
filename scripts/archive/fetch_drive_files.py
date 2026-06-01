import requests
import json

def main():
    import os
    api_key = os.environ.get("GOOGLE_API_KEY", "YOUR_API_KEY_HERE")
    root_folder_id = os.environ.get("GOOGLE_DRIVE_ROOT_FOLDER_ID", "YOUR_FOLDER_ID_HERE")
    
    # 1. Root altındaki klasörleri listele (hayalet çekim klasörünü bulmak için)
    # query: '1JLuhoAGgNBEfjjAytR1Qnly2JHBhW_g1' in parents and mimeType = 'application/vnd.google-apps.folder'
    url = "https://www.googleapis.com/drive/v3/files"
    headers = {
        "Referer": "https://katalog.pikselai.com/"
    }
    params = {
        "q": f"'{root_folder_id}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
        "key": api_key,
        "fields": "files(id, name)"
    }
    
    print("Listing folders under root folder...")
    resp = requests.get(url, params=params, headers=headers)
    if resp.status_code != 200:
        print(f"Failed to list folders: {resp.text}")
        return
        
    data = resp.json()
    folders = data.get("files", [])
    print(f"Found {len(folders)} folders:")
    for f in folders:
        print(f"  Folder ID: {f['id']} - Name: {f['name']}")
        
    # Albüm 6 klasörünü seçelim (İsminin içinde '6' veya 'hayalet' veya 'cekim' geçeni arayacağız)
    target_folder_id = None
    for f in folders:
        name = f['name'].lower()
        if "hayalet" in name or "ghost" in name or "6" in name:
            target_folder_id = f['id']
            print(f"\n🎉 TARGET FOLDER FOUND: {f['name']} (ID: {target_folder_id})")
            break
            
    if not target_folder_id:
        print("Target folder not found. Searching all folders recursively for '6-hayalet-cekim'...")
        # Alternatif arama: tüm drive'da '6-hayalet-cekim' veya 'hayalet' ismindeki klasörü ara
        params = {
            "q": "name contains 'hayalet' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
            "key": api_key,
            "fields": "files(id, name)"
        }
        resp = requests.get(url, params=params, headers=headers)
        data = resp.json()
        folders = data.get("files", [])
        if folders:
            target_folder_id = folders[0]['id']
            print(f"🎉 FOUND FOLDER VIA BROAD SEARCH: {folders[0]['name']} (ID: {target_folder_id})")
        else:
            print("No folders found. Using root folder as search target.")
            target_folder_id = root_folder_id

    # 2. Seçilen klasör içindeki resimleri listele
    # query: 'target_folder_id' in parents and mimeType contains 'image/'
    print(f"\nListing images in folder {target_folder_id}...")
    params = {
        "q": f"'{target_folder_id}' in parents and mimeType contains 'image/' and trashed = false",
        "key": api_key,
        "fields": "files(id, name, mimeType, size)",
        "pageSize": 100 # Maksimum 100 resim çekelim
    }
    
    resp = requests.get(url, params=params, headers=headers)
    if resp.status_code != 200:
        print(f"Failed to list images: {resp.text}")
        return
        
    data = resp.json()
    files = data.get("files", [])
    print(f"Found {len(files)} images in folder.")
    
    # Detayları yazdır
    for idx, f in enumerate(files, 1):
        print(f"  {idx}. ID: {f['id']} - Name: {f['name']} - Size: {int(f.get('size', 0))/1024:.1f} KB")
        
    # JSON olarak kaydet ki bir sonraki adımda indirmesi kolay olsun
    output_path = "/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB/scripts/drive_images.json"
    with open(output_path, 'w', encoding='utf-8') as outfile:
        json.dump(files, outfile, indent=2, ensure_ascii=False)
    print(f"\nSaved {len(files)} image metadata to {output_path}")

if __name__ == "__main__":
    main()
