# Portfolio - David Truong

Personal portfolio: **Vite + React** with HTML-like **JSX** in `src/portfolio.jsx`. Project copy lives in `src/projects.js`.

## Local development

```bash
npm install
npm run dev
```

## Production build (matches GitHub Pages output)

```bash
npm run build
npm run preview
```

## Troubleshooting

If the console mentions **`Unexpected token '<'`** on a `.js` file, the browser is often loading an **HTML 404** as JavaScript (wrong base URL or an old deploy). Confirm **GitHub Actions** has deployed the latest commit and try a **hard refresh** (Ctrl+Shift+R).

## Deploy (GitHub Pages)

1. **One-time:** **Settings → Pages → Source:** **GitHub Actions**.
2. **Push** to `main` or `master`. The workflow runs `npm ci`, `npm run build`, and publishes the **`dist/`** folder.

## Edit content

- **Projects & contact:** edit `src/projects.js` (`projects` array and `CONTACT_EMAIL` constants).
- **Page structure (HTML-like JSX):** edit `src/portfolio.jsx`.
- **Styles:** edit `styles.css`.
- **Document shell / title:** edit `index.html`.

## Assets

Put images and videos where paths in `src/projects.js` expect them, for example:

- **`images/`** at the repo root (recommended), or **`public/images/`** (merged into the live site as `images/`).
- **`videos/`** or **`public/videos/`** the same way.

Paths like `images/screenshot.png` are **relative to the site root** in the built output so they work on GitHub Pages and locally.

## License

Private project; all rights reserved unless you choose to add an open license.
