import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Test 1: Validate Worldwide Catalogue Structure & Hierarchy Navigation
test('Worldwide Vehicle Catalogue - Hierarchy Navigation & Specification Coverage', async () => {
  const catalogueFile = path.join(rootDir, 'src', 'data', 'vehicleCatalogue.ts');
  assert.ok(fs.existsSync(catalogueFile), 'vehicleCatalogue.ts must exist');

  const content = fs.readFileSync(catalogueFile, 'utf8');

  // Verify key markets are represented
  const expectedMarkets = ['India', 'Germany', 'United States', 'Italy', 'Japan', 'United Kingdom'];
  for (const m of expectedMarkets) {
    assert.match(content, new RegExp(`name:\\s*['"]${m}['"]`), `Catalogue must include ${m}`);
  }

  // Verify key real vehicles are present
  const expectedVehicles = [
    'Mahindra', 'Thar 4x4',
    'BMW', '3 Series Sedan',
    'Ford', 'Mustang',
    'Ferrari', '458 Italia',
    'Porsche', '911 GT3',
    'Toyota', 'GR Supra'
  ];
  for (const v of expectedVehicles) {
    assert.ok(content.includes(v), `Catalogue must include vehicle entity "${v}"`);
  }

  // Verify technical specifications fields exist (horsepower, torqueNm, drivetrain, transmission)
  assert.ok(content.includes('horsepower:'), 'Catalogue variants must specify horsepower');
  assert.ok(content.includes('torqueNm:'), 'Catalogue variants must specify torque');
  assert.ok(content.includes('drivetrain:'), 'Catalogue variants must specify drivetrain');
  assert.ok(content.includes('transmission:'), 'Catalogue variants must specify transmission');
});

// Test 2: Validate 3D Asset Registry & Licensing Integrity
test('Vehicle 3D Asset Registry - Licensing & Compliance Standards', async () => {
  const registryFile = path.join(rootDir, 'src', 'data', 'vehicleAssetRegistry.ts');
  assert.ok(fs.existsSync(registryFile), 'vehicleAssetRegistry.ts must exist');

  const content = fs.readFileSync(registryFile, 'utf8');

  // Check Ferrari 458 Italia licensed asset
  assert.ok(content.includes('ferrari-458-italia-approved'), 'Ferrari 458 approved asset must be in registry');
  assert.ok(content.includes('CC-BY-4.0'), 'Ferrari 458 must declare CC-BY-4.0 license');
  assert.ok(content.includes('vicent091036'), 'Ferrari 458 must attribute original author vicent091036');
  assert.ok(content.includes('commercialUsageAllowed: true'), 'Must declare commercial usage permission');
  assert.ok(content.includes('webEmbeddingAllowed: true'), 'Must declare web embedding permission');

  // Verify assets exist on disk
  const assets = [
    'public/models/vehicles/ferrari-458.glb',
    'public/models/vehicles/sports-sedan.glb',
    'public/models/vehicles/supercar-gt.glb',
    'public/models/vehicles/rugged-4x4-suv.glb',
    'public/models/vehicles/supersport-bike.glb'
  ];

  for (const a of assets) {
    const full = path.join(rootDir, a);
    assert.ok(fs.existsSync(full), `Asset binary must exist: ${a}`);
    const size = fs.statSync(full).size;
    assert.ok(size > 500000, `Asset ${a} should have realistic polycount (>500KB)`);
  }
});

// Test 3: Validate DRACO Compression Local Decoder Files
test('DRACO Compression - Local Offline Decoder Availability', () => {
  const dracoDir = path.join(rootDir, 'public', 'draco', 'gltf');
  assert.ok(fs.existsSync(dracoDir), 'DRACO directory must exist in public/draco/gltf');

  const files = ['draco_decoder.js', 'draco_decoder.wasm', 'draco_wasm_wrapper.js'];
  for (const f of files) {
    const full = path.join(dracoDir, f);
    assert.ok(fs.existsSync(full), `DRACO file ${f} must exist`);
    assert.ok(fs.statSync(full).size > 1000, `DRACO file ${f} must not be empty`);
  }
});

// Test 4: Validate Mesh Mapping & Panel Painting Segregation
test('Mesh Mapping - Segregation of Paintable Panels vs Tires and Glass', () => {
  const registryFile = path.join(rootDir, 'src', 'data', 'vehicleAssetRegistry.ts');
  const content = fs.readFileSync(registryFile, 'utf8');

  // Paintable panels must be defined with nodeName
  assert.ok(content.includes('paintablePanels:'), 'Registry must have paintablePanels');
  assert.ok(content.includes('wheelRims:'), 'Registry must segregate wheel rims');
  assert.ok(content.includes('wheelTires:'), 'Registry must segregate tires to prevent recoloring');
  assert.ok(content.includes('glassMeshes:'), 'Registry must segregate glass meshes');
});

// Test 5: Validate Fallback & Transparency Notice for Unmodeled Vehicles
test('Fallback & Transparency Notice - No Fake Generic Substitutions', () => {
  const customizerFile = path.join(rootDir, 'src', 'components', 'Vehicle3DCustomizer.astro');
  const content = fs.readFileSync(customizerFile, 'utf8');

  assert.ok(content.includes('unavailable-banner'), 'Must include unavailable banner');
  assert.ok(content.includes('3D Model Currently Unavailable for This Vehicle'), 'Must clearly notify user when 3D asset is unavailable');
  assert.ok(content.includes('license verification') || content.includes('licensing verification'), 'Must display licensing audit notice');
});
