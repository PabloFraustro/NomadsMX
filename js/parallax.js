$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('#about-article').css({
				'transform': 'translate(0px,-' + scroll/3.8 + '%)'
			});

      $('#about-photo').css({
				'transform': 'translate(0px,-' + scroll/4.5 + '%)'
			});

			$('#title').css({
				'transform': 'translate(0px, ' + scroll /1.5 + '%)'
			});
		}
	});


});
