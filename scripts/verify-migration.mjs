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

const offenders = [];

for (const filePath of filesToCheck) {
  const content = readFileSync(filePath, 'utf8');
  if (content.includes(disallowedBase)) {
    offenders.push(filePath);
  }
}

if (offenders.length > 0) {
  console.log(`FAIL: Found disallowed canonical base in: ${offenders.join(', ')}`);
  process.exit(1);
}

console.log('PASS: Migration verification succeeded. No www URLs found in sitemap outputs.');
