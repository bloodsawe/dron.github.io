document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".casecards, .careers-page").length > 0) {
    var dropDown = Array.from(
      document.querySelectorAll(".case-filter-block__list")
    );
    // console.log('dropDown: ', dropDown);
    dropDown.forEach(function(elem, index) {
      elem.addEventListener("click", function(e) {
        let list = document.querySelectorAll(".case-filter-block__list-insert")[
          index
        ];
        if (document.querySelector(".active"))
          document.querySelector(".active").classList.remove("active");
        list.classList.toggle("active");
      });
    });
  }
});
