import { Swiper } from 'swiper';

export default function videoSlider() {
  const containers = document.querySelectorAll('.js-video-slider');

  containers.forEach(container => {
    new Swiper(container, {
      speed: 400,
      slidesPerView: 1.5,
      spaceBetween: 16,
      cssMode: true,
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      },
      breakpoints: {
        670: {
          spaceBetween: 24
        },
        1100: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
  });
}