# BUILD PLAN — Velocity Pro

## Architecture Overview

```
velocity-pro/
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── fonts/ (Inter, JetBrains Mono subsets)
│   ├── images/ (sample screenshots, avatars, logos)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation/ (Navbar, MobileMenu, NavDropdown, Breadcrumbs)
│   │   ├── Hero/ (HeroHome, HeroSimple, HeroSplit, HeroWithVideo)
│   │   ├── Features/ (FeatureGrid, FeatureShowcase, FeatureBento, FeatureComparison, FeatureList)
│   │   ├── SocialProof/ (TestimonialCarousel, TestimonialGrid, LogoCloud, StatsBar)
│   │   ├── Pricing/ (PricingCards, PricingComparison, PricingFAQ)
│   │   ├── Team/ (TeamGrid, TeamFeatured)
│   │   ├── Blog/ (BlogGrid, BlogPostStandard, BlogPostWide, BlogPostMinimal)
│   │   ├── CaseStudy/ (CaseStudyGrid, CaseStudyDetail, MetricsRow)
│   │   ├── Forms/ (ContactForm, NewsletterSignup, LoginForm, SignupForm)
│   │   ├── Interactive/ (ProductDemo, CodeBlock, VideoModal, Accordion, Tabs)
│   │   ├── Layout/ (Section, Container, ThemeToggle, BackToTop, Badge, Divider)
│   │   ├── Footer/ (FooterMain, FooterMinimal)
│   │   └── Docs/ (ChangelogTimeline, DocsSidebar)
│   ├── layouts/
│   │   ├── BaseLayout.astro (head, view transitions, theme)
│   │   ├── DefaultLayout.astro (navbar + footer)
│   │   ├── DocsLayout.astro (navbar + sidebar + footer minimal)
│   │   ├── AuthLayout.astro (minimal navbar + minimal footer)
│   │   └── BlogPostLayout.astro (selects standard/wide/minimal)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── changelog.astro
│   │   ├── login.astro
│   │   ├── signup.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── docs/
│   │       └── [...slug].astro
│   ├── content/
│   │   ├── config.ts (Content Collections schema)
│   │   ├── blog/ (6 sample .mdx posts)
│   │   ├── case-studies/ (3 sample .mdx)
│   │   ├── changelog/ (5 sample .mdx)
│   │   └── docs/ (5 sample .mdx)
│   ├── styles/
│   │   ├── global.css (reset, base, custom properties, animations)
│   │   ├── themes/
│   │   │   ├── indigo.css
│   │   │   ├── teal.css
│   │   │   └── coral.css
│   │   └── prose.css (blog/docs typography)
│   ├── hooks/ (React hooks)
│   │   ├── useCountUp.ts
│   │   ├── useInView.ts
│   │   ├── useTheme.ts
│   │   └── useMediaQuery.ts
│   ├── data/ (static data files)
│   │   ├── navigation.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   └── stats.ts
│   └── utils/
│       ├── cn.ts (classname helper)
│       └── formatDate.ts
```

---

## Agent Work Breakdown (5 Parallel Agents)

### Agent 1: Foundation + Layout + Navigation
**Scope:** Project scaffolding, global styles, themes, layout components, navigation

**Tasks:**
1. Initialize Astro 5 project with React 19 + TypeScript
2. Set up `astro.config.mjs` (React integration, image, view transitions)
3. Create `global.css` — reset, custom properties, animation utilities
4. Create 3 theme CSS files (indigo, teal, coral)
5. Self-host Inter + JetBrains Mono font subsets
6. Build `BaseLayout.astro` (head, view transitions, theme init script)
7. Build `DefaultLayout.astro`, `DocsLayout.astro`, `AuthLayout.astro`, `BlogPostLayout.astro`
8. Build: Section, Container, Badge, Divider, BackToTop, ThemeToggle
9. Build: Navbar, MobileMenu, NavDropdown, Breadcrumbs
10. Build: FooterMain, FooterMinimal
11. Create `navigation.ts` data file
12. Set up GitHub Pages deployment config

**Dependencies:** None (start immediately)
**Estimated time:** 90-120 min
**Deliverables:** Working site skeleton with nav, footer, theme toggle, all layouts

---

### Agent 2: Hero + Features + Interactive Components
**Scope:** All hero variants, feature sections, interactive product components

**Tasks:**
1. Build React hooks: `useInView`, `useCountUp`, `useMediaQuery`
2. Build: HeroHome (with word-reveal animation, gradient orb, email capture)
3. Build: HeroSimple, HeroSplit, HeroWithVideo
4. Build: FeatureGrid, FeatureBento, FeatureList
5. Build: FeatureShowcase (tabbed interactive)
6. Build: FeatureComparison (split-screen)
7. Build: ProductDemo (interactive tabbed preview)
8. Build: Tabs, Accordion (reusable primitives)
9. Build: VideoModal, CodeBlock
10. Create `features.ts` data file
11. Build pages: `/` (Home), `/features`

**Dependencies:** Agent 1 layouts (can start components in parallel, integrate later)
**Estimated time:** 120-150 min
**Deliverables:** Home page, Features page, all hero/feature/interactive components

---

### Agent 3: Social Proof + Pricing + Team + Forms
**Scope:** Testimonials, pricing, team, all form components

