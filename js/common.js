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

	if (innerWidth<=920) {
		$('.pagination').css('right', 'auto');

		$('.pagination_block').click(function(){
			$('.pagination_block').removeClass('active');
			$(this).addClass('active');
		});
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

		if (innerWidth<=920) {
			$('.pagination').css('right', 'auto');

			$('.pagination_block').click(function(){
				$('.pagination_block').removeClass('active');
				$(this).addClass('active');
			});
		}
	});


	$('#pag-one').click(function(){
		$('.slider_block').fadeOut().delay(200);
		$('#slide-one').fadeIn(400);
	});
	$('#pag-two').click(function(){
		$('.slider_block').fadeOut().delay(200);
		$('#slide-two').fadeIn(400);
	});
	$('#pag-three').click(function(){
		$('.slider_block').fadeOut().delay(200);
		$('#slide-three').fadeIn(400);
	});
	$('#pag-four').click(function(){
		$('.slider_block').fadeOut().delay(200);
		$('#slide-four').fadeIn(400);
	});

	// $('#person-one').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-one').addClass('active');
	// });
	// $('#person-two').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-two').addClass('active');
	// });
	// $('#person-three').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-three').addClass('active');
	// });
	// $('#person-four').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-four').addClass('active');
	// });
	// $('#person-five').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-five').addClass('active');
	// });
	// $('#person-six').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-six').addClass('active');
	// });
	// $('#person-seven').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-seven').addClass('active');
	// });
	// $('#person-eight').click(function(){
	// 	$('.feedback .leftPart .leftPart_wrap>p').removeClass('active');
	// 	$('#feedback-eight').addClass('active');
	// });



	$('#person-two').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-two').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-two').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-three').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-three').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-three').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-four').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-four').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-four').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-five').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-five').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-five').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-six').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-six').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-six').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-seven').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-seven').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-seven').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
	});

	$('#person-eight').hover(
	function(){
		$('.feedback_block.default').removeClass('active');
		$(this).addClass('active');
		$('.feedback .leftPart .leftPart_wrap>p.default').removeClass('active');
		$('#feedback-eight').addClass('active');
	},
	function(){
		$('.feedback_block.default').addClass('active');
		$(this).removeClass('active');
		$('#feedback-eight').removeClass('active');
	  $('.feedback .leftPart .leftPart_wrap>p.default').addClass('active');
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

	if (innerWidth<=640) {
		var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
		var visibleWidth = $('.feedback .rightPart').innerWidth();
		var boxWidth = visibleWidth*0.6666666667;
		$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
		var sliderWidth = boxWidth * boxIndex;
		$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

		$('.feedback .rightPart .controls>.next').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var stepLength = visibleWidth*0.333333333333334;
			var nextPosition = currentPosition-stepLength;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth + 10;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition >= taleWidth){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});

		$('.feedback .rightPart .controls>.prev').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var stepLength = visibleWidth*0.333333333333334;
			var nextPosition = currentPosition+stepLength;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth-10;
			var modaPosition = Math.abs(nextPosition);
			if (currentPosition >= 0){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});
	}
	if (innerWidth<=500) {
		var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
		var visibleWidth = $('.feedback .rightPart').innerWidth();
		var boxWidth = visibleWidth*2;
		$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
		var sliderWidth = boxWidth * boxIndex;
		$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

		$('.feedback .rightPart .controls>.next').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var stepLength = visibleWidth;
			var nextPosition = currentPosition-stepLength;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth + 10;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition >= taleWidth){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});

		$('.feedback .rightPart .controls>.prev').click(function() {
			var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
			var stepLength = visibleWidth;
			var nextPosition = currentPosition+stepLength;
			$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

			var taleWidth = sliderWidth - visibleWidth-10;
			var modaPosition = Math.abs(nextPosition);
			if (currentPosition >= 0){
				$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
			}
		});
	}



	$(window).resize(function(){

		$('.menu_trigger').click(function(){
			$('#mobile_navigation').slideToggle();
			$(this).toggleClass('active');


			$('.topBar .topBar_wrap .logo_wrap').toggle();
			$('.topBar .topBar_wrap .callback').toggleClass('active');
		});
		$('#mobile_navigation>ul>li').click(function(){
			$(this).children('#mobile_navigation>ul>li>.submenu').slideToggle();
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

		if (innerWidth<=640) {
			var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
			var visibleWidth = $('.feedback .rightPart').innerWidth();
			var boxWidth = visibleWidth*0.6666666667;
			$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
			var sliderWidth = boxWidth * boxIndex;
			$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

			$('.feedback .rightPart .controls>.next').click(function() {
				var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
				var stepLength = visibleWidth*0.333333333333334;
				var nextPosition = currentPosition-stepLength;
				$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

				var taleWidth = sliderWidth - visibleWidth + 10;
				var modaPosition = Math.abs(nextPosition);
				if (modaPosition >= taleWidth){
					$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
				}
			});

			$('.feedback .rightPart .controls>.prev').click(function() {
				var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
				var stepLength = visibleWidth*0.333333333333334;
				var nextPosition = currentPosition+stepLength;
				$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

				var taleWidth = sliderWidth - visibleWidth-10;
				var modaPosition = Math.abs(nextPosition);
				if (currentPosition >= 0){
					$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
				}
			});
		}
		if (innerWidth<=500) {
			var boxIndex = $('.feedback .rightPart .feedback_slider>.feedback_box').length;
			var visibleWidth = $('.feedback .rightPart').innerWidth();
			var boxWidth = visibleWidth*2;
			$('.feedback .rightPart .feedback_slider>.feedback_box').css('width',boxWidth);
			var sliderWidth = boxWidth * boxIndex;
			$('.feedback .rightPart .feedback_slider').css('width',sliderWidth);

			$('.feedback .rightPart .controls>.next').click(function() {
				var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
				var stepLength = visibleWidth;
				var nextPosition = currentPosition-stepLength;
				$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

				var taleWidth = sliderWidth - visibleWidth + 10;
				var modaPosition = Math.abs(nextPosition);
				if (modaPosition >= taleWidth){
					$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
				}
			});

			$('.feedback .rightPart .controls>.prev').click(function() {
				var currentPosition = parseInt($('.feedback .rightPart .feedback_slider').css('left'));
				var stepLength = visibleWidth;
				var nextPosition = currentPosition+stepLength;
				$('.feedback .rightPart .feedback_slider').css('left', nextPosition);

				var taleWidth = sliderWidth - visibleWidth-10;
				var modaPosition = Math.abs(nextPosition);
				if (currentPosition >= 0){
					$('.feedback .rightPart .feedback_slider').css('left', currentPosition);
				}
			});
		}

	});

	$('.menu_trigger').click(function(){
		$('#mobile_navigation').slideToggle();
		$(this).toggleClass('active');


		$('.topBar .topBar_wrap .logo_wrap').toggle();
		$('.topBar .topBar_wrap .callback').toggleClass('active');
	});
	$('#mobile_navigation>ul>li').click(function(){
		$(this).children('#mobile_navigation>ul>li>.submenu').slideToggle();
	});


});

$(window).on("load", function() {
});
