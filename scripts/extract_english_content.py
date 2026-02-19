from bs4 import BeautifulSoup
import json
import sys

# Since bs4 was missing in the previous environment check, I'll use standard library if needed, 
# but let's try a robust standard library approach first to be safe, 
# or just use simple regex/string parsing if the environment is restricted.
# actually, the previous error said ModuleNotFoundError: No module named 'bs4'
# So I must use html.parser.

from html.parser import HTMLParser

class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_body = False
        self.current_tag = ""
        self.content = []
        self.capture = False
        self.last_tag = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'body':
            self.in_body = True
        if self.in_body:
            self.current_tag = tag
            if tag in ['h1', 'h2', 'h3', 'h4', 'p', 'li', 'span', 'div', 'a', 'button']:
                self.capture = True

    def handle_endtag(self, tag):
        if tag == 'body':
            self.in_body = False
        self.capture = False
        self.last_tag = tag

    def handle_data(self, data):
        if self.capture and data.strip():
            # simple heuristic to capture meaningful text
            if len(data.strip()) > 2:
                self.content.append(f"<{self.current_tag}> {data.strip()}")

parser = ContentExtractor()
with open(sys.argv[1], 'r', encoding='utf-8') as f:
    parser.feed(f.read())

# Filter for unique logical blocks to reconstruct the page
seen = set()
for line in parser.content:
    if line not in seen:
        print(line)
        seen.add(line)
