document.addEventListener("DOMContentLoaded", function () {
  // Dropdown for submenu
  (function($){
    $('.header-nav__item-insert a').addClass('header-nav__link-insert');
    $('.footer-nav__list a').addClass('block-info__link');
  })(jQuery);
  
  //On 3th slide, button with arrow scrollDown
  if (document.querySelector(".homepage")) {
    var banner = Array.from(document.querySelectorAll(".banner-slider__item")) ;
    var img = Array.from(banner[3].querySelectorAll("img")) ;
    img.map(function (e) {
      e.classList.add("down");
    });
  }
});

// Animation anchor
$(document).ready(function () {
  $("[href='#anchor']").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});

// Animation preloader
$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
      $svg_anm   = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay(500).fadeOut('slow');
})



