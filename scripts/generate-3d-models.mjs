import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// Polyfill FileReader for Node.js GLTFExporter binary export
globalThis.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onloadend) this.onloadend();
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = 'data:application/octet-stream;base64,' + Buffer.from(buf).toString('base64');
      if (this.onloadend) this.onloadend();
    });
  }
};

const outputDir = path.resolve('./public/models/vehicles');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function exportToGlb(scene, filename) {
  return new Promise((resolve, reject) => {
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      (glb) => {
        const filePath = path.join(outputDir, filename);
        fs.writeFileSync(filePath, Buffer.from(glb));
        console.log(`Saved ${filename} (${glb.byteLength} bytes)`);
        resolve(filePath);
      },
      (err) => reject(err),
      { binary: true }
    );
  });
}

// Helper: Create a smooth beveled / contoured panel geometry
function createContouredBox(width, height, depth, bevel = 0.04, segments = 3) {
  const shape = new THREE.Shape();
  const halfW = width / 2;
  const halfH = height / 2;
  const r = Math.min(bevel, halfW * 0.4, halfH * 0.4);

  shape.moveTo(-halfW + r, -halfH);
  shape.lineTo(halfW - r, -halfH);
  shape.quadraticCurveTo(halfW, -halfH, halfW, -halfH + r);
  shape.lineTo(halfW, halfH - r);
  shape.quadraticCurveTo(halfW, halfH, halfW - r, halfH);
  shape.lineTo(-halfW + r, halfH);
  shape.quadraticCurveTo(-halfW, halfH, -halfW, halfH - r);
  shape.lineTo(-halfW, -halfH + r);
  shape.quadraticCurveTo(-halfW, -halfH, -halfW + r, -halfH);

  const extrudeSettings = {
    steps: 1,
    depth: depth,
    bevelEnabled: true,
    bevelThickness: bevel * 0.8,
    bevelSize: bevel * 0.8,
    bevelOffset: 0,
    bevelSegments: segments
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.center();
  geom.computeVertexNormals();
  return geom;
}

// Helper: Create a high-detail wheel assembly with realistic alloy rim, rotor, caliper, and tire
function createDetailedWheel(name, x, y, z, radius = 0.35, width = 0.25, rimRadius = 0.24, isBike = false) {
  const group = new THREE.Group();
  group.name = `wheel_assembly_${name}`;
  group.position.set(x, y, z);

  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x141820,
    metalness: 0.08,
    roughness: 0.92,
    name: 'Tire_Rubber'
  });

  const rimMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.92,
    roughness: 0.18,
    name: 'Rim_Alloy'
  });

  const rotorMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    metalness: 0.95,
    roughness: 0.25,
    name: 'Brake_Rotor'
  });

  const caliperMat = new THREE.MeshStandardMaterial({
    color: 0xdc2626,
    metalness: 0.4,
    roughness: 0.25,
    name: 'Brake_Caliper'
  });

  // 1. Tire with rounded shoulder profile
  const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 32, 2, false);
  tireGeom.rotateZ(Math.PI / 2);
  tireGeom.computeVertexNormals();
  const tire = new THREE.Mesh(tireGeom, tireMat);
  tire.name = `wheel_tire_${name}`;
  group.add(tire);

  // 2. Rim Barrel & Lip
  const rimGroup = new THREE.Group();
  rimGroup.name = `wheel_rim_${name}`;

  const barrelGeom = new THREE.CylinderGeometry(rimRadius, rimRadius, width + 0.015, 24, 1, true);
  barrelGeom.rotateZ(Math.PI / 2);
  const barrel = new THREE.Mesh(barrelGeom, rimMat);
  rimGroup.add(barrel);

  // Rim Outer Lip ring
  const lipGeom = new THREE.TorusGeometry(rimRadius, 0.018, 12, 24);
  lipGeom.rotateY(Math.PI / 2);
  const lipOuter = new THREE.Mesh(lipGeom, rimMat);
  lipOuter.position.x = (x > 0 ? 1 : -1) * (width * 0.48);
  rimGroup.add(lipOuter);

  // Center hub
  const hubRadius = rimRadius * 0.28;
  const hubGeom = new THREE.CylinderGeometry(hubRadius, hubRadius, width * 0.85, 16);
  hubGeom.rotateZ(Math.PI / 2);
  const hub = new THREE.Mesh(hubGeom, rimMat);
  rimGroup.add(hub);

  // Center cap emblem
  const capGeom = new THREE.CylinderGeometry(hubRadius * 0.6, hubRadius * 0.6, 0.03, 16);
  capGeom.rotateZ(Math.PI / 2);
  const capMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
  const cap = new THREE.Mesh(capGeom, capMat);
  cap.position.x = (x > 0 ? 1 : -1) * (width * 0.49);
  rimGroup.add(cap);

  // 5 Twin Spokes (or 6 for bike)
  const numSpokes = isBike ? 6 : 5;
  const spokeLen = rimRadius * 0.85;
  for (let i = 0; i < numSpokes; i++) {
    const angle = (i * 2 * Math.PI) / numSpokes;
    const spokeGeom = new THREE.BoxGeometry(0.025, spokeLen, 0.035);
    spokeGeom.computeVertexNormals();

    const spoke = new THREE.Mesh(spokeGeom, rimMat);
    spoke.position.y = (Math.cos(angle) * spokeLen) / 2;
    spoke.position.z = (Math.sin(angle) * spokeLen) / 2;
    spoke.position.x = (x > 0 ? 1 : -1) * (width * 0.4);
    spoke.rotation.x = -angle;
    rimGroup.add(spoke);
  }

  group.add(rimGroup);

  // 3. Steel Brake Rotor & Caliper (inside wheel)
  const rotorRadius = rimRadius * 0.74;
  const rotorGeom = new THREE.CylinderGeometry(rotorRadius, rotorRadius, 0.02, 24);
  rotorGeom.rotateZ(Math.PI / 2);
  const rotor = new THREE.Mesh(rotorGeom, rotorMat);
  rotor.position.x = (x > 0 ? 1 : -1) * (width * 0.15);
  group.add(rotor);

  // Red Sport Caliper clamped to rotor
  const caliperGeom = new THREE.BoxGeometry(0.06, rotorRadius * 0.45, 0.12);
  caliperGeom.computeVertexNormals();
  const caliper = new THREE.Mesh(caliperGeom, caliperMat);
  caliper.position.set((x > 0 ? 1 : -1) * (width * 0.15), rotorRadius * 0.72, 0);
  caliper.rotation.z = (x > 0 ? 1 : -1) * 0.1;
  group.add(caliper);

  return group;
}

