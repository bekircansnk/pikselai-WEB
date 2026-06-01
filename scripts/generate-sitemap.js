import fs from 'fs';
import path from 'path';

// Temel URL'ler (Statik Sayfalar)
const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/ai-produksiyon', priority: '0.9', changefreq: 'monthly' },
    { url: '/e-ticaret', priority: '0.9', changefreq: 'monthly' },
    { url: '/sosyal-medya', priority: '0.9', changefreq: 'monthly' },
    { url: '/hizmetler/kreatif-tasarim', priority: '0.9', changefreq: 'monthly' },
    { url: '/fiyatlandirma', priority: '0.8', changefreq: 'monthly' },
    { url: '/maliyet-hesapla', priority: '0.7', changefreq: 'monthly' },
    { url: '/hakkimizda', priority: '0.7', changefreq: 'monthly' },
    { url: '/iletisim', priority: '0.7', changefreq: 'monthly' },
    { url: '/islerimiz', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/musteri-hikayeleri', priority: '0.8', changefreq: 'monthly' },
];

const SITE_URL = 'https://pikselai.com';

function generateSitemap() {
    console.log('Sitemap oluşturuluyor...');
    const urls = [...staticPages];
    const today = new Date().toISOString().split('T')[0];

    // 1. Blog Postlarını Oku
    const blogPostsPath = path.resolve('./src/data/blogPosts.ts');
    if (fs.existsSync(blogPostsPath)) {
        const blogContent = fs.readFileSync(blogPostsPath, 'utf8');
        // link: "/blog/..." patternini bul
        const linkRegex = /link:\s*["'](\/blog\/[^"']+)["']/g;
        let match;
        let blogCount = 0;
        while ((match = linkRegex.exec(blogContent)) !== null) {
            urls.push({
                url: match[1],
                priority: '0.7',
                changefreq: 'monthly'
            });
            blogCount++;
        }
        console.log(`${blogCount} blog yazısı bulundu.`);
    }

    // 2. Müşteri Hikayelerini Oku
    const storiesPath = path.resolve('./src/pages/MusteriHikayeleri.tsx');
    if (fs.existsSync(storiesPath)) {
        const storyContent = fs.readFileSync(storiesPath, 'utf8');
        // slug: "/musteri-hikayeleri/..." patternini bul
        const slugRegex = /slug:\s*["'](\/musteri-hikayeleri\/[^"']+)["']/g;
        let match;
        let storyCount = 0;
        while ((match = slugRegex.exec(storyContent)) !== null) {
            urls.push({
                url: match[1],
                priority: '0.8',
                changefreq: 'monthly'
            });
            storyCount++;
        }
        console.log(`${storyCount} müşteri hikayesi bulundu.`);
    }

    // Sitemap XML Oluştur
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    // Yeni üretilen optimize WebP görsellerini sitemap için oku
    const yeniIcerikDir = path.resolve('./public/assets/pages/yeni_icerik');
    const yeniSetDir = path.resolve('./public/assets/pages/yeni_set');
    let imagesXml = '';
    let totalImages = 0;

    if (fs.existsSync(yeniIcerikDir)) {
        const files = fs.readdirSync(yeniIcerikDir).filter(f => f.endsWith('.webp'));
        files.forEach(f => {
            imagesXml += `      <image:image>\n`;
            imagesXml += `         <image:loc>${SITE_URL}/assets/pages/yeni_icerik/${f}</image:loc>\n`;
            imagesXml += `         <image:title>PikselAI Yapay Zeka Kreatif AI Tasarimi ve Fotograf Uretimi</image:title>\n`;
            imagesXml += `      </image:image>\n`;
        });
        totalImages += files.length;
    }

    if (fs.existsSync(yeniSetDir)) {
        const files = fs.readdirSync(yeniSetDir).filter(f => f.endsWith('.webp'));
        files.forEach(f => {
            imagesXml += `      <image:image>\n`;
            imagesXml += `         <image:loc>${SITE_URL}/assets/pages/yeni_set/${f}</image:loc>\n`;
            imagesXml += `         <image:title>PikselAI E-Ticaret Yapay Zeka Urun Gorseli Kampanya Çekimi</image:title>\n`;
            imagesXml += `      </image:image>\n`;
        });
        totalImages += files.length;
    }
    console.log(`${totalImages} adet kreatif görsel sitemap.xml'e eklendi.`);

    urls.forEach(page => {
        xml += `   <url>\n`;
        xml += `      <loc>${SITE_URL}${page.url}</loc>\n`;
        xml += `      <lastmod>${today}</lastmod>\n`;
        xml += `      <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `      <priority>${page.priority}</priority>\n`;
        
        // Eğer sayfa '/islerimiz' ise, görselleri bu URL'in altına bağla
        if (page.url === '/islerimiz' && imagesXml) {
            xml += imagesXml;
        }
        
        xml += `   </url>\n`;
    });

    xml += `</urlset>\n`;

    // Dosyaya Yaz
    const publicPath = path.resolve('./public/sitemap.xml');
    fs.writeFileSync(publicPath, xml);
    console.log(`Sitemap başarıyla oluşturuldu! Toplam URL: ${urls.length} -> ${publicPath}`);
}

generateSitemap();
