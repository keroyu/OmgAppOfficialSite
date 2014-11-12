$(document).ready(function(){

var winWid = $(window).width();

$(".jb-btn-group a").css({ 'background-size': '345px auto'});
/* DEFINE CSS */

if( winWid > 641 ) {

	$('.jb-tablet').css( { 'left': '-999px', "opacity": 0 } );
	$('.jb-phone').css( { 'left': '1800px', "opacity": 0 } );
	$('.jb-title').css( { 'top': '15px', "opacity": 0 } );
	$('.jb-slogan').css( { 'top': '130px', "opacity": 0 } );
	$('.jb-btn-group, .ficon, .banner-wrapper, .feature-unit-text, .img-frame').css({ "opacity": 0 });
	$('.img-lens img').css( { 'width': '0px', 'height': '0px' });

	/* define ANIMATION */

	var topMotion = function(){
		$('.jb-tablet').animate({
			left: 0, opacity: 1
		}, 2000, "easeOutExpo");

		$('.jb-phone').animate({
			left: 245, opacity: 1
		}, 2000, "easeOutExpo");
	},
		titleMotion = function(){
			$('.jb-title').animate( { opacity: 1, top: 115 }, 500 );
			$('.jb-slogan').animate( { opacity: 1, top: 230 }, 500 );
			$('.jb-btn-group').animate({ opacity: 1 }, 200);
		};

	topMotion();
	setTimeout( titleMotion, 1500 );

	$(window).scroll(function(){
		var loc = $(window).scrollTop();

		if( loc >= 500 ) {
			$('.ficon').animate({ opacity: 1 }, 600);
		}
		if( loc >= 800 ) {
			$('.banner-wrapper').animate({ opacity: 1 }, 600);
		}
		if( loc >= 1200 ){
			$('.feature-unit-1 .img-frame').animate({ opacity: 1 }, 600);
			$('.feature-unit-1 .img-lens img').animate( { 'width': '234px', 'height': '230px' }, 800);
			$('.feature-unit-1 .feature-unit-text').animate({ opacity: 1 }, 1000);
		}
		if( loc >= 1850 ){
			$('.feature-unit-2 .img-frame').animate({ opacity: 1 }, 600);
			$('.feature-unit-2 .img-lens img').animate( { 'width': '234px', 'height': '230px' }, 800);
			$('.feature-unit-2 .feature-unit-text').animate({ opacity: 1 }, 1000);
		}
		if( loc >= 2500 ){
			$('.feature-unit-3 .img-frame').animate({ opacity: 1 }, 600);
			$('.feature-unit-3 .img-lens img').animate( { 'width': '352px', 'height': '136px' }, 800);
			$('.feature-unit-3 .feature-unit-text').animate({ opacity: 1 }, 1000);
		}
		if( loc >= 3000 ){
			$('.feature-unit-4 .img-frame').animate({ opacity: 1 }, 600);
			$('.feature-unit-4 .img-lens img').animate( { 'width': '352px', 'height': '136px' }, 800);
			$('.feature-unit-4 .feature-unit-text').animate({ opacity: 1 }, 1000);
		}

		/*  GO TOP BTN */
		if( loc > 500 ) {
			var topOffset = $(document).scrollTop() + 400;
			$('.btn-gotop').stop(true, true).animate({ top: topOffset }, 3000, "easeOutExpo");
		}
		
	});


}


/* ------------------------------ SCROLL TO ------------------------------*/

$('.btn-gotop').click(function(){
	$('html, body').animate({ scrollTop: 0 }, 1200, 'easeOutExpo');
});

$('.ficon').click(function(){
	var target = $(this).data('target');
	$('html,body').animate({ scrollTop: $(target).offset().top}, 1500 );
});


});
