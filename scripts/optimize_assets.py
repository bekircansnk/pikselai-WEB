import os
import shutil
import re
from PIL import Image
import sys

# Configuration
PROJECT_ROOT = os.getcwd()
SRC_DIR = os.path.join(PROJECT_ROOT, 'src')
PUBLIC_DIR = os.path.join(PROJECT_ROOT, 'public')
BACKUP_DIR = os.path.join(PROJECT_ROOT, '_backup_unused')
MAX_SIZE_KB = 100
TARGET_FORMAT = 'webp'
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp'}
CODE_EXTENSIONS = {'.tsx', '.ts', '.css', '.scss', '.html', '.json', '.js', '.jsx'}

def get_all_files(directory, extensions):
    matches = []
    for root, dirnames, filenames in os.walk(directory):
        # Ignore node_modules, .git, dist, etc.
        if 'node_modules' in root or '.git' in root or 'dist' in root or '_backup_unused' in root:
            continue
        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext in extensions:
                matches.append(os.path.join(root, filename))
    return matches

def scan_for_references(code_files, asset_names):
    references = set()
    for file_path in code_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                for asset in asset_names:
                    if asset in content:
                        references.add(asset)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    return references

def compress_image(image_path, target_path):
    try:
        img = Image.open(image_path)
        
        # Convert to RGB if necessary (e.g. for PNGs with transparency)
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img = img.convert('RGBA')
        else:
            img = img.convert('RGB')

        # Initial save to check size
        quality = 90
        img.save(target_path, TARGET_FORMAT, quality=quality, optimize=True)
        
        # Iterative compression to reach target size
        while os.path.getsize(target_path) > MAX_SIZE_KB * 1024 and quality > 10:
            quality -= 5
            img.save(target_path, TARGET_FORMAT, quality=quality, optimize=True)
            
        # If still too large, resize
        if os.path.getsize(target_path) > MAX_SIZE_KB * 1024:
            scale_factor = 0.9
            while os.path.getsize(target_path) > MAX_SIZE_KB * 1024 and scale_factor > 0.1:
                new_width = int(img.width * scale_factor)
                new_height = int(img.height * scale_factor)
                resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                resized_img.save(target_path, TARGET_FORMAT, quality=quality, optimize=True)
                scale_factor -= 0.1
                
        print(f"Optimized: {os.path.basename(target_path)} ({os.path.getsize(target_path)/1024:.1f}KB)")
        return True
    except Exception as e:
        print(f"Failed to compress {image_path}: {e}")
        return False

def update_references(code_files, old_name, new_name):
    for file_path in code_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_name in content:
                new_content = content.replace(old_name, new_name)
                # Also handle import paths if they don't have extension but might be relying on bundler
                # For this script, we'll focus on replacing exact filenames including extensions
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated references in {os.path.basename(file_path)}")
        except Exception as e:
            print(f"Error updating {file_path}: {e}")

def main():
    print("Starting Brain Integration & Asset Optimization...")
    
    # 1. Setup
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
        
    # 2. Index Assets
    print("Scanning for assets...")
    assets = get_all_files(SRC_DIR, IMAGE_EXTENSIONS) + get_all_files(PUBLIC_DIR, IMAGE_EXTENSIONS)
    code_files = get_all_files(SRC_DIR, CODE_EXTENSIONS) + get_all_files(PUBLIC_DIR, CODE_EXTENSIONS)
    
    asset_map = {os.path.basename(p): p for p in assets}
    asset_names = list(asset_map.keys())
    
    # 3. Reference Check
    print("Checking for asset usage...")
    used_assets = scan_for_references(code_files, asset_names)
    
    # Check for usage in CSS/SCSS with url()
    # This simple string check covers most cases, including imports
    
    unused_count = 0
    optimized_count = 0
    
    for name, path in asset_map.items():
        if name not in used_assets:
            # Move to backup
            print(f"Unused reference found (or dynamic import): {name}")
            # Safety check: Is it favicons or manifest?
            if 'favicon' in name or 'manifest' in name or 'logo' in name:
                print(f"Skipping potential system asset: {name}")
                used_assets.add(name) # Mark as used effectively
                continue
                
            shutil.move(path, os.path.join(BACKUP_DIR, name))
            unused_count += 1
        else:
            # Optimize
            # Determine new path
            dir_name = os.path.dirname(path)
            base_name = os.path.splitext(name)[0]
            new_name = f"{base_name}.{TARGET_FORMAT}"
            new_path = os.path.join(dir_name, new_name)
            
            # Skip if already webp and optimized (check size)? 
            # For now, just re-process everything that isn't already small webp
            
            # If it's already webp and small enough, skip
            if name.endswith('.webp') and os.path.getsize(path) < MAX_SIZE_KB * 1024:
                print(f"Skipping already optimized: {name}")
                continue

            print(f"Optimizing {name} -> {new_name}...")
            success = compress_image(path, new_path)
            
            if success:
                optimized_count += 1
                if name != new_name:
                    # Update code references
                    update_references(code_files, name, new_name)
                    # Remove old file if different extension
                    os.remove(path)

    print(f"\nOptimization Complete!")
    print(f"Moved {unused_count} unused assets to {BACKUP_DIR}")
    print(f"Optimized {optimized_count} images")

if __name__ == "__main__":
    main()
