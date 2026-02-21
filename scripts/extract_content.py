import sys
from bs4 import BeautifulSoup
import json

html_path = "/Users/bekir/Music/KİŞİSEL PROJELER/www.superside.com/ai-excellence.html"
with open(html_path, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")

main = soup.find("main")
if not main:
    print("No main tag found")
    sys.exit(0)

sections = main.find_all("section", recursive=False)
if not sections:
    # bazen section yerine div>div de olabilir.
    divs = main.find_all("div", recursive=False)
    sections = divs

data = []

for i, sec in enumerate(sections):
    headings = [h.get_text(strip=True) for h in sec.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])]
    texts = [p.get_text(strip=True) for p in sec.find_all("p")]
    images = [img.get("src") for img in sec.find_all("img") if img.get("src")]
    videos = [v.get("src") for v in sec.find_all("video") if v.get("src")]
    classes = sec.get("class", [])
    
    data.append({
        "section_index": i,
        "classes": " ".join(classes),
        "headings": [h for h in headings if h],
        "texts": [t for t in texts if t][:10],
        "images": images,
        "videos": videos
    })

with open("ai_excellence_structure.json", "w", encoding="utf-8") as out:
    json.dump(data, out, indent=2, ensure_ascii=False)

print("Saved to ai_excellence_structure.json")
