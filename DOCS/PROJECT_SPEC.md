# ColorCode Identifier — Project Specification

## Product position
A browser-first color discovery platform. The hero use case is identifying a visible color from a camera or uploaded photo, initially for cars and motorcycles. The product reports digital image-pixel values; it does not claim to determine OEM paint formulas.

## Brand
- Primary indigo: `#6C5CE7`
- Secondary violet: `#8B5CF6`
- Accent cyan: `#22D3EE`
- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Main text: `#17152B`
- Muted text: `#64748B`
- Border: `#E2E8F0`

Use accents sparingly. Real sampled colors must remain the visual focus. The current implementation is light-theme first.

## Stack
Astro 5 static output, TypeScript strict mode, Astro content collections, custom CSS, Canvas API and browser MediaDevices API. No Bootstrap, no Vite, no server-side image upload requirement.

## Main experience
1. Camera or upload selection.
2. Browser-local image rendering.
3. Tap/click pixel sampling.
4. HEX/RGB/HSL display.
5. Nearest name from a small curated reference set.
6. Collect sampled swatches and estimate dominant colors.

## Important limitations
- Camera requires HTTPS (except localhost) and explicit browser permission.
- The current image tool processes locally and does not upload images.
- A camera sample is not a factory paint code.
- RGB nearest-name matching is an approximation, not perceptually uniform Delta E.
- Dominant-color extraction is a lightweight quantized histogram estimate, not a professional color separation system.
- The camera preview and image canvas are designed for modern browsers; test on real iOS and Android devices.

## Initial pages
Homepage, general identifier, car identifier, bike identifier, image picker, HEX/RGB converters, color name finder, palette and shades generators, gradient generator, contrast checker, HTML colors, named color reference pages, paint-code explainer, blog, about, contact, privacy and terms.

## Pre-launch tasks
- Replace `https://your-domain.com` in `astro.config.mjs`, `public/robots.txt` and `.env` with the real production origin.
- Add a real monitored contact email and update legal pages to match actual data practices.
- Add a consent management solution before enabling non-essential analytics or advertising where required.
- Test camera permissions, mobile Safari/Chrome, upload sizes, clipboard fallback and accessibility.
- Validate sitemap, canonical tags, robots, redirects and structured data after deployment.
- Do not submit every programmatic color URL until content quality and unique value are reviewed.
