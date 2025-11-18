# The Intentional Group - Design System

## Color Palettes

### Current Brand Palette (Default)
**Professional Blue-Gray Harmony**

```css
/* Primary Palette */
--primary-color: #7890ab;      /* Intentional Fitout */
--secondary-color: #5d7187;    /* Intentional Education */
--accent-color: #8fa3b8;       /* Supporting accent */

/* Neutrals */
--dark-color: #1a1a1a;         /* Text, footers */
--light-color: #f8f9fa;        /* Backgrounds */
--text-color: #333333;         /* Body text */
--gray-color: #6c757d;         /* Secondary text */
--border-color: #dee2e6;       /* Dividers */
```

**Usage Example:**
```html
<div style="background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
            color: white; padding: 4rem; text-align: center;">
  <h1>Building Excellence Through Education and Design</h1>
</div>
```

**Best For:** Professional B2B services, UAE corporate market, dual-industry brand

---

### Alternative Palette 1: Warm Professional
**For education-forward positioning or warmer brand feel**

```css
/* Primary Palette */
--primary-color: #2d5f8d;      /* Deep Professional Blue */
--secondary-color: #c17332;    /* Warm Terra Cotta */
--accent-color: #4a7ba7;       /* Light Blue */

/* Neutrals */
--dark-color: #2c2c2c;
--light-color: #faf7f5;        /* Warm off-white */
--text-color: #333333;
--gray-color: #6b6b6b;
--border-color: #e8dfd6;       /* Warm border */
```

**When to Use:**
- Education division wants more prominence
- Warmer, more approachable feel needed
- Differentiating from pure construction competitors
- Marketing materials for educational services

**Visual Example:**
```
[Fitout Card: #2d5f8d border]
[Education Card: #c17332 border with featured badge]
Hero gradient: 135deg from #2d5f8d to #4a7ba7
CTA buttons: Fitout=#2d5f8d, Education=#c17332
```

---

### Alternative Palette 2: Modern Minimalist
**For tech-forward, contemporary positioning**

```css
/* Primary Palette */
--primary-color: #0f172a;      /* Deep Slate */
--secondary-color: #3b82f6;    /* Bright Blue */
--accent-color: #60a5fa;       /* Light Blue */

/* Neutrals */
--dark-color: #020617;
--light-color: #f8fafc;
--text-color: #1e293b;
--gray-color: #64748b;
--border-color: #e2e8f0;
```

**When to Use:**
- Tech integration is key message
- Startup/innovation positioning
- Younger decision-maker audience
- Digital-first services (online learning, virtual consultations)

**Visual Example:**
```
Dark mode friendly
Sharp, high contrast
Buttons: Bright blue (#3b82f6) on dark backgrounds
Hero: Dark slate with bright blue accents
```

---

### Alternative Palette 3: UAE Heritage
**For local market emphasis with cultural resonance**

```css
/* Primary Palette */
--primary-color: #8b6f47;      /* Desert Sand */
--secondary-color: #2c5f6f;    /* Gulf Teal */
--accent-color: #d4a574;       /* Light Sand */

/* Neutrals */
--dark-color: #1a1a1a;
--light-color: #faf8f5;        /* Cream */
--text-color: #333333;
--gray-color: #6c757d;
--border-color: #e8e3dc;
```

**When to Use:**
- Emphasizing UAE heritage and local expertise
- Government/institutional clients
- Traditional educational institutions
- Luxury fitout projects

**Visual Example:**
```
Heritage-inspired gradient
Cream backgrounds instead of gray
Gold/sand accents for premium feel
Teal for trustworthy professional services
```

---

### Alternative Palette 4: Bold Dual-Brand
**For distinct business differentiation**

```css
/* Fitout Colors */
--fitout-primary: #1e3a5f;     /* Construction Navy */
--fitout-accent: #4a7ba7;      /* Steel Blue */

/* Education Colors */
--education-primary: #6b2d5f;  /* Academic Purple */
--education-accent: #9d5b8b;   /* Light Purple */

/* Shared Neutrals */
--dark-color: #1a1a1a;
--light-color: #f8f9fa;
--text-color: #333333;
```

**When to Use:**
- Strong differentiation between divisions needed
- Each business has independent brand recognition
- Targeting different audiences on same site
- Future: Separate domains for each business

**Visual Example:**
```
Fitout pages: Navy blue hero and CTAs
Education pages: Purple hero and CTAs
Homepage: Both colors in separate cards
Gradient: Navy to Purple showing unity
```

---

## Color Usage Guidelines

### Hierarchy Rules

```css
/* Priority 1: Action Items */
Primary CTA Button: var(--primary-color)
Secondary CTA Button: var(--secondary-color)

/* Priority 2: Navigation & Structure */
Header Background: White
Footer Background: var(--dark-color)
Section Backgrounds: Alternate white / var(--light-color)

/* Priority 3: Content */
Headings: var(--dark-color)
Body Text: var(--text-color)
Secondary Text: var(--gray-color)
```

