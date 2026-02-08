# PROJECT SPEC — Velocity Pro

**Template Name:** Velocity Pro
**Tagline:** "Ship faster. Convert better. The SaaS template that sells."
**Version:** 1.0.0
**Price Point:** $149
**Quality Target:** 9/10

---

## Target Audience

- SaaS founders launching MVPs or v2 marketing sites
- Dev agencies building client sites quickly
- Indie hackers who want premium without hiring a designer
- B2B/B2C SaaS products (CRM, analytics, devtools, productivity, AI tools)

## Use Cases

- Product marketing site with pricing/features
- Startup launch page with waitlist
- Open-source project site with docs
- Agency portfolio with case studies
- Developer tool marketing (API docs, changelog)

---

## Tech Stack (Fixed)

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 (SSG/SSR) |
| UI Components | React 19 (islands) |
| Language | TypeScript (strict) |
| Styling | CSS Modules only (zero Tailwind) |
| Transitions | Astro View Transitions API |
| Images | Astro Image (`getImage()`, WebP) |
| Deployment | GitHub Pages (static) |
| Icons | Lucide React |
| Animations | CSS @keyframes + Intersection Observer |
| Code Highlighting | Shiki (built into Astro) |
| Content | Astro Content Collections (MDX for blog) |

---

## Page Structure (12 Pages)

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 1 | Home | `/` | Hero + key sections, conversion funnel |
| 2 | Features | `/features` | Detailed feature breakdown |
| 3 | Pricing | `/pricing` | Plans + FAQ + comparison |
| 4 | About / Team | `/about` | Story, team, values |
| 5 | Case Studies | `/case-studies` | Portfolio + customer stories |
| 6 | Blog | `/blog` | Blog listing + 3 post templates |
| 7 | Blog Post | `/blog/[slug]` | Individual post (3 layouts) |
| 8 | Contact | `/contact` | Form + map + support info |
| 9 | FAQ | `/faq` | Searchable accordion |
| 10 | Changelog | `/changelog` | Version history timeline |
| 11 | Docs | `/docs` | Documentation with sidebar |
| 12 | Login / Signup | `/login`, `/signup` | Auth pages (2 variants) |

---

## Component Count: 48 Components

See **COMPONENTS.md** for full breakdown.

### By Category

| Category | Count |
|----------|-------|
| Navigation | 4 |
| Hero | 4 |
| Features | 5 |
| Social Proof | 4 |
| Pricing | 3 |
| Team | 2 |
| Blog | 4 |
| Case Studies | 3 |
| Forms & Auth | 4 |
| Layout / Utility | 6 |
| Interactive | 5 |
| Footer | 2 |
| Changelog/Docs | 2 |

---

## Design Direction

**Style:** Clean, modern, bold — inspired by Linear × Notion × Framer
**Mood:** Professional yet approachable. Confident. Fast.

### Color Schemes (3 Themes)

**1. Indigo Night (Default)**
- Primary: `#6366F1` (Indigo 500)
- Accent: `#818CF8` (Indigo 400)
- BG Light: `#FAFBFF`
- BG Dark: `#0A0A1A`
- Surface Dark: `#12122A`
- Text: `#1A1A2E` / `#E8E8F0`

**2. Ocean Teal**
- Primary: `#14B8A6` (Teal 500)
- Accent: `#2DD4BF` (Teal 400)
- BG Light: `#F0FDFA`
- BG Dark: `#0A1A1A`
- Surface Dark: `#0D2626`
- Text: `#1A2E2E` / `#E0F5F0`

**3. Sunset Coral**
- Primary: `#F97316` (Orange 500)
- Accent: `#FB923C` (Orange 400)
- BG Light: `#FFFBF5`
- BG Dark: `#1A0F0A`
- Surface Dark: `#2A1A10`
- Text: `#2E1A0A` / `#F5E8D8`

All themes ship with full **dark mode** support via CSS custom properties + `data-theme` attribute.

### Typography System

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display | Inter | 800 | 56–72px |
| Heading | Inter | 700 | 32–48px |
| Subheading | Inter | 600 | 20–24px |
| Body | Inter | 400 | 16–18px |
| Caption | Inter | 400 | 13–14px |
| Code | JetBrains Mono | 400 | 14–15px |

Fluid typography via `clamp()`. Display headings use gradient text on key pages.

### Animation Strategy

- **Entrance:** Fade-up on scroll (Intersection Observer, `threshold: 0.15`)
- **Hero:** Staggered text reveal (word-by-word, 50ms delay)
- **Cards:** Subtle scale + shadow on hover (150ms ease-out)
- **Page transitions:** Astro View Transitions (slide/morph)
- **Testimonials:** Auto-scroll carousel, pause on hover
- **Numbers:** Count-up animation on scroll-into-view
- **Theme toggle:** Smooth CSS transition on all color props (200ms)
- **Interactive demo:** Tab switching with cross-fade
- **No heavy libraries** — all CSS @keyframes + minimal JS

### Performance Targets

- Lighthouse: 90+ (all categories)
- First Contentful Paint: < 1.2s
- Total Blocking Time: < 150ms
- CLS: < 0.05
- Bundle: < 50KB JS (React islands only)

---

## Key Differentiators vs $49–79 Templates

1. **48 components** (vs typical 15-25)
2. **12 pages** (vs typical 5-7)
3. **3 color themes** with CSS custom properties
4. **Dark mode toggle** baked in
5. **Blog with 3 post layouts** (standard, wide, minimal)
6. **Interactive product demo** section
7. **Docs page** with sidebar navigation
8. **Changelog** timeline page
9. **Case studies** with metrics
10. **Micro-animations** throughout (not static)
11. **View Transitions** between pages
12. **Content Collections** for blog/changelog (MDX)
