module.exports = function () {
  // begin gallery slider
  new Swiper(".gallery__slider", {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // end gallery slider
} 
