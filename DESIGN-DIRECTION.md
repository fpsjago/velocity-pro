# DESIGN DIRECTION — Velocity Pro

---

## Inspiration & References

| Site | What to Take |
|------|-------------|
| **Linear.app** | Clean layout, smooth animations, dark mode excellence, bento grids |
| **Notion.so** | Story-driven hero, illustration style, friendly tone |
| **Framer.com** | Interactive demos, bold typography, gradient usage |
| **Cal.com** | Open-source SaaS aesthetic, pricing page layout, changelog |
| **Vercel.com** | Minimal dark UI, code blocks, deployment status feel |
| **Raycast.com** | Keyboard-first feel, command palette aesthetic |

**Design DNA:** Linear's polish + Notion's friendliness + Framer's boldness.

---

## Color Palettes (3 Themes)

All colors defined as CSS custom properties on `:root` and `[data-theme="dark"]`.

### Theme 1: Indigo Night (Default)

```css
:root {
  --color-primary: #6366F1;
  --color-primary-hover: #4F46E5;
  --color-primary-light: #EEF2FF;
  --color-accent: #818CF8;
  --color-bg: #FAFBFF;
  --color-bg-muted: #F1F5F9;
  --color-surface: #FFFFFF;
  --color-surface-hover: #F8FAFC;
  --color-border: #E2E8F0;
  --color-text: #1A1A2E;
  --color-text-secondary: #64748B;
  --color-text-tertiary: #94A3B8;
  --color-gradient-start: #6366F1;
  --color-gradient-end: #A855F7;
}

[data-theme="dark"] {
  --color-bg: #0A0A1A;
  --color-bg-muted: #111128;
  --color-surface: #16163A;
  --color-surface-hover: #1E1E4A;
  --color-border: #2A2A5A;
  --color-text: #E8E8F0;
  --color-text-secondary: #A0A0C0;
  --color-text-tertiary: #6B6B8D;
}
```

### Theme 2: Ocean Teal

```css
:root {
  --color-primary: #14B8A6;
  --color-primary-hover: #0D9488;
  --color-primary-light: #F0FDFA;
  --color-accent: #2DD4BF;
  --color-bg: #F8FFFE;
  --color-bg-muted: #F0FDF9;
  --color-surface: #FFFFFF;
  --color-border: #D1FAE5;
  --color-text: #1A2E2E;
  --color-text-secondary: #4B7A74;
  --color-gradient-start: #14B8A6;
  --color-gradient-end: #06B6D4;
}
```

### Theme 3: Sunset Coral

```css
:root {
  --color-primary: #F97316;
  --color-primary-hover: #EA580C;
  --color-primary-light: #FFF7ED;
  --color-accent: #FB923C;
  --color-bg: #FFFBF5;
  --color-bg-muted: #FEF3E2;
  --color-surface: #FFFFFF;
  --color-border: #FED7AA;
  --color-text: #2E1A0A;
  --color-text-secondary: #9A6540;
  --color-gradient-start: #F97316;
  --color-gradient-end: #EF4444;
}
```

### Theme Switching Strategy

- CSS custom properties on `:root` — theme file swaps the values
- `data-theme="dark"` attribute on `<html>` for dark mode
- Theme color files: `src/styles/themes/{indigo,teal,coral}.css`
- Base file: `src/styles/global.css` references `var(--color-*)` only
- User picks theme via config, dark mode via toggle

---

## Typography

**Primary Font:** Inter (variable weight, self-hosted subset)
**Mono Font:** JetBrains Mono (code blocks only)

### Scale (Fluid via clamp)

```css
--font-display: clamp(2.5rem, 5vw, 4.5rem);    /* 40–72px */
--font-h1: clamp(2rem, 4vw, 3.5rem);            /* 32–56px */
--font-h2: clamp(1.75rem, 3vw, 2.5rem);         /* 28–40px */
--font-h3: clamp(1.25rem, 2vw, 1.75rem);        /* 20–28px */
--font-h4: clamp(1.1rem, 1.5vw, 1.35rem);       /* 17–22px */
--font-body: clamp(1rem, 1.2vw, 1.125rem);      /* 16–18px */
--font-small: clamp(0.8rem, 1vw, 0.875rem);     /* 13–14px */
--font-code: 0.9375rem;                          /* 15px fixed */

--leading-tight: 1.15;
--leading-normal: 1.6;
--leading-relaxed: 1.8;

--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

### Gradient Text (Display Headings)

```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Used on: Hero headlines, section titles, pricing card headers.

---

## Spacing System

8px base grid.

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 5rem;     /* 80px */
--space-16: 8rem;     /* 128px */

--section-padding: var(--space-16) 0;  /* 128px vertical sections */
--container-sm: 680px;
--container-md: 960px;
--container-lg: 1200px;
--container-xl: 1400px;
```

### Layout Rules

- **Max content width:** 1200px (1400px for full-bleed sections)
- **Section vertical padding:** 80-128px (fluid)
- **Card padding:** 24-32px
- **Card border-radius:** 12-16px
- **Button border-radius:** 8px
- **Grid gap:** 24-32px
- **Mobile padding:** 16-20px horizontal

---

## Animation Specification

### Entrance Animations (Intersection Observer)

```css
/* Base — applied to all animated elements */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: 100ms; }
.stagger > *:nth-child(3) { transition-delay: 200ms; }
/* ... up to 8 */
```

**Observer config:** `{ threshold: 0.15, rootMargin: '0px 0px -50px 0px' }`

### Hero Text Reveal

```css
@keyframes wordReveal {
  from { opacity: 0; transform: translateY(20px) rotateX(-10deg); }
  to { opacity: 1; transform: translateY(0) rotateX(0); }
}
/* Each word wrapped in <span>, delay = index * 60ms */
```

### Card Hover

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}
```

### Count-Up Numbers

React hook: `useCountUp(target, duration=2000)` — triggered by Intersection Observer. Easing: ease-out. Integers only (no decimals).

### Testimonial Carousel

CSS `@keyframes` infinite scroll. Duplicated items for seamless loop. `animation-play-state: paused` on hover.

### Page Transitions (Astro View Transitions)

```astro
<ViewTransitions />
<!-- Elements with transition:name get morphed between pages -->
<header transition:name="header" transition:animate="none" />
<main transition:animate="slide" />
```

### Theme Toggle

```css
* { transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease; }
```

### Logo Cloud Scroll

```css
@keyframes scrollLogos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
/* Duplicate logo set, animate container */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 40px rgba(0,0,0,0.1);
--shadow-xl: 0 24px 60px rgba(0,0,0,0.12);

/* Dark mode — lighter, colored shadows */
[data-theme="dark"] {
  --shadow-md: 0 4px 12px rgba(0,0,0,0.3);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.4);
}
```

---

## Responsive Breakpoints

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

Mobile-first. CSS Modules use `@media (min-width: ...)`.

---

## Iconography

**Library:** Lucide React (consistent stroke-width: 1.5-2)
**Size system:** 16px (inline), 20px (buttons), 24px (feature cards), 32px (hero features)
**Color:** Inherit from text or `var(--color-primary)` for accents

---

## Image Strategy

- All images via Astro `<Image>` / `getImage()` for WebP optimization
- Hero screenshots: max 1200px wide, WebP, quality 85
- Avatars: 64×64, 96×96, WebP
- Blog covers: 1200×630 (OG image compatible), WebP
- Logos: SVG preferred, PNG fallback
- Placeholder pattern: Gradient blur placeholder while loading
