// baner-slider
$(function() {
  if ($(".banner-slider").length > 0) {
  }
  $(".banner-slider").slick({
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed:6000,
    dots: false,
    fade:true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
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
        breakpoint: 1601,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: sliderItem.length >= 7 ? 6 : sliderItem.length-1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length-1,
        }
      }
    ]
  });
});

// collection-slider
// $(function() {
//   $(".collection-block").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: ".select-block"
//   });
//   if ($(".select-block").length > 0) {
//   }
//   $(".select-block").slick({
//     slidesToShow: 3,
//     autoplay: false,
//     dots: false,
//     vertical: true,
//     verticalSwiping: true,
//     prevArrow: '<div class="slick-prev"></div>',
//     nextArrow: '<div class="slick-next"></div>',
//     asNavFor: ".collection-block",
//     focusOnSelect: true,
//     centerMode: true,
//     responsive: [
//       {
//         breakpoint: 481,
//         settings: {
//           arrows: false
//         }
//       }
//     ]
//   });
// });


// description-slider
document.addEventListener("DOMContentLoaded", function() {
  if(document.querySelector(".sectors-oil, sectors-grid, sectors-generation, sectors-construction")) {
    var sliders = document.querySelectorAll(".sectors-description-slider__item").length;
    var counterSlider = document.querySelector(".counter-slider");
    counterSlider.innerHTML = sliders; 
  }
})

$(function() {
  $(".sectors-description-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".sectors-description-slider"
  });
  if ($(".sectors-description-slider").length > 0) {
  let descriptionSlider =  $(".sectors-description-slider").slick({
      slidesToShow: 1,
      autoplay: false,
      dots: false,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      asNavFor: ".sectors-description-img",
      focusOnSelect: true,
      // responsive: [
      //   {
      //     breakpoint: 481,
      //     settings: {
      //       arrows: false
      //     }
      //   }
      // ]
    });
    descriptionSlider.on("afterChange", function(event, slick, currentSlide, nextSlide) {
      document.querySelectorAll(".sectors-description__counter span")[0].textContent =
        currentSlide + 1;
    });
  }
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
    autoplay: true,
    autoplaySpeed:6000,
    dots: false,
    fade:true,
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
    autoplay: true,
    autoplaySpeed:6000,
    dots: false,
    fade:true,
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

// testimonials-slider
$(function() {
  if ($(".sectors-slider").length > 0) {
  }
  $(".sectors-slider").slick({
    slidesToShow: 1,
    autoplay: 5000,
    dots: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });
});