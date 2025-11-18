# Layout Templates & Page Structures

Complete, ready-to-use page templates for The Intentional Group website.

---

## Table of Contents
1. [Homepage Layouts](#homepage-layouts)
2. [Business Detail Page Layouts](#business-detail-page-layouts)
3. [Landing Page Layouts](#landing-page-layouts)
4. [Content Page Layouts](#content-page-layouts)
5. [Responsive Patterns](#responsive-patterns)

---

## Homepage Layouts

### Layout 1: Current Default (Recommended)

```
┌─────────────────────────────────────────┐
│  Header (Logo + Navigation)             │
├─────────────────────────────────────────┤
│                                         │
│         HERO - Gradient + Text          │
│         (60vh height)                   │
│                                         │
├─────────────────────────────────────────┤
│  Business Cards Section                 │
│  ┌─────────────┐  ┌──────────────┐     │
│  │   Fitout    │  │  Education   │     │
│  │  (Featured) │  │   (Standard) │     │
│  └─────────────┘  └──────────────┘     │
├─────────────────────────────────────────┤
│  About Section (Centered, Narrow)       │
│         - Company Description -         │
├─────────────────────────────────────────┤
│  Contact/CTA Section (Gradient)         │
│       Ready to Get Started?             │
├─────────────────────────────────────────┤
│  Footer (3 Columns)                     │
└─────────────────────────────────────────┘
```

**Full HTML Template:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Intentional Group - Building Excellence Through Education and Design</title>
  <meta name="description" content="The Intentional Group brings together expertise in office fitout and educational innovation across the UAE.">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

    /* Header */
    .site-header {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .site-header nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo-img { height: 50px; }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-menu a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-menu a:hover { color: #7890ab; }

    /* Hero */
    .hero {
      background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .tagline {
      font-size: 1.75rem;
      font-weight: 300;
      margin-bottom: 1rem;
      opacity: 0.95;
    }

    .subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
    }

    /* Business Cards */
    .businesses {
      padding: 4rem 2rem;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1a1a1a;
    }

    .business-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .business-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .business-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    }

    .business-card.featured { border: 2px solid #7890ab; }

    .business-image { width: 100%; height: 200px; overflow: hidden; }
    .business-image img { width: 100%; height: 100%; object-fit: cover; }

    .business-content { padding: 3rem; }

    .business-card h3 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: #1a1a1a;
    }

    .business-status {
      font-size: 0.9rem;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1rem;
      display: block;
    }

    .business-description {
      color: #333;
      margin-bottom: 2rem;
      line-height: 1.7;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: #7890ab;
      color: white;
    }

    .btn-primary:hover {
      background: #6a80a0;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(120, 144, 171, 0.3);
    }

    .btn-secondary {
      background: #5d7187;
      color: white;
    }

    .btn-secondary:hover {
      background: #4d6177;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(93, 113, 135, 0.3);
    }

    /* About */
    .about {
      padding: 4rem 2rem;
      background: white;
      text-align: center;
    }

    .about h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #1a1a1a;
    }

    .about p {
      font-size: 1.125rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.8;
      color: #333;
    }

    /* Contact */
    .contact {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
      color: white;
      text-align: center;
    }

    .contact h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .contact p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    /* Footer */
    .site-footer {
      background: #1a1a1a;
      color: white;
      padding: 4rem 2rem 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 2rem;
      max-width: 1200px;
      margin: 0 auto 2rem;
    }

    .footer-section h4 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .footer-section p,
    .footer-section a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }

    .footer-section ul {
      list-style: none;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2.5rem; }
      .tagline { font-size: 1.25rem; }
      .subtitle { font-size: 1rem; }
      .section-title { font-size: 2rem; }
      .nav-menu { gap: 1rem; font-size: 0.9rem; flex-wrap: wrap; justify-content: center; }
      .site-header nav { flex-direction: column; gap: 1rem; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <nav>
      <a href="/" class="logo">
        <img src="/assets/images/intentional-logo.png" alt="Intentional Group" class="logo-img">
      </a>
      <ul class="nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/businesses/intentional-fitout/">Fitout</a></li>
        <li><a href="/businesses/intentional-education/">Education</a></li>
        <li><a href="mailto:charles.donald@intentional.ae">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1>The Intentional Group</h1>
      <p class="tagline">Building Excellence Through Education and Design</p>
      <p class="subtitle">Transforming spaces and minds across the UAE</p>
    </div>
  </section>

  <!-- Business Cards -->
  <section class="businesses">
    <div class="container">
      <h2 class="section-title">Our Business Areas</h2>

      <div class="business-cards">
        <!-- Fitout Card -->
        <div class="business-card featured">
          <div class="business-image">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="Modern office">
          </div>
          <div class="business-content">
            <h3>Intentional Fitout</h3>
            <span class="business-status">Established Business</span>
            <p class="business-description">
              Expert fitout solutions for offices and educational spaces. Transform your
              environment into functional, inspiring spaces.
            </p>
            <a href="/businesses/intentional-fitout/" class="btn btn-primary">Learn More</a>
          </div>
        </div>

        <!-- Education Card -->
        <div class="business-card">
          <div class="business-image">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Students learning">
          </div>
          <div class="business-content">
            <h3>Intentional Education</h3>
            <span class="business-status">Growing Division</span>
            <p class="business-description">
              Innovative educational programs and services designed to empower learners
              and educators across the UAE.
            </p>
            <a href="/businesses/intentional-education/" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="about">
    <div class="container">
      <h2>About The Intentional Group</h2>
      <p>
        The Intentional Group brings together expertise in physical space transformation
        and educational innovation. Our name reflects our commitment to purposeful,
        thoughtful approaches in everything we do.
      </p>
    </div>
  </section>

  <!-- Contact -->
  <section class="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <p>Interested in learning more about our services? We'd love to hear from you.</p>
      <a href="mailto:charles.donald@intentional.ae" class="btn btn-primary" style="background: white; color: #7890ab;">Contact Us</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>The Intentional Group</h4>
        <p>Excellence in Education and Fitout Solutions</p>
      </div>
      <div class="footer-section">
        <h4>Our Businesses</h4>
        <ul>
          <li><a href="/businesses/intentional-fitout/">Intentional Fitout</a></li>
          <li><a href="/businesses/intentional-education/">Intentional Education</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: <a href="mailto:charles.donald@intentional.ae">charles.donald@intentional.ae</a></p>
        <p>Phone: <a href="tel:+971504519627">+971 50 451 9627</a></p>
        <p>P.O. Box 72528 Dubai, UAE</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 The Intentional Group. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
```

---

### Layout 2: Split Hero Homepage

```
┌─────────────────────────────────────────┐
│  Header (Logo + Navigation)             │
├──────────────────┬──────────────────────┤
│                  │                      │
│   Hero Text      │   Hero Image         │
│   + CTA          │   (Background)       │
│                  │                      │
├──────────────────┴──────────────────────┤
│  Services Grid (3 Columns)              │
│  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │Icon 1│  │Icon 2│  │Icon 3│          │
│  └──────┘  └──────┘  └──────┘          │
├─────────────────────────────────────────┤
│  Business Showcase (Alternating)        │
│  ┌─────────┐                            │
│  │ Image   │  Text Content              │
│  └─────────┘                            │
│              Text Content  ┌─────────┐  │
│                            │ Image   │  │
│                            └─────────┘  │
├─────────────────────────────────────────┤
│  Stats Section (4 Columns)              │
│    150+    |   8+   |  100%  |  24/7   │
├─────────────────────────────────────────┤
│  CTA Section (Gradient)                 │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

**Use Case:** More visual, marketing-focused homepage

---

### Layout 3: Minimal Homepage

```
┌─────────────────────────────────────────┐
│  Header (Minimal, Centered Logo)        │
├─────────────────────────────────────────┤
│                                         │
│         Company Name (Large)            │
│         Tagline (Medium)                │
│         ───────                         │
│                                         │
├─────────────────────────────────────────┤
│  Two Business Cards (Side by Side)      │
│  ┌───────────────┐ ┌───────────────┐   │
│  │               │ │               │   │
│  │    Fitout     │ │   Education   │   │
│  │               │ │               │   │
│  └───────────────┘ └───────────────┘   │
├─────────────────────────────────────────┤
│  Brief About (2-3 sentences)            │
├─────────────────────────────────────────┤
│  Contact (Email + Phone)                │
├─────────────────────────────────────────┤
│  Minimal Footer                         │
└─────────────────────────────────────────┘
```

**Use Case:** Ultra-clean, simple corporate site

---

## Business Detail Page Layouts

### Layout 1: Current Default

```
┌─────────────────────────────────────────┐
│  Header (Navigation)                    │
├─────────────────────────────────────────┤
│                                         │
│  Hero (Business Color + Image)          │
│  Business Name + Tagline                │
│                                         │
├─────────────────────────────────────────┤
│  Content (Max-width 900px, Centered)    │
│                                         │
│  ## About [Business]                    │
│  Paragraph content...                   │
│                                         │
│  ## Our Services                        │
│  ### Service 1                          │
│  Description...                         │
│  ### Service 2                          │
│  Description...                         │
│                                         │
│  ## Why Choose Us / Our Approach        │
│  - Bullet points                        │
│  - Key benefits                         │
│                                         │
├─────────────────────────────────────────┤
│  CTA Section (Gradient)                 │
│  Get in touch message + Email button    │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

**Full HTML Template (Fitout):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intentional Fitout - Office & School Fitout Solutions Dubai</title>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

  <!-- Header (same as homepage) -->
  <header class="site-header">
    <!-- Navigation -->
  </header>

  <!-- Business Hero -->
  <div class="business-hero" style="
    background: linear-gradient(rgba(120, 144, 171, 0.85), rgba(120, 144, 171, 0.85)),
                url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80') center/cover;
    color: white;
    padding: 4rem 2rem;
    text-align: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;">

    <div>
      <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
        Intentional Fitout
      </h1>
      <p style="font-size: 1.5rem; opacity: 0.95; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
        Transforming Spaces, Inspiring Excellence
      </p>
    </div>
  </div>

  <!-- Content -->
  <div class="business-page" style="padding: 4rem 2rem; max-width: 900px; margin: 0 auto;">

    <h2>About Intentional Fitout</h2>
    <p>
      Intentional Fitout is our established division specializing in comprehensive
      fitout solutions for offices and educational institutions across the UAE.
    </p>

    <h2>Our Services</h2>

    <h3>Office Fitouts</h3>
    <p>
      We create modern, functional workspaces that reflect your company's culture
      and support your team's success.
    </p>

    <h3>School & Educational Spaces</h3>
    <p>
      Our expertise in educational fitouts ensures that learning environments are
      safe, engaging, and conducive to student success.
    </p>

    <h2>Why Choose Us</h2>
    <ul>
      <li>Proven Track Record: Years of successful projects</li>
      <li>Quality Craftsmanship: Attention to detail</li>
      <li>On-Time Delivery: Reliable project management</li>
    </ul>
  </div>

  <!-- CTA -->
  <section class="cta-section" style="
    background: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;">

    <h2>Ready to Transform Your Space?</h2>
    <p>Contact our team to discuss your fitout project.</p>
    <a href="mailto:fitout@intentional.ae" class="btn btn-primary">Get in Touch</a>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <!-- Footer content -->
  </footer>

</body>
</html>
```

---

### Layout 2: Service-Focused Business Page

```
┌─────────────────────────────────────────┐
│  Header                                 │
├─────────────────────────────────────────┤
│  Hero (Full-width Image + Overlay)      │
├─────────────────────────────────────────┤
│  Service Grid (3x2 or 2x3)              │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Serv 1│ │Serv 2│ │Serv 3│            │
│  └──────┘ └──────┘ └──────┘            │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Serv 4│ │Serv 5│ │Serv 6│            │
│  └──────┘ └──────┘ └──────┘            │
├─────────────────────────────────────────┤
│  Process Timeline (Horizontal)          │
│  1 → 2 → 3 → 4 → 5                      │
├─────────────────────────────────────────┤
│  Portfolio/Case Studies                 │
│  ┌────────┐ ┌────────┐ ┌────────┐      │
│  │Project1│ │Project2│ │Project3│      │
│  └────────┘ └────────┘ └────────┘      │
├─────────────────────────────────────────┤
│  Testimonials                           │
├─────────────────────────────────────────┤
│  CTA                                    │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

**Use Case:** Business pages with multiple services to showcase

---

## Landing Page Layouts

### Layout 1: Single-Purpose Landing Page

```
┌─────────────────────────────────────────┐
│  Minimal Header (Logo + Contact)        │
├─────────────────────────────────────────┤
│                                         │
│  Hero (Benefit-Focused)                 │
│  Headline + Subheadline + CTA           │
│                                         │
├─────────────────────────────────────────┤
│  Social Proof (Logos or Stats)          │
│  [Logo] [Logo] [Logo] [Logo]            │
├─────────────────────────────────────────┤
│  Features/Benefits (3 columns)          │
│  ┌─────┐ ┌─────┐ ┌─────┐               │
│  │  1  │ │  2  │ │  3  │               │
│  └─────┘ └─────┘ └─────┘               │
├─────────────────────────────────────────┤
│  How It Works (3-5 steps)               │
│  Step 1 → Step 2 → Step 3               │
├─────────────────────────────────────────┤
│  Testimonial                            │
│  "Quote from happy client"              │
├─────────────────────────────────────────┤
│  Final CTA (Strong)                     │
│  Large button + urgency/value prop      │
├─────────────────────────────────────────┤
│  Minimal Footer                         │
└─────────────────────────────────────────┘
```

**Best For:** Campaign-specific pages, service launches

---

### Layout 2: Long-Form Landing Page

```
┌─────────────────────────────────────────┐
│  Header (Transparent, minimal)          │
├─────────────────────────────────────────┤
│  Hero (Full-screen)                     │
│  Problem Statement + Solution           │
│  Primary CTA                            │
├─────────────────────────────────────────┤
│  Video or Large Visual                  │
├─────────────────────────────────────────┤
│  Problem Amplification                  │
│  What happens if you don't solve this?  │
├─────────────────────────────────────────┤
│  Solution Explanation                   │
│  Detailed breakdown with visuals        │
├─────────────────────────────────────────┤
│  Features Grid                          │
├─────────────────────────────────────────┤
│  Social Proof (Multiple testimonials)   │
├─────────────────────────────────────────┤
│  Pricing/Packages (if applicable)       │
├─────────────────────────────────────────┤
│  FAQ Section                            │
├─────────────────────────────────────────┤
│  Final CTA (Repeat with variation)      │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

**Best For:** Complex services requiring explanation, high-value offerings

---

## Content Page Layouts

### Layout 1: Blog Post / Article

```
┌─────────────────────────────────────────┐
│  Header                                 │
├─────────────────────────────────────────┤
│  Article Hero (Narrow)                  │
│  Title + Meta (Date, Author, Category)  │
├─────────────────────────────────────────┤
│  Featured Image (Wide)                  │
├─────────────────────────────────────────┤
│  Content (Max-width 700px, Centered)    │
│                                         │
│  ## Heading 2                           │
│  Paragraph text...                      │
│                                         │
│  ### Heading 3                          │
│  More content...                        │
│                                         │
│  [Inline image or callout box]          │
│                                         │
│  Continuing text...                     │
│                                         │
├─────────────────────────────────────────┤
│  Related Articles (3 cards)             │
├─────────────────────────────────────────┤
│  Newsletter Signup CTA                  │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

---

### Layout 2: Case Study

```
┌─────────────────────────────────────────┐
│  Header                                 │
├─────────────────────────────────────────┤
│  Project Hero (Full-width Image)        │
│  Project Name + Client + Year           │
├─────────────────────────────────────────┤
│  Quick Facts (Grid)                     │
│  Client | Duration | Services | Budget  │
├─────────────────────────────────────────┤
│  Challenge Section                      │
│  [Icon] Problem statement               │
├─────────────────────────────────────────┤
│  Solution Section (Text + Images)       │
│  ┌──────┐                               │
│  │Image │  Description of approach      │
│  └──────┘                               │
├─────────────────────────────────────────┤
│  Results Section (Stats)                │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ +50% │ │ -30% │ │ 100% │            │
│  └──────┘ └──────┘ └──────┘            │
├─────────────────────────────────────────┤
│  Testimonial from Client                │
├─────────────────────────────────────────┤
│  Photo Gallery (Before/After)           │
├─────────────────────────────────────────┤
│  CTA - Start Your Project               │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

---

## Responsive Patterns

### Mobile Strategy

```
DESKTOP (1200px+):
┌─────────┬─────────┐
│         │         │
│  Col 1  │  Col 2  │
│         │         │
└─────────┴─────────┘

TABLET (768px - 1199px):
┌─────────┬─────────┐
│         │         │
│  Col 1  │  Col 2  │
│         │         │
└─────────┴─────────┘
(Slightly narrower, same layout)

MOBILE (<768px):
┌─────────────────┐
│                 │
│     Col 1       │
│                 │
├─────────────────┤
│                 │
│     Col 2       │
│                 │
└─────────────────┘
(Stacked vertically)
```

### Common Breakpoints

```css
/* Mobile First Approach */

/* Base styles (Mobile) */
.container {
  padding: 1rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-2 {
    gap: 3rem;
  }
}
```

---

## Quick Reference: When to Use Each Layout

| Layout Type | Best For | Key Features |
|-------------|----------|--------------|
| **Default Homepage** | Initial launch, balanced presentation | Equal weight to both businesses |
| **Split Hero Homepage** | Visual marketing focus | Large imagery, service showcase |
| **Minimal Homepage** | Simple corporate presence | Clean, fast-loading, essential info |
| **Default Business Page** | Service detail pages | Content-focused, readable |
| **Service-Focused Business** | Multiple service offerings | Grid layout, portfolio showcase |
| **Single-Purpose Landing** | Campaign pages, conversions | One clear goal, minimal distractions |
| **Long-Form Landing** | Complex offerings | Educational, detailed explanation |
| **Blog Post** | Articles, resources | Readable content, engagement |
| **Case Study** | Portfolio, social proof | Visual storytelling, results |

---

## Implementation Notes

1. **Start with mobile** - Design mobile-first, enhance for desktop
2. **Test on real devices** - Not just browser resize
3. **Performance matters** - Optimize images, minimize code
4. **Accessibility first** - Semantic HTML, keyboard navigation, color contrast
5. **Consistent spacing** - Use 8-point grid system throughout

---

## Next Steps

1. Choose layout that matches your content strategy
2. Copy HTML template
3. Customize with your content and brand colors
4. Test responsive behavior
5. Optimize for performance
6. Launch and measure results

