import os
import json

def generate_asset_data():
    base_assets_path = 'public/assets'
    data = {}
    
    # Scan pages
    pages_path = os.path.join(base_assets_path, 'pages')
    data['pages'] = {}
    if os.path.exists(pages_path):
        for page in os.listdir(pages_path):
            page_path = os.path.join(pages_path, page)
            if os.path.isdir(page_path):
                data['pages'][page] = {}
                for sub in os.listdir(page_path):
                    sub_path = os.path.join(page_path, sub)
                    if os.path.isdir(sub_path):
                        files = [f for f in os.listdir(sub_path) if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png', '.avif'))]
                        data['pages'][page][sub] = [f'/assets/pages/{page}/{sub}/{f}' for f in files]
                    elif os.path.isfile(sub_path) and sub.lower().endswith(('.webp', '.jpg', '.jpeg', '.png', '.avif')):
                        if 'files' not in data['pages'][page]: data['pages'][page]['files'] = []
                        data['pages'][page]['files'].append(f'/assets/pages/{page}/{sub}')

    # Scan brands
    brands_path = os.path.join(base_assets_path, 'brands')
    data['brands'] = {}
    if os.path.exists(brands_path):
        for brand in os.listdir(brands_path):
            brand_path = os.path.join(brands_path, brand)
            if os.path.isdir(brand_path):
                files = [f for f in os.listdir(brand_path) if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png'))]
                data['brands'][brand] = [f'/assets/brands/{brand}/{f}' for f in files]

    # Scan common
    common_path = os.path.join(base_assets_path, 'common')
    if os.path.exists(common_path):
        data['common'] = [f'/assets/common/{f}' for f in os.listdir(common_path) if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png'))]
    else:
        data['common'] = []

    # Write to a TS file
    content = "export const ASSET_DATA = " + json.dumps(data, indent=2) + ";"
    
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/assetData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("src/data/assetData.ts generated successfully.")

if __name__ == "__main__":
    generate_asset_data()
