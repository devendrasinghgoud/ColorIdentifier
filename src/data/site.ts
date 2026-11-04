export const SITE = {
  name: 'ColorCode Identifier',
  shortName: 'ColorCode',
  tagline: 'Find the color. Know the code.',
  description: 'Identify colors from a camera or photo, explore color values, and discover useful color tools for vehicles, design and everyday objects.',
  url: import.meta.env.SITE || 'https://your-domain.com',
  locale: 'en_US'
};

export const NAV = [
  { label: 'Color Identifier', href: '/color-identifier/' },
  { label: 'Car Colors', href: '/car-color-identifier/' },
  { label: 'Bike Colors', href: '/bike-color-identifier/' },
  { label: 'All Tools', href: '/tools/' },
  { label: 'Color Guides', href: '/blog/' }
];
