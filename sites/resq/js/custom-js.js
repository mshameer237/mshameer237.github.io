$(document).ready(function () {
	 var offset = 200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	$('.why-icon').on('click', function () {
		var tab_id = $(this).attr('data-tab');
		$('.why-icon').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	});

	$('.why-icon').on('click', function () {
		var tag_id = $(this).attr('data-tag');
		$('.why-panic-button').attr('id', tag_id);
	});

	




	$(".faq-know-more").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase2").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase2").hide(500);
		$(".faq-phase1").show(500);
	});


	$(".faq-know-more2").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase3").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase3").hide(500);
		$(".faq-phase1").show(500);
	});


	$(".faq-know-more3").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase4").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase4").hide(500);
		$(".faq-phase1").show(500);
	});


	$(".faq-know-more4").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase5").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase5").hide(500);
		$(".faq-phase1").show(500);
	});

	$(".faq-know-more5").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase6").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase6").hide(500);
		$(".faq-phase1").show(500);
	});

	$(".faq-know-more6").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase7").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase7").hide(500);
		$(".faq-phase1").show(500);
	});

	$(".faq-know-more7").click(function () {
		$(".faq-phase1").hide(500);
		$(".faq-phase8").show(500);
	});
	$(".faq-know-less").click(function () {
		$(".faq-phase8").hide(500);
		$(".faq-phase1").show(500);
	});

$(function() {
 $('.scroll-set').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   if (target.length) {
    $('html, body').animate({
     scrollTop: target.offset().top - 0
    }, 1000);
    return false;
   }
  }
 });
});

  $('#vid-slider').flexslider({
         animation: "slide",
         slideshow: false,
         directionNav: false,

         })

    $('#feature-slider').flexslider({
         animation: "slide",
         slideshow: false,
         directionNav: false,

         })
      $('#need-slider').flexslider({
         animation: "slide",
         slideshow: false,
         directionNav: false,

         })
    


});