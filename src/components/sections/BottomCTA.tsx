import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export const BottomCTA = () => (
    <section className="bg-[#F4EFE6] py-20 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto bg-[#0b2117] rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#caf265]/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#caf265]/5 blur-[80px] rounded-full" />
            <div className="relative z-10 max-w-xl text-center md:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold font-display leading-tight text-[#F4EFE6] mb-6">
                    Markanızın geleceği <br />
                    <span className="italic font-light text-[#E2FF65]">bir mesaj uzağınızda</span>
                </h2>
                <p className="text-[#a8b8af] mb-10 text-lg">Hemen ücretsiz danışmanlık görüşmesi planlayalım ve dijital hedeflerinizi gerçeğe dönüştürelim.</p>
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-5">
                    <Link to="/iletisim" className="bg-[#caf265] text-[#0b2117] hover:bg-[#b5dc57] transition-all duration-300 rounded-full px-8 py-4 font-bold flex items-center gap-3 group">
                        İş Birliğine Başlayalım <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="mailto:bilgi@pikselai.com" className="text-[#F4EFE6] font-medium border-b border-[#F4EFE6]/30 hover:border-[#caf265] hover:text-[#caf265] transition-all pb-1 flex items-center gap-2">
                        <MessageSquare size={16} /> bilgi@pikselai.com
                    </a>
                </div>
            </div>
            <div className="relative z-10 hidden md:block w-full max-w-xs aspect-square shrink-0">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-full h-full border-2 border-dashed border-[#caf265]/30 rounded-full flex items-center justify-center p-8">
                    <div className="w-full h-full border border-[#caf265]/50 rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-[#caf265] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(202,242,101,0.4)]">
                            <TrendingUp size={32} className="text-[#0b2117]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)