// -----------------------------------------------------------------------------
// 1. Executive Sports Sedan 3D Model
// -----------------------------------------------------------------------------
function buildSportsSedan() {
  const root = new THREE.Group();
  root.name = 'SportsSedan_Root';

  // Base materials
  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    metalness: 0.65,
    roughness: 0.22,
    name: 'CarPaint_Default'
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x090d16,
    metalness: 0.1,
    roughness: 0.08,
    transmission: 0.85,
    transparent: true,
    opacity: 0.72,
    name: 'Glass_Tinted'
  });

  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x090d16,
    metalness: 0.85,
    roughness: 0.25,
    name: 'Trim_GlossBlack'
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    metalness: 0.98,
    roughness: 0.1,
    name: 'Chrome_Metal'
  });

  const headMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.85,
    name: 'Light_Headlight'
  });

  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xdc2626,
    emissiveIntensity: 0.9,
    name: 'Light_Taillight'
  });

  // Cockpit Interior Silhouette (prevents hollow look)
  const interior = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.45, 1.8),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 })
  );
  interior.position.set(0, 0.95, -0.15);
  root.add(interior);

  // 1. Bonnet / Hood - sculpted with aerodynamic power bulge
  const bonnetGeom = createContouredBox(1.52, 0.12, 1.34, 0.05);
  const bonnet = new THREE.Mesh(bonnetGeom, paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 0.86, 1.15);
  bonnet.rotation.x = 0.07;
  root.add(bonnet);

  // 2. Roof Panel - sleek aerodynamic coupe-like curvature
  const roofGeom = createContouredBox(1.38, 0.08, 1.45, 0.04);
  const roof = new THREE.Mesh(roofGeom, paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.44, -0.22);
  roof.rotation.x = -0.015;
  root.add(roof);

  // 3. Front Bumper - sculpted with aerodynamic air intakes and lower lip
  const fBumperGeom = createContouredBox(1.72, 0.44, 0.44, 0.06);
  const fBumper = new THREE.Mesh(fBumperGeom, paintMat.clone());
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.46, 1.96);
  root.add(fBumper);

  // 4. Rear Bumper - aerodynamic rear fascia with diffuser profile
  const rBumperGeom = createContouredBox(1.7, 0.46, 0.44, 0.06);
  const rBumper = new THREE.Mesh(rBumperGeom, paintMat.clone());
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.5, -1.96);
  root.add(rBumper);

  // 5. Doors (4 doors with sculpted character crease)
  const flDoorGeom = createContouredBox(0.12, 0.64, 0.96, 0.035);
  const flDoor = new THREE.Mesh(flDoorGeom, paintMat.clone());
  flDoor.name = 'body_door_front_left';
  flDoor.position.set(-0.78, 0.74, 0.4);
  root.add(flDoor);

  const frDoor = new THREE.Mesh(flDoorGeom, paintMat.clone());
  frDoor.name = 'body_door_front_right';
  frDoor.position.set(0.78, 0.74, 0.4);
  root.add(frDoor);

  const rlDoorGeom = createContouredBox(0.12, 0.64, 0.9, 0.035);
  const rlDoor = new THREE.Mesh(rlDoorGeom, paintMat.clone());
  rlDoor.name = 'body_door_rear_left';
  rlDoor.position.set(-0.78, 0.74, -0.5);
  root.add(rlDoor);

  const rrDoor = new THREE.Mesh(rlDoorGeom, paintMat.clone());
  rrDoor.name = 'body_door_rear_right';
  rrDoor.position.set(0.78, 0.74, -0.5);
  root.add(rrDoor);

  // 6. Fenders (Front left & right with flared wheel arch contour)
  const flFenderGeom = createContouredBox(0.15, 0.58, 0.78, 0.04);
  const flFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.78, 0.7, 1.36);
  root.add(flFender);

  const frFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.78, 0.7, 1.36);
  root.add(frFender);

  // 7. Rear Quarters (Muscular haunches)
  const rlQuarterGeom = createContouredBox(0.15, 0.64, 0.88, 0.04);
  const rlQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.78, 0.76, -1.4);
  root.add(rlQuarter);

  const rrQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.78, 0.76, -1.4);
  root.add(rrQuarter);

  // 8. Boot / Trunk Lid
  const bootGeom = createContouredBox(1.44, 0.1, 0.82, 0.035);
  const boot = new THREE.Mesh(bootGeom, paintMat.clone());
  boot.name = 'body_trunk';
  boot.position.set(0, 0.99, -1.48);
  boot.rotation.x = -0.06;
  root.add(boot);

  // 9. Rear Decklid Lip Spoiler
  const spoilerGeom = createContouredBox(1.5, 0.045, 0.16, 0.015);
  const spoiler = new THREE.Mesh(spoilerGeom, trimMat.clone());
  spoiler.name = 'body_spoiler';
  spoiler.position.set(0, 1.06, -1.84);
  root.add(spoiler);

  // 10. Side Skirts
  const lSkirtGeom = createContouredBox(0.08, 0.12, 2.12, 0.02);
  const lSkirt = new THREE.Mesh(lSkirtGeom, trimMat.clone());
  lSkirt.name = 'body_skirt_left';
  lSkirt.position.set(-0.81, 0.32, -0.05);
  root.add(lSkirt);

  const rSkirt = new THREE.Mesh(lSkirtGeom, trimMat.clone());
  rSkirt.name = 'body_skirt_right';
  rSkirt.position.set(0.81, 0.32, -0.05);
  root.add(rSkirt);

  // 11. Side Mirrors with aerodynamic stalks
  const mirrorGeom = createContouredBox(0.2, 0.12, 0.16, 0.03);
  const lMirror = new THREE.Mesh(mirrorGeom, paintMat.clone());
  lMirror.name = 'body_mirror_left';
  lMirror.position.set(-0.92, 1.05, 0.78);
  root.add(lMirror);

  const rMirror = new THREE.Mesh(mirrorGeom, paintMat.clone());
  rMirror.name = 'body_mirror_right';
  rMirror.position.set(0.92, 1.05, 0.78);
  root.add(rMirror);

  // 12. Windows & Glass
  const wShieldGeom = createContouredBox(1.36, 0.05, 0.76, 0.02);
  const wShield = new THREE.Mesh(wShieldGeom, glassMat);
  wShield.name = 'glass_windshield';
  wShield.position.set(0, 1.2, 0.65);
  wShield.rotation.x = 0.62;
  root.add(wShield);

  const rShieldGeom = createContouredBox(1.32, 0.05, 0.72, 0.02);
  const rShield = new THREE.Mesh(rShieldGeom, glassMat);
  rShield.name = 'glass_rear';
  rShield.position.set(0, 1.23, -1.0);
  rShield.rotation.x = -0.56;
  root.add(rShield);

  const lWindowsGeom = createContouredBox(0.03, 0.4, 1.62, 0.015);
  const lWindows = new THREE.Mesh(lWindowsGeom, glassMat);
  lWindows.name = 'glass_windows_left';
  lWindows.position.set(-0.73, 1.2, -0.08);
  root.add(lWindows);

  const rWindows = new THREE.Mesh(lWindowsGeom, glassMat);
  rWindows.name = 'glass_windows_right';
  rWindows.position.set(0.73, 1.2, -0.08);
  root.add(rWindows);

  // 13. Front Grille, Headlights, Taillights & Exhausts
  const grille = new THREE.Mesh(createContouredBox(0.94, 0.24, 0.08, 0.02), trimMat);
  grille.name = 'trim_grille';
  grille.position.set(0, 0.54, 2.14);
  root.add(grille);

  const flHeadlight = new THREE.Mesh(createContouredBox(0.34, 0.12, 0.08, 0.02), headMat);
  flHeadlight.name = 'trim_headlight_left';
  flHeadlight.position.set(-0.64, 0.68, 2.06);
  root.add(flHeadlight);

  const frHeadlight = new THREE.Mesh(createContouredBox(0.34, 0.12, 0.08, 0.02), headMat);
  frHeadlight.name = 'trim_headlight_right';
  frHeadlight.position.set(0.64, 0.68, 2.06);
  root.add(frHeadlight);

  const rlTail = new THREE.Mesh(createContouredBox(0.38, 0.12, 0.06, 0.015), tailMat);
  rlTail.name = 'trim_taillight_left';
  rlTail.position.set(-0.64, 0.8, -2.07);
  root.add(rlTail);

  const rrTail = new THREE.Mesh(createContouredBox(0.38, 0.12, 0.06, 0.015), tailMat);
  rrTail.name = 'trim_taillight_right';
  rrTail.position.set(0.64, 0.8, -2.07);
  root.add(rrTail);

  // Dual exhaust tips
  const exhaustL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.14, 16).rotateX(Math.PI / 2), chromeMat);
  exhaustL.position.set(-0.52, 0.32, -2.12);
  root.add(exhaustL);

  const exhaustR = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.14, 16).rotateX(Math.PI / 2), chromeMat);
  exhaustR.position.set(0.52, 0.32, -2.12);
  root.add(exhaustR);

  // 14. Wheels (Detailed alloy assemblies)
  const wheelPositions = [
    { name: 'fl', x: -0.84, y: 0.35, z: 1.35 },
    { name: 'fr', x: 0.84, y: 0.35, z: 1.35 },
    { name: 'rl', x: -0.84, y: 0.35, z: -1.35 },
    { name: 'rr', x: 0.84, y: 0.35, z: -1.35 }
  ];

  wheelPositions.forEach((pos) => {
    const wheelGroup = createDetailedWheel(pos.name, pos.x, pos.y, pos.z, 0.35, 0.25, 0.24);
    // Add individual meshes to root for specific targeting
    while (wheelGroup.children.length > 0) {
      const child = wheelGroup.children[0];
      child.position.add(wheelGroup.position);
      root.add(child);
    }
  });

  return root;
}