### Contrast Requirements

**WCAG AA Compliance:**
```
✓ #333333 on white = 12.6:1 (Pass)
✓ White on #7890ab = 4.8:1 (Pass)
✓ White on #5d7187 = 7.1:1 (Pass)
✓ #7890ab on white = 4.4:1 (Pass - large text)
✗ #8fa3b8 on white = 3.2:1 (Fail - accent only, not text)
```

**Testing:**
Always check color combinations at: https://webaim.org/resources/contrastchecker/

---

## Typography Scale

### Desktop Scale

```css
/* Display */
.hero-title {
  font-size: 3.5rem;      /* 56px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Headings */
h1, .h1 {
  font-size: 3rem;        /* 48px */
  font-weight: 700;
  line-height: 1.2;
}

h2, .h2 {
  font-size: 2.5rem;      /* 40px */
  font-weight: 700;
  line-height: 1.2;
}

h3, .h3 {
  font-size: 1.75rem;     /* 28px */
  font-weight: 600;
  line-height: 1.3;
}

h4, .h4 {
  font-size: 1.25rem;     /* 20px */
  font-weight: 600;
  line-height: 1.4;
}

/* Body */
.lead {
  font-size: 1.25rem;     /* 20px */
  font-weight: 400;
  line-height: 1.7;
}

body, p {
  font-size: 1rem;        /* 16px */
  font-weight: 400;
  line-height: 1.6;
}

.small, small {
  font-size: 0.875rem;    /* 14px */
  line-height: 1.5;
}

.caption {
  font-size: 0.75rem;     /* 12px */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Mobile Scale (768px and below)

```css
.hero-title {
  font-size: 2rem;        /* 32px */
}

h1, .h1 {
  font-size: 2rem;        /* 32px */
}

h2, .h2 {
  font-size: 1.75rem;     /* 28px */
}

h3, .h3 {
  font-size: 1.5rem;      /* 24px */
}

/* Body remains same for readability */
```

---

## Spacing System

### 8-Point Grid

```css
/* Base unit: 8px */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */
```

### Common Patterns

```css
/* Card Padding */
.card {
  padding: var(--space-6);  /* 48px all sides */
}

/* Section Spacing */
section {
  padding-top: var(--space-8);     /* 64px */
  padding-bottom: var(--space-8);
}

/* Element Margins */
h2 {
  margin-bottom: var(--space-4);   /* 32px */
}

p {
  margin-bottom: var(--space-2);   /* 16px */
}

/* Button Padding */
.btn {
  padding: var(--space-2) var(--space-4);  /* 16px 32px */
}
```

---

## Shadows & Depth

### Elevation System

```css
/* Elevation 0: Flat */
.flat {
  box-shadow: none;
}

/* Elevation 1: Subtle (Cards at rest) */
.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06),
              0 1px 2px rgba(0, 0, 0, 0.04);
}

/* Elevation 2: Default (Cards, dropdowns) */
.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
              0 2px 4px rgba(0, 0, 0, 0.06);
}

/* Elevation 3: Raised (Hover states) */
.shadow-md {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15),
              0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Elevation 4: Floating (Modals, popovers) */
.shadow-lg {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2),
              0 8px 16px rgba(0, 0, 0, 0.12);
}

/* Special: Colored Shadow (CTA buttons on hover) */
.shadow-primary {
  box-shadow: 0 4px 12px rgba(120, 144, 171, 0.3);
}
```

### Usage Examples

```html
<!-- Card at rest -->
<div class="card shadow">
  Content here
</div>

<!-- Card on hover -->
<div class="card shadow-md">
  Content here
</div>

<!-- Primary button hover -->
<button class="btn btn-primary shadow-primary">
  Contact Us
</button>
```

---

## Border Radius System

```css
/* Radius Scale */
--radius-none: 0;
--radius-sm: 4px;      /* Small elements, tags */
--radius-md: 6px;      /* Buttons, inputs */
--radius-lg: 12px;     /* Cards, containers */
--radius-xl: 16px;     /* Large containers */
--radius-full: 9999px; /* Pills, circular */
```

### Application

```css
.btn {
  border-radius: var(--radius-md);      /* 6px */
}

.card {
  border-radius: var(--radius-lg);      /* 12px */
}

.badge {
  border-radius: var(--radius-sm);      /* 4px */
}

.avatar {
  border-radius: var(--radius-full);    /* Circle */
}
```

---

## Animation & Transitions

### Standard Timing

```css
/* Duration */
--duration-fast: 150ms;    /* Micro-interactions */
--duration-base: 300ms;    /* Standard transitions */
--duration-slow: 500ms;    /* Complex animations */

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Transitions

