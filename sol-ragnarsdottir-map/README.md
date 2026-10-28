# Sól Ragnarsdóttir Map — a portfolio arranged as a map, from the Landing Template prompt

This template was built from the **Landing Template** prompt in Cris's vault (four inputs: persona, craft, city, one design technique; no standard formula). The technique here is an **ASCII-textured map**: the portfolio is a map of Iceland, and the projects are numbered pins on it.

## The persona (fictional)

**Sól Ragnarsdóttir**, cartographer in Reykjavík, Iceland. Opening statement: "Maps of Iceland drawn slowly enough to read for pleasure, and accurately enough to walk by." Five projects (Hraun Sheets; Tide Atlas; The Long Way North; Retreat Lines; Unofficial Names), a short about, and a contact line with a placeholder email (sol@example.com). Sól and her work are invented for this template.

## How the page works

- `index.html` is the whole template in one file. The only external calls are Google Fonts (Space Mono) and the Open-Meteo weather fetch (no key).
- **The P object:** at the top of the script, a config block holds the four inputs (`name`, `craft`, `city` + `lat`/`lon`, `technique`) plus the filler (`statement`, `about`, `email`, `contactTail`) and the `projects` array. Each project has `x`/`y` coordinates (0 to 1) that place its pin on the map.
- **Pins and legend are built from the same data:** the map gets numbered pins, the aside gets the matching numbered legend; hovering or selecting either side highlights the other.
- **Live local weather:** the header fetches current weather for the persona's coordinates from Open-Meteo, like the other live templates, and degrades gracefully if it fails.
- The canvas draws the ASCII texture (noise-based) under the map; `prefers-reduced-motion` stills it.

## Reusing it

1. Edit the P object: new persona, craft, city, coordinates, and technique word.
2. Replace the projects array; set each pin's `x`/`y` by eyeballing where it should sit on the map (0,0 is top-left).
3. The layout deliberately avoids the hero-and-cards ladder: statement first, then the map and legend, then about and contact. Keep that order when adapting; it is the template's whole point.
