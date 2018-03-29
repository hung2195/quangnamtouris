$(window).load(function() {
        $('#slider').nivoSlider();
    });
$(document).ready(function(){
	$('.toggle').click(function(event){
		$('.main-menu').slideToggle("400");
	});
      $('.single-item').slick({
      	autoplay: true,
      	autoplaySpeed: 2000,
      	 infinite: true,
      });
     $('#owl-ads').owlCarousel({
		    loop: false,
		    navigation: true,
		    pagination: false,
		    margin:0,
		    autoplay:true,
		    autoplaySpeed:1000,
		    autoplayTimeout: 2000,
		    nav: false,

		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});
      $('#owl-position').owlCarousel({
		    loop: false,
		    navigation: true,
		    pagination: false,
		    margin:0,
		    // autoplay:true,
		    autoplaySpeed:1000,
		    autoplayTimeout: 2000,
		    nav: true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});
    });