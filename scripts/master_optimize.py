"""
Master Image Optimization & Backup Script
==========================================
Tek komutla çalışan merkezi görsel yönetim sistemi:
  python3 scripts/master_optimize.py

İşlevler:
  1. Yapısal Yedekleme  — Orijinalleri .yedekler/ klasörüne, klasör yapısını koruyarak yedekler
  2. Format Dönüştürme   — .jpg/.jpeg/.png dosyalarını .webp'ye çevirir, kodları günceller
  3. Akıllı Boyutlandırma — Kullanım alanına göre farklı max boyutlar uygular
  4. Agresif Sıkıştırma  — 100KB altına düşürmeyi hedefler (min kalite: 55)
  5. Kullanılmayan Temizlik — Kodda referansı olmayan görselleri çöpe taşır
"""

import os
import re
import shutil
from PIL import Image
from datetime import datetime

# ═══════════════════════════════════════════════════════════════
# YAPILANDIRMA
# ═══════════════════════════════════════════════════════════════
PROJECT_ROOT = os.getcwd()
SRC_DIRS = [os.path.join(PROJECT_ROOT, "src"), os.path.join(PROJECT_ROOT, "public")]
BACKUP_DIR = os.path.join(PROJECT_ROOT, ".yedekler")
TRASH_DIR = os.path.join(PROJECT_ROOT, ".silinecekler_cop_kutusu")

ALL_IMG_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif'}
CONVERT_EXTS = {'.jpg', '.jpeg', '.png'}
CODE_EXTS = {'.tsx', '.ts', '.jsx', '.js', '.css', '.scss', '.html', '.json', '.md'}
EXCLUDE_DIRS = {'node_modules', 'dist', '.git', '.yedekler', '.silinecekler_cop_kutusu', '_backup_unused', '_yedek_gorseller'}

# Hedef dosya boyutu (KB)
TARGET_SIZE_KB = 100

# ═══════════════════════════════════════════════════════════════
# KULLANIM BAĞLAMINA GÖRE BOYUTLANDIRMA KURALLARI
# (klasör_parçası, max_genişlik, max_yükseklik)
# ═══════════════════════════════════════════════════════════════
SIZE_RULES = [
    ("pages/blog",                1200,  675),
    ("brands/",                    800, 1000),
    ("pages/homeyeni",            1000, 1200),
    ("pages/sosyalmedyayeni",     1000, 1000),
    ("pages/islerimiz",           1200, 1200),
    ("casestudy",                 1200, 1200),
    ("common/",                    800, 1000),
]
DEFAULT_MAX = (1200, 1400)


def get_max_dimensions(file_path):
    """Dosya yoluna bakarak uygun max boyutları döndürür."""
    rel = os.path.relpath(file_path, PROJECT_ROOT).replace("\\", "/")
    for pattern, w, h in SIZE_RULES:
        if pattern in rel:
            return w, h
    return DEFAULT_MAX


# ═══════════════════════════════════════════════════════════════
# YARDIMCI FONKSİYONLAR
# ═══════════════════════════════════════════════════════════════

def setup():
    os.makedirs(BACKUP_DIR, exist_ok=True)
    os.makedirs(TRASH_DIR, exist_ok=True)


def get_files(directories, extensions):
    matched = []
    for d in directories:
        if not os.path.exists(d):
            continue
        for root, dirs, files in os.walk(d):
            dirs[:] = [x for x in dirs if x not in EXCLUDE_DIRS]
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in extensions:
                    matched.append(os.path.join(root, f))
    return matched


def is_image_used(filename, basename, all_code):
    url_encoded = filename.replace(' ', '%20')
    if filename in all_code or url_encoded in all_code:
        return True
    if 'favicon' in filename or 'logo' in filename or 'manifest' in filename:
        return True
    if re.search(r'\b' + re.escape(basename) + r'\b', all_code):
        return True
    return False


