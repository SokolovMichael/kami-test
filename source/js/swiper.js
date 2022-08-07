// const promoScrolls = document.querySelectorAll('.promo__scroll');

const initSwiper = () => {
  /*
  for (let i = 0; i < promoScrolls.length; i++) {
    promoScrolls[i].classList.remove('promo__scroll--nojs');
  }
  */

  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
      },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    autoHeight: true
  });
};

export {initSwiper};
