

// document.addEventListener("DOMContentLoaded", function () {
//   if (document.querySelectorAll(".contacts-page").length > 0) {
//     var getCoords = function getCoords(elem) {
//       var box = elem.getBoundingClientRect();
//       return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//       };
//     };

//     var cards = Array.from(document.querySelectorAll('.main-offices-list__item'));
//     var answ = document.querySelector('.main-callback-answ');
//     var lastCard = cards[cards.length - 1];
//     var cardX = getCoords(lastCard).left + lastCard.offsetWidth;
//     console.log(cardX);
//     var cardY = getCoords(lastCard).top + lastCard.offsetHeight;
//     console.log(cardY);
//     var answX = getCoords(answ).left;
//     var answY = getCoords(answ).top;

//     if (answX <= cardX && answY <= cardY) {
//       document.querySelector('.main-offices').style.paddingBottom = "140px";
//     }
//   }
// });


// ie


document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".homepage")) {
    var banner = document.querySelector(".banner-slider__item");
    banner.style.paddingTop = "120px";
    var img = Array.from(banner.querySelectorAll("img.down"));
    img.map(function (e) {
      e.classList.remove("down");
    });
  }
}); // anchor

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