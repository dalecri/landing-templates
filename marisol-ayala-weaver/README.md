# Marisol Ayala, Weaver — a portfolio woven on a working loom draft

A weaver's portfolio whose centrepiece is not a picture of cloth but the draft itself: a four-shaft weaving drawdown rendered in ASCII on canvas, woven pick by pick by a shuttle, exactly as the threading, tie-up, and treadling dictate.

## The persona (fictional)

**Marisol Ayala**, a weaver in Oaxaca, Mexico, working on a four-shaft floor loom in cotton and local wool dyed with cochineal. Five pieces, each one a working draft: Rosepath Runner, Huipil Panel, Market Blankets, Basket Napkins, and Broken Twill Scarves. Contact is a placeholder address (hola@marisolayala.example). Marisol and her work are invented for this template. Note she is a different fictional Marisol from Marisol Vega in portfolio-persona.

## How the page works

- `index.html` is the whole template in one file (12,820 bytes). External calls: Google Fonts (Space Mono) and the Open-Meteo weather fetch (no key). Not fully self-contained for that reason.
- **The loom (`#loom` canvas):** the top band shows the threading draft (shaft 4 on top, as drafts are written, `#` on a shaft, `.` off it). Below it the drawdown weaves in real time: warp-up cells draw as `|`, weft cells as `=`, with seeded slub irregularities (`:` / `!` / `~`). A cochineal-red shuttle (`>` / `<`) lays each pick; fresh picks stay accent-red for 26 frames, then settle into the weft tone.
- **The treadles (`#treadles` buttons):** each piece is also a button carrying its real draft in data attributes (`data-threading`, `data-tieup`, `data-treadling`). Clicking one re-drafts the loom and weaves that piece from bare warp. The drawdown math is the real thing: a cell is warp-up when the tie-up for the current treadle includes the shaft the warp thread is on.
- **Live weather as loom weather:** the header fetches Oaxaca's current conditions from Open-Meteo (17.06, -96.73). Humidity thickens the slubs, wind speeds the shuttle. If the fetch fails, the header just says "Oaxaca" and the defaults hold.
- **Motion:** `prefers-reduced-motion` weaves the cloth instantly instead of animating the shuttle.
- **Palette:** warm near-black ground (`--ground` #0e0d0c), bone ink (#e9e3d7), cochineal accent (`--accent` #c4314b). Space Mono throughout. The engine reads its colours from the CSS variables, so re-theming the page re-themes the cloth.

## Reusing it

1. Swap the persona: name, statement, about paragraph, city, and the `CITY` / `LAT` / `LON` constants at the top of the script (the weather drives the loom, so pick the new city's coordinates, not just its name).
2. Replace the five treadle buttons with your own drafts, keeping the data attributes honest: threading and treadling as digit strings, tie-up as space-separated shaft groups. The button copy (name, one-line description) is the piece list.
3. Keep the structure: statement first, then the loom, then the treadles, then about and contact. The draft is the page; a photo grid would defeat it.
