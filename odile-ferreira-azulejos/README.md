# Odile Ferreira — Ceramics, Lisbon

A tile painter's portfolio built around one hand-painted azulejo the visitor can turn: one tile, rotated four ways, becomes the wall.

## The persona (fictional)

**Odile Ferreira**, a ceramicist in Alfama, Lisbon, painting azulejos by hand since 2014: cobalt oxide on tin-white glaze, fired in a small electric kiln three streets above the Tejo. Her studio takes commissions each spring (lead time 6–10 weeks per panel, ships crated within the EU). Contact is a placeholder address (studio@odileferreira.example). Odile and her work are invented for this template.

## How the page works

- `index.html` is the whole template in one file (12,521 bytes), plus `AlphaLyrae-Medium.woff2` self-hosted in the folder for the headings; Space Mono comes from Google Fonts. Live Lisbon weather comes from Open-Meteo (coordinates 38.7139, -9.1334), no API key, and the page degrades gracefully if the fetch fails.
- **The tile interaction:** the featured technique drives the page. A single painted tile sits in the hero; clicking it rotates it a quarter turn, and Shuffle and Mirror controls rearrange the pattern, showing how one tile generates the whole wall of work below.
- The process section follows her real sequence in four steps: bisque, glaze, pounce (charcoal through a pricked stencil), paint.
- Dark ground, one cobalt accent drawn from her glaze, local-first: no accounts, no tracking, the footer says so.

## Reusing it

1. Swap the persona: name, city, statement, and the work patterns.
2. Keep the tile-rotation logic intact; the patterns are data in the page.
3. If the new persona's city matters to the page, point the Open-Meteo fetch at its coordinates.
