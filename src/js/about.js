document.addEventListener("DOMContentLoaded", function () {
  // Create function for Dropdown
  function Dropdown(dropDown) {
    dropDown.forEach(function (elem, index) {
      elem.addEventListener("click", function (e) {
        var list = document.querySelectorAll(".awards__list")[index];
        list.classList.toggle("active");
        var arrow = document.querySelectorAll(".awards__arrow")[index];
        arrow.classList.toggle("rotate");
        // Call animation from scrollLibrary.js
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
