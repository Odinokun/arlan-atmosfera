module.exports = function () {
	  // begin gallery slider
	  new Swiper(".gallery__slider", {
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
	  });
	  // end gallery slider
} 
