$(function() {
	var wheight = $(window).height(); //get hight of the window

	$('.fullheight').css('height', wheight);

	$(window).resize(function() {
		var wheight = $(window).height(); //get hight of the window
		$('.fullheight').css('height', wheight);
	});
});