# Customization Guide

This guide covers how to customize Velocity Pro to match your brand.

## Color Themes

### Using Built-in Themes

Set the `data-color` attribute on `<html>` in `src/layouts/BaseLayout.astro`:

- `indigo` — Indigo Night (default, professional blue-purple)
- `teal` — Ocean Teal (fresh, modern green)
- `coral` — Sunset Coral (warm, energetic orange)

### Creating a Custom Theme

1. Open `src/styles/global.css`
2. Add a new `[data-color="your-theme"]` block:

```css
[data-color="rose"] {
  --primary: #E11D48;
  --primary-hover: #BE123C;
  --accent: #FB7185;
  --bg-alt: #FFF1F2;
  --surface-alt: #FFE4E6;
  --code-bg: #FFF1F2;
}

[data-color="rose"][data-theme="dark"] {
  --bg: #1A0A10;
  --bg-alt: #2A1018;
  --surface: #2A1018;
  --surface-alt: #3A1828;
}
```

3. Update `BaseLayout.astro`: `<html data-color="rose">`
4. Update ThemeToggle to include the new option

## Typography

Fonts are loaded from Google Fonts in `BaseLayout.astro`. To change:

1. Replace the Google Fonts `<link>` tags
2. Update `font-family` in `global.css`:

```css
body {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

3. For code blocks, update the monospace font:

```css
code {
  font-family: 'Your Mono Font', monospace;
}
```

## Adding Pages

1. Create a new `.astro` file in `src/pages/`
2. Import a layout:

```astro
---
import DefaultLayout from '../layouts/DefaultLayout.astro';
---
<DefaultLayout>
  <section class="section">
    <div class="container">
      <h1>Your New Page</h1>
    </div>
  </section>
</DefaultLayout>
```

3. Add navigation link in `src/data/navigation.ts`

## Modifying Components

All components use CSS Modules (`.module.css` files). To customize:

1. Find the component in `src/components/`
2. Edit its `.module.css` file
3. Components use CSS custom properties, so theme changes propagate automatically

### Example: Changing Card Border Radius

```css
/* In the component's .module.css */
.card {
  border-radius: 24px; /* was 12px */
}
```

## Content Collections

### Blog Post Layouts

Three layouts available in frontmatter:

- `standard` — Classic blog with TOC sidebar
- `wide` — Full-width for visual content
- `minimal` — Clean, distraction-free reading

### Adding Team Members

Edit `src/data/team.ts`:

```typescript
export const team = [
  {
    name: 'Jane Doe',
    role: 'CEO & Co-Founder',
    avatar: '/images/avatars/avatar-1.svg',
    bio: 'Building the future of SaaS.',
    social: {
      twitter: 'https://twitter.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
    },
  },
  // ... more members
];
```

### Modifying Pricing

Edit `src/data/pricing.ts` to change plans, prices, and features.

### Updating Navigation

Edit `src/data/navigation.ts` to add/remove/reorder nav items.

## Animations

### Disabling Animations

To disable all scroll animations, remove the Intersection Observer calls in components or add:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Changing Animation Speed

Update the CSS custom property:

```css
:root {
  --transition: 300ms ease; /* was 200ms */
}
```

### View Transitions

Page transitions use Astro's View Transitions API. To disable:

1. Remove `<ViewTransitions />` from `BaseLayout.astro`

To customize transition style, add `transition:animate` directives to elements.

## Performance Tips

- Keep React islands minimal (only for interactive components)
- Use Astro components for static content
- Optimize images with Astro's `<Image />` component
- Self-host fonts for better performance
- Minimize third-party scripts
