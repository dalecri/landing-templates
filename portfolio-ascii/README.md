# Portfolio prototype — heycristobal info in the ASCII landing design

A design prototype only. It is NOT deployed anywhere; the live homepage at
heycristobal.com is unchanged.

- Design, ASCII hero engine, vibe studio drawer and dark/light theme come from
  the ASCII-Landing-page repo (split files reused verbatim, plus prototype-only additions in js/app.js:
  a contact copy-email helper and a site-theme hook.
- All content comes from the current heycristobal.com portfolio: the three work
  case studies, the projects (live demo links; Loop Forge removed at Cris's request, 6 remain), the 4 writing samples, the
  about text, experience/education timeline, toolbox and contact block, and the
  hero photo.
- Nav and sections: Experience (#work), Projects (#projects), Writing
  (#writing), About (#about), Contact (#contact), plus the Playground drawer.

Prototype shortcuts, on purpose:
- English only. The live site's FR/ES language system is not ported here.
- Writing rows link out to the live site's writing section; the samples
  themselves (dialogs/documents) are not reproduced.
- "Get my CV" anchors to the contact section rather than downloading the CV.

Site theming: picking a pond palette in the ASCII Pond Studio (Lotus Pond /
Sakura / Biolum) re-themes the whole page via body[data-pond-theme] rules at
the end of css/style.css: background tint, section eyebrows, project card
thumbnails and hovers, writing-row hovers, nav hovers and text selection all
follow the palette (accent hexes come from the engine's own PALETTES).
The pond's 15px cell grid also runs down the whole page background, using
each palette's grid line colours, so hero and sections read as one sheet.

Preview: serve this folder (e.g. `python3 -m http.server`) and open index.html,
or just open index.html in a browser.
