# L-TAG

Premium, minimalist marketing site for **L-TAG** — a garment import and wholesale brand. Built to feel like a luxury fashion showroom: warm-white palette, champagne-gold accents, satin-inspired background, generous whitespace, and restrained motion.

> Imported Fashion. Wholesale Excellence.

## Tech stack

- **Next.js 15** (App Router) · **TypeScript** · **React 19**
- **Tailwind CSS 3.4** — design tokens for the ivory / ink / champagne palette
- **Framer Motion** — fade-up-on-scroll, gentle background parallax, subtle hover scaling (all 300–700ms, reduced-motion aware)
- SEO: metadata, Open Graph, JSON-LD Organization schema, `sitemap.xml`, `robots.txt`, dynamic favicon
- Accessibility: skip link, semantic landmarks, focus-visible rings, `prefers-reduced-motion` support, labelled form fields

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
app/
  layout.tsx        Fonts (Inter + Space Grotesk), metadata, JSON-LD, skip link
  page.tsx          Section composition
  globals.css       Tailwind layers + satin background utilities
  icon.tsx          Dynamic favicon
  sitemap.ts robots.ts
components/
  Header.tsx        Sticky nav + animated mobile menu
  Footer.tsx
  SatinBackground.tsx   Fixed parallax satin/silk backdrop
  ui/               Reveal, Button, Logo, SectionHeading (reusable)
  sections/         Hero, About, Collections, WhyLtag, Process, Partners, Contact
lib/
  content.ts        All copy/data — edit here to change site content
```

## Customising

- **Copy & data** live in [`lib/content.ts`](lib/content.ts).
- **Brand colours / fonts** are in [`tailwind.config.ts`](tailwind.config.ts).
- **Collection imagery**: cards in [`components/sections/Collections.tsx`](components/sections/Collections.tsx) use tasteful fabric-tone gradient placeholders. Swap the `<div>` placeholder for `next/image` editorial photography when assets are ready.
- **Contact form** is a front-end demo (shows a success state). Wire `handleSubmit` in [`components/sections/Contact.tsx`](components/sections/Contact.tsx) to your CRM/email endpoint.
- **Partner logos** in [`components/sections/Partners.tsx`](components/sections/Partners.tsx) are placeholder wordmarks ready to be replaced with real logo images.
