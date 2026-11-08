# PARALLAX / PX—01

A custom Video.js v10 player skin designed around the precision of a calibrated instrument. The actual Video.js controls are composed in `index.html` and styled in `src/skin.css`; the surrounding page is only a demonstration.

## Run

```sh
npm install
npm run dev
```

Production build: `npm run build`. CI verifies compilation on GitHub Actions.

## Skin implementation

- Video.js v10 custom elements via `@videojs/html`.
- Play/pause, time slider, elapsed/duration time, mute, volume slider, fullscreen.
- Permanently visible control dock, calibrated seek ticks, high-contrast background, visible keyboard focus, 44px touch controls, compact layouts and reduced-motion support.
- Components are registered in `src/main.js`.

## Submission acceptance checklist

- [x] Source committed with a working CI production build
- [ ] Verify browser playback and every control on the deployed **skin branch** (not the old main-page scaffold)
- [ ] Test keyboard Tab/Shift+Tab, Space/Enter, slider arrow keys and fullscreen exit
- [ ] Test 320px, 375px, 768px and desktop player widths
- [ ] Test bright and dark footage, reduced motion and high contrast
- [ ] Publish skin build at a public no-login URL
- [ ] Capture a real screenshot and provide a short design rationale

## Design rationale

PARALLAX treats video playback as a precise interaction with time. A calibrated ruler replaces the generic progress line; instrument-like controls use restrained graphite, warm white, and a single signal-orange accent. Controls remain visible, legible and operable rather than hiding the basic functions behind decorative motion.

## License

Apache License, Version 2.0. Original project code is offered under Apache-2.0. Third-party dependencies and footage have their own licenses.
