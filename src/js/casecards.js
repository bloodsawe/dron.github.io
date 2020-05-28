document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".casecards")) {
    //Click function on Filters
    $( ".case-filter-block__item" ).click(function (event) {
      if (!jQuery(event.target).closest("li.case-filter-block__item-insert").length) {
        $('ul.case-filter-block__list-insert').removeClass("active");
        $(this).find('ul.case-filter-block__list-insert').addClass("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".careers-page")) {
    $( ".careers-filter-block__item" ).click(function (event) {
      if (!jQuery(event.target).closest("li.careers-filter-block__item-insert").length) {
        $('ul.careers-filter-block__list-insert').removeClass("active");
        $(this).find('ul.careers-filter-block__list-insert').addClass("active");
      }
    });
  }
}); 

