const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

walkDir('src', function(filePath) {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.css')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/ItsRotex/g, 'Amari Capitals')
        .replace(/itsrotex\.com/g, 'amaricapitals.com')
        .replace(/enquiry@itsrotex/g, 'enquiry@amaricapitals')
        .replace(/Rotex IT Solutions EST/g, 'Amari Capitals')
        .replace(/Rotex/g, 'Amari Capitals')
        .replace(/ROTEX/g, 'AMARI CAPITALS');
        
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated', filePath);
    }
});
