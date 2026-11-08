/** PARALLAX PX—01: portable Video.js v10 player composition. */
import '@videojs/html/video/player';
import '@videojs/html/ui/container';
import '@videojs/html/ui/controls';
import '@videojs/html/ui/controls-content';
import '@videojs/html/ui/controls-group';
import '@videojs/html/ui/play-button';
import '@videojs/html/ui/time-slider';
import '@videojs/html/ui/volume-slider';
import '@videojs/html/ui/slider-track';
import '@videojs/html/ui/slider-buffer';
import '@videojs/html/ui/slider-fill';
import '@videojs/html/ui/slider-thumb';
import '@videojs/html/ui/time';
import '@videojs/html/ui/mute-button';
import '@videojs/html/ui/fullscreen-button';
import '@videojs/html/ui/hotkey';
import '@videojs/html/ui/status-announcer';
import '@videojs/html/ui/error-dialog';
import '@videojs/html/ui/dialog-popup';
import '@videojs/html/ui/dialog-title';
import '@videojs/html/ui/dialog-description';
import '@videojs/html/ui/dialog-close';
import './skin.css';


const template = document.createElement('template');
template.innerHTML = "<video-player>\n<media-container class=\"px-skin\">\n\n<video playsinline preload=\"metadata\" crossorigin=\"anonymous\"></video>\n<media-controls><media-controls-content>\n<div class=\"px-topline\"><span>PX—01 / PLAYBACK INSTRUMENT</span><b>● VIDEO.JS V10</b></div>\n<media-time-slider class=\"px-time-slider\" aria-label=\"Seek through video\"><media-slider-track><media-slider-buffer></media-slider-buffer><media-slider-fill></media-slider-fill></media-slider-track><media-slider-thumb></media-slider-thumb></media-time-slider>\n<media-controls-group class=\"px-controls-row\" aria-label=\"Playback controls\">\n<media-play-button aria-label=\"Toggle playback\"><span class=\"px-symbol show-when-paused\" aria-hidden=\"true\">▶</span><span class=\"px-symbol show-when-playing\" aria-hidden=\"true\">Ⅱ</span></media-play-button>\n<media-time type=\"current\"></media-time><span class=\"px-separator\" aria-hidden=\"true\">/</span><media-time type=\"duration\"></media-time>\n<span class=\"px-spacer\"></span>\n<media-mute-button aria-label=\"Toggle mute\"><span class=\"px-symbol show-when-unmuted\" aria-hidden=\"true\">◖</span><span class=\"px-symbol show-when-muted\" aria-hidden=\"true\">×</span></media-mute-button>\n<media-volume-slider class=\"px-volume-slider\" aria-label=\"Volume\"><media-slider-track><media-slider-fill></media-slider-fill></media-slider-track><media-slider-thumb></media-slider-thumb></media-volume-slider>\n<media-fullscreen-button aria-label=\"Toggle fullscreen\"><span class=\"px-symbol show-when-not-fullscreen\" aria-hidden=\"true\">⛶</span><span class=\"px-symbol show-when-fullscreen\" aria-hidden=\"true\">↙</span></media-fullscreen-button>\n</media-controls-group></media-controls-content></media-controls>\n<media-hotkey keys=\"Space\" action=\"togglePaused\"></media-hotkey><media-hotkey keys=\"m\" action=\"toggleMuted\"></media-hotkey><media-hotkey keys=\"f\" action=\"toggleFullscreen\"></media-hotkey><media-hotkey keys=\"ArrowLeft\" action=\"seekStep\" value=\"-5\"></media-hotkey><media-hotkey keys=\"ArrowRight\" action=\"seekStep\" value=\"5\"></media-hotkey>\n<media-status-announcer></media-status-announcer>\n<media-error-dialog><media-dialog-popup class=\"px-error\"><media-dialog-title></media-dialog-title><media-dialog-description></media-dialog-description><media-dialog-close>Close</media-dialog-close></media-dialog-popup></media-error-dialog>\n</media-container>\n</video-player>";

/**
 * Create a reusable PARALLAX player. The host website needs no showcase CSS.
 * @param {{src:string, poster?:string, label?:string}} options
 * @returns {HTMLElement} The Video.js v10 <video-player> element.
 */
export function createParallaxPlayer({ src, poster, label = 'Video player' }) {
  if (typeof src !== 'string' || !src.trim()) throw new TypeError('A video source URL is required');
  const player = template.content.firstElementChild.cloneNode(true);
  player.setAttribute('aria-label', label);
  const video = player.querySelector('video');
  video.src = src;
  if (poster) video.poster = poster;
  return player;
}
