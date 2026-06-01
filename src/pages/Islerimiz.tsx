import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { SEOHead, createOrganizationSchema, createBreadcrumbSchema } from '../components/seo/SEOHead';
import { X, Play, Pause, ChevronRight, MessageSquare, TrendingUp } from 'lucide-react';
import { ASSET_DATA } from '../data/assetData';

/* ── Types ── */
interface ProjectImage {
    url: string;
    type: 'image' | 'video';
    aspect?: 'square' | 'wide' | 'tall';
}

interface Project {
    id: number;
    title: string;
    client: string;
    category: string;
    thumbnail: string;
    thumbnailType?: 'single'; // Removed 'collage' for grid display
    collageImages?: string[]; // Array of 4 images if thumbnailType is 'collage'
    images: ProjectImage[];
    description: string;
    tags: string[];
    bgColor?: string;
}

/* ── Mock Data ── */
const categories = ['Tümü', 'E-Ticaret', 'Sosyal Medya', 'Ürün Fotoğrafçılığı', 'Kampanya', 'Hayalet Çekim'];

const stats = [
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '50+', label: 'Mutlu Marka' },
    { value: '%80', label: 'Maliyet Tasarrufu' },
    { value: '24-48s', label: 'Teslimat Süresi' },
];

const projects: Project[] = [
    {
        id: 1,
        title: 'Kış Kampanyası',
        client: 'Cazador',
        category: 'Kampanya',
        thumbnail: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador1.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador2.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador3.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/katalog_hero.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador4.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/ai_cazador.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/instagram_cazador.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador_moda_haki.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/cazador_kis_kampanyasi/cazador_siyah_pose.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Cazador kış koleksiyonu için hazırlanan kapsamlı kampanya görselleri. Katalog, sosyal medya ve e-ticaret kanallarını kapsayan bütünleşik prodüksiyon.",
        tags: ['Kampanya', 'Moda', 'Outdoor'],
        bgColor: '#1a2a1f'
    },
    {
        id: 3,
        title: 'Sosyal Medya İçerikleri',
        client: 'Mina Drinks',
        category: 'Sosyal Medya',
        thumbnail: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina1.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina_drink_1.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina_drink_2.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina3.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina2.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina4.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/sosyal_medya/mina_drinks_konsept/mina_drink_4.webp', type: 'image', aspect: 'wide' }
        ],
        description: "Mina Drinks içecek markası için hazırlanan AI destekli sosyal medya içerik paketleri. Reels, story ve feed görselleri dahil.",
        tags: ['Sosyal Medya', 'İçecek', 'Konsept'],
        bgColor: '#1c3a13'
    },
    {
        id: 4,
        title: 'Mina Drinks Ürün Çekimi',
        client: 'Mina Drinks',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina3.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina3.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina_drink_1.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina_drink_2.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina_drink_4.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina1.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina2.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/mina_drinks_urun/mina4.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Mina Drinks için hazırlanan yaratıcı ürün fotoğrafçılığı. Doğal ortam ve konsept stüdyo çekimleri.",
        tags: ['Ürün', 'İçecek', 'Stüdyo'],
        bgColor: '#1c3a13'
    },
    {
        id: 5,
        title: 'CampAndMap Outdoor',
        client: 'CampAndMap',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp1.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp_imaj_magic_hamak_4x5_scene_1_shot_1_arrival.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp_imaj_set1_4x5_scene_1_shot_3_wide.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp2.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp3.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/camp4.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/1_2k_auto_undefined.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/1_2k_4_5_undefined.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/urun_fotografciligi/campandmap_outdoor/2_2k_4_5_undefined.webp', type: 'image', aspect: 'tall' }
        ],
        description: "CampAndMap outdoor ekipman markası için AI ile üretilen doğa ve kamp temalı e-ticaret ve sosyal medya ürün görselleri.",
        tags: ['Outdoor', 'Kamp', 'Ürün'],
        bgColor: '#1a2612'
    },
    {
        id: 6,
        title: 'Rossea Eşarp Kampanyası',
        client: 'Rossea',
        category: 'Kampanya',
        thumbnail: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_1.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_1.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_2.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_3.webp', type: 'image', aspect: 'square' },
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_4.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_5.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/kampanya/rossea_esarp_kampanya/esarp_6.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Rossea eşarp markası için yapay zeka ile üretilen kampanya görselleri. Otantik Türk lokasyonlarında editorial tarz sanal manken çekimleri.",
        tags: ['Eşarp', 'Kampanya', 'Moda'],
        bgColor: '#2e1a1a'
    },
    {
        id: 7,
        title: 'Hayalet Manken Çekimleri',
        client: 'Ghost Mannequin',
        category: 'Hayalet Çekim',
        thumbnail: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_n.webp',
        thumbnailType: 'single',
        images: [
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/1_arka.webp', type: 'image', aspect: 'wide' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/3_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/3_arka.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/5_n.webp', type: 'image', aspect: 'tall' },
            { url: '/assets/pages/islerimiz/hayalet_cekim/cazador_ghost_set/5_arka.webp', type: 'image', aspect: 'tall' }
        ],
        description: "Markaların e-ticaret siteleri ve katalogları için hazırlanan, kıyafet formlarını 3 boyutlu ve gerçekçi gösteren kusursuz hayalet manken çekimleri.",
        tags: ['Ghost', 'Katalog', 'E-Ticaret', 'Hayalet Manken'],
        bgColor: '#1a1a1a'
    },
    {
        id: 8,
        title: 'Kreatif AI - Ürün Fotoğrafçılığı',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_icerik/pikselai_creative_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_icerik_urun?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "PikselAI laboratuvarlarında üretilen lüks kozmetik, parfüm ve premium içeceklerin yer aldığı yapay zeka tabanlı e-ticaret ürün fotoğrafçılığı çekimleri.",
        tags: ['Kreatif AI', 'Ürün Fotoğrafı', 'Stüdyo'],
        bgColor: '#080c0a'
    },
    {
        id: 9,
        title: 'Kreatif AI - Fütüristik & Soyut Sanat',
        client: 'PikselAI Lab',
        category: 'Kampanya',
        thumbnail: '/assets/pages/yeni_icerik/pikselai_creative_26.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_icerik_creative?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "PikselAI stüdyolarında üretilen fütüristik neon akışlar, holografik tasarımlar ve sürreal mimari AI sanat eserleri.",
        tags: ['Kreatif AI', 'Yapay Zeka', 'Soyut Sanat'],
        bgColor: '#0d0714'
    },
    {
        id: 10,
        title: 'Kreatif AI - Yüksek Moda & Kampanya',
        client: 'PikselAI Lab',
        category: 'Kampanya',
        thumbnail: '/assets/pages/yeni_icerik/pikselai_creative_51.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_icerik_moda?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Farklı dünya metropollerinde, Leica ve Fujifilm film dokusuyla üretilmiş hiper gerçekçi sanal manken yüksek moda çekimleri.",
        tags: ['Kreatif AI', 'Sanal Manken', 'Moda'],
        bgColor: '#0a0d14'
    },
    {
        id: 10,
        title: 'Kreatif AI - Yüksek Moda & Kampanya',
        client: 'PikselAI Lab',
        category: 'Kampanya',
        thumbnail: '/assets/pages/yeni_icerik/pikselai_creative_51.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_icerik_moda?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Farklı dünya metropollerinde, Leica ve Fujifilm film dokusuyla üretilmiş hiper gerçekçi sanal manken yüksek moda çekimleri.",
        tags: ['Kreatif AI', 'Sanal Manken', 'Moda'],
        bgColor: '#0a0d14'
    },
    {
        id: 11,
        title: 'Kreatif AI - Lüks Çanta Serisi',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set1_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_1?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Ayna labirentleri, cam yansımaları ve fütüristik stüdyolarda sunulan lüks çanta tasarımları.",
        tags: ['Çanta', 'Aksesuar', 'Lüks'],
        bgColor: '#080c09'
    },
    {
        id: 12,
        title: 'Kreatif AI - Yüksek Mücevherat & Pırlanta',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set2_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_2?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Altın kumlar, kristal mağaralar ve su altı ışık kırılmaları altında parıldayan pırlantalar ve lüks takı serisi.",
        tags: ['Mücevher', 'Pırlanta', 'Aksesuar'],
        bgColor: '#0c0b08'
    },
    {
        id: 13,
        title: 'Kreatif AI - Lüks İsviçre Saatleri',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set3_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_3?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Sıvı cıva dalgaları ve minimalist beton bloklar üzerinde sergilenen lüks İsviçre mekanik saatleri.",
        tags: ['Saat', 'Mekanik', 'Stüdyo'],
        bgColor: '#09090c'
    },
    {
        id: 14,
        title: 'Kreatif AI - Wabi-Sabi Seramik & Sofra',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set4_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_4?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "El boyaması porselen tabaklar ve wabi-sabi tarzı ham kilden üretilen seramik sofra sanatı serisi.",
        tags: ['Sofra Tasarımı', 'Seramik', 'Artisanal'],
        bgColor: '#0c0908'
    },
    {
        id: 15,
        title: 'Kreatif AI - Lüks Activewear & Spor Giyim',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set5_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_5?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Metropol neonları ve İzlanda buzulları fonunda sergilenen fütüristik ve teknik activewear mont ve tayt serisi.",
        tags: ['Activewear', 'Teknik Moda', 'Mont'],
        bgColor: '#080808'
    },
    {
        id: 16,
        title: 'Kreatif AI - Gastronomi & Gurme İçecekler',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set6_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_6?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Buz küpleri, meyve patlamaları ve lüks ambalaj tasarımları arasında sunulan niche gurme içecek kutuları.",
        tags: ['Gastronomi', 'İçecek', 'Gastronomi'],
        bgColor: '#080a08'
    },
    {
        id: 17,
        title: 'Kreatif AI - Minimalist Ev Dekorasyonu',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set7_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_7?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Brutalist beton nişler, modern abajurlar ve lüks keten sofralarla tasarlanmış minimalist ev aksesuarları.",
        tags: ['Ev Dekorasyon', 'Minimalist', 'Tasarım'],
        bgColor: '#090808'
    },
    {
        id: 18,
        title: 'Kreatif AI - Premium Parfüm & Kozmetik',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set8_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_8?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Mistik orman zeminleri ve cam fanuslar içinde sergilenen niche parfümler ve botanik serum şişeleri.",
        tags: ['Kozmetik', 'Parfüm', 'Serum'],
        bgColor: '#080c08'
    },
    {
        id: 19,
        title: 'Kreatif AI - Minimalist Sofra Sanatı',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set9_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_9?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Wabi-sabi esintili el yapımı seramik bardaklar, sunum tabakları ve keten peçetelerle bezenmiş lüks sofra sanatı.",
        tags: ['Seramik', 'Sofra Sanatı', 'Organik'],
        bgColor: '#0a0908'
    },
    {
        id: 20,
        title: 'Kreatif AI - Niche Parfüm Serisi',
        client: 'PikselAI Lab',
        category: 'Ürün Fotoğrafçılığı',
        thumbnail: '/assets/pages/yeni_set/pikselai_set10_01.webp',
        thumbnailType: 'single',
        images: (ASSET_DATA.pages.yeni_set_10?.files || []).map((url, index) => ({
            url,
            type: 'image' as const,
            aspect: (index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'square' : 'wide') as 'tall' | 'square' | 'wide'
        })),
        description: "Mistik ormanlar ve obsidyen taşlar üzerinde sergilenen lüks fütüristik parfüm ve kozmetik şişeleri.",
        tags: ['Parfüm', 'Kozmetik', 'Lüks'],
        bgColor: '#080c09'
    }
];


