# Intentional Group Website - Action Items Checklist

**Project:** Website Development
**Date:** November 22, 2025
**Status:** Development Phase - Design Review Iteration

---

## COMPLETED ITEMS ✓

### Site Structure & Navigation
- [x] 5-page site structure implemented (Home + 4 divisions)
- [x] Responsive navigation with mobile hamburger menu
- [x] Skip to main content accessibility link
- [x] Breadcrumb navigation on business pages
- [x] Footer with all division links

### Design System
- [x] UAE Heritage color palette implemented
- [x] Division-specific colors defined:
  - Interiors: #8b6f47 (Sand)
  - Education: #1a5f7a (Deep Teal)
  - Development: #5c4033 (Rich Brown)
  - Landscaping: #2d5a3d (Forest Green)
- [x] Secondary gradient colors for each division
- [x] Navigation color updated to #8F9ABA
- [x] Active navigation indicator uses division colors
- [x] CTA sections with gradient backgrounds (like homepage)
- [x] Hero section height optimized (48vh)

### Content Development
- [x] Group homepage content complete
- [x] Intentional Interiors page content complete
- [x] Intentional Education page content complete
- [x] Intentional Development page content complete
- [x] Intentional Landscaping page content complete
- [x] Removed inline email addresses from closing text (consistent pattern)

### Technical Implementation
- [x] Jekyll site structure
- [x] GitHub Pages deployment ready
- [x] Business page layout template
- [x] Division color CSS variables cascade to navigation
- [x] 404 error page created
- [x] Mobile responsive design

---

## REMAINING PRIORITIES

### 1. Contact Information
- [ ] Verify email address format (info@intentional.ae)
- [ ] Confirm if single email for all divisions or separate contacts needed
- [ ] Collect phone numbers for contact section
- [ ] Confirm physical address: P.O. Box 72528 Dubai, UAE

### 2. Visual Assets Required

#### Branding Assets
- [ ] The Intentional Group logo (✓ currently using intentional-logo.png)
- [ ] Division-specific logos/identifiers (if needed)
- [ ] Favicon
- [ ] Brand guidelines (if available)

#### Photography (currently using Unsplash placeholders)
- [ ] Original hero images for each page
- [ ] Project portfolio images for Interiors
- [ ] Service images for Education
- [ ] Development project images
- [ ] Landscaping project images

### 3. Functionality Enhancements
- [ ] Contact form implementation (single vs. per-division)
- [ ] Calendly integration (code placeholder exists)
- [ ] Google Analytics setup
- [ ] SEO meta tags optimization
- [ ] Social media links (if applicable)

### 4. Content Refinements
- [ ] Client testimonials (if available)
- [ ] Case studies / project showcases
- [ ] Team bios (if desired)
- [ ] Certifications/accreditations display

---

## DESIGN REVIEW NOTES

### Recently Completed (Nov 22)
1. ✓ Navigation link color changed to #8F9ABA
2. ✓ Active navigation indicator now uses division colors
3. ✓ Hero section height reduced by 20%
4. ✓ Main content anchor for home page set to businesses section
5. ✓ Removed email links from Development and Landscaping closing text
6. ✓ CTA section font colors updated for visibility (white text)
7. ✓ Division gradients added to CTA sections (matching homepage style)

### Pending Design Decisions
- [ ] Review card hover effects
- [ ] Consider image gallery for portfolio
- [ ] Mobile navigation animation refinement
- [ ] Loading states for images

---

## TECHNICAL NOTES

### Current Stack
- Jekyll static site generator
- GitHub Pages hosting
- Vanilla CSS (no frameworks)
- Responsive breakpoints: 1024px, 768px, 480px

### File Structure
```
/
├── _businesses/           # Division markdown files
├── _layouts/              # Page templates
├── assets/
│   ├── css/style.css     # Main stylesheet
│   └── images/           # Logo and assets
├── docs/                  # Project documentation
├── index.html            # Homepage
└── 404.html              # Error page
```

### Key CSS Variables
```css
--primary-color: #8b6f47      /* Sand/Gold */
--secondary-color: #2c5f6f    /* Teal */
--division-color: [per-page]  /* Set on body element */
```

---

## QUESTIONS TO RESOLVE

### Content Questions
1. [ ] Should project examples include client names or remain generic?
2. [ ] Are there any confidentiality restrictions on project showcases?
3. [ ] What differentiators should be highlighted vs. competitors?

### Business Questions
4. [ ] Is Landscaping launching as "Coming Soon" or fully active?
5. [ ] Are there existing marketing materials to reference?
6. [ ] Target launch date?

---

## DELIVERABLES TRACKING

### Phase 1: Discovery & Planning ✓
- [x] Scope documentation created
- [x] Gap analysis completed
- [x] Content requirements compiled

### Phase 2: Content Development ✓
- [x] Group homepage content final
- [x] Interiors page content final
- [x] Education page content final
- [x] Development page content final
- [x] Landscaping page content final

### Phase 3: Design Implementation (In Progress)
- [x] Color system implemented
- [x] Navigation styling
- [x] Hero sections
- [x] Business cards grid
- [x] CTA sections with gradients
- [ ] Final polish and refinements

### Phase 4: Visual Asset Collection
- [ ] Original photography collected
- [ ] Logos/branding files received
- [ ] All assets optimized for web

### Phase 5: Pre-Launch
- [ ] Final client review
- [ ] Mobile testing across devices
- [ ] Cross-browser testing
- [ ] Contact forms functional
- [ ] Analytics implemented
- [ ] SEO optimization

### Phase 6: Launch
- [ ] Domain configured (intentional.ae)
- [ ] Site launched
- [ ] Monitoring setup

---

**Last Updated:** November 22, 2025
**Next Review:** After client feedback on current design
