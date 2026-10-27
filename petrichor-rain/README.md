# Petrichor Rain — landing page template

A product landing page built on the **Rain on Glass** engine from the ASCII-VISUAL-PROJECTS collection. The page is a rainy window: fog mists the glass, drops gather and run, and wiping the glass briefly reveals the scene behind it. Content floats over the weather in frosted-glass panels.

## The persona (fictional)

**Maren Ilves**, a Turku-born, Montréal-based sound recordist, founder of **Petrichor**, a one-purchase library of long, unlooped rain recordings for focus and sleep. She and the studio are invented for this template; swap in a real person and product and the page structure holds as-is.

## What's inside

- `index.html` — the whole template in one file: the rain engine (fog grid, growing and running drops, hand wipe, three scenes: Garden Dusk, City Night, Pond), sticky pill nav, glass hero, recordings cards, principles, a note-from-the-founder panel with an ASCII portrait, pricing, and a prototype signup form.
- The only external dependency is Google Fonts (Space Mono); everything else is inline. If the font fails, the monospace fallback keeps the look.

## Reusing it

1. Pick the default scene: search the script for `let sceneKey = 'city'` and change it to `'garden'` or `'pond'`.
2. Replace the copy: brand, recordings, principles, the founder note, pricing. The sections are plain HTML.
3. The scene pill (bottom right) and the Wipe button are wired to the engine's `data-scene` buttons and `#wipe`; keep those hooks if you restyle them.
4. Content panels use the `.glass` class (translucent background, backdrop blur, thin border). The hero text panel is the readability workhorse over bright scenes; keep it.
5. The signup form is a prototype stub: it swaps its fine print on submit and sends nothing. Wire it to a real endpoint before launch.

## Notes

- `prefers-reduced-motion` is honoured: the engine renders one static, half-fogged frame with frozen trails.
- The canvas sits fixed behind the content (`z-index: 0`); `main` uses `pointer-events: none` with `auto` restored on interactive elements, so visitors can wipe the glass anywhere the page is empty.
