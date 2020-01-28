// function changeSlider(
//   evt,
//   blockThatNeedToOpen = "blog-slider",
//   button = "active-button",
//   displayStyle = "block"
// ) {
//   var i;
//   $(`.${blockThatNeedToOpen}`).slick("unslick");
//   type = event.target.getAttribute("data-categories") + "-top-slider";
//   type = type.toLocaleLowerCase();
//   var x = document.querySelectorAll(`.${blockThatNeedToOpen}`);
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.querySelector(`.${type}`).style.display = displayStyle;
//   $(`.${type}`).slick({
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     dots: false,
//     fade: true,
//     prevArrow: '<div class="slick-prev"></div>',
//     nextArrow: '<div class="slick-next"></div>',
//     responsive: [
//       {
//         breakpoint: 481,
//         settings: {
//           arrows: false
//         }
//       }
//     ]
//   });
// }


// ie

function changeSlider(evt) {
  var blockThatNeedToOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "blog-slider";
  var button = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "active-button";
  var displayStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "block";
  var i;
  $(".".concat(blockThatNeedToOpen)).slick("unslick");
  type = event.target.getAttribute("data-categories") + "-top-slider";
  type = type.toLocaleLowerCase();
  var x = document.querySelectorAll(".".concat(blockThatNeedToOpen));

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.querySelector(".".concat(type)).style.display = displayStyle;
  $(".".concat(type)).slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    fade: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [{
      breakpoint: 481,
      settings: {
        arrows: false
      }
    }]
  });
}