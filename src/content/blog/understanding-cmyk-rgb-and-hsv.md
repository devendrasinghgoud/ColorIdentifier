---
title: "Understanding CMYK, RGB and HSV: Color Spaces Explained"
description: "A clear breakdown of CMYK, RGB, and HSV color spaces. Learn how additive light, subtractive ink, and perceptual hue models work."
pubDate: 2026-11-04
author: "ColorCode Identifier Editorial Team"
category: "Color Theory"
tags: ["CMYK", "RGB", "HSV", "color spaces"]
keywords: ["cmyk vs rgb", "what is hsv color", "cmyk explained", "rgb color space"]
---

Digital designers and printmakers encounter different color space acronyms every day. While RGB powers computer monitors and smartphones, CMYK controls physical printing presses, and HSV offers an intuitive way to pick colors programmatically.

## The Three Fundamental Color Systems

### 1. RGB (Red, Green, Blue) — Additive Light
- **Medium:** Digital displays, LED monitors, cameras, mobile screens.
- **How it works:** Starts from total black (`rgb(0, 0, 0)`). Adding red, green, and blue light together produces white (`rgb(255, 255, 255)`).
- **Gamut:** Wide color gamut capable of producing vibrant electric neons and intense digital blues that cannot be physically printed on paper.

### 2. CMYK (Cyan, Magenta, Yellow, Key/Black) — Subtractive Ink
- **Medium:** Offset printing, home inkjets, packaging, books, posters.
- **How it works:** Starts from white paper. Inks act as filters that subtract (absorb) light wavelengths. Combining cyan, magenta, and yellow ink creates a muddy dark brown, requiring a separate black ("Key") plate for crisp text and deep shadows.
- **Gamut:** Smaller gamut than sRGB. Bright neon greens and electric cyans will appear noticeably duller when converted to print.

### 3. HSV / HSB (Hue, Saturation, Value / Brightness) — Perceptual Cylinder
- **Medium:** UI color pickers, computer vision, photo editing sliders.
- **How it works:** 
  - **Hue (0°–360°):** The base color pigment on the color wheel.
  - **Saturation (0%–100%):** The purity or vibrancy of the color (0% is grayscale, 100% is pure pigment).
  - **Value (0%–100%):** The lightness or darkness of the color (0% is pure black, 100% is full brightness).

## Side-by-Side Comparison

| Feature | RGB | CMYK | HSV |
|---|---|---|---|
| Primary Application | Web, screen design, games | Commercial print & packaging | UI color pickers, vision algorithms |
| Model Type | Additive (Light) | Subtractive (Pigment) | Cylindrical transformation of RGB |
| Color Range | 0–255 per channel | 0%–100% per ink plate | 0–360° Hue, 0–100% S/V |
| White Point | `255, 255, 255` | `0%, 0%, 0%, 0%` (Paper surface) | `0°, 0%, 100%` |

## Converting Between Color Spaces

When using the [ColorCode Identifier Scanner](/color-identifier/) or [HEX to RGB Converter](/hex-to-rgb/), all three values are calculated simultaneously, allowing you to preview how a screen pixel maps into print CMYK and human-friendly HSV coordinates.
