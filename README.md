# Rigahvisuals — React site

A photography &amp; cinematography portfolio, rebuilt as a small React app so
it's easy to maintain and grow. Same design as the static version, but the
content now lives in one file and the layout is built from reusable
components instead of five separate HTML pages.

## Run it

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edits hot-reload instantly.

To build for deployment:

```bash
npm run build
```

This outputs a `dist/` folder — that's what you upload to Netlify, Vercel,
GitHub Pages, or any static host.

## How it's organized

```
src/
  data/content.js     ← All site text and work items live here
  components/
    Nav.jsx           ← Top nav, click-responsive mobile menu
    Footer.jsx
    WorkCard.jsx       ← One reusable thumbnail card (used on 3 pages)
    FilterBar.jsx      ← Responsive filter chips (Photography page)
  pages/
    Home.jsx
    Photography.jsx
    Films.jsx
    About.jsx
    Contact.jsx
  App.jsx              ← Routes + shared Nav/Footer wrapper
  index.css            ← All styling (same design system as before)
public/
  images/              ← Placeholder images — swap these for real photos
```

## The main thing that makes this scale: `src/data/content.js`

Every project, film, stat, and process step is an object in an array in this
one file. To add a new photo to the gallery, for example, you don't touch
any component or HTML — just add a line:

```js
export const photography = [
  // ...existing items
  { id: 'new-shoot', title: 'New Shoot', category: 'portrait', image: '/images/photo-10.jpg' },
]
```

It'll automatically show up in the grid, respond to the category filter, and
use the shared card styling — because `Photography.jsx` just loops over this
array with `<WorkCard>`. Same pattern for `featuredWork` (home page reel)
and `films`.

## Swapping in real images

Drop your images into `public/images/` and either reuse the existing
filenames (`photo-1.jpg`, `film-1.jpg`, etc.) or add new ones and update the
`image:` path in `src/data/content.js`.

## Adding a new page

1. Create `src/pages/NewPage.jsx`
2. Add a `<Route path="/new-page" element={<NewPage />} />` in `App.jsx`
3. Add a link to it in `src/components/Nav.jsx`

## Editing studio info (email, socials, tagline)

All in the `studio` object at the top of `src/data/content.js` — one place,
used everywhere it appears (nav, footer, contact page, etc.).
