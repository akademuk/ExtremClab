$(".birger-button").on("click", function(){
  $(".birger-button").toggleClass("close-btn");
  $(".menu").toggleClass("open-menu");
});
$(".linkClose").on("click", function(){
  $(".menu").toggleClass("open-menu");
});
$(".birger-button").click(function(){
  if ($('.body').hasClass('overflow')) {
    $(".body").removeClass("overflow");
  } else {
    $(".body").addClass("overflow");
 }
});
