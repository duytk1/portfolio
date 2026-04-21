# Portfolio - David Truong

Personal portfolio site built with **React** and **Vite**. It showcases projects with descriptions, tech tags, a feature image carousel, embedded demo videos in a modal, and links to GitHub and contact details in the header.

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)
- npm (bundled with Node)

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server (with hot reload):

```bash
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Local development server             |
| `npm run build`| Production build to `dist/`          |
| `npm run preview` | Serve the production build locally |

## Deploy to GitHub Pages

Deploying is **push to GitHub** only. You do **not** run `npm run deploy` or publish the `dist/` folder yourself.

1. **One-time:** In the repo on GitHub, go to **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch” on your source code).
2. **Each update:** Commit and push to **`main`** or **`master`**. The workflow **Deploy to GitHub Pages** runs `npm ci`, `npm run build`, and publishes **`dist/`**.
3. **Optional:** **Actions** tab → **Deploy to GitHub Pages** → **Run workflow** to redeploy without a code change.
4. Approve the **`github-pages`** environment the first time GitHub asks.

For a **`username.github.io`** repository, the live site is **`https://username.github.io/`**. Local checks: `npm run build` then `npm run preview`.

## Project layout

- `src/App.js` — Page content: projects data, header, project cards, video modal
- `src/index.css` — Global and component styles
- `src/main.js` — React entry point
- `index.html` — HTML shell

## Static assets (images & videos)

The app references files under **`/images/...`** and **`/videos/...`**. With Vite, put those files in a **`public`** folder at the repo root so they are served from the site root, for example:

- `public/images/` — screenshots, flag icon, etc.
- `public/videos/` — demo MP4s

If those folders are missing, create them and add the assets your `App.js` paths expect.

## Customization

- **Projects:** Edit the `projects` array in `src/App.js` (title, description, features, image paths, tags, GitHub URL, video path).
- **Contact:** Update `CONTACT_EMAIL`, `CONTACT_EMAIL_SUBJECT`, phone, and header copy in `src/App.js`.
- **Page title:** Edit `<title>` in `index.html`.

## License

Private project; all rights reserved unless you choose to add an open license.
