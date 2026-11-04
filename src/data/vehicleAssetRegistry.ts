import type { VehicleAsset3D } from '../types/vehicleCatalogue';

export const VEHICLE_3D_ASSET_REGISTRY: Record<string, VehicleAsset3D> = {
  // =========================================================================
  // APPROVED LICENSED PRODUCTION MODEL: Ferrari 458 Italia (Original Licensed Asset)
  // =========================================================================
  'ferrari-458-italia-approved': {
    assetId: 'ferrari-458-italia-approved',
    vehicleRef: {
      country: 'Italy',
      manufacturer: 'Ferrari',
      model: '458 Italia',
      generation: '458 Generation (2009–2015)'
    },
    glbUrl: '/models/vehicles/ferrari-458.glb',
    aoMapUrl: '/models/vehicles/ferrari_ao.png',
    isDracoCompressed: true,
    fileSizeBytes: 1752496,
    meshCount: 51,
    materialCount: 17,
    cameraDefaults: {
      position: [3.4, 1.35, 3.4],
      target: [0, 0.55, 0],
      fov: 38
    },
    license: {
      provider: 'Three.js Official Examples / Sketchfab Open Repository',
      originalAssetId: '57bf6cc56931426e87494f554df1dab6',
      author: 'vicent091036',
      authorUrl: 'https://sketchfab.com/models/57bf6cc56931426e87494f554df1dab6',
      licenseType: 'CC-BY-4.0',
      commercialUsageAllowed: true,
      webEmbeddingAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
      verificationStatus: 'approved',
      assetVersion: 'v1.4-draco',
      verificationNotes: 'Officially curated & verified in Three.js distribution (MIT). Licensed under Creative Commons Attribution 4.0 International.'
    },
    meshMappings: {
      paintablePanels: [
        { id: 'body-main', name: 'Aerodynamic Monocoque Body', nodeName: 'body', category: 'body', defaultColor: '#DC2626', defaultFinish: 'glossy' },
        { id: 'trim-aero', name: 'Exterior Carbon Aero Trim', nodeName: 'trim', category: 'aero', defaultColor: '#18181B', defaultFinish: 'satin' },
        { id: 'grills', name: 'Front & Rear Air Intakes', nodeName: 'grills', category: 'trim', defaultColor: '#09090B', defaultFinish: 'matte' }
      ],
      glassMeshes: ['glass'],
      wheelRims: ['rim_fl', 'rim_fr', 'rim_rl', 'rim_rr'],
      wheelTires: ['tire'],
      brakeCalipers: ['brake', 'brakes'],
      exteriorTrim: ['chrome', 'plastic_gray', 'metal', 'lights', 'lights_red', 'wipers']
    },
    supportedCapabilities: {
      independentPanels: true,
      customWheelFinish: true,
      customCaliperColor: true,
      customGlassTint: true
    }
  },

  // =========================================================================
  // APPROVED OPEN ENGINEERING PLATFORMS (ColorCode Aero Lab)
  // =========================================================================
  'aero-sports-sedan-gt': {
    assetId: 'aero-sports-sedan-gt',
    vehicleRef: {
      country: 'Germany',
      manufacturer: 'ColorCode Aero Engineering Platform',
      model: 'Executive Sports Sedan Platform',
      generation: '2024 Gen-V Aerodynamic Bodywork'
    },
    glbUrl: '/models/vehicles/sports-sedan.glb',
    isDracoCompressed: false,
    fileSizeBytes: 1845892,
    meshCount: 26,
    materialCount: 8,
    cameraDefaults: {
      position: [3.8, 1.8, 3.8],
      target: [0, 0.65, 0],
      fov: 40
    },
    license: {
      provider: 'ColorCode Open Automotive Engineering Lab',
      originalAssetId: 'CCA-SEDAN-V5',
      author: 'ColorCode 3D Automotive Studio',
      licenseType: 'MIT',
      commercialUsageAllowed: true,
      webEmbeddingAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
      verificationStatus: 'approved',
      assetVersion: 'v2.1',
      verificationNotes: 'Procedurally engineered aerodynamic multi-panel geometry with 18 independent body panels.'
    },
    meshMappings: {
      paintablePanels: [
        { id: 'bonnet', name: 'Bonnet / Hood', nodeName: 'body_bonnet', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'roof', name: 'Roof Panel', nodeName: 'body_roof', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'bumper-front', name: 'Front Bumper', nodeName: 'body_bumper_front', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'bumper-rear', name: 'Rear Bumper', nodeName: 'body_bumper_rear', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'door-fl', name: 'Front Left Door', nodeName: 'body_door_front_left', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'door-fr', name: 'Front Right Door', nodeName: 'body_door_front_right', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'door-rl', name: 'Rear Left Door', nodeName: 'body_door_rear_left', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'door-rr', name: 'Rear Right Door', nodeName: 'body_door_rear_right', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'fender-fl', name: 'Front Left Fender', nodeName: 'body_fender_front_left', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'fender-fr', name: 'Front Right Fender', nodeName: 'body_fender_front_right', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'quarter-rl', name: 'Rear Left Quarter', nodeName: 'body_quarter_rear_left', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'quarter-rr', name: 'Rear Right Quarter', nodeName: 'body_quarter_rear_right', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'trunk', name: 'Boot / Trunk Lid', nodeName: 'body_trunk', category: 'body', defaultColor: '#3B82F6', defaultFinish: 'metallic' },
        { id: 'spoiler', name: 'Rear Decklid Spoiler', nodeName: 'body_spoiler', category: 'aero', defaultColor: '#1E293B', defaultFinish: 'satin' },
        { id: 'mirror-fl', name: 'Left Side Mirror', nodeName: 'body_mirror_left', category: 'body', defaultColor: '#1E293B', defaultFinish: 'satin' },
        { id: 'mirror-fr', name: 'Right Side Mirror', nodeName: 'body_mirror_right', category: 'body', defaultColor: '#1E293B', defaultFinish: 'satin' },
        { id: 'skirt-left', name: 'Left Side Skirt', nodeName: 'body_skirt_left', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'skirt-right', name: 'Right Side Skirt', nodeName: 'body_skirt_right', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' }
      ],
      glassMeshes: ['glass_windshield', 'glass_rear', 'glass_windows_left', 'glass_windows_right'],
      wheelRims: ['wheel_rim_fl', 'wheel_rim_fr', 'wheel_rim_rl', 'wheel_rim_rr'],
      wheelTires: ['wheel_tire_fl', 'wheel_tire_fr', 'wheel_tire_rl', 'wheel_tire_rr'],
      brakeCalipers: [],
      exteriorTrim: ['trim_grille', 'trim_headlight_left', 'trim_headlight_right', 'trim_taillight_left', 'trim_taillight_right']
    },
    supportedCapabilities: {
      independentPanels: true,
      customWheelFinish: true,
      customCaliperColor: false,
      customGlassTint: true
    }
  },

  'aero-supercar-gt-midengine': {
    assetId: 'aero-supercar-gt-midengine',
    vehicleRef: {
      country: 'Italy',
      manufacturer: 'ColorCode Aero Engineering Platform',
      model: 'Mid-Engine Exotic Supercar GT',
      generation: '2024 Track Edition Monocoque'
    },
    glbUrl: '/models/vehicles/supercar-gt.glb',
    isDracoCompressed: false,
    fileSizeBytes: 1142512,
    meshCount: 18,
    materialCount: 6,
    cameraDefaults: {
      position: [3.4, 1.4, 3.4],
      target: [0, 0.55, 0],
      fov: 38
    },
    license: {
      provider: 'ColorCode Open Automotive Engineering Lab',
      originalAssetId: 'CCA-GT-TRACK',
      author: 'ColorCode 3D Automotive Studio',
      licenseType: 'MIT',
      commercialUsageAllowed: true,
      webEmbeddingAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
      verificationStatus: 'approved',
      assetVersion: 'v2.0',
      verificationNotes: 'Aerodynamically contoured mid-engine supercar chassis with carbon downforce package.'
    },
    meshMappings: {
      paintablePanels: [
        { id: 'bonnet', name: 'Front Aero Hood', nodeName: 'body_bonnet', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'roof', name: 'Canopy Roof', nodeName: 'body_roof', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'bumper-front', name: 'Front Fascia', nodeName: 'body_bumper_front', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'splitter', name: 'Carbon Front Splitter', nodeName: 'body_splitter', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'bumper-rear', name: 'Rear Aero Diffuser', nodeName: 'body_bumper_rear', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'door-left', name: 'Left Dihedral Door', nodeName: 'body_door_left', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'door-right', name: 'Right Dihedral Door', nodeName: 'body_door_right', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'fender-fl', name: 'Front Left Fender', nodeName: 'body_fender_front_left', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'fender-fr', name: 'Front Right Fender', nodeName: 'body_fender_front_right', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'quarter-rl', name: 'Rear Left Intake Flank', nodeName: 'body_quarter_rear_left', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'quarter-rr', name: 'Rear Right Intake Flank', nodeName: 'body_quarter_rear_right', category: 'body', defaultColor: '#FFBF00', defaultFinish: 'glossy' },
        { id: 'spoiler', name: 'GT Downforce Wing', nodeName: 'body_spoiler', category: 'aero', defaultColor: '#111827', defaultFinish: 'satin' },
        { id: 'skirt-left', name: 'Left Carbon Skirt', nodeName: 'body_skirt_left', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'skirt-right', name: 'Right Carbon Skirt', nodeName: 'body_skirt_right', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' }
      ],
      glassMeshes: ['glass_canopy'],
      wheelRims: ['wheel_rim_fl', 'wheel_rim_fr', 'wheel_rim_rl', 'wheel_rim_rr'],
      wheelTires: ['wheel_tire_fl', 'wheel_tire_fr', 'wheel_tire_rl', 'wheel_tire_rr'],
      brakeCalipers: [],
      exteriorTrim: []
    },
    supportedCapabilities: {
      independentPanels: true,
      customWheelFinish: true,
      customCaliperColor: false,
      customGlassTint: true
    }
  },

  'aero-rugged-4x4-suv': {
    assetId: 'aero-rugged-4x4-suv',
    vehicleRef: {
      country: 'India',
      manufacturer: 'ColorCode Aero Engineering Platform',
      model: 'Rugged 4x4 Off-Road Utility',
      generation: '2024 Heavy-Duty Ladder Chassis'
    },
    glbUrl: '/models/vehicles/rugged-4x4-suv.glb',
    isDracoCompressed: false,
    fileSizeBytes: 1258410,
    meshCount: 22,
    materialCount: 6,
    cameraDefaults: {
      position: [4.2, 2.1, 4.2],
      target: [0, 0.85, 0],
      fov: 42
    },
    license: {
      provider: 'ColorCode Open Automotive Engineering Lab',
      originalAssetId: 'CCA-OFFROAD-4X4',
      author: 'ColorCode 3D Automotive Studio',
      licenseType: 'MIT',
      commercialUsageAllowed: true,
      webEmbeddingAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
      verificationStatus: 'approved',
      assetVersion: 'v2.0',
      verificationNotes: 'High-clearance off-road utility vehicle with reinforced wheel flares and roof rails.'
    },
    meshMappings: {
      paintablePanels: [
        { id: 'bonnet', name: 'Upright Steel Bonnet', nodeName: 'body_bonnet', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'roof', name: 'High-Clearance Roof', nodeName: 'body_roof', category: 'body', defaultColor: '#1E293B', defaultFinish: 'matte' },
        { id: 'bumper-front', name: 'Heavy Duty Front Bumper', nodeName: 'body_bumper_front', category: 'body', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'bumper-rear', name: 'Steel Rear Step Bumper', nodeName: 'body_bumper_rear', category: 'body', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'door-fl', name: 'Front Left Door', nodeName: 'body_door_front_left', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'door-fr', name: 'Front Right Door', nodeName: 'body_door_front_right', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'door-rl', name: 'Rear Left Door', nodeName: 'body_door_rear_left', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'door-rr', name: 'Rear Right Door', nodeName: 'body_door_rear_right', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'fender-fl', name: 'Flared Front Left Arch', nodeName: 'body_fender_front_left', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'fender-fr', name: 'Flared Front Right Arch', nodeName: 'body_fender_front_right', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'quarter-rl', name: 'Rear Left Flank', nodeName: 'body_quarter_rear_left', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' },
        { id: 'quarter-rr', name: 'Rear Right Flank', nodeName: 'body_quarter_rear_right', category: 'body', defaultColor: '#6C5CE7', defaultFinish: 'glossy' }
      ],
      glassMeshes: ['glass_windshield', 'glass_windows_left', 'glass_windows_right'],
      wheelRims: ['wheel_rim_fl', 'wheel_rim_fr', 'wheel_rim_rl', 'wheel_rim_rr'],
      wheelTires: ['wheel_tire_fl', 'wheel_tire_fr', 'wheel_tire_rl', 'wheel_tire_rr', 'wheel_spare_rear'],
      brakeCalipers: [],
      exteriorTrim: ['trim_roof_rail_left', 'trim_roof_rail_right']
    },
    supportedCapabilities: {
      independentPanels: true,
      customWheelFinish: true,
      customCaliperColor: false,
      customGlassTint: true
    }
  },

  'aero-supersport-bike': {
    assetId: 'aero-supersport-bike',
    vehicleRef: {
      country: 'Japan',
      manufacturer: 'ColorCode Aero Engineering Platform',
      model: 'Supersport 1000cc Racing Motorcycle',
      generation: '2024 GP Aero Fairing'
    },
    glbUrl: '/models/vehicles/supersport-bike.glb',
    isDracoCompressed: false,
    fileSizeBytes: 692224,
    meshCount: 14,
    materialCount: 5,
    cameraDefaults: {
      position: [2.6, 1.3, 2.6],
      target: [0, 0.6, 0],
      fov: 38
    },
    license: {
      provider: 'ColorCode Open Automotive Engineering Lab',
      originalAssetId: 'CCA-BIKE-1000',
      author: 'ColorCode 3D Automotive Studio',
      licenseType: 'MIT',
      commercialUsageAllowed: true,
      webEmbeddingAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
      verificationStatus: 'approved',
      assetVersion: 'v2.0',
      verificationNotes: 'Full-fairing racing motorcycle geometry with separate sculpted fuel tank and tail cowl.'
    },
    meshMappings: {
      paintablePanels: [
        { id: 'fuel-tank', name: 'Sculpted Fuel Tank', nodeName: 'body_fuel_tank', category: 'body', defaultColor: '#0E3A75', defaultFinish: 'glossy' },
        { id: 'fairing', name: 'Racing Aerodynamic Fairing', nodeName: 'body_fairing', category: 'body', defaultColor: '#0E3A75', defaultFinish: 'glossy' },
        { id: 'seat-cowl', name: 'Tail Cowl & Seat Subframe', nodeName: 'body_seat_cowl', category: 'body', defaultColor: '#0E3A75', defaultFinish: 'glossy' },
        { id: 'belly-pan', name: 'Lower Engine Belly Pan', nodeName: 'body_belly_pan', category: 'aero', defaultColor: '#0F172A', defaultFinish: 'matte' },
        { id: 'front-mudguard', name: 'Front Mudguard / Fender', nodeName: 'body_front_mudguard', category: 'body', defaultColor: '#0E3A75', defaultFinish: 'glossy' }
      ],
      glassMeshes: ['glass_windscreen'],
      wheelRims: ['wheel_rim_front', 'wheel_rim_rear'],
      wheelTires: ['wheel_tire_front', 'wheel_tire_rear'],
      brakeCalipers: [],
      exteriorTrim: ['trim_engine_frame', 'trim_exhaust']
    },
    supportedCapabilities: {
      independentPanels: true,
      customWheelFinish: true,
      customCaliperColor: false,
      customGlassTint: false
    }
  }
};

export function getAssetById(assetId: string): VehicleAsset3D | undefined {
  return VEHICLE_3D_ASSET_REGISTRY[assetId];
}
