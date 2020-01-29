document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".casecards").length > 0) {
    $(".case-filter-block__list").on("click", function(event) {
      if (document.querySelector(".active")) {
        if (
          event.target.parentElement.childNodes[2].classList.contains("active")
        ) {
          event.target.parentElement.childNodes[2].classList.remove("active");
        } else {
          document.querySelector(".active").classList.remove("active");
          event.target.parentElement.childNodes[2].classList.add("active");
        }
      } else {
        event.target.parentElement.childNodes[2].classList.add("active");
      }
    });
  }
  if (document.querySelectorAll(".careers-page").length > 0) {
    var dropDown = [];
    for ( let i = 0; i < document.querySelectorAll(".case-filter-block__list").length; i++ ) {
      dropDown.push(document.querySelectorAll(".case-filter-block__list")[i]);
    }
    dropDown.forEach(function(elem, index) {
      elem.addEventListener("click", function(e) {
        let list = document.querySelectorAll(".case-filter-block__list-insert")[ index ];
        // if (document.querySelector(".active"))
        //   document.querySelector(".active").classList.remove("active");
        list.classList.toggle("active");
      });
    });
  }
});
