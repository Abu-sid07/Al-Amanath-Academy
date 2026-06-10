import fs from 'fs';
import path from 'path';

const pub = path.resolve('public');
const out = path.resolve('src/data/galleryImages.ts');

const toUrl = (folder, file) => encodeURI(`/${folder}/${file}`);

const readImages = (folder) =>
  fs
    .readdirSync(path.join(pub, folder))
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

const folders = {
  awardCeremonyImages: 'award ceremonies',
  publicSpeakingImages: 'Public Speaking',
  spokenEnglishImages: 'spoken english classes',
  communityProgramImages: 'community pro',
};

const sections = Object.entries(folders).map(([exportName, folder]) => {
  const images = readImages(folder);
  return {
    exportName,
    folder,
    images,
    block: `export const ${exportName} = [\n${images.map((f) => `  '${toUrl(folder, f)}',`).join('\n')}\n];`,
  };
});

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${sections.map((s) => s.block).join('\n\n')}\n`);
console.log(sections.map((s) => `${s.exportName}: ${s.images.length}`).join(', '));
