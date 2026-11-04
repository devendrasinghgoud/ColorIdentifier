import { parseHex, getColorResult, type RGB, type HSL, type HSV, type CMYK } from '../lib/color';

export type ColorFamily =
  | 'Red'
  | 'Orange'
  | 'Yellow'
  | 'Green'
  | 'Cyan'
  | 'Blue'
  | 'Purple and Violet'
  | 'Pink'
  | 'Brown'
  | 'Gray'
  | 'White'
  | 'Black'
  | 'Neutral'
  | 'Metallic-inspired'
  | 'Pastel'
  | 'Earth tones';

export type ColorSourceType = 'CSS Standard' | 'Editorial' | 'Classic / Historical' | 'Metallic-inspired';

export type NamedColor = {
  name: string;
  hex: string;
  family: ColorFamily;
  description: string;
  uses: string;
  sourceType: ColorSourceType;
  warmth: 'warm' | 'cool' | 'neutral';
  isPopular?: boolean;
  isRecent?: boolean;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
};

type RawColorDef = {
  name: string;
  hex: string;
  family: ColorFamily;
  description: string;
  uses: string;
  sourceType: ColorSourceType;
  warmth: 'warm' | 'cool' | 'neutral';
  isPopular?: boolean;
  isRecent?: boolean;
};

