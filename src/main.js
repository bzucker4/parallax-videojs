import { createParallaxPlayer } from './parallax-player.js';

const mount = document.querySelector('#parallax-demo');
if (mount) {
  mount.replaceChildren(createParallaxPlayer({
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=85',
    label: 'PARALLAX PX—01 demo video',
  }));
}
