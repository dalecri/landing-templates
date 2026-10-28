# Claire Beaumont Aurora — personal portfolio template under the ASCII Aurora

A **personal** portfolio landing page (no prices, no services, nothing to buy) for a fictional night-sky photographer, built on the **ASCII Aurora** engine from the ASCII-VISUAL-PROJECTS collection. Curtains of northern lights ripple in coloured characters over a twinkling starfield and a dark treeline, behind frosted-glass panels. The page accent is aurora mint instead of the usual amber.

## The persona (fictional)

**Claire Beaumont**, 38, night-sky photographer in Jasper, Alberta, inside the Dark Sky Preserve. Sections: a hello hero ("The night is not empty."), Three series (October Storms; The Quiet Months; First Light, Last Light), Field notes from the exposure log, a Now panel, About Claire, The long way here (2009–2024), and a "Write to Claire" close with a fictional email address. Claire and her history are invented for this template.

## What's inside

- `index.html` — the whole template in one file: the aurora engine (two/three noise-edged curtain layers with ray striations, starfield, treeline silhouette, pointer solar-wind gust) fixed behind the content, plus all sections as plain HTML.
- The only external dependency is Google Fonts (Space Mono); everything else is inline.

## Key settings

- **Storm strength:** the engine's `storm` value defaults to 1 (Active). A small Sky pill (bottom right) offers Calm (0.4) / Active (1) / Storm (2.2) and Pause; the value scales brightness, ray contrast, and sway speed.
- **Colours by brightness** live together in the render section: deep green #0E5B34 → aurora green #3CE882 → pale mint #B8FFD9, with the curtain tops shifting to violet #9B6BFF.
- **Content over canvas:** the wrapper uses `pointer-events: none` with `auto` restored on panels and interactive elements, so the aurora still leans toward the pointer over empty areas. Keep that structure when editing.
- `prefers-reduced-motion` renders one static frame; the loop pauses when the tab is hidden.

## Reusing it

1. Replace Claire's name, place, series, notes, and path with your own person; the section anchors are in the top-bar links.
2. To calm or wild the sky by default, change the initial `storm` value in the script.
3. Built from the prompt saved as `aurora-portfolio-prompt-oct-27.md` (in the workspace files), itself adapted from the collection's ascii-aurora piece.
