# Intentional Group Website

This is the Jekyll-based website for The Intentional Group, featuring two business divisions:
- **Intentional Fitout** - Established fitout services for offices and schools
- **Intentional Education** - Growing educational consulting and services division

## Getting Started

### Prerequisites
- Ruby (version 2.7 or higher)
- Bundler gem

### Installation

1. Install dependencies:
```bash
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Visit `http://localhost:4000` in your browser

### Building for Production

To build the site for deployment:
```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Site Structure

```
intentional/
├── _config.yml              # Site configuration
├── _layouts/                # Page layouts
│   ├── default.html        # Main layout with header/footer
│   └── business.html       # Business page layout
├── _businesses/             # Business division pages
│   ├── intentional-fitout.md
│   └── intentional-education.md
├── assets/
│   └── css/
│       └── style.css       # Site styles
├── index.html              # Homepage
├── Gemfile                 # Ruby dependencies
└── README.md              # This file
```

## Customization

### Adding Content
- Edit `index.html` to modify the homepage
- Edit files in `_businesses/` to update business division pages
- Modify `_config.yml` to change site-wide settings

### Styling
- Edit `assets/css/style.css` to customize the design
- Colors are defined as CSS variables in the `:root` selector

### Contact Information
Update email addresses in:
- `_config.yml` for the main site email
- Each business page's front matter for division-specific emails

## Deployment

This site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages, enable it in your repository settings and point to the `main` branch.

## Features

- Responsive design (mobile-friendly)
- Clean, professional layout
- SEO-optimized
- Fast loading times
- Easy to maintain and update

## Support

For questions or issues, contact: info@intentional.ae
