# Chris Kariuki Mungai — Academic Portfolio

A responsive, accessibility-first portfolio website for global college applications.

**Live site:** [iammusic67.github.io/my-website](https://iammusic67.github.io/my-website)

## About

This portfolio showcases my journey as a self-taught developer from Nairobi, Kenya, pursuing a Computer Science degree. It highlights my work in education technology and financial inclusion, including my flagship project [Stemlift Africa](https://github.com/Iammusic67/stemlift-africa).

## Features

- **Data-driven architecture** — All content lives in a single `content.js` file; no HTML/CSS editing needed to update
- **Responsive design** — Works across desktop, tablet, and mobile
- **Accessibility-first** — Skip links, ARIA labels, keyboard navigation, focus-visible states, reduced-motion support
- **Scroll-reveal animations** — Sections fade in on scroll using IntersectionObserver
- **Animated SVG hero** — Dynamic ascent graphic with animated bars
- **SEO-ready** — Open Graph tags, structured data (JSON-LD), semantic HTML

## Tech Stack

- HTML5 (semantic)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono)

## Project Structure

```
my-website/
├── index.html                 # Main page
├── assets/
│   ├── css/
│   │   └── style.css          # All styles with design tokens
│   ├── js/
│   │   ├── content.js         # Edit this to update site content
│   │   └── main.js            # Renders content, handles interactions
│   └── certificates/          # Upload certificate PDFs here
└── README.md
```

## How to Update

1. Edit `assets/js/content.js` — change any text, add projects, update skills
2. Upload certificate PDFs to `assets/certificates/`
3. Commit and push — GitHub Pages auto-deploys

## Deployed Via

GitHub Pages (auto-deploys from `main` branch)
