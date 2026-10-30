# Maren Solberg — Pigment Extraction, Bergen

A pigment maker's portfolio run like her lab bench: five foraged pigment batches, each with its chromatography data, and a live capillary assay you can run on canvas.

## The persona (fictional)

**Maren Solberg**, a pigment maker in Sandviken, Bergen, wild-harvesting storm-cast kelp, fallen lichens, and iron-rich seepage clays around Bergen, Norway, and mulling them into lightfast archival inks for printmakers and paper conservators. Five batches: Umbilicaria lichen orchil from Øygarden (electric violet-teal), a copper-bath and sea lettuce verdigris from Sognefjord, Hardanger vivianite silt that oxidizes to prussian-slate, Fedje kelp holdfast char for intaglio, and a Fløyen granite crottle magenta lake. Every batch is washed in rainwater, hand-mulled on granite, and tested by paper chromatography before bottling. Contact: maren@solberg-farge.no. Maren and her work are invented for this template.

## How the page works

- `index.html` is the whole template in one file (29,745 bytes, the largest on the shelf). Only external calls: Google Fonts and the Open-Meteo fetch for live Bergen conditions (60.3913, 5.3221).
- **The capillary assay:** the featured technique. Selecting a batch runs its paper chromatography on a canvas: the pigment climbs the strip at its own rate to its own Rf value (0.38 to 0.83 across the five), and the page reports a live wicking index computed from Bergen's actual relative humidity, since damp air changes how the strip drinks.
- The lab register is total: coordinates and RH in the header, batch codes, pH, and migration notes treated as the portfolio itself. The work is the data.
- Type note: set in Syne and Azeret Mono, a third type system in as many builds, none of them the Space Mono the prompt specifies. Kept as delivered.

## Reusing it

1. Swap the persona: name, city, and the five batches with their sources and assay values.
2. Keep the canvas assay intact; each batch is data (code, Rf, rate, notes) the simulation reads.
3. If the new persona's city matters to the page, point the Open-Meteo fetch at its coordinates, and pick the weather variable their craft actually answers to.
