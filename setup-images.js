import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200 || response.statusCode === 302) {
        if (response.statusCode === 302) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          https.get(redirectUrl, (redirectResponse) => {
            if (redirectResponse.statusCode === 200) {
              const fileStream = fs.createWriteStream(filepath);
              redirectResponse.pipe(fileStream);
              fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
              });
            } else {
              reject(new Error(`Failed to download ${redirectUrl}: ${redirectResponse.statusCode}`));
            }
          }).on('error', reject);
        } else {
          const fileStream = fs.createWriteStream(filepath);
          response.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded: ${filepath}`);
            resolve();
          });
        }
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to set up images
async function setupImages() {
  const baseDir = path.join(__dirname, 'public');
  
  // Ensure project directories exist
  for (let i = 1; i <= 3; i++) {
    ensureDirectoryExists(path.join(baseDir, 'Projects', `project${i}`));
  }

  // Download profile image
  const profilePath = path.join(baseDir, 'profile.jpg');
  if (!fs.existsSync(profilePath)) {
    await downloadImage('https://picsum.photos/400/400?random=10', profilePath);
    await delay(1000); // Wait 1 second between downloads
  }

  // Download project images
  for (let i = 1; i <= 3; i++) {
    const projectDir = path.join(baseDir, 'Projects', `project${i}`);
    
    // Main image
    const mainPath = path.join(projectDir, 'main.jpg');
    if (!fs.existsSync(mainPath)) {
      await downloadImage(`https://picsum.photos/400/250?random=${i}`, mainPath);
      await delay(1000); // Wait 1 second between downloads
    }

    // Detail images
    for (let j = 1; j <= 2; j++) {
      const detailPath = path.join(projectDir, `detail${j}.jpg`);
      if (!fs.existsSync(detailPath)) {
        await downloadImage(`https://picsum.photos/100/100?random=${i * 2 + j}`, detailPath);
        await delay(1000); // Wait 1 second between downloads
      }
    }
  }

  // Download OG image
  const ogImagePath = path.join(baseDir, 'og-image.jpg');
  if (!fs.existsSync(ogImagePath)) {
    await downloadImage('https://picsum.photos/1200/630?random=20', ogImagePath);
  }
}

// Run the script
setupImages().catch(console.error); 