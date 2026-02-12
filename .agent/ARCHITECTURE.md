# Antigravity Kiti Mimarisi

> **Sürüm 5.0** - Kapsamlı YZ Ajan Yetenek Genişletme Araç Kiti

---

## 📋 Genel Bakış

Antigravity Kiti, aşağıdakilerden oluşan modüler bir sistemdir:
- **16 Uzman Ajan** - Rol tabanlı YZ personaları
- **40 Yetenek** - Alana özgü bilgi modülleri
- **11 İş Akışı** - Slash komutu prosedürleri

---

## 🏗️ Klasör Yapısı

```
.agent/
├── ARCHITECTURE.md          # Bu dosya
├── agents/                  # 16 Uzman Ajan
├── skills/                  # 40 Yetenek
├── workflows/               # 11 Slash Komutları
├── rules/                   # Küresel Kurallar
└── .shared/                 # Paylaşılan Kaynaklar
```

---

## 🤖 Ajanlar (16)

Farklı alanlar için uzmanlaşmış YZ personaları.

| Ajan | Odak | Kullanılan Yetenekler |
|------|------|-----------------------|
| `orchestrator` | Çoklu ajan koordinasyonu | parallel-agents, behavioral-modes |
| `project-planner` | Keşif, görev planlama | brainstorming, plan-writing, architecture |
| `frontend-specialist` | Web UI/UX | frontend-design, react-patterns, tailwind-patterns |
| `backend-specialist` | API, iş mantığı | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Şema, SQL | database-design, prisma-expert |
| `mobile-developer` | iOS, Android, RN | mobile-design |
| `game-developer` | Oyun mantığı, mekanikler | game-development |
| `devops-engineer` | CI/CD, Docker | deployment-procedures, docker-expert |
| `security-auditor` | Güvenlik uyumluluğu | vulnerability-scanner, red-team-tactics |
| `penetration-tester` | Ofansif güvenlik | red-team-tactics |
| `test-engineer` | Test stratejileri | testing-patterns, tdd-workflow, webapp-testing |
| `debugger` | Kök neden analizi | systematic-debugging |
| `performance-optimizer` | Hız, Web Verileri (Vitals) | performance-profiling |
| `seo-specialist` | Sıralama, görünürlük | seo-fundamentals, geo-fundamentals |
| `documentation-writer` | Kılavuzlar, dokümanlar | documentation-templates |
| `explorer-agent` | Kod tabanı analizi | - |

---

## 🧠 Yetenekler (40)

Alana özgü bilgi modülleri. Yetenekler, görev bağlamına göre talep üzerine yüklenir.

### Frontend & Arayüz
| Yetenek | Açıklama |
|---------|----------|
| `react-patterns` | React hook'ları, durum yönetimi, performans |
| `nextjs-best-practices` | App Router, Sunucu Bileşenleri |
| `tailwind-patterns` | Tailwind CSS v4 araçları |
| `frontend-design` | UI/UX desenleri, tasarım sistemleri |
| `ui-ux-pro-max` | 50 stil, 21 palet, 50 font |

### Backend & API
| Yetenek | Açıklama |
|---------|----------|
| `api-patterns` | REST, GraphQL, tRPC |
| `nestjs-expert` | NestJS modülleri, DI, dekoratörler |
| `nodejs-best-practices` | Node.js asenkron yapı, modüller |
| `python-patterns` | Python standartları, FastAPI |

### Veritabanı
| Yetenek | Açıklama |
|---------|----------|
| `database-design` | Şema tasarımı, optimizasyon |
| `prisma-expert` | Prisma ORM, migrasyonlar |

### TypeScript/JavaScript
| Yetenek | Açıklama |
|---------|----------|
| `typescript-expert` | Tip seviyesinde programlama, performans |

### Bulut & Altyapı
| Yetenek | Açıklama |
|---------|----------|
| `docker-expert` | Konteynerizasyon, Compose |
| `deployment-procedures` | CI/CD, dağıtım iş akışları |
| `server-management` | Altyapı yönetimi |

### Test & Kalite
| Yetenek | Açıklama |
|---------|----------|
| `testing-patterns` | Jest, Vitest, stratejiler |
| `webapp-testing` | E2E, Playwright |
| `tdd-workflow` | Test güdümlü geliştirme |
| `code-review-checklist` | Kod inceleme standartları |
| `lint-and-validate` | Lintleme, doğrulama |

