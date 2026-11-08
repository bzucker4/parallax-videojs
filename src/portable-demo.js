import { createParallaxPlayer } from './parallax-player.js';

const host = document.querySelector('#independent-player');
host.append(createParallaxPlayer({
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  label: 'Standalone PARALLAX playback test'
}));
