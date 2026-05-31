# Ratnanjali Aerospace — Homepage

A complete, responsive homepage for a drone **design + manufacturing + services** company, built with **React + Vite + Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Sections

Navbar · Hero · Trusted-by strip · Core Capabilities · Drone Fleet · What We Do (Design / Manufacturing / Services) · Technology · Industries We Serve · How We Work (process) · Stats · Testimonials · CTA · Footer.

## Brand

- **Colors** — gold palette sampled from the Ratnanjali logo (`tailwind.config.js`):
  pale `#F0E4C0`, core `#D8C090`, mid `#CCB484`, deep `#927D50`; dark surfaces `#0a0c10` / `#14161d`.
- **Fonts** — Orbitron (display / hero) + Montserrat (body), loaded in `index.html`.
- **Logo** — inline SVG in `src/components/Logo.jsx`.

## Images

All photos are free-for-commercial-use Unsplash links, centralised in `src/data.js` (`IMG`).
Swap any entry there for your own product photography — the rest of the site updates automatically.

## Structure

```
src/
  data.js                 # all content + image URLs (edit copy here)
  App.jsx                 # section composition
  index.css               # Tailwind layers + brand helpers
  components/
    Logo.jsx  Navbar.jsx  Hero.jsx  TrustedBy.jsx
    Capabilities.jsx  Fleet.jsx  Services.jsx  Technology.jsx
    Industries.jsx  Process.jsx  Stats.jsx  Testimonials.jsx
    CTA.jsx  Footer.jsx
```
