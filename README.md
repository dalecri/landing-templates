# Landing Templates

A small shelf of reusable landing page templates by Cristobal D'Alessio. Each template lives in its own folder, is fully self-contained, and can be viewed live or copied as the starting point for a new page.

**Browse them from the home page: [index.html](index.html)** (live: `heycristobal.com/landing-templates/`)

## The templates

| Template | What it demonstrates |
| --- | --- |
| [portfolio-persona/](portfolio-persona/) | A full portfolio page on the ASCII landing design, filled with a fictional persona: Marisol Vega, a Halifax product designer, with invented employers, projects, writing samples, and contact details, plus an SVG initials placeholder instead of a photo. Safe to demo publicly, and the quickest way to judge the template with content in it. |
| [petrichor-rain/](petrichor-rain/) | A product landing page over the Rain on Glass engine: a fogged, rainy window as the living background, frosted-glass content panels, a scene switcher (Garden / City / Pond), and a fictional founder persona (Maren Ilves of Petrichor, a rain-recording studio). One single HTML file; Google Fonts is the only external dependency. |
| [robin-ashe-terrain/](robin-ashe-terrain/) | A personal portfolio landing over the ASCII Terrain Flyover engine at 0.2x speed: endless fBm mountains drifting at walking pace behind glass panels. Persona: Robin Ashe, a fictional mountain cartographer in Revelstoke, BC, with work, field notes, a now section, and a path timeline. One single HTML file; Google Fonts is the only external dependency. |
| [claire-beaumont-aurora/](claire-beaumont-aurora/) | A personal portfolio landing under the ASCII Aurora engine: light curtains rippling over a starfield and treeline behind glass panels, accent in aurora mint. Persona: Claire Beaumont, a fictional night-sky photographer in Jasper, Alberta, with photo series, field notes, a now page, a path timeline, and a write-to-me close. No prices or services. One single HTML file; Google Fonts is the only external dependency. |

## How to reuse one

1. Copy the template's folder into your new project.
2. Replace the copy and images; each folder's README notes the hooks, defaults, and shortcuts to know about.
3. Keep the engine code intact where a template has one (pond, rain); the interesting behaviour lives there, and the content layer is plain HTML on top.

## House rules for this shelf

- Self-contained folders: no shared assets between templates, so any folder can be lifted out on its own.
- Styling follows the Quiet Pixel guide: dark soft-purple grounds, rounded soft shapes, Space Mono, one accent per screen.
- Accessibility basics travel with each template: `prefers-reduced-motion` support, visible focus states, and real HTML content (canvas art is decorative).

## Origins

The templates grew out of the [ASCII-VISUAL-PROJECTS](https://github.com/dalecri/ASCII-VISUAL-PROJECTS) collection: the portfolio from its botanical koi landing page, Petrichor from its Rain on Glass piece, the Robin Ashe portfolio from its Terrain Flyover, and the Claire Beaumont portfolio from its ASCII Aurora. (An earlier edition of the portfolio template carried a real person's details; it was retired in favour of the persona edition and still runs as the live prototype at heycristobal.com/prototype/.)
