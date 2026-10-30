# Isla Moreau — Pressed Specimens, Asheville

A botanical illustrator's portfolio arranged as an open herbarium sheet: four studies resting askew until one control presses them flat into place.

## The persona (fictional)

**Isla Moreau**, a botanical illustrator and small-batch herbalist in Asheville, North Carolina, recording the flora of the Southern Appalachians in ink and pigment, then bottling the same plants into seasonal remedies. Four works: Mountain Laurel (ink and watercolor, Craggy Gardens), Goldenrod (pressed specimen and tincture label, French Broad river), Black Cohosh (scientific study at two scales), and Rhododendron (layered transparency in successive washes). Commissions and remedies by appointment; contact isla@moreau.studio. Isla and her work are invented for this template.

## How the page works

- `index.html` is the whole template in one file (10,056 bytes). Only external calls: Google Fonts and the Open-Meteo fetch for live Asheville conditions (35.5956, -82.5519), shown in Fahrenheit. Local-first; the studio light line loads from the weather.
- **Pressed specimen layering:** the featured technique organizes the page. The four works begin slightly askew, rotated on the sheet as if just laid down; the single control, Press the Collection, settles them into final alignment and draws the botanical lines in sage, the green of the mountain understory after rain. Overlapping lines stay visible, as they do under a real press.
- Type note: like Mira Calder's page, this build is set in Cormorant Garamond and Inter rather than Space Mono, kept as the builder delivered it.
- The builder suggested the slug itself, in the footer: isla-moreau-pressed.

## Reusing it

1. Swap the persona: name, city, statement, and the four specimens with their field notes.
2. Keep the askew-to-pressed interaction intact; the works begin rotated and the control resolves them.
3. If the new persona's city matters to the page, point the Open-Meteo fetch at its coordinates.
