# Mark's Essays

A calm editorial blog built for Mark (Cristobal's dad): one dignified page for publishing his thoughts and ideas, with essays grouped in Business, Spiritual, and World Affairs. Warm paper ground, Fraunces masthead with a letterpress feel, a monogram-seal sign-off at the end of every essay, and letter-style datelines. All posts render from a single JavaScript posts array; the six essays in this build are marked samples, written as placeholders for his real ones.

Origin: built 2026-10-28 by Claude from a prompt by Automata, at Cris's request for his dad; shelved the same day.

## Files

- `index.html` — everything (47,145 B).

## Dependencies

One HTML file, no build. It loads two font families (Fraunces, Newsreader) from Google Fonts at runtime, so typography needs an internet connection (serif fallbacks apply offline). The share links (X, WhatsApp, Facebook) are plain outbound anchors, not embeds or trackers.

## Reuse hooks

- Add an essay by adding one object (category, title, date, excerpt, body paragraphs) to the posts array at the top of the script; it appears in Latest and in its section automatically.
- Swap the seal initial, the name in the masthead, and the About text to make it anyone's essay blog.
- Section descriptions live in one small config spot beside the posts array.
