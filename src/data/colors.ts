export type NamedColor = { name: string; hex: string; family: string; description: string; uses: string };
export const NAMED_COLORS: NamedColor[] = [
  { name: 'Crimson', hex: '#DC143C', family: 'Red', description: 'A vivid, cool-leaning red with strong visual energy.', uses: 'Useful for bold accents, alerts and expressive visual identities.' },
  { name: 'Tomato', hex: '#FF6347', family: 'Red', description: 'A warm red-orange often associated with freshness and energy.', uses: 'Works well in food, lifestyle and friendly interface accents.' },
  { name: 'Coral', hex: '#FF7F50', family: 'Orange', description: 'A lively orange-pink shade inspired by natural coral.', uses: 'Useful for warm highlights and approachable designs.' },
  { name: 'Dark Orange', hex: '#FF8C00', family: 'Orange', description: 'A saturated orange that stands out against cool neutrals.', uses: 'Use for calls to action and energetic accents.' },
  { name: 'Gold', hex: '#FFD700', family: 'Yellow', description: 'A bright yellow-gold color.', uses: 'Good for highlights, badges and celebratory details.' },
  { name: 'Olive Drab', hex: '#6B8E23', family: 'Green', description: 'A muted earthy green.', uses: 'Useful in outdoor, utility and nature-inspired palettes.' },
  { name: 'Forest Green', hex: '#228B22', family: 'Green', description: 'A deep natural green.', uses: 'Works for nature, sustainability and calm visual themes.' },
  { name: 'Teal', hex: '#008080', family: 'Cyan', description: 'A balanced blue-green shade.', uses: 'Useful for clear, composed and contemporary interfaces.' },
  { name: 'Turquoise', hex: '#40E0D0', family: 'Cyan', description: 'A bright blue-green color.', uses: 'Works as a fresh accent in modern palettes.' },
  { name: 'Sky Blue', hex: '#87CEEB', family: 'Blue', description: 'A light blue inspired by a clear daytime sky.', uses: 'Useful for calm backgrounds and friendly illustrations.' },
  { name: 'Royal Blue', hex: '#4169E1', family: 'Blue', description: 'A strong, saturated blue.', uses: 'Works well for links, controls and confident brand accents.' },
  { name: 'Navy', hex: '#000080', family: 'Blue', description: 'A very dark blue with a formal character.', uses: 'Useful for typography, uniforms and strong contrast.' },
  { name: 'Indigo', hex: '#4B0082', family: 'Violet', description: 'A deep blue-violet color.', uses: 'Works for premium, thoughtful and creative identities.' },
  { name: 'Blue Violet', hex: '#8A2BE2', family: 'Violet', description: 'A vivid violet with a blue undertone.', uses: 'Useful for expressive accents and creative interfaces.' },
  { name: 'Orchid', hex: '#DA70D6', family: 'Pink', description: 'A medium pink-purple shade.', uses: 'Works for playful and expressive design details.' },
  { name: 'Deep Pink', hex: '#FF1493', family: 'Pink', description: 'A vivid, saturated pink.', uses: 'Use sparingly for strong accents.' },
  { name: 'Saddle Brown', hex: '#8B4513', family: 'Brown', description: 'A deep, warm brown.', uses: 'Useful for natural, leather and craft-inspired themes.' },
  { name: 'Slate Gray', hex: '#708090', family: 'Gray', description: 'A cool, medium gray with a subtle blue cast.', uses: 'Useful for neutral interfaces and supporting text.' },
  { name: 'Silver', hex: '#C0C0C0', family: 'Gray', description: 'A light neutral gray.', uses: 'Useful for borders, metallic references and quiet surfaces.' },
  { name: 'Charcoal', hex: '#36454F', family: 'Gray', description: 'A deep blue-gray neutral.', uses: 'Useful for strong text and understated backgrounds.' }
];
