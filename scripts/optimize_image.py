import sys
import os
from PIL import Image

def optimize_image(input_path, output_path, quality=85):
    if not os.path.exists(input_path):
        print(f"Error: File not found {input_path}")
        return
        
    try:
        with Image.open(input_path) as img:
            # Prevent issues with RGBA for format lacking alpha
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
                
            # Perform optimization. WebP with quality 85 is usually excellent
            # Method 6 is the highest compression effort (slowest to encode, smallest file)
            img.save(output_path, 'WEBP', quality=quality, optimize=True, method=6)
            
            orig_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            savings = (1 - (new_size / orig_size)) * 100
            
            print(f"Successfully optimized image!")
            print(f"Original size: {orig_size / 1024:.2f} KB")
            print(f"New size: {new_size / 1024:.2f} KB")
            print(f"Reduction: {savings:.2f}%")
            print(f"Saved to: {output_path}")
    except Exception as e:
        print(f"Error optimizing image: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python optimize_image.py <input> <output> [quality]")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    quality = int(sys.argv[3]) if len(sys.argv) > 3 else 85
    
    optimize_image(input_file, output_file, quality)
