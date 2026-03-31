import os
import subprocess
from pathlib import Path
from PIL import Image

def optimize_images(src_dir, trash_dir):
    src_path = Path(src_dir)
    trash_path = Path(trash_dir)
    
    # Desteklenen uzantılar
    supported_exts = {'.jpg', '.jpeg', '.png'}
    
    count = 0
    
    for root, dirs, files in os.walk(src_path):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in supported_exts:
                file_path = Path(root) / file
                
                # Yeni .webp yolu
                rel_path = file_path.relative_to(src_path)
                new_file_path = file_path.with_suffix('.webp')
                
                try:
                    with Image.open(file_path) as img:
                        # RGB'ye çevir (Özellikle PNG'den WEBP'ye çevirirken RGBA/transparan varsa koruruz, ama değilse RGB yaparız)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGBA")
                        else:
                            img = img.convert("RGB")
                        
                        img.save(new_file_path, 'WEBP', quality=85, method=6)
                        
                    # Çöp kutusu klasörü hiyerarşisini kur
                    trash_file_dir = trash_path / 'sosyal_medya_resimler' / rel_path.parent
                    trash_file_dir.mkdir(parents=True, exist_ok=True)
                    
                    # Orijinal dosyayı çöp kutusuna taşı
                    os.rename(file_path, trash_file_dir / file)
                    count += 1
                    print(f"✅ Optimize edildi: {rel_path} -> .webp")
                    
                except Exception as e:
                    print(f"❌ Hata ({rel_path}): {e}")

    print(f"\n🚀 Toplam {count} görsel başarıyla WebP formatına dönüştürüldü.")

def optimize_video(vid_path_str, trash_dir):
    vid_path = Path(vid_path_str)
    trash_path = Path(trash_dir)
    
    if not vid_path.exists():
        print(f"⚠️ Video bulunamadı: {vid_path}")
        return
        
    out_path = vid_path.with_name(f"{vid_path.stem}_opt{vid_path.suffix}")
    
    # FFMPEG komutu (H264, web optimize)
    cmd = [
        'ffmpeg', '-y', '-i', str(vid_path),
        '-vcodec', 'libx264', '-crf', '24', '-preset', 'medium',
        '-acodec', 'aac', '-b:a', '128k',
        str(out_path)
    ]
    
    print(f"\n🎬 Video optimizasyonu başlıyor: {vid_path.name}...")
    try:
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        # Orijinali çöpe taşı ve yenisinin adını orijinalin ismine getir
        trash_file_dir = trash_path / 'videos'
        trash_file_dir.mkdir(parents=True, exist_ok=True)
        trash_dest = trash_file_dir / vid_path.name
        
        # Eğer çöpte aynı adda dosya varsa sil
        if trash_dest.exists():
            trash_dest.unlink()
            
        os.rename(vid_path, trash_dest)
        os.rename(out_path, vid_path)
        print(f"✅ Video başarıyla optimize edildi!")
    except FileNotFoundError:
        print("❌ ffmpeg kurulu değil! Lütfen 'brew install ffmpeg' ile kurun.")
    except Exception as e:
        print(f"❌ Video optimizasyonu sırasında hata: {e}")

if __name__ == "__main__":
    BASE_DIR = Path('/Users/bekir/Uygulamalarım/KİŞİSEL PROJELER/pikselai-WEB')
    IMG_DIR = BASE_DIR / 'public' / 'sosyal_medya_resimler'
    VID_PATH = BASE_DIR / 'public' / 'as.mp4'
    TRASH_DIR = BASE_DIR / '.silinecekler_cop_kutusu'
    
    TRASH_DIR.mkdir(exist_ok=True)
    
    print("🌟 Optimizasyon Süreci Başlıyor...")
    optimize_images(IMG_DIR, TRASH_DIR)
    optimize_video(VID_PATH, TRASH_DIR)
    print("\n✅ Tüm işlemler tamamlandı. Büyük boyutlu orijinal dosyalar çöp kutusuna taşındı.")
