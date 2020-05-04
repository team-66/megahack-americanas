$(".main-circle").click(function () {
  $(".other-circles").toggleClass("other-circles-active");
  $(".help-button").toggleClass("help-button-show");
});

$(".help-button").click(function () {
  $(".circle-text").toggleClass("circle-text-show");
});