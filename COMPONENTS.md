# COMPONENTS — Velocity Pro (48 Components)

## Naming Convention
All components: `src/components/{Category}/{ComponentName}.tsx` (React) or `.astro` (Astro).
Styles: `src/components/{Category}/{ComponentName}.module.css`

---

## 1. Navigation (4)

### 1.1 Navbar
- **Type:** Interactive (React island)
- **Dark mode:** Yes
- **Description:** Sticky top nav with logo, links, CTA button, dark mode toggle, mobile hamburger menu. Shrinks on scroll. Transparent → solid background transition.
- **Props:** `links[]`, `cta`, `logo`, `showThemeToggle`

### 1.2 MobileMenu
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Full-screen slide-in menu for mobile. Animated link stagger. Close on ESC/backdrop.

### 1.3 NavDropdown
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Mega-menu dropdown for "Features" or "Products" nav items. Grid layout with icons + descriptions.

### 1.4 Breadcrumbs
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Auto-generated breadcrumb trail for docs/blog pages.

---

## 2. Hero Sections (4)

### 2.1 HeroHome
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Story-driven hero. Staggered headline reveal, animated gradient orb background, email capture input, trust badges below. Split layout with product screenshot/mockup on right.
- **Features:** Word-by-word text animation, floating UI elements, subtle parallax

### 2.2 HeroSimple
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Centered text hero for inner pages (Features, Pricing, About). Gradient text headline, subtitle, optional CTA.

### 2.3 HeroSplit
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** 50/50 split-screen hero. Text left, image/illustration right. Used for case studies, about page.

### 2.4 HeroWithVideo
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Hero with embedded video modal. Play button triggers lightbox video player. Thumbnail with hover preview.

---

## 3. Feature Sections (5)

### 3.1 FeatureGrid
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** 3-column grid of feature cards with icons, titles, descriptions. Fade-up on scroll. Hover lift effect.
- **Props:** `features[]` with `icon`, `title`, `description`

### 3.2 FeatureShowcase
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Large feature spotlight. Tabbed interface — click tab to switch feature screenshot + description. Cross-fade animation between tabs.

### 3.3 FeatureComparison
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Split-screen before/after or us-vs-them comparison. Two columns with checkmarks/x-marks. Scrollable on mobile.

### 3.4 FeatureBento
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Bento grid layout (mixed sizes). 6 items in asymmetric grid. Each cell has icon + title + short description. Inspired by Apple/Linear bento grids.

### 3.5 FeatureList
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Alternating left-right feature rows. Image + text, then text + image. Large screenshots. Numbered or icon-labeled.

---

## 4. Social Proof (4)

### 4.1 TestimonialCarousel
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Auto-scrolling horizontal carousel. Avatar, quote, name, role, company. Pause on hover. Dots + arrow navigation. Smooth infinite scroll.

### 4.2 TestimonialGrid
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Masonry-style grid of testimonial cards. 3 columns desktop, 1 mobile. Star ratings optional.

### 4.3 LogoCloud
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** "Trusted by" logo bar. Grayscale logos, color on hover. Infinite horizontal scroll animation option. 6-12 logos.

### 4.4 StatsBar
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Horizontal row of 3-4 key metrics. Count-up animation on scroll-into-view. E.g., "10K+ users", "99.9% uptime", "150+ countries".

---

## 5. Pricing (3)

### 5.1 PricingCards
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** 3-column pricing cards. Monthly/annual toggle with price animation. "Most Popular" badge. Feature lists with checkmarks. CTA buttons. Highlighted recommended plan.

### 5.2 PricingComparison
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Full feature comparison table. Sticky header row. Checkmarks, x-marks, and text values. Collapsible categories on mobile.

### 5.3 PricingFAQ
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Accordion FAQ specifically for pricing questions. Animated expand/collapse. "Still have questions?" CTA at bottom.

---

## 6. Team (2)

### 6.1 TeamGrid
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Team member cards in grid. Photo, name, role, social links. Hover effect: slight scale + social links reveal. 4-column desktop, 2 mobile.

### 6.2 TeamFeatured
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Featured team member / founder spotlight. Large photo, bio paragraph, social links. Used on About page for leadership.

---

## 7. Blog (4)

### 7.1 BlogGrid
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Blog listing page. Featured post (large) + grid of recent posts. Category filter tabs. Card with image, title, excerpt, date, author, read time.

### 7.2 BlogPostStandard
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Standard blog post layout. Max-width prose, table of contents sidebar, author card, related posts at bottom. Code blocks with Shiki.

