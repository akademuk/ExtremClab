$('.open').click(function() {
	$('.menuRight').addClass('open_menu');
    $('.body').addClass('overflow');
    $('.open').addClass('textHover');
});

$('.close').click(function() {
	$('.menuRight').removeClass('open_menu');
    $('.body').removeClass('overflow');
    $('.open').removeClass('textHover');
});
