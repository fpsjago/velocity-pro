# PAGES — Velocity Pro (12 Pages)

---

## 1. Home (`/`)

The primary conversion page. Story-driven, visual, fast.

### Sections (top to bottom)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | Sticky, transparent → solid on scroll |
| 2 | HeroHome | Headline: "Ship your SaaS 10x faster" / Email capture / Product screenshot right / Trust badges |
| 3 | LogoCloud | "Trusted by 500+ companies" — 8 grayscale logos |
| 4 | FeatureBento | 6 key features in bento grid |
| 5 | FeatureShowcase | Tabbed interactive demo — 4 features with screenshots |
| 6 | StatsBar | 4 metrics: users, uptime, countries, NPS |
| 7 | TestimonialCarousel | 6+ testimonials, auto-scroll |
| 8 | PricingCards | 3 plans, monthly/annual toggle |
| 9 | Section + NewsletterSignup | "Ready to get started?" CTA |
| 10 | FooterMain | Full footer |

**Content requirements:** 1 hero headline + subtitle, 6 feature titles + descriptions + icons, 4 stats, 6 testimonials (avatar, quote, name, role, company), 3 pricing plans with feature lists, CTA copy.

---

## 2. Features (`/features`)

Deep dive into product capabilities.

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Everything you need to scale" |
| 3 | FeatureGrid | 9 features, 3×3 grid |
| 4 | FeatureList | 3 alternating rows, large screenshots |
| 5 | FeatureComparison | Us vs. competitors split-screen |
| 6 | ProductDemo | Interactive tabbed preview, 5 tabs |
| 7 | TestimonialGrid | 4 testimonials (masonry) |
| 8 | Section + CTA | "Start your free trial" |
| 9 | FooterMain | |

**Content requirements:** 9 feature cards, 3 detailed features with screenshots, comparison data (5-8 rows), 5 product demo tabs with screenshots, 4 testimonials.

---

## 3. Pricing (`/pricing`)

Conversion-focused pricing page.

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Simple, transparent pricing" |
| 3 | PricingCards | 3 plans, monthly/annual toggle |
| 4 | PricingComparison | Full feature comparison table |
| 5 | PricingFAQ | 8-10 pricing FAQs |
| 6 | TestimonialCarousel | Social proof below pricing |
| 7 | Section + CTA | "Start free, upgrade anytime" |
| 8 | FooterMain | |

**Content requirements:** 3 plan names + prices + feature lists (8-12 features each), comparison table (15-20 features × 3 plans), 8-10 FAQ items.

---

## 4. About / Team (`/about`)

Company story and team.

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSplit | Company photo + "Our Story" |
| 3 | Section | Mission/vision text (2-3 paragraphs) |
| 4 | StatsBar | Company metrics: team size, customers, funding, years |
| 5 | TeamFeatured | CEO/founder spotlight |
| 6 | TeamGrid | 8 team members |
| 7 | Section | "Our Values" — 4 value cards |
| 8 | LogoCloud | Investor / partner logos |
| 9 | Section + CTA | "Join our team" / "Get in touch" |
| 10 | FooterMain | |

**Content requirements:** Company story (3 paragraphs), 4 stats, founder bio + photo, 8 team members (photo, name, role, social), 4 company values with descriptions.

---

## 5. Case Studies (`/case-studies`)

Portfolio of customer success stories.

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Customer Success Stories" |
| 3 | CaseStudyGrid | 6 case study cards with filters |
| 4 | StatsBar | Aggregate metrics across all customers |
| 5 | TestimonialCarousel | Customer quotes |
| 6 | Section + CTA | "Become our next success story" |
| 7 | FooterMain | |

### Case Study Detail (`/case-studies/[slug]`)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | CaseStudyDetail | Full case study template |
| 3 | MetricsRow | Key results (3-4 numbers) |
| 4 | Section + CTA | "Get similar results" |
| 5 | FooterMain | |

**Content requirements:** 6 case studies (logo, title, excerpt, category, screenshot), 3 full case studies with challenge/solution/result, metrics per study.

---

