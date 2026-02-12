---
name: bash-linux
description: Bash/Linux terminal desenleri. Kritik komutlar, borulama (piping), hata yönetimi, script yazma. macOS veya Linux sistemlerinde çalışırken kullanın.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Bash Linux Desenleri

> Linux/macOS üzerinde Bash için temel desenler.

---

## 1. Operatör Sözdizimi

### Komut Zincirleme

| Operatör | Anlamı | Örnek |
|----------|--------|-------|
| `;` | Sırayla çalıştır | `cmd1; cmd2` |
| `&&` | Önceki başarılıysa çalıştır | `npm install && npm run dev` |
| `\|\|` | Önceki başarısızsa çalıştır | `npm test \|\| echo "Testler başarısız"` |
| `\|` | Çıktıyı borula (pipe) | `ls \| grep ".js"` |

---

## 2. Dosya İşlemleri

### Temel Komutlar

| Görev | Komut |
|-------|-------|
| Tümünü listele | `ls -la` |
| Dosya bul | `find . -name "*.js" -type f` |
| Dosya içeriği | `cat file.txt` |
| İlk N satır | `head -n 20 file.txt` |
| Son N satır | `tail -n 20 file.txt` |
| Logu izle | `tail -f log.txt` |
| Dosyalarda ara | `grep -r "desen" --include="*.js"` |
| Dosya boyutu | `du -sh *` |
| Disk kullanımı | `df -h` |

---

## 3. Süreç (Process) Yönetimi

| Görev | Komut |
|-------|-------|
| Süreçleri listele | `ps aux` |
| İsme göre bul | `ps aux \| grep node` |
| PID ile öldür | `kill -9 <PID>` |
| Port kullanıcısını bul | `lsof -i :3000` |
| Portu öldür | `kill -9 $(lsof -t -i :3000)` |
| Arka plan | `npm run dev &` |
| İşler (Jobs) | `jobs -l` |
| Öne getir | `fg %1` |

---

## 4. Metin İşleme

### Temel Araçlar

| Araç | Amaç | Örnek |
|------|------|-------|
| `grep` | Ara | `grep -rn "TODO" src/` |
| `sed` | Değiştir | `sed -i 's/eski/yeni/g' file.txt` |
| `awk` | Sütun çıkar | `awk '{print $1}' file.txt` |
| `cut` | Alan kes | `cut -d',' -f1 data.csv` |
| `sort` | Satırları sırala | `sort -u file.txt` |
| `uniq` | Benzersiz satırlar | `sort file.txt \| uniq -c` |
| `wc` | Say | `wc -l file.txt` |

---

## 5. Ortam Değişkenleri (Environment Variables)

| Görev | Komut |
|-------|-------|
| Tümünü görüntüle | `env` veya `printenv` |
| Birini görüntüle | `echo $PATH` |
| Geçici ayarla | `export VAR="deger"` |
| Script içinde ayarla | `VAR="deger" komut` |
| PATH'e ekle | `export PATH="$PATH:/yeni/yol"` |

---

## 6. Ağ (Network)

| Görev | Komut |
|-------|-------|
| İndir | `curl -O https://example.com/file` |
| API isteği | `curl -X GET https://api.example.com` |
| JSON POST | `curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' URL` |
| Port kontrolü | `nc -zv localhost 3000` |
| Ağ bilgisi | `ifconfig` veya `ip addr` |

---

## 7. Script Şablonu

```bash
#!/bin/bash
set -euo pipefail  # Hata, tanımsız değişken, pipe hatasında çık

# Renkler (isteğe bağlı)
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Script dizini
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Fonksiyonlar
log_info() { echo -e "${GREEN}[BİLGİ]${NC} $1"; }
log_error() { echo -e "${RED}[HATA]${NC} $1" >&2; }

# Ana
main() {
    log_info "Başlatılıyor..."
    # Mantığınız burada
    log_info "Bitti!"
}

main "$@"
```

---

## 8. Yaygın Desenler

### Komut var mı kontrol et

```bash
if command -v node &> /dev/null; then
    echo "Node yüklü"
fi
```

### Varsayılan değişken değeri

```bash
NAME=${1:-"varsayilan_deger"}
```

### Dosyayı satır satır oku

```bash
while IFS= read -r line; do
    echo "$line"
done < file.txt
```

### Dosyalar üzerinde döngü

```bash
for file in *.js; do
    echo "İşleniyor $file"
done
```

---

## 9. PowerShell'den Farklar

| Görev | PowerShell | Bash |
|-------|------------|------|
| Dosyaları listele | `Get-ChildItem` | `ls -la` |
| Dosya bul | `Get-ChildItem -Recurse` | `find . -type f` |
| Ortam | `$env:VAR` | `$VAR` |
| Dize birleştirme | `"$a$b"` | `"$a$b"` (aynı) |
| Null kontrolü | `if ($x)` | `if [ -n "$x" ]` |
| Boru hattı | Nesne tabanlı | Metin tabanlı |

---

## 10. Hata Yönetimi

### Seçenekleri ayarla

```bash
set -e          # Hata durumunda çık
set -u          # Tanımsız değişkende çık
set -o pipefail # Pipe hatasında çık
set -x          # Hata ayıklama: komutları yazdır
```

### Temizlik için Trap

```bash
cleanup() {
    echo "Temizleniyor..."
    rm -f /tmp/tempfile
}
trap cleanup EXIT
```

---

> **Unutma:** Bash metin tabanlıdır. Başarı zincirleri için `&&`, güvenlik için `set -e` kullan ve değişkenlerini tırnak içine al!
