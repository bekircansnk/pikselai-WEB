import os
import re

def resolve_conflicts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find conflict blocks and pick HEAD
    # Pattern: <<<<<<< HEAD\n(HEAD_CONTENT)\n=======\n(REMOTE_CONTENT)\n>>>>>>> (COMMIT_ID)
    # Note: DOTALL for multi-line matching
    pattern = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [a-f0-9]+', re.DOTALL)
    
    resolved_content = pattern.sub(r'\1', content)
    
    # Also handle some variations if any (e.g. if the COMMIT_ID part is different)
    pattern2 = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> .*?\n', re.DOTALL)
    resolved_content = pattern2.sub(r'\1\n', resolved_content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(resolved_content)

files_to_fix = [
    r'c:\Users\NS\Desktop\piksel_ai\site\src\pages\SosyalMedyaYeni.tsx',
    r'c:\Users\NS\Desktop\piksel_ai\site\src\pages\AiProductionYeni.tsx'
]

for f in files_to_fix:
    if os.path.exists(f):
        print(f"Resolving {f}...")
        resolve_conflicts(f)
    else:
        print(f"File not found: {f}")
