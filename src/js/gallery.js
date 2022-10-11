import {EffectFade, Navigation, Pagination, Swiper} from "swiper";

export default function gallery() {
  const containers = document.querySelectorAll('.js-gallery');
  containers.forEach(container => {
    if ([...container.querySelectorAll('.swiper-slide')].length > 1) {
      new Swiper(container, {
        loop: false,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Navigation, Pagination, EffectFade],
        navigation: {
          nextEl: container.querySelector('.gallery__navigation .next'),
          prevEl: container.querySelector('.gallery__navigation .prev'),
          disabledClass: "disabled"
        },
        pagination: {
          el: container.querySelector('.gallery__pagination'),
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return `<button class="${className}" type="button" title="Скриншот №${++index}"></button>`
          },
          bulletClass: "gallery__pagination-item",
          bulletActiveClass: "active"
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        },
      });
    } else {
      container.classList.remove('loading');
      container.querySelector('.gallery__navigation').remove();
      container.querySelector('.gallery__pagination').remove();
    }
  })
}