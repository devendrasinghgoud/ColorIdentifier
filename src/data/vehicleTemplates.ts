export type VehicleBodyStyle =
  | 'sedan'
  | 'suv'
  | 'hatchback'
  | 'coupe'
  | 'sportscar'
  | 'pickup'
  | 'sportbike'
  | 'cruiser'
  | 'naked'
  | 'adventure'
  | 'commuter';

export interface VehiclePanel {
  id: string;
  name: string;
  d: string;
  defaultColor?: string;
  defaultFinish?: 'glossy' | 'matte' | 'metallic' | 'satin';
}

export interface VehicleRegionConfig {
  color: string;
  finish: 'glossy' | 'matte' | 'metallic' | 'satin';
}

export interface VehicleConfiguration {
  vehicleId: string;
  regions: Record<string, VehicleRegionConfig>;
}

export interface WheelSpec {
  cx: number;
  cy: number;
  r: number;
  rimR: number;
  isBike?: boolean;
}

export type VehicleTemplate = {
  id: string;
  type: 'car' | 'bike';
  name: string;
  style: VehicleBodyStyle;
  description: string;
  defaultColor: string;
  viewBox: string;
  panels: VehiclePanel[];
  bodyPaths: string[];
  glassPaths: string[];
  shadowPaths: string[];
  wheelPaths: string[];
  wheelSpecs?: WheelSpec[];
  trimPaths: string[];
  headlightPaths?: string[];
  taillightPaths?: string[];
};

