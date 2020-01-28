// document.addEventListener("DOMContentLoaded", function() {
//   if (document.querySelectorAll(".aboutUs").length > 0) {
//     let dropDown = Array.from(document.querySelectorAll(".awards__arrow"));
//     dropDown.forEach(function(elem, index) {
//       elem.addEventListener("click", function(e) {
//         let list = document.querySelectorAll(".awards__list")[index];
//         list.classList.toggle("active");

//         let arrow = document.querySelectorAll(".awards__arrow")[index];
//         arrow.classList.toggle("rotate");
//         ScrollReveal().sync();
//       });
//     });
//     // ScrollReveal().sync();
//   }
// });


// ie

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".aboutUs").length > 0) {
    var dropDown = Array.from(document.querySelectorAll(".awards__arrow"));
    dropDown.forEach(function (elem, index) {
      elem.addEventListener("click", function (e) {
        var list = document.querySelectorAll(".awards__list")[index];
        list.classList.toggle("active");
        var arrow = document.querySelectorAll(".awards__arrow")[index];
        arrow.classList.toggle("rotate");
        ScrollReveal().sync();
      });
    }); // ScrollReveal().sync();
  }
});