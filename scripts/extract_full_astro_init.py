
import re

html_file = 'www.superside.com/social-media-creative.html'
output_file = 'public/astro-init.js'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all script contents
# Use a regex that captures content between <script...> and </script>
script_pattern = r'<script[^>]*>(.*?)</script>'
scripts = re.findall(script_pattern, content, re.DOTALL)

valid_scripts = []
seen_scripts = set() 

keywords = [
    "astro:load",
    "customElements.define(\"astro-island\"",
    "astro:only",
    "astro:visible",
    "astro:idle",
    "section.relative", # For gradient fade
    "vercel-speed-insights" # Keep this too if found
]

print(f"Found {len(scripts)} script blocks total.")

for s in scripts:
    s = s.strip()
    if not s: continue
    
    # Check if this script contains any of our interesting keywords
    is_relevant = False
    for k in keywords:
        if k in s:
            is_relevant = True
            break
            
    if is_relevant:
        if s not in seen_scripts:
            # Clean up source mapping comments which might cause issues if joined
            s = re.sub(r'//# sourceMappingURL=.*', '', s)
            valid_scripts.append(s)
            seen_scripts.add(s)

# Combine
# Ensure strict separation with newlines and semicolons to avoid syntax errors
full_script = "// Extracted Astro Initialization Scripts\n" + "\n;\n".join(valid_scripts)

# Add styles
full_script += "\n\n// Inline Styles\nconst style = document.createElement('style'); style.textContent = 'astro-island,astro-slot,astro-static-slot{display:contents}'; document.head.append(style);"

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(full_script)

print(f"Extracted {len(valid_scripts)} scripts to {output_file}.")
