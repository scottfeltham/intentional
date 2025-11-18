# Color Palette Showcase & Usage Guide

This document provides visual examples of each color palette in action, complete with use cases and implementation guidelines.

---

## Table of Contents
1. [Palette 1: Professional Blue-Gray (Default)](#palette-1-professional-blue-gray)
2. [Palette 2: Warm Professional](#palette-2-warm-professional)
3. [Palette 3: Modern Minimalist](#palette-3-modern-minimalist)
4. [Palette 4: UAE Heritage](#palette-4-uae-heritage)
5. [Palette 5: Bold Dual-Brand](#palette-5-bold-dual-brand)
6. [Comparison Matrix](#comparison-matrix)
7. [Decision Framework](#decision-framework)

---

## Palette 1: Professional Blue-Gray (Default)

### Colors

```css
--primary-color: #7890ab;
--secondary-color: #5d7187;
--accent-color: #8fa3b8;
--dark-color: #1a1a1a;
--light-color: #f8f9fa;
--text-color: #333333;
```

### Color Swatches

```
████████  #7890ab - Primary (Fitout)
████████  #5d7187 - Secondary (Education)
████████  #8fa3b8 - Accent
████████  #1a1a1a - Dark
████████  #f8f9fa - Light
████████  #333333 - Text
```

### Visual Example - Homepage Hero

```html
<div style="
  background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div style="max-width: 900px;">
    <h1 style="
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
      The Intentional Group
    </h1>
    <p style="font-size: 1.75rem; font-weight: 300; opacity: 0.95; margin-bottom: 2rem;">
      Building Excellence Through Education and Design
    </p>
    <p style="font-size: 1.25rem; opacity: 0.9; margin-bottom: 3rem;">
      Transforming spaces and minds across the UAE
    </p>
    <a href="#businesses" style="
      display: inline-block;
      background: white;
      color: #7890ab;
      padding: 1rem 2.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
      Explore Our Businesses
    </a>
  </div>
</div>
```

### Business Cards Example

```html
<div style="background: #f8f9fa; padding: 4rem 2rem;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

      <!-- Fitout Card -->
      <div style="
        background: white;
        border-radius: 12px;
        padding: 3rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border: 2px solid #7890ab;">

        <h3 style="font-size: 2rem; color: #1a1a1a; margin-bottom: 1rem;">
          Intentional Fitout
        </h3>
        <p style="color: #333; line-height: 1.7; margin-bottom: 2rem;">
          Expert fitout solutions for offices and educational spaces across the UAE.
        </p>
        <a href="#" style="
          display: inline-block;
          background: #7890ab;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;">
          Learn More
        </a>
      </div>

      <!-- Education Card -->
      <div style="
        background: white;
        border-radius: 12px;
        padding: 3rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <h3 style="font-size: 2rem; color: #1a1a1a; margin-bottom: 1rem;">
          Intentional Education
        </h3>
        <p style="color: #333; line-height: 1.7; margin-bottom: 2rem;">
          Innovative educational programs and services designed to empower learners.
        </p>
        <a href="#" style="
          display: inline-block;
          background: #5d7187;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;">
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>
```

### Best For
- ✓ Professional B2B services
- ✓ UAE corporate market
- ✓ Balanced dual-brand presentation
- ✓ Construction + Education industries
- ✓ Trustworthy, established positioning

### Personality
**Sophisticated • Professional • Balanced • Trustworthy • Modern**

---

## Palette 2: Warm Professional

### Colors

```css
--primary-color: #2d5f8d;      /* Deep Professional Blue */
--secondary-color: #c17332;    /* Warm Terra Cotta */
--accent-color: #4a7ba7;       /* Light Blue */
--dark-color: #2c2c2c;
--light-color: #faf7f5;        /* Warm off-white */
--text-color: #333333;
```

### Color Swatches

```
████████  #2d5f8d - Deep Professional Blue
████████  #c17332 - Warm Terra Cotta
████████  #4a7ba7 - Light Blue
████████  #2c2c2c - Dark
████████  #faf7f5 - Warm Light
```

### Visual Example - Homepage Hero

```html
<div style="
  background: linear-gradient(135deg, #2d5f8d 0%, #4a7ba7 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div style="max-width: 900px;">
    <h1 style="
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
      The Intentional Group
    </h1>
    <p style="font-size: 1.75rem; font-weight: 300; opacity: 0.95; margin-bottom: 2rem;">
      Building Excellence Through Education and Design
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="#" style="
        display: inline-block;
        background: white;
        color: #2d5f8d;
        padding: 1rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        Fitout Services
      </a>
      <a href="#" style="
        display: inline-block;
        background: #c17332;
        color: white;
        padding: 1rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        Education Programs
      </a>
    </div>
  </div>
</div>
```

### Education-Focused Card

```html
<div style="
  background: #faf7f5;
  border-left: 4px solid #c17332;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);">

  <div style="
    display: inline-block;
    background: #c17332;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1.5rem;">
    Featured Program
  </div>

  <h3 style="font-size: 2rem; color: #2c2c2c; margin-bottom: 1rem;">
    Professional Development Workshops
  </h3>

  <p style="font-size: 1.125rem; color: #333; line-height: 1.8; margin-bottom: 2rem;">
    Empower your educators with cutting-edge teaching methodologies and
    evidence-based practices.
  </p>

  <a href="#" style="
    display: inline-block;
    background: #c17332;
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;">
    Explore Workshops
  </a>
</div>
```

### Comparison: Same Section, Different Palette

```html
<!-- Warm Palette Version -->
<section style="padding: 4rem 2rem; background: #faf7f5;">
  <h2 style="color: #2c2c2c; font-size: 2.5rem; margin-bottom: 2rem;">
    Why Choose Us
  </h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
    <div>
      <div style="
        width: 60px;
        height: 60px;
        background: #2d5f8d;
        border-radius: 12px;
        margin-bottom: 1rem;">
      </div>
      <h3 style="color: #2d5f8d; margin-bottom: 0.5rem;">Construction Expertise</h3>
      <p style="color: #333;">Proven track record in office and school fitouts</p>
    </div>

    <div>
      <div style="
        width: 60px;
        height: 60px;
        background: #c17332;
        border-radius: 12px;
        margin-bottom: 1rem;">
      </div>
      <h3 style="color: #c17332; margin-bottom: 0.5rem;">Educational Innovation</h3>
      <p style="color: #333;">Forward-thinking curriculum and training solutions</p>
    </div>
  </div>
</section>
```

### Best For
- ✓ Education-forward positioning
- ✓ More approachable, friendly feel
- ✓ Highlighting education division
- ✓ Differentiating from pure construction firms
- ✓ Marketing to educational institutions

### Personality
**Approachable • Warm • Professional • Innovative • People-Focused**

---

## Palette 3: Modern Minimalist

### Colors

```css
--primary-color: #0f172a;      /* Deep Slate */
--secondary-color: #3b82f6;    /* Bright Blue */
--accent-color: #60a5fa;       /* Light Blue */
--dark-color: #020617;
--light-color: #f8fafc;
--text-color: #1e293b;
```

### Color Swatches

```
████████  #0f172a - Deep Slate
████████  #3b82f6 - Bright Blue
████████  #60a5fa - Light Blue
████████  #020617 - Deep Dark
████████  #f8fafc - Cool Light
```

### Visual Example - Modern Hero

```html
<div style="
  background: #0f172a;
  color: white;
  padding: 8rem 2rem;
  text-align: center;">

  <div style="max-width: 800px; margin: 0 auto;">
    <div style="
      display: inline-block;
      background: linear-gradient(90deg, #3b82f6, #60a5fa);
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 2rem;">
      Innovation in Construction & Education
    </div>

    <h1 style="
      font-size: 4.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, white, #60a5fa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;">
      The Intentional Group
    </h1>

    <p style="font-size: 1.5rem; color: #94a3b8; margin-bottom: 3rem; line-height: 1.7;">
      Transforming workspaces and educational experiences through
      thoughtful design and innovative solutions
    </p>

    <a href="#" style="
      display: inline-block;
      background: #3b82f6;
      color: white;
      padding: 1.125rem 2.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;
      box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);">
      Get Started →
    </a>
  </div>
</div>
```

### Modern Card Grid

```html
<section style="padding: 5rem 2rem; background: #f8fafc;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">

      <!-- Fitout Card -->
      <div style="
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 3rem;
        transition: all 0.3s ease;">

        <div style="
          width: 48px;
          height: 48px;
          background: #0f172a;
          border-radius: 12px;
          margin-bottom: 1.5rem;">
        </div>

        <h3 style="
          font-size: 1.875rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 1rem;">
          Intentional Fitout
        </h3>

        <p style="
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;">
          Modern office and educational spaces designed for the future of work and learning.
        </p>

        <a href="#" style="
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;">
          Explore services
          <span>→</span>
        </a>
      </div>

      <!-- Education Card -->
      <div style="
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        border-radius: 16px;
        padding: 3rem;
        color: white;">

        <div style="
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          margin-bottom: 1.5rem;">
        </div>

        <h3 style="
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;">
          Intentional Education
        </h3>

        <p style="
          opacity: 0.95;
          line-height: 1.7;
          margin-bottom: 2rem;">
          Innovative educational programs leveraging technology and evidence-based practices.
        </p>

        <a href="#" style="
          color: white;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 6px;">
          Learn more
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

### Stats Section

```html
<section style="
  background: #0f172a;
  color: white;
  padding: 5rem 2rem;">

  <div style="
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    text-align: center;">

    <div>
      <div style="
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;">
        150+
      </div>
      <div style="color: #94a3b8; font-size: 1.125rem;">Projects Delivered</div>
    </div>

    <div>
      <div style="
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;">
        8+
      </div>
      <div style="color: #94a3b8; font-size: 1.125rem;">Years Experience</div>
    </div>

    <div>
      <div style="
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;">
        100%
      </div>
      <div style="color: #94a3b8; font-size: 1.125rem;">Client Satisfaction</div>
    </div>

    <div>
      <div style="
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;">
        24/7
      </div>
      <div style="color: #94a3b8; font-size: 1.125rem;">Support Available</div>
    </div>
  </div>
</section>
```

### Best For
- ✓ Tech-forward positioning
- ✓ Startup/innovation focus
- ✓ Younger decision-makers
- ✓ Digital-first services
- ✓ SaaS or online learning platforms
- ✓ High contrast, accessible design

### Personality
**Innovative • Tech-Forward • Bold • Contemporary • Digital-First**

---

## Palette 4: UAE Heritage

### Colors

```css
--primary-color: #8b6f47;      /* Desert Sand */
--secondary-color: #2c5f6f;    /* Gulf Teal */
--accent-color: #d4a574;       /* Light Sand */
--dark-color: #1a1a1a;
--light-color: #faf8f5;        /* Cream */
--text-color: #333333;
```

### Color Swatches

```
████████  #8b6f47 - Desert Sand
████████  #2c5f6f - Gulf Teal
████████  #d4a574 - Light Sand
████████  #1a1a1a - Dark
████████  #faf8f5 - Cream
```

### Visual Example - Heritage Hero

```html
<div style="
  background: linear-gradient(135deg, #2c5f6f 0%, #8b6f47 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;">

  <!-- Subtle pattern overlay (optional) -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml,<svg width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h60v60H0z\" fill=\"none\"/><path d=\"M30 0v60M0 30h60\" stroke=\"white\" stroke-width=\"0.5\" opacity=\"0.1\"/></svg>');
    opacity: 0.3;">
  </div>

  <div style="max-width: 900px; position: relative; z-index: 1;">
    <div style="
      display: inline-block;
      color: #d4a574;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
      border: 2px solid #d4a574;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;">
      UAE Excellence Since 2015
    </div>

    <h1 style="
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.3);">
      The Intentional Group
    </h1>

    <p style="font-size: 1.5rem; font-weight: 300; opacity: 0.95; margin-bottom: 2.5rem;">
      Honoring tradition, embracing innovation in construction and education
    </p>

    <a href="#" style="
      display: inline-block;
      background: #d4a574;
      color: #1a1a1a;
      padding: 1rem 2.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;
      letter-spacing: 0.5px;">
      Discover Our Legacy
    </a>
  </div>
</div>
```

### Luxury Fitout Card

```html
<div style="
  background: #faf8f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(139, 111, 71, 0.15);">

  <div style="
    background: linear-gradient(135deg, #8b6f47, #d4a574);
    padding: 3rem;
    text-align: center;">

    <h3 style="
      font-size: 2rem;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 700;">
      Premium Office Fitouts
    </h3>

    <p style="color: rgba(255,255,255,0.9); font-size: 1.125rem;">
      Crafted with Excellence
    </p>
  </div>

  <div style="padding: 3rem;">
    <p style="
      color: #333;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1.0625rem;">
      We bring together traditional craftsmanship and modern design to create
      spaces that reflect the prestige of your organization.
    </p>

    <ul style="
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;">
      <li style="
        padding: 0.75rem 0;
        border-bottom: 1px solid #e8e3dc;
        color: #333;">
        <span style="color: #8b6f47; font-weight: 600; margin-right: 0.5rem;">✦</span>
        Luxury Materials & Finishes
      </li>
      <li style="
        padding: 0.75rem 0;
        border-bottom: 1px solid #e8e3dc;
        color: #333;">
        <span style="color: #8b6f47; font-weight: 600; margin-right: 0.5rem;">✦</span>
        Master Craftsmen
      </li>
      <li style="
        padding: 0.75rem 0;
        color: #333;">
        <span style="color: #8b6f47; font-weight: 600; margin-right: 0.5rem;">✦</span>
        Bespoke Design Solutions
      </li>
    </ul>

    <a href="#" style="
      display: inline-block;
      background: #8b6f47;
      color: white;
      padding: 0.875rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.5px;">
      View Portfolio
    </a>
  </div>
</div>
```

### Educational Excellence Section

```html
<section style="padding: 5rem 2rem; background: white;">
  <div style="max-width: 1000px; margin: 0 auto; text-align: center;">

    <div style="
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #2c5f6f, #8b6f47);
      margin: 0 auto 2rem;
      border-radius: 2px;">
    </div>

    <h2 style="
      font-size: 2.5rem;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      font-weight: 700;">
      Educational Excellence
    </h2>

    <p style="
      font-size: 1.25rem;
      color: #6c757d;
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.8;">
      Rooted in UAE values, designed for global standards
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; text-align: left;">
      <div style="
        padding: 2rem;
        border-left: 3px solid #2c5f6f;">

        <h3 style="color: #2c5f6f; margin-bottom: 1rem; font-size: 1.5rem;">
          Cultural Integration
        </h3>
        <p style="color: #333; line-height: 1.7;">
          Programs that honor UAE heritage while preparing students for
          a globalized world.
        </p>
      </div>

      <div style="
        padding: 2rem;
        border-left: 3px solid #8b6f47;">

        <h3 style="color: #8b6f47; margin-bottom: 1rem; font-size: 1.5rem;">
          Premium Standards
        </h3>
        <p style="color: #333; line-height: 1.7;">
          World-class curriculum development meeting international
          accreditation requirements.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Best For
- ✓ UAE heritage emphasis
- ✓ Government/institutional clients
- ✓ Traditional educational institutions
- ✓ Luxury fitout projects
- ✓ Cultural organizations
- ✓ Premium positioning

### Personality
**Heritage-Rich • Premium • Cultural • Trustworthy • Established**

---

## Palette 5: Bold Dual-Brand

### Colors

```css
/* Fitout Colors */
--fitout-primary: #1e3a5f;     /* Construction Navy */
--fitout-accent: #4a7ba7;      /* Steel Blue */

/* Education Colors */
--education-primary: #6b2d5f;  /* Academic Purple */
--education-accent: #9d5b8b;   /* Light Purple */

/* Shared */
--dark-color: #1a1a1a;
--light-color: #f8f9fa;
--text-color: #333333;
```

### Color Swatches

```
Fitout Brand:
████████  #1e3a5f - Construction Navy
████████  #4a7ba7 - Steel Blue

Education Brand:
████████  #6b2d5f - Academic Purple
████████  #9d5b8b - Light Purple
```

### Visual Example - Dual Hero

```html
<div style="
  background: linear-gradient(90deg, #1e3a5f 50%, #6b2d5f 50%);
  color: white;
  padding: 6rem 2rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div style="max-width: 1200px; width: 100%; text-align: center;">
    <h1 style="
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.3);">
      The Intentional Group
    </h1>

    <div style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 3rem;">

      <!-- Fitout Side -->
      <div style="
        padding: 2rem;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 12px;
        background: rgba(255,255,255,0.05);">

        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Intentional Fitout</h2>
        <p style="opacity: 0.9; margin-bottom: 2rem;">
          Professional construction and fitout solutions
        </p>
        <a href="#" style="
          display: inline-block;
          background: white;
          color: #1e3a5f;
          padding: 0.875rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;">
          Explore Fitout
        </a>
      </div>

      <!-- Education Side -->
      <div style="
        padding: 2rem;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 12px;
        background: rgba(255,255,255,0.05);">

        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Intentional Education</h2>
        <p style="opacity: 0.9; margin-bottom: 2rem;">
          Innovative learning and development programs
        </p>
        <a href="#" style="
          display: inline-block;
          background: white;
          color: #6b2d5f;
          padding: 0.875rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;">
          Explore Education
        </a>
      </div>
    </div>
  </div>
</div>
```

### Separate Business Pages

```html
<!-- Fitout Business Page Hero -->
<div style="
  background: linear-gradient(135deg, #1e3a5f 0%, #4a7ba7 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;">

  <h1 style="font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem;">
    Intentional Fitout
  </h1>
  <p style="font-size: 1.5rem; opacity: 0.95;">
    Transforming Spaces, Inspiring Excellence
  </p>
</div>

<!-- Education Business Page Hero -->
<div style="
  background: linear-gradient(135deg, #6b2d5f 0%, #9d5b8b 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;">

  <h1 style="font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem;">
    Intentional Education
  </h1>
  <p style="font-size: 1.5rem; opacity: 0.95;">
    Empowering Learning, Inspiring Growth
  </p>
</div>
```

### Business Cards with Strong Brand Colors

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 4rem 2rem; background: #f8f9fa;">

  <!-- Fitout Card -->
  <div style="
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(30, 58, 95, 0.15);">

    <div style="
      background: #1e3a5f;
      padding: 2rem;
      color: white;
      text-align: center;">
      <h3 style="font-size: 2rem; margin-bottom: 0.5rem;">Intentional Fitout</h3>
      <div style="
        display: inline-block;
        background: rgba(255,255,255,0.2);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;">
        ESTABLISHED 2015
      </div>
    </div>

    <div style="padding: 2.5rem;">
      <p style="color: #333; line-height: 1.7; margin-bottom: 2rem;">
        Expert fitout solutions for offices and educational spaces across the UAE
      </p>
      <a href="#" style="
        display: inline-block;
        background: #1e3a5f;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        Learn More
      </a>
    </div>
  </div>

  <!-- Education Card -->
  <div style="
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(107, 45, 95, 0.15);">

    <div style="
      background: #6b2d5f;
      padding: 2rem;
      color: white;
      text-align: center;">
      <h3 style="font-size: 2rem; margin-bottom: 0.5rem;">Intentional Education</h3>
      <div style="
        display: inline-block;
        background: rgba(255,255,255,0.2);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;">
        GROWING DIVISION
      </div>
    </div>

    <div style="padding: 2.5rem;">
      <p style="color: #333; line-height: 1.7; margin-bottom: 2rem;">
        Innovative educational programs designed to empower learners and educators
      </p>
      <a href="#" style="
        display: inline-block;
        background: #6b2d5f;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        Learn More
      </a>
    </div>
  </div>
</div>
```

### Best For
- ✓ Strong brand differentiation needed
- ✓ Independent business recognition
- ✓ Different target audiences
- ✓ Future: Separate domains/sites
- ✓ Clear service distinction

### Personality
**Distinct • Bold • Professional • Organized • Differentiated**

---

## Comparison Matrix

| Feature | Default | Warm | Modern | Heritage | Dual-Brand |
|---------|---------|------|--------|----------|------------|
| **Primary Color** | Blue-Gray #7890ab | Deep Blue #2d5f8d | Slate #0f172a | Sand #8b6f47 | Navy/Purple |
| **Vibe** | Professional | Approachable | Tech-Forward | Premium | Distinct |
| **Best Industry** | Both Equal | Education Focus | Digital/Tech | Luxury/Heritage | Strong Separation |
| **Contrast** | Medium | Medium | High | Medium | High |
| **Warmth** | Neutral | Warm | Cool | Warm | Neutral |
| **Modernity** | Modern | Traditional+ | Very Modern | Classical | Modern |
| **B2B Suitability** | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★★★ | ★★★★☆ |
| **Accessibility** | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★★ |

---

## Decision Framework

### Choose **Default (Professional Blue-Gray)** if:
- You want balanced presentation of both businesses
- UAE corporate market is primary target
- Need proven, trustworthy professional feel
- Want one cohesive brand identity
- Launching soon and need safe choice

### Choose **Warm Professional** if:
- Education division needs more prominence
- Want approachable, people-focused feel
- Targeting educational institutions primarily
- Need differentiation from pure construction firms
- Value warmth over corporate feel

### Choose **Modern Minimalist** if:
- Tech integration is key message
- Targeting younger decision-makers
- Digital/online services are important
- Want cutting-edge, innovative positioning
- High contrast accessibility is priority

### Choose **UAE Heritage** if:
- Local market positioning is critical
- Government/institutional clients are target
- Luxury/premium projects are focus
- Cultural resonance is important
- Want to emphasize UAE roots and expertise

### Choose **Bold Dual-Brand** if:
- Businesses need strong differentiation
- Different target audiences for each
- Planning separate marketing strategies
- Future separate domains/sites possible
- Clear service distinction is priority

---

## Implementation Checklist

### Before You Choose:
- [ ] Review all palette examples
- [ ] Show options to 3-5 stakeholders
- [ ] Test color combinations for accessibility
- [ ] Consider primary audience demographics
- [ ] Think about long-term brand evolution

### After You Choose:
- [ ] Update CSS variables in `style.css`
- [ ] Test all pages with new palette
- [ ] Verify contrast ratios (WCAG AA)
- [ ] Update any hardcoded color values
- [ ] Create style guide document
- [ ] Export color swatches for design tools

### Resources:
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Palette Tool**: https://coolors.co/
- **Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

---

## Next Steps

1. **Choose your palette** based on the decision framework
2. **Test on one page** before full implementation
3. **Get stakeholder approval** with visual mockups
4. **Implement systematically** using CSS variables
5. **Document your choice** and rationale for future reference

