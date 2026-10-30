# Soren Lindqvist — Cyanotype, Bergen

A cyanotype atelier's portfolio with a working exposure bench: coat the paper, hold it under the sun, and watch the blueprint develop, timed by Bergen's real sky.

## The persona (fictional)

**Soren Lindqvist**, a ferric photogram and architectural cyanotype maker working from a converted 19th-century boathouse in Sandviken, Bergen. He coats 310gsm Hahnemühle Platinum Rag with ferric ammonium citrate and potassium ferricyanide, presses it under maritime glass with pressed kelp, Nordic ferns, and architectural mylar drafts, and lets ultraviolet light do the developing: coastal flora and timber elevations fixed in iron salt and North Sea light. Soren and his work are invented for this template. (No relation to the shelf's other Soren Lindqvist, the acoustic diffuser builder; the builders keep reusing the name.)

## How the page works

- `index.html` is the whole template in one file (87,093 bytes, by far the largest on the shelf). Only external calls: Google Fonts and the Open-Meteo fetch for live Bergen sky telemetry (60.3913, 5.3221): UV index, cloud cover, and daylight, from which the page computes a natural print time.
- **The UV exposure bench:** the featured technique is the studio's core process, made playable. A contact frame starts as raw unexposed rag at 0%; holding the Solar Wash control (or dragging the UV slider) exposes the latent emulsion layer until the blueprint develops, with a fresh-coat reset and a [U] shortcut to toggle develop. A Sync to Bergen Sky control ties exposure to the live conditions fetched above.
- **The plate archive:** six archival contact plates (intertidal flora, timber elevations, fjord bathymetry) that reveal their latent blueprints on hover, specified like engineering drawings: specimen, solar azimuth, scale, wash, and cure.
- Type note: set in Space Mono throughout, the first of today's persona builds to actually follow the prompt's type spec.

## Reusing it

1. Swap the persona: name, city, statement, and the six plates with their drawing specifications.
2. Keep the exposure bench intact; exposure state drives the frame, the slider, and the plate reveals.
3. If the new persona's city matters to the page, point the Open-Meteo fetch at its coordinates, and fetch the variables their process answers to (here: UV, cloud cover, daylight).
