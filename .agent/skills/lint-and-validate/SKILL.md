---
name: lint-and-validate
description: Otomatik kalite kontrol, linting ve statik analiz prosedürleri. Sözdizimi doğruluğunu ve proje standartlarını sağlamak için her kod değişikliğinden sonra kullanın. Tetikleyiciler: lint, format, check, validate, types, static analysis.
allowed-tools: Read, Glob, Grep, Bash
---

# Lint ve Doğrulama Yeteneği

> **ZORUNLU:** HER kod değişikliğinden sonra uygun doğrulama araçlarını çalıştırın. Kod hatasız olana kadar bir görevi bitirmeyin.

### Ekosisteme Göre Prosedürler

#### Node.js / TypeScript
1. **Lint/Düzelt:** `npm run lint` veya `npx eslint "path" --fix`
2. **Tipler:** `npx tsc --noEmit`
3. **Güvenlik:** `npm audit --audit-level=high`

#### Python
1. **Linter (Ruff):** `ruff check "path" --fix` (Hızlı & Modern)
2. **Güvenlik (Bandit):** `bandit -r "path" -ll`
3. **Tipler (MyPy):** `mypy "path"`

## Kalite Döngüsü
1. **Kodu Yaz/Düzenle**
2. **Denetimi Çalıştır:** `npm run lint && npx tsc --noEmit`
3. **Raporu Analiz Et:** "FINAL AUDIT REPORT" bölümünü kontrol et.
4. **Düzelt & Tekrarla:** "FINAL AUDIT" başarısızlıklarıyla kod göndermek yasaktır.

## Hata Yönetimi
- `lint` başarısız olursa: Stil veya sözdizimi sorunlarını hemen düzeltin.
- `tsc` başarısız olursa: Devam etmeden önce tip uyuşmazlıklarını düzeltin.
- Hiçbir araç yapılandırılmamışsa: Proje kökünde `.eslintrc`, `tsconfig.json`, `pyproject.toml` kontrol edin ve oluşturmayı önerin.

---
**Katı Kural:** Bu kontrolleri geçmeden hiçbir kod commit edilmemeli veya "bitti" olarak raporlanmamalıdır.

---

## Scriptler

| Script | Amaç | Komut |
|--------|------|-------|
| `scripts/lint_runner.py` | Birleştirilmiş lint kontrolü | `python scripts/lint_runner.py <proje_yolu>` |
| `scripts/type_coverage.py` | Tip kapsamı analizi | `python scripts/type_coverage.py <proje_yolu>` |
