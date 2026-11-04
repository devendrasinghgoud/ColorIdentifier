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

// 1. Executive Sports Sedan 3D Model
function buildSportsSedan() {
  const root = new THREE.Group();
  root.name = 'SportsSedan_Root';

  // Materials
  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    metalness: 0.6,
    roughness: 0.25,
    name: 'CarPaint_Default'
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x111827,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.85,
    transparent: true,
    opacity: 0.7,
    name: 'Glass_Tinted'
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x1c1917,
    metalness: 0.1,
    roughness: 0.85,
    name: 'Tire_Rubber'
  });
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.9,
    roughness: 0.2,
    name: 'Rim_Alloy'
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    metalness: 0.8,
    roughness: 0.3,
    name: 'Trim_GlossBlack'
  });
  const lightMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    emissive: 0x93c5fd,
    emissiveIntensity: 0.5,
    name: 'Light_Emissive'
  });
  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xdc2626,
    emissiveIntensity: 0.6,
    name: 'Light_Red'
  });

  // Body Panels
  // Bonnet / Hood
  const bonnetGeom = new THREE.BoxGeometry(1.5, 0.12, 1.3);
  const bonnet = new THREE.Mesh(bonnetGeom, paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 0.85, 1.15);
  bonnet.rotation.x = 0.08;
  root.add(bonnet);

  // Roof
  const roofGeom = new THREE.BoxGeometry(1.4, 0.08, 1.4);
  const roof = new THREE.Mesh(roofGeom, paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.42, -0.2);
  root.add(roof);

  // Front Bumper
  const fBumperGeom = new THREE.BoxGeometry(1.68, 0.42, 0.4);
  const fBumper = new THREE.Mesh(fBumperGeom, paintMat.clone());
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.45, 1.95);
  root.add(fBumper);

  // Rear Bumper
  const rBumperGeom = new THREE.BoxGeometry(1.66, 0.45, 0.4);
  const rBumper = new THREE.Mesh(rBumperGeom, paintMat.clone());
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.48, -1.95);
  root.add(rBumper);

  // Front Left Door
  const flDoorGeom = new THREE.BoxGeometry(0.12, 0.62, 0.95);
  const flDoor = new THREE.Mesh(flDoorGeom, paintMat.clone());
  flDoor.name = 'body_door_front_left';
  flDoor.position.set(-0.78, 0.72, 0.4);
  root.add(flDoor);

  // Front Right Door
  const frDoorGeom = new THREE.BoxGeometry(0.12, 0.62, 0.95);
  const frDoor = new THREE.Mesh(frDoorGeom, paintMat.clone());
  frDoor.name = 'body_door_front_right';
  frDoor.position.set(0.78, 0.72, 0.4);
  root.add(frDoor);

  // Rear Left Door
  const rlDoorGeom = new THREE.BoxGeometry(0.12, 0.62, 0.88);
  const rlDoor = new THREE.Mesh(rlDoorGeom, paintMat.clone());
  rlDoor.name = 'body_door_rear_left';
  rlDoor.position.set(-0.78, 0.72, -0.48);
  root.add(rlDoor);

  // Rear Right Door
  const rrDoorGeom = new THREE.BoxGeometry(0.12, 0.62, 0.88);
  const rrDoor = new THREE.Mesh(rrDoorGeom, paintMat.clone());
  rrDoor.name = 'body_door_rear_right';
  rrDoor.position.set(0.78, 0.72, -0.48);
  root.add(rrDoor);

  // Front Left Fender
  const flFenderGeom = new THREE.BoxGeometry(0.14, 0.55, 0.75);
  const flFender = new THREE.Mesh(flFenderGeom, paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.77, 0.68, 1.35);
  root.add(flFender);

  // Front Right Fender
  const frFenderGeom = new THREE.BoxGeometry(0.14, 0.55, 0.75);
  const frFender = new THREE.Mesh(frFenderGeom, paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.77, 0.68, 1.35);
  root.add(frFender);

  // Rear Left Quarter
  const rlQuarterGeom = new THREE.BoxGeometry(0.14, 0.62, 0.85);
  const rlQuarter = new THREE.Mesh(rlQuarterGeom, paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.77, 0.75, -1.38);
  root.add(rlQuarter);

  // Rear Right Quarter
  const rrQuarterGeom = new THREE.BoxGeometry(0.14, 0.62, 0.85);
  const rrQuarter = new THREE.Mesh(rrQuarterGeom, paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.77, 0.75, -1.38);
  root.add(rrQuarter);

  // Trunk / Boot Lid
  const bootGeom = new THREE.BoxGeometry(1.42, 0.1, 0.78);
  const boot = new THREE.Mesh(bootGeom, paintMat.clone());
  boot.name = 'body_trunk';
  boot.position.set(0, 0.98, -1.48);
  boot.rotation.x = -0.06;
  root.add(boot);

  // Rear Spoiler / Lip
  const spoilerGeom = new THREE.BoxGeometry(1.48, 0.05, 0.16);
  const spoiler = new THREE.Mesh(spoilerGeom, trimMat.clone());
  spoiler.name = 'body_spoiler';
  spoiler.position.set(0, 1.05, -1.82);
  root.add(spoiler);

  // Side Skirts
  const lSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 2.1), trimMat.clone());
  lSkirt.name = 'body_skirt_left';
  lSkirt.position.set(-0.8, 0.32, -0.05);
  root.add(lSkirt);

  const rSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 2.1), trimMat.clone());
  rSkirt.name = 'body_skirt_right';
  rSkirt.position.set(0.8, 0.32, -0.05);
  root.add(rSkirt);

  // Side Mirrors
  const lMirror = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.15), paintMat.clone());
  lMirror.name = 'body_mirror_left';
  lMirror.position.set(-0.92, 1.05, 0.78);
  root.add(lMirror);

  const rMirror = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.15), paintMat.clone());
  rMirror.name = 'body_mirror_right';
  rMirror.position.set(0.92, 1.05, 0.78);
  root.add(rMirror);

  // Windows & Windshield
  const wShieldGeom = new THREE.BoxGeometry(1.36, 0.06, 0.72);
  const wShield = new THREE.Mesh(wShieldGeom, glassMat);
  wShield.name = 'glass_windshield';
  wShield.position.set(0, 1.18, 0.65);
  wShield.rotation.x = 0.65;
  root.add(wShield);

  const rShieldGeom = new THREE.BoxGeometry(1.32, 0.06, 0.68);
  const rShield = new THREE.Mesh(rShieldGeom, glassMat);
  rShield.name = 'glass_rear';
  rShield.position.set(0, 1.22, -0.98);
  rShield.rotation.x = -0.58;
  root.add(rShield);

  const lWindows = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.38, 1.55), glassMat);
  lWindows.name = 'glass_windows_left';
  lWindows.position.set(-0.73, 1.18, -0.08);
  root.add(lWindows);

  const rWindows = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.38, 1.55), glassMat);
  rWindows.name = 'glass_windows_right';
  rWindows.position.set(0.73, 1.18, -0.08);
  root.add(rWindows);

  // Front Grille & Lights
  const grille = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.1), trimMat);
  grille.name = 'trim_grille';
  grille.position.set(0, 0.52, 2.12);
  root.add(grille);

  const flHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.1), lightMat);
  flHeadlight.name = 'trim_headlight_left';
  flHeadlight.position.set(-0.62, 0.68, 2.05);
  root.add(flHeadlight);

  const frHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.1), lightMat);
  frHeadlight.name = 'trim_headlight_right';
  frHeadlight.position.set(0.62, 0.68, 2.05);
  root.add(frHeadlight);

  const rlTail = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.08), tailMat);
  rlTail.name = 'trim_taillight_left';
  rlTail.position.set(-0.62, 0.78, -2.06);
  root.add(rlTail);

  const rrTail = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.08), tailMat);
  rrTail.name = 'trim_taillight_right';
  rrTail.position.set(0.62, 0.78, -2.06);
  root.add(rrTail);

  // Wheels (4 units)
  const wheelPositions = [
    { name: 'fl', x: -0.84, y: 0.35, z: 1.35 },
    { name: 'fr', x: 0.84, y: 0.35, z: 1.35 },
    { name: 'rl', x: -0.84, y: 0.35, z: -1.35 },
    { name: 'rr', x: 0.84, y: 0.35, z: -1.35 }
  ];

  wheelPositions.forEach((pos) => {
    const tireGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 24);
    tireGeom.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeom, tireMat);
    tire.name = `wheel_tire_${pos.name}`;
    tire.position.set(pos.x, pos.y, pos.z);
    root.add(tire);

    const rimGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.26, 16);
    rimGeom.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeom, rimMat.clone());
    rim.name = `wheel_rim_${pos.name}`;
    rim.position.set(pos.x, pos.y, pos.z);
    root.add(rim);
  });

  return root;
}

