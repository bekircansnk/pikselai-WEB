# GEMINI.md - Maestro Configuration

> Maestro AI Development Orchestrator
> This file defines how the AI behaves in this workspace.

---

## 🇹🇷 KESİN KURAL: DİL ZORUNLULUĞU (CRITICAL: LANGUAGE RULE)

> **MANDATORY:** Bu projedeki tüm iletişim, planlama, düşünme (thought process hariç kullanıcıya görünen kısımlar), dosya isimleri (kod hariç), **KOD YORUMLARI VE KOD İÇİ AÇIKLAMALAR** dahil her şey **TÜRKÇE** olmak zorundadır. Antigravity her zaman bu kurala uymalıdır.

---

## CRITICAL: AGENT & SKILL PROTOCOL (START HERE)

> **MANDATORY:** You MUST read the appropriate agent file and its skills BEFORE performing any implementation. This is the highest priority rule.

### 1. Modular Skill Loading Protocol

```
Agent activated → Check frontmatter "skills:" field
    │
    └── For EACH skill:
        ├── Read SKILL.md (INDEX only)
        ├── Find relevant sections from content map
        └── Read ONLY those section files
```

- **Selective Reading:** DO NOT read ALL files in a skill folder. Read `SKILL.md` first, then only read sections matching the user's request.
- **Rule Priority:** P0 (GEMINI.md) > P1 (Agent .md) > P2 (SKILL.md). All rules are binding.

### 2. Enforcement Protocol

1. **When agent is activated:**
   - ✅ READ all rules inside the agent file.
   - ✅ CHECK frontmatter `skills:` list.
   - ✅ LOAD each skill's `SKILL.md`.
   - ✅ APPLY all rules from agent AND skills.
2. **Forbidden:** Never skip reading agent rules or skill instructions. "Read → Understand → Apply" is mandatory.

---

## 📥 REQUEST CLASSIFIER (STEP 2)

**Before ANY action, classify the request:**

| Request Type     | Trigger Keywords                           | Active Tiers                   | Result                      |
| ---------------- | ------------------------------------------ | ------------------------------ | --------------------------- |
| **QUESTION**     | "what is", "how does", "explain"           | TIER 0 only                    | Text Response               |
| **SURVEY/INTEL** | "analyze", "list files", "overview"        | TIER 0 + Explorer              | Session Intel (No File)     |
| **SIMPLE CODE**  | "fix", "add", "change" (single file)       | TIER 0 + TIER 1 (lite)         | Inline Edit                 |
| **COMPLEX CODE** | "build", "create", "implement", "refactor" | TIER 0 + TIER 1 (full) + Agent | **{task-slug}.md Required** |
| **DESIGN/UI**    | "design", "UI", "page", "dashboard"        | TIER 0 + TIER 1 + Agent        | **{task-slug}.md Required** |
| **SLASH CMD**    | /create, /orchestrate, /debug              | Command-specific flow          | Variable                    |

---

## TIER 0: UNIVERSAL RULES (Always Active)

### 🌐 Dil Protokolü (Language Protocol)

**Varsayılan Dil:** Türkçe (Turkish)

1. **İletişim ve Sistem:** Tarafımdan üretilen tüm sistem mesajları, yanıtlar, açıklamalar ve proje planları **TÜRKÇE** olmak zorundadır. Kullanıcı farklı bir dilde yazsa dahi cevap dili Türkçedir.
2. **Git Commitleri ve Versiyonlama (ÖNEMLİ):** Git'e kod yüklerken yazılan **TÜM COMMIT MESAJLARI** kesinlikle **TÜRKÇE** olmak zorundadır (Örn: `git commit -m "düzeltme: menüdeki kayma sorunu çözüldü"`). Asla İngilizce commit mesajı (fix, feat, chore vb. terimler içeren İngilizce metinler) kullanılamaz.
3. **Kodlama:** Değişken isimleri gibi temel kod bileşenleri uluslararası standartlar gereği İngilizce kalabilir, ancak koda eklenecek tüm yorum satırları ve belgeler Türkçe olmalıdır.

### 🧹 Clean Code (Global Mandatory)

**ALL code MUST follow `@[skills/clean-code]` rules. No exceptions.**

- Concise, direct, solution-focused
- No verbose explanations
- No over-commenting
- No over-engineering
- **Self-Documentation:** Every agent is responsible for documenting their own changes in relevant `.md` files.
- **Global Testing Mandate:** Every agent is responsible for writing and running tests for their changes. Follow the "Testing Pyramid" (Unit > Integration > E2E) and the "AAA Pattern" (Arrange, Act, Assert).
- **Global Performance Mandate:** "Measure first, optimize second." Every agent must ensure their changes adhere to 2025 performance standards (Core Web Vitals for Web, query optimization for DB, bundle limits for FS).
- **Infrastructure & Safety Mandate:** Every agent is responsible for the deployability and operational safety of their changes. Follow the "5-Phase Deployment Process" (Prepare, Backup, Deploy, Verify, Confirm/Rollback). Always verify environment variables and secrets security.

### 📁 File Dependency Awareness

**Before modifying ANY file:**

1. Check `CODEBASE.md` → File Dependencies
2. Identify dependent files
3. Update ALL affected files together

### 🗺️ System Map Read

> 🔴 **MANDATORY:** Read `ARCHITECTURE.md` at session start to understand Agents, Skills, and Scripts.

**Path Awareness:**

- Agents: `.agent/` (Project)
- Skills: `.agent/skills/` (Project)
- Runtime Scripts: `.agent/skills/<skill>/scripts/`

### 🧠 Read → Understand → Apply

```
❌ WRONG: Read agent file → Start coding
✅ CORRECT: Read → Understand WHY → Apply PRINCIPLES → Code
```

**Before coding, answer:**

1. What is the GOAL of this agent/skill?
2. What PRINCIPLES must I apply?
3. How does this DIFFER from generic output?

### 🚀 Git & GitHub Yükleme Kuralı (Critical Override)

> 🔴 **MANDATORY:** Git işlemlerinde (add, commit, push), projeyi indirecek **diğer geliştiricilerin** ihtiyacı olmayan ve SADECE mevcut kullanıcının lokal ortamına/ai asistanına özel olan dosyaları **KESİNLİKLE yükleme**.

**Özel Dosyalar ve Klasörler YASAK:**
- `node_modules/` (Zaten .gitignore'da olmalı)
- `.agent/` klasörü ve içindeki tüm yapay zeka/otomasyon yetenekleri, promptlar
- `GEMINI.md`, `ARCHITECTURE.md`, `CODEBASE.md` gibi lokal ajana hizmet eden rehber dosyalar
- `.env` ve benzeri gizli yapılandırmalar
- İşletim sistemi kalıntıları (DS_Store vb.)

**Uygulama Adımları (Git Push Öncesi):**
1. `git status` veya `git add` yapmadan önce, projenin *çalışması için* gerekli olmayan dosyaların dahil olup olmadığını kontrol et.
2. Gereksiz bir dosya varsa onlara dokunma, hatta `.gitignore` içerisine ekle.
3. Her zaman kendini sorgula: *"Bu dosya benim lokal LLM işlemlerim için mi var, yoksa takım arkadaşımın/projenin yaşamı için şart mı?"* Cevap ilk seçenekse onu repo'dan ayır.

---
