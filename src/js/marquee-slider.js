import Swiper, { Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode } from 'swiper'

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode])

export default function infinitySlider() {
  const sliders = document.querySelectorAll('.js-infinity-slider')

  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 10,
      loopSlides: 20,
      loopedSlidesLimit: false,
      allowTouchMove: true,
      spaceBetween: 10,
      autoplay: {
        enabled: true,
        delay: 0,
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove('loading')
        },
      },
    })
  })
}
