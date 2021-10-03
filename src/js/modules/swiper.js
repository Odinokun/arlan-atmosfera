module.exports = function () {
	// begin gallery slider
	new Swiper(".gallery__slider", {
	slidesPerView: 1,
	// spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	});
	// end gallery slider

	// begin planning slider
	new Swiper(".planning__slider", {
	slidesPerView: 4,
	spaceBetween: 20,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: false,
		dragSize: 50,
		draggable: true
		},
	});
	// end planning slider

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
