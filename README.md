# CarrNexa Website UI

**Density. Performance. No Abstraction.**

The official website UI for [CarrNexa](https://carrnexa.com). This is a high-performance, static site built without heavy UI frameworks. It prioritizes **Time-to-Information** and **Architectural Transparency** over cosmetic fluff.

## Philosophy

- **McMaster-Carr Standard**: We value information density and speed above all else.
- **Zero Runtime Overhead**: No client-side hydration, no virtual DOM, no heavy bundles. We ship raw HTML, CSS, and minimal JS.
- **Systems Thinking**: The website UI is treated as a compiled artifact, not a dynamic application.

## Architecture

This project uses **Vite** in Multi-Page App (MPA) mode to act as a modern build tool for static files.

### The Hybrid Asset Pipeline

We strictly separate assets based on their consumption model:

1. **Source (`src/assets/`)**:
    - **Content**: Fonts, Styles, Scripts.
    - **Behavior**: Processed by Vite. These are hashed (`file.a8f2.css`) for aggressive cache-busting.
    - **Performance**: Fonts are preloaded in critical paths to prevent layout shifts.

2. **Public (`public/assets/`)**:
    - **Content**: Favicons, Manifests, Robots.txt, Open Graph Images.
    - **Behavior**: Copied verbatim to the build root.
    - **Reasoning**: These require stable, predictable URLs for external consumers (crawlers, OS UIs) that cannot parse hashed filenames.

### Dark Mode Strategy

To prevent the common "Flash of Unstyled Content" (FOUC), theme logic is executed:

1. **CSS Layer**: `@media (prefers-color-scheme)` handles the default state before JS loads.
2. **Blocking JS**: A minimal script in `<head>` resolves the user's local override before the `<body>` renders.

## Development

### Prerequisites

- **Node.js**: v20 or higher
- **Package Manager**: npm (or pnpm/yarn)

### Getting the Code

If you don't already have a local copy of the code, clone the repository and move into the working directory

```bash
git clone git@github.com:carrnexa/www-ui.git
cd www-ui
```

### Setup

From the repository root, install the dependencies:

```bash
npm install
```

### Running and Building

The following commands are available for development and production workflows:

```bash
# Start the dev server (Hot Module Replacement)
npm run dev

# Build for production (Outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Directory Structure

```text
/
├── public/              # Stable assets (copied to dist root)
├── src/                 # Application source
│   ├── assets/          # Hashed assets (Fonts/Images)
│   ├── legal/           # License & Policy HTML
│   ├── scripts/         # JS Modules
│   ├── styles/          # CSS
│   ├── 404.html         # Error page
│   └── index.html       # Entry point
└── vite.config.js       # Build configuration
```

## Licensing

This repository uses a **Dual-License Model** to strictly separate technology from brand identity.

### 1. Source Code ([MIT License](./LICENSE-CODE))

**Applies to**: `.html`, `.css`, `.js`, build configurations, and structural logic.

The underlying engineering and code patterns are open for educational use and adaptation. You are free to use this architecture to build your own high-performance site.

### 2. Content ([CC BY-NC 4.0](./LICENSE-CONTENT))

**Applies to**: Articles, Essays, Logos, Brand Assets, and Visual Design.

You may adapt and share this content for non-commercial purposes, provided you give appropriate credit and indicate if changes were made.
