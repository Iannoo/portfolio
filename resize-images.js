import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to resize an image safely
async function resizeImage(inputPath, outputPath, width, height) {
  const tempPath = outputPath + '.tmp';
  try {
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(tempPath);
    fs.renameSync(tempPath, outputPath);
    console.log(`Successfully resized: ${outputPath}`);
  } catch (error) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`Error resizing ${inputPath}:`, error.message);
  }
}

// Main function to process all images
async function processImages() {
  const baseDir = path.join(__dirname, 'public');
  
  // Ensure project directories exist
  for (let i = 1; i <= 3; i++) {
    ensureDirectoryExists(path.join(baseDir, 'Projects', `project${i}`));
  }

  // Resize profile image
  const profilePath = path.join(baseDir, 'profile.jpg');
  if (fs.existsSync(profilePath)) {
    await resizeImage(profilePath, profilePath, 400, 400);
  }

  // Process project images
  for (let i = 1; i <= 3; i++) {
    const projectDir = path.join(baseDir, 'Projects', `project${i}`);
    
    // Main image
    const mainPath = path.join(projectDir, 'main.jpg');
    if (fs.existsSync(mainPath)) {
      await resizeImage(mainPath, mainPath, 400, 250);
    }

    // Detail images
    for (let j = 1; j <= 2; j++) {
      const detailPath = path.join(projectDir, `detail${j}.jpg`);
      if (fs.existsSync(detailPath)) {
        await resizeImage(detailPath, detailPath, 100, 100);
      }
    }
  }
}

// Run the script
processImages().catch(console.error); 