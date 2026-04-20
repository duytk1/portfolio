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

## Project layout

- `src/App.jsx` — Page content: projects data, header, project cards, video modal
- `src/index.css` — Global and component styles
- `src/main.jsx` — React entry point
- `index.html` — HTML shell

## Static assets (images & videos)

The app references files under **`/images/...`** and **`/videos/...`**. With Vite, put those files in a **`public`** folder at the repo root so they are served from the site root, for example:

- `public/images/` — screenshots, flag icon, etc.
- `public/videos/` — demo MP4s

If those folders are missing, create them and add the assets your `App.jsx` paths expect.

## Customization

- **Projects:** Edit the `projects` array in `src/App.jsx` (title, description, features, image paths, tags, GitHub URL, video path).
- **Contact:** Update `CONTACT_EMAIL`, `CONTACT_EMAIL_SUBJECT`, phone, and header copy in `src/App.jsx`.
- **Page title:** Edit `<title>` in `index.html`.

## License

Private project; all rights reserved unless you choose to add an open license.
