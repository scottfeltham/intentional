# Component Library & Sample Designs

## Table of Contents
1. [Navigation Components](#navigation-components)
2. [Hero Sections](#hero-sections)
3. [Card Components](#card-components)
4. [Button Variations](#button-variations)
5. [Form Elements](#form-elements)
6. [Content Sections](#content-sections)
7. [Footer Components](#footer-components)
8. [Full Page Templates](#full-page-templates)

---

## Navigation Components

### Standard Header (Current)

```html
<header class="site-header" style="
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;">

  <nav style="
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;">

    <a href="/" style="text-decoration: none;">
      <img src="/assets/images/intentional-logo.png"
           alt="Intentional Group"
           style="height: 50px;">
    </a>

    <ul style="
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;">
      <li><a href="/" style="color: #333; text-decoration: none; font-weight: 500;">Home</a></li>
      <li><a href="/businesses/intentional-fitout/" style="color: #333; text-decoration: none; font-weight: 500;">Fitout</a></li>
      <li><a href="/businesses/intentional-education/" style="color: #333; text-decoration: none; font-weight: 500;">Education</a></li>
      <li><a href="mailto:charles.donald@intentional.ae" style="color: #7890ab; text-decoration: none; font-weight: 600;">Contact</a></li>
    </ul>
  </nav>
</header>
```

**Usage:** Default for all pages

---

### Alternative: Transparent Header (For dark heroes)

```html
<header style="
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;">

  <nav style="
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;">

    <a href="/">
      <!-- Use white version of logo -->
      <img src="/assets/images/intentional-logo-white.png"
           alt="Intentional Group"
           style="height: 50px;">
    </a>

    <ul style="
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;">
      <li><a href="/" style="color: white; text-decoration: none; font-weight: 500;">Home</a></li>
      <li><a href="/businesses/intentional-fitout/" style="color: white; text-decoration: none; font-weight: 500;">Fitout</a></li>
      <li><a href="/businesses/intentional-education/" style="color: white; text-decoration: none; font-weight: 500;">Education</a></li>
      <li><a href="mailto:charles.donald@intentional.ae"
             style="
               color: white;
               background: rgba(255,255,255,0.2);
               padding: 0.5rem 1.5rem;
               border-radius: 6px;
               text-decoration: none;
               font-weight: 600;">Contact</a></li>
    </ul>
  </nav>
</header>
```

**Usage:** Landing pages with full-screen heroes, dark backgrounds

---

### Mobile Navigation

```html
<style>
@media (max-width: 768px) {
  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem !important;
    font-size: 0.9rem;
  }

  .site-header nav {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
```

**Note:** For more complex mobile needs, consider hamburger menu implementation

---

## Hero Sections

### Design 1: Default Gradient Hero (Current)

```html
<div style="
  background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;">

  <div style="max-width: 800px;">
    <h1 style="
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
      The Intentional Group
    </h1>
    <p style="font-size: 1.75rem; font-weight: 300; opacity: 0.95; margin-bottom: 1rem;">
      Building Excellence Through Education and Design
    </p>
    <p style="font-size: 1.25rem; opacity: 0.9;">
      Transforming spaces and minds across the UAE
    </p>
  </div>
</div>
```

**Best For:** Homepage, general landing pages

---

### Design 2: Image Background Hero

```html
<div style="
  background: linear-gradient(rgba(93, 113, 135, 0.85), rgba(120, 144, 171, 0.85)),
              url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80') center/cover;
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
      text-shadow: 2px 2px 8px rgba(0,0,0,0.3);">
      Transform Your Workspace
    </h1>
    <p style="
      font-size: 1.5rem;
      font-weight: 300;
      opacity: 0.95;
      margin-bottom: 2rem;
      line-height: 1.6;">
      Expert fitout solutions for offices and educational spaces across the UAE
    </p>
    <a href="#contact" style="
      display: inline-block;
      background: white;
      color: #7890ab;
      padding: 1rem 2.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;">
      Get Started
    </a>
  </div>
</div>
```

**Best For:** Service-specific landing pages, campaigns

---

### Design 3: Split Hero (Text + Image)

```html
<div style="
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70vh;
  align-items: center;
  background: #f8f9fa;">

  <!-- Left: Content -->
  <div style="padding: 4rem;">
    <span style="
      display: inline-block;
      background: #7890ab;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1.5rem;">
      Established Business
    </span>

    <h1 style="
      font-size: 3.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      line-height: 1.1;">
      Professional Office Fitouts
    </h1>

    <p style="
      font-size: 1.25rem;
      color: #333;
      line-height: 1.7;
      margin-bottom: 2rem;">
      We create modern, functional workspaces that reflect your company's
      culture and support your team's success.
    </p>

    <div style="display: flex; gap: 1rem;">
      <a href="#services" style="
        display: inline-block;
        background: #7890ab;
        color: white;
        padding: 0.875rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        Our Services
      </a>
      <a href="#portfolio" style="
        display: inline-block;
        background: transparent;
        border: 2px solid #7890ab;
        color: #7890ab;
        padding: 0.875rem 2rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;">
        View Portfolio
      </a>
    </div>
  </div>

  <!-- Right: Image -->
  <div style="
    height: 100%;
    background: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80') center/cover;">
  </div>
</div>

<style>
@media (max-width: 768px) {
  .split-hero {
    grid-template-columns: 1fr !important;
  }
}
</style>
```

**Best For:** Product/service specific pages, conversion-focused landing pages

---

### Design 4: Minimal Text Hero

```html
<div style="
  background: white;
  padding: 8rem 2rem 4rem;
  text-align: center;">

  <div style="max-width: 700px; margin: 0 auto;">
    <h1 style="
      font-size: 4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      line-height: 1.1;">
      Intentional Education
    </h1>

    <p style="
      font-size: 1.5rem;
      color: #6c757d;
      font-weight: 300;
      margin-bottom: 3rem;">
      Empowering Learning, Inspiring Growth
    </p>

    <div style="
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #7890ab, #5d7187);
      margin: 0 auto;">
    </div>
  </div>
</div>
```

**Best For:** Clean, professional business pages, blog headers

---

## Card Components

### Design 1: Standard Business Card (Current)

```html
<div style="
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;">

  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
       alt="Modern office"
       style="width: 100%; height: 200px; object-fit: cover;">

  <div style="padding: 3rem;">
    <h3 style="
      font-size: 1.75rem;
      color: #1a1a1a;
      margin-bottom: 0.5rem;">
      Intentional Fitout
    </h3>

    <span style="
      display: inline-block;
      font-size: 0.9rem;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1rem;">
      Established Business
    </span>

    <p style="
      color: #333;
      margin-bottom: 2rem;
      line-height: 1.7;">
      Expert fitout solutions for offices and educational spaces.
    </p>

    <ul style="
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;">
      <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
        <span style="position: absolute; left: 0; color: #7890ab; font-weight: bold;">✓</span>
        Office Fitouts
      </li>
      <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
        <span style="position: absolute; left: 0; color: #7890ab; font-weight: bold;">✓</span>
        Educational Spaces
      </li>
      <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
        <span style="position: absolute; left: 0; color: #7890ab; font-weight: bold;">✓</span>
        Project Management
      </li>
    </ul>

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
</div>

<style>
.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
</style>
```

---

### Design 2: Icon Card

```html
<div style="
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;">

  <!-- Icon (use SVG or icon font) -->
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
    🏢
  </div>

  <h3 style="
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;">
    Office Fitouts
  </h3>

  <p style="
    color: #6c757d;
    line-height: 1.7;
    margin-bottom: 1.5rem;">
    Modern, functional workspaces that inspire productivity and reflect your brand.
  </p>

  <a href="#" style="
    color: #7890ab;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;">
    Learn More →
  </a>
</div>
```

**Best For:** Service offerings, feature highlights

---

### Design 3: Testimonial Card

```html
<div style="
  background: #f8f9fa;
  border-left: 4px solid #7890ab;
  border-radius: 8px;
  padding: 2rem;
  position: relative;">

  <div style="
    color: #7890ab;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1rem;">
    "
  </div>

  <p style="
    font-size: 1.125rem;
    color: #333;
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 1.5rem;">
    The Intentional Group transformed our office space beyond our expectations.
    Their attention to detail and project management was exceptional.
  </p>

  <div style="display: flex; align-items: center; gap: 1rem;">
    <div style="
      width: 50px;
      height: 50px;
      background: #7890ab;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 1.25rem;">
      JD
    </div>
    <div>
      <div style="font-weight: 600; color: #1a1a1a;">John Doe</div>
      <div style="font-size: 0.875rem; color: #6c757d;">CEO, Tech Company</div>
    </div>
  </div>
</div>
```

**Best For:** Social proof, case studies, about pages

---

### Design 4: Stats Card

```html
<div style="
  background: linear-gradient(135deg, #7890ab, #5d7187);
  color: white;
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;">

  <div style="
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1;">
    150+
  </div>

  <div style="
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    opacity: 0.95;">
    Projects Completed
  </div>

  <div style="
    font-size: 0.875rem;
    opacity: 0.8;">
    Across the UAE
  </div>
</div>
```

**Best For:** About pages, achievements, credentials

---

## Button Variations

### Primary Buttons

```html
<!-- Standard Primary -->
<a href="#" style="
  display: inline-block;
  background: #7890ab;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;">
  Get Started
</a>

<!-- Large Primary -->
<a href="#" style="
  display: inline-block;
  background: #7890ab;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;">
  Contact Us Today
</a>

<!-- Small Primary -->
<a href="#" style="
  display: inline-block;
  background: #7890ab;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;">
  Learn More
</a>
```

### Secondary Buttons

```html
<!-- Outline Button -->
<a href="#" style="
  display: inline-block;
  background: transparent;
  border: 2px solid #7890ab;
  color: #7890ab;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;">
  View Portfolio
</a>

<!-- Ghost Button (for dark backgrounds) -->
<a href="#" style="
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;">
  Explore More
</a>

<!-- Text Link Button -->
<a href="#" style="
  color: #7890ab;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;">
  Read Case Study
  <span style="transition: transform 0.3s ease;">→</span>
</a>
```

### Button Groups

```html
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="#" style="
    display: inline-block;
    background: #7890ab;
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;">
    Primary Action
  </a>

  <a href="#" style="
    display: inline-block;
    background: transparent;
    border: 2px solid #7890ab;
    color: #7890ab;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;">
    Secondary Action
  </a>
</div>
```

---

## Form Elements

### Contact Form

```html
<form style="max-width: 600px; margin: 0 auto;">
  <div style="margin-bottom: 1.5rem;">
    <label style="
      display: block;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.5rem;">
      Name *
    </label>
    <input type="text" required style="
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid #dee2e6;
      border-radius: 6px;
      font-size: 1rem;
      transition: border-color 0.3s ease;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="
      display: block;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.5rem;">
      Email *
    </label>
    <input type="email" required style="
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid #dee2e6;
      border-radius: 6px;
      font-size: 1rem;
      transition: border-color 0.3s ease;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="
      display: block;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.5rem;">
      Message *
    </label>
    <textarea rows="5" required style="
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid #dee2e6;
      border-radius: 6px;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
      resize: vertical;"></textarea>
  </div>

  <button type="submit" style="
    background: #7890ab;
    color: white;
    padding: 0.875rem 2.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;">
    Send Message
  </button>
</form>

<style>
input:focus, textarea:focus {
  outline: none;
  border-color: #7890ab;
}

button:hover {
  background: #6a80a0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(120, 144, 171, 0.3);
}
</style>
```

---

## Content Sections

### Two-Column Section

```html
<section style="padding: 4rem 2rem; background: white;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;">

      <!-- Left: Image -->
      <div>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
             alt="Office space"
             style="width: 100%; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
      </div>

      <!-- Right: Content -->
      <div>
        <span style="
          display: inline-block;
          color: #7890ab;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;">
          About Us
        </span>

        <h2 style="
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          line-height: 1.2;">
          Transforming Spaces Since 2015
        </h2>

        <p style="
          font-size: 1.125rem;
          color: #333;
          line-height: 1.8;
          margin-bottom: 1.5rem;">
          We've completed over 150 office and educational fitout projects
          across the UAE, helping organizations create spaces that inspire
          excellence and productivity.
        </p>

        <ul style="
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;">
          <li style="padding: 0.75rem 0; display: flex; align-items: start; gap: 1rem;">
            <span style="color: #7890ab; font-size: 1.5rem;">✓</span>
            <div>
              <strong style="color: #1a1a1a;">Proven Track Record</strong>
              <p style="color: #6c757d; margin: 0.25rem 0 0;">150+ successful projects delivered on time</p>
            </div>
          </li>
          <li style="padding: 0.75rem 0; display: flex; align-items: start; gap: 1rem;">
            <span style="color: #7890ab; font-size: 1.5rem;">✓</span>
            <div>
              <strong style="color: #1a1a1a;">Expert Team</strong>
              <p style="color: #6c757d; margin: 0.25rem 0 0;">Skilled craftsmen and experienced project managers</p>
            </div>
          </li>
        </ul>

        <a href="#" style="
          display: inline-block;
          background: #7890ab;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;">
          Our Story
        </a>
      </div>
    </div>
  </div>
</section>

<style>
@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr !important;
  }
}
</style>
```

---

### Feature Grid Section

```html
<section style="padding: 4rem 2rem; background: #f8f9fa;">
  <div style="max-width: 1200px; margin: 0 auto; text-align: center;">

    <h2 style="
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1rem;">
      Our Services
    </h2>

    <p style="
      font-size: 1.125rem;
      color: #6c757d;
      max-width: 700px;
      margin: 0 auto 3rem;">
      Comprehensive fitout solutions tailored to your needs
    </p>

    <div style="
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;">

      <!-- Feature 1 -->
      <div style="
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.06);">

        <div style="
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 12px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;">
          🏢
        </div>

        <h3 style="
          font-size: 1.5rem;
          color: #1a1a1a;
          margin-bottom: 1rem;">
          Office Fitouts
        </h3>

        <p style="
          color: #6c757d;
          line-height: 1.7;">
          Modern workspaces designed for productivity and collaboration
        </p>
      </div>

      <!-- Feature 2 -->
      <div style="
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.06);">

        <div style="
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 12px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;">
          🎓
        </div>

        <h3 style="
          font-size: 1.5rem;
          color: #1a1a1a;
          margin-bottom: 1rem;">
          Educational Spaces
        </h3>

        <p style="
          color: #6c757d;
          line-height: 1.7;">
          Safe, engaging environments that inspire learning
        </p>
      </div>

      <!-- Feature 3 -->
      <div style="
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.06);">

        <div style="
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7890ab, #5d7187);
          border-radius: 12px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;">
          ⚙️
        </div>

        <h3 style="
          font-size: 1.5rem;
          color: #1a1a1a;
          margin-bottom: 1rem;">
          Project Management
        </h3>

        <p style="
          color: #6c757d;
          line-height: 1.7;">
          End-to-end coordination from design to completion
        </p>
      </div>
    </div>
  </div>
</section>

<style>
@media (max-width: 992px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
```

---

### CTA Section

```html
<section style="
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
  color: white;
  text-align: center;">

  <div style="max-width: 800px; margin: 0 auto;">
    <h2 style="
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;">
      Ready to Transform Your Space?
    </h2>

    <p style="
      font-size: 1.25rem;
      opacity: 0.95;
      margin-bottom: 2.5rem;
      line-height: 1.7;">
      Let's discuss your project and create a space that inspires excellence.
      Contact us today for a consultation.
    </p>

    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
      <a href="mailto:fitout@intentional.ae" style="
        display: inline-block;
        background: white;
        color: #7890ab;
        padding: 1rem 2.5rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.125rem;
        transition: all 0.3s ease;">
        Get in Touch
      </a>

      <a href="/businesses/intentional-fitout/" style="
        display: inline-block;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid white;
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.125rem;
        transition: all 0.3s ease;">
        Learn More
      </a>
    </div>
  </div>
</section>
```

---

## Footer Components

### Standard Footer (Current)

```html
<footer style="
  background: #1a1a1a;
  color: white;
  padding: 4rem 2rem 2rem;">

  <div style="max-width: 1200px; margin: 0 auto;">

    <!-- Footer Grid -->
    <div style="
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      margin-bottom: 2rem;">

      <!-- Column 1: About -->
      <div>
        <h4 style="
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: white;">
          The Intentional Group
        </h4>
        <p style="
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;">
          Excellence in Education and Fitout Solutions across the UAE
        </p>
      </div>

      <!-- Column 2: Links -->
      <div>
        <h4 style="
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: white;">
          Our Businesses
        </h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 0.5rem;">
            <a href="/businesses/intentional-fitout/" style="
              color: rgba(255, 255, 255, 0.8);
              text-decoration: none;">
              Intentional Fitout
            </a>
          </li>
          <li style="margin-bottom: 0.5rem;">
            <a href="/businesses/intentional-education/" style="
              color: rgba(255, 255, 255, 0.8);
              text-decoration: none;">
              Intentional Education
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 style="
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: white;">
          Contact
        </h4>
        <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">
          Email: <a href="mailto:charles.donald@intentional.ae" style="color: rgba(255, 255, 255, 0.8);">charles.donald@intentional.ae</a>
        </p>
        <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem;">
          Phone: <a href="tel:+971504519627" style="color: rgba(255, 255, 255, 0.8);">+971 50 451 9627</a>
        </p>
        <p style="color: rgba(255, 255, 255, 0.8);">
          P.O. Box 72528<br>Dubai, UAE
        </p>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div style="
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      text-align: center;">
      <p style="color: rgba(255, 255, 255, 0.6);">
        &copy; 2025 The Intentional Group. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
```

---

## Full Page Templates

### Template 1: Simple Landing Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intentional Fitout - Office Fitout Solutions Dubai</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  </style>
</head>
<body>

  <!-- Hero -->
  <section style="
    background: linear-gradient(135deg, #7890ab 0%, #5d7187 100%);
    color: white;
    padding: 6rem 2rem;
    text-align: center;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;">
    <div>
      <h1 style="font-size: 4rem; font-weight: 700; margin-bottom: 1.5rem;">
        Professional Office Fitouts in Dubai
      </h1>
      <p style="font-size: 1.5rem; margin-bottom: 2.5rem; opacity: 0.95;">
        Transform your workspace with expert design and execution
      </p>
      <a href="#contact" style="
        display: inline-block;
        background: white;
        color: #7890ab;
        padding: 1rem 2.5rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.125rem;">
        Get Started
      </a>
    </div>
  </section>

  <!-- Services -->
  <section style="padding: 5rem 2rem; background: #f8f9fa;">
    <div class="container" style="text-align: center;">
      <h2 style="font-size: 2.5rem; margin-bottom: 3rem; color: #1a1a1a;">
        Our Services
      </h2>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <!-- Service cards here (see Feature Grid Section above) -->
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #7890ab, #5d7187);
    color: white;
    text-align: center;">
    <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Ready to Get Started?</h2>
    <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.95;">
      Contact us today for a free consultation
    </p>
    <a href="mailto:fitout@intentional.ae" style="
      display: inline-block;
      background: white;
      color: #7890ab;
      padding: 1rem 2.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;">
      Get in Touch
    </a>
  </section>

  <!-- Footer -->
  <!-- (See Standard Footer above) -->

</body>
</html>
```

---

## Implementation Notes

1. **Copy any component** and paste into your HTML
2. **Adjust colors** by changing hex values to match chosen palette
3. **Modify spacing** by adjusting padding/margin values
4. **Customize content** while maintaining structure
5. **Test responsiveness** at different screen sizes
6. **Add transitions** for interactive elements (hover states)

## Next Steps

- Choose components for your pages
- Customize with your content
- Test across devices
- Optimize images
- Add analytics tracking