### Güvenlik
| Yetenek | Açıklama |
|---------|----------|
| `vulnerability-scanner` | Güvenlik denetimi, OWASP |
| `red-team-tactics` | Ofansif güvenlik |

### Mimari & Planlama
| Yetenek | Açıklama |
|---------|----------|
| `app-builder` | Full-stack uygulama iskeleti |
| `architecture` | Sistem tasarım desenleri |
| `plan-writing` | Görev planlama, kırılım |
| `brainstorming` | Socratic sorgulama |

### Mobil
| Yetenek | Açıklama |
|---------|----------|
| `mobile-design` | Mobil UI/UX desenleri |

### Oyun Geliştirme
| Yetenek | Açıklama |
|---------|----------|
| `game-development` | Oyun mantığı, mekanikler |

### SEO & Büyüme
| Yetenek | Açıklama |
|---------|----------|
| `seo-fundamentals` | SEO, E-E-A-T, Core Web Vitals |
| `geo-fundamentals` | Üretken Yapay Zeka optimizasyonu |

### Shell/CLI
| Yetenek | Açıklama |
|---------|----------|
| `bash-linux` | Linux komutları, betik yazma |
| `powershell-windows` | Windows PowerShell |

### Diğer
| Yetenek | Açıklama |
|---------|----------|
| `clean-code` | Kodlama standartları (Küresel) |
| `behavioral-modes` | Ajan personaları |
| `parallel-agents` | Çoklu ajan desenleri |
| `mcp-builder` | Model Bağlam Protokolü (MCP) |
| `documentation-templates` | Doküman formatları |
| `i18n-localization` | Uluslararasılaştırma |
| `performance-profiling` | Web Verileri (Vitals), optimizasyon |
| `systematic-debugging` | Sorun giderme |

---

## 🔄 İş Akışları (11)

Slash komutu prosedürleri. `/komut` ile çağrılır.

| Komut | Açıklama |
|-------|----------|
| `/brainstorm` | Sokratik keşif |
| `/create` | Yeni özellikler oluştur |
| `/debug` | Sorunları giderme (Debug) |
| `/deploy` | Uygulamayı dağıt |
| `/enhance` | Mevcut kodu geliştir |
| `/orchestrate` | Çoklu ajan koordinasyonu |
| `/plan` | Görev kırılımı |
| `/preview` | Değişiklikleri önizle |
| `/status` | Proje durumunu kontrol et |
| `/test` | Testleri çalıştır |
| `/ui-ux-pro-max` | 50 stil ile tasarım yap |

---

## 🎯 Yetenek Yükleme Protokolü

```
Kullanıcı İsteği → Yetenek Açıklaması Eşleşmesi → SKILL.md Yükle
                                                    ↓
                                            references/ oku
                                                    ↓
                                            scripts/ oku
```

### Yetenek Yapısı

```
yetenek-adi/
├── SKILL.md           # (Zorunlu) Metadata & talimatlar
├── scripts/           # (İsteğe bağlı) Python/Bash betikleri
├── references/        # (İsteğe bağlı) Şablonlar, dokümanlar
└── assets/            # (İsteğe bağlı) Görseller, logolar
```

### Gelişmiş Yetenekler (script/referans içeren)

| Yetenek | Dosyalar | Kapsam |
|---------|----------|--------|
| `typescript-expert` | 5 | Yardımcı tipler, tsconfig, kopya kağıdı |
| `ui-ux-pro-max` | 27 | 50 stil, 21 palet, 50 font |
| `app-builder` | 20 | Full-stack iskelet oluşturma |

---

## 📊 İstatistikler

| Metrik | Değer |
|--------|-------|
| **Toplam Ajan** | 16 |
| **Toplam Yetenek** | 40 |
| **Toplam İş Akışı** | 11 |
| **Kapsam** | ~%90 web/mobil geliştirme |

---

## 🔗 Hızlı Referans

| İhtiyaç | Ajan | Yetenekler |
|---------|------|------------|
| Web Uygulaması | `frontend-specialist` | react-patterns, nextjs-best-practices |
| API | `backend-specialist` | api-patterns, nodejs-best-practices |
| Mobil | `mobile-developer` | mobile-design |
| Veritabanı | `database-architect` | database-design, prisma-expert |
| Güvenlik | `security-auditor` | vulnerability-scanner |
| Test | `test-engineer` | testing-patterns, webapp-testing |
| Hata Ayıklama | `debugger` | systematic-debugging |
| Planlama | `project-planner` | brainstorming, plan-writing |
