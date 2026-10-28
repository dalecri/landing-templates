# Meadow Minuit — 3D Night Meadow

A single-screen interactive 3D landing page for **Meadow Minuit**, a fictional Laurentians flower studio. A giant "Night Meadow" headline stands inside a procedural Three.js meadow while the scene eases from plum dusk (fireflies) to cream dawn (butterflies). A frosted-glass **Meadow Pass** card stands in the flowers: drag to rotate it, click to flip it. The "Buy a pass" panel is a dummy (the studio is fictional; the "from $25" copy is decorative).

Origin: built from the Night Meadow prompt (2026-10-28), a take on Marina Budarina's interactive 3D gift-card site. Shelved 2026-10-28 as the shelf's first 3D template.

## Files

- `index.html` — everything (39,182 B).

## Dependencies (read this before reusing)

Unlike the other templates on this shelf, this one is **not fully self-contained**:

- Three.js loads from a CDN via an import map (jsdelivr, pinned `three@0.160.0`, module build). Without internet for the CDN, the page falls back to its static poster.
- Fonts: Alpha Lyrae by remote @font-face (the woff2 hosted under heycristobal.com/my-style-guide, with the vault copy as fallback) and Space Mono from Google Fonts.
- Everything else — flowers, butterflies, fireflies, the glass card, the headline texture — is procedural. No model or image files.

## Key settings

- Flower factory: `makeFlower({ kind, petals, petalColour: [base, tip], centreColour, height, phase, u, z, petalLen, tilt })`. Kinds include poppy, lupin, and bud; petal geometry is shared and vertex colours grade base to tip.
- Dusk/dawn: a single mix value drives the scene background and fog, the light colours, the CSS `--dawn` variable (via color-mix) that themes the DOM, and the firefly/butterfly cross-fade. On load the page holds dusk for about a second, then eases to dawn; the footer toggle reverses it. `prefers-reduced-motion` starts at dawn with no sway or parallax.
- Headline: drawn to a canvas texture after `document.fonts.ready` and placed in the scene so the flowers overlap it.
- Copy points: the wordmark "meadow minuit", the nav (contact / gift / about), the "Meadow Pass — from $25" line, and the Buy panel text all live in the markup near the end of `<body>`.

## Reuse hooks

- Re-skin the studio: change the wordmark, the canvas-drawn headline string, and the pass price; retheme by editing the dusk and dawn colour stops.
- Add a flower kind inside `makeFlower` and place it in the row composition.
- To run it fully offline, self-host the Three.js module build and the two font files, then update the import map and the @font-face URLs.
