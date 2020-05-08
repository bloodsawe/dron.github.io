// ie

document.addEventListener("DOMContentLoaded", function () {
  function Dropdown(dropDown) {
    dropDown.forEach(function (elem, index) {
      elem.addEventListener("click", function (e) {
        var list = document.querySelectorAll(".awards__list")[index];
        list.classList.toggle("active");
        var arrow = document.querySelectorAll(".awards__arrow")[index];
        arrow.classList.toggle("rotate");
        ScrollReveal().sync();
      });
    });
  }
  if (document.querySelectorAll(".aboutUs").length > 0) {
    var dropDownTitle = Array.from(document.querySelectorAll(".awards__title"));
    var dropDownArrow = Array.from(document.querySelectorAll(".awards__arrow"));
    Dropdown(dropDownTitle)
    Dropdown(dropDownArrow)
  }
});

