import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const Home = () => {
	const navigate = useNavigate();

	return (
		<MainLayout transparentHeader={true} headerLightText={true}>

			{/* ═══════════════════════════════════════════════════════════════
			    HERO — Full-width banner with AI face visual
			    ═══════════════════════════════════════════════════════════════ */}
			<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bor-primary-900">
				{/* Background Image */}
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000"
						alt="AI Creative"
						className="w-full h-full object-cover opacity-60"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-bor-primary-900 via-bor-primary-900/80 to-transparent" />
				</div>

				<div className="container-custom relative z-10 py-32 md:py-40">
					<div className="max-w-2xl space-y-8">
						<span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary">
							AI Excellence
						</span>

						<h1 className="text-5xl md:text-7xl font-display leading-[1.1]">
							<span className="text-white italic">AI</span>
							<span className="text-white"> is the new</span>
							<br />
							<span className="text-bor-secondary italic">creative standard</span>
						</h1>

						<p className="text-lg md:text-xl text-bor-primary-300 max-w-lg leading-relaxed">
							Stüdyo yok, manken yok, beklemek yok. Yapay zeka ile e-ticaret görsellerinizde devrim.
							Dünya standartlarında kreatif üretim, geleneksel maliyetin %80 altında.
						</p>

						<div className="flex flex-wrap gap-4 pt-4">
							<Button
								size="lg"
								className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-14 text-lg"
								onClick={() => navigate('/iletisim')}
							>
								Demo Talep Et
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-14 text-lg"
								onClick={() => navigate('/hizmetler')}
							>
								Hizmetleri Gör
							</Button>
						</div>
					</div>
				</div>

				{/* Made with AI badge */}
				<div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/70 italic">
					Made with AI
				</div>
			</section>

			{/* ═══════════════════════════════════════════════════════════════
			    DEĞER ÖNERMESİ — 3 sütunlu metrik grid
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="light" className="py-20 md:py-28">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">Neden PikselAI?</span>
					<h2 className="text-3xl md:text-5xl font-display font-bold text-bor-primary-900">
						Geleneksel ajansların yapamadığını yapıyoruz
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 md:gap-12">
					<ValueCard
						metric="%80"
						label="Daha Ucuz"
						description="Fiziksel stüdyo, manken ve ekip maliyetini ortadan kaldırıyoruz. Aynı kalitede görsel, çok daha düşük bütçeyle."
					/>
					<ValueCard
						metric="24-48s"
						label="İçinde Teslim"
						description="Haftalar süren süreçleri saatlere indirdik. Ürün fotoğrafınız aynı gün hazır."
					/>
					<ValueCard
						metric="∞"
						label="Varyasyon"
						description="Tek ürün için 10 farklı arka plan, sahne ve konsept. Hangi görselin sattırdığını test edin."
					/>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    SOLUTIONS FOR MODERN TEAMS — Split layout  
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="dark" className="py-0">
				<div className="grid md:grid-cols-2 min-h-[600px]">
					{/* Text */}
					<div className="flex flex-col justify-center py-16 md:py-24 pr-0 md:pr-16">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary mb-6">
							Modern Ekipler İçin Çözümler
						</span>
						<h2 className="text-3xl md:text-5xl font-display leading-tight text-white mb-6">
							AI'nin yaratıcı <br />
							<span className="italic">avantajına kısayolunuz</span>
						</h2>
						<p className="text-lg text-bor-primary-300 leading-relaxed mb-10 max-w-lg">
							Daha hızlı, daha ucuz ve daha az kaynak ile daha fazlasını yapma baskısı altındasınız.
							İşte tam burada devreye giriyoruz.
						</p>

						<div className="grid grid-cols-2 gap-8">
							<FeaturePoint
								title="Zaman ve Para Tasarrufu"
								description="3.000+ proje tamamladık, müşterilerimize milyonlarca TL tasarruf sağladık."
							/>
							<FeaturePoint
								title="İnsan + AI İş Akışı"
								description="Tüm kreatiflerimiz AI sertifikalı. Marka uyumunu koruyarak hızlı hareket ediyoruz."
							/>
						</div>
					</div>

					{/* Image */}
					<div className="relative min-h-[400px] md:min-h-0">
						<img
							src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
							alt="Modern workspace"
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</div>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    AI-POWERED CREATIVE PRODUCTION — Bento Grid
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="light" className="py-24">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-primary-500 block mb-4">
						HAYDI KONUŞALIM
					</span>
					<h2 className="text-3xl md:text-5xl font-display text-bor-primary-900">
						<span className="italic">AI-powered</span> creative production
					</h2>
					<p className="text-bor-primary-500 mt-4 max-w-2xl mx-auto">
						Görsel düzenlemeden video üretimine kadar AI, gerçek yaratıcı zorlukları nasıl çözdüğümüzün temel parçası.
					</p>
					<div className="mt-6">
						<Button className="bg-bor-primary-900 text-white rounded-full px-8 h-12 hover:bg-bor-primary-800" onClick={() => navigate('/iletisim')}>
							Demo Talep Et
						</Button>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{/* Row 1 */}
					<ProductionCard
						label="STÜDYO YOK, ÇEKİM YOK"
						title="AI video prodüksiyon"
						description="Senaryo yazımından yeni görüntü üretimine kadar AI destekli prodüksiyon, sürecin her aşamasında verimlilik sağlar."
						image="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
						dark
					/>
					<ProductionCard
						label="MARKANIZIN YÜZÜ"
						title="Sanal manken tasarımı"
						description="AI ile markanıza özel dijital modeller oluşturun. Tutarlı, maliyet-etkin ve her zaman hazır."
						image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
						dark
					/>
					<ProductionCard
						label="HER AÇIDAN GÖRÜN"
						title="Ürün görselleri"
						description="Her sezon yeni çekim mi? Artık değil. AI ile ürün görselleri, mevsimsel mockup'lar anında hazır."
						image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80"
						dark
					/>

					{/* Row 2 */}
					<ProductionCard
						label="ÖLÇEKLENDİR"
						title="Görsel iyileştirme"
						description="AI temizler, iyileştirir, yükseltir. Renk düzeltme, estetik tutarlılık, marka uyumu — hepsi otomatik."
						image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80"
					/>
					<ProductionCard
						label="DİLLERİNDE KONUŞ"
						title="Çeviri ve uyarlama"
						description="Mesajınızı yerelleştirilmiş görseller ve çeşitli dillerde global kitlelere ulaştırın."
						image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
					/>
					<ProductionCard
						label="TUTARLILIKLA ÖLÇEKLENDİR"
						title="Toplu üretim"
						description="Sıfırdan başlamanıza gerek yok. Binlerce görseli çok kanallı kullanım için uyarlayın."
						image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
					/>

					{/* Row 3 — Spanning */}
					<div className="md:col-span-2">
						<ProductionCard
							label="TAMAMEN MARKAYA UYGUN"
							title="Marka görselleri"
							description="Soyuttan fotorealistik'e, her seferinde markaya uygun görseller. Kullanım ücreti yok, çekim yok, gecikme yok."
							image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80"
						/>
					</div>
					<ProductionCard
						label="GÖRSEL A/B TESTİ"
						title="10 farklı konsept, 1 ürün"
						description="Hangi fotoğrafın sattıracağını tahmin etmeyin — 10 varyasyon üretip test edin."
						image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
					/>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    HİZMET VİTRİNİ — 3 Kategori Kartı
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="dark" className="py-24">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">
						Hizmetlerimiz
					</span>
					<h2 className="text-3xl md:text-5xl font-display text-white">
						İhtiyacınıza özel <span className="italic">çözümler</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<ServiceCategoryCard
						title="AI Prodüksiyon"
						description="Ürün fotoğrafçılığı, sanal manken tasarımı, AI video & reels. Fiziksel çekimin tüm avantajları, maliyetinin %20'si."
						features={["Ghost Mannequin", "Sanal Manken Ajansı", "AI Video & Reels", "Görsel A/B Testi"]}
						image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80"
						onClick={() => navigate('/hizmetler/ai-produksiyon')}
					/>
					<ServiceCategoryCard
						title="Dijital Büyüme"
						description="E-ticaret yönetimi, SEO & içerik otomasyonu, sosyal medya yönetimi. Satışlarınızı veriye dayalı büyütün."
						features={["E-Ticaret Yönetimi", "SEO & İçerik Otomasyonu", "Sosyal Medya Yönetimi", "Programatik SEO"]}
						image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
						onClick={() => navigate('/hizmetler/dijital-buyume')}
					/>
					<ServiceCategoryCard
						title="Dijital Katalog & Web"
						description="İnteraktif kataloglar, landing page tasarımı. Ürünlerinizi en etkileyici şekilde sergileyin."
						features={["İnteraktif Kataloglar", "Landing Page Tasarımı", "Web Geliştirme", "UI/UX Tasarım"]}
						image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
						onClick={() => navigate('/hizmetler/katalog-web')}
					/>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    SEKTÖRLER
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="light" className="py-24">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-primary-500 block mb-4">SEKTÖRLER</span>
					<h2 className="text-3xl md:text-5xl font-display text-bor-primary-900">
						Hangi sektörde olursanız olun
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<SectorCard
						title="Moda & Tekstil"
						description="Ghost mannequin, lookbook, katalog çekimi. Giyimkent'ten global pazarlara."
						image="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80"
						highlighted
					/>
					<SectorCard
						title="Kozmetik & Güzellik"
						description="Ürün görselleri, lifestyle çekim, paket tasarımı. Lüks görünüm, akıllı bütçe."
						image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80"
					/>
					<SectorCard
						title="Aksesuar & Takı"
						description="Detay çekim, 360° görüntüleme, konsept sahneleme. Her detayı öne çıkarın."
						image="https://images.unsplash.com/photo-1515562141589-67f0d89b7a68?auto=format&fit=crop&q=80"
					/>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    NASIL ÇALIŞIR? — 4 Adım
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="dark" className="py-24">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">SÜREÇ</span>
					<h2 className="text-3xl md:text-5xl font-display text-white">Nasıl çalışır?</h2>
				</div>

				<div className="grid md:grid-cols-4 gap-8">
					<ProcessStep number="01" title="Ürünü Gönder" description="Ürününüzü kargolayın veya mevcut fotoğraflarınızı yükleyin." />
					<ProcessStep number="02" title="AI Modelini Seç" description="Ghost mannequin, sanal manken veya konsept sahne seçin." />
					<ProcessStep number="03" title="Konsepti Belirle" description="Arka plan, ışık, sahne ve stil tercihlerinizi belirtin." />
					<ProcessStep number="04" title="Teslim Al" description="24-48 saat içinde profesyonel görselleriniz hazır." />
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    TESTİMONİAL
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="light" className="py-24">
				<div className="grid md:grid-cols-12 gap-12 items-center">
					<div className="md:col-span-4 flex flex-col items-center gap-6">
						<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-bor-primary-100">
							<img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Client 1" className="w-full h-full object-cover grayscale opacity-60" />
						</div>
						<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-bor-secondary shadow-xl z-10">
							<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Main Client" className="w-full h-full object-cover" />
						</div>
						<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-bor-primary-100">
							<img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" alt="Client 3" className="w-full h-full object-cover grayscale opacity-60" />
						</div>
					</div>

					<div className="md:col-span-8">
						<h3 className="text-2xl font-bold text-bor-primary-900 uppercase tracking-widest mb-8">CAZADOR</h3>
						<blockquote className="text-3xl md:text-4xl font-display font-medium leading-tight text-bor-primary-900 mb-8">
							"PikselAI ile çalışmak bizim için kritik öneme sahipti. Zamanında kaliteli iş teslim edebilen, kısa süreli bildirimlerde bile <span className="text-bor-secondary font-bold">güvenebileceğimiz bir ekip.</span>"
						</blockquote>
						<div>
							<cite className="not-italic text-lg font-bold text-bor-primary-900 block">Fatih Erdoğan</cite>
							<span className="text-bor-primary-500">Pazarlama ve İletişim Müdürü, Cazador</span>
						</div>
						<div className="flex gap-12 mt-12 pt-12 border-t border-bor-primary-200">
							<div>
								<div className="text-4xl font-bold text-bor-primary-900">100+</div>
								<div className="text-sm text-bor-primary-500">Tasarım Projesi</div>
							</div>
							<div>
								<div className="text-4xl font-bold text-bor-primary-900">24-48s</div>
								<div className="text-sm text-bor-primary-500">Teslim Süresi</div>
							</div>
							<div>
								<div className="text-4xl font-bold text-bor-primary-900">%80</div>
								<div className="text-sm text-bor-primary-500">Maliyet Avantajı</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    WHY PIKSELAI — 3 big cards
			    ═══════════════════════════════════════════════════════════════ */}
			<Section mood="dark" className="py-24">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-[0.2em] text-bor-secondary block mb-4">NEDEN PİKSELAI</span>
					<h2 className="text-3xl md:text-5xl font-display text-white">
						En iyi ekiplerin neden <span className="italic">PikselAI kullandığını</span> görün
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<WhyCard
						title="Kreatif ekibimiz"
						image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
						cta="Ekibi tanı"
						onClick={() => navigate('/hakkimizda')}
					/>
					<WhyCard
						title="Teknolojimiz"
						image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
						cta="Daha fazla"
						onClick={() => navigate('/hizmetler')}
					/>
					<WhyCard
						title="Çalışmalarımız"
						image="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
						cta="Portfolyoyu gör"
						onClick={() => navigate('/referanslar')}
					/>
				</div>
			</Section>

			{/* ═══════════════════════════════════════════════════════════════
			    CTA + FOOTER UNIFIED
			    ═══════════════════════════════════════════════════════════════ */}
			<Section className="pt-24 pb-0 text-center relative z-10" mood="dark">
				<div className="max-w-4xl mx-auto space-y-8 mb-24">
					<h2 className="text-4xl md:text-6xl font-display font-medium text-white italic">
						Better rates <span className="not-italic font-sans font-bold">than hiring <br /> designers in-house</span>
					</h2>
					<p className="text-xl text-bor-primary-300 max-w-2xl mx-auto">
						Kurum içi tasarımcı işe almanın maliyetiyle karşılaştırıldığında, PikselAI çok daha ekonomik bir alternatif.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" className="bg-bor-secondary hover:bg-bor-secondary/90 text-white rounded-full px-8 h-12" onClick={() => navigate('/iletisim')}>
							Demo Talep Et
						</Button>
						<Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 h-12" onClick={() => navigate('/ucretler')}>
							Ücretleri Gör
						</Button>
					</div>
				</div>
				<div className="w-full h-px bg-white/10" />
			</Section>
		</MainLayout>
	);
};

