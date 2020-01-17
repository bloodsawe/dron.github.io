function openSelection(evt, type) {
  var i;
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
