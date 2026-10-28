# Cris Handwriting — the owner's portfolio as a notebook page, in his own handwriting font

The shelf's second real-content template (after cris-home): Cristobal's actual portfolio, redesigned as a ruled notebook sheet on a dark plum desk, with every display line set in **Cris Handwritten**, the font traced from his own handwriting.

## The font

- Source repo: [dalecri/handwriting](https://github.com/dalecri/handwriting) — "Cris Handwritten" v1.0, traced from two handwritten alphabet photographs. TTF and OTF included there, plus install notes.
- In this template the TTF is **embedded as a base64 `@font-face` data URI**, so the single HTML file renders the handwriting anywhere with no extra requests. Space Mono (Google Fonts) carries everything else.
- **Character coverage warning (read before editing copy):** v1.0 covers uppercase, lowercase, digits, and selected punctuation. Among printable ASCII it has no `$ * < > [ \ ] ^ `` ` `` { | } ~`. Any character the font lacks will silently fall back to a different font mid-word, which looks broken in handwriting. Keep every `.hand` string inside the covered set, and audit new strings against the font's cmap before shipping. Accented letters are unverified in v1.0; the current copy avoids them in handwritten text.

## How the page works

- `index.html` is the whole template (about 50 KB, most of it the embedded font). Desk ground, paper sheet, ink, and accent are CSS variables on `:root`.
- **Ink switcher:** three dots in the nav set `--ink` (indigo, plum, sepia), which recolours every handwritten element at once, squiggles included.
- **Squiggle underlines:** inline SVG paths under key phrases draw themselves when scrolled into view (IntersectionObserver); with `prefers-reduced-motion` they render fully drawn and static.
- **Index-card projects:** the six project cards carry a tape strip, alternating slight rotations, and straighten on hover. The layout otherwise follows the standard order (hero, experience, projects, writing, about, contact) because the concept here is the type, not the structure.
- Copy-email buttons write `workwithcristobal@gmail.com` to the clipboard and report back in place.

## Reusing it

1. Swap the font: replace the data URI with your own handwriting font (any TTF/OTF), and change the `--hand` family name if yours differs. Without a personal font, the design still works with a cursive fallback, but the font is the point.
2. Replace the content sections; keep handwritten strings short (titles, statuses, asides) and inside the font's character coverage, and let the mono face carry paragraphs, dates, and anything with symbols.
3. The margin note and signature are part of the voice; keep them, rewrite them in first person.
