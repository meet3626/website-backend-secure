import PyPDF2
import glob

files = [
    ('disclaimer', r'C:\Users\meetg\.gemini\antigravity-ide\brain\3e6cf143-39b9-4675-8e3d-970c429373ad\.tempmediaStorage\5836778cb03c20af.pdf'),
    ('cookie', r'C:\Users\meetg\.gemini\antigravity-ide\brain\3e6cf143-39b9-4675-8e3d-970c429373ad\.tempmediaStorage\1698333bfe3749d1.pdf'),
    ('data_protection', r'C:\Users\meetg\.gemini\antigravity-ide\brain\3e6cf143-39b9-4675-8e3d-970c429373ad\.tempmediaStorage\ef5bfdd10fc76782.pdf')
]

for name, path in files:
    try:
        reader = PyPDF2.PdfReader(path)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
        with open(f'{name}.txt', 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'Extracted {name}')
    except Exception as e:
        print(f'Failed {name}: {e}')
