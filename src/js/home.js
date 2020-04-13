// ie

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".homepage")) {
    var banner = Array.from(document.querySelectorAll(".banner-slider__item")) ;
    var img = Array.from(banner[3].querySelectorAll("img")) ;
    img.map(function (e) {
      e.classList.add("down");
    });
  }
});

// anchor

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

$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
      $svg_anm   = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay(500).fadeOut('slow');
})



