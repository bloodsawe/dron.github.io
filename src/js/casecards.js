// document.addEventListener("DOMContentLoaded", function() {
//   if (document.querySelectorAll(".casecards").length > 0) {
//     $(".case-filter-block__list").on("click", function(event) {
//       if (document.querySelector(".active")) {
//         if (
//           event.target.parentElement.childNodes[2].classList.contains("active")
//         ) {
//           event.target.parentElement.childNodes[2].classList.remove("active");
//         } else {
//           document.querySelector(".active").classList.remove("active");
//           event.target.parentElement.childNodes[2].classList.add("active");
//         }
//       } else {
//         event.target.parentElement.childNodes[2].classList.add("active");
//       }
//     });
//   }
//   if (document.querySelectorAll(".careers-page").length > 0) {
//     var dropDown = [];
//     for ( let i = 0; i < document.querySelectorAll(".careers-filter-block__list").length; i++ ) {
//       dropDown.push(document.querySelectorAll(".careers-filter-block__list")[i]);
//     }
//     dropDown.forEach(function(elem, index) {
//       elem.addEventListener("click", function(e) {
//         let list = document.querySelectorAll(".careers-filter-block__list-insert")[ index ];
//         list.classList.toggle("active");
//       });
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelectorAll(".casecards").length > 0) {
      var dropDown = [];
      for (
        let i = 0;
        i < document.querySelectorAll(".case-filter-block__list").length;
        i++
      ) {
        dropDown.push(document.querySelectorAll(".case-filter-block__list")[i]);
      }
      dropDown.forEach(function(elem, index) {
        elem.addEventListener("click", function(e) {
          let list = document.querySelectorAll(".case-filter-block__list-insert")[
            index
          ];
          if (document.querySelector(".active"))
            document.querySelector(".active").classList.remove("active");
          else list.classList.add("active");
        });
      });
      // $(".case-filter-block__list").on("click", function(event) {
      //   if (document.querySelector(".active")) {
      //     if (
      //       event.target.parentElement.childNodes[2].classList.contains("active")
      //     ) {
      //       event.target.parentElement.childNodes[2].classList.remove("active");
      //     } else {
      //       document.querySelector(".active").classList.remove("active");
      //       event.target.parentElement.childNodes[2].classList.add("active");
      //     }
      //   } else {
      //     event.target.parentElement.childNodes[2].classList.add("active");
      //   }
      // });
    }
    if (document.querySelectorAll(".careers-page").length > 0) {
      var dropDown = [];
      for (
        let i = 0;
        i < document.querySelectorAll(".case-filter-block__list").length;
        i++
      ) {
        dropDown.push(document.querySelectorAll(".case-filter-block__list")[i]);
      }
      dropDown.forEach(function(elem, index) {
        elem.addEventListener("click", function(e) {
          let list = document.querySelectorAll(".case-filter-block__list-insert")[
            index
          ];
          // if (document.querySelector(".active"))
          //   document.querySelector(".active").classList.remove("active");
          list.classList.toggle("active");
        });
      });
    }
});

