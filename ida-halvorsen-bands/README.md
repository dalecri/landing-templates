# Ida Halvorsen Bands — a portfolio arranged as bentwood rings, from the Landing Template prompt

Also built from the **Landing Template** prompt in Cris's vault (four inputs: persona, craft, city, one design technique; no standard formula). The technique here is **hover physics**: the portfolio is a set of concentric bands, like steam-bent wood rings, and the bands shift and settle as the pointer moves over them.

## The persona (fictional)

**Ida Halvorsen**, steam-bent furniture maker in Copenhagen, Denmark. Opening statement: "Chairs and benches steam-bent from Danish ash, shaped by hand until the wood agrees." Four projects, one per band (Havn Bench; Arc Chair; Bow Shelf; Lull Cradle), a short about, and a contact line with a placeholder email (ida@example.com). Ida and her work are invented for this template.

## How the page works

- `index.html` is the whole template in one file; no canvas, the physics is DOM and CSS. The only external calls are Google Fonts (Space Mono) and the Open-Meteo weather fetch (no key).
- **The P object:** at the top of the script, the four inputs (`name`, `craft`, `city` + `lat`/`lon`, `technique`) plus filler (`statement`, `about`, `email`, `contactTail`) and the `projects` array. Projects are ordered outermost band first; each names a CSS variable pair (`color: "--band-N"`, `text: "--ink"` or `"--ground"`) that paints its ring, and `core` names the accent variable at the centre.
- **Bands:** the number of projects is the number of rings. This build's palette defines four band variables (`--band-1` to `--band-4`); adding a fifth project means adding a fifth band variable to the CSS.
- **Live local weather:** the header fetches current weather for the persona's coordinates from Open-Meteo and degrades gracefully if it fails. `prefers-reduced-motion` calms the physics.

## Reusing it

1. Edit the P object: new persona, craft, city, coordinates, technique word.
2. Replace the projects array, keeping the outermost-first order, and point each project at a band variable that exists in the CSS (add variables if you add rings).
3. Keep the structure: statement first, then the rings, then about and contact. The rings are the page; a cards grid would defeat it.