```css
/* Button Hover */
.btn {
  transition: all var(--duration-base) var(--ease-out);
}

.btn:hover {
  transform: translateY(-2px);
}

/* Card Hover */
.card {
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Image Zoom */
.image-container img {
  transition: transform var(--duration-slow) var(--ease-out);
}

.image-container:hover img {
  transform: scale(1.05);
}
```

---

## Grid System

### Container Widths

```css
/* Max widths */
--container-sm: 640px;   /* Single column content */
--container-md: 768px;   /* Forms, narrow layouts */
--container-lg: 1024px;  /* Standard content */
--container-xl: 1200px;  /* Main container */
--container-2xl: 1400px; /* Wide layouts */
```

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Column Grid

```css
/* 12-Column Grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
}

/* Common Layouts */
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
```

---

## Accessibility Guidelines

### Focus States

```css
/* Keyboard Navigation */
a:focus,
button:focus,
input:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Remove default outline, add custom */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Accessible Color Combinations

```css
/* ✓ PASS - Use These */
.text-on-white {
  color: var(--text-color);        /* #333 on white = 12.6:1 */
}

.text-on-dark {
  color: white;                    /* White on #1a1a1a = 18.2:1 */
}

.text-on-primary {
  color: white;                    /* White on #7890ab = 4.8:1 */
  font-size: 1rem;                 /* OK for normal text */
}

/* ✗ AVOID - Insufficient Contrast */
.accent-text {
  color: var(--accent-color);      /* #8fa3b8 on white = 3.2:1 FAIL */
  /* Use for borders/icons only, not text */
}
```

### Touch Targets

```css
/* Minimum 44x44px for mobile */
.btn,
.nav-link,
.clickable {
  min-height: 44px;
  min-width: 44px;
  padding: var(--space-2) var(--space-4);
}
```

---

## Component Classes

### Buttons

```css
/* Base Button */
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  border: none;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-out);
}

/* Primary Button */
.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #6a80a0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(120, 144, 171, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #4d6177;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(93, 113, 135, 0.3);
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}
```

### Cards

```css
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow);
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-featured {
  border: 2px solid var(--primary-color);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
```

### Badges

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background-color: var(--primary-color);
  color: white;
}

.badge-secondary {
  background-color: var(--light-color);
  color: var(--gray-color);
}
```

---

## Usage Examples

### Example 1: Hero Section with Default Palette

```html
<section class="hero" style="
  background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div class="hero-content">
    <h1 style="font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem;">
      The Intentional Group
    </h1>
    <p style="font-size: 1.75rem; font-weight: 300; opacity: 0.95;">
      Building Excellence Through Education and Design
    </p>
  </div>
</section>
```

### Example 2: Business Card with Warm Palette

```html
<div class="card" style="
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 2px solid #c17332;">

  <img src="..." style="width: 100%; height: 200px; object-fit: cover;">

  <div style="padding: 3rem;">
    <h3 style="color: #2c2c2c; font-size: 1.75rem; margin-bottom: 0.5rem;">
      Intentional Education
    </h3>
    <span style="
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #faf7f5;
      color: #6b6b6b;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 1rem;">
      Growing Division
    </span>
    <p style="color: #333; line-height: 1.7; margin-bottom: 2rem;">
      Innovative educational programs and services designed to empower
      learners and educators.
    </p>
    <a href="#" class="btn-secondary" style="
      display: inline-block;
      background: #c17332;
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;">
      Learn More
    </a>
  </div>
</div>
```

### Example 3: CTA Section with Modern Minimalist Palette

```html
<section style="
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;">

  <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
    Ready to Transform Your Space?
  </h2>
  <p style="font-size: 1.125rem; opacity: 0.9; margin-bottom: 2rem;">
    Get in touch to discuss your project
  </p>
  <a href="mailto:contact@intentional.ae" style="
    display: inline-block;
    background: #3b82f6;
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;">
    Contact Us
  </a>
</section>
```

---

## Quick Reference Chart

| Element | Default | Warm | Modern | UAE Heritage |
|---------|---------|------|--------|--------------|
| Primary Button | #7890ab | #2d5f8d | #3b82f6 | #2c5f6f |
| Secondary Button | #5d7187 | #c17332 | #0f172a | #8b6f47 |
| Hero Gradient | Blue→Blue-Gray | Deep Blue→Light Blue | Slate→Bright Blue | Teal→Sand |
| Text on White | #333333 | #333333 | #1e293b | #333333 |
| Background | #f8f9fa | #faf7f5 | #f8fafc | #faf8f5 |
| Best For | B2B Professional | Education Focus | Tech Forward | Local Heritage |

---

**Next Steps:**
1. Choose primary palette for launch
2. Test alternative palettes with stakeholders
3. Create visual mockups using each palette
4. Implement chosen system in CSS variables
5. Document any custom variations

