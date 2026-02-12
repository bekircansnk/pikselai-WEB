import re
import os

def convert_html_to_jsx(html_content):
    jsx = html_content
    
    # Basic replacements
    jsx = jsx.replace('class=', 'className=')
    jsx = jsx.replace('srcset=', 'srcSet=')
    jsx = jsx.replace('colspan=', 'colSpan=')
    jsx = jsx.replace('rowspan=', 'rowSpan=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('autoplay', 'autoPlay')
    jsx = jsx.replace('allowfullscreen', 'allowFullScreen')
    jsx = jsx.replace('frameborder=', 'frameBorder=')
    jsx = jsx.replace('crossorigin=', 'crossOrigin=')
    jsx = jsx.replace('for=', 'htmlFor=')
    
    # Handle style attribute to avoid React errors
    # Replace style="..." with data-original-style="..."
    jsx = re.sub(r' style="([^"]*)"', r' data-original-style="\1"', jsx)
    
    # Handle comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)
    
    # Handle links - specific replacements for known paths
    jsx = jsx.replace('href="index.html"', 'href="/"')
    jsx = jsx.replace('href="referanslar/index.html"', 'href="/blog/referanslar"')
    jsx = jsx.replace('href="hakkimizda/index.html"', 'href="#"')
    jsx = jsx.replace('href="iletisim/index.html"', 'href="#"')
    jsx = jsx.replace('href="blog/index.html"', 'href="#"')
    
    # Try to close img tags if not closed
    # This regex looks for <img [^>]*> and ensures it ends with />
    # But bossy code mostly has /> or is messy.
    # Simple pass: find <img ... > (without / at end) and replace > with />
    # Be careful not to double close <img ... /> />
    # A safer way: standard regex for img tag.
    # <img\s+[^>]*[^/]>
    
    def close_tag(match):
        tag = match.group(0)
        if not tag.endswith('/>'):
            return tag[:-1] + ' />'
        return tag

    jsx = re.sub(r'<img\s+[^>]*>', close_tag, jsx)
    jsx = re.sub(r'<input\s+[^>]*>', close_tag, jsx)
    jsx = re.sub(r'<br\s*>', '<br />', jsx)
    jsx = re.sub(r'<hr\s*>', '<hr />', jsx)

    return jsx

input_file = '/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/bossydigital.com/index.html'
output_file = '/Users/bekir/Music/KİŞİSEL PROJELER/pikselai-WEB/src/pages/Home.tsx'

if not os.path.exists(input_file):
    print(f"Error: Input file {input_file} not found")
    exit(1)

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body content
# Start: <div id="content" class="uicore-content">
# End: </div><!-- #content -->

# Use regex to find start because of potential extra spaces
start_match = re.search(r'<div\s+id="content"\s+class="uicore-content">', content)
end_marker = '</div><!-- #content -->'
end_idx = content.find(end_marker)

if start_match and end_idx != -1:
    start_idx = start_match.start()
    body_content = content[start_idx:end_idx + len(end_marker)]
    jsx_content = convert_html_to_jsx(body_content)
    
    final_component = f"""import {{ useEffect }} from 'react';
import {{ Link }} from 'react-router-dom';

const Home = () => {{
    useEffect(() => {{
        window.scrollTo(0, 0);
    }}, []);

    return (
        <>
            {{/* Main Content from BossyDigital */}}
            {jsx_content}
        </>
    );
}};

export default Home;
"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_component)
    print(f"Successfully converted content to {output_file}")
    
    # Check for remaining issues
    if 'style="' in jsx_content:
        print("Warning: style=\"...\" still present")
    if 'class="' in jsx_content:
        print("Warning: class=\"...\" still present")

else:
    print("Could not find content markers in HTML")
