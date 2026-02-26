import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const disallowedBase = 'https://www.wheylandelectric.com';
const filesToCheck = ['dist/sitemap-index.xml', 'dist/sitemap-0.xml'];

const buildResult = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (buildResult.status !== 0) {
  console.log('FAIL: Build failed.');
  process.exit(buildResult.status ?? 1);
}

const sitemapOffenders = [];

for (const filePath of filesToCheck) {
  const content = readFileSync(filePath, 'utf8');
  if (content.includes(disallowedBase)) {
    sitemapOffenders.push(filePath);
  }
}

if (sitemapOffenders.length > 0) {
  console.log(`FAIL: Found disallowed canonical base in: ${sitemapOffenders.join(', ')}`);
  process.exit(1);
}

const vercelConfig = JSON.parse(readFileSync('vercel.json', 'utf8'));

if (Object.prototype.hasOwnProperty.call(vercelConfig, 'routes')) {
  console.log('FAIL: vercel.json must not contain a top-level "routes" key.');
  process.exit(1);
}

if (!Object.prototype.hasOwnProperty.call(vercelConfig, 'redirects')) {
  console.log('FAIL: vercel.json must contain a top-level "redirects" key.');
  process.exit(1);
}

if (!Object.prototype.hasOwnProperty.call(vercelConfig, 'headers')) {
  console.log('FAIL: vercel.json must contain a top-level "headers" key.');
  process.exit(1);
}

console.log('PASS: Migration verification succeeded. No www URLs found and vercel.json keys are valid.');