**Tasks:**
1. Build: TestimonialCarousel (infinite scroll, auto-play, pause on hover)
2. Build: TestimonialGrid (masonry layout)
3. Build: LogoCloud (grayscale, color hover, scroll animation)
4. Build: StatsBar (count-up on scroll)
5. Build: PricingCards (monthly/annual toggle, animation)
6. Build: PricingComparison (feature table)
7. Build: PricingFAQ (accordion)
8. Build: TeamGrid, TeamFeatured
9. Build: ContactForm, NewsletterSignup, LoginForm, SignupForm
10. Create data files: `testimonials.ts`, `pricing.ts`, `team.ts`, `faq.ts`, `stats.ts`
11. Build pages: `/pricing`, `/about`, `/contact`, `/faq`, `/login`, `/signup`

**Dependencies:** Agent 1 layouts, Agent 2 Accordion/Tabs primitives
**Estimated time:** 120-150 min
**Deliverables:** 6 pages, all social proof/pricing/team/form components

---

### Agent 4: Blog + Case Studies + Changelog
**Scope:** Content collections, blog system, case studies, changelog

**Tasks:**
1. Set up Astro Content Collections (`config.ts` with schemas)
2. Build: BlogGrid (listing with featured post, category filter)
3. Build: BlogPostStandard (prose + TOC sidebar)
4. Build: BlogPostWide, BlogPostMinimal
5. Build: `prose.css` (typography for long-form content)
6. Write 6 sample blog posts (.mdx) with realistic content
7. Build: CaseStudyGrid (cards with filter)
8. Build: CaseStudyDetail (full template)
9. Build: MetricsRow (count-up results)
10. Write 3 sample case studies (.mdx)
11. Build: ChangelogTimeline
12. Write 5 sample changelog entries (.mdx)
13. Build pages: `/blog`, `/blog/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/changelog`

**Dependencies:** Agent 1 layouts, Agent 2 hooks (useInView, useCountUp)
**Estimated time:** 120-150 min
**Deliverables:** Blog system (3 layouts), case studies, changelog, all sample content

---

### Agent 5: Docs + Polish + QA + Assets
**Scope:** Docs system, sample images/assets, final integration, testing

**Tasks:**
1. Build: DocsSidebar (collapsible, search, mobile drawer)
2. Write 5 sample doc pages (.mdx) with code blocks
3. Build pages: `/docs/[slug]`
4. Generate/source placeholder images:
   - Product screenshots (placeholder SVGs or generated)
   - Team avatars (placeholder)
   - Company logos (placeholder SVGs)
   - Blog cover images (gradient placeholders)
5. Create `favicon.svg`
6. Add Open Graph meta tags to BaseLayout
7. Add sitemap + robots.txt config
8. Run Lighthouse audit, fix issues to hit 90+
9. Test all pages in light + dark mode
10. Test responsive: 375px, 768px, 1024px, 1440px
11. Test View Transitions between all page pairs
12. Write customer-facing `README.md` (setup, customization, deployment)
13. Final build test: `astro build` clean with zero errors

**Dependencies:** All other agents complete (starts docs immediately, QA after integration)
**Estimated time:** 90-120 min
**Deliverables:** Docs system, all assets, README, passing Lighthouse, clean build

---

## Dependency Graph

```
Agent 1 (Foundation) ─────────────────────────────────►
    │                                                   
    ├── Agent 2 (Hero/Features) ──────────────────────►
    │       │                                           
    ├── Agent 3 (Pricing/Team/Forms) ─────────────────►
    │       │  (needs Accordion from Agent 2)           
    ├── Agent 4 (Blog/Cases/Changelog) ───────────────►
    │       │  (needs hooks from Agent 2)               
    └── Agent 5 (Docs + Polish) ──────────────────────►
            (QA phase waits for all agents)             
```

**Critical path:** Agent 1 → Agent 2 (hooks/primitives) → Agents 3,4 → Agent 5 (QA)

**Mitigation:** Agent 1 delivers layouts within 30 min; Agents 2-4 start components immediately (mock layouts), integrate once Agent 1 delivers.

---

## Testing Checkpoints

| Checkpoint | When | Criteria |
|-----------|------|----------|
| **CP1: Skeleton** | Agent 1 done | Site runs, nav works, theme toggle works, all layouts render |
| **CP2: Home Complete** | Agent 2 done | Home page fully functional with all sections |
| **CP3: All Pages** | Agents 2-4 done | All 12 pages render, all components work |
| **CP4: Content** | Agent 4 done | Blog posts, case studies, changelog render from MDX |
| **CP5: Final QA** | Agent 5 done | Lighthouse 90+, responsive, dark mode, view transitions, clean build |

---

## Estimated Timeline

| Phase | Time | Milestone |
|-------|------|-----------|
| 0-30 min | Agent 1 delivers foundation | Skeleton live |
| 30-90 min | Agents 2-4 build in parallel | Components + pages |
| 90-120 min | Agent 5 QA + polish | Integration |
| 120-150 min | Final fixes + build | Ship ready |

**Total: ~2.5 hours** with 5 parallel agents.

---

## Package Checklist (Pre-Gumroad)

- [ ] `astro build` succeeds with zero warnings
- [ ] All 12 pages render correctly
- [ ] Dark mode works on every page
- [ ] 3 theme variants work (swap CSS import)
- [ ] Lighthouse 90+ on Home, Features, Pricing, Blog
- [ ] Responsive: mobile (375px) through desktop (1440px+)
- [ ] View Transitions smooth between pages
- [ ] All sample content is professional/realistic
- [ ] README covers: install, customize, deploy, theme switching
- [ ] No Tailwind, no external CSS frameworks
- [ ] No AI artifacts in source (no TASK/REPORT/SUMMARY files)
- [ ] Clean git history
- [ ] LICENSE file included (MIT or commercial)
