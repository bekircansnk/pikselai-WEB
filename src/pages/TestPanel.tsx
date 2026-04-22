import { Link } from 'react-router-dom';

const routes = [
  { path: '/', name: 'HomeYeni (Ana Sayfa)' },
  { path: '/hizmetler', name: 'ServicesHub (Hizmetler)' },
  { path: '/hizmetler/ai-produksiyon', name: 'AiProductionYeni (AI Prodüksiyon)' },
  { path: '/hizmetler/e-ticaret', name: 'EticaretYeni (E-Ticaret)' },
  { path: '/hizmetler/sosyal-medya', name: 'SosyalMedyaYeni (Sosyal Medya)' },
  { path: '/hizmetler/kreatif-tasarim', name: 'CreativeDesign' },
  { path: '/hakkimizda', name: 'About (Hakkımızda)' },
  { path: '/iletisim', name: 'Contact (İletişim)' },
  { path: '/ucretler', name: 'Pricing (Ücretler)' },
  { path: '/islerimiz', name: 'Islerimiz (İşlerimiz)' },
  { path: '/blog', name: 'Blog' },
  { path: '/musteri-hikayeleri', name: 'CustomerStories (Müşteri Hikayeleri)' },
  { path: '/blog/referanslar', name: 'CazadorCaseStudy' },
  { path: '/blog/mina-drinks', name: 'MinaDrinksCaseStudy' },
  { path: '/blog/venus', name: 'VenusCaseStudy' },
  { path: '/blog/campandmap', name: 'CampAndMapCaseStudy' },
  { path: '/fiyat-hesapla', name: 'CostCalculator (Fiyat Hesapla)' },

];

const TestPanel = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-400">Test Paneli (Geçici)</h1>
        <p className="mb-8 text-gray-400">Bu sayfa, tüm sayfalara hızlı erişim sağlamak için geçici olarak oluşturulmuştur.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route, index) => (
            <Link 
              key={index} 
              to={route.path}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-green-500 rounded-lg p-4 transition-all duration-200 group flex flex-col"
            >
              <span className="text-sm text-gray-500 mb-1">{route.path}</span>
              <span className="font-semibold text-lg group-hover:text-green-400 transition-colors">{route.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPanel;
