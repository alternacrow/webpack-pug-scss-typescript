import Swiper, { Autoplay, Navigation, Thumbs } from 'swiper';
import { Module } from './index';

Swiper.use([Autoplay, Navigation, Thumbs]);

export default class slideshow extends Module {
  static moduleName = 'slideshow';

  public init() {
    console.log('=== slideshow ===');

    // slideshow
    const containerEl = this.el.querySelector<HTMLElement>(
      '.js-slideshow-container',
    );

    // thumbnails
    const thumbnailsEl = this.el.querySelector<HTMLElement>(
      '.js-slideshow-thumbnails',
    );

    if (!containerEl) {
      console.warn('=== no slideshow container ===');
      return;
    }
    if (!thumbnailsEl) {
      console.warn('=== no slideshow thumbnails ===');
      return;
    }

    const thumbnails = new Swiper(thumbnailsEl, {
      slidesPerView: 7,
      spaceBetween: 10,
      centeredSlides: true,
      freeMode: true,
      loop: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideActiveClass: 'swiper-slide-thumb-active',
    });

    new Swiper(containerEl, {
      effect: 'slide',
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: '.js-slideshow-prev',
        nextEl: '.js-slideshow-next',
        disabledClass: 'disabled',
      },
      thumbs: {
        swiper: thumbnails,
      },
    });
  }
}