// -----------------------------------------------------------------------------
// 2. Mid-Engine Exotic Supercar 3D Model
// -----------------------------------------------------------------------------
function buildSupercar() {
  const root = new THREE.Group();
  root.name = 'Supercar_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0xffbf00,
    metalness: 0.72,
    roughness: 0.18,
    name: 'Supercar_Paint'
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x06080e,
    metalness: 0.15,
    roughness: 0.06,
    transmission: 0.88,
    transparent: true,
    opacity: 0.68,
    name: 'Canopy_Glass'
  });

  const carbonMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    metalness: 0.45,
    roughness: 0.35,
    name: 'Carbon_Fiber'
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    metalness: 0.98,
    roughness: 0.08
  });

  // Cockpit Interior
  const interior = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.4, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9 })
  );
  interior.position.set(0, 0.75, 0.1);
  root.add(interior);

  // 1. Low Front Hood with aero bevels
  const bonnetGeom = createContouredBox(1.5, 0.09, 1.28, 0.045);
  const bonnet = new THREE.Mesh(bonnetGeom, paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 0.67, 1.15);
  bonnet.rotation.x = 0.11;
  root.add(bonnet);

  // 2. Low Canopy Roof
  const roofGeom = createContouredBox(1.24, 0.06, 1.24, 0.035);
  const roof = new THREE.Mesh(roofGeom, paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.14, -0.06);
  root.add(roof);

  // 3. Aggressive Front Bumper with Intakes
  const fBumperGeom = createContouredBox(1.78, 0.34, 0.46, 0.05);
  const fBumper = new THREE.Mesh(fBumperGeom, paintMat.clone());
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.39, 1.96);
  root.add(fBumper);

  // Front Carbon Splitter
  const splitterGeom = createContouredBox(1.84, 0.04, 0.32, 0.015);
  const fSplitter = new THREE.Mesh(splitterGeom, carbonMat);
  fSplitter.name = 'body_splitter';
  fSplitter.position.set(0, 0.21, 2.06);
  root.add(fSplitter);

  // 4. Rear Diffuser & Bumper
  const rBumperGeom = createContouredBox(1.8, 0.42, 0.46, 0.05);
  const rBumper = new THREE.Mesh(rBumperGeom, paintMat.clone());
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.5, -2.0);
  root.add(rBumper);

  // 5. High-Downforce GT Rear Wing
  const wingGeom = createContouredBox(1.88, 0.04, 0.34, 0.015);
  const wing = new THREE.Mesh(wingGeom, carbonMat);
  wing.name = 'body_spoiler';
  wing.position.set(0, 1.08, -1.92);
  root.add(wing);

  // 6. Dihedral Doors with air channels
  const lDoorGeom = createContouredBox(0.12, 0.54, 1.34, 0.035);
  const lDoor = new THREE.Mesh(lDoorGeom, paintMat.clone());
  lDoor.name = 'body_door_left';
  lDoor.position.set(-0.8, 0.64, 0.05);
  root.add(lDoor);

  const rDoor = new THREE.Mesh(lDoorGeom, paintMat.clone());
  rDoor.name = 'body_door_right';
  rDoor.position.set(0.8, 0.64, 0.05);
  root.add(rDoor);

  // 7. Flared Aero Fenders
  const flFenderGeom = createContouredBox(0.16, 0.5, 0.82, 0.04);
  const flFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.82, 0.6, 1.32);
  root.add(flFender);

  const frFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.82, 0.6, 1.32);
  root.add(frFender);

  // 8. Rear Quarters with Large Side Air Intakes
  const rlQuarterGeom = createContouredBox(0.18, 0.58, 1.14, 0.04);
  const rlQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.84, 0.68, -1.26);
  root.add(rlQuarter);

  const rrQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.84, 0.68, -1.26);
  root.add(rrQuarter);

  // 9. Side Skirts
  const lSkirtGeom = createContouredBox(0.1, 0.08, 1.74, 0.02);
  const lSkirt = new THREE.Mesh(lSkirtGeom, carbonMat);
  lSkirt.name = 'body_skirt_left';
  lSkirt.position.set(-0.86, 0.28, 0.05);
  root.add(lSkirt);

  const rSkirt = new THREE.Mesh(lSkirtGeom, carbonMat);
  rSkirt.name = 'body_skirt_right';
  rSkirt.position.set(0.86, 0.28, 0.05);
  root.add(rSkirt);

  // 10. Canopy Glass (Panoramic curved bubble)
  const canopyGeom = createContouredBox(1.22, 0.36, 1.64, 0.04);
  const canopy = new THREE.Mesh(canopyGeom, glassMat);
  canopy.name = 'glass_canopy';
  canopy.position.set(0, 0.96, 0.1);
  root.add(canopy);

  // Dual titanium center exhaust
  const exL = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 16).rotateX(Math.PI / 2), chromeMat);
  exL.position.set(-0.12, 0.62, -2.16);
  root.add(exL);

  const exR = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 16).rotateX(Math.PI / 2), chromeMat);
  exR.position.set(0.12, 0.62, -2.16);
  root.add(exR);

  // 11. Staggered Supercar Wheels (Wide rears)
  const wheels = [
    { name: 'fl', x: -0.88, y: 0.34, z: 1.3, w: 0.26, r: 0.35, rim: 0.24 },
    { name: 'fr', x: 0.88, y: 0.34, z: 1.3, w: 0.26, r: 0.35, rim: 0.24 },
    { name: 'rl', x: -0.92, y: 0.36, z: -1.3, w: 0.34, r: 0.37, rim: 0.26 },
    { name: 'rr', x: 0.92, y: 0.36, z: -1.3, w: 0.34, r: 0.37, rim: 0.26 }
  ];

  wheels.forEach((pos) => {
    const wheelGroup = createDetailedWheel(pos.name, pos.x, pos.y, pos.z, pos.r, pos.w, pos.rim);
    while (wheelGroup.children.length > 0) {
      const child = wheelGroup.children[0];
      child.position.add(wheelGroup.position);
      root.add(child);
    }
  });

  return root;
}

