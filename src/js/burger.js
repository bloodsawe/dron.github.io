// ie

document.addEventListener("DOMContentLoaded", function() {
  (function($) {
    $(function() {
      $(".header-nav__burger").on("click", function() {
        $(this)
          .closest(".header-nav")
          .toggleClass("state_open");
      });
    });
  })(jQuery);

  var burger = document.querySelector(".header-nav__burger");
  burger.addEventListener("click", function() {
    burger.classList.toggle("toggle");
  });
  var header = $("header");
  scrollPrev = 0;
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (document.querySelector(".state_open")) {
      return;
    } else if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass("out");
    } else {
      header.removeClass("out");
    }

    scrollPrev = scrolled;
  });
});