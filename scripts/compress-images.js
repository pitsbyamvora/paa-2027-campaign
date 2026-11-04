const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imgDir = path.join(__dirname, '..', 'public', 'images');

const targets = [
  { file: 'candidate-bg.png',    width: 1400, quality: 80 },
  { file: 'candidate-hero.png',  width: 1200, quality: 80 },
  { file: 'candidate-rally.png', width: 1200, quality: 80 },
  { file: 'sdp-horse-logo.png',  width: 400,  quality: 85 },
  { file: 'survey-banner-bg.png',width: 1400, quality: 82 },
];

async function compress() {
  for (const t of targets) {
    const src = path.join(imgDir, t.file);
    if (!fs.existsSync(src)) { console.log('SKIP (not found):', t.file); continue; }

    const beforeBytes = fs.statSync(src).size;
    const tmp = src + '.tmp.webp';

    try {
      await sharp(src)
        .resize({ width: t.width, withoutEnlargement: true })
        .webp({ quality: t.quality })
        .toFile(tmp);

      const afterBytes = fs.statSync(tmp).size;

      // Only replace if smaller
      if (afterBytes < beforeBytes) {
        const dest = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        fs.renameSync(tmp, dest);
        // Remove original
        fs.unlinkSync(src);
        console.log(`✓ ${t.file} → ${path.basename(dest)}  ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB  (saved ${((1-afterBytes/beforeBytes)*100).toFixed(0)}%)`);
      } else {
        fs.unlinkSync(tmp);
        console.log(`- ${t.file} already optimal, keeping original`);
      }
    } catch(e) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`ERROR processing ${t.file}:`, e.message);
    }
  }
  console.log('\nDone! Remember to update any image src references from .png → .webp where files were converted.');
}

compress();