export const VEHICLE_TEMPLATES: VehicleTemplate[] = [
  // 1. Executive Sports Sedan
  {
    id: 'car-sedan',
    type: 'car',
    name: 'Executive Sedan',
    style: 'sedan',
    description: 'Aerodynamic four-door luxury sedan with sweeping roofline and sculpted door panels.',
    defaultColor: '#3B82F6',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 305, cy: 270, r: 46, rimR: 32 },
      { cx: 710, cy: 270, r: 46, rimR: 32 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Bonnet / Hood',
        d: 'M 612,174 C 674,172 756,180 832,196 C 836,208 828,218 816,219 C 742,211 672,201 612,183 Z'
      },
      {
        id: 'roof',
        name: 'Roof Panel & Cantrail',
        d: 'M 416,112 C 488,107 552,109 614,116 L 614,128 C 552,122 488,120 416,125 Z'
      },
      {
        id: 'front-fender',
        name: 'Front Fender',
        d: 'M 740,174 C 776,182 812,192 832,196 L 832,234 C 824,235 814,235 804,236 C 794,236 780,240 762,246 C 748,220 682,220 662,246 C 658,238 656,220 656,182 C 685,178 715,176 740,174 Z'
      },
      {
        id: 'front-bumper',
        name: 'Front Bumper & Splitter',
        d: 'M 832,196 C 854,204 868,222 866,248 C 864,264 854,272 836,274 L 762,274 L 762,246 C 780,240 794,236 804,236 C 814,235 824,235 832,234 Z'
      },
      {
        id: 'front-door',
        name: 'Front Door',
        d: 'M 520,176 L 656,176 L 656,264 C 610,265 565,265 520,264 Z'
      },
      {
        id: 'rear-door',
        name: 'Rear Door',
        d: 'M 395,178 L 520,178 L 520,264 C 475,265 435,265 395,264 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Rear Quarter Panel',
        d: 'M 195,198 C 242,192 300,186 395,178 L 395,264 C 365,264 358,255 352,246 C 336,220 274,220 258,246 C 250,256 240,264 195,264 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Bumper & Diffuser',
        d: 'M 118,228 C 116,206 138,198 195,198 L 195,274 C 155,274 135,272 124,264 C 116,254 116,240 118,228 Z'
      },
      {
        id: 'side-skirt',
        name: 'Side Skirt',
        d: 'M 352,264 L 662,264 L 662,276 C 550,277 450,277 352,276 Z'
      },
      {
        id: 'side-mirror',
        name: 'Side Mirror',
        d: 'M 608,166 C 628,164 634,174 624,180 C 614,182 606,176 608,166 Z'
      },
      {
        id: 'spoiler',
        name: 'Rear Decklid Lip',
        d: 'M 115,224 C 128,220 142,222 142,229 C 130,232 118,231 115,224 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 334,178 C 368,148 398,124 430,118 L 522,118 L 522,176 Z',
      'M 532,118 L 608,118 C 642,136 678,158 708,174 L 532,176 Z'
    ],
    shadowPaths: [
      'M 80,286 C 280,302 620,302 880,286 C 895,300 850,314 480,314 C 130,314 70,300 80,286 Z'
    ],
    wheelPaths: [
      'M 305,270 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0',
      'M 710,270 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0'
    ],
    trimPaths: [
      'M 830,212 L 858,218 L 854,232 L 826,226 Z',
      'M 120,244 L 176,242 L 180,252 L 122,253 Z'
    ]
  },

  // 2. Modern Compact SUV
  {
    id: 'car-suv',
    type: 'car',
    name: 'Modern Compact SUV',
    style: 'suv',
    description: 'High-riding versatile SUV with muscular arches, upright greenhouse, and roof rails.',
    defaultColor: '#6C5CE7',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 315, cy: 265, r: 50, rimR: 32 },
      { cx: 715, cy: 265, r: 50, rimR: 32 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Bonnet / Hood',
        d: 'M 672,88 C 720,118 780,148 836,176 C 840,192 832,204 818,206 C 758,200 706,170 672,142 Z'
      },
      {
        id: 'roof',
        name: 'High-Clearance Roof',
        d: 'M 395,84 C 480,82 580,84 672,88 L 672,102 C 580,98 480,96 395,98 Z'
      },
      {
        id: 'front-fender',
        name: 'Flared Front Arch & Fender',
        d: 'M 764,146 C 802,160 826,170 836,176 L 836,230 C 826,230 818,232 806,234 C 794,234 780,238 764,242 C 750,214 680,214 662,242 C 658,230 656,195 656,168 Z'
      },
      {
        id: 'front-bumper',
        name: 'Front Skid Bumper',
        d: 'M 836,176 C 860,188 870,208 868,238 C 864,258 852,268 830,272 L 764,272 L 764,242 C 780,238 794,234 806,234 C 818,232 826,230 836,230 Z'
      },
      {
        id: 'front-door',
        name: 'Front Door',
        d: 'M 525,162 L 656,162 L 656,258 C 610,259 565,259 525,258 Z'
      },
      {
        id: 'rear-door',
        name: 'Rear Door',
        d: 'M 400,162 L 525,162 L 525,258 C 480,259 440,259 400,258 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Rear Quarter & Pillar',
        d: 'M 198,175 C 248,170 310,166 400,162 L 400,258 C 370,258 364,250 358,242 C 342,214 278,214 262,242 C 254,250 244,258 198,258 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Step Bumper',
        d: 'M 115,232 C 114,196 138,180 198,175 L 198,272 C 152,272 132,270 122,260 C 114,248 114,238 115,232 Z'
      },
      {
        id: 'side-skirt',
        name: 'Rocker Panels & Steps',
        d: 'M 358,258 L 662,258 L 662,272 C 550,273 450,273 358,272 Z'
      },
      {
        id: 'side-mirror',
        name: 'Side Mirror',
        d: 'M 608,152 C 628,150 634,160 622,166 C 612,168 604,162 608,152 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 322,162 C 354,124 384,102 414,96 L 518,96 L 518,162 Z',
      'M 526,96 L 610,96 L 610,162 L 526,162 Z',
      'M 618,96 L 668,96 C 696,118 726,138 748,152 L 618,162 Z'
    ],
    shadowPaths: [
      'M 80,286 C 280,302 620,302 885,286 C 898,300 855,316 480,316 C 130,316 68,300 80,286 Z'
    ],
    wheelPaths: [
      'M 315,265 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0',
      'M 715,265 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0'
    ],
    trimPaths: [
      'M 390,74 L 680,74 L 678,82 L 392,82 Z',
      'M 835,188 L 864,194 L 860,208 L 832,204 Z'
    ]
  },

  // 3. Urban Hatchback
  {
    id: 'car-hatchback',
    type: 'car',
    name: 'Urban Hatchback',
    style: 'hatchback',
    description: 'Sporty compact five-door hatchback with short overhangs and dynamic posture.',
    defaultColor: '#E0115F',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 312, cy: 272, r: 44, rimR: 30 },
      { cx: 700, cy: 272, r: 44, rimR: 30 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Bonnet / Hood',
        d: 'M 598,108 C 650,132 710,172 815,204 C 820,216 812,226 798,226 C 730,220 660,195 598,178 Z'
      },
      {
        id: 'roof',
        name: 'Sport Roof Panel',
        d: 'M 385,104 C 455,102 525,104 598,108 L 598,122 C 525,118 455,116 385,118 Z'
      },
      {
        id: 'front-fender',
        name: 'Front Fender',
        d: 'M 728,188 C 765,198 795,202 815,204 L 810,242 C 802,243 792,243 782,244 C 770,244 756,248 742,252 C 730,224 666,224 648,252 C 646,238 646,210 646,182 Z'
      },
      {
        id: 'front-bumper',
        name: 'Front Aero Bumper',
        d: 'M 815,204 C 838,212 848,230 846,252 C 842,268 832,276 810,278 L 742,278 L 742,252 C 756,248 770,244 782,244 C 792,243 802,243 810,242 Z'
      },
      {
        id: 'front-door',
        name: 'Front Door',
        d: 'M 495,174 L 646,174 L 646,264 C 600,265 550,265 495,264 Z'
      },
      {
        id: 'rear-door',
        name: 'Rear Door',
        d: 'M 380,174 L 495,174 L 495,264 C 450,265 415,265 380,264 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Rear Quarter & Hatch Flank',
        d: 'M 208,184 C 255,180 315,176 380,174 L 380,264 C 362,264 356,256 350,248 C 334,222 274,222 258,248 C 250,256 242,264 208,264 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Bumper',
        d: 'M 128,238 C 126,204 150,190 208,184 L 208,278 C 165,278 145,276 135,266 C 128,256 127,246 128,238 Z'
      },
      {
        id: 'side-skirt',
        name: 'Side Skirt',
        d: 'M 350,264 L 648,264 L 648,278 C 550,279 450,279 350,278 Z'
      },
      {
        id: 'spoiler',
        name: 'Roof Hatch Spoiler',
        d: 'M 374,100 C 388,98 406,100 406,110 L 374,110 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 312,174 C 342,138 368,114 394,112 L 484,112 L 484,174 Z',
      'M 494,112 L 588,112 C 618,132 648,154 672,168 L 494,174 Z'
    ],
    shadowPaths: [
      'M 90,286 C 280,302 610,302 865,286 C 878,300 842,314 475,314 C 130,314 78,300 90,286 Z'
    ],
    wheelPaths: [
      'M 312,272 m -44,0 a 44,44 0 1,0 88,0 a 44,44 0 1,0 -88,0',
      'M 700,272 m -44,0 a 44,44 0 1,0 88,0 a 44,44 0 1,0 -88,0'
    ],
    trimPaths: [
      'M 128,244 L 175,242 L 178,252 L 130,253 Z'
    ]
  },

  // 4. Gran Turismo Coupe
  {
    id: 'car-coupe',
    type: 'car',
    name: 'Gran Turismo Coupe',
    style: 'coupe',
    description: 'Fastback two-door grand tourer with stretched hood and aggressive wide stance.',
    defaultColor: '#111827',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 302, cy: 272, r: 46, rimR: 34 },
      { cx: 715, cy: 272, r: 46, rimR: 34 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Long Stretched Hood',
        d: 'M 596,118 C 665,142 748,180 836,198 C 840,210 832,222 818,224 C 740,216 660,198 596,182 Z'
      },
      {
        id: 'roof',
        name: 'Swept Fastback Roof',
        d: 'M 436,112 C 490,110 545,112 596,118 L 596,130 C 545,124 490,122 436,124 Z'
      },
      {
        id: 'front-fender',
        name: 'Front Aero Fender',
        d: 'M 752,184 C 788,192 820,196 836,198 L 832,238 C 824,239 814,239 804,240 C 794,240 780,244 764,248 C 750,222 682,222 664,248 C 662,238 662,205 662,188 Z'
      },
      {
        id: 'front-bumper',
        name: 'Front Bumper & Lip',
        d: 'M 836,198 C 858,206 870,226 868,248 C 864,266 852,274 830,276 L 764,276 L 764,248 C 780,244 794,240 804,240 C 814,239 824,239 832,238 Z'
      },
      {
        id: 'front-door',
        name: 'Long Coupe Door',
        d: 'M 476,178 L 662,178 L 662,264 C 600,265 540,265 476,264 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Rear Fastback Haunches',
        d: 'M 188,194 C 255,188 335,182 476,178 L 476,264 C 362,264 356,256 348,248 C 334,222 270,222 254,248 C 246,256 238,264 188,264 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Diffuser Bumper',
        d: 'M 108,242 C 108,214 132,198 188,194 L 188,278 C 146,278 126,276 116,266 C 110,256 108,248 108,242 Z'
      },
      {
        id: 'side-skirt',
        name: 'Aero Side Skirt',
        d: 'M 348,264 L 664,264 L 664,278 C 550,279 450,279 348,278 Z'
      },
      {
        id: 'spoiler',
        name: 'Ducktail Spoiler',
        d: 'M 108,232 C 124,228 142,230 142,238 L 112,240 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 350,182 C 388,142 420,122 444,120 L 582,120 C 624,142 668,166 704,180 Z'
    ],
    shadowPaths: [
      'M 80,286 C 280,302 620,302 885,286 C 896,300 855,314 478,314 C 125,314 68,300 80,286 Z'
    ],
    wheelPaths: [
      'M 302,272 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0',
      'M 715,272 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0'
    ],
    trimPaths: [
      'M 834,208 L 862,214 L 858,226 L 832,222 Z'
    ]
  },

  // 5. Mid-Engine Supercar
  {
    id: 'car-sportscar',
    type: 'car',
    name: 'Mid-Engine Supercar',
    style: 'sportscar',
    description: 'Ultra-low exotic sports car with dramatic intakes and aggressive aerodynamics.',
    defaultColor: '#FFBF00',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 292, cy: 274, r: 48, rimR: 36 },
      { cx: 724, cy: 274, r: 46, rimR: 34 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Front Aero Hood',
        d: 'M 548,136 C 618,162 708,188 842,204 C 846,216 836,224 820,224 C 740,218 640,195 548,182 Z'
      },
      {
        id: 'roof',
        name: 'Low Canopy Roof',
        d: 'M 388,132 C 440,130 495,132 548,136 L 548,148 C 495,144 440,142 388,144 Z'
      },
      {
        id: 'front-fender',
        name: 'Front Aero Fender',
        d: 'M 678,184 C 740,195 805,200 842,204 L 838,242 C 830,243 820,243 810,244 C 798,244 786,248 772,252 C 758,226 692,226 676,252 C 674,238 674,205 674,192 Z'
      },
      {
        id: 'front-bumper',
        name: 'Front Splitter & Bumper',
        d: 'M 842,204 C 868,212 880,232 878,254 C 874,272 860,278 834,280 L 772,280 L 772,252 C 786,248 798,244 810,244 C 820,243 830,243 838,242 Z'
      },
      {
        id: 'front-door',
        name: 'Dihedral Door',
        d: 'M 458,182 L 674,182 L 674,266 C 600,267 530,267 458,266 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Rear Intake & Engine Bay',
        d: 'M 178,198 C 242,192 320,188 458,182 L 458,266 C 352,266 346,258 338,250 C 324,224 260,224 244,250 C 236,258 226,266 178,266 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Diffuser & Exhaust',
        d: 'M 98,248 C 98,224 122,204 178,198 L 178,280 C 135,280 115,278 104,268 C 98,258 98,252 98,248 Z'
      },
      {
        id: 'side-skirt',
        name: 'Carbon Side Skirt',
        d: 'M 338,266 L 676,266 L 676,280 C 550,281 450,281 338,280 Z'
      },
      {
        id: 'spoiler',
        name: 'Active GT Wing',
        d: 'M 92,212 C 112,208 140,208 144,220 L 96,222 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 302,188 C 348,154 386,140 404,138 L 532,138 C 564,156 596,174 612,184 Z'
    ],
    shadowPaths: [
      'M 75,286 C 280,302 620,302 895,286 C 906,300 862,314 485,314 C 120,314 62,300 75,286 Z'
    ],
    wheelPaths: [
      'M 292,274 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0',
      'M 724,274 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0'
    ],
    trimPaths: [
      'M 542,210 L 610,210 L 596,252 L 538,252 Z'
    ]
  },

  // 6. Crew-Cab Utility Pickup
  {
    id: 'car-pickup',
    type: 'car',
    name: 'Crew-Cab Pickup',
    style: 'pickup',
    description: 'Rugged full-size utility pickup truck with upright front fascia and expansive cargo bed.',
    defaultColor: '#DC143C',
    viewBox: '0 0 900 360',
    wheelSpecs: [
      { cx: 310, cy: 262, r: 52, rimR: 32 },
      { cx: 715, cy: 262, r: 52, rimR: 32 }
    ],
    panels: [
      {
        id: 'bonnet',
        name: 'Chiseled Power Hood',
        d: 'M 618,92 C 655,124 720,146 846,150 C 850,166 844,178 828,180 C 765,178 695,152 618,142 Z'
      },
      {
        id: 'roof',
        name: 'Cab Roof',
        d: 'M 436,88 C 496,86 558,88 618,92 L 618,106 C 558,102 496,100 436,102 Z'
      },
      {
        id: 'front-fender',
        name: 'Front Fender & Arch',
        d: 'M 674,144 C 740,148 812,150 846,150 L 842,224 C 832,224 822,226 810,228 C 796,228 780,234 764,240 C 748,210 678,210 662,240 C 660,225 660,180 660,148 Z'
      },
      {
        id: 'front-bumper',
        name: 'Steel Front Bumper',
        d: 'M 846,150 C 868,156 880,178 878,218 C 874,260 858,272 830,274 L 764,274 L 764,240 C 780,234 796,228 810,228 C 822,226 832,224 842,224 Z'
      },
      {
        id: 'front-door',
        name: 'Front Cab Door',
        d: 'M 524,144 L 660,144 L 660,258 C 615,259 570,259 524,258 Z'
      },
      {
        id: 'rear-door',
        name: 'Rear Cab Door',
        d: 'M 398,144 L 524,144 L 524,258 C 480,259 440,259 398,258 Z'
      },
      {
        id: 'rear-quarter',
        name: 'Cargo Bed & Flank',
        d: 'M 104,150 C 180,150 280,148 376,146 L 376,258 C 362,258 356,248 348,240 C 332,210 268,210 252,240 C 244,248 234,258 132,258 C 118,258 106,248 104,228 Z'
      },
      {
        id: 'rear-bumper',
        name: 'Rear Step Bumper',
        d: 'M 104,228 L 132,228 L 132,268 L 104,268 Z'
      },
      {
        id: 'side-skirt',
        name: 'Running Boards',
        d: 'M 348,258 L 662,258 L 662,274 C 550,275 450,275 348,274 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 440,102 L 516,102 L 516,144 L 398,144 Z',
      'M 524,102 L 606,102 C 628,120 646,134 656,144 L 524,144 Z'
    ],
    shadowPaths: [
      'M 80,284 C 280,300 620,300 890,284 C 902,298 860,314 485,314 C 125,314 68,298 80,284 Z'
    ],
    wheelPaths: [
      'M 310,262 m -52,0 a 52,52 0 1,0 104,0 a 52,52 0 1,0 -104,0',
      'M 715,262 m -52,0 a 52,52 0 1,0 104,0 a 52,52 0 1,0 -104,0'
    ],
    trimPaths: [
      'M 846,158 L 878,160 L 874,186 L 842,182 Z'
    ]
  },

  // 7. Supersport 1000cc Racing Motorcycle
  {
    id: 'bike-sportbike',
    type: 'bike',
    name: 'Supersport 1000cc',
    style: 'sportbike',
    description: 'Track-focused supersport motorcycle with aerodynamic full fairing and sharp tail section.',
    defaultColor: '#0E3A75',
    viewBox: '0 0 800 450',
    wheelSpecs: [
      { cx: 205, cy: 335, r: 64, rimR: 44, isBike: true },
      { cx: 600, cy: 335, r: 64, rimR: 44, isBike: true }
    ],
    panels: [
      {
        id: 'fuel-tank',
        name: 'Sculpted Fuel Tank',
        d: 'M 358,212 C 370,162 422,154 484,172 C 514,182 542,212 502,246 L 430,246 Z'
      },
      {
        id: 'fairing',
        name: 'Front & Side Racing Fairing',
        d: 'M 482,246 L 582,204 C 606,220 616,242 612,252 L 524,332 L 462,332 L 442,272 Z'
      },
      {
        id: 'seat-cowl',
        name: 'Aerodynamic Tail Cowl',
        d: 'M 268,184 L 362,184 L 352,212 L 248,212 Z'
      },
      {
        id: 'front-mudguard',
        name: 'Front Fender / Mudguard',
        d: 'M 552,292 C 578,272 626,272 652,304 L 634,314 C 612,294 582,294 562,310 Z'
      },
      {
        id: 'belly-pan',
        name: 'Lower Engine Belly Pan',
        d: 'M 430,314 L 524,324 L 498,352 L 414,342 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 572,168 L 618,184 L 592,204 L 556,188 Z'
    ],
    shadowPaths: [
      'M 120,412 C 300,422 500,422 680,412 C 692,422 660,432 400,432 C 180,432 110,422 120,412 Z'
    ],
    wheelPaths: [
      'M 205,335 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0',
      'M 600,335 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0'
    ],
    trimPaths: [
      'M 330,248 L 442,248 L 432,342 L 342,322 Z',
      'M 420,345 L 560,356 L 560,374 L 420,362 Z'
    ]
  },

  // 8. V-Twin Cruiser
  {
    id: 'bike-cruiser',
    type: 'bike',
    name: 'V-Twin Cruiser',
    style: 'cruiser',
    description: 'Classic low-slung cruiser with teardrop fuel tank, deep fenders, and forward controls.',
    defaultColor: '#16181D',
    viewBox: '0 0 800 450',
    wheelSpecs: [
      { cx: 195, cy: 342, r: 66, rimR: 44, isBike: true },
      { cx: 610, cy: 342, r: 66, rimR: 44, isBike: true }
    ],
    panels: [
      {
        id: 'fuel-tank',
        name: 'Teardrop Fuel Tank',
        d: 'M 338,222 C 348,178 402,174 464,196 C 484,206 492,226 462,246 L 348,246 Z'
      },
      {
        id: 'rear-mudguard',
        name: 'Deep Rear Fender',
        d: 'M 128,308 C 128,266 170,248 232,248 L 246,278 C 192,278 172,294 162,332 Z'
      },
      {
        id: 'front-mudguard',
        name: 'Classic Front Valanced Fender',
        d: 'M 582,258 C 624,258 660,278 666,322 L 634,332 C 624,300 602,284 572,284 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 100,412 C 300,422 500,422 700,412 C 712,422 680,432 400,432 C 160,432 90,422 100,412 Z'
    ],
    wheelPaths: [
      'M 195,342 m -66,0 a 66,66 0 1,0 132,0 a 66,66 0 1,0 -132,0',
      'M 610,342 m -66,0 a 66,66 0 1,0 132,0 a 66,66 0 1,0 -132,0'
    ],
    trimPaths: [
      'M 350,252 L 452,252 L 432,352 L 332,352 Z',
      'M 380,352 L 572,362 L 572,378 L 380,368 Z'
    ]
  },

  // 9. Streetfighter Naked
  {
    id: 'bike-naked',
    type: 'bike',
    name: 'Streetfighter Naked',
    style: 'naked',
    description: 'Aggressive street motorcycle with exposed trellis frame and minimalist bodywork.',
    defaultColor: '#D40026',
    viewBox: '0 0 800 450',
    wheelSpecs: [
      { cx: 205, cy: 338, r: 64, rimR: 44, isBike: true },
      { cx: 598, cy: 338, r: 64, rimR: 44, isBike: true }
    ],
    panels: [
      {
        id: 'fuel-tank',
        name: 'Muscular Chiseled Tank',
        d: 'M 368,206 C 378,162 436,158 488,180 C 514,196 524,226 482,242 L 378,242 Z'
      },
      {
        id: 'seat-cowl',
        name: 'Sharp Tail Cowl',
        d: 'M 268,188 L 352,188 L 336,216 L 254,216 Z'
      },
      {
        id: 'fairing',
        name: 'Headlight Mask & Radiator Shrouds',
        d: 'M 558,228 L 592,234 L 576,256 L 548,246 Z'
      },
      {
        id: 'front-mudguard',
        name: 'Shorty Front Fender',
        d: 'M 548,288 C 574,272 616,272 642,304 L 626,314 C 606,294 576,294 554,310 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 120,412 C 300,422 500,422 680,412 C 692,422 660,432 400,432 C 180,432 110,422 120,412 Z'
    ],
    wheelPaths: [
      'M 205,338 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0',
      'M 598,338 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0'
    ],
    trimPaths: [
      'M 360,248 L 462,248 L 442,342 L 342,332 Z'
    ]
  },

  // 10. Adventure Tourer
  {
    id: 'bike-adventure',
    type: 'bike',
    name: 'Adventure Tourer',
    style: 'adventure',
    description: 'Long-distance dual-sport adventure bike with tall rally windscreen and prominent beak.',
    defaultColor: '#22D3EE',
    viewBox: '0 0 800 450',
    wheelSpecs: [
      { cx: 195, cy: 338, r: 66, rimR: 44, isBike: true },
      { cx: 610, cy: 338, r: 68, rimR: 46, isBike: true }
    ],
    panels: [
      {
        id: 'fuel-tank',
        name: 'Long-Range Fuel Tank',
        d: 'M 378,192 C 388,148 446,144 512,166 C 532,176 552,206 502,236 L 388,236 Z'
      },
      {
        id: 'fairing',
        name: 'Front Rally Beak & Fairing',
        d: 'M 508,234 L 612,234 L 582,266 L 498,256 Z'
      },
      {
        id: 'seat-cowl',
        name: 'Subframe & Tail Section',
        d: 'M 268,174 L 372,174 L 352,206 L 248,206 Z'
      },
      {
        id: 'front-mudguard',
        name: 'High Front Fender',
        d: 'M 562,284 C 588,268 628,268 654,298 L 638,308 C 618,288 588,288 568,304 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 538,128 L 566,92 L 588,128 L 556,158 Z'
    ],
    shadowPaths: [
      'M 110,412 C 300,422 500,422 690,412 C 702,422 670,432 400,432 C 170,432 100,422 110,412 Z'
    ],
    wheelPaths: [
      'M 195,338 m -66,0 a 66,66 0 1,0 132,0 a 66,66 0 1,0 -132,0',
      'M 610,338 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0'
    ],
    trimPaths: [
      'M 370,244 L 472,244 L 452,346 L 352,336 Z'
    ]
  },

  // 11. Urban Commuter
  {
    id: 'bike-commuter',
    type: 'bike',
    name: 'Urban Commuter',
    style: 'commuter',
    description: 'Lightweight everyday street bike with upright ergonomic seating and clean bodywork.',
    defaultColor: '#6CB33F',
    viewBox: '0 0 800 450',
    wheelSpecs: [
      { cx: 200, cy: 340, r: 64, rimR: 44, isBike: true },
      { cx: 602, cy: 340, r: 64, rimR: 44, isBike: true }
    ],
    panels: [
      {
        id: 'fuel-tank',
        name: 'Compact Commuter Tank',
        d: 'M 348,210 C 358,168 412,164 472,184 C 492,196 502,226 462,242 L 358,242 Z'
      },
      {
        id: 'seat-cowl',
        name: 'Utility Tail Cowl',
        d: 'M 248,188 L 342,188 L 332,216 L 238,216 Z'
      },
      {
        id: 'front-mudguard',
        name: 'City Front Mudguard',
        d: 'M 548,288 C 574,272 616,272 642,304 L 626,314 C 606,294 576,294 554,310 Z'
      }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 120,412 C 300,422 500,422 680,412 C 692,422 660,432 400,432 C 180,432 110,422 120,412 Z'
    ],
    wheelPaths: [
      'M 200,340 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0',
      'M 602,340 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0'
    ],
    trimPaths: [
      'M 340,244 L 442,244 L 422,336 L 332,326 Z'
    ]
  }
];
