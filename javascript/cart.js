//Shop-Basket
$(".shop-icon").on("click", function () {
  $('.cart-sidebar').addClass('active'),
    $('body').css('overflow-y', 'hidden'),
    $('.off_canvars_overlay').addClass('active')

});
$('.cart-close').on("click", function () {
  $('.cart-sidebar').removeClass('active'),
    $('body').css('overflow-y', 'scroll'),
    $('.off_canvars_overlay').removeClass('active')

});

$(".cart-delete").click(function () {
  $(".cart-list").remove();
  console.log("Hello")
})

//
$(".action-plus").on("click", (function () {
  var e = $(this).closest(".product-action").children(".action-input").get(0).value++,
    i = $(this).closest(".product-action").children(".action-minus");
  e > 0 && i.removeAttr("disabled")
})), $(".action-minus").on("click", (function () {
  2 == $(this).closest(".product-action").children(".action-input").get(0).value-- && $(this).attr("disabled", "disabled")
}))