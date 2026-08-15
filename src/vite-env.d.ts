/// <reference types="vite/client" />

declare module 'swiper/css';
declare module 'swiper/css/*';

declare module '*.mp4' {
  const src: string;
  export default src;
}
