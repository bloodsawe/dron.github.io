
(function ($) {
  $(function () {
    $('.header-nav__burger').on('click', function () {
      $(this).closest('.header-nav').toggleClass('state_open');
    });
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".header-nav__burger");
  burger.addEventListener("click", function () {
    burger.classList.toggle("toggle");
  });
});

