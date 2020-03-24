// anchor

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".contacts-page").length > 0) {
    var getCoords = function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    };
    var cards = Array.from(document.querySelectorAll('.main-offices-list__item-card'));
    var answ = document.querySelector('.main-callback-answ');
    var lastCard = cards[cards.length - 1];
    console.log(lastCard)
    var cardX = getCoords(lastCard).left + lastCard.offsetWidth;
    var cardY = getCoords(lastCard).top + lastCard.offsetHeight;
    var answX = getCoords(answ).left;
    var answY = getCoords(answ).top;

    if (answX <= cardX && answY <= cardY) {
      document.querySelector('.main-offices').style.paddingBottom = "140px";
    }
  }
});


