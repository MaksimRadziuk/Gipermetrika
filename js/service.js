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
	});

});
