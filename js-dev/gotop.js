$(document).ready(function(){

	var winWid = $(window).width();
	if(  winWid > 1024 ) {
		$(window).scroll(function(){
			var loc = $(window).scrollTop();

			/*  GO TOP BTN */
			if( loc > 500 ) {
				$gotopBtn = $('.btn-gotop');
				$gotopBtn.show();
				var topOffset = $(document).scrollTop() + 400;
				$gotopBtn.stop(true, true).animate({ top: topOffset }, 3000, "easeOutExpo");
			}
		});

		$('.btn-gotop').click(function(){
			$('html, body').animate({ scrollTop: 0 }, 1200, 'easeOutExpo');
		});
	}

});



