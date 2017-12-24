$(document).ready(function() {

    /* Sticky navigation */
	$('.sticky-js').waypoint(function(direction){
		if(direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	},{
	  offset: '70px;'
	});

	/*  Scrolling effect */
	$('.scroll-to-plans').click(function() {
		$('html,body').animate({scrollTop: $('.scroll-plans').offset().top},1000);
	});

	$('.scroll-to-items').click(function() {
		$('html,body').animate({scrollTop: $('.scroll-items').offset().top},1000);
	});

	/* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animations */
    

    $('.js-wp-2').waypoint(function(direction) {
    	$('.js-wp-2').addClass('animated fadeIn');
    },{
    	offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
    	$('.js-wp-3').addClass('animated rollIn');
    },{
    	offset: '50%'
    });

    $('.js-wp-1').waypoint(function(direction) {
    	$('.js-wp-1').addClass('animated fadeInUp');
    },{
    	offset: '50%'
    });

    $('.js-wp-4').waypoint(function(direction) {
    	$('.js-wp-4').addClass('animated bounceIn');
    },{
    	offset: '50%'
    });


});
    