/* ═══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function ValueCard({ metric, label, description }: { metric: string; label: string; description: string }) {
	return (
		<div className="text-center md:text-left p-8 rounded-2xl border border-bor-primary-100 hover:border-bor-secondary/30 transition-colors group">
			<div className="text-5xl md:text-6xl font-bold font-display text-bor-secondary mb-2 group-hover:scale-105 transition-transform origin-left">{metric}</div>
			<div className="text-xl font-bold text-bor-primary-900 mb-3">{label}</div>
			<p className="text-bor-primary-500 leading-relaxed">{description}</p>
		</div>
	);
}

function FeaturePoint({ title, description }: { title: string; description: string }) {
	return (
		<div>
			<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bor-secondary">
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
				</svg>
			</div>
			<h4 className="text-lg font-bold text-white mb-2">{title}</h4>
			<p className="text-bor-primary-400 text-sm leading-relaxed">{description}</p>
		</div>
	);
}

function ProductionCard({ label, title, description, image, dark = false }: { label: string; title: string; description: string; image: string; dark?: boolean }) {
	return (
		<div className={`rounded-2xl overflow-hidden border group cursor-pointer transition-colors h-full ${dark ? 'bg-bor-primary-900 border-bor-primary-700 hover:border-bor-secondary/50 text-white' : 'bg-white border-bor-primary-100 hover:border-bor-secondary/30'}`}>
			<div className="p-6">
				<span className={`text-[10px] font-bold uppercase tracking-[0.15em] block mb-2 ${dark ? 'text-bor-primary-400' : 'text-bor-primary-500'}`}>{label}</span>
				<h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-bor-primary-900'}`}>{title}</h3>
				<p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-bor-primary-300' : 'text-bor-primary-500'}`}>{description}</p>
			</div>
			<div className="aspect-[16/10] overflow-hidden">
				<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
			</div>
		</div>
	);
}

function ServiceCategoryCard({ title, description, features, image, onClick }: { title: string; description: string; features: string[]; image: string; onClick: () => void }) {
	return (
		<div
			className="group relative overflow-hidden rounded-3xl cursor-pointer ring-1 ring-white/10 hover:ring-bor-secondary/50 transition-all h-[550px]"
			onClick={onClick}
		>
			<img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
			<div className="absolute inset-0 p-8 flex flex-col justify-end">
				<h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
				<p className="text-white/80 mb-6 leading-relaxed">{description}</p>
				<ul className="space-y-2 mb-6">
					{features.map((f, i) => (
						<li key={i} className="text-white/60 text-sm flex items-center gap-2">
							<span className="text-bor-secondary">→</span> {f}
						</li>
					))}
				</ul>
				<span className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
					Detayları Gör <span className="text-xl">↗</span>
				</span>
			</div>
		</div>
	);
}

function SectorCard({ title, description, image, highlighted = false }: { title: string; description: string; image: string; highlighted?: boolean }) {
	return (
		<div className={`group relative overflow-hidden rounded-2xl cursor-pointer h-[400px] ${highlighted ? 'ring-2 ring-bor-secondary' : 'ring-1 ring-bor-primary-200'} transition-all hover:ring-bor-secondary`}>
			<img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
			<div className="absolute inset-0 p-8 flex flex-col justify-end">
				{highlighted && <span className="text-xs font-bold uppercase tracking-widest text-bor-secondary mb-2">ÖNE ÇIKAN</span>}
				<h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
				<p className="text-white/70 text-sm">{description}</p>
			</div>
		</div>
	);
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
	return (
		<div className="text-center group">
			<div className="text-5xl font-bold font-display text-bor-secondary/30 group-hover:text-bor-secondary transition-colors mb-4">{number}</div>
			<h4 className="text-xl font-bold text-white mb-3">{title}</h4>
			<p className="text-bor-primary-400 text-sm leading-relaxed">{description}</p>
		</div>
	);
}

function WhyCard({ title, image, cta, onClick }: { title: string; image: string; cta: string; onClick: () => void }) {
	return (
		<div className="group relative overflow-hidden rounded-3xl cursor-pointer h-[450px]" onClick={onClick}>
			<img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 p-8">
				<h3 className="text-2xl font-bold text-bor-secondary mb-2">{title}</h3>
				<span className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
					{cta} <span className="text-xl">↗</span>
				</span>
			</div>
		</div>
	);
}

export default Home;
