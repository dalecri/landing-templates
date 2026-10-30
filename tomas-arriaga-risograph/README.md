# Tomás Arriaga — Risograph Printer, Valparaíso

A two-drum risograph studio's page built on its own beautiful flaw: misregistration. The pink plate never lands exactly on the black, and the page lets you slide it yourself.

## The persona (fictional)

**Tomás Arriaga**, a risograph printer in Cerro Alegre, Valparaíso, running Imprenta Arriaga since 2017 from Calle Templeman, up the stairs past the Ascensor Concepción. He prints posters, zines, and small art editions one colour at a time on a 1998 Riso MZ with exactly two drums: black and fluorescent pink. Prices are in Chilean pesos (poster runs from $85.000, zines from $1.200 a copy, open press hours and Saturday workshops). Contact: hola@imprenta-arriaga.cl. Tomás and his studio are invented for this template.

## How the page works

- `index.html` is the whole template in one file (16,016 bytes). Only external calls: Google Fonts (Space Mono) and the Open-Meteo fetch for live Valparaíso conditions (-33.0472, -71.6127), degrading gracefully if it fails.
- **Misregistration:** the featured technique drives everything. The name itself is printed in two offset plates; moving the cursor over the technique block slides the pink plate, the header shows a live registration readout ("off by 0.0 mm") with a Lock registration control, and hovering the selected prints separates their plates.
- The press-room panel is functional, not decoration: live humidity and wind off the bay, because damp sea air swells the paper and the registration drifts.
- Services are an order slip with real prices: poster runs, zine printing, open press hours, workshops.

## Reusing it

1. Swap the persona: name, city, the two ink colours, and the service slip with its prices.
2. Keep the two-plate rendering and the offset interaction intact; the plates are layered copies of the same elements.
3. If the new persona's city matters to the page, point the Open-Meteo fetch at its coordinates.
