# System4 SJV — Comprehensive Modification Plan

> **Created:** July 10, 2026
> **Status:** Active — requires prioritized implementation

---

## 🔴 Critical: Site Not Yet Live

The Astro rebuild is pushed to GitHub (`system4-astro` repo) but **system4sjv.com still serves the old WordPress site**. Netlify needs to be connected to deploy the Astro build. This is the #1 blocker.

**Action required:** Connect Netlify to the GitHub repo or configure DNS to point to Netlify.

---

## Phase 1: Deployment (P0 — Today)

### 1.1 Netlify Deployment
- [ ] Create Netlify site linked to `carloscbrls/system4-astro` GitHub repo
- [ ] Set build command: `npx astro build`
- [ ] Set publish directory: `dist`
- [ ] Configure `system4sjv.com` DNS to point to Netlify
- [ ] SSL certificate provisioning
- [ ] Verify all 24 pages render correctly on production

### 1.2 DNS Cutover
- [ ] Update Cloudflare/A-record for `system4sjv.com` → Netlify
- [ ] Set up Netlify subdomain `www.system4sjv.com` → redirect to `system4sjv.com`
- [ ] Verify sitemap-index.xml is accessible
- [ ] Test all internal links resolve correctly

---

## Phase 2: Visual Luxury & Desktop Presence (P0 — This Week)

### 2.1 Hero Section — Desktop Impact
- [x] Deeper navy gradient (`#0f1e33` → `#162d4a`)
- [x] Gold accent color (`#c9a84c`) for labels, step numbers, italic text
- [x] Text shadows on hero headings
- [x] Triple radial gradient overlay for depth
- [x] Glassmorphism badges with gold gradient borders
- [x] Cross-pattern SVG overlay for texture
- [ ] **ADD:** Hero background video or high-quality image overlay with parallax
- [ ] **ADD:** Animated stat counters (count-up on scroll)
- [ ] **ADD:** Trust badges row (GSA, Licensed/Bonded/Insured, 20+ Years) below hero
- [ ] **ADD:** Floating testimonial carousel in hero or just below

### 2.2 Homepage Content Depth
- [ ] **ADD:** Testimonials/Reviews section (between Why System4 and Industries)
  - 3-5 client testimonials with names, companies, star ratings
  - Carousel or card layout
- [ ] **ADD:** Before/After gallery (or at minimum, photo grid of clean facilities)
- [ ] **ADD:** GSA contract badge more prominently (badge + shield icon)
- [ ] **ADD:** "Trusted by" logos section (client logos or industry badges)
- [ ] **ADD:** Interactive service area map (San Joaquin Valley)

### 2.3 Service Pages — Premium Feel
- [ ] Add hero images to each service page (currently text-only heroes)
- [ ] Add pricing indicators or "Starting at" guidance
- [ ] Add process/timeline section (What to Expect in 3 steps)
- [ ] Add FAQ schema (FAQPage) on each service page
- [ ] Cross-link related services ("Related Services" section at bottom)

### 2.4 Industry Pages — Richer Content
- [ ] Add industry-specific hero images (exist in `/images/`)
- [ ] Add pain points section (3-4 industry-specific problems)
- [ ] Add case study or "typical client" sidebar
- [ ] Add CTA section specific to each industry

### 2.5 Typography & Spacing Polish
- [x] Section padding increased to 6rem
- [x] Card shadows upgraded (shadow-card + shadow-xl on hover)
- [x] Gold accent for section labels
- [x] Larger hero typography
- [ ] **ADD:** Responsive type scale with `clamp()` refinements
- [ ] **ADD:** Letter-spacing adjustments for headings (-.02em tighter)
- [ ] **ADD:** Opt-in smooth scroll-reveal animations (IntersectionObserver)

---

## Phase 3: SEO & Content (P1 — This Week)

### 3.1 City Landing Pages (5 pages)
- [ ] `/locations/stockton/` — Stockton commercial cleaning
- [ ] `/locations/modesto/` — Modesto commercial cleaning
- [ ] `/locations/tracy/` — Tracy commercial cleaning
- [ ] `/locations/manteca/` — Manteca commercial cleaning
- [ ] `/locations/lodi/` — Lodi commercial cleaning
- Each with: Local schema (LocalBusiness + areaServed), city-specific content, NAP consistency

### 3.2 Blog Content Expansion
- [ ] 3 more blog posts (target long-tail keywords)
  - "How Much Does Commercial Cleaning Cost in Stockton, CA?"
  - "Medical Office Cleaning Requirements: OSHA & CDC Guidelines"
  - "Day Porter vs. Night Cleaning: Which Schedule Is Right for Your Facility?"
- [ ] Add author bios (Jason Castillo, Territory Manager)
- [ ] Add reading time estimates
- [ ] Add social sharing buttons

### 3.3 Schema Enhancements
- [ ] Add `AggregateRating` schema to homepage
- [ ] Add `Review` schema when testimonials are added
- [ ] Add `FAQPage` schema to service pages
- [ ] Add `BreadcrumbList` to all pages (already on service pages)
- [ ] Add `Organization` schema with sameAs for social profiles
- [ ] Add `Service` schema with areaServed on every service page

### 3.4 Technical SEO
- [x] robots.txt with sitemap reference
- [x] sitemap-index.xml auto-generated
- [x] Canonical URLs on all pages
- [x] Meta descriptions on all pages
- [ ] Add Open Graph images (og:image) for social sharing
- [ ] Add structured data testing (Google Rich Results)
- [ ] Add hreflang tags if multi-language is needed
- [ ] Minify CSS/JS in production build

