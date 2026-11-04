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
  trimPaths: string[];
};

export const VEHICLE_TEMPLATES: VehicleTemplate[] = [
  // Cars
  {
    id: 'car-sedan',
    type: 'car',
    name: 'Executive Sedan',
    style: 'sedan',
    description: 'Aerodynamic four-door luxury sedan with sweeping roofline and sculpted door panels.',
    defaultColor: '#3B82F6',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Bonnet / Hood', d: 'M 610,175 L 740,175 L 820,195 L 815,220 L 710,215 L 610,185 Z' },
      { id: 'roof', name: 'Roof Panel', d: 'M 430,110 L 610,110 L 610,125 L 430,125 Z' },
      { id: 'front-fender', name: 'Front Fender', d: 'M 740,175 L 820,195 L 820,240 L 755,240 C 740,215 675,215 660,240 L 660,185 Z' },
      { id: 'front-bumper', name: 'Front Bumper', d: 'M 820,195 C 840,200 855,220 855,245 L 850,265 C 845,275 835,280 815,280 L 755,280 L 755,240 L 820,240 Z' },
      { id: 'front-door', name: 'Front Door', d: 'M 525,178 L 660,178 L 660,265 L 525,265 Z' },
      { id: 'rear-door', name: 'Rear Door', d: 'M 400,180 L 525,180 L 525,265 L 400,265 Z' },
      { id: 'rear-quarter', name: 'Rear Quarter Panel', d: 'M 200,190 L 310,185 L 430,110 L 430,180 L 400,180 L 400,265 L 355,265 C 340,225 275,225 260,265 L 200,265 Z' },
      { id: 'rear-bumper', name: 'Rear Bumper', d: 'M 120,240 C 120,210 140,195 200,190 L 200,280 L 150,280 C 130,280 120,265 120,240 Z' },
      { id: 'side-skirt', name: 'Side Skirt', d: 'M 355,265 L 660,265 L 660,280 L 355,280 Z' },
      { id: 'side-mirror', name: 'Side Mirror', d: 'M 605,170 C 625,168 628,178 615,182 Z' },
      { id: 'spoiler', name: 'Rear Spoiler', d: 'M 115,225 C 130,223 145,225 145,232 L 118,235 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 330,180 L 435,120 L 525,120 L 525,180 Z',
      'M 535,120 L 605,120 L 710,175 L 535,178 Z'
    ],
    shadowPaths: [
      'M 100,285 C 300,295 600,295 870,285 C 880,295 850,305 480,305 C 150,305 90,295 100,285 Z'
    ],
    wheelPaths: [
      'M 310,275 m -45,0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0',
      'M 710,275 m -45,0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0'
    ],
    trimPaths: [
      'M 120,245 L 175,242 L 180,252 L 122,253 Z',
      'M 825,205 L 852,210 L 850,225 L 820,220 Z'
    ]
  },
  {
    id: 'car-suv',
    type: 'car',
    name: 'Modern Compact SUV',
    style: 'suv',
    description: 'High-riding versatile SUV with muscular arches, upright greenhouse, and roof rails.',
    defaultColor: '#6C5CE7',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Bonnet / Hood', d: 'M 675,85 L 770,145 L 835,175 L 830,205 L 720,195 L 675,145 Z' },
      { id: 'roof', name: 'Roof Panel', d: 'M 405,85 L 675,85 L 675,100 L 405,100 Z' },
      { id: 'front-fender', name: 'Front Fender', d: 'M 770,145 L 835,175 L 835,235 L 760,235 C 745,210 675,210 660,235 L 660,170 Z' },
      { id: 'front-bumper', name: 'Front Bumper', d: 'M 835,175 C 855,185 865,205 865,235 L 860,260 C 855,270 840,275 815,275 L 760,275 L 760,235 L 835,235 Z' },
      { id: 'front-door', name: 'Front Door', d: 'M 525,165 L 660,165 L 660,260 L 525,260 Z' },
      { id: 'rear-door', name: 'Rear Door', d: 'M 400,165 L 525,165 L 525,260 L 400,260 Z' },
      { id: 'rear-quarter', name: 'Rear Quarter Panel', d: 'M 200,175 L 305,170 L 405,85 L 405,165 L 400,165 L 400,260 L 365,260 C 350,215 280,215 265,260 L 200,260 Z' },
      { id: 'rear-bumper', name: 'Rear Bumper', d: 'M 115,235 C 115,195 140,180 200,175 L 200,275 L 145,275 C 125,275 115,255 115,235 Z' },
      { id: 'side-skirt', name: 'Side Skirt & Steps', d: 'M 365,260 L 660,260 L 660,275 L 365,275 Z' },
      { id: 'side-mirror', name: 'Side Mirror', d: 'M 610,155 C 628,153 630,165 615,168 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 320,165 L 415,95 L 515,95 L 515,165 Z',
      'M 525,95 L 610,95 L 610,165 L 525,165 Z',
      'M 620,95 L 670,95 L 745,150 L 620,165 Z'
    ],
    shadowPaths: [
      'M 90,285 C 300,298 600,298 885,285 C 895,298 860,310 490,310 C 140,310 80,298 90,285 Z'
    ],
    wheelPaths: [
      'M 315,270 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0',
      'M 710,270 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0'
    ],
    trimPaths: [
      'M 400,75 L 680,75 L 678,82 L 402,82 Z'
    ]
  },
  {
    id: 'car-hatchback',
    type: 'car',
    name: 'Urban Hatchback',
    style: 'hatchback',
    description: 'Sporty compact five-door hatchback with short overhangs and dynamic posture.',
    defaultColor: '#E0115F',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Bonnet / Hood', d: 'M 600,105 L 690,120 L 730,190 L 815,205 L 810,225 L 700,215 L 600,180 Z' },
      { id: 'roof', name: 'Roof Panel', d: 'M 390,105 L 600,105 L 600,120 L 390,120 Z' },
      { id: 'front-fender', name: 'Front Fender', d: 'M 730,190 L 815,205 L 810,245 L 745,245 C 730,220 665,220 650,245 L 650,185 Z' },
      { id: 'front-bumper', name: 'Front Bumper', d: 'M 815,205 C 835,210 845,230 845,250 L 840,268 C 835,278 820,280 800,280 L 745,280 L 745,245 L 810,245 Z' },
      { id: 'front-door', name: 'Front Door', d: 'M 495,175 L 650,175 L 650,265 L 495,265 Z' },
      { id: 'rear-door', name: 'Rear Door', d: 'M 380,175 L 495,175 L 495,265 L 380,265 Z' },
      { id: 'rear-quarter', name: 'Rear Quarter Panel', d: 'M 210,185 L 300,180 L 390,105 L 390,175 L 380,175 L 380,265 L 360,265 C 345,225 280,225 265,265 L 210,265 Z' },
      { id: 'rear-bumper', name: 'Rear Bumper', d: 'M 130,240 C 130,205 155,190 210,185 L 210,280 L 155,280 C 135,280 130,265 130,240 Z' },
      { id: 'side-skirt', name: 'Side Skirt', d: 'M 360,265 L 650,265 L 650,280 L 360,280 Z' },
      { id: 'spoiler', name: 'Roof Spoiler', d: 'M 380,102 C 390,100 405,102 405,110 L 380,110 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 315,175 L 395,115 L 485,115 L 485,175 Z',
      'M 495,115 L 590,115 L 670,165 L 495,175 Z'
    ],
    shadowPaths: [
      'M 110,285 C 300,296 600,296 860,285 C 870,296 840,306 480,306 C 140,306 100,296 110,285 Z'
    ],
    wheelPaths: [
      'M 312,275 m -44,0 a 44,44 0 1,0 88,0 a 44,44 0 1,0 -88,0',
      'M 698,275 m -44,0 a 44,44 0 1,0 88,0 a 44,44 0 1,0 -88,0'
    ],
    trimPaths: [
      'M 130,245 L 175,243 L 178,252 L 132,253 Z'
    ]
  },
  {
    id: 'car-coupe',
    type: 'car',
    name: 'Gran Turismo Coupe',
    style: 'coupe',
    description: 'Fastback two-door grand tourer with stretched hood and aggressive wide stance.',
    defaultColor: '#111827',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Bonnet / Hood', d: 'M 600,115 L 755,185 L 835,200 L 830,225 L 720,215 L 600,185 Z' },
      { id: 'roof', name: 'Roof Panel', d: 'M 440,115 L 600,115 L 600,128 L 440,128 Z' },
      { id: 'front-fender', name: 'Front Fender', d: 'M 755,185 L 835,200 L 830,240 L 760,240 C 745,215 680,215 665,240 L 665,190 Z' },
      { id: 'front-bumper', name: 'Front Bumper', d: 'M 835,200 C 855,205 865,225 865,250 L 860,268 C 855,278 840,280 815,280 L 760,280 L 760,240 L 830,240 Z' },
      { id: 'front-door', name: 'Long Coupe Door', d: 'M 480,180 L 665,180 L 665,265 L 480,265 Z' },
      { id: 'rear-quarter', name: 'Rear Fastback Quarter', d: 'M 190,195 L 340,190 L 440,115 L 440,180 L 480,180 L 480,265 L 350,265 C 335,225 270,225 255,265 L 190,265 Z' },
      { id: 'rear-bumper', name: 'Rear Bumper', d: 'M 110,245 C 110,215 135,200 190,195 L 190,280 L 140,280 C 120,280 110,265 110,245 Z' },
      { id: 'side-skirt', name: 'Aero Side Skirt', d: 'M 350,265 L 665,265 L 665,280 L 350,280 Z' },
      { id: 'spoiler', name: 'Ducktail Spoiler', d: 'M 110,235 C 125,232 140,233 140,240 L 115,242 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 355,185 L 445,125 L 585,125 L 705,180 Z'
    ],
    shadowPaths: [
      'M 90,285 C 300,296 600,296 880,285 C 890,296 855,306 480,306 C 130,306 80,296 90,285 Z'
    ],
    wheelPaths: [
      'M 302,275 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0',
      'M 712,275 m -46,0 a 46,46 0 1,0 92,0 a 46,46 0 1,0 -92,0'
    ],
    trimPaths: [
      'M 835,210 L 860,215 L 858,228 L 832,222 Z'
    ]
  },
  {
    id: 'car-sportscar',
    type: 'car',
    name: 'Mid-Engine Supercar',
    style: 'sportscar',
    description: 'Ultra-low exotic sports car with dramatic intakes and aggressive aerodynamics.',
    defaultColor: '#FFBF00',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Front Hood', d: 'M 550,135 L 680,185 L 840,205 L 835,225 L 700,215 L 550,185 Z' },
      { id: 'roof', name: 'Canopy Roof', d: 'M 390,135 L 550,135 L 550,148 L 390,148 Z' },
      { id: 'front-fender', name: 'Front Aero Fender', d: 'M 680,185 L 840,205 L 835,245 L 770,245 C 755,225 690,225 675,245 L 675,195 Z' },
      { id: 'front-bumper', name: 'Front Splitter & Bumper', d: 'M 840,205 C 865,210 875,230 875,255 L 870,270 C 865,280 845,282 820,282 L 770,282 L 770,245 L 835,245 Z' },
      { id: 'front-door', name: 'Dihedral Door', d: 'M 460,185 L 675,185 L 675,268 L 460,268 Z' },
      { id: 'rear-quarter', name: 'Rear Intake & Engine Bay', d: 'M 180,200 L 290,195 L 390,135 L 390,185 L 460,185 L 460,268 L 340,268 C 325,225 260,225 245,268 L 180,268 Z' },
      { id: 'rear-bumper', name: 'Rear Diffuser & Bumper', d: 'M 100,250 C 100,225 125,205 180,200 L 180,282 L 135,282 C 115,282 100,270 100,250 Z' },
      { id: 'side-skirt', name: 'Carbon Side Skirt', d: 'M 340,268 L 675,268 L 675,282 L 340,282 Z' },
      { id: 'spoiler', name: 'Active Rear Wing', d: 'M 95,215 C 110,212 135,212 140,222 L 98,225 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 305,190 L 395,145 L 535,145 L 610,185 Z'
    ],
    shadowPaths: [
      'M 80,286 C 300,298 600,298 895,286 C 905,298 860,308 485,308 C 120,308 70,298 80,286 Z'
    ],
    wheelPaths: [
      'M 292,276 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0',
      'M 722,276 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0'
    ],
    trimPaths: [
      'M 545,210 L 610,210 L 595,255 L 540,255 Z'
    ]
  },
  {
    id: 'car-pickup',
    type: 'car',
    name: 'Crew-Cab Pickup',
    style: 'pickup',
    description: 'Rugged full-size utility pickup truck with upright front fascia and expansive cargo bed.',
    defaultColor: '#DC143C',
    viewBox: '0 0 900 360',
    panels: [
      { id: 'bonnet', name: 'Bonnet / Hood', d: 'M 620,90 L 675,145 L 845,150 L 840,180 L 720,175 L 620,145 Z' },
      { id: 'roof', name: 'Cab Roof', d: 'M 440,90 L 620,90 L 620,105 L 440,105 Z' },
      { id: 'front-fender', name: 'Front Fender', d: 'M 675,145 L 845,150 L 840,225 L 760,225 C 745,200 675,200 660,225 L 660,150 Z' },
      { id: 'front-bumper', name: 'Steel Front Bumper', d: 'M 845,150 C 865,155 875,175 875,215 L 870,265 C 865,275 845,275 815,275 L 760,275 L 760,225 L 840,225 Z' },
      { id: 'front-door', name: 'Front Door', d: 'M 525,145 L 660,145 L 660,260 L 525,260 Z' },
      { id: 'rear-door', name: 'Rear Cab Door', d: 'M 400,145 L 525,145 L 525,260 L 400,260 Z' },
      { id: 'rear-quarter', name: 'Cargo Bed & Flank', d: 'M 105,150 L 375,150 L 375,260 L 360,260 C 345,205 275,205 260,260 L 130,260 C 115,260 105,250 105,230 Z' },
      { id: 'rear-bumper', name: 'Rear Step Bumper', d: 'M 105,230 L 130,230 L 130,268 L 105,268 Z' },
      { id: 'side-skirt', name: 'Side Running Board', d: 'M 360,260 L 660,260 L 660,275 L 360,275 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 445,100 L 515,100 L 515,145 L 400,145 Z',
      'M 525,100 L 605,100 L 655,145 L 525,145 Z'
    ],
    shadowPaths: [
      'M 85,282 C 300,296 600,296 890,282 C 900,296 860,308 490,308 C 130,308 75,296 85,282 Z'
    ],
    wheelPaths: [
      'M 310,265 m -52,0 a 52,52 0 1,0 104,0 a 52,52 0 1,0 -104,0',
      'M 710,265 m -52,0 a 52,52 0 1,0 104,0 a 52,52 0 1,0 -104,0'
    ],
    trimPaths: [
      'M 845,160 L 875,160 L 872,185 L 842,180 Z'
    ]
  },

  // Motorcycles
  {
    id: 'bike-sportbike',
    type: 'bike',
    name: 'Supersport 1000cc',
    style: 'sportbike',
    description: 'Track-focused supersport motorcycle with aerodynamic full fairing and sharp tail section.',
    defaultColor: '#0E3A75',
    viewBox: '0 0 800 450',
    panels: [
      { id: 'fuel-tank', name: 'Fuel Tank', d: 'M 360,210 C 370,165 420,155 480,170 C 510,180 540,210 500,245 L 430,245 Z' },
      { id: 'fairing', name: 'Front & Side Fairing', d: 'M 480,245 L 580,205 L 610,245 L 520,330 L 460,330 L 440,270 Z' },
      { id: 'seat-cowl', name: 'Tail Section & Seat Cowl', d: 'M 270,185 L 360,185 L 350,210 L 250,210 Z' },
      { id: 'front-mudguard', name: 'Front Fender', d: 'M 545,295 C 570,275 615,275 640,305 L 625,315 C 605,295 575,295 555,310 Z' },
      { id: 'belly-pan', name: 'Lower Belly Pan', d: 'M 430,315 L 520,325 L 495,350 L 415,340 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 570,170 L 615,185 L 590,205 L 555,190 Z'
    ],
    shadowPaths: [
      'M 120,410 C 300,420 500,420 680,410 C 690,420 660,430 400,430 C 180,430 110,420 120,410 Z'
    ],
    wheelPaths: [
      'M 210,340 m -65,0 a 65,65 0 1,0 130,0 a 65,65 0 1,0 -130,0',
      'M 590,340 m -65,0 a 65,65 0 1,0 130,0 a 65,65 0 1,0 -130,0'
    ],
    trimPaths: [
      'M 330,250 L 440,250 L 430,340 L 340,320 Z'
    ]
  },
  {
    id: 'bike-cruiser',
    type: 'bike',
    name: 'V-Twin Cruiser',
    style: 'cruiser',
    description: 'Classic low-slung cruiser with teardrop fuel tank, deep fenders, and forward controls.',
    defaultColor: '#16181D',
    viewBox: '0 0 800 450',
    panels: [
      { id: 'fuel-tank', name: 'Teardrop Fuel Tank', d: 'M 340,220 C 350,180 400,175 460,195 C 480,205 490,225 460,245 L 350,245 Z' },
      { id: 'rear-mudguard', name: 'Deep Rear Fender', d: 'M 130,310 C 130,270 170,250 230,250 L 245,280 C 190,280 170,295 160,330 Z' },
      { id: 'front-mudguard', name: 'Classic Front Fender', d: 'M 580,260 C 620,260 655,280 660,320 L 630,330 C 620,300 600,285 570,285 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 100,410 C 300,420 500,420 700,410 C 710,420 680,430 400,430 C 160,430 90,420 100,410 Z'
    ],
    wheelPaths: [
      'M 195,345 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0',
      'M 605,345 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0'
    ],
    trimPaths: [
      'M 350,255 L 450,255 L 430,350 L 330,350 Z',
      'M 380,350 L 570,360 L 570,375 L 380,365 Z'
    ]
  },
  {
    id: 'bike-naked',
    type: 'bike',
    name: 'Streetfighter Naked',
    style: 'naked',
    description: 'Aggressive street motorcycle with exposed trellis frame and minimalist bodywork.',
    defaultColor: '#D40026',
    viewBox: '0 0 800 450',
    panels: [
      { id: 'fuel-tank', name: 'Muscular Fuel Tank', d: 'M 370,205 C 380,165 435,160 485,180 C 510,195 520,225 480,240 L 380,240 Z' },
      { id: 'seat-cowl', name: 'Sharp Tail Cowl', d: 'M 270,190 L 350,190 L 335,215 L 255,215 Z' },
      { id: 'fairing', name: 'Headlight Mask & Shrouds', d: 'M 560,230 L 590,235 L 575,255 L 550,245 Z' },
      { id: 'front-mudguard', name: 'Shorty Front Fender', d: 'M 550,290 C 575,275 615,275 640,305 L 625,315 C 605,295 575,295 555,310 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 120,410 C 300,420 500,420 680,410 C 690,420 660,430 400,430 C 180,430 110,420 120,410 Z'
    ],
    wheelPaths: [
      'M 205,340 m -65,0 a 65,65 0 1,0 130,0 a 65,65 0 1,0 -130,0',
      'M 595,340 m -65,0 a 65,65 0 1,0 130,0 a 65,65 0 1,0 -130,0'
    ],
    trimPaths: [
      'M 360,250 L 460,250 L 440,340 L 340,330 Z'
    ]
  },
  {
    id: 'bike-adventure',
    type: 'bike',
    name: 'Adventure Tourer',
    style: 'adventure',
    description: 'Long-distance dual-sport adventure bike with tall rally windscreen and prominent beak.',
    defaultColor: '#22D3EE',
    viewBox: '0 0 800 450',
    panels: [
      { id: 'fuel-tank', name: 'Long-Range Fuel Tank', d: 'M 380,190 C 390,150 445,145 510,165 C 530,175 550,205 500,235 L 390,235 Z' },
      { id: 'fairing', name: 'Front Rally Beak & Fairing', d: 'M 510,235 L 610,235 L 580,265 L 500,255 Z' },
      { id: 'seat-cowl', name: 'Subframe & Tail Section', d: 'M 270,175 L 370,175 L 350,205 L 250,205 Z' },
      { id: 'front-mudguard', name: 'High Front Fender', d: 'M 560,285 C 585,270 625,270 650,300 L 635,310 C 615,290 585,290 565,305 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [
      'M 540,130 L 565,95 L 585,130 L 555,160 Z'
    ],
    shadowPaths: [
      'M 110,410 C 300,420 500,420 690,410 C 700,420 670,430 400,430 C 170,430 100,420 110,410 Z'
    ],
    wheelPaths: [
      'M 195,340 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0',
      'M 605,340 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0'
    ],
    trimPaths: [
      'M 370,245 L 470,245 L 450,345 L 350,335 Z'
    ]
  },
  {
    id: 'bike-commuter',
    type: 'bike',
    name: 'Urban Commuter',
    style: 'commuter',
    description: 'Lightweight everyday street bike with upright ergonomic seating and clean bodywork.',
    defaultColor: '#6CB33F',
    viewBox: '0 0 800 450',
    panels: [
      { id: 'fuel-tank', name: 'Compact Fuel Tank', d: 'M 350,210 C 360,170 410,165 470,185 C 490,195 500,225 460,240 L 360,240 Z' },
      { id: 'seat-cowl', name: 'Utility Tail Cowl', d: 'M 250,190 L 340,190 L 330,215 L 240,215 Z' },
      { id: 'front-mudguard', name: 'City Front Mudguard', d: 'M 550,290 C 575,275 615,275 640,305 L 625,315 C 605,295 575,295 555,310 Z' }
    ],
    get bodyPaths() { return this.panels.map(p => p.d); },
    glassPaths: [],
    shadowPaths: [
      'M 120,410 C 300,420 500,420 680,410 C 690,420 660,430 400,430 C 180,430 110,420 120,410 Z'
    ],
    wheelPaths: [
      'M 200,340 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0',
      'M 600,340 m -64,0 a 64,64 0 1,0 128,0 a 64,64 0 1,0 -128,0'
    ],
    trimPaths: [
      'M 340,245 L 440,245 L 420,335 L 330,325 Z'
    ]
  }
];