const RAW_COLORS: RawColorDef[] = [
  // Red Family
  {
    name: 'Crimson',
    hex: '#DC143C',
    family: 'Red',
    description: 'A vivid, deep red with subtle blue undertones, named after the historical kermes dye.',
    uses: 'Prominent call-to-action buttons, high-energy accents, hero banners, and alert states.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Tomato',
    hex: '#FF6347',
    family: 'Red',
    description: 'A warm, approachable red-orange with vibrant daytime luminosity.',
    uses: 'Food delivery apps, energetic branding, marketing badges, and friendly warnings.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Firebrick',
    hex: '#B22222',
    family: 'Red',
    description: 'A rich, grounded brick red with earthy warmth and understated elegance.',
    uses: 'Heritage brands, architectural accents, editorial headings, and autumn-themed designs.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Ruby Red',
    hex: '#E0115F',
    family: 'Red',
    description: 'A brilliant jewel-toned red infused with intense pink and magenta highlights.',
    uses: 'Luxury cosmetics, jewelry retail, high-impact highlights, and celebratory design.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Maroon',
    hex: '#800000',
    family: 'Red',
    description: 'A dark, commanding brownish-red associated with tradition and academic heritage.',
    uses: 'University branding, formal typography, wine labels, and conservative corporate themes.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Scarlet',
    hex: '#FF2400',
    family: 'Red',
    description: 'A brilliant orange-tinged red renowned for visibility and ceremonial pageantry.',
    uses: 'Warning badges, motorsport accents, urgent calls-to-action, and high-energy graphics.',
    sourceType: 'Classic / Historical',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Burgundy',
    hex: '#800020',
    family: 'Red',
    description: 'A deep, sophisticated reddish-purple shade inspired by fine French wines.',
    uses: 'High-end hospitality, editorial typography, luxury leather goods, and formal suits.',
    sourceType: 'Classic / Historical',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Bordeaux',
    hex: '#5B0E2D',
    family: 'Red',
    description: 'An intensely dark, opulent wine red with blackish-plum depth.',
    uses: 'Premium packaging, dark-mode backgrounds, luxury automotive interiors, and book covers.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Vermilion',
    hex: '#E34234',
    family: 'Red',
    description: 'A historical cinnabar pigment blending fiery red with dense orange.',
    uses: 'Ceremonial seals, artistic paintings, expressive logos, and striking illustrations.',
    sourceType: 'Classic / Historical',
    warmth: 'warm'
  },

  // Orange Family
  {
    name: 'Coral',
    hex: '#FF7F50',
    family: 'Orange',
    description: 'A lively, cheerful orange-pink inspired by shallow subtropical coral reefs.',
    uses: 'Lifestyle products, travel apps, approachable CTA buttons, and warm UI accents.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Dark Orange',
    hex: '#FF8C00',
    family: 'Orange',
    description: 'A saturated, intense pure orange that commands immediate optical focus.',
    uses: 'Attention-grabbing sales banners, checkout highlights, warning indicators, and active states.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Amber',
    hex: '#FFBF00',
    family: 'Orange',
    description: 'A warm honey-golden orange reminiscent of fossilized resin and sunset glow.',
    uses: 'Caution alerts, rating stars, premium beverage packaging, and inviting dark-mode accents.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Tangerine',
    hex: '#F28500',
    family: 'Orange',
    description: 'A juicy, high-saturation citrus orange with mouthwatering vibrancy.',
    uses: 'Beverage packaging, youth fashion, mobile app notification badges, and summer flyers.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Burnt Orange',
    hex: '#CC5500',
    family: 'Orange',
    description: 'A smoky, autumnal dark orange with rich organic brown undertones.',
    uses: 'Outdoor apparel, coffee branding, rugged lifestyle products, and cozy interiors.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Persimmon',
    hex: '#EC5800',
    family: 'Orange',
    description: 'A rich, sweet orange-red evocative of autumn fruit harvest.',
    uses: 'Culinary branding, autumn campaign collateral, and friendly digital cards.',
    sourceType: 'Editorial',
    warmth: 'warm'
  },

  // Yellow Family
  {
    name: 'Gold',
    hex: '#FFD700',
    family: 'Yellow',
    description: 'A luminous metallic yellow evoking prestige, victory, and timeless craftsmanship.',
    uses: 'Reward badges, premium subscription tiers, anniversary graphics, and celebratory medals.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Lemon Chiffon',
    hex: '#FFFACD',
    family: 'Yellow',
    description: 'A very pale, soft yellow with refreshing, airy brightness.',
    uses: 'Gentle card backgrounds, notification banners, baby products, and soft daylight themes.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Goldenrod',
    hex: '#DAA520',
    family: 'Yellow',
    description: 'An earthy, deep yellow with warm ochre undertones inspired by autumn wildflowers.',
    uses: 'Editorial layouts, organic foods, retro graphic styling, and artisanal craft identities.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Khaki',
    hex: '#F0E68C',
    family: 'Yellow',
    description: 'A light, dusty yellow-tan with utilitarian neutrality.',
    uses: 'Neutral web card surfaces, outdoor apparel, military aesthetics, and desert themes.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Canary Yellow',
    hex: '#FFEF00',
    family: 'Yellow',
    description: 'An intense, high-luminance yellow that immediately commands optical attention.',
    uses: 'High-visibility safety gear, sports uniforms, promotional discount callouts, and stickers.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Mustard',
    hex: '#FFDB58',
    family: 'Yellow',
    description: 'A spicy, warm culinary yellow with rich ochre undertones.',
    uses: 'Mid-century interior styling, artisanal food packaging, and vintage posters.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Saffron',
    hex: '#F4C430',
    family: 'Yellow',
    description: 'A precious, aromatic golden-yellow derived from the stigma of Crocus sativus.',
    uses: 'Spiritual garments, gourmet culinary identities, luxury textiles, and sacred art.',
    sourceType: 'Classic / Historical',
    warmth: 'warm',
    isRecent: true
  },

  // Green Family
  {
    name: 'Forest Green',
    hex: '#228B22',
    family: 'Green',
    description: 'A deep, restful green that echoes dense evergreen woodlands.',
    uses: 'Environmental branding, forestry services, sustainability reports, and calm interfaces.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Emerald',
    hex: '#50C878',
    family: 'Green',
    description: 'A vivid, radiant green with clear jewel-like brilliance.',
    uses: 'Financial growth metrics, success toasts, verified indicators, and eco-tech apps.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Olive Drab',
    hex: '#6B8E23',
    family: 'Green',
    description: 'A balanced, muted earthy green with yellow and gray undertones.',
    uses: 'Outdoor equipment, tactical gear, botanical packaging, and neutral environmental design.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Mint Green',
    hex: '#98FF98',
    family: 'Green',
    description: 'A light, fresh pastel green with an invigorating clean character.',
    uses: 'Health tech, mint flavoring, dental clinics, spring campaigns, and refreshing cards.',
    sourceType: 'Editorial',
    warmth: 'cool'
  },
  {
    name: 'Sea Green',
    hex: '#2E8B57',
    family: 'Green',
    description: 'A medium-dark aquatic green evoking temperate coastal water.',
    uses: 'Marine conservation, oceanic tourism, wellness branding, and tranquil dashboard widgets.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Pine Green',
    hex: '#01796F',
    family: 'Green',
    description: 'A cool, deep blue-green reminiscent of high-altitude conifer needles.',
    uses: 'Corporate financial portals, nature conservation, stationery, and winter themes.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Jade',
    hex: '#00A86B',
    family: 'Green',
    description: 'A revered gemstone green associated in East Asian history with nobility and purity.',
    uses: 'Holistic wellness, jewelry packaging, organic beauty, and premium badges.',
    sourceType: 'Classic / Historical',
    warmth: 'cool'
  },
  {
    name: 'Chartreuse',
    hex: '#7FFF00',
    family: 'Green',
    description: 'An electric, high-energy hybrid of lime and yellow named after French herbal liqueur.',
    uses: 'Sports performance gear, neon digital accents, gamer interfaces, and night safety.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Hunter Green',
    hex: '#355E3B',
    family: 'Green',
    description: 'A traditional dark green historically worn by English gamekeepers in field sports.',
    uses: 'Equestrian brands, classic country club collateral, library binding, and tailored menswear.',
    sourceType: 'Classic / Historical',
    warmth: 'cool'
  },

  // Cyan & Teal Family
  {
    name: 'Teal',
    hex: '#008080',
    family: 'Cyan',
    description: 'A sophisticated, balanced dark cyan that fuses blue stability with green tranquility.',
    uses: 'Healthcare portals, medical devices, corporate trust marks, and composed SaaS themes.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Turquoise',
    hex: '#40E0D0',
    family: 'Cyan',
    description: 'A sparkling, energetic blue-green inspired by Caribbean shallows and polished mineral stone.',
    uses: 'Summer travel, modern creative portfolios, tech accents, and vibrant illustrations.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Aquamarine',
    hex: '#7FFFD4',
    family: 'Cyan',
    description: 'A delicate, luminous pastel cyan with buoyant lightness.',
    uses: 'Spa websites, summer retail, delicate data markers, and breezy ambient gradients.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Electric Cyan',
    hex: '#22D3EE',
    family: 'Cyan',
    description: 'A high-visibility modern digital cyan engineered for optical clarity on dark screens.',
    uses: 'Focus rings, scanner target indicators, interactive highlights, and futuristic UI widgets.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Robin Egg Blue',
    hex: '#96DED1',
    family: 'Cyan',
    description: 'A serene pastel cyan with gentle green undertones inspired by American robin eggs.',
    uses: 'Luxury gift packaging, boutique invitations, baby nursery branding, and spring themes.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Deep Cyan',
    hex: '#008B8B',
    family: 'Cyan',
    description: 'A steady, composed dark cyan with professional poise and excellent contrast.',
    uses: 'Data visualization graphs, healthcare web navigation, and secure SaaS interfaces.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },

  // Blue Family
  {
    name: 'Royal Blue',
    hex: '#4169E1',
    family: 'Blue',
    description: 'A bold, saturated blue with historical monarchic prestige and authoritative presence.',
    uses: 'Primary action buttons, enterprise tech branding, finance navigation, and sports logos.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Midnight Blue',
    hex: '#191970',
    family: 'Blue',
    description: 'A profoundly dark blue that borders on black, capturing the stillness of night.',
    uses: 'Luxury packaging, evening app themes, high-contrast headings, and formal automotive finishes.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Sky Blue',
    hex: '#87CEEB',
    family: 'Blue',
    description: 'An airy, optimistic light blue reminiscent of a cloudless midday sky.',
    uses: 'Aviation websites, weather dashboards, cloud services, and friendly illustrations.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Steel Blue',
    hex: '#4682B4',
    family: 'Blue',
    description: 'A cool, industrial gray-blue with steady technical composure.',
    uses: 'Architectural blueprints, industrial tooling, data table headers, and calm headers.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Navy',
    hex: '#000080',
    family: 'Blue',
    description: 'A deep, traditional maritime dark blue renowned for dignity and high contrast.',
    uses: 'Legal firms, financial institutions, uniforms, and primary typography.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Cobalt Blue',
    hex: '#0047AB',
    family: 'Blue',
    description: 'An intense, radiant pure blue historically derived from sintered cobalt oxide.',
    uses: 'Stained glass, artistic ceramics, prominent navigation bars, and luxury stationery.',
    sourceType: 'Classic / Historical',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Cerulean',
    hex: '#007BA7',
    family: 'Blue',
    description: 'A deep sky blue that evokes the vastness of the Mediterranean atmosphere.',
    uses: 'Travel agencies, aquatic conservation, architectural signage, and calm portfolios.',
    sourceType: 'Classic / Historical',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Ultramarine',
    hex: '#120A8F',
    family: 'Blue',
    description: 'Historically grounded from crushed lapis lazuli, prized above gold in Renaissance art.',
    uses: 'Sacred religious iconography, masterwork museum posters, and exclusive limited editions.',
    sourceType: 'Classic / Historical',
    warmth: 'cool'
  },
  {
    name: 'Prussian Blue',
    hex: '#003153',
    family: 'Blue',
    description: 'The first modern synthetic pigment, famous for architectural blueprints and Japanese woodblocks.',
    uses: 'Technical blueprints, legal documentation headers, and brooding automotive coatings.',
    sourceType: 'Classic / Historical',
    warmth: 'cool',
    isRecent: true
  },

  // Purple and Violet Family
  {
    name: 'Indigo',
    hex: '#4B0082',
    family: 'Purple and Violet',
    description: 'A mysterious, enigmatic blue-violet extracted historically from plant leaves.',
    uses: 'Creative studios, deep thought apps, meditation guides, and nocturnal backdrops.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Brand Indigo',
    hex: '#6C5CE7',
    family: 'Purple and Violet',
    description: 'A modern, vibrant digital indigo blending violet mystery with blue authority.',
    uses: 'ColorCode Identifier primary brand identity, modern SaaS UI, and energetic CTAs.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Blue Violet',
    hex: '#8A2BE2',
    family: 'Purple and Violet',
    description: 'An intense, electric purple-blue with intense creative vibration.',
    uses: 'Gaming interfaces, streaming platforms, concert flyers, and dynamic digital artwork.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Lavender',
    hex: '#E6E6FA',
    family: 'Purple and Violet',
    description: 'A soft, calming pastel violet evoking aromatic floral fields.',
    uses: 'Sleep aids, gentle beauty products, relaxing backgrounds, and ambient card tints.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Deep Violet',
    hex: '#8B5CF6',
    family: 'Purple and Violet',
    description: 'A luminous, expressive violet engineered for modern digital interfaces.',
    uses: 'Brand gradients, featured badges, progressive web applications, and creative tooling.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Amethyst',
    hex: '#9966CC',
    family: 'Purple and Violet',
    description: 'A crystalline purple named after the quartz gemstone prized since ancient Egyptian antiquity.',
    uses: 'Luxury retail, gemstone catalogs, spiritual podcasts, and creative branding.',
    sourceType: 'Classic / Historical',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Royal Purple',
    hex: '#7851A9',
    family: 'Purple and Violet',
    description: 'A dignified, majestic purple associated with Tyrian imperial robes and nobility.',
    uses: 'Award plaques, luxury wine labels, heritage packaging, and theatrical promotions.',
    sourceType: 'Classic / Historical',
    warmth: 'cool'
  },
  {
    name: 'Mauve',
    hex: '#E0B0FF',
    family: 'Purple and Violet',
    description: 'A pale, soft violet that launched the synthetic dye revolution in 1856.',
    uses: 'Cosmetic blush, vintage fashion, nostalgic editorial designs, and delicate packaging.',
    sourceType: 'Classic / Historical',
    warmth: 'cool'
  },
  {
    name: 'Plum',
    hex: '#DDA0DD',
    family: 'Purple and Violet',
    description: 'A warm, reddish-purple shade capturing the ripe skin of stone fruit.',
    uses: 'Culinary desserts, organic jams, warm invitations, and autumnal palettes.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Periwinkle',
    hex: '#CCCCFF',
    family: 'Purple and Violet',
    description: 'A gentle pastel blue-violet with an airy, contemplative disposition.',
    uses: 'Health and wellness platforms, serene blog headers, and quiet card borders.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isRecent: true
  },

  // Pink Family
  {
    name: 'Hot Pink',
    hex: '#FF69B4',
    family: 'Pink',
    description: 'A punchy, uninhibited warm pink bursting with youthful excitement.',
    uses: 'Fashion campaigns, youth retail, energetic festival posters, and playful app widgets.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Deep Pink',
    hex: '#FF1493',
    family: 'Pink',
    description: 'A hyper-saturated, brilliant magenta-pink that cuts through visual clutter.',
    uses: 'High-contrast accents, social media tags, notification dots, and vibrant banners.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Orchid',
    hex: '#DA70D6',
    family: 'Pink',
    description: 'A refined, balanced purple-pink inspired by exotic flower petals.',
    uses: 'Florist branding, cosmetics, gift cards, and graceful creative layouts.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Blush',
    hex: '#DE5D83',
    family: 'Pink',
    description: 'A warm, understated dusty rose pink with gentle vintage undertones.',
    uses: 'Editorial beauty, boutique fashion, wellness journals, and gentle social apps.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Pastel Pink',
    hex: '#FFD1DC',
    family: 'Pink',
    description: 'A soft, sugary pastel pink with delicate cotton-candy sweetness.',
    uses: 'Bakery packaging, confectionery labels, baby gifts, and gentle feminine themes.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Fuchsia',
    hex: '#FF00FF',
    family: 'Pink',
    description: 'An unyielding, fully saturated pure magenta-pink with electric intensity.',
    uses: 'Gamer gear, 1980s retro aesthetics, neon signage, and dynamic hero graphics.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },

  // Brown Family
  {
    name: 'Saddle Brown',
    hex: '#8B4513',
    family: 'Brown',
    description: 'A rich, oiled leather brown with warm reddish wood tones.',
    uses: 'Leather craft goods, equestrian brands, woodcraft workshops, and heritage packaging.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Chocolate',
    hex: '#D2691E',
    family: 'Brown',
    description: 'A delectable, warm medium brown with caramel and cocoa resonance.',
    uses: 'Artisanal confectioneries, coffee roasters, warm cafes, and bakery packaging.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Sienna',
    hex: '#A0522D',
    family: 'Brown',
    description: 'An earthy clay-brown pigment historically harvested from Tuscan hillsides.',
    uses: 'Fine art portfolios, pottery studios, terracotta architecture, and warm branding.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Espresso',
    hex: '#4B382A',
    family: 'Brown',
    description: 'A deeply roasted, velvety dark brown with rich mahogany undertones.',
    uses: 'Specialty coffee shops, artisanal leather bookbinding, and warm dark-mode surfaces.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Caramel',
    hex: '#C68E17',
    family: 'Brown',
    description: 'A buttery golden-brown reminiscent of cooked spun sugar.',
    uses: 'Dessert menus, gourmet food packaging, and inviting warm interior accents.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Sepia',
    hex: '#704214',
    family: 'Brown',
    description: 'A historical reddish-brown pigment harvested from cuttlefish ink sacs, synonymous with vintage photographs.',
    uses: 'Archival websites, historical museum exhibitions, photo filters, and documentary styling.',
    sourceType: 'Classic / Historical',
    warmth: 'warm'
  },

  // Gray Family
  {
    name: 'Charcoal',
    hex: '#36454F',
    family: 'Gray',
    description: 'A deep, matte blue-gray with sophisticated editorial weight.',
    uses: 'Body typography, dark card surfaces, minimalist brand identities, and tech hardware.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Slate Gray',
    hex: '#708090',
    family: 'Gray',
    description: 'A balanced stone gray with cool oceanic undertones.',
    uses: 'Secondary typography, subtle borders, inactive button states, and metal textures.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Silver',
    hex: '#C0C0C0',
    family: 'Gray',
    description: 'A luminous, clean light gray with reflective neutral balance.',
    uses: 'Border strokes, metallic accents, divider lines, and card outlines.',
    sourceType: 'CSS Standard',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Ash Gray',
    hex: '#B2BEB5',
    family: 'Gray',
    description: 'A soft, pale neutral gray with subtle mineral warmth.',
    uses: 'Card borders, subtle divider rules, quiet backgrounds, and architectural sketches.',
    sourceType: 'Editorial',
    warmth: 'neutral',
    isRecent: true
  },
  {
    name: 'Cool Gray',
    hex: '#8C92AC',
    family: 'Gray',
    description: 'A modern design system gray infused with a slight violet-blue cast.',
    uses: 'Digital UI components, tech hardware enclosures, and supporting icons.',
    sourceType: 'Editorial',
    warmth: 'cool'
  },

  // White Family
  {
    name: 'Pure White',
    hex: '#FFFFFF',
    family: 'White',
    description: 'Full-spectrum maximum luminance light reflecting 100% of all red, green, and blue rays.',
    uses: 'Clean backgrounds, primary paper surfaces, high-contrast typography in dark mode.',
    sourceType: 'CSS Standard',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Ghost White',
    hex: '#F8F8FF',
    family: 'White',
    description: 'An ethereal off-white with an almost imperceptible cool blue tint.',
    uses: 'Soft digital page backgrounds, elevated card tiles, and modern minimal layouts.',
    sourceType: 'CSS Standard',
    warmth: 'cool'
  },
  {
    name: 'Snow',
    hex: '#FFFAFA',
    family: 'White',
    description: 'A gentle, warm off-white that softens harsh monitor glare.',
    uses: 'Reading applications, long-form editorial essays, and delicate product cards.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Ivory',
    hex: '#FFFFF0',
    family: 'White',
    description: 'A warm, creamy off-white with subtle yellow undertones.',
    uses: 'Wedding stationery, classical concert programs, luxury invitations, and antique books.',
    sourceType: 'CSS Standard',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Alabaster',
    hex: '#F2F0EB',
    family: 'White',
    description: 'A soft, mineral off-white inspired by carved gypsum sculpture stone.',
    uses: 'Museum signage, high-end gallery brochures, and minimalist pottery portfolios.',
    sourceType: 'Editorial',
    warmth: 'neutral',
    isRecent: true
  },

  // Black Family
  {
    name: 'Jet Black',
    hex: '#0A0A0A',
    family: 'Black',
    description: 'An intensely deep black designed to preserve dark mode contrast on OLED screens.',
    uses: 'OLED smartphone dark interfaces, luxury fashion packaging, and high-contrast typography.',
    sourceType: 'Editorial',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Pitch Black',
    hex: '#000000',
    family: 'Black',
    description: 'The absolute absence of emitted screen light in the sRGB color model.',
    uses: 'Default text color on light backgrounds, deep shadows, and stark minimal branding.',
    sourceType: 'CSS Standard',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Obsidian',
    hex: '#0B0D12',
    family: 'Black',
    description: 'A glassy volcanic black infused with an ultra-deep midnight blue undertone.',
    uses: 'Premium tech dashboards, automotive luxury trim, and night-sky backgrounds.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Ebony',
    hex: '#1E1F24',
    family: 'Black',
    description: 'A dense, dark tropical hardwood black that reads comfortably without harsh contrast.',
    uses: 'Dashboard panels, dark-mode elevated cards, instrument dials, and camera gear.',
    sourceType: 'Classic / Historical',
    warmth: 'neutral'
  },

  // Neutral Family
  {
    name: 'Dark Surface',
    hex: '#111827',
    family: 'Neutral',
    description: 'A deep, blue-tinted card surface designed for dark mode interfaces.',
    uses: 'Dark mode card backgrounds, elevated dialogs, sidebars, and control panels.',
    sourceType: 'Editorial',
    warmth: 'cool'
  },
  {
    name: 'Deep Canvas',
    hex: '#0B1020',
    family: 'Neutral',
    description: 'The foundation night-sky background for ColorCode Identifier dark mode.',
    uses: 'Dark mode root background, high-contrast canvas surfaces, and camera viewports.',
    sourceType: 'Editorial',
    warmth: 'cool'
  },
  {
    name: 'Off White',
    hex: '#F8FAFC',
    family: 'Neutral',
    description: 'A crisp, slate-tinted daylight neutral designed for clean web interfaces.',
    uses: 'Default body canvas background, secondary sidebars, and calm workspace areas.',
    sourceType: 'Editorial',
    warmth: 'neutral'
  },

  // Metallic-inspired Family
  {
    name: 'Champagne Gold',
    hex: '#F7E7CE',
    family: 'Metallic-inspired',
    description: 'An understated, delicate pale gold with subtle sparkling effervescence.',
    uses: 'Luxury consumer electronics, bridal jewelry, celebratory graphics, and fine wine labels.',
    sourceType: 'Metallic-inspired',
    warmth: 'warm',
    isPopular: true,
    isRecent: true
  },
  {
    name: 'Titanium',
    hex: '#878681',
    family: 'Metallic-inspired',
    description: 'A strong, lightweight aerospace gray with subtle earthy metallic luster.',
    uses: 'Performance smartwatches, sports bicycles, surgical tools, and technical branding.',
    sourceType: 'Metallic-inspired',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Brushed Copper',
    hex: '#B87333',
    family: 'Metallic-inspired',
    description: 'A warm, reddish-orange metallic tone evocative of hand-hammered cookware.',
    uses: 'Architectural hardware, artisanal breweries, luxury lighting fixtures, and warm accents.',
    sourceType: 'Metallic-inspired',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Bronze',
    hex: '#CD7F32',
    family: 'Metallic-inspired',
    description: 'A time-honored alloy brown-gold associated with Olympic third place and classical statues.',
    uses: 'Historical plaques, vintage timepieces, decorative medals, and tactile badges.',
    sourceType: 'Metallic-inspired',
    warmth: 'warm'
  },
  {
    name: 'Platinum',
    hex: '#E5E4E2',
    family: 'Metallic-inspired',
    description: 'A luminous, prestigious noble metal tone reflecting exceptional purity.',
    uses: 'Elite membership tiers, luxury automobile emblems, high-jewelry gift boxes.',
    sourceType: 'Metallic-inspired',
    warmth: 'neutral',
    isPopular: true
  },
  {
    name: 'Rose Gold',
    hex: '#B76E79',
    family: 'Metallic-inspired',
    description: 'A modern, romantic alloy blending fine yellow gold with copper warmth.',
    uses: 'Smartphones, fashion accessories, wedding stationery, and elegant cosmetics.',
    sourceType: 'Metallic-inspired',
    warmth: 'warm',
    isPopular: true
  },
  {
    name: 'Gunmetal',
    hex: '#2A3439',
    family: 'Metallic-inspired',
    description: 'A heavy, dark gray with subtle bronze and blue sheen used in precision mechanics.',
    uses: 'Sports wheels, chronograph dials, tactical flashlights, and dark hardware.',
    sourceType: 'Metallic-inspired',
    warmth: 'cool',
    isRecent: true
  },

  // Pastel Family
  {
    name: 'Baby Blue',
    hex: '#89CFF0',
    family: 'Pastel',
    description: 'A soft, soothing pastel sky blue known for gentle clarity.',
    uses: 'Nursery decor, relaxing apps, gentle social networks, and spring illustrations.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Pastel Mint',
    hex: '#AAF0D1',
    family: 'Pastel',
    description: 'A rejuvenating, ice-cool pale green with sweet botanical refreshment.',
    uses: 'Health tech, organic toothpastes, skincare packaging, and refreshing tea brands.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isRecent: true
  },
  {
    name: 'Buttercream',
    hex: '#FFF6D1',
    family: 'Pastel',
    description: 'A rich, comforting pale yellow reminiscent of whipped confectionery frosting.',
    uses: 'Gourmet bakery branding, cozy lifestyle blogs, and warm greeting cards.',
    sourceType: 'Editorial',
    warmth: 'warm'
  },
  {
    name: 'Lilac',
    hex: '#C8A2C8',
    family: 'Pastel',
    description: 'A dreamy, pale purple-pink inspired by fragrant spring flower panicles.',
    uses: 'Aromatherapy products, spring fashion catalogs, and peaceful journal themes.',
    sourceType: 'Classic / Historical',
    warmth: 'cool',
    isPopular: true
  },
  {
    name: 'Soft Peach',
    hex: '#FFDAB9',
    family: 'Pastel',
    description: 'A delicate, velvety pastel orange with gentle white dilution.',
    uses: 'Skin care packaging, calm background cards, editorial illustrations, and wellness interfaces.',
    sourceType: 'CSS Standard',
    warmth: 'warm'
  },
  {
    name: 'Powder Blue',
    hex: '#B0E0E6',
    family: 'Pastel',
    description: 'A cool, pale blue with gentle gray undertones named after powdered cobalt glass.',
    uses: 'Linen textiles, classic stationery, serene spa interfaces, and soft weather widgets.',
    sourceType: 'CSS Standard',
    warmth: 'cool',
    isRecent: true
  },

  // Earth Tones Family
  {
    name: 'Terracotta',
    hex: '#E2725B',
    family: 'Earth tones',
    description: 'A baked clay reddish-orange synonymous with Mediterranean roof tiles and Tuscan pots.',
    uses: 'Artisan pottery, architectural magazines, organic travel brands, and rustic cafes.',
    sourceType: 'Classic / Historical',
    warmth: 'warm',
    isPopular: true,
    isRecent: true
  },
  {
    name: 'Ochre',
    hex: '#CC7722',
    family: 'Earth tones',
    description: 'One of the oldest natural pigments on Earth, harvested from prehistoric iron-rich clay.',
    uses: 'Fine art workshops, heritage museums, vintage leathercraft, and rustic typography.',
    sourceType: 'Classic / Historical',
    warmth: 'warm'
  },
  {
    name: 'Sage Green',
    hex: '#9CAF88',
    family: 'Earth tones',
    description: 'A tranquil, grayish-green derived from dried culinary and medicinal Salvia leaves.',
    uses: 'Botanical cosmetics, sustainable fashion, calming home decor, and tea packaging.',
    sourceType: 'Editorial',
    warmth: 'cool',
    isPopular: true,
    isRecent: true
  },
  {
    name: 'Raw Umber',
    hex: '#826644',
    family: 'Earth tones',
    description: 'A natural brown earth pigment containing iron oxide and manganese oxide.',
    uses: 'Classical oil painting, conservation framing, wood flooring, and heritage logos.',
    sourceType: 'Classic / Historical',
    warmth: 'warm'
  },
  {
    name: 'Moss Green',
    hex: '#8A9A5B',
    family: 'Earth tones',
    description: 'A rich, damp forest green evocative of velvety moss carpeting ancient stones.',
    uses: 'Trail guides, national park collateral, hiking apparel, and botanical branding.',
    sourceType: 'Editorial',
    warmth: 'cool'
  },
  {
    name: 'Desert Sand',
    hex: '#EDC9AF',
    family: 'Earth tones',
    description: 'A warm, pale ochre-tan capturing the sunlit contours of windblown desert dunes.',
    uses: 'Travel journalism, neutral layout backdrops, linen apparel, and desert lodges.',
    sourceType: 'Editorial',
    warmth: 'warm',
    isRecent: true
  },
  {
    name: 'Warm Taupe',
    hex: '#B38B6D',
    family: 'Earth tones',
    description: 'A versatile brownish-gray with gentle pink-tan warmth.',
    uses: 'Interior textiles, cashmere knitwear, luxury cosmetic palettes, and neutral cards.',
    sourceType: 'Editorial',
    warmth: 'warm'
  }
];

export const NAMED_COLORS: NamedColor[] = RAW_COLORS.map((item) => {
  const rgb = parseHex(item.hex)!;
  const res = getColorResult(rgb);
  return {
    ...item,
    rgb: res.rgb,
    hsl: res.hsl,
    hsv: res.hsv,
    cmyk: res.cmyk
  };
});
