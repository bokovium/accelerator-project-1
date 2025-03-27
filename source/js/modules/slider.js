import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const initSlider = () => {
  new Swiper('.swiper', {
    modules: [Navigation],
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.juri__button--next',
      prevEl: '.juri__button--prev',
    },
    breakpoints: {

      1366: {
        slidesPerView: 4,
        spaceBetween: 40
      },

      768: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      }
    }
  });
};

initSlider();
