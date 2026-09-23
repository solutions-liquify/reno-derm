<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# RenoDerm project guide

## Project purpose

This repository contains the public marketing website for **RenoDerm – Kidney & Skin Clinic**, a specialist dermatology and nephrology clinic in Gota, Ahmedabad. The site is a polished, responsive, single-page brochure site whose primary goals are to:

- explain the clinic, doctors, services, and consultation process;
- help visitors call or WhatsApp the correct specialist;
- provide directions, opening hours, reviews, FAQs, and social links;
- support local search through metadata, an Open Graph image, and `MedicalClinic` JSON-LD.

The production URL encoded in the app is `https://renoderm.in`. There is currently no backend, authentication, database, appointment form, payment flow, CMS, analytics integration, or API route. Appointment actions leave the site via telephone, WhatsApp, email, Google Maps, or Instagram.

## Stack and commands

- Next.js 16.3.5 App Router
- React 19.2.8 and TypeScript 5 with strict checking
- Tailwind CSS 4, configured primarily through CSS with `@theme`
- Framer Motion 13 for interaction and entrance animations
- Lucide React for interface icons
- npm with the committed `package-lock.json`

Use these commands from the repository root:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

There is no automated test suite. For ordinary changes, run `npm run lint` and `npm run build`; then visually check affected responsive and interactive states in the development server. Do not claim browser verification unless it was actually performed.

## Repository map

```text
src/
  app/
    layout.tsx            Global fonts, metadata, viewport, and JSON-LD
    page.tsx              One-page composition and section order
    globals.css           Tailwind import, design tokens, and global utilities
    opengraph-image.tsx   Generated 1200 x 630 social image
    icon.png              App/favicon image
    apple-icon.png        Apple touch icon
  components/
    sections/             Page-level sections
    ui/                   Small reusable presentation and motion primitives
  data/
    clinic.ts             Canonical content and public clinic data
public/
  brand/                  Logos and the clinic Instagram QR code
```

`README.md` is currently empty. `CLAUDE.md` imports this file, so guidance written here also applies to Claude-based agents.

## Page structure and behavior

`src/app/page.tsx` renders the site in this order:

1. `Navbar` – fixed responsive navigation, scroll progress, active-section tracking, and mobile menu.
2. `Hero` – value proposition, specialist contact cards, call/WhatsApp actions, directions, ratings, and animated proof points.
3. `Marquee` – a decorative strip of specialties.
4. `About` – positioning, clinic pillars, and animated statistics.
5. `Services` – dermatology/nephrology tabs and service cards.
6. `Doctors` – profiles, qualifications, specialties, and relevant contact/social actions.
7. `Process` – the consultation journey.
8. `Reviews` – an auto-advancing, manually controllable review carousel.
9. `Faq` – an accessible single-open accordion.
10. `Contact` – address, directions, schedules, phone/WhatsApp/email/Instagram actions, map embed, and QR code.
11. `Footer` – navigation, contact summary, social links, and back-to-top action.

The navigation anchors are `#top`, `#about`, `#services`, `#doctors`, `#reviews`, `#faq`, and `#contact`. Keep `navLinks`, section IDs, navbar behavior, and footer links aligned when adding or renaming sections.

## Content ownership

Treat `src/data/clinic.ts` as the single source of truth for content reused across the site. It contains:

- clinic identity, tagline, description, address, email, hours, rating, and public links;
- separate dermatology and nephrology phone and WhatsApp destinations;
- logo and Instagram QR asset metadata;
- both doctor profiles and credentials;
- grouped dermatology, nephrology, and general-medicine services;
- statistics, patient reviews, FAQs, and navigation links.

Reuse those exports instead of duplicating clinic facts inside components or metadata. When a public fact changes, update every related representation, including metadata/JSON-LD if it is not derived automatically. Preserve the distinction between the dermatology and nephrology phone numbers and schedules.

Medical claims, credentials, services, patient quotations, ratings, hours, and contact details are sensitive public-facing facts. Do not invent or broaden them. Confirm material factual changes from a source supplied or approved by the owner. Keep language informational and avoid promises of outcomes or unsupported superlatives.

The data file documents its current source basis as the clinic's Google Business Profile, Instagram accounts (`@renodermclinic` and `@drvyoma_dermatologist`), LinkedIn listings, the clinic service board, and Dr. Akash's practice poster. This comment describes provenance; it is not an automated sync. Ratings, review counts, relative dates such as “3 months ago,” and opening hours can become stale.

## Current clinic model

- Dr. Vyoma Mehta Dholakia: consultant dermatologist and cosmetologist; dermatology consultations Monday–Saturday, 3:30–8:00 PM.
- Dr. Akash Dholakia: consultant nephrologist and kidney transplant physician; nephrology consultations Monday–Saturday, 6:00–8:00 PM.
- Sundays are by appointment.
- The clinic is at 112, Anand Sapphire, opposite Vishwas City-7 and Anutham Apartment, Gota, Ahmedabad, Gujarat 382481.

