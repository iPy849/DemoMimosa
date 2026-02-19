import { execSync } from 'child_process';
import { existsSync } from 'fs';

const projectDir = '/vercel/share/v0-project';

console.log('[v0] Reinstalling dependencies for Astro project...');
console.log('[v0] Project dir:', projectDir);
console.log('[v0] node_modules exists:', existsSync(`${projectDir}/node_modules`));

try {
  // Remove existing node_modules to force clean install
  execSync('rm -rf node_modules', { cwd: projectDir, stdio: 'inherit' });
  console.log('[v0] Removed old node_modules');
  
  // Install using npm (project has package-lock.json)
  execSync('npm install', { cwd: projectDir, stdio: 'inherit', timeout: 120000 });
  console.log('[v0] npm install completed');
  
  // Verify the astro compiler wasm exists
  const wasmPath = `${projectDir}/node_modules/@astrojs/compiler/dist/astro.wasm`;
  console.log('[v0] astro.wasm exists:', existsSync(wasmPath));
} catch (error) {
  console.error('[v0] Error during install:', error.message);
}
