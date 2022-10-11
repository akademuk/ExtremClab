var birgerButton = $('.birger-button');
birgerButton.on('click', function() {
$(this).toggleClass('active');
$(this).toggleClass('not-active');
});
var linkClose = $('.linkClose');
linkClose.on('click', function() {
$(".birger-button").removeClass('active');
});
var linkClose = $('.linkClose');
linkClose.on('click', function() {
    if ($('.body').hasClass('overflow')) {
        $(".body").removeClass("overflow");
      } else {
        $(".body").addClass("overflow");
     }
});