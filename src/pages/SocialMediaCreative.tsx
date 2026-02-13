import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import {
    ArrowRight, PlayCircle,
    Clock, Zap, Globe, Star,
    Plus, Minus,
    Layers, Users,
    Image as ImageIcon, Video
} from 'lucide-react';
import { useState } from 'react';

const SocialMediaCreative = () => {
    const navigate = useNavigate();

    // Accordion State
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <MainLayout transparentHeader={true} headerLightText={true}>
            <div className="bg-[#050505] text-[#f4f4f0] min-h-screen font-sans selection:bg-[#ccff00] selection:text-black">

                {/* ═══════════════════════════════════════════
                   1. HERO SECTION
                   ═══════════════════════════════════════════ */}
                <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Noise & Gradients */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-[#2a1b3d] via-[#1a0b2e] to-transparent rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-[#0f2e1b] via-[#0a1f12] to-transparent rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-block mb-6 text-[#ccff00] font-medium tracking-wider uppercase text-xs md:text-sm border border-[#ccff00]/20 px-4 py-1.5 rounded-full bg-[#ccff00]/5 backdrop-blur-sm"
                            >
                                SOCIAL MEDIA CREATIVE SERVICES
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1] tracking-tight mb-8 text-white"
                            >
                                Scroll-stopping campaigns, <br />
                                <span className="italic text-[#f4f4f0]/80">built fast and on brand</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-[#a1a1aa] max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                            >
                                Manage social volume without the complexity. Right team, right tech, all in one.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <Button
                                    className="h-16 px-10 rounded-full text-lg font-semibold bg-[#ccff00] text-black hover:bg-[#b3e600] border-0 transition-transform hover:scale-105"
                                    onClick={() => navigate('/iletisim')}
                                >
                                    Book a demo
                                </Button>
                                <Button
                                    className="h-16 px-10 rounded-full text-lg font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 backdrop-blur-md transition-all"
                                    onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    See capabilities
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Infinite Scroll Logos */}
                    <div className="mt-24 border-t border-white/10 pt-12 overflow-hidden">
                        <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] mb-8 font-medium">Trusted by 450+ ambitious brands</p>
                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="text-2xl font-bold font-serif px-4">BOOKING.COM</span>
                                <span className="text-2xl font-bold font-serif px-4">AMAZON</span>
                                <span className="text-2xl font-bold font-serif px-4">SALESFORCE</span>
                                <span className="text-2xl font-bold font-serif px-4">SHOPIFY</span>
                                <span className="text-2xl font-bold font-serif px-4">REDDIT</span>
                                <span className="text-2xl font-bold font-serif px-4">META</span>
                                <span className="text-2xl font-bold font-serif px-4">GOOGLE</span>
                                <span className="text-2xl font-bold font-serif px-4">TIKTOK</span>
                                {/* Duplicate for loop */}
                                <span className="text-2xl font-bold font-serif px-4">BOOKING.COM</span>
                                <span className="text-2xl font-bold font-serif px-4">AMAZON</span>
                                <span className="text-2xl font-bold font-serif px-4">SALESFORCE</span>
                                <span className="text-2xl font-bold font-serif px-4">SHOPIFY</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                   2. VALUE PROPS (Grid)
                   ═══════════════════════════════════════════ */}
                <section className="py-32 bg-[#080808] border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-6">
                                    Social media creative built for <br />
                                    <span className="text-[#ccff00] italic">performance and brand</span>
                                </h2>
                            </div>
                            <div>
                                <p className="text-xl text-[#a1a1aa] leading-relaxed">
                                    Superside is a subscription service that helps you scale your social media creative.
                                    We combine the top 1% of global talent with purpose-built technology to deliver faster,
                                    better, and more efficiently than traditional agencies or freelancers.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Globe className="w-8 h-8" />,
                                    title: "Scalable output",
                                    desc: "Need 50 resized assets or a full campaign motion video? We handle volume without compromising quality."
                                },
                                {
                                    icon: <Clock className="w-8 h-8" />,
                                    title: "Fast turnaround",
                                    desc: "Most projects are delivered within 12-24 hours. Speed that keeps up with the social feed."
                                },
                                {
                                    icon: <Star className="w-8 h-8" />,
                                    title: "Top 1% global talent",
                                    desc: "Access a dedicated team of world-class designers, motion animators, and art directors selected for your brand."
                                },
                                {
                                    icon: <Layers className="w-8 h-8" />,
                                    title: "Fully managed service",
                                    desc: "Your dedicated Project Manager handles the logistics, so you can focus on strategy and results."
                                },
                                {
                                    icon: <Zap className="w-8 h-8" />,
                                    title: "Tech-enabled efficiency",
                                    desc: "Our platform streamlines briefing, feedback, and asset management, making collaboration effortless."
                                },
                                {
                                    icon: <Users className="w-8 h-8" />,
                                    title: "Predictable pricing",
                                    desc: "No hourly billing or surprise costs. Just a simple, transparent monthly subscription."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#ccff00]/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white/5 text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif mb-4 text-white">{item.title}</h3>
                                    <p className="text-[#888] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                   3. CAPABILITIES LIST
                   ═══════════════════════════════════════════ */}
                <section id="capabilities" className="py-32 bg-[#050505]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <span className="text-[#ccff00] text-sm uppercase tracking-widest font-bold mb-4 block">CAPABILITIES</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                                All your social media <br /> creative needs, sorted.
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Motion Design", list: ["Reels & TikTok Edits", "Logo Animation", "Character Animation"], icon: <PlayCircle /> },
                                { title: "Social Media Video", list: ["UGC Videos", "Product Promos", "Event Recaps"], icon: <Video /> },
                                { title: "Static Social Design", list: ["Instagram Carousels", "LinkedIn Posts", "Story Templates"], icon: <ImageIcon /> },
                                { title: "Illustration Design", list: ["Digital Illustration", "Infographics", "Icon Sets"], icon: <Layers /> },
                                { title: "Campaign Concepts", list: ["Creative Strategy", "Visual Identity", "Launch Campaigns"], icon: <Zap /> },
                                { title: "AR & 3D Design", list: ["Instagram Filters", "3D Product Modeling", "Virtual Environments"], icon: <Globe /> }
                            ].map((service, i) => (
                                <div key={i} className="bg-[#151515] p-8 rounded-3xl border border-white/5 hover:bg-[#1a1a1a] transition-all">
                                    <div className="mb-6 text-[#ccff00]">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <ul className="space-y-3">
                                        {service.list.map((li, k) => (
                                            <li key={k} className="flex items-center text-[#888] text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full mr-3"></div>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                   4. RELATED ARTICLES (Examples)
                   ═══════════════════════════════════════════ */}
                <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif text-white">
                                What social-at-scale <br />
                                <span className="italic text-[#888]">looks like for real teams</span>
                            </h2>
                            <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/yaptigimiz-isler')}>
                                View all work <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Point Card: Scaling ad concepts 10x faster", sub: "Fintech Growth", color: "bg-[#2a1b3d]" },
                                { title: "Puma: Global campaign localization", sub: "Retail Brand", color: "bg-[#0f2e1b]" },
                                { title: "Reddit: Building a business brand identity", sub: "Tech Platform", color: "bg-[#3d1b1b]" }
                            ].map((article, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className={`aspect-[4/3] rounded-2xl ${article.color} mb-6 overflow-hidden relative border border-white/5`}>
                                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all"></div>
                                    </div>
                                    <span className="text-[#ccff00] text-xs font-bold uppercase tracking-wider mb-2 block">{article.sub}</span>
                                    <h3 className="text-xl font-medium text-white group-hover:underline decoration-[#ccff00] underline-offset-4 leading-tight">
                                        {article.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                   5. FAQ SECTION
                   ═══════════════════════════════════════════ */}
                <section className="py-32 bg-[#050505]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 text-center">
                            Frequently asked questions, <br /><span className="italic text-[#ccff00]">answered.</span>
                        </h2>

                        <div className="space-y-4">
                            {[
                                { q: "Is social media design included in my subscription?", a: "Absolutely! Superside design subscriptions include social media creative services. All our creative capabilities are available within your chosen subscription tier." },
                                { q: "What is the minimum commitment?", a: "Superside subscriptions require a one-year commitment. We focus on annual plans because our services are most effective for ongoing creative needs rather than one-off projects." },
                                { q: "How does the process work?", a: "Social media creative services operate by strategically enhancing a brand's online presence. Superside’s process begins with developing a deep understanding of your objectives and target audiences." },
                                { q: "Why is Superside better than other services?", a: "Your dedicated creative project manager helps you tap into a highly skilled talent base that spans the globe—including experts trained in motion, video, AI, AR, and 3D." },
                                { q: "Do you do custom plans?", a: "Yes! We develop a budget that aligns if you have larger and more complex needs. Otherwise, all plans are identical, giving you full access to everything you need." }
                            ].map((item, i) => (
                                <div key={i} className="border-b border-white/10">
                                    <button
                                        className="w-full py-8 flex justify-between items-center text-left hover:text-[#ccff00] transition-colors group"
                                        onClick={() => toggleFaq(i)}
                                    >
                                        <span className="text-xl md:text-2xl font-serif text-white group-hover:text-[#ccff00] transition-colors">{item.q}</span>
                                        <span className="bg-white/5 p-2 rounded-full group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                                            {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </span>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[#a1a1aa] text-lg leading-relaxed pb-8 pr-12">{item.a}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════
                   6. CTA / FOOTER BANNER
                   ═══════════════════════════════════════════ */}
                <section className="py-40 bg-[#ccff00] text-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter">
                            Your creative team’s <br />
                            <span className="italic block mt-2">creative team™</span>
                        </h2>

                        <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
                            Book a demo to see how we can help you scale your social media creative.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <input
                                type="email"
                                placeholder="Business email"
                                className="h-16 px-8 rounded-full border-2 border-black/10 bg-white/50 backdrop-blur-sm text-black placeholder:text-black/50 focus:outline-none focus:border-black w-full md:w-96 text-lg"
                            />
                            <Button
                                className="h-16 px-12 rounded-full text-xl font-bold bg-black text-white hover:bg-black/80 hover:scale-105 transition-all shadow-2xl"
                                onClick={() => navigate('/iletisim')}
                            >
                                Book a demo
                            </Button>
                        </div>

                        <p className="mt-8 text-sm font-medium opacity-60">
                            Trusted by 1500+ brands. No credit card required.
                        </p>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default SocialMediaCreative;
