import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Star } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/Button"

const stories = [
    {
        id: "cazador",
        client: "Cazador",
        industry: "Moda & Tekstil",
        title: "Yapay Zeka ile Moda Fotoğrafçılığında Devrim",
        description: "Geleneksel fotoğraf çekimi maliyetlerini %80 düşürürken, ürün görselleştirme hızını 10 kat artırdık.",
        image: "/Cazador-Foto/13300-Siyah (8)_scene_1_pose_5(3).webp",
        tags: ["AI Prodüksiyon", "Katalog", "Verimlilik"],
        link: "/blog/referanslar" // Mevcut Cazador case study sayfasına yönlendirme
    },
    {
        id: "tech-flow",
        client: "TechFlow",
        industry: "Yazılım",
        title: "B2B SaaS Pazarlamasında %200 Lead Artışı",
        description: "Programatik SEO ve AI destekli içerik stratejisi ile organik trafikte rekor büyüme.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        tags: ["Dijital Büyüme", "SEO", "Lead Gen"],
        link: "#"
    },
    {
        id: "green-life",
        client: "GreenLife",
        industry: "E-Ticaret",
        title: "Dönüşüm Odaklı UX Tasarımı ve Sepet İyileştirme",
        description: "Kullanıcı deneyimini yeniden tasarlayarak sepet terk oranlarını %45 azalttık.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        tags: ["UX/UI", "Web Geliştirme", "E-Ticaret"],
        link: "#"
    }
]

export default function CustomerStories() {
    return (
        <div className="min-h-screen bg-white dark:bg-bor-primary-900 font-sans">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-bor-primary-900 dark:text-white mb-6">
                            Müşteri Başarı Hikayeleri
                        </h1>
                        <p className="text-xl text-bor-primary-600 dark:text-bor-primary-300 max-w-3xl mx-auto leading-relaxed">
                            Markaların PikselAI teknolojileri ve stratejileriyle nasıl büyüdüğünü,
                            maliyetlerini düşürdüğünü ve dijital dönüşümlerini gerçekleştirdiğini keşfedin.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Story (Cazador) */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-bor-primary-800/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12 rounded-3xl overflow-hidden bg-white dark:bg-bor-primary-900 shadow-xl border border-bor-primary-100 dark:border-bor-primary-800">
                        <div className="md:w-1/2 h-full min-h-[400px]">
                            <img
                                src="Cazador-Foto/10600-HAKİ_2K_4_5_Editorial fashion photography. Exterior location, winter day. The specific male model stands naturally beside a frosted black iron park railing covered in thick snow. He wears the olive green Cazador puffer jacket, b (10).webp"
                                alt="Cazador Case Study"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 space-y-6">
                            <div className="flex items-center gap-2 text-bor-secondary font-bold uppercase tracking-wider text-sm">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Öne Çıkan Hikaye</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-bor-primary-900 dark:text-white">
                                Cazador: Moda Fotoğrafçılığında AI Dönüşümü
                            </h2>
                            <p className="text-lg text-bor-primary-600 dark:text-bor-primary-300">
                                Geleneksel stüdyo çekimlerine kıyasla 10 kat daha hızlı ve %80 daha düşük maliyetli
                                yapay zeka destekli prodüksiyon süreci.
                            </p>
                            <div className="grid grid-cols-2 gap-6 py-4">
                                <div>
                                    <div className="text-3xl font-bold text-bor-secondary">%80</div>
                                    <div className="text-sm text-bor-primary-500">Maliyet Tasarrufu</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-bor-secondary">10x</div>
                                    <div className="text-sm text-bor-primary-500">Hız Artışı</div>
                                </div>
                            </div>
                            <Link to="/blog/referanslar">
                                <Button size="lg" className="gap-2">
                                    Hikayeyi Oku <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 text-bor-primary-900 dark:text-white">Daha Fazla Başarı Hikayesi</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map((story) => (
                            <motion.div
                                key={story.id}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-bor-primary-800 rounded-xl overflow-hidden border border-bor-primary-100 dark:border-bor-primary-700 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-bor-secondary uppercase tracking-wider">
                                            {story.industry}
                                        </span>
                                        <span className="text-xs font-medium text-bor-primary-400">
                                            {story.client}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-bor-primary-900 dark:text-white leading-tight">
                                        <Link to={story.link} className="hover:text-bor-secondary transition-colors">
                                            {story.title}
                                        </Link>
                                    </h3>
                                    <p className="text-bor-primary-500 dark:text-bor-primary-400 text-sm line-clamp-3">
                                        {story.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {story.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-bor-primary-50 dark:bg-bor-primary-900 rounded-md text-bor-primary-600 dark:text-bor-primary-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to={story.link}
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-bor-secondary hover:underline pt-2"
                                    >
                                        İncele <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
