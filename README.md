# @MIKS — UX/UI Designer Portfolio (React)

A personal portfolio website for **Michaela Denise Ong (Mikay)**, a 3rd-year BS Computer Science student at Tangub City Global College (TCGC) and Treasurer of the Institute of Student Council. The site showcases her student leadership journey, creative work, and the projects she has built along the way.

**Live site:** https://mikay11.github.io

---

## Stack

- **React 19** — the user interface is built from components in `src/`
- **Vite 8** — development server and production bundler
- **React Router 7** — client-side routing for Home, About, Work, Contact, and detail pages
- **CSS** — custom layout, animations, and the pink-ink, dot-accent aesthetic
- **Google Fonts** — Anton, Instrument Serif, and Space Grotesk

## Pages

| Page | React file | Description |
|------|------------|-------------|
| **Home** | `src/pages/Home.jsx` | Hero intro, marquee, what she does, and featured work |
| **About** | `src/pages/About.jsx` | Bio, photo slider, stats, skills, leadership timeline, and fun facts |
| **Work** | `src/pages/Work.jsx` | Filterable gallery of leadership, make-up, video, affiliate, and UI/UX work |
| **Contact** | `src/pages/Contact.jsx` | Email, phone, location, social links, and message form |
| **Services** | `src/pages/DetailPage.jsx` | Dynamic detail pages from `src/data/pages.js` |
| **Projects** | `src/pages/DetailPage.jsx` | Dynamic detail pages from `src/data/work.js` |

## How to tell this is a React site

- `package.json` has `react`, `react-dom`, and `react-router-dom`.
- `index.html` only contains `<div id="root"></div>` and a script for `src/main.jsx`.
- `src/main.jsx` calls `createRoot(...)` to render `<App />`.
- Files under `src/pages/` and `src/components/` end in `.jsx`.
- The GitHub workflow builds `dist/` and publishes it with GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite, usually `http://localhost:5173`.

Other commands:

```bash
npm run build
npm run lint
npm run preview
```

`npm run build` creates `dist/`. The `postbuild` script also creates `dist/404.html` so React Router links still work on GitHub Pages.

## Deploy to GitHub Pages

The repo name is exactly `mikay11.github.io`, so the root Pages URL is:

https://mikay11.github.io

1. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`.
3. `.github/workflows/pages.yml` checks out the code, runs `npm ci`, builds the React app, uploads `dist/`, and deploys it to Pages.

GitHub Pages serves static files only. This portfolio needs no server code; all interactions happen in the browser.

---

© Michaela Denise Ong. All rights reserved. — Coffee or tea?