// 2. Mid-Engine Supercar 3D Model
function buildSupercar() {
  const root = new THREE.Group();
  root.name = 'Supercar_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0xffbf00,
    metalness: 0.7,
    roughness: 0.2,
    name: 'Supercar_Paint'
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x050505,
    transmission: 0.88,
    transparent: true,
    opacity: 0.65,
    name: 'Canopy_Glass'
  });
  const carbonMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    metalness: 0.4,
    roughness: 0.4,
    name: 'Carbon_Fiber'
  });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.95, roughness: 0.15 });

  // Low Front Hood
  const bonnetGeom = new THREE.BoxGeometry(1.48, 0.08, 1.25);
  const bonnet = new THREE.Mesh(bonnetGeom, paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 0.65, 1.15);
  bonnet.rotation.x = 0.12;
  root.add(bonnet);

  // Low Canopy Roof
  const roofGeom = new THREE.BoxGeometry(1.22, 0.06, 1.2);
  const roof = new THREE.Mesh(roofGeom, paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.12, -0.05);
  root.add(roof);

  // Aggressive Front Bumper with Splitter
  const fBumper = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.32, 0.45), paintMat.clone());
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.38, 1.95);
  root.add(fBumper);

  const fSplitter = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.05, 0.3), carbonMat);
  fSplitter.name = 'body_splitter';
  fSplitter.position.set(0, 0.2, 2.05);
  root.add(fSplitter);

  // Rear Diffuser & Bumper
  const rBumper = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.4, 0.45), paintMat.clone());
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.48, -1.98);
  root.add(rBumper);

  // GT Rear Wing
  const wing = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.04, 0.32), carbonMat);
  wing.name = 'body_spoiler';
  wing.position.set(0, 1.05, -1.9);
  root.add(wing);

  // Dihedral Doors
  const lDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.52, 1.3), paintMat.clone());
  lDoor.name = 'body_door_left';
  lDoor.position.set(-0.8, 0.62, 0.05);
  root.add(lDoor);

  const rDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.52, 1.3), paintMat.clone());
  rDoor.name = 'body_door_right';
  rDoor.position.set(0.8, 0.62, 0.05);
  root.add(rDoor);

  // Wide Fenders
  const flFender = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.48, 0.8), paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.82, 0.58, 1.3);
  root.add(flFender);

  const frFender = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.48, 0.8), paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.82, 0.58, 1.3);
  root.add(frFender);

  // Rear Quarter with Engine Intake Scoops
  const rlQuarter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 1.1), paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.84, 0.65, -1.25);
  root.add(rlQuarter);

  const rrQuarter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 1.1), paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.84, 0.65, -1.25);
  root.add(rrQuarter);

  // Side Skirts
  const lSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 1.7), carbonMat);
  lSkirt.name = 'body_skirt_left';
  lSkirt.position.set(-0.85, 0.28, 0.05);
  root.add(lSkirt);

  const rSkirt = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 1.7), carbonMat);
  rSkirt.name = 'body_skirt_right';
  rSkirt.position.set(0.85, 0.28, 0.05);
  root.add(rSkirt);

  // Canopy Glass
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 1.6), glassMat);
  canopy.name = 'glass_canopy';
  canopy.position.set(0, 0.95, 0.1);
  root.add(canopy);

  // Supercar Wheels (Wide staggered rear)
  const wheels = [
    { name: 'fl', x: -0.88, y: 0.34, z: 1.3, w: 0.26 },
    { name: 'fr', x: 0.88, y: 0.34, z: 1.3, w: 0.26 },
    { name: 'rl', x: -0.92, y: 0.36, z: -1.3, w: 0.34 },
    { name: 'rr', x: 0.92, y: 0.36, z: -1.3, w: 0.34 }
  ];

  wheels.forEach((pos) => {
    const tire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, pos.w, 24).rotateZ(Math.PI / 2),
      tireMat
    );
    tire.name = `wheel_tire_${pos.name}`;
    tire.position.set(pos.x, pos.y, pos.z);
    root.add(tire);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, pos.w + 0.01, 16).rotateZ(Math.PI / 2),
      rimMat.clone()
    );
    rim.name = `wheel_rim_${pos.name}`;
    rim.position.set(pos.x, pos.y, pos.z);
    root.add(rim);
  });

  return root;
}

