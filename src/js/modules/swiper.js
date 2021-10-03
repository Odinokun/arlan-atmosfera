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
} 
