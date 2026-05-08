# CSS Interactive Learning

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/ESLint-config-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

An interactive React frontend to **learn and experiment with CSS layout**. It currently includes:
- **Flexbox Visualizer**: tweak flex properties and see the result instantly.
- **Grid Visualizer**: experiment with grid templates, auto-flow, alignment, gaps, and presets.

The UI is optimized for learning: it shows the live preview and the generated CSS side-by-side, includes presets, and provides inline tooltips for every control.

---

## Demo

- **Live demo**: https://css-interactive-learning.vercel.app/

## Features

- **Interactive visualizers**
  - Flexbox: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`, and item count
  - Grid: `grid-template-columns/rows`, `grid-auto-*`, `grid-auto-flow`, gaps, and alignment controls
- **Live preview + CSS output panel**
- **Presets** to jump-start common layouts
- **Preview size presets (W/H)** above the preview to simulate different viewports and wrapping behavior
- **Sticky preview & code panels** (desktop) while controls scroll naturally
- **Inline info tooltips** beside each control (beginner-friendly)
- **Responsive layout** for smaller screens

---

## Tech stack

- **React 19** (UI)
- **Vite** (dev server + production builds)
- **React Router DOM** (client-side routing)
- **Vanilla CSS** (component/page scoped CSS files imported into components)
- **ESLint** (basic code quality)

---

## Project structure

```txt
.
├─ public/                 # Static assets (favicons, screenshots, etc.)
├─ src/
│  ├─ components/
│  │  ├─ flexbox/          # Flexbox visualizer components
│  │  ├─ grid/             # Grid visualizer components
│  │  └─ ui/               # Reusable UI bits (e.g., InfoTip tooltip)
│  ├─ pages/               # Route-level pages (Home, Flexbox, Grid)
│  ├─ App.jsx              # Router + top-level app composition
│  ├─ main.jsx             # React entry point
│  ├─ index.css            # Global styles / tokens
│  └─ App.css              # App-level styles
├─ index.html
├─ vite.config.js
└─ package.json
```

---

## Installation

Requirements:
- Node.js (LTS recommended)
- npm (ships with Node)

```bash
npm install
```

---

## Run locally

```bash
npm run dev
```

Then open the URL printed in your terminal (typically `http://localhost:5173`).

---

## Available scripts

From `package.json`:

- **Dev server**

```bash
npm run dev
```

- **Production build**

```bash
npm run build
```

- **Preview production build locally**

```bash
npm run preview
```

- **Lint**

```bash
npm run lint
```

---

## Environment variables

This project currently works **without any required environment variables**.

If/when you add environment config, Vite exposes only variables prefixed with `VITE_`.

Example `.env` (create a `.env.local`, do not commit secrets):

```bash
# API base URL for future backend integration
VITE_API_BASE_URL="http://localhost:3000"

# Optional: enable/disable experimental UI
VITE_FEATURE_FLAGS="previewSizing,tooltips"
```

---

## Build & production

- Build output is generated into `dist/`:

```bash
npm run build
```

- To validate the production bundle locally:

```bash
npm run preview
```

Deployment options:
- **Static hosting** (recommended): Vercel, Netlify, GitHub Pages, Cloudflare Pages
- Since this is a SPA, ensure your host is configured to **serve `index.html` for unknown routes** (client-side routing).

---

## API integration

There is **no backend API dependency** today — the visualizers run entirely client-side.

If you integrate an API in the future (e.g. save presets, user progress, shareable links), a simple approach:
- Put an API client under `src/services/` or `src/api/`
- Read a base URL from `import.meta.env.VITE_API_BASE_URL`
- Keep calls isolated (no fetch scattered across UI components)

---

## State management

- Current approach: **local component state** via React `useState`.
  - Example: each visualizer page owns its state (`FlexboxPage.jsx`, `GridPage.jsx`) and passes it down to controls/preview/code panels.
- This keeps things intentionally simple and easy to understand for learners.

When the app grows, you can evolve to:
- `useReducer` for complex interactions
- URL query params for shareable layouts
- A small store (Zustand/Redux) only if needed

---

## Styling

- Styling is done with **plain CSS** files imported per component/page (e.g. `src/pages/*.css`, `src/components/**/**.css`).
- This keeps the project lightweight and readable without a CSS framework.

If you later adopt a system:
- Tailwind for rapid UI iteration
- CSS Modules for stronger encapsulation
- Styled Components / Emotion for JS-driven styling

---

## Responsive design

- The layout adapts under ~900px width (controls/preview/code stack vertically).
- Sticky behavior is disabled on small screens for a natural mobile scroll experience.

---

## Performance

Current optimizations (by design):
- **Minimal dependencies** (fast installs, smaller bundles)
- **Vite** dev server + production bundling
- Lightweight UI with straightforward rendering

Potential next steps:
- Add route-level code-splitting (`React.lazy`) for larger feature sets
- Add memoization where necessary if controls become more complex

---

## Future improvements

- More CSS topics (Positioning, Box Model, Display)
- Shareable URLs (serialize state to query params)
- Exportable snippets / “copy CSS” button
- Item-level controls for Grid (e.g. per-item `grid-row`/`grid-column`)
- A11y polish for tooltips (richer content + better placement)
- Persist user settings (localStorage)

---

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-change`
3. Install deps: `npm install`
4. Run locally: `npm run dev`
5. Run lint before pushing: `npm run lint`
6. Open a PR with a clear description and screenshots (if UI changes)

---

## License

Add a license file and update this section. Common choices:
- MIT
- Apache-2.0

Until then: **All rights reserved** (default).
