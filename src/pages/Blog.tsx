import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Clock, User } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/Button"
import { cn } from "../lib/utils"

// Mock Data
const categories = ["Tümü", "Yapay Zeka", "Design Ops", "Marketing", "E-Ticaret"]

const featuredPost = {
    id: 1,
    category: "Yapay Zeka",
    title: "2026'da Generative AI'ın Tasarım Dünyasına Etkileri",
    excerpt: "Yapay zeka araçlarının yaratıcı süreçleri nasıl değiştirdiğini ve tasarımcıların rollerini nasıl dönüştürdüğünü derinlemesine inceliyoruz.",
    author: "Bekircan Sağnak",
    date: "10 Şubat 2026",
    readTime: "5 dk",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
}

const posts = [
    {
        id: 2,
        category: "Design Ops",
        title: "Ölçeklenebilir Tasarım Sistemleri Nasıl Kurulur?",
        excerpt: "Büyüyen ekipler için tutarlı ve sürdürülebilir bir tasarım dili oluşturmanın ipuçları.",
        author: "Zeynep Yılmaz",
        date: "8 Şubat 2026",
        readTime: "7 dk",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "Marketing",
        title: "Performans Pazarlamada AI Görsellerinin Gücü",
        excerpt: "CTR oranlarını %300 artıran yapay zeka destekli reklam kreatifleri.",
        author: "Can Demir",
        date: "5 Şubat 2026",
        readTime: "4 dk",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "E-Ticaret",
        title: "Ürün Fotoğrafçılığında Ghost Mannequin Dönemi",
        excerpt: "Maliyetleri düşüren ve hızı artıran yeni nesil ürün çekim teknikleri.",
        author: "Elif Kaya",
        date: "1 Şubat 2026",
        readTime: "6 dk",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "Yapay Zeka",
        title: "Midjourney ve Stable Diffusion: Hangisi Sizin İçin?",
        excerpt: "İki dev yapay zeka modelinin karşılaştırmalı analizi ve kullanım senaryoları.",
        author: "Bekircan Sağnak",
        date: "28 Ocak 2026",
        readTime: "8 dk",
        image: "https://images.unsplash.com/photo-1684369175853-7b566c3fc458?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 6,
        category: "Marketing",
        title: "2026 Sosyal Medya Trendleri",
        excerpt: "Kısa video içerikleri ve etkileşim odaklı stratejilerin yükselişi.",
        author: "Selin Y.",
        date: "25 Ocak 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    }
]

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("Tümü")

    const filteredPosts = activeCategory === "Tümü"
        ? posts
        : posts.filter(post => post.category === activeCategory)

    return (
        <div className="min-h-screen bg-white dark:bg-bor-primary-900 font-sans">
            <Header />

            {/* Hero / Featured Post */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-bor-primary-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-bor-secondary/10 text-bor-secondary text-sm font-bold tracking-wide">
                                {featuredPost.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold font-display text-bor-primary-900 dark:text-white leading-tight">
                                {featuredPost.title}
                            </h1>
                            <p className="text-lg text-bor-primary-600 dark:text-bor-primary-300 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-bor-primary-500 dark:text-bor-primary-400">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{featuredPost.author}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{featuredPost.readTime} okuma</span>
                                </div>
                            </div>
                            <Button size="lg" className="gap-2">
                                Okumaya Başla <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Filter */}
            <section className="sticky top-[72px] z-30 bg-white/80 dark:bg-bor-primary-900/80 backdrop-blur-md border-b border-bor-primary-100 dark:border-bor-primary-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                                    activeCategory === cat
                                        ? "bg-bor-primary-900 text-white dark:bg-white dark:text-bor-primary-900 shadow-md"
                                        : "bg-gray-100 text-bor-primary-600 hover:bg-gray-200 dark:bg-bor-primary-800 dark:text-bor-primary-300 dark:hover:bg-bor-primary-700"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer flex flex-col h-full bg-white dark:bg-bor-primary-800 rounded-xl overflow-hidden border border-bor-primary-100 dark:border-bor-primary-700 hover:border-bor-primary-300 dark:hover:border-bor-primary-600 transition-colors shadow-sm hover:shadow-lg"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold text-bor-secondary uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-bor-primary-400">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-bor-primary-900 dark:text-white mb-3 leading-tight group-hover:text-bor-secondary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-bor-primary-500 dark:text-bor-primary-400 mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-bor-primary-100 dark:border-bor-primary-700 mt-auto">
                                        <div className="flex items-center gap-2 text-xs font-medium text-bor-primary-600 dark:text-bor-primary-300">
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-bor-primary-400">
                                            <Clock size={14} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bor-primary-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-display">Geleceği Kaçırmayın</h2>
                    <p className="text-lg text-bor-primary-200">
                        En yeni yapay zeka trendleri, tasarım ipuçları ve sektörel raporlar için bültenimize abone olun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="flex-grow px-4 py-3 rounded-lg text-bor-primary-900 focus:outline-none focus:ring-2 focus:ring-bor-secondary"
                        />
                        <Button variant="secondary" className="bg-bor-secondary text-white hover:bg-bor-secondary/90">
                            Abone Ol
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
