# Priya Nair Weather Pond — personal portfolio template over the live Weather Pond

A **personal** portfolio landing page (no prices, no services, nothing to buy) for a fictional freshwater ecologist, built on the **Weather Pond** engine from the ASCII-VISUAL-PROJECTS collection. The ASCII pond behind the glass panels shows the persona's town's **real current weather**, fetched live from Open-Meteo: rain stipples the surface, snow quiets the koi, storms bring the rare lightning pulse.

## The persona (fictional)

**Priya Nair**, 34, freshwater ecologist in Guelph, Ontario, studying the city's stormwater ponds. Sections: a hero ("Ponds keep the weather's diary.") with a live-weather chip, Work & Survey Records (After the Rain; The Frog Call Index; The Inlet Atlas), Field notes, a Now list, About the Researcher, The long way here (2013–2024), and a "Write to Priya" close with a fictional email address. Priya and her history are invented for this template.

## What's inside

- `index.html` — the whole template in one file: the weather pond engine (character-grid pond, ASCII koi, click ripples, precipitation particles, WMO weather-code behaviours) fixed behind the content, plus all sections as plain HTML.
- The only external dependencies are Google Fonts (Space Mono) and the Open-Meteo API (no key). The page degrades gracefully offline: calm-clear pond, fallback chip text.

## Key settings

- **Location:** the fetch URL in the script uses Guelph (latitude 43.5448, longitude -80.2482, timezone America/Toronto) and refetches every 15 minutes. Change the coordinates and timezone to move the pond.
- **Pond pill (bottom right):** Live (default; the fetched weather), Clear, Rain, Snow, Storm, and Pause. Manual choices override the fetch until Live is pressed again.
- **Content over canvas:** the wrapper uses `pointer-events: none` with `auto` restored on panels and interactive elements, so clicks still reach the water over empty areas. Keep that structure when editing.
- `prefers-reduced-motion` renders one static frame; lightning never fires in that mode; the loop pauses when the tab is hidden.

## Reusing it

1. Replace Priya's name, town (in the copy AND the fetch coordinates), projects, notes, and path with your own person.
2. The weather chip under the hero CTAs has two strings in the script: the live readout and the unreachable fallback. Keep both honest.
3. Built from the prompt saved as `weather-pond-portfolio-normal-prompt-oct-27.md` (in the workspace files), itself adapted from the collection's weather_pond piece. A second, deliberately un-formulaic Weather Pond design (Dot Ellery's dock scene) exists as a prompt too: `weather-pond-portfolio-prompt-oct-27.md`.