### 7.3 BlogPostWide
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Wide-format post for image-heavy content. Full-width images, wider prose. Gallery support.

### 7.4 BlogPostMinimal
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Clean minimal post. No sidebar, centered text, large typography. Medium-style reading experience.

---

## 8. Case Studies / Portfolio (3)

### 8.1 CaseStudyGrid
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Portfolio grid. Cards with company logo, screenshot, title, brief result metrics. Hover to reveal "Read more". Category filter.

### 8.2 CaseStudyDetail
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Individual case study page template. Hero with client logo + result metrics, challenge/solution/result sections, testimonial quote, screenshots gallery, CTA.

### 8.3 MetricsRow
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Row of 3-4 key result metrics for a case study. Large numbers with count-up, labels below. E.g., "+340% conversion", "2.5x ROI".

---

## 9. Forms & Auth (4)

### 9.1 ContactForm
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Contact form with name, email, subject, message. Client-side validation. Success/error states. Optional company + phone fields.

### 9.2 NewsletterSignup
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Inline email capture. Input + button. Used in hero, footer, CTA sections. Loading + success states.

### 9.3 LoginForm
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Login page form. Email + password, "Forgot password" link, social login buttons (Google, GitHub), "Sign up" link. Clean centered card layout.

### 9.4 SignupForm
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Registration form. Name, email, password, confirm. Password strength indicator. Terms checkbox. Social signup options. Split-screen layout with illustration.

---

## 10. Layout & Utility (6)

### 10.1 Section
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Wrapper component for page sections. Handles max-width, padding, background color variants (default, muted, primary, dark). Optional top/bottom divider shapes.

### 10.2 Container
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Max-width container. Sizes: `sm` (680px), `md` (960px), `lg` (1200px), `xl` (1400px).

### 10.3 ThemeToggle
- **Type:** Interactive (React)
- **Dark mode:** N/A (controls it)
- **Description:** Sun/moon icon button. Toggles `data-theme="dark"` on `<html>`. Respects `prefers-color-scheme`. Persists to localStorage.

### 10.4 BackToTop
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Floating button, appears after 300px scroll. Smooth scroll to top. Fade-in/out.

### 10.5 Badge
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Small label/tag. Variants: `default`, `primary`, `success`, `warning`. Used for "New", "Popular", "Beta" labels.

### 10.6 Divider
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Section divider. Variants: line, wave SVG, angle, gradient fade.

---

## 11. Interactive / Product (5)

### 11.1 ProductDemo
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Interactive tabbed product preview. Click features on left sidebar to show corresponding screenshot/animation on right. Mimics app UI.

### 11.2 CodeBlock
- **Type:** Static (Astro)
- **Dark mode:** Yes (auto via Shiki themes)
- **Description:** Syntax-highlighted code with copy button, language label, line numbers optional. Dual theme (light/dark Shiki).

### 11.3 VideoModal
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Lightbox video player. Click thumbnail → full-screen overlay with video. YouTube/Vimeo embed or self-hosted. Close on ESC/backdrop.

### 11.4 Accordion
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Expand/collapse panels. Animated height transition. Single or multi-open modes. Used in FAQ, pricing FAQ, docs sidebar.

### 11.5 Tabs
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Horizontal tab switcher. Animated underline indicator. Content cross-fade. Used in FeatureShowcase, ProductDemo, docs.

---

## 12. Footer (2)

### 12.1 FooterMain
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Full footer. 4-column link grid, logo + tagline, newsletter signup, social icons, copyright + legal links. Dark background variant.

### 12.2 FooterMinimal
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Simple footer. Single row: logo, key links, social icons, copyright. For auth pages and minimal layouts.

---

## 13. Changelog & Docs (2)

### 13.1 ChangelogTimeline
- **Type:** Static (Astro)
- **Dark mode:** Yes
- **Description:** Vertical timeline of releases. Version badge, date, title, description, change type tags (feature, fix, improvement). Driven by Content Collection.

### 13.2 DocsSidebar
- **Type:** Interactive (React)
- **Dark mode:** Yes
- **Description:** Collapsible sidebar navigation for docs pages. Active state, nested sections, search input at top. Sticky on desktop, drawer on mobile.

---

## Summary

| Metric | Count |
|--------|-------|
| Total components | 48 |
| Interactive (React) | 22 |
| Static (Astro) | 26 |
| Dark mode support | 48/48 (100%) |
| Categories | 13 |
