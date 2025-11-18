# Implementation Guide

A step-by-step guide to implementing the design system and templates for The Intentional Group website.

---

## Table of Contents
1. [Quick Start](#quick-start)
2. [Design System Implementation](#design-system-implementation)
3. [Component Integration](#component-integration)
4. [Color Palette Selection](#color-palette-selection)
5. [Testing Checklist](#testing-checklist)
6. [Launch Checklist](#launch-checklist)
7. [Post-Launch Optimization](#post-launch-optimization)

---

## Quick Start

### 5-Minute Setup

1. **Choose your color palette** (from `palette-showcase.md`)
2. **Update CSS variables** in `assets/css/style.css`
3. **Test on homepage**
4. **Deploy**

### Current Status

Your site already has:
- ✓ Basic structure (homepage, business pages)
- ✓ Default color palette (Professional Blue-Gray)
- ✓ Responsive design
- ✓ Jekyll/GitHub Pages setup

You can use:
- Design system markup documents as reference
- Component library for new sections
- Layout templates for new pages
- Palette showcase to change colors

---

## Design System Implementation

### Step 1: Review Current Colors

Your current `assets/css/style.css` already has CSS variables:

```css
:root {
  --primary-color: #7890ab;
  --secondary-color: #5d7187;
  --accent-color: #8fa3b8;
  --dark-color: #1a1a1a;
  --light-color: #f8f9fa;
  --text-color: #333;
  --gray-color: #6c757d;
  --border-color: #dee2e6;
}
```

**Location:** `/Users/scott/Projects/intentional/assets/css/style.css:8-17`

### Step 2: Change Color Palette (Optional)

If you want to use a different palette from `palette-showcase.md`:

1. Open `assets/css/style.css`
2. Find the `:root` section (lines 8-17)
3. Replace color values with your chosen palette

**Example: Switching to Warm Professional Palette**

```css
:root {
  --primary-color: #2d5f8d;      /* Was: #7890ab */
  --secondary-color: #c17332;    /* Was: #5d7187 */
  --accent-color: #4a7ba7;       /* Was: #8fa3b8 */
  --dark-color: #2c2c2c;         /* Was: #1a1a1a */
  --light-color: #faf7f5;        /* Was: #f8f9fa */
  /* text-color and others stay the same */
}
```

3. Save the file
4. Refresh your browser
5. All colors update automatically!

### Step 3: Add New CSS Variables (If Needed)

For advanced customization, add these to your `:root`:

```css
:root {
  /* Existing colors... */

  /* Spacing */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-6: 3rem;
  --space-8: 4rem;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 16px 32px rgba(0, 0, 0, 0.2);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Transitions */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
}
```

Then use them in your CSS:

```css
.card {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  padding: var(--space-6);
  transition: all var(--duration-base) ease;
}
```

---

## Component Integration

### Adding New Components to Existing Pages

#### Example: Adding an Icon Card Section to Homepage

1. **Choose your component** from `component-library.md`
2. **Find insertion point** in your HTML
3. **Copy the HTML** from the component library
4. **Paste and customize**

**Location to edit:** `index.html`

Insert between About section and Contact section:

```html
<!-- About Section (existing) -->
<section class="about">
  ...existing content...
</section>

<!-- NEW: Why Choose Us Section -->
<section style="padding: 4rem 2rem; background: white;">
  <div class="container">
    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #1a1a1a;">
      Why Choose The Intentional Group
    </h2>

    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;">

      <!-- Card 1 -->
      <div style="
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <div style="
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;">
          ✓
        </div>

        <h3 style="font-size: 1.5rem; color: #1a1a1a; margin-bottom: 1rem;">
          Proven Expertise
        </h3>

        <p style="color: #6c757d; line-height: 1.7;">
          150+ projects delivered across construction and education
        </p>
      </div>

      <!-- Card 2 -->
      <div style="
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <div style="
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;">
          🎯
        </div>

        <h3 style="font-size: 1.5rem; color: #1a1a1a; margin-bottom: 1rem;">
          Intentional Approach
        </h3>

        <p style="color: #6c757d; line-height: 1.7;">
          Thoughtful, purposeful solutions tailored to your needs
        </p>
      </div>

      <!-- Card 3 -->
      <div style="
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <div style="
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;">
          🇦🇪
        </div>

        <h3 style="font-size: 1.5rem; color: #1a1a1a; margin-bottom: 1rem;">
          UAE Expertise
        </h3>

        <p style="color: #6c757d; line-height: 1.7;">
          Deep understanding of local market and requirements
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section (existing) -->
<section class="contact">
  ...existing content...
</section>
```

5. **Save and test** - View in browser to verify

---

### Creating New Pages

#### Example: Adding a Case Studies Page

1. **Create new file:** `case-studies.html`
2. **Copy layout template** from `layout-templates.md`
3. **Customize content**

```html
---
layout: default
title: Case Studies
---

<div class="business-hero" style="
  background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div>
    <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">
      Our Work
    </h1>
    <p style="font-size: 1.5rem; opacity: 0.95;">
      Successful projects across the UAE
    </p>
  </div>
</div>

<section style="padding: 4rem 2rem; background: #f8f9fa;">
  <div style="max-width: 1200px; margin: 0 auto;">

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">

      <!-- Case Study Card 1 -->
      <div style="
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
             style="width: 100%; height: 200px; object-fit: cover;">

        <div style="padding: 2rem;">
          <h3 style="font-size: 1.5rem; color: #1a1a1a; margin-bottom: 0.5rem;">
            Tech Startup Office Fitout
          </h3>
          <p style="color: #6c757d; font-size: 0.875rem; margin-bottom: 1rem;">
            Dubai Silicon Oasis • 2024
          </p>
          <p style="color: #333; line-height: 1.7; margin-bottom: 1.5rem;">
            Complete office transformation for 50-person startup, featuring
            open collaboration spaces and modern amenities.
          </p>
          <a href="#" style="
            color: #7890ab;
            text-decoration: none;
            font-weight: 600;">
            View Case Study →
          </a>
        </div>
      </div>

      <!-- More case study cards... -->

    </div>
  </div>
</section>
```

4. **Add to navigation** in `_layouts/default.html`

```html
<ul class="nav-menu">
  <li><a href="{{ '/' | relative_url }}">Home</a></li>
  <li><a href="{{ '/businesses/intentional-fitout/' | relative_url }}">Fitout</a></li>
  <li><a href="{{ '/businesses/intentional-education/' | relative_url }}">Education</a></li>
  <li><a href="{{ '/case-studies/' | relative_url }}">Portfolio</a></li> <!-- NEW -->
  <li><a href="mailto:charles.donald@intentional.ae">Contact</a></li>
</ul>
```

---

## Color Palette Selection

### Decision Process

Use the decision framework from `palette-showcase.md`:

1. **Who is your primary audience?**
   - Corporate/B2B → Default or Heritage
   - Educational institutions → Warm Professional
   - Tech companies → Modern Minimalist
   - Mixed/equal → Default

2. **What's your brand personality?**
   - Professional & balanced → Default
   - Approachable & warm → Warm Professional
   - Innovative & bold → Modern Minimalist
   - Premium & established → UAE Heritage

3. **Do the businesses need separation?**
   - Yes, strong differentiation → Bold Dual-Brand
   - No, unified brand → Any other palette

### Testing Your Choice

Before committing, test the palette:

1. **Create a test branch** (if using git)
   ```bash
   git checkout -b test-warm-palette
   ```

2. **Update CSS variables**
3. **Build and preview**
   ```bash
   jekyll serve
   ```

4. **Show to stakeholders**
5. **Gather feedback**
6. **Decide and merge** or revert

---

## Testing Checklist

### Visual Testing

- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Business detail pages render correctly
- [ ] Navigation works on all pages
- [ ] Footer displays on all pages

### Responsive Testing

Test on these sizes:

- [ ] Mobile (375px - iPhone)
- [ ] Mobile (414px - iPhone Plus)
- [ ] Tablet (768px - iPad)
- [ ] Tablet (1024px - iPad Pro)
- [ ] Desktop (1280px)
- [ ] Desktop (1920px)

**Quick test:** Resize browser window from wide to narrow

### Browser Testing

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Accessibility Testing

- [ ] Keyboard navigation works (Tab through all links)
- [ ] Color contrast passes WCAG AA
  - Use: https://webaim.org/resources/contrastchecker/
- [ ] All images have alt text
- [ ] Headings are in logical order (H1 → H2 → H3)
- [ ] Links have descriptive text (not "click here")

### Performance Testing

- [ ] Homepage loads in < 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] Mobile performance acceptable

**Quick test:** Open Chrome DevTools > Network tab > Reload page

### Content Testing

- [ ] All email links work (mailto:)
- [ ] All phone links work (tel:)
- [ ] All internal links work
- [ ] No "Lorem ipsum" placeholder text
- [ ] No broken images
- [ ] All dates are current

---

## Launch Checklist

### Pre-Launch (Do before going live)

#### Technical Setup
- [ ] Custom domain configured (if not using GitHub Pages subdomain)
- [ ] SSL certificate active (https://)
- [ ] Favicon added (16x16, 32x32, 180x180 sizes)
- [ ] robots.txt configured
- [ ] sitemap.xml generated

#### SEO Setup
- [ ] Meta titles on all pages (50-60 characters)
- [ ] Meta descriptions on all pages (150-160 characters)
- [ ] Open Graph tags for social sharing
- [ ] Google Analytics installed
- [ ] Google Search Console configured

**Add to `_layouts/default.html` head:**

```html
<head>
  <!-- Existing meta tags -->

  <!-- SEO -->
  <meta name="description" content="{{ page.description | default: site.description }}">

  <!-- Open Graph -->
  <meta property="og:title" content="{{ page.title }} - {{ site.title }}">
  <meta property="og:description" content="{{ page.description | default: site.description }}">
  <meta property="og:image" content="{{ site.url }}/assets/images/og-image.jpg">
  <meta property="og:url" content="{{ site.url }}{{ page.url }}">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

#### Content Review
- [ ] Proofread all text for typos
- [ ] Verify all contact information is correct
- [ ] Check email addresses work
- [ ] Verify phone numbers format correctly
- [ ] Ensure business descriptions are accurate
- [ ] Review About section
- [ ] Double-check all calls-to-action

#### Legal/Compliance
- [ ] Privacy policy page (if collecting any data)
- [ ] Cookie notice (if using analytics/cookies)
- [ ] Copyright year in footer is current
- [ ] All images are properly licensed

### Launch Day

1. **Final build**
   ```bash
   jekyll build
   git add .
   git commit -m "Launch version 1.0"
   git push origin main
   ```

2. **Verify live site**
   - [ ] Visit homepage
   - [ ] Click all navigation links
   - [ ] Test contact email links
   - [ ] Check mobile version
   - [ ] Verify SSL certificate (https:// shows lock icon)

3. **Submit to search engines**
   - [ ] Google Search Console: Submit sitemap
   - [ ] Bing Webmaster Tools: Submit sitemap

4. **Social sharing test**
   - [ ] Share on LinkedIn - verify preview looks good
   - [ ] Share on Twitter/X - verify preview
   - [ ] Share via WhatsApp - verify preview

### Week 1 Post-Launch

- [ ] Monitor Google Analytics daily
- [ ] Check for any error reports
- [ ] Review contact form submissions (if added)
- [ ] Monitor search console for crawl errors
- [ ] Gather initial user feedback

---

## Post-Launch Optimization

### Ongoing Tasks

#### Monthly
- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Update any outdated content
- [ ] Review and respond to any contact inquiries
- [ ] Check site speed/performance

#### Quarterly
- [ ] Content refresh (update stats, dates)
- [ ] Add new case studies/projects
- [ ] Review and update service descriptions
- [ ] SEO review and optimization
- [ ] Competitive analysis

#### Annually
- [ ] Major content review
- [ ] Design refresh consideration
- [ ] Technology stack review
- [ ] Security audit
- [ ] Accessibility audit

### Performance Optimization

#### Images
```bash
# Optimize images before uploading
# Use online tools like:
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
# - ImageOptim (Mac app)

# Or use Unsplash parameters:
?auto=format&fit=crop&w=800&q=80
```

#### Lazy Loading
Add to images below the fold:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

#### CSS Optimization
Minimize unused CSS:

```bash
# Use PurgeCSS or similar tools to remove unused styles
# For Jekyll, consider jekyll-purgecss gem
```

### Content Strategy

#### Blog/Resources (Future Enhancement)

1. **Create blog structure**
   ```
   /_posts/
     2025-01-15-office-design-trends.md
     2025-02-01-education-technology.md
   ```

2. **Add blog layout**
   ```
   /_layouts/
     post.html
   ```

3. **Create blog index page**
   ```
   /blog/
     index.html
   ```

#### Case Studies (Future Enhancement)

1. **Create case study collection**
   ```
   /_case-studies/
     project-1.md
     project-2.md
   ```

2. **Add case study layout**
   ```
   /_layouts/
     case-study.html
   ```

3. **Portfolio gallery page**
   ```
   /portfolio/
     index.html
   ```

---

## Troubleshooting

### Common Issues

#### Colors Don't Update
**Problem:** Changed CSS variables but colors still old
**Solution:**
1. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Clear browser cache
3. Check if you're editing the right file (should be `assets/css/style.css`)
4. Verify Jekyll rebuilt the site (`jekyll serve` or `jekyll build`)

#### Mobile Menu Breaks
**Problem:** Navigation doesn't work on mobile
**Solution:**
1. Check media query breakpoints in CSS
2. Ensure navigation list has proper mobile styling
3. Test flex-wrap or grid-template-columns mobile values

#### Images Don't Load
**Problem:** Broken image icons
**Solution:**
1. Check image paths are correct
2. Verify images are in `/assets/images/` directory
3. For Unsplash URLs, ensure full URL is used
4. Check if GitHub Pages is serving images correctly

#### Slow Page Load
**Problem:** Site loads slowly
**Solution:**
1. Optimize images (compress, resize)
2. Use Unsplash parameters: `?auto=format&fit=crop&w=800&q=80`
3. Remove unused CSS
4. Minimize JavaScript
5. Enable browser caching

---

## Resources

### Documentation References
- `design-system.md` - Color palettes, typography, spacing
- `component-library.md` - Ready-to-use components
- `palette-showcase.md` - Color palette options and examples
- `layout-templates.md` - Full page layouts

### External Tools
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Image Optimization**: https://tinypng.com
- **Speed Test**: https://pagespeed.web.dev/
- **Mobile Test**: https://search.google.com/test/mobile-friendly
- **SEO Checker**: https://www.seobility.net/en/seocheck/

### Jekyll Documentation
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages**: https://docs.github.com/en/pages
- **Liquid Templates**: https://shopify.github.io/liquid/

---

## Getting Help

### Internal Resources
1. Review design documentation
2. Check existing implementation in current files
3. Reference component library examples

### External Resources
1. Jekyll documentation
2. Stack Overflow (tag: jekyll)
3. GitHub Pages documentation
4. Web design communities

### Professional Help
For major changes or complex features:
1. Web developer (front-end)
2. UI/UX designer
3. SEO specialist
4. Content strategist

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Nov 2025 | Initial implementation guide |

---

**Next Steps:**
1. Choose your color palette
2. Implement one component as a test
3. Review on mobile and desktop
4. Get stakeholder feedback
5. Launch! 🚀