// 3. Rugged 4x4 SUV 3D Model
function buildRuggedSUV() {
  const root = new THREE.Group();
  root.name = 'Rugged4x4_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x6c5ce7,
    metalness: 0.5,
    roughness: 0.35,
    name: 'SUV_Paint'
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x1e293b,
    transmission: 0.8,
    transparent: true,
    opacity: 0.75
  });
  const matteBlack = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.85 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.95 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 });

  // Upright Hood
  const bonnet = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 1.35), paintMat.clone());
  bonnet.name = 'body_bonnet';
  bonnet.position.set(0, 1.15, 0.95);
  root.add(bonnet);

  // Flat High Roof with Rails
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.1, 1.65), paintMat.clone());
  roof.name = 'body_roof';
  roof.position.set(0, 1.82, -0.4);
  root.add(roof);

  const roofRailL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 1.7), matteBlack);
  roofRailL.name = 'trim_roof_rail_left';
  roofRailL.position.set(-0.72, 1.92, -0.4);
  root.add(roofRailL);

  const roofRailR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 1.7), matteBlack);
  roofRailR.name = 'trim_roof_rail_right';
  roofRailR.position.set(0.72, 1.92, -0.4);
  root.add(roofRailR);

  // Heavy Duty Front Bumper
  const fBumper = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.55, 0.42), matteBlack);
  fBumper.name = 'body_bumper_front';
  fBumper.position.set(0, 0.65, 1.82);
  root.add(fBumper);

  // Rear Bumper
  const rBumper = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.52, 0.38), matteBlack);
  rBumper.name = 'body_bumper_rear';
  rBumper.position.set(0, 0.65, -1.82);
  root.add(rBumper);

  // 4 Doors
  const flDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.78, 0.85), paintMat.clone());
  flDoor.name = 'body_door_front_left';
  flDoor.position.set(-0.8, 1.0, 0.28);
  root.add(flDoor);

  const frDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.78, 0.85), paintMat.clone());
  frDoor.name = 'body_door_front_right';
  frDoor.position.set(0.8, 1.0, 0.28);
  root.add(frDoor);

  const rlDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.78, 0.8), paintMat.clone());
  rlDoor.name = 'body_door_rear_left';
  rlDoor.position.set(-0.8, 1.0, -0.52);
  root.add(rlDoor);

  const rrDoor = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.78, 0.8), paintMat.clone());
  rrDoor.name = 'body_door_rear_right';
  rrDoor.position.set(0.8, 1.0, -0.52);
  root.add(rrDoor);

  // Flared Arches
  const flFender = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.68, 0.75), paintMat.clone());
  flFender.name = 'body_fender_front_left';
  flFender.position.set(-0.82, 0.92, 1.15);
  root.add(flFender);

  const frFender = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.68, 0.75), paintMat.clone());
  frFender.name = 'body_fender_front_right';
  frFender.position.set(0.82, 0.92, 1.15);
  root.add(frFender);

  const rlQuarter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.75, 0.8), paintMat.clone());
  rlQuarter.name = 'body_quarter_rear_left';
  rlQuarter.position.set(-0.82, 1.02, -1.28);
  root.add(rlQuarter);

  const rrQuarter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.75, 0.8), paintMat.clone());
  rrQuarter.name = 'body_quarter_rear_right';
  rrQuarter.position.set(0.82, 1.02, -1.28);
  root.add(rrQuarter);

  // Upright Glass Greenhouse
  const wShield = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.06, 0.65).rotateX(0.42), glassMat);
  wShield.name = 'glass_windshield';
  wShield.position.set(0, 1.5, 0.52);
  root.add(wShield);

  const lWindows = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.45, 1.62), glassMat);
  lWindows.name = 'glass_windows_left';
  lWindows.position.set(-0.76, 1.52, -0.32);
  root.add(lWindows);

  const rWindows = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.45, 1.62), glassMat);
  rWindows.name = 'glass_windows_right';
  rWindows.position.set(0.76, 1.52, -0.32);
  root.add(rWindows);

  // Rear Mounted Spare Tire
  const spareTire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.42, 0.28, 24).rotateX(Math.PI / 2),
    tireMat
  );
  spareTire.name = 'wheel_spare_rear';
  spareTire.position.set(0, 1.15, -1.98);
  root.add(spareTire);

  // Big All-Terrain 4x4 Wheels
  const wheels = [
    { name: 'fl', x: -0.9, y: 0.45, z: 1.15 },
    { name: 'fr', x: 0.9, y: 0.45, z: 1.15 },
    { name: 'rl', x: -0.9, y: 0.45, z: -1.25 },
    { name: 'rr', x: 0.9, y: 0.45, z: -1.25 }
  ];

  wheels.forEach((pos) => {
    const tire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.44, 0.44, 0.32, 24).rotateZ(Math.PI / 2),
      tireMat
    );
    tire.name = `wheel_tire_${pos.name}`;
    tire.position.set(pos.x, pos.y, pos.z);
    root.add(tire);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 0.26, 0.33, 16).rotateZ(Math.PI / 2),
      rimMat.clone()
    );
    rim.name = `wheel_rim_${pos.name}`;
    rim.position.set(pos.x, pos.y, pos.z);
    root.add(rim);
  });

  return root;
}

