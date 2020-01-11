
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".contacts-page").length > 0) {
    
    let cards = Array.from(document.querySelectorAll('.main-offices-list__item'));
    let answ = document.querySelector('.main-callback-answ');

    let lastCard = cards[cards.length-1];

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    let cardX = getCoords(lastCard).left + lastCard.offsetWidth;
    console.log(cardX);
    let cardY = getCoords(lastCard).top + lastCard.offsetHeight;
    console.log(cardY);

    let answX = getCoords(answ).left;
    let answY = getCoords(answ).top;

    if (answX <= cardX && answY <= cardY) {
      document.querySelector('.main-offices').style.paddingBottom = "140px";
    }

  }
});
