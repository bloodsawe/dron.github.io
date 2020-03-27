// baner-slider
$(document).ready(
  $(function() {
    if ($(".banner-slider").length > 0) {
      $(".banner-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        dots: false,
        fade: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
      });
    }
  })
);

// company-slider
$(document).ready(
  $(function() {
    $(".main-block__inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      asNavFor: ".slider-block"
    });

    if ($(".slider-block").length > 0) {
    }
    if (window.innerWidth <= 480) {
      $(".slider-block").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // rows: 2,
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
      slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length - 1,
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
            slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length - 1
          }
        },
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length - 1
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: sliderItem.length >= 10 ? 9 : sliderItem.length - 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: sliderItem.length >= 7 ? 6 : sliderItem.length - 1
          }
        }
      ]
    });
  })
);

// description-slider
document.addEventListener("DOMContentLoaded", function() {
  if (
    document.querySelector(
      ".sectors-oil, .sectors-grid, .sectors-generation, .sectors-construction"
    )
  ) {
    var sliders = document.querySelectorAll(".sectors-description-slider__item")
      .length;
    var counterSlider = document.querySelector(".counter-slider");
    counterSlider.innerHTML = sliders;
  }
});

$(document).ready(
  $(function() {
    $(".sectors-description-img").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      fade: true,
      asNavFor: ".sectors-description-slider"
    });
    if ($(".sectors-description-slider").length > 0) {
      let descriptionSlider = $(".sectors-description-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: ".sectors-description-img",
        focusOnSelect: true
      });
      descriptionSlider.on("afterChange", function(
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        document.querySelectorAll(
          ".sectors-description__counter span"
        )[0].textContent = currentSlide + 1;
      });
    }
  })
);

// desc-slider
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".sectors-generation")) {
    var slidersDesc = document.querySelectorAll(".sectors-desc-slider__item")
      .length;
    var counterSlider = document.querySelector(".counter-desc-slider");
    counterSlider.innerHTML = slidersDesc;
  }
});

$(document).ready(
  $(function() {
    $(".sectors-desc-img").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      fade: true,
      asNavFor: ".sectors-desc-slider"
    });
    if ($(".sectors-desc-slider").length > 0) {
      let descriptionSlider = $(".sectors-desc-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: ".sectors-desc-img",
        focusOnSelect: true
      });
      descriptionSlider.on("afterChange", function(
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        document.querySelectorAll(
          ".sectors-desc__counter span"
        )[0].textContent = currentSlide + 1;
      });
    }
  })
);

// news-slider
var timerId = setInterval(() => {
  if ($(".wp_rss_retriever_list").length > 0) {
    $(".wp_rss_retriever_list").slick({
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
    ScrollReveal().sync();
    Array.from(document.querySelectorAll('a[target="_blank"]')).forEach(
      link => {
        link.removeAttribute("target");
      }
    );

    clearInterval(timerId);
  }
}, 100);

// blog-slider
$(document).ready(
  $(function() {
    if ($(".blog-slider").length > 0) {
      $(".blog-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
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
    }
  })
);

// casecards-slider
$(document).ready(
  $(function() {
    if ($(".casecards-slider").length > 0) {
      $(".casecards-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
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
    }
  })
);

//casecardsintern-slider
$(document).ready(
  $(function() {
    if ($(".intern .slider").length > 0) {
      let arr = [];
      document.querySelectorAll(".slider__block img").forEach(e => {
        if (e.src.indexOf("case_studies") + 1 != 0) arr.push(e);
      });
      arr.forEach(e => {
        e.parentElement.remove();
      });
      if (document.querySelector(".slider-elm").children.length == 0) {
        document.querySelector(".slider").style.visibility = "hidden";
        document.querySelector(".slider").style.width = "initial";
        document.querySelector(".block-with-text").style.marginRight =
          "calc((100vw - 112%) / 2)";
        document
          .querySelector(".block-text-slider")
          .classList.add("class-for-slider-without-content");
        return;
      }
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
  })
);

// testimonials-slider
$(document).ready(
  $(function() {
    if (
      $(".sectors-construction,.sectors-generation,.sectors-grid,.sectors-oil")
        .length > 0 &&
      $(".sectors-banner__item").length > 1
    ) {
      $(".sectors-banner").slick({
        slidesToShow: 1,
        autoplay: 6000,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
      });
    } else if ($(".sectors-slider").length > 0) {
      $(".sectors-slider").slick({
        slidesToShow: 1,
        autoplay: 6000,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
      });
    }
  })
);

// similar-positions-slider
$(document).ready(
  $(function() {
    if ($(".similar-positions-slider").length > 0) {
      $(".similar-positions-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  })
);

// advantages-slider
$(document).ready(
  $(function() {
    if ($(".sectors-construction .advantages-slider").length > 0) {
      $(".advantages-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
  })
);