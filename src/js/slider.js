import { EffectFade, Navigation, Pagination, Scrollbar, Swiper } from 'swiper'

export default function slider() {
  const containers = document.querySelectorAll('.js-init-slider')

  containers.forEach((container) => {
    if (container.classList.contains('js-init-slider--mobile')) {
      if (window.matchMedia('screen and (max-width: 669px)').matches) {
        init()
      } else {
        container.classList.remove('loading')
        container.querySelector('.swiper').classList.remove('loading')
      }
    } else {
      init()
    }

    function init() {
      const slides = container.querySelectorAll('.swiper-slide')
      if (slides.length > 1) {
        new Swiper(container.querySelector('.swiper'), {
          modules: [Navigation, Pagination],
          speed: 400,
          slidesPerView: 1,
          spaceBetween: 20,
          on: {
            init: function (swiper) {
              swiper.el.classList.remove('loading')
            },
          },
          navigation: {
            nextEl: container.querySelector('.next'),
            prevEl: container.querySelector('.prev'),
            disabledClass: 'disabled',
          },
          pagination: {
            el: container.querySelector('.js-pagination'),
            bulletClass: 'bullet',
            bulletActiveClass: 'active',
            clickable: true,
          },
          breakpoints: {
            670: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        })
      } else {
        container.classList.remove('loading')
      }
    }
  })
}
