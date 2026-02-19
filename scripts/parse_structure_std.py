from html.parser import HTMLParser
import sys

class StructureParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_body = False
        self.tags_to_track = {'h1', 'h2', 'h3', 'h4', 'section', 'div', 'p', 'button', 'a', 'span'}
        self.current_tag = None
    
    def handle_starttag(self, tag, attrs):
        if tag == 'body':
            self.in_body = True
        if self.in_body and tag in self.tags_to_track:
            self.current_tag = tag
            attrs_dict = dict(attrs)
            cls = attrs_dict.get('class', '')
            if tag in ['h1', 'h2', 'h3', 'section']:
                print(f"[{tag.upper()}] class={cls}")

    def handle_data(self, data):
        if self.in_body and self.current_tag in ['h1', 'h2', 'h3', 'p', 'span']:
            text = data.strip()
            if len(text) > 2:
                print(f"  text: {text[:100]}")

parser = StructureParser()
with open(sys.argv[1], 'r', encoding='utf-8') as f:
    content = f.read()
    parser.feed(content)
