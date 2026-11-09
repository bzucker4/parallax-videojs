import { createParallaxPlayer } from './parallax-player.js';

const mount = document.querySelector('#parallax-demo');
if (mount) {
  mount.replaceChildren(createParallaxPlayer({
    src: 'https://stream.mux.com/rgJT9Z8tMQXqHm3PMI02A016AYJmnY1jMPxD11T2yyxCM.m3u8',
    poster: 'https://image.mux.com/rgJT9Z8tMQXqHm3PMI02A016AYJmnY1jMPxD11T2yyxCM/thumbnail.jpg',
    label: 'PARALLAX PX—01 demo video',
  }));
}
