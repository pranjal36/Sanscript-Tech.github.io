
 var window_w = $(window).innerWidth();

 $(window).on('load', function() {
	/*------------------
		Preloder
		--------------------*/
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");

	});

 (function($) {

	/*------------------
		Navigation
		--------------------*/
		$('.nav-switch').on('click', function(event) {
			$('.main-menu').slideToggle(400);
			event.preventDefault();
		});


	/*------------------
		Background set
		--------------------*/
		$('.set-bg').each(function() {
			var bg = $(this).data('setbg');
			$(this).css('background-image', 'url(' + bg + ')');
		});


	//------- Header Scroll Class  js --------//  

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

     //------- Mobile Nav  js --------//  

     if ($('#nav-menu-container').length) {
     	var $mobile_nav = $('#nav-menu-container').clone().prop({
     		id: 'mobile-nav'
     	});
     	$mobile_nav.find('> ul').attr({
     		'class': '',
     		'id': ''
     	});
     	$('body').append($mobile_nav);
     	$('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars" aria-hidden="true"></i></button>');
     	$('body').append('<div id="mobile-body-overly"></div>');
     	$('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

     	$(document).on('click', '.menu-has-children i', function(e) {
     		$(this).next().toggleClass('menu-item-active');
     		$(this).nextAll('ul').eq(0).slideToggle();
     		$(this).toggleClass("lnr-chevron-up lnr-chevron-down");
     	});

     	$(document).on('click', '#mobile-nav-toggle', function(e) {
     		$('body').toggleClass('mobile-nav-active');
     		$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
     		$('#mobile-body-overly').toggle();
     	});

     	$(document).on('click', function(e) {
     		var container = $("#mobile-nav, #mobile-nav-toggle");
     		if (!container.is(e.target) && container.has(e.target).length === 0) {
     			if ($('body').hasClass('mobile-nav-active')) {
     				$('body').removeClass('mobile-nav-active');
     				$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
     				$('#mobile-body-overly').fadeOut();
     			}
     		}
     	});
     } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
     	$("#mobile-nav, #mobile-nav-toggle").hide();
     }

     /*match-height*/
    //Match title height
    function MatchHeight() {
    	$('.feature-thumb')
    	.matchHeight({})
    	;
    }

//Functions that run when all HTML is loaded
$(document).ready(function() {
	MatchHeight(); 
});


	/*------------------
		Hero Slider
		--------------------*/
		var window_h = $(window).innerHeight();
		var header_h = $('.header-section').innerHeight();
		var nav_h = $('.nav-section').innerHeight();

		if (window_w > 767) {
			$('.hs-item').height((window_h)-((header_h)+(nav_h)));
		}

		$('.hero-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			mouseDrag: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			autoplay: true
		});


	
	//owl-carousel

	$('.active-popular-carusel').owlCarousel({
		items:4,
		margin: 30,
		loop:true,
		dots: true,
		autoplayHoverPause: true,
		smartSpeed:650,         
		autoplay:true,      
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items:4
			}
		}
	});



})(jQuery);