def backup_file(file_path):
    """Dosyayı .yedekler/ klasörüne orijinal klasör yapısıyla kopyalar."""
    rel = os.path.relpath(file_path, PROJECT_ROOT)
    dest = os.path.join(BACKUP_DIR, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    # Zaten yedeklenmişse üzerine yazma
    if not os.path.exists(dest):
        shutil.copy2(file_path, dest)
    return dest


def move_to_trash(file_path):
    """Kullanılmayan dosyayı çöp kutusuna taşır."""
    filename = os.path.basename(file_path)
    dest = os.path.join(TRASH_DIR, filename)
    counter = 1
    base, ext = os.path.splitext(filename)
    while os.path.exists(dest):
        dest = os.path.join(TRASH_DIR, f"{base}_{counter}{ext}")
        counter += 1
    shutil.move(file_path, dest)


def compress_webp(img_path, target_kb=TARGET_SIZE_KB):
    """Görseli bağlama uygun boyutlandırır ve agresif sıkıştırır."""
    orig_size = os.path.getsize(img_path) / 1024
    if orig_size <= target_kb:
        return False, orig_size, orig_size  # Zaten yeterince küçük

    # Önce yedekle
    backup_file(img_path)

    img = Image.open(img_path)

    # Renk modu düzelt
    if img.mode not in ('RGB', 'RGBA'):
        img = img.convert('RGBA') if ('A' in (img.mode or '') or 'transparency' in img.info) else img.convert('RGB')

    # Bağlama göre boyutlandır
    max_w, max_h = get_max_dimensions(img_path)
    w, h = img.size
    resized = False

    if w > max_w or h > max_h:
        ratio = min(max_w / w, max_h / h)
        new_w = int(w * ratio)
        new_h = int(h * ratio)
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        resized = True

    # Kalite iterasyonu
    quality = 82
    min_quality = 55

    while quality >= min_quality:
        img.save(img_path, 'webp', quality=quality, method=6, optimize=True)
        current_size = os.path.getsize(img_path) / 1024
        if current_size <= target_kb:
            return True, orig_size, current_size
        quality -= 3

    # Son çare: daha fazla küçült
    if os.path.getsize(img_path) / 1024 > target_kb:
        w, h = img.size
        for scale in [0.85, 0.7, 0.6, 0.5]:
            scaled = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
            scaled.save(img_path, 'webp', quality=min_quality, method=6, optimize=True)
            current_size = os.path.getsize(img_path) / 1024
            if current_size <= target_kb:
                return True, orig_size, current_size

    final_size = os.path.getsize(img_path) / 1024
    return True, orig_size, final_size


def optimize_to_webp(img_path):
    """jpg/jpeg/png dosyasını webp'ye dönüştürür."""
    filename = os.path.basename(img_path)
    basename, _ = os.path.splitext(filename)
    new_filename = basename + '.webp'
    new_path = os.path.join(os.path.dirname(img_path), new_filename)

    if os.path.exists(new_path):
        return new_path, new_filename, False

    # Önce yedekle
    backup_file(img_path)

    try:
        img = Image.open(img_path)
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGBA') if 'A' in (img.mode or '') else img.convert('RGB')

        max_w, max_h = get_max_dimensions(img_path)
        w, h = img.size
        if w > max_w or h > max_h:
            ratio = min(max_w / w, max_h / h)
            img = img.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS)

        img.save(new_path, 'webp', quality=82, method=6, optimize=True)

        # 100KB üstündeyse agresif sıkıştır
        if os.path.getsize(new_path) / 1024 > TARGET_SIZE_KB:
            compress_webp(new_path)

        return new_path, new_filename, True
    except Exception as e:
        print(f"  ❌ Hata: {filename} dönüştürülemedi — {e}")
        return None, None, False


# ═══════════════════════════════════════════════════════════════
# ANA SÜREÇ
# ═══════════════════════════════════════════════════════════════