const Islerimiz = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorType, setCursorType] = useState<'dot' | 'exit'>('dot');

    // Cursor Motion
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const handleMouseMove = (e: React.MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    const filteredProjects = selectedCategory === 'Tümü'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedProject]);

    return (
        <div className="bg-white min-h-screen selection:bg-[#caf265] selection:text-[#0b2117]">
            <SEOHead
                title="İşlerimiz — PikselAI Portfolyo"
                description="Yapay zeka prodüksiyon süreçlerimizle hazırlanan en son projelerimiz, vaka çalışmaları ve yaratıcı çözümlerimiz."
                canonical="/islerimiz"
                ogImage="/assets/common/ca.webp"
                jsonLd={[
                    {
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        name: 'PikselAI Portfolyo — İşlerimiz',
                        description: 'Yapay zeka destekli profesyonel ürün fotoğrafçılığı, sosyal medya ve e-ticaret projelerimiz.',
                        url: 'https://pikselai.com/islerimiz',
                        provider: createOrganizationSchema()
                    },
                    createBreadcrumbSchema([
                        { name: 'Anasayfa', url: '/' },
                        { name: 'İşlerimiz', url: '/islerimiz' }
                    ])
                ]}
            />
            
            <div className="bg-[#0b2117]">
                <Header />
            </div>

            <main>
                {/* ── Hero Section (Video Background) ── */}
                <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-black overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                            src="https://cdn.pixabay.com/video/2024/02/09/199958-911694865_large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                    </div>

                    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-[#E2FF65]">
                                YAPTIĞIMIZ İŞLER
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight tracking-tight text-white mb-6 drop-shadow-2xl">
                                Yaratıcılık <br />
                                <span className="italic font-light text-[#E2FF65]">işe yarar</span>
                            </h1>

                            <button
                                onClick={togglePlay}
                                className="bg-white/10 backdrop-blur-md border border-white/30 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all duration-300 group"
                            >
                                {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                    >
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                            <div className="w-1 h-2 bg-white rounded-full" />
                        </div>
                    </motion.div>
                </div>

                {/* ─── SUBTITLE & STATS ─── */}
                <Section mood="light" width="narrow" className="py-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-lg md:text-xl font-light text-bor-primary-600 leading-relaxed text-center"
                    >
                        Türkiye'nin lider markalarına, AI destekli yaratıcı çözümlerle
                        hız ve kalitede fark yaratan prodüksiyonlar sunuyoruz — konseptten
                        uygulamaya, sonuca kadar.
                    </motion.p>
                </Section>

                <Section mood="gray" className="!py-12 bg-gray-50/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-5xl font-bold text-[#86AA00] mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* ── Category Filter Hub ── */}
                <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 py-6 overflow-x-auto">
                    <div className="flex justify-center min-w-max px-4">
                        <div className="flex gap-2 md:gap-4 bg-gray-100/50 p-1.5 rounded-full">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-black text-white shadow-lg'
                                        : 'text-gray-500 hover:text-black hover:bg-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Portfolio Grid ── */}
                <div className="bg-white min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layoutId={`project-container-${project.id}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`group relative cursor-none overflow-hidden bg-white aspect-[4/3] md:aspect-auto md:h-[600px]`}
                                    style={{ cursor: 'none' }}
                                    onClick={() => setSelectedProject(project)}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <motion.div
                                        className="w-full h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                                    >
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </motion.div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Info */}
                                    <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full pointer-events-none">
                                        <motion.h3
                                            layoutId={`project-title-${project.id}`}
                                            className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-2"
                                        >
                                            {project.client} <span className="text-white/50 text-2xl font-sans inline-block align-middle">+</span>
                                        </motion.h3>
                                        <p className="text-xs md:text-xs tracking-wider text-white/70">
                                            {project.category}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── Project Modal ── */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-[#050505]"
                            style={{ cursor: 'none' }}
                            onMouseMove={handleMouseMove}
                        >
                            <motion.div
                                className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center transform-gpu"
                                style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
                            >
                                {cursorType === 'exit' ? (
                                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                                        <span className="text-black text-sm font-medium">Çıkış</span>
                                    </div>
                                ) : (
                                    <div className="w-[24px] h-[24px] rounded-full bg-white shadow-lg" />
                                )}
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                onClick={() => setSelectedProject(null)}
                                className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all group"
                                style={{ cursor: 'none' }}
                                onMouseEnter={() => setCursorType('exit')}
                                onMouseLeave={() => setCursorType('dot')}
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                <span className="sr-only">Kapat</span>
                            </motion.button>

                            <motion.div
                                layoutId={`project-container-${selectedProject.id}`}
                                className="w-full h-full flex flex-col bg-[#050505]"
                                style={{ cursor: 'none' }}
                            >
                                <div
                                    className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar"
                                    style={{ cursor: 'none' }}
                                    onWheel={(e) => {
                                        if (e.currentTarget) {
                                            e.currentTarget.scrollLeft += e.deltaY;
                                        }
                                    }}
                                >
                                    <div className="h-full px-6 md:px-16 py-6 flex items-center space-x-3 md:space-x-6 min-w-max" style={{ cursor: 'none' }}>
                                        {(() => {
                                            const columns = [];
                                            const imgs = [...selectedProject.images];
                                            let imgIndex = 0;
                                            let patternIdx = 0;
                                            const pattern = ['big', 'stacked', 'wide', 'stacked'];

                                            while (imgIndex < imgs.length) {
                                                const currentPattern = pattern[patternIdx % pattern.length];
                                                if (currentPattern === 'stacked' && imgIndex + 1 < imgs.length) {
                                                    columns.push({ type: 'stacked', images: [imgs[imgIndex], imgs[imgIndex + 1]], startIndex: imgIndex });
                                                    imgIndex += 2;
                                                } else {
                                                    columns.push({ type: currentPattern === 'stacked' ? 'big' : currentPattern, images: [imgs[imgIndex]], startIndex: imgIndex });
                                                    imgIndex += 1;
                                                }
                                                patternIdx++;
                                            }

                                            return columns.map((col, colIndex) => (
                                                <div key={colIndex} className={`h-full shrink-0 flex flex-col ${col.type === 'stacked' ? 'w-[220px] md:w-[320px] space-y-3 md:space-y-6' : col.type === 'wide' ? 'w-[350px] md:w-[650px]' : 'w-[260px] md:w-[400px]'}`}>
                                                    {col.images.map((img, subIdx) => (
                                                        <motion.div key={`${colIndex}-${subIdx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * (col.startIndex + subIdx) }} className={`relative rounded-2xl md:rounded-[2.5rem] overflow-hidden group/img ${col.type === 'stacked' ? 'flex-1' : 'h-full'}`}>
                                                            <img src={img.url} alt={`${selectedProject.title} ${col.startIndex + subIdx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" loading="lazy" />
                                                            {col.startIndex === 0 && subIdx === 0 && (
                                                                <>
                                                                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent"></div>
                                                                    <div className="absolute top-10 left-10 text-white z-10 pr-10">
                                                                        <motion.span className="text-xs uppercase tracking-[0.3em] font-medium opacity-70 mb-2 block">Vaka Çalışması</motion.span>
                                                                        <h3 className="text-3xl md:text-5xl font-serif uppercase leading-[1.1] tracking-tight">{selectedProject.client} <br /> <span className="opacity-60">{selectedProject.title}</span></h3>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                </div>

                                <div
                                    className="shrink-0 px-8 md:px-16 py-6 md:py-8 border-t border-white/5"
                                    style={{ cursor: 'none' }}
                                    onMouseEnter={() => setCursorType('exit')}
                                    onMouseLeave={() => setCursorType('dot')}
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-16 max-w-screen-2xl mx-auto">
                                        <div className="shrink-0">
                                            <motion.h2 layoutId={`project-title-${selectedProject.id}`} className="text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-white mb-1">{selectedProject.client}</motion.h2>
                                            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-500 text-sm tracking-wide">{selectedProject.title}</motion.p>
                                        </div>
                                        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-2xl">{selectedProject.description}</motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── BOTTOM CTA ── */}
                <section className="bg-white py-32 px-6 md:px-16 lg:px-24 mb-1">
                    <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Soft Glow Effect */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full"></div>

                        <div className="relative z-10 max-w-xl text-center md:text-left">
                            <h2 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-[#F4EFE6] mb-8">
                                Markanı <br />
                                <span className="italic font-light text-[#E2FF65]">geleceğe taşıyalım.</span>
                            </h2>
                            <p className="text-[#a8b8af] mb-10 text-lg">
                                Yapay zeka prodüksiyonu ile tanışın. Süreçleri hızlandırın, maliyetleri düşürün ve etkileyici sonuçlar alın.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                                <button 
                                    onClick={() => window.location.href = '/iletisim'}
                                    className="bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 group"
                                >
                                    Proje Başlatalım
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="mailto:bilgi@pikselai.com" className="text-[#F4EFE6] font-medium border-b border-[#F4EFE6]/30 hover:border-[#caf265] hover:text-[#caf265] transition-all pb-1 flex items-center gap-2">
                                    <MessageSquare size={18} /> bilgi@pikselai.com
                                </a>
                            </div>
                        </div>

                        {/* Creative Visual Element */}
                        <div className="relative z-10 hidden md:block w-full max-w-xs aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full border-2 border-dashed border-[#caf265]/30 rounded-full flex items-center justify-center p-8"
                            >
                                <div className="w-full h-full border border-[#caf265]/50 rounded-full flex items-center justify-center">
                                    <div className="w-20 h-20 bg-[#caf265] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(202,242,101,0.4)]">
                                        <TrendingUp size={32} className="text-[#0b2117]" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="bg-[#0b2117]">
                <Footer />
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* ── Custom Cursor ── */}
            <motion.div
                className="fixed top-0 left-0 w-24 h-24 bg-gray-400/80 backdrop-blur-sm rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white font-bold text-sm tracking-widest uppercase transform-gpu"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0
                }}
            >
                İncele
            </motion.div>
        </div>
    );
};

export default Islerimiz;
