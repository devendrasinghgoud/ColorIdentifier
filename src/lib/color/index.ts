export type RGB = { r: number; g: number; b: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type HSL = { h: number; s: number; l: number };
export type HSLA = { h: number; s: number; l: number; a: number };
export type HSV = { h: number; s: number; v: number };
export type CMYK = { c: number; m: number; y: number; k: number };

export type ColorResult = {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
};

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n));
const byte = (n: number): number => clamp(Math.round(n), 0, 255);

export function parseHex(input: string): RGB | null {
  let value = input.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(value)) value = value.split('').map((c) => c + c).join('');
  if (/^[0-9a-fA-F]{8}$/.test(value)) value = value.slice(0, 6);
  if (!/^[0-9a-fA-F]{6}$/.test(value)) return null;
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  return '#' + [r, g, b].map((v) => byte(v).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = clamp(r, 0, 255) / 255;
  const gn = clamp(g, 0, 255) / 255;
  const bn = clamp(b, 0, 255) / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const hue = (((h % 360) + 360) % 360) / 360;
  const sat = clamp(s, 0, 100) / 100;
  const light = clamp(l, 0, 100) / 100;
  const k = (n: number) => (n + hue * 12) % 12;
  const a = sat * Math.min(light, 1 - light);
  const f = (n: number) => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: byte(f(0) * 255), g: byte(f(8) * 255), b: byte(f(4) * 255) };
}

export function rgbToHsv({ r, g, b }: RGB): HSV {
  const rn = clamp(r, 0, 255) / 255;
  const gn = clamp(g, 0, 255) / 255;
  const bn = clamp(b, 0, 255) / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  const s = max === 0 ? 0 : delta / max;
  const v = max;

  if (delta !== 0) {
    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h: Math.round(h), s: Math.round(s * 100), v: Math.round(v * 100) };
}

export function hsvToRgb({ h, s, v }: HSV): RGB {
  const hue = (((h % 360) + 360) % 360) / 60;
  const sat = clamp(s, 0, 100) / 100;
  const val = clamp(v, 0, 100) / 100;
  const c = val * sat;
  const x = c * (1 - Math.abs((hue % 2) - 1));
  const m = val - c;
  let r = 0, g = 0, b = 0;

  if (hue >= 0 && hue < 1) { r = c; g = x; b = 0; }
  else if (hue >= 1 && hue < 2) { r = x; g = c; b = 0; }
  else if (hue >= 2 && hue < 3) { r = 0; g = c; b = x; }
  else if (hue >= 3 && hue < 4) { r = 0; g = x; b = c; }
  else if (hue >= 4 && hue < 5) { r = x; g = 0; b = c; }
  else if (hue >= 5 && hue < 6) { r = c; g = 0; b = x; }

  return { r: byte((r + m) * 255), g: byte((g + m) * 255), b: byte((b + m) * 255) };
}

export function rgbToCmyk({ r, g, b }: RGB): CMYK {
  const rn = clamp(r, 0, 255) / 255;
  const gn = clamp(g, 0, 255) / 255;
  const bn = clamp(b, 0, 255) / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k >= 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = (1 - rn - k) / (1 - k);
  const m = (1 - gn - k) / (1 - k);
  const y = (1 - bn - k) / (1 - k);
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}

export function cmykToRgb({ c, m, y, k }: CMYK): RGB {
  const cn = clamp(c, 0, 100) / 100;
  const mn = clamp(m, 0, 100) / 100;
  const yn = clamp(y, 0, 100) / 100;
  const kn = clamp(k, 0, 100) / 100;
  const r = 255 * (1 - cn) * (1 - kn);
  const g = 255 * (1 - mn) * (1 - kn);
  const b = 255 * (1 - yn) * (1 - kn);
  return { r: byte(r), g: byte(g), b: byte(b) };
}

export function getColorResult(rgb: RGB): ColorResult {
  const cleanRgb = { r: byte(rgb.r), g: byte(rgb.g), b: byte(rgb.b) };
  return {
    hex: rgbToHex(cleanRgb),
    rgb: cleanRgb,
    hsl: rgbToHsl(cleanRgb),
    hsv: rgbToHsv(cleanRgb),
    cmyk: rgbToCmyk(cleanRgb)
  };
}

