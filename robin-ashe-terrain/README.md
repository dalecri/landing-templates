# Robin Ashe Terrain — portfolio landing template over the ASCII Terrain Flyover

A personal portfolio landing page for a fictional cartographer, built on the **ASCII Terrain Flyover** engine from the ASCII-VISUAL-PROJECTS collection. Endless fBm mountains drift behind the whole page at **0.2x speed** ("walking pace"), with frosted-glass panels carrying the content.

## The persona (fictional)

**Robin Ashe**, mountain cartographer in Revelstoke, British Columbia, who draws maps of places they have walked. Sections: a hello hero, Things I've made (2023 to now), From the notebook (field notes), What I'm up to this season, About me, How I got here (the path), and a "Got a mountain that needs a map?" contact close. Robin and the work history are invented for this template.

## What's inside

- `index.html` — the whole template in one file: the terrain engine (value-noise fBm, perspective rows, per-column skyline, altitude-band colours with lakes, slope shading, pointer banking) fixed behind the content, plus all sections as plain HTML.
- The only external dependency is Google Fonts (Space Mono); everything else is inline.

## Key settings

- **Speed:** search the script for `SPEED = 0.2`. That constant is the whole mood: 1 is the original flyover's cruise, 0.2 is walking pace. A small Terrain pill (bottom right) also offers 0.2x / 0.5x / 1x and Pause.
- **Content over canvas:** the wrapper uses `pointer-events: none` with `auto` restored on panels and interactive elements, so the terrain banking still responds over empty areas. Keep that structure when editing.
- `prefers-reduced-motion` renders one static frame; the loop pauses when the tab is hidden.

## Reusing it

1. Replace Robin's name, place, and sections with your own person; the section ids are `#hello`, `#work`, `#notes`, `#now`, `#about`, `#path`, `#write`.
2. To retune the landscape, the altitude band thresholds (0.28 / 0.45 / 0.65 / 0.82) and their hex colours live together in the render section of the script.
3. Built from the prompt saved as `terrain-landing-prompt-oct-27.md` (in the workspace files), itself adapted from the collection's ascii-terrain-flyover piece.
