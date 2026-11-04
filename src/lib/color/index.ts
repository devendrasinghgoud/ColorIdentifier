export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };
export type ColorResult = { hex: string; rgb: RGB; hsl: HSL };

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const byte = (n: number) => clamp(Math.round(n), 0, 255);

export function parseHex(input: string): RGB | null {
  let value = input.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(value)) value = value.split('').map((c) => c + c).join('');
  if (/^[0-9a-fA-F]{8}$/.test(value)) value = value.slice(0, 6); // Alpha is intentionally excluded from opaque RGB output.
  if (!/^[0-9a-fA-F]{6}$/.test(value)) return null;
  return { r: parseInt(value.slice(0, 2), 16), g: parseInt(value.slice(2, 4), 16), b: parseInt(value.slice(4, 6), 16) };
}

export function rgbToHex({ r, g, b }: RGB): string {
  return '#' + [r, g, b].map((v) => byte(v).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = clamp(r, 0, 255) / 255, gn = clamp(g, 0, 255) / 255, bn = clamp(b, 0, 255) / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn), delta = max - min;
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rn: h = ((gn - bn) / delta) % 6; break;
      case gn: h = (bn - rn) / delta + 2; break;
      default: h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const hue = ((h % 360) + 360) % 360 / 360, sat = clamp(s, 0, 100) / 100, light = clamp(l, 0, 100) / 100;
  const k = (n: number) => (n + hue * 12) % 12;
  const a = sat * Math.min(light, 1 - light);
  const f = (n: number) => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: byte(f(0) * 255), g: byte(f(8) * 255), b: byte(f(4) * 255) };
}

export function getColorResult(rgb: RGB): ColorResult {
  return { hex: rgbToHex(rgb), rgb: { r: byte(rgb.r), g: byte(rgb.g), b: byte(rgb.b) }, hsl: rgbToHsl(rgb) };
}

export function relativeLuminance({ r, g, b }: RGB): number {
  const linear = (v: number) => { const c = v / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

export function contrastRatio(a: RGB, b: RGB): number {
  const l1 = relativeLuminance(a), l2 = relativeLuminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function rgbDistance(a: RGB, b: RGB): number {
  // Euclidean RGB distance is a quick approximation, not a perceptually uniform Delta-E metric.
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

export function nearestNamedColor(rgb: RGB, colors: { name: string; hex: string }[]): string {
  let nearest = 'Custom color', best = Infinity;
  for (const color of colors) {
    const candidate = parseHex(color.hex);
    if (!candidate) continue;
    const distance = rgbDistance(rgb, candidate);
    if (distance < best) { best = distance; nearest = color.name; }
  }
  return nearest;
}

export function toCssRgb(rgb: RGB): string { return `rgb(${byte(rgb.r)}, ${byte(rgb.g)}, ${byte(rgb.b)})`; }
