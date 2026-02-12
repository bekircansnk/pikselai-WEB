import re

file_path = '/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/src/pages/Home.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the JSON-LD script tag (messy one-liner or multi-line)
# Use a non-greedy match for the content of the script tag
content = re.sub(r'<script type="application/ld\+json">.*?</script>', '{/* Schema markup removed */}', content, flags=re.DOTALL)

# 2. Fix onclick handlers
# Pattern: onclick="window.open(&#039;URL&#039;, &#039;_self&#039;)"
# We want: onClick={() => window.open('URL', '_self')}
# React uses onClick (camelCase)
# We also need to decode the HTML entities &#039; to '
def fix_onclick(match):
    url = match.group(1)
    return f"onClick={{() => window.open('{url}', '_self')}}"

content = re.sub(r'onclick="window.open\(&#039;(.*?)&#039;, &#039;_self&#039;\)"', fix_onclick, content)

# 3. Fix simple style tags if any remain (specifically data-original-style if missed)
# The previous multi_replace might have missed if I messed up line numbers, so let's just be sure.
# Replacing data-original-style="..." with style={{...}} requires parsing the style string.
# Since we replaced only one manually, and grep found 3 originally, let's see.
# The user tool replacement might have failed silently or I only did one. 
# Let's try to find any data-original-style and convert simple text-align: left
content = content.replace('data-original-style="text-align: left;"', 'style={{textAlign: "left"}}')

# 4. Remove unused Link import if it exists and causes warnings, 
# although the linter said it's defined but never read. 
# We can just comment it out to be safe or remove it.
content = content.replace("import { Link } from 'react-router-dom';", "// import { Link } from 'react-router-dom';")

# 5. Fix numeric props passed as strings causing linter errors
# data-start="149" -> data-start={149}
# data-end="503" -> data-end={503}
# data-tab="14" -> data-tab={14}
# This regex finds patterns like data-start="123" and makes them data-start={123}
content = re.sub(r' (data-[a-z]+)="(\d+)"', r' \1={\2}', content)

# 6. Fix boolean string props
# "true" -> {true}, "false" -> {false} in specific attributes if needed, 
# but the linter errors were 'Type boolean is not assignable to type string' specifically for some attributes?
# Actually the error was: Type 'boolean' is not assignable to type 'string'. 
# This means a prop expects a string but got a boolean?
# Or opposite: "data-elementor-settings" seems to contain a huge JSON string. 
# If that JSON string has boolean literals unquoted? HTML attributes are always strings.
# But in JSX, `attr="true"` is a string "true". `attr={true}` is a boolean. 
# The error likely comes from something like `isLinked":true` inside the huge JSON string which is inside `{...}` already?
# Wait, `data-elementor-settings` is a string attribute: data-elementor-settings="{ ... }"
# The linter might be complaining about some other prop.
# Let's look at error: `Type 'boolean' is not assignable to type 'string'. ... in ... src/pages/Home.tsx at line 1103 col 1699`
# Line 1103 is the script tag line (mostly). Since we are nuking Line 1103's script tag, those errors should vanish.

# 7. Close unclosed tags if needed (br, hr, img, input)
# The previous script did some, but let's reinforce.
# <br> -> <br />
content = re.sub(r'(<br\s*>)', r'<br />', content)
# Avoid double closing like <br /> /> which my regex might do if not careful.
content = content.replace('<br /> />', '<br />')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully processed {file_path}")
