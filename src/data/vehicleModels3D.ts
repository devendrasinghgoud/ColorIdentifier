export interface MeshRegionDefinition {
  id: string;
  name: string;
  meshName: string;
  defaultColor?: string;
  defaultFinish?: 'glossy' | 'matte' | 'metallic' | 'satin';
}

export interface VehicleModel3D {
  id: string;
  country: string;
  manufacturer: string;
  modelName: string;
  yearGeneration: string;
  vehicleType: 'sedan' | 'suv' | 'sportscar' | 'coupe' | 'hatchback' | 'pickup' | 'motorcycle';
  status: 'available' | 'in_development' | 'license_pending';
  glbUrl?: string;
  sourceAttribution: string;
  license: string;
  defaultColor: string;
  cameraPosition: [number, number, number];
  namedBodyMeshes: MeshRegionDefinition[];
  namedGlassMeshes: string[];
  namedWheelMeshes: string[];
  namedTrimMeshes: string[];
}

export const COUNTRIES = [
  'All Countries',
  'India',
  'Germany',
  'United Kingdom',
  'United States',
  'Japan',
  'Italy'
] as const;

export const VEHICLE_MODELS_3D: VehicleModel3D[] = [
  // AVAILABLE 3D MODELS (Active in 3D Viewer)
  {
    id: 'sports-sedan-gt',
    country: 'Germany',
    manufacturer: 'ColorCode Studio (Aero Platform)',
    modelName: 'Executive Sports Sedan Platform',
    yearGeneration: '2024 Gen-V',
    vehicleType: 'sedan',
    status: 'available',
    glbUrl: '/models/vehicles/sports-sedan.glb',
    sourceAttribution: 'ColorCode Identifier Open Automotive Engineering Lab',
    license: 'MIT Open Asset License (Procedurally Engineered)',
    defaultColor: '#3B82F6',
    cameraPosition: [3.8, 1.8, 3.8],
    namedBodyMeshes: [
      { id: 'bonnet', name: 'Bonnet / Hood', meshName: 'body_bonnet' },
      { id: 'roof', name: 'Roof Panel', meshName: 'body_roof' },
      { id: 'bumper-front', name: 'Front Bumper', meshName: 'body_bumper_front' },
      { id: 'bumper-rear', name: 'Rear Bumper', meshName: 'body_bumper_rear' },
      { id: 'door-fl', name: 'Front Left Door', meshName: 'body_door_front_left' },
      { id: 'door-fr', name: 'Front Right Door', meshName: 'body_door_front_right' },
      { id: 'door-rl', name: 'Rear Left Door', meshName: 'body_door_rear_left' },
      { id: 'door-rr', name: 'Rear Right Door', meshName: 'body_door_rear_right' },
      { id: 'fender-fl', name: 'Front Left Fender', meshName: 'body_fender_front_left' },
      { id: 'fender-fr', name: 'Front Right Fender', meshName: 'body_fender_front_right' },
      { id: 'quarter-rl', name: 'Rear Left Quarter', meshName: 'body_quarter_rear_left' },
      { id: 'quarter-rr', name: 'Rear Right Quarter', meshName: 'body_quarter_rear_right' },
      { id: 'trunk', name: 'Boot / Trunk Lid', meshName: 'body_trunk' },
      { id: 'mirror-fl', name: 'Left Mirror', meshName: 'body_mirror_left' },
      { id: 'mirror-fr', name: 'Right Mirror', meshName: 'body_mirror_right' },
      { id: 'spoiler', name: 'Rear Decklid Spoiler', meshName: 'body_spoiler' },
      { id: 'skirt-left', name: 'Left Side Skirt', meshName: 'body_skirt_left' },
      { id: 'skirt-right', name: 'Right Side Skirt', meshName: 'body_skirt_right' }
    ],
    namedGlassMeshes: ['glass_windshield', 'glass_rear', 'glass_windows_left', 'glass_windows_right'],
    namedWheelMeshes: [
      'wheel_tire_fl', 'wheel_rim_fl',
      'wheel_tire_fr', 'wheel_rim_fr',
      'wheel_tire_rl', 'wheel_rim_rl',
      'wheel_tire_rr', 'wheel_rim_rr'
    ],
    namedTrimMeshes: ['trim_grille', 'trim_headlight_left', 'trim_headlight_right', 'trim_taillight_left', 'trim_taillight_right']
  },
  {
    id: 'supercar-gt-midengine',
    country: 'Italy',
    manufacturer: 'ColorCode Studio (Aero Platform)',
    modelName: 'Mid-Engine Exotic Supercar',
    yearGeneration: '2024 Track Edition',
    vehicleType: 'sportscar',
    status: 'available',
    glbUrl: '/models/vehicles/supercar-gt.glb',
    sourceAttribution: 'ColorCode Identifier Open Automotive Engineering Lab',
    license: 'MIT Open Asset License (Procedurally Engineered)',
    defaultColor: '#FFBF00',
    cameraPosition: [3.4, 1.4, 3.4],
    namedBodyMeshes: [
      { id: 'bonnet', name: 'Front Aerodynamic Hood', meshName: 'body_bonnet' },
      { id: 'roof', name: 'Low Canopy Roof', meshName: 'body_roof' },
      { id: 'bumper-front', name: 'Front Fascia & Nose', meshName: 'body_bumper_front' },
      { id: 'splitter', name: 'Front Carbon Splitter', meshName: 'body_splitter' },
      { id: 'bumper-rear', name: 'Rear Aero Diffuser', meshName: 'body_bumper_rear' },
      { id: 'door-left', name: 'Dihedral Left Door', meshName: 'body_door_left' },
      { id: 'door-right', name: 'Dihedral Right Door', meshName: 'body_door_right' },
      { id: 'fender-fl', name: 'Front Left Aero Fender', meshName: 'body_fender_front_left' },
      { id: 'fender-fr', name: 'Front Right Aero Fender', meshName: 'body_fender_front_right' },
      { id: 'quarter-rl', name: 'Rear Left Intake Quarter', meshName: 'body_quarter_rear_left' },
      { id: 'quarter-rr', name: 'Rear Right Intake Quarter', meshName: 'body_quarter_rear_right' },
      { id: 'spoiler', name: 'High-Downforce GT Wing', meshName: 'body_spoiler' },
      { id: 'skirt-left', name: 'Left Carbon Skirt', meshName: 'body_skirt_left' },
      { id: 'skirt-right', name: 'Right Carbon Skirt', meshName: 'body_skirt_right' }
    ],
    namedGlassMeshes: ['glass_canopy'],
    namedWheelMeshes: [
      'wheel_tire_fl', 'wheel_rim_fl',
      'wheel_tire_fr', 'wheel_rim_fr',
      'wheel_tire_rl', 'wheel_rim_rl',
      'wheel_tire_rr', 'wheel_rim_rr'
    ],
    namedTrimMeshes: []
  },
  {
    id: 'rugged-4x4-offroader',
    country: 'India',
    manufacturer: 'ColorCode Studio (Aero Platform)',
    modelName: 'Rugged 4x4 Off-Road Utility',
    yearGeneration: '2024 Heavy-Duty',
    vehicleType: 'suv',
    status: 'available',
    glbUrl: '/models/vehicles/rugged-4x4-suv.glb',
    sourceAttribution: 'ColorCode Identifier Open Automotive Engineering Lab',
    license: 'MIT Open Asset License (Procedurally Engineered)',
    defaultColor: '#6C5CE7',
    cameraPosition: [4.2, 2.2, 4.2],
    namedBodyMeshes: [
      { id: 'bonnet', name: 'Upright Steel Bonnet', meshName: 'body_bonnet' },
      { id: 'roof', name: 'High-Clearance Roof', meshName: 'body_roof' },
      { id: 'bumper-front', name: 'Heavy Duty Front Bumper', meshName: 'body_bumper_front' },
      { id: 'bumper-rear', name: 'Steel Rear Step Bumper', meshName: 'body_bumper_rear' },
      { id: 'door-fl', name: 'Front Left Door', meshName: 'body_door_front_left' },
      { id: 'door-fr', name: 'Front Right Door', meshName: 'body_door_front_right' },
      { id: 'door-rl', name: 'Rear Left Door', meshName: 'body_door_rear_left' },
      { id: 'door-rr', name: 'Rear Right Door', meshName: 'body_door_rear_right' },
      { id: 'fender-fl', name: 'Flared Front Left Arch', meshName: 'body_fender_front_left' },
      { id: 'fender-fr', name: 'Flared Front Right Arch', meshName: 'body_fender_front_right' },
      { id: 'quarter-rl', name: 'Rear Left Flank', meshName: 'body_quarter_rear_left' },
      { id: 'quarter-rr', name: 'Rear Right Flank', meshName: 'body_quarter_rear_right' }
    ],
    namedGlassMeshes: ['glass_windshield', 'glass_windows_left', 'glass_windows_right'],
    namedWheelMeshes: [
      'wheel_tire_fl', 'wheel_rim_fl',
      'wheel_tire_fr', 'wheel_rim_fr',
      'wheel_tire_rl', 'wheel_rim_rl',
      'wheel_tire_rr', 'wheel_rim_rr',
      'wheel_spare_rear'
    ],
    namedTrimMeshes: ['trim_roof_rail_left', 'trim_roof_rail_right']
  },
  {
    id: 'supersport-1000-bike',
    country: 'Japan',
    manufacturer: 'ColorCode Studio (Aero Platform)',
    modelName: 'Supersport 1000cc Racing Motorcycle',
    yearGeneration: '2024 GP Aero',
    vehicleType: 'motorcycle',
    status: 'available',
    glbUrl: '/models/vehicles/supersport-bike.glb',
    sourceAttribution: 'ColorCode Identifier Open Automotive Engineering Lab',
    license: 'MIT Open Asset License (Procedurally Engineered)',
    defaultColor: '#0E3A75',
    cameraPosition: [2.6, 1.3, 2.6],
    namedBodyMeshes: [
      { id: 'fuel-tank', name: 'Sculpted Fuel Tank', meshName: 'body_fuel_tank' },
      { id: 'fairing', name: 'Front & Side Racing Fairing', meshName: 'body_fairing' },
      { id: 'seat-cowl', name: 'Aerodynamic Tail Cowl', meshName: 'body_seat_cowl' },
      { id: 'belly-pan', name: 'Lower Engine Belly Pan', meshName: 'body_belly_pan' },
      { id: 'front-mudguard', name: 'Front Fender / Mudguard', meshName: 'body_front_mudguard' }
    ],
    namedGlassMeshes: ['glass_windscreen'],
    namedWheelMeshes: [
      'wheel_tire_front', 'wheel_rim_front',
      'wheel_tire_rear', 'wheel_rim_rear'
    ],
    namedTrimMeshes: ['trim_engine_frame', 'trim_exhaust']
  },

  // INTERNATIONAL CATALOGUE (Transparently indicating pending license verification)
  // India
  {
    id: 'mahindra-thar',
    country: 'India',
    manufacturer: 'Mahindra',
    modelName: 'Thar 4x4',
    yearGeneration: '2020-Present (2nd Gen)',
    vehicleType: 'suv',
    status: 'license_pending',
    sourceAttribution: 'Mahindra & Mahindra Ltd. (Trademark and IP acknowledged; 3D asset in legal verification pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#1F2937',
    cameraPosition: [4.2, 2.2, 4.2],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'tata-harrier',
    country: 'India',
    manufacturer: 'Tata Motors',
    modelName: 'Harrier Dark Edition',
    yearGeneration: '2023 Facelift',
    vehicleType: 'suv',
    status: 'license_pending',
    sourceAttribution: 'Tata Motors Ltd. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#0F172A',
    cameraPosition: [4.2, 2.0, 4.2],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'maruti-suzuki-jimny',
    country: 'India',
    manufacturer: 'Maruti Suzuki',
    modelName: 'Jimny 5-Door',
    yearGeneration: '2023-Present',
    vehicleType: 'suv',
    status: 'license_pending',
    sourceAttribution: 'Maruti Suzuki India Ltd. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#84CC16',
    cameraPosition: [3.8, 1.8, 3.8],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'force-gurkha',
    country: 'India',
    manufacturer: 'Force Motors',
    modelName: 'Gurkha 4x4',
    yearGeneration: '2024 5-Door',
    vehicleType: 'suv',
    status: 'license_pending',
    sourceAttribution: 'Force Motors Ltd. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#D97706',
    cameraPosition: [4.5, 2.3, 4.5],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },

  // Germany
  {
    id: 'bmw-m3-competition',
    country: 'Germany',
    manufacturer: 'BMW',
    modelName: 'M3 Competition (G80)',
    yearGeneration: '2021-Present',
    vehicleType: 'sedan',
    status: 'license_pending',
    sourceAttribution: 'Bayerische Motoren Werke AG (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#2563EB',
    cameraPosition: [3.8, 1.8, 3.8],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'porsche-911-gt3',
    country: 'Germany',
    manufacturer: 'Porsche',
    modelName: '911 GT3 (992)',
    yearGeneration: '2022-Present',
    vehicleType: 'sportscar',
    status: 'license_pending',
    sourceAttribution: 'Dr. Ing. h.c. F. Porsche AG (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#0284C7',
    cameraPosition: [3.4, 1.4, 3.4],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'mercedes-amg-gt',
    country: 'Germany',
    manufacturer: 'Mercedes-Benz',
    modelName: 'AMG GT Coupe (C192)',
    yearGeneration: '2024-Present',
    vehicleType: 'coupe',
    status: 'license_pending',
    sourceAttribution: 'Mercedes-Benz Group AG (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#DC2626',
    cameraPosition: [3.6, 1.5, 3.6],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },

  // United Kingdom
  {
    id: 'rolls-royce-ghost',
    country: 'United Kingdom',
    manufacturer: 'Rolls-Royce',
    modelName: 'Ghost Series II',
    yearGeneration: '2020-Present',
    vehicleType: 'sedan',
    status: 'license_pending',
    sourceAttribution: 'Rolls-Royce Motor Cars Ltd. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#09090B',
    cameraPosition: [4.4, 1.9, 4.4],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'range-rover-sport',
    country: 'United Kingdom',
    manufacturer: 'Range Rover',
    modelName: 'Range Rover Sport (L461)',
    yearGeneration: '2023-Present',
    vehicleType: 'suv',
    status: 'license_pending',
    sourceAttribution: 'Jaguar Land Rover Ltd. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#475569',
    cameraPosition: [4.2, 2.1, 4.2],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },

  // United States
  {
    id: 'ford-mustang-dark-horse',
    country: 'United States',
    manufacturer: 'Ford',
    modelName: 'Mustang Dark Horse (S650)',
    yearGeneration: '2024-Present',
    vehicleType: 'coupe',
    status: 'license_pending',
    sourceAttribution: 'Ford Motor Company (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#1E1B4B',
    cameraPosition: [3.8, 1.6, 3.8],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },
  {
    id: 'tesla-model-3',
    country: 'United States',
    manufacturer: 'Tesla',
    modelName: 'Model 3 Highland',
    yearGeneration: '2024-Present',
    vehicleType: 'sedan',
    status: 'license_pending',
    sourceAttribution: 'Tesla, Inc. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#E11D48',
    cameraPosition: [3.8, 1.7, 3.8],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },

  // Japan
  {
    id: 'toyota-gr-supra',
    country: 'Japan',
    manufacturer: 'Toyota',
    modelName: 'GR Supra (A90)',
    yearGeneration: '2020-Present',
    vehicleType: 'sportscar',
    status: 'license_pending',
    sourceAttribution: 'Toyota Motor Corporation (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#EAB308',
    cameraPosition: [3.5, 1.5, 3.5],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  },

  // Italy
  {
    id: 'ferrari-296-gtb',
    country: 'Italy',
    manufacturer: 'Ferrari',
    modelName: '296 GTB Hybrid',
    yearGeneration: '2022-Present',
    vehicleType: 'sportscar',
    status: 'license_pending',
    sourceAttribution: 'Ferrari N.V. (Asset curation pipeline)',
    license: 'OEM Licensing Verification Pending',
    defaultColor: '#DC2626',
    cameraPosition: [3.4, 1.4, 3.4],
    namedBodyMeshes: [],
    namedGlassMeshes: [],
    namedWheelMeshes: [],
    namedTrimMeshes: []
  }
];
