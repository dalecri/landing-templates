# Apple Finder — About Me

An about-me page styled as a macOS Finder window: sidebar folders, a file grid, and a preview pane, all in one self-contained HTML file.

Origin: built April 2026 as dalecri/apple-finder-aboutme; shelved 2026-10-28 during the repo consolidation.

## Files

- `index.html` — everything (35,703 B).

## Dependencies

One HTML file, no build, but NOT offline-self-contained: at runtime it loads React, ReactDOM, Babel standalone, Tailwind, and Lucide from public CDNs (unpkg) plus Google Fonts, so it needs an internet connection.

## Reuse hooks

- Replace the name, bio, and folder contents in the markup to make it anyone's Finder.
- The window chrome, sidebar, and preview pane are plain HTML/CSS; restyle by editing the embedded stylesheet.
