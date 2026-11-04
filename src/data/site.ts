export const SITE = {
  name: 'ColorCode Identifier',
  shortName: 'ColorCode',
  tagline: 'Find the color. Know the code.',
  description: 'Identify colors from a camera or photo, explore color values, customize vehicle paint colors, and discover useful color tools.',
  url: import.meta.env.SITE || 'https://your-domain.com',
  locale: 'en_US'
};

export const NAV = [
  { label: 'Color Scanner', href: '/color-identifier/' },
  { label: 'Color Database', href: '/color-names/' },
  { label: 'Car Customizer', href: '/car-color-customizer/' },
  { label: 'Bike Customizer', href: '/bike-color-customizer/' },
  { label: 'All Tools', href: '/tools/' },
  { label: 'Workspace', href: '/workspace/' },
  { label: 'Guides', href: '/blog/' }
];