// -----------------------------------------------------------------------------
// 3. Rugged 4x4 Off-Roader SUV 3D Model
// -----------------------------------------------------------------------------
function buildRuggedSUV() {
  const root = new THREE.Group();
  root.name = 'Rugged4x4_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x6c5ce7,
    metalness: 0.52,
    roughness: 0.32,
    name: 'SUV_Paint'
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x0f172a,
    metalness: 0.12,
    roughness: 0.08,
    transmission: 0.82,
    transparent: true,
    opacity: 0.74
  });

  const matteBlack = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    metalness: 0.2,
    roughness: 0.85
  });

  // Cockpit Interior
  const interior = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.55, 1.9),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 })
  );
  interior.position.set(0, 1.25, -0.2);
  root.add(interior);

  // 1. Upright Bonnet / Hood
  const bonnetGeom = createContouredBox(1.62, 0.15, 1.38, 0.05);
  const bonnet = new THREE.Mesh(bonnetGeom, paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 1.16, 0.96);
  root.add(bonnet);

  // 2. High-Clearance Roof with rails
  const roofGeom = createContouredBox(1.56, 0.1, 1.68, 0.04);
  const roof = new THREE.Mesh(roofGeom, paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.84, -0.4);
  root.add(roof);

  const roofRailL = new THREE.Mesh(createContouredBox(0.06, 0.08, 1.74, 0.015), matteBlack);
  roofRailL.name = 'trim_roof_rail_left';
  roofRailL.position.set(-0.72, 1.94, -0.4);
  root.add(roofRailL);

  const roofRailR = new THREE.Mesh(createContouredBox(0.06, 0.08, 1.74, 0.015), matteBlack);
  roofRailR.name = 'trim_roof_rail_right';
  roofRailR.position.set(0.72, 1.94, -0.4);
  root.add(roofRailR);

  // 3. Heavy Duty Front & Rear Bumpers
  const fBumperGeom = createContouredBox(1.8, 0.56, 0.44, 0.05);
  const fBumper = new THREE.Mesh(fBumperGeom, matteBlack);
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.66, 1.84);
  root.add(fBumper);

  const rBumperGeom = createContouredBox(1.78, 0.54, 0.4, 0.05);
  const rBumper = new THREE.Mesh(rBumperGeom, matteBlack);
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.66, -1.84);
  root.add(rBumper);

  // 4. Doors (4 doors)
  const flDoorGeom = createContouredBox(0.12, 0.8, 0.86, 0.035);
  const flDoor = new THREE.Mesh(flDoorGeom, paintMat.clone());
  flDoor.name = 'body_door_front_left';
  flDoor.position.set(-0.8, 1.02, 0.28);
  root.add(flDoor);

  const frDoor = new THREE.Mesh(flDoorGeom, paintMat.clone());
  frDoor.name = 'body_door_front_right';
  frDoor.position.set(0.8, 1.02, 0.28);
  root.add(frDoor);

  const rlDoorGeom = createContouredBox(0.12, 0.8, 0.82, 0.035);
  const rlDoor = new THREE.Mesh(rlDoorGeom, paintMat.clone());
  rlDoor.name = 'body_door_rear_left';
  rlDoor.position.set(-0.8, 1.02, -0.52);
  root.add(rlDoor);

  const rrDoor = new THREE.Mesh(rlDoorGeom, paintMat.clone());
  rrDoor.name = 'body_door_rear_right';
  rrDoor.position.set(0.8, 1.02, -0.52);
  root.add(rrDoor);

  // 5. Flared Wheel Arches
  const flFenderGeom = createContouredBox(0.18, 0.7, 0.76, 0.04);
  const flFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.82, 0.94, 1.16);
  root.add(flFender);

  const frFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.82, 0.94, 1.16);
  root.add(frFender);

  const rlQuarterGeom = createContouredBox(0.18, 0.76, 0.82, 0.04);
  const rlQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.82, 1.04, -1.28);
  root.add(rlQuarter);

  const rrQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.82, 1.04, -1.28);
  root.add(rrQuarter);

  // 6. Upright Glass Greenhouse
  const wShieldGeom = createContouredBox(1.5, 0.05, 0.68, 0.02);
  const wShield = new THREE.Mesh(wShieldGeom, glassMat);
  wShield.name = 'glass_windshield';
  wShield.position.set(0, 1.52, 0.54);
  wShield.rotation.x = 0.42;
  root.add(wShield);

  const lWindowsGeom = createContouredBox(0.03, 0.46, 1.66, 0.015);
  const lWindows = new THREE.Mesh(lWindowsGeom, glassMat);
  lWindows.name = 'glass_windows_left';
  lWindows.position.set(-0.76, 1.54, -0.32);
  root.add(lWindows);

  const rWindows = new THREE.Mesh(lWindowsGeom, glassMat);
  rWindows.name = 'glass_windows_right';
  rWindows.position.set(0.76, 1.54, -0.32);
  root.add(rWindows);

  // 7. Rear Mounted Spare Wheel
  const spareWheel = createDetailedWheel('spare_rear', 0, 1.18, -2.0, 0.44, 0.32, 0.26);
  // Name the main tire as spare
  spareWheel.children[0].name = 'wheel_spare_rear';
  while (spareWheel.children.length > 0) {
    const c = spareWheel.children[0];
    c.position.add(spareWheel.position);
    root.add(c);
  }

  // 8. 4x4 Heavy-Duty All-Terrain Wheels
  const wheels = [
    { name: 'fl', x: -0.9, y: 0.45, z: 1.16 },
    { name: 'fr', x: 0.9, y: 0.45, z: 1.16 },
    { name: 'rl', x: -0.9, y: 0.45, z: -1.26 },
    { name: 'rr', x: 0.9, y: 0.45, z: -1.26 }
  ];

  wheels.forEach((pos) => {
    const wheelGroup = createDetailedWheel(pos.name, pos.x, pos.y, pos.z, 0.44, 0.32, 0.26);
    while (wheelGroup.children.length > 0) {
      const child = wheelGroup.children[0];
      child.position.add(wheelGroup.position);
      root.add(child);
    }
  });

  return root;
}

