export type VehicleCategory =
  | 'sedan'
  | 'suv'
  | 'hatchback'
  | 'coupe'
  | 'sportscar'
  | 'convertible'
  | 'pickup'
  | 'ev'
  | 'luxury'
  | 'supercar'
  | 'motorcycle';

export type DrivetrainType = 'RWD' | 'FWD' | 'AWD' | '4WD' | 'Chain Drive' | 'Shaft Drive';

export type TransmissionType =
  | 'Manual'
  | 'Automatic'
  | 'Dual-Clutch (DCT)'
  | 'Single-Speed Direct (EV)'
  | 'CVT'
  | 'Sequential';

export type AssetLicenseType =
  | 'CC-BY-4.0'
  | 'MIT'
  | 'Public-Domain'
  | 'Commercial-OEM'
  | 'Editorial-Only'
  | 'Pending-Verification';

export type AssetVerificationStatus =
  | 'approved'
  | 'pending_verification'
  | 'restricted'
  | 'unavailable';

export interface VehicleVariant {
  id: string;
  name: string;
  trim: string;
  drivetrain: DrivetrainType;
  transmission: TransmissionType;
  engineSpecs: string;
  horsepower: number;
  torqueNm: number;
  isDiscontinued?: boolean;
}

export interface VehicleGeneration {
  id: string;
  code: string;
  name: string;
  years: number[];
  variants: VehicleVariant[];
}

export interface VehicleModel {
  id: string;
  name: string;
  category: VehicleCategory;
  generations: VehicleGeneration[];
  imageUrl?: string;
  isDiscontinued?: boolean;
  assetId?: string; // Links to Asset Registry if licensed 3D model exists
}

export interface VehicleManufacturer {
  id: string;
  name: string;
  country: string;
  logoUrl?: string;
  models: VehicleModel[];
}

export interface MarketCountry {
  code: string;
  name: string;
  region: 'Asia-Pacific' | 'Europe' | 'North America' | 'Global';
  manufacturers: VehicleManufacturer[];
}

// 3D Asset & Mesh Mapping Definitions
export interface MeshPanelMapping {
  id: string;
  name: string;
  nodeName: string; // Three.js mesh/node name in GLTF
  category: 'body' | 'aero' | 'glass' | 'wheel' | 'trim' | 'caliper';
  defaultColor?: string;
  defaultFinish?: 'glossy' | 'metallic' | 'matte' | 'satin' | 'pearl' | 'chrome';
}

export interface AssetLicenseMetadata {
  provider: string;
  originalAssetId: string;
  author: string;
  authorUrl?: string;
  licenseType: AssetLicenseType;
  commercialUsageAllowed: boolean;
  webEmbeddingAllowed: boolean;
  modificationAllowed: boolean;
  redistributionAllowed: boolean;
  expiryDate?: string;
  verificationStatus: AssetVerificationStatus;
  assetVersion: string;
  verificationNotes: string;
}

export interface VehicleAsset3D {
  assetId: string;
  vehicleRef: {
    country: string;
    manufacturer: string;
    model: string;
    generation?: string;
  };
  glbUrl: string;
  aoMapUrl?: string;
  isDracoCompressed: boolean;
  fileSizeBytes: number;
  meshCount: number;
  materialCount: number;
  cameraDefaults: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
  };
  license: AssetLicenseMetadata;
  meshMappings: {
    paintablePanels: MeshPanelMapping[];
    glassMeshes: string[];
    wheelRims: string[];
    wheelTires: string[];
    brakeCalipers: string[];
    exteriorTrim: string[];
  };
  supportedCapabilities: {
    independentPanels: boolean;
    customWheelFinish: boolean;
    customCaliperColor: boolean;
    customGlassTint: boolean;
  };
}

export interface VehicleCustomizerState {
  market: string;
  manufacturer: string;
  model: string;
  generation: string;
  year: number;
  variant: string;
  drivetrain: DrivetrainType;
  transmission: TransmissionType;
  activePanelId: string;
  panelColors: Record<string, {
    hex: string;
    finish: 'glossy' | 'metallic' | 'matte' | 'satin' | 'pearl' | 'chrome';
    roughness: number;
    metalness: number;
    clearcoat: number;
    clearcoatRoughness: number;
  }>;
  rimColor: string;
  rimFinish: 'machined' | 'satin' | 'gloss';
  caliperColor: string;
  glassTint: 'clear' | 'light' | 'factory' | 'limo';
  trimFinish: 'black' | 'chrome' | 'carbon';
}
