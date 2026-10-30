# Soren Lindqvist — Acoustic Diffusers

An acoustic craftsman's portfolio built around an interactive ASCII standing-wave chamber: the diffuser field itself is the demo.

## The persona (fictional)

**Soren Lindqvist**, a maker of carved timber and porous basalt sound diffusers working alone from a geothermal timber kiln on Grandagarður in Reykjavík, Iceland. Five installations (the Harpa Rehearsal Annex at 420 Hz, the Seyðisfjörður Listening Pavilion at 185 Hz, Kex Mastering Suite B at 860 Hz, the Vatnajökull Archive Vault at 310 Hz, and the Akureyri Chapel Organ Loft at 640 Hz), each listed with its diffuser profile (QRD, basalt, hemisphere, slat, primitive-root) and tuned frequency. Contact as written in the template: soren@lindqvist-akustik.is. Soren and his works are invented for this template. He is the shelf's second acoustic craftsman, after Mateo Valdés the plasterworker; where Mateo's plaster absorbs, Soren's carved wells scatter.

## How the page works

- `index.html` is the whole template in one file (22,409 bytes). External calls: Google Fonts (Space Mono) and the Open-Meteo weather fetch (no key). Not fully self-contained for that reason. The display font is an optional Alpha Lyrae hook: the CSS tries a local install or a same-folder `AlphaLyrae-Regular.woff2` first and falls back to Space Mono, which is how it renders on the shelf.
- **The chamber:** a split blueprint frame with no hero-and-cards ladder. The left column is a sticky ASCII standing-wave field rendered into a `<pre>`; each project row in the right-hand ledger carries its own wave geometry (`data-kx`, `data-ky`, `data-mod`, `data-sym`), and hovering, clicking, or keyboard-selecting a row eases the field into that installation's pattern with a pulse. Moving the pointer inside the chamber acts as a point-source ripple; pressing sends a stronger one.
- **Live weather as acoustics:** the header fetches Reykjavík's current temperature and wind from Open-Meteo (64.1466, -21.9426) and reports the real-time speed of sound, c = 331.3 + 0.606 × T; the wind speed also scales the field's animation rate. If the fetch fails, the header keeps its printed coordinate fallback.
- **Light theme:** warm birch and lime-plaster grounds with a terracotta accent, a deliberate break from the shelf's dark Quiet Pixel pages, in the same spirit as the Marisol weaver page.
- **Known gap:** unlike the shelf's other animated templates, this build has no `prefers-reduced-motion` handling; the wave field animates continuously. Shelved byte-identical as uploaded; a static-frame guard is a one-line patch if wanted.

## Reusing it

1. Swap the persona: name, statement, ledger rows (title, spec, frequency, description, wave data attributes), city, and the weather coordinates in the fetch URL.
2. Keep the chamber script intact; the ledger rows and their acoustic specs are plain HTML.
