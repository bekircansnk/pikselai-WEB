import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const baseDir = './public/BLOG';
const maxDimension = 1920;

const dirsToProcess = [
  { src: 'MİNADRİNKS-FOTO', dest: 'mina-drinks' },
  { src: 'VENÜS-FOTO', dest: 'venus' },
  { src: 'campandmap-foto', dest: 'campandmap' }
];

async function optimizeImages() {
  for (const dir of dirsToProcess) {
    const srcPath = path.join(baseDir, dir.src);
    const destPath = path.join(baseDir, dir.dest);

    try {
      await fs.mkdir(destPath, { recursive: true });
      const files = await fs.readdir(srcPath);
      
      for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
        
        const inputPath = path.join(srcPath, file);
        // İsimdeki boşluklar ve türkçe karakterler vb. için güvenli hale getirelim
        const outputFilename = `${path.parse(file).name.replace(/[^a-zA-Z0-9-]/g, '_').toLowerCase()}.webp`;
        const outputPath = path.join(destPath, outputFilename);
        
        console.log(`Dönüştürülüyor: ${file} -> ${outputFilename}`);
        
        await sharp(inputPath)
          .resize(maxDimension, maxDimension, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80, effort: 4 })
          .toFile(outputPath);
      }
    } catch (err) {
      console.error(`Klasör ${dir.src} işlenirken hata:`, err.message);
    }
  }
  console.log("Tüm resimler optimize edilmiştir!");
}

optimizeImages();
