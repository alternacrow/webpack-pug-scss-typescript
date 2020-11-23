import Swiper, { Navigation, Pagination } from 'swiper';
import { Module } from './index';

Swiper.use([Navigation, Pagination]);

export default class comic extends Module {
  static moduleName = 'comic';

  public init() {
    const container = this.el.querySelector<HTMLElement>('.js-comic-container');
    if (!container) {
      console.warn('=== no comic container ===');
      return;
    }

    new Swiper(container, {
      effect: 'slide',
      direction: 'horizontal',
      navigation: {
        prevEl: '.js-comic-prev',
        nextEl: '.js-comic-next',
        disabledClass: 'disabled',
      },
      pagination: {
        el: '.js-comic-pagination',
        type: 'fraction',
      },
    });
  }
}
