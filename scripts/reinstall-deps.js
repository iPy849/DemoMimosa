import { execSync } from 'child_process';
import { existsSync } from 'fs';

const projectDir = '/vercel/share/v0-project';

console.log('Installing Astro project dependencies...');

try {
  // Remove existing node_modules if it exists in project dir
  if (existsSync(`${projectDir}/node_modules`)) {
    console.log('Removing existing node_modules...');
    execSync(`rm -rf ${projectDir}/node_modules`, { cwd: projectDir, stdio: 'inherit' });
  }

  // Install dependencies
  console.log('Running npm install...');
  execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

  // Verify the astro compiler wasm exists
  const wasmPath = `${projectDir}/node_modules/@astrojs/compiler/dist/astro.wasm`;
  if (existsSync(wasmPath)) {
    console.log('SUCCESS: astro.wasm found at', wasmPath);
  } else {
    console.log('WARNING: astro.wasm not found at expected path');
  }

  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}