## 6. Blog (`/blog`)

Content hub with filtering.

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Blog — Insights & Updates" |
| 3 | BlogGrid | Featured post + grid, category tabs |
| 4 | NewsletterSignup | Inline subscription |
| 5 | FooterMain | |

**Content requirements:** 6+ sample blog posts (title, excerpt, cover image, author, date, category, read time). Categories: Product, Engineering, Company, Tutorial.

---

## 7. Blog Post (`/blog/[slug]`)

Three layout variants driven by frontmatter `layout` field.

### 7a. Standard Layout (BlogPostStandard)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | Section | Post header: title, date, author, read time, cover image |
| 3 | BlogPostStandard | Prose + TOC sidebar |
| 4 | Section | Author card + related posts |
| 5 | NewsletterSignup | |
| 6 | FooterMain | |

### 7b. Wide Layout (BlogPostWide)
Full-width images, wider content area. For visual/gallery posts.

### 7c. Minimal Layout (BlogPostMinimal)
No sidebar, centered text, large type. For essays/thought pieces.

**Content requirements per post:** Title, cover image, author (name + avatar), date, category, read time, 800-1500 word sample content, 2-3 related post references.

---

## 8. Contact (`/contact`)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Get in Touch" |
| 3 | Section (split) | ContactForm left + contact info right (email, phone, address, social) |
| 4 | Section | Optional embedded map placeholder |
| 5 | FooterMain | |

**Content requirements:** Contact info (email, phone, address), social links, form fields, office hours.

---

## 9. FAQ (`/faq`)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "Frequently Asked Questions" |
| 3 | Accordion | 15-20 FAQs grouped by category (General, Billing, Technical, Support) |
| 4 | Section + CTA | "Still have questions? Contact us" |
| 5 | FooterMain | |

**Content requirements:** 15-20 FAQ items with category tags.

---

## 10. Changelog (`/changelog`)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | HeroSimple | "What's New" |
| 3 | ChangelogTimeline | Timeline of releases, driven by Content Collection |
| 4 | NewsletterSignup | "Subscribe to updates" |
| 5 | FooterMain | |

**Content requirements:** 5-8 sample changelog entries (version, date, title, description, type tags: feature/fix/improvement).

---

## 11. Docs (`/docs`)

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar | |
| 2 | DocsSidebar + Content area | Sidebar left, MDX content right |
| 3 | Breadcrumbs | Auto-generated |
| 4 | FooterMinimal | |

### Docs sub-pages: `/docs/[...slug]`
- Getting Started
- Installation
- Configuration
- API Reference
- Deployment

**Content requirements:** 5 sample doc pages with headings, code blocks, callouts. Sidebar navigation structure (nested sections).

---

## 12. Login & Signup (`/login`, `/signup`)

### Login

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar (minimal) | Logo + "Sign up" link only |
| 2 | LoginForm | Centered card, social login options |
| 3 | FooterMinimal | |

### Signup

| # | Component | Content Notes |
|---|-----------|---------------|
| 1 | Navbar (minimal) | Logo + "Log in" link only |
| 2 | SignupForm | Split-screen: form left, illustration/social proof right |
| 3 | FooterMinimal | |

**Content requirements:** Form copy, social login button labels, terms of service link text.

---

## Page Count Summary

| Page | Route(s) | Layout |
|------|----------|--------|
| Home | `/` | Default |
| Features | `/features` | Default |
| Pricing | `/pricing` | Default |
| About | `/about` | Default |
| Case Studies | `/case-studies` | Default |
| Case Study Detail | `/case-studies/[slug]` | Default |
| Blog | `/blog` | Default |
| Blog Post (×3 layouts) | `/blog/[slug]` | Standard / Wide / Minimal |
| Contact | `/contact` | Default |
| FAQ | `/faq` | Default |
| Changelog | `/changelog` | Default |
| Docs | `/docs/[...slug]` | Docs |
| Login | `/login` | Auth |
| Signup | `/signup` | Auth |

**Total: 12 unique pages + 3 blog post variants + dynamic routes**
