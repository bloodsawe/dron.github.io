
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".aboutUs").length > 0) {
    var blockLeft = document.querySelector(".our-awards .video-description__text").offsetLeft;
    var h1Left = document.querySelector(".our-awards .video-description__text h1").offsetLeft; // console.log(blockLeft, h1Left);

    document.querySelector(".our-awards .video-description__text").style.left = "".concat(blockLeft + h1Left + 10, "px");
  }

  if (document.querySelectorAll(".aboutUs").length > 0) {
    var dropDown = Array.from(document.querySelectorAll(".awards__arrow"));
    dropDown.forEach(function (elem, index) {
      elem.addEventListener("click", function (e) {
        var list = document.querySelectorAll(".awards__list")[index];
        list.classList.toggle("active");
      });
    });
  }
});
