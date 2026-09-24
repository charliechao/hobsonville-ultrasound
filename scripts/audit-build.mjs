import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const pagesBase = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');
async function walk(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
}
const files = await walk(root);
const pages = files.filter((f) => f.endsWith('.html'));
const errors = [];
const titles = new Set();
let links = 0,
  images = 0;
const decode = (text) =>
  text
    .replaceAll('&amp;', '&')
    .replaceAll('&#39;', "'")
    .replaceAll('&quot;', '"');
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const base = new URL(
    '/' + relative.replace(/index\.html$/, ''),
    'https://hobus.co.nz',
  );
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  if (!title || titles.has(title))
    errors.push(`${relative}: missing/duplicate title`);
  titles.add(title);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    errors.push(`${relative}: expected one H1`);
  if (!html.includes('name="description"') || !html.includes('rel="canonical"'))
    errors.push(`${relative}: missing SEO metadata`);
  if (
    process.env.PUBLIC_SITE_INDEXABLE !== 'true' &&
    !html.includes('noindex, nofollow')
  )
    errors.push(`${relative}: review indexing guard missing`);
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  )) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push(`${relative}: invalid structured data`);
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    images++;
    if (!/\balt="[^"]+"/.test(match[0]))
      errors.push(`${relative}: image missing alt`);
    if (!/\bwidth=/.test(match[0]) || !/\bheight=/.test(match[0]))
      errors.push(`${relative}: image missing dimensions`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = decode(match[1]);
    if (/^(mailto:|tel:|data:|javascript:)/.test(raw)) continue;
    const url = new URL(raw, base);
    if (url.origin !== base.origin) continue;
    links++;
    const targetPath =
      pagesBase && url.pathname.startsWith(`${pagesBase}/`)
        ? url.pathname.slice(pagesBase.length)
        : url.pathname;
    let target = path.join(root, decodeURIComponent(targetPath));
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, 'index.html');
      await stat(target);
    } catch {
      errors.push(`${relative}: broken local reference ${raw}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const targetHtml =
        target === file ? html : await readFile(target, 'utf8');
      if (!targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`))
        errors.push(`${relative}: missing anchor ${raw}`);
    }
  }
  if (/TODO|Lorem ipsum|&lt;br\s*\/?&gt;/i.test(html))
    errors.push(`${relative}: placeholder or escaped HTML in output`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${pages.length} pages, ${links} local references, ${images} image elements. Titles, H1s, descriptions, canonical links, JSON-LD, alt text, image dimensions, anchors and review indexing guards checked.`,
  );