---

## Phase 4: Conversion & Trust (P1 — Next Week)

### 4.1 Contact Page Improvements
- [ ] Add Google Maps embed showing service area
- [ ] Add business hours
- [ ] Add form validation with inline error messages
- [ ] Add "Average response time: 2 hours" trust signal
- [ ] Add alternative contact methods (text, WhatsApp)

### 4.2 Social Proof
- [ ] Add Google Reviews widget or embedded reviews
- [ ] Add Yelp badge link
- [ ] Add BBB rating (if applicable)
- [ ] Add GSA contract verification link
- [ ] Add client count badge ("67+ locations nationwide")

### 4.3 Lead Capture Optimization
- [ ] Add exit-intent popup on homepage (optional, non-intrusive)
- [ ] Add phone click tracking (call tracking number)
- [ ] Add form analytics (which fields cause abandonment)
- [ ] Add "Request a callback" option alongside form
- [ ] Add chat widget (optional, Tidio/Intercom)

---

## Phase 5: Performance & Polish (P2 — Next 2 Weeks)

### 5.1 Image Optimization
- [ ] Convert hero/industry images to WebP with AVIF fallback
- [ ] Add lazy loading to all below-fold images
- [ ] Add width/height attributes to prevent CLS
- [ ] Compress all images (target: <100KB per image)
- [ ] Add blur-up placeholder for hero images

### 5.2 Accessibility (WCAG 2.1 AA)
- [x] Skip-to-content link
- [x] Semantic HTML landmarks
- [x] ARIA labels on interactive elements
- [x] Color contrast ratios (navy/white = 14.7:1 ✓)
- [ ] Add focus ring styles for keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Add alt text audit for all images
- [ ] Form error handling with ARIA live regions

### 5.3 Performance
- [ ] Target: Lighthouse score 95+ on all metrics
- [ ] Preload critical fonts (Inter, DM Serif Display)
- [ ] Inline critical CSS
- [ ] Defer non-critical JavaScript
- [ ] Add service worker for offline support (optional)

---

## Phase 6: Marketing Integration (P2 — Ongoing)

### 6.1 Google Business Profile
- [ ] Claim/verify Google Business Profile
- [ ] Add all service categories
- [ ] Add photos (office, team, before/after)
- [ ] Enable Google Messaging
- [ ] Add weekly Google Posts

### 6.2 Analytics & Tracking
- [ ] Add Google Analytics 4
- [ ] Add Google Tag Manager
- [ ] Set up conversion tracking (form submissions, phone calls)
- [ ] Add call tracking number
- [ ] Set up monthly reporting dashboard

### 6.3 Content Marketing
- [ ] Set up blog editorial calendar (2 posts/month)
- [ ] Create email newsletter signup
- [ ] Add RSS feed for blog
- [ ] Cross-post blog content to LinkedIn
- [ ] Create downloadable resources (cleaning checklists, guides)

---

## Quick Wins (Can Do Today)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1 | Deploy Astro site to Netlify (replace WordPress) | 🔴 Critical | 30 min |
| 2 | Add og:image tags for social sharing | High | 15 min |
| 3 | Add testimonials section to homepage | High | 1 hour |
| 4 | Add hero images to service/industry pages | Medium | 30 min |
| 5 | Create first city landing page (Stockton) | Medium | 45 min |
| 6 | Add animated stat counters | Medium | 30 min |
| 7 | Add "Trusted by" section | Medium | 30 min |

---

## File Structure Reference

```
system4-astro/
├── public/
│   ├── images/          # Hero, industry, CTA images
│   ├── robots.txt       # ✅ Created
│   └── favicon-*.png    # ✅ Created
├── src/
│   ├── layouts/
│   │   └── Layout.astro # ✅ Premium design system
│   └── pages/
│       ├── index.astro              # ✅ Homepage (834 lines)
│       ├── about.astro              # ✅
│       ├── accessibility.astro      # ✅
│       ├── contact.astro            # ✅ (needs map)
│       ├── services.astro           # ✅
│       ├── industries.astro         # ✅
│       ├── commercial-cleaning.astro        # ✅
│       ├── medical-office-cleaning.astro    # ✅
│       ├── janitorial-services.astro        # ✅
│       ├── day-porter-services.astro        # ✅
│       ├── floor-care.astro                 # ✅
│       ├── disinfection-services.astro      # ✅
│       ├── blog/
│       │   ├── index.astro                    # ✅
│       │   ├── how-to-evaluate-*.astro        # ✅
│       │   ├── how-to-reduce-*.astro           # ✅
│       │   └── high-touch-disinfection-*.astro # ✅
│       ├── industries/
│       │   ├── banks.astro                # ✅
│       │   ├── dealerships.astro          # ✅
│       │   ├── education.astro            # ✅
│       │   ├── medical-dental.astro       # ✅
│       │   ├── professional-offices.astro # ✅
│       │   └── warehouses.astro           # ✅
│       └── locations/        # 🔄 TODO
│           ├── stockton.astro    # 🔄
│           ├── modesto.astro     # 🔄
│           ├── tracy.astro       # 🔄
│           ├── manteca.astro     # 🔄
│           └── lodi.astro        # 🔄
└── ROADMAP.md              # This file
```

---

*Last updated: July 10, 2026*