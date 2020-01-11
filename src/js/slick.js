// baner-slider
$(function() {
  if ($(".banner-slider").length > 0) {
  }
  $(".banner-slider").slick({
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

// company-slider
$(function() {
  $(".main-block__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-block"
  });

  if ($(".slider-block").length > 0) {
  }
  if (screen.availWidth <= 480) {
    $(".slider-block").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 2,
      autoplay: false,
      dots: false,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      asNavFor: ".main-block__inner",
      focusOnSelect: true,
      centerMode: true
    });
    return;
  }
  let sliderItem = document.querySelectorAll(".slider-block__item");
  $(".slider-block").slick({
    slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: ".main-block__inner",
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      }
    ]
  });
});

// collection-slider
$(function() {
  $(".collection-block").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".select-block"
  });
  if ($(".select-block").length > 0) {
  }
  $(".select-block").slick({
    slidesToShow: 3,
    autoplay: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: ".collection-block",
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

// news-slider
$(function() {
  if ($(".news-slider").length > 0) {
  }
  $(".news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// blog-slider
$(function() {
  if ($(".blog-slider").length > 0) {
  }
  $(".blog-slider").slick({
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

// casecards-slider
$(function() {
  if ($(".casecards-slider").length > 0) {
  }
  $(".casecards-slider").slick({
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

//casecardsintern-slider
$(function() {
  if ($(".intern .slider").length > 0) {
    let length = $(".intern .slider .slider__block").length;
    document.querySelectorAll(".counter span")[1].textContent = length;
    let slider = $(".intern .slider-elm").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            // slidesToShow: 2
          }
        },
        {
          breakpoint: 468,
          settings: {
            // slidesToShow: 1
          }
        }
      ]
    });
    slider.on("afterChange", function(event, slick, currentSlide, nextSlide) {
      document.querySelectorAll(".counter span")[0].textContent =
        currentSlide + 1;
    });
  }
});