export function relativeLuminance({ r, g, b }: RGB): number {
  const linear = (v: number) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

export function contrastRatio(a: RGB, b: RGB): number {
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function rgbDistance(a: RGB, b: RGB): number {
  // Redmean perceptually weighted color distance for sRGB.
  const rBar = (a.r + b.r) / 2;
  const deltaR = a.r - b.r;
  const deltaG = a.g - b.g;
  const deltaB = a.b - b.b;
  return Math.sqrt(
    (2 + rBar / 256) * deltaR * deltaR +
    4 * deltaG * deltaG +
    (2 + (255 - rBar) / 256) * deltaB * deltaB
  );
}

export function nearestNamedColor(rgb: RGB, colors: { name: string; hex: string }[]): string {
  let nearest = 'Custom color';
  let best = Infinity;
  for (const color of colors) {
    const candidate = parseHex(color.hex);
    if (!candidate) continue;
    const distance = rgbDistance(rgb, candidate);
    if (distance < best) {
      best = distance;
      nearest = color.name;
    }
  }
  return nearest;
}

export function toCssRgb(rgb: RGB): string {
  return `rgb(${byte(rgb.r)}, ${byte(rgb.g)}, ${byte(rgb.b)})`;
}

export function toCssRgba(rgb: RGB, alpha = 1): string {
  return `rgba(${byte(rgb.r)}, ${byte(rgb.g)}, ${byte(rgb.b)}, ${clamp(alpha, 0, 1)})`;
}

export function toCssHsl(hsl: HSL): string {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}

export function toCssHsla(hsl: HSL, alpha = 1): string {
  return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${clamp(alpha, 0, 1)})`;
}

export function toCssCmyk(cmyk: CMYK): string {
  return `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
}

export function toCssHsv(hsv: HSV): string {
  return `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`;
}

export function shiftHue(hsl: HSL, degrees: number): HSL {
  return { ...hsl, h: (hsl.h + degrees + 360) % 360 };
}

export function getComplementary(hsl: HSL): HSL {
  return shiftHue(hsl, 180);
}

export function getAnalogous(hsl: HSL, offset = 30): [HSL, HSL] {
  return [shiftHue(hsl, -offset), shiftHue(hsl, offset)];
}

export function getTriadic(hsl: HSL): [HSL, HSL] {
  return [shiftHue(hsl, 120), shiftHue(hsl, 240)];
}

export function getTetradic(hsl: HSL): [HSL, HSL, HSL] {
  return [shiftHue(hsl, 90), shiftHue(hsl, 180), shiftHue(hsl, 270)];
}

export function getSplitComplementary(hsl: HSL): [HSL, HSL] {
  return [shiftHue(hsl, 150), shiftHue(hsl, 210)];
}

export function getMonochromatic(hsl: HSL, steps = 5): HSL[] {
  const result: HSL[] = [];
  const minL = Math.max(15, hsl.l - 35);
  const maxL = Math.min(90, hsl.l + 35);
  const stepSize = (maxL - minL) / (steps - 1);
  for (let i = 0; i < steps; i++) {
    result.push({ h: hsl.h, s: hsl.s, l: Math.round(minL + i * stepSize) });
  }
  return result;
}

export function mixColors(colorA: RGB, colorB: RGB, weight = 0.5): RGB {
  const w = clamp(weight, 0, 1);
  return {
    r: byte(colorA.r * (1 - w) + colorB.r * w),
    g: byte(colorA.g * (1 - w) + colorB.g * w),
    b: byte(colorA.b * (1 - w) + colorB.b * w)
  };
}

export function simulateColorBlindness(rgb: RGB, type: 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia'): RGB {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  let simR = r, simG = g, simB = b;
  if (type === 'protanopia') {
    simR = 0.56667 * r + 0.43333 * g + 0 * b;
    simG = 0.55833 * r + 0.44167 * g + 0 * b;
    simB = 0 * r + 0.24167 * g + 0.75833 * b;
  } else if (type === 'deuteranopia') {
    simR = 0.625 * r + 0.375 * g + 0 * b;
    simG = 0.7 * r + 0.3 * g + 0 * b;
    simB = 0 * r + 0.3 * g + 0.7 * b;
  } else if (type === 'tritanopia') {
    simR = 0.95 * r + 0.05 * g + 0 * b;
    simG = 0 * r + 0.43333 * g + 0.56667 * b;
    simB = 0 * r + 0.475 * g + 0.525 * b;
  } else if (type === 'achromatopsia') {
    const mono = 0.299 * r + 0.587 * g + 0.114 * b;
    simR = mono;
    simG = mono;
    simB = mono;
  }
  return { r: byte(simR * 255), g: byte(simG * 255), b: byte(simB * 255) };
}

export function estimateColorTemperature(rgb: RGB): { kelvin: number; label: string; warmth: 'warm' | 'neutral' | 'cool' } {
  // Approximate correlated color temperature based on McCamy formula on CIE chromaticity.
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const X = 0.4124 * r + 0.3576 * g + 0.1805 * b;
  const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b;
  const sum = X + Y + Z;
  if (sum === 0) return { kelvin: 6500, label: 'Neutral Daylight (Estimated)', warmth: 'neutral' };
  const x = X / sum;
  const y = Y / sum;
  const n = (x - 0.3320) / (0.1858 - y);
  const cct = 449 * Math.pow(n, 3) + 3525 * Math.pow(n, 2) + 6823.3 * n + 5520.33;
  const clampedKelvin = Math.round(clamp(cct, 1500, 15000));
  let warmth: 'warm' | 'neutral' | 'cool' = 'neutral';
  let label = 'Neutral (~5000K-6500K)';
  if (clampedKelvin < 4500) {
    warmth = 'warm';
    label = clampedKelvin < 3000 ? 'Very Warm (Incandescent / Sunset)' : 'Warm White';
  } else if (clampedKelvin > 7000) {
    warmth = 'cool';
    label = clampedKelvin > 9000 ? 'Very Cool (Deep Blue Sky)' : 'Cool Daylight';
  }
  return { kelvin: clampedKelvin, label, warmth };
}
