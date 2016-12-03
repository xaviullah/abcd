// -----------------------------------------------------------
	// Author       : Tanvirul Haque
	// Template Name: Persona - Onepage CV/Resume Template
	// Version      : 1.0	
// ------------------------------------------------------------

(function ($) {
    "use strict";
	
	jQuery(document).ready(function($){
		
		// Start Preloader
		$(window).load(function() {
			// Animate loader off screen
			$(".preloader").fadeOut("slow");
		});
		// End Preloader
		
		// START MENU BACKGROUND CHANGE JS
		$(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
		// END MENU BACKGROUND CHANGE JS
		
		// START SMOTH SCROOL JS
		$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 70
            }, 1200);
            e.preventDefault();
        });
		// END SMOTH SCROOL JS
		
		// START SCROOLSPY JS
		$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
		// END SCROOLSPY JS
		
		// START TOGGLE DROPDOWN JS
		$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		// END TOGGLE DROPDOWN JS
		
		// START TYPED JS
		$(".typed").typed({
            stringsElement: $(".typed-strings"),
            loop: true,
            backDelay: 1500
        });
		// END TYPED JS
		
		// START PORTFOLIO MIXITUP JS
		jQuery('.grid').mixitup({
			targetSelector: '.mix'
		});
		// END PORTFOLIO MIXITUP JS
		
		// START VENOBOX JS
		$('.image-popup').venobox({
			numeratio: true,
			infinigall: true
		});
		// END VENOBOX JS
		
		// START COUNTDOWN JS
		$('.counter-feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		// END COUNTDOWN JS
		
		// START MAGNIFIC POPUP JS
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		// END MAGNIFIC POPUP JS
		
		
        // START GOOGLE MAP JS
         var myCenter=new google.maps.LatLng(-37.81137, 144.96102);
            function initialize(){
				var mapProp = {
					zoom:16,
					center:myCenter,
					scrollwheel: false,
					styles: [ { "stylers": [ { "hue": "#ffffff" },  {saturation: -100},
					{gamma: 2} ] } ],
					mapTpeIdy:google.maps.MapTypeId.ROADMAP
				};
	            var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
            }
            google.maps.event.addDomListener(window, 'load', initialize);        
		// END GOOGLE MAP JS
	});
	
	// START WOW ANIMATION JS
	new WOW().init();
	// END WOW ANIMATION JS
	
})(jQuery);