document.addEventListener("DOMContentLoaded", function() {
  if(document.querySelector(".team-page")) {
    document.querySelector(".button").classList.add("active-button");
    document.getElementById("Directors").style.display = "flex";
  }
});


function openSelection(evt) {
  var i;
  type=event.target.getAttribute("data-categories");
  document.querySelector(".active-button").classList.remove("active-button");
  if (evt.target.classList.contains("active-button"))
    evt.target.classList.remove("active-button");
  else evt.target.classList.add("active-button");
  var x = document.getElementsByClassName("block-with-employee");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(type).style.display = "flex";
}
