from bs4 import BeautifulSoup
import sys

def parse_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    # Remove Scripts and Styles to reduce noise
    for script in soup(["script", "style", "svg", "noscript"]):
        script.extract()

    # Get text structure
    for element in soup.find_all(['h1', 'h2', 'h3', 'h4', 'section', 'div', 'p', 'ul', 'li']):
        # If element is a section divider or container
        if element.name in ['h1', 'h2', 'h3']:
            print(f"\n[{element.name.upper()}] {element.get_text(strip=True)[:100]}")
        elif element.name == 'p' and len(element.get_text(strip=True)) > 20:
             print(f"  [P] {element.get_text(strip=True)[:100]}...")
        elif element.name == 'li':
             print(f"  - {element.get_text(strip=True)[:50]}")

if __name__ == "__main__":
    parse_html(sys.argv[1])
