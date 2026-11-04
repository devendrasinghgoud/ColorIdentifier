import type { MarketCountry, VehicleCategory } from '../types/vehicleCatalogue';

export const VEHICLE_CATEGORIES: { id: VehicleCategory; label: string; icon: string }[] = [
  { id: 'sedan', label: 'Sedan', icon: '🚗' },
  { id: 'suv', label: 'SUV & 4x4', icon: '🚙' },
  { id: 'coupe', label: 'Coupe', icon: '🏎️' },
  { id: 'sportscar', label: 'Sports Car', icon: '🏁' },
  { id: 'supercar', label: 'Supercar', icon: '⚡' },
  { id: 'hatchback', label: 'Hatchback', icon: '🚘' },
  { id: 'convertible', label: 'Convertible', icon: '🕶️' },
  { id: 'pickup', label: 'Pickup Truck', icon: '🛻' },
  { id: 'ev', label: 'Electric (EV)', icon: '🔋' },
  { id: 'luxury', label: 'Luxury Grand Tourer', icon: '👑' },
  { id: 'motorcycle', label: 'Motorcycle', icon: '🏍️' }
];

export const WORLDWIDE_VEHICLE_CATALOGUE: MarketCountry[] = [
  // ==========================================
  // ITALY (Home to Approved Ferrari 458 Italia)
  // ==========================================
  {
    code: 'IT',
    name: 'Italy',
    region: 'Europe',
    manufacturers: [
      {
        id: 'ferrari',
        name: 'Ferrari',
        country: 'Italy',
        models: [
          {
            id: 'ferrari-458-italia',
            name: '458 Italia',
            category: 'supercar',
            assetId: 'ferrari-458-italia-approved',
            generations: [
              {
                id: 'gen-458',
                code: 'Tipo F142',
                name: '458 Generation (2009–2015)',
                years: [2015, 2014, 2013, 2012, 2011, 2010, 2009],
                variants: [
                  {
                    id: '458-italia-base',
                    name: '458 Italia Berlinetta',
                    trim: 'Standard Carbon Package',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '4.5L Naturally Aspirated V8 F136',
                    horsepower: 562,
                    torqueNm: 540
                  },
                  {
                    id: '458-speciale',
                    name: '458 Speciale',
                    trim: 'Track Aero Edition',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '4.5L High-Compression V8',
                    horsepower: 597,
                    torqueNm: 540
                  }
                ]
              }
            ]
          },
          {
            id: 'ferrari-296-gtb',
            name: '296 GTB Hybrid',
            category: 'supercar',
            generations: [
              {
                id: 'gen-296',
                code: 'F171',
                name: '296 Generation (2022–Present)',
                years: [2025, 2024, 2023, 2022],
                variants: [
                  {
                    id: '296-gtb-assetto-fiorano',
                    name: '296 GTB Assetto Fiorano',
                    trim: 'Lightweight Carbon Package',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '3.0L Twin-Turbo 120° V6 + Plug-In Electric Motor',
                    horsepower: 819,
                    torqueNm: 740
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'lamborghini',
        name: 'Lamborghini',
        country: 'Italy',
        models: [
          {
            id: 'huracan-tecnica',
            name: 'Huracán Tecnica',
            category: 'supercar',
            generations: [
              {
                id: 'gen-huracan',
                code: 'LP 640-2',
                name: 'Huracán Series (2022–2024)',
                years: [2024, 2023, 2022],
                variants: [
                  {
                    id: 'tecnica-rwd',
                    name: 'Tecnica V10',
                    trim: 'Rear-Wheel Steering Aero',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '5.2L Naturally Aspirated V10',
                    horsepower: 631,
                    torqueNm: 565
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // GERMANY
  // ==========================================
  {
    code: 'DE',
    name: 'Germany',
    region: 'Europe',
    manufacturers: [
      {
        id: 'bmw',
        name: 'BMW',
        country: 'Germany',
        models: [
          {
            id: 'bmw-3-series',
            name: '3 Series Sedan',
            category: 'sedan',
            generations: [
              {
                id: 'g20-lci',
                code: 'G20 LCI',
                name: 'G20 Generation Facelift (2022–Present)',
                years: [2025, 2024, 2023, 2022],
                variants: [
                  {
                    id: '330i-msport',
                    name: '330i M Sport',
                    trim: 'M Aerodynamics Package',
                    drivetrain: 'RWD',
                    transmission: 'Automatic',
                    engineSpecs: '2.0L TwinPower Turbo Inline-4',
                    horsepower: 255,
                    torqueNm: 400
                  },
                  {
                    id: 'm340i-xdrive',
                    name: 'M340i xDrive',
                    trim: 'M Performance Track',
                    drivetrain: 'AWD',
                    transmission: 'Automatic',
                    engineSpecs: '3.0L Turbo Inline-6 B58 Mild-Hybrid',
                    horsepower: 382,
                    torqueNm: 500
                  }
                ]
              }
            ]
          },
          {
            id: 'bmw-m3',
            name: 'M3 Competition',
            category: 'sportscar',
            generations: [
              {
                id: 'g80-m3',
                code: 'G80',
                name: 'G80 Generation (2021–Present)',
                years: [2025, 2024, 2023, 2021],
                variants: [
                  {
                    id: 'm3-comp-xdrive',
                    name: 'M3 Competition M xDrive',
                    trim: 'Carbon Fiber Roof & Buckets',
                    drivetrain: 'AWD',
                    transmission: 'Automatic',
                    engineSpecs: '3.0L S58 Twin-Turbo Inline-6',
                    horsepower: 503,
                    torqueNm: 650
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'porsche',
        name: 'Porsche',
        country: 'Germany',
        models: [
          {
            id: 'porsche-911',
            name: '911 GT3',
            category: 'sportscar',
            generations: [
              {
                id: 'gen-992-gt3',
                code: '992.1',
                name: '992 Generation (2021–Present)',
                years: [2025, 2024, 2023, 2022, 2021],
                variants: [
                  {
                    id: 'gt3-touring',
                    name: '911 GT3 with Touring Package',
                    trim: 'Clubsport Carbon Package',
                    drivetrain: 'RWD',
                    transmission: 'Manual',
                    engineSpecs: '4.0L High-Revving Flat-6 Naturally Aspirated',
                    horsepower: 502,
                    torqueNm: 470
                  },
                  {
                    id: 'gt3-pdk',
                    name: '911 GT3 Swan Neck Wing',
                    trim: 'Aero Downforce Edition',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '4.0L Boxer-6 9000 RPM Redline',
                    horsepower: 502,
                    torqueNm: 470
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'mercedes-benz',
        name: 'Mercedes-Benz',
        country: 'Germany',
        models: [
          {
            id: 'amg-gt-coupe',
            name: 'AMG GT Coupe',
            category: 'coupe',
            generations: [
              {
                id: 'c192-amg-gt',
                code: 'C192',
                name: '2nd Generation (2024–Present)',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'amg-gt-63-4matic',
                    name: 'AMG GT 63 4MATIC+',
                    trim: 'Aerodynamics Night Package II',
                    drivetrain: 'AWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '4.0L Handcrafted AMG Biturbo V8',
                    horsepower: 577,
                    torqueNm: 800
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // INDIA
  // ==========================================
  {
    code: 'IN',
    name: 'India',
    region: 'Asia-Pacific',
    manufacturers: [
      {
        id: 'mahindra',
        name: 'Mahindra',
        country: 'India',
        models: [
          {
            id: 'mahindra-thar',
            name: 'Thar 4x4',
            category: 'suv',
            generations: [
              {
                id: 'thar-gen2',
                code: '2nd Gen',
                name: '2020 Generation (2020–Present)',
                years: [2025, 2024, 2023, 2022, 2021, 2020],
                variants: [
                  {
                    id: 'thar-lx-diesel-at',
                    name: 'Thar LX Hard Top',
                    trim: 'LX Luxury Off-Road',
                    drivetrain: '4WD',
                    transmission: 'Automatic',
                    engineSpecs: '2.2L mHawk 130 CRDe Turbo-Diesel',
                    horsepower: 130,
                    torqueNm: 300
                  },
                  {
                    id: 'thar-lx-petrol-at',
                    name: 'Thar LX Turbo Petrol',
                    trim: 'LX Convertible Soft Top',
                    drivetrain: '4WD',
                    transmission: 'Automatic',
                    engineSpecs: '2.0L mStallion 150 TGDi Turbo Petrol',
                    horsepower: 150,
                    torqueNm: 320
                  }
                ]
              }
            ]
          },
          {
            id: 'mahindra-scorpio-n',
            name: 'Scorpio-N',
            category: 'suv',
            generations: [
              {
                id: 'scorpio-n-gen1',
                code: 'Z101',
                name: 'Scorpio-N (2022–Present)',
                years: [2025, 2024, 2023, 2022],
                variants: [
                  {
                    id: 'scorpio-z8l-4wd',
                    name: 'Z8L 4WD 4XPLOR',
                    trim: 'Z8 Luxury Flagship',
                    drivetrain: '4WD',
                    transmission: 'Automatic',
                    engineSpecs: '2.2L mHawk Turbo-Diesel with Shift-on-Fly 4WD',
                    horsepower: 172,
                    torqueNm: 400
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'tata-motors',
        name: 'Tata Motors',
        country: 'India',
        models: [
          {
            id: 'tata-harrier',
            name: 'Harrier',
            category: 'suv',
            generations: [
              {
                id: 'harrier-facelift',
                code: 'OMEGARC 2.0',
                name: '2023 Facelift (2023–Present)',
                years: [2025, 2024, 2023],
                variants: [
                  {
                    id: 'harrier-fearless-plus',
                    name: 'Fearless+ Dark Edition',
                    trim: 'Dark Edition Stealth Package',
                    drivetrain: 'FWD',
                    transmission: 'Automatic',
                    engineSpecs: '2.0L Kryotec Turbocharged Diesel',
                    horsepower: 168,
                    torqueNm: 350
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'maruti-suzuki',
        name: 'Maruti Suzuki',
        country: 'India',
        models: [
          {
            id: 'jimny-5door',
            name: 'Jimny 5-Door',
            category: 'suv',
            generations: [
              {
                id: 'jimny-gen4',
                code: 'JB74W',
                name: '4th Gen 5-Door (2023–Present)',
                years: [2025, 2024, 2023],
                variants: [
                  {
                    id: 'jimny-alpha-at',
                    name: 'Alpha AllGrip Pro 4WD',
                    trim: 'Alpha Dual-Tone Roof',
                    drivetrain: '4WD',
                    transmission: 'Automatic',
                    engineSpecs: '1.5L K15B Dual-Jet Petrol with Low-Range Gearbox',
                    horsepower: 103,
                    torqueNm: 134
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNITED STATES
  // ==========================================
  {
    code: 'US',
    name: 'United States',
    region: 'North America',
    manufacturers: [
      {
        id: 'ford',
        name: 'Ford',
        country: 'United States',
        models: [
          {
            id: 'ford-mustang',
            name: 'Mustang',
            category: 'coupe',
            generations: [
              {
                id: 'mustang-s650',
                code: 'S650',
                name: '7th Generation (2024–Present)',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'mustang-gt-premium',
                    name: 'Mustang GT Premium Fastback',
                    trim: 'GT Performance Package',
                    drivetrain: 'RWD',
                    transmission: 'Manual',
                    engineSpecs: '5.0L Gen-4 Coyote Naturally Aspirated V8',
                    horsepower: 486,
                    torqueNm: 567
                  },
                  {
                    id: 'mustang-dark-horse',
                    name: 'Mustang Dark Horse',
                    trim: 'Track Handling Package with Carbon Rims',
                    drivetrain: 'RWD',
                    transmission: 'Manual',
                    engineSpecs: '5.0L High-Output Coyote V8 with Tremec 6-Speed',
                    horsepower: 500,
                    torqueNm: 567
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'tesla',
        name: 'Tesla',
        country: 'United States',
        models: [
          {
            id: 'tesla-model-3',
            name: 'Model 3',
            category: 'ev',
            generations: [
              {
                id: 'model-3-highland',
                code: 'Highland',
                name: 'Project Highland Refresh (2024–Present)',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'model-3-performance',
                    name: 'Model 3 Performance Ludicrous',
                    trim: 'Carbon Decklid Spoiler & Forged Wheels',
                    drivetrain: 'AWD',
                    transmission: 'Single-Speed Direct (EV)',
                    engineSpecs: 'Dual Permanent-Magnet Electric Motors 82kWh',
                    horsepower: 510,
                    torqueNm: 741
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'chevrolet',
        name: 'Chevrolet',
        country: 'United States',
        models: [
          {
            id: 'corvette-c8',
            name: 'Corvette Stingray / Z06',
            category: 'supercar',
            generations: [
              {
                id: 'corvette-gen-c8',
                code: 'C8',
                name: '8th Generation Mid-Engine (2020–Present)',
                years: [2025, 2024, 2023, 2022, 2021, 2020],
                variants: [
                  {
                    id: 'corvette-z06-3lz',
                    name: 'Corvette Z06 Coupe 3LZ',
                    trim: 'Z07 Carbon Fiber Aero Package',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '5.5L LT6 Flat-Plane Crankshaft High-Rev V8',
                    horsepower: 670,
                    torqueNm: 624
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // JAPAN
  // ==========================================
  {
    code: 'JP',
    name: 'Japan',
    region: 'Asia-Pacific',
    manufacturers: [
      {
        id: 'toyota',
        name: 'Toyota',
        country: 'Japan',
        models: [
          {
            id: 'toyota-gr-supra',
            name: 'GR Supra',
            category: 'sportscar',
            generations: [
              {
                id: 'supra-a90',
                code: 'A90 / DB',
                name: '5th Generation (2020–Present)',
                years: [2025, 2024, 2023, 2022, 2021, 2020],
                variants: [
                  {
                    id: 'supra-30-premium-6mt',
                    name: 'GR Supra 3.0 Premium 6MT',
                    trim: 'Active Differential & Adaptive Variable Suspension',
                    drivetrain: 'RWD',
                    transmission: 'Manual',
                    engineSpecs: '3.0L Twin-Scroll Single Turbo B58 Inline-6',
                    horsepower: 382,
                    torqueNm: 500
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'nissan',
        name: 'Nissan',
        country: 'Japan',
        models: [
          {
            id: 'nissan-gt-r',
            name: 'GT-R Nismo',
            category: 'supercar',
            generations: [
              {
                id: 'gtr-r35-final',
                code: 'CBA-R35',
                name: 'R35 Generation Final Edition (2024)',
                years: [2024, 2023, 2022, 2021, 2020],
                variants: [
                  {
                    id: 'gtr-nismo-special',
                    name: 'GT-R Nismo Special Edition',
                    trim: 'Carbon Fiber Hood & Swan Neck Wing',
                    drivetrain: 'AWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '3.8L VR38DETT Twin-Turbo Handcrafted V6',
                    horsepower: 600,
                    torqueNm: 652
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNITED KINGDOM
  // ==========================================
  {
    code: 'GB',
    name: 'United Kingdom',
    region: 'Europe',
    manufacturers: [
      {
        id: 'land-rover',
        name: 'Land Rover / Range Rover',
        country: 'United Kingdom',
        models: [
          {
            id: 'range-rover-sport',
            name: 'Range Rover Sport',
            category: 'luxury',
            generations: [
              {
                id: 'rrs-l461',
                code: 'L461',
                name: '3rd Generation (2023–Present)',
                years: [2025, 2024, 2023],
                variants: [
                  {
                    id: 'rrs-sv-edition-one',
                    name: 'Range Rover Sport SV Edition ONE',
                    trim: 'Carbon Wheels & Brembo Octyma Calipers',
                    drivetrain: 'AWD',
                    transmission: 'Automatic',
                    engineSpecs: '4.4L Twin-Turbo Mild-Hybrid V8',
                    horsepower: 626,
                    torqueNm: 750
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // GLOBAL OPEN ENGINEERING PLATFORMS
  // (Available 3D Architectural Models with Independent Panel Recoloring)
  // ==========================================
  {
    code: 'GLOBAL',
    name: 'Global Open Engineering Platform',
    region: 'Global',
    manufacturers: [
      {
        id: 'aero-lab',
        name: 'ColorCode Aero Engineering Platform',
        country: 'Global',
        models: [
          {
            id: 'sports-sedan-gt',
            name: 'Executive Sports Sedan Platform',
            category: 'sedan',
            assetId: 'aero-sports-sedan-gt',
            generations: [
              {
                id: 'sedan-gen-v',
                code: 'Aero-V',
                name: '2024 Gen-V Aerodynamic Bodywork',
                years: [2025, 2024, 2023],
                variants: [
                  {
                    id: 'sedan-twin-turbo-awd',
                    name: '3.0T Competition Sport',
                    trim: '18-Point Multi-Panel Bodywork',
                    drivetrain: 'AWD',
                    transmission: 'Automatic',
                    engineSpecs: '3.0L Twin-Turbocharge V6 Longitudinal Layout',
                    horsepower: 410,
                    torqueNm: 580
                  }
                ]
              }
            ]
          },
          {
            id: 'supercar-gt-midengine',
            name: 'Mid-Engine Exotic Supercar GT',
            category: 'supercar',
            assetId: 'aero-supercar-gt-midengine',
            generations: [
              {
                id: 'supercar-gen-1',
                code: 'Track-GT',
                name: '2024 Track Edition Monocoque',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'supercar-gt-v8',
                    name: 'GT Track Monocoque V8',
                    trim: 'High-Downforce Carbon Aero Package',
                    drivetrain: 'RWD',
                    transmission: 'Dual-Clutch (DCT)',
                    engineSpecs: '4.0L Flat-Plane Crank Twin-Turbo Mid V8',
                    horsepower: 710,
                    torqueNm: 770
                  }
                ]
              }
            ]
          },
          {
            id: 'rugged-4x4-offroader',
            name: 'Rugged 4x4 Off-Road Utility',
            category: 'suv',
            assetId: 'aero-rugged-4x4-suv',
            generations: [
              {
                id: 'offroader-gen-1',
                code: 'HD-4x4',
                name: '2024 Heavy-Duty Ladder Chassis',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'rugged-4x4-expedition',
                    name: 'Expedition Ladder-Frame 4WD',
                    trim: 'Rock Sliders & Heavy Duty Arches',
                    drivetrain: '4WD',
                    transmission: 'Manual',
                    engineSpecs: '2.5L High-Torque Turbo-Diesel 4-Cylinder',
                    horsepower: 195,
                    torqueNm: 450
                  }
                ]
              }
            ]
          },
          {
            id: 'supersport-1000-bike',
            name: 'Supersport 1000cc Racing Motorcycle',
            category: 'motorcycle',
            assetId: 'aero-supersport-bike',
            generations: [
              {
                id: 'bike-gen-1',
                code: 'GP-Aero',
                name: '2024 GP Aero Fairing',
                years: [2025, 2024],
                variants: [
                  {
                    id: 'supersport-1000-factory',
                    name: 'Factory 1000cc Racing Spec',
                    trim: 'Aero Winglets & Quickshifter',
                    drivetrain: 'Chain Drive',
                    transmission: 'Sequential',
                    engineSpecs: '999cc Liquid-Cooled Inline-4 DOHC 16-Valve',
                    horsepower: 214,
                    torqueNm: 113
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// Helper functions for hierarchy lookups
export function getAllCountries(): MarketCountry[] {
  return WORLDWIDE_VEHICLE_CATALOGUE;
}

export function getManufacturersByCountry(countryCode: string): typeof WORLDWIDE_VEHICLE_CATALOGUE[0]['manufacturers'] {
  if (countryCode === 'ALL') {
    return WORLDWIDE_VEHICLE_CATALOGUE.flatMap((c) => c.manufacturers);
  }
  const country = WORLDWIDE_VEHICLE_CATALOGUE.find((c) => c.code === countryCode);
  return country ? country.manufacturers : [];
}

export function findVehicleByHierarchy(params: {
  countryCode?: string;
  manufacturerId: string;
  modelId: string;
  generationId?: string;
  variantId?: string;
}) {
  const allMfrs = WORLDWIDE_VEHICLE_CATALOGUE.flatMap((c) => c.manufacturers);
  const mfr = allMfrs.find((m) => m.id === params.manufacturerId);
  if (!mfr) return null;

  const model = mfr.models.find((m) => m.id === params.modelId);
  if (!model) return null;

  const gen = params.generationId
    ? model.generations.find((g) => g.id === params.generationId)
    : model.generations[0];

  const variant = params.variantId && gen
    ? gen.variants.find((v) => v.id === params.variantId)
    : gen?.variants[0];

  return { manufacturer: mfr, model, generation: gen, variant };
}
