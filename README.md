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
- [ ] Verify browser playback and every control on the deployed **skin branch** (not the old main-page scaffold)
- [ ] Test keyboard Tab/Shift+Tab, Space/Enter, slider arrow keys and fullscreen exit
- [ ] Test 320px, 375px, 768px and desktop player widths
- [ ] Test bright and dark footage, reduced motion and high contrast
- [ ] Publish skin build at a public no-login URL
- [ ] Capture a real screenshot and provide a short design rationale

## Design rationale

PARALLAX treats video playback as a precise interaction with time. A calibrated ruler replaces the generic progress line; instrument-like controls use restrained graphite, warm white, and a single signal-lime accent. Controls remain visible, legible and operable rather than hiding the basic functions behind decorative motion.

## License

Apache License, Version 2.0. Original project code is offered under Apache-2.0. Third-party dependencies and footage have their own licenses.
