
var tabSelect = Array.from(document.querySelectorAll(".select-block__item"));
var prevElem = bufferElem = nextElem = 0;
var animationText = document.querySelector("[data-tab = '".concat(nextElem, "']"));
tabSelect.forEach(function (elem) {
  elem.addEventListener("click", function () {
    prevElem = bufferElem;
    nextElem = elem.getAttribute("data-slick-index");
    bufferElem = nextElem;
    document.querySelector(".collection-scroll__thumb").style.top = "".concat(nextElem * 33.5, "%");
    var animationText = document.querySelector("[data-tab = '".concat(nextElem, "']"));

    if (prevElem < nextElem) {
      animationText.style.animation = "down 1s linear 0s 1 normal";
      setTimeout(function () {
        animationText.style.animation = "";
      }, 1000);
    } else if (prevElem > nextElem) {
      animationText.style.animation = "up 1s linear 0s 1 normal";
      setTimeout(function () {
        animationText.style.animation = "";
      }, 1000);
    }
  });
});