document.addEventListener("DOMContentLoaded", function() {
  if(document.querySelectorAll(".casecards").length > 0) {
    // #### FILTER FEATURE (Case Studies)
    if($("body").hasClass("page-template-page-casestudies-php") || $("main").hasClass("casecards")){
      var mbtnContainer = document.getElementById("filter_1");
      var mbtns = mbtnContainer.getElementsByClassName("case-filter-block__item-insert");
      for (var i = 0; i < mbtns.length; i++) {
        mbtns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("filter1_active");
          current[0].className = current[0].className.replace(" filter1_active", "");
          this.className += " filter1_active";
        });
      }


      var sbtnContainer = document.getElementById("filter_2");
      var sbtns = sbtnContainer.getElementsByClassName("case-filter-block__item-insert");
      for (var i = 0; i < sbtns.length; i++) {
        sbtns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("filter2_active");
          current[0].className = current[0].className.replace(" filter2_active", "");
          this.className += " filter2_active";
        });
      }

      var sbtnContainer = document.getElementById("filter_3");
      var sbtns = sbtnContainer.getElementsByClassName("case-filter-block__item-insert");
      for (var i = 0; i < sbtns.length; i++) {
        sbtns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("filter3_active");
          current[0].className = current[0].className.replace(" filter3_active", "");
          this.className += " filter3_active";
        });
      }

      var filter = [];

      function startFilter() {
        jQuery('#filter_list .filterDiv').each(function(index) {
          jQuery(this).addClass('show');
        });
      }
      startFilter();

      function updateFilter() {
        var filter = [];
        filter.push(jQuery('.case-filter #filter_1 .filter1_active').data("filter1"));
        filter.push(jQuery('.case-filter #filter_2 .filter2_active').data("filter2"));
        filter.push(jQuery('.case-filter #filter_3 .filter3_active').data("filter3"));
        console.log(filter[0], filter[1] , filter[2]);
        jQuery('#filter_list .filterDiv').each(function(index) {
          jQuery(this).removeClass('show');
          if((filter[0] === jQuery(this).data("filter1") && filter[1] === jQuery(this).data("filter2") && filter[2] === jQuery(this).data("filter3")) ||
              (filter[0] === 'all' && filter[1] === jQuery(this).data("filter2") && filter[2] === jQuery(this).data("filter3")) ||
              (filter[0] === jQuery(this).data("filter1") && filter[1] === 'all' && filter[2] === jQuery(this).data("filter3")) ||
              (filter[0] === jQuery(this).data("filter1") && filter[1] === jQuery(this).data("filter2") && filter[2] === 'all') ||
              (filter[0] === 'all' && filter[1] === 'all' && filter[2] === jQuery(this).data("filter3")) ||
              (filter[0] === jQuery(this).data("filter1") && filter[1] === 'all' && filter[2] === 'all') ||
              (filter[0] === 'all' && filter[1] === jQuery(this).data("filter2") && filter[2] === 'all') ||
              (filter[0] === 'all' && filter[1] === 'all' && filter[2] === 'all'))
          {

            jQuery(this).addClass('show');
          }
        });
      }

      jQuery('.case-filter #filter_1 .case-filter-block__item-insert').on( "click", function() {
        var filter = [];
        filter.push(jQuery('.case-filter #filter_1 .filter1_active').data("filter1"));
        filter.push(jQuery('.case-filter #filter_2 .filter2_active').data("filter2"));
        filter.push(jQuery('.case-filter #filter_3 .filter3_active').data("filter3"));
        // console.log(filter);
        let active_text = $(".filter1_active").text(),
            image = $(".case-filter__arrow"),
            image_src = image[0].src;
        $(".case-filter_title1").html(active_text + "<img class=\"case-filter__arrow\" src="+ image_src +">");
        updateFilter();
      });

      jQuery('.case-filter #filter_2 .case-filter-block__item-insert').on( "click", function() {
        var filter = [];
        filter.push(jQuery('.case-filter #filter_1 .filter1_active').data("filter1"));
        filter.push(jQuery('.case-filter #filter_2 .filter2_active').data("filter2"));
        filter.push(jQuery('.case-filter #filter_3 .filter3_active').data("filter3"));
        // console.log(filter);
        let active_text = $(".filter2_active").text(),
            image = $(".case-filter__arrow"),
            image_src = image[0].src;
        $(".case-filter_title2").html(active_text + "<img class=\"case-filter__arrow\" src="+ image_src +">");
        updateFilter();
      });
      jQuery('.case-filter #filter_3 .case-filter-block__item-insert').on( "click", function() {
        var filter = [];
        filter.push(jQuery('.case-filter #filter_1 .filter1_active').data("filter1"));
        filter.push(jQuery('.case-filter #filter_2 .filter2_active').data("filter2"));
        filter.push(jQuery('.case-filter #filter_3 .filter3_active').data("filter3"));
        // console.log(filter);
        let active_text = $(".filter3_active").text(),
            image = $(".case-filter__arrow"),
            image_src = image[0].src;
        $(".case-filter_title3").html(active_text + "<img class=\"case-filter__arrow\" src="+ image_src +">");
        updateFilter();
      });
    }

    // #### Click function on Filters
    $( ".case-filter-block__item" ).click(function (event) {
      if (!jQuery(event.target).closest("li.case-filter-block__item-insert").length) {
        $('ul.case-filter-block__list-insert').removeClass("active");
        $(this).find('ul.case-filter-block__list-insert').addClass("active");
      }
    });
    $(".case-filter-block__item-insert").click(function () {
    $(this).parent().removeClass("active")
    })
  }

  if (document.querySelectorAll(".careers-page").length > 0) {
    // #### FILTER FEATURE (Careers)
    if($("body").hasClass("page-template-page-careers-php") || $("main").hasClass('careers-page')){
      var mbtnContainer = document.getElementById("filter_careers");
      var mbtns = mbtnContainer.getElementsByClassName("careers-filter-block__item-insert");
      for (var i = 0; i < mbtns.length; i++) {
        mbtns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("filterCareers_active");
          current[0].className = current[0].className.replace(" filterCareers_active", "");
          this.className += " filterCareers_active";
        });
      }


      var filter = [];

      function startFilter() {
        jQuery('.works .works-card').each(function(index) {
          jQuery(this).addClass('show');
        });
      }
      startFilter();

      function updateFilter() {
        var filter = [];
        filter.push(jQuery('#filter_careers .filterCareers_active').data("careers1"));
        console.log(filter[0]);
        jQuery('.works .works-card').each(function(index) {
          jQuery(this).removeClass('show');
          if((filter[0] === jQuery(this).data("careers1")) || (filter[0] === 'all'))
          {
            jQuery(this).addClass('show');
          }
        });
      }

      jQuery(' #filter_careers .careers-filter-block__item-insert ').on( "click", function() {
        var filter = [];
        filter.push(jQuery('#filter_careers .filterCareers_active').data("careers1"));
        // console.log(filter);
        let active_text = $(".filterCareers_active").text(),
            image = $(".careers-filter__arrow"),
            image_src = image[0].src;
        $(".careers-filter-block__list").html(active_text + "<img class=\"careers-filter__arrow\" src="+ image_src +">");
        updateFilter();
      });
    }

    $("#filter_careers").click(function () {
      $(this).find("ul.careers-filter-block__list-insert").toggleClass("active");
    })
  }

})