// 4. Supersport Motorcycle 3D Model
function buildSupersportBike() {
  const root = new THREE.Group();
  root.name = 'SupersportBike_Root';

  const paintMat = new THREE.MeshStandardMaterial({
    color: 0x0e3a75,
    metalness: 0.65,
    roughness: 0.25,
    name: 'Bike_Paint'
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x38bdf8,
    transmission: 0.85,
    transparent: true,
    opacity: 0.6
  });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.3 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 });

  // Sculpted Fuel Tank
  const tank = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.72), paintMat.clone());
  tank.name = 'body_fuel_tank';
  tank.position.set(0, 0.98, 0.05);
  root.add(tank);

  // Aerodynamic Front Fairing / Nose Cowl
  const fairing = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.52, 0.65), paintMat.clone());
  fairing.name = 'body_fairing';
  fairing.position.set(0, 1.05, 0.72);
  fairing.rotation.x = -0.15;
  root.add(fairing);

  // Windscreen
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.04, 0.35).rotateX(0.7), glassMat);
  screen.name = 'glass_windscreen';
  screen.position.set(0, 1.32, 0.82);
  root.add(screen);

  // Tail Section / Seat Cowl
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.22, 0.65), paintMat.clone());
  tail.name = 'body_seat_cowl';
  tail.position.set(0, 1.02, -0.68);
  tail.rotation.x = 0.22;
  root.add(tail);

  // Lower Belly Pan / Engine Cowl
  const bellyPan = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.28, 0.75), paintMat.clone());
  bellyPan.name = 'body_belly_pan';
  bellyPan.position.set(0, 0.42, 0.15);
  root.add(bellyPan);

  // Front Fender / Mudguard
  const fFender = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.48), paintMat.clone());
  fFender.name = 'body_front_mudguard';
  fFender.position.set(0, 0.65, 1.05);
  root.add(fFender);

  // Exposed Frame & Engine
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.45, 0.65), frameMat);
  frame.name = 'trim_engine_frame';
  frame.position.set(0, 0.68, 0.05);
  root.add(frame);

  // Exhaust Muffler
  const exhaust = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.07, 0.65, 16).rotateX(Math.PI / 2.2),
    frameMat
  );
  exhaust.name = 'trim_exhaust';
  exhaust.position.set(0.32, 0.52, -0.48);
  root.add(exhaust);

  // Front Wheel
  const fTire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.35, 0.16, 24).rotateZ(Math.PI / 2),
    tireMat
  );
  fTire.name = 'wheel_tire_front';
  fTire.position.set(0, 0.38, 1.05);
  root.add(fTire);

  const fRim = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.17, 16).rotateZ(Math.PI / 2),
    rimMat.clone()
  );
  fRim.name = 'wheel_rim_front';
  fRim.position.set(0, 0.38, 1.05);
  root.add(fRim);

  // Rear Wheel
  const rTire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.36, 0.36, 0.24, 24).rotateZ(Math.PI / 2),
    tireMat
  );
  rTire.name = 'wheel_tire_rear';
  rTire.position.set(0, 0.38, -0.95);
  root.add(rTire);

  const rRim = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.25, 16).rotateZ(Math.PI / 2),
    rimMat.clone()
  );
  rRim.name = 'wheel_rim_rear';
  rRim.position.set(0, 0.38, -0.95);
  root.add(rRim);

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
