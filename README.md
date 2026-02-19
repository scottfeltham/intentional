# Intentional Group Website

The website for The Intentional Group, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Business Divisions

- **Intentional Development** - Development management and project management
- **Intentional Interiors** - Design and build fitout services
- **Intentional Education** - Educational programmes and consulting
- **Intentional Landscaping** - Professional landscaping via DXB Tree Specialists and Upgraded Landscaping

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
npm run build
```

The built site will be in the `dist` directory.

## Site Structure

```
intentional/
├── src/
│   ├── layouts/
│   │   └── Layout.astro           # Main layout with header/footer
│   ├── components/
│   │   ├── StructuredData.astro   # JSON-LD structured data
│   │   └── GoogleAnalytics.astro  # Analytics
│   ├── content/
│   │   └── businesses/            # Business page content (Markdown)
│   │       ├── intentional-development.md
│   │       ├── intentional-interiors.md
│   │       ├── intentional-education.md
│   │       └── intentional-landscaping.md
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── 404.astro              # Error page
│   │   ├── businesses/
│   │   │   └── [slug].astro       # Dynamic business pages
│   │   └── events/
│   │       └── inclusion-celebration.astro
│   └── styles/
│       ├── style.css              # Main styles
│       └── transitions.css        # View Transition styles
├── public/
│   └── assets/                    # Static assets (images, logos)
├── astro.config.mjs               # Astro configuration
├── package.json
└── README.md
```

## Key Features

- Astro with View Transitions for smooth client-side navigation
- Scroll-triggered entrance animations
- Responsive design (mobile-friendly)
- SEO optimised with structured data and Open Graph tags
- Content collection for business pages (Markdown)
- Photo gallery with modal viewer and pagination
- Google Analytics integration

## Deployment

Deployed to GitHub Pages. Push to `main` to trigger a build.

## Contact

For questions or issues, contact: info@intentional.ae
