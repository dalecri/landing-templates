# Botanical Koi Portfolio — the landing page that started the series

The owner's own portfolio landing page, built around an ASCII botanical koi pond: a living pond hero with a vibe studio for restyling it, over real work and writing sections.

## What it is

Cristobal D'Alessio's portfolio (real content, not a persona): the pond hero, "Things I've Designed & Built", and a writing section, "Making Technical Things Clear for Users & the Public". It began life as the landing page of the ASCII-VISUAL-PROJECTS collection and kicked that whole series off; the portfolio-persona and petrichor-rain templates on this shelf descend from it. It moved onto the Landing Templates shelf in October 2026.

## How the page works

- `index.html` is the whole template in one file (62,480 bytes). External calls: Tailwind via CDN and Google Fonts, so it needs internet and is not fully self-contained.
- **The pond hero:** patterned ASCII koi drift among botanical glyphs; clicks ripple the water and scatter the fish.
- **The vibe studio:** live controls for palettes, glyph sets, koi count and speed, and feeding, so the hero can be re-skinned without touching code.

## Reusing it

1. Replace the name, work entries, and writing samples with the new person's.
2. Keep the pond and studio script intact; restyle through the vibe studio first, CSS variables second.
