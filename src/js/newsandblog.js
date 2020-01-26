function changeSlider(
  evt,
  blockThatNeedToOpen = "blog-slider",
  button = "active-button",
  displayStyle = "block"
) {
  var i;
  $(`.${blockThatNeedToOpen}`).slick("unslick");
  type = event.target.getAttribute("data-categories") + "-slider";
  var x = document.querySelectorAll(`.${blockThatNeedToOpen}`);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.querySelector(`.${type}`).style.display = displayStyle;
  $(`.${type}`).slick({
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
