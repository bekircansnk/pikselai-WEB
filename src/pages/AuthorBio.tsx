import { SEOHead } from '../components/seo/SEOHead';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthorBio = () => {
    return (
        <div className="min-h-screen bg-[#F4EFE6] selection:bg-[#caf265] selection:text-[#0b2117]">
            <SEOHead
                title="Bekir Sağnak — Kurucu & Kreatif Direktör | PikselAI"
                description="PikselAI Kurucusu Bekir Sağnak'ın biyografisi, yapay zeka destekli ürün fotoğrafçılığı ve e-ticaret deneyimleri."
                canonical="/yazar/bekir-sagnak"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "ProfilePage",
                    "mainEntity": {
                        "@type": "Person",
                        "name": "Bekir Sağnak",
                        "alternateName": "Bekir Can Sağnak",
                        "jobTitle": "Kurucu & Kreatif Direktör",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "PikselAI"
                        },
                        "url": "https://pikselai.com/yazar/bekir-sagnak",
                        "image": "https://pikselai.com/assets/common/bekir-sagnak.webp",
                        "sameAs": [
                            "https://www.linkedin.com/in/bekircansnk",
                            "https://www.instagram.com/sagnakbekircan"
                        ],
                        "knowsAbout": [
                            "Yapay Zeka Fotoğrafçılığı",
                            "E-ticaret Görsel Stratejileri",
                            "Kreatif Yönetim",
                            "Sosyal Medya Yönetimi"
                        ]
                    }
                }}
            />
            <Header transparent={false} lightText={false} />

            <main className="pt-32 pb-20">
                <Section className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Sol Taraf - Profil Fotoğrafı ve Linkler */}
                        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start shrink-0">
                            <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-2xl mb-6 bg-gradient-to-br from-[#0b2117] to-[#1a3a2a]">
                                {/* TODO: Gerçek fotoğraf eklenecek, şimdilik placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-[#caf265] text-6xl font-display italic">
                                    BS
                                </div>
                            </div>
                            <h1 className="text-3xl font-display italic text-[#0b2117] mb-2 text-center md:text-left">Bekir Sağnak</h1>
                            <p className="text-lg text-[#0b2117]/60 mb-6 text-center md:text-left">Kurucu & Kreatif Direktör</p>
                            
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/bekircansnk" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-[#0b2117] hover:bg-[#caf265] transition-colors shadow-sm">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/sagnakbekircan" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-[#0b2117] hover:bg-[#caf265] transition-colors shadow-sm">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="mailto:bekir@pikselai.com" className="p-3 bg-white rounded-full text-[#0b2117] hover:bg-[#caf265] transition-colors shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Sağ Taraf - İçerik */}
                        <div className="w-full md:w-2/3 prose prose-lg prose-p:text-[#0b2117]/80 prose-headings:text-[#0b2117] prose-headings:font-display prose-headings:italic">
                            <h2>Hakkında</h2>
                            <p>
                                Yapay zeka devrimini e-ticaret ve dijital üretim süreçlerine entegre eden PikselAI'ın kurucusu ve kreatif direktörü. Yıllardır markaların dijital görünürlüğünü, dönüşüm odaklı tasarım ve yapay zeka üretim teknikleriyle en üst düzeye çıkarmak için çalışıyor.
                            </p>
                            <p>
                                Özellikle "Yapay Zeka ile Ürün Fotoğrafçılığı" ve "Sanal Manken" teknolojilerinde öncü çözümler geliştirerek, stüdyo maliyetlerini düşürürken üretim hızını artıran sistemler inşa etti. E-ticaret dünyasında görselliğin gücüne inanan Bekir, markalara sadece fotoğraf değil, kapsamlı bir görsel kimlik stratejisi sunuyor.
                            </p>
                            
                            <h3>Uzmanlık Alanları</h3>
                            <ul className="list-disc pl-5 space-y-2 text-[#0b2117]/80">
                                <li>Yapay Zeka Destekli Ürün Fotoğrafçılığı ve Prodüksiyon</li>
                                <li>E-Ticaret Dönüşüm Optimizasyonu (CRO)</li>
                                <li>Marka Görsel Kimliği ve Tasarım Sistemleri</li>
                                <li>Kreatif Süreç Otomasyonları</li>
                            </ul>

                            <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-[#0b2117]/10">
                                <h3 className="mt-0 text-2xl">Son Yazıları</h3>
                                <ul className="mt-6 space-y-4 list-none pl-0">
                                    <li>
                                        <Link to="/blog/yapay-zeka-yaraticilik/urun-fotografciligi-rehberi" className="group flex items-center justify-between text-[#0b2117] hover:text-[#0b2117]/60 transition-colors no-underline">
                                            <span className="font-medium">2026 Ürün Fotoğrafçılığı Rehberi</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/dijital-pazarlama/ai-pazarlama-kampanyalari" className="group flex items-center justify-between text-[#0b2117] hover:text-[#0b2117]/60 transition-colors no-underline">
                                            <span className="font-medium">Yapay Zeka ile Pazarlama Kampanyaları</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
};

export default AuthorBio;
