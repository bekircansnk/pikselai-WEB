import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'pikselai.com';
const KEY = 'pikselai-indexnow-key-2026';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Sitemap'ten URL'leri çıkar
function extractUrlsFromSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap bulunamadı:', SITEMAP_PATH);
    return [];
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  // Basit regex ile <loc> etiketleri arasındaki URL'leri al
  const regex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;

  while ((match = regex.exec(sitemapContent)) !== null) {
    if (match[1]) {
      urls.push(match[1].trim());
    }
  }

  return urls;
}

// IndexNow API'sine gönder
function submitToIndexNow(urlList) {
  if (urlList.length === 0) {
    console.log('⚠️ Gönderilecek URL bulunamadı.');
    return;
  }

  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  console.log(`🚀 IndexNow API'sine ${urlList.length} URL gönderiliyor...`);

  const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('✅ Başarılı! URL\'ler IndexNow üzerinden arama motorlarına iletildi.');
      } else {
        console.error(`❌ Hata oluştu. Status Code: ${res.statusCode}`);
        console.error('Response:', responseData);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`❌ İstek sırasında hata: ${e.message}`);
  });

  req.write(payload);
  req.end();
}

// Ana çalışma bloğu
const urls = extractUrlsFromSitemap();
submitToIndexNow(urls);
