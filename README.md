# ColorCode Identifier

A static-first Astro + TypeScript color discovery platform. Its main experience samples visible colors from a camera or uploaded image, with an initial focus on cars and motorcycles.

## Requirements
- Node.js 20.18+ (Node 22 LTS recommended)
- npm

## Run locally

```bash
npm install
cp .env.example .env
# Edit SITE_URL in .env to your eventual production origin
npm run dev
```

Open the local URL printed by Astro. Camera access generally works on `localhost`; deployed camera access requires HTTPS and user permission.

## Build and preview

```bash
npm run check
npm run build
npm run preview
```

## Before deployment
1. Set `SITE_URL` to the real canonical production URL.
2. The `/robots.txt` endpoint uses Astro’s configured site origin; verify it after deployment.
3. Add a real contact email or contact method.
4. Review privacy policy and terms against actual hosting, analytics, consent and ad services.
5. Add consent management before enabling non-essential cookies/ads where required.
6. Test on iOS Safari, Android Chrome and desktop browsers.
7. Validate the generated sitemap, canonical tags, structured data and 404 behavior.
8. Configure Search Console and Analytics only after privacy and consent requirements are addressed.

## Current functionality
- Camera access through `getUserMedia`.
- Local image upload and canvas pixel sampling.
- HEX, RGB and HSL output.
- Small curated nearest-name reference set.
- Sample swatches and lightweight dominant-color estimation.
- HEX/RGB converters, palette and shades generators, CSS gradient generator and WCAG contrast ratio checker.
- Astro Markdown blog collection, SEO metadata, sitemap integration and internal links.

## Known limitations
- Camera/image sampling returns a digital image pixel value, not a factory vehicle paint code.
- The current color-name set is a small starter list, not a complete CSS color database.
- Similar-name matching currently uses Euclidean RGB distance; it is not perceptually uniform Delta E.
- Dominant-color extraction uses a lightweight quantized histogram approximation.
- Image zoom is a visual zoom control; precision zoom/magnifier and high-DPI touch testing should be improved in the next iteration.
- Privacy, terms and contact pages are starter templates and must be reviewed before launch.
- Seed keywords are unvalidated. No search-volume or ranking claims are made.

## Project documents
- `DOCS/PROJECT_SPEC.md`
- `DOCS/SEO_AEO_GEO_STRATEGY.md`
- `DOCS/KEYWORD_MAP.csv`
- `DOCS/EDITORIAL_CALENDAR.md`
- `DOCS/INTERNAL_LINKING_MAP.md`

## Deployment
Works with static hosting such as Vercel, Netlify or Cloudflare Pages. Build command: `npm run build`. Output directory: `dist/`.
