# PARALLAX / PX—01

An original editorial design study for a Video.js v10 skin, inspired by precision instruments and cinematic viewing rooms.

**Current status: prototype, not submission-ready.** This initial version loads Video.js v10.2.0 and its upstream Scaffold skin with customized tokens. The surrounding visual system is original; the actual player controls are **not yet a bespoke skin**. Do not submit as a completed custom skin.

## Local preview

Serve the repository as a static site:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. Video.js, sample video, and poster require an internet connection.

## Required next phase

- Implement a locally owned v10 skin using documented Video.js components, not decorative overlays.
- Build the functional calibrated seek rail and playback dock.
- Verify play/pause, seek, time, volume/mute, fullscreen, keyboard focus and touch.
- Test mobile sizes, bright/dark footage, reduced motion and high contrast.
- Host a reliable public video and deploy a public URL; add Mux playback ID if eligible.
- Add a design rationale and screenshots of the actual completed skin.

## License

Original project files are licensed under Apache-2.0. Video.js and external media retain their respective licenses.
