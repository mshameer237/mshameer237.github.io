/*Header*/

 $(window).scroll(function(){
         if($(document).scrollTop() > 0) {
         $('#header').addClass('sticky');
         } else {
         $('#header').removeClass('sticky');
         }
         });

/*Scroll-set*/

$(function () {
	$('.scroll-set').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});
});


/*WOW js*/

var wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 110, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();