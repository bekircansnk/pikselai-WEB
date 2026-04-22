import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    id: 'ai',
    title: 'Ai-Prodüksiyon',
    desc: 'Yapay zeka ile stüdyo ve manken maliyetlerini sıfırlayan gelecek nesil üretim.',
    path: '/hizmetler/ai-produksiyon',
    color: '#caf265'
  },
  {
    id: 'social',
    title: 'Sosyal Medya Yönetimi',
    desc: '360 derece kreatif topluluk yönetimi ve etkileşim odaklı içerik stratejileri.',
    path: '/hizmetler/sosyal-medya',
    color: '#ff7e5f'
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret Yönetimi',
    desc: 'Satış odaklı mağaza kurulumları, optimizasyon ve uçtan uca operasyon yönetimi.',
    path: '/hizmetler/e-ticaret',
    color: '#4facfe'
  }
];

const HeroAlternatives = () => {
  return (
    <div className="w-full relative py-8 space-y-24 overflow-hidden">
      {/* 1. CHOSEN TABLE SECTION (KREATİF 2) */}
      <div className="max-w-[1400px] mx-auto px-0 lg:px-4">
        <VersionTable />
      </div>

      {/* 2. MARQUEE SECTION */}
      <div className="w-full">
        <VersionMarquee />
      </div>
    </div>
  );
};

// --- CHOSEN VERSION: GLASS BLADE (ULTRA MINIMAL VERTICAL) ---
const VersionTable = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-2 h-auto md:h-[550px] w-full"
    >
      {services.map((s, i) => (
        <div 
          key={i} 
          onClick={() => navigate(s.path)}
          className="flex-1 relative group overflow-hidden bg-white/5 hover:flex-[1.8] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-x border-white/5 first:border-l-0 last:border-r-0 rounded-2xl md:rounded-none cursor-pointer"
        >
          {/* Subtle Background Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#caf265]/0 to-[#caf265]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="p-8 md:p-12 h-full flex flex-col justify-start relative z-10">
             {/* Title - Stays visible */}
             <h3 className="text-2xl md:text-4xl font-display text-white mb-6 leading-tight max-w-[200px] group-hover:text-[#caf265] transition-colors duration-500">
               {s.title}
             </h3>
             
             {/* Description - Reveals on hover */}
             <div className="mb-auto overflow-hidden">
                <p className="text-[#a8b8af] font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-8 group-hover:translate-y-0 text-sm md:text-base">
                   {s.desc}
                </p>
             </div>
             
             {/* Bottom Link Text (Replaces System Optimized) */}
             <div className="mt-8 flex items-center gap-3 text-[#caf265] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Hizmeti İncele</span>
                <ArrowUpRight size={16} />
             </div>
          </div>
          
          {/* Decorative side line on hover */}
          <div className="absolute left-0 top-0 w-1 h-full bg-[#caf265] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
        </div>
      ))}
    </motion.div>
  );
};

// --- MARQUEE COMPONENT ---
const MarqueeRow = ({ row }: { row: number }) => {
  const rotatedServices = row === 0 ? services : [...services.slice(1), ...services.slice(0, 1)];
  const content = (
    <div className="flex items-center gap-16 pr-16">
      {rotatedServices.map((s, j) => (
        <div key={j} className="flex items-center gap-6">
          <span className={`text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter ${row === 0 ? (j % 2 === 0 ? 'text-[#F4EFE6]' : 'text-[#caf265]') : (j % 2 !== 0 ? 'text-[#F4EFE6]' : 'text-[#caf265]')}`}>
            {s.title}
          </span>
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden flex whitespace-nowrap py-2 border-y border-white/5">
      <motion.div animate={{ x: row === 0 ? [0, "-50%"] : ["-50%", 0] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="flex">
        {Array.from({ length: 12 }).map((_, i) => (<div key={i}>{content}</div>))}
      </motion.div>
    </div>
  );
};

const VersionMarquee = () => {
  return (
    <div className="w-full space-y-4 py-8">
      <MarqueeRow row={0} /><MarqueeRow row={1} />
    </div>
  );
};

export default HeroAlternatives;
