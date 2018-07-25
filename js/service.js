$(document).ready(function(){
	var winWidth = $('body').innerWidth();
	var ml = winWidth-1280;
	var decWidth = ml/2;
  var vw = winWidth/100;
  var inPadding = 1280-vw*21;
	var mlPag = decWidth+inPadding;
	$('.pagination').css('right', mlPag);
	$('.decorativeLeft').css('width', decWidth);
	$('.decorativeRight').css('width', decWidth);

	if (innerWidth<=1550) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-1100;
		var decWidth = ml/2;
    var vw = winWidth/100;
    var inPadding = 1100-vw*21;
  	var mlPag = decWidth+inPadding;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

	}

	if (innerWidth<=1320) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-900;
		var decWidth = ml/2;
    var vw = winWidth/100;
    var inPadding = 900-vw*21;
  	var mlPag = decWidth+inPadding;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

	}

	if (innerWidth<=1080) {

		var winWidth = $('body').innerWidth();
		var ml = winWidth-700;
		var decWidth = ml/2;
    var vw = winWidth/100;
    var inPadding = 700-vw*21;
  	var mlPag = decWidth+inPadding;
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


	//ОТРАБОТКА ОТЗЫВА ПРИ HOVER НА БЛОКЕ СЛАЙДЕРА
		if(innerWidth>420) {

			$('.service_slider_block').bind('mouseenter mouseleave');

			$('.service_slider_block.default').addClass('active');


			$('#service_sb_one').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_one').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_one').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_two').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_two').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_two').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_three').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_three').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_three').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_four').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_four').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_four').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_five').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_five').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_five').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_six').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_six').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_six').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_seven').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_seven').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_seven').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_eight').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_eight').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_eight').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_nine').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_nine').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_nine').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});
			$('#service_sb_ten').hover(
			function(){
				$('.service_slider_block.default').removeClass('active');
				$(this).addClass('active');
				$('.service_content_block>p').removeClass('active');
				$('#service_cb_ten').addClass('active');
			},
			function(){
				$('.service_slider_block.default').addClass('active');
				$(this).removeClass('active');
				$('#service_cb_ten').removeClass('active');
			  $('.service_content_block>p.default').addClass('active');
			});

		}
		if (innerWidth<=420) {
			$('.service_slider_block').unbind('mouseenter mouseleave');
		}


	// РАБОТА КНОПОК СЛАЙДЕРА(ПРОМОТКА)

	if (innerWidth>640) {
		var boxIndex = $('.service_slider_block').length/2;
		var stepLength = $('.service_slider_block').outerHeight();

		$('.service_slider .controls .scroll.up').click(function() {

			var currentPosition = parseInt($('.service_slider_track').css('top'));
			var nextPosition = currentPosition + stepLength;
			$('.service_slider_track').css('top', nextPosition);

			if (currentPosition >= 0){
				$('.service_slider_track').css('top', currentPosition);
			}
		});

		$('.service_slider .controls .scroll.down').click(function() {
			var currentPosition = parseInt($('.service_slider_track').css('top'));
			var nextPosition = currentPosition - stepLength;
			$('.service_slider_track').css('top', nextPosition);

			var sliderHeight = $('.service_slider_track').innerHeight();
			var visibleHeight = $('.service_slider_box').innerHeight();
			var taleWidth = sliderHeight - visibleHeight + 10;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition > taleWidth){
				$('.service_slider_track').css('top', currentPosition);
			}
		});
	}
	if (innerWidth<=640 && innerWidth>500) {
		var boxIndex = $('.service_slider_block').length;
		var stepLength = $('.service_slider_box').innerWidth()/3;
		var trackWidth = boxIndex * stepLength;
		$('.service_slider_track').css('width',trackWidth);

		$('.service_slider .controls .scroll.up').click(function() {

			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition + stepLength;
			$('.service_slider_track').css('left', nextPosition);

			if ( currentPosition >= 0){
				$('.service_slider_track').css('left', '0');
			}
		});

		$('.service_slider .controls .scroll.down').click(function() {
			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition - stepLength;
			$('.service_slider_track').css('left', nextPosition);

			var sliderWidth = $('.service_slider_track').innerWidth();
			var visibleWidth = $('.service_slider_box').innerWidth();
			var taleWidth = sliderWidth - visibleWidth;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition > taleWidth){
				$('.service_slider_track').css('left', currentPosition);
			}
		});
	}
	if (innerWidth<=500 && innerWidth>420) {
		var boxIndex = $('.service_slider_block').length;
		var stepLength = $('.service_slider_box').innerWidth()/2;
		var trackWidth = boxIndex * stepLength;
		$('.service_slider_track').css('width',trackWidth);

		$('.service_slider .controls .scroll.up').click(function() {

			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition + stepLength;
			$('.service_slider_track').css('left', nextPosition);

			if ( currentPosition >= 0){
				$('.service_slider_track').css('left', '0');
			}
		});

		$('.service_slider .controls .scroll.down').click(function() {
			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition - stepLength;
			$('.service_slider_track').css('left', nextPosition);

			var sliderWidth = $('.service_slider_track').innerWidth();
			var visibleWidth = $('.service_slider_box').innerWidth();
			var taleWidth = sliderWidth - visibleWidth;
			var modaPosition = Math.abs(nextPosition);
			if (modaPosition > taleWidth){
				$('.service_slider_track').css('left', currentPosition);
			}
		});
	}
	if (innerWidth<=420) {
		var boxIndex = $('.service_slider_block').length;
		var stepLength = $('.service_slider_box').innerWidth();
		var trackWidth = boxIndex * stepLength;
		$('.service_slider_track').css('width',trackWidth);

		$('.service_slider .controls .scroll.up').click(function() {

			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition + stepLength;
			$('.service_slider_track').css('left', nextPosition);

			$('.service_content_block>p.active').removeClass('active').prev().addClass('active');

			if ( currentPosition >= 0){
				$('.service_slider_track').css('left', '0');
				$('#service_cb_one').addClass('active');
			}
		});

		$('.service_slider .controls .scroll.down').click(function() {
			var currentPosition = parseInt($('.service_slider_track').css('left'));
			var nextPosition = currentPosition - stepLength;
			$('.service_slider_track').css('left', nextPosition);

			var sliderWidth = $('.service_slider_track').innerWidth();
			var visibleWidth = $('.service_slider_box').innerWidth();
			var taleWidth = sliderWidth - visibleWidth;
			var modaPosition = Math.abs(nextPosition);

			$('.service_content_block>p.active').removeClass('active').next('.service_content_block>p').addClass('active');

			if (modaPosition > taleWidth){
				$('.service_slider_track').css('left', currentPosition);
				$('#service_cb_ten').addClass('active');
			}
		});
	}


	$(window).resize(function(){
		var winWidth = $('body').innerWidth();
		var ml = winWidth-1280;
		var decWidth = ml/2;
    var vw = winWidth/100;
    var inPadding = 1280-vw*21;
  	var mlPag = decWidth+inPadding;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);

		if (innerWidth<=1550) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-1100;
			var decWidth = ml/2;
      var vw = winWidth/100;
      var inPadding = 1100-vw*21;
    	var mlPag = decWidth+inPadding;
			$('.pagination').css('right', mlPag);
			$('.decorativeLeft').css('width', decWidth);
			$('.decorativeRight').css('width', decWidth);
		}

		if (innerWidth<=1320) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-900;
			var decWidth = ml/2;
      var vw = winWidth/100;
      var inPadding = 900-vw*21;
    	var mlPag = decWidth+inPadding;
			$('.pagination').css('right', mlPag);
			$('.decorativeLeft').css('width', decWidth);
			$('.decorativeRight').css('width', decWidth);
		}

		if (innerWidth<=1080) {
			var winWidth = $('body').innerWidth();
			var ml = winWidth-700;
			var decWidth = ml/2;
      var vw = winWidth/100;
      var inPadding = 700-vw*21;
    	var mlPag = decWidth+inPadding;
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

		//УСТАНОВИТЬ СЛАЙДЕР В НАЧАЛО ПРИ ИЗМЕНЕНИИ РАЗМЕРОВ ЭКРАНА
		$('.service_slider_track').css('top', '0px');
		$('.service_slider_track').css('left', '0');

		//РАБОТА КНОПОК ПРОМОТКИ СЛАЙДЕРА ПРИ ИЗМЕНЕНИИ РАЗРЕШЕНИЯ
		if (innerWidth>640) {
			var boxIndex = $('.service_slider_block').length/2;
			var stepLength = $('.service_slider_block').outerHeight();

			$('.service_slider .controls .scroll.up').click(function() {

				var currentPosition = parseInt($('.service_slider_track').css('top'));
				var nextPosition = currentPosition + stepLength;
				$('.service_slider_track').css('top', nextPosition);

				if (currentPosition >= 0){
					$('.service_slider_track').css('top', currentPosition);
				}
			});

			$('.service_slider .controls .scroll.down').click(function() {
				var currentPosition = parseInt($('.service_slider_track').css('top'));
				var nextPosition = currentPosition - stepLength;
				$('.service_slider_track').css('top', nextPosition);

				var sliderHeight = $('.service_slider_track').innerHeight();
				var visibleHeight = $('.service_slider_box').innerHeight();
				var taleWidth = sliderHeight - visibleHeight + 10;
				var modaPosition = Math.abs(nextPosition);
				if (modaPosition > taleWidth){
					$('.service_slider_track').css('top', currentPosition);
				}
			});
		}
		if (innerWidth<=640 && innerWidth>500) {
			var boxIndex = $('.service_slider_block').length;
			var stepLength = $('.service_slider_box').innerWidth()/3;
			var trackWidth = boxIndex * stepLength;
			$('.service_slider_track').css('width',trackWidth);

			$('.service_slider .controls .scroll.up').click(function() {

				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition + stepLength;
				$('.service_slider_track').css('left', nextPosition);

				if ( currentPosition >= 0){
					$('.service_slider_track').css('left', '0');
				}
			});

			$('.service_slider .controls .scroll.down').click(function() {
				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition - stepLength;
				$('.service_slider_track').css('left', nextPosition);

				var sliderWidth = $('.service_slider_track').innerWidth();
				var visibleWidth = $('.service_slider_box').innerWidth();
				var taleWidth = sliderWidth - visibleWidth;
				var modaPosition = Math.abs(nextPosition);
				if (modaPosition > taleWidth){
					$('.service_slider_track').css('left', currentPosition);
				}
			});
		}
		if (innerWidth<=500) {
			var boxIndex = $('.service_slider_block').length;
			var stepLength = $('.service_slider_box').innerWidth()/2;
			var trackWidth = boxIndex * stepLength;
			$('.service_slider_track').css('width',trackWidth);

			$('.service_slider .controls .scroll.up').click(function() {

				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition + stepLength;
				$('.service_slider_track').css('left', nextPosition);

				if ( currentPosition >= 0){
					$('.service_slider_track').css('left', '0');
				}
			});

			$('.service_slider .controls .scroll.down').click(function() {
				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition - stepLength;
				$('.service_slider_track').css('left', nextPosition);

				var sliderWidth = $('.service_slider_track').innerWidth();
				var visibleWidth = $('.service_slider_box').innerWidth();
				var taleWidth = sliderWidth - visibleWidth;
				var modaPosition = Math.abs(nextPosition);
				if (modaPosition > taleWidth){
					$('.service_slider_track').css('left', currentPosition);
				}
			});
		}
		if (innerWidth<=420) {
			$('.service_slider_block').unbind('mouseenter mouseleave');

			var boxIndex = $('.service_slider_block').length;
			var stepLength = $('.service_slider_box').innerWidth();
			var trackWidth = boxIndex * stepLength;
			$('.service_slider_track').css('width',trackWidth);

			$('.service_slider .controls .scroll.up').click(function() {

				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition + stepLength;
				$('.service_slider_track').css('left', nextPosition);

				$('.service_content_block>p.active').removeClass('active').prev().addClass('active');

				if ( currentPosition >= 0){
					$('.service_slider_track').css('left', '0');
					$('#service_cb_one').addClass('active');
				}
			});

			$('.service_slider .controls .scroll.down').click(function() {
				var currentPosition = parseInt($('.service_slider_track').css('left'));
				var nextPosition = currentPosition - stepLength;
				$('.service_slider_track').css('left', nextPosition);

				var sliderWidth = $('.service_slider_track').innerWidth();
				var visibleWidth = $('.service_slider_box').innerWidth();
				var taleWidth = sliderWidth - visibleWidth;
				var modaPosition = Math.abs(nextPosition);

				$('.service_content_block>p.active').removeClass('active').next('.service_content_block>p').addClass('active');

				if (modaPosition > taleWidth){
					$('.service_slider_track').css('left', currentPosition);
					$('#service_cb_ten').addClass('active');
				}
			});
		}



	});

});
