$(document).ready(function(){
	var winWidth = $('body').innerWidth();
	var ml = winWidth-1280;
	var decWidth = ml/2;
	var mlPag = decWidth+1280;
	$('.pagination').css('right', mlPag);
	$('.decorativeLeft').css('width', decWidth);
	$('.decorativeRight').css('width', decWidth);

	$(window).resize(function(){
		var winWidth = $('body').innerWidth();
		var ml = winWidth-1280;
		var decWidth = ml/2;
		var mlPag = decWidth+1280;
		$('.pagination').css('right', mlPag);
		$('.decorativeLeft').css('width', decWidth);
		$('.decorativeRight').css('width', decWidth);
	});

	$('#pag-one').click(function(){
		$('.slider_block').removeClass('active');
		$('#slide-one').addClass('active');
	});
	$('#pag-two').click(function(){
		$('.slider_block').removeClass('active');
		$('#slide-two').addClass('active');
	});
	$('#pag-three').click(function(){
		$('.slider_block').removeClass('active');
		$('#slide-three').addClass('active');
	});
	$('#pag-four').click(function(){
		$('.slider_block').removeClass('active');
		$('#slide-four').addClass('active');
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
