$('.open').click(function() {
	$('.menuRight').addClass('open_menu');
    $('.body').addClass('overflow');

});

$('.close').click(function() {
	$('.menuRight').removeClass('open_menu');
    $('.body').removeClass('overflow');
});