Use the exact canonical values from `src/data/clinic.ts` in implementation rather than copying this summary.

## Component and rendering conventions

- Prefer Server Components. Add `"use client"` only where browser state, effects, event handlers, or Framer Motion require it.
- Keep the page composition thin. Put section implementation in `src/components/sections` and broadly reusable elements in `src/components/ui`.
- Import internal modules through the `@/*` alias, which maps to `src/*`.
- Use `next/image` for raster assets and retain meaningful dimensions and alt text. Decorative images/icons should remain hidden from assistive technology where appropriate.
- Use `next/font/google` through the root layout for site fonts. The current families are Plus Jakarta Sans for body text and Fraunces for display text.
- Use Lucide icons where an appropriate icon exists. The bespoke Instagram glyph lives in `InstagramIcon.tsx`.
- Keep external actions explicit and accessible. Where a link opens a new tab, preserve the existing `target="_blank"` and `rel="noreferrer"` pattern.
- Preserve semantic landmarks, heading order, keyboard operation, focus behavior, `aria-*` labels/states, and reduced-motion support.

Reusable primitives already cover common patterns:

- `Reveal`, `Stagger`, and `StaggerItem` for viewport entrance animation;
- `SpotlightCard` for pointer-following card highlights and lift;
- `MagneticButton` for animated links styled as buttons;
- `SectionHeading` for consistent section introductions;
- `Counter` for in-view statistics;
- `Logo`, `LogoMark`, and `LogoBadge` for brand rendering.

Extend these patterns before creating near-duplicates. Motion should enhance comprehension and polish without blocking content or ignoring `prefers-reduced-motion`.

## Visual system

The visual direction is warm, clinical, and premium rather than sterile. The main palette combines warm paper backgrounds, dark ink, renal teal, and a gold/apricot accent. Design tokens live in `src/app/globals.css` under `@theme` and expose semantic utilities such as `bg-paper`, `text-ink`, `text-teal-700`, `border-line`, `shadow-soft`, and `font-display`.

Use the existing tokens instead of introducing arbitrary repeated hex values. Reuse the established spacing (`py-24 sm:py-32` for major sections), rounded cards, fine borders, subtle shadows, restrained gradients, and ample whitespace. Maintain responsive behavior from small mobile screens upward and check long content for wrapping and overflow.

Global custom utilities include the grain overlay, dotted grid, gradient text, kicker pills, spotlight effect, animated underline, and marquee mask. Global reduced-motion rules shorten animations and disable smooth scrolling for users who request it.

Brand assets are under `public/brand`. Do not replace, recolor, crop, or regenerate them without explicit direction. If an asset changes, keep the dimensions in the `brand` object accurate.

## SEO and structured data

`src/app/layout.tsx` owns canonical metadata, title templates, search keywords, Open Graph/Twitter configuration, robots behavior, fonts, theme color, and the `MedicalClinic` JSON-LD. `src/app/opengraph-image.tsx` generates the social preview and reads local brand assets from `public`.

When changing the clinic name, domain, description, doctors, specialty, contact details, ratings, or hours, audit all of these together:

- visible content in `clinic.ts`;
- metadata and canonical URL;
- JSON-LD fields and opening-hours specification;
- Open Graph image and alt text;
- icon and brand assets if applicable.

Keep structured data truthful and consistent with visible page content. Do not add review, rating, medical, or local-business schema claims that the site does not support.

## Next.js-specific workflow

This project uses a Next.js release whose APIs may differ from prior versions. Before changing framework behavior, read the relevant checked-in package documentation under `node_modules/next/dist/docs/`. Common references for this repository are:

- `01-app/01-getting-started/02-project-structure.md`
- `01-app/01-getting-started/05-server-and-client-components.md`
- `01-app/01-getting-started/11-css.md`
- `01-app/01-getting-started/12-images.md`
- `01-app/01-getting-started/13-fonts.md`
- `01-app/01-getting-started/14-metadata-and-og-images.md`

Do not remove or edit the generated Next.js instruction block at the top of this file. `next dev` manages that block.

## Change checklist

Before finishing a change:

1. Check the working tree and preserve unrelated user changes.
2. Keep public facts centralized in `src/data/clinic.ts`.
3. Check mobile and desktop layouts for any affected section.
4. Check keyboard use, labels, focus, contrast, and reduced-motion behavior for interactive changes.
5. Check that phone, WhatsApp, map, email, Instagram, and anchor links still target the intended destination.
6. Run `npm run lint` and `npm run build` for code changes.
7. Report any validation that could not be completed.

Avoid adding infrastructure or abstractions that this static brochure site does not need. If a request introduces forms, storage, analytics, a CMS, appointment booking, or third-party scripts, document the new data flow, privacy implications, configuration, and failure behavior as part of the implementation.
