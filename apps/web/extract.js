import fs from 'fs';
import pdf from 'pdf-parse';

async function extract() {
  const files = [
    { name: 'disclaimer', path: 'C:\\Users\\meetg\\.gemini\\antigravity-ide\\brain\\3e6cf143-39b9-4675-8e3d-970c429373ad\\.tempmediaStorage\\5836778cb03c20af.pdf' },
    { name: 'cookie', path: 'C:\\Users\\meetg\\.gemini\\antigravity-ide\\brain\\3e6cf143-39b9-4675-8e3d-970c429373ad\\.tempmediaStorage\\1698333bfe3749d1.pdf' },
    { name: 'data_protection', path: 'C:\\Users\\meetg\\.gemini\\antigravity-ide\\brain\\3e6cf143-39b9-4675-8e3d-970c429373ad\\.tempmediaStorage\\ef5bfdd10fc76782.pdf' }
  ];

  for (const file of files) {
    try {
        let dataBuffer = fs.readFileSync(file.path);
        let data = await pdf(dataBuffer);
        fs.writeFileSync(`${file.name}.txt`, data.text);
        console.log(`Extracted ${file.name}`);
    } catch(e) {
        console.error(`Failed ${file.name}`, e);
    }
  }
}
extract();
