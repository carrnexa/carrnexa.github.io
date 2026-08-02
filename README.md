# CarrNexa Website UI

This repo contains the public CarrNexa site.

The site is built with Astro, static output, shared layouts, and a small amount of client-side JavaScript for theme state and similar low-cost behavior. The goal is simple: keep pages fast, easy to inspect, and easy to extend without turning the whole frontend into a client-heavy app.

## Approach

- Build static HTML by default.
- Keep shared page chrome in layouts and components instead of copying it into every page.
- Use browser-side JavaScript only where the browser actually needs to do work.
- Keep future private or data-heavy features isolated so public pages do not pay for them.

## Architecture

Astro is used as a build-time composition layer. It gives the site reusable layouts and components while still shipping static pages.

### Asset model

1. **Source (`src/`)**
    - Astro pages, layouts, components, styles, and scripts.
    - Imported assets are fingerprinted at build time for cache busting.

2. **Public (`public/`)**
    - Stable URL assets such as icons, manifests, and crawler-facing files.
    - Files are copied as-is to the build output.

### Theme behavior

Theme handling stays small and explicit:

1. CSS defines the system-preference default.
2. An inline head script applies any saved override before the page renders.
3. A small module updates the toggle, current year, and `theme-color` meta tag after load.

### Future direction

Public pages should stay static.

Authenticated or data-heavy features can sit behind the same site and call backend APIs without forcing the entire frontend into a single-page app. If a future page genuinely needs richer interactivity, add it as a targeted island instead of making hydration the default.

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
npm install
```

### Commands

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run format
npm run format:check
```

## Directory Structure

```text
/
├── public/              # Stable public assets copied as-is
├── src/
│   ├── assets/          # Imported assets fingerprinted by the build
│   ├── components/      # Shared page chrome
│   ├── config/          # Shared site metadata and links
│   ├── layouts/         # Reusable page shells
│   ├── pages/           # Astro file-based routes
│   ├── scripts/         # Small browser-side modules
│   └── styles/          # Global styles and design tokens
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # Astro config and source aliases
```

## Licensing

This repo uses a split license model.

- Source code is licensed under the [MIT License](./LICENSE-CODE).
- Site content and brand assets are licensed under [CC BY-NC 4.0](./LICENSE-CONTENT), unless a file says otherwise.

The website also publishes a separate CarrNexa proprietary source-available license used by other CarrNexa software. It does not replace this repository's own LICENSE files.

- [Site licenses](./src/pages/legal/site-licenses.astro): overview page for this repo's code/content licenses plus related CarrNexa license references.
- [CarrNexa proprietary license reference](./src/pages/legal/license.astro): stable page for software that points at the CarrNexa source-available license.