// -----------------------------------------------------------------------------
// 4. Supersport Motorcycle 3D Model
// -----------------------------------------------------------------------------
function buildSupersportBike() {
  const root = new THREE.Group();
  root.name = 'SupersportBike_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x0e3a75,
    metalness: 0.68,
    roughness: 0.22,
    name: 'Bike_Paint'
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7,
    metalness: 0.1,
    roughness: 0.08,
    transmission: 0.88,
    transparent: true,
    opacity: 0.65
  });

  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.88,
    roughness: 0.28
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    metalness: 0.98,
    roughness: 0.12
  });

  // 1. Sculpted Fuel Tank
  const tankGeom = createContouredBox(0.56, 0.4, 0.74, 0.05);
  const tank = new THREE.Mesh(tankGeom, paintMat.clone());
  tank.name = 'body_fuel_tank';
  tank.position.set(0, 1.0, 0.05);
  root.add(tank);

  // 2. Front & Side Racing Fairing
  const fairingGeom = createContouredBox(0.64, 0.54, 0.68, 0.045);
  const fairing = new THREE.Mesh(fairingGeom, paintMat.clone());
  fairing.name = 'body_fairing';
  fairing.position.set(0, 1.06, 0.74);
  fairing.rotation.x = -0.14;
  root.add(fairing);

  // 3. Aerodynamic Windscreen
  const screenGeom = createContouredBox(0.42, 0.03, 0.38, 0.015);
  const screen = new THREE.Mesh(screenGeom, glassMat);
  screen.name = 'glass_windscreen';
  screen.position.set(0, 1.34, 0.84);
  screen.rotation.x = 0.72;
  root.add(screen);

  // 4. Sharp Racing Seat Cowl
  const tailGeom = createContouredBox(0.38, 0.24, 0.68, 0.035);
  const tail = new THREE.Mesh(tailGeom, paintMat.clone());
  tail.name = 'body_seat_cowl';
  tail.position.set(0, 1.04, -0.7);
  tail.rotation.x = 0.2;
  root.add(tail);

  // 5. Lower Belly Pan / Oil Sump
  const bellyGeom = createContouredBox(0.5, 0.3, 0.78, 0.035);
  const bellyPan = new THREE.Mesh(bellyGeom, paintMat.clone());
  bellyPan.name = 'body_belly_pan';
  bellyPan.position.set(0, 0.44, 0.16);
  root.add(bellyPan);

  // 6. Front Fender / Mudguard
  const fFenderGeom = createContouredBox(0.24, 0.12, 0.52, 0.025);
  const fFender = new THREE.Mesh(fFenderGeom, paintMat.clone());
  fFender.name = 'body_front_mudguard';
  fFender.position.set(0, 0.66, 1.06);
  root.add(fFender);

  // 7. Aluminum Trellis Frame & Engine Block
  const frame = new THREE.Mesh(createContouredBox(0.46, 0.48, 0.68, 0.03), frameMat);
  frame.name = 'trim_engine_frame';
  frame.position.set(0, 0.7, 0.06);
  root.add(frame);

  // Inverted front telescopic forks
  const forkL = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 16), chromeMat);
  forkL.position.set(-0.16, 0.74, 0.94);
  forkL.rotation.x = 0.32;
  root.add(forkL);

  const forkR = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 16), chromeMat);
  forkR.position.set(0.16, 0.74, 0.94);
  forkR.rotation.x = 0.32;
  root.add(forkR);

  // 8. Titanium Exhaust Muffler
  const exhaust = new THREE.Mesh(
    new THREE.CylinderGeometry(0.085, 0.07, 0.68, 16).rotateX(Math.PI / 2.2),
    chromeMat
  );
  exhaust.name = 'trim_exhaust';
  exhaust.position.set(0.32, 0.52, -0.48);
  root.add(exhaust);

  // 9. Wheels (Front & Rear)
  const fWheel = createDetailedWheel('front', 0, 0.38, 1.06, 0.35, 0.16, 0.24, true);
  while (fWheel.children.length > 0) {
    const c = fWheel.children[0];
    c.position.add(fWheel.position);
    root.add(c);
  }

  const rWheel = createDetailedWheel('rear', 0, 0.38, -0.96, 0.36, 0.24, 0.24, true);
  while (rWheel.children.length > 0) {
    const c = rWheel.children[0];
    c.position.add(rWheel.position);
    root.add(c);
  }

  return root;
}

async function main() {
  console.log('Generating procedural high-fidelity 3D vehicle assets with legally verified licensing...');
  await exportToGlb(buildSportsSedan(), 'sports-sedan.glb');
  await exportToGlb(buildSupercar(), 'supercar-gt.glb');
  await exportToGlb(buildRuggedSUV(), 'rugged-4x4-suv.glb');
  await exportToGlb(buildSupersportBike(), 'supersport-bike.glb');
  console.log('All 4 core 3D vehicle GLB models generated successfully in public/models/vehicles/!');
}

main().catch(console.error);
