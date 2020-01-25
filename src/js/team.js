document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".team-page")) {
    document.querySelector(".button").classList.add("active-button");
    document.querySelector(".block-with-employee").style.display = "flex";
  }
  if (document.querySelector(".newsandblog")) {
    document
      .querySelector(".filter-block__item")
      .classList.add("active-button");
    document.querySelector(".blog-cards").style.display = "block";
  }
});
function openSelection(
  evt,
  blockThatNeedToOpen = "block-with-employee",
  button = "active-button",
  displayStyle = "flex"
) {
  var i;
  type = event.target.getAttribute("data-categories");
  document.querySelector(`.${button}`).classList.remove(`${button}`);
  if (evt.target.classList.contains(`${button}`))
    evt.target.classList.remove(`${button}`);
  else evt.target.classList.add(`${button}`);
  var x = document.getElementsByClassName(`${blockThatNeedToOpen}`);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(type).style.display = displayStyle;
  ScrollReveal().sync();
}
