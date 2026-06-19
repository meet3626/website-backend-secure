import requests
from bs4 import BeautifulSoup
import json

url = "https://itsrotex.com/about-us/"
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

print("H2s:", [h2.text.strip() for h2 in soup.find_all('h2') if h2.text.strip()])
print("H3s:", [h3.text.strip() for h3 in soup.find_all('h3') if h3.text.strip()])
print("Images:", [img.get('src') for img in soup.find_all('img') if img.get('src')])
print("Paragraphs:", [p.text.strip() for p in soup.find_all('p') if p.text.strip()])
