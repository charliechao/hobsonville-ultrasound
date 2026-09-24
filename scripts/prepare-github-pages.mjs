import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const base = '/hobsonville-ultrasound';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const file = path.join(directory, entry.name);
      return entry.isDirectory() ? htmlFiles(file) : Promise.resolve(file);
    }),
  );
  return files.flat().filter((file) => file.endsWith('.html'));
}

for (const file of await htmlFiles(root)) {
  const html = await readFile(file, 'utf8');
  const rewritten = html.replace(
    /\b(href|src)=(['"])\/(?!\/|hobsonville-ultrasound(?:\/|\2))/g,
    `$1=$2${base}/`,
  );
  await writeFile(file, rewritten);
}
