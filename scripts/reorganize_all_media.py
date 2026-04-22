import os
import shutil
import re

PUBLIC_DIR = 'public'
DOCS_BLOG_DIR = 'docs/BLOG'
TRASH_DIR = '.silinecekler_cop_kutusu/unused_media'
ASSETS_DIR = 'public/assets'

KEEP_FILES = {'.DS_Store', '.htaccess', '_headers', '_redirects', 'robots.txt', 'site.webmanifest', 'sitemap.xml', 'vite.svg'}
MEDIA_EXTS = {'.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.mp4', '.webm'}

BRANDS = ['cazador', 'venus', 'mina_drinks', 'camp_and_map', 'rossea']

def get_all_src_files():
    res = []
    for root, _, files in os.walk('src'):
        for f in files:
            if f.endswith(('.tsx', '.ts', '.css', '.html', '.json')):
                res.append(os.path.join(root, f))
    return res

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ''

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def find_media_files():
    media = []
    # Scan public
    for root, _, files in os.walk(PUBLIC_DIR):
        if 'assets' in root.split(os.sep): continue
        if '.silinecekler_cop_kutusu' in root.split(os.sep): continue
        
        for f in files:
            if root == PUBLIC_DIR and f in KEEP_FILES: continue
            if f == '.DS_Store': continue
            
            ext = os.path.splitext(f)[1].lower()
            if ext in MEDIA_EXTS:
                media.append(os.path.join(root, f))
                
    # Scan docs/BLOG
    if os.path.exists(DOCS_BLOG_DIR):
        for root, _, files in os.walk(DOCS_BLOG_DIR):
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in MEDIA_EXTS:
                    media.append(os.path.join(root, f))
    return media

def sanitize_name(name):
    s, ext = os.path.splitext(name)
    s = s.lower().replace('-', '_').replace(' ', '_')
    s = re.sub(r'[^a-z0-9_]', '', s)
    return s + ext

def determine_new_path(old_path, usages):
    basename = os.path.basename(old_path)
    clean_name = sanitize_name(basename)
    
    # Check if a brand is in the usages or original path
    path_lower = old_path.lower()
    for b in BRANDS:
        b_nospace = b.replace('_', '')
        if b in path_lower or b_nospace in path_lower:
            return os.path.join(ASSETS_DIR, 'brands', b, clean_name)
            
    # Check pages usage
    pages_using = []
    for u in usages:
        if 'src/pages/' in u:
            page_name = os.path.splitext(os.path.basename(u))[0]
            pages_using.append(page_name)
            
    pages_using = list(set(pages_using))
    
    if len(pages_using) == 1:
        # used in only 1 page
        page_folder = sanitize_name(pages_using[0]).replace('.ts', '').replace('.tsx', '')
        return os.path.join(ASSETS_DIR, 'pages', page_folder, clean_name)
    elif len(pages_using) > 1 or len(usages) > 0:
        # used in multiple pages or in components
        if 'blog' in path_lower:
            return os.path.join(ASSETS_DIR, 'blog', clean_name)
        return os.path.join(ASSETS_DIR, 'common', clean_name)
    
    return None # completely unused

def main():
    os.makedirs(ASSETS_DIR, exist_ok=True)
    os.makedirs(TRASH_DIR, exist_ok=True)
    
    src_files = get_all_src_files()
    src_contents = {f: read_file(f) for f in src_files}
    
    media_files = find_media_files()
    
    replacements = {}
    
    for m in media_files:
        # Determine relative path from public if it's in public, else just basename
        if m.startswith('public/'):
            rel_path = m[7:] 
            search_str = rel_path
        else:
            rel_path = m
            search_str = os.path.basename(m)
            
        # Find usages
        basename = os.path.basename(m)
        usages = []
        for src_f, content in src_contents.items():
            if search_str in content or f"/{search_str}" in content or basename in content:
                usages.append(src_f)
                
        if not usages:
            # UNUSED -> Trash
            print(f"UNUSED: {m}")
            dst = os.path.join(TRASH_DIR, basename)
            counter = 1
            while os.path.exists(dst):
                name, ext = os.path.splitext(basename)
                dst = os.path.join(TRASH_DIR, f"{name}_{counter}{ext}")
                counter += 1
            shutil.move(m, dst)
        else:
            # USED -> Move to assets
            new_path = determine_new_path(m, usages)
            if new_path:
                os.makedirs(os.path.dirname(new_path), exist_ok=True)
                
                # handle filename collisions in assets
                original_new_path = new_path
                counter = 1
                while os.path.exists(new_path) and new_path != m:
                    # if the exact file already exist there and we are just moving the same thing, skip
                    if os.path.abspath(new_path) == os.path.abspath(m):
                        break
                    
                    name, ext = os.path.splitext(original_new_path)
                    new_path = f"{name}_{counter}{ext}"
                    counter += 1
                
                if m != new_path:
                    shutil.move(m, new_path)
                    print(f"MOVED: {m} -> {new_path}")
                
                # prepare replacement string mapping old web path to new web path
                old_web_route = f"/{rel_path}"
                new_web_route = '/' + new_path[7:] # remove public/
                if old_web_route != new_web_route:
                    replacements[old_web_route] = new_web_route

    # Apply all replacements to source codes
    if replacements:
        for f, content in src_contents.items():
            new_content = content
            # Sort replacements by length descending to replace longest path matches first
            for old_r, new_r in sorted(replacements.items(), key=lambda x: len(x[0]), reverse=True):
                new_content = new_content.replace(old_r, new_r)
            if new_content != content:
                write_file(f, new_content)
                print(f"UPDATED: {f}")

    # Remove empty dirs in public
    for root, dirs, files in os.walk(PUBLIC_DIR, topdown=False):
        if 'assets' in root.split(os.sep): continue
        if root == PUBLIC_DIR: continue
        if not os.listdir(root):
            os.rmdir(root)
            print(f"REMOVED EMPTY DIR: {root}")
            
    if os.path.exists(DOCS_BLOG_DIR) and not os.listdir(DOCS_BLOG_DIR):
        os.rmdir(DOCS_BLOG_DIR)
        print(f"REMOVED EMPTY DIR: {DOCS_BLOG_DIR}")
        
    print("Cleanup and Restructure Complete.")
    
    # Generate asset data for frontend
    try:
        from scripts.generate_asset_data import generate_asset_data
        generate_asset_data()
    except ImportError:
        # If running from root, might need different import
        import subprocess
        subprocess.run(['python3', 'scripts/generate_asset_data.py'])

if __name__ == '__main__':
    main()
