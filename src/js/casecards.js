document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".casecards").length > 0) {
    var dropDown = [];
    for ( let i = 0; i < document.querySelectorAll(".case-filter-block__list").length; i++ ) {
      dropDown.push(document.querySelectorAll(".case-filter-block__list")[i]);
    }
    dropDown.forEach(function(elem, index) {
      elem.addEventListener("click", function(e) {
        let list = document.querySelectorAll(".case-filter-block__list-insert")[ index ];
        if (document.querySelector(".active"))
          document.querySelector(".active").classList.remove("active");
        else list.classList.add("active");
        
      });
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
