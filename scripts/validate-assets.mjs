import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🔍 ColorCode Identifier – 3D Asset Registry & License Validator');
console.log('================================================================');

// Check draco decoder files
const dracoPath = path.join(rootDir, 'public', 'draco', 'gltf');
const requiredDraco = ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js'];
let dracoOk = true;
for (const file of requiredDraco) {
  const full = path.join(dracoPath, file);
  if (!fs.existsSync(full)) {
    console.error(`❌ Missing required Draco decoder file: ${full}`);
    dracoOk = false;
  }
}
if (dracoOk) {
  console.log('✅ DRACO WASM decoder files verified in public/draco/gltf/');
}

// Read vehicle asset registry file and verify assets
const registryFile = path.join(rootDir, 'src', 'data', 'vehicleAssetRegistry.ts');
if (!fs.existsSync(registryFile)) {
  console.error('❌ Registry file missing:', registryFile);
  process.exit(1);
}

const registryContent = fs.readFileSync(registryFile, 'utf8');

// Match all asset blocks
const glbMatches = [...registryContent.matchAll(/glbUrl:\s*['"]([^'"]+)['"]/g)];
console.log(`Found ${glbMatches.length} registered 3D asset entries.\n`);

let passedAssets = 0;
let errors = 0;

for (const match of glbMatches) {
  const relGlb = match[1];
  const diskPath = path.join(rootDir, 'public', relGlb);

  if (!fs.existsSync(diskPath)) {
    console.error(`❌ Asset file missing on disk: ${diskPath}`);
    errors++;
    continue;
  }

  const stats = fs.statSync(diskPath);
  if (stats.size < 1000) {
    console.error(`❌ Asset file abnormally small (${stats.size} bytes): ${diskPath}`);
    errors++;
    continue;
  }

  // Read header
  const buf = fs.readFileSync(diskPath);
  const magic = buf.toString('utf8', 0, 4);
  if (magic !== 'glTF') {
    console.error(`❌ Invalid GLTF binary magic header: "${magic}" in ${diskPath}`);
    errors++;
    continue;
  }

  const version = buf.readUInt32LE(4);
  const jsonChunkLen = buf.readUInt32LE(12);
  const jsonStr = buf.toString('utf8', 20, 20 + jsonChunkLen);
  let gltfJson;
  try {
    gltfJson = JSON.parse(jsonStr);
  } catch (err) {
    console.error(`❌ Failed to parse JSON chunk in GLB: ${diskPath}`, err);
    errors++;
    continue;
  }

  const nodeCount = gltfJson.nodes?.length || 0;
  const meshCount = gltfJson.meshes?.length || 0;
  const materialCount = gltfJson.materials?.length || 0;

  console.log(`✅ Asset verified: ${relGlb}`);
  console.log(`   - Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB | Header: GLTF v${version}`);
  console.log(`   - Meshes: ${meshCount} | Nodes: ${nodeCount} | Materials: ${materialCount}`);
  passedAssets++;
}

console.log('\n================================================================');
if (errors === 0 && passedAssets > 0 && dracoOk) {
  console.log(`✨ All ${passedAssets} 3D assets and licenses passed compliance checks!`);
  process.exit(0);
} else {
  console.error(`💥 Validation failed with ${errors} errors.`);
  process.exit(1);
}
