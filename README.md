# PARALLAX / PX—01

A custom Video.js v10 player skin designed around the precision of a calibrated instrument. The actual Video.js v10 controls are composed in `src/parallax-player.js` and styled in `src/skin.css`. The surrounding page is only a demonstration; the approved PX—01 visual design is preserved.

## Run

```sh
npm install
npm run dev
```

Production build: `npm run build`. CI verifies compilation on GitHub Actions.

## Reuse PARALLAX on another website

Install the dependencies (`npm install`) and import the portable module:

```js
import { createParallaxPlayer } from './src/parallax-player.js';

const player = createParallaxPlayer({
  src: 'https://example.com/your-video.mp4',
  poster: 'https://example.com/poster.jpg', // optional
  label: 'Featured video', // optional
});
document.querySelector('#video-mount').append(player);
```

Use a container such as `<div id="video-mount"></div>`. The module registers the Video.js v10 elements and imports its own skin stylesheet. The host does **not** need `style.css`, the showcase page, or its markup. Import it in a Vite project (or another bundler supporting CSS imports). A video source must be supplied; the player does not hard-code the demo footage.

## Standalone portability check

Open `/portable.html` on the feature-branch deployment. This page intentionally does not load `style.css` or the contest layout; it imports only `createParallaxPlayer`. Test play/pause, seeking, mute, volume, fullscreen, keyboard focus and touch behavior there. A successful build does not substitute for browser interaction testing.

The player supports optional `preload`, `muted`, `loop` and `crossOrigin` options. Cross-origin credentials are **not** forced on arbitrary host videos. The original showcase visual CSS is unchanged.

## Skin implementation

- Video.js v10 custom elements via `@videojs/html`.
- Play/pause, time slider, elapsed/duration time, mute, volume slider, fullscreen.
- Permanently visible control dock, calibrated seek ticks, high-contrast background, visible keyboard focus, 44px touch controls, compact layouts and reduced-motion support.
- Components are registered in `src/parallax-player.js`.

## Submission acceptance checklist

- [x] Source committed with a working CI production build
- [x] Verify natural completion, backward seeking, rapid seeking and elapsed-time accessibility on the integrated preview\n- [x] Verify production opens without authentication and loads video without media errors\n- [ ] Verify every other control and browser combination not covered above
- [ ] Test keyboard Tab/Shift+Tab, Space/Enter, slider arrow keys and fullscreen exit
- [x] Test 320px and 330px player widths in Chromium mobile emulation\n- [ ] Test 375px, 768px and additional desktop player widths
- [ ] Test bright and dark footage, reduced motion and high contrast
- [x] Publish skin build at a public no-login URL
- [ ] Capture a real screenshot and provide a short design rationale

## Release verification (November 2026)

The integrated preview passed natural playback completion, backward seeking, rapid pointer/keyboard seeking, and visible/accessible elapsed-time consistency. Chromium mobile emulation passed at 320px and 330px with 44×44px control targets and no observed overflow or overlap. Production was deployed from merge commit `75a32bca7a0ecf6a5b54a92c69b6fa8252c0708a`; an unauthenticated Chromium session returned HTTP 200 and loaded the video (5.055s duration) without media errors.

Production: https://parallax-videojs-spiritual-mvp.vercel.app/

These results cover the checks described above; they do not imply that every browser, viewport, media format, or accessibility mode was tested.

## Distribution and commercial readiness

This repository is currently a **Vite demonstration and reusable source module**, not a published npm package or downloadable marketplace ZIP. `package.json` is marked `private: true`; do not advertise an npm install command for PARALLAX until a package is created and published. Consumers can reuse `src/parallax-player.js` and `src/skin.css` in a compatible bundler with `@videojs/html@10.2.0`.

Before listing for sale: decide what buyers receive (source ZIP, hosted integration service, or packaged component); document third-party media and dependency rights; produce actual screenshots; confirm the target marketplace's requirements; and define support, update, and refund terms. The Apache-2.0 license allows redistribution of the original code, so commercial value should come from convenient packaging, documentation, customization, support, or related services rather than claims of exclusive rights.

## Design rationale

PARALLAX treats video playback as a precise interaction with time. A calibrated ruler replaces the generic progress line; instrument-like controls use restrained graphite, warm white, and a single signal-lime accent. Controls remain visible, legible and operable rather than hiding the basic functions behind decorative motion.

## License

Apache License, Version 2.0. Original project code is offered under Apache-2.0. Third-party dependencies and footage have their own licenses.
