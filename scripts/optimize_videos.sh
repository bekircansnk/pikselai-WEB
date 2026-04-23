#!/bin/bash

echo "Video optimizasyon süreci başlıyor..."

mkdir -p .silinecekler_cop_kutusu/videos

videos=(
    "public/assets/pages/homeyeni/landing.mp4"
    "public/assets/pages/aiproductionyeni/as.mp4"
    "public/assets/common/end_product.mp4"
    "public/assets/common/shopify_migration.mp4"
)

for vid in "${videos[@]}"; do
    if [ -f "$vid" ]; then
        filename=$(basename "$vid")
        echo "İşleniyor: $filename"
        
        # İlk 3 saniyeyi al (-t 3), kaliteyi optimize et (-crf 28), sesi kaldır (-an)
        ffmpeg -y -i "$vid" -t 3 -c:v libx264 -crf 28 -preset fast -an "${vid%.mp4}_opt.mp4" -hide_banner -loglevel error
        
        if [ $? -eq 0 ]; then
            echo "$filename başarıyla optimize edildi. Orijinal dosya çöp kutusuna taşınıyor."
            # Orijinal dosyayı yedekle
            mv "$vid" ".silinecekler_cop_kutusu/videos/$filename.orj"
            # Optimize edilmiş dosyayı orijinal isme getir
            mv "${vid%.mp4}_opt.mp4" "$vid"
        else
            echo "HATA: $filename işlenemedi."
        fi
    else
        echo "Dosya bulunamadı: $vid"
    fi
done

echo "Optimizasyon tamamlandı!"
