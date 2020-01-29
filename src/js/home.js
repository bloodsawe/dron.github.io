// document.addEventListener("DOMContentLoaded",function() {
//     if(document.querySelector(".homepage")) {
//         let banner = document.querySelector(".banner-slider__item");
//         banner.style.paddingTop = "120px";

//         let img =Array.from(banner.querySelectorAll("img.down"));
//         img.map((e)=> {
//             e.classList.remove("down")
//         })

//     }
// });

// // anchor
// $(document).ready(function(){
//     $("[href='#anchor']").on("click", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1000);
//     });
// });


// ie

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".homepage")) {  
    var banner = document.querySelector(".banner-slider__item");
    if(window.matchMedia("(min-width: 481px)").matches) {
      banner.style.paddingTop = "120px";
    }
    if(window.matchMedia("(max-width: 480px)").matches) {
        banner.style.paddingTop = "85px";
    }
    

    var img = Array.from(banner.querySelectorAll("img.down"));
    img.map(function (e) {
      e.classList.remove("down");
    });
  }
});
 
// anchor

$(document).ready(function () {
  $("[href='#anchor']").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});