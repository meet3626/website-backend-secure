import requests
from bs4 import BeautifulSoup
import json

url = "https://itsrotex.com/blog/"
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

posts = []
# Find all posts based on standard Elementor post classes
for item in soup.find_all(class_='elementor-post'):
    title_elem = item.find(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    title = title_elem.text.strip() if title_elem else ''
    
    img_elem = item.find('img')
    img_url = img_elem['src'] if img_elem and 'src' in img_elem.attrs else ''
    
    # Excerpt can be under elementor-post__excerpt or just a p tag
    excerpt_elem = item.find(class_='elementor-post__excerpt')
    excerpt = excerpt_elem.text.strip() if excerpt_elem else ''
    
    date_elem = item.find(class_='elementor-post-date')
    date = date_elem.text.strip() if date_elem else ''
    
    if title:
        posts.append({
            'title': title,
            'image': img_url,
            'excerpt': excerpt,
            'date': date
        })

if not posts:
    print("No posts found with class 'elementor-post'. Dumping all images and h2s for inspection:")
    print("H2s:", [h2.text.strip() for h2 in soup.find_all('h2')])
    print("Images:", [img.get('src') for img in soup.find_all('img')])
else:
    print(json.dumps(posts, indent=2))
