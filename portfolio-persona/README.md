# Portfolio, Persona Edition — the ASCII portfolio template with a fictional person

The ASCII portfolio template (botanical koi pond hero, vibe studio, full portfolio sections) with every detail belonging to an invented persona, so the page can be shown, shared, and reused anywhere without pointing at a real person's life.

## The persona (fictional)

**Marisol Vega**, a Halifax-based senior product designer and front-end builder. Senior Product Designer at the (also fictional) Northwind Studio, previously community and content lead at Harbourlight Retail. She ships one tiny tool a month under @marisolmakes: Nook, Ember Reader, Motnest, Sprout Timer, Task Garden, Caption Fox. Contact: hello@marisolvega.design (a placeholder address; the domain is part of the fiction).

## What makes it the persona edition

- All copy: hero intro, the three experience case studies, six project cards, four writing rows, about text, the experience/education timeline, toolbox chips, and the contact block were rewritten for Marisol. Layout, classes, and structure are untouched.
- The hero photo is replaced with a pixel person placeholder: `assets/marisol-pixel.svg`, a 16x16 grid portrait (dark hair, gold earrings, rust sweater, plum ground) drawn as crisp SVG rects. It is a stand-in for now; drop a real portrait data URI or image path into that `img` src when adapting.
- Links that pointed at real places (live demos, LinkedIn, the writing section) now point at `#` or at in-page anchors. The copy-email helper in `js/app.js` uses Marisol's placeholder address.
- A grep for the original person's name, employers, projects, and accounts across `index.html`, `css/`, and `js/` comes back empty. Keep it that way when editing.

## Reusing it

1. Rename the persona: find and replace `Marisol Vega`, `marisolvega`, `Northwind Studio`, and `Harbourlight Retail` with your real ones.
2. Swap the six project cards and four writing rows for real work; keep the card markup.
3. Set a real email in two places in `js/app.js` (the `protoCopyEmail` helper and the clipboard fallback) and in the visible contact text.
4. Mechanics to know: Tailwind comes via CDN; picking a pond palette in the ASCII Pond Studio (Lotus Pond / Sakura / Biolum) re-themes the whole page via `body[data-pond-theme]` rules, and the pond's 15px cell grid runs down the page background so hero and sections read as one sheet.

Preview: serve this folder (e.g. `python3 -m http.server`) and open index.html, or just open index.html in a browser.
