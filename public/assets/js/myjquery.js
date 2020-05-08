
$(document).ready(function() {

	$('.mens').mouseenter(function() {
		$('.drop-men').stop().slideDown();
		$('.drop-women').stop().slideUp();
		$('.drop-kids').stop().slideUp();
		$('.drop-accesories').stop().slideUp();
	});
	$('.drop-men').mouseleave(function() {
		$('.drop-men').stop().slideUp();
	});

	$('.drop-men').mouseup(function() {
		$('.drop-men').stop().slideUp();
	});

	$('.Womens').mouseenter(function() {
		$('.drop-women').stop().slideDown();
		$('.drop-men').stop().slideUp();
		$('.drop-kids').stop().slideUp();
		$('.drop-accesories').stop().slideUp();
	});
	$('.drop-women').mouseleave(function() {
		$('.drop-women').stop().slideUp();
	});

	$('.kids').mouseenter(function() {
		$('.drop-kids').stop().slideDown();
		$('.drop-mens').stop().slideUp();
		$('.drop-women').stop().slideUp();
		$('.drop-accesories').stop().slideUp();
	});
	$('.drop-kids').mouseleave(function() {
		$('.drop-kids').stop().slideUp();
	});

	$('.accesories').mouseenter(function() {
		$('.drop-accesories').stop().slideDown();
		$('.drop-women').stop().slideUp();
		$('.drop-kids').stop().slideUp();
		$('.drop-men').stop().slideUp();
	});
	$('.drop-accesories').mouseleave(function() {
		$('.drop-accesories').stop().slideUp();
	});

	$('.navbar').mouseleave(function() {
		$('.drop-kids').stop().slideUp();
		$('.drop-men').stop().slideUp();
		$('.drop-women').stop().slideUp();
		$('.drop-accesories').stop().slideUp();
	});

	$(window).on('scroll', function(event) {
		var scrollValue = $(window).scrollTop();
		// console.log(scrollValue);

		if (scrollValue > 420) {
			$('.for-sticky').addClass('sticky-top');
			$('.for-sticky').css({
				'margin-top': '0px',
				'padding-top': '120px'
			});
		}
		else {
			$('.for-sticky').css({
				'margin-top': '0px',
				'padding-top': '0px'
			});
			$('.for-sticky').removeClass('sticky-top');
		}

	});

});