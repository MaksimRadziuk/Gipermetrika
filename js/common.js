$(document).ready(function(){
	var winWidth = $('body').innerWidth();
	var ml = winWidth-1280;
	var decWidth = ml/2;
	var mlPag = decWidth+1280;
	$('.pagination').css('right', mlPag);
	$('.decorativeLeft').css('width', decWidth);
	$('.decorativeRight').css('width', decWidth);

	if (innerWidth<=1550) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-1100;
		var decWidth = ml/2;
		var mlPag = decWidth+1100;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

	}

	if (innerWidth<=1320) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-900;
		var decWidth = ml/2;
		var mlPag = decWidth+900;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

	}

	if (innerWidth<=1080) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-700;
		var decWidth = ml/2;
		var mlPag = decWidth+700;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

	}

	$(window).resize(function(){
		var winWidth = $('body').innerWidth();
		var ml = winWidth-1280;
		var decWidth = ml/2;
		var mlPag = decWidth+1280;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

		if (innerWidth<=1550) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-1100;
			var decWidth = ml/2;
			var mlPag = decWidth+1100;
			$('.pagination').css('right', mlPag);
			$('.decorativeLeft').css('width', decWidth);
			$('.decorativeRight').css('width', decWidth);
		}

		if (innerWidth<=1320) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-900;
			var decWidth = ml/2;
			var mlPag = decWidth+900;
			$('.pagination').css('right', mlPag);
			$('.decorativeLeft').css('width', decWidth);
			$('.decorativeRight').css('width', decWidth);
		}

		if (innerWidth<=1080) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-700;
			var decWidth = ml/2;
			var mlPag = decWidth+700;
			$('.pagination').css('right', mlPag);
			$('.decorativeLeft').css('width', decWidth);
			$('.decorativeRight').css('width', decWidth);
		}
	});


	$('#pag-one').click(function(){
		$('.slider_block').fadeOut().delay(400);
		$('#slide-one').fadeIn(400);
	});
	$('#pag-two').click(function(){
		$('.slider_block').fadeOut().delay(400);
		$('#slide-two').fadeIn(400);
	});
	$('#pag-three').click(function(){
		$('.slider_block').fadeOut().delay(400);
		$('#slide-three').fadeIn(400);
	});
	$('#pag-four').click(function(){
		$('.slider_block').fadeOut().delay(400);
		$('#slide-four').fadeIn(400);
	});

	$('#person-one').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-one').addClass('active');
	});
	$('#person-two').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-two').addClass('active');
	});
	$('#person-three').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-three').addClass('active');
	});
	$('#person-four').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-four').addClass('active');
	});
	$('#person-five').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-five').addClass('active');
	});
	$('#person-six').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-six').addClass('active');
	});
	$('#person-seven').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-seven').addClass('active');
	});
	$('#person-eight').click(function(){
		$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
		$('#feedback-eight').addClass('active');
	});


	var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
	var visibleWidth = $('.feedback .rightPart').innerWidth();
	var boxWidth = visibleWidth/3;
	$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
	var sliderWidth = boxWidth * boxIndex;
	$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

	$('.feedback .rightPart .controls>.next').click(function() {
		var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
		var nextPosition = currentPosition-boxWidth;
		$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

		var taleWidth = sliderWidth - visibleWidth + 10;
		var modaPasition = Math.abs(nextPosition);
		if (modaPasition > taleWidth){
			$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
		}
	});

	$('.feedback .rightPart .controls>.prev').click(function() {
		var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
		var nextPosition = currentPosition+boxWidth;
		$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

		var taleWidth = sliderWidth - visibleWidth-10;
		var modaPasition = Math.abs(nextPosition);
		if (modaPasition > taleWidth){
			$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
		}
	});



	$(window).resize(function(){

		var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
		var visibleWidth = $('.feedback .rightPart').innerWidth();
		var boxWidth = visibleWidth/3;
		$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
		var sliderWidth = boxWidth * boxIndex;
		$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

		$('.feedback .rightPart .controls>.next').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var nextPosition = currentPosition-boxWidth;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth + 10;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition > taleWidth){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});

		$('.feedback .rightPart .controls>.prev').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var nextPosition = currentPosition+boxWidth;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth-10;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition > taleWidth){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});

	});


});

$(window).on("load", function() {
	 // $('.feedback_slider').slick({
	 // 	arrows:true,
	 //   infinite: true,
	 //   speed: 500,
	 //   slidesToShow: 3,
	 // 	slidesToScroll: 1
	 // });
});
