
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".casecards").length > 0) {
    var dropDown = Array.from(document.querySelectorAll(".case-filter__arrow"));
    console.log('dropDown: ', dropDown);
    dropDown.forEach(function (elem, index) {
      elem.addEventListener("click", function (e) {
        var list = document.querySelectorAll(".case-filter-block__list-insert")[index];
        list.classList.toggle("active");
      });
    });
  }
});
