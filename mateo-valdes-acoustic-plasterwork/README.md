# Mateo Valdés — Acoustic Plasterwork

A craftsman's portfolio built around an interactive ASCII acoustic chamber: the plaster itself is the demo.

## The persona (fictional)

**Mateo Valdés**, an acoustic plasterworker in Barrio de Jalatlaco, Oaxaca de Juárez, who formulates porous mineral renders from slaked Sierra Madre limestone, volcanic pumice, and chopped maguey fiber, every wall troweled to a site-specific thickness tuned to absorb the room's standing frequencies. Five works (a mezcalería vault, a sound archive listening library, a reading room, a print shop ceiling, a chapel annex), each listed with its tuned frequency and RT60 target. Contact as written in the template: mateo@valdesyeso.mx. Mateo and his works are invented for this template.

## How the page works

- `index.html` is the whole template in one file (19,840 bytes). External calls: Google Fonts (Space Mono) and the Open-Meteo weather fetch (no key). Not fully self-contained for that reason.
- **The chamber:** a canvas ASCII simulation of the render with switchable chamber modes and a porosity readout, the shelf's signature-technique slot for this persona.
- **Live weather as material weather:** the header fetches Oaxaca de Juárez's current temperature and relative humidity from Open-Meteo (17.0732, -96.7266), and the humidity factor quietly retunes the chamber's simulated absorption. If the fetch fails, the header keeps its printed fallback values.

## Reusing it

1. Swap the persona: name, statement, works list, city, and the weather coordinates at the top of the script.
2. Keep the chamber script intact; the works list and its acoustic specs are plain HTML.