def main():
    start_time = datetime.now()
    print("═" * 60)
    print("  🚀 MASTER OPTİMİZASYON & YEDEKLEME SİSTEMİ")
    print("═" * 60)
    print()
    setup()

    # 1. Dosyaları topla
    all_images = get_files(SRC_DIRS, ALL_IMG_EXTS)
    code_files = get_files(SRC_DIRS, CODE_EXTS)
    for rf in ['index.html', 'package.json']:
        rp = os.path.join(PROJECT_ROOT, rf)
        if os.path.exists(rp):
            code_files.append(rp)

    print(f"📁 Toplam Görsel  : {len(all_images)}")
    print(f"📄 Kod Dosyası    : {len(code_files)}")

    # 2. Tüm kodu oku
    all_code = ""
    for fpath in code_files:
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                all_code += f.read() + "\n"
        except Exception:
            pass

    # 3. Kullanılan/Kullanılmayan ayır
    used, unused = [], []
    for img in all_images:
        fn = os.path.basename(img)
        bn, _ = os.path.splitext(fn)
        (used if is_image_used(fn, bn, all_code) else unused).append(img)

    print(f"✅ Kullanılan     : {len(used)}")
    print(f"🗑️  Kullanılmayan  : {len(unused)}")
    print()

    # 4. Kullanılmayanları çöpe
    for img in unused:
        print(f"  🗑️  {os.path.basename(img)}")
        move_to_trash(img)

    # 5. Format dönüştürme (.jpg/.png → .webp)
    converted = 0
    for img in used:
        fn = os.path.basename(img)
        ext = os.path.splitext(fn)[1].lower()
        if ext in CONVERT_EXTS:
            new_path, new_fn, success = optimize_to_webp(img)
            if success and new_fn:
                converted += 1
                for fpath in code_files:
                    try:
                        with open(fpath, 'r', encoding='utf-8') as f:
                            content = f.read()
                        if fn in content:
                            with open(fpath, 'w', encoding='utf-8') as f:
                                f.write(content.replace(fn, new_fn))
                            print(f"  🔄 {os.path.basename(fpath)}: {fn} → {new_fn}")
                    except Exception:
                        pass
                move_to_trash(img)

    # 6. WebP sıkıştırma (100KB hedefi)
    print()
    print("─" * 60)
    print("  📦 BOYUT OPTİMİZASYONU (Hedef: <100KB)")
    print("─" * 60)

    optimized = 0
    total_saved = 0
    report = []

    webp_files = get_files(SRC_DIRS, {'.webp'})
    for img in webp_files:
        size_kb = os.path.getsize(img) / 1024
        if size_kb > TARGET_SIZE_KB:
            changed, before, after = compress_webp(img)
            if changed:
                optimized += 1
                saved = before - after
                total_saved += saved
                status = "✅" if after <= TARGET_SIZE_KB else "⚠️"
                rel = os.path.relpath(img, os.path.join(PROJECT_ROOT, "public"))
                report.append((rel, before, after, status))
                print(f"  {status} {os.path.basename(img):50s} {before:>7.0f}KB → {after:>5.0f}KB  ({saved:>+6.0f}KB)")

    # 7. Sonuç raporu
    print()
    print("═" * 60)
    print("  📊 SONUÇ RAPORU")
    print("═" * 60)
    print(f"  Kullanılmayan taşındı  : {len(unused)} dosya")
    print(f"  WebP'ye dönüştürüldü   : {converted} dosya")
    print(f"  Boyut optimize edildi  : {optimized} dosya")
    print(f"  Toplam tasarruf        : {total_saved:.0f} KB ({total_saved/1024:.1f} MB)")
    print(f"  Yedek klasörü          : .yedekler/")

    # Hala 100KB üstü var mı?
    remaining = [r for r in report if r[3] == "⚠️"]
    if remaining:
        print(f"\n  ⚠️  100KB üstünde kalan: {len(remaining)} dosya")
        for r in remaining:
            print(f"     - {r[0]} ({r[2]:.0f}KB)")

    elapsed = (datetime.now() - start_time).total_seconds()
    print(f"\n  ⏱️  Süre: {elapsed:.1f} saniye")
    print("═" * 60)


if __name__ == "__main__":
    main()
